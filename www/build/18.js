webpackJsonp([18],{

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerErrorPageModule", function() { return ServerErrorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__server_error__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_ngx_translate_core__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ServerErrorPageModule = /** @class */ (function () {
    function ServerErrorPageModule() {
    }
    ServerErrorPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__server_error__["a" /* ServerErrorPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__server_error__["a" /* ServerErrorPage */]),
                __WEBPACK_IMPORTED_MODULE_3__node_modules_ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], ServerErrorPageModule);
    return ServerErrorPageModule;
}());

//# sourceMappingURL=server-error.module.js.map

/***/ }),

/***/ 603:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerErrorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_component__ = __webpack_require__(302);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServerErrorPage = /** @class */ (function () {
    function ServerErrorPage(navCtrl, navParams, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
    }
    ServerErrorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServerErrorPage');
    };
    ServerErrorPage.prototype.tryAgain = function () {
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__app_app_component__["a" /* MyApp */]);
    };
    ServerErrorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-server-error',template:/*ion-inline-start:"C:\Users\user\Desktop\interactive-crpto-v2\src\pages\server-error\server-error.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>InterActive Crypto</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <h2 >\n\n        Our apologies, we are experiencing technical difficulties at the moment. \n\n    </h2>\n\n    <div style="height: 100px;\n\n    text-align: center;\n\n    font-size: 65px;">😭</div>\n\n      <div style="text-align: center;">\n\n  \n\n    <button  style="text-align: center;" ion-button round (click)="tryAgain()"> Please try again</button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\user\Desktop\interactive-crpto-v2\src\pages\server-error\server-error.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
    ], ServerErrorPage);
    return ServerErrorPage;
}());

//# sourceMappingURL=server-error.js.map

/***/ })

});
//# sourceMappingURL=18.js.map