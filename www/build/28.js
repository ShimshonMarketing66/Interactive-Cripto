webpackJsonp([28],{

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassPageModule", function() { return ClassPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__class__ = __webpack_require__(585);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ClassPageModule = /** @class */ (function () {
    function ClassPageModule() {
    }
    ClassPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__class__["a" /* ClassPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__class__["a" /* ClassPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], ClassPageModule);
    return ClassPageModule;
}());

//# sourceMappingURL=class.module.js.map

/***/ }),

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_education_review_service__ = __webpack_require__(310);
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




var ClassPage = /** @class */ (function () {
    function ClassPage(navCtrl, navParams, educationReviewService, appCtrl, trackEvent, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.educationReviewService = educationReviewService;
        this.appCtrl = appCtrl;
        this.trackEvent = trackEvent;
        this.viewCtrl = viewCtrl;
        this.language = this.navParams.get("language");
        console.log(this.language);
        this.num1 = this.navParams.get("classNum");
        this.quiznum = 1;
    }
    ClassPage_1 = ClassPage;
    ClassPage.prototype.ionViewDidEnter = function () {
        console.log("classPage ionViewDidLoad");
        document.getElementById("blog").innerHTML = this.educationReviewService.getClassReview(this.num1, this.language);
        this.trackEvent.trackView("classPage");
    };
    ClassPage.prototype.ionViewWillLeave = function () {
    };
    ClassPage.prototype.goToQuizz = function (num) {
        if (num < 13) {
            num = num + 1;
        }
        else {
            num = 1;
        }
        this.navCtrl.pop({ animate: false });
        this.navCtrl.push(ClassPage_1, { classNum: num, language: this.language });
    };
    ClassPage.prototype.goToqusten = function (num, quiznum) {
        console.log(quiznum);
        this.navCtrl.pop({ animate: false });
        this.navCtrl.push("questionsPage", { ClassNum: num, quiznum: quiznum, language: this.language });
    };
    ClassPage = ClassPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-class',template:/*ion-inline-start:"C:\Users\user\Desktop\interactive-crpto-v2\src\pages\class\class.html"*/'<ion-header hideBackButton="false" >\n        <ion-navbar>\n          \n         <ion-title>\n           Academy\n         </ion-title>\n        </ion-navbar>\n      </ion-header>\n      \n<ion-content style="background: #2b2b2b;color:white;">\n    <div class="titlecolumn1">\n    <div class="titleText">{{ \'Class\' | translate }}# {{num1}}</div>\n  </div>\n \n  <!-- <ion-icon style="font-size: 2.2em;" name="ios-arrow-back" (click)="back()">Back</ion-icon> -->\n      <div class="blogcss" style="padding: 5%" id="blog" ></div>\n      <button class="questions-link myBtn" *ngIf="num1!=13" style="margin-bottom: 5%;" (click)="goToQuizz(num1)" >\n        <div class="NextClassLabel">{{ \'NextClass\' | translate }}  ! </div>\n         <!-- <img class="imgbutton" src="img/11.png">   -->\n      </button>\n      <button style="opacity:0;" class="quizbutton myBtn" (click)="goToqusten(num1,quiznum)">\n            <div class="startquiz"> Start Quiz</div>\n      </button>\n   \n</ion-content>\n'/*ion-inline-end:"C:\Users\user\Desktop\interactive-crpto-v2\src\pages\class\class.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_education_review_service__["a" /* EducationReviewService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_3__providers_track_event_track_event__["a" /* TrackEventProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */]])
    ], ClassPage);
    return ClassPage;
    var ClassPage_1;
}());

//# sourceMappingURL=class.js.map

/***/ })

});
//# sourceMappingURL=28.js.map