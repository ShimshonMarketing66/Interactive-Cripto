webpackJsonp([17],{

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_data_auth_data__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_market__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_track_event_track_event__ = __webpack_require__(147);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, authData, platform, market, app, trackEvent, modalCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.authData = authData;
        this.platform = platform;
        this.market = market;
        this.app = app;
        this.trackEvent = trackEvent;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.countryimg = "http://xosignals.herokuapp.com/api2/sendImgCountryByName/";
        this.countryimg += this.authData.user.countryData.country;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
        this.trackEvent.trackView("SettingsPage");
    };
    SettingsPage.prototype.logoutUser = function () {
        this.authData.logoutUser();
    };
    SettingsPage.prototype.gotoAboutus = function () {
        this.app.getRootNav().push("about-us");
    };
    SettingsPage.prototype.gototermsTermAndPrivacy = function () {
        this.app.getRootNav().push("termAndPrivacy");
    };
    SettingsPage.prototype.presentListtimezone = function () {
        var _this = this;
        var profileModal = this.modalCtrl.create("countries", {
            type: "timezone"
        });
        profileModal.onDidDismiss(function (data) {
            console.log(data);
            if (data != undefined) {
                _this.authData.user.countryData.timezone = data;
            }
        });
        profileModal.present();
    };
    SettingsPage.prototype.gotovip = function () {
        this.navCtrl.push("vip");
    };
    SettingsPage.prototype.rateus = function () {
        var x = (this.platform.is('ios') ? 'id1291765934' : 'com.interactive_crypto.app');
        this.market.open(x);
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\Users\user\Desktop\interactive-crpto-v2\src\pages\settings\settings.html"*/'<ion-header style="background: #222222;color: white;">\n\n  <ion-navbar>\n    <ion-title>settings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="background: #222222;color: white;">\n  <ion-grid style="padding:0;">\n    <ion-row style="border-bottom:1px solid #4a4a4a;height: 65px;    padding-top: 5px;\n  padding-left: 5px;">\n  <ion-col col-2><img style="width: 50px;\n    height: 50px;" [src]="countryimg" alt=""></ion-col>\n      <ion-col style="height: 42px;font-size:18px;    white-space: nowrap;">{{\'Profile Settings\'|translate}}</ion-col>\n      <ion-col col-2 style="text-align: end;">\n      <!-- <ion-icon style="font-size:30px; " name="ios-arrow-forward-outline" item-right></ion-icon> -->\n      </ion-col>\n    </ion-row>\n    <ion-row (click)="presentListtimezone()" style="border-bottom:1px solid #4a4a4a;height: 57px">\n      <ion-col style="height: 42px;font-size:18px;    white-space: nowrap;">\n        <ion-row>\n          <ion-col style="color:#9d9d9d;font-size: 11px;height: 15px;text-align: start;padding-left: 5px;">Time Zone </ion-col>\n        </ion-row>\n        <ion-row >\n          <ion-col>{{authData?.user?.countryData?.timezone}}</ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col col-2 style="text-align: end;">\n        <ion-icon style="font-size:30px; " name="ios-arrow-forward-outline" item-right></ion-icon>\n      </ion-col>  </ion-row> \n      <ion-row style="border-bottom:1px solid #4a4a4a;height: 57px">\n        <ion-col style="height: 42px;font-size:18px;    white-space: nowrap;">\n          <ion-row>\n            <ion-col style="color:#9d9d9d;font-size: 11px;height: 15px;text-align: start;padding-left: 5px;">Currency  </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>USD  </ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col col-2 style="text-align: end;">\n          <ion-icon style="font-size:30px; " name="ios-arrow-forward-outline" item-right></ion-icon>\n        </ion-col>\n      </ion-row> \n      <ion-row style="border-bottom:1px solid #4a4a4a;height: 57px">\n        <ion-col style="height: 42px;font-size:18px;    white-space: nowrap;">\n          <ion-row>\n            <ion-col style="color:#9d9d9d;font-size: 11px;height: 15px;text-align: start;padding-left: 5px;">Language </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>English (En) </ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col col-2 style="text-align: end;">\n          <ion-icon style="font-size:30px; " name="ios-arrow-forward-outline" item-right></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row (click)="rateus()" style="border-bottom:1px solid #4a4a4a;height:50px;">\n        <ion-col style="height: 42px;font-size:18px;    white-space: nowrap;">\n          <ion-row>\n            <ion-col style="padding-top: 8px;">Rate Us </ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col col-2 style="text-align: end;">\n          <ion-icon style="font-size:30px; " name="ios-arrow-forward-outline" item-right></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row style="border-bottom:1px solid #4a4a4a;height:70px;">\n        <ion-col style="height: 65px;font-size:18px;    white-space: nowrap;">\n          <ion-row>\n            <ion-col style="color:#9d9d9d;font-size: 11px;height: 15px;text-align: start;padding-left: 5px;">Follow Us: </ion-col>\n          </ion-row>\n          <ion-row >\n            <ion-col col-2><a href="https://www.facebook.com/interactivecrypto/"><img src="assets/imgs/followus/facebook.png"  height="40"> </a></ion-col>\n            <ion-col col-2><a href="https://www.linkedin.com/company/interactivecryp/"><img src="assets/imgs/followus/linkedin.png" height="40"></a> </ion-col>\n            <ion-col col-2> <a href="https://t.me/cryptocurrenciesnews1"><img src="assets/imgs/followus/telegram.png"  height="40"></a></ion-col>\n            <ion-col col-2><a href="https://twitter.com/Interactivecryp"><img src="assets/imgs/followus/twitter.png"  height="40"></a> </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n      <ion-row (click)="gotoAboutus()" style="border-bottom:1px solid #4a4a4a;height: 50px;    padding-top: 5px;\n      padding-left: 5px;">\n          <ion-col style="height: 42px;font-size:18px;    white-space: nowrap;">About Us</ion-col>\n          <ion-col col-2 style="text-align: end;">\n          <ion-icon style="font-size:30px; " name="ios-arrow-forward-outline" item-right></ion-icon>\n          </ion-col>\n        </ion-row>\n        <ion-row (click)="gototermsTermAndPrivacy()" style="border-bottom:1px solid #4a4a4a;height: 50px;    padding-top: 5px;\n        padding-left: 5px;">\n            <ion-col style="padding-top: 8px;height: 42px;font-size:18px;    white-space: nowrap;">Terms and Conditions              </ion-col>\n            <ion-col col-2 style="text-align: end;">\n            <ion-icon style="font-size:30px; " name="ios-arrow-forward-outline" item-right></ion-icon>\n            </ion-col>\n          </ion-row>\n          <ion-row (click)="logoutUser()" style="border-bottom:1px solid #4a4a4a;height:50px;    padding-top: 5px;\n          padding-left: 5px;">\n              <ion-col style="padding-top: 8px;height: 42px;font-size:18px;    white-space: nowrap;">Sign Out\n\n                </ion-col>\n              <ion-col col-2 style="text-align: end;">\n              <ion-icon style="font-size:30px; " name="ios-arrow-forward-outline" item-right></ion-icon>\n              </ion-col>\n            </ion-row>\n\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"C:\Users\user\Desktop\interactive-crpto-v2\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_data_auth_data__["a" /* AuthDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_market__["a" /* Market */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_4__providers_track_event_track_event__["a" /* TrackEventProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ })

});
//# sourceMappingURL=17.js.map