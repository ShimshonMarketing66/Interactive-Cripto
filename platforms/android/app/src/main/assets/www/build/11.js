webpackJsonp([11],{

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VipPageModule", function() { return VipPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vip__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_ngx_translate_core__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_firebase__ = __webpack_require__(149);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var VipPageModule = /** @class */ (function () {
    function VipPageModule() {
    }
    VipPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__vip__["a" /* VipPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__vip__["a" /* VipPage */]),
                __WEBPACK_IMPORTED_MODULE_3__node_modules_ngx_translate_core__["b" /* TranslateModule */].forChild()
            ], providers: [__WEBPACK_IMPORTED_MODULE_4__ionic_native_firebase__["a" /* Firebase */]]
        })
    ], VipPageModule);
    return VipPageModule;
}());

//# sourceMappingURL=vip.module.js.map

/***/ }),

/***/ 609:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VipPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_purchase_2__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_data_auth_data__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_product_model__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_app_app__ = __webpack_require__(9);
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







// import { GlobalParamesProvider } from '../../providers/global-parames/global-parames';

var VipPage = /** @class */ (function () {
    function VipPage(authData, platform, app, toastCtrl, navCtrl, store, navParams, loadingCtrl, 
        // public globalParamesProvider: GlobalParamesProvider,
        trackEvent) {
        var _this = this;
        this.authData = authData;
        this.platform = platform;
        this.app = app;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.store = store;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.trackEvent = trackEvent;
        console.log("user", this.authData.user);
        this.productYear = new __WEBPACK_IMPORTED_MODULE_4__models_product_model__["a" /* Product */]();
        this.productMouth = new __WEBPACK_IMPORTED_MODULE_4__models_product_model__["a" /* Product */]();
        var loading = this.loadingCtrl.create();
        loading.present();
        this.platform.ready().then(function () {
            if (!_this.platform.is("ios"))
                _this.initializeStore();
            loading.dismiss();
        });
    }
    VipPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad vip");
        this.trackEvent.trackView("vip");
    };
    VipPage.prototype.goToNotificationpage = function () {
        this.navCtrl.push("notifications");
    };
    VipPage.prototype.initializeStore = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.productMouth.appleProductId = "interactivecrypto.vip.month";
                this.productMouth.googleProductId = "interactivecrypto.vip.month";
                this.productMouth.name = "unlimited alerts (1 month)";
                this.productYear.appleProductId = "interactivecrypto.vip.year";
                this.productYear.googleProductId = "interactivecrypto.vip.year";
                this.productYear.name = "unlimited alerts (1 year)";
                if (!this.platform.is('cordova')) {
                    return [2 /*return*/];
                }
                ;
                this.store.verbosity = this.store.INFO;
                this.store.refresh();
                __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_purchase_2__["a" /* InAppPurchase2 */].getPlugin().ready(function () {
                    _this.store.refresh();
                    var productMouth_id = "";
                    var productYear_id = "";
                    if (_this.platform.is('ios')) {
                        productMouth_id = _this.productMouth.appleProductId;
                        productYear_id = _this.productYear.appleProductId;
                    }
                    else {
                        productMouth_id = _this.productMouth.googleProductId;
                        productYear_id = _this.productYear.googleProductId;
                    }
                    _this.store.register({
                        id: productMouth_id,
                        alias: productMouth_id,
                        type: _this.store.NON_RENEWING_SUBSCRIPTION
                    });
                    _this.store.register({
                        id: productYear_id,
                        alias: productYear_id,
                        type: _this.store.NON_RENEWING_SUBSCRIPTION
                    });
                    _this.store.refresh();
                    var that = _this;
                    _this.store.when(_this.productMouth.googleProductId).approved(function (product) {
                        product.finish();
                        that.authData.user.state = "approved";
                    });
                    _this.store.when(_this.productYear.appleProductId).approved(function (product) {
                        product.finish();
                        that.authData.user.state = "approved";
                    });
                    _this.store.when(_this.productYear.googleProductId).owned(function (product) {
                        product.finish();
                        that.authData.user.state = "approved";
                    });
                    _this.store.when(_this.productMouth.appleProductId).owned(function (product) {
                        product.finish();
                        that.authData.user.state = "approved";
                    });
                    _this.store.when(_this.productMouth.googleProductId).updated(function (product) {
                        if (product.state == "finished" || product.state == "owned" || product.state == "approved") {
                            that.authData.user.state = "approved";
                            product.finish();
                        }
                    });
                    _this.store.when(_this.productMouth.appleProductId).updated(function (product) {
                        if (product.state == "finished" || product.state == "owned" || product.state == "approved") {
                            that.authData.user.state = "approved";
                            product.finish();
                        }
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    VipPage.prototype.restorepurchase = function (productId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (this.platform.is('ios')) {
                    this.toastCtrl.create({
                        message: "coming soon.",
                        duration: 4000
                    }).present();
                    return [2 /*return*/];
                }
                console.log("restorepurchase");
                this.store.refresh();
                __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_purchase_2__["a" /* InAppPurchase2 */].getPlugin().ready(function () {
                    console.log("getPlugin");
                    _this.store.refresh();
                    _this.store.order(productId).then(function () {
                        console.log("order");
                        var that = _this;
                        _this.store.refresh();
                        _this.store.when(productId).updated(function (product) {
                            console.log("updated");
                            if (product.state == "finished" || product.state == "owned" || product.state == "approved") {
                                console.log("finished");
                                window['plugins'].appsFlyer.trackEvent("subscribtion", {
                                    product: productId,
                                    user_id: that.authData.user._id
                                });
                                product.finish();
                                that.authData.user.state = "approved";
                                that.authData.updateIdOneSignals().then(function () {
                                    console.log("avi1");
                                }).catch(function () {
                                    console.log("avi2");
                                });
                            }
                        });
                    });
                });
                this.store.refresh();
                return [2 /*return*/];
            });
        });
    };
    VipPage.prototype.ionViewDidLeave = function () {
        // this.app.getRootNav().setRoot(MyApp);
    };
    VipPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-vip',template:/*ion-inline-start:"C:\Users\user\Desktop\interactive-crpto-v2\src\pages\vip\vip.html"*/'<ion-header>\n\n\n\n    <ion-navbar (click)="navCtrl.pop()">  \n\n      <ion-title> {{\'Upgrade to Premium\'|translate}}\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content style="background: #2b2b2b;color: #ffffff;text-align: center;">\n\n  <div style="text-align: center;font-size: 18px;margin-top: 35px;">Get <b style="color:#ffc046;    ">MORE</b> for your money.\n\n  </div>\n\n  <div style="color: #9b9b9b;font-size: 14px;text-align: center;margin-top: 20px;">Our premium service includes:</div>\n\n  <ion-grid style="padding:0px;margin-top: 25px;">\n\n    <ion-row>\n\n        <ion-col col-1></ion-col>\n\n      <ion-col col-2 style="background: #ffffff;border-bottom-left-radius: 3px;\n\n      border-top-left-radius: 3px;"><img  style="    height: 30px;\n\n        width: 30px;" src="assets/imgs/no_more_ads.png" alt=""></ion-col>\n\n      <ion-col style="background: #ffffff;border-bottom-right-radius: 3px;\n\n      border-top-right-radius: 3px;">\n\n        <div style="font-size:18px;color: #2b2b2b;text-align: start;margin-top: 5px;\n\n        font-weight: 500;">{{\'NO MORE ADS\'|translate}}</div>\n\n      </ion-col>\n\n      <ion-col col-1></ion-col>\n\n    </ion-row>\n\n    <ion-row style="margin-top: 10px;">\n\n        <ion-col col-1></ion-col>\n\n        <ion-col col-2 style="background: #ffffff;border-bottom-left-radius: 3px;\n\n        border-top-left-radius: 3px;"><img style="    height: 30px;\n\n          width: 30px;" src="assets/imgs/unlimited_alerts.png" alt=""></ion-col>\n\n        <ion-col style="background: #ffffff;border-bottom-right-radius: 3px;\n\n        border-top-right-radius: 3px;">\n\n          <div style="font-size:18px;color: #2b2b2b;text-align: start;margin-top: 5px;\n\n          font-weight: 500;">{{\'UNLIMITED ALERTS\'|translate}}</div>\n\n        </ion-col>\n\n        <ion-col col-1></ion-col>\n\n      </ion-row>\n\n    <ion-row style="text-align: center;margin-top: 20px;">\n\n\n\n        <ion-col col-1></ion-col>\n\n      <ion-col  style="border-radius: 3px;  border-right:solid 3px #2b2b2b;padding:0px;   " (click)="restorepurchase(\'interactivecrypto.vip.month\')">\n\n          <ion-row style="height: 25px; background: none;     "> </ion-row>\n\n        <ion-row style="  font-size: 14px; background: linear-gradient(to right,#ffc046,#f76b1c);border-top-left-radius:3px;border-top-right-radius:3px;    ">\n\n          <ion-col>{{\'MONTHLY\'|translate}}</ion-col>\n\n        </ion-row>\n\n        <ion-row style="font-size: 14px;background: linear-gradient(to right,#ffc046,#f76b1c);border-bottom-left-radius:3px;border-bottom-right-radius:3px;">\n\n          <ion-col>$29/<b style="font-size: 11px;">Month</b> </ion-col>\n\n        </ion-row>\n\n      </ion-col>\n\n      <ion-col  style="border-left:solid 3px #2b2b2b;padding:0px;background: linear-gradient(to right,#ffc046,#f76b1c); float:left ;border-radius:3px; " (click)="restorepurchase(\'interactivecrypto.vip.year\')">\n\n       <ion-row style="background: #05bd9b; height: 25px;      "><ion-col>RECOMMENDED</ion-col> </ion-row>\n\n        <ion-row style="   font-size: 14px;    ">\n\n          <ion-col>{{\'YEARLY\'|translate}}</ion-col>\n\n        </ion-row>\n\n        <ion-row style="font-size: 14px;">\n\n          <ion-col>$240/<b style="font-size: 11px;">Year</b>  <b  style="color:#ef2213;font-size:11px;">{{\'30%_OFF\'|translate}}</b ></ion-col>\n\n        </ion-row>\n\n      \n\n      \n\n      </ion-col>\n\n      <ion-col col-1></ion-col>\n\n\n\n    </ion-row>\n\n    <ion-row style="height: 40px;">\n\n      <ion-col style="padding:5px">\n\n      \n\n      </ion-col>\n\n\n\n    </ion-row>\n\n  </ion-grid>\n\n  <div style="height: 40px;"></div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\user\Desktop\interactive-crpto-v2\src\pages\vip\vip.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_auth_data_auth_data__["a" /* AuthDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_app_app__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_purchase_2__["a" /* InAppPurchase2 */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_track_event_track_event__["a" /* TrackEventProvider */]])
    ], VipPage);
    return VipPage;
}());

//# sourceMappingURL=vip.js.map

/***/ })

});
//# sourceMappingURL=11.js.map