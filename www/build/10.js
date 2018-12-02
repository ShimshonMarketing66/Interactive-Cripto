webpackJsonp([10],{

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletReadReviewPageModule", function() { return WalletReadReviewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wallet_read_review__ = __webpack_require__(611);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WalletReadReviewPageModule = /** @class */ (function () {
    function WalletReadReviewPageModule() {
    }
    WalletReadReviewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__wallet_read_review__["a" /* WalletReadReviewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__wallet_read_review__["a" /* WalletReadReviewPage */]),
            ],
        })
    ], WalletReadReviewPageModule);
    return WalletReadReviewPageModule;
}());

//# sourceMappingURL=wallet-read-review.module.js.map

/***/ }),

/***/ 611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletReadReviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_track_event_track_event__ = __webpack_require__(147);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WalletReadReviewPage = /** @class */ (function () {
    function WalletReadReviewPage(navCtrl, http, navParams, trackEvent) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.trackEvent = trackEvent;
        this.pageName = this.navParams.get("pagename");
        this.language = this.navParams.get("language");
        if (this.language == "fr")
            this.language = "FR";
        else
            this.language = "EN";
        this.url = "https://afternoon-mountain-15657.herokuapp.com/walletReview/" + this.pageName + "/" + this.language;
        console.log(this.pageName);
        this.http.get(this.url)
            .toPromise()
            .then(function (response) {
            do {
                document.getElementById("blog").innerHTML = response.text();
            } while (document.getElementById("blog").innerHTML === "");
        })
            .catch(function (err) {
            console.log('error in server');
        });
    }
    WalletReadReviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WalletReadReviewPage');
        this.trackEvent.trackView("Wallet Read Review -> " + this.pageName);
    };
    WalletReadReviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-wallet-read-review',template:/*ion-inline-start:"C:\Users\user\Desktop\interactive-crpto-v2\src\pages\wallet-read-review\wallet-read-review.html"*/'\n<ion-header id="header" hideBackButton="false">\n    <ion-navbar>\n    \n      <ion-title>\n        Wallet Review      </ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n  \n    <div id="blog"></div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\user\Desktop\interactive-crpto-v2\src\pages\wallet-read-review\wallet-read-review.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_track_event_track_event__["a" /* TrackEventProvider */]])
    ], WalletReadReviewPage);
    return WalletReadReviewPage;
}());

//# sourceMappingURL=wallet-read-review.js.map

/***/ })

});
//# sourceMappingURL=10.js.map