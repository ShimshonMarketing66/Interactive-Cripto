webpackJsonp([12],{

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyCodeModule", function() { return VerifyCodeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verify_code__ = __webpack_require__(608);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VerifyCodeModule = /** @class */ (function () {
    function VerifyCodeModule() {
    }
    VerifyCodeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__verify_code__["a" /* VerifyCodePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__verify_code__["a" /* VerifyCodePage */]),
            ],
        })
    ], VerifyCodeModule);
    return VerifyCodeModule;
}());

//# sourceMappingURL=verify-code.module.js.map

/***/ }),

/***/ 608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyCodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_android_permissions__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_data_auth_data__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_component__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_track_event_track_event__ = __webpack_require__(147);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var VerifyCodePage = /** @class */ (function () {
    function VerifyCodePage(app, splashscreen, toastCtrl, authData, loadingCtrl, platform, trackEvent, androidPermissions, navCtrl, navParams) {
        var _this = this;
        this.app = app;
        this.splashscreen = splashscreen;
        this.toastCtrl = toastCtrl;
        this.authData = authData;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.trackEvent = trackEvent;
        this.androidPermissions = androidPermissions;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.otp1tmp = "";
        this.otp2tmp = "";
        this.otp3tmp = "";
        this.otp4tmp = "";
        this.isSetedFocusForFirstTime = false;
        this.canSubmit = false;
        platform.ready().then(function () {
            if (platform.is("cordova")) {
                if (platform.is("ios")) {
                    _this.ReadSMSList();
                }
                else {
                    _this.checkPermission();
                }
            }
        });
    }
    VerifyCodePage.prototype.keyup2 = function (code, ec) {
        var keyCode = ec.keyCode;
        console.log(keyCode, code);
        switch (code) {
            case "1":
                if (keyCode == 8) {
                    break;
                }
                if (this.otp1.value.length == 2) {
                    this.otp2.value = this.otp1.value.charAt(1);
                    this.otp1.value = this.otp1.value.charAt(0);
                    this.otp3.setFocus();
                }
                else {
                    this.otp1tmp = this.otp1.value;
                    this.otp2.setFocus();
                }
                break;
            case "2":
                if (keyCode == 8) {
                    if (this.otp2tmp == "") {
                        this.otp1.setFocus();
                    }
                    else {
                        this.otp2tmp = "";
                    }
                    break;
                }
                if (this.otp2.value.length == 2) {
                    this.otp3.value = this.otp2.value.charAt(1);
                    this.otp2.value = this.otp2.value.charAt(0);
                    this.otp3.setFocus();
                }
                else {
                    this.otp2tmp = this.otp2.value;
                    this.otp3.setFocus();
                }
                break;
            case "3":
                if (keyCode == 8) {
                    if (this.otp3tmp == "") {
                        this.otp2.setFocus();
                    }
                    else {
                        this.otp3tmp = "";
                    }
                    break;
                }
                if (this.otp3.value.length == 2) {
                    this.otp4.value = this.otp3.value.charAt(1);
                    this.otp3.value = this.otp3.value.charAt(0);
                    this.otp4.setFocus();
                }
                else {
                    this.otp3tmp = this.otp3.value;
                    this.otp4.setFocus();
                }
                break;
            case "4":
                if (keyCode == 8) {
                    if (this.otp4tmp == "") {
                        this.otp3.setFocus();
                    }
                    else {
                        this.otp4tmp = "";
                    }
                    this.otp4.value = "";
                    break;
                }
                this.otp4tmp = this.otp4.value;
                if (this.checkSubmit()) {
                    this.submit();
                }
                return;
            default:
                break;
        }
        this.checkSubmit();
    };
    VerifyCodePage.prototype.checkSubmit = function () {
        if (this.isValid(this.otp1) && this.isValid(this.otp2) && this.isValid(this.otp3) && this.isValid(this.otp4)) {
            this.canSubmit = true;
            return true;
        }
        else {
            this.canSubmit = false;
            return false;
        }
    };
    VerifyCodePage.prototype.isValid = function (a) {
        if (a != undefined) {
            if (a.value != undefined) {
                if (a.value.length > 0) {
                    return true;
                }
            }
        }
        return false;
    };
    VerifyCodePage.prototype.submit = function () {
        var _this = this;
        var code = this.otp1.value + this.otp2.value + this.otp3.value + this.otp4.value;
        var loading = this.loadingCtrl.create({
            content: "verifing code..."
        });
        loading.present();
        this.authData.checkCode(code).then(function (isCheckedCode) {
            if (isCheckedCode) {
                loading.setContent("code is validated succesfully...");
                setTimeout(function () {
                    loading.setContent("wait please...");
                    setTimeout(function () {
                        loading.setContent("restarting app");
                        loading.dismiss();
                        _this.trackEvent.trackEvent("code verify", "succesfully");
                        _this.splashscreen.show();
                        window.location.reload();
                        _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_5__app_app_component__["a" /* MyApp */]);
                    }, 2000);
                }, 2000);
            }
            else {
                loading.dismiss();
                var toast = _this.toastCtrl.create({
                    message: 'The code you enter is wrong',
                    duration: 3000,
                    position: 'bottom'
                });
                _this.canSubmit = false;
                toast.present();
            }
        });
    };
    VerifyCodePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VerifyCodePage');
        this.trackEvent.trackView("VerifyCode");
    };
    VerifyCodePage.prototype.checkPermission = function () {
        var _this = this;
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_SMS)
            .then(function (success) {
            //if permission granted
            console.log("permited");
            _this.ReadSMSList();
        }, function (err) {
            console.log("not permited");
            _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.READ_SMS)
                .then(function (success) {
                _this.ReadSMSList();
            }, function (err) {
                alert("cancelled");
            });
        });
    };
    VerifyCodePage.prototype.ReadSMSList = function () {
        var _this = this;
        SMSReceive.startWatch(function () {
            console.log('smsreceive: watching started');
            document.addEventListener('onSMSArrive', function (e) {
                var sms = e.data;
                console.log(sms);
                var code = "";
                if (sms.body.indexOf("Interactive Crypto code") > -1) {
                    code = sms.body.slice(24, 28);
                    _this.otp1.value = code.charAt(0);
                    _this.otp2.value = code.charAt(1);
                    _this.otp3.value = code.charAt(2);
                    _this.otp4.value = code.charAt(3);
                    SMSReceive.stopWatch(function () {
                        console.log("SMSReceive.stopWatch");
                    });
                    _this.submit();
                }
            });
        }, function () {
            console.warn('smsreceive: failed to start watching');
        });
        // setInterval(()=>{
        //   let filter = {
        //     box : 'inbox', // 'inbox' (default), 'sent', 'draft'
        //     indexFrom : 0, // start from index 0
        //     maxCount : 10, // count of SMS to return each time
        //          };
        //     if(SMS) SMS.listSMS(filter, (ListSms)=>{
        //         console.log("Sms",ListSms);
        //        },
        //        Error=>{
        //        console.log('error list sms: ' + Error);
        //        }); 
        // },5000)
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])("otp1"),
        __metadata("design:type", Object)
    ], VerifyCodePage.prototype, "otp1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])("otp2"),
        __metadata("design:type", Object)
    ], VerifyCodePage.prototype, "otp2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])("otp3"),
        __metadata("design:type", Object)
    ], VerifyCodePage.prototype, "otp3", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])("otp4"),
        __metadata("design:type", Object)
    ], VerifyCodePage.prototype, "otp4", void 0);
    VerifyCodePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-verify-code',template:/*ion-inline-start:"C:\Users\user\Desktop\interactive-crpto-v2\src\pages\verify-code\verify-code.html"*/'\n\n<ion-header>\n\n\n\n    <ion-navbar (click)="navCtrl.pop()">\n\n  \n\n      <ion-title> Verification Code</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n<ion-content padding style="color: #ffffff;\n\nbackground: #000000;">\n\n  <div style="margin-top: 35px;font-size: 24px;text-align: center;"> \n\n    Verification Code\n\n  </div>\n\n  <div style="margin-top: 34px;margin-bottom: 30px;text-align: center;">\n\n    Please enter the 4-digit verification code sent to your phone here:\n\n  </div>\n\n  <div align="center" style="margin-bottom:20px;">\n\n    <table>\n\n      <tr>\n\n        <td style="border-right: solid 15px #2b2b2b;border-left-color: #2b2b2b;border-top: none;text-align: center;">\n\n          <ion-input type="tel" #otp1 class="otp" maxlength="2" size="1" (keyup)="keyup2(\'1\',$event)">\n\n          </ion-input>\n\n        </td>\n\n        <td style="border-right: solid 15px #2b2b2b;border-left-color: #2b2b2b;border-top: none;text-align: center;">\n\n          <ion-input type="tel" #otp2 class="otp" maxlength="2" size="1" (keyup)="keyup2(\'2\',$event)">\n\n          </ion-input>\n\n        </td>\n\n        <td style="border-right: solid 15px #2b2b2b;border-left-color: #2b2b2b;border-top: none;text-align: center;">\n\n          <ion-input type="tel" #otp3 class="otp" maxlength="2" size="1" (keyup)="keyup2(\'3\',$event)">\n\n          </ion-input>\n\n        </td>\n\n        <td style="border-right: none;border-left-color: #2b2b2b;border-top: none;text-align: center;">\n\n          <ion-input type="tel" #otp4 class="otp" maxlength="1" size="1" (keyup)="keyup2(\'4\',$event)">\n\n          </ion-input>\n\n        </td>\n\n      </tr>\n\n    </table>\n\n  </div>\n\n\n\n  <div style="text-align: center;">\n\n      <button ion-button [style.background]="canSubmit && \'#ffc046\' || !canSubmit && \'#7fffd4\'" (click)="submit()">Submit</button>\n\n  </div>\n\n  \n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\user\Desktop\interactive-crpto-v2\src\pages\verify-code\verify-code.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_data_auth_data__["a" /* AuthDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_6__providers_track_event_track_event__["a" /* TrackEventProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_android_permissions__["a" /* AndroidPermissions */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], VerifyCodePage);
    return VerifyCodePage;
}());

//# sourceMappingURL=verify-code.js.map

/***/ })

});
//# sourceMappingURL=12.js.map