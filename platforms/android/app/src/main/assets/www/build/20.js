webpackJsonp([20],{

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopUpRateUsPageModule", function() { return PopUpRateUsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pop_up_rate_us__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PopUpRateUsPageModule = /** @class */ (function () {
    function PopUpRateUsPageModule() {
    }
    PopUpRateUsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pop_up_rate_us__["a" /* PopUpRateUsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pop_up_rate_us__["a" /* PopUpRateUsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], PopUpRateUsPageModule);
    return PopUpRateUsPageModule;
}());

//# sourceMappingURL=pop-up-rate-us.module.js.map

/***/ }),

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopUpRateUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_market__ = __webpack_require__(306);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PopUpRateUsPage = /** @class */ (function () {
    function PopUpRateUsPage(platform, market, navCtrl, navParams, http) {
        this.platform = platform;
        this.market = market;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.star = 0;
    }
    PopUpRateUsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PopUpGetNewsPage');
        document.getElementsByClassName("submitButton")[0].disabled = true;
        ;
    };
    PopUpRateUsPage.prototype.submit = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        header.append('Content-Type', 'application/json');
        var data = {};
    };
    PopUpRateUsPage.prototype.disablePopUp = function () {
        //   this.nativeStorage.setItem('PopUpNewsLetter',
        //   {
        //    value: '1'
        //    })
        //  .then(
        //    () => console.log('pop up disabled'),
        //    error => console.error('pop up disabled : Error storing item', error)
        //  );
    };
    PopUpRateUsPage.prototype.close = function () {
        this.navCtrl.pop();
    };
    PopUpRateUsPage.prototype.onestar = function () {
        this.star = 1;
    };
    PopUpRateUsPage.prototype.twostar = function () {
        this.star = 2;
    };
    PopUpRateUsPage.prototype.threestar = function () {
        this.star = 3;
    };
    PopUpRateUsPage.prototype.fourstar = function () {
        this.star = 4;
        var x = (this.platform.is('ios') ? 'id1291765934' : 'com.interactive_crypto.app');
        this.market.open(x);
        this.navCtrl.pop();
    };
    PopUpRateUsPage.prototype.fivestar = function () {
        this.star = 5;
        var x = (this.platform.is('ios') ? 'id1291765934' : 'com.interactive_crypto.app');
        this.market.open(x);
        this.navCtrl.pop();
    };
    PopUpRateUsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'pop-up-rate-us',template:/*ion-inline-start:"C:\Users\user\Desktop\interactive-crpto-v2\src\pages\pop-up-rate-us\pop-up-rate-us.html"*/'\n\n<ion-content padding>\n\n<div style="padding-top:10%"></div>\n\n  <ion-icon name="close" id="ic-close" style="    font-size: 35px;" (click)="close()"></ion-icon>\n\n  <div style="font-size:100%!important;" class="popTitle">{{ \'SATISFIED WITH OUR SERVICES\' | translate }}</div>\n\n\n\n  <div style="text-align:center;font-family:Quicksand;">{{ \'leave us a review\' | translate }}</div>\n\n  <div style="margin-top:5%;width:100%;"></div>\n\n  <div style="text-align: center;">\n\n<ion-icon  (tap)="onestar()" [name]="star>0 ? \'star\' : \'star-o\' "></ion-icon>\n\n<ion-icon  (tap)="twostar()" [name]="star>1 ? \'star\' : \'star-o\' "></ion-icon>\n\n<ion-icon  (tap)="threestar()" [name]="star>2 ? \'star\' : \'star-o\' "></ion-icon>\n\n<ion-icon  (tap)="fourstar()" [name]="star>3 ? \'star\' : \'star-o\' "></ion-icon>\n\n<ion-icon  (tap)="fourstar()" [name]="star>4 ? \'star\' : \'star-o\' "></ion-icon>\n\n\n\n   \n\n  </div>\n\n\n\n  <div *ngIf="4>star" style="text-align: center;" >{{ \'NOTSATISFIED\' | translate }} ?</div>\n\n  <div *ngIf="star>3" style="text-align: center;" >{{ \'THANK YOU\' | translate }}</div>\n\n  <a *ngIf="4>star" class="submitButton" style="    text-decoration: none;" href="mailto:contact@interactivecrypto.com?subject=Hello">{{ \'SENDUSFEEDBACK\' | translate }}</a>\n\n  <div style="margin-top:3%;width:100%;"></div>\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\user\Desktop\interactive-crpto-v2\src\pages\pop-up-rate-us\pop-up-rate-us.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_market__["a" /* Market */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], PopUpRateUsPage);
    return PopUpRateUsPage;
}());

//# sourceMappingURL=pop-up-rate-us.js.map

/***/ })

});
//# sourceMappingURL=20.js.map