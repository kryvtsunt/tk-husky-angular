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

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"padding-bottom: 250px\">\n  <section class=\"jumbotron text-center\">\n    <div class=\"container\">\n      <h1 class=\"jumbotron-heading\">Welcome to tk-Map</h1>\n      <p class=\"lead text-muted\">This is a simple angular application built around the GoogleMaps API</p>\n      <a href=\"#\"><h3>GITHUB WIKI</h3></a>\n\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = /** @class */ (function () {
    function AboutComponent(route) {
        var _this = this;
        this.route = route;
        this.route.params.subscribe(function (params) { return _this.setParams(params); });
    }
    AboutComponent.prototype.setParams = function (params) {
    };
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], AboutComponent);
    return AboutComponent;
}());



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

module.exports = "<div>\r\n  <app-navbar></app-navbar>\r\n  <div class=\"container-fluid\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n"

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
/* harmony import */ var _services_APIServiceClient__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/APIServiceClient */ "./src/app/services/APIServiceClient.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/user.service.client */ "./src/app/services/user.service.client.ts");
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
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_6__["routing"]
            ],
            providers: [_services_APIServiceClient__WEBPACK_IMPORTED_MODULE_8__["APIServiceClient"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_12__["UserServiceClient"]],
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
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");





var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
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

module.exports = "p {\r\n  color: darkred;\r\n}\r\n\r\n#sunrise {\r\n  color: #eed75b;\r\n}\r\n\r\n#sunset {\r\n  color: #ebb838;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br/>\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div *ngIf=\"loggedIn\">\n        <h3 *ngIf=\"user\">@{{user.username}}</h3>\n        <!--<br/>-->\n      </div>\n      <form class=\"input-group flex flex-nowrap\" #form1=\"ngForm\" (ngSubmit)=\"setCenter()\">\n        <input size=\"40\" [(ngModel)]=\"city\" class=\"form-control\" name=\"city\" placeholder=\"Search\" required/>\n        <div class=\"btn-group input-group-append\">\n          <button (click)=\"setCurrentLocation()\" title=\"Your location\" type=\"submit\" class=\"btn btn-outline-secondary\">\n            <i class=\"fa fa-user\"></i></button>\n          <button (click)=\"getLocation()\" type=\"submit\" class=\"btn btn-dark\" [disabled]=\"form1.invalid\"><i\n            class=\"fa fa-search\"></i></button>\n        </div>\n      </form>\n      <br/>\n      <form class=\"input-group flex flex-nowrap\" #form2=\"ngForm\">\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"marker_title\" name=\"Marker title\" placeholder=\"New marker\">\n        <select class=\"form-control\" [(ngModel)]=\"marker_type\" name=\"Marker title\">\n          <option value=\"\" disabled>Select marker type</option>\n          <option value=\"default\"> Default</option>\n          <option value=\"restaurant\"> Restaurant</option>\n          <option value=\"school\"> School</option>\n          <option value=\"gas\"> Gas Station</option>\n          <option value=\"pharmacy\"> Pharmacy</option>\n\n        </select>\n      </form>\n      <ul class=\"list-group\">\n        <li class=\" list-group-item list-group-item-action list-group-item-light\" (click)=\"getPlaces('restaurant')\">\n          Restaurants\n        </li>\n        <li class=\" list-group-item list-group-item-action list-group-item-light\" (click)=\"getPlaces('school')\">\n          Schools\n        </li>\n        <li class=\" list-group-item list-group-item-action list-group-item-light\" (click)=\"getPlaces('gas_station')\">\n          Gas Stations\n        </li>\n        <li class=\"list-group-item list-group-item-action list-group-item-light\" (click)=\"getPlaces('pharmacy')\">\n          Pharmacies\n        </li>\n\n      </ul>\n      <br/>\n    </div>\n    <div class=\"col-md-8\">\n      <div class=\"text-center\">\n        <h3>\n          <div #gmap style=\"width:100%;height:400px; border: 2px solid #373737\"></div>\n        </h3>\n      </div>\n      <div class=\"btn-group d-flex justify-content-center\">\n        <button (click)=\"save()\" title=\"Save\" class=\"btn btn-dark\"><i class=\"fa fa-save\"></i> Save</button>\n        <button *ngIf=\"!visible\" title=\"Show\" (click)=\"changeVisibility()\" class=\"btn btn-outline-dark\"><i\n          class=\"fa fa-eye-slash\"></i>\n        </button>\n        <button *ngIf=\"visible\" title=\"Hide\" (click)=\"changeVisibility()\" class=\"btn btn-dark\"><i class=\"fa fa-eye\"></i>\n        </button>\n        <button (click)=\"deleteMarkers()\" title=\"Clean\" class=\"btn btn-dark\">Clean <i class=\"fa fa-trash\"></i></button>\n      </div>\n    </div>\n  </div>\n\n  <br/>\n  <hr/>\n  <br/>\n</div>\n"

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
/* harmony import */ var _services_APIServiceClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/APIServiceClient */ "./src/app/services/APIServiceClient.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function HomeComponent(apiService, userService, router) {
        this.apiService = apiService;
        this.userService = userService;
        this.router = router;
    }
    HomeComponent.prototype.getLocation = function () {
        var _this = this;
        this.apiService.getLocation(this.city)
            .then(function (res) {
            _this.lat = res.results[0].geometry.location.lat;
            _this.lng = res.results[0].geometry.location.lng;
            _this.city = res.results[0].formatted_address;
            _this.setCenter();
        });
    };
    HomeComponent.prototype.getPlaces = function (type) {
        var _this = this;
        var request = {
            location: this.map.getCenter(),
            radius: 1000,
            type: type
        };
        var service = new google.maps.places.PlacesService(this.map);
        service.nearbySearch(request, function (results) {
            console.log(results);
            if (results.length > 0) {
                for (var i = 0; i < results.length; i++) {
                    var place = results[i];
                }
                var bounds = new google.maps.LatLngBounds();
                for (var i = 0; i < results.length; i++) {
                    var place = results[i];
                    var image = {
                        url: place.icon,
                        size: new google.maps.Size(71, 71),
                        origin: new google.maps.Point(0, 0),
                        anchor: new google.maps.Point(17, 34),
                        scaledSize: new google.maps.Size(25, 25)
                    };
                    var marker = new google.maps.Marker({
                        map: _this.map,
                        icon: image,
                        title: place.name,
                        position: place.geometry.location
                    });
                    var li = document.createElement('li');
                    li.textContent = place.name;
                    marker.setVisible(_this.visible);
                    _this.markers.push(marker);
                    bounds.extend(place.geometry.location);
                }
                _this.map.fitBounds(bounds);
            }
            else {
                alert('Nothing is found');
            }
        });
    };
    HomeComponent.prototype.setCenter = function () {
        this.map.setCenter(new google.maps.LatLng(this.lat, this.lng));
    };
    HomeComponent.prototype.save = function () {
        if (this.loggedIn) {
            this.user.markers = [];
            for (var _i = 0, _a = this.markers; _i < _a.length; _i++) {
                var m = _a[_i];
                var mm = {
                    lat: m.getPosition().lat(),
                    lng: m.getPosition().lng(),
                    title: m.title,
                    type: m.icon.url
                };
                this.user.markers.push(mm);
            }
            this.userService.updateUser(this.user);
            console.log(this.user);
        }
        else {
            alert('You need to Sign In first');
            this.router.navigate(['login']);
        }
    };
    HomeComponent.prototype.setCurrentLocation = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
                _this.infoWindow.setPosition(new google.maps.LatLng(_this.lat, _this.lng));
                _this.infoWindow.setContent('You are here');
                _this.infoWindow.open(_this.map);
                _this.setCenter();
            }, function () {
                this.handleLocationError(true, this.infoWindow, this.map.getCenter());
            });
        }
        else {
            // Browser doesn't support Geolocation
            this.handleLocationError(false, this.infoWindow, this.map.getCenter());
        }
    };
    HomeComponent.prototype.handleLocationError = function (browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(this.map);
    };
    HomeComponent.prototype.deleteMarkers = function () {
        for (var _i = 0, _a = this.markers; _i < _a.length; _i++) {
            var marker = _a[_i];
            marker.setMap(null);
        }
        this.markers = [];
    };
    HomeComponent.prototype.changeVisibility = function () {
        this.visible = !this.visible;
        for (var _i = 0, _a = this.markers; _i < _a.length; _i++) {
            var marker = _a[_i];
            marker.setVisible(this.visible);
        }
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.markers = [];
        this.loggedIn = false;
        this.visible = true;
        this.city = '';
        this.marker_title = '';
        var mapProp = {
            center: new google.maps.LatLng(50.4501, 30.5234),
            zoom: 14,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            draggableCursor: 'default'
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
        this.infoWindow = new google.maps.InfoWindow;
        this.setCurrentLocation();
        google.maps.event.addListener(this.map, 'click', function (event) {
            var url;
            var title;
            if (_this.marker_title === '') {
                title = 'New marker';
            }
            else {
                title = _this.marker_title;
            }
            _this.marker_title = '';
            switch (_this.marker_type) {
                case 'restaurant':
                    url = 'https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png';
                    break;
                case 'pharmacy':
                    url = 'https://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png';
                    break;
                case 'school':
                    url = 'https://maps.gstatic.com/mapfiles/place_api/icons/school-71.png';
                    break;
                case 'gas':
                    url = 'https://maps.gstatic.com/mapfiles/place_api/icons/gas_station-71.png';
                    break;
                default:
                    url = 'https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png';
                    break;
            }
            var image = {
                url: url,
                size: new google.maps.Size(25, 25),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(12, 12),
                scaledSize: new google.maps.Size(25, 25)
            };
            var marker = new google.maps.Marker({
                map: _this.map,
                icon: image,
                title: title,
                position: event.latLng,
                visible: _this.visible
            });
            _this.markers.push(marker);
        });
        this.userService.checkStatus()
            .then(function (res) {
            console.log(res);
            if (res) {
                _this.loggedIn = true;
                _this.userService.profile()
                    .then(function (res2) {
                    _this.user = res2;
                    console.log(res2);
                    for (var _i = 0, _a = _this.user.markers; _i < _a.length; _i++) {
                        var m = _a[_i];
                        var image = {
                            url: m.type,
                            size: new google.maps.Size(25, 25),
                            origin: new google.maps.Point(0, 0),
                            anchor: new google.maps.Point(12, 12),
                            scaledSize: new google.maps.Size(25, 25)
                        };
                        var marker = new google.maps.Marker({
                            map: _this.map,
                            icon: image,
                            title: m.title,
                            position: new google.maps.LatLng(m.lat, m.lng),
                            visible: _this.visible
                        });
                        _this.markers.push(marker);
                    }
                });
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('gmap'),
        __metadata("design:type", Object)
    ], HomeComponent.prototype, "gmapElement", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_APIServiceClient__WEBPACK_IMPORTED_MODULE_1__["APIServiceClient"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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

module.exports = "/* Form */\r\n\r\n.form {\r\n  position: relative;\r\n  z-index: 1;\r\n  background: #FFFFFF;\r\n  max-width: 400px;\r\n  margin: 0 auto 100px;\r\n  padding: 30px;\r\n  border-top-left-radius: 3px;\r\n  border-top-right-radius: 3px;\r\n  border-bottom-left-radius: 3px;\r\n  border-bottom-right-radius: 3px;\r\n  text-align: center;\r\n}\r\n\r\n.form .thumbnail {\r\n  width: 150px;\r\n  height: 150px;\r\n  margin: 0 auto 30px;\r\n  padding: 5px 5px;\r\n}\r\n\r\n.form .thumbnail img {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n.form .errors {\r\n  color: white;\r\n  background: #c82f2e;\r\n}\r\n\r\n.form input {\r\n  outline: 0;\r\n  background: #f2f2f2;\r\n  width: 100%;\r\n  border: 0;\r\n  margin: 0 0 15px;\r\n  padding: 15px;\r\n  border-top-left-radius: 3px;\r\n  border-top-right-radius: 3px;\r\n  border-bottom-left-radius: 3px;\r\n  border-bottom-right-radius: 3px;\r\n  box-sizing: border-box;\r\n  font-size: 14px;\r\n}\r\n\r\n.form button {\r\n  outline: 0;\r\n  background: #c82f2e;\r\n  width: 100%;\r\n  border: 0;\r\n  padding: 15px;\r\n  border-top-left-radius: 3px;\r\n  border-top-right-radius: 3px;\r\n  border-bottom-left-radius: 3px;\r\n  border-bottom-right-radius: 3px;\r\n  color: #FFFFFF;\r\n  font-size: 14px;\r\n  transition: all 0.3 ease;\r\n  cursor: pointer;\r\n}\r\n\r\n.form .message {\r\n  margin: 15px 0 0;\r\n  color: #b3b3b3;\r\n  font-size: 12px;\r\n}\r\n\r\n.form .message a {\r\n  color: #c82f2e;\r\n  text-decoration: none;\r\n}\r\n\r\n.form .register-form {\r\n  display: none;\r\n}\r\n\r\n.container {\r\n  position: relative;\r\n  z-index: 1;\r\n  max-width: 300px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.container:before, .container:after {\r\n  content: \"\";\r\n  display: block;\r\n  clear: both;\r\n}\r\n\r\n.container .info {\r\n  margin: 50px auto;\r\n  text-align: center;\r\n}\r\n\r\n.container .info h1 {\r\n  margin: 0 0 15px;\r\n  padding: 0;\r\n  font-size: 36px;\r\n  font-weight: 300;\r\n  color: #1a1a1a;\r\n}\r\n\r\n.container .info span {\r\n  color: #4d4d4d;\r\n  font-size: 12px;\r\n}\r\n\r\n.container .info span a {\r\n  color: #000000;\r\n  text-decoration: none;\r\n}\r\n\r\n.container .info span .fa {\r\n  color: #c82f2e;\r\n}\r\n\r\n/* END Form */\r\n\r\n/* Demo Purposes */\r\n\r\nbody {\r\n  background: #ccc;\r\n  font-family: \"Roboto\", sans-serif;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\nbody:before {\r\n  content: \"\";\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  display: block;\r\n  background: rgba(255, 255, 255, 0.8);\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n#video {\r\n  z-index: -99;\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  min-width: 100%;\r\n  min-height: 100%;\r\n  width: auto;\r\n  height: auto;\r\n  -webkit-transform: translateX(-50%) translateY(-50%);\r\n  transform: translateX(-50%) translateY(-50%);\r\n}\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form\">\n  <div class=\"thumbnail\"><img src=\"data:image/png;base64,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\"/></div>\n  <div class=\"errors\">\n    <div *ngIf=\"noUsernameError\">\n      <p> Username field is empty </p>\n    </div>\n    <div *ngIf=\"noPasswordError\" >\n      <p> Password field is empty </p>\n    </div>\n    <div *ngIf=\"credentialsError\">\n      <p> Wrong Credentials </p>\n    </div>\n  </div>\n  <div>\n  <div>\n    <input type=\"text\" [(ngModel)]=\"username\"\n           placeholder=\"Username\"\n           class=\"form-control\"/>\n    <input type=\"password\" [(ngModel)]=\"password\"\n           placeholder=\"Password\"\n           class=\"form-control\"/>\n    <button (click)=\"login()\">Login</button>\n    <p class=\"message\">Not registered? <a routerLink=\"/register\">Sign up</a></p>\n  </div>\n</div>\n\n"

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

module.exports = " <nav class=\"navbar navbar-expand-md navbar-dark\" style=\"background-color: #202020;\">\n    <a class=\"navbar-brand\" routerLink=\"./home\">tk-Map</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\"\n            aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"./home\" routerLinkActive=\"active\"> Home </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"./about\"> About </a>\n        </li>\n      </ul>\n      <ul class=\"navbar-nav my-2 my-lg-0\">\n\n        <li *ngIf=\"!loggedIn\" class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"./login\" routerLinkActive=\"active\"> Sign In </a>\n        </li>\n        <!--<li *ngIf=\"loggedIn\" class=\"nav-item\">-->\n          <!--<a class=\"nav-link\" routerLink=\"./profile\" routerLinkActive=\"active\"> Profile </a>-->\n        <!--</li>-->\n        <li *ngIf=\"loggedIn\" class=\"nav-item\">\n          <button class=\"btn bg-transparent nav-link\"\n                  (click)=\"logout()\"> Log Out </button>\n        </li>\n\n      </ul>\n    </div>\n  </nav>\n\n"

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

module.exports = "<!--<br/>-->\n<!--<div class=\"container text-center\">-->\n  <!--<h1>Register</h1>-->\n  <!--<div class=\"container\">-->\n\n  <!--</div>-->\n  <!--<br/>-->\n\n\n  <!--<button (click)=\"register(username, password, password2)\"-->\n          <!--class=\"btn btn-primary btn-block container\">-->\n    <!--Register-->\n  <!--</button>-->\n  <!--<div class=\"row\">-->\n    <!--<div class=\"col-md-6 \">-->\n    <!--<button class=\"btn btn-block\" routerLink=\"/home\">Home</button>-->\n    <!--</div>-->\n    <!--<div class=\"col-md-6\">-->\n    <!--<button class=\"btn btn-block\" routerLink=\"/login\">Login</button>-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</div>-->\n\n\n<div class=\"form\">\n  <div class=\"thumbnail\">\n    <img src=\"data:image/png;base64,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\"/>\n  </div>\n  <div class=\"errors\">\n    <div *ngIf=\"noUsernameError\">\n      <p> Username field is empty </p>\n    </div>\n    <div *ngIf=\"noPasswordError\" >\n      <p> Password field is empty </p>\n    </div>\n    <div *ngIf=\"noPassword2Error\">\n      <p> Verification password field is empty </p>\n    </div>\n    <div *ngIf=\"usernameError\">\n      <p> Username is already taken </p>\n    </div>\n    <div *ngIf=\"passwordError\">\n      <p> Passwords do not match </p>\n    </div>\n  </div>\n  <div>\n    <input type=\"text\" [(ngModel)]=\"username\"\n    placeholder=\"Username\"\n    class=\"form-control\"/>\n    <input type=\"password\"  [(ngModel)]=\"password\"\n    placeholder=\"Password\"\n    class=\"form-control\"/>\n    <input type=\"password\" [(ngModel)]=\"password2\"\n    placeholder=\"Verify password\"\n    class=\"form-control\"/>\n    <button (click)=\"register()\"\n    class=\"btn\">\n    Register\n    </button>\n    <p class=\"message\">Already registered? <a routerLink=\"/login\">Sign In</a></p>\n  </div>\n</div>\n"

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

/***/ "./src/app/services/APIServiceClient.ts":
/*!**********************************************!*\
  !*** ./src/app/services/APIServiceClient.ts ***!
  \**********************************************/
/*! exports provided: APIServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIServiceClient", function() { return APIServiceClient; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var APIServiceClient = /** @class */ (function () {
    function APIServiceClient() {
    }
    // Google Geocoding API
    APIServiceClient.prototype.getLocation = function (city) {
        var url = 'https://maps.google.com/maps/api/geocode/json?key=AIzaSyCBLdVMhMOKW4BbtLLfSZoYz_pL61Uz4Qk&address=' + city;
        return fetch(url).then(function (response) { return response.json(); });
    };
    APIServiceClient = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], APIServiceClient);
    return APIServiceClient;
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

var HOST = 'https://tk-map-nodejs.herokuapp.com/';
// const HOST = 'http://localhost:4000/';
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

module.exports = __webpack_require__(/*! C:\Users\Tim\Documents\WebDev\tk-map-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map