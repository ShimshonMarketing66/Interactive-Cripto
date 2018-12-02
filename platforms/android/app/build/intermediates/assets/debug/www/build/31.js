webpackJsonp([31],{

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertsPageModule", function() { return AlertsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alerts_dashboard__ = __webpack_require__(580);
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
                __WEBPACK_IMPORTED_MODULE_2__alerts_dashboard__["a" /* AlertsDashboardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__alerts_dashboard__["a" /* AlertsDashboardPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AlertsPageModule);
    return AlertsPageModule;
}());

//# sourceMappingURL=alerts-dashboard.module.js.map

/***/ }),

/***/ 580:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertsDashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_track_event_track_event__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_data_auth_data__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import * as firebase from 'firebase/app';
// import { AngularFireAuth } from 'angularfire2/auth';





var AlertsDashboardPage = /** @class */ (function () {
    function AlertsDashboardPage(trackEvent, loadingCtrl, navCtrl, http, app, authData, navParams) {
        var _this = this;
        this.trackEvent = trackEvent;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.http = http;
        this.app = app;
        this.authData = authData;
        this.navParams = navParams;
        this.icon = "md-create";
        this.edit = false;
        this.isAlretsEmpty = true;
        this.Time1 = true;
        this.Persistent = false;
        this.Mailcheck = false;
        this.jsons = new Array();
        this.jsons2 = new Array();
        this.alljsons = new Array();
        var loading = loadingCtrl.create({
            duration: 1000
        });
        loading.present();
        __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().onAuthStateChanged(function (user1) {
            if (!user1) {
                _this.isAlretsEmpty = false;
                return;
            }
            _this.uid = user1.uid;
            var url = " https://afternoon-mountain-15657.herokuapp.com/api/getAlerts";
            var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            header.append('Content-Type', 'application/json');
            _this.http.post(url, { "UserUid": user1.uid }, { headers: header })
                .toPromise()
                .then(function (data1) {
                if (_this.isEmpty(data1.json())) {
                    _this.isAlretsEmpty = false;
                    loading.dismiss();
                    return;
                }
                else {
                    _this.alljsons = data1.json();
                    console.log(_this.alljsons);
                    loading.dismiss();
                }
            })
                .catch(function (err) {
                console.log(err);
                _this.isAlretsEmpty = false;
                loading.dismiss();
                // loading.dismiss()
            });
        });
    }
    AlertsDashboardPage.prototype.ionViewDidLoad = function () {
        this.trackEvent.trackView("Alert Dashboard Page");
    };
    AlertsDashboardPage.prototype.deleteAlert = function (AlertUid, i) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        header.append('Content-Type', 'application/json');
        this.http.post('https://afternoon-mountain-15657.herokuapp.com/api/DeleteAlert', { "_id": AlertUid }, { headers: header })
            .toPromise()
            .then(function (Alert) {
            console.log(Alert);
            _this.alljsons.splice(i, 1);
            if (_this.alljsons.length < 1)
                _this.isAlretsEmpty = false;
        }).catch(function (errFromserver) {
            console.log("error", errFromserver);
        });
    };
    AlertsDashboardPage.prototype.isEmpty = function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };
    AlertsDashboardPage.prototype.goToSetting = function (i) {
        this.navCtrl.push('alert', {
            alertsdashboard: true,
            TOSYMBOL: this.jsons2[i].TOSYMBOL,
            FROMSYMBOL: this.jsons2[i].FROMSYMBOL,
            exchange: this.jsons2[i].Exchange,
            SignToSymbole: this.jsons2[i].SignToSymbole,
            jsons2: this.jsons2[i]
        });
    };
    AlertsDashboardPage.prototype.goToSetting2 = function (i) {
        this.navCtrl.push('alert', {
            alertsdashboard: true,
            TOSYMBOL: this.jsons[i].TOSYMBOL,
            FROMSYMBOL: this.jsons[i].FROMSYMBOL,
            exchange: this.jsons[i].Exchange,
            SignToSymbole: this.jsons[i].SignToSymbole,
            jsons2: this.jsons[i]
        });
    };
    AlertsDashboardPage.prototype.addAlert = function () {
        if (this.uid != undefined) {
            if (this.alljsons.length < 4 || this.authData.user.state == "approved")
                this.navCtrl.push("list-pairs", { isAlerts: true });
            else
                this.navCtrl.push("vip");
        }
        else
            this.app.getRootNav().setRoot("connection");
    };
    AlertsDashboardPage.prototype.shows = function (alert) {
        console.log(alert);
        console.log("aaaaaaaa");
    };
    AlertsDashboardPage.prototype.goEdit = function () {
        if (this.edit) {
            this.icon = "md-create";
            this.edit = false;
        }
        else {
            this.icon = "md-checkmark";
            this.edit = true;
        }
    };
    AlertsDashboardPage.prototype.clicktoggle = function (type, item_id, index) {
        console.log(type, item_id, index);
        this.alljsons[index].isAppend = type;
        console.log(this.alljsons);
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        header.append('Content-Type', 'application/json');
        this.http.post('https://afternoon-mountain-15657.herokuapp.com/api/upsetAlert', { "type": type, _id: item_id }, { headers: header }).toPromise()
            .then(function (Alert) {
            console.log(Alert);
        });
    };
    AlertsDashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-alerts-dashboard',template:/*ion-inline-start:"C:\Users\user\Desktop\interactive-crpto-v2\src\pages\alerts-dashboard\alerts-dashboard.html"*/'<ion-header id="header" hideBackButton="false" mode="md">\n  <ion-navbar mode="md">\n     \n      <ion-title mode="md">\n          <ion-icon style="float: left;" *ngIf="isAlretsEmpty" (click)="goEdit()" name={{icon}}></ion-icon>\n          Alerts\n          <ion-icon (click)="addAlert()" mode="md" style="    float: right;\n          font-size: 150%;\n          font-weight: 700;\n          color: #e2b000;" name="md-add"></ion-icon>\n      </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content *ngIf="isAlretsEmpty" style="background: #2b2b2b;">\n<!-- \n  <ion-grid *ngFor="let alert of jsons2; let i = index">\n    <ion-row style="border: solid 1px gray;\n    \n    color: #ffffff;\n    background: #2b2b2b;\n    font-size: 130%;">\n      <ion-col>\n        <ion-row>\n          <div> <div style="display: -webkit-inline-box;" *ngIf="alert.Below != 0">{{alert.Below}}<b> {{alert.SignToSymbole}}</b>\n            <ion-icon style="padding: 5px;\n            padding-top: 0;\n            padding-bottom: 0;" name="ios-arrow-back"></ion-icon></div>\n            <b style="font-size: 120%;font-weight:700;">{{alert.FROMSYMBOL}}</b> <div style="display: -webkit-inline-box;" *ngIf="alert.Above != 100000000">\n            <ion-icon style="padding: 5px;\n             padding-top: 0;\n             padding-bottom: 0;" name="ios-arrow-back"></ion-icon> {{alert.Above}}<b> {{alert.SignToSymbole}}</b></div></div>\n        </ion-row>\n        <ion-row>\n          <div style="font-size: 140%;font-weight:700;" *ngIf="alert.Exchange!=\'undefined\'">{{alert.Exchange}}</div>\n        </ion-row>\n        <ion-row *ngIf="alert.Persistent">{{ \'Persistent\' | translate }}</ion-row>\n        <ion-row  *ngIf="!alert.Persistent">{{ \'OneTime\' | translate }}</ion-row>\n      </ion-col>\n      <ion-col style="max-width: 55px;background:#f5f6f6 ">\n      \n       \n     \n      <div (click)="goToSetting(i)" style="text-align:center; color: #e2b000;\n      font-size: 135%; "> <ion-icon name="md-settings"></ion-icon></div>\n         \n      \n        \n      <div   style="text-align:center;\n      font-size: 135%; "><ion-icon name="md-remove"></ion-icon></div> \n        <div  (click)="deletealert(alert._id)" style="text-align:center; color: #e2b000;\n        font-size: 135%; ">\n          <ion-icon name="md-trash"></ion-icon>\n        </div> \n\n      </ion-col>\n    </ion-row>\n    <div style="padding-top:5px;"></div>\n  </ion-grid>\n  <ion-grid *ngFor="let alert of jsons; let i = index">\n    <ion-row style="border: solid 1px gray;\n    background: #1A2020;\n    opacity: 0.5;\n    color: #4e4143;\n    opacity: 0.5;\n    font-size: 130%;">\n      <ion-col>\n        <ion-row>\n          <div><div style="display: -webkit-inline-box;" *ngIf="alert.Below != 0">{{alert.Below}} <b>{{alert.SignToSymbole}}</b>\n            <ion-icon style="padding: 5px;\n            padding-top: 0;\n            padding-bottom: 0;" name="ios-arrow-back"></ion-icon></div>\n            <b (click)="shows(\'avi\')" style="font-size: 120%;font-weight:700;">{{alert.FROMSYMBOL}} </b> <div style="display: -webkit-inline-box;" *ngIf="alert.Above != 100000000">\n              <ion-icon style="padding: 5px;\n               padding-top: 0;\n               padding-bottom: 0;" name="ios-arrow-back"></ion-icon> {{alert.Above}}<b> {{alert.SignToSymbole}}</b></div></div>\n          </ion-row>\n        <ion-row>\n          <div style="font-size: 140%;font-weight:700;" *ngIf="alert.Exchange!=\'undefined\'">{{alert.Exchange}}</div>\n        </ion-row>\n        <ion-row *ngIf="alert.Persistent">{{ \'Persistent\' | translate }}</ion-row>\n        <ion-row *ngIf="!alert.Persistent">{{ \'OneTime\' | translate }}</ion-row>\n      </ion-col>\n      <ion-col style="max-width: 55px;background:#1A2020 ">\n        \n         \n       \n        <div  style="text-align:center; color: #4e4143;\n        font-size: 135%; "> <ion-icon name="md-settings"></ion-icon></div>\n           \n        \n          \n        <div   style="text-align:center;\n        font-size: 135%; "><ion-icon name="md-remove"></ion-icon></div> \n          <div   style="text-align:center; color: #4e4143;\n          font-size: 135%; ">\n            <ion-icon name="md-trash"></ion-icon>\n          </div> \n  \n        </ion-col>\n      <ion-icon (click)="goToSetting2(i)" style="\n      position: absolute;\n      color: #ffffff;\n      left:30%;\n      margin-top: 5%;\n      font-size: 300%;" name="md-settings"></ion-icon>\n      <ion-icon (click)="deletealert(alert._id)" style="\n      position: absolute;\n      color: #ffffff;\n      left: 57%;\n      margin-top: 5%;\n      \n      font-size: 300%;" name="md-trash"></ion-icon>\n    </ion-row>\n\n    <div style="padding-top:5px;"></div>\n  </ion-grid> -->\n  <ion-grid style="padding: 0;">\n      <ion-row *ngFor="let item of alljsons;let i=index"\n       style="border-bottom: 2px solid #4a4a4a;background: #2b2b2b;color: #ffffff; height: 80px;font-size: 18px;">\n  \n        <ion-col col-10 [style.color]="item.isAppend ? \'#707070\':\'#ffffff\'">\n            <ion-row style="height:  20px;"></ion-row>\n                    <ion-row  >\n            <div *ngIf="item.Below">{{item.Below}} &nbsp;\n              < &nbsp;&nbsp;\n            </div>\n            <div>{{item.FROMSYMBOL}}/{{item.TOSYMBOL}} &nbsp;\n              < &nbsp;</div>\n            <div *ngIf="item.Above != 100000000">{{item.Above}} </div>\n          </ion-row>\n          <ion-row style="height:  20px;">{{item?.date}}</ion-row>\n\n        </ion-col>\n        <ion-col *ngIf="!edit"   style="text-align: -webkit-right;" >\n  \n          <ion-toggle mode="md"  style="background-color:#2b2b2b;position: absolute;    top: 20px;right: 0;" color="secondary" (ionChange)="clicktoggle(!$event.checked,item._id,i)"  [checked]="!item.isAppend"></ion-toggle>\n        </ion-col>\n       <ion-col *ngIf="edit" (click)="deleteAlert(item._id,i)" style="text-align: -webkit-right;">\n            <ion-icon name="ios-trash-outline" style="background-color:#2b2b2b;color:white;margin-top: 20px;font-size: 29px" ></ion-icon>\n        </ion-col> \n      </ion-row>\n\n      <div *ngIf="!edit" style="text-align: center;color: #9b9b9b;" (click)="addAlert()">\n          <div  style="font-size: 24px;">  <ion-icon name="md-add-circle"></ion-icon></div>\n          <div>  {{\'Add Alert\'|translate}}</div>\n      </div>\n    </ion-grid>\n</ion-content>\n<ion-content *ngIf="!isAlretsEmpty" style="background: #2b2b2b;" padding>\n  <div style="text-align: center;color:#9b9b9b;margin-top: 30%;margin-bottom: 10%;font-size: 14px;">No Alerts    </div>\n    <div  style="text-align: center;color:#f6ae22;margin-top: 30px;font-size: 18px;">BE IN THE KNOW\n\n      </div>\n      <div style="text-align: center;color:#ffffff;margin-top: 10px;font-size: 12px;">Create custom alerts for your holdings</div>\n     <div style="text-align: center;    margin-bottom: -13px;">\n        <img height="250" src="assets/imgs/alerts_empty.png">\n      </div>\n      <div> \n      <button (click)="addAlert()" style="background: #ffc046;color:#4a4a4a;width: 80%;margin-left: 10%;height: 35px;text-align: center;font-weight: 600;">  <ion-icon name="notifications"></ion-icon>  Add Your First Alert</button></div>\n</ion-content>'/*ion-inline-end:"C:\Users\user\Desktop\interactive-crpto-v2\src\pages\alerts-dashboard\alerts-dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_track_event_track_event__["a" /* TrackEventProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_data_auth_data__["a" /* AuthDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], AlertsDashboardPage);
    return AlertsDashboardPage;
}());

//# sourceMappingURL=alerts-dashboard.js.map

/***/ })

});
//# sourceMappingURL=31.js.map