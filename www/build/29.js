webpackJsonp([29],{

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrokersPageModule", function() { return BrokersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__brokers__ = __webpack_require__(581);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BrokersPageModule = /** @class */ (function () {
    function BrokersPageModule() {
    }
    BrokersPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__brokers__["a" /* BrokersPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__brokers__["a" /* BrokersPage */]),
            ],
        })
    ], BrokersPageModule);
    return BrokersPageModule;
}());

//# sourceMappingURL=brokers.module.js.map

/***/ }),

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrokersPage; });
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




var BrokersPage = /** @class */ (function () {
    function BrokersPage(navCtrl, loadingCtrl, http, trackEvent, navParams, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.trackEvent = trackEvent;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.language = "EN";
        this.NotNetworkConnection = false;
        this.NetworkConnection = true;
        if (this.navParams.get("language") == "fr") {
            this.language = "FR";
        }
        else
            this.language = "EN";
        this.toast = this.toastCtrl.create({
            message: "You should be connected to internet in order to read news,\n Please check your connection.",
            position: 'bottom',
            showCloseButton: true
        });
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        if (this.language == "FR") {
            this.url = "http://afternoon-mountain-15657.herokuapp.com/NewBrokers" + this.language + "/";
            this.srcImg = "./img/uk.png";
            this.title = "Meilleurs courtiers pour acheter des monnaies virtuelles";
            this.readreview = "Lire la Revue";
            this.gosite = "VISITER SITE";
        }
        else {
            this.url = "http://afternoon-mountain-15657.herokuapp.com/NewBrokersEN/";
            this.srcImg = "./img/france.png";
            this.title = "Top Brokers to buy Cryptocurrencies";
            this.gosite = "VISIT SITE";
            this.readreview = "Read Review";
        }
        //check Network
        // this mean that I im in phone device
        this.loading.present();
        this.http.get("http://afternoon-mountain-15657.herokuapp.com/NewBrokersEN/")
            .toPromise()
            .then(function (Response) {
            _this.items = Response.json();
            _this.loading.dismiss();
        })
            .catch(function (error) { return console.log('an error was happen with the response of the the server'); });
    }
    BrokersPage.prototype.ionViewDidLoad = function () {
        this.trackEvent.trackView("Brokers");
    };
    BrokersPage.prototype.trackButton = function (name) {
        this.trackEvent.trackEvent("about-us", "Brooker button");
    };
    BrokersPage.prototype.readReview = function (pagename, language, link) {
        this.navCtrl.push("brokers-read-review", { language: language, pagename: pagename, link: link });
    };
    BrokersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-brokers',template:/*ion-inline-start:"C:\Users\user\Desktop\interactive-crpto-v2\src\pages\brokers\brokers.html"*/'<ion-header id="header" hideBackButton="false">\n\n    <ion-navbar>\n\n        <button ion-button menuToggle enable-menu-with-back-views="true">\n\n                <ion-icon name="menu"></ion-icon>\n\n              </button>\n\n        <ion-title>\n\n            <img src="assets/logo.png" height="37" class="imgLogo">\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding >\n\n    <div style="padding-top:5%"></div>\n\n       \n\n    <div style="color:#e2ad43; text-align: center;padding-top:5%; font-size:130%;">{{title}}</div>\n\n    <span class=sexy_line></span>\n\n    <ion-grid style="height: 150px;background:#e4e4e4;margin-top: 5%;" *ngFor="let item of items; ">\n\n        <ion-row >\n\n            <ion-col class="brokerimg" (click)="readReview(item.name,language,item.link)"><img height="40px;" src="{{item.img}}">\n\n                <div  style="margin-top: 5%;color: #e2ad43;font-size: 90%;">{{readreview}}</div>\n\n            </ion-col>\n\n\n\n            <ion-col>\n\n                <div class="titlecol">User score</div>\n\n                <div class="brokermin">{{item.userscore}}</div>\n\n                \n\n            </ion-col>\n\n            <ion-col >\n\n                <div class="titlecol">Min Deposit</div> \n\n                <div class="brokermin">{{item.minDeposit}}$</div>              \n\n            </ion-col>\n\n\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col>  <div> <img src="assets/img/brokers5.png" height="20px" class="coinsupport"></div></ion-col>\n\n            <ion-col><div>\n\n                    <div (click)="trackButton(item.name)">\n\n                        <a href="{{item.link}}">\n\n                                <button class="buttonsite">\n\n                                   {{gosite}}<ion-icon style=" margin-left: 4px;" name="md-arrow-dropright">\n\n                                        </ion-icon>\n\n        \n\n                                </button>\n\n                            </a>\n\n                    </div>\n\n                </div></ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\user\Desktop\interactive-crpto-v2\src\pages\brokers\brokers.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_track_event_track_event__["a" /* TrackEventProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */]])
    ], BrokersPage);
    return BrokersPage;
}());

//# sourceMappingURL=brokers.js.map

/***/ })

});
//# sourceMappingURL=29.js.map