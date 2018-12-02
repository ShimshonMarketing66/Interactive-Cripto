webpackJsonp([30],{

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrokersReadReviewPageModule", function() { return BrokersReadReviewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__brokers_read_review__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_firebase__ = __webpack_require__(149);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BrokersReadReviewPageModule = /** @class */ (function () {
    function BrokersReadReviewPageModule() {
    }
    BrokersReadReviewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__brokers_read_review__["a" /* BrokersReadReviewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__brokers_read_review__["a" /* BrokersReadReviewPage */]),
            ], providers: [__WEBPACK_IMPORTED_MODULE_3__ionic_native_firebase__["a" /* Firebase */]]
        })
    ], BrokersReadReviewPageModule);
    return BrokersReadReviewPageModule;
}());

//# sourceMappingURL=brokers-read-review.module.js.map

/***/ }),

/***/ 588:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrokersReadReviewPage; });
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




var BrokersReadReviewPage = /** @class */ (function () {
    function BrokersReadReviewPage(navCtrl, trackEvent, http, navParams) {
        this.navCtrl = navCtrl;
        this.trackEvent = trackEvent;
        this.http = http;
        this.navParams = navParams;
        console.log(this.navParams.get("pagename"));
        console.log(this.navParams.get("language"));
        this.pageName = this.navParams.get("pagename");
        this.link = this.navParams.get("link");
        this.language = this.navParams.get("language");
        this.gosite = "VISIT SITE";
        this.url = "https://afternoon-mountain-15657.herokuapp.com/BrokersReview/" + this.pageName + "/" + this.language;
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
    BrokersReadReviewPage.prototype.ionViewDidLoad = function () {
        this.trackEvent.trackView("Broker Read Reaview");
    };
    BrokersReadReviewPage.prototype.trackButton = function (name) {
        this.trackEvent.trackEvent("Broker Read Reaview", "click");
    };
    BrokersReadReviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-brokers-read-review',template:/*ion-inline-start:"C:\Users\user\Desktop\interactive-crpto-v2\src\pages\brokers-read-review\brokers-read-review.html"*/'<ion-header id="header" hideBackButton="false">\n  <ion-navbar>\n      <button ion-button menuToggle enable-menu-with-back-views="true">\n              <ion-icon name="menu"></ion-icon>\n            </button>\n      <ion-title>\n          <img src="assets/logo.png" height="37" class="imgLogo">\n      </ion-title>\n      \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div>\n            <div>\n                <a href="{{link}}">\n                        <button (click)="trackButton(name)" class="buttonsite">\n                           {{gosite}}<ion-icon style=" margin-left: 4px;position: absolute;" name="md-arrow-dropright">\n                                </ion-icon>\n    \n                        </button>\n                    </a>\n            </div>\n        </div>\n        <div style="padding-bottom: 6%;"></div>\n    <div id="blog"></div>\n    <div> <div>\n            <a href="{{link}}">\n                    <button style="margin-left:25%;" (click)="trackButton(name)" class="buttonsite">\n                       {{gosite}}<ion-icon style=" margin-left: 4px;position: absolute;" name="md-arrow-dropright">\n                            </ion-icon>\n\n                    </button>\n                </a>\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\user\Desktop\interactive-crpto-v2\src\pages\brokers-read-review\brokers-read-review.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_track_event_track_event__["a" /* TrackEventProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], BrokersReadReviewPage);
    return BrokersReadReviewPage;
}());

//# sourceMappingURL=brokers-read-review.js.map

/***/ })

});
//# sourceMappingURL=30.js.map