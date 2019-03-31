import { Component, OnInit } from '@angular/core';

// services
import { LoginService } from './login.service';

@Component({
    selector: 'menu',
    templateUrl: './menu.template.html',
    styleUrls: ['./menu.css'],
    providers: [
        LoginService
    ]
})
export class MenuComponent implements OnInit {
    public viewData: {
        username: string
    } = {
        username: 'anon-default'
    };
    public services: {
        loginService: LoginService
    } = {
        loginService: null
    };

    constructor(loginService: LoginService) {
        this.services.loginService = loginService;
    }

    ngOnInit(){
        const isLoggedin = this.services.loginService.isLoggedIn();
        this.viewData.username = isLoggedin ? this.services.loginService.getUsername() : 'no-user';
    }
}
