import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { first } from "rxjs/operators";

import { User } from "./user-login.model";
import { UserService } from "./user-login.service";
import { AuthenticationService } from "./authentication.service";
import { TextToSpeech } from "./speechRecognition";

@Component({ templateUrl: "./home.template.html" })
export class HomeComponent implements OnInit, OnDestroy {
  currentUser: User;
  currentUserSubscription: Subscription;
  users: User[] = [];
  viewData = {
    device: <any>{},
    battery: {
      level: null
    },
    localStorageUsage: {
      details: null,
      totalInKB: null
    },
    angularVersion: null,
  };
  model = {
    textToRead: null
  };
  speechInstance = new TextToSpeech();

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService
  ) {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(
      user => {
        this.currentUser = user;
      }
    );
    this.viewData.device = this.getDeviceInformation();
  }

  async ngOnInit() {
    this.loadAllUsers();
    this.viewData.battery = await this.getBattery();
    this.viewData.localStorageUsage = this.getLocalStorageUsage();
    this.viewData.angularVersion = this.getAngularVersion();
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }

  deleteUser(id: number) {
    this.userService
      .delete(id)
      .pipe(first())
      .subscribe(() => {
        this.loadAllUsers();
      });
  }

  private loadAllUsers() {
    this.userService
      .getAll()
      .pipe(first())
      .subscribe(users => {
        this.users = users;
      });
  }

  getDeviceInformation() {
    return navigator;
  }

  async getBattery() {
    return navigator["getBattery"] && navigator["getBattery"]();
  }

  getLocalStorageUsage() {
    let used = 0,
      item = null;
    let data = { details: [], total: 0, totalInKB: null };

    for (item in localStorage) {
      if (!localStorage.hasOwnProperty(item)) {
        continue;
      }
      used = (localStorage[item].length + item.length) * 2;
      data.total += used;

      data.details.push({
        item,
        used,
        usedInKB: (used / 1024).toFixed(2)
      });
    }

    data.totalInKB = (data.total / 1024).toFixed(2);
    return data;
  }

  readText() {
    if (this.model.textToRead) {
      this.speechInstance.textToSpeechVoice(this.model.textToRead);
    }
  }

  getAngularVersion() {
    const element = document.querySelector('app-root');
    return element ? element.getAttribute('ng-version') : null;
  }
  
}
