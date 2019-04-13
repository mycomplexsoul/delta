import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";

import { AlertService } from "./alert.service";
import { AuthenticationService } from "./authentication.service";

@Component({ templateUrl: "./login.template.html" })
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(["/"]);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService
      .login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        }
      );
  }
}
/* import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Title } from "@angular/platform-browser";
// types

// services
import { SyncAPI } from "../common/sync.api";
import { LoginService } from "./login.service";

@Component({
    selector: "login",
    templateUrl: "./login.template.html",
    providers: [LoginService]
})
export class LoginComponent implements OnInit {
    private user: string = "anon";
    public viewData: {
        error: boolean;
        errorMessage: string;
    } = {
        error: true,
        errorMessage: ""
    };
    public services: {
        login: LoginService;
    } = {
        login: null
    };
    public sync: SyncAPI;
    public model: {
        iterable: number;
        year: number;
        month: number;
    } = {
        iterable: 0,
        year: 2017,
        month: 12
    };
    @Output() loginSuccess: EventEmitter<any> = new EventEmitter();

    constructor(
        loginService: LoginService,
        private titleService: Title,
        syncService: SyncAPI
    ) {
        this.services.login = loginService;
        titleService.setTitle("Login");
        this.sync = syncService;
    }

    ngOnInit() {}

    submit(loginForm: NgForm) {
        const { fUsername, fPassword } = loginForm.value;

        if (!fUsername || !fPassword) {
            this.viewData.error = true;
            this.viewData.errorMessage = "Username and Password are required";
            return false;
        }

        // Send to server
        this.sync
            .post("/api/login", {
                fUsername,
                fPassword
            })
            .then(response => {
                if (response.operationResult) {
                    this.services.login.setIdentity(response.identity);
                    this.loginSuccess.emit(response.identity);
                    // window.location.href = '/tasks'; // navigate to initial app
                } else {
                    this.viewData.error = true;
                    this.viewData.errorMessage = response.message;
                }
            })
            .catch(err => {
                this.viewData.error = true;
                this.viewData.errorMessage = err.message;
            });
    }
}
*/
