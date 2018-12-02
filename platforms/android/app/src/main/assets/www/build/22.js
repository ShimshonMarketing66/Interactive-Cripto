webpackJsonp([22],{

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllcoinPageModule", function() { return AllcoinPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__onboarding__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AllcoinPageModule = /** @class */ (function () {
    function AllcoinPageModule() {
    }
    AllcoinPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__onboarding__["a" /* OnboardingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__onboarding__["a" /* OnboardingPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AllcoinPageModule);
    return AllcoinPageModule;
}());

//# sourceMappingURL=onboarding.module.js.map

/***/ }),

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnboardingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_track_event_track_event__ = __webpack_require__(147);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OnboardingPage = /** @class */ (function () {
    function OnboardingPage(trackEvent, navCtrl, app) {
        this.trackEvent = trackEvent;
        this.navCtrl = navCtrl;
        this.app = app;
        this.currentIndex = 0;
    }
    OnboardingPage.prototype.slideChanged = function () {
        console.log(this.slides.getActiveIndex());
        this.currentIndex = this.slides.getActiveIndex();
    };
    OnboardingPage.prototype.clickNext = function () {
        console.log(this.slides.slideNext());
        this.slides.slideNext();
    };
    OnboardingPage.prototype.ionViewDidEnter = function () {
        console.log("ionViewDidEnter onboarding");
        this.trackEvent.trackView("onboarding");
    };
    OnboardingPage.prototype.ionViewWillLeave = function () {
    };
    OnboardingPage.prototype.gotoLogIn = function () {
        this.navCtrl.setRoot("connection", { selectedTab: 1 }, { direction: "forward" });
    };
    OnboardingPage.prototype.skipToDashboard = function () {
        this.navCtrl.setRoot("tabs");
    };
    OnboardingPage.prototype.gotoSignIn = function () {
        this.navCtrl.setRoot("connection");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Slides */])
    ], OnboardingPage.prototype, "slides", void 0);
    OnboardingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-onboarding',template:/*ion-inline-start:"C:\Users\user\Desktop\interactive-crpto-v2\src\pages\onboarding\onboarding.html"*/'\n\n<ion-content contentTop style="background:#2b2b2b;">\n<ion-slides  pager (ionSlideDidChange)="slideChanged()">\n    <ion-slide>\n      <img src="assets/imgs/logo.png" style="margin-top: 5% ;" >\n      <div style="color:white;font-size: 90%;font-weight:500;text-align: center;">{{ \'Join_crypto_Revolution\' | translate }}</div>\n\n    </ion-slide>\n    <ion-slide>\n      <div style="color:#f99f1e;font-size: 120%;font-weight:500;text-align: center;margin-top: 5% ; ">{{ \'TRADE\' | translate }}</div>\n      <div style="color:white;font-size: 90%;font-weight:500;text-align: center; ">{{ \'Create and customize your wachlist\' | translate }}</div>\n      <img src="assets/imgs/onboarding2.png"  class="imgonbording">\n    </ion-slide>\n    <ion-slide>\n        <div style="color:#f99f1e;font-size: 120%;font-weight:500;text-align: center; margin-top: 5% ;">{{ \'ACTIVE\' | translate }}</div>\n        <div style="color:white;font-size: 90%;font-weight:500;text-align: center; ">{{ \'Set_custom_alerts\' | translate }}</div>\n        <div style="color:white;font-size: 90%;font-weight:500;text-align: center; ">{{ \'and_push_notifications\' | translate }}</div>\n        \n      <img src="assets/imgs/onboarding3.png"   class="imgonbording">\n    </ion-slide>\n    <ion-slide>\n        <div style="color:#f99f1e;font-size: 120%;font-weight:500;text-align: center;margin-top: 5% ; ">{{ \'SHARE\' | translate }}</div>\n        <div style="color:white;font-size: 90%;font-weight:500;text-align: center; ">{{ \'Stay_up_to_date_with_our_easily\' | translate }}</div>\n        <div style="color:white;font-size: 90%;font-weight:500;text-align: center; ">{{ \'shareable news and reviews\' | translate }}</div>\n        \n      <img src="assets/imgs/onboarding4.png"   class="imgonbording" >\n    </ion-slide>\n    <ion-slide>\n      <div style="color:#f99f1e;font-size: 120%;font-weight:500;text-align: center;margin-top: 5% ; ">{{ \'CONNECT\' | translate }}</div>\n      <div style="color:white;font-size: 90%;font-weight:500;text-align: center; ">{{ \'Talk to other crypto enthusiasts and join the crypto community\' | translate }}</div>\n      \n    <img src="assets/imgs/onboarding5.png"   class="imgonbording">\n  </ion-slide>\n  </ion-slides>\n    <ion-grid class="Onboardingbutton">\n        <ion-row>\n          <ion-col style="text-align: center;" >\n         <div><button class="Registration_buttons2" (click)="gotoLogIn()"    >{{ \'LOG_IN\' | translate }}</button></div>   \n         <div> <button class="Registration_buttons" (click)="gotoSignIn()"  >{{ \'SIGN_UP\' | translate }}</button> </div>\n          <div style="color:#f99f1e;margin-top: 5%;" (click)="skipToDashboard()">{{ \'Continue_as_a_Guest\' | translate }}</div> \n          </ion-col>\n        </ion-row>\n      </ion-grid> \n</ion-content>'/*ion-inline-end:"C:\Users\user\Desktop\interactive-crpto-v2\src\pages\onboarding\onboarding.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_track_event_track_event__["a" /* TrackEventProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
    ], OnboardingPage);
    return OnboardingPage;
}());

//# sourceMappingURL=onboarding.js.map

/***/ })

});
//# sourceMappingURL=22.js.map