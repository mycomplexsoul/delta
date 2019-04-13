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
  providers: [LoginService]
})
export class MenuComponent implements OnInit {
  public viewData: {
    username: string;
  } = {
    username: "anon-default"
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

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private loginService: LoginService
  ) {
    this.authenticationService.currentUser.subscribe(
      x => (this.currentUser = x)
    );
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
  }
}
