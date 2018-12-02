webpackJsonp([26],{

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function() { return ForgotPasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot_password__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ForgotPasswordPageModule = /** @class */ (function () {
    function ForgotPasswordPageModule() {
    }
    ForgotPasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__forgot_password__["a" /* ForgotPasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forgot_password__["a" /* ForgotPasswordPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], ForgotPasswordPageModule);
    return ForgotPasswordPageModule;
}());

//# sourceMappingURL=forgot-password.module.js.map

/***/ }),

/***/ 594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_data_auth_data__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ForgotPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotPasswordPage = /** @class */ (function () {
    function ForgotPasswordPage(authdata, alertCtrl, navCtrl, navParams) {
        this.authdata = authdata;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ForgotPasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotPasswordPage');
    };
    ForgotPasswordPage.prototype.resetPassword = function (email) {
        var _this = this;
        this.authdata.resetPassword(email).then(function () {
            var alert = _this.alertCtrl.create({
                message: "We sent you a reset link to your email",
                buttons: [
                    {
                        text: "Ok",
                        role: 'cancel',
                        handler: function () {
                            _this.navCtrl.pop();
                        }
                    }
                ]
            });
            alert.present();
        }, function (error) {
            var errorMessage = error.message;
            var errorAlert = _this.alertCtrl.create({
                message: errorMessage,
                buttons: [{ text: "Ok", role: 'cancel' }]
            });
            errorAlert.present();
        });
    };
    ForgotPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-forgot-password',template:/*ion-inline-start:"C:\Users\user\Desktop\interactive-crpto-v2\src\pages\forgot-password\forgot-password.html"*/'\n\n\n\n<ion-content padding style="background:#2b2b2b;">\n\n  <ion-icon (click)="navCtrl.pop()" style="position: absolute;font-size: 35px;color: white;left: 10px;top: 13px;" name="ios-arrow-back"></ion-icon>\n\n  <div style="text-align: center;font-size: 16pt;color: white;padding-top: 4px;"> forgot-password</div>\n\n   \n\n    <div style="font-size:12pt;color:white;text-align: center;padding-top: 60px;padding-bottom: 53px;">\n\n        {{ \'Please enter your email address\' | translate }}:\n\n    </div>\n\n  \n\n    <ion-item style="background: #2b2b2b;">\n\n        <ion-label color="light" stacked>{{ \'Email\' | translate }}</ion-label>\n\n        <ion-input type="email" style="color:white" [(ngModel)]="email" placeholder="{{ \'YOUREMAIL@EMAIL.COM\' | translate }}"></ion-input>\n\n      </ion-item>\n\n  <div style="margin-top: 57%;text-align: center;">\n\n    <button  (click)="resetPassword(email)" style="width: 170px;height: 40px;border-radius: 10px; background: #f99f1e;\n\n    color: white;font-weight:700;">{{ \'SUBMIT\' | translate }}</button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\user\Desktop\interactive-crpto-v2\src\pages\forgot-password\forgot-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_auth_data_auth_data__["a" /* AuthDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());

//# sourceMappingURL=forgot-password.js.map

/***/ })

});
//# sourceMappingURL=26.js.map