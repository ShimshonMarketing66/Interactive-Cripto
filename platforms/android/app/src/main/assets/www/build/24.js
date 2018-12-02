webpackJsonp([24],{

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_profile_model__ = __webpack_require__(301);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ], providers: [__WEBPACK_IMPORTED_MODULE_4__models_profile_model__["a" /* Profile */]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_profile_model__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_data_auth_data__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_component__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_track_event_track_event__ = __webpack_require__(147);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = /** @class */ (function () {
    function LoginPage(app, splashscreen, navCtrl, trackEvent, alertCtrl, loadingCtrl, profile, authdata, navParams) {
        this.app = app;
        this.splashscreen = splashscreen;
        this.navCtrl = navCtrl;
        this.trackEvent = trackEvent;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.profile = profile;
        this.authdata = authdata;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
        this.trackEvent.trackView("LoginPage");
    };
    LoginPage.prototype.loginViaProvider = function (m_provider) {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.authdata.loginUserWithProvider(m_provider)
            .then(function (profile) {
            console.log("back", profile);
            loading.dismiss();
            if (profile.is_phone_number_verified) {
                console.log("a");
                _this.splashscreen.show();
                _this.app.getRootNavs()[0].setRoot(__WEBPACK_IMPORTED_MODULE_5__app_app_component__["a" /* MyApp */]).then(function () {
                    window.location.reload();
                });
            }
            else {
                console.log("b");
                _this.app.getActiveNav().push("phone-number-verified");
            }
        })
            .catch(function (err) {
            var alert = _this.alertCtrl.create({
                message: "Try Again",
                buttons: [
                    {
                        text: "Ok",
                        role: 'cancel'
                    }
                ]
            });
            loading.dismiss();
            alert.present();
        });
    };
    LoginPage.prototype.loginViaEmail = function () {
        var _this = this;
        console.log(this.email, this.password);
        this.error = "";
        if (this.email == null && this.password == null) {
            this.error = "please enter correct email ans password";
            return;
        }
        this.authdata.loginUserViaEmail(this.email, this.password).then(function () {
            _this.splashscreen.show();
            _this.app.getRootNavs()[0].setRoot(__WEBPACK_IMPORTED_MODULE_5__app_app_component__["a" /* MyApp */]).then(function () {
                window.location.reload();
            });
        }).catch(function (err) {
            console.log(err.message);
            var alert = _this.alertCtrl.create({
                message: err.message,
                buttons: [
                    {
                        text: "Ok",
                        role: 'cancel'
                    }
                ]
            });
            alert.present();
        });
    };
    LoginPage.prototype.gotoForgotpassword = function () {
        this.app.getRootNav().push("forgot-password");
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\user\Desktop\interactive-crpto-v2\src\pages\login\login.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding  style="background:#2b2b2b;">\n  \n  <div style="text-align: center;font-size: 16pt;color: white;padding-top: 4px;"> {{ \'LOGIN\' | translate }}</div>\n  \n  <button (click)="loginViaProvider(\'facebook\')" class="Facebookbutton" ion-button>\n    <ion-icon class="facebookicon" ios="logo-facebook" md="logo-facebook"></ion-icon> Facebook</button>\n  <button (click)="loginViaProvider(\'google\')" class="Googlebutton" ion-button>\n    <ion-icon class="googleicon" name="logo-googleplus"></ion-icon> Google</button>\n  <div style="color: white;text-align: center;margin-top: 15px"> ----------------- {{ \'OR\' | translate }} ----------------- </div>\n  <ion-item>\n    <ion-label  stacked>{{ \'Email\' | translate }}</ion-label>\n    <ion-input type="email" style="color:white" [(ngModel)]="email" placeholder="{{ \'ENTER EMAIL\' | translate }}"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label  stacked>{{ \'Password\' | translate }}</ion-label>\n    <ion-input type="password" style="color:white" [(ngModel)]="password" placeholder="{{ \'ENTER PASSWORD\' | translate }}"></ion-input>\n  </ion-item>\n\n  <button class="loginbutton" ion-button  (click)="loginViaEmail()">{{ \'LOGIN\' | translate }}</button>\n  <div (click)="gotoForgotpassword()" class="forgotpassword">{{ \'Forgot your password\' | translate }}?</div>\n\n  <div style="text-align: center;color: red;font-size: 14pt;">\n    {{error}}\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\user\Desktop\interactive-crpto-v2\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_track_event_track_event__["a" /* TrackEventProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__models_profile_model__["a" /* Profile */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_data_auth_data__["a" /* AuthDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=24.js.map