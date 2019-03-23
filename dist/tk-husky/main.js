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

module.exports = "<div>\r\n  <div class=\"container-fluid\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n"

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
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_6__["routing"]
            ],
            providers: [_services_user_service_client__WEBPACK_IMPORTED_MODULE_10__["UserServiceClient"]],
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





var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navigation -->\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\n  <div class=\"container\">\n    <img src=\"./assets/paws.png\" width=\"40px\" style=\"border-radius: 20%; margin-right : 20px\">\n    <a class=\"navbar-brand\" href=\"#\">Husky Neighborhood</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\">Events\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"../profile\">Profile</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"../login\">Log out</a>\n        </li>\n        <!-- <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Contact</a>\n        </li> -->\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<!-- Page Content -->\n<div class=\"container\" style=\"padding-top: 56px;\">\n\n  <div class=\"row\">\n\n    <!-- Blog Entries Column -->\n    <div class=\"col-md-8\">\n\n      <h1 class=\"my-4\">Event List\n        <!-- <small>Secondary Text</small> -->\n      </h1>\n\n      <!-- Blog Post -->\n      <div class=\"card mb-4\">\n\n        <img class=\"card-img-top\" src=\"./assets/robot.jpeg\" width=\"300px\" alt=\"Card image cap\">\n        <div class=\"card-img-overlay\" style=\"padding:0px;\">\n          <div class=\"float-right hidden-md-up rounded\"\n               style=\"background-color: rgb(240, 241, 242)\">\n            <div class=\"text-center\">\n              <i  class=\"btn text-warning fa fa-bookmark fa-2x\"></i>\n              <!-- <i *ngSwitchCase=\"false\" (click)=\"bookmark()\" class=\"btn text-warning far fa-bookmark fa-2x\"></i> -->\n            </div>\n            <div  class=\"text-center\">\n              <i class=\"btn text-danger fa fa-heart fa-2x\"></i>\n              <!-- <i *ngSwitchCase=\"false\" (click)=\"like()\" class=\"btn text-danger far fa-heart fa-2x\"></i> -->\n            </div>\n          </div>\n        </div>\n        <div class=\"card-img-overlay\">\n          <span class=\"badge badge-primary\"> Free food </span>\n          <span class=\"badge badge-secondary\"> Books </span>\n          <span class=\"badge badge-success\"> Social </span>\n          <span class=\"badge badge-danger\"> Educational </span>\n          <span class=\"badge badge-warning\"> Art </span>\n          <span class=\"badge badge-info\"> Writing </span>\n          <span class=\"badge badge-light\"> Job Opportunity </span>\n          <span class=\"badge badge-dark\"> Etc </span>\n        </div>\n        <div class=\"card-body\">\n\n          <h2 class=\"card-title\">Post Title</h2>\n          <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>\n          <a href=\"./eventDetail.html\" class=\"btn btn-primary\">Read More &rarr;</a>\n        </div>\n\n        <div class=\"card-footer text-muted\">\n          Posted on January 1, 2019 by\n          <a href=\"./organization.html\">Fiction Addiction Book Club</a>\n        </div>\n      </div>\n\n      <!-- Blog Post -->\n      <div class=\"card mb-4\">\n        <img class=\"card-img-top\" src=\"./assets/library.jpeg\" alt=\"Card image cap\">\n        <div class=\"card-img-overlay\" style=\"padding:0px;\">\n          <div class=\"float-right hidden-md-up rounded\"\n               style=\"background-color: rgb(240, 241, 242)\">\n            <div class=\"text-center\">\n              <!-- <i  class=\"btn text-warning fa fa-bookmark fa-2x\"></i> -->\n              <i class=\"btn text-warning far fa-bookmark fa-2x\"></i>\n            </div>\n            <div  class=\"text-center\">\n              <i class=\"btn text-danger fa fa-heart fa-2x\"></i>\n              <!-- <i *ngSwitchCase=\"false\" (click)=\"like()\" class=\"btn text-danger far fa-heart fa-2x\"></i> -->\n            </div>\n          </div>\n        </div>\n        <div class=\"card-img-overlay\">\n          <span class=\"badge badge-primary\"> Free food </span>\n          <span class=\"badge badge-secondary\"> Books </span>\n          <span class=\"badge badge-success\"> Social </span>\n          <span class=\"badge badge-danger\"> Educational </span>\n          <span class=\"badge badge-warning\"> Art </span>\n          <span class=\"badge badge-info\"> Writing </span>\n          <span class=\"badge badge-light\"> Job Opportunity </span>\n          <span class=\"badge badge-dark\"> Etc </span>\n        </div>\n        <div class=\"card-body\">\n          <h2 class=\"card-title\">Post Title</h2>\n          <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>\n          <button href=\"./eventDetail.html\" class=\"btn btn-primary\">Read More &rarr;</button>\n        </div>\n        <div class=\"card-footer text-muted\">\n          Posted on January 1, 2019 by\n          <a href=\"./organization.html\">Fiction Addiction Book Club</a>\n        </div>\n      </div>\n\n      <!-- Blog Post -->\n      <div class=\"card mb-4\">\n        <img class=\"card-img-top\" src=\"./assets/book-love.jpeg\" alt=\"Card image cap\">\n        <div class=\"card-img-overlay\" style=\"padding:0px;\">\n          <div class=\"float-right hidden-md-up rounded\"\n               style=\"background-color: rgb(240, 241, 242)\">\n            <div class=\"text-center\">\n              <!-- <i  class=\"btn text-warning fa fa-bookmark fa-2x\"></i> -->\n              <i (click)=\"bookmark()\" class=\"btn text-warning far fa-bookmark fa-2x\"></i>\n            </div>\n            <div  class=\"text-center\">\n              <!-- <i class=\"btn text-danger fa fa-heart fa-2x\"></i> -->\n              <i (click)=\"like()\" class=\"btn text-danger far fa-heart fa-2x\"></i>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-img-overlay\">\n          <span class=\"badge badge-primary\"> Free food </span>\n          <span class=\"badge badge-secondary\"> Books </span>\n          <span class=\"badge badge-success\"> Social </span>\n          <span class=\"badge badge-danger\"> Educational </span>\n          <span class=\"badge badge-warning\"> Art </span>\n          <span class=\"badge badge-info\"> Writing </span>\n          <span class=\"badge badge-light\"> Job Opportunity </span>\n          <span class=\"badge badge-dark\"> Etc </span>\n        </div>\n        <div class=\"card-body\">\n          <h2 class=\"card-title\">Post Title</h2>\n          <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>\n          <a href=\"./eventDetail.html\" class=\"btn btn-primary\">Read More &rarr;</a>\n        </div>\n        <div class=\"card-footer text-muted\">\n          Posted on January 1, 2019 by\n          <a href=\"./organization.html\">Fiction Addiction Book Club</a>\n        </div>\n      </div>\n\n      <!-- Pagination -->\n      <ul class=\"pagination justify-content-center mb-4\">\n        <li class=\"page-item disabled\">\n          <a class=\"page-link\" href=\"#\">&darr; Older</a>\n        </li>\n        <!-- <li class=\"page-item \">\n          <a class=\"page-link\" href=\"#\">Newer &rarr;</a>\n        </li> -->\n      </ul>\n\n    </div>\n\n    <!-- Sidebar Widgets Column -->\n    <div class=\"col-md-4\">\n      <!-- Search Widget -->\n      <div class=\"card my-4\">\n        <h5 class=\"card-header\">Search by Word</h5>\n        <div class=\"card-body\">\n\n          <div class=\"input-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Input the word to search\">\n            <span class=\"input-group-btn\">\n                <button class=\"btn btn-secondary\" type=\"button\">Go</button>\n              </span>\n          </div>\n        </div>\n\n      </div>\n\n      <div class=\"card my-4\">\n        <h5 class=\"card-header\">Search by Date</h5>\n        <div class=\"card-body\">\n          <div class=\"input-group\">\n            <input type=\"date\" class=\"form-control\" name=\"date\" id=\"date\"\n                   title=\"enter date\">\n            <span class=\"input-group-btn\">\n                <button class=\"btn btn-secondary\" type=\"button\">Go</button>\n              </span>\n          </div>\n\n\n        </div>\n\n      </div>\n\n      <!-- Categories Widget -->\n      <div class=\"card my-4\">\n        <h5 class=\"card-header\">Search by Tags</h5>\n        <div class=\"card-body\">\n          <div class=\"input-group\">\n            <input type=\"text\" class=\"form-control\" disabled>\n            <span class=\"input-group-btn\">\n                <button class=\"btn btn-secondary\" type=\"button\">Go</button>\n              </span>\n          </div>\n          <br/>\n\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <ul class=\"list-unstyled mb-0\">\n                <li class=\"btn badge badge-light\"> Free food </li>\n                <hr/>\n                <li class=\"btn badge badge-dark\"> Books </li>\n                <li class=\"btn badge badge-dark\"> Social </li>\n                <li class=\"btn badge badge-dark\"> Educational </li>\n                <li class=\"btn badge badge-dark\"> Art </li>\n                <li class=\"btn badge badge-dark\"> Writing </li>\n                <li class=\"btn badge badge-dark\"> Job Opportunity </li>\n\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- Side Widget -->\n      <div class=\"card my-4\">\n        <h5 class=\"card-header\">Help (temporary)</h5>\n        <div class=\"card-body\">\n          This is the page to search events\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n  <!-- /.row -->\n\n</div>\n<!-- /.container -->\n\n<!-- Footer -->\n<footer class=\"py-5 bg-dark\">\n  <div class=\"container\">\n    <p class=\"m-0 text-center text-white\">@Husky Neighborhood 2019</p>\n  </div>\n  <!-- /.container -->\n</footer>\n\n\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_1__["UserServiceClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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

module.exports = "body {\r\n  font-family: \"Lato\", sans-serif;\r\n}\r\n\r\n.main-head{\r\n  height: 150px;\r\n  background: #FFF;\r\n\r\n}\r\n\r\n.sidenav {\r\n  height: 100%;\r\n  background-color: #000;\r\n  overflow-x: hidden;\r\n  padding-top: 20px;\r\n}\r\n\r\n.main {\r\n  padding: 0px 10px;\r\n}\r\n\r\n@media screen and (max-height: 450px) {\r\n  .sidenav {padding-top: 15px;}\r\n}\r\n\r\n@media screen and (max-width: 450px) {\r\n  .login-form{\r\n    margin-top: 10%;\r\n  }\r\n\r\n  .register-form{\r\n    margin-top: 10%;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 768px){\r\n  .main{\r\n    margin-left: 40%;\r\n  }\r\n\r\n  .sidenav{\r\n    width: 40%;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 0;\r\n    left: 0;\r\n  }\r\n\r\n  .login-form{\r\n    margin-top: 80%;\r\n  }\r\n\r\n  .register-form{\r\n    margin-top: 20%;\r\n  }\r\n}\r\n\r\n.login-main-text{\r\n  margin-top: 20%;\r\n  padding: 60px;\r\n  color: #fff;\r\n}\r\n\r\n.login-main-text h2{\r\n  font-weight: 300;\r\n}\r\n\r\n.btn-black{\r\n  background-color: #000 !important;\r\n  color: #fff;\r\n}\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"sidenav\">\n  <div class=\"login-main-text\">\n    <h2>Husky Neighborhood<br> Login Page</h2>\n    <p>Login or register from here to access.</p>\n    <br/>\n    <img src=\"./assets/paw2.jpg\" width=\"150px\" style=\"border-radius: 50%;\">\n\n  </div>\n</div>\n<div class=\"main\">\n  <div class=\"col-md-6 col-sm-12\">\n    <div class=\"login-form\">\n      <form>\n        <div class=\"form-group\">\n          <label>User Name</label>\n          <input type=\"text\" class=\"form-control\" placeholder=\"User Name\">\n        </div>\n        <div class=\"form-group\">\n          <label>Password</label>\n          <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\n        </div>\n        <a href=\"events.html\" type=\"submit\" class=\"btn btn-black\">Login</a>\n        <a href=\"events.html\" type=\"submit\" class=\"btn btn-secondary\">Register</a>\n      </form>\n    </div>\n  </div>\n</div>\n\n"

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
        if (this.username === '') {
            this.noUsernameError = true;
        }
        else {
            if (this.password === '') {
                this.noPasswordError = true;
            }
            else {
                this.service.login(this.username, this.password)
                    .then(function (response) {
                    if (response !== null) {
                        console.log(response);
                        _this.router.navigate(['home']);
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

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n  /* background: -webkit-linear-gradient(left, #3931af, #00c6ff); */\r\n}\r\n.emp-profile{\r\n  padding: 3%;\r\n  margin-top: 3%;\r\n  margin-bottom: 3%;\r\n  border-radius: 0.5rem;\r\n  background: #fff;\r\n}\r\n.profile-img{\r\n  text-align: center;\r\n}\r\n.profile-img img{\r\n  width: 70%;\r\n  height: 100%;\r\n}\r\n.profile-img .file {\r\n  position: relative;\r\n  overflow: hidden;\r\n  margin-top: -20%;\r\n  width: 70%;\r\n  border: none;\r\n  border-radius: 0;\r\n  font-size: 15px;\r\n  background: #212529b8;\r\n}\r\n.profile-img .file input {\r\n  position: absolute;\r\n  opacity: 0;\r\n  right: 0;\r\n  top: 0;\r\n}\r\n.profile-head h5{\r\n  color: #333;\r\n}\r\n.profile-head h6{\r\n  color: #0062cc;\r\n}\r\n.profile-edit-btn{\r\n  border: none;\r\n  border-radius: 1.5rem;\r\n  width: 70%;\r\n  padding: 2%;\r\n  font-weight: 600;\r\n  color: #6c757d;\r\n  cursor: pointer;\r\n}\r\n.proile-rating{\r\n  font-size: 12px;\r\n  color: #818182;\r\n  margin-top: 5%;\r\n}\r\n.proile-rating span{\r\n  color: #495057;\r\n  font-size: 15px;\r\n  font-weight: 600;\r\n}\r\n.profile-head .nav-tabs{\r\n  margin-bottom:5%;\r\n}\r\n.profile-head .nav-tabs .nav-link{\r\n  font-weight:600;\r\n  border: none;\r\n}\r\n.profile-head .nav-tabs .nav-link.active{\r\n  border: none;\r\n  border-bottom:2px solid #0062cc;\r\n}\r\n.profile-work{\r\n  padding: 14%;\r\n  margin-top: -15%;\r\n}\r\n.profile-work p{\r\n  font-size: 12px;\r\n  color: #818182;\r\n  font-weight: 600;\r\n  margin-top: 10%;\r\n}\r\n.profile-work a{\r\n  text-decoration: none;\r\n  color: #495057;\r\n  font-weight: 600;\r\n  font-size: 14px;\r\n}\r\nh\r\n.profile-work ul{\r\n  list-style: none;\r\n}\r\n.profile-tab label{\r\n  font-weight: 600;\r\n}\r\n.profile-tab p{\r\n  font-weight: 600;\r\n  color: #0062cc;\r\n}\r\n"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" href=\"events.html\">Husky Neighborhood</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"./events.html\">Events\n          </a>\n        </li>\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\">Profile<span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"./index.html\">Log out</a>\n        </li>\n        <!-- <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Contact</a>\n        </li> -->\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container emp-profile\">\n  <form method=\"post\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"profile-img\">\n          <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog\" alt=\"\"/>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"profile-head\">\n          <h4>\n            Anna Marta\n          </h4>\n          <h5>\n            Senior BSCS at NEU\n          </h5>\n\n          <p class=\"proile-rating\">Status: <span> Organizator </span></p>\n\n\n          <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\">About</a>\n            </li>\n\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-md-2\">\n        <a href=\"./profile-edit.html\" class=\"btn profile-edit-btn\"> Edit Profile </a>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"profile-work\">\n          <a href=\"./organization.html\" class=\"btn btn-block btn-primary text-white\"> Manage organization </a>\n\n\n          <hr/>\n          <p>INTERESTS</p>\n          <a href=\"\">Web Design</a><br/>\n          <a href=\"\">Games</a><br/>\n          <a href=\"\">Art</a><br/>\n\n\n\n\n\n        </div>\n      </div>\n      <div class=\"col-md-8\">\n        <div class=\"tab-content profile-tab\" id=\"myTabContent\">\n          <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <label>Name</label>\n              </div>\n              <div class=\"col-md-6\">\n                <p>Kshiti Ghelani</p>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <label>Email</label>\n              </div>\n              <div class=\"col-md-6\">\n                <p>kshitighelani@gmail.com</p>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <label>Phone</label>\n              </div>\n              <div class=\"col-md-6\">\n                <p>123 456 7890</p>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <label>Profession</label>\n              </div>\n              <div class=\"col-md-6\">\n                <p>Web Developer and Designer</p>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <label>Bio</label>\n              </div>\n              <div class=\"col-md-6\">\n                <p>Detailed description</p>\n              </div>\n            </div>\n\n\n          </div>\n          <br/>\n\n\n\n          <div>\n            <ul class=\"nav nav-tabs\" id=\"eventsTab\" role=\"tablist\">\n              <li class=\"nav-item\">\n                <a class=\"nav-link active\" id=\"events-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\"\n                   aria-controls=\"home\" aria-selected=\"true\">Recently Bookmarked Events</a>\n              </li>\n            </ul>\n            <br />\n            <div class=\"card w-41 flex-row\">\n              <div class=\"card-header border-0\">\n                <img class=\"img-fluid\" src=\"../assets/book-love.jpeg\" alt=\"img\">\n              </div>\n\n              <div class=\"card-body col-md-8\">\n                <h5 class=\"card-title\">Blind Date with a Book</h5>\n                <p class=\"card-text\">Don't judge a book by its cover. Put your trust in fate and buy a book\n                  without knowing the title, maybe you will fall in love!</p>\n                <a href=\"./event.html\" class=\"btn btn-primary\">View</a>\n              </div>\n            </div>\n          </div>\n\n\n\n\n        </div>\n\n\n\n\n      </div>\n    </div>\n</form>\n</div>\n"

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
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "/* Form */\r\n.form {\r\n  position: relative;\r\n  z-index: 1;\r\n  background: #FFFFFF;\r\n  max-width: 400px;\r\n  margin: 0 auto 100px;\r\n  padding: 30px;\r\n  border-top-left-radius: 3px;\r\n  border-top-right-radius: 3px;\r\n  border-bottom-left-radius: 3px;\r\n  border-bottom-right-radius: 3px;\r\n  text-align: center;\r\n}\r\n.form .thumbnail {\r\n  width: 150px;\r\n  height: 150px;\r\n  margin: 0 auto 30px;\r\n  padding: 5px 5px;\r\n}\r\n.form .thumbnail img {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n.form .errors {\r\n  color: white;\r\n  background: rgb(42, 110, 181);\r\n}\r\n.form input {\r\n  outline: 0;\r\n  background: #f2f2f2;\r\n  width: 100%;\r\n  border: 0;\r\n  margin: 0 0 15px;\r\n  padding: 15px;\r\n  border-top-left-radius: 3px;\r\n  border-top-right-radius: 3px;\r\n  border-bottom-left-radius: 3px;\r\n  border-bottom-right-radius: 3px;\r\n  box-sizing: border-box;\r\n  font-size: 14px;\r\n}\r\n.form button {\r\n  outline: 0;\r\n  background: rgb(42, 110, 181);\r\n  width: 100%;\r\n  border: 0;\r\n  padding: 15px;\r\n  border-top-left-radius: 3px;\r\n  border-top-right-radius: 3px;\r\n  border-bottom-left-radius: 3px;\r\n  border-bottom-right-radius: 3px;\r\n  color: #FFFFFF;\r\n  font-size: 14px;\r\n  transition: all 0.3 ease;\r\n  cursor: pointer;\r\n}\r\n.form .message {\r\n  margin: 15px 0 0;\r\n  color: #b3b3b3;\r\n  font-size: 12px;\r\n}\r\n.form .message a {\r\n  color: rgb(42, 110, 181);\r\n  text-decoration: none;\r\n}\r\n.form .register-form {\r\n  display: none;\r\n}\r\n.container {\r\n  position: relative;\r\n  z-index: 1;\r\n  max-width: 300px;\r\n  margin: 0 auto;\r\n}\r\n.container:before, .container:after {\r\n  content: \"\";\r\n  display: block;\r\n  clear: both;\r\n}\r\n.container .info {\r\n  margin: 50px auto;\r\n  text-align: center;\r\n}\r\n.container .info h1 {\r\n  margin: 0 0 15px;\r\n  padding: 0;\r\n  font-size: 36px;\r\n  font-weight: 300;\r\n  color: #1a1a1a;\r\n}\r\n.container .info span {\r\n  color: #4d4d4d;\r\n  font-size: 12px;\r\n}\r\n.container .info span a {\r\n  color: #000000;\r\n  text-decoration: none;\r\n}\r\n.container .info span .fa {\r\n  color: rgb(42, 110, 181);\r\n}\r\n/* END Form */\r\n/* Demo Purposes */\r\nbody {\r\n  background: #ccc;\r\n  font-family: \"Roboto\", sans-serif;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\nbody:before {\r\n  content: \"\";\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  display: block;\r\n  background: rgba(255, 255, 255, 0.8);\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n#video {\r\n  z-index: -99;\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  min-width: 100%;\r\n  min-height: 100%;\r\n  width: auto;\r\n  height: auto;\r\n  -webkit-transform: translateX(-50%) translateY(-50%);\r\n  transform: translateX(-50%) translateY(-50%);\r\n}\r\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidenav\">\n  <div class=\"login-main-text\">\n    <h2>Husky Neighborhood<br> Login Page</h2>\n    <p>Login or register from here to access.</p>\n    <br/>\n\n    <img src=\"paw2.jpg\" width=\"150px\" style=\"border-radius: 50%;\">\n\n  </div>\n</div>\n<div class=\"main\">\n  <div class=\"col-md-6 col-sm-12\">\n    <div class=\"login-form\">\n      <form>\n        <div class=\"form-group\">\n          <label>User Name</label>\n          <input type=\"text\" class=\"form-control\" placeholder=\"User Name\">\n        </div>\n        <div class=\"form-group\">\n          <label>Email</label>\n          <input type=\"email\" class=\"form-control\" placeholder=\"Email\">\n        </div>\n        <div class=\"form-group\">\n          <label>Password</label>\n          <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\n        </div>\n        <div class=\"form-group\">\n          <label>Verify Password</label>\n          <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\n        </div>\n        <a href=\"events.html\" type=\"submit\" class=\"btn btn-black\">Register</a>\n      </form>\n    </div>\n  </div>\n</div>\n"

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
        this.resetErrors();
        if (this.username === '') {
            this.noUsernameError = true;
        }
        else {
            if (this.password === '') {
                this.noPasswordError = true;
            }
            else {
                if (this.password2 === '') {
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

// const HOST = 'https://tk-map-nodejs.herokuapp.com/';
var HOST = 'http://localhost:4000/';
var UserServiceClient = /** @class */ (function () {
    function UserServiceClient() {
    }
    UserServiceClient.prototype.findUserByUsername = function (username) {
        return fetch(HOST + 'api/user/username/' + username)
            .then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.findUserByCredentials = function (username, password) {
        return fetch('http://localhost:4000/api/user/username/' + username + '/password/' + password)
            .then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.checkStatus = function () {
        return fetch(HOST + 'api/status', {
            credentials: 'include'
        })
            .then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.login = function (username, password) {
        var credentials = {
            username: username,
            password: password
        };
        return fetch(HOST + 'api/login', {
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
        return fetch(HOST + 'api/logout', {
            method: 'post',
            credentials: 'include'
        });
    };
    UserServiceClient.prototype.register = function (user) {
        return fetch(HOST + 'api/register', {
            body: JSON.stringify(user),
            credentials: 'include',
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    UserServiceClient.prototype.profile = function () {
        return fetch(HOST + 'api/user', {
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