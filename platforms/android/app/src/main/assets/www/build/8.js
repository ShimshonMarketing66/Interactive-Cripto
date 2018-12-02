webpackJsonp([8],{

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__read_review__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__read_review__["a" /* ReadReviewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__read_review__["a" /* ReadReviewPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());

//# sourceMappingURL=read-review.module.js.map

/***/ }),

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_profile_model__ = __webpack_require__(301);
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







var LoginPage = /** @class */ (function () {
    function LoginPage(app, splashscreen, navCtrl, trackEvent, alertCtrl, loadingCtrl, profile, authdata, navParams) {
        this.app = app;
        this.splashscreen = splashscreen;
        this.navCtrl = navCtrl;
        this.trackEvent = trackEvent;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.profile = profile;
        this.authdata = authdata;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
        this.trackEvent.trackView("LoginPage");
    };
    LoginPage.prototype.loginViaProvider = function (m_provider) {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.authdata.loginUserWithProvider(m_provider)
            .then(function (profile) {
            console.log("back", profile);
            loading.dismiss();
            if (profile.is_phone_number_verified) {
                console.log("a");
                _this.splashscreen.show();
                _this.app.getRootNavs()[0].setRoot(__WEBPACK_IMPORTED_MODULE_5__app_app_component__["a" /* MyApp */]).then(function () {
                    window.location.reload();
                });
            }
            else {
                console.log("b");
                _this.app.getActiveNav().push("phone-number-verified");
            }
        })
            .catch(function (err) {
            var alert = _this.alertCtrl.create({
                message: "Try Again",
                buttons: [
                    {
                        text: "Ok",
                        role: 'cancel'
                    }
                ]
            });
            loading.dismiss();
            alert.present();
        });
    };
    LoginPage.prototype.loginViaEmail = function () {
        var _this = this;
        console.log(this.email, this.password);
        this.error = "";
        if (this.email == null && this.password == null) {
            this.error = "please enter correct email ans password";
            return;
        }
        this.authdata.loginUserViaEmail(this.email, this.password).then(function () {
            _this.splashscreen.show();
            _this.app.getRootNavs()[0].setRoot(__WEBPACK_IMPORTED_MODULE_5__app_app_component__["a" /* MyApp */]).then(function () {
                window.location.reload();
            });
        }).catch(function (err) {
            console.log(err.message);
            var alert = _this.alertCtrl.create({
                message: err.message,
                buttons: [
                    {
                        text: "Ok",
                        role: 'cancel'
                    }
                ]
            });
            alert.present();
        });
    };
    LoginPage.prototype.gotoForgotpassword = function () {
        this.app.getRootNav().push("forgot-password");
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\user\Desktop\interactive-crpto-v2\src\pages\login\login.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding  style="background:#2b2b2b;">\n  \n  <div style="text-align: center;font-size: 16pt;color: white;padding-top: 4px;"> {{ \'LOGIN\' | translate }}</div>\n  \n  <button (click)="loginViaProvider(\'facebook\')" class="Facebookbutton" ion-button>\n    <ion-icon class="facebookicon" ios="logo-facebook" md="logo-facebook"></ion-icon> Facebook</button>\n  <button (click)="loginViaProvider(\'google\')" class="Googlebutton" ion-button>\n    <ion-icon class="googleicon" name="logo-googleplus"></ion-icon> Google</button>\n  <div style="color: white;text-align: center;margin-top: 15px"> ----------------- {{ \'OR\' | translate }} ----------------- </div>\n  <ion-item>\n    <ion-label  stacked>{{ \'Email\' | translate }}</ion-label>\n    <ion-input type="email" style="color:white" [(ngModel)]="email" placeholder="{{ \'ENTER EMAIL\' | translate }}"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label  stacked>{{ \'Password\' | translate }}</ion-label>\n    <ion-input type="password" style="color:white" [(ngModel)]="password" placeholder="{{ \'ENTER PASSWORD\' | translate }}"></ion-input>\n  </ion-item>\n\n  <button class="loginbutton" ion-button  (click)="loginViaEmail()">{{ \'LOGIN\' | translate }}</button>\n  <div (click)="gotoForgotpassword()" class="forgotpassword">{{ \'Forgot your password\' | translate }}?</div>\n\n  <div style="text-align: center;color: red;font-size: 14pt;">\n    {{error}}\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\user\Desktop\interactive-crpto-v2\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_track_event_track_event__["a" /* TrackEventProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__models_profile_model__["a" /* Profile */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_data_auth_data__["a" /* AuthDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadReviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_social_data_social_data__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_data_auth_data__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_track_event_track_event__ = __webpack_require__(147);
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




var ReadReviewPage = /** @class */ (function () {
    function ReadReviewPage(navCtrl, navParams, socialSharing, actionSheetCtrl, http, app, socialprovider, AuthData, alertCtrl, 
        // public firebaseAuth: AngularFireAuth,
        loadingConfig, trackEvent) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.socialSharing = socialSharing;
        this.actionSheetCtrl = actionSheetCtrl;
        this.http = http;
        this.app = app;
        this.socialprovider = socialprovider;
        this.AuthData = AuthData;
        this.alertCtrl = alertCtrl;
        this.loadingConfig = loadingConfig;
        this.trackEvent = trackEvent;
        this.GotAllComment = false;
        this.Reply = false;
        this.commentsNumber = 100;
        this.isLike = false;
        this.ImgProfile = "http://xosignals.herokuapp.com/api2/sendImgCountryByName/";
        this.commentText = "";
        this.SubcommentText = "";
        this.EditcommentText = "";
        this.Edit = false;
        this.Commrnt_id = "";
        this.isSubEdit = false;
        this.user = this.AuthData.user;
        if (this.user)
            this.ImgProfile += this.user.countryData.country;
        this.language = (this.navParams.get("language"));
        this.Article = this.navParams.get("Article");
        this.loading = loadingConfig.create({
            content: 'Please wait...'
        });
        this.loading.present();
        if (this.language == "fr") {
            this.label = "Lire l'article";
        }
        else {
            this.label = "Continue to read";
        }
    }
    ReadReviewPage_1 = ReadReviewPage;
    ReadReviewPage.prototype.ionViewDidLoad = function () {
        // this.ga.trackView("News -> " + this.Article.name + " (" + this.language + ")");
        this.updateShareCounter("viewcounter");
        this.commentsNumber += this.Article.userslikes.length;
        if (this.user) {
            for (var i in this.Article.userslikes) {
                if (this.Article.userslikes[i] == this.user)
                    this.isLike = true;
            }
            this.trackEvent.trackView("news read more");
        }
        this.GetAllComment();
    };
    ReadReviewPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.http.get("https://afternoon-mountain-15657.herokuapp.com/getRandomNews/" + this.language)
            .toPromise()
            .then(function (data) {
            _this.NewsToShow = data.json();
        });
        if (this.language == "FR") {
            document.getElementById("Popularnews").innerText = "A voir aussi :";
        }
        var url = "http://afternoon-mountain-15657.herokuapp.com/news/" + this.Article.name + "/" + this.language;
        this.http.get(url)
            .toPromise()
            .then(function (response) {
            document.getElementById(_this.Article.name).innerHTML = response.text();
            _this.loading.dismiss();
        })
            .catch(function (err) {
            _this.loading.dismiss();
            console.log('error in server');
        });
    };
    ReadReviewPage.prototype.shareViaFacebook = function () {
        var _this = this;
        this.loading = this.loadingConfig.create();
        this.loading.present();
        this.socialSharing.shareViaFacebook(null, null, this.Article.urlShare)
            .then(function () {
            _this.loading.dismiss();
            console.log("Facebook share successful");
        }).catch(function (err) {
            _this.loading.dismiss();
            console.log("An error occurred ", err);
        });
        console.log("Facebook");
        this.updateShareCounter("sharecounter");
    };
    ReadReviewPage.prototype.shareViaWhatsApp = function () {
        var _this = this;
        this.loading = this.loadingConfig.create();
        this.loading.present();
        this.socialSharing.shareViaWhatsApp("interactivecrypto.com", null, this.Article.urlShare)
            .then(function () {
            _this.loading.dismiss();
            console.log("WhatsApp share successful");
        }).catch(function (err) {
            _this.loading.dismiss();
            console.log("An error occurred ", err);
        });
        console.log("What");
        this.updateShareCounter("sharecounter");
    };
    ReadReviewPage.prototype.shareViaAll = function () {
        var _this = this;
        this.loading = this.loadingConfig.create();
        this.loading.present();
        this.socialSharing.share("interactivecrypto.com", null, null, this.Article.urlShare)
            .then(function () {
            _this.updateShareCounter("sharecounter");
            _this.loading.dismiss();
            console.log("All");
        }).catch(function () {
            _this.loading.dismiss();
            console.log("Sharing via All is not possible");
        });
    };
    ReadReviewPage.prototype.updateShareCounter = function (tochange) {
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        header.append('Content-Type', 'application/json');
        this.http.post('https://afternoon-mountain-15657.herokuapp.com/updatecounters', { "_id": this.Article._id, "language": this.language, "tochange": tochange }, { headers: header })
            .toPromise()
            .then(function (data) {
            console.log(data);
        })
            .catch(function (err) {
            console.log("error");
        });
    };
    ReadReviewPage.prototype.readMore = function (New) {
        // this.ga.trackEvent("Click", "readMore News", this.Article.name, 0, false)
        this.navCtrl.push(ReadReviewPage_1, {
            language: this.language,
            Article: New
        });
    };
    ReadReviewPage.prototype.updateLike = function () {
        var type;
        if (!this.user) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
            return;
        }
        else {
            if (this.isLike) {
                for (var i in this.Article.userslikes) {
                    if (this.Article.userslikes[i] == this.user) {
                        type = "unlike";
                        this.isLike = false;
                        this.commentsNumber--;
                        delete this.Article.userslikes[i];
                    }
                }
            }
            else {
                this.commentsNumber++;
                this.isLike = true;
                this.Article.userslikes.push(this.user);
                type = "like";
            }
            var data = {
                userId: this.user,
                articleId: this.Article._id,
                language: this.language.toUpperCase(),
                category: "news",
                type: type
            };
            var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            header.append('Content-Type', 'application/json');
            this.http.post("http://afternoon-mountain-15657.herokuapp.com/setlikes", JSON.stringify(data), { headers: header })
                .toPromise()
                .then(function (data) {
                console.log(data);
            }).catch(function (err) {
                console.log(err);
            });
        }
    };
    ReadReviewPage.prototype.AddComment = function () {
        var _this = this;
        var loading = this.loadingConfig.create();
        loading.present();
        if (this.commentText.length < 3) {
            loading.dismiss();
            var alert_1 = this.alertCtrl.create({
                title: 'Oh oh!',
                subTitle: "Please enter more than 4 letters",
                buttons: ['Ok']
            });
            alert_1.present();
            return;
        }
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        header.append('Content-Type', 'application/json');
        this.http.post("http://afternoon-mountain-15657.herokuapp.com/api/AddComment", { "_id": this.Article._id, "UserUid": this.user, "name": this.user.first_name + " " + this.user.last_name, "photoUrl": this.ImgProfile, "comment": this.commentText }, { headers: header })
            .toPromise()
            .then(function (data) {
            _this.comments.unshift({
                "_id": data.json().ops[0]._id,
                "ArticleId": _this.Article._id,
                "UserUid": _this.user,
                "name": _this.user.first_name + " " + _this.user.last_name,
                "photoUrl": _this.ImgProfile,
                "comment": _this.commentText,
                "subComment": []
            });
            // this.ga.trackEvent("Click", "submit_comment", this.Article.name, 0, false)
            _this.commentText = "";
            loading.dismiss();
        }).catch(function (err) {
            loading.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Sorry!',
                subTitle: "unable to post comment right now - try later ",
                buttons: ['Ok']
            });
            alert.present();
        });
    };
    ReadReviewPage.prototype.DeleteComment = function (Commrnt_id, i) {
        var _this = this;
        var loading = this.loadingConfig.create();
        loading.present();
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        header.append('Content-Type', 'application/json');
        this.http.post("http://afternoon-mountain-15657.herokuapp.com/api/DeleteComment", { "_id": Commrnt_id }, { headers: header })
            .toPromise()
            .then(function (data) {
            _this.comments.splice(i, 1);
            loading.dismiss();
        }).catch(function (err) {
            loading.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Sorry!',
                subTitle: "unable to post comment right now - try later ",
                buttons: ['Ok']
            });
            alert.present();
        });
    };
    ReadReviewPage.prototype.UpdateComment = function (i) {
        var _this = this;
        var loading = this.loadingConfig.create();
        loading.present();
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        header.append('Content-Type', 'application/json');
        this.http.post("http://afternoon-mountain-15657.herokuapp.com/api/UpdateComment", { "_id": this.Commrnt_id, "UserUid": this.user, "comment": this.EditcommentText }, { headers: header })
            .toPromise()
            .then(function (data) {
            loading.dismiss();
            _this.comments[_this.indexToReply].comment = _this.EditcommentText;
            _this.EditcommentText = "";
        }).catch(function (err) {
            loading.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Sorry!',
                subTitle: "unable to post comment right now - try later ",
                buttons: ['Ok']
            });
            alert.present();
        });
    };
    ReadReviewPage.prototype.AddSubComment = function (Commrnt_id, i) {
        var _this = this;
        var loading = this.loadingConfig.create();
        loading.present();
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        header.append('Content-Type', 'application/json');
        this.http.post("http://afternoon-mountain-15657.herokuapp.com/api/AddSubComment", { "_id": Commrnt_id, "UserUid": this.user, "name": this.user.first_name + " " + this.user.last_name, "photoUrl": this.ImgProfile, "comment": this.SubcommentText }, { headers: header })
            .toPromise()
            .then(function (data) {
            loading.dismiss();
            console.log(data);
            _this.comments[i].subComment.push({
                "_id": Commrnt_id,
                "UserUid": _this.user,
                "name": _this.user.first_name + " " + _this.user.last_name,
                "photoUrl": _this.ImgProfile,
                "comment": _this.SubcommentText
            });
            // this.ga.trackEvent("Click", "submit_sub_comment", this.Article.name, 0, false)
            _this.Edit = false;
            _this.Reply = false;
            _this.SubcommentText = "";
        }).catch(function (err) {
            console.log(err);
            loading.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Sorry!',
                subTitle: "unable to post comment right now - try later ",
                buttons: ['Ok']
            });
            alert.present();
        });
    };
    ReadReviewPage.prototype.deleteSubComment = function (Commrnt_id, SubcommentID, i) {
        var _this = this;
        var loading = this.loadingConfig.create();
        loading.present();
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        header.append('Content-Type', 'application/json');
        this.http.post("http://afternoon-mountain-15657.herokuapp.com/api/DeleteSubComment", { "SubcommentID": SubcommentID, "_id": Commrnt_id }, { headers: header })
            .toPromise()
            .then(function (data) {
            for (var index = 0; index < (_this.comments[i].subComment).length; index++) {
                if (_this.comments[i].subComment[index]._id == SubcommentID) {
                    _this.comments[i].subComment.splice(index, 1);
                    break;
                }
            }
            loading.dismiss();
        }).catch(function (err) {
            loading.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Sorry!',
                subTitle: "unable to remove comment right now - try later ",
                buttons: ['Ok']
            });
            alert.present();
        });
    };
    ReadReviewPage.prototype.UpdateSubComment = function () {
        var _this = this;
        var loading = this.loadingConfig.create();
        loading.present();
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        header.append('Content-Type', 'application/json');
        this.http.post("http://afternoon-mountain-15657.herokuapp.com/api/UpdateSubComment", { "_id": this.Commrnt_id, "SubcommentID": this.indexToReply, "comment": this.EditcommentText }, { headers: header })
            .toPromise()
            .then(function (data) {
            for (var index = 0; index < (_this.comments[_this.indexToReply].subComment).length; index++) {
                if (_this.comments[_this.indexToReply].subComment[index]._id == _this.subComment_id) {
                    _this.comments[_this.indexToReply].subComment[index].comment = _this.EditcommentText;
                    break;
                }
            }
            _this.EditcommentText = "";
            _this.Edit = false;
            _this.Reply = false;
            loading.dismiss();
        }).catch(function (err) {
            loading.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Sorry!',
                subTitle: "unable to edit comment right now - try later ",
                buttons: ['Ok']
            });
            alert.present();
        });
    };
    ReadReviewPage.prototype.GetAllComment = function () {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        header.append('Content-Type', 'application/json');
        this.http.post("http://afternoon-mountain-15657.herokuapp.com/api/GetAllComment", { "_id": this.Article._id }, { headers: header })
            .toPromise()
            .then(function (data) {
            _this.GotAllComment = true;
            _this.comments = data.json();
        }).catch(function (err) {
            var alert = _this.alertCtrl.create({
                title: 'Sorry!',
                subTitle: "unable to get comments right now - try later ",
                buttons: ['Ok']
            });
            alert.present();
        });
    };
    ReadReviewPage.prototype.clickeditComment = function (EditcommentText, i, Commrnt_id, isSubEditval, subComment_id) {
        var _this = this;
        if (!this.user._id) {
            this.app.getRootNav().setRoot("connection");
            return;
        }
        this.subComment_id = subComment_id;
        this.Commrnt_id = Commrnt_id;
        this.indexToReply = i;
        this.Edit = true;
        this.Reply = false;
        this.isSubEdit = isSubEditval;
        setTimeout(function () {
            _this.myInput2.setFocus();
        }, 150);
        setTimeout(function () {
            _this.EditcommentText = EditcommentText;
        }, 500);
    };
    ReadReviewPage.prototype.reply = function (i) {
        var _this = this;
        if (!this.user._id) {
            this.app.getRootNav().setRoot("connection");
            return;
        }
        this.Edit = false;
        this.indexToReply = i;
        this.Reply = true;
        setTimeout(function () {
            _this.myInput.setFocus();
        }, 150);
    };
    ReadReviewPage.prototype.clickChat = function () {
        var _this = this;
        console.log(this.user);
        if (!this.user._id) {
            this.app.getRootNav().setRoot("connection");
            return;
        }
        this.Edit = false;
        this.Reply = false;
        setTimeout(function () {
            _this.myInput.setFocus();
        }, 150);
        setTimeout(function () {
            if (_this.scrollcomment) {
                _this.scrollcomment.scrollToBottom;
            }
        }, 500);
    };
    ReadReviewPage.prototype.clickContent = function () {
        console.log("clickContent");
        console.log(this.Edit, "this.Edit");
        console.log(this.Reply, "this.Reply");
        this.Edit = false;
        this.Reply = false;
    };
    ReadReviewPage.prototype.openLogin = function () {
        this.app.getRootNav().setRoot("connection");
    };
    ReadReviewPage.prototype.updateLike2 = function (type) {
        console.log(this.Article);
        var a = [];
        a.push(this.Article);
        this.socialprovider.updateLike(a, this.Article._id, type, 0, 'news');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])("scrollcomment"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], ReadReviewPage.prototype, "scrollcomment", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])("myInput"),
        __metadata("design:type", Object)
    ], ReadReviewPage.prototype, "myInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])("myInput2"),
        __metadata("design:type", Object)
    ], ReadReviewPage.prototype, "myInput2", void 0);
    ReadReviewPage = ReadReviewPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-read-review',template:/*ion-inline-start:"C:\Users\user\Desktop\interactive-crpto-v2\src\pages\read-review\read-review.html"*/'<ion-header mode="md" hideBackButton="false">\n  <ion-navbar mode="md">\n\n    <ion-title mode="md">\n      News Review\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content  padding style="background: #2b2b2b;color:white;">\n\n  <div class="formB">\n    <div class="title">\n      <div>{{Article.title}}</div>\n    </div>\n    <div class="imgA">\n      <img src="{{Article.Img}}" style="display: block; width: 95%; height: 80%;">\n      <ion-grid>\n        <ion-row style="display: block;text-align: center;">\n          <ion-col col-2>\n            <a href="https://www.facebook.com/interactivecrypto/">\n              <img src="assets/imgs/followus/facebook.png" height="40"> </a>\n          </ion-col>\n          <ion-col col-2>\n            <a href="https://www.linkedin.com/company/interactivecryp/">\n              <img src="assets/imgs/followus/linkedin.png" height="40">\n            </a>\n          </ion-col>\n          <ion-col col-2>\n            <a href="https://t.me/cryptocurrenciesnews1">\n              <img src="assets/imgs/followus/telegram.png" height="40">\n            </a>\n          </ion-col>\n          <ion-col col-2>\n            <a href="https://twitter.com/Interactivecryp">\n              <img src="assets/imgs/followus/twitter.png" height="40">\n            </a>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <div id="{{Article.name}}"></div>\n    </div>\n<div style="margin-left:45%;">\n          <div (click)="shareViaAll()" class="div1" style="text-align: center;background: #cecece;">\n            <ion-icon style="font-size: 27px;margin-top: 1px;" class="iconInDiv1" name="md-share-alt"></ion-icon>\n          </div>\n        </div>\n    <ion-grid style="padding-top: 10px;padding-bottom: 10px;">\n      <ion-row>\n        <ion-col style="text-align: end;" (click)="updateLike2(\'like\')">\n          {{Article?.likes}}\n          <ion-icon [style.color]="Article?.Like ? \'#3578E5\' :\'#9B9B9B\'" name="thumbs-up1"></ion-icon>\n        </ion-col>\n        <ion-col (click)="updateLike2(\'unlike\')">\n          {{Article?.unlikes}}\n\n          <ion-icon [style.color]="Article?.unLike ? \'#3578E5\' :\'#9B9B9B\'" name="thumbs-down2"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <!-- Comments -->\n    <div *ngFor="let comment of comments;let i =index">\n      <ion-grid *ngIf="GotAllComment" style="padding:0">\n        <ion-row style="padding-bottom: 5px;border-bottom:solid 1px #4a4a4a;">\n          <ion-col style="padding: 0px;" col-2>\n            <img [src]=comment.photoUrl class="imgForMainComment">\n          </ion-col>\n          <ion-col col-10 style="border-radius: 12px;padding-left: 7px;">\n            <div class="nameForMainComment">{{comment.name}}</div>\n            <div class="commentForMainComment">{{comment.comment}}</div>\n            <ion-grid style="padding: 0px;">\n              <ion-row style="padding: 0px;">\n                <ion-col style="padding: 0px;color:#e2b000;font-size:12px;padding-top: 4px;" (click)="reply(i)">Reply</ion-col>\n                <ion-col col-2 *ngIf="comment.UserUid==user" style="padding: 0px;color:#e2b000;font-size:12px;padding-top: 4px" (click)="clickeditComment(comment.comment,i,comment._id,false)">Edit</ion-col>\n                <ion-col col-3 *ngIf="comment.UserUid==user" style="padding: 0px;color:#e2b000;font-size:12px;padding-top: 4px" (click)="DeleteComment(comment._id,i)">Delete</ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-col>\n        </ion-row>\n\n        <!-- subComment -->\n        <ion-row *ngFor="let subComment of comment.subComment;" style="padding-bottom: 5px;">\n          <ion-col col-3 style="padding:0;  ">\n            <img [src]=subComment.photoUrl height="30" class="imgForMainSubComment">\n          </ion-col>\n          <ion-col col-9 style="background:#eeeeee;border-radius: 12px;padding-left: 7px;">\n            <div class="nameForSubComment">{{subComment.name}}</div>\n            <div class="commentForSubComment">{{subComment.comment}}</div>\n            <ion-grid style="padding: 0px;">\n              <ion-row style="padding: 0px;">\n                <ion-col style="padding: 0px;color:#e2b000;font-size:12px;padding-top: 4px;" (click)="reply(i)">Reply</ion-col>\n                <ion-col col-2 *ngIf="subComment.UserUid==user" style="padding: 0px;color:#e2b000;font-size:12px;padding-top: 4px" (click)="clickeditComment(subComment.comment,i,comment._id,true,subComment._id)">Edit</ion-col>\n                <ion-col col-3 *ngIf="subComment.UserUid==user" style="padding: 0px;color:#e2b000;font-size:12px;padding-top: 4px" (click)="deleteSubComment(comment._id,subComment._id,i)">Delete</ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-col>\n        </ion-row>\n\n        <ion-grid *ngIf="Reply && indexToReply == i" style="padding:0">\n          <ion-row style="padding-bottom: 5px;">\n\n            <ion-col>\n              <ion-row style="padding: 0px;">\n                <ion-col style="padding: 0px; background: white;    font-size: 16px;\n                  height: 40px;\n                  border-radius: 23px;     color: black;  ">\n                  <ion-input (ionFocus)="clickChat()" #myInput [(ngModel)]="SubcommentText" id="newcomment" type="text" placeholder="Write your comment"></ion-input>\n                </ion-col>\n                <ion-col style="padding: 0px;" (tap)="AddSubComment(comment._id,i)" col-3>\n                  <!-- <ion-icon (tap)="AddSubComment(comment._id,i)" style="margin:0px;color: #535453;font-size: 2.5em;    margin-top: 14%;" name="md-send"\n                      item-right primary></ion-icon> -->\n                  <button style="background: #ffc046;\n                      color: #333333  ;\n                      font-weight: 500;\n                      border-radius: 23px;\n                      height: 40px;\n                      margin-left: 10px;\n                      font-size: 15px;\n                      width: 60px;">POST</button>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-grid>\n\n      <ion-grid *ngIf="Edit  && indexToReply == i" style="padding:0">\n        <ion-row style="padding-bottom: 5px;">\n          <ion-col>\n            <ion-row  style="padding: 0px">\n              <ion-col style="padding: 0px; background: white;    font-size: 16px;\n                  height: 40px;\n                  border-radius: 23px;     color: black; ">\n                <ion-input (ionFocus)="clickChat()" #myInput2 [(ngModel)]="EditcommentText" id="editnewcomment" type="text" placeholder="Write your comment"></ion-input>\n              </ion-col>\n              <ion-col *ngIf="!isSubEdit" style="padding: 0px" col-2 (tap)="UpdateComment()">\n                <button style="background: #ffc046;\n                      color: #333333  ;\n                      font-weight: 500;\n                      border-radius: 23px;\n                      height: 40px;\n                      margin-left: 10px;\n                      font-size: 15px;\n                      width: 60px;">POST</button>\n              </ion-col>\n              <ion-col *ngIf="isSubEdit" style="padding: 0px" col-2 (tap)="UpdateSubComment()">\n                <button style="background: #ffc046;\n                        color: #333333  ;\n                        font-weight: 500;\n                        border-radius: 23px;\n                        height: 40px;\n                        margin-left: 10px;\n                        font-size: 15px;\n                        width: 60px;">POST</button>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n    </div>\n\n    <ion-grid *ngIf="!Reply && !Edit && user">\n      <ion-row style="padding-bottom: 5px;">\n        \n        <ion-col>\n          <ion-row  style="padding: 0px">\n            <ion-col style="padding: 0px; background: white;    font-size: 16px;\n            height: 40px;\n            border-radius: 23px;     color: black; ">\n              <ion-input (ionFocus)="clickChat()"\n                #myInput [(ngModel)]="commentText" id="newcomment" type="text" placeholder="Write your comment"></ion-input>\n            </ion-col>\n            <ion-col style="padding: 0px" col-2 (tap)="AddComment()">\n             \n                <button style="background: #ffc046;\n                color: #333333  ;\n                font-weight: 500;\n                border-radius: 23px;\n                height: 40px;\n                margin-left: 10px;\n                font-size: 15px;\n                width: 60px;">POST</button>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <div  #scrollcomment class="spinner" *ngIf="!GotAllComment">\n      <div class="bounce1"></div>\n      <div class="bounce2"></div>\n      <div class="bounce3"></div>\n    </div>\n\n    \n\n\n    <div id="Popularnews">You might also like:</div>\n    <div *ngFor="let New of NewsToShow">\n      <div class="box1" (click)="readMore(New)">\n        <div class="nextnewsname">{{New.title}} </div>\n        <span class="sexy_line5"></span>\n        <div>\n          <img class="imgnextnews" src="{{New.Img}}">\n        </div>\n        <div class="nextread">{{label}}\n        </div>\n      </div>\n    </div>\n  </div>\n  <div style="position:absolute;bottom:0">\n\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\user\Desktop\interactive-crpto-v2\src\pages\read-review\read-review.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_5__providers_social_data_social_data__["a" /* SocialDataProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_auth_data_auth_data__["a" /* AuthDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_track_event_track_event__["a" /* TrackEventProvider */]])
    ], ReadReviewPage);
    return ReadReviewPage;
    var ReadReviewPage_1;
}());

//# sourceMappingURL=read-review.js.map

/***/ })

});
//# sourceMappingURL=8.js.map