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

module.exports = "/* :host {\n  margin: 100px;\n} */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-modal-component></app-modal-component>\n<app-footer></app-footer>\n\n\n"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_userprofiles_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/userprofiles.service */ "./src/app/services/userprofiles.service.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/modal/modal.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"]
    },
    {
        path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"]
    },
    {
        path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"]
    },
    {
        path: 'modal',
        component: _modal_modal_component__WEBPACK_IMPORTED_MODULE_16__["ModalComponent"]
    },
    {
        path: '**',
        component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_16__["ModalComponent"]
            ],
            imports: [
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_5__["AngularFontAwesomeModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"].forRoot()
            ],
            entryComponents: [_modal_modal_component__WEBPACK_IMPORTED_MODULE_16__["ModalComponent"]],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"], _services_userprofiles_service__WEBPACK_IMPORTED_MODULE_15__["UserProfilesService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_16__["ModalComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clear-floats{\n    clear: both;\n}\n\n#myFooter {\n\tbackground-color: #679289;\n    color:white;\n}\n\n#myFooter .footer-copyright{\n\tbackground-color: #363838;\n\tpadding-top: 3px;\n\tpadding-bottom:3px;\n\ttext-align: center;\n}\n\n#myFooter .footer-copyright p {\n\tmargin:10px;\n\tcolor: #ccc;\n}\n\n#myFooter ul{\n\tlist-style-type: none;\n    padding-left: 0;\n    line-height: 1.7;\n\n}\n\n#myFooter h5{\n\tfont-size: 18px;\n    color: white;\n    font-weight: bold;\n    margin-top: 30px;\n}\n\n#myFooter a{\n\tcolor:#d2d1d1;\n\ttext-decoration: none;\n}\n\n#myFooter a:hover, #myFooter a:focus{\n\ttext-decoration: none;\n\tcolor:#1d7874;\n}\n\n#myFooter .myCols{\n\ttext-align: center;\n}\n\n#myFooter .social-networks{\n    text-align: center;\n    padding-top: 0px;\n    padding-bottom: 15px;\n}\n\n#myFooter .social-networks a{\n    font-size: 32px;\n    margin-right: 5px;\n    margin-left: 5px;\n    color: #f9f9f9;\n    padding: 10px;\n    transition: 0.2s;\n}\n\n#myFooter .social-networks a:hover{\n\ttext-decoration: none;\n\n}\n\n#myFooter .facebook:hover{\n\tcolor:#0077e2;\n}\n\n#myFooter .google:hover{\n\tcolor:#ef1a1a;\n}\n\n#myFooter .twitter:hover{\n\tcolor: #00aced;\n}\n\n@media screen and (max-width: 767px){\n\t#myFooter {\n\t\ttext-align: center;\n\t}\n}\n\n/* CSS used for positioning the footers at the bottom of the page. */\n\nhtml{\n\theight: 100% !important;\n}\n\nbody{\n    display: flex;\n    display: -webkit-flex;\n    flex-direction: column;\n    height: 100%;\n}\n\n.content{\n\tflex: 1 0 auto;\n\t-webkit-flex: 1 0 auto;\n\tmin-height: 200px;\n}\n\n#myFooter{\n\tflex: 0 0 auto;\n    -webkit-flex: 0 0 auto;\n    /* position: absolute; */\n    left: 0 ; right: 0; bottom: 0; \n    width:100%;\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"clear-floats\"></div>\n<footer id=\"myFooter\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-4 myCols\">\n                <h5>Get started</h5>\n                <ul>\n                    <li><a routerLink = \"signup\">Sign up</a></li>\n                    <li><a routerLink = \"login\">Login</a></li>\n                    <li><a routerLink = \"\">Why Join?</a></li>\n                </ul>\n            </div>\n            <div class=\"col-sm-4 myCols\">\n                <h5>About CauseConnect</h5>\n                <ul>\n                    <li><a routerLink = \"\">About us</a></li>\n                    <li><a routerLink = \"\">Contact us</a></li>\n                </ul>\n            </div>\n            <div class=\"col-sm-4 myCols\">\n                <h5>Legal</h5>\n                <ul>\n                    <li><a routerLink = \"\">Terms of Service</a></li>\n                    <li><a routerLink = \"\">Terms of Use</a></li>\n                    <li><a routerLink = \"\">Privacy Policy</a></li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div class=\"social-networks\">\n        <a href=\"http://twitter.com\" class=\"twitter\"><i class=\"fa fa-twitter\"></i></a>\n        <a href=\"http://facebook.com\" class=\"facebook\"><i class=\"fa fa-facebook-square\"></i></a>\n        <a href=\"http://google.com\" class=\"google\"><i class=\"fa fa-google-plus\"></i></a>\n    </div>\n    <div class=\"footer-copyright\">\n        <p>© 2018 Copyright <a routerLink=\"home\">CauseConnect</a> - Made with ♥ at <a href=\"https://www.ironhack.com/en/locations/miami\">Ironhack Miami</a>. </p>\n    </div>\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // Session Service



// import { currentUser } from '../services/auth.service';
var FooterComponent = /** @class */ (function () {
    function FooterComponent(myService, activatedRoute, myRouter) {
        this.myService = myService;
        this.activatedRoute = activatedRoute;
        this.myRouter = myRouter;
        this.formInfo = {
            username: '',
            password: ''
        };
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>   \n    <h1>Welcome to CauseConnect!</h1>\n    <a [routerLink]=\"['/login']\"> login </a>\n    <a [routerLink]=\"['/signup']\"> signup </a>\n    <a [routerLink]=\"['/profile']\"> profile </a>\n    <a [routerLink]=\"['/']\"> home </a>\n</div>\n\n<!-- <body data-spy=\"scroll\" data-offset=\"75\"> -->\n\n   \n    <!--================================= HEADER START =============================================-->\n    <div class=\"container-fluid header-bgimage bgimage-property header-section-space header_common\" id=\"home\">\n        <div class=\"container\">\n            <div class=\"col-md-12 column-center no-padding white-text\">\n                <h1 class=\"center heading-bottom\">CauseConnect</h1>\n                <h3 class=\"center\">Connect to the cause and volunteer your heart</h3>\n                <div class=\"center btn-top-3\">\n                    <a href=\"#\">\n                        <div class=\"common-btn header-btn\">Set up a profile now</div>\n                    </a>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--================================= HEADER END =============================================-->\n\n\n    <!--================================= FUND RAISE START =============================================-->\n    <section class=\"container-fluid section-space section-bg-1 fund_common skills-1\">\n        <div class=\"container\">\n            <h2 class=\"center section-heading-bottom\">Organization Opportunities</h2>\n            <div class=\"row\">\n                <!--=============== COLUMN-1 ==================-->\n                <div class=\"col-md-4 col-sm-4 res-common-bottom-1\">\n                    <div class=\"fund-bg\">\n                        <div class=\"left\">\n                            <img src=\"../assets/images/750x500x1.jpg\" alt=\"image\" class=\"img-responsive\" />\n                        </div>\n                        <div class=\"content-pad\">\n                            <h3 class=\"left sub-heading-bottom\">\n                                <a href=\"#\">Org 1</a>\n                            </h3>\n                            <p class=\"left\">This organizatio does really cool stuff.</p>\n                            <div class=\"div-right skill-bar-percent\">\n                                <div class=\"right ls count distab-cell-middle\">0</div>\n                                <div class=\"distab-cell-middle\">%</div>\n                            </div>\n                            <div class=\"skillbar clearfix\" data-percent=\"0%\">\n                                <div class=\"skill-progress-1 progressbar\"></div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-md-6 col-sm-6 col-xs-6\">\n                                    <p class=\"left goal ls\">Events</p>\n                                    <p class=\"left amount ls\">3</p>\n                                </div>\n\n                                <div class=\"col-md-6 col-sm-6 col-xs-6\">\n                                    <p class=\"right goal ls\">Open Jobs</p>\n                                    <p class=\"right amount ls\">5</p>\n                                </div>\n                            </div>\n                            <div class=\"center btn-top-3\">\n                                <a href=\"#\">\n                                    <div class=\"common-btn fund-btn\">See Organization Details</div>\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <!--=============== COLUMN-2 ==================-->\n                <div class=\"col-md-4 col-sm-4 res-common-bottom-1\">\n                    <div class=\"fund-bg\">\n                        <div class=\"left\">\n                            <img src=\"../assets/images/750x500x2.jpg\" alt=\"image\" class=\"img-responsive\" />\n                        </div>\n                        <div class=\"content-pad\">\n                            <h3 class=\"left sub-heading-bottom\">\n                                <a href=\"#\">Org 2</a>\n                            </h3>\n                            <p class=\"left\">This organization does cool stuff</p>\n                            <div class=\"div-right skill-bar-percent\">\n                                <div class=\"right ls count distab-cell-middle\">50</div>\n                                <div class=\"distab-cell-middle\">%</div>\n                            </div>\n                            <div class=\"skillbar clearfix\" data-percent=\"50%\">\n                                <div class=\"skill-progress-1 progressbar\"></div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-md-6 col-sm-6 col-xs-6\">\n                                    <p class=\"left goal ls\">Events</p>\n                                    <p class=\"left amount ls\">3</p>\n                                </div>\n\n                                <div class=\"col-md-6 col-sm-6 col-xs-6\">\n                                    <p class=\"right goal ls\">Jobs</p>\n                                    <p class=\"right amount ls\">6</p>\n                                </div>\n                            </div>\n                            <div class=\"center btn-top-3\">\n                                <a href=\"#\">\n                                    <div class=\"common-btn fund-btn\">See Organization Details</div>\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <!--=============== COLUMN-3 ==================-->\n                <div class=\"col-md-4 col-sm-4\">\n                    <div class=\"fund-bg\">\n                        <div class=\"left\">\n                            <img src=\"../assets/images/750x500x3.jpg\" alt=\"image\" class=\"img-responsive\" />\n                        </div>\n                        <div class=\"content-pad\">\n                            <h3 class=\"left sub-heading-bottom\">\n                                <a href=\"#\">CLEAN AND SAVE WATER</a>\n                            </h3>\n                            <p class=\"left\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra</p>\n                            <div class=\"div-right skill-bar-percent\">\n                                <div class=\"right ls count distab-cell-middle\">70</div>\n                                <div class=\"distab-cell-middle\">%</div>\n                            </div>\n                            <div class=\"skillbar clearfix\" data-percent=\"70%\">\n                                <div class=\"skill-progress-1 progressbar\"></div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-md-6 col-sm-6 col-xs-6\">\n                                    <p class=\"left goal ls\">RAISED</p>\n                                    <p class=\"left amount ls\">$70,000</p>\n                                </div>\n\n                                <div class=\"col-md-6 col-sm-6 col-xs-6\">\n                                    <p class=\"right goal ls\">GOAL</p>\n                                    <p class=\"right amount ls\">$100,000</p>\n                                </div>\n                            </div>\n                            <div class=\"center btn-top-3\">\n                                <a href=\"#\">\n                                    <div class=\"common-btn fund-btn\">Donate Now</div>\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n    <!--================================= FUND RAISE END =============================================-->\n\n    <!--================================= ABOUT US START =============================================-->\n    <section class=\"container-fluid section-space section-bg-2 about_common\" id=\"about\">\n        <div class=\"container\">\n            <h2 class=\"center section-heading-bottom\">ABOUT US</h2>\n            <div class=\"row\">\n                <!--=============== COLUMN-1 ==================-->\n                <div class=\"col-md-6 col-sm-6 about-res-common-bottom\">\n                    <div class=\"left image-bottom\">\n                        <img src=\"../assets/images/750x420.jpg\" alt=\"image\" class=\"img-responsive image-center\" />\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-6 col-sm-6 col-xs-12 res-image-bottom-1\">\n                            <h3 class=\"left sub-heading-bottom\">\n                                <a href=\"#\">VISION</a>\n                            </h3>\n                            <p class=\"left\">Lorem ipsum dolor sit amet, risus adipiscing elit. Nam pharetra efficitur diam, vel sagittis\n                                ipsum.</p>\n                        </div>\n\n                        <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                            <h3 class=\"left sub-heading-bottom\">\n                                <a href=\"#\">MISSION</a>\n                            </h3>\n                            <p class=\"left\">Lorem ipsum dolor sit amet, risus adipiscing elit. Nam pharetra efficitur diam, vel sagittis\n                                ipsum.</p>\n                        </div>\n                    </div>\n                </div>\n\n                <!--=============== COLUMN-2 ==================-->\n                <div class=\"col-md-6 col-sm-6\">\n                    <div class=\"about-verticalcarousel\">\n                        <div class=\"verticalCarouselHeader\">\n                            <a href=\"#\" class=\"vc_goDown\">\n                                <i class=\"fa fa-fw fa-angle-down\"></i>\n                            </a>\n                            <a href=\"#\" class=\"vc_goUp\">\n                                <i class=\"fa fa-fw fa-angle-up\"></i>\n                            </a>\n                        </div>\n                        <ul class=\"verticalCarouselGroup vc_list\">\n                            <!--=============== ROW-1 ==================-->\n                            <li>\n                                <div class=\"row\">\n                                    <div class=\"col-md-6 col-xs-6 common-full\">\n                                        <div class=\"left res-image-bottom res-about-bottom\">\n                                            <img src=\"../assets/images/260x200x1.jpg\" alt=\"image\" class=\"img-responsive\" />\n                                        </div>\n                                    </div>\n\n                                    <div class=\"col-md-6 col-xs-6 common-full\">\n                                        <div class=\"name-top\">\n                                            <h3 class=\"left sub-heading-bottom\">EURA BOUGH</h3>\n                                            <p class=\"left volunteer ls\">Founder</p>\n                                            <!--================= SOCIAL ICON =================-->\n                                            <div class=\"left social-top\">\n                                                <ul class=\"no-padding no-margin social-icon\">\n                                                    <li>\n                                                        <a href=\"#\">\n                                                            <img src=\"../assets/images/social_1.png\" alt=\"icon\" />\n                                                        </a>\n                                                    </li>\n                                                    <li>\n                                                        <a href=\"#\">\n                                                            <img src=\"../assets/images/social_2.png\" alt=\"icon\" />\n                                                        </a>\n                                                    </li>\n                                                    <li>\n                                                        <a href=\"#\">\n                                                            <img src=\"../assets/images/social_3.png\" alt=\"icon\" />\n                                                        </a>\n                                                    </li>\n                                                </ul>\n                                            </div>\n                                            <!--================= SOCIAL ICON =================-->\n                                        </div>\n                                    </div>\n                                </div>\n                            </li>\n\n                            <!--=============== ROW-2 ==================-->\n                            <li>\n                                <div class=\"row\">\n                                    <div class=\"col-md-6 col-xs-6 common-full\">\n                                        <div class=\"left res-image-bottom res-about-bottom\">\n                                            <img src=\"../assets/images/260x200x2.jpg\" alt=\"image\" class=\"img-responsive\" />\n                                        </div>\n                                    </div>\n\n                                    <div class=\"col-md-6 col-xs-6 common-full\">\n                                        <div class=\"name-top\">\n                                            <h3 class=\"left sub-heading-bottom\">SAMATHA ARENT</h3>\n                                            <p class=\"left volunteer ls\">Co - Founder</p>\n                                            <!--================= SOCIAL ICON =================-->\n                                            <div class=\"left social-top\">\n                                                <ul class=\"no-padding no-margin social-icon\">\n                                                    <li>\n                                                        <a href=\"#\">\n                                                            <img src=\"../assets/images/social_1.png\" alt=\"icon\" />\n                                                        </a>\n                                                    </li>\n                                                    <li>\n                                                        <a href=\"#\">\n                                                            <img src=\"../assets/images/social_2.png\" alt=\"icon\" />\n                                                        </a>\n                                                    </li>\n                                                    <li>\n                                                        <a href=\"#\">\n                                                            <img src=\"../assets/images/social_3.png\" alt=\"icon\" />\n                                                        </a>\n                                                    </li>\n                                                </ul>\n                                            </div>\n                                            <!--================= SOCIAL ICON =================-->\n                                        </div>\n                                    </div>\n                                </div>\n                            </li>\n\n                            <!--=============== ROW-3 ==================-->\n                            <li>\n                                <div class=\"row\">\n                                    <div class=\"col-md-6 col-xs-6 common-full\">\n                                        <div class=\"left res-image-bottom res-about-bottom\">\n                                            <img src=\"../assets/images/260x200x3.jpg\" alt=\"image\" class=\"img-responsive\" />\n                                        </div>\n                                    </div>\n\n                                    <div class=\"col-md-6 col-xs-6 common-full\">\n                                        <div class=\"name-top\">\n                                            <h3 class=\"left sub-heading-bottom\">MELISSA KOGA</h3>\n                                            <p class=\"left volunteer ls\">Organizer</p>\n                                            <!--================= SOCIAL ICON =================-->\n                                            <div class=\"left social-top\">\n                                                <ul class=\"no-padding no-margin social-icon\">\n                                                    <li>\n                                                        <a href=\"#\">\n                                                            <img src=\"../assets/images/social_1.png\" alt=\"icon\" />\n                                                        </a>\n                                                    </li>\n                                                    <li>\n                                                        <a href=\"#\">\n                                                            <img src=\"../assets/images/social_2.png\" alt=\"icon\" />\n                                                        </a>\n                                                    </li>\n                                                    <li>\n                                                        <a href=\"#\">\n                                                            <img src=\"../assets/images/social_3.png\" alt=\"icon\" />\n                                                        </a>\n                                                    </li>\n                                                </ul>\n                                            </div>\n                                            <!--================= SOCIAL ICON =================-->\n                                        </div>\n                                    </div>\n                                </div>\n                            </li>\n\n                            <!--=============== ROW-4 ==================-->\n                            <li>\n                                <div class=\"row\">\n                                    <div class=\"col-md-6 col-xs-6 common-full\">\n                                        <div class=\"left res-image-bottom res-about-bottom\">\n                                            <img src=\"../assets/images/260x200x4.jpg\" alt=\"image\" class=\"img-responsive\" />\n                                        </div>\n                                    </div>\n\n                                    <div class=\"col-md-6 col-xs-6 common-full\">\n                                        <div class=\"name-top\">\n                                            <h3 class=\"left sub-heading-bottom\">LYNDA PATTISON</h3>\n                                            <p class=\"left volunteer ls\">Analyst</p>\n                                            <!--================= SOCIAL ICON =================-->\n                                            <div class=\"left social-top\">\n                                                <ul class=\"no-padding no-margin social-icon\">\n                                                    <li>\n                                                        <a href=\"#\">\n                                                            <img src=\"../assets/images/social_1.png\" alt=\"icon\" />\n                                                        </a>\n                                                    </li>\n                                                    <li>\n                                                        <a href=\"#\">\n                                                            <img src=\"../assets/images/social_2.png\" alt=\"icon\" />\n                                                        </a>\n                                                    </li>\n                                                    <li>\n                                                        <a href=\"#\">\n                                                            <img src=\"../assets/images/social_3.png\" alt=\"icon\" />\n                                                        </a>\n                                                    </li>\n                                                </ul>\n                                            </div>\n                                            <!--================= SOCIAL ICON =================-->\n                                        </div>\n                                    </div>\n                                </div>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n    <!--================================= ABOUT US END =============================================-->\n\n    <!--================================= CTA START =============================================-->\n    <section class=\"container-fluid cta-bgimage bgimage-property section-space white-text cta_common\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <!--=============== COLUMN-1 ==================-->\n                <div class=\"col-md-7\">\n                    <p class=\"center intro ls\">Ready To Contribute</p>\n                    <h2 class=\"center heading-bottom\">WE SAVE 10000+ CHILDREN FROM HUNGER</h2>\n                    <p class=\"center\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra efficitur diam, vel sagittis ipsum.\n                        Curabitur eleifend, risus id sollicitudin pretium, massa ex tristique </p>\n                    <div class=\"center btn-top-3\">\n                        <a href=\"#\">\n                            <div class=\"common-btn cta-btn\">Donate Now</div>\n                        </a>\n                    </div>\n                </div>\n\n                <!--=============== COLUMN-2 ==================-->\n                <div class=\"col-md-5\">\n                    <div class=\"row counter-top\">\n                        <div class=\"col-md-4 col-sm-4 res-common-bottom-1\">\n                            <div class=\"center icon-bottom\">\n                                <img src=\"../assets/images/64x64x7.png\" alt=\"icon\" />\n                            </div>\n                            <p class=\"center counter-num count ls\">524</p>\n                            <p class=\"center counter-sub ls\"> AWARDS </p>\n                        </div>\n\n                        <div class=\"col-md-4 col-sm-4 res-common-bottom-1\">\n                            <div class=\"center icon-bottom\">\n                                <img src=\"../assets/images/64x64x8.png\" alt=\"icon\" />\n                            </div>\n                            <p class=\"center counter-num count ls\">3500</p>\n                            <p class=\"center counter-sub ls\"> VOLUNTEERS</p>\n                        </div>\n\n                        <div class=\"col-md-4 col-sm-4\">\n                            <div class=\"center icon-bottom\">\n                                <img src=\"../assets/images/64x64x9.png\" alt=\"icon\" />\n                            </div>\n                            <p class=\"center counter-num count ls\">684 </p>\n                            <p class=\"center counter-sub ls\"> PROJECTS</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n    <!--================================= CTA END =============================================-->\n\n\n    <!--================================= OUR OTHER FEATURES START =============================================-->\n    <section class=\"container-fluid section-space section-bg-1 features_common\">\n        <div class=\"container\">\n            <h2 class=\"center section-heading-bottom\">OUR OTHER FEATURES</h2>\n            <div class=\"row\">\n                <!--=============== COLUMN-1 ==================-->\n                <div class=\"col-md-4 col-sm-4 col-xs-6 feat-row-bottom res-service-bottom common-full\">\n                    <div class=\"services-bg\">\n                        <div class=\"center image-bottom\">\n                            <img src=\"../assets/images/64x64x1.png\" alt=\"image\" />\n                        </div>\n                        <h3 class=\"center\">\n                            <a href=\"#\">MAKE DONATION</a>\n                        </h3>\n                        <div class=\"uline\"></div>\n                        <p class=\"center\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra efficitur </p>\n                    </div>\n                </div>\n\n                <!--=============== COLUMN-2 ==================-->\n                <div class=\"col-md-4 col-sm-4 col-xs-6 feat-row-bottom res-service-bottom common-full\">\n                    <div class=\"services-bg\">\n                        <div class=\"center image-bottom\">\n                            <img src=\"../assets/images/64x64x2.png\" alt=\"image\" />\n                        </div>\n                        <h3 class=\"center\">\n                            <a href=\"#\">CHILD EDUCATION</a>\n                        </h3>\n                        <div class=\"uline\"></div>\n                        <p class=\"center\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra efficitur </p>\n                    </div>\n                </div>\n\n                <!--=============== COLUMN-3 ==================-->\n                <div class=\"col-md-4 col-sm-4 col-xs-6 feat-row-bottom res-service-bottom common-full\">\n                    <div class=\"services-bg\">\n                        <div class=\"center image-bottom\">\n                            <img src=\"../assets/images/64x64x3.png\" alt=\"image\" />\n                        </div>\n                        <h3 class=\"center\">\n                            <a href=\"#\">ADOPT CHILD</a>\n                        </h3>\n                        <div class=\"uline\"></div>\n                        <p class=\"center\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra efficitur </p>\n                    </div>\n                </div>\n\n                <!--=============== COLUMN-4 ==================-->\n                <div class=\"col-md-4 col-sm-4 col-xs-6 res-service-bottom common-full\">\n                    <div class=\"services-bg\">\n                        <div class=\"center image-bottom\">\n                            <img src=\"../assets/images/64x64x4.png\" alt=\"image\" />\n                        </div>\n                        <h3 class=\"center\">\n                            <a href=\"#\">DONATE BLOOD</a>\n                        </h3>\n                        <div class=\"uline\"></div>\n                        <p class=\"center\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra efficitur </p>\n                    </div>\n                </div>\n\n                <!--=============== COLUMN-5 ==================-->\n                <div class=\"col-md-4 col-sm-4 col-xs-6 common-full res-service-bottom-1\">\n                    <div class=\"services-bg\">\n                        <div class=\"center image-bottom\">\n                            <img src=\"../assets/images/64x64x5.png\" alt=\"image\" />\n                        </div>\n                        <h3 class=\"center\">\n                            <a href=\"#\">INSURE EDUCATION</a>\n                        </h3>\n                        <div class=\"uline\"></div>\n                        <p class=\"center\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra efficitur </p>\n                    </div>\n                </div>\n\n                <!--=============== COLUMN-6 ==================-->\n                <div class=\"col-md-4 col-sm-4 col-xs-6 common-full\">\n                    <div class=\"services-bg\">\n                        <div class=\"center image-bottom\">\n                            <img src=\"../assets/images/64x64x6.png\" alt=\"image\" />\n                        </div>\n                        <h3 class=\"center\">\n                            <a href=\"#\">SAVE EARTH</a>\n                        </h3>\n                        <div class=\"uline\"></div>\n                        <p class=\"center\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra efficitur </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n    <!--================================= OUR OTHER FEATURES END =============================================-->\n\n    <!--================================= VOLUNTEER START =============================================-->\n    <section class=\"container-fluid section-space section-bg-2 volunteer_common\" id=\"volunteer\">\n        <div class=\"container\">\n            <h2 class=\"center section-heading-bottom\">AWESOME VOLUNTEER</h2>\n            <div class=\"row\">\n                <!--=============== COLUMN-1 ==================-->\n                <div class=\"col-md-8 res-common-bottom res-common-bottom-1\">\n                    <div id=\"owl-volunteer\" class=\"owl-carousel owl-theme no-margin no-padding\">\n                        <!--=============== COLUMN-1 ==================-->\n                        <div class=\"item\">\n                            <div class=\"center image-bottom\">\n                                <img src=\"../assets/images/500x450x1.jpg\" alt=\"image\" class=\"img-responsive image-center\" />\n                            </div>\n                            <h3 class=\"center sub-heading-bottom\">INEZ BERRYMAN</h3>\n                            <p class=\"center volunteer ls\">Agricultural Consultant</p>\n                            <!--================= SOCIAL ICON =================-->\n                            <div class=\"center social-top\">\n                                <ul class=\"no-padding no-margin social-icon\">\n                                    <li>\n                                        <a href=\"#\">\n                                            <img src=\"../assets/images/social_1.png\" alt=\"icon\" />\n                                        </a>\n                                    </li>\n                                    <li>\n                                        <a href=\"#\">\n                                            <img src=\"../assets/images/social_2.png\" alt=\"icon\" />\n                                        </a>\n                                    </li>\n                                    <li>\n                                        <a href=\"#\">\n                                            <img src=\"../assets/images/social_3.png\" alt=\"icon\" />\n                                        </a>\n                                    </li>\n                                </ul>\n                            </div>\n                            <!--================= SOCIAL ICON =================-->\n                        </div>\n\n                        <!--=============== COLUMN-2 ==================-->\n                        <div class=\"item\">\n                            <div class=\"center image-bottom\">\n                                <img src=\"../assets/images/500x450x2.jpg\" alt=\"image\" class=\"img-responsive image-center\" />\n                            </div>\n                            <h3 class=\"center sub-heading-bottom\">KYLE RUTLAND</h3>\n                            <p class=\"center volunteer ls\">Analyst Programmer</p>\n                            <!--================= SOCIAL ICON =================-->\n                            <div class=\"center social-top\">\n                                <ul class=\"no-padding no-margin social-icon\">\n                                    <li>\n                                        <a href=\"#\">\n                                            <img src=\"../assets/images/social_1.png\" alt=\"icon\" />\n                                        </a>\n                                    </li>\n                                    <li>\n                                        <a href=\"#\">\n                                            <img src=\"../assets/images/social_2.png\" alt=\"icon\" />\n                                        </a>\n                                    </li>\n                                    <li>\n                                        <a href=\"#\">\n                                            <img src=\"../assets/images/social_3.png\" alt=\"icon\" />\n                                        </a>\n                                    </li>\n                                </ul>\n                            </div>\n                            <!--================= SOCIAL ICON =================-->\n                        </div>\n\n                        <!--=============== COLUMN-3 ==================-->\n                        <div class=\"item\">\n                            <div class=\"center image-bottom\">\n                                <img src=\"../assets/images/500x450x3.jpg\" alt=\"image\" class=\"img-responsive image-center\" />\n                            </div>\n                            <h3 class=\"center sub-heading-bottom\">ABRAM HACKER</h3>\n                            <p class=\"center volunteer ls\">Architect</p>\n                            <!--================= SOCIAL ICON =================-->\n                            <div class=\"center social-top\">\n                                <ul class=\"no-padding no-margin social-icon\">\n                                    <li>\n                                        <a href=\"#\">\n                                            <img src=\"../assets/images/social_1.png\" alt=\"icon\" />\n                                        </a>\n                                    </li>\n                                    <li>\n                                        <a href=\"#\">\n                                            <img src=\"../assets/images/social_2.png\" alt=\"icon\" />\n                                        </a>\n                                    </li>\n                                    <li>\n                                        <a href=\"#\">\n                                            <img src=\"../assets/images/social_3.png\" alt=\"icon\" />\n                                        </a>\n                                    </li>\n                                </ul>\n                            </div>\n                            <!--================= SOCIAL ICON =================-->\n                        </div>\n\n                        <!--=============== COLUMN-4 ==================-->\n                        <div class=\"item\">\n                            <div class=\"center image-bottom\">\n                                <img src=\"../assets/images/500x450x4.jpg\" alt=\"image\" class=\"img-responsive image-center\" />\n                            </div>\n                            <h3 class=\"center sub-heading-bottom\">KRISSY MELTON</h3>\n                            <p class=\"center volunteer ls\">Cardiologist</p>\n                            <!--================= SOCIAL ICON =================-->\n                            <div class=\"center social-top\">\n                                <ul class=\"no-padding no-margin social-icon\">\n                                    <li>\n                                        <a href=\"#\">\n                                            <img src=\"../assets/images/social_1.png\" alt=\"icon\" />\n                                        </a>\n                                    </li>\n                                    <li>\n                                        <a href=\"#\">\n                                            <img src=\"../assets/images/social_2.png\" alt=\"icon\" />\n                                        </a>\n                                    </li>\n                                    <li>\n                                        <a href=\"#\">\n                                            <img src=\"../assets/images/social_3.png\" alt=\"icon\" />\n                                        </a>\n                                    </li>\n                                </ul>\n                            </div>\n                            <!--================= SOCIAL ICON =================-->\n                        </div>\n\n                    </div>\n                </div>\n\n                <!--=============== COLUMN-2 ==================-->\n                <div class=\"col-md-4\">\n                    <div class=\"white-text box-bg\">\n                        <div class=\"center image-bottom\">\n                            <img src=\"../assets/images/200x200x1.png\" alt=\"image\" />\n                        </div>\n                        <p class=\"center need ls\">Welcomes You!</p>\n                        <h3 class=\"center sub-heading-bottom\">BECOME VOLUNTEER</h3>\n                        <p class=\"center\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra efficitur diam, vel sagittis\n                            ipsum. Curabitur</p>\n                        <div class=\"center btn-top-3\">\n                            <a href=\"#\">\n                                <div class=\"common-btn volunteer-btn\">JOIN NOW!</div>\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n    <!--================================= VOLUNTEER END =============================================-->\n\n    <!--================================= GALLERY START =============================================-->\n    <section class=\"container-fluid section-space section-bg-1 gallery_common\" id=\"gallery\">\n        <div class=\"container\">\n            <h2 class=\"center section-heading-bottom\">RECENT GALLERY</h2>\n            <div class=\"row\">\n                <!--=============== COLUMN-1 ==================-->\n                <div class=\"col-md-6 col-sm-6 col-xs-12 res-gallery-image-bottom\">\n                    <div class=\"demo-com pos-rel\">\n                        <div class=\"left zoom-area\">\n                            <img src=\"../assets/images/750x750.jpg\" alt=\"image\" class=\"img-responsive image-center find-image\" />\n                        </div>\n                        <div class=\"demo-overlay\">\n                        </div>\n                    </div>\n                </div>\n\n                <!--=============== COLUMN-2 ==================-->\n                <div class=\"col-md-3 col-sm-3 col-xs-6\">\n                    <div class=\"demo-com pos-rel gallery-image-bottom\">\n                        <div class=\"left zoom-area\">\n                            <img src=\"../assets/images/400x400x1.jpg\" alt=\"image\" class=\"img-responsive image-center find-image\" />\n                        </div>\n                        <div class=\"demo-overlay\">\n                        </div>\n                    </div>\n                    <div class=\"demo-com pos-rel\">\n                        <div class=\"left zoom-area\">\n                            <img src=\"../assets/images/400x400x2.jpg\" alt=\"image\" class=\"img-responsive image-center find-image\" />\n                        </div>\n                        <div class=\"demo-overlay\">\n                        </div>\n                    </div>\n                </div>\n\n                <!--=============== COLUMN-3 ==================-->\n                <div class=\"col-md-3 col-sm-3 col-xs-6\">\n                    <div class=\"demo-com pos-rel gallery-image-bottom\">\n                        <div class=\"left zoom-area\">\n                            <img src=\"../assets/images/400x400x3.jpg\" alt=\"image\" class=\"img-responsive image-center find-image\" />\n                        </div>\n                        <div class=\"demo-overlay\">\n                        </div>\n                    </div>\n                    <div class=\"demo-com pos-rel\">\n                        <div class=\"left zoom-area\">\n                            <img src=\"../assets/images/400x400x4.jpg\" alt=\"image\" class=\"img-responsive image-center find-image\" />\n                        </div>\n                        <div class=\"demo-overlay\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n    <!--================================= GALLERY END =============================================-->\n\n    <!--================================= EMAIL SUBSCRIPTION START =============================================-->\n    <section class=\"container-fluid subscription-bgimage bgimage-property section-space white-text subscription_common\">\n        <div class=\"container\">\n            <div class=\"col-md-10 column-center no-padding\">\n                <h2 class=\"center section-heading-bottom\">EMAIL SUBSCRIPTION</h2>\n                <div id=\"mc_embed_signup\">\n                    <div class=\"col-md-5 col-sm-6 col-xs-8 column-center no-padding\">\n                        <div class=\"form-top\">\n                            <!--================= YOUR MAILCHIMP ACCOUNT URL HERE ====================-->\n                            <form class=\"subscribe_form\" method=\"POST\" id=\"mc-embedded-subscribe-form\" name=\"mc-embedded-subscribe-form\" action=\"http://evethemes.us11.list-manage.com/subscribe/post?u=a795532c55a578843e04b09c0&amp;id=fa362f029a\"\n                                novalidate>\n                                <!--================= EMAIL INPUT BOX HERE ====================-->\n                                <div class=\"clearfix\">\n                                    <input class=\"form_input place_error\" id=\"mce-EMAIL\" type=\"email\" name=\"EMAIL\" placeholder=\"Your Mail (required)\" />\n                                </div>\n\n                                <!--================= SUBSCRIBE BUTTON HERE ====================-->\n                                <div class=\"center btn-top-4\">\n                                    <input type=\"submit\" id=\"mc-embedded-subscribe\" class=\"common-btn email-btn\" name=\"submit\" value=\"SUBSCRIBE\">\n                                </div>\n\n                                <!--================= SUCCESS AND FAILURE MESSAGE HERE =================-->\n                                <div class=\"center\" id=\"ResultMsg\">\n                                    <span id=\"SuccessMsg\" class=\"email-success  indicator-top\"></span>\n                                    <span id=\"FailureMsg\" class=\"email-failure  indicator-top\"></span>\n                                </div>\n\n                                <div id=\"mce-responses\">\n                                    <div class=\"response response-msg\" id=\"mce-error-response\"></div>\n                                    <div class=\"response response-msg\" id=\"mce-success-response\"></div>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n    <!--================================= EMAIL SUBSCRIPTION END =============================================-->\n\n    <!--================================= TESTIMONIAL START =============================================-->\n    <section class=\"container-fluid section-space section-bg-1 testimonial_common\">\n        <div class=\"container\">\n            <h2 class=\"center section-heading-bottom\">TESTIMONIAL</h2>\n            <div class=\"row\">\n                <!--=============== COLUMN-1 ==================-->\n                <div class=\"col-md-10 column-center\">\n                    <div id=\"owl-testimonial\" class=\"owl-carousel owl-theme no-margin no-padding nav nav-tabs\">\n                        <!--=============== COLUMN-1 ==================-->\n                        <div class=\"item\">\n                            <div class=\"center\">\n                                <a data-toggle=\"tab\" href=\"#image_1\" class=\"active\">\n                                    <img src=\"../assets/images/300x300x1.jpg\" alt=\"image\" class=\"img-responsive image-center\" />\n                                </a>\n                            </div>\n                        </div>\n\n                        <!--=============== COLUMN-2 ==================-->\n                        <div class=\"item\">\n                            <div class=\"center\">\n                                <a data-toggle=\"tab\" href=\"#image_2\">\n                                    <img src=\"../assets/images/300x300x2.jpg\" alt=\"image\" class=\"img-responsive image-center\" />\n                                </a>\n                            </div>\n                        </div>\n\n                        <!--=============== COLUMN-3 ==================-->\n                        <div class=\"item\">\n                            <div class=\"center\">\n                                <a data-toggle=\"tab\" href=\"#image_3\">\n                                    <img src=\"../assets/images/300x300x3.jpg\" alt=\"image\" class=\"img-responsive image-center\" />\n                                </a>\n                            </div>\n                        </div>\n\n                        <!--=============== COLUMN-4 ==================-->\n                        <div class=\"item\">\n                            <div class=\"center\">\n                                <a data-toggle=\"tab\" href=\"#image_4\">\n                                    <img src=\"../assets/images/300x300x4.jpg\" alt=\"image\" class=\"img-responsive image-center\" />\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n\n\n                    <div class=\"tab-content\">\n                        <!--=============== IMAGE-1-CONTENT ==================-->\n                        <div id=\"image_1\" class=\"tab-pane fade in active\">\n                            <div class=\"col-md-8 column-center\">\n                                <p class=\"center customer-text ls\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra efficitur diam, vel\n                                    sagittis ipsum. Curabitur eleifend, risus id sollicitudin pretium, massa ex tristique\n                                    velit, ullamcorper feugiat dui tellus in quam</p>\n\n                                <h3 class=\"center sub-heading-bottom\">KORTNEY MOREFIELD</h3>\n                                <p class=\"center volunteer ls\">CEO - Company</p>\n                            </div>\n                        </div>\n\n                        <!--=============== IMAGE-2-CONTENT ==================-->\n                        <div id=\"image_2\" class=\"tab-pane fade\">\n                            <div class=\"col-md-8 column-center\">\n                                <p class=\"center customer-text ls\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra efficitur diam, vel\n                                    sagittis ipsum. Curabitur eleifend, risus id sollicitudin pretium, massa ex tristique\n                                    velit, ullamcorper feugiat dui tellus in quam</p>\n\n                                <h3 class=\"center sub-heading-bottom\">BRIGITTE SERINO</h3>\n                                <p class=\"center volunteer ls\">MANAGER - Company</p>\n                            </div>\n                        </div>\n\n                        <!--=============== IMAGE-3-CONTENT ==================-->\n                        <div id=\"image_3\" class=\"tab-pane fade\">\n                            <div class=\"col-md-8 column-center\">\n                                <p class=\"center customer-text ls\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra efficitur diam, vel\n                                    sagittis ipsum. Curabitur eleifend, risus id sollicitudin pretium, massa ex tristique\n                                    velit, ullamcorper feugiat dui tellus in quam</p>\n\n                                <h3 class=\"center sub-heading-bottom\">BROOK GARBETT</h3>\n                                <p class=\"center volunteer ls\">DESIGNER - Company</p>\n                            </div>\n                        </div>\n\n                        <!--=============== IMAGE-4-CONTENT ==================-->\n                        <div id=\"image_4\" class=\"tab-pane fade\">\n                            <div class=\"col-md-8 column-center\">\n                                <p class=\"center customer-text ls\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra efficitur diam, vel\n                                    sagittis ipsum. Curabitur eleifend, risus id sollicitudin pretium, massa ex tristique\n                                    velit, ullamcorper feugiat dui tellus in quam</p>\n\n                                <h3 class=\"center sub-heading-bottom\">DONETTA CURTSINGER</h3>\n                                <p class=\"center volunteer ls\">DEVELOPER - Company</p>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n    <!--================================= TESTIMONIAL END =============================================-->\n\n    <!--================================= UPCOMING EVENTS START =============================================-->\n    <section class=\"container-fluid section-space section-bg-2 events_common\" id=\"events\">\n        <div class=\"container\">\n            <h2 class=\"center section-heading-bottom\">UPCOMING EVENTS</h2>\n            <div class=\"row\">\n                <!--=============== COLUMN-1 ==================-->\n                <div class=\"col-md-6 events-res-common-bottom\">\n                    <div class=\"left image-bottom\">\n                        <img src=\"../assets/images/750x400.jpg\" alt=\"image\" class=\"img-responsive image-center\" />\n                    </div>\n                    <h3 class=\"left sub-heading-bottom\">\n                        <a href=\"#\">CHILD EDUCATION IN AFRICA</a>\n                    </h3>\n                    <p class=\"left intro ls\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra efficitur diam, vel sagittis ipsum</p>\n                    <p class=\"left\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra efficitur diam, vel sagittis ipsum.\n                        Curabitur eleifend, risus id sollicitudin pretium, massa ex tristique velit, ullamcorper feugiat\n                        dui tellus in quam.</p>\n                </div>\n\n                <!--=============== COLUMN-2 ==================-->\n                <div class=\"col-md-6\">\n                    <div class=\"events\">\n                        <div class=\"verticalCarouselHeader\">\n                            <a href=\"#\" class=\"vc_goDown\">\n                                <i class=\"fa fa-fw fa-angle-down\"></i>\n                            </a>\n                            <a href=\"#\" class=\"vc_goUp\">\n                                <i class=\"fa fa-fw fa-angle-up\"></i>\n                            </a>\n                        </div>\n                        <ul class=\"verticalCarouselGroup vc_list\">\n                            <!--=============== ROW-1 ==================-->\n                            <li>\n                                <div class=\"row\">\n                                    <div class=\"col-md-5 col-sm-5\">\n                                        <div class=\"left res-image-bottom-1\">\n                                            <img src=\"../assets/images/400x270x1.jpg\" alt=\"image\" class=\"img-responsive\" />\n                                        </div>\n                                    </div>\n\n                                    <div class=\"col-md-7 col-sm-7\">\n                                        <h3 class=\"left sub-heading-bottom\">\n                                            <a href=\"#\">WORLD PEACE</a>\n                                        </h3>\n                                        <p class=\"left date ls distab-cell-middle date-right\">\n                                            <a href=\"#\">\n                                                <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>Mar 13, 2017</a>\n                                        </p>\n                                        <p class=\"left date ls distab-cell-middle\">\n                                            <a href=\"#\">\n                                                <i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>09:00 AM - 11:00 AM</a>\n                                        </p>\n                                        <p class=\"left\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra efficitur diam,\n                                            vel sagittis ipsum. Curabitur eleifend</p>\n                                    </div>\n                                </div>\n                            </li>\n\n                            <!--=============== ROW-2 ==================-->\n                            <li>\n                                <div class=\"row\">\n                                    <div class=\"col-md-5 col-sm-5\">\n                                        <div class=\"left res-image-bottom-1\">\n                                            <img src=\"../assets/images/400x270x2.jpg\" alt=\"image\" class=\"img-responsive\" />\n                                        </div>\n                                    </div>\n\n                                    <div class=\"col-md-7 col-sm-7\">\n                                        <h3 class=\"left sub-heading-bottom\">\n                                            <a href=\"#\">SAVE WATER</a>\n                                        </h3>\n                                        <p class=\"left date ls distab-cell-middle date-right\">\n                                            <a href=\"#\">\n                                                <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>Mar 13, 2017</a>\n                                        </p>\n                                        <p class=\"left date ls distab-cell-middle\">\n                                            <a href=\"#\">\n                                                <i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>09:00 AM - 11:00 AM</a>\n                                        </p>\n                                        <p class=\"left\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra efficitur diam,\n                                            vel sagittis ipsum. Curabitur eleifend</p>\n                                    </div>\n                                </div>\n                            </li>\n\n                            <!--=============== ROW-3 ==================-->\n                            <li>\n                                <div class=\"row\">\n                                    <div class=\"col-md-5 col-sm-5\">\n                                        <div class=\"left res-image-bottom-1\">\n                                            <img src=\"../assets/images/400x270x3.jpg\" alt=\"image\" class=\"img-responsive\" />\n                                        </div>\n                                    </div>\n\n                                    <div class=\"col-md-7 col-sm-7\">\n                                        <h3 class=\"left sub-heading-bottom\">\n                                            <a href=\"#\">GO GREEN</a>\n                                        </h3>\n                                        <p class=\"left date ls distab-cell-middle date-right\">\n                                            <a href=\"#\">\n                                                <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>Mar 13, 2017</a>\n                                        </p>\n                                        <p class=\"left date ls distab-cell-middle\">\n                                            <a href=\"#\">\n                                                <i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>09:00 AM - 11:00 AM</a>\n                                        </p>\n                                        <p class=\"left\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra efficitur diam,\n                                            vel sagittis ipsum. Curabitur eleifend</p>\n                                    </div>\n                                </div>\n                            </li>\n\n                            <!--=============== ROW-4 ==================-->\n                            <li>\n                                <div class=\"row\">\n                                    <div class=\"col-md-5 col-sm-5\">\n                                        <div class=\"left res-image-bottom-1\">\n                                            <img src=\"../assets/images/400x270x4.jpg\" alt=\"image\" class=\"img-responsive\" />\n                                        </div>\n                                    </div>\n\n                                    <div class=\"col-md-7 col-sm-7\">\n                                        <h3 class=\"left sub-heading-bottom\">\n                                            <a href=\"#\">EDCUATE TO ALL</a>\n                                        </h3>\n                                        <p class=\"left date ls distab-cell-middle date-right\">\n                                            <a href=\"#\">\n                                                <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>Mar 13, 2017</a>\n                                        </p>\n                                        <p class=\"left date ls distab-cell-middle\">\n                                            <a href=\"#\">\n                                                <i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>09:00 AM - 11:00 AM</a>\n                                        </p>\n                                        <p class=\"left\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra efficitur diam,\n                                            vel sagittis ipsum. Curabitur eleifend</p>\n                                    </div>\n                                </div>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n    <!--================================= UPCOMING EVENTS END =============================================-->\n\n    <!--================================= BUY NOW START =============================================-->\n    <section class=\"container-fluid section-space section-bg-1 fund_common skills-1\">\n        <div class=\"container\">\n            <h2 class=\"center section-heading-bottom\">SHOP NOW</h2>\n            <div class=\"row\">\n                <!--=============== COLUMN-1 ==================-->\n                <div class=\"col-md-4 col-sm-4 res-common-bottom-1\">\n                    <div class=\"center\">\n                        <img src=\"../assets/images/400x450x1.jpg\" alt=\"image\" class=\"img-responsive image-center\" />\n                    </div>\n                    <div class=\"center btn-top-3\">\n                        <a href=\"#\">\n                            <div class=\"common-btn fund-btn\">BUY Now</div>\n                        </a>\n                    </div>\n                </div>\n\n                <!--=============== COLUMN-2 ==================-->\n                <div class=\"col-md-4 col-sm-4 res-common-bottom-1\">\n                    <div class=\"center\">\n                        <img src=\"../assets/images/400x450x2.jpg\" alt=\"image\" class=\"img-responsive image-center\" />\n                    </div>\n                    <div class=\"center btn-top-3\">\n                        <a href=\"#\">\n                            <div class=\"common-btn fund-btn\">BUY Now</div>\n                        </a>\n                    </div>\n                </div>\n\n                <!--=============== COLUMN-3 ==================-->\n                <div class=\"col-md-4 col-sm-4\">\n                    <div class=\"center\">\n                        <img src=\"../assets/images/400x450x3.jpg\" alt=\"image\" class=\"img-responsive image-center\" />\n                    </div>\n                    <div class=\"center btn-top-3\">\n                        <a href=\"#\">\n                            <div class=\"common-btn fund-btn\">BUY Now</div>\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n    <!--================================= BUY NOW END =============================================-->\n\n    <!--================================= OUR PARTNERS START =============================================-->\n    <section class=\"container-fluid section-space section-bg-2 partners_common\">\n        <div class=\"container\">\n            <h2 class=\"center section-heading-bottom\">OUR PARTNERS</h2>\n            <div class=\"row\">\n                <!--=============== COLUMN-1 ==================-->\n                <div class=\"col-md-12 column-center\">\n                    <div id=\"owl-partners\" class=\"owl-carousel owl-theme no-margin no-padding\">\n                        <!--=============== COLUMN-1 ==================-->\n                        <div class=\"item\">\n                            <div class=\"center\">\n                                <img src=\"../assets/images/client_logo.png\" alt=\"image\" class=\"img-responsive image-center\" />\n                            </div>\n                        </div>\n\n                        <!--=============== COLUMN-2 ==================-->\n                        <div class=\"item\">\n                            <div class=\"center\">\n                                <img src=\"../assets/images/client_logo.png\" alt=\"image\" class=\"img-responsive image-center\" />\n                            </div>\n                        </div>\n\n                        <!--=============== COLUMN-3 ==================-->\n                        <div class=\"item\">\n                            <div class=\"center\">\n                                <img src=\"../assets/images/client_logo.png\" alt=\"image\" class=\"img-responsive image-center\" />\n                            </div>\n                        </div>\n\n                        <!--=============== COLUMN-4 ==================-->\n                        <div class=\"item\">\n                            <div class=\"center\">\n                                <img src=\"../assets/images/client_logo.png\" alt=\"image\" class=\"img-responsive image-center\" />\n                            </div>\n                        </div>\n\n                        <!--=============== COLUMN-5 ==================-->\n                        <div class=\"item\">\n                            <div class=\"center\">\n                                <img src=\"../assets/images/client_logo.png\" alt=\"image\" class=\"img-responsive image-center\" />\n                            </div>\n                        </div>\n\n                        <!--=============== COLUMN-6 ==================-->\n                        <div class=\"item\">\n                            <div class=\"center\">\n                                <img src=\"../assets/images/client_logo.png\" alt=\"image\" class=\"img-responsive image-center\" />\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n    <!--================================= OUR PARTNERS END =============================================-->\n\n"

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
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
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
    function HomeComponent(myService) {
        this.myService = myService;
        this.formInfo = {
            username: '',
            password: ''
        };
    }
    HomeComponent.prototype.login = function () {
        var _this = this;
        console.log(this.formInfo);
        this.myService.login(this.formInfo)
            .subscribe(function (user) {
            _this.user = user;
            console.log(_this.user);
        }, function (err) { return _this.error = err; });
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
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

module.exports = "@import url(https://fonts.googleapis.com/css?family=Roboto:300,400,500);\n\nhtml {\n  font-family: \"Roboto\";\n}\n\n/* BOX LOGIN */\n\n.box {\n  position: relative;\n  margin: auto;\n  height: 410px;\n  top: 40px;\n  left: 0;\n  z-index: 200;\n  right: 0;\n  width: 400px;\n  color: #666;\n  border-radius: 3px;\n  background: #fff;\n  margin-bottom: 100px;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n  overflow: hidden;\n}\n\n#header {\n  background: #1d7874;\n  position: relative;\n  height: 100px;\n  width: 100%;\n  margin-bottom: 30px;\n}\n\n#cont-lock {\n  width: 100%;\n  height: 65px;\n  position: relative;\n  color: white;\n  text-align: center;\n  /* position: absolute; */\n  left: 0;\n  right: 0;\n  margin: 0;\n  top: 0;\n  bottom: 0;\n  line-height: 65px;\n  font-size: 28px;\n}\n\n.cont-lock {\n  text-align: center;\n  color: white;\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: 0;\n  top: 0;\n  bottom: 0;\n  line-height: 65px;\n  font-size: 28px;\n}\n\n#bottom-head {\n  position: relative;\n  background: #679289;\n  height: 35px;\n}\n\n#bottom-head::after {\n  content: \"\";\n  width: 0px;\n  height: 0px;\n  display: block;\n  position: absolute;\n  margin: auto;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  border-bottom: 7px solid white;\n  border-right: 7px solid rgba(0, 0, 0, 0);\n  border-left: 7px solid rgba(0, 0, 0, 0);\n  border-top: 7px solid rgba(0, 0, 0, 0);\n}\n\n.box h1 {\n  margin-left: 20px;\n  margin-top: 0;\n  font-size: 24px;\n  font-weight: 300;\n  color: #cfd8dc;\n  line-height: 35px;\n}\n\n.box button {\n  background: #cfd8dc;\n  border: 0;\n  color: #009688;\n  padding: 10px;\n  font-size: 16px;\n  font-weight: 300;\n  width: 330px;\n  margin: 20px auto;\n  display: block;\n  cursor: pointer;\n  transition: all 0.4s;\n  border-radius: 2px;\n}\n\n.box button:active {\n  background: #009688;\n  color: #263238;\n}\n\n.box button:hover {\n  background: #007f96;\n  color: #fff;\n  transition: all 0.4s;\n}\n\n.box p {\n  font-size: 14px;\n  text-align: center;\n  margin-top: 15px;\n}\n\n.group {\n  position: relative;\n  margin-bottom: 35px;\n  margin-left: 40px;\n}\n\n.inputMaterial {\n  font-size: 18px;\n  padding: 10px 10px 10px 5px;\n  display: block;\n  width: 300px;\n  border: none;\n  border-bottom: 1px solid #757575;\n}\n\n.inputMaterial:focus {\n  outline: none;\n}\n\n/* LABEL ======================================= */\n\nlabel {\n  color: #999;\n  font-size: 14px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 5px;\n  top: 10px;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all;\n}\n\n/* active state */\n\n.inputMaterial:focus ~ label,\n.inputMaterial:valid ~ label {\n  top: -20px;\n  font-size: 14px;\n  color: #009688;\n}\n\n/* BOTTOM BARS ================================= */\n\n.bar {\n  position: relative;\n  display: block;\n  width: 315px;\n}\n\n.bar:before,\n.bar:after {\n  content: \"\";\n  height: 2px;\n  width: 0;\n  bottom: 1px;\n  position: absolute;\n  background: #009688;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all;\n}\n\n.bar:before {\n  left: 50%;\n}\n\n.bar:after {\n  right: 50%;\n}\n\n/* active state */\n\n.inputMaterial:focus ~ .bar:before,\n.inputMaterial:focus ~ .bar:after {\n  width: 50%;\n}\n\n/* active state */\n\n.inputMaterial:focus ~ .highlight {\n  -webkit-animation: inputHighlighter 0.3s ease;\n  animation: inputHighlighter 0.3s ease;\n}\n\n/* ANIMATIONS ================ */\n\n@-webkit-keyframes inputHighlighter {\n  from {\n    background: #5264ae;\n  }\n  to {\n    width: 0;\n    background: transparent;\n  }\n}\n\n@keyframes inputHighlighter {\n  from {\n    background: #5264ae;\n  }\n  to {\n    width: 0;\n    background: transparent;\n  }\n}\n\n#footer-box {\n  width: 100%;\n  height: 50px;\n  margin-top: 10px;\n  background: #00695c;\n  position: absolute;\n  bottom: 0;\n}\n\n.footer-text {\n  color: #cfd8dc;\n}\n\n.sign-up {\n  color: white;\n  cursor: pointer;\n}\n\n.sign-up:hover {\n  color: #b2dfdb;\n}\n\n$transition: all 0.3s;\n\n$shadow-L1: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n\n$shadow-L2: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n\n$shadow-L3: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n\nbody {\n  background: #eceff1;\n}\n\n#container-a {\n  border-radius: 50%;\n  width: 60px;\n  height: 60px;\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  overflow: hidden;\n  transition: $transition;\n  box-shadow: $shadow-L3;\n\n  /*&:hover{\n    width: 150px;\n    border-radius: 50px;\n    transition: $transition;\n  }*/\n\n  #badge {\n    width: 100%;\n    height: 100%;\n    background-image: url(\"https://lh3.googleusercontent.com/-X-aQXHatDQY/Uy86XLOyEdI/AAAAAAAAAF0/TBEZvkCnLVE/w140-h140-p/fb3a11ae-1fb4-4c31-b2b9-bf0cfa835c27\");\n    background-size: 100%;\n    transition: $transition;\n    position: absolute;\n\n    &:hover .codepen {\n      display: block;\n    }\n  }\n\n  &:hover #letter {\n    display: block;\n  }\n\n  &:hover #badge {\n    width: 150px;\n    height: 150px;\n    transition: $transition;\n    -webkit-filter: blur(7px);\n            filter: blur(7px);\n  }\n\n  #letter {\n    display: none;\n    z-index: 20;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n\n    span {\n      font-family: \"Roboto\";\n      font-size: 32px;\n      color: white;\n      text-align: center;\n      line-height: 60px;\n      margin: auto;\n      left: 0;\n      right: 0;\n      position: absolute;\n      cursor: pointer;\n    }\n  }\n}\n\n#container-floating {\n  position: fixed;\n  width: 60px;\n  height: 60px;\n  top: 20px;\n  right: 20px;\n  z-index: 50px;\n\n  &:hover {\n    height: 400px;\n    width: 60px;\n    top: 20px;\n    right: 20px;\n  }\n\n  &:hover .nds {\n    -webkit-animation: bounce-nds 0.1s linear;\n            animation: bounce-nds 0.1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n  }\n  &:hover .nd3 {\n    -webkit-animation-delay: 0.08s;\n            animation-delay: 0.08s;\n  }\n  &:hover .nd4 {\n    -webkit-animation-delay: 0.15s;\n            animation-delay: 0.15s;\n  }\n  &:hover .nd5 {\n    -webkit-animation-delay: 0.2s;\n            animation-delay: 0.2s;\n  }\n\n  .nds {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    position: fixed;\n    z-index: 300;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    right: 33px;\n    cursor: pointer;\n    &:hover {\n      box-shadow: $shadow-L3;\n      transition: $transition;\n      width: 50px;\n      right: 25px;\n      height: 50px;\n    }\n  }\n\n  .nd1 {\n    background-image: url(\"https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Large.png\");\n    background-size: 100%;\n    top: 110px;\n    -webkit-animation-delay: 0.1s;\n            animation-delay: 0.1s;\n    -webkit-animation: bounce-out-nds 0.3s linear;\n            animation: bounce-out-nds 0.3s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    box-shadow: $shadow-L2;\n    transition: $transition;\n  }\n\n  .nd3 {\n    background: url(\"https://cdn3.iconfinder.com/data/icons/free-social-icons/67/twitter_circle_color-512.png\");\n    background-size: 100%;\n    top: 165px;\n    -webkit-animation-delay: 0.15s;\n            animation-delay: 0.15s;\n    -webkit-animation: bounce-out-nds 0.15s linear;\n            animation: bounce-out-nds 0.15s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    box-shadow: $shadow-L2;\n    transition: $transition;\n  }\n\n  .nd4 {\n    background: url(\"http://www.studiotomasi.org/images/gplusicon.svg\");\n    background-size: 100%;\n    top: 225px;\n    -webkit-animation-delay: 0.1s;\n            animation-delay: 0.1s;\n    -webkit-animation: bounce-out-nds 0.1s linear;\n            animation: bounce-out-nds 0.1s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    box-shadow: $shadow-L2;\n    transition: $transition;\n  }\n}\n\n@-webkit-keyframes bounce-nds {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n\n@keyframes bounce-nds {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n\n@-webkit-keyframes bounce-out-nds {\n  from {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n}\n\n@keyframes bounce-out-nds {\n  from {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n}\n\n.profile-name {\n  line-height: 60px;\n  left: -70px;\n  position: absolute;\n  font-family: \"Roboto\";\n  color: #455a64;\n}\n\n.profile-name:hover {\n  text-decoration: underline;\n}\n\na:link,\na:visited {\n  text-decoration: none;\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example\">\n  <div class=\"box transparent-modal modal-content\">\n    <div id=\"header\">\n      <div id=\"cont-lock\">\n        <i class=\"material-icons lock fas fa-lock-open\"></i>\n      </div>\n      <div id=\"bottom-head\">\n        <h1 id=\"logintoregister\">Login</h1>\n      </div>\n    </div>\n    <form>\n      <div>\n        <div class=\"group\">\n          <input type=\"text\" class=\"inputMaterial\" [(ngModel)]=\"formInfo.username\" name=\"username\" id=\"login_username\" placeholder=\"Username\">\n          <label>Username</label>\n        </div>\n        <div class=\"group\">\n          <input type=\"password\" class=\"inputMaterial\" [(ngModel)]=\"formInfo.password\" name=\"password\" id=\"login_password\" placeholder=\"Password\">\n          <span class=\"highlight\"></span>\n          <span class=\"bar\"></span>\n          <label>Password</label>\n        </div>\n        <button (click)=\"login()\" class=\"btn btn-success\">Log In</button>\n        <button id=\"buttonlogintoregister\" type=\"submit\" (click)=\"loginRedirectToProfile()\" class=\"btn btn-primary\">Sign Up</button>\n      </div>\n    </form>\n\n    <div id=\"footer-box\">\n      <p class=\"footer-text\">Not a member?\n        <a [routerLink]=\"['/signup']\" class=\"sign-up\"> Sign up now</a>\n      </p>\n    </div>\n  </div>\n\n</div>\n\n<p class=\"error\"> {{ error }} </p>\n"

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
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // Session Service


// import { Modal } from '../ng2-modal/modal';
// import { Router, Route, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
// import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(myService, myRouter) {
        this.myService = myService;
        this.myRouter = myRouter;
        this.formInfo = {
            username: '',
            password: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        // this.myService.isLoggedIn()
        // .toPromise()
        // .then(() => {
        //     this.user = JSON.parse(this.myService.currentUser._body);
        //     console.log('user in profile component: ', this.user);
        // })
        // .catch( err => {
        //   console.log('Err in profile: ', err);
        //   this.myRouter.navigate(['/login']);
        // });
        var _this = this;
        this.myService.isLoggedIn()
            .toPromise()
            .then(function () {
            _this.formInfo = _this.myService.currentUser;
            // console.log(this.formInfo); ===== Works !
        })
            .catch(function (err) {
            console.log(err);
            // this.myRouter.navigate(['/login']);
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        // this.myService.login(this.formInfo)
        //   .subscribe(
        //     (user) =>  this.user = JSON.parse(this.myService.currentUser._body),
        //     (err) => this.error = err
        //   );
        this.myService
            .login(this.formInfo)
            .subscribe(function (user) { return (_this.user = user); }, function (err) { return (_this.error = err); });
        this.myRouter.navigate(['profile']);
    };
    LoginComponent.prototype.logout = function () {
        var _this = this;
        this.myService.logout()
            .subscribe(function () {
            _this.user = null;
            _this.formInfo = {};
            _this.myRouter.navigate(['/']);
        }, function (err) { return _this.error = err; });
    };
    LoginComponent.prototype.loginRedirectToProfile = function () {
        this.myRouter.navigateByUrl('/profile');
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")],
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());

// import { Component, ViewChild } from 'angular2/core';
// import { Http, Headers } from 'angular2/http';
// import { Router, Route, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
// import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
// @Component({
//   selector: 'login',
//   templateUrl: 'demo/app/login/login.html',
//   styleUrls: ['demo/app/login/login.css'],
// directives: [ROUTER_DIRECTIVES, Modal]
// })
// export class Login {
//   modal: Modal
//   constructor(public _modal: Modal) {
//     this.modal = _modal
//   }
//   close() {
//     this.modal.close();
//   }
//   login(username, password) {
//     let data = { username: username, pasword: password }
//     this.modal.close(data);
//   }
// }


/***/ }),

/***/ "./src/app/modal/modal.component.html":
/*!********************************************!*\
  !*** ./src/app/modal/modal.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-lg btn-outline-primary\" (click)=\"open()\">Launch demo modal</button>\n"

/***/ }),

/***/ "./src/app/modal/modal.component.ts":
/*!******************************************!*\
  !*** ./src/app/modal/modal.component.ts ***!
  \******************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// @Component({
//   selector: 'modal-content',
//   template: `
//     <div class="modal-header">
//       <h4 class="modal-title">Hi there!</h4>
//       <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
//         <span aria-hidden="true">&times;</span>
//       </button>
//     </div>
//     <div class="modal-body">
//       <p>Hello, {{name}}!</p>
//     </div>
//     <div class="modal-footer">
//       <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
//     </div>
//   `
// })
// export class ModalContent {
//   @Input() name;
//   constructor(public activeModal: NgbActiveModal) { }
// }
var ModalComponent = /** @class */ (function () {
    function ModalComponent(modalService) {
        this.modalService = modalService;
    }
    ModalComponent.prototype.open = function () {
        var modalRef = this.modalService.open(_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]);
        modalRef.componentInstance.name = 'World';
    };
    ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-component',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/modal/modal.component.html")
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-bgcolor {\n  background-color: #679289;\n}"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <!-- Fixed navbar -->\n  <nav class=\"navbar navbar-expand-md navbar-dark navbar-bgcolor\">\n    <a class=\"navbar-brand\" href=\"#\">CauseConnect</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink]=\"['']\">Home</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/login']\">Login</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/signup']\">Signup</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/organizations']\">Organizations</a>\n        </li>\n        <li *ngIf=\"formInfo\" class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/profile']\">My Profile</a>\n        </li>\n      </ul>\n      <form class=\"form-inline mt-2 mt-md-0\">\n        <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\n        <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n      </form>\n    </div>\n  </nav>\n</header>\n\n<a [routerLink]=\"['/login']\"> login </a>\n<a [routerLink]=\"['/signup']\"> signup </a>\n<a [routerLink]=\"['/profile']\"> profile </a>\n<a [routerLink]=\"['']\"> home </a>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // Session Service


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(myService, myRouter) {
        this.myService = myService;
        this.myRouter = myRouter;
        this.formInfo = {
            username: '',
            password: '',
            email: ''
        };
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myService.isLoggedIn()
            .toPromise()
            .then(function () {
            _this.formInfo = _this.myService.currentUser;
            // console.log(this.formInfo); ===== Works !
        })
            .catch(function (err) {
            console.log(err);
            // this.myRouter.navigate(['/login']);
        });
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* body {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAxMC8yOS8xMiKqq3kAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzVxteM2AAABHklEQVRIib2Vyw6EIAxFW5idr///Qx9sfG3pLEyJ3tAwi5EmBqRo7vHawiEEERHS6x7MTMxMVv6+z3tPMUYSkfTM/R0fEaG2bbMv+Gc4nZzn+dN4HAcREa3r+hi3bcuu68jLskhVIlW073tWaYlQ9+F9IpqmSfq+fwskhdO/AwmUTJXrOuaRQNeRkOd5lq7rXmS5InmERKoER/QMvUAPlZDHcZRhGN4CSeGY+aHMqgcks5RrHv/eeh455x5KrMq2yHQdibDO6ncG/KZWL7M8xDyS1/MIO0NJqdULLS81X6/X6aR0nqBSJcPeZnlZrzN477NKURn2Nus8sjzmEII0TfMiyxUuxphVWjpJkbx0btUnshRihVv70Bv8ItXq6Asoi/ZiCbU6YgAAAABJRU5ErkJggg==);\n} */\n.error-template {\n  padding: 40px 15px;\n  text-align: center;\n}\n.error-actions {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n.error-actions .btn {\n  margin-right: 10px;\n}\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"error-template\">\n                <h1>Oops!</h1>\n                <h2>404 Not Found</h2>\n                <div class=\"error-details\">\n                    Sorry! An error has occured. Your requested page was not found!\n                </div>\n                <div class=\"error-actions\">\n                    <a [routerLink]=\"['/']\" class=\"btn btn-primary btn-lg\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i> Take Me Home </a>\n                    <a [routerLink]=\"['/support']\" class=\"btn btn-info btn-lg\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i> Contact Support </a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // Session Service


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent(myService, myRouter) {
        this.myService = myService;
        this.myRouter = myRouter;
        this.formInfo = {
            username: '',
            password: '',
            email: ''
        };
    }
    NotFoundComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myService.isLoggedIn()
            .toPromise()
            .then(function () {
            _this.user = JSON.parse(_this.myService.currentUser._body);
            console.log('user in profile component: ', _this.user);
        })
            .catch(function (err) {
            console.log('Err in profile: ', err);
            _this.myRouter.navigate(['/login']);
        });
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/* ==========================================================================\n   Author's custom styles\n   ========================================================================== */\n  \n\n   .switch {\n     position: relative;\n     display: inline-block;\n     width: 60px;\n     height: 34px;\n   }\n  \n\n   .switch input {display:none;}\n  \n\n   .slider {\n     position: absolute;\n     cursor: pointer;\n     top: 0;\n     left: 0;\n     right: 0;\n     bottom: 0;\n     background-color: #ccc;\n     transition: .4s;\n   }\n  \n\n   .slider:before {\n     position: absolute;\n     content: \"\";\n     height: 26px;\n     width: 26px;\n     left: 4px;\n     bottom: 4px;\n     background-color: white;\n     transition: .4s;\n   }\n  \n\n   input:checked + .slider {\n     background-color: #2196F3;\n   }\n  \n\n   input:focus + .slider {\n     box-shadow: 0 0 1px #2196F3;\n   }\n  \n\n   input:checked + .slider:before {\n     -webkit-transform: translateX(26px);\n     transform: translateX(26px);\n   }\n  \n\n   /* Rounded sliders */\n  \n\n   .slider.round {\n     border-radius: 34px;\n   }\n  \n\n   .slider.round:before {\n     border-radius: 50%;\n   }\n  \n\n   body\n   {\n       font-family: 'Open Sans', sans-serif;\n   }\n  \n\n   .fb-profile img.cover-photo{\n       z-index: 0;\n       width: 100%;  \n       margin-bottom: 10px;\n   }\n  \n\n   .profile-image\n   {\n       margin: -90px 10px 20px 80px;\n       z-index: 9;\n       width: 20%; \n   }\n  \n\n   /***\n   Bootstrap Line Tabs by @keenthemes\n   A component of Metronic Theme - #1 Selling Bootstrap 3 Admin Theme in Themeforest: http://j.mp/metronictheme\n   Licensed under MIT\n   ***/\n  \n\n   /* Tabs panel */\n  \n\n   .tabbable-panel {\n     border:1px solid #eee;\n     padding: 10px;\n   }\n  \n\n   /* Default mode */\n  \n\n   .tabbable-line > .nav-tabs {\n     border: none;\n     margin: 0px;\n   }\n  \n\n   .tabbable-line > .nav-tabs > li {\n     margin-right: 2px;\n   }\n  \n\n   .tabbable-line > .nav-tabs > li > a {\n     border: 0;\n     margin-right: 0;\n     color: #737373;\n   }\n  \n\n   .tabbable-line > .nav-tabs > li > a > i {\n     color: #a6a6a6;\n   }\n  \n\n   .tabbable-line > .nav-tabs > li.open, .tabbable-line > .nav-tabs > li:hover {\n     border-bottom: 4px solid #fbcdcf;\n   }\n  \n\n   .tabbable-line > .nav-tabs > li.open > a, .tabbable-line > .nav-tabs > li:hover > a {\n     border: 0;\n     background: none !important;\n     color: #333333;\n   }\n  \n\n   .tabbable-line > .nav-tabs > li.open > a > i, .tabbable-line > .nav-tabs > li:hover > a > i {\n     color: #a6a6a6;\n   }\n  \n\n   .tabbable-line > .nav-tabs > li.open .dropdown-menu, .tabbable-line > .nav-tabs > li:hover .dropdown-menu {\n     margin-top: 0px;\n   }\n  \n\n   .tabbable-line > .nav-tabs > li.active {\n     border-bottom: 4px solid #f3565d;\n     position: relative;\n   }\n  \n\n   .tabbable-line > .nav-tabs > li.active > a {\n     border: 0 !important;\n     color: #333333;\n   }\n  \n\n   .tabbable-line > .nav-tabs > li.active > a > i {\n     color: #404040;\n   }\n  \n\n   .tabbable-line > .tab-content {\n     margin-top: -3px;\n     background-color: #fff;\n     border: 0;\n     border-top: 1px solid #eee;\n     padding: 15px 0;\n   }\n  \n\n   .portlet .tabbable-line > .tab-content {\n     padding-bottom: 0;\n   }\n  \n\n   /* Below tabs mode */\n  \n\n   .tabbable-line.tabs-below > .nav-tabs > li {\n     border-top: 4px solid transparent;\n   }\n  \n\n   .tabbable-line.tabs-below > .nav-tabs > li > a {\n     margin-top: 0;\n   }\n  \n\n   .tabbable-line.tabs-below > .nav-tabs > li:hover {\n     border-bottom: 0;\n     border-top: 4px solid #fbcdcf;\n   }\n  \n\n   .tabbable-line.tabs-below > .nav-tabs > li.active {\n     margin-bottom: -2px;\n     border-bottom: 0;\n     border-top: 4px solid #f3565d;\n   }\n  \n\n   .tabbable-line.tabs-below > .tab-content {\n     margin-top: -10px;\n     border-top: 0;\n     border-bottom: 1px solid #eee;\n     padding-bottom: 15px;\n   }\n  \n\n   .menu_title {\n       padding: 15px 10px;\n       border-bottom: 1px solid #eee;\n       margin: 0 5px;\n   }\n  \n\n   @media (max-width:768px){\n       \n   .fb-profile-text>h1{\n       font-weight: 700;\n       font-size:16px;\n   }\n   \n   .fb-image-profile\n   {\n       margin: -45px 10px 0px 25px;\n       z-index: 9;\n       width: 20%; \n   }\n   }"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"profile-images\">\n      <img align=\"left\" class=\"cover-photo\" src=\"https://storage.googleapis.com/proudcity/deleontx/uploads/2016/12/preview-wattpad-cover-maker-thumbnail.jpg\"\n        alt=\"Cover Photo\" width=\"2000\" height=\"500\" />\n      <img align=\"left\" class=\"profile-image thumbnail\" src=\"https://loremflickr.com/320/240\" alt=\"Profile Photo\" />\n      <div class=\"profile-username\">\n        <h1>{{ formInfo.username }}</h1>\n      </div>\n    </div>\n  </div>\n</div>\n<form id=\"nameform\" (ngSubmit)=\"saveProfileInfo()\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-8\">\n        <div data-spy=\"scroll\" class=\"tabbable-panel\">\n          <div class=\"tabbable-line\">\n            <ul class=\"nav nav-tabs \">\n              <li class=\"active\">\n                <a data-toggle=\"tab\">\n                  About\n                  <b> {{ formInfo.username }}</b>\n                </a>\n              </li>\n            </ul>\n            <div class=\"tab-content\">\n              <div class=\"tab-pane active\" id=\"tab_default_1\">\n                <h4>Name</h4>\n                <input id=\"name\" [(ngModel)]=\"newEntry.name\" name=\"name\">\n                <h4>Age</h4>\n                <input id=\"age\" [(ngModel)]=\"newEntry.age\" name=\"age\">\n                <h4>Background </h4>\n                <input type=\"text-area\" id=\"aboutUser-text\" [(ngModel)]=\"newEntry.aboutUser\" name=\"aboutUser\">\n                <h4>Experience </h4>\n                <input type=\"text-area\" id=\"volunteerExperience-text\" [(ngModel)]=\"newEntry.volunteerExperience\" name=\"volunteerExperience\">\n                <h4>Skills</h4>\n                <input id=\"skills-text\" [(ngModel)]=\"newEntry.skills\" name=\"skills\">\n                <h4>Causes</h4>\n\n                <div>\n                  <label class=\"switch\">Community\n                    <input type=\"checkbox\">\n                    <span class=\"slider round\">Community</span>\n                  </label>\n                </div>\n\n                <!-- <div class=\"row\">\n                      <div class=\"col\">left column </div>\n                      <div class=\"col\">\n                        <label class=\"switch\">\n                          <input type=\"checkbox\">\n                          <span class=\"slider round\"></span>\n                        </label>\n                      </div> -->\n                <!-- <div class=\"col\"></div>\n                      <div class=\"col\">right column</div>\n                      <div class=\"col\">\n                        <label class=\"switch\">\n                          <input type=\"checkbox\">\n                          <span class=\"slider round\"></span>\n                        </label>\n                      </div> -->\n\n                  <span class=\"causes-buttons\">\n                    <br>\n                  </span>\n                    <br>                \n                  <button type=\"submit\" (ngSubmit)=\"saveProfileInfo()\" class=\"btn btn-danger btn-block\">Submit</button>\n                  <button type=\"submit\" (click)=\"logout()\" class=\"btn btn-info\">Logout</button>\n                  <div *ngIf = \"showProfileStuff\">{{newEntry.name}}</div>\n                </div>\n                <span class=\"causes-buttons\">\n                  <br>\n                </span>\n                <br>\n                <button type=\"submit\" (ngSubmit)=\"saveProfileInfo()\" class=\"btn btn-danger btn-block\">Submit</button>\n                <button type=\"submit\" (click)=\"logout()\" class=\"btn btn-info\">Logout</button>\n                <div *ngIf=\"showProfileStuff\">{{newEntry.name}}</div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- <div *ngIf = \"showProfileStuff\"> {{newEntry.age}} -->\n      <div class=\"col-sm-4\">\n        <div class=\"row\">\n          <div data-spy=\"scroll\" class=\"tabbable-panel\">\n            <div class=\"tabbable-line\">\n              <div class=\"menu_title\">Contact Info</div>\n              <div class=\"panel-body\">\n                <div class=\"col-lg-12\">\n                  <div class=\"form-group\">\n                    <h6 for=\"email\">E-mail:</h6>\n                    <input [(ngModel)]=\"newEntry.email\" name=\"email\">\n                  </div>\n                  <div class=\"form-group\">\n                    <h6 for=\"phone\">Phone Number:</h6>\n                    <input [(ngModel)]=\"newEntry.phone\" name=\"phone\">\n                  </div>\n                  <div class=\"form-group\">\n                    <h6 for=\"linkedin\">Linkedin:</h6>\n                    <input [(ngModel)]=\"newEntry.linkedin\" name=\"linkedin\">\n                  </div>\n                  <div class=\"form-group\">\n                    <h6 for=\"facebook\">Facebook</h6>\n                    <input [(ngModel)]=\"newEntry.facebook\" name=\"facebook\">\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n</form>\n\n\n\n<a [routerLink]=\"['/login']\"> login </a>\n<a [routerLink]=\"['/signup']\"> signup </a>\n<a [routerLink]=\"['/profile']\"> profile </a>\n<a [routerLink]=\"['']\"> home </a>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_userprofiles_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/userprofiles.service */ "./src/app/services/userprofiles.service.ts");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 // Session Service
 // Profile Service

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(myService, myRouter, profileService, activatedRoute) {
        this.myService = myService;
        this.myRouter = myRouter;
        this.profileService = profileService;
        this.activatedRoute = activatedRoute;
        this.showProfileStuff = false;
        // Profile info object to hold retrieved data.
        this.newEntry = {
            name: '',
            aboutUser: '',
            age: '',
            email: '',
            phone: '',
            facebook: '',
            linkedin: '',
            volunteerExperience: '',
        };
        // Holds the session info for the user.
        this.formInfo = {
            username: '',
            password: ''
        };
        // profileInfo: any;
        this.entries = [];
        // console.log( profileService, myRouter );
        // this.profileService = profileService;
        // console.log(this.profileService);
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileService.getEntries();
        this.myService.isLoggedIn()
            .toPromise()
            .then(function () {
            _this.formInfo = _this.myService.currentUser;
            // console.log(this.formInfo); ===== Works !
        })
            .catch(function (err) {
            console.log(err);
            // this.myRouter.navigate(['/login']);
        });
    };
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.myService.logout()
            .subscribe(function () {
            _this.user = null;
            _this.formInfo = {};
            _this.myRouter.navigate(['/']);
        }, function (err) { return _this.error = err; });
    };
    ProfileComponent.prototype.saveProfileInfo = function () {
        var _this = this;
        this.showProfileStuff = !this.showProfileStuff;
        this.profileService.postEntries(this.newEntry)
            .subscribe(function () {
            _this.myRouter.navigate(['profile']);
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_userprofiles_service__WEBPACK_IMPORTED_MODULE_3__["UserProfilesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
 // every time you make a service, include this





var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    // formInfo: any = {
    //   username: '',
    //   password: ''
    // };
    // user: any;
    // error: any;
    // privateData: any;
    AuthService.prototype.handleError = function (e) {
        return rxjs_Rx__WEBPACK_IMPORTED_MODULE_5__["Observable"].throw(e.json().message);
    };
    AuthService.prototype.signup = function (user) {
        return this.http.post("http://localhost:3000/api/signup", user, { withCredentials: true })
            .map(function (res) { console.log(res), res.json(); })
            .catch(this.handleError);
    };
    AuthService.prototype.login = function (user) {
        var _this = this;
        return this.http.post("http://localhost:3000/api/login", user, { withCredentials: true })
            .map(function (res) { _this.currentUser = res, console.log(res), res.json(); })
            .catch(this.handleError);
    };
    AuthService.prototype.logout = function () {
        return this.http.delete("http://localhost:3000/api/logout", { withCredentials: true })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    AuthService.prototype.isLoggedIn = function () {
        var _this = this;
        return this.http.get("http://localhost:3000/api/loggedin", { withCredentials: true })
            .map(function (res) {
            _this.currentUser = res.json();
            console.log('User Session: ', res);
            res.json();
        })
            .catch(this.handleError);
    };
    AuthService.prototype.getPrivateData = function () {
        return this.http.get("http://localhost:3000/api/private", { withCredentials: true })
            .map(function (res) { console.log('Hello: ', res), res.json(); })
            .catch(this.handleError);
    };
    AuthService.prototype.getUser = function () {
        return this.http.get("http://localhost:3000/api/userInfo", { withCredentials: true })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/userprofiles.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/userprofiles.service.ts ***!
  \**************************************************/
/*! exports provided: UserProfilesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilesService", function() { return UserProfilesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
 // every time you make a service, include this





var UserProfilesService = /** @class */ (function () {
    function UserProfilesService(http) {
        this.http = http;
    }
    UserProfilesService.prototype.handleError = function (e) {
        return rxjs_Rx__WEBPACK_IMPORTED_MODULE_5__["Observable"].throw(e.json().message);
    };
    UserProfilesService.prototype.isLoggedIn = function () {
        var _this = this;
        return this.http.get("http://localhost:3000/api/loggedin", { withCredentials: true })
            .map(function (res) {
            _this.currentUser = res.json();
            console.log('User Session: ', res);
            res.json();
        })
            .catch(this.handleError);
    };
    UserProfilesService.prototype.getEntries = function () {
        return this.http.get('http://localhost:3000/profile', { withCredentials: true });
    };
    UserProfilesService.prototype.postEntries = function (entryFields) {
        return this.http.post('http://localhost:3000/profile/edit', entryFields, { withCredentials: true });
    };
    UserProfilesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], UserProfilesService);
    return UserProfilesService;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2> Signup for CauseConnect </h2>\n<form>\n  <div>\n    <div class=\"form-group\">\n      <label for=\"email\">Email Address: </label>\n      <input class=\"form-control\" type=\"email\" [(ngModel)]=\"formInfo.email\" name=\"email\" placeholder=\"jsmith@email.com\">\n    </div>\n      <div class=\"form-group\">\n          <label for=\"username\">Username: </label>\n          <input class=\"form-control\" type=\"text\" [(ngModel)]=\"formInfo.username\" name=\"username\" placeholder=\"John Smith\">\n      </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Password: </label>\n      <input class=\"form-control\" type=\"password\" [(ngModel)]=\"formInfo.password\" name=\"password\">\n    </div>\n\n    <button type=\"submit\" (click)=\"signup()\" class=\"btn btn-primary\">Sign Up</button>\n  </div>\n</form>\n\n\n<a [routerLink]=\"['/login']\"> login </a>\n<a [routerLink]=\"['/signup']\"> signup </a>\n<a [routerLink]=\"['/profile']\"> profile </a>\n<a [routerLink]=\"['']\"> home </a>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
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



var SignupComponent = /** @class */ (function () {
    function SignupComponent(myService, myRouter) {
        this.myService = myService;
        this.myRouter = myRouter;
        this.formInfo = {
            username: "",
            password: "",
            email: "",
            causes: ""
        };
    }
    // title = 'app'; // ?
    SignupComponent.prototype.signup = function () {
        var _this = this;
        console.log("----");
        console.log(this.formInfo);
        this.myService.signup(this.formInfo).subscribe(function (user) {
            _this.user = user;
            console.log("Inside subscribe!");
            console.log(_this.formInfo);
            _this.myRouter.navigate(["/login"]);
        }, function (err) { return (_this.error = err); });
    };
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myService
            .isLoggedIn()
            .toPromise()
            .then(function () {
            _this.formInfo = _this.myService.currentUser;
        })
            .catch(function (err) {
            console.log(err);
            //this.myRouter.navigate(["/login"]);
        });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-signup",
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SignupComponent);
    return SignupComponent;
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

module.exports = __webpack_require__(/*! /Users/atarikat/Documents/Ironhack/WebDev/code/project-nonprofit/angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map