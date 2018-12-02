webpackJsonp([19],{

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupPageModule", function() { return PopupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popup__ = __webpack_require__(602);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PopupPageModule = /** @class */ (function () {
    function PopupPageModule() {
    }
    PopupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__popup__["a" /* PopupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__popup__["a" /* PopupPage */]),
            ],
        })
    ], PopupPageModule);
    return PopupPageModule;
}());

//# sourceMappingURL=popup.module.js.map

/***/ }),

/***/ 602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupPage; });
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



var PopupPage = /** @class */ (function () {
    function PopupPage(app, trackEvent, navCtrl, navParams) {
        this.app = app;
        this.trackEvent = trackEvent;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PopupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PopupPage');
        this.trackEvent.trackView("Popup not user");
    };
    PopupPage.prototype.gotoconnection = function () {
        this.app.getActiveNav().push("connection");
    };
    PopupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-popup',template:/*ion-inline-start:"C:\Users\user\Desktop\interactive-crpto-v2\src\pages\popup\popup.html"*/'\n\n<ion-content padding>\n<div style="text-align: center;"><img height="40" src="assets/imgs/logo_fixed_grey_circle.png" alt="">   <ion-icon style="position: absolute;\n  right: 7px;\n  top: 7px;font-size: 30px;" (click)="navCtrl.pop()" name="md-close"></ion-icon>\n</div>\n<div style="height: 25px;"></div>\n\n<div>We’ve noticed you enjoying InteractiveCrypto, would you consider signing up for a FREE account?</div>\n<div style="height: 25px;"></div>\n<div>	• 	Create altcoin alerts</div>\n<div>  • 	Manage your portfolio</div>\n<div>  • 	Engage with the crypto community</div>\n<div style="height: 25px;"></div>\n\n<div style="text-align: center;"><button (click)="gotoconnection()" style="width: 90%;height: 40px;background:#ffc046;color: #2b2b2b;border-right: 5px; ">YES, SIGN ME UP</button>\n</div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\user\Desktop\interactive-crpto-v2\src\pages\popup\popup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__providers_track_event_track_event__["a" /* TrackEventProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], PopupPage);
    return PopupPage;
}());

//# sourceMappingURL=popup.js.map

/***/ })

});
//# sourceMappingURL=19.js.map