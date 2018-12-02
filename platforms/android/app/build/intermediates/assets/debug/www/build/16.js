webpackJsonp([16],{

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninPageModule", function() { return SigninPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_profile_model__ = __webpack_require__(301);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SigninPageModule = /** @class */ (function () {
    function SigninPageModule() {
    }
    SigninPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__signup__["a" /* SignupPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__models_profile_model__["a" /* Profile */]]
        })
    ], SigninPageModule);
    return SigninPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_profile_model__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_data_auth_data__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_android_permissions__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_sim__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_app_component__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_track_event_track_event__ = __webpack_require__(147);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { DeviceAccounts } from '@ionic-native/device-accounts';





var SignupPage = /** @class */ (function () {
    function SignupPage(trackEvent, sim, app, alertCtrl, loadingCtrl, profile, authdata, modalCtrl, navCtrl, navParams, platform, splashscreen, androidPermissions, http) {
        this.trackEvent = trackEvent;
        this.sim = sim;
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.profile = profile;
        this.authdata = authdata;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.splashscreen = splashscreen;
        this.androidPermissions = androidPermissions;
        this.http = http;
    }
    // this.http.get('http://freegeoip.net/json')
    //     .toPromise()
    //     .then(data => {
    //         this.profile.country = data["country_name"]
    //         this.http.get('./assets/lot of data/countries.json')
    //             .toPromise()
    //             .then(response => {
    //                 for (let index = 0; index < response["countries"].length; index++) {
    //                     if (response["countries"][index].name == this.profile.country) {
    //                         this.profile.dial_code = response["countries"][index].dial_code
    //                         break;
    //                     }
    //                 }
    //             })
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })
    SignupPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log("ionViewDidEnter register");
        this.trackEvent.trackView("register");
        this.authdata.getContry().then(function (data) {
            console.log(data, "data");
            _this.profile.countryData = data;
            if (!_this.platform.is("cordova")) {
                return;
            }
            _this.sim.hasReadPermission().then(function (info) {
                if (!info) {
                    _this.sim.requestReadPermission().then(function () {
                        console.log('Permission granted');
                        _this.sim.getSimInfo().then(function (info) {
                            console.log("info", info);
                            var a = _this.profile.countryData.dial_code.length;
                            _this.profile.phone_number = info.phoneNumber.substring(a);
                        }, function (err) {
                            console.log('Unable to get sim info: ', err);
                        });
                    }, function () {
                        console.log('Permission denied');
                    });
                }
                else {
                    _this.sim.getSimInfo().then(function (info) {
                        console.log("info", info);
                        var a = _this.profile.countryData.dial_code.length;
                        _this.profile.phone_number = info.phoneNumber.substring(a);
                    }, function (err) {
                        console.log('Unable to get sim info: ', err);
                    });
                }
            });
        });
    };
    SignupPage.prototype.ionViewWillLeave = function () {
        console.log("ionViewDidLeave");
    };
    SignupPage.prototype.presentcountries = function () {
        var _this = this;
        var profileModal = this.modalCtrl.create("countries", {
            type: "country"
        });
        profileModal.onDidDismiss(function (data) {
            if (data != undefined && data.dial_code != undefined) {
                _this.profile.countryData.dial_code = data.dial_code;
                _this.profile.countryData.country = data.name;
            }
        });
        profileModal.present();
    };
    SignupPage.prototype.presentDialCode = function () {
        var _this = this;
        var profileModal = this.modalCtrl.create("countries", {
            type: "dial_code"
        });
        profileModal.onDidDismiss(function (data) {
            if (data != undefined && data.dial_code != undefined) {
                _this.profile.dial_code = data.dial_code;
            }
        });
        profileModal.present();
    };
    SignupPage.prototype.submit = function () {
        var _this = this;
        this.error = "";
        if (this.profile.first_name == undefined || this.profile.first_name.length < 2) {
            this.error = "enter real first name";
            return;
        }
        if (this.profile.last_name == undefined || this.profile.last_name.length < 2) {
            this.error = "enter real last name";
            return;
        }
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(this.profile.email).toLowerCase())) {
            this.error = "enter real mail";
            return;
        }
        if (this.profile.countryData.country == undefined) {
            this.error = "enter real country";
            return;
        }
        if (this.profile.countryData.dial_code == undefined) {
            this.error = "enter real dial_code";
            return;
        }
        if (isNaN(Number(this.profile.phone_number)) || this.profile.phone_number.length < 5) {
            this.error = "enter real phone number";
            return;
        }
        if (this.profile.password == undefined || this.profile.password.length < 6) {
            this.error = "enter real password number minimum 6";
            return;
        }
        var loading = this.loadingCtrl.create();
        loading.present();
        this.authdata.signupUser(this.profile)
            .then(function (data) {
            console.log(data);
            loading.dismiss();
            _this.app.getRootNav().push("verify-code");
        })
            .catch(function (error) {
            var alert = _this.alertCtrl.create({
                message: error.message,
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
    SignupPage.prototype.loginViaProvider = function (m_provider) {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.authdata.loginUserWithProvider(m_provider)
            .then(function (profile) {
            loading.dismiss();
            if (profile.is_phone_number_verified) {
                _this.splashscreen.show();
                _this.app.getRootNavs()[0].setRoot(__WEBPACK_IMPORTED_MODULE_8__app_app_component__["a" /* MyApp */]).then(function () {
                    window.location.reload();
                });
            }
            else {
                console.log("b");
                _this.app.getRootNav().push("phone-number-verified");
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
    SignupPage.prototype.goToTremsAndConditions = function () {
        this.app.getRootNav().push("termAndPrivacy");
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\user\Desktop\interactive-crpto-v2\src\pages\signup\signup.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title> {{ \'SIGN_UP\' | translate }}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content style="background:#2b2b2b;">\n\n    \n\n  <div style="text-align: center;font-size: 16pt;color: white;padding-top: 4px;"> {{ \'SIGN_UP\' | translate }}</div>\n\n  \n\n  <button (click)="loginViaProvider(\'facebook\')" class="Facebookbutton" ion-button>\n\n    <ion-icon class="facebookicon" ios="logo-facebook" md="logo-facebook"></ion-icon> Facebook</button>\n\n  <button (click)="loginViaProvider(\'google\')" class="Googlebutton" ion-button>\n\n    <ion-icon class="googleicon" name="logo-googleplus"></ion-icon> Google</button>\n\n  <div style="color: white;text-align: center;margin-top: 15px"> ----------------- {{ \'OR\' | translate }} ----------------- </div>\n\n  <ion-item>\n\n      <ion-label  stacked>{{ \'First Name\' | translate }}</ion-label>\n\n      <ion-input type="text" style="color:white" [(ngModel)]="profile.first_name" placeholder="{{ \'ENTER FIRST NAME\' | translate }}"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label  stacked>{{ \'Last Name\' | translate }}</ion-label>\n\n      <ion-input type="text" style="color:white" [(ngModel)]="profile.last_name" placeholder="{{ \'ENTER LAST NAME\' | translate }}"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label  stacked>{{ \'Email\' | translate }}</ion-label>\n\n      <ion-input type="email" style="color:white" [(ngModel)]="profile.email" placeholder="{{ \'ENTER EMAIL\' | translate }}"></ion-input>\n\n    </ion-item>\n\n  \n\n    <ion-item mode="ios" (click)="presentcountries()">\n\n      <ion-label style="color: white;" stacked>{{ \'Country\' | translate }}</ion-label>\n\n      <ion-input type="text" style="color:white" disabled =true class="custom-input"  [(ngModel)]="profile.countryData.country" placeholder={{country}}></ion-input>\n\n    </ion-item>\n\n  \n\n    <ion-grid style="padding:unset;margin-left:16px;font-size: 1.2rem;color: white;height: 55px;">\n\n      <ion-row>\n\n        <ion-col >\n\n         {{ \' Phone\' | translate }}\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col (click)="presentDialCode()" col-2 style="padding-top: 5px;font-size:1.7rem; border-bottom: 1px solid #afb9d7;white-space: nowrap;">\n\n          {{profile.countryData.dial_code}}\n\n        </ion-col>\n\n        <ion-col (click)="presentDialCode()" col-1 style="padding-top: 5px;font-size:1.7rem;">\n\n          <ion-icon name="md-arrow-dropdown"></ion-icon>\n\n        </ion-col>\n\n        <ion-col style="padding-top:5px;font-size:1.7rem;border-bottom: 1px solid #afb9d7;">\n\n          <ion-input class="input-try" style="color:white" [(ngModel)]="profile.phone_number" type="number" placeholder="{{ \'phone number\' | translate }}"></ion-input>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  \n\n    <ion-item>\n\n      <ion-label  stacked>{{ \'Password\' | translate }}</ion-label>\n\n      <ion-input type="password" style="color:white" [(ngModel)]="profile.password" placeholder="{{ \'ENTER PASSWORD\' | translate }}"></ion-input>\n\n    </ion-item>\n\n  \n\n    <button class="Signinbutton" ion-button  (click)="submit()">{{ \'REGISTER\' | translate }}</button>\n\n    <div style="text-align: center;color: red;font-size: 14pt;">\n\n      {{error}}\n\n    </div>\n\n    <div style="color:#4a4a4a">{{ \'By pressing Sign up you are agree to our\' | translate }}\n\n      <b style="color:white;padding-left: 2px;" (click)="goToTremsAndConditions()">\n\n        {{ \'terms and conditions\' | translate }}</b>\n\n    </div>\n\n  \n\n  </ion-content>'/*ion-inline-end:"C:\Users\user\Desktop\interactive-crpto-v2\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__providers_track_event_track_event__["a" /* TrackEventProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_sim__["a" /* Sim */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__models_profile_model__["a" /* Profile */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_data_auth_data__["a" /* AuthDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_android_permissions__["a" /* AndroidPermissions */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=16.js.map