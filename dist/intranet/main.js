(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<menu></menu>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'intranet';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _task_tasks_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./task/tasks.component */ "./src/app/task/tasks.component.ts");
/* harmony import */ var _common_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/menu.component */ "./src/app/common/menu.component.ts");
/* harmony import */ var _money_account_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./money/account.component */ "./src/app/money/account.component.ts");
/* harmony import */ var _money_movement_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./money/movement.component */ "./src/app/money/movement.component.ts");
/* harmony import */ var _money_balance_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./money/balance.component */ "./src/app/money/balance.component.ts");
/* harmony import */ var _money_rebuild_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./money/rebuild.component */ "./src/app/money/rebuild.component.ts");
/* harmony import */ var _lasttime_lasttime_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lasttime/lasttime.component */ "./src/app/lasttime/lasttime.component.ts");
/* harmony import */ var _multimedia_multimedia_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./multimedia/multimedia.component */ "./src/app/multimedia/multimedia.component.ts");
/* harmony import */ var _common_storage_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./common/storage.service */ "./src/app/common/storage.service.ts");
/* harmony import */ var _money_entry_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./money/entry.service */ "./src/app/money/entry.service.ts");
/* harmony import */ var _common_date_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./common/date.common */ "./src/app/common/date.common.ts");
/* harmony import */ var _common_comboItem_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./common/comboItem.component */ "./src/app/common/comboItem.component.ts");
/* harmony import */ var _common_drinkwater_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./common/drinkwater.component */ "./src/app/common/drinkwater.component.ts");
/* harmony import */ var _common_sync_api__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./common/sync.api */ "./src/app/common/sync.api.ts");
/* harmony import */ var _common_utils_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./common/utils.common */ "./src/app/common/utils.common.ts");
/* harmony import */ var _common_login_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./common/login.component */ "./src/app/common/login.component.ts");
/* harmony import */ var _internal_type_generator_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./internal/type-generator.component */ "./src/app/internal/type-generator.component.ts");
























var appRoutes = [
    // { path: 'crisis-center', component: CrisisListComponent },
    // { path: 'hero/:id',      component: HeroDetailComponent },
    {
        path: 'tasks',
        component: _task_tasks_component__WEBPACK_IMPORTED_MODULE_7__["TasksComponent"],
        data: { title: 'Tasks' }
    }, {
        path: 'account',
        component: _money_account_component__WEBPACK_IMPORTED_MODULE_9__["AccountComponent"],
        data: { title: 'Accounts' }
    }, {
        path: 'movement',
        component: _money_movement_component__WEBPACK_IMPORTED_MODULE_10__["MovementComponent"],
        data: { title: 'Movements' }
    }, {
        path: 'balance',
        component: _money_balance_component__WEBPACK_IMPORTED_MODULE_11__["BalanceComponent"],
        data: { title: 'Balance' }
    }, {
        path: 'rebuild',
        component: _money_rebuild_component__WEBPACK_IMPORTED_MODULE_12__["RebuildComponent"],
        data: { title: 'Rebuild' }
    }, {
        path: 'login',
        component: _common_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"],
        data: { title: 'Login' }
    }, {
        path: 'lasttime',
        component: _lasttime_lasttime_component__WEBPACK_IMPORTED_MODULE_13__["LastTimeComponent"],
        data: { title: 'Last Time' }
    }, {
        path: 'multimedia',
        component: _multimedia_multimedia_component__WEBPACK_IMPORTED_MODULE_14__["MultimediaComponent"],
        data: { title: 'Multimedia' }
    }, {
        path: 'type-generator',
        component: _internal_type_generator_component__WEBPACK_IMPORTED_MODULE_23__["TypeGeneratorComponent"],
        data: { title: 'Type Generator' }
    }, {
        path: '',
        redirectTo: '/tasks',
        pathMatch: 'full'
    }
    // { path: '**', component: PageNotFoundComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes)
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _task_tasks_component__WEBPACK_IMPORTED_MODULE_7__["TasksComponent"],
                _money_account_component__WEBPACK_IMPORTED_MODULE_9__["AccountComponent"],
                _money_movement_component__WEBPACK_IMPORTED_MODULE_10__["MovementComponent"],
                _money_balance_component__WEBPACK_IMPORTED_MODULE_11__["BalanceComponent"],
                _common_comboItem_component__WEBPACK_IMPORTED_MODULE_18__["ComboItemComponent"],
                _common_drinkwater_component__WEBPACK_IMPORTED_MODULE_19__["DrinkWaterComponent"],
                _common_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"],
                _money_rebuild_component__WEBPACK_IMPORTED_MODULE_12__["RebuildComponent"],
                _common_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"],
                _lasttime_lasttime_component__WEBPACK_IMPORTED_MODULE_13__["LastTimeComponent"],
                _multimedia_multimedia_component__WEBPACK_IMPORTED_MODULE_14__["MultimediaComponent"],
                _internal_type_generator_component__WEBPACK_IMPORTED_MODULE_23__["TypeGeneratorComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            providers: [
                _common_date_common__WEBPACK_IMPORTED_MODULE_17__["DateCommon"],
                _common_storage_service__WEBPACK_IMPORTED_MODULE_15__["StorageService"],
                _money_entry_service__WEBPACK_IMPORTED_MODULE_16__["EntryService"],
                _common_sync_api__WEBPACK_IMPORTED_MODULE_20__["SyncAPI"],
                _common_utils_common__WEBPACK_IMPORTED_MODULE_21__["UtilsCommon"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/comboItem.component.ts":
/*!***********************************************!*\
  !*** ./src/app/common/comboItem.component.ts ***!
  \***********************************************/
/*! exports provided: ComboItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComboItemComponent", function() { return ComboItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ComboItemComponent = /** @class */ (function () {
    function ComboItemComponent() {
        this.viewAddForm = false;
        this.addLabel = '+';
        this.inputLabel = 'New Item';
        this.buttonLabel = 'Add Item';
    }
    /* TODO: template does not have custom name/id */
    // TODO: input needs to be focused when displayed
    // TODO: add optional validation for duplicated item value (needs a reference list)
    ComboItemComponent.prototype.toggleView = function () {
        this.viewAddForm = !this.viewAddForm;
        this.addLabel = this.viewAddForm ? '-' : '+';
        return false;
    };
    ComboItemComponent.prototype.onNewItem = function (value) {
        this.addNewItem(value);
        this.value = '';
        return this.toggleView();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], ComboItemComponent.prototype, "addNewItem", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ComboItemComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ComboItemComponent.prototype, "inputLabel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ComboItemComponent.prototype, "buttonLabel", void 0);
    ComboItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'combo-item',
            template: __webpack_require__(/*! ./comboItem.template.html */ "./src/app/common/comboItem.template.html"),
            providers: []
        })
    ], ComboItemComponent);
    return ComboItemComponent;
}());



/***/ }),

/***/ "./src/app/common/comboItem.template.html":
/*!************************************************!*\
  !*** ./src/app/common/comboItem.template.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"toggleView()\" title=\"Click to add an item to this list and select it\">{{addLabel}}</button>\r\n\r\n<div class=\"combo-item-container\" *ngIf=\"viewAddForm\">\r\n    <label for=\"{{name}}\">{{inputLabel}}</label>\r\n    <input type=\"text\" name=\"{{name}}\" id=\"{{name}}\" [(ngModel)]=\"value\"\r\n        (keydown.enter)=\"onNewItem(value)\" autofocus>\r\n    <button (click)=\"onNewItem(value)\" [disabled]=\"!value\">{{buttonLabel}}</button>\r\n</div>"

/***/ }),

/***/ "./src/app/common/date.common.ts":
/*!***************************************!*\
  !*** ./src/app/common/date.common.ts ***!
  \***************************************/
/*! exports provided: DateCommon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateCommon", function() { return DateCommon; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DateCommon = /** @class */ (function () {
    function DateCommon() {
    }
    DateCommon.prototype.elapsedTime = function (date1, date2) {
        if (date1 && date2) {
            return Math.floor(Math.abs(date1.getTime() - date2.getTime()) / 1000);
        }
        return 0;
    };
    DateCommon.prototype.dateOnly = function (base) {
        if (base) {
            return new Date(base.getFullYear(), base.getMonth(), base.getDate(), 0, 0, 0);
        }
        var newDate = new Date();
        return new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate(), 0, 0, 0);
    };
    DateCommon.prototype.addDays = function (base, days) {
        return new Date((base.getTime() + (days * 86400000)));
    };
    DateCommon.prototype.newDateUpToSeconds = function () {
        return new Date(Math.floor((new Date()).getTime() / 1000) * 1000);
    };
    DateCommon = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], DateCommon);
    return DateCommon;
}());



/***/ }),

/***/ "./src/app/common/drinkwater.component.ts":
/*!************************************************!*\
  !*** ./src/app/common/drinkwater.component.ts ***!
  \************************************************/
/*! exports provided: DrinkWaterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinkWaterComponent", function() { return DrinkWaterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DrinkWaterComponent = /** @class */ (function () {
    function DrinkWaterComponent() {
        this.count = 0;
        this.intervalRef = 0;
        this.notifyEnabled = false;
        this.startNotification();
    }
    DrinkWaterComponent.prototype.notification = function (data) {
        var not = window["Notification"];
        if (not && not.permission !== "denied") {
            not.requestPermission(function (status) {
                var n = new not(data.title || 'Tasks', {
                    body: data.body,
                    icon: data.icon || 'favicon.ico' // optional
                });
            });
        }
    };
    DrinkWaterComponent.prototype.addOne = function () {
        this.count++;
    };
    DrinkWaterComponent.prototype.stopNotification = function () {
        window.clearInterval(this.intervalRef);
        this.intervalRef = 0;
        this.notifyEnabled = false;
    };
    DrinkWaterComponent.prototype.startNotification = function () {
        var min = 30;
        var notify = this.notification;
        this.notifyEnabled = true;
        this.intervalRef = window.setInterval(function () {
            notify({
                title: 'Drink Water',
                body: 'Hey! drink some water man'
            });
        }, min * 60 * 1000);
    };
    DrinkWaterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'drink-water',
            template: __webpack_require__(/*! ./drinkwater.template.html */ "./src/app/common/drinkwater.template.html"),
            providers: []
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DrinkWaterComponent);
    return DrinkWaterComponent;
}());



/***/ }),

/***/ "./src/app/common/drinkwater.template.html":
/*!*************************************************!*\
  !*** ./src/app/common/drinkwater.template.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"drink-water-widget\">\r\n    <span>Water Count: {{count}}</span>\r\n    <button *ngIf=\"notifyEnabled\" (click)=\"addOne()\" title=\"Click to add one to current count\">+1</button>\r\n    <button *ngIf=\"notifyEnabled\" (click)=\"stopNotification()\" title=\"Click to stop notifying\">stop</button>\r\n    <button *ngIf=\"!notifyEnabled\" (click)=\"startNotification()\" title=\"Click to start notifying\">start</button>\r\n</span>\r\n"

/***/ }),

/***/ "./src/app/common/login.component.ts":
/*!*******************************************!*\
  !*** ./src/app/common/login.component.ts ***!
  \*******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _common_sync_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/sync.api */ "./src/app/common/sync.api.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.service */ "./src/app/common/login.service.ts");




// types
// services

var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, titleService, syncService) {
        this.titleService = titleService;
        this.user = 'anon';
        this.viewData = {
            error: true,
            errorMessage: ''
        };
        this.services = {
            login: null
        };
        this.model = {
            iterable: 0,
            year: 2017,
            month: 12
        };
        this.services.login = loginService;
        titleService.setTitle('Login');
        this.sync = syncService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.submit = function (loginForm) {
        var _this = this;
        var _a = loginForm.value, fUsername = _a.fUsername, fPassword = _a.fPassword;
        if (!fUsername || !fPassword) {
            this.viewData.error = true;
            this.viewData.errorMessage = 'Username and Password are required';
            return false;
        }
        // Send to server
        this.sync.post('/api/login', {
            fUsername: fUsername,
            fPassword: fPassword
        }).then(function (response) {
            if (response.operationResult) {
                _this.services.login.setIdentity(response.identity);
            }
            else {
                _this.viewData.error = true;
                _this.viewData.errorMessage = response.message;
            }
        }).catch(function (err) {
            _this.viewData.error = true;
            _this.viewData.errorMessage = err.message;
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'login',
            template: __webpack_require__(/*! ./login.template.html */ "./src/app/common/login.template.html"),
            providers: [
                _login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _common_sync_api__WEBPACK_IMPORTED_MODULE_3__["SyncAPI"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/common/login.service.ts":
/*!*****************************************!*\
  !*** ./src/app/common/login.service.ts ***!
  \*****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _common_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/storage.service */ "./src/app/common/storage.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var LoginService = /** @class */ (function () {
    function LoginService(storage) {
        this.storage = null;
        this.config = {
            storageKey: 'login',
            defaultUser: 'anon',
            api: {
                list: '/api/login'
            }
        };
        this.identity = {
            auth_token: null,
            user: null,
            email: null
        };
        this.storage = storage;
    }
    LoginService.prototype.setIdentity = function (identity) {
        this.identity = identity; // { auth_token, user, email }
    };
    LoginService.prototype.getUsername = function () {
        return this.identity.user;
    };
    LoginService.prototype.isLoggedIn = function () {
        return !!this.identity.user;
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/common/login.template.html":
/*!********************************************!*\
  !*** ./src/app/common/login.template.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #loginForm=\"ngForm\" (ngSubmit)=\"submit(loginForm)\">\r\n    <div class=\"login\">\r\n        <input type=\"text\" id=\"fUsername\" name=\"fUsername\" ngModel />\r\n        <input type=\"password\" id=\"fPassword\" name=\"fPassword\" ngModel />\r\n        <input type=\"submit\" value=\"Login\" />\r\n        <div id=\"messages\" *ngIf=\"viewData.error\">{{ viewData.errorMessage }}</div>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "./src/app/common/menu.component.ts":
/*!******************************************!*\
  !*** ./src/app/common/menu.component.ts ***!
  \******************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


//import { BalanceService } from './balance.service';
var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.user = 'anon';
        this.viewData = {
            user: 'anon'
        };
        this.services = {};
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'menu',
            template: __webpack_require__(/*! ./menu.template.html */ "./src/app/common/menu.template.html"),
            providers: [
            //BalanceService
            ],
            styles: [__webpack_require__(/*! ./menu.css */ "./src/app/common/menu.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/common/menu.css":
/*!*********************************!*\
  !*** ./src/app/common/menu.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-container ul {\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.menu-container ul li {\r\n    display: inline;\r\n}\r\n\r\n.menu-container ul li a {\r\n    text-decoration: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL21lbnUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL21lbnUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUtY29udGFpbmVyIHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ubWVudS1jb250YWluZXIgdWwgbGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcblxyXG4ubWVudS1jb250YWluZXIgdWwgbGkgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/common/menu.template.html":
/*!*******************************************!*\
  !*** ./src/app/common/menu.template.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"menu-container\">\r\n    <ul>\r\n        <li><a routerLink=\"tasks\" href=\"/tasks\">Tasks</a> | </li>\r\n        <li><a routerLink=\"movement\" href=\"/movement\">Movements</a> | </li>\r\n        <li><a routerLink=\"balance\" href=\"/balance\">Balance</a> | </li>\r\n        <li><a routerLink=\"rebuild\" href=\"/rebuild\">Balance Rebuild</a> | </li>\r\n        <li><a routerLink=\"lasttime\" href=\"/lasttime\">Last Time</a> | </li>\r\n        <li><a routerLink=\"multimedia\" href=\"/multimedia\">Multimedia</a> | </li>\r\n        <li><drink-water></drink-water></li>\r\n    </ul>\r\n</div>"

/***/ }),

/***/ "./src/app/common/storage.service.ts":
/*!*******************************************!*\
  !*** ./src/app/common/storage.service.ts ***!
  \*******************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StorageService = /** @class */ (function () {
    function StorageService() {
    }
    StorageService.prototype.get = function (key) {
        return localStorage.getItem(key);
    };
    StorageService.prototype.set = function (key, value) {
        localStorage.setItem(key, value);
    };
    StorageService.prototype.getObject = function (key) {
        return JSON.parse(localStorage.getItem(key));
    };
    StorageService.prototype.setObject = function (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    };
    StorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], StorageService);
    return StorageService;
}());



/***/ }),

/***/ "./src/app/common/sync.api.ts":
/*!************************************!*\
  !*** ./src/app/common/sync.api.ts ***!
  \************************************/
/*! exports provided: SyncAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyncAPI", function() { return SyncAPI; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SyncAPI = /** @class */ (function () {
    function SyncAPI(http) {
        var _this = this;
        this.http = http;
        this.queue = [];
        //private apiRoot: string = 'http://10.230.9.78:8081';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Access-Control-Allow-Headers': 'Content-Type' });
        this.options = { headers: this.headers };
        this.version = 'v1.3';
        this.logPrefix = "Sync API " + this.version + " -";
        this.currentOperation = null;
        this.lastOnlineStamp = null;
        this.http = http;
        this.log('Starting, recovering pending queue from storage');
        this.queue = this.fromStorage() || [];
        this.queueStatus();
        if (this.queue.length > 0) {
            this.log("Found in storage " + this.queue.length + " requests, trying to process queue if possible");
            this.log('Current queue', this.queue);
            this.isOnline().then(function (online) {
                if (online) {
                    //this.processQueue();
                    _this.syncQueue();
                }
            });
        }
    }
    /**
     * Adds a single request to the queue and process it when server is reachable.
     */
    SyncAPI.prototype.request = function (action, model, pk, entity, callback, recordName, matchMethod) {
        this.log("Handling new request");
        var queueItem = {
            action: action,
            model: model,
            pk: pk,
            entity: entity,
            callback: callback,
            recordName: recordName,
            matchMethod: matchMethod,
            status: 'queue' // this is ignored
        };
        this.handleRequest([queueItem]);
    };
    /**
     * creates a SyncQueue object to use later with multipleRequest method.
     */
    SyncAPI.prototype.asSyncQueue = function (action, model, pk, entity, callback, recordName, matchMethod) {
        var queueItem = {
            action: action,
            model: model,
            pk: pk,
            entity: entity,
            callback: callback,
            recordName: recordName,
            matchMethod: matchMethod,
            status: 'queue' // this is ignored
        };
        return queueItem;
    };
    /**
     *
     */
    SyncAPI.prototype.requestQueue = function (queueItem) {
        this.handleRequest([queueItem]);
    };
    /**
     * Adds multiple requests to the queue and process them when server is reachable.
     */
    SyncAPI.prototype.multipleRequest = function (list) {
        this.log("Handling new multiple requests");
        this.handleRequest(list);
    };
    /**
     * Internal method that adds a request list to the queue and process it when server is reachable.
     * For API purposes use either `request` or `multipleRequest` instead of this one.
     */
    SyncAPI.prototype.handleRequest = function (list) {
        var _this = this;
        if (this.currentOperation) {
            this.log('Cancelling sync operation with timer id', this.currentOperation);
            clearTimeout(this.currentOperation);
        }
        list.forEach(function (e) {
            _this.addToQueue(e);
        });
        this.isOnline().then(function (online) {
            if (online) {
                _this.currentOperation = setTimeout(function () {
                    //this.processQueue();
                    _this.syncQueue();
                    _this.currentOperation = null;
                }, 5000);
                _this.log('Scheduled sync with timer id', _this.currentOperation);
            }
        });
    };
    /**
     * Adds the request to the queue.
     * This is an internal method.
     */
    SyncAPI.prototype.addToQueue = function (item) {
        var matchMethod = item.matchMethod, recordName = item.recordName, queueItem = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](item, ["matchMethod", "recordName"]);
        var foundIndex = -1;
        if (matchMethod) {
            foundIndex = this.queue.findIndex(function (val) { return matchMethod(val.model) && (val.status === 'queue' || val.status === 'error') && val.entity === queueItem.entity; });
        }
        if (foundIndex !== -1) { // if record has a match, replace model only
            this.log("Recieved a request, found record with id <<" + recordName(queueItem.model) + ">> and updated it");
            this.queue[foundIndex].model = queueItem.model;
            return;
        }
        // if not found or no match method, add it
        this.queue.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, queueItem, { status: 'queue' }));
        this.log("Recieved a request to " + queueItem.entity + " and added it to the queue");
    };
    SyncAPI.prototype.isOnline = function () {
        var _this = this;
        if (!this.lastOnlineStamp || (new Date()).getTime() - this.lastOnlineStamp.getTime() > 30000) {
            var nav_1 = navigator.onLine;
            this.log("Your navigator reports online status as: " + nav_1);
            return this.isServerReachable().then(function (data) {
                _this.log("Tried to contact the server, answer was", data);
                _this.lastOnlineStamp = new Date();
                return nav_1 && data;
            });
        }
        else {
            return Promise.resolve(true);
        }
    };
    SyncAPI.prototype.isServerReachable = function () {
        return this.http.get('/online').toPromise()
            .then(function (data) {
            return true;
        }).catch(function (err) {
            return false;
        });
    };
    SyncAPI.prototype.queueStatus = function () {
        console.log(this.logPrefix + " Status is " + this.queue.length + " elements in the queue, " + this.queue.filter(function (q) { return q.status === 'processed'; }).length + " processed, " + this.queue.filter(function (q) { return q.status === 'queue'; }).length + " not yet processed, " + this.queue.filter(function (q) { return q.status === 'error'; }).length + " with error");
    };
    SyncAPI.prototype.log = function (message, data) {
        if (!data) {
            console.log(this.logPrefix + " " + message);
        }
        else {
            console.log(this.logPrefix + " " + message, data);
        }
    };
    SyncAPI.prototype.toStorage = function () {
        if (typeof (window.localStorage) !== "undefined") {
            localStorage.setItem("Sync", JSON.stringify(this.queue.filter(function (q) { return q.status !== 'processed'; })));
            this.queue = this.queue.filter(function (q) { return q.status !== 'processed'; });
        }
    };
    SyncAPI.prototype.fromStorage = function () {
        if (typeof (window.localStorage) !== "undefined") {
            var list = JSON.parse(localStorage.getItem("Sync"));
            return list;
        }
        return [];
    };
    SyncAPI.prototype.syncQueue = function () {
        var _this = this;
        var dataToSend = [];
        dataToSend = this.queue.filter(function (q) {
            return q.status !== 'processed';
        });
        var compareObjects = function (o1, o2) {
            var keys1 = Object.keys(o1);
            var keys2 = Object.keys(o2);
            // all keys from o1 should exist on o2 and their values must match
            var test1 = keys1.every(function (k1) { return keys2.find(function (k2) { return k2 === k1; }) && o1[k1] === o2[k1]; });
            // same for o2
            var test2 = keys2.every(function (k2) { return keys1.find(function (k1) { return k1 === k2; }) && o2[k2] === o1[k2]; });
            return test1 && test2;
        };
        this.http.post('/api/sync', { queue: dataToSend }, this.options).toPromise()
            .then(function (data) {
            var response = data;
            _this.log('Processed sync, response was', response);
            // get status from response
            response['result'].forEach(function (r) {
                var found = _this.queue.find(function (q) { return compareObjects(q.pk, r.pk); });
                if (found) {
                    found.status = r.operationOk ? 'processed' : 'error';
                    if (r.operationOk) {
                        found.callback(found.model, response);
                    }
                }
            });
            _this.queueStatus();
            _this.toStorage();
        }).catch(function (err) {
            _this.log('Error for request', err);
            //q.status = 'error';
            _this.queueStatus();
            _this.toStorage();
        });
    };
    /**
     * Makes a single request, no tracking for sync process
     * useful when you need only to make a request for batch
     */
    SyncAPI.prototype.post = function (url, payload) {
        return this.http.post(url, payload, this.options)
            .toPromise().then(function (data) { return data; });
    };
    SyncAPI.prototype.get = function (url) {
        return this.http.get(url, this.options)
            .toPromise().then(function (data) { return data; });
    };
    SyncAPI = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SyncAPI);
    return SyncAPI;
}());



/***/ }),

/***/ "./src/app/common/utils.common.ts":
/*!****************************************!*\
  !*** ./src/app/common/utils.common.ts ***!
  \****************************************/
/*! exports provided: UtilsCommon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilsCommon", function() { return UtilsCommon; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UtilsCommon = /** @class */ (function () {
    function UtilsCommon() {
    }
    UtilsCommon.prototype.pad = function (value, fillChar, length, dir) {
        if (dir === void 0) { dir = -1; }
        var result = value + '';
        while (result.length < length) {
            if (dir === -1) {
                result = fillChar + result;
            }
            else {
                result = result + fillChar;
            }
        }
        return result;
    };
    UtilsCommon.prototype.hashId = function (prefix, length, baseDate) {
        if (prefix === void 0) { prefix = 'X'; }
        if (length === void 0) { length = 32; }
        if (baseDate === void 0) { baseDate = null; }
        // take date + time + random digits
        // total digits: 1 + 10 + 6 + '-' + (length - 18) >= 32
        var date = baseDate || new Date();
        var random = Math.floor(Math.random() * Math.pow(10, length - 17 - prefix.length));
        var datetimeString = "" + date.getFullYear() + this.pad(date.getMonth() + 1, '0', 2) + this.pad(date.getDate(), '0', 2);
        datetimeString += "" + this.pad(date.getHours(), '0', 2) + this.pad(date.getMinutes(), '0', 2) + this.pad(date.getSeconds(), '0', 2);
        var id = "" + prefix + datetimeString + "-" + random;
        return id;
    };
    UtilsCommon = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], UtilsCommon);
    return UtilsCommon;
}());



/***/ }),

/***/ "./src/app/internal/type-generator.component.ts":
/*!******************************************************!*\
  !*** ./src/app/internal/type-generator.component.ts ***!
  \******************************************************/
/*! exports provided: TypeGeneratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeGeneratorComponent", function() { return TypeGeneratorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _type_generator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type-generator.service */ "./src/app/internal/type-generator.service.ts");


// types
// services

var TypeGeneratorComponent = /** @class */ (function () {
    function TypeGeneratorComponent(typeGenerator) {
        var _this = this;
        this.user = 'anon';
        this.viewData = {
            entityList: []
        };
        this.services = {
            typeGenerator: null
        };
        this.model = {
            selectedEntityList: []
        };
        this.services.typeGenerator = typeGenerator;
        this.services.typeGenerator.getAll().then(function (data) {
            _this.viewData.entityList = data.entities;
        });
    }
    TypeGeneratorComponent.prototype.ngOnInit = function () {
    };
    TypeGeneratorComponent.prototype.isChecked = function (target) {
        return this.model.selectedEntityList.find(function (s) { return s === target; });
    };
    TypeGeneratorComponent.prototype.toggleSelection = function (target) {
        if (this.isChecked(target)) {
            this.model.selectedEntityList = this.model.selectedEntityList.filter(function (s) { return s !== target; });
        }
        else {
            this.model.selectedEntityList.push(target);
        }
    };
    TypeGeneratorComponent.prototype.toggleSelectAll = function (event) {
        var _this = this;
        var allChecked = event.target['checked'];
        this.viewData.entityList.forEach(function (e) {
            var toggleCase = (allChecked && !_this.isChecked(e)) || (!allChecked && _this.isChecked(e));
            if (toggleCase) {
                document.getElementById(e).click();
                //this.toggleSelection(e);
            }
        });
    };
    TypeGeneratorComponent.prototype.generate = function () {
        this.services.typeGenerator.create({ entities: this.model.selectedEntityList }).then(function (response) {
            var messagesContainer = document.getElementById('generator-messages');
            messagesContainer.innerHTML = response.message;
        });
    };
    TypeGeneratorComponent.prototype.check = function () {
        this.services.typeGenerator.check({ entities: this.model.selectedEntityList }).then(function (response) {
            var messagesContainer = document.getElementById('generator-messages');
            messagesContainer.innerHTML = response.message;
        });
    };
    TypeGeneratorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'type-generator',
            template: __webpack_require__(/*! ./type-generator.template.html */ "./src/app/internal/type-generator.template.html"),
            providers: [
                _type_generator_service__WEBPACK_IMPORTED_MODULE_2__["TypeGeneratorService"]
            ],
            styles: [__webpack_require__(/*! ./type-generator.css */ "./src/app/internal/type-generator.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_type_generator_service__WEBPACK_IMPORTED_MODULE_2__["TypeGeneratorService"]])
    ], TypeGeneratorComponent);
    return TypeGeneratorComponent;
}());



/***/ }),

/***/ "./src/app/internal/type-generator.css":
/*!*********************************************!*\
  !*** ./src/app/internal/type-generator.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludGVybmFsL3R5cGUtZ2VuZXJhdG9yLmNzcyJ9 */"

/***/ }),

/***/ "./src/app/internal/type-generator.service.ts":
/*!****************************************************!*\
  !*** ./src/app/internal/type-generator.service.ts ***!
  \****************************************************/
/*! exports provided: TypeGeneratorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeGeneratorService", function() { return TypeGeneratorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_sync_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/sync.api */ "./src/app/common/sync.api.ts");



var TypeGeneratorService = /** @class */ (function () {
    function TypeGeneratorService(sync) {
        this.data = {};
        this.sync = null;
        this.config = {
            storageKey: 'type-generator',
            defaultUser: 'anon',
            api: {
                config: '/api/type-generator/config',
                create: '/api/type-generator/create',
                check: '/api/type-generator/check'
            }
        };
        this.sync = sync;
    }
    TypeGeneratorService.prototype.getAll = function () {
        var _this = this;
        return this.sync.get("" + this.config.api.config).then(function (data) {
            _this.data = data;
            return _this.data;
        });
    };
    TypeGeneratorService.prototype.create = function (item) {
        return this.sync.post("" + this.config.api.create, item);
    };
    TypeGeneratorService.prototype.check = function (item) {
        return this.sync.post("" + this.config.api.check, item);
    };
    TypeGeneratorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_sync_api__WEBPACK_IMPORTED_MODULE_2__["SyncAPI"]])
    ], TypeGeneratorService);
    return TypeGeneratorService;
}());



/***/ }),

/***/ "./src/app/internal/type-generator.template.html":
/*!*******************************************************!*\
  !*** ./src/app/internal/type-generator.template.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div *ngFor=\"let e of viewData.entityList\">\r\n        <input type=\"checkbox\" [id]=\"e\" (click)=\"toggleSelection(e)\" />\r\n        <label [for]=\"e\">{{e}}</label>\r\n    </div>\r\n    \r\n    <hr/>\r\n    <div>\r\n        <input type=\"checkbox\" id=\"all\" (click)=\"toggleSelectAll($event)\" />\r\n        <label for=\"all\">Select All</label>\r\n    </div>\r\n    \r\n    <button (click)=\"generate()\">Generate Types</button>\r\n    <br/><button (click)=\"check()\">Check Definition</button>\r\n    <div id=\"generator-messages\"></div>\r\n</div>"

/***/ }),

/***/ "./src/app/lasttime/lasttime.component.ts":
/*!************************************************!*\
  !*** ./src/app/lasttime/lasttime.component.ts ***!
  \************************************************/
/*! exports provided: LastTimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LastTimeComponent", function() { return LastTimeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _lasttime_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lasttime.service */ "./src/app/lasttime/lasttime.service.ts");
/* harmony import */ var _crosscommon_DateUtility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../crosscommon/DateUtility */ "./src/crosscommon/DateUtility.ts");





var LastTimeComponent = /** @class */ (function () {
    function LastTimeComponent(lastTimeService, titleService) {
        this.titleService = titleService;
        this.user = 'anon';
        this.viewData = {
            lastTime: [],
            showCreateForm: false
        };
        this.services = {
            lastTime: null
        };
        this.model = {
            id: null
        };
        this.listBackup = [];
        this.services.lastTime = lastTimeService;
        titleService.setTitle('Last Time');
    }
    LastTimeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.services.lastTime.getAllForUser(this.user).then(function (list) {
            _this.viewData.lastTime = list;
            // calculate validity on each
            _this.calculateValidityForAll();
            // sort
            /*const sort = ((a: LastTime, b: LastTime) => {
                return a['expiryDate'].getTime() >= b['expiryDate'].getTime() ? 1 : -1;
            });
            this.viewData.lastTime = list.sort(sort);*/
            _this.listBackup = _this.viewData.lastTime.slice(); // backup
        });
    };
    LastTimeComponent.prototype.handleNewItem = function (form) {
        this.viewData.showCreateForm = !this.viewData.showCreateForm;
    };
    LastTimeComponent.prototype.calculateValidity = function (item) {
        var valueIsDate = _crosscommon_DateUtility__WEBPACK_IMPORTED_MODULE_4__["DateUtils"].isDate(item.lst_value);
        var baseValue = valueIsDate ? new Date(item.lst_value) : item.lst_date_mod;
        item['expiryDate'] = _crosscommon_DateUtility__WEBPACK_IMPORTED_MODULE_4__["DateUtils"].addDays(baseValue, item.lst_validity);
        item['ageSentence'] = this.ageSentence(item['expiryDate']);
        item['ageClass'] = this.ageClass(item['expiryDate']);
    };
    LastTimeComponent.prototype.calculateValidityForAll = function () {
        var _this = this;
        var list = this.services.lastTime.list();
        list.forEach(function (item) {
            _this.calculateValidity(item);
        });
        var sort = (function (a, b) {
            return a['expiryDate'].getTime() >= b['expiryDate'].getTime() ? 1 : -1;
        });
        this.viewData.lastTime = list.sort(sort);
        console.log('listing', this.viewData.lastTime);
    };
    LastTimeComponent.prototype.newItem = function (form) {
        var _this = this;
        var values = form.value;
        this.services.lastTime.newItem(values.fName, values.fValue, values.fValidity, values.fTags, values.fNotes, this.user).then(function (item) {
            _this.viewData.lastTime = _this.services.lastTime.list();
            var listItem = _this.viewData.lastTime.find(function (elem) { return elem.lst_id === item.lst_id; });
            listItem['isNew'] = true;
            _this.calculateValidityForAll();
        });
    };
    LastTimeComponent.prototype.ageSentence = function (baseDate) {
        var diff = _crosscommon_DateUtility__WEBPACK_IMPORTED_MODULE_4__["DateUtils"].age(baseDate);
        var str = '';
        if (diff > 1) {
            str = "(" + diff + " days left)";
        }
        if (diff === 1) {
            str = '(tomorrow)';
        }
        if (diff === 0) {
            str = '(today)';
        }
        if (diff === -1) {
            str = '(yesterday)';
        }
        if (diff < -1) {
            str = "(" + Math.abs(diff) + " days ago)";
        }
        return str;
    };
    LastTimeComponent.prototype.ageClass = function (baseDate) {
        var diff = _crosscommon_DateUtility__WEBPACK_IMPORTED_MODULE_4__["DateUtils"].age(baseDate);
        var str = '';
        if (diff >= 10) {
            str = 'lasttime-age-10-left';
        }
        if (diff > 1 && diff < 10) {
            str = 'lasttime-age-2-left';
        }
        if (diff === 1) {
            str = 'lasttime-age-1-left';
        }
        if (diff === 0) {
            str = 'lasttime-age-0';
        }
        if (diff === -1) {
            str = 'lasttime-age-1-ago';
        }
        if (diff < -1 && diff > -10) {
            str = 'lasttime-age-2-ago';
        }
        if (diff < -10) {
            str = 'lasttime-age-10-ago';
        }
        return str;
    };
    LastTimeComponent.prototype.editValue = function (item, event) {
        var _this = this;
        var newValue = event.target['textContent'];
        if (item.lst_value !== newValue) {
            item.lst_value = newValue;
            item.lst_date_mod = _crosscommon_DateUtility__WEBPACK_IMPORTED_MODULE_4__["DateUtils"].newDateUpToSeconds();
            item['isEdited'] = true;
            this.services.lastTime.updateItem(item).then(function (response) {
                _this.calculateValidityForAll();
                _this.updateBackupItem(item);
            });
        }
    };
    LastTimeComponent.prototype.archiveRecord = function (item) {
        var _this = this;
        item.lst_ctg_status = 3; // archived
        item.lst_date_mod = _crosscommon_DateUtility__WEBPACK_IMPORTED_MODULE_4__["DateUtils"].newDateUpToSeconds();
        item['isEdited'] = true;
        this.services.lastTime.updateItem(item).then(function (response) {
            _this.calculateValidityForAll();
            _this.updateBackupItem(item);
        });
    };
    LastTimeComponent.prototype.updateBackupItem = function (item) {
        this.listBackup[this.listBackup.findIndex(function (i) { return i.lst_id === item.lst_id; })] = item; // to keep backup list updated
    };
    LastTimeComponent.prototype.filter = function (event) {
        var query = event.target['value'];
        var criteria = function (item) {
            return item.lst_name.toLowerCase().indexOf(query.toLowerCase()) !== -1 || item.lst_tags.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        };
        if (query) {
            this.viewData.lastTime = this.listBackup.filter(function (i) { return criteria(i); });
        }
        else {
            this.viewData.lastTime = this.listBackup;
        }
    };
    LastTimeComponent.prototype.editNotes = function (item) {
        var _this = this;
        var currentValue = item.lst_notes;
        var newValue = window.prompt(item.lst_name + " - Notes", currentValue);
        if (currentValue !== newValue && newValue !== null) {
            item.lst_notes = newValue;
            item.lst_date_mod = _crosscommon_DateUtility__WEBPACK_IMPORTED_MODULE_4__["DateUtils"].newDateUpToSeconds();
            item['isEdited'] = true;
            this.services.lastTime.updateItem(item).then(function (response) {
                _this.calculateValidityForAll();
                _this.updateBackupItem(item);
            });
        }
    };
    LastTimeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'lasttime',
            template: __webpack_require__(/*! ./lasttime.template.html */ "./src/app/lasttime/lasttime.template.html"),
            providers: [
                _lasttime_service__WEBPACK_IMPORTED_MODULE_3__["LastTimeService"]
            ],
            styles: [__webpack_require__(/*! ./lasttime.css */ "./src/app/lasttime/lasttime.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_lasttime_service__WEBPACK_IMPORTED_MODULE_3__["LastTimeService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], LastTimeComponent);
    return LastTimeComponent;
}());



/***/ }),

/***/ "./src/app/lasttime/lasttime.css":
/*!***************************************!*\
  !*** ./src/app/lasttime/lasttime.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lasttime-list {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    flex: 1;\r\n}\r\n\r\n.lasttime-item-container {\r\n    border: 1px solid lightgray;\r\n    margin: 5px;\r\n    padding: 5px;\r\n    display: block;\r\n    width: 100%;\r\n    cursor: pointer;\r\n}\r\n\r\n@media (min-width: 505px) {\r\n    .lasttime-item-container {\r\n        width: 350px;\r\n    }\r\n}\r\n\r\n.lasttime-value {\r\n    font-weight: bold;\r\n}\r\n\r\n.lasttime-age-0 {\r\n    color: black;\r\n}\r\n\r\n.lasttime-age-1-ago {\r\n    color: rgb(107, 0, 0);\r\n}\r\n\r\n.lasttime-age-2-ago {\r\n    color: brown;\r\n}\r\n\r\n.lasttime-age-10-ago {\r\n    color: red;\r\n}\r\n\r\n.lasttime-age-1-left {\r\n    color: gray;\r\n}\r\n\r\n.lasttime-age-2-left {\r\n    color: green;\r\n}\r\n\r\n.lasttime-age-10-left {\r\n    color: blue;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFzdHRpbWUvbGFzdHRpbWUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixPQUFPO0FBQ1g7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2QsV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFHQTtJQUNJLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7O0FBQ0E7SUFDSSxZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksVUFBVTtBQUNkOztBQUNBO0lBQ0ksV0FBVztBQUNmOztBQUNBO0lBQ0ksWUFBWTtBQUNoQjs7QUFDQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2xhc3R0aW1lL2xhc3R0aW1lLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYXN0dGltZS1saXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBmbGV4OiAxO1xyXG59XHJcblxyXG4ubGFzdHRpbWUtaXRlbS1jb250YWluZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTA1cHgpIHtcclxuICAgIC5sYXN0dGltZS1pdGVtLWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubGFzdHRpbWUtdmFsdWUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcblxyXG4ubGFzdHRpbWUtYWdlLTAge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5sYXN0dGltZS1hZ2UtMS1hZ28ge1xyXG4gICAgY29sb3I6IHJnYigxMDcsIDAsIDApO1xyXG59XHJcbi5sYXN0dGltZS1hZ2UtMi1hZ28ge1xyXG4gICAgY29sb3I6IGJyb3duO1xyXG59XHJcbi5sYXN0dGltZS1hZ2UtMTAtYWdvIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuLmxhc3R0aW1lLWFnZS0xLWxlZnQge1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbn1cclxuLmxhc3R0aW1lLWFnZS0yLWxlZnQge1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG59XHJcbi5sYXN0dGltZS1hZ2UtMTAtbGVmdCB7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/lasttime/lasttime.service.ts":
/*!**********************************************!*\
  !*** ./src/app/lasttime/lasttime.service.ts ***!
  \**********************************************/
/*! exports provided: LastTimeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LastTimeService", function() { return LastTimeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _crosscommon_entities_LastTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../crosscommon/entities/LastTime */ "./src/crosscommon/entities/LastTime.ts");
/* harmony import */ var _common_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/storage.service */ "./src/app/common/storage.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_sync_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/sync.api */ "./src/app/common/sync.api.ts");
/* harmony import */ var _crosscommon_Utility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../crosscommon/Utility */ "./src/crosscommon/Utility.ts");






var LastTimeService = /** @class */ (function () {
    function LastTimeService(storage, sync) {
        this.data = [];
        this.storage = null;
        this.sync = null;
        this.config = {
            storageKey: 'lasttime',
            defaultUser: 'anon',
            api: {
                list: '/api/lasttime',
                create: '/api/lasttime',
                update: '/api/lasttime/:id'
            }
        };
        this.storage = storage;
        this.sync = sync;
    }
    LastTimeService.prototype.list = function () {
        return this.data;
    };
    LastTimeService.prototype.getAll = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var filter, query, sort;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                filter = {
                    gc: 'AND',
                    cont: [{
                            f: 'lst_ctg_status',
                            op: 'eq',
                            val: 1
                        }]
                };
                query = "?q=" + JSON.stringify(filter);
                sort = (function (a, b) {
                    return a.lst_date_mod.getTime() > b.lst_date_mod.getTime() ? 1 : -1;
                });
                return [2 /*return*/, this.sync.get("" + this.config.api.list + query).then(function (data) {
                        _this.data = data.map(function (d) { return new _crosscommon_entities_LastTime__WEBPACK_IMPORTED_MODULE_1__["LastTime"](d); });
                        _this.data = _this.data.sort(sort);
                        return _this.data;
                    }).catch(function (err) {
                        return [];
                    })];
            });
        });
    };
    LastTimeService.prototype.getAllForUser = function (user) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.getAll().then(function (all) {
                        return all.filter(function (x) { return x.lst_id_user === user; });
                    })];
            });
        });
    };
    LastTimeService.prototype.saveToStorage = function () {
        this.storage.set(this.config.storageKey, JSON.stringify(this.data));
    };
    LastTimeService.prototype.newItem = function (name, value, validity, tags, notes, user) {
        var _this = this;
        var newId = _crosscommon_Utility__WEBPACK_IMPORTED_MODULE_5__["Utils"].hashIdForEntity(new _crosscommon_entities_LastTime__WEBPACK_IMPORTED_MODULE_1__["LastTime"](), 'lst_id');
        var newItem = new _crosscommon_entities_LastTime__WEBPACK_IMPORTED_MODULE_1__["LastTime"]({
            lst_id: newId,
            lst_name: name,
            lst_value: value,
            lst_validity: validity,
            lst_tags: tags,
            lst_notes: notes,
            lst_id_user: user,
            lst_date_add: new Date(),
            lst_date_mod: new Date(),
            lst_ctg_status: 1
        });
        return this.sync.post(this.config.api.create, newItem).then(function (response) {
            if (response.processOk) {
                _this.data.push(newItem);
            }
            else {
                newItem['sync'] = false;
                _this.data.push(newItem);
            }
            return newItem;
        }).catch(function (err) {
            // Append it to the listing but flag it as non-synced yet
            newItem['sync'] = false;
            _this.data.push(newItem);
            return newItem;
        });
    };
    LastTimeService.prototype.updateItem = function (item) {
        var _this = this;
        var updateLocal = function () {
            var index = _this.data.findIndex(function (e) { return e.lst_id === item.lst_id; });
            if (index !== -1) {
                _this.data[index] = item;
            }
        };
        return this.sync.post(this.config.api.update.replace(':id', item.lst_id), _crosscommon_Utility__WEBPACK_IMPORTED_MODULE_5__["Utils"].entityToRawTableFields(item)).then(function (response) {
            if (!response.operationOk) {
                item['sync'] = false;
            }
            updateLocal();
            return item;
        }).catch(function (err) {
            // Append it to the listing but flag it as non-synced yet
            console.log('error on update', err);
            item['sync'] = false;
            updateLocal();
            return item;
        });
    };
    LastTimeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"], _common_sync_api__WEBPACK_IMPORTED_MODULE_4__["SyncAPI"]])
    ], LastTimeService);
    return LastTimeService;
}());



/***/ }),

/***/ "./src/app/lasttime/lasttime.template.html":
/*!*************************************************!*\
  !*** ./src/app/lasttime/lasttime.template.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #newForm=\"ngForm\" (ngSubmit)=\"newItem(newForm)\">\r\n    <button type=\"button\" (click)=\"handleNewItem(newForm)\">\r\n        {{(viewData.showCreateForm ? 'Hide Form' : 'New Item')}}\r\n    </button>\r\n\r\n    <div *ngIf=\"viewData.showCreateForm\">\r\n        <div>\r\n            <span class=\"field\" *ngIf=\"model.id\">\r\n                <label for=\"id\" class=\"label-left\">Id</label>\r\n                <span type=\"text\" name=\"id\" id=\"id\" class=\"lasttime-input-id\">{{model.id}}</span>\r\n            </span>\r\n            <span class=\"field\">\r\n                <label for=\"fName\" class=\"label-left\">Name</label>\r\n                <input type=\"text\" name=\"fName\" id=\"fName\" class=\"field-input lasttime-input-name\" ngModel>\r\n            </span>\r\n            <span class=\"field\">\r\n                <label for=\"fValue\" class=\"label-left\">Value</label>\r\n                <input type=\"text\" name=\"fValue\" id=\"fValue\" class=\"field-input lasttime-input-value\" ngModel>\r\n            </span>\r\n            <span class=\"field\">\r\n                <label for=\"fValidity\" class=\"label-left\">Validity</label>\r\n                <input type=\"number\" name=\"fValidity\" id=\"fValidity\" class=\"field-input lasttime-input-validity\" step=\"1\" ngModel>\r\n            </span>\r\n            <span class=\"field\">\r\n                <label for=\"fTags\" class=\"label-left\">Tags</label>\r\n                <input type=\"text\" name=\"fTags\" id=\"fTags\" class=\"field-input lasttime-input-tags\" ngModel>\r\n            </span>\r\n            <span class=\"field\">\r\n                <label for=\"fNotes\" class=\"label-left\">Notes</label>\r\n                <input type=\"text\" name=\"fNotes\" id=\"fNotes\" class=\"field-input lasttime-input-notes\" ngModel>\r\n            </span>\r\n            \r\n            <button type=\"submit\">Save</button>\r\n        </div>\r\n    </div>\r\n</form>\r\n\r\n<div>\r\n    {{viewData.lastTime.length}} items.\r\n    <br/>\r\n    <label>Search</label>\r\n    <input (keyup)=\"filter($event)\" placeholder=\"Filter\" />\r\n</div>\r\n\r\n<div class=\"lasttime-list\">\r\n    <div *ngFor=\"let item of viewData.lastTime\" class=\"lasttime-item-container\">\r\n        <span class=\"lasttime-name\">{{item.lst_name}}:</span>\r\n        <span contenteditable=\"true\" (blur)=\"editValue(item,$event)\" class=\"lasttime-value\">{{item.lst_value}}</span>\r\n        <br/>\r\n        <span [ngClass]=\"item.ageClass\" class=\"lasttime-age\" [title]=\"item.lst_date_mod | date: 'yyyy-MM-dd HH:mm'\">\r\n            {{item.ageSentence}}\r\n        </span>\r\n        <span (click)=\"item.showOptions = !item.showOptions\">\r\n            {{item.showOptions ? '-' : '+'}}\r\n        </span>\r\n        <br/>\r\n        <span class=\"lasttime-tags\">\r\n            #[{{item.lst_tags}}]\r\n        </span>\r\n        <span class=\"lasttime-notes\">\r\n            {{item.lst_notes}}\r\n        </span>\r\n        <span class=\"lasttime-badge-archived\" *ngIf=\"item.lst_ctg_status === 3\">archived</span>\r\n        <span class=\"lasttime-badge-new\" *ngIf=\"item.isNew\">new</span>\r\n        <span class=\"lasttime-badge-edited\" *ngIf=\"item.isEdited\">edited</span>\r\n        <br/>\r\n        <span *ngIf=\"item.showOptions\">\r\n            <button (click)=\"archiveRecord(item)\">archive</button>\r\n            <button (click)=\"editNotes(item)\">edit notes</button>\r\n        </span>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/money/account.component.ts":
/*!********************************************!*\
  !*** ./src/app/money/account.component.ts ***!
  \********************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _account_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account.type */ "./src/app/money/account.type.ts");


//import { TasksCore } from '../app/tasks.core';
//import { SyncAPI } from '../app/sync.api';

var AccountComponent = /** @class */ (function () {
    function AccountComponent() {
        this.accountList = [];
        var a = new _account_type__WEBPACK_IMPORTED_MODULE_2__["Account"]({
            acc_id: "001",
            acc_name: "CAPITAL",
            acc_ctg_type: 4,
            acc_comment: "Capital Account",
            acc_check_day: 1,
            acc_average_min_balance: 0,
            acc_payment_day: 0
        });
        this.accountList.push(a);
        a = new _account_type__WEBPACK_IMPORTED_MODULE_2__["Account"]({
            acc_id: "002",
            acc_name: "Mosho Cartera",
            acc_ctg_type: 1,
            acc_comment: "Efectivo",
            acc_check_day: 1,
            acc_average_min_balance: 0,
            acc_payment_day: 0
        });
        this.accountList.push(a);
    }
    AccountComponent.prototype.ngOnInit = function () {
    };
    AccountComponent.prototype.showNewAccountForm = function () {
    };
    AccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'account',
            template: __webpack_require__(/*! ./account.template.html */ "./src/app/money/account.template.html"),
            providers: []
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/money/account.service.ts":
/*!******************************************!*\
  !*** ./src/app/money/account.service.ts ***!
  \******************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _crosscommon_entities_Account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../crosscommon/entities/Account */ "./src/crosscommon/entities/Account.ts");
/* harmony import */ var _common_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/storage.service */ "./src/app/common/storage.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_sync_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/sync.api */ "./src/app/common/sync.api.ts");





var AccountService = /** @class */ (function () {
    function AccountService(storage, sync) {
        this.data = [];
        this.storage = null;
        this.sync = null;
        this.config = {
            storageKey: 'accounts',
            api: {
                list: '/api/movements/accounts'
            }
        };
        this.storage = storage;
        this.sync = sync;
    }
    AccountService.prototype.initialData = function () {
        var list;
        var data = [{
                acc_id: '1',
                acc_name: 'Capital'
            }, {
                acc_id: '2',
                acc_name: 'Mosho Cartera'
            }, {
                acc_id: '3',
                acc_name: 'Mosho Libreton'
            }, {
                acc_id: '4',
                acc_name: 'Mosho Nomina'
            }, {
                acc_id: '5',
                acc_name: 'Mosho Credito'
            }, {
                acc_id: '6',
                acc_name: 'Mosho Puntos'
            }, {
                acc_id: '7',
                acc_name: 'Mosho Santander'
            }, {
                acc_id: '8',
                acc_name: 'Hipoteca'
            }, {
                acc_id: '9',
                acc_name: 'Mosho Inversion'
            }, {
                acc_id: '10',
                acc_name: 'Prestamos Mosho a Otros'
            }, {
                acc_id: '11',
                acc_name: 'Prestamos Mosho a Lau'
            }, {
                acc_id: '12',
                acc_name: 'Prestamos Mosho a Oliva'
            }, {
                acc_id: '13',
                acc_name: 'Prestamos Mosho a Memo'
            }, {
                acc_id: '14',
                acc_name: 'Revolvente Moshos'
            }, {
                acc_id: '15',
                acc_name: 'LPHT Nom Bancomer'
            }, {
                acc_id: '16',
                acc_name: 'LPHT Deb Bancomer'
            }, {
                acc_id: '17',
                acc_name: 'LPHT Deb Banamex'
            }, {
                acc_id: '18',
                acc_name: 'LPHT Cred Banamex'
            }, {
                acc_id: '19',
                acc_name: 'LPHT Cartera'
            }, {
                acc_id: '20',
                acc_name: 'Prestamos Lau a MamaAgüis'
            }, {
                acc_id: '21',
                acc_name: 'Prestamos Lau a Hermano'
            }, {
                acc_id: '22',
                acc_name: 'Fondo de Reserva CV'
            }, {
                acc_id: '23',
                acc_name: 'Adeudo a FR'
            }, {
                acc_id: '24',
                acc_name: 'Prestamos FR a Mosho'
            }, {
                acc_id: '25',
                acc_name: 'Capital CV'
            }, {
                acc_id: '26',
                acc_name: 'Prestamos Mosho a Anibal'
            }, {
                acc_id: '27',
                acc_name: 'Mosho Scotia Credito'
            }, {
                acc_id: '28',
                acc_name: 'LPHT Cred Bancomer'
            }];
        list = data.map(function (d) { return new _crosscommon_entities_Account__WEBPACK_IMPORTED_MODULE_1__["Account"](d); });
        return list;
    };
    AccountService.prototype.getAll = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var sort, filter, query;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                sort = (function (a, b) {
                    return a.acc_name > b.acc_name ? 1 : -1;
                });
                filter = {
                    gc: 'AND',
                    cont: [{
                            f: 'acc_ctg_status',
                            op: 'eq',
                            val: '1'
                        }, {
                            f: 'acc_ctg_type',
                            op: 'ne',
                            val: '4'
                        }]
                };
                query = "?q=" + JSON.stringify(filter);
                return [2 /*return*/, this.sync.get("" + this.config.api.list + query).then(function (data) {
                        _this.data = data.map(function (d) {
                            var item = new _crosscommon_entities_Account__WEBPACK_IMPORTED_MODULE_1__["Account"](d);
                            item['bal_final'] = d['bal_final'];
                            return item;
                        });
                        _this.data = _this.data.sort(sort);
                        return _this.data;
                    }).catch(function (err) {
                        return [];
                    })];
            });
        });
    };
    AccountService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"], _common_sync_api__WEBPACK_IMPORTED_MODULE_4__["SyncAPI"]])
    ], AccountService);
    return AccountService;
}());



/***/ }),

/***/ "./src/app/money/account.template.html":
/*!*********************************************!*\
  !*** ./src/app/money/account.template.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <strong>Account List</strong>\r\n    <button (click)=\"showNewAccountForm()\">New Account</button>\r\n    <div id=\"newAccountFormSection\">\r\n        <form name=\"accountForm\">\r\n            <label for=\"accountName\">Account Name</label>\r\n            <input type=\"text\" name=\"accountName\" />\r\n        </form>\r\n    </div>\r\n    <div *ngFor=\"let item of accountList\">\r\n        <span contenteditable=\"true\">{{item.acc_name}}</span>\r\n        <br/>\r\n        <span>Type: {{item.acc_ctg_type}}</span>\r\n        <span> | Comment: {{item.acc_comment}}</span>\r\n        <span> | Check day: {{item.acc_check_day}}</span>\r\n        <span> | Average min balance: {{item.acc_average_min_balance}}</span>\r\n        <span> | Payment day: {{item.acc_payment_day}}</span>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/money/account.type.ts":
/*!***************************************!*\
  !*** ./src/app/money/account.type.ts ***!
  \***************************************/
/*! exports provided: Account */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Account", function() { return Account; });
var Account = /** @class */ (function () {
    function Account(base) {
        if (base !== undefined) {
            this.acc_id = base.acc_id;
            this.acc_name = base.acc_name;
            this.acc_ctg_type = base.acc_ctg_type;
            this.acc_comment = base.acc_comment;
            this.acc_check_day = base.acc_check_day;
            this.acc_average_min_balance = base.acc_average_min_balance;
            this.acc_payment_day = base.acc_payment_day;
            this.acc_id_user = base.acc_id_user;
            this.acc_txt_type = base.acc_txt_type;
        }
    }
    return Account;
}());



/***/ }),

/***/ "./src/app/money/balance.component.ts":
/*!********************************************!*\
  !*** ./src/app/money/balance.component.ts ***!
  \********************************************/
/*! exports provided: BalanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalanceComponent", function() { return BalanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _balance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./balance.service */ "./src/app/money/balance.service.ts");
/* harmony import */ var _movement_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movement.service */ "./src/app/money/movement.service.ts");





var BalanceComponent = /** @class */ (function () {
    function BalanceComponent(balanceService, movementService, titleService) {
        this.titleService = titleService;
        this.user = 'anon';
        this.viewData = {
            balance: [],
            movements: [],
            monthBalance: [],
            monthList: [],
            filterNonZero: true
        };
        this.services = {
            balance: null,
            movement: null
        };
        this.model = {
            iterable: 0,
            year: 2017,
            month: 12,
            selectedBalance: null,
            movementListingView: 'compact'
        };
        this.services.balance = balanceService;
        this.services.movement = movementService;
        titleService.setTitle('Balance');
    }
    BalanceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.model.iterable = (new Date()).getFullYear() * 100 + ((new Date()).getMonth() + 1);
        this.parseIterable();
        this.services.balance.getAllForUser(this.user).then(function (list) {
            _this.viewData.balance = list;
            /*this.viewData.balance = this.viewData.balance
            .sort((a: Balance, b: Balance) => a.mov_date >= b.mov_date ? -1 : 1)
            .slice(0,10);*/
            _this.viewData.monthBalance = _this.filterMonthBalance();
            //this.viewData.monthBalance = this.services.balance.list;
            // TODO: add list of year/months of balance for combo box
            _this.viewData.monthList = _this.services.balance.monthList(_this.user);
        });
    };
    BalanceComponent.prototype.parseIterable = function () {
        this.model.year = Math.floor(this.model.iterable / 100);
        this.model.month = this.model.iterable % 100;
    };
    BalanceComponent.prototype.reloadBalance = function () {
        var _this = this;
        this.parseIterable();
        this.viewData.monthBalance = this.filterMonthBalance();
        if (this.model.selectedBalance) {
            this.model.selectedBalance = this.viewData.balance.find(function (b) { return b.bal_id_account === _this.model.selectedBalance.bal_id_account && b.bal_year === _this.model.year && b.bal_month === _this.model.month; });
            this.renderMovements(this.model.selectedBalance, undefined);
        }
    };
    BalanceComponent.prototype.filterMonthBalance = function () {
        var _this = this;
        var filter = function (b) { return b.bal_year == _this.model.year && b.bal_month == _this.model.month; };
        if (this.viewData.filterNonZero) {
            filter = function (b) { return b.bal_year == _this.model.year && b.bal_month == _this.model.month
                && !(b.bal_initial === 0 && b.bal_charges === 0 && b.bal_withdrawals === 0 && b.bal_final === 0); };
        }
        return this.services.balance.list().filter(function (b) { return filter(b); });
    };
    BalanceComponent.prototype.toggleFilterNonZero = function () {
        this.viewData.filterNonZero = !this.viewData.filterNonZero;
        this.viewData.monthBalance = this.filterMonthBalance();
    };
    BalanceComponent.prototype.renderMovements = function (balance, event) {
        var _this = this;
        event && event.preventDefault && event.preventDefault();
        this.services.movement.getAllForUser(this.user).then(function (list) {
            var ref = balance.bal_year * 100 + balance.bal_month;
            _this.viewData.movements = list.filter(function (m) {
                var movRef = (new Date(m.mov_date)).getFullYear() * 100 + ((new Date(m.mov_date)).getMonth() + 1);
                return ref === movRef && (balance.bal_id_account === m.mov_id_account || balance.bal_id_account === m.mov_id_account_to);
            });
            _this.model.selectedBalance = balance;
            console.log("movements fetched for balance", balance, _this.viewData.movements);
        });
    };
    BalanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'balance',
            template: __webpack_require__(/*! ./balance.template.html */ "./src/app/money/balance.template.html"),
            providers: [
                _balance_service__WEBPACK_IMPORTED_MODULE_3__["BalanceService"],
                _movement_service__WEBPACK_IMPORTED_MODULE_4__["MovementService"]
            ],
            styles: [__webpack_require__(/*! ./balance.css */ "./src/app/money/balance.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_balance_service__WEBPACK_IMPORTED_MODULE_3__["BalanceService"],
            _movement_service__WEBPACK_IMPORTED_MODULE_4__["MovementService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], BalanceComponent);
    return BalanceComponent;
}());



/***/ }),

/***/ "./src/app/money/balance.css":
/*!***********************************!*\
  !*** ./src/app/money/balance.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".balance-row:nth-child(even) {\r\n    background-color: lightgrey;\r\n}\r\n\r\n.balance-row:hover {\r\n    background-color: lightblue;\r\n}\r\n\r\n.movements-listing-row:nth-child(even) {\r\n    background-color: lightgrey;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9uZXkvYmFsYW5jZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9tb25leS9iYWxhbmNlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWxhbmNlLXJvdzpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG59XHJcblxyXG4uYmFsYW5jZS1yb3c6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG59XHJcblxyXG4ubW92ZW1lbnRzLWxpc3Rpbmctcm93Om50aC1jaGlsZChldmVuKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/money/balance.service.ts":
/*!******************************************!*\
  !*** ./src/app/money/balance.service.ts ***!
  \******************************************/
/*! exports provided: BalanceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalanceService", function() { return BalanceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _crosscommon_entities_Balance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../crosscommon/entities/Balance */ "./src/crosscommon/entities/Balance.ts");
/* harmony import */ var _entry_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entry.service */ "./src/app/money/entry.service.ts");
/* harmony import */ var _common_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/storage.service */ "./src/app/common/storage.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_sync_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/sync.api */ "./src/app/common/sync.api.ts");
/* harmony import */ var _crosscommon_DateUtility__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../crosscommon/DateUtility */ "./src/crosscommon/DateUtility.ts");







var BalanceService = /** @class */ (function () {
    function BalanceService(storage, entryService, sync) {
        this.data = [];
        this.storage = null;
        this.sync = null;
        this.entryService = null;
        this.config = {
            storageKey: 'balance',
            defaultUser: 'anon',
            api: {
                list: '/api/balance'
            }
        };
        this.apiRoot = '';
        this.storage = storage;
        this.entryService = entryService;
        this.sync = sync;
        // get api root
        var options = storage.getObject('Options');
        this.apiRoot = options ? options['optServerAddress'] : '';
    }
    BalanceService.prototype.list = function () {
        return this.data;
    };
    BalanceService.prototype.initialData = function () {
        var list = [];
        // let newData = (
        //     mov_id: string
        //     , mov_date: Date
        //     , mov_amount: number
        //     , mov_account: number
        //     , mov_account_to: number
        //     , mov_ctg_type: number
        //     , mov_budget: string
        //     , mov_ctg_category: number
        //     , mov_ctg_place: number
        //     , mov_desc: string
        //     , mov_notes: string
        //     , mov_id_user: string
        //     , mov_ctg_status: number
        //     , mov_txt_type: string
        //     , mov_txt_account: string
        //     , mov_txt_account_to: string
        //     , mov_txt_budget: string
        //     , mov_txt_category: string
        //     , mov_txt_place: string
        //     , mov_txt_status: string
        // ) => {
        //     return {
        //         mov_id
        //         , mov_date
        //         , mov_amount
        //         , mov_account
        //         , mov_account_to
        //         , mov_ctg_type
        //         , mov_budget
        //         , mov_ctg_category
        //         , mov_ctg_place
        //         , mov_desc
        //         , mov_notes
        //         , mov_id_user
        //         , mov_ctg_status
        //         , mov_txt_type
        //         , mov_txt_account
        //         , mov_txt_account_to
        //         , mov_txt_budget
        //         , mov_txt_category
        //         , mov_txt_place
        //         , mov_txt_status
        //     };
        // };
        // let data: Array<Entry> = [];
        // //data.push(newData('1','Walmart'));
        // list = data.map((d: any) => {
        //     d.mov_id_user = this.config.defaultUser;
        //     return new Entry(d);
        // });
        return list;
    };
    BalanceService.prototype.getAll = function () {
        var _this = this;
        /*let fromStorage = this.storage.get(this.config.storageKey);
        if (fromStorage){
            this.data = JSON.parse(fromStorage);
        } else {
            this.data = this.initialData();
        }*/
        var sort = (function (a, b) {
            if (a.bal_txt_account === 'Capital') {
                return 1;
            }
            return a.bal_txt_account > b.bal_txt_account ? 1 : -1;
        });
        return this.sync.get("" + this.apiRoot + this.config.api.list).then(function (data) {
            _this.data = data.map(function (d) { return new _crosscommon_entities_Balance__WEBPACK_IMPORTED_MODULE_1__["Balance"](d); });
            _this.data = _this.data.sort(sort);
            return _this.data;
        });
    };
    BalanceService.prototype.getAllForUser = function (user) {
        return this.getAll().then(function (list) {
            return list.filter(function (x) { return x.bal_id_user === user; });
        });
    };
    BalanceService.prototype.saveToStorage = function () {
        // this.storage.set(this.config.storageKey,JSON.stringify(this.data));
    };
    BalanceService.prototype.newItem = function (item) {
        var newItem = new _crosscommon_entities_Balance__WEBPACK_IMPORTED_MODULE_1__["Balance"](item);
        this.data.push(newItem);
        this.saveToStorage();
        return newItem;
    };
    BalanceService.prototype.add = function (entryList) {
        var _this = this;
        var balance = this.list();
        // add up
        entryList.forEach(function (e) {
            var b = balance.find(function (b) { return b.bal_year === e.ent_date.getFullYear() && b.bal_month === e.ent_date.getMonth() + 1 && b.bal_id_account === e.ent_id_account && b.bal_id_user === e.ent_id_user; });
            if (b) { // exists a balance, add entry amount
                b.bal_charges += e.ent_ctg_type === 2 ? e.ent_amount : 0;
                b.bal_withdrawals += e.ent_ctg_type === 1 ? e.ent_amount : 0;
                b.bal_final += e.ent_ctg_type === 1 ? -1 * e.ent_amount : e.ent_amount;
            }
            else { // balance does not exist, create one with amount and add it to list
                b = new _crosscommon_entities_Balance__WEBPACK_IMPORTED_MODULE_1__["Balance"]();
                b.bal_year = e.ent_date.getFullYear();
                b.bal_month = e.ent_date.getMonth() + 1;
                b.bal_id_account = e.ent_id_account;
                b.bal_initial = 0;
                b.bal_charges = e.ent_ctg_type === 2 ? e.ent_amount : 0;
                b.bal_withdrawals = e.ent_ctg_type === 1 ? e.ent_amount : 0;
                b.bal_final = b.bal_charges - b.bal_withdrawals;
                b.bal_id_user = e.ent_id_user;
                b.bal_txt_account = e.ent_txt_account;
                _this.data.push(b);
            }
            _this.saveToStorage();
        });
    };
    BalanceService.prototype.getAllForMonth = function (year, month, user) {
        return this.list().filter(function (b) { return b.bal_year === year && b.bal_month === month; });
    };
    BalanceService.prototype.rebuild = function (year, month, user) {
        var _this = this;
        this.entryService.getAllForUser(user).then(function (entryList) {
            entryList.filter(function (e) { return (new Date(e.ent_date)).getFullYear() === year && (new Date(e.ent_date)).getMonth() + 1 === month; });
            var balance = _this.getAllForMonth(year, month, user);
            balance.forEach(function (b) {
                b.bal_charges = 0;
                b.bal_withdrawals = 0;
                b.bal_final = b.bal_initial;
            });
            // add up
            entryList.forEach(function (e) {
                var b = balance.find(function (b) { return b.bal_id_account === e.ent_id_account; });
                if (b) { // exists a balance, add entry amount
                    b.bal_charges += e.ent_ctg_type === 2 ? e.ent_amount : 0;
                    b.bal_withdrawals += e.ent_ctg_type === 1 ? e.ent_amount : 0;
                    b.bal_final += e.ent_ctg_type === 1 ? -1 * e.ent_amount : e.ent_amount;
                }
                else { // balance does not exist, create one with amount and add it to list
                    b = new _crosscommon_entities_Balance__WEBPACK_IMPORTED_MODULE_1__["Balance"]();
                    b.bal_year = year;
                    b.bal_month = month;
                    b.bal_id_account = e.ent_id_account;
                    b.bal_initial = 0;
                    b.bal_charges = e.ent_ctg_type === 2 ? e.ent_amount : 0;
                    b.bal_withdrawals = e.ent_ctg_type === 1 ? e.ent_amount : 0;
                    b.bal_final = b.bal_charges - b.bal_withdrawals;
                    b.bal_id_user = e.ent_id_user;
                    b.bal_txt_account = e.ent_txt_account;
                    _this.data.push(b);
                    balance.push(b);
                }
            });
            _this.saveToStorage();
        });
    };
    BalanceService.prototype.transfer = function (year, month, user) {
        var _this = this;
        var currentDate = new Date();
        if (year * 100 + month >= currentDate.getFullYear() * 100 + currentDate.getMonth() + 1) {
            // cannot transfer current month
            return;
        }
        var balanceCurrent = this.getAllForMonth(year, month, user);
        var nextMonth = this.getNextMonth(year, month);
        var balanceNext = this.getAllForMonth(nextMonth.year, nextMonth.month, user);
        balanceCurrent.forEach(function (bc) {
            var bn = balanceNext.find(function (b) { return b.bal_id_account === bc.bal_id_account; });
            if (bn) {
                bn.bal_initial = bc.bal_final;
                bn.bal_final = bn.bal_initial + bn.bal_charges - bn.bal_withdrawals;
                console.log('found a balance record, updated', bn);
            }
            else {
                bn = new _crosscommon_entities_Balance__WEBPACK_IMPORTED_MODULE_1__["Balance"]();
                bn.bal_year = nextMonth.year;
                bn.bal_month = nextMonth.month;
                bn.bal_id_account = bc.bal_id_account;
                bn.bal_initial = bc.bal_final;
                bn.bal_charges = 0;
                bn.bal_withdrawals = 0;
                bn.bal_final = bc.bal_final;
                bn.bal_id_user = user;
                bn.bal_txt_account = bc.bal_txt_account;
                console.log('new balance record', bn);
                _this.data.push(bn);
            }
        });
        this.saveToStorage();
    };
    BalanceService.prototype.rebuildAndTransfer = function (year, month, user) {
        this.rebuild(year, month, user);
        this.transfer(year, month, user);
    };
    BalanceService.prototype.rebuildAndTransferRange = function (yearInitial, monthInitial, yearFinal, monthFinal, user) {
        var control = {
            year: yearInitial,
            month: monthInitial,
            iterable: yearInitial * 100 + monthInitial
        };
        while (control.iterable <= yearFinal * 100 + monthFinal) {
            this.rebuild(control.year, control.month, user);
            this.transfer(control.year, control.month, user);
            control = this.getNextMonth(control.year, control.month);
        }
    };
    BalanceService.prototype.getNextMonth = function (year, month) {
        if (month === 12) {
            return {
                year: year + 1,
                month: 1,
                iterable: (year + 1) * 100 + 1
            };
        }
        else {
            return {
                year: year,
                month: month + 1,
                iterable: (year * 100) + month + 1
            };
        }
    };
    BalanceService.prototype.parseMonthName = function (iterable) {
        var year = Math.floor(iterable / 100);
        var month = iterable % 100;
        var monthName = _crosscommon_DateUtility__WEBPACK_IMPORTED_MODULE_6__["DateUtils"].getMonthName(month);
        return year + " / " + monthName;
    };
    BalanceService.prototype.monthList = function (user) {
        var iterable = this.list()
            .map(function (b) { return ({
            iterable: b.bal_year * 100 + b.bal_month,
            year: b.bal_year,
            month: b.bal_month
        }); }).reduce(function (previous, current) {
            return previous.iterable < current.iterable ? previous : current;
        }, 999900);
        if (!iterable) {
            iterable = {
                iterable: 201602,
                year: 2016,
                month: 2
            };
        }
        var monthList = [];
        var currentIterable = (new Date()).getFullYear() * 100 + ((new Date()).getMonth() + 1);
        while (iterable.iterable <= currentIterable) {
            iterable.name = this.parseMonthName(iterable.iterable);
            monthList.push(iterable);
            iterable = this.getNextMonth(iterable.year, iterable.month);
        }
        return monthList.reverse();
    };
    BalanceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"], _entry_service__WEBPACK_IMPORTED_MODULE_2__["EntryService"], _common_sync_api__WEBPACK_IMPORTED_MODULE_5__["SyncAPI"]])
    ], BalanceService);
    return BalanceService;
}());



/***/ }),

/***/ "./src/app/money/balance.template.html":
/*!*********************************************!*\
  !*** ./src/app/money/balance.template.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <strong>Balance</strong>\r\n\r\n    <span class=\"field\">\r\n        <label for=\"fMonth\" class=\"label-left\">Year-Month</label>\r\n        <select [(ngModel)]=\"model.iterable\" name=\"fMonth\" id=\"fMonth\" (change)=\"reloadBalance()\">\r\n            <option *ngFor=\"let opt of viewData.monthList\" value=\"{{opt.iterable}}\">{{opt.name}}</option>\r\n        </select>\r\n\r\n        <br/>\r\n        <input name=\"fFilterNonZero\" id=\"fFilterNonZero\" type=\"checkbox\" (click)=\"toggleFilterNonZero()\" [(ngModel)]=\"viewData.filterNonZero\" />\r\n        <label for=\"fFilterNonZero\">Filter Non Zero Balance</label>\r\n    </span>\r\n\r\n    <table>\r\n        <tr>\r\n            <th>Account</th>\r\n            <th>Initial</th>\r\n            <th>Charges</th>\r\n            <th>Withdrawals</th>\r\n            <th>Final</th>\r\n            <th>Actions</th>\r\n        </tr>\r\n        <tr *ngFor=\"let b of viewData.monthBalance\" class=\"balance-row\">\r\n            <td>{{b.bal_txt_account}}</td>\r\n            <td class=\"text-align-right padding-all-5\">{{b.bal_initial | currency:'USD':'symbol-narrow':'1.2-2'}}</td>\r\n            <td class=\"text-align-right padding-all-5\">{{b.bal_charges | currency:'USD':'symbol-narrow':'1.2-2'}}</td>\r\n            <td class=\"text-align-right padding-all-5\">{{b.bal_withdrawals | currency:'USD':'symbol-narrow':'1.2-2'}}</td>\r\n            <td class=\"text-align-right padding-all-5\"\r\n                [ngClass]=\"{'balance-zero': b.bal_final == 0, 'balance-positive': b.bal_final > 0, 'balance-negative': b.bal_final < 0}\">\r\n                {{b.bal_final | currency:'USD':'symbol-narrow':'1.2-2'}}\r\n            </td>\r\n            <td><a href=\"#\" (click)=\"renderMovements(b, $event)\">View Movements</a></td>\r\n        </tr>\r\n    </table>\r\n\r\n    <div *ngIf=\"model.selectedBalance\">\r\n        Listing {{viewData.movements.length}} movements for account <strong>{{model.selectedBalance.bal_txt_account}}</strong> for period {{model.selectedBalance.bal_year}} - {{model.selectedBalance.bal_month}}\r\n        <div>\r\n            Use View\r\n            <select [(ngModel)]=\"model.movementListingView\">\r\n                <option value=\"compact\">Compact</option>\r\n                <option value=\"cards\">Cards</option>\r\n                <option value=\"grid\">Grid</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n\r\n    <table *ngIf=\"viewData.movements.length && model.movementListingView === 'grid'\">\r\n        <tr>\r\n            <th>Id</th>\r\n            <th>Date</th>\r\n            <th>Account</th>\r\n            <th>Account To</th>\r\n            <th>Type</th>\r\n            <th>Amount</th>\r\n            <th>Budget</th>\r\n            <th>Category</th>\r\n            <th>Place</th>\r\n            <th>Description</th>\r\n            <th>Notes</th>\r\n            <th>Status</th>\r\n        </tr>\r\n        <tr *ngFor=\"let m of viewData.movements\">\r\n            <td>{{m.mov_id}}</td>\r\n            <td>{{m.mov_date | date: 'yyyy-MM-dd'}}</td>\r\n            <td>{{m.mov_txt_account}}</td>\r\n            <td>{{m.mov_txt_account_to}}</td>\r\n            <td>{{m.mov_txt_type}}</td>\r\n            <td>{{m.mov_amount | currency:'USD':'symbol-narrow':'1.2-2'}}</td>\r\n            <td>{{m.mov_budget}}</td>\r\n            <td>{{m.mov_txt_category}}</td>\r\n            <td>{{m.mov_txt_place}}</td>\r\n            <td>{{m.mov_desc}}</td>\r\n            <td>{{m.mov_notes}}</td>\r\n            <td>{{m.mov_txt_status}}</td>\r\n        </tr>\r\n    </table>\r\n\r\n    <div *ngIf=\"viewData.movements.length && model.movementListingView === 'cards'\">\r\n        <div class=\"movement-list\">\r\n            <div *ngFor=\"let m of viewData.movements\" class=\"movement-box\">\r\n                <span *ngIf=\"false\">{{m.mov_id}}<br/></span>\r\n                <span [ngClass]=\"{'movement-amount-income': m.mov_ctg_type === 2, 'movement-amount-expense': m.mov_ctg_type === 1, 'movement-amount-transfer': m.mov_ctg_type === 3}\">\r\n                    <span *ngIf=\"m.mov_txt_type === 'EXPENSE'\">-</span>\r\n                    <span *ngIf=\"m.mov_txt_type === 'INCOME'\">+</span>\r\n                    <span>{{m.mov_amount | currency:'USD':'symbol-narrow':'1.2-2'}}</span>\r\n                </span>\r\n                <span class=\"movement-account\">[{{m.mov_txt_account}}]</span>\r\n                <span class=\"movement-account\" *ngIf=\"m.mov_txt_account_to\"> -> [{{m.mov_txt_account_to}}]</span><br/>\r\n                <span class=\"movement-date\">[{{m.mov_date | date: 'yyyy-MM-dd'}}]</span>\r\n                <span class=\"movement-description\">{{m.mov_desc}}</span>\r\n                <br/>\r\n                <span class=\"movement-category\" *ngIf=\"m.mov_txt_category\">{{m.mov_txt_category}}</span>\r\n                <span class=\"movement-place\" *ngIf=\"m.mov_txt_place\"> | {{m.mov_txt_place}}</span>\r\n                <span class=\"movement-budget\" *ngIf=\"m.mov_budget\"> | #[{{m.mov_budget}}]</span>\r\n                <br *ngIf=\"m.mov_ctg_type === 1 || m.mov_ctg_type === 2\" />\r\n                <span class=\"movement-notes\">{{m.mov_notes}}</span>\r\n                <span class=\"movement-status\" *ngIf=\"false\">{{m.mov_txt_status}}</span>\r\n                <span class=\"movement-badge-new\" *ngIf=\"m.isNew\">new</span>\r\n                <span class=\"movement-badge-edited\" *ngIf=\"m.isEdited\">edited</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"viewData.movements.length && model.movementListingView === 'compact'\">\r\n        <table>\r\n            <tr>\r\n                <th class=\"padding-all-5 width-80\">Date</th>\r\n                <th class=\"padding-all-5 width-100\">Amount</th>\r\n                <th class=\"padding-all-5\">Place</th>\r\n                <th class=\"padding-all-5\">Description</th>\r\n            </tr>\r\n            <tr class=\"movements-listing-row\">\r\n                <td class=\"padding-all-5\"></td>\r\n                <td class=\"padding-all-5 text-align-right\"><strong>{{model.selectedBalance.bal_initial | currency:'USD':'symbol-narrow':'1.2-2'}}</strong></td>\r\n                <td class=\"padding-all-5\"></td>\r\n                <td class=\"padding-all-5\"><strong>INITIAL BALANCE</strong></td>\r\n            </tr>\r\n            <tr class=\"movements-listing-row\" *ngFor=\"let m of viewData.movements\">\r\n                <td class=\"padding-all-5\">{{m.mov_date | date: 'yyyy-MM-dd'}}</td>\r\n                <td class=\"padding-all-5 text-align-right\">{{(((m.mov_ctg_type === 1) || (m.mov_ctg_type === 3 && m.mov_id_account === model.selectedBalance.bal_id_account)) ? -1 * m.mov_amount : m.mov_amount) | currency:'USD':'symbol-narrow':'1.2-2'}}</td>\r\n                <td class=\"padding-all-5\">{{m.mov_ctg_type === 3 ? 'TRANSFER' : m.mov_txt_place}}</td>\r\n                <td class=\"padding-all-5\">{{m.mov_desc}}</td>\r\n            </tr>\r\n            <tr class=\"movements-listing-row\">\r\n                <td class=\"padding-all-5\"></td>\r\n                <td class=\"padding-all-5 text-align-right\"><strong>{{model.selectedBalance.bal_final | currency:'USD':'symbol-narrow':'1.2-2'}}</strong></td>\r\n                <td class=\"padding-all-5\"></td>\r\n                <td class=\"padding-all-5\"><strong>FINAL BALANCE</strong></td>\r\n            </tr>\r\n        </table>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/money/category.service.ts":
/*!*******************************************!*\
  !*** ./src/app/money/category.service.ts ***!
  \*******************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _crosscommon_entities_Category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../crosscommon/entities/Category */ "./src/crosscommon/entities/Category.ts");
/* harmony import */ var _common_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/storage.service */ "./src/app/common/storage.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_sync_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/sync.api */ "./src/app/common/sync.api.ts");
/* harmony import */ var _crosscommon_Utility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../crosscommon/Utility */ "./src/crosscommon/Utility.ts");






var CategoryService = /** @class */ (function () {
    function CategoryService(storage, sync) {
        this.data = [];
        this.storage = null;
        this.sync = null;
        this.config = {
            storageKey: 'categories',
            defaultUser: 'anon',
            api: {
                list: '/api/categories',
                create: '/api/categories'
            }
        };
        this.storage = storage;
        this.sync = sync;
    }
    CategoryService.prototype.list = function () {
        return this.data;
    };
    CategoryService.prototype.initialData = function () {
        var _this = this;
        var list;
        var newData = function (mct_id, mct_name) {
            return { mct_id: mct_id, mct_name: mct_name };
        };
        var data = [];
        data.push(newData('1', 'Cap'));
        data.push(newData('2', 'Cart'));
        list = data.map(function (d) {
            d.mct_id_user = _this.config.defaultUser;
            return new _crosscommon_entities_Category__WEBPACK_IMPORTED_MODULE_1__["Category"](d);
        });
        return list;
    };
    CategoryService.prototype.getAll = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var sort;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                sort = (function (a, b) {
                    return a.mct_name > b.mct_name ? 1 : -1;
                });
                return [2 /*return*/, this.sync.get("" + this.config.api.list).then(function (data) {
                        _this.data = data.map(function (d) { return new _crosscommon_entities_Category__WEBPACK_IMPORTED_MODULE_1__["Category"](d); });
                        _this.data = _this.data.sort(sort);
                        return _this.data;
                    }).catch(function (err) {
                        return [];
                    })];
            });
        });
    };
    CategoryService.prototype.getAllForUser = function (user) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.getAll().then(function (all) {
                        return all.filter(function (x) { return x.mct_id_user === user; });
                    })];
            });
        });
    };
    CategoryService.prototype.saveToStorage = function () {
        this.storage.set(this.config.storageKey, JSON.stringify(this.data));
    };
    CategoryService.prototype.newId = function () {
        var m = new _crosscommon_entities_Category__WEBPACK_IMPORTED_MODULE_1__["Category"]();
        var length = m.metadata.fields.find(function (f) { return f.dbName === 'mct_id'; }).size;
        return _crosscommon_Utility__WEBPACK_IMPORTED_MODULE_5__["Utils"].hashId(m.metadata.prefix, length);
    };
    CategoryService.prototype.newItem = function (category, user) {
        var _this = this;
        var newId = this.newId();
        var newItem = new _crosscommon_entities_Category__WEBPACK_IMPORTED_MODULE_1__["Category"]({
            mct_id: newId,
            mct_name: category,
            mct_id_user: user,
            mct_date_add: new Date(),
            mct_date_mod: new Date(),
            mct_ctg_status: 1
        });
        //this.data.push(newItem);
        //this.saveToStorage();
        return this.sync.post(this.config.api.create, newItem).then(function (response) {
            if (response.processOk) {
                _this.data.push(newItem);
            }
            else {
                newItem['sync'] = false;
                _this.data.push(newItem);
            }
            return newItem;
        }).catch(function (err) {
            // Append it to the listing but flag it as non-synced yet
            newItem['sync'] = false;
            _this.data.push(newItem);
            return newItem;
        });
    };
    CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"], _common_sync_api__WEBPACK_IMPORTED_MODULE_4__["SyncAPI"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/money/entry.service.ts":
/*!****************************************!*\
  !*** ./src/app/money/entry.service.ts ***!
  \****************************************/
/*! exports provided: EntryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryService", function() { return EntryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _crosscommon_entities_Entry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../crosscommon/entities/Entry */ "./src/crosscommon/entities/Entry.ts");
/* harmony import */ var _common_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/storage.service */ "./src/app/common/storage.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_sync_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/sync.api */ "./src/app/common/sync.api.ts");





var EntryService = /** @class */ (function () {
    function EntryService(storage, sync) {
        this.data = [];
        this.storage = null;
        this.sync = null;
        this.config = {
            storageKey: 'entries',
            defaultUser: 'anon'
        };
        this.apiRoot = '';
        this.storage = storage;
        this.sync = sync;
        var options = storage.getObject('Options');
        this.apiRoot = options ? options['optServerAddress'] : '';
    }
    EntryService.prototype.list = function () {
        return this.data;
    };
    EntryService.prototype.initialData = function () {
        var list = [];
        // let newData = (
        //     mov_id: string
        //     , mov_date: Date
        //     , mov_amount: number
        //     , mov_account: number
        //     , mov_account_to: number
        //     , mov_ctg_type: number
        //     , mov_budget: string
        //     , mov_ctg_category: number
        //     , mov_ctg_place: number
        //     , mov_desc: string
        //     , mov_notes: string
        //     , mov_id_user: string
        //     , mov_ctg_status: number
        //     , mov_txt_type: string
        //     , mov_txt_account: string
        //     , mov_txt_account_to: string
        //     , mov_txt_budget: string
        //     , mov_txt_category: string
        //     , mov_txt_place: string
        //     , mov_txt_status: string
        // ) => {
        //     return {
        //         mov_id
        //         , mov_date
        //         , mov_amount
        //         , mov_account
        //         , mov_account_to
        //         , mov_ctg_type
        //         , mov_budget
        //         , mov_ctg_category
        //         , mov_ctg_place
        //         , mov_desc
        //         , mov_notes
        //         , mov_id_user
        //         , mov_ctg_status
        //         , mov_txt_type
        //         , mov_txt_account
        //         , mov_txt_account_to
        //         , mov_txt_budget
        //         , mov_txt_category
        //         , mov_txt_place
        //         , mov_txt_status
        //     };
        // };
        // let data: Array<Entry> = [];
        // //data.push(newData('1','Walmart'));
        // list = data.map((d: any) => {
        //     d.mov_id_user = this.config.defaultUser;
        //     return new Entry(d);
        // });
        return list;
    };
    EntryService.prototype.getAll = function () {
        var _this = this;
        var sort = (function (a, b) {
            if (a.ent_date < b.ent_date) {
                return -1;
            }
            else if (a.ent_date > b.ent_date) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return this.sync.get(this.apiRoot + "/api/entries").then(function (data) {
            _this.data = data.map(function (d) { return new _crosscommon_entities_Entry__WEBPACK_IMPORTED_MODULE_1__["Entry"](d); });
            _this.data = _this.data.sort(sort);
            return _this.data;
        });
    };
    EntryService.prototype.getAllForUser = function (user) {
        return this.getAll().then(function (list) {
            return list.filter(function (x) { return x.ent_id_user === user; });
        });
    };
    EntryService.prototype.saveToStorage = function () {
        // this.storage.set(this.config.storageKey,JSON.stringify(this.data));
    };
    EntryService.prototype.newId = function () {
        return this.data.length + 1 + '';
    };
    EntryService.prototype.newItem = function (item) {
        //let newId: string = this.newId();
        //item.ent_id = newId;
        var newItem = new _crosscommon_entities_Entry__WEBPACK_IMPORTED_MODULE_1__["Entry"](item);
        this.data.push(newItem);
        this.saveToStorage();
        return newItem;
    };
    EntryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"], _common_sync_api__WEBPACK_IMPORTED_MODULE_4__["SyncAPI"]])
    ], EntryService);
    return EntryService;
}());



/***/ }),

/***/ "./src/app/money/movement.component.ts":
/*!*********************************************!*\
  !*** ./src/app/money/movement.component.ts ***!
  \*********************************************/
/*! exports provided: MovementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovementComponent", function() { return MovementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _crosscommon_entities_Movement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../crosscommon/entities/Movement */ "./src/crosscommon/entities/Movement.ts");
/* harmony import */ var _crosscommon_entities_Entry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../crosscommon/entities/Entry */ "./src/crosscommon/entities/Entry.ts");
/* harmony import */ var _crosscommon_entities_Preset__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../crosscommon/entities/Preset */ "./src/crosscommon/entities/Preset.ts");
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account.service */ "./src/app/money/account.service.ts");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./category.service */ "./src/app/money/category.service.ts");
/* harmony import */ var _place_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./place.service */ "./src/app/money/place.service.ts");
/* harmony import */ var _movement_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./movement.service */ "./src/app/money/movement.service.ts");
/* harmony import */ var _entry_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./entry.service */ "./src/app/money/entry.service.ts");
/* harmony import */ var _balance_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./balance.service */ "./src/app/money/balance.service.ts");
/* harmony import */ var _preset_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./preset.service */ "./src/app/money/preset.service.ts");



//import { CurrencyPipe } from '@angular/common';
// types










var MovementComponent = /** @class */ (function () {
    function MovementComponent(accountService, categoryService, placeService, movementService, entryService, balanceService, presetService, titleService) {
        this.titleService = titleService;
        this.accounts = [];
        this.user = 'anon';
        this.viewData = {
            accounts: [],
            types: [],
            statuses: [],
            budgets: [],
            categories: [],
            places: [],
            movements: [],
            entries: [],
            presets: [],
            showCreateForm: false
        };
        this.model = {
            type: 1,
            date: '',
            category: 0,
            place: 0,
            asPreset: false,
            selectedPreset: null,
            id: null
        };
        this.viewAddCategoryForm = false;
        this._movementFlowType = 'custom';
        this.isTransfer = false;
        this.isCustom = true;
        this.isPreset = false;
        this.services = {
            account: null,
            category: null,
            place: null,
            movement: null,
            entry: null,
            balance: null,
            preset: null
        };
        this.services.account = accountService;
        this.services.category = categoryService;
        this.services.place = placeService;
        this.services.movement = movementService;
        this.services.entry = entryService;
        this.services.balance = balanceService;
        this.services.preset = presetService;
        titleService.setTitle('Movements');
        // TODO: this data should come from localStorage, if not present then fetch from BE
        this.viewData.types = [{
                ctg_ctg_value: 1,
                ctg_desc: 'Expense'
            }, {
                ctg_ctg_value: 2,
                ctg_desc: 'Income'
            }, {
                ctg_ctg_value: 3,
                ctg_desc: 'Transfer'
            }];
        // TODO: this data should come from localStorage, if not present then fetch from BE
        this.viewData.statuses = [{
                ctg_ctg_value: 1,
                ctg_desc: 'Active'
            }, {
                ctg_ctg_value: 2,
                ctg_desc: 'Cancelled'
            }, {
                ctg_ctg_value: 3,
                ctg_desc: 'Pending'
            }];
        // TODO: this data should have an entity
        this.viewData.budgets = [
            'Food',
            'Services',
            'Renewal',
            'Groceries',
            'Mom',
            'Health'
        ];
        this.model.date = this.DateToStringDate(new Date());
    }
    MovementComponent.prototype.retrieveAccountsAndBalance = function () {
        var _this = this;
        this.services.account.getAll().then(function (accounts) {
            _this.accounts = accounts;
            _this.viewData.accounts = _this.accounts;
        });
    };
    MovementComponent.prototype.ngOnInit = function () {
        var _this = this;
        // TODO: this should be refactored the same way as categories and places
        this.retrieveAccountsAndBalance();
        this.services.category.getAllForUser(this.user).then(function (categories) {
            _this.viewData.categories = categories;
        });
        this.services.place.getAllForUser(this.user).then(function (places) {
            _this.viewData.places = places;
        });
        this.services.entry.getAllForUser(this.user);
        this.services.preset.getAllForUser(this.user).then(function (list) {
            _this.viewData.presets = list;
            var p = new _crosscommon_entities_Preset__WEBPACK_IMPORTED_MODULE_5__["Preset"]();
            p.pre_name = '';
            _this.viewData.presets.unshift(p);
        });
        this.viewData.entries = this.services.entry.list();
        this.viewData.presets = this.services.preset.list();
        this.addNewCategoryForUser = this.addNewCategoryForUser.bind(this);
        this.addNewPlaceForUser = this.addNewPlaceForUser.bind(this);
        this.services.movement.getAllForUser(this.user).then(function (list) {
            _this.viewData.movements = list;
            _this.viewData.movements = _this.viewData.movements
                .sort(function (a, b) { return a.mov_date >= b.mov_date ? -1 : 1; })
                .slice(0, 40);
        });
        /* analysis */
        // const year = 2017;
        // const month = 6;
        // let iterable = year * 100 + month;
        // const account = '7';
        // let en = this.services.entry.list;
        // console.log('entries',en);
        // let mov = this.services.movement.list
        //     .filter((m: Movement) => (new Date(m.mov_date)).getFullYear() * 100 + (new Date(m.mov_date)).getMonth() + 1 === iterable);
        // let mon = en.filter((e:Entry) => (new Date(e.ent_date)).getFullYear() * 100 + (new Date(e.ent_date)).getMonth() + 1 === iterable);
        // console.log('movements for 2017march',mov);
        // console.log('entries for 2017march',mon);
        // mov.forEach((m: Movement) => {
        //     if (mon.filter((e: Entry) => e.ent_id === m.mov_id).length === 2){
        //         return;
        //     } else {
        //         console.log('mov not found in entries',m);
        //     }
        // });
        // console.log('entries for Mosho Cartera Income',mon.filter((e: Entry) => e.ent_id_account === account && e.ent_ctg_type == 2));
        // console.log('entries for Mosho Cartera Expense',mon.filter((e: Entry) => e.ent_id_account === account && e.ent_ctg_type == 1));
    };
    MovementComponent.prototype.movementFlowType = function (value) {
        if (!value) {
            return this._movementFlowType;
        }
        this._movementFlowType = value;
        this.isTransfer = false;
        this.isCustom = false;
        this.isPreset = false;
        switch (value) {
            case 'custom': {
                this.isCustom = true;
                break;
            }
            case 'transfer': {
                this.isTransfer = true;
                break;
            }
            case 'preset': {
                this.isPreset = true;
                break;
            }
            default: {
            }
        }
    };
    MovementComponent.prototype.newMovement = function (form) {
        var _this = this;
        console.log('as preset?', form.value.fAsPreset);
        if (form.value.fAsPreset) {
            var p_1 = new _crosscommon_entities_Preset__WEBPACK_IMPORTED_MODULE_5__["Preset"]();
            // TODO: hash generator for IDs
            p_1.pre_id = this.services.preset.newId();
            p_1.pre_name = form.value.fName;
            p_1.pre_date = this.stringDateToDate(form.value.fDate);
            p_1.pre_amount = form.value.fAmount;
            p_1.pre_id_account = form.value.fAccount;
            if (this.isTransfer) {
                p_1.pre_id_account_to = form.value.fAccountTo;
                p_1.pre_ctg_type = 3;
            }
            else {
                p_1.pre_ctg_type = form.value.fMovementType;
            }
            if (!this.isTransfer) {
                p_1.pre_budget = form.value.fBudget || null;
                p_1.pre_id_category = form.value.fCategory;
                p_1.pre_id_place = form.value.fPlace;
            }
            else {
                p_1.pre_budget = null;
                p_1.pre_id_category = '0';
                p_1.pre_id_place = '0';
            }
            p_1.pre_desc = form.value.fDescription;
            p_1.pre_notes = form.value.fNotes;
            p_1.pre_id_user = this.user;
            p_1.pre_ctg_status = 1;
            p_1.pre_txt_type = this.findIn(this.viewData.types, function (e) { return e.ctg_ctg_value == p_1.pre_ctg_type; }, 'ctg_desc');
            p_1.pre_txt_account = this.findIn(this.viewData.accounts, function (e) { return e.acc_id == p_1.pre_id_account; }, 'acc_name');
            //p.pre_txt_account_to = '';
            p_1.pre_txt_category = this.findIn(this.viewData.categories, function (e) { return e.mct_id === p_1.pre_id_category; }, 'mct_name');
            p_1.pre_txt_place = this.findIn(this.viewData.places, function (e) { return e.mpl_id === p_1.pre_id_place; }, 'mpl_name');
            p_1.pre_txt_status = this.findIn(this.viewData.statuses, function (e) { return e.ctg_ctg_value == p_1.pre_ctg_status; }, 'ctg_desc');
            this.services.preset.newItem(p_1);
            this.viewData.presets.push(p_1);
            console.log('this is the preset', p_1);
        }
        else {
            var m_1 = new _crosscommon_entities_Movement__WEBPACK_IMPORTED_MODULE_3__["Movement"]();
            m_1.mov_date = this.stringDateToDate(form.value.fDate);
            if (this.model.id) { // we are editing instead of creating a new movement
                m_1.mov_id = this.model.id;
            }
            else {
                m_1.mov_id = this.services.movement.newId(m_1.mov_date);
            }
            m_1.mov_desc = form.value.fDescription;
            m_1.mov_amount = form.value.fAmount;
            m_1.mov_id_account = form.value.fAccount;
            if (this.isTransfer) {
                m_1.mov_id_account_to = form.value.fAccountTo;
                m_1.mov_ctg_type = 3;
            }
            else {
                m_1.mov_ctg_type = form.value.fMovementType;
            }
            if (!this.isTransfer) {
                m_1.mov_budget = form.value.fBudget || null;
                m_1.mov_id_category = form.value.fCategory;
                m_1.mov_id_place = form.value.fPlace;
            }
            else {
                m_1.mov_budget = null;
                m_1.mov_id_category = '0';
                m_1.mov_id_place = '0';
            }
            m_1.mov_notes = form.value.fNotes;
            m_1.mov_id_user = this.user;
            m_1.mov_ctg_status = 1;
            m_1.mov_txt_account = this.findIn(this.viewData.accounts, function (e) { return e.acc_id == m_1.mov_id_account; }, 'acc_name');
            if (m_1.mov_id_account_to) {
                m_1.mov_txt_account_to = this.findIn(this.viewData.accounts, function (e) { return e.acc_id == m_1.mov_id_account_to; }, 'acc_name');
            }
            m_1.mov_txt_type = this.findIn(this.viewData.types, function (e) { return e.ctg_ctg_value == m_1.mov_ctg_type; }, 'ctg_desc');
            //m.mov_txt_budget = m.mov_budget;
            m_1.mov_txt_category = this.findIn(this.viewData.categories, function (e) { return e.mct_id === m_1.mov_id_category; }, 'mct_name');
            m_1.mov_txt_place = this.findIn(this.viewData.places, function (e) { return e.mpl_id === m_1.mov_id_place; }, 'mpl_name');
            m_1.mov_txt_status = this.findIn(this.viewData.statuses, function (e) { return e.ctg_ctg_value == m_1.mov_ctg_status; }, 'ctg_desc');
            if (this.model.id) {
                // edition
                var existingIndex = this.viewData.movements.findIndex(function (m) { return m.mov_id === _this.model.id; });
                m_1.mov_date_add = new Date(this.viewData.movements[existingIndex].mov_date_add);
                this.services.movement.edit(m_1, function () { return _this.retrieveAccountsAndBalance(); });
                m_1['isEdited'] = true; // flag to render as edited on UI
                this.viewData.movements[existingIndex] = m_1;
                this.model.id = null;
            }
            else {
                // new movement
                this.services.movement.newItem(m_1, function () { return _this.retrieveAccountsAndBalance(); });
                m_1['isNew'] = true; // flag to render as new on UI
                console.log('this is the movement', m_1);
                this.viewData.movements.unshift(m_1);
                this.viewData.movements = this.viewData.movements
                    .sort(function (a, b) { return (new Date(a.mov_date)).getTime() >= (new Date(b.mov_date)).getTime() ? -1 : 1; });
                // Entries
                var localEntries = [];
                localEntries = this.generateEntriesForMovement(m_1);
                console.log('these are all entries', this.services.entry.list);
                // add to balance
                this.services.balance.add(localEntries);
                console.log('these are all balance', this.services.balance.list);
            }
            this.resetForm(form);
            return false;
        }
    };
    MovementComponent.prototype.generateEntriesForMovement = function (m) {
        var localEntries = [];
        // TODO: Entry creation should be inside entry.service, just pass the movement as argument
        var e = new _crosscommon_entities_Entry__WEBPACK_IMPORTED_MODULE_4__["Entry"]();
        e.ent_id = m.mov_id;
        e.ent_sequential = 1;
        e.ent_desc = m.mov_desc;
        e.ent_amount = m.mov_amount;
        e.ent_id_account = m.mov_id_account;
        e.ent_ctg_type = m.mov_ctg_type === 3 ? 1 : m.mov_ctg_type;
        e.ent_date = m.mov_date;
        e.ent_budget = m.mov_budget;
        e.ent_id_category = m.mov_id_category;
        e.ent_id_place = m.mov_id_place;
        e.ent_notes = m.mov_notes;
        e.ent_id_user = m.mov_id_user;
        e.ent_ctg_status = m.mov_ctg_status;
        e.ent_txt_account = m.mov_txt_account;
        e.ent_txt_type = m.mov_txt_type;
        //e.ent_txt_budget = m.mov_txt_budget;
        e.ent_txt_category = m.mov_txt_category;
        e.ent_txt_place = m.mov_txt_place;
        e.ent_txt_status = m.mov_txt_status;
        localEntries.push(this.services.entry.newItem(e));
        e = new _crosscommon_entities_Entry__WEBPACK_IMPORTED_MODULE_4__["Entry"]();
        e.ent_id = m.mov_id;
        e.ent_sequential = 2;
        e.ent_desc = m.mov_desc;
        e.ent_amount = m.mov_amount;
        e.ent_id_account = m.mov_id_account_to || "1";
        e.ent_ctg_type = m.mov_ctg_type === 1 || m.mov_ctg_type === 3 ? 2 : 1;
        e.ent_date = m.mov_date;
        e.ent_budget = m.mov_budget;
        e.ent_id_category = m.mov_id_category;
        e.ent_id_place = m.mov_id_place;
        e.ent_notes = m.mov_notes;
        e.ent_id_user = m.mov_id_user;
        e.ent_ctg_status = m.mov_ctg_status;
        e.ent_txt_account = this.findIn(this.viewData.accounts, function (i) { return i.acc_id == e.ent_id_account; }, 'acc_name');
        e.ent_txt_type = this.findIn(this.viewData.types, function (i) { return i.ctg_ctg_value == e.ent_ctg_type; }, 'ctg_desc');
        //e.ent_txt_budget = m.mov_txt_budget;
        e.ent_txt_category = m.mov_txt_category;
        e.ent_txt_place = m.mov_txt_place;
        e.ent_txt_status = m.mov_txt_status;
        localEntries.push(this.services.entry.newItem(e));
        return localEntries;
    };
    // TODO: local methods that can be used as generic should be moved to utils.service
    MovementComponent.prototype.findIn = function (arr, findCriteria, returnField) {
        var f = arr.find(function (e) { return findCriteria(e); });
        if (f) {
            return f[returnField];
        }
        else {
            return undefined;
        }
    };
    MovementComponent.prototype.stringDateToDate = function (date) {
        if (/\d{4}-\d{2}-\d{2}/.test(date)) { // looks like a date
            var s = date.split('-');
            return new Date(parseInt(s[0]), parseInt(s[1]) - 1, parseInt(s[2]));
        }
        return undefined;
    };
    MovementComponent.prototype.DateToStringDate = function (date) {
        var mm = date.getMonth() + 1;
        var dd = date.getDate();
        return [date.getFullYear(),
            (mm > 9 ? '' : '0') + mm,
            (dd > 9 ? '' : '0') + dd
        ].join('-');
    };
    MovementComponent.prototype.addNewCategoryForUser = function (category) {
        var _this = this;
        this.services.category.newItem(category, this.user).then(function (item) {
            _this.viewData.categories = _this.services.category.list();
            _this.model.category = item.mct_id;
        });
    };
    MovementComponent.prototype.addNewPlaceForUser = function (place) {
        var _this = this;
        this.services.place.newItem(place, this.user).then(function (item) {
            _this.viewData.places = _this.services.place.list();
            _this.model.place = item.mpl_id;
        });
    };
    /*selectPreset(presetId: string, form: any){
        this.services.preset.getAll().then((list: Preset[]) => {
            let preset: Preset = list.find((p: Preset) => p.pre_id === presetId);
            let fields: Array<any> = [
                {
                    'control': 'fDescription'
                    , 'value': 'pre_desc'
                },{
                    'control': 'fAmount'
                    , 'value': 'pre_amount'
                },{
                    'control': 'fAccount'
                    , 'value': 'pre_id_account'
                },{
                    'control': 'fAccountTo'
                    , 'value': 'pre_id_account_to'
                },{
                    'control': 'fMovementType'
                    , 'value': 'pre_ctg_type'
                },{
                    'control': 'fDate'
                    , 'value': 'pre_date'
                },{
                    'control': 'fBudget'
                    , 'value': 'pre_budget'
                },{
                    'control': 'fCategory'
                    , 'value': 'pre_id_category'
                },{
                    'control': 'fPlace'
                    , 'value': 'pre_id_place'
                },{
                    'control': 'fNotes'
                    , 'value': 'pre_notes'
                }
            ];
    
            fields.forEach((f: any) => {
                if (form.controls[f.control] && preset[f.value]){
                    form.controls[f.control].setValue(preset[f.value]);
                }
            });
        });
    }*/
    MovementComponent.prototype.cancelMovement = function () {
        // TODO: upon cancellation, change status, modify other movement references to filter active movements, rebuild and transfer
    };
    MovementComponent.prototype.import = function (dataArray) {
        var _this = this;
        // imports raw data
        var data = dataArray;
        //let movements: Array<Movement> = [];
        var m;
        var transferFlag = false;
        var yearInitial = 9999;
        var monthInitial = 0;
        var yearFinal = (new Date()).getFullYear();
        var monthFinal = (new Date()).getMonth() + 1;
        var movements = [];
        var categories = [];
        //let place: string;
        // categories and places
        data.forEach(function (d, index, arr) {
            var values = d.split('|');
            if (!_this.findIn(_this.services.category.list(), function (e) { return e.mct_name === values[5]; }, 'mct_id')) {
                _this.services.category.newItem(values[5], _this.user);
            }
            if (!_this.findIn(_this.services.place.list(), function (e) { return e.mpl_name === values[6]; }, 'mpl_id')) {
                _this.services.place.newItem(values[6], _this.user);
            }
        });
        this.viewData.categories = this.services.category.list();
        this.viewData.places = this.services.place.list();
        data.forEach(function (d, index, arr) {
            try {
                var values_1 = d.split('|');
                if (transferFlag && values_1[5] === 'Traspaso') {
                    transferFlag = false;
                    return;
                }
                m = new _crosscommon_entities_Movement__WEBPACK_IMPORTED_MODULE_3__["Movement"]();
                //m.mov_id = this.services.movement.newId();
                m.mov_desc = values_1[7];
                m.mov_amount = parseFloat(values_1[3]);
                if (_this.findIn(_this.viewData.accounts, function (e) { return e.acc_name == values_1[1]; }, 'acc_id')) {
                    m.mov_id_account = _this.findIn(_this.viewData.accounts, function (e) { return e.acc_name == values_1[1]; }, 'acc_id');
                }
                else {
                    console.log('account not found', values_1[1], d);
                }
                m.mov_date = _this.stringDateToDate(values_1[0]);
                if (yearInitial * 100 + monthInitial > m.mov_date.getFullYear() * 100 + (m.mov_date.getMonth() + 1)) {
                    yearInitial = m.mov_date.getFullYear();
                    monthInitial = m.mov_date.getMonth() + 1;
                }
                if (values_1[5] === 'Traspaso' && arr[index + 1] && arr[index + 1].split('|')[5] === "Traspaso" && arr[index + 1].split('|')[7] === values_1[7] && arr[index + 1].split('|')[3] === values_1[3]) {
                    transferFlag = true;
                    m.mov_ctg_type = 3;
                    // peek next item
                    // if (arr[index+1] && arr[index+1].split('|')[5] === "Traspaso" && arr[index+1].split('|')[7] === values[7]){
                    m.mov_id_account_to = _this.findIn(_this.viewData.accounts, function (e) { return e.acc_name == arr[index + 1].split('|')[1]; }, 'acc_id');
                    // }
                    // Transfers always have to be expense first, income later, fix when provided the other way around
                    if (values_1[2] === 'CARGO') {
                        // swap accounts
                        var temp = m.mov_id_account;
                        m.mov_id_account = m.mov_id_account_to;
                        m.mov_id_account_to = temp;
                    }
                    m.mov_id_category = '0';
                    m.mov_id_place = '0';
                }
                else {
                    m.mov_ctg_type = values_1[2] === 'ABONO' ? 1 : 2;
                    m.mov_budget = '' + ((m.mov_date.getFullYear() * 100) + (m.mov_date.getMonth() + 1));
                    m.mov_id_category = _this.findIn(_this.viewData.categories, function (e) { return e.mct_name === values_1[5]; }, 'mct_id');
                    m.mov_id_place = _this.findIn(_this.viewData.places, function (e) { return e.mpl_name === values_1[6]; }, 'mpl_id');
                }
                m.mov_notes = '';
                m.mov_id_user = _this.user;
                m.mov_ctg_status = 1;
                m.mov_date_add = new Date();
                m.mov_date_mod = new Date();
                m.mov_txt_account = _this.findIn(_this.viewData.accounts, function (e) { return e.acc_id == m.mov_id_account; }, 'acc_name');
                if (m.mov_id_account_to) {
                    m.mov_txt_account_to = _this.findIn(_this.viewData.accounts, function (e) { return e.acc_id == m.mov_id_account_to; }, 'acc_name');
                }
                m.mov_txt_type = _this.findIn(_this.viewData.types, function (e) { return e.ctg_ctg_value == m.mov_ctg_type; }, 'ctg_desc');
                //m.mov_txt_budget = m.mov_budget;
                m.mov_txt_category = _this.findIn(_this.viewData.categories, function (e) { return e.mct_id === m.mov_id_category; }, 'mct_name');
                m.mov_txt_place = _this.findIn(_this.viewData.places, function (e) { return e.mpl_id === m.mov_id_place; }, 'mpl_name');
                m.mov_txt_status = _this.findIn(_this.viewData.statuses, function (e) { return e.ctg_ctg_value == m.mov_ctg_status; }, 'ctg_desc');
                movements.push(m);
                // this.services.movement.newItem(m);
                // this.generateEntriesForMovement(m);
            }
            catch (e) {
                console.log('err', e);
            }
        });
        this.services.movement.newBatch(movements).forEach(function (m) {
            _this.generateEntriesForMovement(m);
        });
        // now apply to balance
        this.services.balance.rebuildAndTransferRange(yearInitial, monthInitial, yearFinal, monthFinal, this.user);
    };
    MovementComponent.prototype.setModelDetails = function (id, form, prefix) {
        var _this = this;
        var model;
        if (!this.viewData.showCreateForm) {
            this.viewData.showCreateForm = !this.viewData.showCreateForm;
        }
        if (prefix === 'pre') {
            model = this.viewData.presets
                .find(function (m) { return m.pre_id === id; });
        }
        else {
            model = this.viewData.movements
                .find(function (m) { return m.mov_id === id; });
            this.model.id = model[prefix + '_id']; // to tell the newMovementForm that this is an edition
        }
        if (model[prefix + '_ctg_type'] === 3) {
            this.movementFlowType('transfer');
        }
        else {
            this.movementFlowType('custom');
        }
        var fields = [
            {
                'control': 'fDescription',
                'value': '_desc'
            }, {
                'control': 'fAmount',
                'value': '_amount'
            }, {
                'control': 'fAccount',
                'value': '_id_account'
            }, {
                'control': 'fAccountTo',
                'value': '_id_account_to'
            }, {
                'control': 'fMovementType',
                'value': '_ctg_type'
            }, {
                'control': 'fDate',
                'value': '_date'
            }, {
                'control': 'fBudget',
                'value': '_budget'
            }, {
                'control': 'fCategory',
                'value': '_id_category'
            }, {
                'control': 'fPlace',
                'value': '_id_place'
            }, {
                'control': 'fNotes',
                'value': '_notes'
            }
        ];
        setTimeout(function () {
            fields.forEach(function (f) {
                if (form.controls[f.control]) {
                    var value = model[prefix + f.value];
                    var valueToSet = null;
                    if (f.value === '_date') {
                        if (value !== null) {
                            valueToSet = _this.DateToStringDate(new Date(value));
                        }
                        else {
                            valueToSet = _this.DateToStringDate(new Date());
                        }
                    }
                    else {
                        valueToSet = value || null;
                    }
                    form.controls[f.control].setValue(valueToSet);
                }
            });
        }, 0);
    };
    MovementComponent.prototype.handleNewMovement = function (form) {
        if (this.viewData.showCreateForm) { // if it's visible, reset and then hide
            this.resetForm(form);
        }
        this.viewData.showCreateForm = !this.viewData.showCreateForm;
    };
    MovementComponent.prototype.resetForm = function (form) {
        this.model.id = null;
        this.model.selectedPreset = null;
        this.movementFlowType('custom');
        form.reset();
        form.controls['fMovementFlowType'].setValue('custom');
        this.model.type = 1;
        if (form.controls['fMovementType']) {
            form.controls['fMovementType'].setValue(1);
        }
        form.controls['fDate'].setValue(this.DateToStringDate(new Date()));
    };
    MovementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'movement',
            template: __webpack_require__(/*! ./movement.template.html */ "./src/app/money/movement.template.html"),
            providers: [
                _account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"],
                _category_service__WEBPACK_IMPORTED_MODULE_7__["CategoryService"],
                _place_service__WEBPACK_IMPORTED_MODULE_8__["PlaceService"],
                _movement_service__WEBPACK_IMPORTED_MODULE_9__["MovementService"],
                _entry_service__WEBPACK_IMPORTED_MODULE_10__["EntryService"],
                _balance_service__WEBPACK_IMPORTED_MODULE_11__["BalanceService"],
                _preset_service__WEBPACK_IMPORTED_MODULE_12__["PresetService"]
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"],
            _category_service__WEBPACK_IMPORTED_MODULE_7__["CategoryService"],
            _place_service__WEBPACK_IMPORTED_MODULE_8__["PlaceService"],
            _movement_service__WEBPACK_IMPORTED_MODULE_9__["MovementService"],
            _entry_service__WEBPACK_IMPORTED_MODULE_10__["EntryService"],
            _balance_service__WEBPACK_IMPORTED_MODULE_11__["BalanceService"],
            _preset_service__WEBPACK_IMPORTED_MODULE_12__["PresetService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], MovementComponent);
    return MovementComponent;
}());



/***/ }),

/***/ "./src/app/money/movement.service.ts":
/*!*******************************************!*\
  !*** ./src/app/money/movement.service.ts ***!
  \*******************************************/
/*! exports provided: MovementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovementService", function() { return MovementService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _crosscommon_entities_Movement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../crosscommon/entities/Movement */ "./src/crosscommon/entities/Movement.ts");
/* harmony import */ var _common_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/storage.service */ "./src/app/common/storage.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_sync_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/sync.api */ "./src/app/common/sync.api.ts");
/* harmony import */ var _crosscommon_Utility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../crosscommon/Utility */ "./src/crosscommon/Utility.ts");






var MovementService = /** @class */ (function () {
    // ALWAYS_ON_LINE = means no local storage layer, always fetch from server and always push to server, just save to storage when an error ocurrs
    // LOCAL_FIRST = means use local storage layer, fetch from server to local storage then push to server
    function MovementService(storage, sync) {
        this.data = [];
        this.storage = null;
        this.sync = null;
        this.config = {
            storageKey: 'movements',
            defaultUser: 'anon',
            api: {
                list: '/api/movements',
                create: '/api/movements',
                update: '/api/movements/:id',
                batch: '/movement/batch' // not supported in NodeTS
            }
        };
        this.apiRoot = '';
        this.usage = 'ALWAYS_ON_LINE';
        this.storage = storage;
        this.sync = sync;
        // get api root
        var options = storage.getObject('Options');
        this.apiRoot = options ? options['optServerAddress'] : '';
    }
    MovementService.prototype.list = function () {
        return this.data;
    };
    MovementService.prototype.initialData = function () {
        var _this = this;
        var list;
        var newData = function (mov_id, mov_date, mov_amount, mov_account, mov_account_to, mov_ctg_type, mov_budget, mov_id_category, mov_id_place, mov_desc, mov_notes, mov_id_user, mov_ctg_status, mov_txt_type, mov_txt_account, mov_txt_account_to, mov_txt_budget, mov_txt_category, mov_txt_place, mov_txt_status) {
            return {
                mov_id: mov_id,
                mov_date: mov_date,
                mov_amount: mov_amount,
                mov_account: mov_account,
                mov_account_to: mov_account_to,
                mov_ctg_type: mov_ctg_type,
                mov_budget: mov_budget,
                mov_id_category: mov_id_category,
                mov_id_place: mov_id_place,
                mov_desc: mov_desc,
                mov_notes: mov_notes,
                mov_id_user: mov_id_user,
                mov_ctg_status: mov_ctg_status,
                mov_txt_type: mov_txt_type,
                mov_txt_account: mov_txt_account,
                mov_txt_account_to: mov_txt_account_to,
                mov_txt_budget: mov_txt_budget,
                mov_txt_category: mov_txt_category,
                mov_txt_place: mov_txt_place,
                mov_txt_status: mov_txt_status
            };
        };
        var data = [];
        //data.push(newData('1','Walmart'));
        list = data.map(function (d) {
            d.mov_id_user = _this.config.defaultUser;
            return new _crosscommon_entities_Movement__WEBPACK_IMPORTED_MODULE_1__["Movement"](d);
        });
        return list;
    };
    /**
     * Guidance for this method objective:
     * - Read sync data from storage
     * - Read from storage to memory
     * - If server is available
     *   - Push sync data to server, server decides changes to keep, returns sync results (merge if needed)
     *   - Fetch from server to memory, then save to local
     * - Return data
     *
     * When new data comes (new, update, delete):
     * - Create sync data in memory and push it to local (to be available if push to server fails)
     * - Update local with changes
     * - If server is available
     *   - Push sync data to server, server decides changes to keep, returns sync results (straightforward in this case)
     */
    MovementService.prototype.getAll = function () {
        var _this = this;
        /*let fromStorage = this.storage.get(this.config.storageKey);
        if (fromStorage){
            this.data = JSON.parse(fromStorage);
        } else {
            this.data = this.initialData();
        }*/
        // sort data
        return this.sync.get("" + this.apiRoot + this.config.api.list).then(function (data) {
            _this.data = data.map(function (d) { return new _crosscommon_entities_Movement__WEBPACK_IMPORTED_MODULE_1__["Movement"](d); });
            _this.data = _this.data.sort(_this.sort);
            return _this.data;
        });
    };
    MovementService.prototype.sort = function (a, b) {
        if ((new Date(a.mov_date)).getTime() < (new Date(b.mov_date)).getTime()) {
            return -1;
        }
        else if ((new Date(a.mov_date)).getTime() > (new Date(b.mov_date)).getTime()) {
            return 1;
        }
        else {
            return 0;
        }
    };
    MovementService.prototype.getAllForUser = function (user) {
        return this.getAll().then(function (list) {
            return list.filter(function (x) { return x.mov_id_user === user; });
        });
    };
    MovementService.prototype.saveToStorage = function () {
        //this.storage.set(this.config.storageKey,JSON.stringify(this.data));
    };
    MovementService.prototype.newId = function (date) {
        return _crosscommon_Utility__WEBPACK_IMPORTED_MODULE_5__["Utils"].hashId('mov', 32, date);
    };
    MovementService.prototype.newItem = function (movement, callback) {
        var _this = this;
        var newId = this.newId(new Date(movement.mov_date));
        //const newId: string = Utils.hashId('mov', 32, new Date(movement.mov_date));
        movement.mov_id = newId;
        movement.mov_ctg_currency = 1;
        movement.mov_date_add = new Date();
        movement.mov_date_mod = new Date();
        var newItem = new _crosscommon_entities_Movement__WEBPACK_IMPORTED_MODULE_1__["Movement"](movement);
        //this.data.push(newItem);
        //this.saveToStorage();
        this.sync.post(this.config.api.create, newItem).then(function (response) {
            if (response.operationOk) {
                callback();
            }
            else {
                newItem['sync'] = false;
            }
            _this.data.push(newItem);
        }).catch(function (err) {
            // Append it to the listing but flag it as non-synced yet
            newItem['sync'] = false;
            _this.data.push(newItem);
        });
        return newItem;
    };
    MovementService.prototype.newBatch = function (movements) {
        var _this = this;
        movements.forEach(function (m) {
            m.mov_id = _this.newId(m.mov_date);
            _this.data.push(new _crosscommon_entities_Movement__WEBPACK_IMPORTED_MODULE_1__["Movement"](m));
        });
        this.sendBatchToServer(movements);
        this.saveToStorage();
        return movements;
    };
    MovementService.prototype.sendBatchToServer = function (list) {
        this.sync.post("" + this.apiRoot + this.config.api.batch, list).then(function (response) {
            // response: { operationOk: true, details: {  } }
            console.log('response movements batch', response);
        });
    };
    MovementService.prototype.edit = function (movement, callback) {
        var _this = this;
        movement.mov_ctg_currency = 1;
        movement.mov_date_mod = new Date();
        var item = new _crosscommon_entities_Movement__WEBPACK_IMPORTED_MODULE_1__["Movement"](movement);
        this.sync.post(this.config.api.update.replace(':id', movement.mov_id), item).then(function (response) {
            var index = _this.data.findIndex(function (d) { return d.mov_id === item.mov_id; });
            if (response.operationOk) {
                callback();
            }
            else {
                item['sync'] = false;
            }
            _this.data[index] = item;
        }).catch(function (err) {
            // Append it to the listing but flag it as non-synced yet
            var index = _this.data.findIndex(function (d) { return d.mov_id === item.mov_id; });
            item['sync'] = false;
            _this.data[index] = item;
        });
        return item;
    };
    MovementService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"], _common_sync_api__WEBPACK_IMPORTED_MODULE_4__["SyncAPI"]])
    ], MovementService);
    return MovementService;
}());



/***/ }),

/***/ "./src/app/money/movement.template.html":
/*!**********************************************!*\
  !*** ./src/app/money/movement.template.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<strong>Movements</strong>\r\n<br/>\r\n\r\n<form #newMovementForm=\"ngForm\" (ngSubmit)=\"newMovement(newMovementForm)\">\r\n    <button type=\"button\" (click)=\"handleNewMovement(newMovementForm)\">\r\n        {{(viewData.showCreateForm ? 'Hide Movement Form' : 'New Movement')}}\r\n    </button>\r\n\r\n    <div *ngIf=\"viewData.showCreateForm\">\r\n        <input type=\"radio\" name=\"fMovementFlowType\" id=\"fMovementFlowTypeCustom\"\r\n            [(ngModel)]=\"_movementFlowType\" (click)=\"movementFlowType('custom')\"\r\n            value=\"custom\">\r\n        <label for=\"fMovementFlowTypeCustom\">Custom</label>\r\n        <input type=\"radio\" name=\"fMovementFlowType\" id=\"fMovementFlowTypeTransfer\"\r\n            [(ngModel)]=\"_movementFlowType\" (click)=\"movementFlowType('transfer')\"\r\n            value=\"transfer\">\r\n        <label for=\"fMovementFlowTypeTransfer\">Transfer</label>\r\n\r\n        <div>\r\n            <h4 *ngIf=\"isCustom\">Custom</h4>\r\n            <h4 *ngIf=\"isTransfer\">Transfer</h4>\r\n\r\n            <span class=\"field\" *ngIf=\"viewData.presets.length > 1 && !model.id\">\r\n                <label for=\"fPreset\" class=\"label-left\">Use a Preset</label>\r\n                <select name=\"fPreset\" id=\"fPreset\" class=\"field-select\" [(ngModel)]=\"model.selectedPreset\" (change)=\"setModelDetails(model.selectedPreset,newMovementForm,'pre')\">\r\n                    <option *ngFor=\"let opt of viewData.presets\" value=\"{{opt.pre_id}}\">{{opt.pre_name}}</option>\r\n                </select>\r\n                <hr>\r\n            </span>\r\n            <span class=\"field\" *ngIf=\"model.id\">\r\n                <label for=\"id\" class=\"label-left\">Id</label>\r\n                <span type=\"text\" name=\"id\" id=\"id\" class=\"movement-input-id\">{{model.id}}</span>\r\n            </span>\r\n            <span class=\"field\">\r\n                <label for=\"fDescription\" class=\"label-left\">Description</label>\r\n                <input type=\"text\" name=\"fDescription\" id=\"fDescription\" class=\"field-input movement-input-description\" ngModel>\r\n            </span>\r\n            <span class=\"field\">\r\n                <label for=\"fAmount\" class=\"label-left\">Amount</label>\r\n                <input type=\"number\" name=\"fAmount\" id=\"fAmount\" class=\"field-input\" step=\"0.01\" ngModel>\r\n            </span>\r\n            <span class=\"field\">\r\n                <label for=\"fAccount\" class=\"label-left\">Account</label>\r\n                <select name=\"fAccount\" id=\"fAccount\" class=\"field-select\" ngModel>\r\n                    <option *ngFor=\"let opt of viewData.accounts\" value=\"{{opt.acc_id}}\">{{opt.acc_name}} / {{opt.bal_final | currency:'USD':'symbol-narrow':'1.2-2'}}</option>\r\n                </select>\r\n            </span>\r\n            <span class=\"field\" *ngIf=\"isTransfer\">\r\n                <label for=\"fAccountTo\" class=\"label-left\">Account To</label>\r\n                <select name=\"fAccountTo\" id=\"fAccountTo\" class=\"field-select\" ngModel>\r\n                    <option *ngFor=\"let opt of viewData.accounts\" value=\"{{opt.acc_id}}\">{{opt.acc_name}} / {{opt.bal_final | currency:'USD':'symbol-narrow':'1.2-2'}}</option>\r\n                </select>\r\n            </span>\r\n            <span class=\"field\" *ngIf=\"!isTransfer\">\r\n                <input type=\"radio\" [value]=\"1\" name=\"fMovementType\" id=\"fMovementType_1\" [(ngModel)]=\"model.type\">\r\n                <label for=\"fMovementType_1\" class=\"label-radio\">Expense</label>\r\n                \r\n                <input type=\"radio\" [value]=\"2\" name=\"fMovementType\" id=\"fMovementType_2\" [(ngModel)]=\"model.type\">\r\n                <label for=\"fMovementType_2\" class=\"label-radio\">Income</label>\r\n            </span>\r\n            <span class=\"field\">\r\n                <label for=\"fDate\" class=\"label-left\">Movement Date</label>\r\n                <input type=\"date\" name=\"fDate\" [(ngModel)]=\"model.date\">\r\n            </span>\r\n            <span class=\"field\" *ngIf=\"!isTransfer\">\r\n                <label for=\"fPlace\" class=\"label-left\">Place</label>\r\n                <select name=\"fPlace\" id=\"fPlace\" class=\"field-select\" [(ngModel)]=\"model.place\">\r\n                    <option *ngFor=\"let opt of viewData.places\" [value]=\"opt.mpl_id\" [selected]=\"opt.mpl_id === newMovementForm.value.fPlace\">{{opt.mpl_name}}</option>\r\n                </select>\r\n                <combo-item [name]=\"place\" [addNewItem]=\"addNewPlaceForUser\"></combo-item>\r\n            </span>\r\n            <span class=\"field\" *ngIf=\"!isTransfer\">\r\n                <label for=\"fCategory\" class=\"label-left\">Category</label>\r\n                <select name=\"fCategory\" id=\"fCategory\" class=\"field-select\" [(ngModel)]=\"model.category\">\r\n                    <option *ngFor=\"let opt of viewData.categories\" [value]=\"opt.mct_id\" [selected]=\"opt.mct_id === newMovementForm.value.fCategory\">{{opt.mct_name}}</option>\r\n                </select>\r\n                <combo-item [name]=\"category\" [addNewItem]=\"addNewCategoryForUser\"></combo-item>\r\n            </span>\r\n            <span class=\"field\" *ngIf=\"!isTransfer\">\r\n                <label for=\"fBudget\" class=\"field-input label-left\">Budget</label>\r\n                <input type=\"text\" name=\"fBudget\" id=\"fBudget\" class=\"field-input movement-input-budget\" ngModel>\r\n            </span>\r\n            <span class=\"field\">\r\n                <label for=\"fNotes\" class=\"label-left\">Notes</label>\r\n                <input type=\"text\" name=\"fNotes\" id=\"fNotes\" class=\"field-input movement-input-notes\" ngModel>\r\n            </span>\r\n            <span class=\"field\">\r\n                <hr>\r\n                <label for=\"fAsPreset\" class=\"label-left\">As Preset</label>\r\n                <input type=\"checkbox\" name=\"fAsPreset\" id=\"fAsPreset\" [(ngModel)]=\"model.asPreset\">\r\n            </span>\r\n            <span class=\"field\" *ngIf=\"model.asPreset\">\r\n                <label for=\"fName\" class=\"label-left\">Preset Name</label>\r\n                <input type=\"text\" name=\"fName\" id=\"fName\" class=\"field-input\" ngModel>\r\n            </span>\r\n            <button type=\"submit\">{{model.asPreset ? 'Save as Preset' : (model.id !== null ? 'Update Movement' : 'Save Movement')}}</button>\r\n        </div>\r\n    </div>\r\n</form>\r\n<!--\r\n<table>\r\n    <tr>\r\n        <th>Id</th>\r\n        <th>Date</th>\r\n        <th>Account</th>\r\n        <th>Account To</th>\r\n        <th>Type</th>\r\n        <th>Amount</th>\r\n        <th>Budget</th>\r\n        <th>Category</th>\r\n        <th>Place</th>\r\n        <th>Description</th>\r\n        <th>Notes</th>\r\n        <th>Status</th>\r\n    </tr>\r\n    <tr *ngFor=\"let m of viewData.movements\">\r\n        <td>{{m.mov_id}}</td>\r\n        <td>{{m.mov_date | date: 'yyyy-MM-dd'}}</td>\r\n        <td>{{m.mov_txt_account}}</td>\r\n        <td>{{m.mov_txt_account_to}}</td>\r\n        <td>{{m.mov_txt_type}}</td>\r\n        <td>{{m.mov_amount | currency:'USD':'symbol-narrow':'1.2-2'}}</td>\r\n        <td>{{m.mov_budget}}</td>\r\n        <td>{{m.mov_txt_category}}</td>\r\n        <td>{{m.mov_txt_place}}</td>\r\n        <td>{{m.mov_desc}}</td>\r\n        <td>{{m.mov_notes}}</td>\r\n        <td>{{m.mov_txt_status}}</td>\r\n    </tr>\r\n</table>\r\n-->\r\n<div class=\"movement-list\">\r\n    <div *ngFor=\"let m of viewData.movements\" class=\"movement-box\" (click)=\"setModelDetails(m.mov_id,newMovementForm,'mov')\">\r\n        <span *ngIf=\"false\">{{m.mov_id}}<br/></span>\r\n        <span [ngClass]=\"{'movement-amount-income': m.mov_ctg_type === 2, 'movement-amount-expense': m.mov_ctg_type === 1, 'movement-amount-transfer': m.mov_ctg_type === 3}\">\r\n            <span *ngIf=\"m.mov_txt_type === 'EXPENSE'\">-</span>\r\n            <span *ngIf=\"m.mov_txt_type === 'INCOME'\">+</span>\r\n            <span>{{m.mov_amount | currency:'USD':'symbol-narrow':'1.2-2'}}</span>\r\n        </span>\r\n        <span class=\"movement-account\">[{{m.mov_txt_account}}]</span>\r\n        <span class=\"movement-account\" *ngIf=\"m.mov_txt_account_to\"> -> [{{m.mov_txt_account_to}}]</span><br/>\r\n        <span class=\"movement-date\">[{{m.mov_date | date: 'yyyy-MM-dd'}}]</span>\r\n        <span class=\"movement-description\">{{m.mov_desc}}</span>\r\n        <br/>\r\n        <span class=\"movement-category\" *ngIf=\"m.mov_txt_category\">{{m.mov_txt_category}}</span>\r\n        <span class=\"movement-place\" *ngIf=\"m.mov_txt_place\"> | {{m.mov_txt_place}}</span>\r\n        <span class=\"movement-budget\" *ngIf=\"m.mov_budget\"> | #[{{m.mov_budget}}]</span>\r\n        <br *ngIf=\"m.mov_ctg_type === 1 || m.mov_ctg_type === 2\" />\r\n        <span class=\"movement-notes\">{{m.mov_notes}}</span>\r\n        <span class=\"movement-status\" *ngIf=\"false\">{{m.mov_txt_status}}</span>\r\n        <span class=\"movement-badge-new\" *ngIf=\"m.isNew\">new</span>\r\n        <span class=\"movement-badge-edited\" *ngIf=\"m.isEdited\">edited</span>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/money/place.service.ts":
/*!****************************************!*\
  !*** ./src/app/money/place.service.ts ***!
  \****************************************/
/*! exports provided: PlaceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceService", function() { return PlaceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _crosscommon_entities_Place__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../crosscommon/entities/Place */ "./src/crosscommon/entities/Place.ts");
/* harmony import */ var _common_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/storage.service */ "./src/app/common/storage.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_sync_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/sync.api */ "./src/app/common/sync.api.ts");
/* harmony import */ var _crosscommon_Utility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../crosscommon/Utility */ "./src/crosscommon/Utility.ts");






var PlaceService = /** @class */ (function () {
    function PlaceService(storage, sync) {
        this.data = [];
        this.storage = null;
        this.sync = null;
        this.config = {
            storageKey: 'places',
            defaultUser: 'anon',
            api: {
                list: '/api/places',
                create: '/api/places'
            }
        };
        this.storage = storage;
        this.sync = sync;
    }
    PlaceService.prototype.list = function () {
        return this.data;
    };
    PlaceService.prototype.initialData = function () {
        var _this = this;
        var list;
        var newData = function (mpl_id, mpl_name) {
            return { mpl_id: mpl_id, mpl_name: mpl_name };
        };
        var data = [];
        data.push(newData('1', 'Walmart'));
        data.push(newData('2', 'Vips'));
        data.push(newData('3', 'Sams Club'));
        data.push(newData('4', 'Cinepolis'));
        data.push(newData('5', 'The Home Depot'));
        list = data.map(function (d) {
            d.mpl_id_user = _this.config.defaultUser;
            return new _crosscommon_entities_Place__WEBPACK_IMPORTED_MODULE_1__["Place"](d);
        });
        return list;
    };
    PlaceService.prototype.getAll = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var sort;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                sort = (function (a, b) {
                    return a.mpl_name > b.mpl_name ? 1 : -1;
                });
                return [2 /*return*/, this.sync.get("" + this.config.api.list).then(function (data) {
                        _this.data = data.map(function (d) { return new _crosscommon_entities_Place__WEBPACK_IMPORTED_MODULE_1__["Place"](d); });
                        _this.data = _this.data.sort(sort);
                        return _this.data;
                    }).catch(function (err) {
                        return [];
                    })];
            });
        });
    };
    PlaceService.prototype.getAllForUser = function (user) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.getAll().then(function (all) {
                        return all.filter(function (x) { return x.mpl_id_user === user; });
                    })];
            });
        });
    };
    PlaceService.prototype.saveToStorage = function () {
        this.storage.set(this.config.storageKey, JSON.stringify(this.data));
    };
    PlaceService.prototype.newId = function () {
        var m = new _crosscommon_entities_Place__WEBPACK_IMPORTED_MODULE_1__["Place"]();
        var length = m.metadata.fields.find(function (f) { return f.dbName === 'mpl_id'; }).size;
        return _crosscommon_Utility__WEBPACK_IMPORTED_MODULE_5__["Utils"].hashId(m.metadata.prefix, length);
    };
    PlaceService.prototype.newItem = function (place, user) {
        var _this = this;
        var newId = this.newId();
        var newItem = new _crosscommon_entities_Place__WEBPACK_IMPORTED_MODULE_1__["Place"]({
            mpl_id: newId,
            mpl_name: place,
            mpl_id_user: user,
            mpl_date_add: new Date(),
            mpl_date_mod: new Date(),
            mpl_ctg_status: 1
        });
        //this.data.push(newItem);
        //this.saveToStorage();
        return this.sync.post(this.config.api.create, newItem).then(function (response) {
            if (response.processOk) {
                _this.data.push(newItem);
            }
            else {
                newItem['sync'] = false;
                _this.data.push(newItem);
            }
            return newItem;
        }).catch(function (err) {
            // Append it to the listing but flag it as non-synced yet
            newItem['sync'] = false;
            _this.data.push(newItem);
            return newItem;
        });
    };
    PlaceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"], _common_sync_api__WEBPACK_IMPORTED_MODULE_4__["SyncAPI"]])
    ], PlaceService);
    return PlaceService;
}());



/***/ }),

/***/ "./src/app/money/preset.service.ts":
/*!*****************************************!*\
  !*** ./src/app/money/preset.service.ts ***!
  \*****************************************/
/*! exports provided: PresetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresetService", function() { return PresetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _crosscommon_entities_Preset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../crosscommon/entities/Preset */ "./src/crosscommon/entities/Preset.ts");
/* harmony import */ var _common_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/storage.service */ "./src/app/common/storage.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_sync_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/sync.api */ "./src/app/common/sync.api.ts");
/* harmony import */ var _crosscommon_Utility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../crosscommon/Utility */ "./src/crosscommon/Utility.ts");






var PresetService = /** @class */ (function () {
    function PresetService(storage, sync) {
        this.data = [];
        this.storage = null;
        this.sync = null;
        this.config = {
            storageKey: 'presets',
            defaultUser: 'anon',
            api: {
                list: '/api/presets',
                create: '/api/presets',
                update: '/api/presets/:id'
            }
        };
        this.apiRoot = '';
        this.storage = storage;
        this.sync = sync;
        // get api root
        var options = storage.getObject('Options');
        this.apiRoot = options ? options['optServerAddress'] : '';
    }
    PresetService.prototype.list = function () {
        return this.data;
    };
    PresetService.prototype.initialData = function () {
        var _this = this;
        var list;
        var newData = function (pre_id, pre_name, pre_date, pre_amount, pre_account, pre_account_to, pre_ctg_type, pre_budget, pre_ctg_category, pre_ctg_place, pre_desc, pre_notes, pre_id_user, pre_ctg_status, pre_txt_type, pre_txt_account, pre_txt_account_to, pre_txt_budget, pre_txt_category, pre_txt_place, pre_txt_status) {
            return {
                pre_id: pre_id,
                pre_name: pre_name,
                pre_date: pre_date,
                pre_amount: pre_amount,
                pre_account: pre_account,
                pre_account_to: pre_account_to,
                pre_ctg_type: pre_ctg_type,
                pre_budget: pre_budget,
                pre_ctg_category: pre_ctg_category,
                pre_ctg_place: pre_ctg_place,
                pre_desc: pre_desc,
                pre_notes: pre_notes,
                pre_id_user: pre_id_user,
                pre_ctg_status: pre_ctg_status,
                pre_txt_type: pre_txt_type,
                pre_txt_account: pre_txt_account,
                pre_txt_account_to: pre_txt_account_to,
                pre_txt_budget: pre_txt_budget,
                pre_txt_category: pre_txt_category,
                pre_txt_place: pre_txt_place,
                pre_txt_status: pre_txt_status
            };
        };
        var data = [];
        //data.push(newData('1','Walmart'));
        list = data.map(function (d) {
            d.pre_id_user = _this.config.defaultUser;
            return new _crosscommon_entities_Preset__WEBPACK_IMPORTED_MODULE_1__["Preset"](d);
        });
        return list;
    };
    PresetService.prototype.getAll = function () {
        var _this = this;
        return this.sync.get("" + this.apiRoot + this.config.api.list).then(function (data) {
            _this.data = data.map(function (d) { return new _crosscommon_entities_Preset__WEBPACK_IMPORTED_MODULE_1__["Preset"](d); });
            _this.data = _this.data.sort(_this.sort);
            return _this.data;
        });
    };
    PresetService.prototype.sort = function (a, b) {
        if (a.pre_name > b.pre_name) {
            return -1;
        }
        else if (a.pre_name < b.pre_name) {
            return 1;
        }
        else {
            return 0;
        }
    };
    PresetService.prototype.getAllForUser = function (user) {
        return this.getAll().then(function (list) {
            return list.filter(function (x) { return x.pre_id_user === user; });
        });
    };
    PresetService.prototype.saveToStorage = function () {
        //this.storage.set(this.config.storageKey,JSON.stringify(this.data));
    };
    PresetService.prototype.newId = function () {
        return _crosscommon_Utility__WEBPACK_IMPORTED_MODULE_5__["Utils"].hashId('pre', 32);
    };
    PresetService.prototype.newItem = function (preset) {
        var _this = this;
        var newId = this.newId();
        preset.pre_id = newId;
        preset.pre_ctg_currency = 1;
        preset.pre_date_add = new Date();
        preset.pre_date_mod = new Date();
        var newItem = new _crosscommon_entities_Preset__WEBPACK_IMPORTED_MODULE_1__["Preset"](preset);
        //this.data.push(newItem);
        //this.saveToStorage();
        this.sync.post(this.config.api.create, newItem).then(function (response) {
            if (response.processOk) {
                _this.data.push(newItem);
            }
            else {
                newItem['sync'] = false;
                _this.data.push(newItem);
            }
        }).catch(function (err) {
            // Append it to the listing but flag it as non-synced yet
            newItem['sync'] = false;
            _this.data.push(newItem);
        });
        return newItem;
    };
    PresetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"], _common_sync_api__WEBPACK_IMPORTED_MODULE_4__["SyncAPI"]])
    ], PresetService);
    return PresetService;
}());



/***/ }),

/***/ "./src/app/money/rebuild.component.ts":
/*!********************************************!*\
  !*** ./src/app/money/rebuild.component.ts ***!
  \********************************************/
/*! exports provided: RebuildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RebuildComponent", function() { return RebuildComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _entry_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entry.service */ "./src/app/money/entry.service.ts");
/* harmony import */ var _balance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./balance.service */ "./src/app/money/balance.service.ts");
/* harmony import */ var _common_sync_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/sync.api */ "./src/app/common/sync.api.ts");


// services



var RebuildComponent = /** @class */ (function () {
    function RebuildComponent(entryService, balanceService, syncService) {
        this.services = {
            entry: null,
            balance: null
        };
        this.user = 'anon';
        this.sync = null;
        this.model = {
            month: 0,
            parsedYear: 0,
            parsedMonth: 0
        };
        this.viewData = {
            monthList: []
        };
        this.services.entry = entryService;
        this.services.balance = balanceService;
        this.sync = syncService;
    }
    RebuildComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.months().then(function (response) {
            _this.viewData.monthList = response;
        });
    };
    RebuildComponent.prototype.parseMonthName = function (iterable) {
        var year = Math.floor(iterable / 100);
        var month = iterable % 100;
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return year + " / " + months[month - 1];
    };
    RebuildComponent.prototype.months = function () {
        var _this = this;
        var currentDate = new Date();
        var max = currentDate.getFullYear() * 100 + (currentDate.getMonth() + 1);
        this.model.month = max;
        return this.services.balance.getAll().then(function (response) {
            var min = response.map(function (b) { return b.bal_year * 100 + b.bal_month; })
                .reduce(function (previous, current) { return previous <= current ? previous : current; }, 999999);
            var month;
            var list = [];
            if (min === 999999) {
                min = 201602;
            }
            while (min <= max) {
                console.log('calculated', min);
                list.push({
                    iterable: min,
                    name: _this.parseMonthName(min)
                });
                min = _this.services.balance.getNextMonth(Math.floor(min / 100), min % 100).iterable;
            }
            return list.reverse();
        });
    };
    RebuildComponent.prototype.parseModel = function () {
        this.model.month = parseInt(this.model.month + '');
        this.model.parsedYear = Math.floor(this.model.month / 100);
        this.model.parsedMonth = this.model.month % 100;
    };
    RebuildComponent.prototype.rebuild = function () {
        this.parseModel();
        // this.services.balance.rebuild(this.model.parsedYear, this.model.parsedMonth, this.user);
        this.sync.post('/api/balance/rebuild', {
            year: this.model.parsedYear,
            month: this.model.parsedMonth,
            user: 'anon'
        });
    };
    RebuildComponent.prototype.transfer = function () {
        this.parseModel();
        // this.services.balance.transfer(this.model.parsedYear, this.model.parsedMonth, this.user);
        this.sync.post('/api/balance/transfer', {
            year: this.model.parsedYear,
            month: this.model.parsedMonth,
            user: 'anon'
        });
    };
    RebuildComponent.prototype.rebuildAndTransfer = function () {
        this.parseModel();
        // this.services.balance.rebuildAndTransfer(this.model.parsedYear, this.model.parsedMonth, this.user);
        this.sync.post('/api/balance/rebuild-and-transfer', {
            year: this.model.parsedYear,
            month: this.model.parsedMonth,
            user: 'anon'
        });
    };
    RebuildComponent.prototype.rebuildAndTransferUntilCurrentMonth = function () {
        this.parseModel();
        // let currentDate: Date = new Date();
        // this.services.balance.rebuildAndTransferRange(this.model.parsedYear, this.model.parsedMonth, currentDate.getFullYear(), currentDate.getMonth() + 1, this.user);
        this.sync.post('/api/balance/rebuild-and-transfer-range', {
            year: this.model.parsedYear,
            month: this.model.parsedMonth,
            user: 'anon'
        });
    };
    RebuildComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'rebuild',
            template: __webpack_require__(/*! ./rebuild.template.html */ "./src/app/money/rebuild.template.html"),
            providers: [
                _entry_service__WEBPACK_IMPORTED_MODULE_2__["EntryService"],
                _balance_service__WEBPACK_IMPORTED_MODULE_3__["BalanceService"]
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_entry_service__WEBPACK_IMPORTED_MODULE_2__["EntryService"],
            _balance_service__WEBPACK_IMPORTED_MODULE_3__["BalanceService"],
            _common_sync_api__WEBPACK_IMPORTED_MODULE_4__["SyncAPI"]])
    ], RebuildComponent);
    return RebuildComponent;
}());



/***/ }),

/***/ "./src/app/money/rebuild.template.html":
/*!*********************************************!*\
  !*** ./src/app/money/rebuild.template.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <span class=\"field\">\r\n        <label for=\"fYear\" class=\"label-left\">Year-Month</label>\r\n        <select [(ngModel)]=\"model.month\" name=\"fMonth\" id=\"fMonth\">\r\n            <option *ngFor=\"let opt of viewData.monthList\" value=\"{{opt.iterable}}\">{{opt.name}}</option>\r\n        </select>\r\n    </span>\r\n\r\n    <button (click)=\"rebuild()\">Rebuild</button>\r\n    <button (click)=\"transfer()\">Transfer</button>\r\n    <button (click)=\"rebuildAndTransfer()\">Rebuild & Transfer</button>\r\n    <button (click)=\"rebuildAndTransferUntilCurrentMonth()\">Rebuild & Transfer Until Current Month</button>\r\n</div>"

/***/ }),

/***/ "./src/app/multimedia/multimedia.component.ts":
/*!****************************************************!*\
  !*** ./src/app/multimedia/multimedia.component.ts ***!
  \****************************************************/
/*! exports provided: MultimediaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultimediaComponent", function() { return MultimediaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _multimedia_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./multimedia.service */ "./src/app/multimedia/multimedia.service.ts");
/* harmony import */ var _multimediadet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./multimediadet.service */ "./src/app/multimedia/multimediadet.service.ts");
/* harmony import */ var _multimediaview_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./multimediaview.service */ "./src/app/multimedia/multimediaview.service.ts");
/* harmony import */ var _common_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/login.service */ "./src/app/common/login.service.ts");
/* harmony import */ var _common_sync_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/sync.api */ "./src/app/common/sync.api.ts");
/* harmony import */ var _crosscommon_DateUtility__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../crosscommon/DateUtility */ "./src/crosscommon/DateUtility.ts");


// services






var MultimediaComponent = /** @class */ (function () {
    function MultimediaComponent(multimediaService, multimediaDetService, multimediaViewService, loginService, syncService) {
        var _this = this;
        this.viewData = {
            multimediaList: [],
            multimediaDetList: [],
            multimediaViewList: [],
            mediaTypeList: [],
            platformList: [],
            showCreateForm: false,
            showCreateEpForm: false
        };
        this.services = {
            multimediaService: null,
            multimediaDetService: null,
            multimediaViewService: null,
            loginService: null,
            syncService: null
        };
        this.model = {
            id: null,
            fMediaType: 1,
            fSeason: 1,
            fYear: (new Date()).getFullYear(),
            fCurrentEp: '1'
        };
        this.epModel = {
            id: null,
            epId: null,
            fTitle: null,
            fYear: null,
            fEpTitle: null,
            fAltEpTitle: null,
            fUrl: null,
            isViewed: false,
            fDateViewed: new Date(),
            fSummary: null,
            fRating: 0,
            fPlatform: 0,
            fNotes: null
        };
        this.services.multimediaService = multimediaService;
        this.services.multimediaDetService = multimediaDetService;
        this.services.multimediaViewService = multimediaViewService;
        this.services.loginService = loginService;
        this.services.syncService = syncService;
        this.services.multimediaService.getAllForUser(this.services.loginService.getUsername() || 'anon').then(function (data) {
            _this.viewData.multimediaList = data;
        });
        this.services.multimediaDetService.getAllForUser(this.services.loginService.getUsername() || 'anon').then(function (data) {
            _this.viewData.multimediaDetList = data;
        });
        this.services.multimediaViewService.getAllForUser(this.services.loginService.getUsername() || 'anon').then(function (data) {
            _this.viewData.multimediaViewList = data;
        });
        var mediaTypes = JSON.stringify({
            gc: 'AND',
            cont: [{
                    f: 'ctg_id',
                    op: 'eq',
                    val: 'MULTIMEDIA_MEDIA_TYP' // TODO: fix database length for field ctg_name
                }]
        });
        this.services.syncService.get("/api/sync?entity=Catalog&q=" + mediaTypes).then(function (data) {
            _this.viewData.mediaTypeList = data.list;
        });
        var platformQuery = JSON.stringify({
            gc: 'AND',
            cont: [{
                    f: 'ctg_id',
                    op: 'eq',
                    val: 'MULTIMEDIA_PLATFORM' // TODO: fix database length for field ctg_name
                }]
        });
        this.services.syncService.get("/api/sync?entity=Catalog&q=" + platformQuery).then(function (data) {
            _this.viewData.platformList = data.list;
        });
    }
    MultimediaComponent.prototype.ngOnInit = function () {
        if (!this.services.loginService.isLoggedIn()) {
            console.log('User is not logged in');
        }
    };
    MultimediaComponent.prototype.handleNewItem = function () {
        this.viewData.showCreateForm = !this.viewData.showCreateForm;
    };
    MultimediaComponent.prototype.newItem = function (form) {
        var values = form.value;
        var item = this.services.multimediaService.newItem(values.fTitle, values.fMediaType, values.fSeason, values.fYear, values.fCurrentEp, values.fTotalEp, values.fUrl, this.services.loginService.getUsername() || 'anon');
        this.viewData.multimediaList.push(item);
    };
    MultimediaComponent.prototype.showNewEpForm = function (id, epId, title) {
        this.viewData.showCreateEpForm = true;
        this.epModel.id = id;
        this.epModel.epId = epId;
        this.epModel.fTitle = title;
        // see if we have data for this ep in order to populate form
        var detFound = this.services.multimediaDetService.list().find(function (item) { return item.mmd_id === id && item.mmd_id_ep === epId; });
        if (detFound) {
            this.epModel.fEpTitle = detFound.mmd_ep_title;
            this.epModel.fAltEpTitle = detFound.mmd_ep_alt_title;
            this.epModel.fYear = detFound.mmd_year;
            this.epModel.fUrl = detFound.mmd_url;
        }
        this.epModel.isViewed = false;
        var viewFound = this.services.multimediaViewService.list().find(function (item) { return item.mmv_id === id && item.mmv_id_ep === epId; });
        if (viewFound) {
            this.epModel.isViewed = true;
            this.epModel.fSummary = viewFound.mmv_ep_summary;
            this.epModel.fDateViewed = viewFound.mmv_date_viewed;
            this.epModel.fRating = viewFound.mmv_num_rating;
            this.epModel.fPlatform = viewFound.mmv_ctg_platform;
            this.epModel.fNotes = viewFound.mmv_notes;
        }
    };
    MultimediaComponent.prototype.hideNewEpForm = function () {
        this.viewData.showCreateEpForm = false;
    };
    MultimediaComponent.prototype.newEpItem = function (form) {
        var _this = this;
        var values = form.value;
        var queue = [];
        var item = this.services.multimediaDetService.newItem(this.epModel.id, this.epModel.epId, values.fEpTitle, values.fAltEpTitle, values.fYear, values.fUrl, this.services.loginService.getUsername() || 'anon');
        this.viewData.multimediaDetList.push(item);
        queue.push(this.services.multimediaDetService.asSyncQueue(item));
        if (values.fIsViewed) {
            var item2 = this.services.multimediaViewService.newItem(this.epModel.id, this.epModel.epId, values.fSummary, values.fDateViewed, values.fRating, values.fPlatform, values.fNotes, this.services.loginService.getUsername() || 'anon');
            this.viewData.multimediaViewList.push(item2);
            queue.push(this.services.multimediaViewService.asSyncQueue(item2));
            var media = this.viewData.multimediaList.find(function (item) { return item.mma_id === _this.epModel.id; });
            media.mma_current_ep = this.calculateNextEp(media.mma_current_ep);
            media.mma_date_mod = new Date();
            queue.push(this.services.multimediaService.asUpdateSyncQueue(media));
        }
        this.services.syncService.multipleRequest(queue);
    };
    MultimediaComponent.prototype.calculateNextEp = function (currentEp) {
        if (_crosscommon_DateUtility__WEBPACK_IMPORTED_MODULE_7__["DateUtils"].isDate(currentEp)) {
            var asDate = new Date(currentEp);
            return _crosscommon_DateUtility__WEBPACK_IMPORTED_MODULE_7__["DateUtils"].formatDate(_crosscommon_DateUtility__WEBPACK_IMPORTED_MODULE_7__["DateUtils"].addDays(asDate, 7));
        }
        var asInteger = Number.parseInt(currentEp);
        var asFloat = Number.parseFloat(currentEp);
        if (asInteger - asFloat < 0.1) {
            // as integer
            return String(asInteger + 1);
        }
        else {
            // as float
            return String(Math.ceil(asFloat));
        }
    };
    MultimediaComponent.prototype.showDetListing = function (id) {
        var _this = this;
        this.services.multimediaDetService.getAllForUser('anon').then(function (data) {
            _this.viewData.multimediaDetList = data.filter(function (item) { return item.mmd_id === id; });
        });
    };
    MultimediaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'multimedia',
            template: __webpack_require__(/*! ./multimedia.template.html */ "./src/app/multimedia/multimedia.template.html"),
            providers: [
                _multimedia_service__WEBPACK_IMPORTED_MODULE_2__["MultimediaService"],
                _multimediadet_service__WEBPACK_IMPORTED_MODULE_3__["MultimediaDetService"],
                _multimediaview_service__WEBPACK_IMPORTED_MODULE_4__["MultimediaViewService"],
                _common_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"],
                _common_sync_api__WEBPACK_IMPORTED_MODULE_6__["SyncAPI"]
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_multimedia_service__WEBPACK_IMPORTED_MODULE_2__["MultimediaService"],
            _multimediadet_service__WEBPACK_IMPORTED_MODULE_3__["MultimediaDetService"],
            _multimediaview_service__WEBPACK_IMPORTED_MODULE_4__["MultimediaViewService"],
            _common_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"],
            _common_sync_api__WEBPACK_IMPORTED_MODULE_6__["SyncAPI"]])
    ], MultimediaComponent);
    return MultimediaComponent;
}());



/***/ }),

/***/ "./src/app/multimedia/multimedia.service.ts":
/*!**************************************************!*\
  !*** ./src/app/multimedia/multimedia.service.ts ***!
  \**************************************************/
/*! exports provided: MultimediaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultimediaService", function() { return MultimediaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _crosscommon_entities_Multimedia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../crosscommon/entities/Multimedia */ "./src/crosscommon/entities/Multimedia.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_sync_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/sync.api */ "./src/app/common/sync.api.ts");
/* harmony import */ var _crosscommon_Utility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../crosscommon/Utility */ "./src/crosscommon/Utility.ts");
/* harmony import */ var _common_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/login.service */ "./src/app/common/login.service.ts");






var MultimediaService = /** @class */ (function () {
    function MultimediaService(sync, loginService) {
        this.data = [];
        this.sync = null;
        this.loginService = null;
        this.config = {
            api: {
                list: '/api/multimedia',
                create: 'create',
                update: 'update'
            }
        };
        this.sync = sync;
        this.loginService = loginService;
    }
    MultimediaService.prototype.ngOnInit = function () {
        if (!this.loginService.isLoggedIn()) {
            console.log('User is not logged in');
        }
    };
    MultimediaService.prototype.list = function () {
        return this.data;
    };
    MultimediaService.prototype.getAll = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var filter, query, sort;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                filter = {
                    gc: 'AND',
                    cont: [{
                            f: 'mma_ctg_status',
                            op: 'eq',
                            val: 1
                        }, {
                            f: 'mma_id_user',
                            op: 'eq',
                            val: this.loginService.getUsername() || 'anon'
                        }]
                };
                query = "?q=" + JSON.stringify(filter);
                sort = (function (a, b) {
                    return a.mma_date_mod.getTime() > b.mma_date_mod.getTime() ? 1 : -1;
                });
                return [2 /*return*/, this.sync.get("" + this.config.api.list + query).then(function (data) {
                        _this.data = data.map(function (d) { return new _crosscommon_entities_Multimedia__WEBPACK_IMPORTED_MODULE_1__["Multimedia"](d); });
                        _this.data = _this.data.sort(sort);
                        return _this.data;
                    }).catch(function (err) {
                        return [];
                    })];
            });
        });
    };
    MultimediaService.prototype.getAllForUser = function (user) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.getAll().then(function (all) {
                        return all.filter(function (x) { return x.mma_id_user === user; });
                    })];
            });
        });
    };
    MultimediaService.prototype.newId = function () {
        var m = new _crosscommon_entities_Multimedia__WEBPACK_IMPORTED_MODULE_1__["Multimedia"]();
        var length = m.metadata.fields.find(function (f) { return f.dbName === 'mma_id'; }).size;
        return _crosscommon_Utility__WEBPACK_IMPORTED_MODULE_4__["Utils"].hashId(m.metadata.prefix, length);
    };
    MultimediaService.prototype.newItem = function (title, media_type, season, year, current_ep, total_ep, url, user) {
        var newId = this.newId();
        var newItem = new _crosscommon_entities_Multimedia__WEBPACK_IMPORTED_MODULE_1__["Multimedia"]({
            mma_id: newId,
            mma_title: title,
            mma_ctg_media_type: media_type,
            mma_season: season,
            mma_year: year,
            mma_current_ep: current_ep,
            mma_total_ep: total_ep,
            mma_url: url,
            mma_id_user: user,
            mma_date_add: new Date(),
            mma_date_mod: new Date(),
            mma_ctg_status: 1
        });
        this.sync.request('create', _crosscommon_Utility__WEBPACK_IMPORTED_MODULE_4__["Utils"].entityToRawTableFields(newItem), _crosscommon_Utility__WEBPACK_IMPORTED_MODULE_4__["Utils"].getPKFromEntity(newItem), 'Multimedia', function () {
            newItem['not_sync'] = false; // means it's synced
        }, newItem.recordName, function (item) { return item.mma_id === newItem.mma_id; });
        return newItem;
    };
    MultimediaService.prototype.asUpdateSyncQueue = function (item) {
        var _this = this;
        var updateLocal = function () {
            var index = _this.data.findIndex(function (e) { return e.mma_id === item.mma_id; });
            if (index !== -1) {
                _this.data[index] = item;
            }
        };
        return this.sync.asSyncQueue('update', _crosscommon_Utility__WEBPACK_IMPORTED_MODULE_4__["Utils"].entityToRawTableFields(item), _crosscommon_Utility__WEBPACK_IMPORTED_MODULE_4__["Utils"].getPKFromEntity(item), 'Multimedia', function () {
            item['not_sync'] = false; // means it's synced
            updateLocal();
        }, item.recordName, function (item) { return item.mma_id === item.mma_id; });
    };
    MultimediaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_sync_api__WEBPACK_IMPORTED_MODULE_3__["SyncAPI"], _common_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]])
    ], MultimediaService);
    return MultimediaService;
}());



/***/ }),

/***/ "./src/app/multimedia/multimedia.template.html":
/*!*****************************************************!*\
  !*** ./src/app/multimedia/multimedia.template.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #newForm=\"ngForm\" (ngSubmit)=\"newItem(newForm)\">\r\n    <button type=\"button\" (click)=\"handleNewItem(newForm)\">\r\n        {{(viewData.showCreateForm ? 'Hide Form' : 'New Item')}}\r\n    </button>\r\n\r\n    <div *ngIf=\"viewData.showCreateForm\">\r\n        <div>\r\n            <span class=\"field\" *ngIf=\"model.id\">\r\n                <label for=\"id\" class=\"label-left\">Id</label>\r\n                <span type=\"text\" name=\"id\" id=\"id\" class=\"multimedia-input-id\">{{model.id}}</span>\r\n            </span>\r\n            <span class=\"field\">\r\n                <label for=\"fTitle\" class=\"label-left\">Title</label>\r\n                <input type=\"text\" name=\"fTitle\" id=\"fTitle\" class=\"field-input multimedia-input-title\" ngModel>\r\n            </span>\r\n            <span class=\"field\">\r\n                <label for=\"fMediaType\" class=\"label-left\">Media Type</label>\r\n                <select name=\"fMediaType\" id=\"fMediaType\" class=\"field-select\" [(ngModel)]=\"model.fMediaType\">\r\n                    <option *ngFor=\"let opt of viewData.mediaTypeList\" [value]=\"opt.ctg_sequential\" [selected]=\"opt.ctg_sequential === newForm.value.fMediaType\">{{opt.ctg_name}}</option>\r\n                </select>\r\n            </span>\r\n            <span class=\"field\">\r\n                <label for=\"fSeason\" class=\"label-left\">Season</label>\r\n                <input type=\"number\" name=\"fSeason\" id=\"fSeason\" class=\"field-input multimedia-input-season\" step=\"1\" [(ngModel)]=\"model.fSeason\">\r\n            </span>\r\n            <span class=\"field\">\r\n                <label for=\"fYear\" class=\"label-left\">Year</label>\r\n                <input type=\"number\" name=\"fYear\" id=\"fYear\" class=\"field-input multimedia-input-year\" step=\"1\" [(ngModel)]=\"model.fYear\">\r\n            </span>\r\n            <span class=\"field\">\r\n                <label for=\"fCurrentEp\" class=\"label-left\">Current Episode</label>\r\n                <input type=\"text\" name=\"fCurrentEp\" id=\"fCurrentEp\" class=\"field-input multimedia-input-currentep\" [(ngModel)]=\"model.fCurrentEp\">\r\n            </span>\r\n            <span class=\"field\">\r\n                <label for=\"fTotalEp\" class=\"label-left\">Total Episodes</label>\r\n                <input type=\"text\" name=\"fTotalEp\" id=\"fTotalEp\" class=\"field-input multimedia-input-totalep\" ngModel>\r\n            </span>\r\n            <span class=\"field\">\r\n                <label for=\"fUrl\" class=\"label-left\">Url</label>\r\n                <input type=\"text\" name=\"fUrl\" id=\"fUrl\" class=\"field-input multimedia-input-url\" ngModel>\r\n            </span>\r\n            \r\n            <button type=\"submit\">Save</button>\r\n        </div>\r\n    </div>\r\n</form>\r\n\r\n<table>\r\n    <tr>\r\n        <th class=\"padding-all-5 width-80\">#</th>\r\n        <th class=\"padding-all-5 width-100\">Title</th>\r\n        <th class=\"padding-all-5\">Episode</th>\r\n        <th class=\"padding-all-5\">Last Viewed</th>\r\n    </tr>\r\n    <tr class=\"multimedia-listing-row\" *ngFor=\"let item of viewData.multimediaList; let i = index\">\r\n        <td class=\"padding-all-5 text-align-right\">{{i + 1}}</td>\r\n        <td class=\"padding-all-5\">{{item.mma_title + ' T' + item.mma_season}}</td>\r\n        <td class=\"padding-all-5\">\r\n            {{item.mma_current_ep + '/' + item.mma_total_ep}}\r\n            <button type=\"button\" (click)=\"showNewEpForm(item.mma_id, item.mma_current_ep, item.mma_title)\">+</button>\r\n            <button type=\"button\" (click)=\"showDetListing(item.mma_id)\">*</button>\r\n        </td>\r\n        <td class=\"padding-all-5\">{{item.mma_date_mod | date: 'yyyy-MM-dd'}}</td>\r\n    </tr>\r\n</table>\r\n\r\n<!--\r\n    <table>\r\n        <tr>\r\n            <th class=\"padding-all-5 width-80\">Episode Id</th>\r\n            <th class=\"padding-all-5 width-100\">Episode Title</th>\r\n    \r\n            <th class=\"padding-all-5\">Date Viewed</th>\r\n            <th class=\"padding-all-5\">Rating</th>\r\n            <th class=\"padding-all-5\">Notes</th>\r\n        </tr>\r\n        <tr class=\"multimedia-listing-row\" *ngFor=\"let item of viewData.multimediaList; let i = index\">\r\n            <td class=\"padding-all-5 text-align-right\">{{i + 1}}</td>\r\n            <td class=\"padding-all-5\">{{item.mma_title + ' T' + item.mma_season}}</td>\r\n            <td class=\"padding-all-5\">{{item.mma_current_ep + '/' + item.mma_total_ep}}</td>\r\n            <td class=\"padding-all-5\">{{item.mma_date_mod | date: 'yyyy-MM-dd'}}</td>\r\n        </tr>\r\n    </table>\r\n-->\r\n\r\n<form #newEpForm=\"ngForm\" (ngSubmit)=\"newEpItem(newEpForm)\">\r\n    <div *ngIf=\"viewData.showCreateEpForm\">\r\n        <button type=\"button\" (click)=\"hideNewEpForm()\">\r\n            Hide Ep Form\r\n        </button>\r\n        <div>\r\n            <span class=\"field\">\r\n                <label for=\"fTitle\" class=\"label-left\">Title</label>\r\n                <input type=\"text\" name=\"fTitle\" id=\"fTitle\" class=\"field-input multimedia-input-title\" disabled [(ngModel)]=\"epModel.fTitle\">\r\n            </span>\r\n            <span class=\"field\">\r\n                <label for=\"id\" class=\"label-left\">Id</label>\r\n                <input type=\"text\" name=\"fEpId\" id=\"fEpId\" class=\"field-input multimedia-input-id\" [(ngModel)]=\"epModel.epId\">\r\n            </span>\r\n            <span class=\"field\">\r\n                <label for=\"fEpTitle\" class=\"label-left\">Episode Title</label>\r\n                <input type=\"text\" name=\"fEpTitle\" id=\"fEpTitle\" class=\"field-input multimedia-input-eptitle\" [(ngModel)]=\"epModel.fEpTitle\">\r\n            </span>\r\n            <span class=\"field\">\r\n                <label for=\"fAltEpTitle\" class=\"label-left\">Alternative Title</label>\r\n                <input type=\"text\" name=\"fAltEpTitle\" id=\"fAltEpTitle\" class=\"field-input multimedia-input-alteptitle\" [(ngModel)]=\"epModel.fAltEpTitle\">\r\n            </span>\r\n            <span class=\"field\">\r\n                <label for=\"fYear\" class=\"label-left\">Year</label>\r\n                <input type=\"number\" name=\"fYear\" id=\"fYear\" class=\"field-input multimedia-input-year\" step=\"1\" [(ngModel)]=\"epModel.fYear\">\r\n            </span>\r\n            <span class=\"field\">\r\n                <label for=\"fUrl\" class=\"label-left\">Url</label>\r\n                <input type=\"text\" name=\"fUrl\" id=\"fUrl\" class=\"field-input multimedia-input-url\" [(ngModel)]=\"epModel.fUrl\">\r\n            </span>\r\n\r\n            <span class=\"field\">\r\n                <hr>\r\n                <label for=\"fIsViewed\" class=\"label-left\">Viewed</label>\r\n                <input type=\"checkbox\" name=\"fIsViewed\" id=\"fIsViewed\" [(ngModel)]=\"epModel.isViewed\">\r\n            </span>\r\n            <span *ngIf=\"epModel.isViewed\">\r\n                <span class=\"field\">\r\n                    <label for=\"fSummary\" class=\"label-left\">Summary</label>\r\n                    <input type=\"text\" name=\"fSummary\" id=\"fSummary\" class=\"field-input multimedia-input-summary\" [(ngModel)]=\"epModel.fSummary\">\r\n                </span>\r\n                <span class=\"field\">\r\n                    <label for=\"fDateViewed\" class=\"label-left\">Date Viewed</label>\r\n                    <input type=\"date\" name=\"fDateViewed\" [(ngModel)]=\"epModel.fDateViewed\">\r\n                </span>\r\n                <span class=\"field\">\r\n                    <label for=\"fRating\" class=\"label-left\">Rating</label>\r\n                    <input type=\"number\" name=\"fRating\" id=\"fRating\" class=\"field-input multimedia-input-rating\" step=\"1\" [(ngModel)]=\"epModel.fRating\">\r\n                </span>\r\n                <span class=\"field\">\r\n                    <label for=\"fPlatform\" class=\"label-left\">Platform</label>\r\n                    <select name=\"fPlatform\" id=\"fPlatform\" class=\"field-select\" [(ngModel)]=\"epModel.fPlatform\">\r\n                        <option *ngFor=\"let opt of viewData.platformList\" [value]=\"opt.ctg_sequential\" [selected]=\"opt.ctg_sequential === newEpForm.value.fPlatform\">{{opt.ctg_name}}</option>\r\n                    </select>\r\n                </span>\r\n                <span class=\"field\">\r\n                    <label for=\"fNotes\" class=\"label-left\">Notes</label>\r\n                    <input type=\"text\" name=\"fNotes\" id=\"fNotes\" class=\"field-input multimedia-input-notes\" [(ngModel)]=\"epModel.fNotes\">\r\n                </span>\r\n            </span>\r\n            \r\n            <button type=\"submit\">Save</button>\r\n        </div>\r\n    </div>\r\n</form>\r\n\r\n\r\n<table *ngIf=\"viewData.multimediaDetList\">\r\n    <tr>\r\n        <th class=\"padding-all-5 width-80\">#</th>\r\n        <th class=\"padding-all-5 width-100\">Ep Title</th>\r\n        <th class=\"padding-all-5\">Alt Title</th>\r\n        <th class=\"padding-all-5\">Url</th>\r\n        <th class=\"padding-all-5\">Viewed</th>\r\n    </tr>\r\n    <tr class=\"multimedia-listing-row\" *ngFor=\"let item of viewData.multimediaDetList\">\r\n        <td class=\"padding-all-5 text-align-right\">{{item.mmd_id_ep}}</td>\r\n        <td class=\"padding-all-5\">{{item.mmd_ep_title}}</td>\r\n        <td class=\"padding-all-5\">{{item.mmd_ep_alt_title}}</td>\r\n        <td class=\"padding-all-5\">{{item.mmd_url}}</td>\r\n        <td class=\"padding-all-5\">{{item.mmd_date_mod | date: 'yyyy-MM-dd'}}</td>\r\n    </tr>\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/multimedia/multimediadet.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/multimedia/multimediadet.service.ts ***!
  \*****************************************************/
/*! exports provided: MultimediaDetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultimediaDetService", function() { return MultimediaDetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _crosscommon_entities_MultimediaDet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../crosscommon/entities/MultimediaDet */ "./src/crosscommon/entities/MultimediaDet.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_sync_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/sync.api */ "./src/app/common/sync.api.ts");
/* harmony import */ var _crosscommon_Utility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../crosscommon/Utility */ "./src/crosscommon/Utility.ts");
/* harmony import */ var _common_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/login.service */ "./src/app/common/login.service.ts");






var MultimediaDetService = /** @class */ (function () {
    function MultimediaDetService(sync, loginService) {
        this.data = [];
        this.sync = null;
        this.loginService = null;
        this.config = {
            api: {
                list: '/api/multimediadet'
            }
        };
        this.sync = sync;
        this.loginService = loginService;
    }
    MultimediaDetService.prototype.ngOnInit = function () {
        if (!this.loginService.isLoggedIn()) {
            console.log('User is not logged in');
        }
    };
    MultimediaDetService.prototype.list = function () {
        return this.data;
    };
    MultimediaDetService.prototype.getAll = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var filter, query, sort;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                filter = {
                    gc: 'AND',
                    cont: [{
                            f: 'mmd_ctg_status',
                            op: 'eq',
                            val: 1
                        }, {
                            f: 'mmd_id_user',
                            op: 'eq',
                            val: this.loginService.getUsername() || 'anon'
                        }]
                };
                query = "?q=" + JSON.stringify(filter);
                sort = (function (a, b) {
                    return a.mmd_date_mod.getTime() > b.mmd_date_mod.getTime() ? 1 : -1;
                });
                return [2 /*return*/, this.sync.get("" + this.config.api.list + query).then(function (data) {
                        _this.data = data.map(function (d) { return new _crosscommon_entities_MultimediaDet__WEBPACK_IMPORTED_MODULE_1__["MultimediaDet"](d); });
                        _this.data = _this.data.sort(sort);
                        return _this.data;
                    }).catch(function (err) {
                        return [];
                    })];
            });
        });
    };
    MultimediaDetService.prototype.getAllForUser = function (user) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.getAll().then(function (all) {
                        return all.filter(function (x) { return x.mmd_id_user === user; });
                    })];
            });
        });
    };
    MultimediaDetService.prototype.newItem = function (id, epId, title, altTitle, year, url, user) {
        var newItem = new _crosscommon_entities_MultimediaDet__WEBPACK_IMPORTED_MODULE_1__["MultimediaDet"]({
            mmd_id: id,
            mmd_id_ep: epId,
            mmd_ep_title: title,
            mmd_ep_alt_title: altTitle,
            mmd_year: year,
            mmd_url: url,
            mmd_id_user: user,
            mmd_date_add: new Date(),
            mmd_date_mod: new Date(),
            mmd_ctg_status: 1
        });
        return newItem;
    };
    MultimediaDetService.prototype.asSyncQueue = function (item) {
        return this.sync.asSyncQueue('create', _crosscommon_Utility__WEBPACK_IMPORTED_MODULE_4__["Utils"].entityToRawTableFields(item), _crosscommon_Utility__WEBPACK_IMPORTED_MODULE_4__["Utils"].getPKFromEntity(item), 'MultimediaDet', function () {
            item['not_sync'] = false; // means it's synced
        }, item.recordName, function (item) { return item.mmd_id === item.mmd_id && item.mmd_id_ep === item.mmd_id_ep; });
    };
    MultimediaDetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_sync_api__WEBPACK_IMPORTED_MODULE_3__["SyncAPI"], _common_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]])
    ], MultimediaDetService);
    return MultimediaDetService;
}());



/***/ }),

/***/ "./src/app/multimedia/multimediaview.service.ts":
/*!******************************************************!*\
  !*** ./src/app/multimedia/multimediaview.service.ts ***!
  \******************************************************/
/*! exports provided: MultimediaViewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultimediaViewService", function() { return MultimediaViewService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _crosscommon_entities_MultimediaView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../crosscommon/entities/MultimediaView */ "./src/crosscommon/entities/MultimediaView.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_sync_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/sync.api */ "./src/app/common/sync.api.ts");
/* harmony import */ var _crosscommon_Utility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../crosscommon/Utility */ "./src/crosscommon/Utility.ts");
/* harmony import */ var _common_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/login.service */ "./src/app/common/login.service.ts");






var MultimediaViewService = /** @class */ (function () {
    function MultimediaViewService(sync, loginService) {
        this.data = [];
        this.sync = null;
        this.loginService = null;
        this.config = {
            api: {
                list: '/api/multimediaview'
            }
        };
        this.sync = sync;
        this.loginService = loginService;
    }
    MultimediaViewService.prototype.ngOnInit = function () {
        if (!this.loginService.isLoggedIn()) {
            console.log('User is not logged in');
        }
    };
    MultimediaViewService.prototype.list = function () {
        return this.data;
    };
    MultimediaViewService.prototype.getAll = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var filter, query, sort;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                filter = {
                    gc: 'AND',
                    cont: [{
                            f: 'mmv_ctg_status',
                            op: 'eq',
                            val: 1
                        }, {
                            f: 'mmv_id_user',
                            op: 'eq',
                            val: this.loginService.getUsername() || 'anon'
                        }]
                };
                query = "?q=" + JSON.stringify(filter);
                sort = (function (a, b) {
                    return a.mmv_date_mod.getTime() > b.mmv_date_mod.getTime() ? 1 : -1;
                });
                return [2 /*return*/, this.sync.get("" + this.config.api.list + query).then(function (data) {
                        _this.data = data.map(function (d) { return new _crosscommon_entities_MultimediaView__WEBPACK_IMPORTED_MODULE_1__["MultimediaView"](d); });
                        _this.data = _this.data.sort(sort);
                        return _this.data;
                    }).catch(function (err) {
                        return [];
                    })];
            });
        });
    };
    MultimediaViewService.prototype.getAllForUser = function (user) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.getAll().then(function (all) {
                        return all.filter(function (x) { return x.mmv_id_user === user; });
                    })];
            });
        });
    };
    MultimediaViewService.prototype.newItem = function (id, epId, summary, dateViewed, rating, platform, notes, user) {
        var newItem = new _crosscommon_entities_MultimediaView__WEBPACK_IMPORTED_MODULE_1__["MultimediaView"]({
            mmv_id: id,
            mmv_id_ep: epId,
            mmv_ep_summary: summary,
            mmv_date_viewed: dateViewed,
            mmv_num_rating: rating,
            mmv_ctg_platform: platform,
            mmv_notes: notes,
            mmv_id_user: user,
            mmv_date_add: new Date(),
            mmv_date_mod: new Date(),
            mmv_ctg_status: 1
        });
        return newItem;
    };
    MultimediaViewService.prototype.asSyncQueue = function (item) {
        return this.sync.asSyncQueue('create', _crosscommon_Utility__WEBPACK_IMPORTED_MODULE_4__["Utils"].entityToRawTableFields(item), _crosscommon_Utility__WEBPACK_IMPORTED_MODULE_4__["Utils"].getPKFromEntity(item), 'MultimediaView', function () {
            item['not_sync'] = false; // means it's synced
        }, item.recordName, function (item) { return item.mmv_id === item.mmv_id && item.mmv_id_ep === item.mmv_id_ep; });
    };
    MultimediaViewService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_sync_api__WEBPACK_IMPORTED_MODULE_3__["SyncAPI"], _common_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]])
    ], MultimediaViewService);
    return MultimediaViewService;
}());



/***/ }),

/***/ "./src/app/task/task.indicator.service.ts":
/*!************************************************!*\
  !*** ./src/app/task/task.indicator.service.ts ***!
  \************************************************/
/*! exports provided: TaskIndicator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskIndicator", function() { return TaskIndicator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _task_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.type */ "./src/app/task/task.type.ts");
/* harmony import */ var _common_date_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/date.common */ "./src/app/common/date.common.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var TaskIndicator = /** @class */ (function () {
    function TaskIndicator(dateUtils) {
        this.tasks = [];
        this.dateUtils = dateUtils;
    }
    TaskIndicator.prototype.closedETA = function (initialDate, finalDate) {
        var total = 0;
        this.tasks.filter(function (t) { return t.tsk_ctg_status == _task_type__WEBPACK_IMPORTED_MODULE_1__["TaskStatus"].CLOSED && new Date(t.tsk_date_done) >= initialDate && new Date(t.tsk_date_done) <= finalDate; }).forEach(function (t) {
            total += parseInt(t.tsk_estimated_duration);
        });
        return total;
    };
    ;
    TaskIndicator.prototype.addedETA = function (initialDate, finalDate) {
        var total = 0;
        this.tasks.filter(function (t) { return new Date(t.tsk_date_add) >= initialDate && new Date(t.tsk_date_add) <= finalDate; }).forEach(function (t) {
            total += parseInt(t.tsk_estimated_duration);
        });
        return total;
    };
    ;
    TaskIndicator.prototype.closedTaskCount = function (initialDate, finalDate) {
        var total = 0;
        total = this.tasks.filter(function (t) { return t.tsk_ctg_status == _task_type__WEBPACK_IMPORTED_MODULE_1__["TaskStatus"].CLOSED && new Date(t.tsk_date_done) >= initialDate && new Date(t.tsk_date_done) <= finalDate; }).length;
        return total;
    };
    ;
    TaskIndicator.prototype.addedTaskCount = function (initialDate, finalDate) {
        var total = 0;
        total = this.tasks.filter(function (t) { return new Date(t.tsk_date_add) >= initialDate && new Date(t.tsk_date_add) <= finalDate; }).length;
        return total;
    };
    ;
    TaskIndicator.prototype.calculateTotalTimeSpent = function (initialDate, finalDate) {
        var state = {};
        state.allClosedTimeTrackingToday = [];
        state.allOpenTimeTrackingToday = [];
        this.tasks.filter(function (t) {
            t.tsk_time_history.filter(function (h) {
                if (initialDate <= new Date(h.tsh_date_start) && new Date(h.tsh_date_start) <= finalDate) { // that is between the range
                    if (t.tsk_ctg_status === _task_type__WEBPACK_IMPORTED_MODULE_1__["TaskStatus"].CLOSED) { // closed tasks
                        state.allClosedTimeTrackingToday.push(h);
                    }
                    else { // open tasks
                        state.allOpenTimeTrackingToday.push(h);
                    }
                }
            });
        });
        var spent = 0;
        state.allClosedTimeTrackingToday.forEach(function (h) {
            spent += h.tsh_time_spent;
        });
        state.totalTimeSpentTodayOnClosedTasks = spent;
        state.totalTimeSpentToday = 0;
        state.totalTimeSpentToday += spent;
        spent = 0;
        state.allOpenTimeTrackingToday.forEach(function (h) {
            spent += h.tsh_time_spent;
        });
        state.totalTimeSpentTodayOnOpenTasks = spent;
        state.totalTimeSpentToday += spent;
        return state;
    };
    TaskIndicator.prototype.calculateProductivityRatio = function (initialDate, finalDate) {
        var totalTimeETAClosed = this.closedETA(initialDate, finalDate);
        var totalTimeSpent = this.calculateTotalTimeSpent(initialDate, finalDate).totalTimeSpentTodayOnClosedTasks;
        if (totalTimeSpent === 0) {
            return 0;
        }
        return Math.round((totalTimeETAClosed * 60 * 100) / totalTimeSpent) / 100;
    };
    TaskIndicator.prototype.calculateTimeManagementRatio = function (initialDate, finalDate) {
        var realTimeElapsed = this.dateUtils.elapsedTime(this.firstTTEntryFromDay(initialDate), this.lastTTEntryFromDay(initialDate));
        var totalTimeSpent = this.calculateTotalTimeSpent(initialDate, finalDate).totalTimeSpentTodayOnClosedTasks;
        if (realTimeElapsed === 0) {
            return 0;
        }
        return Math.round(totalTimeSpent * 100 / realTimeElapsed) / 100;
    };
    TaskIndicator.prototype.calculateKarma = function (initialDate, finalDate) {
        var totalTimeETAClosed = this.closedETA(initialDate, finalDate);
        var totalTimeSpent = this.calculateTotalTimeSpent(initialDate, finalDate).totalTimeSpentTodayOnClosedTasks;
        return Math.round((totalTimeETAClosed * 60 * 100) / totalTimeSpent) / 100;
    };
    TaskIndicator.prototype.firstTTEntryFromDay = function (date) {
        var day0 = this.dateUtils.dateOnly(date);
        var nextDay0 = this.dateUtils.addDays(day0, 1);
        var firstDate = nextDay0;
        var tasksOfTheDay = this.tasks.filter(function (t) {
            return new Date(t.tsk_date_done) >= day0 && new Date(t.tsk_date_done) < nextDay0;
        });
        tasksOfTheDay.forEach(function (t) {
            if (t.tsk_time_history.length) {
                t.tsk_time_history.forEach(function (h) {
                    if (new Date(h.tsh_date_start) < firstDate && day0 < new Date(h.tsh_date_start)) {
                        firstDate = new Date(h.tsh_date_start);
                    }
                });
            }
        });
        if (firstDate === nextDay0) {
            return null;
        }
        return firstDate;
    };
    TaskIndicator.prototype.lastTTEntryFromDay = function (date) {
        var day0 = this.dateUtils.dateOnly(date);
        var nextDay0 = this.dateUtils.addDays(day0, 1);
        var lastDate = day0;
        var tasksOfTheDay = this.tasks.filter(function (t) {
            return new Date(t.tsk_date_done) >= day0 && new Date(t.tsk_date_done) < nextDay0;
        });
        tasksOfTheDay.forEach(function (t) {
            if (t.tsk_time_history.length) {
                t.tsk_time_history.forEach(function (h) {
                    if (new Date(h.tsh_date_end) > lastDate && new Date(h.tsh_date_end) < nextDay0) {
                        lastDate = new Date(h.tsh_date_end);
                    }
                });
            }
        });
        if (lastDate === day0) {
            return null;
        }
        return lastDate;
    };
    /**
     * Returns de total number of tasks until finalDate date (including that day).
     * @param initialDate ignore this param.
     * @param finalDate Date until total task count should be calculated, including this day.
     */
    TaskIndicator.prototype.totalTaskCountUntil = function (initialDate, finalDate) {
        var total;
        total = this.tasks.filter(function (t) { return new Date(t.tsk_date_add) <= finalDate && (new Date(t.tsk_date_done) >= finalDate || (t.tsk_ctg_status !== _task_type__WEBPACK_IMPORTED_MODULE_1__["TaskStatus"].CLOSED && t.tsk_ctg_status !== _task_type__WEBPACK_IMPORTED_MODULE_1__["TaskStatus"].CANCELLED)); });
        return total.length;
    };
    TaskIndicator = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_date_common__WEBPACK_IMPORTED_MODULE_2__["DateCommon"]])
    ], TaskIndicator);
    return TaskIndicator;
}());



/***/ }),

/***/ "./src/app/task/task.type.ts":
/*!***********************************!*\
  !*** ./src/app/task/task.type.ts ***!
  \***********************************/
/*! exports provided: Task, TaskStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskStatus", function() { return TaskStatus; });
var Task = /** @class */ (function () {
    function Task() {
    }
    return Task;
}());

var TaskStatus;
(function (TaskStatus) {
    TaskStatus[TaskStatus["BACKLOG"] = 1] = "BACKLOG";
    TaskStatus[TaskStatus["OPEN"] = 2] = "OPEN";
    TaskStatus[TaskStatus["CLOSED"] = 3] = "CLOSED";
    TaskStatus[TaskStatus["CANCELLED"] = 4] = "CANCELLED";
})(TaskStatus || (TaskStatus = {}));


/***/ }),

/***/ "./src/app/task/tasks.component.ts":
/*!*****************************************!*\
  !*** ./src/app/task/tasks.component.ts ***!
  \*****************************************/
/*! exports provided: TasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksComponent", function() { return TasksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _tasks_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tasks.core */ "./src/app/task/tasks.core.ts");
/* harmony import */ var _common_sync_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/sync.api */ "./src/app/common/sync.api.ts");
/* harmony import */ var _task_indicator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task.indicator.service */ "./src/app/task/task.indicator.service.ts");
/* harmony import */ var _common_date_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/date.common */ "./src/app/common/date.common.ts");







var TasksComponent = /** @class */ (function () {
    function TasksComponent(tasksCore, sync, taskIndicator, dateUtils, titleService) {
        var _this = this;
        this.sync = sync;
        this.taskIndicator = taskIndicator;
        this.dateUtils = dateUtils;
        this.titleService = titleService;
        this.services = {
            tasksCore: null,
            sync: null,
            taskIndicator: null,
            dateUtils: null
        };
        this.state = {};
        this.format = 'yyyy-MM-dd HH:mm:ss';
        this.delayOnUpdateState = 100;
        this.timers = {};
        this.viewAll = false;
        this.viewBacklog = false;
        this.viewPostponed = false;
        this.viewReportsWeek = false;
        this.viewReportsDayDistribution = false;
        this.viewOptions = false;
        this.viewQualifierTotals = false;
        this.viewETABeforeAdd = false;
        this.taskStatus = {
            'BACKLOG': 1,
            'OPEN': 2,
            'CLOSED': 3,
            'CANCELLED': 4
        };
        this.showBatchAdd = false;
        this.load = true;
        this.reports = {};
        this.optionsInput = "default";
        this.showButtonSection = false;
        this.tagInfo = {};
        this.defaultOptions = {
            optViewElapsedDays: false,
            optShowFinishedToday: false,
            optShowQualifiedTasksOnly: false,
            optNewTaskStatusIsBacklog: false,
            optShowIndicatorsTable: false,
            optServerAddress: "http://localhost:8081"
        };
        this.timerModeRemaining = false;
        this.focusedTask = {
            task: null,
            element: null
        };
        this.events = [];
        titleService.setTitle('Tasks');
        this.services.tasksCore = tasksCore;
        this.services.sync = sync;
        this.services.taskIndicator = taskIndicator;
        this.services.dateUtils = dateUtils;
        if (typeof (window.localStorage) !== "undefined") {
            this.options = JSON.parse(localStorage.getItem('Options'));
            if (!this.options) {
                this.options = this.defaultOptions;
            }
            this.services.tasksCore.setApiRoot(this.options.optServerAddress);
            //this.services.sync.setApiRoot(this.options.optServerAddress);
        }
        this.nextTasks = [];
        this.updateState();
        this.notification({
            body: 'Hello there!! you have ' + this.state.openTasksCount + ' tasks open'
        });
        this.services.tasksCore.getAllForUser('anon').then(function (taskList) {
            _this.tasks = taskList;
            _this.load = true;
            _this.updateState();
        });
        this.services.tasksCore.computeComparisonData().then(function (data) { return _this.comparisonData = data; });
        // events
        this.subscribe('updateTimeTracking', function (timeTrackingItem) {
            var foundItem = null;
            // Looks into open tasks
            foundItem = _this.state.openTasks.find(function (item) { return item.tsk_id === timeTrackingItem.tsh_id; });
            if (foundItem) {
                var historyIndex = foundItem['tsk_time_history'].findIndex(function (item) { return item.tsh_id === timeTrackingItem.tsh_id && item.tsh_num_secuential === timeTrackingItem.tsh_num_secuential; });
                foundItem['tsk_time_history'][historyIndex] = timeTrackingItem;
            }
            // Looks into closed tasks
        });
    }
    TasksComponent.prototype.ngOnInit = function () {
        this.registerServiceWorker();
    };
    TasksComponent.prototype.addTask = function (form) {
        var _this = this;
        if (!this.showBatchAdd) {
            if (form.value.tsk_name) {
                this.services.tasksCore.addTask({
                    'tsk_date_add': this.services.dateUtils.newDateUpToSeconds(),
                    'tsk_name': form.value.tsk_name
                }, this.options);
                this.tasks = this.services.tasksCore.tasks();
                this.updateState();
                form.controls.tsk_name.reset();
            }
        }
        else {
            // Batch add
            var t = void 0;
            if (form.value.tsk_multiple_name) {
                this.services.tasksCore.batchAddTasks(form.value.tsk_multiple_name.split('\n'), this.options);
                this.tasks = this.services.tasksCore.tasks();
                form.controls.tsk_multiple_name.reset();
                this.showBatchAdd = false;
                setTimeout(function () { return _this.updateState(); }, 100);
            }
        }
        this.viewETABeforeAdd = false;
        this.scheduleNotificationsForStartingTasks();
    };
    TasksComponent.prototype.updateState = function () {
        var _this = this;
        var today = this.services.dateUtils.newDateUpToSeconds();
        var today0 = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        var yesterday0 = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1);
        var tomorrow0 = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
        var sortByClosedDate = function (a, b) {
            var res = new Date(a.tsk_date_done) > new Date(b.tsk_date_done);
            return res ? -1 : 1;
        };
        var sortByDateUntilView = function (a, b) {
            var res = new Date(a.tsk_date_view_until) > new Date(b.tsk_date_view_until);
            return res ? 1 : -1;
        };
        this.tasks = this.services.tasksCore.tasks();
        this.state.backlogTasks = this.createGroupedTasks(this.tasks.filter(function (t) { return t.tsk_ctg_status == _this.taskStatus.BACKLOG; }).sort(this.sortByGroup));
        this.state.openTasks = this.createGroupedTasks(this.tasks.filter(function (t) { return t.tsk_ctg_status == _this.taskStatus.OPEN && (t.tsk_date_view_until ? new Date(t.tsk_date_view_until) < today : true) && ((_this.options.optShowQualifiedTasksOnly ? t.tsk_qualifiers !== '' : true) || t.tsk_ctg_in_process == 2); }).sort(this.sortByGroup));
        this.state.closedTasks = this.createGroupedClosedTasks(this.tasks.filter(function (t) { return t.tsk_ctg_status == _this.taskStatus.CLOSED; }).sort(sortByClosedDate));
        this.state.closedTodayTasks = this.tasks.filter(function (t) { return t.tsk_ctg_status == _this.taskStatus.CLOSED && new Date(t.tsk_date_done) >= today0 && new Date(t.tsk_date_done) <= tomorrow0; }).sort(sortByClosedDate);
        this.state.postponedTasks = this.tasks.filter(function (t) { return t.tsk_ctg_status == _this.taskStatus.OPEN && (t.tsk_date_view_until ? new Date(t.tsk_date_view_until) > today : false); }).sort(sortByDateUntilView);
        // Estimated Total
        this.state.totalTimeEstimated = 0;
        this.state.totalTimeEstimatedOld = 0;
        this.state.totalTaskCountOld = 0;
        this.state.totalTimeEstimatedAddedToday = 0;
        this.state.totalTimeEstimatedAddedTodayClosed = 0;
        this.state.totalTimeEstimatedAddedTodayOpen = 0;
        this.state.totalTimeEstimatedOpen = 0;
        this.state.totalTimeEstimatedClosedToday = 0;
        this.tasks.filter(function (t) { return t.tsk_ctg_status == _this.taskStatus.OPEN; }).forEach(function (t) {
            _this.state.totalTimeEstimatedOpen += parseInt(t.tsk_estimated_duration);
        });
        this.tasks.filter(function (t) { return t.tsk_ctg_status == _this.taskStatus.CLOSED && new Date(t.tsk_date_done) >= today0 && new Date(t.tsk_date_done) <= today; }).forEach(function (t) {
            _this.state.totalTimeEstimatedClosedToday += parseInt(t.tsk_estimated_duration);
        });
        this.tasks.filter(function (t) { return new Date(t.tsk_date_add) >= today0 && new Date(t.tsk_date_add) <= today; }).forEach(function (t) {
            _this.state.totalTimeEstimatedAddedToday += parseInt(t.tsk_estimated_duration);
            if (t.tsk_ctg_status == _this.taskStatus.OPEN) {
                _this.state.totalTimeEstimatedAddedTodayOpen += parseInt(t.tsk_estimated_duration);
            }
            if (t.tsk_ctg_status == _this.taskStatus.CLOSED) {
                _this.state.totalTimeEstimatedAddedTodayClosed += parseInt(t.tsk_estimated_duration);
            }
        });
        this.state.totalTimeEstimated = this.state.totalTimeEstimatedOpen + this.state.totalTimeEstimatedClosedToday;
        this.tasks.filter(function (t) { return (new Date(t.tsk_date_done) >= today0 && new Date(t.tsk_date_done) < today && new Date(t.tsk_date_add) < today0) || (new Date(t.tsk_date_add) < today0 && t.tsk_ctg_status == _this.taskStatus.OPEN); }).forEach(function (t) {
            _this.state.totalTimeEstimatedOld += parseInt(t.tsk_estimated_duration);
        });
        this.state.totalTaskCountOld = this.tasks.filter(function (t) { return (new Date(t.tsk_date_done) >= today0 && new Date(t.tsk_date_done) < today && new Date(t.tsk_date_add) < today0) || (new Date(t.tsk_date_add) < today0 && t.tsk_ctg_status == _this.taskStatus.OPEN); }).length;
        // Info
        // Total time spent today
        this.calculateTotalTimeSpentToday();
        this.state.openTasksCount = this.tasks.filter(function (t) { return t.tsk_ctg_status == _this.taskStatus.OPEN; }).length;
        this.state.backlogTasksCount = this.tasks.filter(function (t) { return t.tsk_ctg_status == _this.taskStatus.BACKLOG; }).length;
        // Postponed tasks count
        this.state.postponedTasksCount = this.tasks.filter(function (t) { return t.tsk_ctg_status == _this.taskStatus.OPEN && (t.tsk_date_view_until ? new Date(t.tsk_date_view_until) > today : false); }).length;
        this.state.productivityRatio = {};
        if (this.state.totalTimeSpentToday !== 0) {
            this.state.productivityRatio.value = Math.round((this.state.totalTimeEstimatedClosedToday * 60 * 100) / this.state.totalTimeSpentToday) / 100;
            if (this.state.productivityRatio.value >= 1) {
                this.state.productivityRatio.className = 'productivity-good';
                this.state.productivityRatio.message = 'Good! keep going!';
            }
            else {
                this.state.productivityRatio.className = 'productivity-bad';
                this.state.productivityRatio.message = 'Come on! you can do it!';
            }
        }
        else {
            this.state.productivityRatio.value = 0;
            this.state.productivityRatio.className = 'productivity-good';
            this.state.productivityRatio.message = "Let's begin!";
        }
        // Indicators
        this.state.dayStartedAtDate = this.firstTTEntryFromDay(today0);
        if (this.state.dayStartedAtDate) {
            this.state.realTimeElapsed = this.elapsedTime(this.firstTTEntryFromDay(today0), this.lastTTEntryFromDay(today0));
        }
        this.state.karmaCount = 0;
        this.state.karmaScore = 0;
        this.state.closedTodayTasks.forEach(function (t) {
            var onTime = t.tsk_total_time_spent < (t.tsk_estimated_duration * 60);
            _this.state.karmaCount += onTime ? 1 : 0;
        });
        if (this.state.closedTodayTasks.length) {
            this.state.karmaScore = Math.round(this.state.karmaCount * 100 / this.state.closedTodayTasks.length) / 100;
        }
        this.state.timeManagementRatio = 0;
        if (this.state.realTimeElapsed) {
            this.state.timeManagementRatio = Math.round(this.state.totalTimeSpentToday * 100 / this.state.realTimeElapsed) / 100;
        }
        // indicators array
        this.calculateIndicators();
        // identify not synced tasks
        this.tasksNotInSync();
        // reporting
        this.weekStats();
        this.dayDistribution();
        this.qualifierTotals();
        if (this.load) {
            this.load = false;
            setTimeout(function () { return _this.showTimersOnLoad(); }, 100);
            this.scheduleNotificationsForStartingTasks();
        }
        // next tasks to do today
        if (this.nextTasks.length === 0) {
            this.nextTasks.push({
                'estimatedDuration': 0,
                'tasks': []
            });
            if (typeof (window.localStorage) !== "undefined") {
                var nextTasksIds = JSON.parse(localStorage.getItem('NextTasks'));
                if (nextTasksIds) {
                    nextTasksIds.forEach(function (id) {
                        var nt = _this.tasks.find(function (e) { return e.tsk_id === id && e.tsk_ctg_status === _this.taskStatus.OPEN; });
                        if (nt) {
                            _this.nextTasks[0].tasks.push(nt);
                        }
                    });
                    localStorage.setItem("NextTasks", JSON.stringify(this.nextTasks[0].tasks.map(function (e) { return e.tsk_id; })));
                }
            }
        }
        this.nextTasks[0].estimatedDuration = 0;
        this.nextTasks[0].tasks.forEach(function (t) {
            if (t.tsk_ctg_status === _this.taskStatus.OPEN) {
                _this.nextTasks[0].estimatedDuration += t.tsk_estimated_duration;
            }
            else {
                var index = _this.nextTasks[0].tasks.findIndex(function (e) { return e.tsk_id === t.tsk_id; });
                _this.nextTasks[0].tasks.splice(index, 1);
                localStorage.setItem("NextTasks", JSON.stringify(_this.nextTasks[0].tasks.map(function (e) { return e.tsk_id; })));
            }
        });
        // sort next tasks by order field
        var sortByOrder = function (a, b) {
            var res = a.tsk_order > b.tsk_order;
            return res ? 1 : -1;
        };
        this.nextTasks[0].tasks = this.nextTasks[0].tasks.sort(sortByOrder);
        if (this.focusedTask.task) {
            if (this.focusedTask.task.tsk_ctg_status === this.taskStatus.OPEN) {
                console.log('trying to set focus for task', this.focusedTask);
                //let f: HTMLElement = document.getElementById(this.focusedTask.tsk_id).querySelector('span.task-text[contenteditable=true]');
                //f['tabIndex'] = -1;
                setTimeout(function () {
                    _this.focusedTask.element.focus();
                    console.log('focus should be set now');
                    //     f.focus();
                }, 3000);
            }
            else {
            }
        }
        // Update comparison results
        setTimeout(function () {
            _this.services.tasksCore.computeComparisonData().then(function (data) { return _this.comparisonData = data; });
        }, 6000);
    };
    TasksComponent.prototype.showTimersOnLoad = function () {
        var _this = this;
        this.tasks.filter(function (t) {
            return t.tsk_ctg_status == _this.taskStatus.OPEN && t.tsk_ctg_in_process === 2 && (t.tsk_date_view_until ? new Date(t.tsk_date_view_until) < new Date() : true);
        }).forEach(function (t) {
            if (!_this.timers[t.tsk_id]) {
                _this.showTimer(t, _this.getTaskDOMElement(t.tsk_id));
            }
        });
    };
    TasksComponent.prototype.setSelected = function (item) {
        this.state.selected = item;
    };
    TasksComponent.prototype.sortByGroup = function (a, b) {
        if (a.tsk_id_record !== b.tsk_id_record) {
            return (a.tsk_id_record > b.tsk_id_record) ? 1 : -1;
        }
        else {
            return (a.tsk_order > b.tsk_order) ? 1 : -1;
        }
    };
    TasksComponent.prototype.createGroupedTasks = function (tasks) {
        var res = [];
        var lastHeader;
        tasks.forEach(function (t) {
            if (t.tsk_id_record !== lastHeader) {
                lastHeader = t.tsk_id_record;
                res.push({
                    'header': lastHeader,
                    'estimatedDuration': 0,
                    'tasks': []
                });
            }
            res[res.length - 1].tasks.push(t);
            res[res.length - 1].estimatedDuration += t.tsk_estimated_duration;
        });
        // order groups by total ETA
        res = res.sort(function (a, b) {
            return a.estimatedDuration > b.estimatedDuration ? -1 : 1;
        });
        return res;
    };
    TasksComponent.prototype.toggleTimeTracking = function (t, event) {
        var parent = event.target["parentNode"];
        this.taskToggleTimeTracking(t, parent);
    };
    TasksComponent.prototype.taskEdit = function (t, event) {
        var parent = event.target["parentNode"];
        if (event.altKey && event.keyCode == 38) { // detect move up
            this.taskMoveUp(parent);
        }
        if (event.altKey && event.keyCode == 40) { // detect move down
            this.taskMoveDown(parent);
        }
        if (!event.altKey && event.keyCode == 38) { // detect jump up
            this.taskJumpUp(parent, "span.task-text[contenteditable=true]");
        }
        if (!event.altKey && event.keyCode == 40) { // detect jump down
            this.taskJumpDown(parent, "span.task-text[contenteditable=true]");
        }
        if (!event.shiftKey && event.keyCode == 113) { // detect "F2" = start/stop time tracking
            this.taskToggleTimeTracking(t, parent);
        }
        if (event.altKey && event.keyCode == 83) { // detect 's'
            this.setSelected(t);
        }
        if (event.altKey && event.keyCode == 46) { // detect supr (delete)
            this.taskCancel(t);
        }
        if (event.altKey && event.keyCode == 66) { // detect 'b'
            this.taskToBacklog(t);
        }
        if (event.altKey && (event.keyCode == 106 || event.keyCode == 49)) { // detect '*' || '1'
            document.querySelector("input[type=checkbox]#" + t.tsk_id)['click']();
        }
        if (event.altKey && (event.keyCode == 73 || event.keyCode == 50)) { // detect 'i' || '2'
            this.markTaskAs(t, 'important');
        }
        if (event.altKey && (event.keyCode == 85 || event.keyCode == 52)) { // detect 'u' || '4'
            this.markTaskAs(t, 'urgent');
        }
        if (event.altKey && (event.keyCode == 72 || event.keyCode == 53)) { // detect 'h' || '5'
            this.markTaskAs(t, 'highlighted');
        }
        if (event.altKey && (event.keyCode == 80 || event.keyCode == 51)) { // detect 'p' || '3'
            this.markTaskAs(t, 'progressed');
        }
        if (event.altKey && (event.keyCode == 67 || event.keyCode == 54)) { // detect 'c' || '6'
            this.markTaskAs(t, 'call');
        }
        if (event.altKey && (event.keyCode == 55)) { // detect '7'
            this.markTaskAs(t, 'unexpected');
        }
        if (event.altKey && event.keyCode == 107) { // detect '+'
            this.focusElement('input[name=tsk_name]');
        }
        if (event.altKey && event.keyCode == 78) { // detect 'n'
            this.asNextToDo(t, true);
        }
        if (event.altKey && event.keyCode == 82) { // detect 'r'
            this.asNextToDo(t, false);
        }
        if (event.altKey && event.keyCode == 84) { // detect 't'
            var tt = this.lastTTEntryFromDay(this.services.dateUtils.dateOnly(new Date()));
            if (!tt) { // no task today, try yesterday
                tt = this.lastTTEntryFromDay(this.services.dateUtils.dateOnly(this.services.dateUtils.addDays(new Date(), -1)));
            }
            if (tt && t.tsk_time_history.length) {
                t.tsk_time_history[t.tsk_time_history.length - 1].tsh_date_start = tt;
                if (t.tsk_ctg_in_process == 1) {
                    var randomFinish = ((t.tsk_estimated_duration - 2) * 60) + Math.floor(Math.random() * 2 * 10 * 6);
                    t.tsk_time_history[t.tsk_time_history.length - 1].tsh_date_end = new Date(tt.getTime() + randomFinish * 1000);
                    t.tsk_time_history[t.tsk_time_history.length - 1].tsh_time_spent = randomFinish;
                    var total_1 = 0;
                    t.tsk_time_history.forEach(function (tth) {
                        total_1 += tth.tsh_time_spent;
                    });
                    this.services.tasksCore.updateTask(t, {
                        tsk_total_time_spent: total_1
                    });
                    t.tsk_total_time_spent = total_1;
                    console.log('task with changes after time tracking setup', t);
                }
                //this.updateTaskTimeTracking(t.tsk_id,t.tsk_time_history.length,data);
                this.services.tasksCore.tasksToStorage(); // TODO: move this sentence to tasksCore
                // TODO: update time tracking history on server
                this.updateState();
            }
        }
        if (event.shiftKey && event.keyCode == 113) { // detect "Shift + F2" = find time tracking task, stop it, close the task and start the focused one
            // find tasks in progress
            var inprogress = this.tasks.filter(function (task) { return task.tsk_ctg_in_process === 2; });
            console.log('inprogress now', inprogress);
            // stop them
            inprogress.forEach(function (task) {
                // let parent: HTMLElement = document.getElementById(task.tsk_id);
                // this.taskToggleTimeTracking(task, parent);
                document.querySelector("#" + task.tsk_id + " input[type=checkbox]")['click']();
            });
            // start current task time tracking
            this.taskToggleTimeTracking(t, parent);
        }
        // event.preventDefault();
        // event.returnValue = false;
        // return false;
    };
    TasksComponent.prototype.taskCheckboxHandler = function (t, event) {
        var _this = this;
        if (this.timers[t.tsk_id]) { // task is in running state
            // stop time tracking
            this.taskToggleTimeTracking(t, this.getTaskDOMElement(t.tsk_id));
        }
        var dateDone = this.services.dateUtils.newDateUpToSeconds();
        if (event['shiftKey'] && t.tsk_time_history.length) { // modifier, use the last time tracking end date record
            dateDone = new Date(t.tsk_time_history[t.tsk_time_history.length - 1].tsh_date_end);
        }
        this.updateTask(t.tsk_id, {
            tsk_ctg_status: event['target']['checked'] ? this.taskStatus.CLOSED : this.taskStatus.OPEN,
            tsk_date_done: dateDone
        });
        setTimeout(function () {
            _this.updateState();
        }, this.delayOnUpdateState);
    };
    TasksComponent.prototype.updateTask = function (tsk_id, newData) {
        var model = this.tasks.find(function (e) { return e.tsk_id === tsk_id; });
        this.services.tasksCore.updateTask(model, newData);
    };
    TasksComponent.prototype.taskMoveUp = function (current) {
        // previous <- current | next
        // current | previous | next
        if (current.previousElementSibling && current.previousElementSibling.id) {
            this.interchangeTaskOrder(current.id, current.previousElementSibling.id);
            current.parentNode.insertBefore(current.previousSibling, current.nextSibling);
        }
    };
    TasksComponent.prototype.taskMoveDown = function (current) {
        // previous | current -> next
        // previous | next | current
        if (current.nextElementSibling && current.nextElementSibling.id) {
            this.interchangeTaskOrder(current.id, current.nextElementSibling.id);
            current.parentNode.insertBefore(current.nextSibling, current);
        }
    };
    TasksComponent.prototype.interchangeTaskOrder = function (tsk_id1, tsk_id2) {
        var t1 = this.tasks.find(function (e) { return e.tsk_id === tsk_id1; }).tsk_order;
        var t2 = this.tasks.find(function (e) { return e.tsk_id === tsk_id2; }).tsk_order;
        this.updateTask(tsk_id1, { tsk_order: t2 });
        this.updateTask(tsk_id2, { tsk_order: t1 });
    };
    TasksComponent.prototype.taskJumpUp = function (current, selector) {
        if (current.previousElementSibling.querySelector(selector)) {
            current.previousElementSibling.querySelector(selector).focus();
        }
        else {
            if (current.previousElementSibling.parentNode.previousElementSibling && current.previousElementSibling.parentNode.previousElementSibling.lastElementChild.querySelector(selector)) {
                current.previousElementSibling.parentNode.previousElementSibling.lastElementChild.querySelector(selector).focus();
            }
            else {
                if (this.showBatchAdd) {
                    this.focusElement("textarea[name=tsk_multiple_name]");
                }
                else {
                    this.focusElement("input[name=tsk_name]");
                }
            }
        }
    };
    TasksComponent.prototype.focusElement = function (selector) {
        document.querySelector(selector)["focus"]();
    };
    TasksComponent.prototype.taskJumpDown = function (current, selector) {
        if (current.nextElementSibling && current.nextElementSibling.querySelector(selector)) {
            current.nextElementSibling.querySelector(selector).focus();
        }
        else {
            if (current.parentNode.nextElementSibling && current.parentNode.nextElementSibling.firstElementChild.nextElementSibling.querySelector(selector)) {
                current.parentNode.nextElementSibling.firstElementChild.nextElementSibling.querySelector(selector).focus();
            }
        }
    };
    TasksComponent.prototype.taskToggleTimeTracking = function (task, dom) {
        if (task.tsk_ctg_in_process === 1) {
            // not in progress
            task.tsk_ctg_in_process = 2;
            this.updateTask(task.tsk_id, {
                tsk_ctg_in_process: 2
            });
            // show timer
            this.showTimer(task, dom);
            this.services.tasksCore.addTimeTracking(task);
        }
        else {
            // already in progress
            task.tsk_ctg_in_process = 1;
            this.updateTask(task.tsk_id, {
                tsk_ctg_in_process: 1
            });
            // hide timer
            this.hideTimer(task, dom);
            this.services.tasksCore.stopTimeTracking(task);
            this.calculateTotalTimeSpentToday();
        }
    };
    TasksComponent.prototype.showTimer = function (task, dom) {
        var _this = this;
        var timer = 0;
        var start = this.services.dateUtils.newDateUpToSeconds();
        // if task was running previously, get current running time
        if (task.tsk_time_history.length > 0) {
            var h = task.tsk_time_history[task.tsk_time_history.length - 1];
            if (h.tsh_time_spent === 0) {
                h.tsh_date_start = new Date(h.tsh_date_start);
                start = h.tsh_date_start;
                timer = this.elapsedTime(h.tsh_date_start, this.services.dateUtils.newDateUpToSeconds());
            }
        }
        // dom.querySelector("span[contenteditable=true]").classList.add("task-in-process");
        var formatTimerString = function (timer) {
            if (_this.timerModeRemaining) {
                return "R-" + _this.formatTime((parseInt(task.tsk_estimated_duration) * 60) - parseInt(task.tsk_total_time_spent) - timer);
            }
            else {
                return _this.formatTime(timer);
            }
        };
        var calcTimer = function (start) {
            return _this.elapsedTime(start, _this.services.dateUtils.newDateUpToSeconds());
        };
        var watch = setInterval(function () {
            var h = task.tsk_time_history[task.tsk_time_history.length - 1];
            timer = calcTimer(new Date(h.tsh_date_start));
            _this.timers[task.tsk_id].timerString = formatTimerString(timer);
            if (task.tsk_estimated_duration * 60 - 60 < task.tsk_total_time_spent + timer && !_this.timers[task.tsk_id].burnoutNotified) {
                _this.timers[task.tsk_id].burnoutNotified = true;
                if (_this.tasks.find(function (t) { return t.tsk_id === task.tsk_id; }).tsk_ctg_status === _this.taskStatus.OPEN) {
                    _this.notification({
                        body: "Task \"" + task.tsk_name + "\" is about to exceed estimation!"
                    });
                }
            }
        }, 1000);
        this.timers[task.tsk_id] = {};
        this.timers[task.tsk_id].timerString = formatTimerString(timer);
        this.timers[task.tsk_id].watch = watch;
        this.timers[task.tsk_id].burnoutNotified = false;
    };
    TasksComponent.prototype.hideTimer = function (task, dom) {
        if (this.timers[task.tsk_id]) {
            clearInterval(this.timers[task.tsk_id].watch);
            this.timers[task.tsk_id] = undefined;
        }
        // dom.querySelector("span[contenteditable=true]").classList.remove("task-in-process");
    };
    // TODO: replace with service's method
    TasksComponent.prototype.elapsedTime = function (date1, date2) {
        return this.services.tasksCore.elapsedTime(date1, date2);
        //return Math.abs(date1.getTime() - date2.getTime()) / 1000;
    };
    TasksComponent.prototype.formatTime = function (elapsed, format) {
        if (format === void 0) { format = undefined; }
        // time in seconds
        var hr = Math.floor(elapsed / (60 * 60));
        var min = Math.floor((elapsed - (hr * 60 * 60)) / 60);
        var sec = Math.round(elapsed - (hr * 60 * 60) - (min * 60));
        var str = "";
        if (format === "hr:min:sec" || format === undefined) {
            if (hr === 0) { // only min:sec
                str += ((min > 9) ? min : "0" + min);
                str += ":" + ((sec > 9) ? sec : "0" + sec);
            }
            else {
                str += (hr > 9) ? hr : "0" + hr;
                str += ":" + ((min > 9) ? min : "0" + min);
                str += ":" + ((sec > 9) ? sec : "0" + sec);
            }
        }
        if (format === "#h#m") {
            if (hr === 0) {
                str = min + "m";
            }
            else {
                if (min === 0) {
                    str = hr + "h";
                }
                else {
                    str = hr + "h" + min + "m";
                }
            }
        }
        return str;
    };
    TasksComponent.prototype.deleteTimeTracking = function (t, h) {
        var spent = 0;
        t.tsk_time_history.forEach(function (tt) {
            if (tt.tsh_num_secuential < h.tsh_num_secuential) {
                spent += tt.tsh_time_spent;
            }
            if (tt.tsh_num_secuential > h.tsh_num_secuential) {
                tt.tsh_num_secuential -= 1;
                spent += tt.tsh_time_spent;
            }
        });
        t.tsk_time_history.splice(h.tsh_num_secuential - 1, 1);
        t.tsk_total_time_spent = spent;
        this.calculateTotalTimeSpentToday();
    };
    TasksComponent.prototype.editTimeTracking = function (h, which, event) {
        var newValue = event.target['textContent'];
        var field = (which === 1) ? 'tsh_date_start' : 'tsh_date_end';
        var oldValue = h[field];
        var task = this.tasks.find(function (t) { return t.tsk_id === h.tsh_id; });
        if (newValue.length !== 19 || (new Date(newValue)).getTime() === (new Date(oldValue)).getTime()) {
            return false;
        }
        if (which !== 1 && task.tsk_ctg_in_process === 2) {
            return false;
        }
        var data = {};
        data[field] = new Date(newValue);
        this.updateTaskTimeTracking(h.tsh_id, h.tsh_num_secuential, data);
        if (this.timers[h.tsh_id]) {
            var dom = this.getTaskDOMElement(task.tsk_id);
            this.hideTimer(task, dom);
            this.showTimer(task, dom);
        }
        this.calculateTotalTimeSpentToday();
    };
    TasksComponent.prototype.updateTaskTimeTracking = function (tsh_id, tsh_num_secuential, newData) {
        var model = this.tasks.find(function (e) { return e.tsk_id === tsh_id; });
        if (model) {
            model = model.tsk_time_history.find(function (h) { return h.tsh_num_secuential === tsh_num_secuential; });
        }
        this.services.tasksCore.updateTaskTimeTracking(model, newData);
    };
    TasksComponent.prototype.getTaskDOMElement = function (tsk_id) {
        var dom = document.querySelector("div[id=\"" + tsk_id + "\"] span").parentElement;
        return dom;
    };
    TasksComponent.prototype.inputKeyUpHandler = function (event) {
        var _this = this;
        if (event.keyCode === 40 && !this.showBatchAdd) { // Down arrow
            this.focusElement("span[contenteditable=true]");
        }
        if (event.keyCode == 113) { // detect "F2" = toggle Batch Add
            this.showBatchAdd = !this.showBatchAdd;
            this.viewETABeforeAdd = false;
            setTimeout(function () {
                if (_this.showBatchAdd) {
                    _this.focusElement("textarea[name=tsk_multiple_name]");
                }
                else {
                    _this.focusElement("input[name=tsk_name]");
                }
            }, 100);
        }
        // interpret ETAs and sum them up by record
        var t;
        var totalETA = 0;
        var totalPerRecord = [];
        var value = event.target['value'];
        // console.log('event',event);
        // console.log(value.split('\n'));
        if (value) {
            var totalTasksWritten_1 = 0;
            value.split('\n').forEach(function (text) {
                if (!text.startsWith('//') && text !== '') {
                    t = _this.services.tasksCore.parseTask({
                        'tsk_date_add': _this.services.dateUtils.newDateUpToSeconds(),
                        'tsk_name': text
                    }, _this.options);
                    if (totalPerRecord.find(function (r) { return r.record === t.tsk_id_record; })) {
                        totalPerRecord.find(function (r) { return r.record === t.tsk_id_record; }).totalETA += t.tsk_estimated_duration || 0;
                    }
                    else {
                        totalPerRecord.push({
                            record: t.tsk_id_record,
                            totalETA: t.tsk_estimated_duration || 0
                        });
                    }
                    totalETA += t.tsk_estimated_duration || 0;
                    totalTasksWritten_1++;
                    // console.log("totals",totalPerRecord);
                }
            });
            this.viewETABeforeAdd = true;
            this.state.beforeAddETA = totalPerRecord;
            this.state.beforeAddTotalETA = totalETA;
            this.state.beforeAddTotalTasksWritten = totalTasksWritten_1;
            // console.log('ETA',totalETA);
        }
        else {
            this.viewETABeforeAdd = false;
        }
    };
    TasksComponent.prototype.toggleViewBacklog = function () {
        this.viewBacklog = !this.viewBacklog;
    };
    TasksComponent.prototype.toggleViewAll = function () {
        this.viewAll = !this.viewAll;
    };
    TasksComponent.prototype.toggleViewReportsWeek = function () {
        this.viewReportsWeek = !this.viewReportsWeek;
    };
    TasksComponent.prototype.toggleViewReportsDayDistribution = function () {
        this.viewReportsDayDistribution = !this.viewReportsDayDistribution;
    };
    TasksComponent.prototype.toggleViewPostponed = function () {
        this.viewPostponed = !this.viewPostponed;
    };
    TasksComponent.prototype.toggleViewOptions = function () {
        this.viewOptions = !this.viewOptions;
    };
    TasksComponent.prototype.ageFontSizeNormalization = function (t) {
        // range from 8px to 80px
        var age = this.taskAgeRaw(t) / 2;
        return age >= 72 ? 80 : age + 8;
    };
    TasksComponent.prototype.taskAgeRaw = function (t) {
        return this.services.tasksCore.elapsedDays(new Date(t.tsk_date_add), new Date());
    };
    TasksComponent.prototype.taskAge = function (t) {
        var diff = this.services.tasksCore.elapsedDays(new Date(t.tsk_date_add), new Date());
        return "" + (diff > 1 ? '(' + diff + ' days ago)' : (diff === 1 ? '(yesterday)' : ''));
    };
    TasksComponent.prototype.taskAgeClass = function (t) {
        var diff = this.services.tasksCore.elapsedDays(new Date(t.tsk_date_add), new Date());
        var classes = ['task-age-0', 'task-age-1', 'task-age-2', 'task-age-10'];
        if (diff <= 2) {
            return classes[diff];
        }
        if (2 < diff && diff < 10) {
            return classes[2];
        }
        if (diff >= 10) {
            return classes[3];
        }
        return '';
    };
    TasksComponent.prototype.deleteTasks = function () {
        this.services.tasksCore.deleteTasks();
        this.updateState();
    };
    TasksComponent.prototype.calculateTotalTimeSpentToday = function () {
        var _this = this;
        var today = new Date();
        var today0 = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        var tomorrow0 = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
        this.state.allClosedTimeTrackingToday = [];
        this.state.allOpenTimeTrackingToday = [];
        this.tasks.filter(function (t) {
            t.tsk_time_history.filter(function (h) {
                if (today0 <= new Date(h.tsh_date_start) && new Date(h.tsh_date_start) <= tomorrow0) {
                    if (t.tsk_ctg_status === _this.taskStatus.CLOSED) {
                        _this.state.allClosedTimeTrackingToday.push(h);
                    }
                    else {
                        _this.state.allOpenTimeTrackingToday.push(h);
                    }
                }
            });
        });
        var spent = 0;
        this.state.allClosedTimeTrackingToday.forEach(function (h) {
            spent += h.tsh_time_spent;
        });
        this.state.totalTimeSpentTodayOnClosedTasks = spent;
        this.state.totalTimeSpentToday = 0;
        this.state.totalTimeSpentToday += spent;
        spent = 0;
        this.state.allOpenTimeTrackingToday.forEach(function (h) {
            spent += h.tsh_time_spent;
        });
        this.state.totalTimeSpentTodayOnOpenTasks = spent;
        this.state.totalTimeSpentToday += spent;
    };
    TasksComponent.prototype.setOpen = function (t) {
        this.updateTask(t.tsk_id, {
            tsk_ctg_status: this.taskStatus.OPEN
        });
        this.updateState();
    };
    TasksComponent.prototype.taskEstimatedDurationEdit = function (t, event) {
        var newDuration = this.services.tasksCore.parseTime(event.target['textContent']);
        if (newDuration !== t.tsk_estimated_duration) {
            // if schedule date end is set, update it as well
            var newEnd = t.tsk_schedule_date_end;
            if (t.tsk_schedule_date_end) {
                newEnd = new Date((new Date(t.tsk_schedule_date_start)).getTime() + newDuration * 60 * 1000);
            }
            this.updateTask(t.tsk_id, {
                tsk_estimated_duration: newDuration,
                tsk_schedule_date_end: newEnd
            });
        }
    };
    TasksComponent.prototype.commandOnTask = function (t, event) {
        var _this = this;
        if (t.tsk_name !== event.target['textContent']) {
            this.updateTask(t.tsk_id, {
                tsk_name: event.target['textContent']
            });
        }
        var command = event.target['textContent'];
        var originalTask = '';
        if (command.indexOf('--') !== -1) { // postpone
            command = command.substring(command.indexOf('--') + 2);
            originalTask = t.tsk_name.replace(' --' + command, '');
            console.log('command:', command);
            if (command.startsWith('pos')) {
                // --pos 17:30
                // --pos now +2h30m
                // --pos tomorrow 09:00
                // --pos 2016-12-31 23:59
                var data = command.substring(4);
                var s = this.services.tasksCore.parseDatetime(data);
                console.log('date parsed:', s);
                this.updateTask(t.tsk_id, {
                    tsk_name: originalTask,
                    tsk_date_view_until: s.date_start
                });
                this.updateState();
            }
        }
        if (command.startsWith('->[')) { // move to other record
            command = command.substring(command.indexOf('->[') + 3, command.indexOf(']', command.indexOf('->[') + 3));
            originalTask = t.tsk_name.replace('->[' + command + '] ', '');
            originalTask = t.tsk_name.replace('->[' + command + ']', '');
            console.log('command new list:', command);
            if (command) {
                this.updateTask(t.tsk_id, {
                    tsk_name: originalTask,
                    tsk_id_record: command
                });
                this.updateState();
            }
        }
        if (command.indexOf('%[') !== -1) { // set schedule
            var endPosition = command.indexOf(']', command.indexOf('%[')) === -1 ? command.length : command.indexOf(']', command.indexOf('%['));
            command = command.substring(command.indexOf('%[') + 2, endPosition);
            var s = this.services.tasksCore.parseDatetime(command);
            originalTask = t.tsk_name.replace('%[' + command + '] ', '');
            originalTask = t.tsk_name.replace(' %[' + command + ']', '');
            originalTask = t.tsk_name.replace('%[' + command + ']', '');
            this.updateTask(t.tsk_id, {
                tsk_name: originalTask,
                tsk_schedule_date_start: s.date_start,
                tsk_schedule_date_end: s.date_end,
                tsk_estimated_duration: s.duration
            });
            this.updateState();
        }
        if (command.indexOf('#[') !== -1) { // set schedule
            var endPosition = command.indexOf(']', command.indexOf('#[')) === -1 ? command.length : command.indexOf(']', command.indexOf('#['));
            command = command.substring(command.indexOf('#[') + 2, endPosition);
            originalTask = t.tsk_name.replace('#[' + command + '] ', '');
            originalTask = t.tsk_name.replace(' #[' + command + ']', '');
            originalTask = t.tsk_name.replace('#[' + command + ']', '');
            this.updateTask(t.tsk_id, {
                tsk_name: originalTask,
                tsk_tags: command,
            });
            this.updateState();
        }
        if (command.indexOf('http://') !== -1) { // set url
            this.services.tasksCore.doThisWithAToken(t, function (t, expression) {
                //t.tsk_url = 'http://' + expression;
                _this.updateTask(t.tsk_id, {
                    tsk_name: t.tsk_name,
                    tsk_url: 'http://' + expression,
                });
                _this.updateState();
            }, 'http://');
        }
        if (command.indexOf('https://') !== -1) { // set url
            this.services.tasksCore.doThisWithAToken(t, function (t, expression) {
                //t.tsk_url = 'https://' + expression;
                _this.updateTask(t.tsk_id, {
                    tsk_name: t.tsk_name,
                    tsk_url: 'https://' + expression,
                });
                _this.updateState();
            }, 'https://');
        }
    };
    TasksComponent.prototype.notification = function (data) {
        var not = window["Notification"];
        if (not && not.permission !== "denied") {
            not.requestPermission(function (status) {
                var n = new not(data.title || 'Tasks', {
                    body: data.body,
                    icon: data.icon || 'favicon.ico' // optional
                });
            });
        }
    };
    TasksComponent.prototype.setUnpostpone = function (t) {
        this.updateTask(t.tsk_id, {
            tsk_date_view_until: this.services.dateUtils.newDateUpToSeconds()
        });
        if (this.state.postponedTasks.length === 0) {
            this.viewPostponed = false;
        }
        this.updateState();
    };
    TasksComponent.prototype.scheduleNotificationsForStartingTasks = function () {
        var _this = this;
        var now = this.services.dateUtils.newDateUpToSeconds();
        var tomorrow0 = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
        if (!this.state.startingTasksSchedule) {
            this.state.startingTasksSchedule = [];
        }
        this.tasks.filter(function (t) {
            return t.tsk_ctg_status !== _this.taskStatus.CLOSED && (t.tsk_schedule_date_start ? now < new Date(t.tsk_schedule_date_start) && new Date(t.tsk_schedule_date_start) < tomorrow0 : false);
        }).forEach(function (t) {
            var diff = _this.services.tasksCore.elapsedTime(now, new Date(t.tsk_schedule_date_start));
            diff = diff - (5 * 60); // date minus 5 minutes
            // validate if there is no current schedule set
            var found = _this.state.startingTasksSchedule.find(function (s) { return s.task.tsk_id == t.tsk_id && s.timeoutHandler != -1; });
            if (found) {
                if (new Date(found.task.tsk_schedule_date_start) != new Date(t.tsk_schedule_date_start)) {
                    clearTimeout(found.timeoutHandler);
                    found.timeoutHandler = -1;
                }
                else {
                    return false; // date is the same, do nothing
                }
            }
            var timeout = setTimeout(function () {
                _this.notification({
                    body: "Task \"" + t.tsk_name + "\" is about to start!"
                });
            }, diff * 1000);
            console.log('schedule in ' + _this.formatTime(diff), t);
            _this.state.startingTasksSchedule.push({
                task: t,
                timeoutHandler: timeout
            });
        });
    };
    TasksComponent.prototype.taskCancel = function (t) {
        this.updateTask(t.tsk_id, {
            tsk_ctg_status: this.taskStatus.CANCELLED
        });
        this.updateState();
        console.log('cancelled task', t);
    };
    TasksComponent.prototype.weekStats = function () {
        var mondayDate = this.lastMonday(new Date(2016, 11, 15));
        var dayTasks = [];
        var currentDay = mondayDate;
        var tomorrow = this.addDays(currentDay, 1);
        var today = this.services.tasksCore.dateOnly(this.services.dateUtils.newDateUpToSeconds());
        var dailyCount = [];
        var estimatedTotalPerDay = 0;
        var spentTotalPerDay = 0;
        while (currentDay <= today) {
            dayTasks = this.tasks.filter(function (t) { return new Date(t.tsk_date_done) > currentDay && new Date(t.tsk_date_done) < tomorrow; });
            estimatedTotalPerDay = 0;
            spentTotalPerDay = 0;
            dayTasks.forEach(function (t) {
                estimatedTotalPerDay += t.tsk_estimated_duration;
                spentTotalPerDay += t.tsk_total_time_spent;
            });
            if (spentTotalPerDay !== 0) {
                dailyCount.push({
                    date: currentDay,
                    tasksDone: dayTasks.length,
                    estimated: estimatedTotalPerDay,
                    timeSpent: spentTotalPerDay,
                    productivity: spentTotalPerDay === 0 ? 0 : Math.round((estimatedTotalPerDay * 60 * 100) / spentTotalPerDay) / 100,
                    realTimeElapsed: this.elapsedTime(this.firstTTEntryFromDay(currentDay), this.lastTTEntryFromDay(currentDay))
                });
            }
            currentDay = this.addDays(currentDay, 1);
            tomorrow = this.addDays(currentDay, 1);
        }
        this.reports.week = dailyCount;
    };
    TasksComponent.prototype.lastMonday = function (from) {
        var base = this.services.tasksCore.dateOnly(from);
        while (base.getDay() !== 1) {
            base = this.addDays(base, -1);
        }
        return base;
    };
    TasksComponent.prototype.addDays = function (base, days) {
        return new Date((base.getTime() + (days * 86400000)));
    };
    TasksComponent.prototype.taskQualifiersEdit = function (task, event) {
        var newQualifiers = event.target['textContent'];
        if (task.tsk_qualifiers !== newQualifiers) {
            this.updateTask(task.tsk_id, {
                tsk_qualifiers: newQualifiers
            });
            // this.updateState();
        }
    };
    TasksComponent.prototype.firstTTEntryFromDay = function (date) {
        var day0 = this.services.tasksCore.dateOnly(date);
        var nextDay0 = this.addDays(day0, 1);
        var firstDate = nextDay0;
        var tasksOfTheDay = this.tasks.filter(function (t) {
            return new Date(t.tsk_date_done) >= day0 && new Date(t.tsk_date_done) < nextDay0;
        });
        tasksOfTheDay.forEach(function (t) {
            if (t.tsk_time_history.length) {
                t.tsk_time_history.forEach(function (h) {
                    if (new Date(h.tsh_date_start) < firstDate && day0 < new Date(h.tsh_date_start)) {
                        firstDate = new Date(h.tsh_date_start);
                    }
                });
            }
        });
        if (firstDate === nextDay0) {
            return null;
        }
        return firstDate;
    };
    TasksComponent.prototype.lastTTEntryFromDay = function (date) {
        var day0 = this.services.tasksCore.dateOnly(date);
        var nextDay0 = this.addDays(day0, 1);
        var lastDate = day0;
        var tasksOfTheDay = this.tasks.filter(function (t) {
            return new Date(t.tsk_date_done) >= day0 && new Date(t.tsk_date_done) < nextDay0;
        });
        tasksOfTheDay.forEach(function (t) {
            if (t.tsk_time_history.length) {
                t.tsk_time_history.forEach(function (h) {
                    if (new Date(h.tsh_date_end) > lastDate && new Date(h.tsh_date_end) < nextDay0) {
                        lastDate = new Date(h.tsh_date_end);
                    }
                });
            }
        });
        if (lastDate === day0) {
            return null;
        }
        return lastDate;
    };
    TasksComponent.prototype.taskToBacklog = function (t) {
        this.updateTask(t.tsk_id, {
            tsk_ctg_status: this.taskStatus.BACKLOG
        });
        this.updateState();
    };
    TasksComponent.prototype.dayDistribution = function () {
        var table = [];
        var records = [];
        var closedTodayTasks = this.state.closedTodayTasks;
        closedTodayTasks.forEach(function (t) {
            if (table.indexOf(t.tsk_id_record) === -1) {
                table.push(t.tsk_id_record);
                records.push({
                    "record": t.tsk_id_record,
                    "eta": 0,
                    "real": 0,
                    "percentageEta": 0,
                    "percentageReal": 0
                });
            }
        });
        var rec = null;
        var totalEta = 0;
        var totalReal = 0;
        closedTodayTasks.forEach(function (t) {
            rec = records.find(function (r) { return r.record === t.tsk_id_record; });
            if (rec) {
                rec.eta += t.tsk_estimated_duration;
                rec.real += t.tsk_total_time_spent;
                totalEta += t.tsk_estimated_duration;
                totalReal += t.tsk_total_time_spent;
            }
        });
        // order by total real
        records = records.sort(function (a, b) {
            return (a.real < b.real) ? 1 : -1;
        });
        // percentage
        records.forEach(function (r) {
            r.percentageEta = Math.round(r.eta * 100 / totalEta) / 100;
            r.percentageReal = Math.round(r.real * 100 / totalReal) / 100;
        });
        this.reports.dayDistribution = records;
    };
    TasksComponent.prototype.editDateDone = function (t, event) {
        var newValue = event.target['textContent'];
        var oldValue = t.tsk_date_done;
        if (newValue.length !== 19 || (new Date(newValue)).getTime() === (new Date(oldValue)).getTime()) {
            return false;
        }
        this.updateTask(t.tsk_id, {
            tsk_date_done: new Date(newValue)
        });
    };
    TasksComponent.prototype.backup = function () {
        var tasks = JSON.stringify(this.tasks);
        this.optionsInput = tasks;
    };
    TasksComponent.prototype.backupDoneOnly = function () {
        var _this = this;
        var tasks = this.tasks.filter(function (t) {
            return t.tsk_ctg_status === _this.taskStatus.CLOSED;
        });
        var tasksStr = JSON.stringify(tasks);
        this.optionsInput = tasksStr;
        this.optionsMessage("Backup correctly " + tasks.length + " tasks.");
    };
    TasksComponent.prototype.optionsMessage = function (message) {
        document.querySelector('#optionsMessages').innerHTML = message;
    };
    TasksComponent.prototype.import = function () {
        var _this = this;
        var data = this.optionsInput;
        var tasks = JSON.parse(data);
        if (Array.isArray(tasks) && tasks.length > 0) {
            this.services.tasksCore.import(tasks);
            this.tasks = this.services.tasksCore.tasks();
            this.optionsMessage("Imported correctly " + tasks.length + " tasks.");
            setTimeout(function () { return _this.updateState(); }, 100);
        }
    };
    TasksComponent.prototype.purgeDoneTasks = function () {
        var _this = this;
        var tasks = this.tasks.filter(function (t) {
            return t.tsk_ctg_status === _this.taskStatus.CLOSED;
        });
        this.services.tasksCore.purgeDoneTasks();
        this.optionsMessage("Deleted correctly " + tasks.length + " tasks.");
    };
    // formatTags(tags: string){
    //     if (tags){
    //         return "#" + tags.replace(/\s/g," #");
    //     }
    //     return "";
    // }
    TasksComponent.prototype.showTagStats = function (tag) {
        var _this = this;
        var tasks = this.tasks.filter(function (t) { return t.tsk_tags.indexOf(tag) !== -1; });
        this.tagInfo.display = true;
        this.tagInfo.tasks = tasks;
        // this.tagInfo.tasksOpen = tasks.filter(t => t.tsk_ctg_status === this.taskStatus.OPEN || t.tsk_ctg_status === this.taskStatus.BACKLOG);
        // this.tagInfo.tasksClosed = tasks.filter(t => t.tsk_ctg_status === this.taskStatus.CLOSED || t.tsk_ctg_status === this.taskStatus.CANCELLED);
        this.tagInfo.tasksOpenTotalEstimated = 0;
        this.tagInfo.tasksOpenTotalSpent = 0;
        this.tagInfo.tasksClosedTotalEstimated = 0;
        this.tagInfo.tasksClosedTotalSpent = 0;
        tasks.forEach(function (t) {
            if (t.tsk_ctg_status === _this.taskStatus.OPEN || t.tsk_ctg_status === _this.taskStatus.BACKLOG) {
                _this.tagInfo.tasksOpenTotalEstimated += t.tsk_estimated_duration;
                _this.tagInfo.tasksOpenTotalSpent += t.tsk_total_time_spent;
            }
            if (t.tsk_ctg_status === _this.taskStatus.CLOSED || t.tsk_ctg_status === _this.taskStatus.CANCELLED) {
                _this.tagInfo.tasksClosedTotalEstimated += t.tsk_estimated_duration;
                _this.tagInfo.tasksClosedTotalSpent += t.tsk_total_time_spent;
            }
        });
    };
    TasksComponent.prototype.statusText = function (status) {
        var r = '';
        switch (status) {
            case this.taskStatus.BACKLOG:
                r = 'BACKLOG';
                break;
            case this.taskStatus.OPEN:
                r = 'OPEN';
                break;
            case this.taskStatus.CANCELLED:
                r = 'CANCELLED';
                break;
            case this.taskStatus.CLOSED:
                r = 'CLOSED';
                break;
        }
        return r;
    };
    TasksComponent.prototype.markTaskAs = function (t, qualifier) {
        var task = this.tasks.find(function (e) {
            return e.tsk_id === t.tsk_id;
        });
        var qualifiers = task.tsk_qualifiers;
        if (qualifiers.indexOf(qualifier) === -1) { // not present, add it
            qualifiers = qualifiers ? qualifiers + ',' + qualifier : qualifier;
        }
        else { // present, remove it
            qualifiers = qualifiers.replace(',' + qualifier, '').replace(qualifier + ',', '').replace(qualifier, '');
        }
        this.updateTask(t.tsk_id, {
            tsk_qualifiers: qualifiers
        });
    };
    TasksComponent.prototype.isOnline = function () {
        return navigator.onLine;
    };
    TasksComponent.prototype.taskTagsEdit = function (task, event) {
        var newData = event.target['textContent'];
        if (task.tsk_tags !== newData) {
            this.updateTask(task.tsk_id, {
                tsk_tags: newData
            });
            this.updateState();
        }
    };
    TasksComponent.prototype.registerServiceWorker = function () {
        if ('serviceWorker' in navigator) {
            navigator['serviceWorker']
                .register('../service-worker.js')
                .then(function (registration) {
                console.log("Service Worker Registered");
                return registration.sync.getTags();
            }).then(function () {
                return navigator['serviceWorker'].ready;
            }).then(function (reg) {
                return reg.sync.register('syncTest');
            }).then(function () {
                console.log('Sync registered');
            })
                .catch(function (err) {
                console.log("Service Worker Failed to Register", err);
            });
        }
    };
    TasksComponent.prototype.sendAllToServer = function () {
        this.services.tasksCore.batchAdd();
    };
    TasksComponent.prototype.getTasksFromServer = function () {
        this.services.tasksCore.getTasksFromServer();
        this.updateState();
    };
    TasksComponent.prototype.qualifierTotals = function () {
        var _this = this;
        var qualifierCollection = ['important', 'urgent', 'highlighted', 'progressed'];
        var tasks = this.tasks.filter(function (t) { return t.tsk_ctg_status === _this.taskStatus.OPEN; });
        var filtered = [];
        var records = [];
        var rec = {
            qualifier: null,
            taskCount: 0,
            totalETA: 0
        };
        qualifierCollection.forEach(function (q) {
            filtered = tasks.filter(function (t) { return t.tsk_qualifiers && t.tsk_qualifiers.indexOf(q) !== -1; });
            rec = {
                qualifier: q,
                taskCount: filtered.length,
                totalETA: 0
            };
            filtered.forEach(function (t) {
                rec.totalETA += t.tsk_estimated_duration;
            });
            records.push(rec);
        });
        // order by total ETA
        records = records.sort(function (a, b) {
            return (a.totalETA < b.totalETA) ? 1 : -1;
        });
        // total overall
        records.push({
            qualifier: 'TOTAL',
            taskCount: records.reduce(function (p, n) {
                return (p.taskCount || p) + n.taskCount;
            }),
            totalETA: records.reduce(function (p, n) {
                return (p.totalETA || p) + n.totalETA;
            })
        });
        this.reports.qualifierTotals = records;
    };
    TasksComponent.prototype.toggleView = function (view) {
        this[view] = !this[view];
    };
    TasksComponent.prototype.timeTrackingQuickEdit = function (task, event, target) {
        var newValue = event.target['textContent'].trim();
        if (newValue.length === 8 && /[0-2][0-9]:[0-5][0-9]:[0-5][0-9]/.test(newValue)) {
            var parts = newValue.split(':');
            var data = {};
            data["tsh_date_" + target] = new Date(this.services.tasksCore.dateOnly(this.services.dateUtils.newDateUpToSeconds()).getTime() + (parseInt(parts[0]) * 60 * 60 * 1000) + (parseInt(parts[1]) * 60 * 1000) + (parseInt(parts[2]) * 1000));
            // only update if value changed
            var previousValue = new Date(task.tsk_time_history[task.tsk_time_history.length - 1]["tsh_date_" + target]);
            if (data["tsh_date_" + target].getTime() !== previousValue.getTime()) {
                task.tsk_time_history[task.tsk_time_history.length - 1]["tsh_date_" + target] = data["tsh_date_" + target];
                this.updateTaskTimeTracking(task.tsk_id, task.tsk_time_history.length, data);
                if (this.timers[task.tsk_id]) {
                    var dom = this.getTaskDOMElement(task.tsk_id);
                    this.hideTimer(task, dom);
                    this.showTimer(task, dom);
                }
                this.calculateTotalTimeSpentToday();
                this.triggerEvent('updateTimeTracking', task.tsk_time_history[task.tsk_time_history.length - 1]);
            }
        }
        var parent = event.target["parentNode"]["parentNode"]["parentNode"];
        if (!event.altKey && event.keyCode == 38) { // detect jump up
            this.taskJumpUp(parent, "span.tt-" + target + "[contenteditable=true]");
        }
        if (!event.altKey && event.keyCode == 40) { // detect jump down
            this.taskJumpDown(parent, "span.tt-" + target + "[contenteditable=true]");
        }
    };
    TasksComponent.prototype.toggleOption = function (optionName) {
        this.options[optionName] = !this.options[optionName];
        if (typeof (window.localStorage) !== "undefined") {
            localStorage.setItem("Options", JSON.stringify(this.options));
        }
    };
    TasksComponent.prototype.saveOption = function (optionName, value) {
        this.options[optionName] = value;
        //this.sync.setApiRoot(value);
        if (typeof (window.localStorage) !== "undefined") {
            localStorage.setItem("Options", JSON.stringify(this.options));
        }
    };
    TasksComponent.prototype.toggleTimeMode = function () {
        this.timerModeRemaining = !this.timerModeRemaining;
    };
    TasksComponent.prototype.tasksNotInSync = function () {
        var _this = this;
        if (this.services.sync.queue.filter(function (q) { return q.status !== 'processed'; }).length === 0) {
            this.tasks.filter(function (t) { return t.not_sync === true; }).forEach(function (t) { return t.not_sync = undefined; });
        }
        else {
            this.services.sync.queue.filter(function (q) { return q.status !== 'processed'; }).forEach(function (q) {
                var task = _this.tasks.find(function (t) { return t.tsk_id === q.model.tsk_id; });
                task.not_sync = true;
            });
        }
    };
    TasksComponent.prototype.createGroupedClosedTasks = function (tasks) {
        var _this = this;
        var res = [];
        var lastHeader = this.services.dateUtils.newDateUpToSeconds();
        tasks.forEach(function (t) {
            if (_this.services.tasksCore.dateOnly(new Date(t.tsk_date_done)).getTime() !== lastHeader.getTime()) {
                lastHeader = _this.services.tasksCore.dateOnly(new Date(t.tsk_date_done));
                res.push({
                    'header': lastHeader,
                    'totalTimeSpent': 0,
                    'tasks': []
                });
            }
            res[res.length - 1].tasks.push(t);
            res[res.length - 1].totalTimeSpent += t.tsk_total_time_spent;
        });
        // order groups by date desc
        res = res.sort(function (a, b) {
            return a.header > b.header ? -1 : 1;
        });
        console.log('closed tasks', res);
        return res;
    };
    TasksComponent.prototype.dayHasActivity = function (day) {
        var nextDay = this.services.dateUtils.addDays(day, 1);
        if (day.getTime() === this.services.dateUtils.dateOnly(new Date()).getTime()) {
            return true;
        }
        else {
            return this.tasks.filter(function (t) { return new Date(t.tsk_date_done).getTime() >= day.getTime() && new Date(t.tsk_date_done).getTime() <= nextDay.getTime(); }).length > 0;
        }
    };
    TasksComponent.prototype.calculateIndicators = function () {
        var _this = this;
        var today = this.services.dateUtils.newDateUpToSeconds();
        var today0 = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        var days = [];
        var dayLabels = [];
        var nextDay;
        for (var i = 0; i < 7; i++) {
            nextDay = this.services.dateUtils.addDays(today0, -1 * i);
            if (this.dayHasActivity(nextDay)) {
                days.push(nextDay);
                dayLabels.push(i === 0 ? 'Today' : (i === 1 ? 'Yesterday' : i + ' days ago'));
            }
        }
        days.reverse();
        dayLabels.reverse();
        var values = [];
        var yesterdayValue = 0, todayValue = 0;
        this.state.indicators = [];
        this.state.indicatorLabels = dayLabels;
        this.services.taskIndicator.tasks = this.tasks;
        var addIndicator = function (name, values, formatMethod, completedCriteria) {
            var formattedValues = [];
            if (formatMethod) {
                formattedValues = values.map(function (v) { return formatMethod(v); });
            }
            else {
                formattedValues = values.map(function (v) { return v + ''; });
            }
            var completed = {
                isCompleted: values[values.length - 2] <= values[values.length - 1],
                percentageCompleted: values[values.length - 2] !== 0 ? Math.round(values[values.length - 1] / values[values.length - 2] * 100) / 100 : 0
            };
            if (completedCriteria) {
                completed = completedCriteria(values[values.length - 2], values[values.length - 1]);
            }
            _this.state.indicators.push({
                name: name,
                values: formattedValues,
                isCompleted: completed.isCompleted,
                percentageCompleted: completed.percentageCompleted
            });
        };
        var calculateForAllDays = function (days, method) {
            var calculatedValues = [];
            var context = _this.services.taskIndicator;
            days.forEach(function (d, index, array) {
                calculatedValues.push(method.call(context, d, _this.services.dateUtils.addDays(d, 1)));
            });
            return calculatedValues;
        };
        // added ETA
        addIndicator('Added ETA', calculateForAllDays(days, this.services.taskIndicator.addedETA), function (v) { return _this.formatTime(v * 60); }, function (prev, curr) { return ({ isCompleted: prev >= curr, percentageCompleted: prev !== 0 ? Math.round(curr * 100 / prev) / 100 : 0 }); });
        // added count
        addIndicator('Added Count', calculateForAllDays(days, this.services.taskIndicator.addedTaskCount), null, function (prev, curr) { return ({ isCompleted: prev >= curr, percentageCompleted: prev !== 0 ? Math.round(curr * 100 / prev) / 100 : 0 }); });
        // closed ETA
        addIndicator('Closed ETA', calculateForAllDays(days, this.services.taskIndicator.closedETA), function (v) { return _this.formatTime(v * 60); });
        // spent
        addIndicator('Closed Spent', calculateForAllDays(days, function (d1, d2) { return _this.services.taskIndicator.calculateTotalTimeSpent(d1, d2).totalTimeSpentTodayOnClosedTasks; }), function (v) { return _this.formatTime(v); });
        // closed count
        addIndicator('Closed Count', calculateForAllDays(days, this.services.taskIndicator.closedTaskCount));
        // productivity ratio
        addIndicator('Productivity Ratio', calculateForAllDays(days, this.services.taskIndicator.calculateProductivityRatio));
        // time management ratio
        addIndicator('Time Management Ratio', calculateForAllDays(days, this.services.taskIndicator.calculateTimeManagementRatio));
        // total task count overall
        addIndicator('Overall Task Count EOD', calculateForAllDays(days, this.services.taskIndicator.totalTaskCountUntil), null, function (prev, curr) { return ({ isCompleted: prev >= curr, percentageCompleted: prev !== 0 ? Math.round(curr * 100 / prev) / 100 : 0 }); });
        // karma
    };
    TasksComponent.prototype.asNextToDo = function (t, add) {
        var p = this.nextTasks[0].tasks;
        var index = p.findIndex(function (e) { return e.tsk_id === t.tsk_id; });
        if (add) {
            if (index === -1) {
                p.push(t);
                this.nextTasks[0].estimatedDuration += t.tsk_estimated_duration;
            }
        }
        else {
            if (index !== -1) {
                p.splice(index, 1);
                this.nextTasks[0].estimatedDuration -= t.tsk_estimated_duration;
            }
        }
        localStorage.setItem("NextTasks", JSON.stringify(p.map(function (e) { return e.tsk_id; })));
    };
    TasksComponent.prototype.setTaskNotes = function (task, event) {
        var newNotes = event.target['textContent'];
        if (task.tsk_notes !== newNotes) {
            this.updateTask(task.tsk_id, {
                tsk_notes: newNotes
            });
        }
    };
    TasksComponent.prototype.setFocus = function (task, event) {
        console.log('task on focus by user', task, event.target);
        this.focusedTask = {
            task: task,
            element: event.target['parentNode']
        };
    };
    TasksComponent.prototype.sendFEToBE = function (taskDiff) {
        var _this = this;
        var upd = {};
        taskDiff.forEach(function (td) {
            upd[td.name] = td.client;
        });
        this.updateTask(taskDiff[0].id, upd);
        this.services.tasksCore.computeComparisonData().then(function (data) { return _this.comparisonData = data; });
    };
    TasksComponent.prototype.subscribe = function (event, callback) {
        this.events.push({ event: event, callback: callback });
    };
    TasksComponent.prototype.triggerEvent = function (event, params) {
        var handlers = this.events.filter(function (e) { return e.event === event; }).map(function (e) { return e.callback; });
        handlers.forEach(function (handler) {
            handler(params);
        });
    };
    TasksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tasks',
            template: __webpack_require__(/*! ./tasks.template.html */ "./src/app/task/tasks.template.html"),
            providers: [_tasks_core__WEBPACK_IMPORTED_MODULE_3__["TasksCore"], _common_sync_api__WEBPACK_IMPORTED_MODULE_4__["SyncAPI"], _task_indicator_service__WEBPACK_IMPORTED_MODULE_5__["TaskIndicator"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tasks_core__WEBPACK_IMPORTED_MODULE_3__["TasksCore"],
            _common_sync_api__WEBPACK_IMPORTED_MODULE_4__["SyncAPI"],
            _task_indicator_service__WEBPACK_IMPORTED_MODULE_5__["TaskIndicator"],
            _common_date_common__WEBPACK_IMPORTED_MODULE_6__["DateCommon"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], TasksComponent);
    return TasksComponent;
}());



/***/ }),

/***/ "./src/app/task/tasks.core.ts":
/*!************************************!*\
  !*** ./src/app/task/tasks.core.ts ***!
  \************************************/
/*! exports provided: TasksCore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksCore", function() { return TasksCore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _crosscommon_entities_Task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../crosscommon/entities/Task */ "./src/crosscommon/entities/Task.ts");
/* harmony import */ var _common_sync_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/sync.api */ "./src/app/common/sync.api.ts");
/* harmony import */ var _common_date_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/date.common */ "./src/app/common/date.common.ts");
/* harmony import */ var _crosscommon_Utility__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../crosscommon/Utility */ "./src/crosscommon/Utility.ts");







var TasksCore = /** @class */ (function () {
    function TasksCore(http, sync, dateUtils) {
        this.http = http;
        this.sync = sync;
        this.dateUtils = dateUtils;
        this.pendingRequests = [];
        this.data = {
            taskList: [],
            user: 'anon'
        };
        this.services = {};
        this.serverData = {};
        this.comparisonData = {};
        this.apiRoot = 'http://10.230.9.78:8081';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        var tasks = this.tasksFromStorage();
        this.data.taskList = tasks;
        this.services.dateUtils = dateUtils;
        //this.getTasks();
        this.http = http;
        this.sync = sync;
    }
    TasksCore.prototype.getAll = function () {
        var _this = this;
        var filter = {
            gc: 'OR',
            cont: [{
                    f: 'tsk_ctg_status',
                    op: 'lt',
                    val: 3
                }, {
                    f: 'tsk_date_add',
                    op: 'ge',
                    val: '2018-10-01'
                }]
        };
        var query = "?q=" + JSON.stringify(filter);
        return this.sync.get("/api/tasks" + query).then(function (data) {
            _this.data.taskList = data.tasks.map(function (d) {
                var item = new _crosscommon_entities_Task__WEBPACK_IMPORTED_MODULE_3__["Task"](d);
                item['tsk_time_history'] = data.timetracking.filter(function (tt) {
                    return tt.tsh_id === item.tsk_id;
                }) || [];
                if (item['tsk_time_history'].length) {
                    item['tsk_time_history'].sort(function (a, b) {
                        return a.tsh_num_secuential < b.tsh_num_secuential ? 1 : -1;
                    });
                }
                return item;
            });
            return _this.data.taskList;
        });
    };
    TasksCore.prototype.getAllForUser = function (user) {
        return this.getAll().then(function (list) {
            return list.filter(function (x) { return x.tsk_id_user_asigned === user; });
        });
    };
    /** BEGIN API methods */
    /**
     * Creation and addition of a new task to the collection.
     * @param {object} task A basic task model, for simplicity to be extended and added to the task collection.
     * @return {object} The task added to the collection (as a complete task model).
     */
    TasksCore.prototype.addTask = function (task, options) {
        var T = this.data.taskList;
        var parsedTask = this.parseTask(task, options);
        T.push(this.newTaskTemplate(parsedTask));
        // console.log(T[T.length-1]);
        this.postTask(T[T.length - 1]);
        //this.tasksToStorage();
        return T[T.length - 1];
    };
    TasksCore.prototype.batchAddTasks = function (tasks, options) {
        var _this = this;
        var T = this.data.taskList;
        var parsedTask;
        var list = [];
        var task;
        tasks.forEach(function (text) {
            if (!text.startsWith('//') && text !== '') {
                //t = this.addTask({
                //    'tsk_date_add': this.services.dateUtils.newDateUpToSeconds(),
                //    'tsk_name': text
                //}, options);
                parsedTask = _this.parseTask({
                    'tsk_date_add': _this.services.dateUtils.newDateUpToSeconds(),
                    'tsk_name': text
                }, options);
                task = _this.newTaskTemplate(parsedTask);
                T.push(task);
                list.push(task);
                task['not_sync'] = true;
                //this.postTask(T[T.length-1]);
                //return T[T.length-1];
                //console.log("added task:",t);
            }
        });
        this.tasksToStorage();
        this.postBatch(list);
    };
    TasksCore.prototype.postBatch = function (list) {
        this.sync.post('/api/tasks/batch', list).then(function (response) {
            list.forEach(function (item) {
                item['not_sync'] = false;
            });
        });
    };
    TasksCore.prototype.parseTask = function (task, options) {
        var _this = this;
        // detect group list for the task (at start of text)
        if (task.tsk_name.startsWith('[')) {
            task.tsk_id_record = task.tsk_name.substr(task.tsk_name.indexOf('[') + 1, task.tsk_name.indexOf(']') - 1);
            task.tsk_name = task.tsk_name.replace("[" + task.tsk_id_record + "] ", '').replace("[" + task.tsk_id_record + "]", '');
        }
        // Parse special tokens
        // [DATE]
        var tokens = [{
                'tokenStr': '[DATE]',
                'replaceMethod': function () { return _this.dateWithFormat(_this.services.dateUtils.dateOnly()).substring(0, 10); }
            }, {
                'tokenStr': '[DATETIME]',
                'replaceMethod': function () { return _this.dateWithFormat(_this.services.dateUtils.dateOnly()); }
            }];
        tokens.forEach(function (token) {
            task.tsk_name = _this.replaceAll(task.tsk_name, token.tokenStr, token.replaceMethod());
        });
        // detect Start Date and End Date
        if (task.tsk_name.indexOf('%[') !== -1) {
            var endPosition = task.tsk_name.indexOf(']', task.tsk_name.indexOf('%[')) === -1 ? task.tsk_name.length : task.tsk_name.indexOf(']', task.tsk_name.indexOf('%['));
            var expression = task.tsk_name.substring(task.tsk_name.indexOf('%[') + 2, endPosition);
            var parts = '';
            var parsed = false;
            task.tsk_name = task.tsk_name.replace('%[' + expression + '] ', '');
            task.tsk_name = task.tsk_name.replace(' %[' + expression + ']', '');
            task.tsk_name = task.tsk_name.replace('%[' + expression + ']', '');
            var patternTime = /\d{2}/i;
            var patternDateTime = /\d{4}-\d{2}-\d{2} \d{2}:\d{2}/i;
            var patternDateTimeEnd = /\d{4}-\d{2}-\d{2} \d{2}:\d{2} - \d{2}:\d{2}/i;
            var patternDateTimeDuration = /\d{4}-\d{2}-\d{2} \d{2}:\d{2} \+ /i;
            var patternTimeEnd = /\d{2}:\d{2} - \d{2}:\d{2}/i;
            var patternTimeDuration = /\d{2}:\d{2} \+ /i;
            // start date and time and duration -> yyyy-MM-dd HH:mm + ##h##m
            if (patternDateTimeDuration.test(expression)) {
                parts = expression.split(' + ');
                task.tsk_schedule_date_start = new Date(parts[0]);
                task.tsk_estimated_duration = this.parseTime(parts[1]);
                task.tsk_schedule_date_end = new Date(task.tsk_schedule_date_start.getTime() + task.tsk_estimated_duration * 60 * 1000);
                parsed = true;
            }
            // start time and duration -> HH:mm + ##h##m
            if (patternTimeDuration.test(expression) && !parsed) {
                parts = expression.split(' + ');
                var min = parseInt(parts[0].split(':')[0]) * 60 + parseInt(parts[0].split(':')[1]);
                task.tsk_schedule_date_start = new Date(this.dateOnly(this.services.dateUtils.newDateUpToSeconds()).getTime() + (min * 60 * 1000));
                task.tsk_estimated_duration = this.parseTime(parts[1]);
                task.tsk_schedule_date_end = new Date(task.tsk_schedule_date_start.getTime() + task.tsk_estimated_duration * 60 * 1000);
                parsed = true;
            }
            // start date and time and end time -> yyyy-MM-dd HH:mm - HH:mm
            if (patternDateTimeEnd.test(expression) && !parsed) {
                parts = expression.split(' - ');
                var dateOnly = parts[0].split(' ')[0];
                task.tsk_schedule_date_start = new Date(parts[0]);
                task.tsk_schedule_date_end = new Date(dateOnly + ' ' + parts[1]);
                task.tsk_estimated_duration = this.elapsedTime(task.tsk_schedule_date_start, task.tsk_schedule_date_end) / 60;
                parsed = true;
            }
            // start time and end time -> HH:mm - HH:mm
            if (patternTimeEnd.test(expression) && !parsed) {
                parts = expression.split(' - ');
                var min1 = parseInt(parts[0].split(':')[0]) * 60 + parseInt(parts[0].split(':')[1]);
                var min2 = parseInt(parts[1].split(':')[0]) * 60 + parseInt(parts[1].split(':')[1]);
                task.tsk_schedule_date_start = new Date(this.dateOnly(this.services.dateUtils.newDateUpToSeconds()).getTime() + (min1 * 60 * 1000));
                task.tsk_schedule_date_end = new Date(this.dateOnly(this.services.dateUtils.newDateUpToSeconds()).getTime() + (min2 * 60 * 1000));
                task.tsk_estimated_duration = this.elapsedTime(task.tsk_schedule_date_start, task.tsk_schedule_date_end) / 60;
                parsed = true;
            }
            // start date and time -> yyyy-MM-dd HH:mm
            if (patternDateTime.test(expression) && !parsed) {
                var dateParts = expression.substring(0, 10).split('-');
                task.tsk_schedule_date_start = new Date(expression);
                parsed = true;
            }
            // time only -> HH:mm
            if (patternTime.test(expression) && !parsed) {
                var min = parseInt(expression.split(':')[0]) * 60 + parseInt(expression.split(':')[1]);
                task.tsk_schedule_date_start = new Date(this.dateOnly(this.services.dateUtils.newDateUpToSeconds()).getTime() + (min * 60 * 1000));
                parsed = true;
            }
        }
        // detect estimated duration
        if (task.tsk_name.indexOf('%') !== -1 && task.tsk_name.indexOf('%%') === -1) {
            var endPosition = task.tsk_name.indexOf(' ', task.tsk_name.indexOf('%')) === -1 ? task.tsk_name.length : task.tsk_name.indexOf(' ', task.tsk_name.indexOf('%'));
            var duration = task.tsk_name.substring(task.tsk_name.indexOf('%') + 1, endPosition);
            task.tsk_name = task.tsk_name.replace('%' + duration + ' ', '');
            task.tsk_name = task.tsk_name.replace(' %' + duration, '');
            task.tsk_name = task.tsk_name.replace('%' + duration, '');
            duration = this.parseTime(duration);
            task.tsk_estimated_duration = parseInt(duration);
        }
        // detect [OPEN] token, creates task as an OPEN task
        var tokenBacklog = '[BACKLOG]';
        if (task.tsk_name.indexOf(tokenBacklog) !== -1) {
            task.tsk_name = task.tsk_name.replace(tokenBacklog + " ", '');
            task.tsk_name = task.tsk_name.replace(" " + tokenBacklog, '');
            task.tsk_name = task.tsk_name.replace("" + tokenBacklog, '');
            task.tsk_ctg_status = 1; // BACKLOG
        }
        else {
            if (options.optNewTaskStatusIsBacklog) {
                task.tsk_ctg_status = 1; // BACKLOG
            }
            else {
                task.tsk_ctg_status = 2; // OPEN
            }
        }
        // detects $[] qualifiers
        if (task.tsk_name.indexOf('$[') !== -1) {
            var endPosition = task.tsk_name.indexOf(']', task.tsk_name.indexOf('$[')) === -1 ? task.tsk_name.length : task.tsk_name.indexOf(']', task.tsk_name.indexOf('$['));
            var expression = task.tsk_name.substring(task.tsk_name.indexOf('$[') + 2, endPosition);
            task.tsk_name = task.tsk_name.replace('$[' + expression + '] ', '');
            task.tsk_name = task.tsk_name.replace(' $[' + expression + ']', '');
            task.tsk_name = task.tsk_name.replace('$[' + expression + ']', '');
            task.tsk_qualifiers = expression;
        }
        // detects #[] hashtags (multiple)
        if (task.tsk_name.indexOf('#[') !== -1) {
            var endPosition = task.tsk_name.indexOf(']', task.tsk_name.indexOf('#[')) === -1 ? task.tsk_name.length : task.tsk_name.indexOf(']', task.tsk_name.indexOf('#['));
            var expression = task.tsk_name.substring(task.tsk_name.indexOf('#[') + 2, endPosition);
            task.tsk_name = this.replaceTokenInText(task.tsk_name, '#[' + expression + ']');
            task.tsk_tags = expression;
        }
        // detects # hashtags (individual)
        while (task.tsk_name.indexOf('#') !== -1) {
            var endPosition = task.tsk_name.indexOf(' ', task.tsk_name.indexOf('#')) === -1 ? task.tsk_name.length : task.tsk_name.indexOf(' ', task.tsk_name.indexOf('#'));
            var expression = task.tsk_name.substring(task.tsk_name.indexOf('#') + 1, endPosition);
            task.tsk_name = this.replaceTokenInText(task.tsk_name, '#' + expression);
            task.tsk_tags = task.tsk_tags ? task.tsk_tags + ' ' + expression : expression;
        }
        // detects URLs
        this.doThisWithAToken(task, function (t, expression) {
            t.tsk_url = 'http://' + expression;
            console.log('task with url', t);
        }, 'http://');
        this.doThisWithAToken(task, function (t, expression) {
            t.tsk_url = 'https://' + expression;
            console.log('task with url', t);
        }, 'https://');
        // detects repetition options
        this.doThisWithAToken(task, function (t, expression) {
            var repetitionBasis = ''; // daily|weekly|monthly
            var completionCriteria = 'onCompletion';
            var terminationCriteria = 'iterations';
            var terminationValue = '10';
            var frequency = 0;
            var frequencyRule = '';
            var patternDate = /\d{4}-\d{2}-\d{2}/i;
            var repetitionTypeValues = ['', 'daily', 'weekly', 'monthly', 'workdays', 'weekends', 'each', 'weekdays', 'onDay'];
            var completionValues = ['', 'strict', 'onCompletion'];
            var repetitionEndValues = ['', 'forever', 'date', 'iterations'];
            var frequencyRuleValues = ['', 'd', 'w', 'm'];
            var weekdaysValues = ['', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
            if (expression) {
                if (expression.indexOf('|') !== -1) {
                    var basis = expression.split('|');
                    if (basis[0].indexOf('-') !== -1) {
                        repetitionBasis = basis[0].split('-')[0].trim();
                        completionCriteria = basis[0].split('-')[1].trim();
                    }
                    else {
                        completionCriteria = '';
                        repetitionBasis = basis[0].trim();
                    }
                    terminationCriteria = basis[1].split(':')[0].trim();
                    terminationValue = basis[1].split(':')[1].trim();
                }
                else {
                    if (expression.indexOf('-') !== -1) {
                        repetitionBasis = expression.split('-')[0].trim();
                        completionCriteria = expression.split('-')[1].trim();
                    }
                    else {
                        completionCriteria = '';
                        repetitionBasis = expression.trim();
                    }
                    terminationCriteria = '';
                    terminationValue = '';
                }
                if (repetitionBasis.indexOf(':') !== -1) {
                    if (/[A-Z]+/.test(repetitionBasis.split(':')[1].trim())) {
                        // weekdays only
                        frequencyRule = repetitionBasis.split(':')[1].trim();
                    }
                    if (/\d+[a-zA-Z]+/.test(repetitionBasis.split(':')[1].trim())) {
                        // number and literal
                        frequency = parseInt(repetitionBasis.split(':')[1].trim()); // parse ignoring literal chars
                        if (repetitionBasis.split(':')[0].trim() === 'each') {
                            frequencyRule = repetitionBasis.split(':')[1].trim().substr(-1); // last char is literal
                        }
                        if (repetitionBasis.split(':')[0].trim() === 'onDay') {
                            frequencyRule = repetitionBasis.split(':')[1].trim().substr(-2); // last chars is weekday
                        }
                    }
                    repetitionBasis = repetitionBasis.split(':')[0].trim();
                }
                t.tsk_ctg_rep_type = repetitionTypeValues.indexOf(repetitionBasis);
                t.tsk_ctg_repeats = t.tsk_ctg_rep_type > 0 ? 2 : 1;
                t.tsk_ctg_rep_after_completion = completionValues.indexOf(completionCriteria);
                t.tsk_ctg_rep_end = repetitionEndValues.indexOf(terminationCriteria);
                if (terminationValue && patternDate.test(terminationValue)) {
                    t.tsk_rep_date_end = new Date(parseInt(terminationValue.split('-')[0]), parseInt(terminationValue.split('-')[1]) - 1, parseInt(terminationValue.split('-')[2]));
                }
                if (terminationValue && /\d+/.test(terminationValue) && !patternDate.test(terminationValue)) {
                    t.tsk_rep_end_iteration = parseInt(terminationValue);
                }
                t.tsk_rep_iteration = 1;
                t.tsk_rep_frequency = frequency;
                if (repetitionBasis === 'each') {
                    t.tsk_ctg_rep_frequency_rule = frequencyRuleValues.indexOf(frequencyRule);
                }
                if (repetitionBasis === 'onDay') {
                    t.tsk_ctg_rep_frequency_rule = weekdaysValues.indexOf(frequencyRule);
                }
                if (repetitionBasis === 'weekdays') {
                    t.tsk_rep_weekdays = frequencyRule;
                }
            }
            console.log('task with repetition', t);
        }, '*[', ']');
        return task;
    };
    /**
     * Extends a basic task model so it has all of the properties of a complete task model.
     * @param {object} a Basic task model to be extended, it has some properties used in the complete task model.
     * @return {object} A complete task model extended with the data of the basic task model.
     */
    TasksCore.prototype.newTaskTemplate = function (task) {
        var id = this.generateId();
        return {
            'tsk_id': id,
            'tsk_id_container': 'tasks',
            'tsk_id_record': task.tsk_id_record || 'general',
            'tsk_name': task.tsk_name,
            'tsk_notes': task.tsk_notes || '',
            'tsk_parent': task.tsk_parent || '0',
            'tsk_order': this.nextOrder(),
            'tsk_date_done': task.tsk_date_done || null,
            'tsk_total_time_spent': 0,
            'tsk_time_history': task.tsk_time_history || [],
            'tsk_ctg_in_process': task.tsk_ctg_in_process || 1,
            'tsk_qualifiers': task.tsk_qualifiers || '',
            'tsk_tags': task.tsk_tags || '',
            'tsk_estimated_duration': task.tsk_estimated_duration || 0,
            'tsk_schedule_date_start': task.tsk_schedule_date_start || null,
            'tsk_schedule_date_end': task.tsk_schedule_date_end || null,
            'tsk_schedule_history': [],
            'tsk_date_view_until': task.tsk_date_view_until || null,
            'tsk_notifications': [],
            'tsk_id_user_added': task.tsk_id_user_added || this.data.user,
            'tsk_id_user_asigned': task.tsk_id_user_asigned || this.data.user,
            'tsk_template': task.tsk_template || '',
            'tsk_template_state': task.tsk_template_state || '',
            'tsk_date_due': task.tsk_date_due || null,
            'tsk_id_related': task.tsk_id_related || '0',
            'tsk_url': task.tsk_url || '',
            'tsk_ctg_repeats': task.tsk_ctg_repeats || 0,
            'tsk_id_main': task.tsk_id_main || id,
            'tsk_ctg_rep_type': task.tsk_ctg_rep_type || 0,
            'tsk_ctg_rep_after_completion': task.tsk_ctg_rep_after_completion || 0,
            'tsk_ctg_rep_end': task.tsk_ctg_rep_end || 0,
            'tsk_rep_date_end': task.tsk_rep_date_end || null,
            'tsk_rep_end_iteration': task.tsk_rep_end_iteration || 0,
            'tsk_rep_iteration': task.tsk_rep_iteration || 0,
            'tsk_rep_frequency': task.tsk_rep_frequency || 0,
            'tsk_ctg_rep_frequency_rule': task.tsk_ctg_rep_frequency_rule || 0,
            'tsk_rep_weekdays': task.tsk_rep_weekdays || '',
            'tsk_date_add': task.tsk_date_add || this.services.dateUtils.newDateUpToSeconds(),
            'tsk_date_mod': this.services.dateUtils.newDateUpToSeconds(),
            'tsk_ctg_status': task.tsk_ctg_status
        };
    };
    TasksCore.prototype.nextOrder = function () {
        if (this.data.taskList.length) {
            // find max existent order
            var order_1 = 0;
            this.data.taskList.forEach(function (t) {
                if (order_1 < parseInt(t.tsk_order)) {
                    order_1 = parseInt(t.tsk_order);
                }
            });
            return order_1 + 1;
        }
        return 1;
    };
    TasksCore.prototype.tasks = function () {
        return this.data.taskList;
    };
    TasksCore.prototype.tasksGroups = function () {
    };
    TasksCore.prototype.pad = function (value, fillChar, length, dir) {
        if (dir === void 0) { dir = -1; }
        var result = value + '';
        while (result.length < length) {
            if (dir === -1) {
                result = fillChar + result;
            }
            else {
                result = result + fillChar;
            }
        }
        return result;
    };
    TasksCore.prototype.generateId = function () {
        // take date + time + random 10 digits
        // total digits 10 + 6 + 10 = 26
        var date = this.services.dateUtils.newDateUpToSeconds();
        var random = Math.floor(Math.random() * 1e14);
        var datetimeString = "" + date.getFullYear() + this.pad(date.getMonth() + 1, '0', 2) + this.pad(date.getDate(), '0', 2);
        datetimeString += "" + this.pad(date.getHours(), '0', 2) + this.pad(date.getMinutes(), '0', 2) + this.pad(date.getSeconds(), '0', 2);
        var id = "T" + datetimeString + "-" + random;
        return id;
    };
    /** BEGIN Storage */
    TasksCore.prototype.tasksFromStorage = function () {
        if (typeof (window.localStorage) !== "undefined") {
            var tasks = JSON.parse(localStorage.getItem("Tasks"));
            //console.log('from storage recent',tasks.length);
            // tasks = tasks.concat(JSON.parse(localStorage.getItem("Tasks.old")));
            //console.log('from storage all',tasks.length);
            if (tasks) {
                // parse dates
                // tasks.forEach((t: any) => {
                //     t.tsk_date_done = this.stringDateToDate(t.tsk_date_done);
                //     t.tsk_schedule_date_start = this.stringDateToDate(t.tsk_schedule_date_start);
                //     t.tsk_schedule_date_end = this.stringDateToDate(t.tsk_schedule_date_end);
                //     t.tsk_date_view_until = this.stringDateToDate(t.tsk_date_view_until);
                //     t.tsk_date_add = this.stringDateToDate(t.tsk_date_add);
                //     t.tsk_date_mod = this.stringDateToDate(t.tsk_date_mod);
                //     t.tsk_time_history.forEach((h: any) => {
                //         h.tsh_date_start = this.stringDateToDate(h.tsh_date_start);
                //         h.tsh_date_end = this.stringDateToDate(h.tsh_date_end);
                //         h.tsh_date_add = this.stringDateToDate(h.tsh_date_add);
                //         h.tsh_date_mod = this.stringDateToDate(h.tsh_date_mod);
                //     });
                // });
                return tasks;
            }
        }
        return [];
    };
    TasksCore.prototype.tasksToStorage = function () {
        // do this once
        // change timestamps in dates to not have milliseconds
        // let tasks = this.data.taskList;
        // let convertDateToDateUpToSeconds: Function = (d: any): Date => {
        //     if (d){
        //         return new Date(Math.floor((new Date(d)).getTime() / 1000) * 1000);
        //     }
        //     return null;
        // };
        // let total: number = 0;
        // tasks.forEach((t: any) => {
        //     // t.tsk_date_done = convertDateToDateUpToSeconds(t.tsk_date_done);
        //     // t.tsk_schedule_date_start = convertDateToDateUpToSeconds(t.tsk_schedule_date_start);
        //     // t.tsk_schedule_date_end = convertDateToDateUpToSeconds(t.tsk_schedule_date_end);
        //     // t.tsk_date_view_until = convertDateToDateUpToSeconds(t.tsk_date_view_until);
        //     // t.tsk_date_add = convertDateToDateUpToSeconds(t.tsk_date_add);
        //     // t.tsk_date_mod = convertDateToDateUpToSeconds(t.tsk_date_mod);
        //     total = 0;
        //     t.tsk_time_history.forEach((h: any) => {
        //         h.tsh_date_start = convertDateToDateUpToSeconds(h.tsh_date_start);
        //         h.tsh_date_end = convertDateToDateUpToSeconds(h.tsh_date_end);
        //         // h.tsh_date_add = convertDateToDateUpToSeconds(h.tsh_date_add);
        //         // h.tsh_date_mod = convertDateToDateUpToSeconds(h.tsh_date_mod);
        //         if (h.tsh_date_end){
        //             h.tsh_time_spent = this.elapsedTime(h.tsh_date_start,h.tsh_date_end);
        //             total += h.tsh_time_spent;
        //         } else {
        //             h.tsh_time_spent = 0;
        //         }
        //     });
        //     t.tsk_total_time_spent = total;
        // });
        if (typeof (window.localStorage) !== "undefined") {
            // let date = new Date();
            // date = new Date(2017,9,1);
            // let old = this.data.taskList.filter((t: any) => new Date(t.tsk_date_add) < date && t.tsk_ctg_status === 3);
            // let recent = this.data.taskList.filter((t: any) => new Date(t.tsk_date_add) >= date || t.tsk_ctg_status !== 3);
            //console.log('old storage',old.length);
            //console.log('recent storage',recent.length);
            //    localStorage.setItem("Tasks", JSON.stringify(this.data.taskList));
            // localStorage.setItem("Tasks", JSON.stringify(recent));
            //localStorage.setItem("Tasks.old", JSON.stringify(old));
        }
    };
    /** END Storage */
    TasksCore.prototype.stringDateToDate = function (date) {
        if (/\d{4}-\d{2}-\d{2}/.test(date)) { // looks like a date
            return new Date(date);
        }
        return undefined;
    };
    TasksCore.prototype.updateTask = function (task, newData) {
        Object.keys(newData).forEach(function (k) {
            task[k] = newData[k];
        });
        task.tsk_date_mod = this.services.dateUtils.newDateUpToSeconds();
        var index = this.tasks().findIndex(function (e) { return e.tsk_id === task.tsk_id; });
        this.data.taskList[index] = task;
        this.updateTaskBE(task);
        this.tasksToStorage();
    };
    TasksCore.prototype.addTimeTracking = function (task) {
        task.tsk_time_history.push({
            'tsh_id': task.tsk_id,
            'tsh_num_secuential': (task.tsk_time_history.length + 1),
            'tsh_name': task.tsk_name,
            'tsh_date_start': this.services.dateUtils.newDateUpToSeconds(),
            'tsh_date_end': null,
            'tsh_time_spent': 0,
            'tsh_id_user': 'anon',
            'tsh_date_add': this.services.dateUtils.newDateUpToSeconds(),
            'tsh_date_mod': this.services.dateUtils.newDateUpToSeconds()
        });
        this.tasksToStorage();
    };
    TasksCore.prototype.stopTimeTracking = function (task) {
        var h = task.tsk_time_history[task.tsk_time_history.length - 1];
        h.tsh_name = task.tsk_name;
        h.tsh_date_end = this.services.dateUtils.newDateUpToSeconds();
        h.tsh_time_spent = this.elapsedTime(h.tsh_date_start, h.tsh_date_end);
        h.tsh_date_mod = this.services.dateUtils.newDateUpToSeconds();
        this.recalculateTotalTimeSpent(task);
        this.tasksToStorage();
    };
    TasksCore.prototype.recalculateTotalTimeSpent = function (task) {
        // sum in task
        var sum = 0;
        task.tsk_time_history.forEach(function (t) {
            sum += t.tsh_time_spent;
        });
        task.tsk_total_time_spent = sum;
        return task;
    };
    TasksCore.prototype.elapsedTime = function (date1, date2) {
        if (date1 && date2) {
            return Math.floor(Math.abs(date1.getTime() - date2.getTime()) / 1000);
        }
        return 0;
    };
    TasksCore.prototype.elapsedDays = function (date1, date2) {
        return Math.floor(this.elapsedTime(this.dateOnly(date1), this.dateOnly(date2)) / (60 * 60 * 24));
    };
    TasksCore.prototype.updateTaskTimeTracking = function (taskTimeTracking, newData) {
        Object.keys(newData).forEach(function (k) {
            taskTimeTracking[k] = newData[k];
        });
        if (taskTimeTracking.tsh_date_end !== null) {
            taskTimeTracking.tsh_time_spent = this.elapsedTime(new Date(taskTimeTracking.tsh_date_start), new Date(taskTimeTracking.tsh_date_end));
        }
        else {
            taskTimeTracking.tsh_time_spent = 0;
        }
        taskTimeTracking.tsh_date_mod = this.services.dateUtils.newDateUpToSeconds();
        var task = this.recalculateTotalTimeSpent(this.data.taskList.find(function (t) { return t.tsk_id === taskTimeTracking.tsh_id; }));
        var index = this.data.taskList.findIndex(function (t) { return t.tsk_id === taskTimeTracking.tsh_id; });
        this.data.taskList[index] = task;
        var historyIndex = task.tsk_time_history.findIndex(function (h) { return h.tsh_id === taskTimeTracking.tsh_id && h.tsh_num_secuential === taskTimeTracking.tsh_num_secuential; });
        task.tsk_time_history[historyIndex] = taskTimeTracking;
        this.tasksToStorage();
        this.updateTaskBE(task);
    };
    TasksCore.prototype.deleteTasks = function () {
        this.data.taskList = [];
        this.tasksToStorage();
    };
    TasksCore.prototype.dateOnly = function (base) {
        return new Date(base.getFullYear(), base.getMonth(), base.getDate(), 0, 0, 0);
    };
    TasksCore.prototype.dateWithFormat = function (date) {
        var str = date.getFullYear() + "-" + (date.getMonth() + 1 > 9 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1)) + "-" + (date.getDate() > 9 ? date.getDate() : "0" + date.getDate());
        str += " " + (date.getHours() > 9 ? date.getHours() : "0" + date.getHours()) + ":" + (date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes()) + ":" + (date.getSeconds() > 9 ? date.getSeconds() : "0" + date.getSeconds());
        return str;
    };
    TasksCore.prototype.replaceAll = function (str, find, replace) {
        return str.replace(new RegExp(this.escapeRegExp(find), "g"), replace);
    };
    TasksCore.prototype.escapeRegExp = function (str) {
        return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    };
    TasksCore.prototype.parseTime = function (duration) {
        var hours = 0, min = 0;
        if (duration.indexOf('h') !== -1) {
            hours = parseInt(duration.substring(0, duration.indexOf('h')));
            duration = duration.replace(hours + 'h', '');
        }
        if (duration.indexOf(':') !== -1) {
            hours = parseInt(duration.substring(0, duration.indexOf(':')));
            duration = duration.replace(hours + ':', '');
        }
        if (duration.indexOf('m') !== -1) {
            min = parseInt(duration.substring(0, duration.indexOf('m')));
            duration = duration.replace(min + 'm', '');
        }
        else {
            if (duration !== '') {
                min = parseInt(duration);
                duration = duration.replace(min + '', '');
            }
        }
        if (duration === '') {
            return hours * 60 + min;
        }
        return parseInt(duration);
    };
    TasksCore.prototype.parseDatetime = function (expression) {
        var parts = [];
        var parsed = false;
        var s = {
            date_start: null,
            date_end: null,
            duration: 0,
            pattern: ''
        };
        var patternTime = /\d{2}/i;
        var patternDateTime = /\d{4}-\d{2}-\d{2} \d{2}:\d{2}/i;
        var patternDateTimeEnd = /\d{4}-\d{2}-\d{2} \d{2}:\d{2} - \d{2}:\d{2}/i;
        var patternDateTimeDuration = /\d{4}-\d{2}-\d{2} \d{2}:\d{2} \+ /i;
        var patternTimeEnd = /\d{2}:\d{2} - \d{2}:\d{2}/i;
        var patternTimeDuration = /\d{2}:\d{2} \+ /i;
        // start date and time and duration -> yyyy-MM-dd HH:mm + ##h##m
        if (patternDateTimeDuration.test(expression)) {
            parts = expression.split(' + ');
            s.date_start = new Date(parts[0]);
            s.duration = this.parseTime(parts[1]);
            s.date_end = new Date(s.date_start.getTime() + s.duration * 60 * 1000);
            parsed = true;
            s.pattern = 'yyyy-MM-dd HH:mm + ##h##m';
        }
        // start time and duration -> HH:mm + ##h##m
        if (patternTimeDuration.test(expression) && !parsed) {
            parts = expression.split(' + ');
            var min = parseInt(parts[0].split(':')[0]) * 60 + parseInt(parts[0].split(':')[1]);
            s.date_start = new Date(this.dateOnly(this.services.dateUtils.newDateUpToSeconds()).getTime() + (min * 60 * 1000));
            s.duration = this.parseTime(parts[1]);
            s.date_end = new Date(s.date_start.getTime() + s.duration * 60 * 1000);
            parsed = true;
            s.pattern = 'HH:mm + ##h##m';
        }
        // start date and time and end time -> yyyy-MM-dd HH:mm - HH:mm
        if (patternDateTimeEnd.test(expression) && !parsed) {
            parts = expression.split(' - ');
            var dateOnly = parts[0].split(' ')[0];
            s.date_start = new Date(parts[0]);
            s.date_end = new Date(dateOnly + ' ' + parts[1]);
            s.duration = this.elapsedTime(s.date_start, s.date_end) / 60;
            parsed = true;
            s.pattern = 'yyyy-MM-dd HH:mm - HH:mm';
        }
        // start time and end time -> HH:mm - HH:mm
        if (patternTimeEnd.test(expression) && !parsed) {
            parts = expression.split(' - ');
            var min1 = parseInt(parts[0].split(':')[0]) * 60 + parseInt(parts[0].split(':')[1]);
            var min2 = parseInt(parts[1].split(':')[0]) * 60 + parseInt(parts[1].split(':')[1]);
            s.date_start = new Date(this.dateOnly(this.services.dateUtils.newDateUpToSeconds()).getTime() + (min1 * 60 * 1000));
            s.date_end = new Date(this.dateOnly(this.services.dateUtils.newDateUpToSeconds()).getTime() + (min2 * 60 * 1000));
            s.duration = this.elapsedTime(s.date_start, s.date_end) / 60;
            parsed = true;
            s.pattern = 'HH:mm - HH:mm';
        }
        // start date and time -> yyyy-MM-dd HH:mm
        if (patternDateTime.test(expression) && !parsed) {
            var dateParts = expression.substring(0, 10).split('-');
            s.date_start = new Date(expression);
            parsed = true;
            s.pattern = 'yyyy-MM-dd HH:mm';
        }
        // time only -> HH:mm
        if (patternTime.test(expression) && !parsed) {
            var min = parseInt(expression.split(':')[0]) * 60 + parseInt(expression.split(':')[1]);
            s.date_start = new Date(this.dateOnly(this.services.dateUtils.newDateUpToSeconds()).getTime() + (min * 60 * 1000));
            parsed = true;
            s.pattern = 'HH:mm';
        }
        return s;
    };
    TasksCore.prototype.import = function (tasks) {
        var _this = this;
        tasks.forEach(function (t) {
            _this.data.taskList.push(t);
        });
        this.tasksToStorage();
    };
    // getTasks(){
    //     this.http.get(`${this.apiRoot}/task/list`).subscribe(
    //         (data) => {
    //             this.serverData.tasks = JSON.parse(data["_body"]);
    //             console.log('from BE',this.serverData.tasks);
    //         },
    //         (err) => {
    //             console.log(err);
    //         }
    //     )
    // }
    TasksCore.prototype.getTasks = function () {
        var _this = this;
        //return this.http.get(`${this.apiRoot}/api/tasks`).toPromise() // => data.json()
        return this.getAllForUser('anon')
            .then(function (data) {
            _this.serverData.tasks = data;
            console.log('from BE', _this.serverData.tasks);
            return data;
        }).catch(function (err) {
            console.log(err);
        });
    };
    TasksCore.prototype.getTasksFromServer = function () {
        var _this = this;
        return this.getAllForUser('anon')
            .then(function (data) {
            var task;
            var server = data;
            server.forEach(function (t) {
                t.tsk_time_history = t.tsk_time_history || [];
                task = _this.data.taskList.find(function (d) { return d.tsk_id == t.tsk_id; });
                if (!task) { // if task was not found on client but it's coming from server, add it
                    // add one time tracking if task is done
                    if (t.tsk_ctg_status == 3) {
                        var dateDone = new Date(t.tsk_date_done);
                        var dateStart = new Date(t.tsk_date_done);
                        dateStart = new Date(dateStart.getTime() - ((t.tsk_estimated_duration - 1) * 60 * 1000));
                        t.tsk_time_history.push({
                            tsh_id: t.tsk_id,
                            tsh_num_secuential: 1,
                            tsh_name: t.tsk_name,
                            tsh_date_start: dateStart,
                            tsh_date_end: dateDone,
                            tsh_time_spent: _this.elapsedTime(dateStart, dateDone),
                            tsh_id_user: t.tsk_id_user_asigned,
                            tsh_date_add: dateStart,
                            tsh_date_mod: dateDone
                        });
                    }
                    _this.data.taskList.push(t);
                }
                else { // task is in server and client, let's see if it has changes
                    if ((new Date(t.tsk_date_mod)).getTime() != (new Date(task.tsk_date_mod)).getTime()) {
                        // add one time tracking if task is done
                        if (t.tsk_ctg_status == 3) {
                            var dateDone = new Date(t.tsk_date_done);
                            var dateStart = new Date(t.tsk_date_done);
                            dateStart = new Date(dateStart.getTime() - ((t.tsk_estimated_duration - 1) * 60 * 1000));
                            t.tsk_time_history.push({
                                tsh_id: t.tsk_id,
                                tsh_num_secuential: 1,
                                tsh_name: t.tsk_name,
                                tsh_date_start: dateStart,
                                tsh_date_end: dateDone,
                                tsh_time_spent: _this.elapsedTime(dateStart, dateDone),
                                tsh_id_user: t.tsk_id_user_asigned,
                                tsh_date_add: dateStart,
                                tsh_date_mod: dateDone
                            });
                            _this.data.taskList[_this.data.taskList.findIndex(function (d) { return d.tsk_id == t.tsk_id; })] = t;
                            //task = t;
                        }
                    }
                }
            });
            _this.tasksToStorage();
        }).catch(function (err) {
            console.log(err);
        });
    };
    // postTask(t: any){
    //     this.http.post(`${this.apiRoot}/task/create`,this.parseToPost(t)).subscribe(
    //         response => {
    //             console.log('post response',response);
    //         }
    //     );
    // }
    TasksCore.prototype.postTask = function (t) {
        t.not_sync = true;
        this.sync.request('create', _crosscommon_Utility__WEBPACK_IMPORTED_MODULE_6__["Utils"].entityToRawTableFields(t), {
            tsk_id: t.tsk_id
        }, 'Task', function () {
            t.not_sync = false;
        }, function (e) { return e.tsk_id + ' / ' + e.tsk_name; }, function (val) { return val.tsk_id === t.tsk_id; });
    };
    TasksCore.prototype.postMultipleTasks = function (list) {
        var syncList = [];
        list.forEach(function (t) {
            t.not_sync = true;
            syncList.push({
                action: 'create',
                model: t,
                pk: {
                    tsk_id: t.tsk_id
                },
                entity: 'Task',
                callback: function (model, response) {
                    model.not_sync = false;
                },
                recordName: function (task) { return task.tsk_id; },
                matchMethod: function (val) { return val.tsk_id === t.tsk_id; } // use pk's instead
            });
        });
        this.sync.multipleRequest(syncList);
    };
    TasksCore.prototype.prepareTaskToPostBE = function (t) {
        var history = t['tsk_time_history'];
        var simpleTask = _crosscommon_Utility__WEBPACK_IMPORTED_MODULE_6__["Utils"].entityToRawTableFields(t);
        simpleTask['tsk_time_history'] = history;
        return simpleTask;
    };
    TasksCore.prototype.updateTaskBE = function (t) {
        t.not_sync = true;
        this.sync.request('update', this.prepareTaskToPostBE(t), {
            tsk_id: t.tsk_id
        }, 'Task', function () {
            t.not_sync = false;
        }, function (e) { return e.tsk_id + ' / ' + e.tsk_name; }, function (val) { return val.tsk_id === t.tsk_id; });
    };
    TasksCore.prototype.parseToPost = function (obj) {
        var resp = '';
        Object.keys(obj).forEach(function (k) {
            if (obj[k] === 0 || (obj[k] !== '' && obj[k])) {
                resp = (resp !== '' ? resp + '&' : '') + (k + "=" + obj[k]);
            }
        });
        return resp;
    };
    TasksCore.prototype.purgeDoneTasks = function () {
        var filtered = this.data.taskList.filter(function (t) {
            return t.tsk_ctg_status !== 3; // CLOSED
        });
        this.data.taskList = filtered;
        this.tasksToStorage();
    };
    TasksCore.prototype.replaceTokenInText = function (tsk_name, expression) {
        var r = tsk_name;
        r = r.replace(expression + ' ', '');
        r = r.replace(' ' + expression, '');
        r = r.replace(expression, '');
        return r;
    };
    TasksCore.prototype.doThisWithAToken = function (task, method, token, tokenEnd) {
        if (tokenEnd === void 0) { tokenEnd = ' '; }
        while (task.tsk_name.indexOf(token) !== -1) {
            var endPosition = task.tsk_name.indexOf(tokenEnd, task.tsk_name.indexOf(token)) === -1 ? task.tsk_name.length : task.tsk_name.indexOf(tokenEnd, task.tsk_name.indexOf(token));
            var expression = task.tsk_name.substring(task.tsk_name.indexOf(token) + token.length, endPosition);
            task.tsk_name = this.replaceTokenInText(task.tsk_name, token + expression + (tokenEnd === ' ' ? '' : tokenEnd));
            method(task, expression);
        }
    };
    /**
     * @deprecated Old way to push tasks to BE, no need anymore
     */
    TasksCore.prototype.batchAdd = function () {
        var _this = this;
        var date1 = new Date(2018, 8, 1);
        var date2 = new Date(2018, 9, 1);
        var dateFrom = function (d) { return new Date(d); };
        var dateGreaterThan = function (d1, d2) { return dateFrom(d1).getTime() > dateFrom(d2).getTime(); };
        var dateGreaterOrEqualThan = function (d1, d2) { return dateFrom(d1).getTime() >= dateFrom(d2).getTime(); };
        var dateLowerThan = function (d1, d2) { return dateFrom(d1).getTime() < dateFrom(d2).getTime(); };
        var dateLowerOrEqualThan = function (d1, d2) { return dateFrom(d1).getTime() <= dateFrom(d2).getTime(); };
        var t = this.data.taskList.filter(function (task) { return dateGreaterOrEqualThan(task.tsk_date_add, date1) && dateLowerThan(task.tsk_date_add, date2); });
        console.log('tasks to push', t);
        this.http.post(this.apiRoot + "/task/batch", t, { headers: this.headers })
            .toPromise().then(function (response) {
            console.log('post response', response);
            // cleanup
            var filtered = _this.data.taskList.filter(function (task) {
                return (dateGreaterOrEqualThan(task.tsk_date_add, date2)) || task.tsk_ctg_status <= 2; // BACKLOG, OPEN
            });
            var cleanedup = _this.data.taskList.filter(function (task) {
                return (dateGreaterOrEqualThan(task.tsk_date_add, date1) && dateLowerThan(task.tsk_date_add, date2)) && task.tsk_ctg_status > 2; // CLOSED, CANCELLED
            });
            var preservedPush = _this.data.taskList.filter(function (task) {
                return (dateGreaterOrEqualThan(task.tsk_date_add, date1) && dateLowerThan(task.tsk_date_add, date2)) && task.tsk_ctg_status <= 2; // BACKLOG, OPEN
            });
            console.log('tasks remaining after cleanup', filtered);
            console.log('cleanedup tasks', cleanedup);
            console.log('preserved from push', preservedPush);
            _this.data.taskList = filtered;
            _this.tasksToStorage();
        }).catch(function (err) {
            console.log('err', err);
        });
    };
    TasksCore.prototype.computeComparisonData = function () {
        var _this = this;
        return this.getAllForUser('anon').then(function (serverData) {
            var clientData = _this.data.taskList;
            var singleTask;
            var comparisonResults = [];
            var result;
            // compare tasks, client first
            clientData.forEach(function (t) {
                singleTask = serverData.find(function (s) { return s.tsk_id === t.tsk_id; });
                if (singleTask) {
                    result = _this.compareTask(t, singleTask);
                    if (result.length > 0) {
                        comparisonResults.push(result);
                    }
                }
                else {
                    // use this if task is not in server
                    //comparisonResults.push(this.compareTask(t,{}));
                    console.log('this task is not in the server', t);
                }
            });
            _this.comparisonData = {
                results: comparisonResults,
                clientTaskCount: clientData.length,
                serverTaskCount: serverData.length
            };
            return _this.comparisonData;
        });
    };
    TasksCore.prototype.compareTask = function (t, s) {
        var _this = this;
        //let fields = ['tsk_id_container','tsk_id_record','tsk_name','tsk_notes', 'tsk_parent', 'tsk_order', 'tsk_date_done', 'tsk_total_time_spent', 'tsk_ctg_in_process', 'tsk_qualifiers', 'tsk_tags', 'tsk_estimated_duration', 'tsk_schedule_date_start', 'tsk_schedule_date_end', 'tsk_date_view_until', 'tsk_id_user_added', 'tsk_id_user_asigned', 'tsk_date_add', 'tsk_date_mod', 'tsk_ctg_status'];
        //let fields = ['tsk_id_container','tsk_id_record','tsk_name','tsk_notes','tsk_parent','tsk_order','tsk_date_done','tsk_total_time_spent','tsk_ctg_in_process','tsk_qualifiers','tsk_tags','tsk_estimated_duration','tsk_schedule_date_start','tsk_schedule_date_end','tsk_date_view_until','tsk_id_user_added','tsk_id_user_asigned','tsk_template','tsk_template_state','tsk_date_due','tsk_id_related','tsk_url','tsk_ctg_repeats','tsk_id_main','tsk_ctg_rep_type','tsk_ctg_rep_after_completion','tsk_ctg_rep_end','tsk_rep_date_end','tsk_rep_end_iteration','tsk_rep_iteration','tsk_rep_frequency','tsk_ctg_rep_frequency_rule','tsk_rep_weekdays','tsk_date_add','tsk_date_mod','tsk_ctg_status'];
        var fields = ['tsk_id_container', 'tsk_id_record', 'tsk_name', 'tsk_notes', 'tsk_parent', 'tsk_order', 'tsk_date_done', 'tsk_total_time_spent', 'tsk_ctg_in_process', 'tsk_tags', 'tsk_estimated_duration', 'tsk_schedule_date_start', 'tsk_schedule_date_end', 'tsk_date_view_until', 'tsk_id_user_added', 'tsk_id_user_asigned', 'tsk_template', 'tsk_template_state', 'tsk_date_due', 'tsk_id_related', 'tsk_url', 'tsk_id_main', 'tsk_rep_date_end', 'tsk_rep_weekdays', 'tsk_date_add', 'tsk_ctg_status'];
        //let fields = ['tsk_date_done'];
        var comparison = [];
        var field = {};
        fields.forEach(function (f) {
            field = {};
            field.id = t.tsk_id;
            field.displayName = t.tsk_id + ' - ' + t.tsk_name;
            field.name = f;
            field.client = t[f];
            field.server = s[f];
            if (t[f] instanceof Date) {
                s[f] = new Date(s[f]);
                field.isEqual = t[f].getTime() == s[f].getTime();
            }
            else {
                field.isEqual = t[f] == s[f];
            }
            if (field.name === 'tsk_total_time_spent' && !field.isEqual) {
                // let's find out which one is the real one
                var taskClient = _this.data.taskList.find(function (t) { return t.tsk_id === field.id; });
                _this.recalculateTotalTimeSpent(taskClient);
                field.isEqual = taskClient[f] == s[f];
            }
            if (field.name === 'tsk_date_mod' && !field.isEqual) {
                // we preserve server date if it defers from browser
                var taskClient = _this.data.taskList.find(function (t) { return t.tsk_id === field.id; });
                taskClient[f] = new Date(s[f]);
                field.isEqual = taskClient[f].getTime() == new Date(s[f]).getTime();
            }
            if (!field.isEqual) {
                comparison.push(field);
            }
        });
        return comparison;
    };
    TasksCore.prototype.setApiRoot = function (root) {
        this.apiRoot = root;
        console.log('api root has changed to:', root);
    };
    TasksCore = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _common_sync_api__WEBPACK_IMPORTED_MODULE_4__["SyncAPI"], _common_date_common__WEBPACK_IMPORTED_MODULE_5__["DateCommon"]])
    ], TasksCore);
    return TasksCore;
}());



/***/ }),

/***/ "./src/app/task/tasks.template.html":
/*!******************************************!*\
  !*** ./src/app/task/tasks.template.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #tasksForm=\"ngForm\">\r\n    <input type=\"text\" name=\"tsk_name\"\r\n        placeholder=\"Write a task...\"\r\n        class=\"task\"\r\n        autocomplete=\"off\"\r\n        autofocus=\"true\"\r\n        *ngIf=\"!showBatchAdd\"\r\n        (keyup)=\"inputKeyUpHandler($event)\"\r\n        [(ngModel)]=\"tsk_name\" />\r\n    <textarea name=\"tsk_multiple_name\"\r\n        placeholder=\"Write a task per line...\"\r\n        class=\"task-multiple\"\r\n        (keyup)=\"inputKeyUpHandler($event)\"\r\n        [(ngModel)]=\"tsk_multiple_name\"\r\n        *ngIf=\"showBatchAdd\"></textarea>\r\n    <button type=\"submit\" (click)=\"addTask(tasksForm)\" id=\"btnAddTask\">Add task</button>\r\n    <button (click)=\"showButtonSection = !showButtonSection\">{{showButtonSection ? 'hide': 'show'}} actions</button>\r\n    <span id=\"buttonSection\" *ngIf=\"showButtonSection\">\r\n        <button (click)=\"toggleViewBacklog()\">{{viewBacklog ? 'hide': 'show'}} backlog</button>\r\n        <button (click)=\"toggleViewAll()\">{{viewAll ? 'hide': 'show'}} all</button>\r\n        <button (click)=\"toggleViewPostponed()\" *ngIf=\"state.postponedTasksCount\">{{viewPostponed ? 'hide': 'show'}} postponed</button>\r\n        <button (click)=\"toggleViewReportsWeek()\">{{viewReportsWeek ? 'hide': 'show'}} reports week</button>\r\n        <button (click)=\"toggleViewReportsDayDistribution()\">{{viewReportsDayDistribution ? 'hide': 'show'}} reports day distribution</button>\r\n        <button (click)=\"toggleView('viewQualifierTotals')\">{{viewQualifierTotals ? 'hide': 'show'}} reports qualifier totals</button>\r\n        <button (click)=\"toggleViewOptions()\">{{viewOptions ? 'hide': 'show'}} options</button>\r\n    </span>\r\n    <div *ngIf=\"viewETABeforeAdd\">\r\n        <strong>[{{state.beforeAddTotalTasksWritten}} Tasks to Add]</strong>\r\n        <strong>[TOTAL ETA: {{formatTime(state.beforeAddTotalETA * 60)}}]</strong>\r\n        <span *ngFor=\"let r of state.beforeAddETA\">\r\n            [{{r.record}}: {{formatTime(r.totalETA * 60)}}]\r\n        </span>\r\n    </div>\r\n</form>\r\n<div *ngIf=\"viewOptions\">\r\n    <button (click)=\"deleteTasks()\">delete all tasks</button>\r\n    <input type=\"text\"\r\n        name=\"optionsInput\"\r\n        [(ngModel)]=\"optionsInput\" />\r\n    <button (click)=\"backup()\">backup</button>\r\n    <button (click)=\"backupDoneOnly()\">backup done only</button>\r\n    <button (click)=\"import()\">import</button>\r\n    <button (click)=\"purgeDoneTasks()\">purge done tasks</button>\r\n    <button (click)=\"sendAllToServer()\">all tasks to server</button>\r\n    <button (click)=\"getTasksFromServer()\">get tasks from server</button>\r\n    <br/>\r\n    <span class=\"option-item\">\r\n        <input type=\"checkbox\" name=\"optCheckViewElapsedDays\" id=\"optCheckViewElapsedDays\"\r\n            ng-checked=\"options.optViewElapsedDays\"\r\n            [(ngModel)]=\"options.optViewElapsedDays\"\r\n            (click)=\"toggleOption('optViewElapsedDays')\" />\r\n        <label for=\"optCheckViewElapsedDays\">Display days elapsed since task was added</label>\r\n    </span>\r\n    <span class=\"option-item\">\r\n        <input type=\"checkbox\" name=\"optCheckShowFinishedToday\" id=\"optCheckShowFinishedToday\"\r\n            ng-checked=\"options.optShowFinishedToday\"\r\n            [(ngModel)]=\"options.optShowFinishedToday\"\r\n            (click)=\"toggleOption('optShowFinishedToday')\" />\r\n        <label for=\"optCheckShowFinishedToday\">Show Finished Today</label>\r\n    </span>\r\n    <span class=\"option-item\">\r\n        <input type=\"checkbox\" name=\"optCheckShowQualifiedTasksOnly\" id=\"optCheckShowQualifiedTasksOnly\"\r\n            ng-checked=\"options.optShowQualifiedTasksOnly\"\r\n            [(ngModel)]=\"options.optShowQualifiedTasksOnly\"\r\n            (click)=\"toggleOption('optShowQualifiedTasksOnly');updateState();\" />\r\n        <label for=\"optCheckShowQualifiedTasksOnly\">Show only tasks that have Qualifiers</label>\r\n    </span>\r\n    <span class=\"option-item\">\r\n        <input type=\"checkbox\" name=\"optCheckNewTaskStatusIsBacklog\" id=\"optCheckNewTaskStatusIsBacklog\"\r\n            ng-checked=\"options.optNewTaskStatusIsBacklog\"\r\n            [(ngModel)]=\"options.optNewTaskStatusIsBacklog\"\r\n            (click)=\"toggleOption('optNewTaskStatusIsBacklog');\" />\r\n        <label for=\"optCheckNewTaskStatusIsBacklog\">When a new task is added, add it to BACKLOG instead (of adding it to OPEN)</label>\r\n    </span>\r\n    <span class=\"option-item\">\r\n        <input type=\"checkbox\" name=\"optCheckShowIndicatorsTable\" id=\"optCheckShowIndicatorsTable\"\r\n            ng-checked=\"options.optShowIndicatorsTable\"\r\n            [(ngModel)]=\"options.optShowIndicatorsTable\"\r\n            (click)=\"toggleOption('optShowIndicatorsTable');\" />\r\n        <label for=\"optCheckShowIndicatorsTable\">Show Indicators Table</label>\r\n    </span>\r\n    <span class=\"option-item\">\r\n        <label for=\"optInputServerAddress\">Server Address</label>\r\n        <input type=\"text\" id=\"optInputServerAddress\" name=\"optInputServerAddress\"\r\n            [(ngModel)]=\"options.optServerAddress\"\r\n            (blur)=\"saveOption('optServerAddress',$event.target['value'])\" />\r\n    </span>\r\n    <div id=\"optionsMessages\"></div>\r\n    <hr/>\r\n</div>\r\n<div id=\"backlogTaskList\" *ngIf=\"viewBacklog\">\r\n    <strong>Backlog</strong>\r\n    <div *ngFor=\"let item of state.backlogTasks\">\r\n        <div>\r\n            <strong>{{item.header}}</strong>\r\n            ({{formatTime(item.estimatedDuration * 60)}})\r\n        </div>\r\n        <div *ngFor=\"let t of item.tasks\" data-id=\"{{t.tsk_id}}\">\r\n            - <span *ngIf=\"t.tsk_total_time_spent !== 0\">[{{t.tsk_time_history.length}}/{{formatTime(t.tsk_total_time_spent)}}]</span>\r\n            <span contenteditable=\"true\" (keyup)=\"taskEdit(t,$event)\"\r\n                [ngClass]=\"{'task-important': (t.tsk_qualifiers.indexOf('important') !== -1), 'task-urgent': (t.tsk_qualifiers.indexOf('urgent') !== -1), 'task-progressed': (t.tsk_qualifiers.indexOf('progressed') !== -1)}\"\r\n                class=\"editable\">{{t.tsk_name}}</span>\r\n            <span contenteditable=\"true\" (blur)=\"taskEstimatedDurationEdit(t,$event)\"\r\n                [ngClass]=\"{'task-no-eta': (t.tsk_estimated_duration === 0)}\"\r\n                class=\"task-eta\"\r\n                >{{formatTime(t.tsk_estimated_duration * 60,\"#h#m\")}}</span>\r\n            <span *ngIf=\"t.tsk_schedule_date_start\">(start at {{t.tsk_schedule_date_start | date: 'yyyy-MM-dd HH:mm'}})</span>\r\n            <span [ngClass]=\"taskAgeClass(t)\">{{taskAge(t)}}</span>\r\n            <button (click)=\"setOpen(t)\">Move to open</button>\r\n        </div>\r\n    </div>\r\n    <hr/>\r\n</div>\r\n<div id=\"postponedTaskList\" *ngIf=\"viewPostponed\">\r\n    <strong>Postponed Tasks</strong>\r\n    <div *ngFor=\"let t of state.postponedTasks\">\r\n        - <span *ngIf=\"t.tsk_total_time_spent !== 0\">[{{t.tsk_time_history.length}}/{{formatTime(t.tsk_total_time_spent)}}]</span>\r\n        <span contenteditable=\"true\" (keyup)=\"taskEdit(t,$event)\"\r\n            [ngClass]=\"{'task-done': (t.tsk_ctg_status === this.taskStatus.CLOSED), 'task-in-process': (t.tsk_ctg_in_process === 2), 'task-important': (t.tsk_qualifiers.indexOf('important') !== -1), 'task-urgent': (t.tsk_qualifiers.indexOf('urgent') !== -1), 'task-progressed': (t.tsk_qualifiers.indexOf('progressed') !== -1)}\"\r\n            (blur)=\"commandOnTask(t,$event)\"\r\n            class=\"editable\">{{t.tsk_name}}</span>\r\n        <span contenteditable=\"true\" (blur)=\"taskEstimatedDurationEdit(t,$event)\"\r\n            [ngClass]=\"{'task-no-eta': (t.tsk_estimated_duration === 0)}\"\r\n            class=\"task-eta\"\r\n            >{{formatTime(t.tsk_estimated_duration * 60,\"#h#m\")}}</span>\r\n        <span *ngIf=\"t.tsk_schedule_date_start\">(start at {{t.tsk_schedule_date_start | date: 'yyyy-MM-dd HH:mm'}})</span>\r\n        <span [ngClass]=\"taskAgeClass(t)\">{{taskAge(t)}}</span>\r\n        <span>(postponed until {{t.tsk_date_view_until | date: 'yyyy-MM-dd HH:mm:ss'}})</span>\r\n        <button (click)=\"setSelected(t)\">details</button>\r\n        <button (click)=\"setUnpostpone(t)\">see it now</button>\r\n    </div>\r\n    <hr/>\r\n</div>\r\n<div id=\"openTaskList\">\r\n    <div *ngIf=\"!state.openTasks.length\"><strong>No tasks open! Congratulations! Consider reviewing the backlog or add new tasks to do.</strong><hr/></div>\r\n    <div class=\"task-open-task-list-container\">\r\n        <div *ngFor=\"let item of state.openTasks\" class=\"task-record\">\r\n            <div>\r\n                <strong>{{item.header}}</strong>\r\n                / {{item.tasks.length}} tasks ({{formatTime(item.estimatedDuration * 60)}})\r\n            </div>\r\n            <div *ngFor=\"let t of item.tasks\" data-id=\"{{t.tsk_id}}\" [ngStyle]=\"{'font-size-2': ageFontSizeNormalization(t) + 'px'}\">\r\n                <input type=\"checkbox\" id=\"{{t.tsk_id}}\"\r\n                    (click)=\"taskCheckboxHandler(t,$event)\" />\r\n                <span class=\"mobile-only\">\r\n                    <span class=\"play-button clickable\" *ngIf=\"t.tsk_ctg_in_process === 1\"\r\n                        (click)=\"toggleTimeTracking(t,$event)\">&#9654;</span>\r\n                    <span class=\"stop-button clickable\" *ngIf=\"t.tsk_ctg_in_process === 2\"\r\n                        (click)=\"toggleTimeTracking(t,$event)\">&#9724;</span>\r\n                </span>\r\n                <span *ngIf=\"t.tsk_total_time_spent !== 0\"\r\n                    [ngClass]=\"{'task-open-with-tt': (t.tsk_ctg_status === this.taskStatus.OPEN && t.tsk_time_history.length > 0)}\"\r\n                    >[{{t.tsk_time_history.length}}/{{formatTime(t.tsk_total_time_spent)}}]\r\n                    <span *ngIf=\"t.tsk_ctg_in_process !== 2\">\r\n                        [<span class=\"tt-start\" contenteditable=\"true\" (keyup)=\"timeTrackingQuickEdit(t,$event,'start')\">{{t.tsk_time_history[t.tsk_time_history.length-1].tsh_date_start | date: 'HH:mm:ss'}}</span> - <span class=\"tt-end\" contenteditable=\"true\" (keyup)=\"timeTrackingQuickEdit(t,$event,'end')\">{{t.tsk_time_history[t.tsk_time_history.length-1].tsh_date_end | date: 'HH:mm:ss'}}</span>]\r\n                    </span>\r\n                </span>\r\n                <span *ngIf=\"t.tsk_ctg_in_process === 2\">\r\n                    [<span contenteditable=\"true\" (keyup)=\"timeTrackingQuickEdit(t,$event,'start')\">{{t.tsk_time_history[t.tsk_time_history.length-1].tsh_date_start | date: 'HH:mm:ss'}}</span>]\r\n                </span>\r\n                <span (click)=\"toggleTimeMode()\" class=\"clickable\" title=\"click to toggle timer mode\">\r\n                    {{(timers[t.tsk_id]) ? '[' + timers[t.tsk_id].timerString + ']' : ''}}\r\n                </span>\r\n                <span contenteditable=\"true\" (keyup)=\"taskEdit(t,$event)\"\r\n                    [ngClass]=\"{'task-done': (t.tsk_ctg_status === this.taskStatus.CLOSED), 'task-in-process': (t.tsk_ctg_in_process === 2), 'task-important': (t.tsk_qualifiers.indexOf('important') !== -1), 'task-urgent': (t.tsk_qualifiers.indexOf('urgent') !== -1), 'task-highlighted': (t.tsk_qualifiers.indexOf('highlighted') !== -1), 'task-progressed': (t.tsk_qualifiers.indexOf('progressed') !== -1), 'task-unexpected': (t.tsk_qualifiers.indexOf('unexpected') !== -1), 'task-call': (t.tsk_qualifiers.indexOf('call') !== -1)}\"\r\n                    (blur)=\"commandOnTask(t,$event)\"\r\n                    (focus)=\"setFocus(t,$event)\"\r\n                    tabindex=\"0\"\r\n                    class=\"editable task-text\">{{t.tsk_name}}</span>\r\n                <span class=\"task-link\" *ngIf=\"t.tsk_url\"><a href=\"{{t.tsk_url}}\" title=\"{{t.tsk_url}}\" target=\"_blank\">link</a></span>\r\n                <span contenteditable=\"true\" (blur)=\"taskEstimatedDurationEdit(t,$event)\"\r\n                    [ngClass]=\"{'task-no-eta': (t.tsk_estimated_duration === 0)}\"\r\n                    class=\"task-eta\"\r\n                    >{{formatTime(t.tsk_estimated_duration * 60,\"#h#m\")}}</span>\r\n                <span *ngIf=\"t.tsk_tags\" class=\"task-tags\">\r\n                    <span *ngFor=\"let tag of t.tsk_tags.split(' ')\"\r\n                        (click)=\"showTagStats(tag)\"\r\n                        class=\"tag\">\r\n                        #{{tag}}\r\n                    </span>\r\n                </span>\r\n                <span *ngIf=\"t.tsk_schedule_date_start\"><strong>(start at {{t.tsk_schedule_date_start | date: 'yyyy-MM-dd HH:mm'}})</strong></span>\r\n                <span [ngClass]=\"taskAgeClass(t)\" *ngIf=\"options.optViewElapsedDays\">{{taskAge(t)}}</span>\r\n                <span *ngIf=\"t.not_sync\">(Not in sync)</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div id=\"Info\">\r\n        Total Tasks: {{tasks.length}} | Backlog: {{state.backlogTasksCount}} | Closed Today: {{state.closedTodayTasks.length}} | Open: {{state.openTasksCount}}\r\n        <span *ngIf=\"state.postponedTasksCount\"> | Postponed: {{state.postponedTasksCount}}</span>\r\n        <br/>Time Estimated Today: {{formatTime(state.totalTimeEstimated * 60)}}\r\n        <span *ngIf=\"state.totalTimeEstimatedClosedToday\"> | Closed Today ETA: {{formatTime(state.totalTimeEstimatedClosedToday * 60)}} | Open ETA: {{formatTime(state.totalTimeEstimatedOpen * 60)}}</span>\r\n        <br/>Open ETA until yesterday: {{formatTime(state.totalTimeEstimatedOld * 60)}} | Task count until yesterday: {{state.totalTaskCountOld}}\r\n        <br/>Today New Tasks, Total ETA: {{formatTime(state.totalTimeEstimatedAddedToday * 60)}}\r\n         | Closed ETA: {{formatTime(state.totalTimeEstimatedAddedTodayClosed * 60)}}\r\n         | Open ETA: {{formatTime(state.totalTimeEstimatedAddedTodayOpen * 60)}}\r\n        <br/>Time Spent Today: {{formatTime(state.totalTimeSpentToday)}}\r\n        <span *ngIf=\"state.totalTimeSpentTodayOnOpenTasks\"> | Closed: {{formatTime(state.totalTimeSpentTodayOnClosedTasks)}} | Open {{formatTime(state.totalTimeSpentTodayOnOpenTasks)}}</span>\r\n        <span *ngIf=\"state.dayStartedAtDate\"><br/>Real Time Elapsed: {{formatTime(state.realTimeElapsed)}} (day started at {{state.dayStartedAtDate | date: format}})</span>\r\n        <br/>Time Management Ratio: <span>{{state.timeManagementRatio}}</span>\r\n        <br/>Productivity Ratio: <span [ngClass]=\"state.productivityRatio.className\">{{state.productivityRatio.value}} / {{state.productivityRatio.message}}</span>\r\n        <br/>Karma Score: <span>{{state.karmaScore}} ({{state.karmaCount}} / {{state.closedTodayTasks.length}})</span>\r\n        <br/>Tasks not in sync: {{services.sync.queue.length}}\r\n        <br/><strong>{{isOnline() ? '' : 'You are OFFLINE'}}</strong>\r\n        <div *ngIf=\"options.optShowIndicatorsTable\">\r\n            <strong>Indicators</strong>\r\n            <table class=\"indicators-table\">\r\n                <tr>\r\n                    <td>Indicator</td>\r\n                    <td *ngFor=\"let c of state.indicatorLabels\">{{c}}</td>\r\n                    <td>Completed?</td>\r\n                </tr>\r\n                <tr *ngFor=\"let indicator of state.indicators\">\r\n                    <td>{{indicator.name}}</td>\r\n                    <td *ngFor=\"let v of indicator.values\">{{v}}</td>\r\n                    <td>{{indicator.isCompleted ? 'SI' : 'NO'}} / {{indicator.percentageCompleted}}</td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n    </div>\r\n    <hr/>\r\n</div>\r\n<div id=\"nextToDoTodayList\" *ngIf=\"nextTasks[0].tasks.length\">\r\n        <div class=\"task-open-task-list-container\">\r\n                <div *ngFor=\"let item of nextTasks\" class=\"task-record\">\r\n                    <div>\r\n                        <strong>Next To Do Today</strong>\r\n                        / {{item.tasks.length}} tasks ({{formatTime(item.estimatedDuration * 60)}})\r\n                    </div>\r\n                    <div *ngFor=\"let t of item.tasks\" data-id=\"{{t.tsk_id}}\">\r\n                        <input type=\"checkbox\" id=\"{{t.tsk_id}}\"\r\n                            (click)=\"taskCheckboxHandler(t,$event)\" />\r\n                        <span class=\"mobile-only\">\r\n                            <span class=\"play-button clickable\" *ngIf=\"t.tsk_ctg_in_process === 1\"\r\n                                (click)=\"toggleTimeTracking(t,$event)\">&#9654;</span>\r\n                            <span class=\"stop-button clickable\" *ngIf=\"t.tsk_ctg_in_process === 2\"\r\n                                (click)=\"toggleTimeTracking(t,$event)\">&#9724;</span>\r\n                        </span>\r\n                        <span *ngIf=\"t.tsk_total_time_spent !== 0\"\r\n                            [ngClass]=\"{'task-open-with-tt': (t.tsk_ctg_status === this.taskStatus.OPEN && t.tsk_time_history.length > 0)}\"\r\n                            >[{{t.tsk_time_history.length}}/{{formatTime(t.tsk_total_time_spent)}}]\r\n                            <span *ngIf=\"t.tsk_ctg_in_process !== 2\">\r\n                                [<span class=\"tt-start\" contenteditable=\"true\" (keyup)=\"timeTrackingQuickEdit(t,$event,'start')\">{{t.tsk_time_history[t.tsk_time_history.length-1].tsh_date_start | date: 'HH:mm:ss'}}</span> - <span class=\"tt-end\" contenteditable=\"true\" (keyup)=\"timeTrackingQuickEdit(t,$event,'end')\">{{t.tsk_time_history[t.tsk_time_history.length-1].tsh_date_end | date: 'HH:mm:ss'}}</span>]\r\n                            </span>\r\n                        </span>\r\n                        <span *ngIf=\"t.tsk_ctg_in_process === 2\">\r\n                            [<span contenteditable=\"true\" (keyup)=\"timeTrackingQuickEdit(t,$event,'start')\">{{t.tsk_time_history[t.tsk_time_history.length-1].tsh_date_start | date: 'HH:mm:ss'}}</span>]\r\n                        </span>\r\n                        <span (click)=\"toggleTimeMode()\" class=\"clickable\" title=\"click to toggle timer mode\">\r\n                            {{(timers[t.tsk_id]) ? '[' + timers[t.tsk_id].timerString + ']' : ''}}\r\n                        </span>\r\n                        <span contenteditable=\"true\" (keyup)=\"taskEdit(t,$event)\"\r\n                            [ngClass]=\"{'task-done': (t.tsk_ctg_status === this.taskStatus.CLOSED), 'task-in-process': (t.tsk_ctg_in_process === 2), 'task-important': (t.tsk_qualifiers.indexOf('important') !== -1), 'task-urgent': (t.tsk_qualifiers.indexOf('urgent') !== -1), 'task-highlighted': (t.tsk_qualifiers.indexOf('highlighted') !== -1), 'task-progressed': (t.tsk_qualifiers.indexOf('progressed') !== -1), 'task-unexpected': (t.tsk_qualifiers.indexOf('unexpected') !== -1), 'task-call': (t.tsk_qualifiers.indexOf('call') !== -1)}\"\r\n                            (blur)=\"commandOnTask(t,$event)\"\r\n                            class=\"editable task-text\">{{t.tsk_name}}</span>\r\n                        <span contenteditable=\"true\" (blur)=\"taskEstimatedDurationEdit(t,$event)\"\r\n                            [ngClass]=\"{'task-no-eta': (t.tsk_estimated_duration === 0)}\"\r\n                            class=\"task-eta\"\r\n                            >{{formatTime(t.tsk_estimated_duration * 60,\"#h#m\")}}</span>\r\n                        <span *ngIf=\"t.tsk_tags\" class=\"task-tags\">\r\n                            <span *ngFor=\"let tag of t.tsk_tags.split(' ')\"\r\n                                (click)=\"showTagStats(tag)\"\r\n                                class=\"tag\">\r\n                                #{{tag}}\r\n                            </span>\r\n                        </span>\r\n                        <span *ngIf=\"t.tsk_schedule_date_start\"><strong>(start at {{t.tsk_schedule_date_start | date: 'yyyy-MM-dd HH:mm'}})</strong></span>\r\n                        <span [ngClass]=\"taskAgeClass(t)\" *ngIf=\"options.optViewElapsedDays\">{{taskAge(t)}}</span>\r\n                        <span *ngIf=\"t.not_sync\">(Not in sync)</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n</div>\r\n<div id=\"tagInfo\" *ngIf=\"tagInfo.display === true\">\r\n    <button (click)=\"tagInfo.display=false\">hide</button>\r\n    <strong>Tag Information</strong>\r\n    <br/>Closed Tasks | Estimated: {{formatTime(tagInfo.tasksClosedTotalEstimated * 60)}} | Spent: {{formatTime(tagInfo.tasksClosedTotalSpent)}}\r\n    <br/>Open Tasks | Estimated: {{formatTime(tagInfo.tasksOpenTotalEstimated * 60)}} | Spent: {{formatTime(tagInfo.tasksOpenTotalSpent)}}\r\n    <div *ngIf=\"tagInfo.tasks.length > 0\">\r\n        <table>\r\n            <tr>\r\n                <td>Name</td>\r\n                <td>Estimated</td>\r\n                <td>Spent</td>\r\n                <td>Status</td>\r\n                <td>Actions</td>\r\n            </tr>\r\n            <tr *ngFor=\"let e of tagInfo.tasks\">\r\n                <td>{{e.tsk_name}}</td>\r\n                <td>{{formatTime(e.tsk_estimated_duration * 60)}}</td>\r\n                <td>{{formatTime(e.tsk_total_time_spent)}}</td>\r\n                <td>{{statusText(e.tsk_ctg_status)}}</td>\r\n                <td><button (click)=\"setSelected(e)\">details</button></td>\r\n            </tr>\r\n        </table>\r\n    </div>\r\n    <hr/>\r\n</div>\r\n<div id=\"taskDetails\" *ngIf=\"state.selected\">\r\n    <button (click)=\"state.selected=null\">hide</button>\r\n    <br/>\r\n    <strong>Task Details</strong>\r\n    <div>Id: {{state.selected.tsk_id}}</div>\r\n    <div>Container: {{state.selected.tsk_id_container}}</div>\r\n    <div>Record: {{state.selected.tsk_id_record}}</div>\r\n    <div>Name: {{state.selected.tsk_name}}</div>\r\n    <div>Notes: <span contenteditable=\"true\" (blur)=\"setTaskNotes(state.selected,$event)\">{{state.selected.tsk_notes ? state.selected.tsk_notes : '-'}}</span></div>\r\n    <div>Parent: {{state.selected.tsk_parent}}</div>\r\n    <div>Order: {{state.selected.tsk_order}}</div>\r\n    <div>Date Done: <span contenteditable=\"true\" (keyup)=\"editDateDone(state.selected,$event)\">{{state.selected.tsk_date_done | date: format}}</span></div>\r\n    <div>Total Time Spent: {{formatTime(state.selected.tsk_total_time_spent)}}</div>\r\n    <div>\r\n        <fieldset *ngIf=\"state.selected.tsk_time_history.length\">\r\n            <legend>Time History</legend>\r\n            <table>\r\n                <tr>\r\n                    <td>Sequential</td>\r\n                    <td>Name</td>\r\n                    <td>Date Start</td>\r\n                    <td>Date End</td>\r\n                    <td>Time Spent</td>\r\n                    <td>User</td>\r\n                    <td>Date Add</td>\r\n                    <td>Date Mod</td>\r\n                    <td>Actions</td>\r\n                </tr>\r\n                <tr *ngFor=\"let h of state.selected.tsk_time_history\">\r\n                    <td>{{h.tsh_num_secuential}}</td>\r\n                    <td>{{h.tsh_name}}</td>\r\n                    <td><span contenteditable=\"true\" (keyup)=\"editTimeTracking(h,1,$event)\">{{h.tsh_date_start | date: format}}</span></td>\r\n                    <td><span contenteditable=\"true\" (keyup)=\"editTimeTracking(h,2,$event)\">{{h.tsh_date_end | date: format}}</span></td>\r\n                    <td>{{formatTime(h.tsh_time_spent)}}</td>\r\n                    <td>{{h.tsh_id_user}}</td>\r\n                    <td>{{h.tsh_date_add | date: format}}</td>\r\n                    <td>{{h.tsh_date_mod | date: format}}</td>\r\n                    <td><button *ngIf=\"h.tsh_date_end\" (click)=\"deleteTimeTracking(state.selected,h)\">delete</button></td>\r\n                </tr>\r\n            </table>\r\n        </fieldset>\r\n    </div>\r\n    <div>In Progress: {{state.selected.tsk_ctg_in_process}}</div>\r\n    <div>Qualifiers: <span contenteditable=\"true\" (blur)=\"taskQualifiersEdit(state.selected,$event)\">{{state.selected.tsk_qualifiers}}</span></div>\r\n    <div>Tags: <span contenteditable=\"true\" (blur)=\"taskTagsEdit(state.selected,$event)\">{{state.selected.tsk_tags}}</span></div>\r\n    <div>Estimated Duration: {{state.selected.tsk_estimated_duration}}</div>\r\n    <div>Schedule Date Start: {{state.selected.tsk_schedule_date_start | date: format}}</div>\r\n    <div>Schedule Date End: {{state.selected.tsk_schedule_date_end | date: format}}</div>\r\n    <div>Date View Until: {{state.selected.tsk_date_view_until}}</div>\r\n    <div>User Added: {{state.selected.tsk_id_user_added}}</div>\r\n    <div>User Asigned: {{state.selected.tsk_id_user_asigned}}</div>\r\n    <div>Date Add: {{state.selected.tsk_date_add | date: format}}</div>\r\n    <div>Date Last Mod: {{state.selected.tsk_date_mod | date: format}}</div>\r\n    <div>Status: {{state.selected.tsk_ctg_status}}</div>\r\n    <hr/>\r\n</div>\r\n<div *ngIf=\"options.optShowFinishedToday\">\r\n    <strong>Finished Today / {{state.closedTodayTasks.length}} tasks</strong>\r\n    <div *ngFor=\"let item of state.closedTodayTasks\">\r\n        <input type=\"checkbox\" id=\"{{item.tsk_id}}\" checked\r\n            (click)=\"taskCheckboxHandler(item,$event)\" />\r\n        <span *ngIf=\"item.tsk_total_time_spent !== 0\"\r\n            [ngClass]=\"{'task-open-with-tt': (item.tsk_ctg_status === this.taskStatus.OPEN && item.tsk_time_history.length > 0)}\"\r\n            >[{{item.tsk_time_history.length}}/{{formatTime(item.tsk_total_time_spent)}}]\r\n            <span *ngIf=\"item.tsk_ctg_in_process !== 2\">\r\n                [<span class=\"tt-start\" contenteditable=\"true\" (keyup)=\"timeTrackingQuickEdit(item,$event,'start')\">{{item.tsk_time_history[item.tsk_time_history.length-1].tsh_date_start | date: 'HH:mm:ss'}}</span> - <span class=\"tt-end\" contenteditable=\"true\" (keyup)=\"timeTrackingQuickEdit(item,$event,'end')\">{{item.tsk_time_history[item.tsk_time_history.length-1].tsh_date_end | date: 'HH:mm:ss'}}</span>]\r\n            </span>\r\n        </span>\r\n        <span>(Done at: <span contenteditable=\"true\" (keyup)=\"editDateDone(item,$event)\">{{item.tsk_date_done | date: format}}</span>)</span>\r\n        <span [ngClass]=\"{'task-done': (item.tsk_ctg_status === this.taskStatus.CLOSED)}\"\r\n            >{{item.tsk_name}}</span>\r\n        <span *ngIf=\"item.tsk_tags\" class=\"task-tags\">\r\n            <span *ngFor=\"let tag of item.tsk_tags.split(' ')\"\r\n                (click)=\"showTagStats(tag)\"\r\n                class=\"tag\">\r\n                #{{tag}}\r\n            </span>\r\n        </span>\r\n        <span *ngIf=\"item.not_sync\">(Not in sync)</span>\r\n        <button (click)=\"setSelected(item)\">details</button>\r\n    </div>\r\n    <hr/>\r\n</div>\r\n<div id=\"closedTaskList\" *ngIf=\"viewAll\">\r\n    <strong>Closed Tasks</strong>\r\n    <div *ngFor=\"let group of state.closedTasks\">\r\n        <div>\r\n            <strong>{{group.header | date: \"yyyy-MM-dd\"}}</strong>\r\n            <span>(Spent {{formatTime(group.totalTimeSpent)}})</span>\r\n        </div>\r\n        <div *ngFor=\"let item of group.tasks\">\r\n            - <span>[{{item.tsk_time_history.length}}/{{formatTime(item.tsk_total_time_spent)}}]</span>\r\n            <span>[{{item.tsk_id_record}}]</span>\r\n            <span>{{item.tsk_name}}</span>\r\n            <span>(done at {{item.tsk_date_done | date: 'yyyy-MM-dd HH:mm:ss'}})</span>\r\n            <span *ngIf=\"item.tsk_tags\" class=\"task-tags\">\r\n                <span *ngFor=\"let tag of item.tsk_tags.split(' ')\"\r\n                    (click)=\"showTagStats(tag)\"\r\n                    class=\"tag\">\r\n                    #{{tag}}\r\n                </span>\r\n            </span>\r\n            <button (click)=\"setSelected(item)\">details</button>\r\n        </div>\r\n    </div>\r\n    <hr/>\r\n</div>\r\n<div *ngIf=\"viewReportsWeek\">\r\n    <div *ngFor=\"let s of reports.week\">\r\n        date: {{s.date | date: 'yyyy-MM-dd'}}\r\n        tasks done: {{s.tasksDone}}\r\n        estimated: {{formatTime(s.estimated * 60)}}\r\n        spent: {{formatTime(s.timeSpent)}}\r\n        Productivity: {{s.productivity}}\r\n        Real Time Elapsed: {{formatTime(s.realTimeElapsed)}}\r\n    </div>\r\n</div>\r\n<div *ngIf=\"viewReportsDayDistribution\">\r\n    <strong>Reports Day Distribution</strong>\r\n    <table>\r\n        <tr>\r\n            <td>Record</td>\r\n            <td>Total ETA</td>\r\n            <td>Total Real</td>\r\n            <td>Percentage ETA</td>\r\n            <td>Percentage Real</td>\r\n        </tr>\r\n        <tr *ngFor=\"let r of reports.dayDistribution\">\r\n            <td>{{r.record}}</td>\r\n            <td>{{formatTime(r.eta * 60)}}</td>\r\n            <td>{{formatTime(r.real)}}</td>\r\n            <td>{{r.percentageEta}}</td>\r\n            <td>{{r.percentageReal}}</td>\r\n        </tr>\r\n    </table>\r\n    <hr/>\r\n</div>\r\n<div *ngIf=\"viewQualifierTotals\">\r\n    <strong>Qualifier Totals</strong>\r\n    <table>\r\n        <tr>\r\n            <td>Qualifier</td>\r\n            <td>Task Count</td>\r\n            <td>Total ETA</td>\r\n        </tr>\r\n        <tr *ngFor=\"let q of reports.qualifierTotals\">\r\n            <td>{{q.qualifier}}</td>\r\n            <td>{{q.taskCount}}</td>\r\n            <td>{{formatTime(q.totalETA * 60)}}</td>\r\n        </tr>\r\n    </table>\r\n    <hr/>\r\n</div>\r\n\r\n<div *ngIf=\"comparisonData\">\r\n    Client Task Count: {{comparisonData.clientTaskCount}}\r\n    <br/>Server Task Count: {{comparisonData.serverTaskCount}}\r\n    <br/>Comparison Task Count: {{comparisonData.results.length}}\r\n    <table>\r\n        <tr *ngFor=\"let c of comparisonData.results\">\r\n            <td *ngFor=\"let f of c\">\r\n                displayName: {{f.displayName}} |\r\n                name: {{f.name}} | \r\n                comparison: {{f.isEqual}} |\r\n                data FE: {{f.client}} |\r\n                data BE: {{f.server}}\r\n                <button (click)=\"sendFEToBE(c)\">Send FE data to BE</button>\r\n            </td>\r\n        </tr>\r\n    </table>\r\n</div>"

/***/ }),

/***/ "./src/crosscommon/DateUtility.ts":
/*!****************************************!*\
  !*** ./src/crosscommon/DateUtility.ts ***!
  \****************************************/
/*! exports provided: DateUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateUtils", function() { return DateUtils; });
var DateUtility = /** @class */ (function () {
    function DateUtility() {
    }
    DateUtility.prototype.elapsedTime = function (date1, date2) {
        if (date1 && date2) {
            return Math.floor((date1.getTime() - date2.getTime()) / 1000);
        }
        return 0;
    };
    DateUtility.prototype.elapsedDays = function (date1, date2) {
        return Math.floor(this.elapsedTime(this.dateOnly(date1), this.dateOnly(date2)) / (60 * 60 * 24));
    };
    DateUtility.prototype.age = function (baseDate) {
        return this.elapsedDays(new Date(baseDate), new Date());
    };
    DateUtility.prototype.dateOnly = function (base) {
        if (base) {
            return new Date(base.getFullYear(), base.getMonth(), base.getDate(), 0, 0, 0);
        }
        var newDate = new Date();
        return new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate(), 0, 0, 0);
    };
    DateUtility.prototype.addDays = function (base, days) {
        return new Date((base.getTime() + (days * 86400000)));
    };
    DateUtility.prototype.newDateUpToSeconds = function () {
        return new Date(Math.floor((new Date()).getTime() / 1000) * 1000);
    };
    /**
     * Fills string left or right to complete a given length with some char.
     * direction = 1 fills at right, direction = -1 fills at left
     */
    DateUtility.prototype.fillString = function (data, length, direction, fillChar) {
        if (direction === void 0) { direction = 1; }
        if (fillChar === void 0) { fillChar = ' '; }
        var str = data + "";
        while (str.length < length) {
            if (direction === 1) {
                str += fillChar;
            }
            else {
                str = fillChar + str;
            }
        }
        return str;
    };
    /**
     * Returns formated date as specified in format or default if not provided.
     */
    DateUtility.prototype.formatDate = function (date, format) {
        if (format === void 0) { format = 'yyyy-MM-dd'; }
        if (date === null) {
            return null;
        }
        if (!(date instanceof Date)) {
            date = new Date(date);
        }
        var day = date.getDate();
        var month = date.getMonth();
        var year = date.getFullYear();
        var hour = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();
        var zero = '0';
        var str = format.replace('yyyy', String(year))
            .replace('MM', this.fillString(month + 1, 2, -1, zero))
            .replace('dd', this.fillString(day, 2, -1, zero))
            .replace('HH', this.fillString(hour, 2, -1, zero))
            .replace('mm', this.fillString(min, 2, -1, zero))
            .replace('ss', this.fillString(sec, 2, -1, zero));
        return str;
    };
    DateUtility.prototype.lastDayInMonth = function (year, month) {
        var date = new Date(year, month + 1, 1);
        date.setDate(date.getDate() - 1);
        return date.getDate();
    };
    DateUtility.prototype.addMonths = function (date, months) {
        var newDate = new Date(date);
        newDate.setMonth(newDate.getMonth() + months);
        return newDate;
    };
    DateUtility.prototype.isDate = function (date) {
        var format = /\d{4}-\d{2}-\d{2}/;
        return date.length === 10 && format.test(date);
    };
    DateUtility.prototype.getMonthName = function (month) {
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return months[month - 1];
    };
    DateUtility.prototype.getIterableNextMonth = function (year, month) {
        if (month === 12) {
            return this.getIterableCurrentMonth(year + 1, 1);
        }
        else {
            return this.getIterableCurrentMonth(year, month + 1);
        }
    };
    DateUtility.prototype.getIterablePreviousMonth = function (year, month) {
        if (month === 1) {
            return this.getIterableCurrentMonth(year - 1, 12);
        }
        else {
            return this.getIterableCurrentMonth(year, month - 1);
        }
    };
    DateUtility.prototype.getIterableCurrentMonth = function (year, month) {
        return {
            year: year,
            month: month,
            iterable: year * 100 + month
        };
    };
    return DateUtility;
}());
var DateUtils = new DateUtility();


/***/ }),

/***/ "./src/crosscommon/Utility.ts":
/*!************************************!*\
  !*** ./src/crosscommon/Utility.ts ***!
  \************************************/
/*! exports provided: Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
var Utility = /** @class */ (function () {
    function Utility() {
    }
    Utility.prototype.pad = function (value, fillChar, length, dir) {
        if (dir === void 0) { dir = -1; }
        var result = value + '';
        while (result.length < length) {
            if (dir === -1) {
                result = fillChar + result;
            }
            else {
                result = result + fillChar;
            }
        }
        return result;
    };
    Utility.prototype.hashId = function (prefix, length, baseDate) {
        if (prefix === void 0) { prefix = 'X'; }
        if (length === void 0) { length = 32; }
        if (baseDate === void 0) { baseDate = null; }
        // take date + time + random digits
        // total digits: 1 + 10 + 6 + '-' + (length - 18) >= 32
        var date = baseDate || new Date();
        var random = Math.floor(Math.random() * Math.pow(10, length - 17 - prefix.length));
        var datetimeString = "" + date.getFullYear() + this.pad(date.getMonth() + 1, '0', 2) + this.pad(date.getDate(), '0', 2);
        datetimeString += "" + this.pad(date.getHours(), '0', 2) + this.pad(date.getMinutes(), '0', 2) + this.pad(date.getSeconds(), '0', 2);
        var id = "" + prefix + datetimeString + "-" + random;
        return id;
    };
    Utility.prototype.hashIdForEntity = function (entity, fieldName) {
        var length = entity.metadata.fields.find(function (f) { return f.dbName === fieldName; }).size;
        return this.hashId(entity.metadata.prefix, length);
    };
    Utility.prototype.escapeRegExp = function (str) {
        return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    };
    Utility.prototype.replaceAll = function (str, find, replace) {
        return (str + '').replace(new RegExp(this.escapeRegExp(find), 'g'), replace);
    };
    Utility.prototype.parseSimpleQuoteForSQL = function (str) {
        return this.replaceAll(str, "'", "''");
    };
    Utility.prototype.entityToRawTableFields = function (entity) {
        var obj = {};
        if (!entity.metadata) {
            return entity;
        }
        entity.metadata.fields.filter(function (f) { return f.isTableField; }).forEach(function (f) {
            obj[f.dbName] = entity[f.dbName];
        });
        return obj;
    };
    Utility.prototype.getPKFromEntity = function (entity) {
        var pk = {};
        if (!entity.metadata) {
            return null;
        }
        entity.metadata.fields.filter(function (f) { return f.isPK; }).forEach(function (f) {
            pk[f.dbName] = entity[f.dbName];
        });
        return pk;
    };
    return Utility;
}());
var Utils = new Utility();


/***/ }),

/***/ "./src/crosscommon/entities/Account.ts":
/*!*********************************************!*\
  !*** ./src/crosscommon/entities/Account.ts ***!
  \*********************************************/
/*! exports provided: Account */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Account", function() { return Account; });
var Account = /** @class */ (function () {
    function Account(base) {
        var _this = this;
        this.metadata = {
            name: 'Account',
            namespace: 'Money',
            removeMeans: 'CANCELATION',
            authNeeded: false,
            displayOnMenu: true,
            prefix: 'acc',
            permissionsTemplate: 'permissions_all',
            tableName: 'account',
            viewName: 'viaccount',
            permissions: [
                'access',
                'add',
                'edit',
                'remove',
                'report',
                'export',
                'import'
            ],
            specialFeatures: [
                'HEADERS(Account,Accounts)',
                'TABLE_NAME(ACCOUNT)',
                'VIEW_NAME(VIACCOUNT)'
            ],
            fields: [
                {
                    templateId: 'string',
                    dbName: 'acc_id',
                    dbType: 'string',
                    isTableField: true,
                    isPK: true,
                    size: 16,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Id for the account',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'AccountId',
                    formControl: 'Textbox',
                    captureRequired: true,
                    appearsByDefaultOnGrid: true,
                    specialRules: [
                        'DUPLICITY_ADD'
                    ],
                    displayName: 'Account Id',
                    tooltip: '',
                    isRecordName: true,
                    gridOrder: 0,
                    orderOnNew: 0,
                    orderOnDetails: 0,
                    orderOnEdit: 0,
                    orderOnImport: 0,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'acc_name',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 100,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Name for the account, appears on balance',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Name',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Name',
                    tooltip: '',
                    isRecordName: true,
                    gridOrder: 1,
                    orderOnNew: 1,
                    orderOnDetails: 1,
                    orderOnEdit: 1,
                    orderOnImport: 1,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'integer',
                    dbName: 'acc_ctg_type',
                    dbType: 'integer',
                    isTableField: true,
                    isPK: false,
                    size: 4,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Type of account',
                    catalogId: 'ACCOUNT_TYPES',
                    originTable: '',
                    linkedField: '',
                    entName: 'AccountType',
                    formControl: 'Textbox',
                    captureRequired: true,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Account Type',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 2,
                    orderOnNew: 2,
                    orderOnDetails: 2,
                    orderOnEdit: 2,
                    orderOnImport: 2,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'acc_comment',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 200,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Comments for the account',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Comment',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Comment',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 3,
                    orderOnNew: 3,
                    orderOnDetails: 3,
                    orderOnEdit: 3,
                    orderOnImport: 3,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'integer',
                    dbName: 'acc_check_day',
                    dbType: 'integer',
                    isTableField: true,
                    isPK: false,
                    size: 4,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Check Day when the balance is fixed for the past month',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'CheckDay',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Check Day',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 4,
                    orderOnNew: 4,
                    orderOnDetails: 4,
                    orderOnEdit: 4,
                    orderOnImport: 4,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'double',
                    dbName: 'acc_average_min_balance',
                    dbType: 'double',
                    isTableField: true,
                    isPK: false,
                    size: 19,
                    decimal: 2,
                    minLength: 0,
                    allowNull: false,
                    default: '',
                    dbComment: 'Average minimum balance required for this type of account',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'AverageMinBalance',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Average Minimum Balance',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 5,
                    orderOnNew: 5,
                    orderOnDetails: 5,
                    orderOnEdit: 5,
                    orderOnImport: 5,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'integer',
                    dbName: 'acc_payment_day',
                    dbType: 'integer',
                    isTableField: true,
                    isPK: false,
                    size: 4,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Payment day, for credit accounts',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'PaymentDay',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Payment Day',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 6,
                    orderOnNew: 6,
                    orderOnDetails: 6,
                    orderOnEdit: 6,
                    orderOnImport: 6,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'acc_id_user',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 50,
                    decimal: 0,
                    minLength: 0,
                    allowNull: false,
                    default: '',
                    dbComment: 'User who this account belongs to',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'User',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'User',
                    tooltip: '',
                    isRecordName: true,
                    gridOrder: 7,
                    orderOnNew: 7,
                    orderOnDetails: 7,
                    orderOnEdit: 7,
                    orderOnImport: 7,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'creationDate',
                    dbName: 'acc_date_add',
                    dbType: 'datetime',
                    isTableField: true,
                    isPK: false,
                    size: 0,
                    decimal: 0,
                    minLength: 0,
                    allowNull: false,
                    default: '',
                    dbComment: 'Creation date of record in table',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'CreationDate',
                    formControl: 'Datetime',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [
                        'SAVE_DATE_AT_NEW'
                    ],
                    displayName: 'Creation Date',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 8,
                    orderOnNew: 8,
                    orderOnDetails: 8,
                    orderOnEdit: 8,
                    orderOnImport: 8,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'modificationDate',
                    dbName: 'acc_date_mod',
                    dbType: 'datetime',
                    isTableField: true,
                    isPK: false,
                    size: 0,
                    decimal: 0,
                    minLength: 0,
                    allowNull: false,
                    default: '',
                    dbComment: 'Last modification date of record in table',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'ModDate',
                    formControl: 'Datetime',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [
                        'SAVE_DATE_AT_NEW',
                        'SAVE_DATE_AT_EDIT'
                    ],
                    displayName: 'Last Modification Date',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 9,
                    orderOnNew: 9,
                    orderOnDetails: 9,
                    orderOnEdit: 9,
                    orderOnImport: 9,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'status',
                    dbName: 'acc_ctg_status',
                    dbType: 'integer',
                    isTableField: true,
                    isPK: false,
                    size: 4,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Record status in table',
                    catalogId: 'RECORD_STATUS',
                    originTable: 'CATALOG',
                    linkedField: '',
                    entName: 'Status',
                    formControl: 'Combobox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Status',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 10,
                    orderOnNew: 10,
                    orderOnDetails: 10,
                    orderOnEdit: 10,
                    orderOnImport: 10,
                    globalOrder: undefined,
                    value: null
                }, {
                    templateId: 'catalog',
                    dbName: 'acc_txt_type',
                    dbType: 'string',
                    isTableField: false,
                    isPK: false,
                    size: 250,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: 'Type of account',
                    catalogId: 'ACCOUNT_TYPES',
                    originTable: 'CATALOG',
                    linkedField: 'acc_ctg_type',
                    entName: 'TextAccountType',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Account Type',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 11,
                    orderOnNew: 11,
                    orderOnDetails: 11,
                    orderOnEdit: 11,
                    orderOnImport: 11,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'catalog',
                    dbName: 'acc_txt_status',
                    dbType: 'string',
                    isTableField: false,
                    isPK: false,
                    size: 250,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: 'Record status in table',
                    catalogId: 'RECORD_STATUS',
                    originTable: 'CATALOG',
                    linkedField: 'acc_ctg_status',
                    entName: 'TextStatus',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Status',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 12,
                    orderOnNew: 12,
                    orderOnDetails: 12,
                    orderOnEdit: 12,
                    orderOnImport: 12,
                    globalOrder: 0,
                    value: null
                }
            ],
            view: []
        };
        this.recordName = function () {
            return _this.metadata.fields.filter(function (f) { return f.isRecordName; }).map(function (f) {
                return f.dbName + " = " + _this[f.dbName];
            }).join(', ');
        };
        if (base !== undefined) {
            this.acc_id = base.acc_id;
            this.acc_name = base.acc_name;
            this.acc_ctg_type = base.acc_ctg_type;
            this.acc_comment = base.acc_comment;
            this.acc_check_day = base.acc_check_day;
            this.acc_average_min_balance = base.acc_average_min_balance;
            this.acc_payment_day = base.acc_payment_day;
            this.acc_id_user = base.acc_id_user;
            this.acc_date_add = (base.acc_date_add !== null) ? new Date(base.acc_date_add) : null;
            this.acc_date_mod = (base.acc_date_mod !== null) ? new Date(base.acc_date_mod) : null;
            this.acc_ctg_status = base.acc_ctg_status;
            this.acc_txt_type = base.acc_txt_type;
            this.acc_txt_status = base.acc_txt_status;
        }
    }
    return Account;
}());



/***/ }),

/***/ "./src/crosscommon/entities/Balance.ts":
/*!*********************************************!*\
  !*** ./src/crosscommon/entities/Balance.ts ***!
  \*********************************************/
/*! exports provided: Balance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Balance", function() { return Balance; });
var Balance = /** @class */ (function () {
    function Balance(base) {
        var _this = this;
        this.metadata = {
            name: 'Balance',
            namespace: 'Money',
            removeMeans: 'CANCELATION',
            authNeeded: false,
            displayOnMenu: true,
            prefix: 'bal',
            permissionsTemplate: 'permissions_all',
            tableName: 'balance',
            viewName: 'vibalance',
            permissions: [
                'access',
                'add',
                'edit',
                'remove',
                'report',
                'export',
                'import'
            ],
            specialFeatures: [
                'HEADERS(Balance,Balance)',
                'TABLE_NAME(BALANCE)',
                'VIEW_NAME(VIBALANCE)'
            ],
            fields: [
                {
                    templateId: 'integer',
                    dbName: 'bal_year',
                    dbType: 'integer',
                    isTableField: true,
                    isPK: true,
                    size: 4,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Year of the balance record',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Year',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [
                        'DUPLICITY_ADD(bal_year,bal_month,bal_ctg_currency,bal_id_account)'
                    ],
                    displayName: 'Year',
                    tooltip: '',
                    isRecordName: true,
                    gridOrder: 0,
                    orderOnNew: 0,
                    orderOnDetails: 0,
                    orderOnEdit: 0,
                    orderOnImport: 0,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'integer',
                    dbName: 'bal_month',
                    dbType: 'integer',
                    isTableField: true,
                    isPK: true,
                    size: 4,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Month of the balance record',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Month',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [
                        'DUPLICITY_ADD(bal_year,bal_month,bal_ctg_currency,bal_id_account)'
                    ],
                    displayName: 'Month',
                    tooltip: '',
                    isRecordName: true,
                    gridOrder: 1,
                    orderOnNew: 1,
                    orderOnDetails: 1,
                    orderOnEdit: 1,
                    orderOnImport: 1,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'integer',
                    dbName: 'bal_ctg_currency',
                    dbType: 'integer',
                    isTableField: true,
                    isPK: true,
                    size: 4,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Currency of the balance record',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Currency',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [
                        'DUPLICITY_ADD(bal_year,bal_month,bal_ctg_currency,bal_id_account)'
                    ],
                    displayName: 'Currency',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 2,
                    orderOnNew: 2,
                    orderOnDetails: 2,
                    orderOnEdit: 2,
                    orderOnImport: 2,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'bal_id_account',
                    dbType: 'string',
                    isTableField: true,
                    isPK: true,
                    size: 16,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Name for the account',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Account',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Account',
                    tooltip: '',
                    isRecordName: true,
                    gridOrder: 3,
                    orderOnNew: 3,
                    orderOnDetails: 3,
                    orderOnEdit: 3,
                    orderOnImport: 3,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'double',
                    dbName: 'bal_initial',
                    dbType: 'double',
                    isTableField: true,
                    isPK: false,
                    size: 19,
                    decimal: 2,
                    minLength: 0,
                    allowNull: false,
                    default: '',
                    dbComment: 'Initial balance of the record',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Initial',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Initial',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 4,
                    orderOnNew: 4,
                    orderOnDetails: 4,
                    orderOnEdit: 4,
                    orderOnImport: 4,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'double',
                    dbName: 'bal_charges',
                    dbType: 'double',
                    isTableField: true,
                    isPK: false,
                    size: 19,
                    decimal: 2,
                    minLength: 0,
                    allowNull: false,
                    default: '',
                    dbComment: 'Charges of the record',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Charges',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Charges',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 5,
                    orderOnNew: 5,
                    orderOnDetails: 5,
                    orderOnEdit: 5,
                    orderOnImport: 5,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'double',
                    dbName: 'bal_withdrawals',
                    dbType: 'double',
                    isTableField: true,
                    isPK: false,
                    size: 19,
                    decimal: 2,
                    minLength: 0,
                    allowNull: false,
                    default: '',
                    dbComment: 'Withdrawals of the record',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Withdrawals',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Withdrawals',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 6,
                    orderOnNew: 6,
                    orderOnDetails: 6,
                    orderOnEdit: 6,
                    orderOnImport: 6,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'double',
                    dbName: 'bal_final',
                    dbType: 'double',
                    isTableField: true,
                    isPK: false,
                    size: 19,
                    decimal: 2,
                    minLength: 0,
                    allowNull: false,
                    default: '',
                    dbComment: 'Final balance of the record',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Final',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Final',
                    tooltip: '',
                    isRecordName: true,
                    gridOrder: 7,
                    orderOnNew: 7,
                    orderOnDetails: 7,
                    orderOnEdit: 7,
                    orderOnImport: 7,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'bal_id_user',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 50,
                    decimal: 0,
                    minLength: 0,
                    allowNull: false,
                    default: '',
                    dbComment: 'User who this balance record belongs to',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'User',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'User',
                    tooltip: '',
                    isRecordName: true,
                    gridOrder: 8,
                    orderOnNew: 8,
                    orderOnDetails: 8,
                    orderOnEdit: 8,
                    orderOnImport: 8,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'creationDate',
                    dbName: 'bal_date_add',
                    dbType: 'datetime',
                    isTableField: true,
                    isPK: false,
                    size: 0,
                    decimal: 0,
                    minLength: 0,
                    allowNull: false,
                    default: '',
                    dbComment: 'Creation date of record in table',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'CreationDate',
                    formControl: 'Datetime',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [
                        'SAVE_DATE_AT_NEW'
                    ],
                    displayName: 'Creation Date',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 9,
                    orderOnNew: 9,
                    orderOnDetails: 9,
                    orderOnEdit: 9,
                    orderOnImport: 9,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'modificationDate',
                    dbName: 'bal_date_mod',
                    dbType: 'datetime',
                    isTableField: true,
                    isPK: false,
                    size: 0,
                    decimal: 0,
                    minLength: 0,
                    allowNull: false,
                    default: '',
                    dbComment: 'Last modification date of record in table',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'ModDate',
                    formControl: 'Datetime',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [
                        'SAVE_DATE_AT_NEW',
                        'SAVE_DATE_AT_EDIT'
                    ],
                    displayName: 'Last Modification Date',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 10,
                    orderOnNew: 10,
                    orderOnDetails: 10,
                    orderOnEdit: 10,
                    orderOnImport: 10,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'status',
                    dbName: 'bal_ctg_status',
                    dbType: 'integer',
                    isTableField: true,
                    isPK: false,
                    size: 4,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Record status in table',
                    catalogId: 'RECORD_STATUS',
                    originTable: 'CATALOG',
                    linkedField: '',
                    entName: 'Status',
                    formControl: 'Combobox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Status',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 11,
                    orderOnNew: 11,
                    orderOnDetails: 11,
                    orderOnEdit: 11,
                    orderOnImport: 11,
                    globalOrder: undefined,
                    value: null
                }, {
                    templateId: 'table',
                    dbName: 'bal_txt_account',
                    dbType: 'string',
                    isTableField: false,
                    isPK: false,
                    size: 100,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: '',
                    catalogId: '',
                    originTable: 'ACCOUNT',
                    linkedField: 'ACCOUNT1.acc_name',
                    entName: '',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: '',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 12,
                    orderOnNew: 12,
                    orderOnDetails: 12,
                    orderOnEdit: 12,
                    orderOnImport: 12,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'catalog',
                    dbName: 'bal_txt_currency',
                    dbType: 'string',
                    isTableField: false,
                    isPK: false,
                    size: 250,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: 'Currency of the balance record',
                    catalogId: '',
                    originTable: 'CATALOG',
                    linkedField: 'bal_ctg_currency',
                    entName: 'TextCurrency',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Currency',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 13,
                    orderOnNew: 13,
                    orderOnDetails: 13,
                    orderOnEdit: 13,
                    orderOnImport: 13,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'catalog',
                    dbName: 'bal_txt_status',
                    dbType: 'string',
                    isTableField: false,
                    isPK: false,
                    size: 250,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: 'Record status in table',
                    catalogId: 'RECORD_STATUS',
                    originTable: 'CATALOG',
                    linkedField: 'bal_ctg_status',
                    entName: 'TextStatus',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Status',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 14,
                    orderOnNew: 14,
                    orderOnDetails: 14,
                    orderOnEdit: 14,
                    orderOnImport: 14,
                    globalOrder: 0,
                    value: null
                }
            ],
            view: [
                {
                    joinType: 'INNER',
                    joinTable: 'ACCOUNT ACCOUNT1',
                    joinStatement: 'bal_id_account = ACCOUNT1.acc_id and bal_id_user = ACCOUNT1.acc_id_user'
                }
            ]
        };
        this.recordName = function () {
            return _this.metadata.fields.filter(function (f) { return f.isRecordName; }).map(function (f) {
                return f.dbName + " = " + _this[f.dbName];
            }).join(', ');
        };
        if (base !== undefined) {
            this.bal_year = base.bal_year;
            this.bal_month = base.bal_month;
            this.bal_ctg_currency = base.bal_ctg_currency;
            this.bal_id_account = base.bal_id_account;
            this.bal_initial = base.bal_initial;
            this.bal_charges = base.bal_charges;
            this.bal_withdrawals = base.bal_withdrawals;
            this.bal_final = base.bal_final;
            this.bal_id_user = base.bal_id_user;
            this.bal_date_add = (base.bal_date_add !== null) ? new Date(base.bal_date_add) : null;
            this.bal_date_mod = (base.bal_date_mod !== null) ? new Date(base.bal_date_mod) : null;
            this.bal_ctg_status = base.bal_ctg_status;
            this.bal_txt_account = base.bal_txt_account;
            this.bal_txt_currency = base.bal_txt_currency;
            this.bal_txt_status = base.bal_txt_status;
        }
    }
    return Balance;
}());



/***/ }),

/***/ "./src/crosscommon/entities/Category.ts":
/*!**********************************************!*\
  !*** ./src/crosscommon/entities/Category.ts ***!
  \**********************************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
var Category = /** @class */ (function () {
    function Category(base) {
        var _this = this;
        this.metadata = {
            name: 'Category',
            namespace: 'Money',
            removeMeans: 'CANCELATION',
            authNeeded: false,
            displayOnMenu: true,
            prefix: 'mct',
            permissionsTemplate: 'permissions_all',
            tableName: 'category',
            viewName: 'vicategory',
            permissions: [
                'access',
                'add',
                'edit',
                'remove',
                'report',
                'export',
                'import'
            ],
            specialFeatures: [
                'HEADERS(Category,Categories)',
                'TABLE_NAME(CATEGORY)',
                'VIEW_NAME(VICATEGORY)'
            ],
            fields: [
                {
                    templateId: 'string',
                    dbName: 'mct_id',
                    dbType: 'string',
                    isTableField: true,
                    isPK: true,
                    size: 32,
                    decimal: 0,
                    minLength: 32,
                    allowNull: false,
                    default: '',
                    dbComment: 'Id for the category',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'CategoryId',
                    formControl: 'Textbox',
                    captureRequired: true,
                    appearsByDefaultOnGrid: true,
                    specialRules: [
                        'DUPLICITY_ADD'
                    ],
                    displayName: 'Category Id',
                    tooltip: '',
                    isRecordName: true,
                    gridOrder: 0,
                    orderOnNew: 0,
                    orderOnDetails: 0,
                    orderOnEdit: 0,
                    orderOnImport: 0,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'mct_name',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 100,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Name for the category',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Name',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Name',
                    tooltip: '',
                    isRecordName: true,
                    gridOrder: 1,
                    orderOnNew: 1,
                    orderOnDetails: 1,
                    orderOnEdit: 1,
                    orderOnImport: 1,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'mct_id_user',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 50,
                    decimal: 0,
                    minLength: 0,
                    allowNull: false,
                    default: '',
                    dbComment: 'User who this category belongs to',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'User',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'User',
                    tooltip: '',
                    isRecordName: true,
                    gridOrder: 2,
                    orderOnNew: 2,
                    orderOnDetails: 2,
                    orderOnEdit: 2,
                    orderOnImport: 2,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'creationDate',
                    dbName: 'mct_date_add',
                    dbType: 'datetime',
                    isTableField: true,
                    isPK: false,
                    size: 0,
                    decimal: 0,
                    minLength: 0,
                    allowNull: false,
                    default: '',
                    dbComment: 'Creation date of record in table',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'CreationDate',
                    formControl: 'Datetime',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [
                        'SAVE_DATE_AT_NEW'
                    ],
                    displayName: 'Creation Date',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 3,
                    orderOnNew: 3,
                    orderOnDetails: 3,
                    orderOnEdit: 3,
                    orderOnImport: 3,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'modificationDate',
                    dbName: 'mct_date_mod',
                    dbType: 'datetime',
                    isTableField: true,
                    isPK: false,
                    size: 0,
                    decimal: 0,
                    minLength: 0,
                    allowNull: false,
                    default: '',
                    dbComment: 'Last modification date of record in table',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'ModDate',
                    formControl: 'Datetime',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [
                        'SAVE_DATE_AT_NEW',
                        'SAVE_DATE_AT_EDIT'
                    ],
                    displayName: 'Last Modification Date',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 4,
                    orderOnNew: 4,
                    orderOnDetails: 4,
                    orderOnEdit: 4,
                    orderOnImport: 4,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'status',
                    dbName: 'mct_ctg_status',
                    dbType: 'integer',
                    isTableField: true,
                    isPK: false,
                    size: 4,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Record status in table',
                    catalogId: 'RECORD_STATUS',
                    originTable: 'CATALOG',
                    linkedField: '',
                    entName: 'Status',
                    formControl: 'Combobox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Status',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 5,
                    orderOnNew: 5,
                    orderOnDetails: 5,
                    orderOnEdit: 5,
                    orderOnImport: 5,
                    globalOrder: undefined,
                    value: null
                }, {
                    templateId: 'catalog',
                    dbName: 'mct_txt_status',
                    dbType: 'string',
                    isTableField: false,
                    isPK: false,
                    size: 250,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: 'Record status in table',
                    catalogId: 'RECORD_STATUS',
                    originTable: 'CATALOG',
                    linkedField: 'mct_ctg_status',
                    entName: 'TextStatus',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Status',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 6,
                    orderOnNew: 6,
                    orderOnDetails: 6,
                    orderOnEdit: 6,
                    orderOnImport: 6,
                    globalOrder: 0,
                    value: null
                }
            ],
            view: []
        };
        this.recordName = function () {
            return _this.metadata.fields.filter(function (f) { return f.isRecordName; }).map(function (f) {
                return f.dbName + " = " + _this[f.dbName];
            }).join(', ');
        };
        if (base !== undefined) {
            this.mct_id = base.mct_id;
            this.mct_name = base.mct_name;
            this.mct_id_user = base.mct_id_user;
            this.mct_date_add = (base.mct_date_add !== null) ? new Date(base.mct_date_add) : null;
            this.mct_date_mod = (base.mct_date_mod !== null) ? new Date(base.mct_date_mod) : null;
            this.mct_ctg_status = base.mct_ctg_status;
            this.mct_txt_status = base.mct_txt_status;
        }
    }
    return Category;
}());



/***/ }),

/***/ "./src/crosscommon/entities/Entry.ts":
/*!*******************************************!*\
  !*** ./src/crosscommon/entities/Entry.ts ***!
  \*******************************************/
/*! exports provided: Entry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Entry", function() { return Entry; });
var Entry = /** @class */ (function () {
    function Entry(base) {
        var _this = this;
        this.metadata = {
            name: 'Entry',
            namespace: 'Money',
            removeMeans: 'CANCELATION',
            authNeeded: false,
            displayOnMenu: true,
            prefix: 'ent',
            permissionsTemplate: 'permissions_all',
            tableName: 'entry',
            viewName: 'vientry',
            permissions: [
                'access',
                'add',
                'edit',
                'remove',
                'report',
                'export',
                'import'
            ],
            specialFeatures: [
                'HEADERS(Entry,Entries)',
                'TABLE_NAME(ENTRY)',
                'VIEW_NAME(VIENTRY)'
            ],
            fields: [
                {
                    templateId: 'string',
                    dbName: 'ent_id',
                    dbType: 'string',
                    isTableField: true,
                    isPK: true,
                    size: 32,
                    decimal: 0,
                    minLength: 32,
                    allowNull: false,
                    default: '',
                    dbComment: 'Id for the entry movement',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'MovementId',
                    formControl: 'Textbox',
                    captureRequired: true,
                    appearsByDefaultOnGrid: true,
                    specialRules: [
                        'DUPLICITY_ADD(ent_sequential)'
                    ],
                    displayName: 'Movement Id',
                    tooltip: '',
                    isRecordName: true,
                    gridOrder: 0,
                    orderOnNew: 0,
                    orderOnDetails: 0,
                    orderOnEdit: 0,
                    orderOnImport: 0,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'integer',
                    dbName: 'ent_sequential',
                    dbType: 'integer',
                    isTableField: true,
                    isPK: true,
                    size: 4,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Sequential for the entry inside the same movement',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Sequential',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [
                        'DUPLICITY_ADD(ent_id)'
                    ],
                    displayName: 'Sequential',
                    tooltip: '',
                    isRecordName: true,
                    gridOrder: 1,
                    orderOnNew: 1,
                    orderOnDetails: 1,
                    orderOnEdit: 1,
                    orderOnImport: 1,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'datetime',
                    dbName: 'ent_date',
                    dbType: 'datetime',
                    isTableField: true,
                    isPK: false,
                    size: 16,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: 'Date when the entry was made',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'ApplicationDate',
                    formControl: 'datetime',
                    captureRequired: true,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Date of Application',
                    tooltip: '',
                    isRecordName: true,
                    gridOrder: 2,
                    orderOnNew: 2,
                    orderOnDetails: 2,
                    orderOnEdit: 2,
                    orderOnImport: 2,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'integer',
                    dbName: 'ent_ctg_currency',
                    dbType: 'integer',
                    isTableField: true,
                    isPK: true,
                    size: 4,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Currency of the entry',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Currency',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Currency',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 3,
                    orderOnNew: 3,
                    orderOnDetails: 3,
                    orderOnEdit: 3,
                    orderOnImport: 3,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'double',
                    dbName: 'ent_amount',
                    dbType: 'double',
                    isTableField: true,
                    isPK: false,
                    size: 19,
                    decimal: 2,
                    minLength: 0,
                    allowNull: false,
                    default: '',
                    dbComment: 'Amount of the entry',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Amount',
                    formControl: 'Textbox',
                    captureRequired: true,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Amount',
                    tooltip: '',
                    isRecordName: true,
                    gridOrder: 4,
                    orderOnNew: 4,
                    orderOnDetails: 4,
                    orderOnEdit: 4,
                    orderOnImport: 4,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'ent_id_account',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 16,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Name for the account, appears on balance',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Account',
                    formControl: 'Textbox',
                    captureRequired: true,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Account',
                    tooltip: '',
                    isRecordName: true,
                    gridOrder: 5,
                    orderOnNew: 5,
                    orderOnDetails: 5,
                    orderOnEdit: 5,
                    orderOnImport: 5,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'integer',
                    dbName: 'ent_ctg_type',
                    dbType: 'integer',
                    isTableField: true,
                    isPK: false,
                    size: 4,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Type of Movement',
                    catalogId: 'MOVEMENT_TYPES',
                    originTable: '',
                    linkedField: '',
                    entName: 'MovementType',
                    formControl: 'Textbox',
                    captureRequired: true,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Movement Type',
                    tooltip: '',
                    isRecordName: true,
                    gridOrder: 6,
                    orderOnNew: 6,
                    orderOnDetails: 6,
                    orderOnEdit: 6,
                    orderOnImport: 6,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'ent_budget',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 50,
                    decimal: 0,
                    minLength: 1,
                    allowNull: true,
                    default: '',
                    dbComment: 'Monthly Budget where this movement sums up',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Budget',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Budget',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 7,
                    orderOnNew: 7,
                    orderOnDetails: 7,
                    orderOnEdit: 7,
                    orderOnImport: 7,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'ent_id_category',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 32,
                    decimal: 0,
                    minLength: 32,
                    allowNull: false,
                    default: '',
                    dbComment: 'Category for this movement, helps grouping movements',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Category',
                    formControl: 'Textbox',
                    captureRequired: true,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Category',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 8,
                    orderOnNew: 8,
                    orderOnDetails: 8,
                    orderOnEdit: 8,
                    orderOnImport: 8,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'ent_id_place',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 32,
                    decimal: 0,
                    minLength: 32,
                    allowNull: false,
                    default: '',
                    dbComment: 'Place where this movement was done, helps tracking movements',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Place',
                    formControl: 'Textbox',
                    captureRequired: true,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Place',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 9,
                    orderOnNew: 9,
                    orderOnDetails: 9,
                    orderOnEdit: 9,
                    orderOnImport: 9,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'ent_desc',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 200,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Description of the movement, something to remember and track the movement',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Description',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Description',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 10,
                    orderOnNew: 10,
                    orderOnDetails: 10,
                    orderOnEdit: 10,
                    orderOnImport: 10,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'ent_notes',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 200,
                    decimal: 0,
                    minLength: 1,
                    allowNull: true,
                    default: '',
                    dbComment: 'Notes to help tracking, grouping and identifying trends for movements',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Notes',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Notes',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 11,
                    orderOnNew: 11,
                    orderOnDetails: 11,
                    orderOnEdit: 11,
                    orderOnImport: 11,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'ent_id_user',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 50,
                    decimal: 0,
                    minLength: 0,
                    allowNull: false,
                    default: '',
                    dbComment: 'User who this entry belongs to',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'User',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'User',
                    tooltip: '',
                    isRecordName: true,
                    gridOrder: 12,
                    orderOnNew: 12,
                    orderOnDetails: 12,
                    orderOnEdit: 12,
                    orderOnImport: 12,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'creationDate',
                    dbName: 'ent_date_add',
                    dbType: 'datetime',
                    isTableField: true,
                    isPK: false,
                    size: 0,
                    decimal: 0,
                    minLength: 0,
                    allowNull: false,
                    default: '',
                    dbComment: 'Creation date of record in table',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'CreationDate',
                    formControl: 'Datetime',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [
                        'SAVE_DATE_AT_NEW'
                    ],
                    displayName: 'Creation Date',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 13,
                    orderOnNew: 13,
                    orderOnDetails: 13,
                    orderOnEdit: 13,
                    orderOnImport: 13,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'modificationDate',
                    dbName: 'ent_date_mod',
                    dbType: 'datetime',
                    isTableField: true,
                    isPK: false,
                    size: 0,
                    decimal: 0,
                    minLength: 0,
                    allowNull: false,
                    default: '',
                    dbComment: 'Last modification date of record in table',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'ModDate',
                    formControl: 'Datetime',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [
                        'SAVE_DATE_AT_NEW',
                        'SAVE_DATE_AT_EDIT'
                    ],
                    displayName: 'Last Modification Date',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 14,
                    orderOnNew: 14,
                    orderOnDetails: 14,
                    orderOnEdit: 14,
                    orderOnImport: 14,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'status',
                    dbName: 'ent_ctg_status',
                    dbType: 'integer',
                    isTableField: true,
                    isPK: false,
                    size: 4,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Record status in table',
                    catalogId: 'RECORD_STATUS',
                    originTable: 'CATALOG',
                    linkedField: '',
                    entName: 'Status',
                    formControl: 'Combobox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Status',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 15,
                    orderOnNew: 15,
                    orderOnDetails: 15,
                    orderOnEdit: 15,
                    orderOnImport: 15,
                    globalOrder: undefined,
                    value: null
                }, {
                    templateId: 'catalog',
                    dbName: 'ent_txt_type',
                    dbType: 'string',
                    isTableField: false,
                    isPK: false,
                    size: 250,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: 'Type of Movement',
                    catalogId: 'MOVEMENT_TYPES',
                    originTable: 'CATALOG',
                    linkedField: 'ent_ctg_type',
                    entName: 'TextMovementType',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Movement Type',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 16,
                    orderOnNew: 16,
                    orderOnDetails: 16,
                    orderOnEdit: 16,
                    orderOnImport: 16,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'catalog',
                    dbName: 'ent_txt_currency',
                    dbType: 'string',
                    isTableField: false,
                    isPK: false,
                    size: 250,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: 'Currency of the entry',
                    catalogId: '',
                    originTable: 'CATALOG',
                    linkedField: 'ent_ctg_currency',
                    entName: 'TextCurrency',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Currency',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 17,
                    orderOnNew: 17,
                    orderOnDetails: 17,
                    orderOnEdit: 17,
                    orderOnImport: 17,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'table',
                    dbName: 'ent_txt_account',
                    dbType: 'string',
                    isTableField: false,
                    isPK: false,
                    size: 100,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: '',
                    catalogId: '',
                    originTable: 'ACCOUNT',
                    linkedField: 'ACCOUNT1.acc_name',
                    entName: '',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: '',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 18,
                    orderOnNew: 18,
                    orderOnDetails: 18,
                    orderOnEdit: 18,
                    orderOnImport: 18,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'table',
                    dbName: 'ent_txt_category',
                    dbType: 'string',
                    isTableField: false,
                    isPK: false,
                    size: 100,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: '',
                    catalogId: '',
                    originTable: 'CATEGORY',
                    linkedField: 'mct_name',
                    entName: '',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: '',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 19,
                    orderOnNew: 19,
                    orderOnDetails: 19,
                    orderOnEdit: 19,
                    orderOnImport: 19,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'table',
                    dbName: 'ent_txt_place',
                    dbType: 'string',
                    isTableField: false,
                    isPK: false,
                    size: 100,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: '',
                    catalogId: '',
                    originTable: 'PLACE',
                    linkedField: 'mpl_name',
                    entName: '',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: '',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 20,
                    orderOnNew: 20,
                    orderOnDetails: 20,
                    orderOnEdit: 20,
                    orderOnImport: 20,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'catalog',
                    dbName: 'ent_txt_status',
                    dbType: 'string',
                    isTableField: false,
                    isPK: false,
                    size: 250,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: 'Record status in table',
                    catalogId: 'RECORD_STATUS',
                    originTable: 'CATALOG',
                    linkedField: 'ent_ctg_status',
                    entName: 'TextStatus',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Status',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 21,
                    orderOnNew: 21,
                    orderOnDetails: 21,
                    orderOnEdit: 21,
                    orderOnImport: 21,
                    globalOrder: 0,
                    value: null
                }
            ],
            view: [
                {
                    joinType: 'INNER',
                    joinTable: 'ACCOUNT ACCOUNT1',
                    joinStatement: 'ent_id_account = ACCOUNT1.acc_id and ent_id_user = ACCOUNT1.acc_id_user'
                }, {
                    joinType: 'LEFT',
                    joinTable: 'CATEGORY',
                    joinStatement: 'ent_id_category = mct_id and ent_id_user = mct_id_user'
                }, {
                    joinType: 'LEFT',
                    joinTable: 'PLACE',
                    joinStatement: 'ent_id_place = mpl_id and ent_id_user = mpl_id_user'
                }
            ]
        };
        this.recordName = function () {
            return _this.metadata.fields.filter(function (f) { return f.isRecordName; }).map(function (f) {
                return f.dbName + " = " + _this[f.dbName];
            }).join(', ');
        };
        if (base !== undefined) {
            this.ent_id = base.ent_id;
            this.ent_sequential = base.ent_sequential;
            this.ent_date = (base.ent_date !== null) ? new Date(base.ent_date) : null;
            this.ent_ctg_currency = base.ent_ctg_currency;
            this.ent_amount = base.ent_amount;
            this.ent_id_account = base.ent_id_account;
            this.ent_ctg_type = base.ent_ctg_type;
            this.ent_budget = base.ent_budget;
            this.ent_id_category = base.ent_id_category;
            this.ent_id_place = base.ent_id_place;
            this.ent_desc = base.ent_desc;
            this.ent_notes = base.ent_notes;
            this.ent_id_user = base.ent_id_user;
            this.ent_date_add = (base.ent_date_add !== null) ? new Date(base.ent_date_add) : null;
            this.ent_date_mod = (base.ent_date_mod !== null) ? new Date(base.ent_date_mod) : null;
            this.ent_ctg_status = base.ent_ctg_status;
            this.ent_txt_type = base.ent_txt_type;
            this.ent_txt_currency = base.ent_txt_currency;
            this.ent_txt_account = base.ent_txt_account;
            this.ent_txt_category = base.ent_txt_category;
            this.ent_txt_place = base.ent_txt_place;
            this.ent_txt_status = base.ent_txt_status;
        }
    }
    return Entry;
}());



/***/ }),

/***/ "./src/crosscommon/entities/LastTime.ts":
/*!**********************************************!*\
  !*** ./src/crosscommon/entities/LastTime.ts ***!
  \**********************************************/
/*! exports provided: LastTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LastTime", function() { return LastTime; });
var LastTime = /** @class */ (function () {
    function LastTime(base) {
        var _this = this;
        this.metadata = {
            name: 'LastTime',
            namespace: 'LastTimeApp',
            removeMeans: 'CANCELATION',
            authNeeded: false,
            displayOnMenu: true,
            prefix: 'lst',
            permissionsTemplate: 'permissions_all',
            tableName: 'lasttime',
            viewName: 'vilasttime',
            permissions: [
                'access',
                'add',
                'edit',
                'remove',
                'report',
                'export',
                'import'
            ],
            specialFeatures: [
                'HEADERS(LastTime,LastTime items)',
                'TABLE_NAME(LASTTIME)',
                'VIEW_NAME(VILASTTIME)'
            ],
            fields: [
                {
                    templateId: 'string',
                    dbName: 'lst_id',
                    dbType: 'string',
                    isTableField: true,
                    isPK: true,
                    size: 32,
                    decimal: 0,
                    minLength: 32,
                    allowNull: false,
                    default: '',
                    dbComment: 'Id for the last time record',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'LastTimeId',
                    formControl: 'Textbox',
                    captureRequired: true,
                    appearsByDefaultOnGrid: true,
                    specialRules: [
                        'DUPLICITY_ADD'
                    ],
                    displayName: 'Last Time Id',
                    tooltip: '',
                    isRecordName: true,
                    gridOrder: 0,
                    orderOnNew: 0,
                    orderOnDetails: 0,
                    orderOnEdit: 0,
                    orderOnImport: 0,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'lst_name',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 500,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Name or description for the last time thing',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Name',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Name',
                    tooltip: '',
                    isRecordName: true,
                    gridOrder: 1,
                    orderOnNew: 1,
                    orderOnDetails: 1,
                    orderOnEdit: 1,
                    orderOnImport: 1,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'lst_value',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 10,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Value of the last time user does this thing',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Value',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Value',
                    tooltip: '',
                    isRecordName: true,
                    gridOrder: 2,
                    orderOnNew: 2,
                    orderOnDetails: 2,
                    orderOnEdit: 2,
                    orderOnImport: 2,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'integer',
                    dbName: 'lst_validity',
                    dbType: 'integer',
                    isTableField: true,
                    isPK: false,
                    size: 4,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Days to consider this value as valid',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Validity',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Validity',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 3,
                    orderOnNew: 3,
                    orderOnDetails: 3,
                    orderOnEdit: 3,
                    orderOnImport: 3,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'lst_tags',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 200,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Tagos for grouping and filtering',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Tags',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Tags',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 4,
                    orderOnNew: 4,
                    orderOnDetails: 4,
                    orderOnEdit: 4,
                    orderOnImport: 4,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'lst_notes',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 1000,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Any description or notes for the last time thing',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Notes',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Notes',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 5,
                    orderOnNew: 5,
                    orderOnDetails: 5,
                    orderOnEdit: 5,
                    orderOnImport: 5,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'lst_id_user',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 50,
                    decimal: 0,
                    minLength: 0,
                    allowNull: false,
                    default: '',
                    dbComment: 'User who this last time record belongs to',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'User',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'User',
                    tooltip: '',
                    isRecordName: true,
                    gridOrder: 6,
                    orderOnNew: 6,
                    orderOnDetails: 6,
                    orderOnEdit: 6,
                    orderOnImport: 6,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'creationDate',
                    dbName: 'lst_date_add',
                    dbType: 'datetime',
                    isTableField: true,
                    isPK: false,
                    size: 0,
                    decimal: 0,
                    minLength: 0,
                    allowNull: false,
                    default: '',
                    dbComment: 'Creation date of record in table',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'CreationDate',
                    formControl: 'Datetime',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [
                        'SAVE_DATE_AT_NEW'
                    ],
                    displayName: 'Creation Date',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 7,
                    orderOnNew: 7,
                    orderOnDetails: 7,
                    orderOnEdit: 7,
                    orderOnImport: 7,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'modificationDate',
                    dbName: 'lst_date_mod',
                    dbType: 'datetime',
                    isTableField: true,
                    isPK: false,
                    size: 0,
                    decimal: 0,
                    minLength: 0,
                    allowNull: false,
                    default: '',
                    dbComment: 'Last modification date of record in table',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'ModDate',
                    formControl: 'Datetime',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [
                        'SAVE_DATE_AT_NEW',
                        'SAVE_DATE_AT_EDIT'
                    ],
                    displayName: 'Last Modification Date',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 8,
                    orderOnNew: 8,
                    orderOnDetails: 8,
                    orderOnEdit: 8,
                    orderOnImport: 8,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'status',
                    dbName: 'lst_ctg_status',
                    dbType: 'integer',
                    isTableField: true,
                    isPK: false,
                    size: 4,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Record status in table',
                    catalogId: 'RECORD_STATUS',
                    originTable: 'CATALOG',
                    linkedField: '',
                    entName: 'Status',
                    formControl: 'Combobox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Status',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 9,
                    orderOnNew: 9,
                    orderOnDetails: 9,
                    orderOnEdit: 9,
                    orderOnImport: 9,
                    globalOrder: undefined,
                    value: null
                }, {
                    templateId: 'catalog',
                    dbName: 'lst_txt_status',
                    dbType: 'string',
                    isTableField: false,
                    isPK: false,
                    size: 250,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: 'Record status in table',
                    catalogId: 'RECORD_STATUS',
                    originTable: 'CATALOG',
                    linkedField: 'lst_ctg_status',
                    entName: 'TextStatus',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Status',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 10,
                    orderOnNew: 10,
                    orderOnDetails: 10,
                    orderOnEdit: 10,
                    orderOnImport: 10,
                    globalOrder: 0,
                    value: null
                }
            ],
            view: []
        };
        this.recordName = function () {
            return _this.metadata.fields.filter(function (f) { return f.isRecordName; }).map(function (f) {
                return f.dbName + " = " + _this[f.dbName];
            }).join(', ');
        };
        if (base !== undefined) {
            this.lst_id = base.lst_id;
            this.lst_name = base.lst_name;
            this.lst_value = base.lst_value;
            this.lst_validity = base.lst_validity;
            this.lst_tags = base.lst_tags;
            this.lst_notes = base.lst_notes;
            this.lst_id_user = base.lst_id_user;
            this.lst_date_add = (base.lst_date_add !== null) ? new Date(base.lst_date_add) : null;
            this.lst_date_mod = (base.lst_date_mod !== null) ? new Date(base.lst_date_mod) : null;
            this.lst_ctg_status = base.lst_ctg_status;
            this.lst_txt_status = base.lst_txt_status;
        }
    }
    return LastTime;
}());



/***/ }),

/***/ "./src/crosscommon/entities/Movement.ts":
/*!**********************************************!*\
  !*** ./src/crosscommon/entities/Movement.ts ***!
  \**********************************************/
/*! exports provided: Movement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Movement", function() { return Movement; });
var Movement = /** @class */ (function () {
    function Movement(base) {
        var _this = this;
        this.metadata = {
            name: 'Movement',
            namespace: 'Money',
            removeMeans: 'CANCELATION',
            authNeeded: false,
            displayOnMenu: true,
            prefix: 'mov',
            permissionsTemplate: 'permissions_all',
            tableName: 'movement',
            viewName: 'vimovement',
            permissions: [
                'access',
                'add',
                'edit',
                'remove',
                'report',
                'export',
                'import'
            ],
            specialFeatures: [
                'HEADERS(Movement,Movements)',
                'TABLE_NAME(MOVEMENT)',
                'VIEW_NAME(VIMOVEMENT)'
            ],
            fields: [
                {
                    templateId: 'string',
                    dbName: 'mov_id',
                    dbType: 'string',
                    isTableField: true,
                    isPK: true,
                    size: 32,
                    decimal: 0,
                    minLength: 32,
                    allowNull: false,
                    default: '',
                    dbComment: 'Id for the movement',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'MovementId',
                    formControl: 'Textbox',
                    captureRequired: true,
                    appearsByDefaultOnGrid: true,
                    specialRules: [
                        'DUPLICITY_ADD'
                    ],
                    displayName: 'Movement Id',
                    tooltip: '',
                    isRecordName: true,
                    gridOrder: 0,
                    orderOnNew: 0,
                    orderOnDetails: 0,
                    orderOnEdit: 0,
                    orderOnImport: 0,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'datetime',
                    dbName: 'mov_date',
                    dbType: 'datetime',
                    isTableField: true,
                    isPK: false,
                    size: 16,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: 'Date when the movement was made',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'ApplicationDate',
                    formControl: 'datetime',
                    captureRequired: true,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Date of Application',
                    tooltip: '',
                    isRecordName: true,
                    gridOrder: 1,
                    orderOnNew: 1,
                    orderOnDetails: 1,
                    orderOnEdit: 1,
                    orderOnImport: 1,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'integer',
                    dbName: 'mov_ctg_currency',
                    dbType: 'integer',
                    isTableField: true,
                    isPK: false,
                    size: 4,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Currency of the movement',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Currency',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Currency',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 2,
                    orderOnNew: 2,
                    orderOnDetails: 2,
                    orderOnEdit: 2,
                    orderOnImport: 2,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'double',
                    dbName: 'mov_amount',
                    dbType: 'double',
                    isTableField: true,
                    isPK: false,
                    size: 19,
                    decimal: 2,
                    minLength: 0,
                    allowNull: false,
                    default: '',
                    dbComment: 'Amount of the movement',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Amount',
                    formControl: 'Textbox',
                    captureRequired: true,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Amount',
                    tooltip: '',
                    isRecordName: true,
                    gridOrder: 3,
                    orderOnNew: 3,
                    orderOnDetails: 3,
                    orderOnEdit: 3,
                    orderOnImport: 3,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'mov_id_account',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 16,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Name for the account, appears on balance',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Account',
                    formControl: 'Textbox',
                    captureRequired: true,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Account',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 4,
                    orderOnNew: 4,
                    orderOnDetails: 4,
                    orderOnEdit: 4,
                    orderOnImport: 4,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'mov_id_account_to',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 16,
                    decimal: 0,
                    minLength: 1,
                    allowNull: true,
                    default: '',
                    dbComment: 'Name for the destination account when doing a transfer, appears on balance',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'AccountTo',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Destination Account',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 5,
                    orderOnNew: 5,
                    orderOnDetails: 5,
                    orderOnEdit: 5,
                    orderOnImport: 5,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'integer',
                    dbName: 'mov_ctg_type',
                    dbType: 'integer',
                    isTableField: true,
                    isPK: false,
                    size: 4,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Type of Movement',
                    catalogId: 'MOVEMENT_TYPES',
                    originTable: '',
                    linkedField: '',
                    entName: 'MovementType',
                    formControl: 'Textbox',
                    captureRequired: true,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Movement Type',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 6,
                    orderOnNew: 6,
                    orderOnDetails: 6,
                    orderOnEdit: 6,
                    orderOnImport: 6,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'mov_budget',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 50,
                    decimal: 0,
                    minLength: 1,
                    allowNull: true,
                    default: '',
                    dbComment: 'Monthly Budget where this movement sums up',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Budget',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Budget',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 7,
                    orderOnNew: 7,
                    orderOnDetails: 7,
                    orderOnEdit: 7,
                    orderOnImport: 7,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'mov_id_category',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 32,
                    decimal: 0,
                    minLength: 32,
                    allowNull: false,
                    default: '',
                    dbComment: 'Category for this movement, helps grouping movements',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Category',
                    formControl: 'Textbox',
                    captureRequired: true,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Category',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 8,
                    orderOnNew: 8,
                    orderOnDetails: 8,
                    orderOnEdit: 8,
                    orderOnImport: 8,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'mov_id_place',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 32,
                    decimal: 0,
                    minLength: 32,
                    allowNull: false,
                    default: '',
                    dbComment: 'Place where this movement was done, helps tracking movements',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Place',
                    formControl: 'Textbox',
                    captureRequired: true,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Place',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 9,
                    orderOnNew: 9,
                    orderOnDetails: 9,
                    orderOnEdit: 9,
                    orderOnImport: 9,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'mov_desc',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 200,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Description of the movement, something to remember and track the movement',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Description',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Description',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 10,
                    orderOnNew: 10,
                    orderOnDetails: 10,
                    orderOnEdit: 10,
                    orderOnImport: 10,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'mov_notes',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 200,
                    decimal: 0,
                    minLength: 1,
                    allowNull: true,
                    default: '',
                    dbComment: 'Notes for movements',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Notes',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Notes',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 11,
                    orderOnNew: 11,
                    orderOnDetails: 11,
                    orderOnEdit: 11,
                    orderOnImport: 11,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'mov_id_user',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 50,
                    decimal: 0,
                    minLength: 0,
                    allowNull: false,
                    default: '',
                    dbComment: 'User who this movement belongs to',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'User',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'User',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 12,
                    orderOnNew: 12,
                    orderOnDetails: 12,
                    orderOnEdit: 12,
                    orderOnImport: 12,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'creationDate',
                    dbName: 'mov_date_add',
                    dbType: 'datetime',
                    isTableField: true,
                    isPK: false,
                    size: 0,
                    decimal: 0,
                    minLength: 0,
                    allowNull: false,
                    default: '',
                    dbComment: 'Creation date of record in table',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'CreationDate',
                    formControl: 'Datetime',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [
                        'SAVE_DATE_AT_NEW'
                    ],
                    displayName: 'Creation Date',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 13,
                    orderOnNew: 13,
                    orderOnDetails: 13,
                    orderOnEdit: 13,
                    orderOnImport: 13,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'modificationDate',
                    dbName: 'mov_date_mod',
                    dbType: 'datetime',
                    isTableField: true,
                    isPK: false,
                    size: 0,
                    decimal: 0,
                    minLength: 0,
                    allowNull: false,
                    default: '',
                    dbComment: 'Last modification date of record in table',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'ModDate',
                    formControl: 'Datetime',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [
                        'SAVE_DATE_AT_NEW',
                        'SAVE_DATE_AT_EDIT'
                    ],
                    displayName: 'Last Modification Date',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 14,
                    orderOnNew: 14,
                    orderOnDetails: 14,
                    orderOnEdit: 14,
                    orderOnImport: 14,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'status',
                    dbName: 'mov_ctg_status',
                    dbType: 'integer',
                    isTableField: true,
                    isPK: false,
                    size: 4,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Record status in table',
                    catalogId: 'RECORD_STATUS',
                    originTable: 'CATALOG',
                    linkedField: '',
                    entName: 'Status',
                    formControl: 'Combobox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Status',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 15,
                    orderOnNew: 15,
                    orderOnDetails: 15,
                    orderOnEdit: 15,
                    orderOnImport: 15,
                    globalOrder: undefined,
                    value: null
                }, {
                    templateId: 'catalog',
                    dbName: 'mov_txt_type',
                    dbType: 'string',
                    isTableField: false,
                    isPK: false,
                    size: 250,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: 'Type of Movement',
                    catalogId: 'MOVEMENT_TYPES',
                    originTable: 'CATALOG',
                    linkedField: 'mov_ctg_type',
                    entName: 'TextMovementType',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Movement Type',
                    tooltip: '',
                    isRecordName: true,
                    gridOrder: 16,
                    orderOnNew: 16,
                    orderOnDetails: 16,
                    orderOnEdit: 16,
                    orderOnImport: 16,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'catalog',
                    dbName: 'mov_txt_currency',
                    dbType: 'string',
                    isTableField: false,
                    isPK: false,
                    size: 250,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: 'Currency of the movement',
                    catalogId: '',
                    originTable: 'CATALOG',
                    linkedField: 'mov_ctg_currency',
                    entName: 'TextCurrency',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Currency',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 17,
                    orderOnNew: 17,
                    orderOnDetails: 17,
                    orderOnEdit: 17,
                    orderOnImport: 17,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'table',
                    dbName: 'mov_txt_account',
                    dbType: 'string',
                    isTableField: false,
                    isPK: false,
                    size: 100,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: '',
                    catalogId: '',
                    originTable: 'ACCOUNT',
                    linkedField: 'ACCOUNT1.acc_name',
                    entName: '',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: '',
                    tooltip: '',
                    isRecordName: true,
                    gridOrder: 18,
                    orderOnNew: 18,
                    orderOnDetails: 18,
                    orderOnEdit: 18,
                    orderOnImport: 18,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'table',
                    dbName: 'mov_txt_account_to',
                    dbType: 'string',
                    isTableField: false,
                    isPK: false,
                    size: 100,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: '',
                    catalogId: '',
                    originTable: 'ACCOUNT',
                    linkedField: 'ACCOUNT2.acc_name',
                    entName: '',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: '',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 19,
                    orderOnNew: 19,
                    orderOnDetails: 19,
                    orderOnEdit: 19,
                    orderOnImport: 19,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'table',
                    dbName: 'mov_txt_category',
                    dbType: 'string',
                    isTableField: false,
                    isPK: false,
                    size: 100,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: '',
                    catalogId: '',
                    originTable: 'CATEGORY',
                    linkedField: 'mct_name',
                    entName: '',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: '',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 20,
                    orderOnNew: 20,
                    orderOnDetails: 20,
                    orderOnEdit: 20,
                    orderOnImport: 20,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'table',
                    dbName: 'mov_txt_place',
                    dbType: 'string',
                    isTableField: false,
                    isPK: false,
                    size: 100,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: '',
                    catalogId: '',
                    originTable: 'PLACE',
                    linkedField: 'mpl_name',
                    entName: '',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: '',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 21,
                    orderOnNew: 21,
                    orderOnDetails: 21,
                    orderOnEdit: 21,
                    orderOnImport: 21,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'catalog',
                    dbName: 'mov_txt_status',
                    dbType: 'string',
                    isTableField: false,
                    isPK: false,
                    size: 250,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: 'Record status in table',
                    catalogId: 'RECORD_STATUS',
                    originTable: 'CATALOG',
                    linkedField: 'mov_ctg_status',
                    entName: 'TextStatus',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Status',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 22,
                    orderOnNew: 22,
                    orderOnDetails: 22,
                    orderOnEdit: 22,
                    orderOnImport: 22,
                    globalOrder: 0,
                    value: null
                }
            ],
            view: [
                {
                    joinType: 'INNER',
                    joinTable: 'ACCOUNT ACCOUNT1',
                    joinStatement: 'mov_id_account = ACCOUNT1.acc_id and mov_id_user = ACCOUNT1.acc_id_user'
                }, {
                    joinType: 'LEFT',
                    joinTable: 'ACCOUNT ACCOUNT2',
                    joinStatement: 'mov_id_account_to = ACCOUNT2.acc_id and mov_id_user = ACCOUNT2.acc_id_user'
                }, {
                    joinType: 'LEFT',
                    joinTable: 'CATEGORY',
                    joinStatement: 'mov_id_category = mct_id and mov_id_user = mct_id_user'
                }, {
                    joinType: 'LEFT',
                    joinTable: 'PLACE',
                    joinStatement: 'mov_id_place = mpl_id and mov_id_user = mpl_id_user'
                }
            ]
        };
        this.recordName = function () {
            return _this.metadata.fields.filter(function (f) { return f.isRecordName; }).map(function (f) {
                return f.dbName + " = " + _this[f.dbName];
            }).join(', ');
        };
        if (base !== undefined) {
            this.mov_id = base.mov_id;
            this.mov_date = (base.mov_date !== null) ? new Date(base.mov_date) : null;
            this.mov_ctg_currency = base.mov_ctg_currency;
            this.mov_amount = base.mov_amount;
            this.mov_id_account = base.mov_id_account;
            this.mov_id_account_to = base.mov_id_account_to;
            this.mov_ctg_type = base.mov_ctg_type;
            this.mov_budget = base.mov_budget;
            this.mov_id_category = base.mov_id_category;
            this.mov_id_place = base.mov_id_place;
            this.mov_desc = base.mov_desc;
            this.mov_notes = base.mov_notes;
            this.mov_id_user = base.mov_id_user;
            this.mov_date_add = (base.mov_date_add !== null) ? new Date(base.mov_date_add) : null;
            this.mov_date_mod = (base.mov_date_mod !== null) ? new Date(base.mov_date_mod) : null;
            this.mov_ctg_status = base.mov_ctg_status;
            this.mov_txt_type = base.mov_txt_type;
            this.mov_txt_currency = base.mov_txt_currency;
            this.mov_txt_account = base.mov_txt_account;
            this.mov_txt_account_to = base.mov_txt_account_to;
            this.mov_txt_category = base.mov_txt_category;
            this.mov_txt_place = base.mov_txt_place;
            this.mov_txt_status = base.mov_txt_status;
        }
    }
    return Movement;
}());



/***/ }),

/***/ "./src/crosscommon/entities/Multimedia.ts":
/*!************************************************!*\
  !*** ./src/crosscommon/entities/Multimedia.ts ***!
  \************************************************/
/*! exports provided: Multimedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Multimedia", function() { return Multimedia; });
var Multimedia = /** @class */ (function () {
    function Multimedia(base) {
        var _this = this;
        this.metadata = {
            name: 'Multimedia',
            namespace: 'common',
            removeMeans: 'CANCELATION',
            authNeeded: false,
            displayOnMenu: false,
            prefix: 'mma',
            permissionsTemplate: 'permissions_all',
            tableName: 'multimedia',
            viewName: 'vimultimedia',
            permissions: [
                'access',
                'add',
                'edit',
                'remove',
                'report',
                'export',
                'import'
            ],
            specialFeatures: [
                'AUTONUMERIC',
                'HEADERS(Multimedia,Multimedia)',
                'TABLE_NAME(MULTIMEDIA)',
                'VIEW_NAME(VIMULTIMEDIA)'
            ],
            fields: [
                {
                    templateId: 'string',
                    dbName: 'mma_id',
                    dbType: 'string',
                    isTableField: true,
                    isPK: true,
                    size: 32,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Id for the media',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'MultimediaId',
                    formControl: 'Textbox',
                    captureRequired: true,
                    appearsByDefaultOnGrid: true,
                    specialRules: [
                        'DUPLICITY_ADD'
                    ],
                    displayName: 'Multimedia Id',
                    tooltip: '',
                    isRecordName: true,
                    gridOrder: 0,
                    orderOnNew: 0,
                    orderOnDetails: 0,
                    orderOnEdit: 0,
                    orderOnImport: 0,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'mma_title',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 300,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Title of the media',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Title',
                    formControl: 'Textbox',
                    captureRequired: true,
                    appearsByDefaultOnGrid: true,
                    specialRules: [
                        'DUPLICITY_ADD(MMA_ID)',
                        'DUPLICITY_EDIT(MMA_ID)'
                    ],
                    displayName: 'Title',
                    tooltip: '',
                    isRecordName: true,
                    gridOrder: 1,
                    orderOnNew: 1,
                    orderOnDetails: 1,
                    orderOnEdit: 1,
                    orderOnImport: 1,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'integer',
                    dbName: 'mma_ctg_media_type',
                    dbType: 'integer',
                    isTableField: true,
                    isPK: false,
                    size: 4,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Media category indicator',
                    catalogId: 'MULTIMEDIA_MEDIA_TYPE',
                    originTable: '',
                    linkedField: '',
                    entName: 'MediaType',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Media Type',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 2,
                    orderOnNew: 2,
                    orderOnDetails: 2,
                    orderOnEdit: 2,
                    orderOnImport: 2,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'integer',
                    dbName: 'mma_season',
                    dbType: 'integer',
                    isTableField: true,
                    isPK: false,
                    size: 4,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Season number identifier',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Season',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Season',
                    tooltip: '',
                    isRecordName: true,
                    gridOrder: 3,
                    orderOnNew: 3,
                    orderOnDetails: 3,
                    orderOnEdit: 3,
                    orderOnImport: 3,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'integer',
                    dbName: 'mma_year',
                    dbType: 'integer',
                    isTableField: true,
                    isPK: false,
                    size: 4,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Year of release/production of media',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Year',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Year',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 4,
                    orderOnNew: 4,
                    orderOnDetails: 4,
                    orderOnEdit: 4,
                    orderOnImport: 4,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'mma_current_ep',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 10,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Current episode id',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'CurrentEpisodeId',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Current Episode Id',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 5,
                    orderOnNew: 5,
                    orderOnDetails: 5,
                    orderOnEdit: 5,
                    orderOnImport: 5,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'mma_total_ep',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 10,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Total episodes or latest episode id',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'TotalEpisodeId',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Total Episode Id',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 6,
                    orderOnNew: 6,
                    orderOnDetails: 6,
                    orderOnEdit: 6,
                    orderOnImport: 6,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'mma_url',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 4000,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: 'Url of a resource related to the media',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Url',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Url',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 7,
                    orderOnNew: 7,
                    orderOnDetails: 7,
                    orderOnEdit: 7,
                    orderOnImport: 7,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'mma_id_user',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 50,
                    decimal: 0,
                    minLength: 0,
                    allowNull: false,
                    default: '',
                    dbComment: 'User who watched/read/review this media',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'User',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'User',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 8,
                    orderOnNew: 8,
                    orderOnDetails: 8,
                    orderOnEdit: 8,
                    orderOnImport: 8,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'creationDate',
                    dbName: 'mma_date_add',
                    dbType: 'datetime',
                    isTableField: true,
                    isPK: false,
                    size: 0,
                    decimal: 0,
                    minLength: 0,
                    allowNull: false,
                    default: '',
                    dbComment: 'Creation date of record in table',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'CreationDate',
                    formControl: 'Datetime',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [
                        'SAVE_DATE_AT_NEW'
                    ],
                    displayName: 'Creation Date',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 9,
                    orderOnNew: 9,
                    orderOnDetails: 9,
                    orderOnEdit: 9,
                    orderOnImport: 9,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'modificationDate',
                    dbName: 'mma_date_mod',
                    dbType: 'datetime',
                    isTableField: true,
                    isPK: false,
                    size: 0,
                    decimal: 0,
                    minLength: 0,
                    allowNull: false,
                    default: '',
                    dbComment: 'Last modification date of record in table',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'ModDate',
                    formControl: 'Datetime',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [
                        'SAVE_DATE_AT_NEW',
                        'SAVE_DATE_AT_EDIT'
                    ],
                    displayName: 'Last Modification Date',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 10,
                    orderOnNew: 10,
                    orderOnDetails: 10,
                    orderOnEdit: 10,
                    orderOnImport: 10,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'status',
                    dbName: 'mma_ctg_status',
                    dbType: 'integer',
                    isTableField: true,
                    isPK: false,
                    size: 4,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Record status in table',
                    catalogId: 'RECORD_STATUS',
                    originTable: 'CATALOG',
                    linkedField: '',
                    entName: 'Status',
                    formControl: 'Combobox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Status',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 11,
                    orderOnNew: 11,
                    orderOnDetails: 11,
                    orderOnEdit: 11,
                    orderOnImport: 11,
                    globalOrder: undefined,
                    value: null
                }, {
                    templateId: 'catalog',
                    dbName: 'mma_txt_media_type',
                    dbType: 'string',
                    isTableField: false,
                    isPK: false,
                    size: 250,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: 'Media category indicator',
                    catalogId: 'MULTIMEDIA_MEDIA_TYPE',
                    originTable: 'CATALOG',
                    linkedField: 'mma_ctg_media_type',
                    entName: 'TextMediaType',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Media Type',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 12,
                    orderOnNew: 12,
                    orderOnDetails: 12,
                    orderOnEdit: 12,
                    orderOnImport: 12,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'catalog',
                    dbName: 'mma_txt_status',
                    dbType: 'string',
                    isTableField: false,
                    isPK: false,
                    size: 250,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: 'Record status in table',
                    catalogId: 'RECORD_STATUS',
                    originTable: 'CATALOG',
                    linkedField: 'mma_ctg_status',
                    entName: 'TextStatus',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Status',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 13,
                    orderOnNew: 13,
                    orderOnDetails: 13,
                    orderOnEdit: 13,
                    orderOnImport: 13,
                    globalOrder: 0,
                    value: null
                }
            ],
            view: []
        };
        this.recordName = function () {
            return _this.metadata.fields.filter(function (f) { return f.isRecordName; }).map(function (f) {
                return f.dbName + " = " + _this[f.dbName];
            }).join(', ');
        };
        if (base !== undefined) {
            this.mma_id = base.mma_id;
            this.mma_title = base.mma_title;
            this.mma_ctg_media_type = base.mma_ctg_media_type;
            this.mma_season = base.mma_season;
            this.mma_year = base.mma_year;
            this.mma_current_ep = base.mma_current_ep;
            this.mma_total_ep = base.mma_total_ep;
            this.mma_url = base.mma_url;
            this.mma_id_user = base.mma_id_user;
            this.mma_date_add = (base.mma_date_add !== null) ? new Date(base.mma_date_add) : null;
            this.mma_date_mod = (base.mma_date_mod !== null) ? new Date(base.mma_date_mod) : null;
            this.mma_ctg_status = base.mma_ctg_status;
            this.mma_txt_media_type = base.mma_txt_media_type;
            this.mma_txt_status = base.mma_txt_status;
        }
    }
    return Multimedia;
}());



/***/ }),

/***/ "./src/crosscommon/entities/MultimediaDet.ts":
/*!***************************************************!*\
  !*** ./src/crosscommon/entities/MultimediaDet.ts ***!
  \***************************************************/
/*! exports provided: MultimediaDet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultimediaDet", function() { return MultimediaDet; });
var MultimediaDet = /** @class */ (function () {
    function MultimediaDet(base) {
        var _this = this;
        this.metadata = {
            name: 'MultimediaDet',
            namespace: 'common',
            removeMeans: 'DELETION',
            authNeeded: false,
            displayOnMenu: false,
            prefix: 'mmd',
            permissionsTemplate: 'permissions_all',
            tableName: 'multimediadet',
            viewName: 'vimultimediadet',
            permissions: [
                'access',
                'add',
                'edit',
                'remove',
                'report',
                'export',
                'import'
            ],
            specialFeatures: [
                'AUTONUMERIC',
                'HEADERS(Multimedia Detail,Multimedia Details)',
                'TABLE_NAME(MULTIMEDIADET)',
                'VIEW_NAME(VIMULTIMEDIADET)'
            ],
            fields: [
                {
                    templateId: 'string',
                    dbName: 'mmd_id',
                    dbType: 'string',
                    isTableField: true,
                    isPK: true,
                    size: 32,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Id for the media',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'MultimediaId',
                    formControl: 'Textbox',
                    captureRequired: true,
                    appearsByDefaultOnGrid: true,
                    specialRules: [
                        'DUPLICITY_ADD'
                    ],
                    displayName: 'Multimedia Id',
                    tooltip: '',
                    isRecordName: true,
                    gridOrder: 0,
                    orderOnNew: 0,
                    orderOnDetails: 0,
                    orderOnEdit: 0,
                    orderOnImport: 0,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'mmd_id_ep',
                    dbType: 'string',
                    isTableField: true,
                    isPK: true,
                    size: 10,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Episode Id of the media',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'EpisodeId',
                    formControl: 'Textbox',
                    captureRequired: true,
                    appearsByDefaultOnGrid: true,
                    specialRules: [
                        'DUPLICITY_ADD(MMD_ID)',
                        'DUPLICITY_EDIT(MMD_ID)'
                    ],
                    displayName: 'Episode Id',
                    tooltip: '',
                    isRecordName: true,
                    gridOrder: 1,
                    orderOnNew: 1,
                    orderOnDetails: 1,
                    orderOnEdit: 1,
                    orderOnImport: 1,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'mmd_ep_title',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 500,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: 'Title of the episode',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'EpisodeTitle',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Episode Title',
                    tooltip: '',
                    isRecordName: true,
                    gridOrder: 2,
                    orderOnNew: 2,
                    orderOnDetails: 2,
                    orderOnEdit: 2,
                    orderOnImport: 2,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'mmd_ep_alt_title',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 500,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: 'Alternative Title of the episode',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'AlternativeEpisodeTitle',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Alternative Episode Title',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 3,
                    orderOnNew: 3,
                    orderOnDetails: 3,
                    orderOnEdit: 3,
                    orderOnImport: 3,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'integer',
                    dbName: 'mmd_year',
                    dbType: 'integer',
                    isTableField: true,
                    isPK: false,
                    size: 4,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Year of release/production of media/episode',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Year',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Year',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 4,
                    orderOnNew: 4,
                    orderOnDetails: 4,
                    orderOnEdit: 4,
                    orderOnImport: 4,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'mmd_url',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 4000,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: 'Url of a resource related to the media',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Url',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Url',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 5,
                    orderOnNew: 5,
                    orderOnDetails: 5,
                    orderOnEdit: 5,
                    orderOnImport: 5,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'mmd_id_user',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 50,
                    decimal: 0,
                    minLength: 0,
                    allowNull: false,
                    default: '',
                    dbComment: 'User who watched/read/review this media episode',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'User',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'User',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 6,
                    orderOnNew: 6,
                    orderOnDetails: 6,
                    orderOnEdit: 6,
                    orderOnImport: 6,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'creationDate',
                    dbName: 'mmd_date_add',
                    dbType: 'datetime',
                    isTableField: true,
                    isPK: false,
                    size: 0,
                    decimal: 0,
                    minLength: 0,
                    allowNull: false,
                    default: '',
                    dbComment: 'Creation date of record in table',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'CreationDate',
                    formControl: 'Datetime',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [
                        'SAVE_DATE_AT_NEW'
                    ],
                    displayName: 'Creation Date',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 7,
                    orderOnNew: 7,
                    orderOnDetails: 7,
                    orderOnEdit: 7,
                    orderOnImport: 7,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'modificationDate',
                    dbName: 'mmd_date_mod',
                    dbType: 'datetime',
                    isTableField: true,
                    isPK: false,
                    size: 0,
                    decimal: 0,
                    minLength: 0,
                    allowNull: false,
                    default: '',
                    dbComment: 'Last modification date of record in table',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'ModDate',
                    formControl: 'Datetime',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [
                        'SAVE_DATE_AT_NEW',
                        'SAVE_DATE_AT_EDIT'
                    ],
                    displayName: 'Last Modification Date',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 8,
                    orderOnNew: 8,
                    orderOnDetails: 8,
                    orderOnEdit: 8,
                    orderOnImport: 8,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'status',
                    dbName: 'mmd_ctg_status',
                    dbType: 'integer',
                    isTableField: true,
                    isPK: false,
                    size: 4,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Record status in table',
                    catalogId: 'RECORD_STATUS',
                    originTable: 'CATALOG',
                    linkedField: '',
                    entName: 'Status',
                    formControl: 'Combobox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Status',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 9,
                    orderOnNew: 9,
                    orderOnDetails: 9,
                    orderOnEdit: 9,
                    orderOnImport: 9,
                    globalOrder: undefined,
                    value: null
                }, {
                    templateId: 'catalog',
                    dbName: 'mmd_txt_status',
                    dbType: 'string',
                    isTableField: false,
                    isPK: false,
                    size: 250,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: 'Record status in table',
                    catalogId: 'RECORD_STATUS',
                    originTable: 'CATALOG',
                    linkedField: 'mmd_ctg_status',
                    entName: 'TextStatus',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Status',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 10,
                    orderOnNew: 10,
                    orderOnDetails: 10,
                    orderOnEdit: 10,
                    orderOnImport: 10,
                    globalOrder: 0,
                    value: null
                }
            ],
            view: []
        };
        this.recordName = function () {
            return _this.metadata.fields.filter(function (f) { return f.isRecordName; }).map(function (f) {
                return f.dbName + " = " + _this[f.dbName];
            }).join(', ');
        };
        if (base !== undefined) {
            this.mmd_id = base.mmd_id;
            this.mmd_id_ep = base.mmd_id_ep;
            this.mmd_ep_title = base.mmd_ep_title;
            this.mmd_ep_alt_title = base.mmd_ep_alt_title;
            this.mmd_year = base.mmd_year;
            this.mmd_url = base.mmd_url;
            this.mmd_id_user = base.mmd_id_user;
            this.mmd_date_add = (base.mmd_date_add !== null) ? new Date(base.mmd_date_add) : null;
            this.mmd_date_mod = (base.mmd_date_mod !== null) ? new Date(base.mmd_date_mod) : null;
            this.mmd_ctg_status = base.mmd_ctg_status;
            this.mmd_txt_status = base.mmd_txt_status;
        }
    }
    return MultimediaDet;
}());



/***/ }),

/***/ "./src/crosscommon/entities/MultimediaView.ts":
/*!****************************************************!*\
  !*** ./src/crosscommon/entities/MultimediaView.ts ***!
  \****************************************************/
/*! exports provided: MultimediaView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultimediaView", function() { return MultimediaView; });
var MultimediaView = /** @class */ (function () {
    function MultimediaView(base) {
        var _this = this;
        this.metadata = {
            name: 'MultimediaView',
            namespace: 'common',
            removeMeans: 'DELETION',
            authNeeded: false,
            displayOnMenu: false,
            prefix: 'mmv',
            permissionsTemplate: 'permissions_all',
            tableName: 'multimediaview',
            viewName: 'vimultimediaview',
            permissions: [
                'access',
                'add',
                'edit',
                'remove',
                'report',
                'export',
                'import'
            ],
            specialFeatures: [
                'AUTONUMERIC',
                'HEADERS(Multimedia View,Multimedia Views)',
                'TABLE_NAME(MULTIMEDIAVIEW)',
                'VIEW_NAME(VIMULTIMEDIAVIEW)'
            ],
            fields: [
                {
                    templateId: 'string',
                    dbName: 'mmv_id',
                    dbType: 'string',
                    isTableField: true,
                    isPK: true,
                    size: 32,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Id for the media',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'MultimediaId',
                    formControl: 'Textbox',
                    captureRequired: true,
                    appearsByDefaultOnGrid: true,
                    specialRules: [
                        'DUPLICITY_ADD'
                    ],
                    displayName: 'Multimedia Id',
                    tooltip: '',
                    isRecordName: true,
                    gridOrder: 0,
                    orderOnNew: 0,
                    orderOnDetails: 0,
                    orderOnEdit: 0,
                    orderOnImport: 0,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'mmv_id_ep',
                    dbType: 'string',
                    isTableField: true,
                    isPK: true,
                    size: 10,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Episode Id of the media',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'EpisodeId',
                    formControl: 'Textbox',
                    captureRequired: true,
                    appearsByDefaultOnGrid: true,
                    specialRules: [
                        'DUPLICITY_ADD(MMD_ID)',
                        'DUPLICITY_EDIT(MMD_ID)'
                    ],
                    displayName: 'Episode Id',
                    tooltip: '',
                    isRecordName: true,
                    gridOrder: 1,
                    orderOnNew: 1,
                    orderOnDetails: 1,
                    orderOnEdit: 1,
                    orderOnImport: 1,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'mmv_ep_summary',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 4000,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: 'Summary of the episode',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Summary',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Summary',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 2,
                    orderOnNew: 2,
                    orderOnDetails: 2,
                    orderOnEdit: 2,
                    orderOnImport: 2,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'datetime',
                    dbName: 'mmv_date_viewed',
                    dbType: 'datetime',
                    isTableField: true,
                    isPK: false,
                    size: 16,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: 'Date and time when this episode was reviewed',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'DateViewed',
                    formControl: 'datetime',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Date Viewed',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 3,
                    orderOnNew: 3,
                    orderOnDetails: 3,
                    orderOnEdit: 3,
                    orderOnImport: 3,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'integer',
                    dbName: 'mmv_num_rating',
                    dbType: 'integer',
                    isTableField: true,
                    isPK: false,
                    size: 4,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'A number indicating the calification of this episode',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Rating',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Rating',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 4,
                    orderOnNew: 4,
                    orderOnDetails: 4,
                    orderOnEdit: 4,
                    orderOnImport: 4,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'integer',
                    dbName: 'mmv_ctg_platform',
                    dbType: 'integer',
                    isTableField: true,
                    isPK: false,
                    size: 4,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Platform used to review the episode',
                    catalogId: 'MULTIMEDIA_PLATFORM',
                    originTable: '',
                    linkedField: '',
                    entName: 'Platform',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Platform',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 5,
                    orderOnNew: 5,
                    orderOnDetails: 5,
                    orderOnEdit: 5,
                    orderOnImport: 5,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'mmv_notes',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 500,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: 'Notes',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Notes',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Notes',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 6,
                    orderOnNew: 6,
                    orderOnDetails: 6,
                    orderOnEdit: 6,
                    orderOnImport: 6,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'mmv_id_user',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 50,
                    decimal: 0,
                    minLength: 0,
                    allowNull: false,
                    default: '',
                    dbComment: 'User who reviewed this media episode',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'User',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'User',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 7,
                    orderOnNew: 7,
                    orderOnDetails: 7,
                    orderOnEdit: 7,
                    orderOnImport: 7,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'creationDate',
                    dbName: 'mmv_date_add',
                    dbType: 'datetime',
                    isTableField: true,
                    isPK: false,
                    size: 0,
                    decimal: 0,
                    minLength: 0,
                    allowNull: false,
                    default: '',
                    dbComment: 'Creation date of record in table',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'CreationDate',
                    formControl: 'Datetime',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [
                        'SAVE_DATE_AT_NEW'
                    ],
                    displayName: 'Creation Date',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 8,
                    orderOnNew: 8,
                    orderOnDetails: 8,
                    orderOnEdit: 8,
                    orderOnImport: 8,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'modificationDate',
                    dbName: 'mmv_date_mod',
                    dbType: 'datetime',
                    isTableField: true,
                    isPK: false,
                    size: 0,
                    decimal: 0,
                    minLength: 0,
                    allowNull: false,
                    default: '',
                    dbComment: 'Last modification date of record in table',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'ModDate',
                    formControl: 'Datetime',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [
                        'SAVE_DATE_AT_NEW',
                        'SAVE_DATE_AT_EDIT'
                    ],
                    displayName: 'Last Modification Date',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 9,
                    orderOnNew: 9,
                    orderOnDetails: 9,
                    orderOnEdit: 9,
                    orderOnImport: 9,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'status',
                    dbName: 'mmv_ctg_status',
                    dbType: 'integer',
                    isTableField: true,
                    isPK: false,
                    size: 4,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Record status in table',
                    catalogId: 'RECORD_STATUS',
                    originTable: 'CATALOG',
                    linkedField: '',
                    entName: 'Status',
                    formControl: 'Combobox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Status',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 10,
                    orderOnNew: 10,
                    orderOnDetails: 10,
                    orderOnEdit: 10,
                    orderOnImport: 10,
                    globalOrder: undefined,
                    value: null
                }, {
                    templateId: 'table',
                    dbName: 'mmv_txt_media_title',
                    dbType: 'string',
                    isTableField: false,
                    isPK: false,
                    size: 300,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: '',
                    catalogId: '',
                    originTable: 'MULTIMEDIA',
                    linkedField: 'mma_title',
                    entName: '',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: '',
                    tooltip: '',
                    isRecordName: true,
                    gridOrder: 11,
                    orderOnNew: 11,
                    orderOnDetails: 11,
                    orderOnEdit: 11,
                    orderOnImport: 11,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'table',
                    dbName: 'mmv_txt_ep_title',
                    dbType: 'string',
                    isTableField: false,
                    isPK: false,
                    size: 500,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: '',
                    catalogId: '',
                    originTable: 'MULTIMEDIADET',
                    linkedField: 'mmd_ep_title',
                    entName: '',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: '',
                    tooltip: '',
                    isRecordName: true,
                    gridOrder: 12,
                    orderOnNew: 12,
                    orderOnDetails: 12,
                    orderOnEdit: 12,
                    orderOnImport: 12,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'catalog',
                    dbName: 'mmv_txt_platform',
                    dbType: 'string',
                    isTableField: false,
                    isPK: false,
                    size: 250,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: 'Platform used to review the episode',
                    catalogId: 'MULTIMEDIA_PLATFORM',
                    originTable: 'CATALOG',
                    linkedField: 'mmv_ctg_platform',
                    entName: 'TextPlatform',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Platform',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 13,
                    orderOnNew: 13,
                    orderOnDetails: 13,
                    orderOnEdit: 13,
                    orderOnImport: 13,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'catalog',
                    dbName: 'mmv_txt_status',
                    dbType: 'string',
                    isTableField: false,
                    isPK: false,
                    size: 250,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: 'Record status in table',
                    catalogId: 'RECORD_STATUS',
                    originTable: 'CATALOG',
                    linkedField: 'mmv_ctg_status',
                    entName: 'TextStatus',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Status',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 14,
                    orderOnNew: 14,
                    orderOnDetails: 14,
                    orderOnEdit: 14,
                    orderOnImport: 14,
                    globalOrder: 0,
                    value: null
                }
            ],
            view: [
                {
                    joinType: 'INNER',
                    joinTable: 'MULTIMEDIA',
                    joinStatement: 'mmv_id = mma_id and mmv_id_user = mma_id_user'
                }, {
                    joinType: 'INNER',
                    joinTable: 'MULTIMEDIADET',
                    joinStatement: 'mmv_id = mmd_id and mmv_id_ep = mmd_id_ep and mmv_id_user = mmd_id_user'
                }
            ]
        };
        this.recordName = function () {
            return _this.metadata.fields.filter(function (f) { return f.isRecordName; }).map(function (f) {
                return f.dbName + " = " + _this[f.dbName];
            }).join(', ');
        };
        if (base !== undefined) {
            this.mmv_id = base.mmv_id;
            this.mmv_id_ep = base.mmv_id_ep;
            this.mmv_ep_summary = base.mmv_ep_summary;
            this.mmv_date_viewed = (base.mmv_date_viewed !== null) ? new Date(base.mmv_date_viewed) : null;
            this.mmv_num_rating = base.mmv_num_rating;
            this.mmv_ctg_platform = base.mmv_ctg_platform;
            this.mmv_notes = base.mmv_notes;
            this.mmv_id_user = base.mmv_id_user;
            this.mmv_date_add = (base.mmv_date_add !== null) ? new Date(base.mmv_date_add) : null;
            this.mmv_date_mod = (base.mmv_date_mod !== null) ? new Date(base.mmv_date_mod) : null;
            this.mmv_ctg_status = base.mmv_ctg_status;
            this.mmv_txt_media_title = base.mmv_txt_media_title;
            this.mmv_txt_ep_title = base.mmv_txt_ep_title;
            this.mmv_txt_platform = base.mmv_txt_platform;
            this.mmv_txt_status = base.mmv_txt_status;
        }
    }
    return MultimediaView;
}());



/***/ }),

/***/ "./src/crosscommon/entities/Place.ts":
/*!*******************************************!*\
  !*** ./src/crosscommon/entities/Place.ts ***!
  \*******************************************/
/*! exports provided: Place */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Place", function() { return Place; });
var Place = /** @class */ (function () {
    function Place(base) {
        var _this = this;
        this.metadata = {
            name: 'Place',
            namespace: 'Money',
            removeMeans: 'CANCELATION',
            authNeeded: false,
            displayOnMenu: true,
            prefix: 'mpl',
            permissionsTemplate: 'permissions_all',
            tableName: 'place',
            viewName: 'viplace',
            permissions: [
                'access',
                'add',
                'edit',
                'remove',
                'report',
                'export',
                'import'
            ],
            specialFeatures: [
                'HEADERS(Place,Places)',
                'TABLE_NAME(PLACE)',
                'VIEW_NAME(VIPLACE)'
            ],
            fields: [
                {
                    templateId: 'string',
                    dbName: 'mpl_id',
                    dbType: 'string',
                    isTableField: true,
                    isPK: true,
                    size: 32,
                    decimal: 0,
                    minLength: 32,
                    allowNull: false,
                    default: '',
                    dbComment: 'Id for the place',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'PlaceId',
                    formControl: 'Textbox',
                    captureRequired: true,
                    appearsByDefaultOnGrid: true,
                    specialRules: [
                        'DUPLICITY_ADD'
                    ],
                    displayName: 'Place Id',
                    tooltip: '',
                    isRecordName: true,
                    gridOrder: 0,
                    orderOnNew: 0,
                    orderOnDetails: 0,
                    orderOnEdit: 0,
                    orderOnImport: 0,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'mpl_name',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 100,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Name for the place',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Name',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Name',
                    tooltip: '',
                    isRecordName: true,
                    gridOrder: 1,
                    orderOnNew: 1,
                    orderOnDetails: 1,
                    orderOnEdit: 1,
                    orderOnImport: 1,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'mpl_id_user',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 50,
                    decimal: 0,
                    minLength: 0,
                    allowNull: false,
                    default: '',
                    dbComment: 'User who this place belongs to',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'User',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'User',
                    tooltip: '',
                    isRecordName: true,
                    gridOrder: 2,
                    orderOnNew: 2,
                    orderOnDetails: 2,
                    orderOnEdit: 2,
                    orderOnImport: 2,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'creationDate',
                    dbName: 'mpl_date_add',
                    dbType: 'datetime',
                    isTableField: true,
                    isPK: false,
                    size: 0,
                    decimal: 0,
                    minLength: 0,
                    allowNull: false,
                    default: '',
                    dbComment: 'Creation date of record in table',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'CreationDate',
                    formControl: 'Datetime',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [
                        'SAVE_DATE_AT_NEW'
                    ],
                    displayName: 'Creation Date',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 3,
                    orderOnNew: 3,
                    orderOnDetails: 3,
                    orderOnEdit: 3,
                    orderOnImport: 3,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'modificationDate',
                    dbName: 'mpl_date_mod',
                    dbType: 'datetime',
                    isTableField: true,
                    isPK: false,
                    size: 0,
                    decimal: 0,
                    minLength: 0,
                    allowNull: false,
                    default: '',
                    dbComment: 'Last modification date of record in table',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'ModDate',
                    formControl: 'Datetime',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [
                        'SAVE_DATE_AT_NEW',
                        'SAVE_DATE_AT_EDIT'
                    ],
                    displayName: 'Last Modification Date',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 4,
                    orderOnNew: 4,
                    orderOnDetails: 4,
                    orderOnEdit: 4,
                    orderOnImport: 4,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'status',
                    dbName: 'mpl_ctg_status',
                    dbType: 'integer',
                    isTableField: true,
                    isPK: false,
                    size: 4,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Record status in table',
                    catalogId: 'RECORD_STATUS',
                    originTable: 'CATALOG',
                    linkedField: '',
                    entName: 'Status',
                    formControl: 'Combobox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Status',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 5,
                    orderOnNew: 5,
                    orderOnDetails: 5,
                    orderOnEdit: 5,
                    orderOnImport: 5,
                    globalOrder: undefined,
                    value: null
                }, {
                    templateId: 'catalog',
                    dbName: 'mpl_txt_status',
                    dbType: 'string',
                    isTableField: false,
                    isPK: false,
                    size: 250,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: 'Record status in table',
                    catalogId: 'RECORD_STATUS',
                    originTable: 'CATALOG',
                    linkedField: 'mpl_ctg_status',
                    entName: 'TextStatus',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Status',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 6,
                    orderOnNew: 6,
                    orderOnDetails: 6,
                    orderOnEdit: 6,
                    orderOnImport: 6,
                    globalOrder: 0,
                    value: null
                }
            ],
            view: []
        };
        this.recordName = function () {
            return _this.metadata.fields.filter(function (f) { return f.isRecordName; }).map(function (f) {
                return f.dbName + " = " + _this[f.dbName];
            }).join(', ');
        };
        if (base !== undefined) {
            this.mpl_id = base.mpl_id;
            this.mpl_name = base.mpl_name;
            this.mpl_id_user = base.mpl_id_user;
            this.mpl_date_add = (base.mpl_date_add !== null) ? new Date(base.mpl_date_add) : null;
            this.mpl_date_mod = (base.mpl_date_mod !== null) ? new Date(base.mpl_date_mod) : null;
            this.mpl_ctg_status = base.mpl_ctg_status;
            this.mpl_txt_status = base.mpl_txt_status;
        }
    }
    return Place;
}());



/***/ }),

/***/ "./src/crosscommon/entities/Preset.ts":
/*!********************************************!*\
  !*** ./src/crosscommon/entities/Preset.ts ***!
  \********************************************/
/*! exports provided: Preset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Preset", function() { return Preset; });
var Preset = /** @class */ (function () {
    function Preset(base) {
        var _this = this;
        this.metadata = {
            name: 'Preset',
            namespace: 'Money',
            removeMeans: 'DELETION',
            authNeeded: false,
            displayOnMenu: true,
            prefix: 'pre',
            permissionsTemplate: 'permissions_all',
            tableName: 'preset',
            viewName: 'vipreset',
            permissions: [
                'access',
                'add',
                'edit',
                'remove',
                'report',
                'export',
                'import'
            ],
            specialFeatures: [
                'HEADERS(Preset,Presets)',
                'TABLE_NAME(PRESET)',
                'VIEW_NAME(VIPRESET)'
            ],
            fields: [
                {
                    templateId: 'string',
                    dbName: 'pre_id',
                    dbType: 'string',
                    isTableField: true,
                    isPK: true,
                    size: 32,
                    decimal: 0,
                    minLength: 32,
                    allowNull: false,
                    default: '',
                    dbComment: 'Id for the Preset',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'PresetId',
                    formControl: 'Textbox',
                    captureRequired: true,
                    appearsByDefaultOnGrid: true,
                    specialRules: [
                        'DUPLICITY_ADD'
                    ],
                    displayName: 'Preset Id',
                    tooltip: '',
                    isRecordName: true,
                    gridOrder: 0,
                    orderOnNew: 0,
                    orderOnDetails: 0,
                    orderOnEdit: 0,
                    orderOnImport: 0,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'pre_name',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 150,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Name of the Preset',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Name',
                    formControl: 'Textbox',
                    captureRequired: true,
                    appearsByDefaultOnGrid: true,
                    specialRules: [
                        'DUPLICITY_ADD'
                    ],
                    displayName: 'Name',
                    tooltip: '',
                    isRecordName: true,
                    gridOrder: 1,
                    orderOnNew: 1,
                    orderOnDetails: 1,
                    orderOnEdit: 1,
                    orderOnImport: 1,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'datetime',
                    dbName: 'pre_date',
                    dbType: 'datetime',
                    isTableField: true,
                    isPK: false,
                    size: 16,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: 'Date when the Preset was made',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'ApplicationDate',
                    formControl: 'datetime',
                    captureRequired: true,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Date of Application',
                    tooltip: '',
                    isRecordName: true,
                    gridOrder: 2,
                    orderOnNew: 2,
                    orderOnDetails: 2,
                    orderOnEdit: 2,
                    orderOnImport: 2,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'integer',
                    dbName: 'pre_ctg_currency',
                    dbType: 'integer',
                    isTableField: true,
                    isPK: false,
                    size: 4,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Currency of the Preset',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Currency',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Currency',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 3,
                    orderOnNew: 3,
                    orderOnDetails: 3,
                    orderOnEdit: 3,
                    orderOnImport: 3,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'double',
                    dbName: 'pre_amount',
                    dbType: 'double',
                    isTableField: true,
                    isPK: false,
                    size: 19,
                    decimal: 2,
                    minLength: 0,
                    allowNull: false,
                    default: '',
                    dbComment: 'Amount of the Preset',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Amount',
                    formControl: 'Textbox',
                    captureRequired: true,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Amount',
                    tooltip: '',
                    isRecordName: true,
                    gridOrder: 4,
                    orderOnNew: 4,
                    orderOnDetails: 4,
                    orderOnEdit: 4,
                    orderOnImport: 4,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'pre_id_account',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 16,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Name for the account, appears on balance',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Account',
                    formControl: 'Textbox',
                    captureRequired: true,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Account',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 5,
                    orderOnNew: 5,
                    orderOnDetails: 5,
                    orderOnEdit: 5,
                    orderOnImport: 5,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'pre_id_account_to',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 16,
                    decimal: 0,
                    minLength: 1,
                    allowNull: true,
                    default: '',
                    dbComment: 'Name for the destination account when doing a transfer, appears on balance',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'AccountTo',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Destination Account',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 6,
                    orderOnNew: 6,
                    orderOnDetails: 6,
                    orderOnEdit: 6,
                    orderOnImport: 6,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'integer',
                    dbName: 'pre_ctg_type',
                    dbType: 'integer',
                    isTableField: true,
                    isPK: false,
                    size: 4,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Type of Preset',
                    catalogId: 'MOVEMENT_TYPES',
                    originTable: '',
                    linkedField: '',
                    entName: 'MovementType',
                    formControl: 'Textbox',
                    captureRequired: true,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Preset Type',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 7,
                    orderOnNew: 7,
                    orderOnDetails: 7,
                    orderOnEdit: 7,
                    orderOnImport: 7,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'pre_budget',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 50,
                    decimal: 0,
                    minLength: 1,
                    allowNull: true,
                    default: '',
                    dbComment: 'Monthly Budget where this Preset sums up',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Budget',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Budget',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 8,
                    orderOnNew: 8,
                    orderOnDetails: 8,
                    orderOnEdit: 8,
                    orderOnImport: 8,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'pre_id_category',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 32,
                    decimal: 0,
                    minLength: 32,
                    allowNull: false,
                    default: '',
                    dbComment: 'Category for this Preset, helps grouping Movements',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Category',
                    formControl: 'Textbox',
                    captureRequired: true,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Category',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 9,
                    orderOnNew: 9,
                    orderOnDetails: 9,
                    orderOnEdit: 9,
                    orderOnImport: 9,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'pre_id_place',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 32,
                    decimal: 0,
                    minLength: 32,
                    allowNull: false,
                    default: '',
                    dbComment: 'Place where this Preset was done, helps tracking Movements',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Place',
                    formControl: 'Textbox',
                    captureRequired: true,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Place',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 10,
                    orderOnNew: 10,
                    orderOnDetails: 10,
                    orderOnEdit: 10,
                    orderOnImport: 10,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'pre_desc',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 200,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Description of the Preset, something to remember and track the Preset',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Description',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Description',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 11,
                    orderOnNew: 11,
                    orderOnDetails: 11,
                    orderOnEdit: 11,
                    orderOnImport: 11,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'pre_notes',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 200,
                    decimal: 0,
                    minLength: 1,
                    allowNull: true,
                    default: '',
                    dbComment: 'Notes for Presets',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Notes',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Notes',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 12,
                    orderOnNew: 12,
                    orderOnDetails: 12,
                    orderOnEdit: 12,
                    orderOnImport: 12,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'pre_id_user',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 50,
                    decimal: 0,
                    minLength: 0,
                    allowNull: false,
                    default: '',
                    dbComment: 'User who this Preset belongs to',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'User',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'User',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 13,
                    orderOnNew: 13,
                    orderOnDetails: 13,
                    orderOnEdit: 13,
                    orderOnImport: 13,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'creationDate',
                    dbName: 'pre_date_add',
                    dbType: 'datetime',
                    isTableField: true,
                    isPK: false,
                    size: 0,
                    decimal: 0,
                    minLength: 0,
                    allowNull: false,
                    default: '',
                    dbComment: 'Creation date of record in table',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'CreationDate',
                    formControl: 'Datetime',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [
                        'SAVE_DATE_AT_NEW'
                    ],
                    displayName: 'Creation Date',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 14,
                    orderOnNew: 14,
                    orderOnDetails: 14,
                    orderOnEdit: 14,
                    orderOnImport: 14,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'modificationDate',
                    dbName: 'pre_date_mod',
                    dbType: 'datetime',
                    isTableField: true,
                    isPK: false,
                    size: 0,
                    decimal: 0,
                    minLength: 0,
                    allowNull: false,
                    default: '',
                    dbComment: 'Last modification date of record in table',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'ModDate',
                    formControl: 'Datetime',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [
                        'SAVE_DATE_AT_NEW',
                        'SAVE_DATE_AT_EDIT'
                    ],
                    displayName: 'Last Modification Date',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 15,
                    orderOnNew: 15,
                    orderOnDetails: 15,
                    orderOnEdit: 15,
                    orderOnImport: 15,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'status',
                    dbName: 'pre_ctg_status',
                    dbType: 'integer',
                    isTableField: true,
                    isPK: false,
                    size: 4,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Record status in table',
                    catalogId: 'RECORD_STATUS',
                    originTable: 'CATALOG',
                    linkedField: '',
                    entName: 'Status',
                    formControl: 'Combobox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Status',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 16,
                    orderOnNew: 16,
                    orderOnDetails: 16,
                    orderOnEdit: 16,
                    orderOnImport: 16,
                    globalOrder: undefined,
                    value: null
                }, {
                    templateId: 'catalog',
                    dbName: 'pre_txt_type',
                    dbType: 'string',
                    isTableField: false,
                    isPK: false,
                    size: 250,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: 'Type of Preset',
                    catalogId: 'MOVEMENT_TYPES',
                    originTable: 'CATALOG',
                    linkedField: 'pre_ctg_type',
                    entName: 'TextMovementType',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Preset Type',
                    tooltip: '',
                    isRecordName: true,
                    gridOrder: 17,
                    orderOnNew: 17,
                    orderOnDetails: 17,
                    orderOnEdit: 17,
                    orderOnImport: 17,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'catalog',
                    dbName: 'pre_txt_currency',
                    dbType: 'string',
                    isTableField: false,
                    isPK: false,
                    size: 250,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: 'Currency of the Preset',
                    catalogId: '',
                    originTable: 'CATALOG',
                    linkedField: 'pre_ctg_currency',
                    entName: 'TextCurrency',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Currency',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 18,
                    orderOnNew: 18,
                    orderOnDetails: 18,
                    orderOnEdit: 18,
                    orderOnImport: 18,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'table',
                    dbName: 'pre_txt_account',
                    dbType: 'string',
                    isTableField: false,
                    isPK: false,
                    size: 100,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: '',
                    catalogId: '',
                    originTable: 'ACCOUNT',
                    linkedField: 'ACCOUNT1.acc_name',
                    entName: '',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: '',
                    tooltip: '',
                    isRecordName: true,
                    gridOrder: 19,
                    orderOnNew: 19,
                    orderOnDetails: 19,
                    orderOnEdit: 19,
                    orderOnImport: 19,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'table',
                    dbName: 'pre_txt_account_to',
                    dbType: 'string',
                    isTableField: false,
                    isPK: false,
                    size: 100,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: '',
                    catalogId: '',
                    originTable: 'ACCOUNT',
                    linkedField: 'ACCOUNT2.acc_name',
                    entName: '',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: '',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 20,
                    orderOnNew: 20,
                    orderOnDetails: 20,
                    orderOnEdit: 20,
                    orderOnImport: 20,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'table',
                    dbName: 'pre_txt_category',
                    dbType: 'string',
                    isTableField: false,
                    isPK: false,
                    size: 100,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: '',
                    catalogId: '',
                    originTable: 'CATEGORY',
                    linkedField: 'mct_name',
                    entName: '',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: '',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 21,
                    orderOnNew: 21,
                    orderOnDetails: 21,
                    orderOnEdit: 21,
                    orderOnImport: 21,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'table',
                    dbName: 'pre_txt_place',
                    dbType: 'string',
                    isTableField: false,
                    isPK: false,
                    size: 100,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: '',
                    catalogId: '',
                    originTable: 'PLACE',
                    linkedField: 'mpl_name',
                    entName: '',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: '',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 22,
                    orderOnNew: 22,
                    orderOnDetails: 22,
                    orderOnEdit: 22,
                    orderOnImport: 22,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'catalog',
                    dbName: 'pre_txt_status',
                    dbType: 'string',
                    isTableField: false,
                    isPK: false,
                    size: 250,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: 'Record status in table',
                    catalogId: 'RECORD_STATUS',
                    originTable: 'CATALOG',
                    linkedField: 'pre_ctg_status',
                    entName: 'TextStatus',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Status',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 23,
                    orderOnNew: 23,
                    orderOnDetails: 23,
                    orderOnEdit: 23,
                    orderOnImport: 23,
                    globalOrder: 0,
                    value: null
                }
            ],
            view: [
                {
                    joinType: 'INNER',
                    joinTable: 'ACCOUNT ACCOUNT1',
                    joinStatement: 'pre_id_account = ACCOUNT1.acc_id and pre_id_user = ACCOUNT1.acc_id_user'
                }, {
                    joinType: 'LEFT',
                    joinTable: 'ACCOUNT ACCOUNT2',
                    joinStatement: 'pre_id_account_to = ACCOUNT2.acc_id and pre_id_user = ACCOUNT2.acc_id_user'
                }, {
                    joinType: 'LEFT',
                    joinTable: 'CATEGORY',
                    joinStatement: 'pre_id_category = mct_id and pre_id_user = mct_id_user'
                }, {
                    joinType: 'LEFT',
                    joinTable: 'PLACE',
                    joinStatement: 'pre_id_place = mpl_id and pre_id_user = mpl_id_user'
                }
            ]
        };
        this.recordName = function () {
            return _this.metadata.fields.filter(function (f) { return f.isRecordName; }).map(function (f) {
                return f.dbName + " = " + _this[f.dbName];
            }).join(', ');
        };
        if (base !== undefined) {
            this.pre_id = base.pre_id;
            this.pre_name = base.pre_name;
            this.pre_date = (base.pre_date !== null) ? new Date(base.pre_date) : null;
            this.pre_ctg_currency = base.pre_ctg_currency;
            this.pre_amount = base.pre_amount;
            this.pre_id_account = base.pre_id_account;
            this.pre_id_account_to = base.pre_id_account_to;
            this.pre_ctg_type = base.pre_ctg_type;
            this.pre_budget = base.pre_budget;
            this.pre_id_category = base.pre_id_category;
            this.pre_id_place = base.pre_id_place;
            this.pre_desc = base.pre_desc;
            this.pre_notes = base.pre_notes;
            this.pre_id_user = base.pre_id_user;
            this.pre_date_add = (base.pre_date_add !== null) ? new Date(base.pre_date_add) : null;
            this.pre_date_mod = (base.pre_date_mod !== null) ? new Date(base.pre_date_mod) : null;
            this.pre_ctg_status = base.pre_ctg_status;
            this.pre_txt_type = base.pre_txt_type;
            this.pre_txt_currency = base.pre_txt_currency;
            this.pre_txt_account = base.pre_txt_account;
            this.pre_txt_account_to = base.pre_txt_account_to;
            this.pre_txt_category = base.pre_txt_category;
            this.pre_txt_place = base.pre_txt_place;
            this.pre_txt_status = base.pre_txt_status;
        }
    }
    return Preset;
}());



/***/ }),

/***/ "./src/crosscommon/entities/Task.ts":
/*!******************************************!*\
  !*** ./src/crosscommon/entities/Task.ts ***!
  \******************************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
var Task = /** @class */ (function () {
    function Task(base) {
        var _this = this;
        this.metadata = {
            name: 'Task',
            namespace: 'common',
            removeMeans: 'CANCELATION',
            authNeeded: false,
            displayOnMenu: false,
            prefix: 'tsk',
            permissionsTemplate: 'permissions_all',
            tableName: 'task',
            viewName: 'vitask',
            permissions: [
                'access',
                'add',
                'edit',
                'remove',
                'report',
                'export',
                'import'
            ],
            specialFeatures: [
                'AUTONUMERIC',
                'HEADERS(Task,Tasks)',
                'TABLE_NAME(TASK)',
                'VIEW_NAME(VITASK)'
            ],
            fields: [
                {
                    templateId: 'string',
                    dbName: 'tsk_id',
                    dbType: 'string',
                    isTableField: true,
                    isPK: true,
                    size: 32,
                    decimal: 0,
                    minLength: 32,
                    allowNull: false,
                    default: '',
                    dbComment: 'Id for the task',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'TaskId',
                    formControl: 'Textbox',
                    captureRequired: true,
                    appearsByDefaultOnGrid: true,
                    specialRules: [
                        'DUPLICITY_ADD'
                    ],
                    displayName: 'Task Id',
                    tooltip: '',
                    isRecordName: true,
                    gridOrder: 0,
                    orderOnNew: 0,
                    orderOnDetails: 0,
                    orderOnEdit: 0,
                    orderOnImport: 0,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'tsk_id_container',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 50,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Container group id for multiple tasks',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'ContainerId',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Container Id',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 1,
                    orderOnNew: 1,
                    orderOnDetails: 1,
                    orderOnEdit: 1,
                    orderOnImport: 1,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'tsk_id_record',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 20,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Record id for multiple tasks grouping',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'RecordId',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Record Id',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 2,
                    orderOnNew: 2,
                    orderOnDetails: 2,
                    orderOnEdit: 2,
                    orderOnImport: 2,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'tsk_name',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 500,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Name of the task, meaning the task itself',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Name',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Name',
                    tooltip: '',
                    isRecordName: true,
                    gridOrder: 3,
                    orderOnNew: 3,
                    orderOnDetails: 3,
                    orderOnEdit: 3,
                    orderOnImport: 3,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'tsk_notes',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 4000,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: 'Notes for the task, details',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Notes',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Notes',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 4,
                    orderOnNew: 4,
                    orderOnDetails: 4,
                    orderOnEdit: 4,
                    orderOnImport: 4,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'tsk_parent',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 32,
                    decimal: 0,
                    minLength: 32,
                    allowNull: true,
                    default: '',
                    dbComment: 'Parent task of this subtask',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Parent',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Parent',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 5,
                    orderOnNew: 5,
                    orderOnDetails: 5,
                    orderOnEdit: 5,
                    orderOnImport: 5,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'integer',
                    dbName: 'tsk_order',
                    dbType: 'integer',
                    isTableField: true,
                    isPK: false,
                    size: 4,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Order used to be displayed in list',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Order',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Order',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 6,
                    orderOnNew: 6,
                    orderOnDetails: 6,
                    orderOnEdit: 6,
                    orderOnImport: 6,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'datetime',
                    dbName: 'tsk_date_done',
                    dbType: 'datetime',
                    isTableField: true,
                    isPK: false,
                    size: 16,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: 'Date when the task is marked as done',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'DoneDate',
                    formControl: 'datetime',
                    captureRequired: true,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Date of Termination',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 7,
                    orderOnNew: 7,
                    orderOnDetails: 7,
                    orderOnEdit: 7,
                    orderOnImport: 7,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'long',
                    dbName: 'tsk_total_time_spent',
                    dbType: 'long',
                    isTableField: true,
                    isPK: false,
                    size: 9,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Total time spent attending this task',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'TotalTimeSpent',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Total Time Spent',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 8,
                    orderOnNew: 8,
                    orderOnDetails: 8,
                    orderOnEdit: 8,
                    orderOnImport: 8,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'integer',
                    dbName: 'tsk_ctg_in_process',
                    dbType: 'integer',
                    isTableField: true,
                    isPK: false,
                    size: 4,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Indicates if this task is currently being attended or not',
                    catalogId: 'BOOLEAN',
                    originTable: '',
                    linkedField: '',
                    entName: 'InProgress',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'In Progress',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 9,
                    orderOnNew: 9,
                    orderOnDetails: 9,
                    orderOnEdit: 9,
                    orderOnImport: 9,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'tsk_qualifiers',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 100,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: 'Qualifiers used to enhance this task',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Qualifiers',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Qualifiers',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 10,
                    orderOnNew: 10,
                    orderOnDetails: 10,
                    orderOnEdit: 10,
                    orderOnImport: 10,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'tsk_tags',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 200,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: 'Tags used to group tasks',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Tags',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Tags',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 11,
                    orderOnNew: 11,
                    orderOnDetails: 11,
                    orderOnEdit: 11,
                    orderOnImport: 11,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'long',
                    dbName: 'tsk_estimated_duration',
                    dbType: 'long',
                    isTableField: true,
                    isPK: false,
                    size: 9,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Total time estimated to be taken attending this task',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'EstimatedDuration',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Estimated Duration',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 12,
                    orderOnNew: 12,
                    orderOnDetails: 12,
                    orderOnEdit: 12,
                    orderOnImport: 12,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'datetime',
                    dbName: 'tsk_schedule_date_start',
                    dbType: 'datetime',
                    isTableField: true,
                    isPK: false,
                    size: 16,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: 'Schedule date and time for the task to be attended',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'ScheduleDateStart',
                    formControl: 'datetime',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Schedule Date Start',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 13,
                    orderOnNew: 13,
                    orderOnDetails: 13,
                    orderOnEdit: 13,
                    orderOnImport: 13,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'datetime',
                    dbName: 'tsk_schedule_date_end',
                    dbType: 'datetime',
                    isTableField: true,
                    isPK: false,
                    size: 16,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: 'Schedule date and time for the task to be finished',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'ScheduleDateEnd',
                    formControl: 'datetime',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Schedule Date End',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 14,
                    orderOnNew: 14,
                    orderOnDetails: 14,
                    orderOnEdit: 14,
                    orderOnImport: 14,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'datetime',
                    dbName: 'tsk_date_view_until',
                    dbType: 'datetime',
                    isTableField: true,
                    isPK: false,
                    size: 16,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: 'Date and time until this task must be shown, until then it should be hidden',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'DateUntilView',
                    formControl: 'datetime',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Date Until View',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 15,
                    orderOnNew: 15,
                    orderOnDetails: 15,
                    orderOnEdit: 15,
                    orderOnImport: 15,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'tsk_id_user_added',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 50,
                    decimal: 0,
                    minLength: 0,
                    allowNull: false,
                    default: '',
                    dbComment: 'User who created this task',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'User',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'User',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 16,
                    orderOnNew: 16,
                    orderOnDetails: 16,
                    orderOnEdit: 16,
                    orderOnImport: 16,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'tsk_id_user_asigned',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 50,
                    decimal: 0,
                    minLength: 0,
                    allowNull: false,
                    default: '',
                    dbComment: 'User who has been asigned to attend this task',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'UserAsigned',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'User Asigned',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 17,
                    orderOnNew: 17,
                    orderOnDetails: 17,
                    orderOnEdit: 17,
                    orderOnImport: 17,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'tsk_template',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 500,
                    decimal: 0,
                    minLength: 1,
                    allowNull: true,
                    default: '',
                    dbComment: 'Template of the task, used for variable substitution on task creation',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Template',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Template',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 18,
                    orderOnNew: 18,
                    orderOnDetails: 18,
                    orderOnEdit: 18,
                    orderOnImport: 18,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'tsk_template_state',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 4000,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: 'State of variables used to substitute values in the template',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'TemplateState',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Template State',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 19,
                    orderOnNew: 19,
                    orderOnDetails: 19,
                    orderOnEdit: 19,
                    orderOnImport: 19,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'datetime',
                    dbName: 'tsk_date_due',
                    dbType: 'datetime',
                    isTableField: true,
                    isPK: false,
                    size: 16,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: 'Date when the task should be completed',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'DueDate',
                    formControl: 'datetime',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Due Date',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 20,
                    orderOnNew: 20,
                    orderOnDetails: 20,
                    orderOnEdit: 20,
                    orderOnImport: 20,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'tsk_id_related',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 32,
                    decimal: 0,
                    minLength: 32,
                    allowNull: true,
                    default: '',
                    dbComment: 'Id of a related task',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'RelatedTaskId',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Related Task Id',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 21,
                    orderOnNew: 21,
                    orderOnDetails: 21,
                    orderOnEdit: 21,
                    orderOnImport: 21,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'tsk_url',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 4000,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: 'Url related to the task',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'Url',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Url',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 22,
                    orderOnNew: 22,
                    orderOnDetails: 22,
                    orderOnEdit: 22,
                    orderOnImport: 22,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'integer',
                    dbName: 'tsk_ctg_repeats',
                    dbType: 'integer',
                    isTableField: true,
                    isPK: false,
                    size: 4,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Indicates if this task repeats itself as a new undone task when finished',
                    catalogId: 'BOOLEAN',
                    originTable: '',
                    linkedField: '',
                    entName: 'Repeats',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Repeats',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 23,
                    orderOnNew: 23,
                    orderOnDetails: 23,
                    orderOnEdit: 23,
                    orderOnImport: 23,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'tsk_id_main',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 32,
                    decimal: 0,
                    minLength: 32,
                    allowNull: true,
                    default: '',
                    dbComment: 'Id of the main task that configured the repetition rules',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'RepetitionMainTaskId',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Repetition Main Task Id',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 24,
                    orderOnNew: 24,
                    orderOnDetails: 24,
                    orderOnEdit: 24,
                    orderOnImport: 24,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'integer',
                    dbName: 'tsk_ctg_rep_type',
                    dbType: 'integer',
                    isTableField: true,
                    isPK: false,
                    size: 4,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Indicates the repetition rule that applies to the task when finished',
                    catalogId: 'TASK_REPETITION_TYPE',
                    originTable: '',
                    linkedField: '',
                    entName: 'RepetitionType',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Repetition Type',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 25,
                    orderOnNew: 25,
                    orderOnDetails: 25,
                    orderOnEdit: 25,
                    orderOnImport: 25,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'integer',
                    dbName: 'tsk_ctg_rep_after_completion',
                    dbType: 'integer',
                    isTableField: true,
                    isPK: false,
                    size: 4,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Indicates the repetition projection should be calculated after the repetition or not',
                    catalogId: 'BOOLEAN',
                    originTable: '',
                    linkedField: '',
                    entName: 'RepeatAfterCompletion',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Repeat After Completion',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 26,
                    orderOnNew: 26,
                    orderOnDetails: 26,
                    orderOnEdit: 26,
                    orderOnImport: 26,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'integer',
                    dbName: 'tsk_ctg_rep_end',
                    dbType: 'integer',
                    isTableField: true,
                    isPK: false,
                    size: 4,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Indicates the repetition end rule',
                    catalogId: 'TASK_REPETITION_END_AT',
                    originTable: '',
                    linkedField: '',
                    entName: 'RepetitionEnd',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Repetition Ends At',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 27,
                    orderOnNew: 27,
                    orderOnDetails: 27,
                    orderOnEdit: 27,
                    orderOnImport: 27,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'datetime',
                    dbName: 'tsk_rep_date_end',
                    dbType: 'datetime',
                    isTableField: true,
                    isPK: false,
                    size: 16,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: 'Date when the repetitions end',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'RepetitionEndDate',
                    formControl: 'datetime',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Repetition End Date',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 28,
                    orderOnNew: 28,
                    orderOnDetails: 28,
                    orderOnEdit: 28,
                    orderOnImport: 28,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'integer',
                    dbName: 'tsk_rep_end_iteration',
                    dbType: 'integer',
                    isTableField: true,
                    isPK: false,
                    size: 4,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Total number of iterations that the task should be done to end repetition',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'RepetitionEndIterations',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Repetition End Iterations',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 29,
                    orderOnNew: 29,
                    orderOnDetails: 29,
                    orderOnEdit: 29,
                    orderOnImport: 29,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'integer',
                    dbName: 'tsk_rep_iteration',
                    dbType: 'integer',
                    isTableField: true,
                    isPK: false,
                    size: 4,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Number of iteration of this task',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'RepetitionIteration',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Repetition Iteration',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 30,
                    orderOnNew: 30,
                    orderOnDetails: 30,
                    orderOnEdit: 30,
                    orderOnImport: 30,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'integer',
                    dbName: 'tsk_rep_frequency',
                    dbType: 'integer',
                    isTableField: true,
                    isPK: false,
                    size: 4,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Frequency of repetition',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'RepetitionFrequency',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Repetition Frequency',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 31,
                    orderOnNew: 31,
                    orderOnDetails: 31,
                    orderOnEdit: 31,
                    orderOnImport: 31,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'integer',
                    dbName: 'tsk_ctg_rep_frequency_rule',
                    dbType: 'integer',
                    isTableField: true,
                    isPK: false,
                    size: 4,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Indicates the repetition frequency rule',
                    catalogId: 'TASK_REPETITION_FREQUENCY',
                    originTable: '',
                    linkedField: '',
                    entName: 'RepetitionFrequencyRule',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Repetition Frequency Rule',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 32,
                    orderOnNew: 32,
                    orderOnDetails: 32,
                    orderOnEdit: 32,
                    orderOnImport: 32,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'string',
                    dbName: 'tsk_rep_weekdays',
                    dbType: 'string',
                    isTableField: true,
                    isPK: false,
                    size: 7,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: 'Selected days of the week on task repetition',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'RepetitionWeekdays',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Repetition Days of the Week',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 33,
                    orderOnNew: 33,
                    orderOnDetails: 33,
                    orderOnEdit: 33,
                    orderOnImport: 33,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'creationDate',
                    dbName: 'tsk_date_add',
                    dbType: 'datetime',
                    isTableField: true,
                    isPK: false,
                    size: 0,
                    decimal: 0,
                    minLength: 0,
                    allowNull: false,
                    default: '',
                    dbComment: 'Creation date of record in table',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'CreationDate',
                    formControl: 'Datetime',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [
                        'SAVE_DATE_AT_NEW'
                    ],
                    displayName: 'Creation Date',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 34,
                    orderOnNew: 34,
                    orderOnDetails: 34,
                    orderOnEdit: 34,
                    orderOnImport: 34,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'modificationDate',
                    dbName: 'tsk_date_mod',
                    dbType: 'datetime',
                    isTableField: true,
                    isPK: false,
                    size: 0,
                    decimal: 0,
                    minLength: 0,
                    allowNull: false,
                    default: '',
                    dbComment: 'Last modification date of record in table',
                    catalogId: '',
                    originTable: '',
                    linkedField: '',
                    entName: 'ModDate',
                    formControl: 'Datetime',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [
                        'SAVE_DATE_AT_NEW',
                        'SAVE_DATE_AT_EDIT'
                    ],
                    displayName: 'Last Modification Date',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 35,
                    orderOnNew: 35,
                    orderOnDetails: 35,
                    orderOnEdit: 35,
                    orderOnImport: 35,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'status',
                    dbName: 'tsk_ctg_status',
                    dbType: 'integer',
                    isTableField: true,
                    isPK: false,
                    size: 4,
                    decimal: 0,
                    minLength: 1,
                    allowNull: false,
                    default: '',
                    dbComment: 'Record status in table',
                    catalogId: 'RECORD_STATUS',
                    originTable: 'CATALOG',
                    linkedField: '',
                    entName: 'Status',
                    formControl: 'Combobox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Status',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 36,
                    orderOnNew: 36,
                    orderOnDetails: 36,
                    orderOnEdit: 36,
                    orderOnImport: 36,
                    globalOrder: undefined,
                    value: null
                }, {
                    templateId: 'catalog',
                    dbName: 'tsk_txt_in_process',
                    dbType: 'string',
                    isTableField: false,
                    isPK: false,
                    size: 250,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: 'Indicates if this task is currently being attended or not',
                    catalogId: 'BOOLEAN',
                    originTable: 'CATALOG',
                    linkedField: 'tsk_ctg_in_process',
                    entName: 'TextInProgress',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'In Progress',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 37,
                    orderOnNew: 37,
                    orderOnDetails: 37,
                    orderOnEdit: 37,
                    orderOnImport: 37,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'catalog',
                    dbName: 'tsk_txt_repeats',
                    dbType: 'string',
                    isTableField: false,
                    isPK: false,
                    size: 250,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: 'Indicates if this task repeats itself as a new undone task when finished',
                    catalogId: 'BOOLEAN',
                    originTable: 'CATALOG',
                    linkedField: 'tsk_ctg_repeats',
                    entName: 'TextRepeats',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Repeats',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 38,
                    orderOnNew: 38,
                    orderOnDetails: 38,
                    orderOnEdit: 38,
                    orderOnImport: 38,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'catalog',
                    dbName: 'tsk_txt_rep_type',
                    dbType: 'string',
                    isTableField: false,
                    isPK: false,
                    size: 250,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: 'Indicates the repetition rule that applies to the task when finished',
                    catalogId: 'TASK_REPETITION_TYPE',
                    originTable: 'CATALOG',
                    linkedField: 'tsk_ctg_rep_type',
                    entName: 'TextRepetitionType',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Repetition Type',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 39,
                    orderOnNew: 39,
                    orderOnDetails: 39,
                    orderOnEdit: 39,
                    orderOnImport: 39,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'catalog',
                    dbName: 'tsk_txt_rep_after_completion',
                    dbType: 'string',
                    isTableField: false,
                    isPK: false,
                    size: 250,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: 'Indicates the repetition projection should be calculated after the repetition or not',
                    catalogId: 'BOOLEAN',
                    originTable: 'CATALOG',
                    linkedField: 'tsk_ctg_rep_after_completion',
                    entName: 'TextRepeatAfterCompletion',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Repeat After Completion',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 40,
                    orderOnNew: 40,
                    orderOnDetails: 40,
                    orderOnEdit: 40,
                    orderOnImport: 40,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'catalog',
                    dbName: 'tsk_txt_rep_end',
                    dbType: 'string',
                    isTableField: false,
                    isPK: false,
                    size: 250,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: 'Indicates the repetition end rule',
                    catalogId: 'TASK_REPETITION_END_AT',
                    originTable: 'CATALOG',
                    linkedField: 'tsk_ctg_rep_end',
                    entName: 'TextRepetitionEnd',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Repetition Ends At',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 41,
                    orderOnNew: 41,
                    orderOnDetails: 41,
                    orderOnEdit: 41,
                    orderOnImport: 41,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'catalog',
                    dbName: 'tsk_txt_rep_frequency_rule',
                    dbType: 'string',
                    isTableField: false,
                    isPK: false,
                    size: 250,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: 'Indicates the repetition frequency rule',
                    catalogId: 'TASK_REPETITION_FREQUENCY',
                    originTable: 'CATALOG',
                    linkedField: 'tsk_ctg_rep_frequency_rule',
                    entName: 'TextRepetitionFrequencyRule',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Repetition Frequency Rule',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 42,
                    orderOnNew: 42,
                    orderOnDetails: 42,
                    orderOnEdit: 42,
                    orderOnImport: 42,
                    globalOrder: 0,
                    value: null
                }, {
                    templateId: 'catalog',
                    dbName: 'tsk_txt_status',
                    dbType: 'string',
                    isTableField: false,
                    isPK: false,
                    size: 250,
                    decimal: 0,
                    minLength: 0,
                    allowNull: true,
                    default: '',
                    dbComment: 'Record status in table',
                    catalogId: 'RECORD_STATUS',
                    originTable: 'CATALOG',
                    linkedField: 'tsk_ctg_status',
                    entName: 'TextStatus',
                    formControl: 'Textbox',
                    captureRequired: false,
                    appearsByDefaultOnGrid: true,
                    specialRules: [],
                    displayName: 'Status',
                    tooltip: '',
                    isRecordName: false,
                    gridOrder: 43,
                    orderOnNew: 43,
                    orderOnDetails: 43,
                    orderOnEdit: 43,
                    orderOnImport: 43,
                    globalOrder: 0,
                    value: null
                }
            ],
            view: []
        };
        this.recordName = function () {
            return _this.metadata.fields.filter(function (f) { return f.isRecordName; }).map(function (f) {
                return f.dbName + " = " + _this[f.dbName];
            }).join(', ');
        };
        if (base !== undefined) {
            this.tsk_id = base.tsk_id;
            this.tsk_id_container = base.tsk_id_container;
            this.tsk_id_record = base.tsk_id_record;
            this.tsk_name = base.tsk_name;
            this.tsk_notes = base.tsk_notes;
            this.tsk_parent = base.tsk_parent;
            this.tsk_order = base.tsk_order;
            this.tsk_date_done = (base.tsk_date_done !== null) ? new Date(base.tsk_date_done) : null;
            this.tsk_total_time_spent = base.tsk_total_time_spent;
            this.tsk_ctg_in_process = base.tsk_ctg_in_process;
            this.tsk_qualifiers = base.tsk_qualifiers;
            this.tsk_tags = base.tsk_tags;
            this.tsk_estimated_duration = base.tsk_estimated_duration;
            this.tsk_schedule_date_start = (base.tsk_schedule_date_start !== null) ? new Date(base.tsk_schedule_date_start) : null;
            this.tsk_schedule_date_end = (base.tsk_schedule_date_end !== null) ? new Date(base.tsk_schedule_date_end) : null;
            this.tsk_date_view_until = (base.tsk_date_view_until !== null) ? new Date(base.tsk_date_view_until) : null;
            this.tsk_id_user_added = base.tsk_id_user_added;
            this.tsk_id_user_asigned = base.tsk_id_user_asigned;
            this.tsk_template = base.tsk_template;
            this.tsk_template_state = base.tsk_template_state;
            this.tsk_date_due = (base.tsk_date_due !== null) ? new Date(base.tsk_date_due) : null;
            this.tsk_id_related = base.tsk_id_related;
            this.tsk_url = base.tsk_url;
            this.tsk_ctg_repeats = base.tsk_ctg_repeats;
            this.tsk_id_main = base.tsk_id_main;
            this.tsk_ctg_rep_type = base.tsk_ctg_rep_type;
            this.tsk_ctg_rep_after_completion = base.tsk_ctg_rep_after_completion;
            this.tsk_ctg_rep_end = base.tsk_ctg_rep_end;
            this.tsk_rep_date_end = (base.tsk_rep_date_end !== null) ? new Date(base.tsk_rep_date_end) : null;
            this.tsk_rep_end_iteration = base.tsk_rep_end_iteration;
            this.tsk_rep_iteration = base.tsk_rep_iteration;
            this.tsk_rep_frequency = base.tsk_rep_frequency;
            this.tsk_ctg_rep_frequency_rule = base.tsk_ctg_rep_frequency_rule;
            this.tsk_rep_weekdays = base.tsk_rep_weekdays;
            this.tsk_date_add = (base.tsk_date_add !== null) ? new Date(base.tsk_date_add) : null;
            this.tsk_date_mod = (base.tsk_date_mod !== null) ? new Date(base.tsk_date_mod) : null;
            this.tsk_ctg_status = base.tsk_ctg_status;
            this.tsk_txt_in_process = base.tsk_txt_in_process;
            this.tsk_txt_repeats = base.tsk_txt_repeats;
            this.tsk_txt_rep_type = base.tsk_txt_rep_type;
            this.tsk_txt_rep_after_completion = base.tsk_txt_rep_after_completion;
            this.tsk_txt_rep_end = base.tsk_txt_rep_end;
            this.tsk_txt_rep_frequency_rule = base.tsk_txt_rep_frequency_rule;
            this.tsk_txt_status = base.tsk_txt_status;
        }
    }
    return Task;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\data\code\intranet\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map