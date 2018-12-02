webpackJsonp([27],{

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionPageModule", function() { return ConnectionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connection__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ConnectionPageModule = /** @class */ (function () {
    function ConnectionPageModule() {
    }
    ConnectionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__connection__["a" /* ConnectionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__connection__["a" /* ConnectionPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ]
        })
    ], ConnectionPageModule);
    return ConnectionPageModule;
}());

//# sourceMappingURL=connection.module.js.map

/***/ }),

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConnectionPage = /** @class */ (function () {
    function ConnectionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loginRoot = 'login';
        this.signupRoot = 'signup';
    }
    ConnectionPage.prototype.ionViewDidEnter = function () {
        console.log(this.navParams.get("selectedTab"));
        if (this.navParams.get("selectedTab") == 1)
            this.tabsRef.select(this.navParams.get("selectedTab"));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])("myTabs"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Tabs */])
    ], ConnectionPage.prototype, "tabsRef", void 0);
    ConnectionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-connection',template:/*ion-inline-start:"C:\Users\user\Desktop\interactive-crpto-v2\src\pages\connection\connection.html"*/'<ion-tabs  #myTabs  tabsPlacement="top" tabsHighlight="true">\n    <ion-tab [root]="signupRoot" tabTitle="Signup"></ion-tab>\n    <ion-tab [root]="loginRoot" tabTitle="Login" ></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\user\Desktop\interactive-crpto-v2\src\pages\connection\connection.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], ConnectionPage);
    return ConnectionPage;
}());

//# sourceMappingURL=connection.js.map

/***/ })

});
//# sourceMappingURL=27.js.map