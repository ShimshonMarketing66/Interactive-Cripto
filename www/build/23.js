webpackJsonp([23],{

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPageModule", function() { return NewsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NewsPageModule = /** @class */ (function () {
    function NewsPageModule() {
    }
    NewsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__news__["a" /* NewsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__news__["a" /* NewsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], NewsPageModule);
    return NewsPageModule;
}());

//# sourceMappingURL=news.module.js.map

/***/ }),

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
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




var NewsPage = /** @class */ (function () {
    function NewsPage(navCtrl, loadingCtrl, http, trackEvent, navParams, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.trackEvent = trackEvent;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.NEWS = "NEWS";
        this.ACADEMY = "ACADEMY";
        this.REVIEWS = "REVIEWS";
        this.WALLET = "WALLET";
        this.BROKER = "BROKER";
        this.selectedSegment = this.NEWS;
        this.isOnLastPages = false;
        this.searchLabel = "";
        this.classes = [];
        this.baseUrl = "http://afternoon-mountain-15657.herokuapp.com/cryptoReview";
        this.slides = [this.NEWS, this.ACADEMY, this.REVIEWS, this.WALLET, this.BROKER];
        //call all 
        this.getClasses();
        this.getallcryptoreview();
        this.getallwallet();
        this.getallbroker();
        //news strat
        this.language = this.navParams.get("language");
        if (typeof (this.navParams.get("pageNum")) == "undefined") {
            this.pageNum = 1;
        }
        else {
            this.pageNum = this.navParams.get("pageNum");
        }
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
        if (this.language == "fr") {
            this.url = "http://afternoon-mountain-15657.herokuapp.com/getNews/FR/" + this.pageNum;
            this.label = "Lire l'article";
        }
        else {
            this.url = "https://afternoon-mountain-15657.herokuapp.com/getNews/EN/" + this.pageNum;
            this.label = "Continue to read";
        }
        var url2 = "https://afternoon-mountain-15657.herokuapp.com/AllNews/" + this.language;
        this.http.get(this.url).toPromise().then(function (data) {
            _this.newsToSearch = data.json();
        });
        this.http.get(this.url)
            .toPromise()
            .then(function (data) {
            _this.News = data.json();
            _this.addvip(_this.News);
            _this.NewsTmp = _this.News;
            _this.loading.dismiss();
        }).catch(function (error) { return console.log(error); });
        this.http.get("https://afternoon-mountain-15657.herokuapp.com/getNumOfNews/" + this.language)
            .toPromise()
            .then(function (numOfPage) {
            _this.NumOfPages = numOfPage.json();
            if (_this.pageNum == 1) {
                _this.numPage1background = "#dedede";
                _this.numPage1 = 1;
                _this.numPage2 = 2;
                _this.numPage3 = 3;
            }
            else if (_this.pageNum == _this.NumOfPages) {
                console.log("this.pageNum == this.NumOfPages");
                _this.numPage3background = "#dedede";
                _this.numPage1 = _this.NumOfPages - 2;
                _this.numPage2 = _this.NumOfPages - 1;
                _this.numPage3 = _this.NumOfPages;
                _this.isOnLastPages = true;
            }
            else if (_this.pageNum + 1 == _this.NumOfPages) {
                _this.numPage2background = "#dedede";
                _this.isOnLastPages = true;
                _this.numPage1 = _this.pageNum - 1;
                _this.numPage2 = _this.pageNum;
                _this.numPage3 = _this.pageNum + 1;
            }
            else {
                _this.numPage2background = "#dedede";
                _this.numPage1 = _this.pageNum - 1;
                _this.numPage2 = _this.pageNum;
                _this.numPage3 = _this.pageNum + 1;
            }
        }).catch(function (error) { return console.log(error); });
    }
    NewsPage_1 = NewsPage;
    NewsPage.prototype.ionViewDidLoad = function () {
        console.log("news page");
        this.trackEvent.trackView("news");
    };
    NewsPage.prototype.readMore = function (i) {
        console.log(i);
        this.navCtrl.push("read-review", {
            Article: this.News[i],
            language: this.language
        });
    };
    NewsPage.prototype.getItems = function (ev) {
        var val = (ev.target.value);
        if (val.length < 4 && this.searchLabel) {
        }
        else {
            this.News = this.newsToSearch.filter(function (item) {
                return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        this.searchLabel = val;
    };
    NewsPage.prototype.changePage = function (num) {
        if (num == this.pageNum || num == 0)
            return;
        console.log(num);
        this.navCtrl.setRoot(NewsPage_1, {
            language: this.language,
            pageNum: num
        });
    };
    //news end
    //education start
    NewsPage.prototype.goToClass = function (num) {
        this.navCtrl.push("class", { classNum: num, language: this.language });
    };
    NewsPage.prototype.getClasses = function () {
        this.classes.push({
            classNum: 1,
            background: '#f6f2e6',
            texts: [
                'What You Need To Know About Cryptocurrency',
                'What Determines the Value of Cryptocurrency?'
            ]
        });
        this.classes.push({
            classNum: 2,
            background: '#dce2e2',
            texts: [
                'What Is Mining?',
                'Where Do Bitcoins Come From?',
                'Why Are Bitcoins Mined?',
                'How Are Bitcoins Mined?'
            ]
        });
        this.classes.push({
            classNum: 3,
            background: '#ecedef',
            texts: [
                'Choose Your Cryptocurrency and Exchange',
                'Choose Your Cryptocurrency',
                'Choose Your Exchange'
            ]
        });
        this.classes.push({
            classNum: 4,
            background: '#d9d9db',
            texts: [
                'Crypto Merchants',
                'Bitcoin-Friendly Popular Merchants',
                'Ethereum-Happy Companies',
                'Litecoin Hungry Enterprises'
            ]
        });
        this.classes.push({
            classNum: 5,
            background: '#eee3e1',
            texts: [
                'Best Places To Buy Cryptocurrency',
                'BTCC and BTCChina',
                'Markets.com',
                'Plus500',
            ]
        });
        this.classes.push({
            classNum: 6,
            background: '#cfdfd4',
            texts: [
                'The Best Cryptocurrencies Today',
                'Ethereum Classic',
                'Digital Currencies vs Tokens'
            ]
        });
        this.classes.push({
            classNum: 7,
            background: '#cab3e2',
            texts: [
                'How To Stay Updated: Cryptocurrency Resources'
            ]
        });
        this.classes.push({
            classNum: 8,
            background: '#e1eff0',
            texts: [
                'Regulation of Cryptocurrency',
                'Regulation Which Countries Are Doing It?'
            ]
        });
        this.classes.push({
            classNum: 9,
            background: '#eae2ed',
            texts: [
                'How To Keep Your Cryptocurrency Safe'
            ]
        });
        this.classes.push({
            classNum: 10,
            background: '#f4eeee',
            texts: [
                'Past Abuse',
                'Future Prediction',
                'Future Predictions'
            ]
        });
        this.classes[2]["isvip"] = true;
        this.classes[7]["isvip"] = true;
    };
    //education end
    //crptoreview start
    NewsPage.prototype.getallcryptoreview = function () {
        var _this = this;
        this.http.get(this.baseUrl)
            .toPromise()
            .then(function (Response) {
            _this.cryptoreviews = Response.json();
            console.log(_this.cryptoreviews);
            _this.addvip(_this.cryptoreviews);
        });
    };
    NewsPage.prototype.gotovip = function () {
        this.navCtrl.push("vip");
    };
    NewsPage.prototype.gotoReview = function (item) {
        this.navCtrl.push("crypto-review-read-more", {
            cryptoPage: this.cryptoreviews[item],
            language: this.language
        });
    };
    //crptoreview end
    //wallet start
    NewsPage.prototype.getallwallet = function () {
        var _this = this;
        this.url = "http://afternoon-mountain-15657.herokuapp.com/wallet";
        this.http.get(this.url)
            .toPromise()
            .then(function (Response) {
            _this.items = Response.json();
            _this.addvip(_this.items);
        });
    };
    NewsPage.prototype.walletreadreview = function (item) {
        console.log(this.language);
        this.navCtrl.push('wallet-read-review', {
            pagename: item,
            language: this.language
        });
    };
    //wallet end
    //broker start
    NewsPage.prototype.getallbroker = function () {
        var _this = this;
        this.http.get("http://afternoon-mountain-15657.herokuapp.com/NewBrokersEN")
            .toPromise()
            .then(function (Response) {
            console.log(Response, "broker");
            _this.brokers = Response.json();
            _this.addvip(_this.brokers);
        })
            .catch(function (error) { return console.log('an error was happen with the response of the the server'); });
    };
    NewsPage.prototype.readReview = function (pagename, language, link) {
        this.navCtrl.push("brokers-read-review", { language: language, pagename: pagename, link: link });
    };
    //broker end
    NewsPage.prototype.onSlideChanged = function (slider) {
        console.log(slider);
        if (slider.getActiveIndex() == 5)
            return;
        var currentSlide = this.slides[slider.getActiveIndex()];
        if (currentSlide == undefined)
            return;
        var prevIndex = this.slides.indexOf(this.selectedSegment);
        this.changeSegment(currentSlide);
    };
    NewsPage.prototype.changeSegment = function (segment) {
        this.selectedSegment = segment;
        console.log('changeSegment', segment, this.selectedSegment);
        var selectedIndex = this.slides.findIndex(function (slide) {
            return slide === segment;
        });
        this.slider.slideTo(selectedIndex);
        this.trackEvent.trackView("news " + segment);
    };
    NewsPage.prototype.addvip = function (array) {
        for (var index = 0; index < array.length; index++) {
            var a = parseInt(((index % 6).toString()));
            if (a > 4)
                array[index].isvip = true;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('mySlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Slides */])
    ], NewsPage.prototype, "slider", void 0);
    NewsPage = NewsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-news',template:/*ion-inline-start:"C:\Users\user\Desktop\interactive-crpto-v2\src\pages\news\news.html"*/'<!-- <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Quicksand" /> -->\n<!-- <style>\n  @import url(\'https://fonts.googleapis.com/css?family=Quicksand\');\n</style> -->\n<ion-header id="header">\n  <ion-navbar>\n\n    <ion-title>\n      News\n    </ion-title>\n  </ion-navbar>\n  <div style="background: #2b2b2b;position: sticky;top: 0;z-index: 999;">\n\n\n    <div>\n      <ion-grid>\n        <ion-row style="white-space: nowrap;display: -webkit-inline-box;" \n        [ngStyle]="selectedSegment == \'REVIEWS\' && {\'margin-left\': \'-30px\'} || selectedSegment == \'WALLET\'   && {\'margin-left\': \'-135px\'}  || selectedSegment == \'BROKER\'   && {\'margin-left\': \'-135px\'}" >\n          <ion-col class="segments" (click)="changeSegment(NEWS)" [ngStyle]="selectedSegment == \'NEWS\' && {\'border-bottom\': \'1px solid #ffc046\'}">NEWS</ion-col>\n          <ion-col class="segments" (click)="changeSegment(ACADEMY)" [ngStyle]="selectedSegment == \'ACADEMY\' && {\'border-bottom\': \'1px solid #ffc046\'}">ACADEMY</ion-col>\n          <ion-col class="segments" (click)="changeSegment(REVIEWS)" [ngStyle]="selectedSegment == \'REVIEWS\' && {\'border-bottom\': \'1px solid #ffc046\'}">REVIEWS</ion-col>\n          <ion-col class="segments" (click)="changeSegment(WALLET)" [ngStyle]="selectedSegment == \'WALLET\' && {\'border-bottom\': \'1px solid #ffc046\'}">WALLET</ion-col>\n          <ion-col class="segments" (click)="changeSegment(BROKER)" [ngStyle]="selectedSegment == \'BROKER\' && {\'border-bottom\': \'1px solid #ffc046\'}">BROKER</ion-col>\n\n\n\n        </ion-row>\n      </ion-grid>\n\n    </div>\n\n  </div>\n</ion-header>\n\n<ion-content style="background: #2b2b2b;">\n\n  <ion-slides (ionSlideDidChange)="onSlideChanged($event)" #mySlider  style="background: #2b2b2b;color:white;">\n    <ion-slide>\n      <div style="background: #2b2b2b;padding: 5px;">\n\n        <!-- <div class="titlecolumn"> -->\n        <!-- <ion-icon name="ios-paper-outline" style="color: gray;font-size: 3.2em;"></ion-icon>\n    <div class="title2">{{ \'NEWS\' | translate }}</div>\n    -->\n        <!-- <span class=sexy_line></span>\n    <div>\n      <ion-searchbar id="searchBar" mode="md"  style="display: none" [(ngModel)]="myInput" (ionInput)="getItems(myInput)">\n\n      </ion-searchbar>\n    </div>\n    <div style="margin-bottom:-26px"></div>\n -->\n\n\n        <!-- <div *ngFor="let new of News let i = index" class="formA">\n      \n      <div style="max-height: 82px;">\n        <img class="newsimg" (click)="readMore(i)" src={{new.Img}}>\n        <div class="datestyle">{{new.Date}}</div><br>\n        <div class="title1" (click)="readMore(i)">{{new.title}}</div>\n        <ion-grid style="padding:0"><ion-row style="padding:0">\n          <ion-col style="padding:0" >\n              <ion-icon style="height: 15px;color: #e2b000; " name="md-chatboxes"></ion-icon> \n              <ion-icon style=" height: 15px;margin-left: 5%;color: #e2b000; " name="md-share"></ion-icon><b style="margin-left: 5%;">{{new.sharecounter}}</b>\n              <ion-icon style=" height: 15px;margin-left: 5%;color: #e2b000; " name="md-eye"></ion-icon> <b style="margin-left: 2%;">{{new.viewcounter}}</b>\n          </ion-col>\n          <ion-col style="padding:0" ><div (tap)="readMore(i)" class="ContinueToRead" style="background-color:inherit;float: right;padding-right: 2%;display: -webkit-inline-box;">{{label}}\n              <img alt="4" height="10" id="ContinueArrow" src="assets/img/11.png">\n            </div> </ion-col\n          ></ion-row></ion-grid>\n        \n          </div>\n      </div> -->\n        <div *ngFor="let new of News let i = index" style="color: #ffffff;font-size: 16px;text-align: start;">\n          <div style="padding-top: 5px;" (click)="readMore(i)">{{new.title}}</div>\n          <div (click)="readMore(i)" style="color:#9b9b9b;padding-bottom: 10px;border-bottom:solid 1px #4a4a4a;">{{new.Date}}</div>\n      <ion-grid>    <ion-row *ngIf="new?.isvip && authData?.user?.state != \'approved\'" (click)="gotovip()" style=" background: linear-gradient(to right,  #ffc046 , #f76b1c);\n        font-size: 14px;"> <ion-col >Upgrade to Premium and enjoy an ad-free experience </ion-col> <ion-col col-3 style=" \n          text-align: center;"> <div style="margin-top: 3px;     padding-top: 4px;    padding-bottom: 2px;   border: solid 2px; border-radius: 3px;">UPGRADE</div>  </ion-col>\n          </ion-row></ion-grid>\n        </div>\n\n        <!-- </div> -->\n        <!-- <div class="pagination">\n    <div class="paginationSon" (tap)="changePage(1)">&laquo;</div>\n    <div class="paginationSon" [ngStyle]="{\'background\': numPage1background}" (tap)="changePage(numPage1)">{{numPage1}}</div>\n    <div class="paginationSon" [ngStyle]="{\'background\': numPage2background}" (tap)="changePage(numPage2)">{{numPage2}}</div>\n    <div class="paginationSon" [ngStyle]="{\'background\': numPage3background}"  (tap)="changePage(numPage3)">{{numPage3}}</div>\n    <div class="paginationSon" *ngIf="!isOnLastPages">...</div>\n    <div class="paginationSon" (tap)="changePage(NumOfPages)"*ngIf="!isOnLastPages">{{NumOfPages}}</div>\n    <div class="paginationSon" (tap)="changePage(pageNum+1)"*ngIf="!isOnLastPages">Next >></div>\n  </div>-->\n      </div>\n\n    </ion-slide>\n    <!-- education -->\n    <ion-slide>\n        <div *ngFor="let new of classes let i = index" \n        style="font-size: 16px;text-align: start;border-bottom: solid 1px #4a4a4a;background: #2b2b2b;color: #ffffff;">\n            <div *ngFor="let ne of new.texts;" style="padding: 7px;"  (click)="goToClass(new.classNum)">{{ne}}</div>\n            <div style="padding-left: 7px;">class {{new.classNum}} </div>\n            <ion-grid>    <ion-row *ngIf="new?.isvip && authData?.user?.state != \'approved\'" (click)="gotovip()" style=" background: linear-gradient(to right,  #ffc046 , #f76b1c);\n              font-size: 14px;"> <ion-col >Upgrade to Premium and enjoy an ad-free experience </ion-col> <ion-col col-3 style=" \n              text-align: center;"> <div style="margin-top: 3px;     padding-top: 4px;    padding-bottom: 2px;   border: solid 2px; border-radius: 3px;">UPGRADE</div>  </ion-col>\n              </ion-row></ion-grid>\n          </div>\n      \n    </ion-slide>\n    <ion-slide>\n      <ion-grid *ngFor="let item of cryptoreviews; let i = index;" style="background: #2b2b2b;border-bottom: solid 1px #4a4a4a;" >\n        <ion-row (click)="gotoReview(i)" style="height:50px;color: #ffffff;text-align: center;">\n        <ion-col col-2>\n            <img  [src]=\'item.Img\' style="height:35px;">\n\n        </ion-col>\n        <ion-col style="text-align: start;padding-left: 5px;padding-top: 12px;">\n            {{item.name}}\n        </ion-col>\n        <ion-col col-3 style="color: #ffc046;border:solid 1px#ffc046;padding: 5px;margin-top: 7px;\n        height: 35px; ">  REVIEW\n        </ion-col></ion-row>\n           <ion-row *ngIf="item?.isvip && authData?.user?.state != \'approved\'" (click)="gotovip()" style=" background: linear-gradient(to right,  #ffc046 , #f76b1c);\n           font-size: 14px;"> <ion-col >Upgrade to Premium and enjoy an ad-free experience </ion-col> <ion-col col-3 style=" \n          text-align: center;"> <div style="margin-top: 3px;     padding-top: 4px;    padding-bottom: 2px;   border: solid 2px; border-radius: 3px;">UPGRADE</div>  </ion-col>\n          </ion-row>\n      </ion-grid>\n     \n    </ion-slide>\n    <ion-slide>\n      <ion-grid style="margin-top: 15px;">\n\n\n        <ion-row *ngFor="let item of items; let i = index">\n          <ion-col col-3 style="    margin-top: 10px;text-align: center">\n            <img style="height: 40px;" src="{{item.img}}">\n          </ion-col>\n          <ion-col style="text-align: left;    margin-top: 20px;">\n            {{item.name}}\n          </ion-col>\n          <ion-col  col-4>\n            <ion-row>    <ion-col (click)="walletreadreview(item.name)" style="color: #ffc046;padding: 5px;height: 30px;border: solid 1px  #ffc046;margin-top: 5px;"> REVIEW</ion-col>\n            </ion-row>\n            <ion-row>    <ion-col style="background: #ffc046;padding: 5px;height: 30px;margin-top: 5px;        "> <a style="color: #4a4a4a;" href="{{item.link}}">VISIT SITE</a></ion-col>\n            </ion-row>\n           </ion-col>\n\n        </ion-row>\n\n\n      </ion-grid>\n    </ion-slide>\n  <ion-slide >\n<ion-grid *ngFor="let brok of brokers; let i = index"    \n style="font-size: 16px;text-align: center;border-bottom: solid 1px #4a4a4a;background: #2b2b2b;color: #ffffff;">\n  <ion-row >\n      <ion-col>          <img src="{{brok.img}}" style="height: 40px;">\n      </ion-col>\n    <ion-col>{{brok.name}}</ion-col>\n    <ion-col>\n       <ion-row>    <ion-col (click)="readReview(brok.name,\'EN\',brok.link)" style="color: #ffc046;padding: 5px;height: 35px;border: solid 1px  #ffc046;"> REVIEW</ion-col>\n       </ion-row>\n       <ion-row>    <ion-col style="background: #ffc046;padding: 5px;height: 30px;        "> <a style="color: #4a4a4a;" href="{{brok.link}}">VISIT SITE</a></ion-col>\n       </ion-row>\n      </ion-col>\n\n  </ion-row>\n</ion-grid>  </ion-slide>\n  </ion-slides>\n</ion-content>'/*ion-inline-end:"C:\Users\user\Desktop\interactive-crpto-v2\src\pages\news\news.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_track_event_track_event__["a" /* TrackEventProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */]])
    ], NewsPage);
    return NewsPage;
    var NewsPage_1;
}());

//# sourceMappingURL=news.js.map

/***/ })

});
//# sourceMappingURL=23.js.map