webpackJsonp([1,5],{

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(130);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(firebaseAuth, route, router) {
        this.firebaseAuth = firebaseAuth;
        this.route = route;
        this.router = router;
        this.user = firebaseAuth.authState;
    }
    AuthService.prototype.signup = function (email, password) {
        this.firebaseAuth
            .auth
            .createUserWithEmailAndPassword(email, password)
            .then(function (value) {
            console.log('Success!', value);
        })
            .catch(function (err) {
            console.log('Something went wrong:', err.message);
        });
    };
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        this.firebaseAuth
            .auth
            .signInWithEmailAndPassword(email, password)
            .then(function (value) {
            console.log('Nice, it worked!');
            _this.router.navigate(['/home']);
            console.log(value.uid);
        })
            .catch(function (err) {
            console.log('Something went wrong:', err.message);
        });
    };
    AuthService.prototype.logout = function () {
        this.firebaseAuth
            .auth
            .signOut();
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object])
], AuthService);

var _a, _b, _c;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(123);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(authService) {
        this.authService = authService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.logout = function () {
        this.authService.logout();
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__(355),
        styles: [__webpack_require__(279)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_service__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__(123);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = (function () {
    function HomeComponent(searchService, authService) {
        var _this = this;
        this.searchService = searchService;
        this.authService = authService;
        this.searchTerm$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.searchService.search(this.searchTerm$)
            .subscribe(function (results) {
            _this.results = results.results;
            console.log(results);
            // If Search box contains no text slide header down
            if (__WEBPACK_IMPORTED_MODULE_1_jquery__('.search-box').val() === '') {
                __WEBPACK_IMPORTED_MODULE_1_jquery__('.welcome-row').slideDown(400);
                var resultsLength = __WEBPACK_IMPORTED_MODULE_1_jquery__('li.main-results').length;
                __WEBPACK_IMPORTED_MODULE_1_jquery__('.results-title').text('Results: ' + resultsLength);
                // Else hide the welcome header
            }
            else {
                __WEBPACK_IMPORTED_MODULE_1_jquery__('.welcome-row').slideUp(400);
                var resultsLength = __WEBPACK_IMPORTED_MODULE_1_jquery__('li.main-results').length;
                __WEBPACK_IMPORTED_MODULE_1_jquery__('.results-title').text('Results: ' + resultsLength);
            }
        });
    }
    HomeComponent.prototype.copyText = function (el) {
        __WEBPACK_IMPORTED_MODULE_1_jquery__(el).siblings('.api-txt').select();
        document.execCommand('copy');
    };
    HomeComponent.prototype.copyWithScript = function (el) {
        var apiUrl = __WEBPACK_IMPORTED_MODULE_1_jquery__(el).siblings('.api-script-txt').select();
        document.execCommand('copy');
    };
    HomeComponent.prototype.showMore = function () {
        __WEBPACK_IMPORTED_MODULE_1_jquery__('.more-list').removeClass('display-none');
        __WEBPACK_IMPORTED_MODULE_1_jquery__('body, html').animate({
            scrollTop: __WEBPACK_IMPORTED_MODULE_1_jquery__(__WEBPACK_IMPORTED_MODULE_1_jquery__('.full-list')).offset().top
        }, 300);
        var currentResults = __WEBPACK_IMPORTED_MODULE_1_jquery__('.more-list').length + 1;
        console.log(currentResults);
        __WEBPACK_IMPORTED_MODULE_1_jquery__('.more-list').slice(currentResults).hide();
    };
    HomeComponent.prototype.onScroll = function () {
        if (__WEBPACK_IMPORTED_MODULE_1_jquery__('body').scrollTop() > 5000) {
            var currentResults = parseInt(__WEBPACK_IMPORTED_MODULE_1_jquery__('ul li').length);
            console.log('current list: ' + currentResults);
            var nextResults = currentResults / 4;
            __WEBPACK_IMPORTED_MODULE_1_jquery__('.more-list').slice(nextResults).show();
            console.log('final results:' + nextResults);
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(356),
        styles: [__webpack_require__(280)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__search_service__["a" /* SearchService */], __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__search_service__["a" /* SearchService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagenotfoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PagenotfoundComponent = (function () {
    function PagenotfoundComponent() {
    }
    PagenotfoundComponent.prototype.ngOnInit = function () {
    };
    return PagenotfoundComponent;
}());
PagenotfoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-pagenotfound',
        template: __webpack_require__(357),
        styles: [__webpack_require__(281)]
    }),
    __metadata("design:paramtypes", [])
], PagenotfoundComponent);

//# sourceMappingURL=pagenotfound.component.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });


var AuthService = (function () {
    function AuthService() {
    }
    AuthService.prototype.signupUser = function (email, password) {
        __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().createUserWithEmailAndPassword(email, password)
            .then(function (response) { return __WEBPACK_IMPORTED_MODULE_1_jquery__('.sign-up').html('You have successfuly signed up, please login!').fadeIn('slow'); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_jquery__('.sign-up').html(error.message).fadeIn('slow'); });
    };
    AuthService.prototype.loginUser = function (email, password) {
        __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().signInWithEmailAndPassword(email, password)
            .then()
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_jquery__('.login-error').html(error.message).fadeIn('slow'); });
    };
    AuthService.prototype.getToken = function () {
        return __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().currentUser.getIdToken();
    };
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(127);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupComponent = (function () {
    function SignupComponent(authService) {
        this.authService = authService;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onSignup = function (form) {
        var email = form.value.email;
        var password = form.value.password;
        this.authService.signupUser(email, password);
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-signup',
        template: __webpack_require__(358),
        styles: [__webpack_require__(282)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], SignupComponent);

var _a;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyBzhhCyShiJKYvY_5OJ7STdG24t6LN8_2c',
        authDomain: 'co-start-me.firebaseapp.com',
        databaseURL: 'https://co-start-me.firebaseio.com',
        projectId: 'co-start-me',
        storageBucket: 'co-start-me.appspot.com',
        messagingSenderId: '648357885133'
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 204:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 204;


/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(129);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(354),
        styles: [__webpack_require__(278)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routes__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_infinite_scroll__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_dynamic__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__environments_environment__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__signup_auth_service__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__header_header_component__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pagenotfound_pagenotfound_component__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__signup_signup_component__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__home_home_component__ = __webpack_require__(125);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_13__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_14__pagenotfound_pagenotfound_component__["a" /* PagenotfoundComponent */],
            __WEBPACK_IMPORTED_MODULE_15__signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_16__home_home_component__["a" /* HomeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routes__["a" /* AppRoutesModule */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].firebase),
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_infinite_scroll__["a" /* InfiniteScrollModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__signup_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["a" /* AngularFireDatabase */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
    })
], AppModule);

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(AppModule);
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_header_component__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pagenotfound_pagenotfound_component__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup_component__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__(125);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoutes = [
    { path: 'header', component: __WEBPACK_IMPORTED_MODULE_2__header_header_component__["a" /* HeaderComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_4__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_3__pagenotfound_pagenotfound_component__["a" /* PagenotfoundComponent */] }
];
var AppRoutesModule = (function () {
    function AppRoutesModule() {
    }
    return AppRoutesModule;
}());
AppRoutesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
            )
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], AppRoutesModule);

//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchService = (function () {
    function SearchService(http) {
        this.http = http;
        this.baseUrl = 'https://api.cdnjs.com/libraries';
        this.queryUrl = '?search=';
    }
    SearchService.prototype.search = function (terms) {
        var _this = this;
        return terms.debounceTime(100)
            .distinctUntilChanged()
            .switchMap(function (term) { return _this.searchEntries(term); });
    };
    SearchService.prototype.searchEntries = function (term) {
        return this.http
            .get(this.baseUrl + this.queryUrl + term)
            .map(function (res) { return res.json(); });
    };
    return SearchService;
}());
SearchService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], SearchService);

var _a;
//# sourceMappingURL=search.service.js.map

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, ".search-row {\r\n    margin-top: 30px;\r\n}\r\n.grayed {\r\n    color: #9c9c9c;\r\n}\r\ninput {\r\n    border: 2px solid #000;\r\n    border-radius: 0px;\r\n}\r\ninput:focus {\r\n    border-color: #000;\r\n    background: #e3ffe9;\r\n}\r\n\r\nul {\r\n    padding-left: 0px;\r\n    height: 100%;\r\n}\r\n\r\nli {\r\n    list-style: none;\r\n    background: #e74c3c;\r\n    color: #fff;\r\n    margin-bottom: 20px;\r\n    padding: 20px;\r\n    display: inline-block;\r\n}\r\n\r\nli a {\r\n    color: #fff;\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n    font-size: 18px;\r\n    display: block;\r\n}\r\ntextarea {\r\n    resize: none;\r\n    overflow: hidden;\r\n}\r\n.api-txt,\r\n.api-script-txt{\r\n    width: 100%;\r\n    height: 85px !important;\r\n    color: #000;\r\n    font-weight: bold;\r\n    background: #dadada;\r\n}\r\n.api-txt {\r\n    height: 50px !important;\r\n}\r\nul {\r\n    height: 20rem;\r\n}\r\n.display-none {\r\n    display: none;\r\n}\r\n.btn-script,\r\n.full-list{\r\n    background: none;\r\n    border: 2px solid #fff;\r\n    padding: 7px 20px;\r\n    text-transform: uppercase;\r\n    margin: 0 auto;\r\n    display: block;\r\n    font-weight: 700;\r\n    transition: all 0.2s ease-in;\r\n}\r\n.btn-script:hover {\r\n    background: #fff;\r\n    color: #e74c3c;\r\n}\r\n.full-list {\r\n    background-color: #00609c;\r\n    color: #fff;\r\n    padding: 10px 20px;\r\n    transition: all 0.2s ease-in;\r\n    border-color: #00609c;\r\n}\r\n.full-list:hover {\r\n    background: #fff;\r\n    color: #00609c;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, ".sign-up {\r\n    display: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 354:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 355:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\"routerLink=\"home\">JS CDN Library</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li routerLinkActive=\"active\"><a routerLink=\"home\">Home</a></li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>"

/***/ }),

/***/ 356:
/***/ (function(module, exports) {

module.exports = "<div class=\"row welcome-row\">\n    <div class=\"col-xs-12 text-center\">\n        <h3 *ngIf=\"authService.user | async\">Welcome to JS Library!</h3>\n        <p>Feel free to search for all the popular javascript/jquery libraries.</p>\n    </div>\n</div>\n<div class=\"row search-row\">\n    <div class=\"col-xs-12 col-md-4 col-md-offset-4\">\n       <h4>Enter what you are seeking in the box below</h4>\n       <p class=\"grayed\">Hint: jQuery, react, animate.js, angular, weather.js, etc..</p>\n        <input (keyup)=\"searchTerm$.next($event.target.value)\" class=\"form-control search-box\" type=\"text\" placeholder=\"jQuery, react, animate.js, angular, weather.js, etc..\">\n        <ul *ngIf=\"results\">\n         <h3 class=\"results-title\">Results: </h3>\n          <li class=\"main-results\" *ngFor=\"let result of results | slice:0:10\">\n            <a href=\"{{ result.latest }}\" target=\"_blank\">\n              {{ result.name }}\n            </a>\n            <br>\n            <textarea cols=\"30\" rows=\"10\" name=\"apiurl\" class=\"api-txt\">{{ result.latest }}</textarea>\n            <textarea name=\"apiurl\" class=\"api-script-txt\"><script src=\"{{ result.latest }}\"></script></textarea>\n            <br>\n            <br>\n            <button class=\"btn-script\" (click)=\"copyText($event.target)\">Copy</button>\n            <br>\n            <button class=\"btn-script\" \n            (click)=\"copyWithScript($event.target)\"\n            >Copy with Script</button>\n            \n          </li>\n          <br/>\n          <button (click)=\"showMore()\" class=\"full-list\">See Full List</button>\n          <br>\n          <br>\n          <li \n           infiniteScroll\n\t\t    [infiniteScrollDistance]=\"2\"\n\t\t    [infiniteScrollThrottle]=\"300\"\n\t\t    (scrolled)=\"onScroll()\" class=\"display-none main-results more-list\" *ngFor=\"let result of results | slice:10:100\">\n            <a href=\"{{ result.latest }}\" target=\"_blank\">\n              {{ result.name }}\n            </a>\n            <br>\n            <textarea cols=\"30\" rows=\"10\" name=\"apiurl\" class=\"api-txt\">{{ result.latest }}</textarea>\n            <textarea name=\"apiurl\" class=\"api-script-txt\"><script src=\"{{ result.latest }}\"></script></textarea>\n            <br>\n            <br>\n            <button class=\"btn-script\" (click)=\"copyText($event.target)\">Copy</button>\n            <br>\n            <button class=\"btn-script\" \n            (click)=\"copyWithScript($event.target)\"\n            >Copy with Script</button>\n            \n          </li>\n        </ul>\n        \n<!--        <p class=\"search-results\"></p>-->\n    </div>\n</div>"

/***/ }),

/***/ 357:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center\">Sorry, the page you are looking for does no exist, please try again!</h2>"

/***/ }),

/***/ 358:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"col-md-offset-3 col-md-6\">\n  <h3>Signup</h3>\n   <h4 class=\"sign-up\"></h4>\n    <form (ngSubmit)=\"onSignup(f)\" #f=\"ngForm\">\n        <div class=\"form-group\">\n            <label for=\"email\">Email</label>\n            <input class=\"form-control\" type=\"email\" id=\"email\" name=\"email\" ngModel>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input class=\"form-control\" type=\"password\" id=\"password\" name=\"password\" ngModel>\n        </div>\n        <button class=\"btn btn-primary\" type=\"submit\">Sign Up</button>\n    </form>\n</div>\n\n   \n"

/***/ }),

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(205);


/***/ })

},[408]);
//# sourceMappingURL=main.bundle.js.map