webpackJsonp([21],{

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneNumberVerifiedPageModule", function() { return PhoneNumberVerifiedPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__phone_number_verified__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_profile_model__ = __webpack_require__(301);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PhoneNumberVerifiedPageModule = /** @class */ (function () {
    function PhoneNumberVerifiedPageModule() {
    }
    PhoneNumberVerifiedPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__phone_number_verified__["a" /* PhoneNumberVerifiedPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__phone_number_verified__["a" /* PhoneNumberVerifiedPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ], providers: [__WEBPACK_IMPORTED_MODULE_4__models_profile_model__["a" /* Profile */]]
        })
    ], PhoneNumberVerifiedPageModule);
    return PhoneNumberVerifiedPageModule;
}());

//# sourceMappingURL=phone-number-verified.module.js.map

/***/ }),

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneNumberVerifiedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_profile_model__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_data_auth_data__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_platform_platform__ = __webpack_require__(4);
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







var PhoneNumberVerifiedPage = /** @class */ (function () {
    function PhoneNumberVerifiedPage(navCtrl, http, authData, profile, platform, app, trackEvent, modalCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.authData = authData;
        this.profile = profile;
        this.platform = platform;
        this.app = app;
        this.trackEvent = trackEvent;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.isenabled = false;
        if (!this.platform.is("cordova")) {
            return;
        }
    }
    PhoneNumberVerifiedPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PhoneNumberVerifiedPage');
        this.trackEvent.trackView("PhoneNumberVerifiedPage");
    };
    PhoneNumberVerifiedPage.prototype.presentcountries = function () {
        var _this = this;
        var profileModal = this.modalCtrl.create("countries", {
            type: "country"
        });
        profileModal.onDidDismiss(function (data) {
            if (data != undefined && data.dial_code != undefined) {
                _this.authData.user.countryData.dial_code = data;
            }
        });
        profileModal.present();
    };
    PhoneNumberVerifiedPage.prototype.presentDialCode = function () {
        var _this = this;
        var profileModal = this.modalCtrl.create("countries", {
            type: "dial_code"
        });
        profileModal.onDidDismiss(function (data) {
            console.log(data);
            if (data != undefined && data.dial_code != undefined) {
                _this.authData.user.countryData.dial_code = data.dial_code;
                _this.authData.user.countryData.country = data.country;
            }
        });
        profileModal.present();
    };
    PhoneNumberVerifiedPage.prototype.submit = function () {
        var _this = this;
        if (!this.phone_number && this.profile.countryData.dial_code) {
            this.error = "please enter real phone";
            return;
        }
        if (this.phone_number.length < 6) {
            this.error = "please enter real phone";
            return;
        }
        this.authData.user.phone_number = this.phone_number;
        this.authData.sendVerifyCode().then(function () {
            return _this.app.getRootNav().push("verify-code");
        });
    };
    PhoneNumberVerifiedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-phone-number-verified',template:/*ion-inline-start:"C:\Users\user\Desktop\interactive-crpto-v2\src\pages\phone-number-verified\phone-number-verified.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar  >\n\n    \n\n    <ion-title>phone-number-verified</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content style="background:#2b2b2b;color: white;font-size: 125%;text-align: center;">\n\n  \n\n<div style="margin-top: 15%;">{{ \'Enter your phone number to\' | translate }}</div>\n\n<div>{{ \'complete registration\' | translate }}</div>\n\n<ion-grid style="color: white;">\n\n \n\n  <ion-row>\n\n    <ion-col  (click)="presentDialCode()" col-2 style="margin-top:10px;font-size:1.7rem; border-bottom: 1px solid #afb9d7;">\n\n      {{authData?.user?.countryData?.dial_code}}\n\n    </ion-col>\n\n    <ion-col (click)="presentDialCode()" col-1 style="font-size:1.7rem;">\n\n      <ion-icon name="md-arrow-dropdown"></ion-icon>\n\n    </ion-col>\n\n    <ion-col style="font-size:1.7rem;border-bottom: 1px solid #afb9d7;">\n\n      <ion-input style="color:white" [(ngModel)]="phone_number" type="number" placeholder="{{ \'phone number\' | translate }}"></ion-input>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-grid>\n\n<div style="text-align: center;color: red;font-size: 14pt;">\n\n    {{error}}\n\n  </div>\n\n<div style="margin-top: 35px;"><button (click)="submit()" style="background:#ffc046;height: 40px;width: 70%;">{{ \'SUBMIT\' | translate }}</button></div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\user\Desktop\interactive-crpto-v2\src\pages\phone-number-verified\phone-number-verified.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_data_auth_data__["a" /* AuthDataProvider */],
            __WEBPACK_IMPORTED_MODULE_2__models_profile_model__["a" /* Profile */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular_platform_platform__["a" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_6__providers_track_event_track_event__["a" /* TrackEventProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], PhoneNumberVerifiedPage);
    return PhoneNumberVerifiedPage;
}());

//# sourceMappingURL=phone-number-verified.js.map

/***/ })

});
//# sourceMappingURL=21.js.map