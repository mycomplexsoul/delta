import { Component, OnInit, Output, EventEmitter } from "@angular/core";
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
