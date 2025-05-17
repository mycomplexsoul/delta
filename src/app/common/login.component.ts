import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";

import { AlertService } from "./alert.service";
import { AuthenticationService } from "./authentication.service";

import { SyncAPI } from "./sync.api";

@Component({
    templateUrl: "./login.template.html", styleUrls: ["./login.css"],
    standalone: false
})
export class LoginComponent implements OnInit {
  loginForm: UntypedFormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private sync: SyncAPI
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(["/"]);
    }
    this.sync = sync;
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";

    // look if the backend has cfg
    this.doesServerHaveConfig().then(answer => {
      if (!answer.hasCFG) {
        this.router.navigate(["/cfg"]);
      }
    });
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

  doesServerHaveConfig() {
    return this.sync.get("/metadata");
  }
}
