webpackJsonp([13],{

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateVersionPageModule", function() { return UpdateVersionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__update_version__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UpdateVersionPageModule = /** @class */ (function () {
    function UpdateVersionPageModule() {
    }
    UpdateVersionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__update_version__["a" /* UpdateVersionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__update_version__["a" /* UpdateVersionPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], UpdateVersionPageModule);
    return UpdateVersionPageModule;
}());

//# sourceMappingURL=update-version.module.js.map

/***/ }),

/***/ 607:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateVersionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_market__ = __webpack_require__(306);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UpdateVersionPage = /** @class */ (function () {
    function UpdateVersionPage(platform, navCtrl, menu, navParams, market) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.navParams = navParams;
        this.market = market;
    }
    UpdateVersionPage.prototype.ionViewDidLoad = function () {
        this.menu.swipeEnable(false);
    };
    UpdateVersionPage.prototype.updateApp = function () {
        var x = (this.platform.is('ios') ? 'id1291765934' : 'com.interactive_crypto.app');
        this.market.open(x);
    };
    UpdateVersionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-update-version',template:/*ion-inline-start:"C:\Users\user\Desktop\interactive-crpto-v2\src\pages\update-version\update-version.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>InterActive Crypto</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <h2 >\n\n      A new version is out! to continue please update the application.\n\n  </h2>\n\n  <div style="height: 100px;\n\n  text-align: center;\n\n  font-size: 65px;">🤗</div>\n\n\n\n  <div style="text-align: center;">\n\n    <button ion-button round (click)="updateApp()"> UPDATE APP</button>\n\n</div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\user\Desktop\interactive-crpto-v2\src\pages\update-version\update-version.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_market__["a" /* Market */]])
    ], UpdateVersionPage);
    return UpdateVersionPage;
}());

//# sourceMappingURL=update-version.js.map

/***/ })

});
//# sourceMappingURL=13.js.map