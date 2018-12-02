webpackJsonp([32],{

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertsPageModule", function() { return AlertsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AlertsPageModule = /** @class */ (function () {
    function AlertsPageModule() {
    }
    AlertsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__alert__["a" /* AlertPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__alert__["a" /* AlertPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AlertsPageModule);
    return AlertsPageModule;
}());

//# sourceMappingURL=alert.module.js.map

/***/ }),

/***/ 579:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_track_event_track_event__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_data_auth_data__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { AngularFireAuth } from 'angularfire2/auth';
// import { AlertsDashboardPage } from '../alerts-dashboard/alerts-dashboard';
// import * as firebase from 'firebase/app';




var AlertPage = /** @class */ (function () {
    function AlertPage(loadingCtrl, navCtrl, navParams, alertCtrl, trackEvent, authData, http) {
        var _this = this;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.trackEvent = trackEvent;
        this.authData = authData;
        this.http = http;
        this.alertsdashboard = false;
        this.hasExchange = true;
        this.Time1 = true;
        this.Persistent = false;
        this.Mailcheck = true;
        __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().onAuthStateChanged(function (user1) {
            var loading = _this.loadingCtrl.create({});
            loading.present();
            _this.name = user1.displayName;
            _this.mail = user1.email;
            _this.phone = user1.phoneNumber;
            _this.uid = user1.uid;
            _this.TOSYMBOL = navParams.get('TOSYMBOL');
            _this.FROMSYMBOL = navParams.get('FROMSYMBOL');
            // this.Exchange = navParams.get('exchange')
            _this.SignToSymbole = navParams.get('SignToSymbole');
            _this.alertsdashboard = navParams.get('alertsdashboard');
            _this.jsons2 = navParams.get('jsons2');
            if (_this.alertsdashboard == true) {
                _this._id = _this.jsons2._id;
                _this.Persistent = _this.jsons2.Persistent;
                if (!_this.Persistent) {
                    _this.Time1 = true;
                }
                else {
                    _this.Time1 = false;
                }
                _this.Mailcheck = _this.jsons2.Mailcheck;
                _this.Above = _this.jsons2.Above;
                if (_this.Above != 100000000) {
                    _this.Abovebox = true;
                }
                _this.Below = _this.jsons2.Below;
                if (_this.Below != 0) {
                    _this.Belowbox = true;
                }
            }
            _this.http.get("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=" + _this.FROMSYMBOL + "&tsyms=" + _this.TOSYMBOL).toPromise()
                .then(function (data) {
                console.log(data);
                _this.Below = Number((data.RAW[_this.FROMSYMBOL][_this.TOSYMBOL].PRICE * 0.9).toFixed(6));
                _this.Above = Number((data.RAW[_this.FROMSYMBOL][_this.TOSYMBOL].PRICE * 1.1).toFixed(6));
                _this.price = Number(data.RAW[_this.FROMSYMBOL][_this.TOSYMBOL].PRICE.toFixed(6));
            }).catch(function (errFromserver) {
                console.log("error", errFromserver);
                var alert = _this.alertCtrl.create({
                    title: 'error!',
                    subTitle: "please refresh your page",
                    buttons: ['Ok']
                });
                alert.present();
            });
            loading.dismiss();
        });
    }
    AlertPage.prototype.ionViewDidLoad = function () {
        this.trackEvent.trackView("Alert");
    };
    // onSelectExchange() {
    //   let url = "https://crypto.tradingcompare.com/" + this.FROMSYMBOL + "/" + this.TOSYMBOL
    //   if (this.Exchange != "undefined" && this.Exchange != undefined)
    //     url += "&e=" + this.Exchange
    //   this.http.get(url).toPromise().then((data) => {
    //     this.price = data.json().RAW[this.FROMSYMBOL][this.TOSYMBOL].PRICE;
    //     if (this.alertsdashboard != true) {
    //       if (this.price > 1) {
    //         this.Above = Math.round(this.price * 1.1) + 1
    //         this.Below = Math.round(this.price / 1.1)
    //       } else {
    //         this.Above = parseFloat((this.price * 1.1).toFixed(6))
    //         this.Below = parseFloat((this.price / 1.1).toFixed(6))
    //       }
    //     }
    //     else {
    //       if (this.Above == 100000000) {
    //         this.Above = parseFloat((this.price * 1.1).toFixed(6))
    //       }
    //       if (this.Below == 0) {
    //         this.Below = parseFloat((this.price / 1.1).toFixed(6))
    //       }
    //     }
    //   }
    //   ).catch(errFromserver => {
    //     console.log("error", errFromserver);
    //     let alert = this.alertCtrl.create({
    //       title: 'error!',
    //       subTitle: "please refresh your page",
    //       buttons: ['Ok']
    //     })
    //     alert.present()
    //   })
    // }
    AlertPage.prototype.saveAlert = function () {
        var _this = this;
        this.Abovebox = document.getElementById("Aboveboxid").checked;
        this.Belowbox = document.getElementById("Belowboxid").checked;
        if (this.Abovebox == true || this.Belowbox == true) {
            if (this.Abovebox == true) {
                if (this.Belowbox == true) {
                }
                else {
                    this.Below = 0;
                }
            }
            else {
                this.Above = 100000000;
            }
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Invalid values',
                subTitle: 'Please Choose on Abovebox or Belowbox or Both',
                buttons: ['Ok']
            });
            alert_1.present();
            return;
        }
        var loading = this.loadingCtrl.create({});
        loading.present();
        var x = document.getElementById("1TimeId").checked;
        this.Time1 = x;
        var x2 = document.getElementById("PersistentId").checked;
        this.Persistent = x2;
        this.Mailcheck = document.getElementById('MailId').checked;
        if (!(this.price < this.Above && this.Below < this.price && this.Below != null && this.Above != null)) {
            if (this.Below == 0) {
                this.Below = null;
            }
            else if (this.Above == 100000000) {
                this.Above = null;
            }
            var alert_2 = this.alertCtrl.create({
                title: 'Invalid values',
                subTitle: 'Please Check Above And Below',
                buttons: ['Ok']
            });
            loading.dismiss();
            alert_2.present();
            return;
        }
        if (!(this.Time1 != this.Persistent)) {
            var alert_3 = this.alertCtrl.create({
                title: 'Invalid values',
                subTitle: 'please choose one Time or Persistent',
                buttons: ['Ok']
            });
            loading.dismiss();
            alert_3.present();
            return;
        }
        this.Exchange = this.Exchange ? this.Exchange : "undefined";
        var dataForTheDatabase = {
            UserUid: this.uid,
            name: this.name,
            phone: this.phone,
            email: this.mail,
            FROMSYMBOL: this.FROMSYMBOL,
            TOSYMBOL: this.TOSYMBOL,
            Exchange: this.Exchange,
            Persistent: this.Persistent,
            Mailcheck: this.Mailcheck,
            Above: Number(this.Above).toFixed(10).replace(/\.?0+$/, ""),
            Below: Number(this.Below).toFixed(10).replace(/\.?0+$/, ""),
            SignToSymbole: this.SignToSymbole,
            isAppend: false,
            date: new Date().toLocaleString(),
            notificationId: this.authData.user.notificationId
        };
        if (this.alertsdashboard == true) {
            loading.dismiss();
            console.log("a");
            this.updatealert(dataForTheDatabase);
        }
        else {
            this.setAlertInserverAndGetUid(dataForTheDatabase)
                .then(function (AlertUid) {
                if (AlertUid) {
                    var alert_4 = _this.alertCtrl.create({
                        title: 'Success!',
                        subTitle: "Your Alert is saved successfully",
                        buttons: [{
                                text: 'Ok',
                                handler: function () {
                                    _this.navCtrl.setRoot("alerts-dashboard");
                                }
                            }]
                    });
                    var label = dataForTheDatabase.FROMSYMBOL + "/" + dataForTheDatabase.TOSYMBOL + " -> " + dataForTheDatabase.Exchange;
                    loading.dismiss();
                    alert_4.present();
                }
                else {
                    var alert_5 = _this.alertCtrl.create({
                        title: 'error!',
                        subTitle: "Can't save the alert right now",
                        buttons: ['Ok']
                    });
                    loading.dismiss();
                    alert_5.present();
                }
            });
        }
    };
    AlertPage.prototype.setAlertInserverAndGetUid = function (dataForTheDatabase) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            header.append('Content-Type', 'application/json');
            _this.http.post('https://afternoon-mountain-15657.herokuapp.com/api/AddAlert', dataForTheDatabase)
                .toPromise()
                .then(function (AlertUid) {
                resolve(AlertUid);
            })
                .catch(function (err) {
                reject(err);
                var alert = _this.alertCtrl.create({
                    title: 'error!',
                    subTitle: "Can't save the alert right now",
                    buttons: ['Ok']
                });
                alert.present();
            });
        });
        return promise;
    };
    AlertPage.prototype.updatealert = function (dataForTheDatabase) {
        var _this = this;
        console.log(dataForTheDatabase);
        dataForTheDatabase["_id"] = this._id;
        var loading = this.loadingCtrl.create({});
        loading.present();
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        header.append('Content-Type', 'application/json');
        this.http.post('https://afternoon-mountain-15657.herokuapp.com/api/updateAlert', dataForTheDatabase)
            .toPromise()
            .then(function (Alert) {
            console.log("aa", Alert);
            loading.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Success!',
                subTitle: "Your Alert is saved successfully",
                buttons: [{
                        text: 'Ok',
                        handler: function () {
                            _this.navCtrl.setRoot("alerts-dashboard");
                        }
                    }]
            });
            alert.present();
        }).catch(function (errFromserver) {
            loading.dismiss();
            console.log("error", errFromserver);
            var alert = _this.alertCtrl.create({
                title: 'error!',
                subTitle: "Can't save the alert right now",
                buttons: ['Ok']
            });
            alert.present();
        });
    };
    AlertPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-alert',template:/*ion-inline-start:"C:\Users\user\Desktop\interactive-crpto-v2\src\pages\alert\alert.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title style="color: #FbbF18;\n    font-weight: 700;">{{ \'AddNewAlert\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding  style="background: #2b2b2b;color:white;">\n  <div style="color: #e2b000;font-weight: 700;font-size:130%;">{{ \'Market\' | translate }}</div>\n  <span class=sexy_line></span>\n  <div>{{FROMSYMBOL}} / {{TOSYMBOL}}</div>\n  <div *ngIf="!hasExchange" style="padding-bottom:26px;"></div>\n  <!-- <div *ngIf="hasExchange" style="color: #e2b000;\nfont-weight: 700;font-size:130%;padding-top:5%;">{{ \'SelectExchange\' | translate }}</div>\n  <span *ngIf="hasExchange" class=sexy_line></span>\n  <ion-item *ngIf="hasExchange">\n    <ion-select style="color:#B3A8A8" [(ngModel)]="Exchange" (ionChange)="onSelectExchange($event)">\n      <ion-option *ngFor="let exchange of Exchanges">{{exchange}}</ion-option>\n    </ion-select>\n  </ion-item> -->\n  <div style="color:#B3A8A8;font-size:130%;">{{ \'SetThresholdTargets\' | translate }}</div>\n  <span class=sexy_line></span>\n  <ion-grid>\n    <ion-row>\n      <ion-col  col-3 style="max-width:30%;">\n        <div style="display:  inline-flex;">{{ \'Above\' | translate }}\n          <ion-icon style="color:#e2b000;padding-left: 19px;\n        " name="ios-arrow-up-outline"></ion-icon>\n        </div>\n      </ion-col>\n      <ion-col  col>\n        <div style="display: inline-flex;width: 50%;">\n          <input type="checkbox" id="Aboveboxid" [checked]="Abovebox">\n          <b style="padding-left:5px;"></b>\n          <input style="background: #2b2b2b;" [(ngModel)]="Above" type="number" id="AboveId">\n        </div>\n      </ion-col>\n      <ion-col  col-1 style="text-align: center;max-width:25%;">{{SignToSymbole}}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col  col-3 style="max-width: 30%;">\n        <div style="display:  inline-flex;">{{ \'Current\' | translate }}\n          <ion-icon style="color:#e2b000;padding-left: 12px;\n        " name="ios-remove-outline"></ion-icon>\n        </div>\n      </ion-col>\n      <ion-col  col>\n        <div style="display: inline-flex;width: 50%;">\n          <input style="opacity: 0" type="checkbox">\n          <b style="padding-left:5px;"></b>\n          <input  style="background: #2b2b2b;"  disabled="true;" type="text" placeholder="{{price}}">\n        </div>\n      </ion-col>\n      <ion-col  col-1 style="text-align: center;max-width:25%;">{{SignToSymbole}}</ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col  col-3 style="max-width: 30%;">\n        <div style="display:  inline-flex;">{{ \'Below\' | translate }}\n          <ion-icon style="color:#e2b000;padding-left: 19px;\n        " name="ios-arrow-down-outline"></ion-icon>\n        </div>\n      </ion-col>\n      <ion-col  col>\n        <div style="display: inline-flex;width: 50%;">\n          <input type="checkbox" id="Belowboxid" [checked]="Belowbox">\n          <b style="padding-left:5px;"></b>\n          <input  style="background: #2b2b2b;" [(ngModel)]="Below" type="number" id="BelowId">\n        </div>\n      </ion-col>\n      <ion-col  col-1 style="text-align: center;max-width:25%;">{{SignToSymbole}}</ion-col>\n    </ion-row>\n\n  </ion-grid>\n  <div style="color:#B3A8A8;font-size:130%;padding-top:5%;">{{ \'AlertFrequency\' | translate }}</div>\n  <span class=sexy_line></span>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <input type="radio" id="PersistentId" name="aaa" value="Persistent" [checked]="Persistent">\n        <label>{{ \'Persistent\' | translate }}</label>\n      </ion-col>\n      <ion-col>\n        <input type="radio" id="1TimeId" name="aaa" value="Time1" [checked]="Time1">\n        <label>{{ \'OneTime\' | translate }}</label>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <input type="checkbox" id="MailId" [checked]="Mailcheck">\n        <label>{{ \'SendmeAlertbyMail\' | translate }}</label>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <div (click)="saveAlert()">\n    <button class="AlertButton">{{ \'SAVE\' | translate }}</button>\n  </div>\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\user\Desktop\interactive-crpto-v2\src\pages\alert\alert.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_track_event_track_event__["a" /* TrackEventProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_auth_data_auth_data__["a" /* AuthDataProvider */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
    ], AlertPage);
    return AlertPage;
}());

//# sourceMappingURL=alert.js.map

/***/ })

});
//# sourceMappingURL=32.js.map