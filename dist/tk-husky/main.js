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
		var e = new Error('Cannot find module "' + req + '".');
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/navbar */ "./src/app/navbar/navbar.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _event_event_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./event/event.component */ "./src/app/event/event.component.ts");
/* harmony import */ var _organization_organization_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./organization/organization.component */ "./src/app/organization/organization.component.ts");
/* harmony import */ var _services_event_service_client__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/event.service.client */ "./src/app/services/event.service.client.ts");
/* harmony import */ var _services_activity_service_client__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/activity.service.client */ "./src/app/services/activity.service.client.ts");
/* harmony import */ var _services_bookmark_service_client__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/bookmark.service.client */ "./src/app/services/bookmark.service.client.ts");
/* harmony import */ var _services_comment_service_client__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/comment.service.client */ "./src/app/services/comment.service.client.ts");
/* harmony import */ var _services_follow_service_client__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/follow.service.client */ "./src/app/services/follow.service.client.ts");
/* harmony import */ var _services_like_service_client__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/like.service.client */ "./src/app/services/like.service.client.ts");
/* harmony import */ var _services_org_service_client__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/org.service.client */ "./src/app/services/org.service.client.ts");
/* harmony import */ var _event_edit_event_edit_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./event-edit/event-edit.component */ "./src/app/event-edit/event-edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _navbar_navbar__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
                _event_event_component__WEBPACK_IMPORTED_MODULE_12__["EventComponent"],
                _organization_organization_component__WEBPACK_IMPORTED_MODULE_13__["OrganizationComponent"],
                _event_edit_event_edit_component__WEBPACK_IMPORTED_MODULE_21__["EventEditComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_6__["routing"]
            ],
            providers: [_services_user_service_client__WEBPACK_IMPORTED_MODULE_10__["UserServiceClient"],
                _services_event_service_client__WEBPACK_IMPORTED_MODULE_14__["EventServiceClient"],
                _services_activity_service_client__WEBPACK_IMPORTED_MODULE_15__["ActivityServiceClient"],
                _services_bookmark_service_client__WEBPACK_IMPORTED_MODULE_16__["BookmarkServiceClient"],
                _services_comment_service_client__WEBPACK_IMPORTED_MODULE_17__["CommentServiceClient"],
                _services_follow_service_client__WEBPACK_IMPORTED_MODULE_18__["FollowServiceClient"],
                _services_like_service_client__WEBPACK_IMPORTED_MODULE_19__["LikeServiceClient"],
                _services_org_service_client__WEBPACK_IMPORTED_MODULE_20__["OrgServiceClient"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _event_event_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event/event.component */ "./src/app/event/event.component.ts");
/* harmony import */ var _event_edit_event_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./event-edit/event-edit.component */ "./src/app/event-edit/event-edit.component.ts");
/* harmony import */ var _organization_organization_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./organization/organization.component */ "./src/app/organization/organization.component.ts");








var appRoutes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'event', component: _event_event_component__WEBPACK_IMPORTED_MODULE_5__["EventComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
    { path: 'organization', component: _organization_organization_component__WEBPACK_IMPORTED_MODULE_7__["OrganizationComponent"] },
    { path: 'organization/:orgId', component: _organization_organization_component__WEBPACK_IMPORTED_MODULE_7__["OrganizationComponent"] },
    { path: 'event/:eventId', component: _event_event_component__WEBPACK_IMPORTED_MODULE_5__["EventComponent"] },
    { path: 'event-edit', component: _event_edit_event_edit_component__WEBPACK_IMPORTED_MODULE_6__["EventEditComponent"] },
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/event-edit/event-edit.component.css":
/*!*****************************************************!*\
  !*** ./src/app/event-edit/event-edit.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#body {\r\n  padding-top: 70px;\r\n  padding-bottom: 300px;\r\n}\r\n\r\n\r\n.tags li {\r\n  margin: 3px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/event-edit/event-edit.component.html":
/*!******************************************************!*\
  !*** ./src/app/event-edit/event-edit.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- Navigation -->\r\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\r\n    <div class=\"container\">\r\n        <a class=\"navbar-brand\" routerLink=\"../home\">Husky Neighborhood</a>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\"\r\n            aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\r\n            <ul class=\"navbar-nav mr-auto\">\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" routerLink=\"../home\">Events\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" routerLink=\"../organization\">Profile</a>\r\n                </li>\r\n                <!-- <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#\">Contact</a>\r\n      </li> -->\r\n            </ul>\r\n\r\n          <button class=\"btn btn-danger\"  (click) = \"logout()\">Log out</button>\r\n\r\n        </div>\r\n    </div>\r\n</nav>\r\n\r\n\r\n<div class=\"container post-event-container\" id=\"body\" >\r\n  <form #postEventForm=\"ngForm\" >\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n\r\n                <div class=\"col-xs-6\">\r\n                    <label for=\"event_name\">\r\n                        <h4>Event Name</h4>\r\n                    </label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"event_name\" [(ngModel)]=\"event_name\"  id=\"event_name\"\r\n                        placeholder=\"Event name\" title=\"enter the name of the event.\">\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n\r\n                <div class=\"col-xs-6\">\r\n                    <label for=\"event_description\">\r\n                        <h4>Event Description</h4>\r\n                    </label>\r\n                    <textarea class=\"form-control\" placeholder=\"Event Description\"  style=\"height:250px\" name=\"event_description\" [(ngModel)]=\"event_description\" ></textarea>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n\r\n                <div class=\"col-xs-6\">\r\n                    <label for=\"event_location\">\r\n                        <h4>Location</h4>\r\n                    </label>\r\n                    <input type=\"email\" class=\"form-control\" name=\"event_location\" [(ngModel)]=\"event_location\" id=\"location\" placeholder=\"Ell Hall\"\r\n                        title=\"enter a location\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col-xs-6 tags\">\r\n\r\n                    <h4>Tags</h4>\r\n\r\n                    <ul class=\"list-unstyled \">\r\n                      <li class=\"btn badge badge-success\" (click)=\"nallert()\"> Free food </li>\r\n                      <hr/>\r\n                       <li class=\"btn badge badge-dark\" (click)=\"nallert()\"> Books </li>\r\n                       <li class=\"btn badge badge-dark\" (click)=\"nallert()\"> Social </li>\r\n                       <li class=\"btn badge badge-dark\" (click)=\"nallert()\"> Educational </li>\r\n                       <li class=\"btn badge badge-dark\" (click)=\"nallert()\"> Art </li>\r\n                       <li class=\"btn badge badge-dark\" (click)=\"nallert()\"> Writing </li>\r\n                       <li class=\"btn badge badge-dark\" (click)=\"nallert()\"> Job Opportunity </li>\r\n                      <li class=\"btn badge badge-dark\" (click)=\"nallert()\"> More tags </li>\r\n                      <li class=\"btn badge badge-dark\" (click)=\"nallert()\"> More tags </li>\r\n                      <li class=\"btn badge badge-dark\" (click)=\"nallert()\"> More tags </li>\r\n                      <li class=\"btn badge badge-dark\" (click)=\"nallert()\"> More tags </li>\r\n                      <li class=\"btn badge badge-dark\" (click)=\"nallert()\"> More tags </li>\r\n                      <li class=\"btn badge badge-dark\" (click)=\"nallert()\"> More tags </li>\r\n                      <li class=\"btn badge badge-dark\" (click)=\"nallert()\"> More tags </li>\r\n\r\n\r\n\r\n                    </ul>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-6\">\r\n\r\n          <div class=\"col-xs-6\">\r\n                <div class=\"form-group text-center\" >\r\n                  <label for=\"img-upload\" >\r\n                      <h4 >Upload Photo</h4>\r\n                  </label>\r\n                  <input type=\"text\" class=\"form-control btn\" placeholder=\"Photo url\" name=\"img-upload\"\r\n                      id=\"img-upload\">\r\n\r\n                  <img src=\"./assets/library.jpeg\" width=\"300px\" style=\"margin-top: 62px; margin-bottom: 22px; border-radius:10%\"/>\r\n\r\n              </div>\r\n          </div>\r\n          <!--<div class=\"form-group\">-->\r\n\r\n              <!--<div class=\"col-xs-6\">-->\r\n                  <!--<img style=\"width:50%\" src=\"\" id=\"img-preview\">-->\r\n              <!--</div>-->\r\n          <!--</div>-->\r\n          <div class=\"form-group text-center\" >\r\n\r\n              <div class=\"col-xs-6\" >\r\n                  <label for=\"date\">\r\n                      <h4>Date</h4>\r\n                  </label>\r\n                  <div class=\"row\">\r\n                      <div class=\"col\">\r\n                          Starts <input type=\"date\" class=\"form-control\" name=\"start_date\"\r\n                              [(ngModel)]=\"start_date\"\r\n                              id=\"start-date\"\r\n                              title=\"enter start date.\">\r\n\r\n                      </div>\r\n                      <div class=\"col\">\r\n                          Ends <input type=\"date\" class=\"form-control\" name=\"end_date\"\r\n                              [(ngModel)]=\"end_date\"\r\n                              id=\"end-date\"\r\n                              title=\"enter end date\">\r\n                      </div>\r\n                  </div>\r\n\r\n              </div>\r\n          </div>\r\n          <br/>\r\n          <div class=\"form-group text-center\">\r\n\r\n              <div class=\"col-xs-6\">\r\n                  <label for=\"time\">\r\n                      <h4>Time</h4>\r\n                  </label>\r\n                  <div class=\"row\">\r\n                      <div class=\"col\">\r\n                          Starts <input type=\"time\" class=\"form-control\"\r\n                              name=\"start_time\"\r\n                              [(ngModel)]=\"start_time\"\r\n                              id=\"start-time\"\r\n                              title=\"enter start time.\">\r\n\r\n                      </div>\r\n                      <div class=\"col\">\r\n                          Ends <input type=\"time\" class=\"form-control\"\r\n                              name=\"end_time\"\r\n                              [(ngModel)]=\"end_time\"\r\n                              id=\"end-time\"\r\n                              title=\"enter end time.\">\r\n                      </div>\r\n                  </div>\r\n\r\n              </div>\r\n          </div>\r\n          <br/>\r\n          <div class=\"col-xs-12\">\r\n            <br/>\r\n              <button id=\"postEvent\" type=\"submit\" class=\"btn btn-block btn-lg btn-success\" (click)=\"postEvent()\" > Post</button>\r\n              <button id=\"resetEvent\" type=\"submit\" class=\"btn btn-block btn-lg btn-danger\" (click)=\"resetEvent()\"> Reset</button>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n  </form>\r\n</div >\r\n"

/***/ }),

/***/ "./src/app/event-edit/event-edit.component.ts":
/*!****************************************************!*\
  !*** ./src/app/event-edit/event-edit.component.ts ***!
  \****************************************************/
/*! exports provided: EventEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventEditComponent", function() { return EventEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_event_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/event.service.client */ "./src/app/services/event.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventEditComponent = /** @class */ (function () {
    function EventEditComponent(router, eventService, userService) {
        var _this = this;
        this.router = router;
        this.eventService = eventService;
        this.userService = userService;
        this.logout = function () {
            var r = confirm("Are you sure you want to logout!");
            if (r == true) {
                _this.userService.logout().then(function () {
                    _this.router.navigate(['login']);
                });
            }
            else {
            }
        };
    }
    EventEditComponent.prototype.postEvent = function () {
        var _this = this;
        console.log("inside postEvent");
        var toCreateEvent = {
            title: this.event_name,
            description: this.event_description,
            venue: this.event_location,
            start_time: new Date(this.start_date + 'T' + this.start_time),
            end_time: new Date(this.end_date + 'T' + this.end_time),
            overview: this.event_description,
            last_upd_date: Date.now()
        };
        this.eventService.createEvent(toCreateEvent)
            .then(function (event) {
            console.log(event);
            _this.router.navigate(['home']);
        });
    };
    EventEditComponent.prototype.resetEvent = function () {
        console.log("inside resetEvent");
        this.event_name = '';
        this.event_description = '';
        this.event_location = '';
        this.start_date = '';
        this.end_date = '';
        this.start_time = '';
        this.end_time = '';
    };
    EventEditComponent.prototype.ngOnInit = function () {
    };
    EventEditComponent.prototype.nallert = function () {
        alert("The functionality is not implemented yet");
    };
    EventEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-edit',
            template: __webpack_require__(/*! ./event-edit.component.html */ "./src/app/event-edit/event-edit.component.html"),
            styles: [__webpack_require__(/*! ./event-edit.component.css */ "./src/app/event-edit/event-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_event_service_client__WEBPACK_IMPORTED_MODULE_1__["EventServiceClient"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserServiceClient"]])
    ], EventEditComponent);
    return EventEditComponent;
}());



/***/ }),

/***/ "./src/app/event/event.component.css":
/*!*******************************************!*\
  !*** ./src/app/event/event.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/event/event.component.html":
/*!********************************************!*\
  !*** ./src/app/event/event.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navigation -->\r\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\r\n  <div class=\"container\">\r\n    <img src=\"./assets/paws.png\" width=\"40px\" style=\"border-radius: 20%; margin-right : 20px\">\r\n    <a class=\"navbar-brand\" routerLink=\"../../home\">Husky Neighborhood</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\"\r\n            aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"../../home\">Events\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"../../profile\">Profile</a>\r\n        </li>\r\n\r\n        <!-- <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\">Contact</a>\r\n        </li> -->\r\n      </ul>\r\n\r\n      <button class=\"btn btn-danger\"  (click) = \"logout()\">Log out</button>\r\n\r\n    </div>\r\n  </div>\r\n</nav>\r\n<!-- Page Content -->\r\n<div class=\"container\" style=\"padding-top: 56px;\">\r\n  <div class=\"row\">\r\n    <!-- Blog Entries Column -->\r\n    <div class=\"col-md-8\">\r\n      <h1 class=\"my-4\">{{event.title}}\r\n        <!-- <small>Secondary Text</small> -->\r\n      </h1>\r\n\r\n      <!-- Blog Post -->\r\n      <div class=\"card mb-4\">\r\n\r\n        <img class=\"card-img-top\" src=\"assets/book-love.jpeg\" alt=\"Card image cap\">\r\n        <div class=\"card-img-overlay\" style=\"padding:0px;\">\r\n          <div class=\"float-right hidden-md-up rounded\"\r\n               style=\"background-color: rgb(240, 241, 242)\">\r\n            <div class=\"text-center\">\r\n              <i   [ngClass]=\"this.bookmarked ? 'btn text-warning fa fa-bookmark fa-2x' : 'btn text-warning far fa-bookmark fa-2x'\"\r\n                   (click)=\"bookmarkEvent()\"></i>\r\n              <!-- <i *ngSwitchCase=\"false\" (click)=\"bookmark()\" class=\"btn text-warning far fa-bookmark fa-2x\"></i> -->\r\n            </div>\r\n            <div  class=\"text-center\">\r\n              <i class=\"btn text-danger far fa-heart fa-2x\"></i>\r\n              <!-- <i *ngSwitchCase=\"false\" (click)=\"like()\" class=\"btn text-danger far fa-heart fa-2x\"></i> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n\r\n          <h3 class=\"card-title\">Description</h3>\r\n          <p class=\"card-text\">{{event.description}}</p>\r\n          <!-- <a href=\"#\" class=\"btn btn-primary\">Read More &rarr;</a> -->\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n    <!-- Sidebar Widgets Column -->\r\n    <div class=\"col-md-4\">\r\n\r\n      <div class=\"card-img\">\r\n        <div id=\"googleMap\"></div>\r\n        <br/>\r\n        <br/>\r\n        <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.1272334915802!2d-71.0913603845474!3d42.339810644372825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37a1999cf5ce1%3A0xc97b00e66522b98c!2sNortheastern+University!5e0!3m2!1sen!2sus!4v1552175654390\" width=\"350px\" height=\"350px\" frameborder=\"0\" style=\"border:0; margin-top:56px;\" ></iframe>\r\n        <!-- <script src=\"https://maps.googleapis.com/maps/api/js?key=YOUR_KEY&callback=myMap\"></script> -->\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <p> <strong>WHERE?</strong> {{event.venue}}\r\n        <p> <strong>WHEN?</strong> {{event.start_time | date:'medium'}} to {{event.end_time  | date:'medium'}}\r\n          <!-- <a href=\"#\" class=\"btn btn-primary\">Read More &rarr;</a> -->\r\n      </div>\r\n      <div class=\"card-footer\" id=\"register\">\r\n\r\n        <button class=\"btn btn-primary btn-block\" [ngClass]=\"{'btn-danger': liked}\" (click)=\"registerForEvent(event._id)\" >\r\n          {{registerBtnText}}\r\n        </button>\r\n        <br/>\r\n        <!-- <p><img src=\"img/paw2.jpg\" width=20px/> User1\r\n        <p><img src=\"img/paw2.jpg\" width=20px/> User2\r\n        <p><img src=\"img/paw2.jpg\" width=20px/> User3 -->\r\n        <span>\r\n           <span class=\"btn btn-sm\">\r\n           <img class=\"d-flex justify-content-start\" src=\"./assets/1600.png\" width=\"50px\">\r\n           <strong class=\"float-left\">Name</strong>\r\n           </span>\r\n           <span class=\"btn btn-sm\">\r\n           <img class=\"d-flex justify-content-start\" src=\"./assets/1600.png\" width=\"50px\">\r\n           <strong class=\"float-left\">Name</strong>\r\n           </span>\r\n           <span class=\"btn btn-sm\">\r\n           <img class=\"d-flex justify-content-start\" src=\"./assets/1600.png\" width=\"50px\">\r\n           <strong class=\"float-left\">Name</strong>\r\n           </span>\r\n           <span class=\"btn btn-sm\">\r\n           <img class=\"d-flex justify-content-start\" src=\"./assets/1600.png\" width=\"50px\">\r\n           <strong class=\"float-left\">Name</strong>\r\n           </span>\r\n\r\n         </span>\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n  </div>\r\n\r\n  <div>\r\n\r\n    <!-- <p><strong>User 1:</strong> This seems interesting. </p>\r\n    <p><strong>Ram:</strong> Hi I will attend this event. </p>\r\n    <p> <b id='comments'></b> </p> -->\r\n    <h2 style=\"margin-bottom: 15px\"> Reviews </h2>\r\n\r\n    <div class=\"input-group\">\r\n      <input type='text' class=\"form-control\" id='userInput' name= \"comment\" [(ngModel)] =\"comment\" placeholder='Enter Text Here' />\r\n      <input type='button' class=\"btn btn-primary md-2\"  (click)='addComment()' value='Post a comment'/>\r\n    </div>\r\n    <br/>\r\n    <div *ngIf=\"comments.length > 0\">\r\n      <div *ngFor=\"let comment of comments\">\r\n        <div class=\"row text-center shadow-lg p-3 mb-5 bg-white rounded\" style=\"padding: 5px; margin: 5px;\">\r\n\r\n          <div class=\"col-md-2 rounded \" style=\"padding: 20px\">\r\n            <!--<div class=\"\">-->\r\n            <img  src=\"assets/book-love.jpeg\" width=\"80px\">\r\n            <h5>{{user.username}}</h5>\r\n            <!--</div>-->\r\n          </div>\r\n          <div class=\"col-md-8 bg-light\" style=\"padding: 0px 0px;\">\r\n\r\n            <br/>\r\n            <h5 style=\"margin: 20px\"> {{comment}} </h5>\r\n            <br/>\r\n            <br/>\r\n          </div>\r\n          <!--<div class=\"col-md-1\">-->\r\n          <!--<button class=\"btn btn-lg btn-block btn-danger fa fa-times fa-lg\"></button>-->\r\n          <!--</div>-->\r\n          <div class=\"col-md-2 rounded\" style=\"padding: 20px\">\r\n            <!--<div class=\"\">-->\r\n            <h6><em>02/12/2019</em></h6>\r\n            <br/>\r\n            <br/>\r\n            <!--</div>-->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <br/>\r\n\r\n\r\n  </div>\r\n\r\n</div>\r\n<!-- /.row -->\r\n\r\n\r\n<!-- /.container -->\r\n\r\n<!-- Footer -->\r\n<footer class=\"py-5 bg-dark\">\r\n  <div class=\"container\">\r\n    <p class=\"m-0 text-center text-white\">Copyright &copy; Your Website 2019</p>\r\n  </div>\r\n  <!-- /.container -->\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/event/event.component.ts":
/*!******************************************!*\
  !*** ./src/app/event/event.component.ts ***!
  \******************************************/
/*! exports provided: EventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventComponent", function() { return EventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_event_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/event.service.client */ "./src/app/services/event.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_bookmark_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/bookmark.service.client */ "./src/app/services/bookmark.service.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_like_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/like.service.client */ "./src/app/services/like.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EventComponent = /** @class */ (function () {
    function EventComponent(eventService, bookmarkService, userService, activatedRoute, registerService, router) {
        var _this = this;
        this.eventService = eventService;
        this.bookmarkService = bookmarkService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.registerService = registerService;
        this.router = router;
        this.registerBtnText = "Register";
        this.liked = false;
        this.bookmarked = false;
        this.comments = [];
        this.addComment = function () {
            if (_this.comment.trim() === '') {
                _this.comment = '';
                return;
            }
            console.log("in add");
            _this.comments.push(_this.comment);
            _this.comment = '';
        };
        this.logout = function () {
            var r = confirm("Are you sure you want to logout!");
            if (r == true) {
                _this.userService.logout().then(function () {
                    _this.router.navigate(['login']);
                });
            }
            else {
            }
        };
    }
    EventComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.eventId = params['eventId'];
        });
        console.log(this.eventId);
        this.userService.profile().then(function (user) {
            _this.user = user;
        });
        this.eventService.findEvent(this.eventId)
            .then(function (event) {
            _this.event = event;
            console.log(_this.event);
            _this.checkLike();
            _this.checkBookmark();
        });
    };
    EventComponent.prototype.registerForEvent = function () {
        if (this.liked) {
            this.unlike();
        }
        else {
            this.like();
        }
        this.registerBtnText = (this.liked) ? "Unregister" : "Register";
        //TODO: invoke DB
        // alert("Registration feature still under construction. Once registered your profile icon will appear in the list of icons below the 'Register' button");
    };
    EventComponent.prototype.bookmarkEvent = function () {
        //event.isBookmarked = !event.isBookmarked;
        if (this.bookmarked) {
            this.unbookmark();
        }
        else {
            this.bookmark();
        }
    };
    EventComponent.prototype.checkLike = function () {
        var _this = this;
        this.registerService.checkLike(this.eventId).then(function (response) {
            _this.liked = response;
        });
    };
    EventComponent.prototype.like = function () {
        var _this = this;
        this.registerService.like(this.event)
            .then(function () {
            _this.checkLike();
        });
    };
    EventComponent.prototype.unlike = function () {
        var _this = this;
        this.registerService.unlike(this.event)
            .then(function () {
            _this.checkLike();
        });
    };
    EventComponent.prototype.checkBookmark = function () {
        var _this = this;
        this.bookmarkService.checkBookmark(this.eventId).then(function (response) {
            _this.bookmarked = response;
        });
    };
    EventComponent.prototype.bookmark = function () {
        var _this = this;
        this.bookmarkService.bookmark(this.event)
            .then(function () {
            _this.checkBookmark();
        });
    };
    EventComponent.prototype.unbookmark = function () {
        var _this = this;
        this.bookmarkService.unbookmark(this.event)
            .then(function () {
            _this.checkBookmark();
        });
    };
    EventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event',
            template: __webpack_require__(/*! ./event.component.html */ "./src/app/event/event.component.html"),
            styles: [__webpack_require__(/*! ./event.component.css */ "./src/app/event/event.component.css")]
        }),
        __metadata("design:paramtypes", [_services_event_service_client__WEBPACK_IMPORTED_MODULE_1__["EventServiceClient"],
            _services_bookmark_service_client__WEBPACK_IMPORTED_MODULE_3__["BookmarkServiceClient"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__["UserServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_like_service_client__WEBPACK_IMPORTED_MODULE_5__["LikeServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EventComponent);
    return EventComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#myBtn {\r\n  position: fixed;\r\n  bottom: 20px;\r\n  right: 30px;\r\n  z-index: 99;\r\n  font-size: 18px;\r\n  border: none;\r\n  outline: none;\r\n  background-color: red;\r\n  color: white;\r\n  cursor: pointer;\r\n  padding: 15px;\r\n  border-radius: 4px;\r\n}\r\n\r\n#myBtn:hover {\r\n  background-color: #555;\r\n}\r\n\r\nspan {\r\n  margin: 5px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navigation -->\r\n<script src=\"../event/event.component.spec.ts\"></script>\r\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\r\n  <div class=\"container\">\r\n    <img src=\"./assets/paws.png\" width=\"40px\" style=\"border-radius: 20%; margin-right : 20px\">\r\n    <a class=\"navbar-brand\" routerLink=\"../home\">Husky Neighborhood</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\"\r\n            aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link\" routerLink=\"../home\">Events\r\n            <span class=\"sr-only\">(current)</span>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"../profile\">Profile</a>\r\n        </li>\r\n\r\n        <!-- <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\">Contact</a>\r\n        </li> -->\r\n      </ul>\r\n      <!--<li class=\"nav-item my-2 my-lg-0\">-->\r\n        <button class=\"btn btn-danger\"  (click) = \"logout()\">Log out</button>\r\n      <!--</li>-->\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<!-- Page Content -->\r\n<div class=\"container\" style=\"padding-top: 56px;\">\r\n\r\n  <div class=\"row\">\r\n\r\n    <!-- Blog Entries Column -->\r\n    <div class=\"col-md-8\">\r\n\r\n      <br/>\r\n      <div class=\"d-flex justify-content-end\">\r\n        <div class=\"btn-group\">\r\n          <button type=\"button\" (click)=\"alle()\" class=\"btn btn-secondary btn-filter\">All</button>\r\n          <button type=\"button\" (click)=\"alle()\" class=\"btn btn-default btn-filter\">Relevant</button>\r\n          <button type=\"button\" (click)=\"alle()\" class=\"btn btn-default btn-filter\">Upcoming</button>\r\n        </div>\r\n      </div>\r\n      <br/>\r\n\r\n\r\n      <div class=\"card mb-4\" *ngFor=\"let event of events\">\r\n\r\n        <img class=\"card-img-top\" src=\"./assets/book.jpg\"  width=\"100px\" alt=\"Card image cap\">\r\n\r\n        <div class=\"card-img-overlay\">\r\n          <span class=\"badge badge-primary\"> Free food </span>\r\n          <span class=\"badge badge-secondary\"> Books </span>\r\n          <span class=\"badge badge-success\"> Social </span>\r\n          <span class=\"badge badge-danger\"> Educational </span>\r\n          <span class=\"badge badge-warning\"> Art </span>\r\n          <span class=\"badge badge-info\"> Writing </span>\r\n          <span class=\"badge badge-light\"> Job Opportunity </span>\r\n          <span class=\"badge badge-dark\"> Etc </span>\r\n        </div>\r\n        <div class=\"card-img-overlay\" style=\"padding:0px;\">\r\n          <div class=\"float-right hidden-md-up rounded\" style=\"background-color: rgb(240, 241, 242)\">\r\n            <div class=\"text-center\">\r\n              <i\r\n                [ngClass]=\"event.isBookmarked ? 'btn text-warning fa fa-bookmark fa-2x' : 'btn text-warning far fa-bookmark fa-2x'\"\r\n                (click)=\"bookmark(event)\"></i>\r\n              <!-- <i *ngSwitchCase=\"false\" (click)=\"bookmark()\" class=\"btn text-warning far fa-bookmark fa-2x\"></i> -->\r\n            </div>\r\n            <div class=\"text-center\">\r\n              <i (click)=\"nallert()\" class=\"btn text-danger far fa-heart fa-2x\"></i>\r\n              <!-- <i *ngSwitchCase=\"false\" (click)=\"like()\" class=\"btn text-danger far fa-heart fa-2x\"></i> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card card-body\">\r\n\r\n          <h2 class=\"card-title\">{{event.title}}</h2>\r\n          <p class=\"card-text\">{{event.description}}</p>\r\n          <div>\r\n            <button type=\"button\" class=\" btn-block btn btn-primary\" (click)=\"viewEvent(event._id)\">Read More &rarr;</button>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"card card-footer text-muted\">\r\n          Posted on {{event.last_upd_date | date:'medium'}} by\r\n          <a href=\"./organization.html\">Fiction Addiction Book Club</a>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Blog Post -->\r\n\r\n\r\n    </div>\r\n\r\n    <div class=\"col-md-4\">\r\n      <!-- Search Widget -->\r\n      <div class=\"card my-4\">\r\n        <h5 class=\"card-header\">Search by Title</h5>\r\n        <div class=\"card-body\">\r\n\r\n          <div class=\"input-group\">\r\n            <input  [(ngModel)]=\"this.word\" type=\"text\" class=\"form-control\" placeholder=\"Input the word to search\">\r\n            <span class=\"input-group-btn\">\r\n                <button (click)=\"search()\" class=\"btn btn-secondary\" type=\"button\">Go</button>\r\n              </span>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"card my-4\">\r\n        <h5 class=\"card-header\">Search by Date</h5>\r\n        <div class=\"card-body\">\r\n          <div class=\"input-group\">\r\n            <input type=\"date\" class=\"form-control\" name=\"date\" id=\"date\"\r\n                   title=\"enter date\" disabled>\r\n            <span class=\"input-group-btn\">\r\n                <button class=\"btn btn-secondary\" type=\"button\" disabled>Go</button>\r\n              </span>\r\n          </div>\r\n\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <!-- Categories Widget -->\r\n      <div class=\"card my-4\">\r\n        <h5 class=\"card-header\">Search by Tags</h5>\r\n        <div class=\"card-body\">\r\n          <div class=\"input-group\">\r\n            <input type=\"text\" class=\"form-control\" disabled>\r\n            <span class=\"input-group-btn\">\r\n                <button class=\"btn btn-secondary\" type=\"button\" disabled>Go</button>\r\n              </span>\r\n          </div>\r\n          <br/>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n              <ul class=\"list-unstyled mb-0\">\r\n                <li class=\"btn badge badge-success\"> Free food </li>\r\n                <hr/>\r\n                <li class=\"btn badge badge-dark\"> Books </li>\r\n                <li class=\"btn badge badge-dark\"> Social </li>\r\n                <li class=\"btn badge badge-dark\"> Educational </li>\r\n                <li class=\"btn badge badge-dark\"> Art </li>\r\n                <li class=\"btn badge badge-dark\"> Writing </li>\r\n                <li class=\"btn badge badge-dark\"> Job Opportunity </li>\r\n\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Side Widget -->\r\n      <div class=\"card my-4\">\r\n        <h5 class=\"card-header\">Help (temporary)</h5>\r\n        <div class=\"card-body\">\r\n          This is the page to search events\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n  </div>\r\n  <!-- /.row -->\r\n\r\n</div>\r\n\r\n<button (click)=\"topFunction()\" id=\"myBtn\" title=\"Go to top\">Top ↑</button>\r\n\r\n<footer class=\"py-5 bg-dark\">\r\n  <div class=\"container\">\r\n    <p class=\"m-0 text-center text-white\">@Husky Neighborhood 2019</p>\r\n  </div>\r\n  <!-- /.container -->\r\n</footer>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_event_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/event.service.client */ "./src/app/services/event.service.client.ts");
/* harmony import */ var _services_bookmark_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/bookmark.service.client */ "./src/app/services/bookmark.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import {} from '@types/googlemaps';



var HomeComponent = /** @class */ (function () {
    function HomeComponent(userService, router, eventService, bookmarkService) {
        var _this = this;
        this.userService = userService;
        this.router = router;
        this.eventService = eventService;
        this.bookmarkService = bookmarkService;
        this.events = [];
        this.all = [];
        this.word = "";
        this.viewEvent = function (eventId) {
            //console.log(eventId);
            _this.router.navigate(['/event/' + eventId]);
        };
        this.bookmark = function (event) {
            //event.isBookmarked = !event.isBookmarked;
            if (event.isBookmarked) {
                _this.bookmarkService.unbookmark(event).then(function (response) {
                    event.isBookmarked = false;
                });
            }
            else {
                _this.bookmarkService.bookmark(event).then(function (response) {
                    event.isBookmarked = true;
                });
            }
        };
        this.logout = function () {
            var r = confirm("Are you sure you want to logout!");
            if (r == true) {
                _this.userService.logout().then(function () {
                    _this.router.navigate(['login']);
                });
            }
            else {
            }
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.eventService.findAllEvents()
            .then(function (events) {
            events.forEach(function (event) {
                _this.bookmarkService.checkBookmark(event._id).then(function (response) {
                    console.log(event._id);
                    console.log(response);
                    event.isBookmarked = response;
                });
            });
            console.log(events);
            _this.events = events;
            _this.all = events;
        });
    };
    HomeComponent.prototype.topFunction = function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };
    HomeComponent.prototype.search = function () {
        var _this = this;
        console.log(this.word);
        console.log(this.events[0].title);
        this.events = this.events.filter(function (event) { return event.title !== undefined; })
            .filter(function (e) { return e.title.toLowerCase().includes(_this.word.toLowerCase()); });
        this.word = "";
    };
    HomeComponent.prototype.alle = function () {
        this.events = this.all;
    };
    HomeComponent.prototype.nallert = function () {
        alert("The functionality is not implemented yet");
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_1__["UserServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_event_service_client__WEBPACK_IMPORTED_MODULE_3__["EventServiceClient"],
            _services_bookmark_service_client__WEBPACK_IMPORTED_MODULE_4__["BookmarkServiceClient"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n  font-family: \"Lato\", sans-serif;\r\n}\r\n\r\n.main-head{\r\n  height: 150px;\r\n  background: #FFF;\r\n\r\n}\r\n\r\n.sidenav {\r\n  height: 100%;\r\n  background-color: #000;\r\n  overflow-x: hidden;\r\n  padding-top: 20px;\r\n}\r\n\r\n.main {\r\n  padding: 0px 10px;\r\n}\r\n\r\n@media screen and (max-height: 450px) {\r\n  .sidenav {padding-top: 15px;}\r\n}\r\n\r\n@media screen and (max-width: 450px) {\r\n  .login-form{\r\n    margin-top: 10%;\r\n  }\r\n\r\n  .register-form{\r\n    margin-top: 10%;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 768px){\r\n  .main{\r\n    margin-left: 40%;\r\n  }\r\n\r\n  .sidenav{\r\n    width: 40%;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 0;\r\n    left: 0;\r\n  }\r\n\r\n  .login-form{\r\n    margin-top: 70%;\r\n  }\r\n\r\n  .register-form{\r\n    margin-top: 30%;\r\n  }\r\n}\r\n\r\n.login-main-text{\r\n  margin-top: 20%;\r\n  padding: 60px;\r\n  color: #fff;\r\n}\r\n\r\n.login-main-text h2{\r\n  font-weight: 300;\r\n}\r\n\r\n.btn-black{\r\n  background-color: #000 !important;\r\n  color: #fff;\r\n}\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidenav\">\r\n  <div class=\"login-main-text\">\r\n    <h2>Husky Neighborhood<br> Login Page</h2>\r\n    <p>Login or register from here to access.</p>\r\n    <br />\r\n    <img src=\"./assets/paw2.jpg\" width=\"150px\" style=\"border-radius: 50%;\">\r\n    <p style=\"margin-top: 220px\"> To register new organizations please contact our administration at\r\n      <strong>kryvtsun.t@husky.neu.edu</strong></p>\r\n  </div>\r\n</div>\r\n<div class=\"main\">\r\n  <div class=\"col-md-6 col-sm-12\">\r\n    <div class=\"login-form\">\r\n\r\n      <div>\r\n\r\n        <div *ngIf=\"credentialsError\">\r\n          <p>Invalid login credentials. Please try again.</p>\r\n        </div>\r\n        <div *ngIf=\"noUsernameError\">\r\n          <p> Please enter a username. </p>\r\n        </div>\r\n        <div *ngIf=\"noPasswordError\">\r\n          <p> Please enter a password. </p>\r\n        </div>\r\n      </div>\r\n\r\n      <form>\r\n\r\n        <div class=\"form-group\">\r\n          <label>User Name</label>\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"User Name\" name=\"username\" [(ngModel)]=\"username\"\r\n            required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label>Password</label>\r\n          <input type=\"password\" class=\"form-control\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"password\"\r\n            required>\r\n        </div>\r\n        <span>\r\n          <button type=\"submit\" class=\"btn btn-black\" (click)=\"login()\">Login </button>\r\n          <a style=\"margin-left: 20px;\" routerLink=\"../register\"> Register </a>\r\n        </span>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, service) {
        this.router = router;
        this.service = service;
    }
    LoginComponent.prototype.resetErrors = function () {
        this.credentialsError = false;
        this.noUsernameError = false;
        this.noPasswordError = false;
    };
    LoginComponent.prototype.reset = function () {
        this.username = '';
        this.password = '';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.resetErrors();
        console.log("login");
        if (this.username.trim() === '') {
            this.noUsernameError = true;
        }
        else {
            if (this.password.trim() === '') {
                this.noPasswordError = true;
            }
            else {
                this.service.login(this.username, this.password)
                    .then(function (response) {
                    if (response !== null) {
                        console.log(response);
                        if (response.role === "org") {
                            _this.router.navigate(['organization/' + response._id]);
                        }
                        else {
                            _this.router.navigate(['home']);
                        }
                    }
                    else {
                        _this.credentialsError = true;
                    }
                });
            }
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.reset();
        this.resetErrors();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/user.model.client.ts":
/*!*********************************************!*\
  !*** ./src/app/models/user.model.client.ts ***!
  \*********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.css":
/*!***********************************!*\
  !*** ./src/app/navbar/navbar.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.html":
/*!************************************!*\
  !*** ./src/app/navbar/navbar.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!--put navbar here-->\n"

/***/ }),

/***/ "./src/app/navbar/navbar.ts":
/*!**********************************!*\
  !*** ./src/app/navbar/navbar.ts ***!
  \**********************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    NavbarComponent.prototype.checkStatus = function () {
        var _this = this;
        this.userService.checkStatus().then(function (response) { return _this.loggedIn = response; });
    };
    NavbarComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .then(function () {
            return _this.router.navigate(['login']);
        });
    };
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function () {
            _this.checkStatus();
        });
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.html */ "./src/app/navbar/navbar.html"),
            styles: [__webpack_require__(/*! ./navbar.css */ "./src/app/navbar/navbar.css")],
        }),
        __metadata("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/organization/organization.component.css":
/*!*********************************************************!*\
  !*** ./src/app/organization/organization.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n  /* background: -webkit-linear-gradient(left, #3931af, #00c6ff); */\r\n}\r\n\r\n.events img {\r\n  width: 250px;\r\n}\r\n\r\n.emp-profile{\r\n  padding: 3%;\r\n  margin-top: 3%;\r\n  margin-bottom: 3%;\r\n  border-radius: 0.5rem;\r\n  background: #fff;\r\n}\r\n\r\n.profile-img{\r\n  text-align: center;\r\n}\r\n\r\n.profile-img img{\r\n  width: 70%;\r\n  height: 100%;\r\n  border-radius: 10%;\r\n\r\n}\r\n\r\n.profile-img .file {\r\n  position: relative;\r\n  overflow: hidden;\r\n  margin-top: -20%;\r\n  width: 70%;\r\n  border: none;\r\n  border-radius: 0;\r\n  font-size: 15px;\r\n  background: #212529b8;\r\n}\r\n\r\n.profile-img .file input {\r\n  position: absolute;\r\n  opacity: 0;\r\n  right: 0;\r\n  top: 0;\r\n}\r\n\r\n.profile-head h5{\r\n  color: #333;\r\n}\r\n\r\n.profile-head h6{\r\n  color: #0062cc;\r\n}\r\n\r\n.profile-edit-btn{\r\n  border: none;\r\n  border-radius: 1.5rem;\r\n  width: 70%;\r\n  padding: 2%;\r\n  font-weight: 600;\r\n  color: #6c757d;\r\n  cursor: pointer;\r\n}\r\n\r\n.proile-rating{\r\n  font-size: 12px;\r\n  color: #818182;\r\n  margin-top: 5%;\r\n}\r\n\r\n.proile-rating span{\r\n  color: #495057;\r\n  font-size: 15px;\r\n  font-weight: 600;\r\n}\r\n\r\n.profile-head .nav-tabs{\r\n  margin-bottom:5%;\r\n}\r\n\r\n.profile-head .nav-tabs .nav-link{\r\n  font-weight:600;\r\n  border: none;\r\n}\r\n\r\n.profile-head .nav-tabs .nav-link.active{\r\n  border: none;\r\n  border-bottom:2px solid #0062cc;\r\n}\r\n\r\n.profile-work{\r\n  padding: 14%;\r\n  margin-top: -15%;\r\n}\r\n\r\n.profile-work p{\r\n  font-size: 12px;\r\n  color: #818182;\r\n  font-weight: 600;\r\n  margin-top: 10%;\r\n}\r\n\r\n.profile-work a{\r\n  text-decoration: none;\r\n  color: #495057;\r\n  font-weight: 600;\r\n  font-size: 14px;\r\n}\r\n\r\n.profile-work ul{\r\n  list-style: none;\r\n}\r\n\r\n.profile-tab label{\r\n  font-weight: 600;\r\n}\r\n\r\n.profile-tab p{\r\n  font-weight: 600;\r\n  color: #0062cc;\r\n}\r\n"

/***/ }),

/***/ "./src/app/organization/organization.component.html":
/*!**********************************************************!*\
  !*** ./src/app/organization/organization.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<!-- Navigation -->\r\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\r\n  <div class=\"container\">\r\n    <img src=\"assets/paws.png\" width=\"40px\" style=\"border-radius: 20%; margin-right : 20px\">\r\n    <a class=\"navbar-brand\" routerLink=\"../home\">Husky Neighborhood</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\"\r\n            aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"../home\">Events\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link\" routerLink=\"../organization\">Profile<span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n        <!-- <li class=\"nav-item\">\r\n<a class=\"nav-link\" href=\"#\">Contact</a>\r\n</li> -->\r\n      </ul>\r\n\r\n      <button class=\"btn btn-danger\"  (click) = \"logout()\">Log out</button>\r\n\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"container emp-profile\">\r\n  <form method=\"post\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"profile-img\">\r\n          <img src=\"assets/books.jpg\" alt=\"\" />\r\n          <!--<div class=\"file btn btn-lg btn-primary\">-->\r\n            <!--Change Photo-->\r\n            <!--<input type=\"file\" name=\"file\" />-->\r\n          <!--</div>-->\r\n\r\n        </div>\r\n        <br/>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"profile-head\">\r\n          <h5>\r\n            Fiction Addiction Book Club\r\n          </h5>\r\n          <h6>\r\n            A Club for Bookworms!\r\n          </h6>\r\n\r\n          <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" role=\"tab\"\r\n                 aria-controls=\"home\" aria-selected=\"true\">About</a>\r\n            </li>\r\n\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-2\">\r\n        <a routerLink=\"../organization\" class=\"btn profile-edit-btn\">\r\n          <i class=\"far fa-edit\"></i> Edit Profile </a>\r\n\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"profile-work\">\r\n          <ul class=\"list-group\">\r\n            <li class=\"list-group-item text-muted\">Activity <i class=\"fa fa-dashboard fa-1x\"></i></li>\r\n\r\n            <li class=\"list-group-item text-right\"><span class=\"pull-left\"><strong>Likes</strong></span>\r\n              13</li>\r\n\r\n            <li class=\"list-group-item text-right\"><span\r\n              class=\"pull-left\"><strong>Followers</strong></span> 78</li>\r\n          </ul>\r\n          <hr />\r\n          <div style=\"word-break: break-all; word-wrap: break-word;\">\r\n            <p>WEBSITE</p>\r\n            <a\r\n              href=\"https://www.facebook.com/NEUFictionAddiction/\">https://www.facebook.com/NEUFictionAddiction/</a><br />\r\n          </div>\r\n          <!-- <p>SKILLS</p>\r\n                <a href=\"\">Web Designer</a><br/>\r\n                <a href=\"\">Web Developer</a><br/>\r\n                <a href=\"\">WordPress</a><br/>\r\n                <a href=\"\">WooCommerce</a><br/>\r\n                <a href=\"\">PHP, .Net</a><br/> -->\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-8\">\r\n        <div class=\"tab-content profile-tab\" id=\"myTabContent\">\r\n          <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\r\n\r\n            <div class=\"row\">\r\n\r\n              <div class=\"col-md-12\">\r\n                <p style=\"color:black\">Fiction Addiction is a book club for all Northeastern\r\n                  students. We plan on\r\n                  reading one work a month and having bi-monthly meetings to discuss it. Contrary\r\n                  to the name of the club, we will not be limiting ourselves to fiction. Votes\r\n                  will be cast by all members of the club to determine what we read each month. We\r\n                  also anticipate holding fun events for members, such as bringing local authors\r\n                  in to speak about their books or participating in activities related to the\r\n                  books we are reading. This club is for anyone who has an interest in reading or\r\n                  enjoys discussing literary topics with others.</p>\r\n              </div>\r\n            </div>\r\n            <br />\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6\">\r\n                <label>Email</label>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <p>NEUFictionAddiction@gmail.com</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6\">\r\n                <label>Phone</label>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <p>123 456 7890</p>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n        <br />\r\n        <br />\r\n\r\n\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-5 float-right mr-0\">\r\n      <!-- <input onclick=\"window.location='post-event.html';\" type=\"submit\" class=\"profile-edit-btn float-right\" name=\"btnAddMore\" value=\"Post New Event\" /> -->\r\n      <a routerLink=\"../event-edit\" class=\"btn btn-success float-right\"> <i class=\"fas fa-plus\"></i> Post New Event </a>\r\n    </div>\r\n\r\n\r\n    <div class=\"events\">\r\n    <ul class=\"nav nav-tabs\" id=\"eventsTab\" role=\"tablist\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link active\" id=\"events-tab\" data-toggle=\"tab\" role=\"tab\"\r\n           aria-controls=\"home\" aria-selected=\"true\">Upcoming Events</a>\r\n      </li>\r\n    </ul>\r\n    <br />\r\n    <div class=\"card w-41 flex-row\">\r\n      <div class=\"card-header border-0\">\r\n        <img class=\"img-fluid\" src=\"./assets/book-love.jpeg\" alt=\"img\">\r\n      </div>\r\n\r\n      <div class=\"card-body col-md-8\">\r\n        <h5 class=\"card-title\">Blind Date with a Book</h5>\r\n        <p class=\"card-text\">Don't judge a book by its cover. Put your trust in fate and buy a book\r\n          without knowing the title, maybe you will fall in love!</p>\r\n        <a routerLink=\"../event-edit\" class=\"btn btn-primary\">Edit</a>\r\n        <button type=\"button\" onclick=\"confirmDelete()\" class=\"btn btn-danger\">Delete </button>\r\n      </div>\r\n    </div>\r\n\r\n    <br />\r\n    <div class=\"card w-41 flex-row\">\r\n      <div class=\"card-header border-0\">\r\n        <img class=\"img-fluid\" src=\"./assets/robot.jpeg\" alt=\"img\">\r\n      </div>\r\n\r\n      <div class=\"card-body col-md-8\">\r\n        <h5 class=\"card-title\">Ready Player One Movie Night</h5>\r\n        <p class=\"card-text\">Watch the movie in 3D with us.</p>\r\n        <a routerLink=\"../event-edit\" class=\"btn btn-primary\">Edit</a>\r\n        <button type=\"button\" onclick=\"confirmDelete()\" class=\"btn btn-danger\">Delete </button>\r\n      </div>\r\n    </div>\r\n\r\n    <br />\r\n    <div class=\"card w-41 flex-row\">\r\n      <div class=\"card-header border-0\">\r\n        <img class=\"img-fluid\" src=\"./assets/library.jpeg\" alt=\"img\">\r\n      </div>\r\n\r\n      <div class=\"card-body col-md-6\">\r\n        <h5 class=\"card-title\">Library Tour</h5>\r\n        <p class=\"card-text\">Come with us on a tour of the Boston Public Library.</p>\r\n        <a routerLink=\"../event-edit\" class=\"btn btn-primary\">Edit</a>\r\n        <button type=\"button\" onclick=\"confirmDelete()\" class=\"btn btn-danger\">Delete </button>\r\n      </div>\r\n    </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/organization/organization.component.ts":
/*!********************************************************!*\
  !*** ./src/app/organization/organization.component.ts ***!
  \********************************************************/
/*! exports provided: OrganizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationComponent", function() { return OrganizationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_org_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/org.service.client */ "./src/app/services/org.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrganizationComponent = /** @class */ (function () {
    function OrganizationComponent(router, orgService, activatedRoute, userService) {
        var _this = this;
        this.router = router;
        this.orgService = orgService;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.logout = function () {
            var r = confirm("Are you sure you want to logout!");
            if (r == true) {
                _this.userService.logout().then(function () {
                    _this.router.navigate(['login']);
                });
            }
            else {
            }
        };
    }
    OrganizationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.orgId = params['orgId'];
        });
        console.log(this.orgId);
        this.orgService.findorgById(this.orgId)
            .then(function (org) {
            console.log(org);
            _this.org = org;
            console.log(_this.org);
        });
    };
    OrganizationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-organization',
            template: __webpack_require__(/*! ./organization.component.html */ "./src/app/organization/organization.component.html"),
            styles: [__webpack_require__(/*! ./organization.component.css */ "./src/app/organization/organization.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_org_service_client__WEBPACK_IMPORTED_MODULE_1__["OrgServiceClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserServiceClient"]])
    ], OrganizationComponent);
    return OrganizationComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n  /* background: -webkit-linear-gradient(left, #3931af, #00c6ff); */\r\n}\r\n.emp-profile{\r\n  padding: 3%;\r\n  margin-top: 3%;\r\n  margin-bottom: 3%;\r\n  border-radius: 0.5rem;\r\n  background: #fff;\r\n}\r\n.profile-img{\r\n  text-align: center;\r\n}\r\n.profile-img img{\r\n  width: 80%;\r\n  height: 100%;\r\n  border-radius: 10%;\r\n}\r\n.profile-img .file {\r\n  position: relative;\r\n  overflow: hidden;\r\n  margin-top: -20%;\r\n  width: 70%;\r\n  border: none;\r\n  border-radius: 0;\r\n  font-size: 15px;\r\n  background: #212529b8;\r\n}\r\n.profile-img .file input {\r\n  position: absolute;\r\n  opacity: 0;\r\n  right: 0;\r\n  top: 0;\r\n}\r\n.profile-head h5{\r\n  color: #333;\r\n}\r\n.profile-head h6{\r\n  color: #0062cc;\r\n}\r\n.profile-edit-btn{\r\n  border: none;\r\n  border-radius: 1.5rem;\r\n  width: 70%;\r\n  padding: 2%;\r\n  font-weight: 600;\r\n  color: #6c757d;\r\n  cursor: pointer;\r\n}\r\n.proile-rating{\r\n  font-size: 12px;\r\n  color: #818182;\r\n  margin-top: 5%;\r\n}\r\n.proile-rating span{\r\n  color: #495057;\r\n  font-size: 15px;\r\n  font-weight: 600;\r\n}\r\n.profile-head .nav-tabs{\r\n  margin-bottom:5%;\r\n}\r\n.profile-head .nav-tabs .nav-link{\r\n  font-weight:600;\r\n  border: none;\r\n}\r\n.profile-head .nav-tabs .nav-link.active{\r\n  border: none;\r\n  border-bottom:2px solid #0062cc;\r\n}\r\n.profile-work{\r\n  padding: 14%;\r\n  margin-top: -15%;\r\n}\r\n.profile-work p{\r\n  font-size: 12px;\r\n  color: #818182;\r\n  font-weight: 600;\r\n  margin-top: 10%;\r\n}\r\n.profile-work li{\r\n  text-decoration: none;\r\n  color: #495057;\r\n  font-weight: 600;\r\n  font-size: 14px;\r\n  margin: 5px;\r\n\r\n}\r\n.profile-work ul{\r\n  list-style: none;\r\n}\r\n.profile-tab label{\r\n  font-weight: 600;\r\n}\r\n.profile-tab p{\r\n  font-weight: 600;\r\n  color: #008080;\r\n}\r\n.bookmarked p{\r\n  color: #818182;\r\n}\r\n.bookmarked img{\r\n  width: 250px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- Navigation -->\r\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\r\n  <div class=\"container\">\r\n    <img src=\"assets/paws.png\" width=\"40px\" style=\"border-radius: 20%; margin-right : 20px\">\r\n    <a class=\"navbar-brand\" routerLink=\"home\">Husky Neighborhood</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"../home\">Events\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link\" routerLink=\"../profile\">Profile<span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n        <!-- <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\">Contact</a>\r\n        </li> -->\r\n      </ul>\r\n\r\n      <button class=\"btn btn-danger\"  (click) = \"logout()\">Log out</button>\r\n\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"container emp-profile\">\r\n  <form method=\"post\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"profile-img\">\r\n          <img src=\"./assets/student.jpg\" alt=\"\"/>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"profile-head\">\r\n          <h4>\r\n            Anna Marta\r\n          </h4>\r\n          <h5>\r\n            Senior BSCS at NEU\r\n          </h5>\r\n\r\n          <p class=\"proile-rating\">Social media profile: <a href=\"https://www.facebook.com/marta.donesk\"> <strong> facebook </strong> </a></p>\r\n\r\n\r\n          <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\">About</a>\r\n            </li>\r\n\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-2\">\r\n        <a routerLink=\"../profile\" class=\"btn profile-edit-btn\" (click)=\"editp()\">\r\n          <i class=\"far fa-edit\"></i> Edit Profile </a>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"profile-work\">\r\n          <!-- <a href=\"./organization.html\" class=\"btn btn-block btn-primary text-white\"> Manage organization </a> -->\r\n\r\n\r\n          <p>INTERESTS</p>\r\n          <ul class=\"list-unstyled mb-0\">\r\n            <li class=\"btn badge badge-light\"> Web Design </li>\r\n            <li class=\"btn badge badge-light\"> Games </li>\r\n            <li class=\"btn badge badge-light\"> Books </li>\r\n            <li class=\"btn badge badge-light\"> Sci-fi </li>\r\n            <li class=\"btn badge badge-light\"> Cinema </li>\r\n            <li class=\"btn badge badge-light\"> Craft </li>\r\n\r\n          </ul>\r\n\r\n\r\n\r\n\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-8\">\r\n        <div class=\"tab-content profile-tab\" id=\"myTabContent\">\r\n          <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-md-3\">\r\n                <label>Name</label>\r\n              </div>\r\n              <div class=\"col-md-9\">\r\n                <p>Kshiti Ghelani</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-3\">\r\n                <label>Email</label>\r\n              </div>\r\n              <div class=\"col-md-9\">\r\n                <p>kshitighelani@gmail.com</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-3\">\r\n                <label>Phone</label>\r\n              </div>\r\n              <div class=\"col-md-9\">\r\n                <p>123 456 7890</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-3\">\r\n                <label>Profession</label>\r\n              </div>\r\n              <div class=\"col-md-9\">\r\n                <p>Web Developer and Designer</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-3\">\r\n                <label>Bio</label>\r\n              </div>\r\n              <div class=\"col-md-9\">\r\n                <p>\r\n                  Lorem ipsum dolor sit amet, vim nostrud vocibus interesset ne.\r\n                  Possim ullamcorper necessitatibus vel ne, per cu harum tempor.\r\n                  Mea legere utamur habemus cu, quaeque mediocritatem no usu.\r\n                  Id vim minim adipisci concludaturque, has magna atomorum dissentias ea,\r\n                  no pri impetus meliore. Mea suas partem ocurreret ei, eam ut viderer fabulas. Ludus constituto sed id.\r\n                </p>\r\n              </div>\r\n            </div>\r\n\r\n\r\n          </div>\r\n          <br/>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</form>\r\n  <div class=\"bookmarked\">\r\n    <ul class=\"nav nav-tabs\" id=\"eventsTab\" role=\"tablist\">\r\n      <li class=\"nav-item\">\r\n        <a (click)=\"setbookmarked()\" class=\"nav-link active\"  data-toggle=\"tab\" role=\"tab\"\r\n           aria-controls=\"home\" aria-selected=\"true\"> <i class=\"text-warning fa fa-bookmark \"></i>  Recently Bookmarked Events</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a (click)=\"setregistered()\" class=\"nav-link\" data-toggle=\"tab\" role=\"tab\"\r\n           aria-controls=\"home\" aria-selected=\"true\"> <i class=\"text-success fas fa-clipboard-check\"></i>  Recently Registered Events</a>\r\n      </li>\r\n    </ul>\r\n    <br />\r\n    <div *ngFor=\"let event of events\">\r\n      <div>\r\n        <div class=\"row\">\r\n          <div class=\"card-header border-0 col-3\">\r\n            <img class=\"img-fluid\" src=\"./assets/book.jpg\" alt=\"event image\">\r\n            <!--<p><strong>Location: </strong> {{event.event.venue}}</p>-->\r\n          </div>\r\n\r\n          <div class=\"card-body col-9\">\r\n            <h5 class=\"card-title\">{{event.event.title}}</h5>\r\n            <p class=\"card-text\">{{event.event.description.substring(0,200)}}...</p>\r\n            <a routerLink=\"../event/{{event.event._id}}\" class=\"btn-block btn btn-primary\">View</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n<footer class=\"py-5 bg-dark\">\r\n  <div class=\"container\">\r\n    <p class=\"m-0 text-center text-white\">@Husky Neighborhood 2019</p>\r\n  </div>\r\n  <!-- /.container -->\r\n</footer>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user.model.client */ "./src/app/models/user.model.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_bookmark_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/bookmark.service.client */ "./src/app/services/bookmark.service.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_like_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/like.service.client */ "./src/app/services/like.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(router, service, userService, bookmarkService, registerService) {
        var _this = this;
        this.router = router;
        this.service = service;
        this.userService = userService;
        this.bookmarkService = bookmarkService;
        this.registerService = registerService;
        this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.originalUser = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.bookmarkedEvents = [];
        this.registeredEvenets = [];
        this.events = [];
        this.followings = [];
        this.logout = function () {
            var r = confirm("Are you sure you want to logout!");
            if (r == true) {
                _this.userService.logout().then(function () {
                    _this.router.navigate(['login']);
                });
            }
            else {
            }
        };
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.profile()
            .then(function (user) {
            _this.service.findUserByUsername(user.username)
                .then(function (u) {
                _this.user = Object.assign({}, u);
                if (user.role === 'user') {
                    _this.admin = true;
                }
                else {
                    _this.admin = false;
                }
                _this.findAllBookmarkedEvents();
                _this.findAllRegisteredEvents();
            });
        });
    };
    ProfileComponent.prototype.findAllBookmarkedEvents = function () {
        var _this = this;
        this.bookmarkService.findAllBookmarkedevents(this.user._id)
            .then(function (response) {
            console.log(response);
            _this.bookmarkedEvents = response;
            _this.setbookmarked();
        });
    };
    ProfileComponent.prototype.findAllRegisteredEvents = function () {
        var _this = this;
        this.registerService.findAllLikedevents(this.user._id)
            .then(function (response) {
            console.log(response);
            _this.registeredEvenets = response;
        });
    };
    ProfileComponent.prototype.setbookmarked = function () {
        this.events = this.bookmarkedEvents;
    };
    ProfileComponent.prototype.setregistered = function () {
        this.events = this.registeredEvenets;
    };
    ProfileComponent.prototype.editp = function () {
        alert("The functionality is not implemented yet");
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__["UserServiceClient"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__["UserServiceClient"],
            _services_bookmark_service_client__WEBPACK_IMPORTED_MODULE_3__["BookmarkServiceClient"], _services_like_service_client__WEBPACK_IMPORTED_MODULE_5__["LikeServiceClient"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n  font-family: \"Lato\", sans-serif;\r\n}\r\n\r\n.main-head{\r\n  height: 150px;\r\n  background: #FFF;\r\n\r\n}\r\n\r\n.sidenav {\r\n  height: 100%;\r\n  background-color: #000;\r\n  overflow-x: hidden;\r\n  padding-top: 20px;\r\n}\r\n\r\n.main {\r\n  padding: 0px 10px;\r\n}\r\n\r\n@media screen and (max-height: 450px) {\r\n  .sidenav {padding-top: 15px;}\r\n}\r\n\r\n@media screen and (max-width: 450px) {\r\n  .login-form{\r\n    margin-top: 10%;\r\n  }\r\n\r\n  .register-form{\r\n    margin-top: 10%;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 768px){\r\n  .main{\r\n    margin-left: 40%;\r\n  }\r\n\r\n  .sidenav{\r\n    width: 40%;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 0;\r\n    left: 0;\r\n  }\r\n\r\n  .login-form{\r\n    margin-top: 70%;\r\n  }\r\n\r\n  .register-form{\r\n    margin-top: 30%;\r\n  }\r\n}\r\n\r\n.login-main-text{\r\n  margin-top: 20%;\r\n  padding: 60px;\r\n  color: #fff;\r\n}\r\n\r\n.login-main-text h2{\r\n  font-weight: 300;\r\n}\r\n\r\n.btn-black{\r\n  background-color: #000 !important;\r\n  color: #fff;\r\n}\r\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidenav\">\r\n  <div class=\"login-main-text\">\r\n    <h2>Husky Neighborhood<br> Login Page</h2>\r\n    <p>Login or register from here to access.</p>\r\n    <br/>\r\n\r\n    <img src=\"assets/paw2.jpg\" width=\"150px\" style=\"border-radius: 50%;\">\r\n    <p style=\"margin-top: 220px\"> To register new organizations please contact our administration at <strong>kryvtsun.t@husky.neu.edu</strong></p>\r\n\r\n\r\n  </div>\r\n</div>\r\n<div class=\"main\">\r\n  <div class=\"col-md-6 col-sm-12\">\r\n    <div class=\"login-form\">\r\n\r\n        <div>\r\n\r\n            <div *ngIf=\"usernameError\">\r\n              <p>Username unavailable. Please try another one.</p>\r\n            </div>\r\n            <div *ngIf=\"noUsernameError\">\r\n              <p> Please enter a username. </p>\r\n            </div>\r\n            <div *ngIf=\"noPasswordError\">\r\n              <p> Please enter a password. </p>\r\n            </div>\r\n            <div *ngIf=\"noPassword2Error\">\r\n                <p> Please reconfirm your password. </p>\r\n              </div>\r\n              <div *ngIf=\"passwordError\">\r\n                  <p> Passwords do not match. </p>\r\n                </div>\r\n          </div>\r\n\r\n      <form #regform=\"ngForm\" (ngSubmit)=\"register(regform)\" >\r\n        <div class=\"form-group\">\r\n          <label>User Name</label>\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"User Name\" name =\"username\" [(ngModel)]=\"username\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label>Email</label>\r\n          <input type=\"email\" class=\"form-control\" placeholder=\"Email\" name =\"email\"  [(ngModel)]=\"email\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label>Password</label>\r\n          <input type=\"password\" class=\"form-control\" placeholder=\"Password\" name =\"password\"  [(ngModel)]=\"password\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label>Verify Password</label>\r\n          <input type=\"password\" class=\"form-control\" placeholder=\"Password\" name =\"password2\" [(ngModel)]=\"password2\" required>\r\n        </div>\r\n        <span>\r\n          <button type=\"submit\" class=\"btn btn-black\" (click) =\"register()\">Register </button>\r\n          <a style=\"margin-left: 20px;\" routerLink=\"../login\"> Login </a>\r\n        </span>\r\n      </form>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/user.model.client */ "./src/app/models/user.model.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, service) {
        this.router = router;
        this.service = service;
    }
    // img_path = 'https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100';
    RegisterComponent.prototype.resetErrors = function () {
        this.usernameError = false;
        this.passwordError = false;
        this.noUsernameError = false;
        this.noPasswordError = false;
        this.noPassword2Error = false;
    };
    RegisterComponent.prototype.reset = function () {
        this.username = '';
        this.password = '';
        this.password2 = '';
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        console.log("inside register");
        this.resetErrors();
        if (this.username.trim() === '') {
            this.noUsernameError = true;
        }
        else {
            if (this.password.trim() === '') {
                this.noPasswordError = true;
            }
            else {
                if (this.password2.trim() === '') {
                    this.noPassword2Error = true;
                }
                else {
                    if (this.password === this.password2) {
                        this.service.findUserByUsername(this.username)
                            .then(function (response) {
                            console.log(response);
                            if (response === null) {
                                var user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_3__["User"]();
                                user.username = _this.username;
                                user.password = _this.password;
                                user.email = _this.email;
                                console.log(user);
                                _this.service.register(user)
                                    .then(function () { return _this.router.navigate(['home']); });
                            }
                            else {
                                _this.usernameError = true;
                                // alert('Username is already taken');
                            }
                        });
                    }
                    else {
                        this.passwordError = true;
                        // alert('Passwords do not match');
                    }
                }
            }
        }
    };
    RegisterComponent.prototype.ngOnInit = function () {
        this.reset();
        this.resetErrors();
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/activity.service.client.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/activity.service.client.ts ***!
  \*****************************************************/
/*! exports provided: ActivityServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityServiceClient", function() { return ActivityServiceClient; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HOST = 'https://huskyneighborhood.herokuapp.com/';
// const HOST = 'http://localhost:4000/';
var ActivityServiceClient = /** @class */ (function () {
    function ActivityServiceClient() {
    }
    ActivityServiceClient.prototype.findAllActivities = function () {
        return fetch(HOST + 'api/HNbhood/activity/')
            .then(function (response) {
            return response.json();
        });
    };
    ActivityServiceClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ActivityServiceClient);
    return ActivityServiceClient;
}());



/***/ }),

/***/ "./src/app/services/bookmark.service.client.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/bookmark.service.client.ts ***!
  \*****************************************************/
/*! exports provided: BookmarkServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookmarkServiceClient", function() { return BookmarkServiceClient; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HOST = 'https://huskyneighborhood.herokuapp.com/';
// const HOST = 'http://localhost:4000/';
var BookmarkServiceClient = /** @class */ (function () {
    function BookmarkServiceClient() {
    }
    BookmarkServiceClient.prototype.bookmark = function (event) {
        console.log("invoking bookmark service");
        return fetch(HOST + 'api/HNbhood/bookmark/event', {
            body: JSON.stringify(event),
            credentials: 'include',
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            return response.json();
        });
    };
    BookmarkServiceClient.prototype.unbookmark = function (event) {
        return fetch(HOST + 'api/HNbhood/bookmark/event/' + event._id, {
            body: JSON.stringify(event),
            credentials: 'include',
            method: 'delete',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    BookmarkServiceClient.prototype.checkBookmark = function (eventId) {
        return fetch(HOST + 'api/HNbhood/bookmark/event/' + eventId + '/check', {
            credentials: 'include',
            method: 'get',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(function (response) { return response.json(); });
    };
    BookmarkServiceClient.prototype.findAllBookmarkedevents = function (userId) {
        return fetch(HOST + 'api/HNbhood/bookmark/user/' + userId + '/event/', {
            method: 'get',
        })
            .then(function (response) { return response.json(); });
    };
    BookmarkServiceClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], BookmarkServiceClient);
    return BookmarkServiceClient;
}());



/***/ }),

/***/ "./src/app/services/comment.service.client.ts":
/*!****************************************************!*\
  !*** ./src/app/services/comment.service.client.ts ***!
  \****************************************************/
/*! exports provided: CommentServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentServiceClient", function() { return CommentServiceClient; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HOST = 'https://huskyneighborhood.herokuapp.com/';
// const HOST = 'http://localhost:4000/';
var CommentServiceClient = /** @class */ (function () {
    function CommentServiceClient() {
    }
    CommentServiceClient.prototype.addComment = function (eventId, com, mov) {
        var Comment = { Comment: com, event: mov };
        return fetch(HOST + 'api/HNbhood/comment/event/' + eventId, {
            body: JSON.stringify(Comment),
            credentials: 'include',
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    CommentServiceClient.prototype.deleteComment = function (eventId, userId, rev) {
        var Comment = { Comment: rev };
        return fetch(HOST + 'api/HNbhood/comment/event/' + eventId + '/user/' + userId, {
            body: JSON.stringify(Comment),
            method: 'delete',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    CommentServiceClient.prototype.findAllComments = function (eventId) {
        return fetch(HOST + 'api/HNbhood/comment/event/' + eventId, {
            credentials: 'include',
        }).then(function (response) { return response.json(); });
    };
    CommentServiceClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], CommentServiceClient);
    return CommentServiceClient;
}());



/***/ }),

/***/ "./src/app/services/event.service.client.ts":
/*!**************************************************!*\
  !*** ./src/app/services/event.service.client.ts ***!
  \**************************************************/
/*! exports provided: EventServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventServiceClient", function() { return EventServiceClient; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HOST = 'https://huskyneighborhood.herokuapp.com/';
//const HOST = 'http://localhost:4000/';
var EventServiceClient = /** @class */ (function () {
    function EventServiceClient() {
    }
    EventServiceClient.prototype.findEvent = function (EventId) {
        return fetch(HOST + 'api/HNbhood/' + EventId, {
            method: 'get',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(function (response) {
            return response.json();
        });
    };
    EventServiceClient.prototype.createEvent = function (toCreateEvent) {
        console.log();
        return fetch(HOST + 'api/HNbhood/user/1/event', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toCreateEvent)
        })
            .then(function (response) {
            return response.json();
        });
    };
    EventServiceClient.prototype.deleteEvent = function (EventId) {
        return fetch(HOST + 'api/HNbhood/Event/' + EventId, {
            method: 'delete',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(function (response) {
            return response.json();
        });
    };
    EventServiceClient.prototype.updateEvent = function (EventId, Event) {
        return fetch(HOST + 'api/HNbhood/Event/' + EventId, {
            body: JSON.stringify(Event),
            method: 'put',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(function (response) {
            return response.json();
        });
    };
    EventServiceClient.prototype.findAllEvents = function () {
        return fetch(HOST + 'api/HNbhood/')
            .then(function (response) {
            return response.json();
        });
    };
    EventServiceClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], EventServiceClient);
    return EventServiceClient;
}());



/***/ }),

/***/ "./src/app/services/follow.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/follow.service.client.ts ***!
  \***************************************************/
/*! exports provided: FollowServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowServiceClient", function() { return FollowServiceClient; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HOST = 'https://huskyneighborhood.herokuapp.com/';
// const HOST = 'http://localhost:4000/';
var FollowServiceClient = /** @class */ (function () {
    function FollowServiceClient() {
    }
    FollowServiceClient.prototype.addFollowing = function (userId) {
        return fetch(HOST + 'api/HNbhood/follow/following/' + userId, {
            credentials: 'include',
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(function (response) {
            return response.json();
        });
    };
    FollowServiceClient.prototype.removeFollowing = function (userId) {
        return fetch(HOST + 'api/follow/following/' + userId, {
            credentials: 'include',
            method: 'delete',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(function (response) {
            return response.json();
        });
    };
    FollowServiceClient.prototype.checkFollowing = function (userId) {
        return fetch(HOST + 'api/HNbhood/follow/following/' + userId, {
            credentials: 'include',
            method: 'get',
        })
            .then(function (response) {
            return response.json();
        });
    };
    FollowServiceClient.prototype.findAllFollowings = function (userId) {
        return fetch(HOST + 'api/HNbhood/follow/user/' + userId + '/following', {})
            .then(function (response) {
            return response.json();
        });
    };
    FollowServiceClient.prototype.findAllFollowers = function (userId) {
        return fetch(HOST + 'api/HNbhood/follow/user/' + userId + '/follower', {})
            .then(function (response) {
            return response.json();
        });
    };
    FollowServiceClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], FollowServiceClient);
    return FollowServiceClient;
}());



/***/ }),

/***/ "./src/app/services/like.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/like.service.client.ts ***!
  \*************************************************/
/*! exports provided: LikeServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikeServiceClient", function() { return LikeServiceClient; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HOST = 'https://huskyneighborhood.herokuapp.com/';
// const HOST = 'http://localhost:4000/';
var LikeServiceClient = /** @class */ (function () {
    function LikeServiceClient() {
    }
    LikeServiceClient.prototype.like = function (event) {
        return fetch(HOST + 'api/HNbhood/like/event', {
            body: JSON.stringify(event),
            credentials: 'include',
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    LikeServiceClient.prototype.unlike = function (event) {
        return fetch(HOST + 'api/HNbhood/like/event', {
            body: JSON.stringify(event),
            credentials: 'include',
            method: 'delete',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    LikeServiceClient.prototype.checkLike = function (eventId) {
        return fetch(HOST + 'api/HNbhood/like/event/' + eventId, {
            credentials: 'include',
            method: 'get',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(function (response) { return response.json(); });
    };
    LikeServiceClient.prototype.findAllLikedevents = function (userId) {
        return fetch(HOST + 'api/HNbhood/like/user/' + userId + '/event/', {
            method: 'get',
        })
            .then(function (response) { return response.json(); });
    };
    LikeServiceClient.prototype.findUsersWhoLikedevent = function (eventId) {
        return fetch(HOST + 'api/HNbhood/like/event/' + eventId + '/user/', {
            method: 'get',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(function (response) {
            return response.json();
        });
    };
    LikeServiceClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], LikeServiceClient);
    return LikeServiceClient;
}());



/***/ }),

/***/ "./src/app/services/org.service.client.ts":
/*!************************************************!*\
  !*** ./src/app/services/org.service.client.ts ***!
  \************************************************/
/*! exports provided: OrgServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgServiceClient", function() { return OrgServiceClient; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HOST = 'https://huskyneighborhood.herokuapp.com/';
var OrgServiceClient = /** @class */ (function () {
    function OrgServiceClient() {
    }
    OrgServiceClient.prototype.findAllorgs = function () {
        return fetch(HOST + 'api/HNbhood/org/')
            .then(function (response) { return response.json(); });
    };
    OrgServiceClient.prototype.findorgById = function (orgId) {
        return fetch(HOST + 'api/HNbhood/org/' + orgId)
            .then(function (response) { return response.json(); });
    };
    OrgServiceClient.prototype.deleteorgById = function (orgId) {
        return fetch(HOST + 'api/HNbhood/org/' + orgId, {
            method: 'delete'
        })
            .then(function (response) { return response.json(); });
    };
    OrgServiceClient.prototype.updateorg = function (org) {
        return fetch(HOST + 'api/HNbhood/org/update', {
            body: JSON.stringify(org),
            credentials: 'include',
            method: 'put',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            return response.json();
        });
    };
    OrgServiceClient.prototype.updateorgById = function (orgId, org) {
        return fetch(HOST + 'api/HNbhood/org/' + orgId, {
            body: JSON.stringify(org),
            method: 'put',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            return response.json();
        });
    };
    OrgServiceClient.prototype.createorg = function (org) {
        return fetch(HOST + 'api/HNbhood/org', {
            body: JSON.stringify(org),
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    OrgServiceClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], OrgServiceClient);
    return OrgServiceClient;
}());



/***/ }),

/***/ "./src/app/services/user.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/user.service.client.ts ***!
  \*************************************************/
/*! exports provided: UserServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserServiceClient", function() { return UserServiceClient; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HOST = 'https://huskyneighborhood.herokuapp.com/';
//const HOST = 'http://localhost:4000/';
var UserServiceClient = /** @class */ (function () {
    function UserServiceClient() {
    }
    UserServiceClient.prototype.findUserByUsername = function (username) {
        return fetch(HOST + 'api/HNbhood/user/username/' + username)
            .then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.findUserByCredentials = function (username, password) {
        return fetch('http://localhost:4000/api/user/username/' + username + '/password/' + password)
            .then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.checkStatus = function () {
        return fetch(HOST + 'api/HNbhood/status', {
            credentials: 'include'
        })
            .then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.login = function (username, password) {
        var credentials = {
            username: username,
            password: password
        };
        return fetch(HOST + 'api/HNbhood/login', {
            method: 'post',
            body: JSON.stringify(credentials),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            return response.json();
        });
    };
    UserServiceClient.prototype.updateUser = function (user) {
        return fetch(HOST + 'api/user', {
            body: JSON.stringify(user),
            credentials: 'include',
            method: 'put',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            return response.json();
        });
    };
    UserServiceClient.prototype.logout = function () {
        return fetch(HOST + 'api/HNbhood/logout', {
            method: 'post',
            credentials: 'include'
        });
    };
    UserServiceClient.prototype.register = function (user) {
        return fetch(HOST + 'api/HNbhood/register', {
            body: JSON.stringify(user),
            credentials: 'include',
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    UserServiceClient.prototype.profile = function () {
        return fetch(HOST + 'api/HNbhood/profile', {
            credentials: 'include'
        })
            .then(function (response) { return response.json(); });
    };
    UserServiceClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], UserServiceClient);
    return UserServiceClient;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Tim\Documents\WebDev\tk-husky\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map