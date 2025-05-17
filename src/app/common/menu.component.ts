import { Component, OnInit } from "@angular/core";

// services
import { LoginService } from "./login.service";

import { Router } from "@angular/router";

import { User } from "./user-login.model";
import { AuthenticationService } from "./authentication.service";

@Component({
    selector: "menu",
    templateUrl: "./menu.template.html",
    styleUrls: ["./menu.css"],
    providers: [LoginService],
    standalone: false
})
export class MenuComponent implements OnInit {
  public viewData: {
    username: string;
    currentTime: Date;
    isOpen: boolean;
  } = {
    username: "anon-default",
    currentTime: null,
    isOpen: false
  };
  public services: {
    loginService: LoginService;
  } = {
    loginService: null
  };
  private metadata = {
    appVersion: ""
  };
  currentUser: User;
  timeInterval: number;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private loginService: LoginService
  ) {
    this.authenticationService.currentUser.subscribe(x => {
      this.currentUser = x;
      if (this.currentUser) {
        this.viewData.username = this.currentUser.username;
      }
    });
    this.services.loginService = loginService;
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(["/login"]);
  }

  /*constructor(loginService: LoginService) {
    this.services.loginService = loginService;
  }*/

  ngOnInit() {
    const isLoggedin: boolean = !!this.authenticationService.currentUserValue;
    this.viewData.username = isLoggedin
      ? this.authenticationService.currentUserValue.username
      : "no-user";
    fetch("/metadata")
      .then(response => {
        return response.json();
      })
      .then(metadata => {
        this.metadata = metadata;
      });

    this.viewData.currentTime = new Date();
    this.timeInterval = window.setInterval(
      () => (this.viewData.currentTime = new Date()),
      1000
    );
  }

  handleClick() {
    this.viewData.isOpen = false;
  }
}
