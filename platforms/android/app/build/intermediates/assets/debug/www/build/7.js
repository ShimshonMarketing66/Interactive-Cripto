webpackJsonp([7],{

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CryptoReviewReadMorePageModule", function() { return CryptoReviewReadMorePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__crypto_review_read_more__ = __webpack_require__(590);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CryptoReviewReadMorePageModule = /** @class */ (function () {
    function CryptoReviewReadMorePageModule() {
    }
    CryptoReviewReadMorePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__crypto_review_read_more__["a" /* CryptoReviewReadMorePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__crypto_review_read_more__["a" /* CryptoReviewReadMorePage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ]
        })
    ], CryptoReviewReadMorePageModule);
    return CryptoReviewReadMorePageModule;
}());

//# sourceMappingURL=crypto-review-read-more.module.js.map

/***/ }),

/***/ 590:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CryptoReviewReadMorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_data_auth_data__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_social_data_social_data__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_track_event_track_event__ = __webpack_require__(147);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CryptoReviewReadMorePage = /** @class */ (function () {
    function CryptoReviewReadMorePage(alertCtrl, navCtrl, navParams, http, app, trackEvent, socialprovider, AuthData, socialSharing, actionSheetCtrl, loadingCtrl) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.app = app;
        this.trackEvent = trackEvent;
        this.socialprovider = socialprovider;
        this.AuthData = AuthData;
        this.socialSharing = socialSharing;
        this.actionSheetCtrl = actionSheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.ImgProfile = "http://xosignals.herokuapp.com/api2/sendImgCountryByName/";
        this.isLike = false;
        this.LikesNumer = 100;
        this.pageName = this.navParams.get("cryptoPage");
        this.language = this.navParams.get("language");
        this.user = this.AuthData.user;
        console.log(this.user);
        if (this.user)
            this.ImgProfile += this.user.countryData.country;
        this.GetAllComment();
        this.url = "https://afternoon-mountain-15657.herokuapp.com/cryptoReview/" + this.pageName.name + "/" + this.language;
        this.http.get(this.url)
            .toPromise()
            .then(function (response) {
            do {
                document.getElementById("blog").innerHTML = response.text();
            } while (document.getElementById("blog").innerHTML === "");
        })
            .catch(function (err) {
            console.log('error in server');
        });
        var x = [];
        x.push(this.pageName);
        this.socialprovider.checkUnlike2(x);
        this.socialprovider.checkLike2(x);
    }
    CryptoReviewReadMorePage.prototype.ionViewDidEnter = function () {
    };
    CryptoReviewReadMorePage.prototype.ionViewDidLeave = function () {
    };
    CryptoReviewReadMorePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CryptoReviewReadMorePage');
        this.trackEvent.trackView("CryptoReviewReadMorePage");
    };
    CryptoReviewReadMorePage.prototype.shareViaAll = function () {
        this.socialSharing.share(null, null, null, this.url)
            .then(function () {
            console.log("All");
        }).catch(function () {
            console.log("Sharing via All is not possible");
        });
    };
    CryptoReviewReadMorePage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    CryptoReviewReadMorePage.prototype.GetAllComment = function () {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        header.append('Content-Type', 'application/json');
        this.http.post("http://afternoon-mountain-15657.herokuapp.com/api/GetAllComment", { "_id": this.pageName._id }, { headers: header })
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
    CryptoReviewReadMorePage.prototype.clickeditComment = function (EditcommentText, i, Commrnt_id, isSubEditval, subComment_id) {
        var _this = this;
        if (!this.user) {
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
    CryptoReviewReadMorePage.prototype.reply = function (i) {
        var _this = this;
        if (!this.user) {
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
    CryptoReviewReadMorePage.prototype.clickChat = function () {
        var _this = this;
        console.log(this.user);
        if (!this.user) {
            this.app.getRootNav().setRoot("connection");
            return;
        }
        this.Edit = false;
        this.Reply = false;
        setTimeout(function () {
            _this.myInput.setFocus();
        }, 150);
        setTimeout(function () {
            if (_this.contentcryptoreview) {
                _this.contentcryptoreview.scrollToBottom();
            }
        }, 500);
    };
    CryptoReviewReadMorePage.prototype.clickContent = function () {
        this.Edit = false;
        this.Reply = false;
    };
    CryptoReviewReadMorePage.prototype.openLogin = function () {
        this.app.getRootNav().setRoot("connection");
    };
    CryptoReviewReadMorePage.prototype.AddComment = function () {
        var _this = this;
        if (!this.AuthData.user._id) {
            this.openLogin();
            return;
        }
        var loading = this.loadingCtrl.create();
        loading.present();
        if (this.commentText.length < 3) {
            loading.dismiss();
            var alert_1 = this.alertCtrl.create({
                title: 'error!',
                subTitle: "plese enter more then 4 leters ",
                buttons: ['Ok']
            });
            alert_1.present();
            return;
        }
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        header.append('Content-Type', 'application/json');
        this.http.post("http://afternoon-mountain-15657.herokuapp.com/api/AddComment", { "_id": this.pageName._id, "UserUid": this.user._id, "name": this.user.first_name + " " + this.user.last_name, "photoUrl": this.ImgProfile, "comment": this.commentText }, { headers: header })
            .toPromise()
            .then(function (data) {
            _this.comments.unshift({
                "_id": data.json()._id,
                "ArticleId": _this.pageName._id,
                "UserUid": _this.user._id,
                "name": _this.user.first_name + " " + _this.user.last_name,
                "photoUrl": _this.ImgProfile,
                "comment": _this.commentText,
                "subComment": []
            });
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
    CryptoReviewReadMorePage.prototype.DeleteComment = function (Commrnt_id, i) {
        var _this = this;
        var loading = this.loadingCtrl.create();
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
    CryptoReviewReadMorePage.prototype.UpdateComment = function (i) {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        header.append('Content-Type', 'application/json');
        this.http.post("http://afternoon-mountain-15657.herokuapp.com/api/UpdateComment", { "_id": this.Commrnt_id, "UserUid": this.user._id, "comment": this.EditcommentText }, { headers: header })
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
    CryptoReviewReadMorePage.prototype.AddSubComment = function (Commrnt_id, i) {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        header.append('Content-Type', 'application/json');
        this.http.post("http://afternoon-mountain-15657.herokuapp.com/api/AddSubComment", { "_id": Commrnt_id, "UserUid": this.user._id, "name": this.user.first_name + " " + this.user.last_name, "photoUrl": this.ImgProfile, "comment": this.SubcommentText }, { headers: header })
            .toPromise()
            .then(function (data) {
            loading.dismiss();
            _this.comments[i].subComment.push({
                "_id": Commrnt_id,
                "UserUid": _this.user._id,
                "name": _this.user.first_name + " " + _this.user.last_name,
                "photoUrl": _this.ImgProfile,
                "comment": _this.SubcommentText
            });
            _this.Edit = false;
            _this.Reply = false;
            _this.SubcommentText = "";
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
    CryptoReviewReadMorePage.prototype.deleteSubComment = function (Commrnt_id, SubcommentID, i) {
        var _this = this;
        var loading = this.loadingCtrl.create();
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
    CryptoReviewReadMorePage.prototype.UpdateSubComment = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
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
    CryptoReviewReadMorePage.prototype.updateLike2 = function (type) {
        console.log(this.pageName);
        var a = [];
        a.push(this.pageName);
        this.socialprovider.updateLike(a, this.pageName._id, type, 0, 'cryptoReview');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])("myInput"),
        __metadata("design:type", Object)
    ], CryptoReviewReadMorePage.prototype, "myInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])("myInput2"),
        __metadata("design:type", Object)
    ], CryptoReviewReadMorePage.prototype, "myInput2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])("contentcryptoreview"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], CryptoReviewReadMorePage.prototype, "contentcryptoreview", void 0);
    CryptoReviewReadMorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-crypto-review-read-more',template:/*ion-inline-start:"C:\Users\user\Desktop\interactive-crpto-v2\src\pages\crypto-review-read-more\crypto-review-read-more.html"*/'<ion-header id="header" >\n  <ion-navbar>\n    \n   <ion-title>\n      {{pageName.name}}&nbsp;Review   </ion-title>\n  </ion-navbar>\n</ion-header>\n\n  \n<ion-content #contentcryptoreview padding style="background: #2b2b2b;color:white;">\n\n   \n    \n        <div id="blog" style="padding-bottom: 27px;"></div>\n\n        \n<ion-grid style="padding-top: 10px;padding-bottom: 10px;">\n    <ion-row>\n        <ion-col style="text-align: end;" (click)="updateLike2(\'like\')">\n          {{pageName.likes}}\n          <ion-icon  [style.color]="pageName?.Like ? \'#3578E5\' :\'#9B9B9B\'" name="thumbs-up1"></ion-icon>\n      </ion-col>\n      <ion-col (click)="updateLike2(\'unlike\')">\n          {{pageName.unlikes}}\n\n          <ion-icon [style.color]="pageName?.unLike ? \'#3578E5\' :\'#9B9B9B\'" name="thumbs-down2"></ion-icon>\n      </ion-col>\n</ion-row>\n</ion-grid>\n   <!-- Comments -->\n   <div *ngFor="let comment of comments;let i =index">\n    <ion-grid *ngIf="GotAllComment" style="padding:0">\n      <ion-row style="padding-bottom: 5px;border-bottom:solid 1px #4a4a4a;">\n        <ion-col style="padding: 0px;" col-2>\n          <img [src]=comment.photoUrl class="imgForMainComment">\n        </ion-col>\n        <ion-col col-10 style="border-radius: 12px;padding-left: 7px;">\n          <div class="nameForMainComment">{{comment.name}}</div>\n          <div class="commentForMainComment">{{comment.comment}}</div>\n          <ion-grid style="padding: 0px;">\n            <ion-row style="padding: 0px;">\n              <ion-col style="padding: 0px;color:#e2b000;font-size:12px;padding-top: 4px;" (click)="reply(i)">Reply</ion-col>\n              <ion-col col-2 *ngIf="comment.UserUid==user" style="padding: 0px;color:#e2b000;font-size:12px;padding-top: 4px" (click)="clickeditComment(comment.comment,i,comment._id,false)">Edit</ion-col>\n              <ion-col col-3 *ngIf="comment.UserUid==user" style="padding: 0px;color:#e2b000;font-size:12px;padding-top: 4px" (click)="DeleteComment(comment._id,i)">Delete</ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-col>\n      </ion-row>\n\n      <!-- subComment -->\n      <ion-row *ngFor="let subComment of comment.subComment;" style="padding-bottom: 5px;">\n        <ion-col col-3 style="padding:0;  ">\n          <img [src]=subComment.photoUrl height="30" class="imgForMainSubComment">\n        </ion-col>\n        <ion-col col-9 style="background:#eeeeee;border-radius: 12px;padding-left: 7px;">\n          <div class="nameForSubComment">{{subComment.name}}</div>\n          <div class="commentForSubComment">{{subComment.comment}}</div>\n          <ion-grid style="padding: 0px;">\n            <ion-row style="padding: 0px;">\n              <ion-col style="padding: 0px;color:#e2b000;font-size:12px;padding-top: 4px;" (click)="reply(i)">Reply</ion-col>\n              <ion-col col-2 *ngIf="subComment.UserUid==user" style="padding: 0px;color:#e2b000;font-size:12px;padding-top: 4px" (click)="clickeditComment(subComment.comment,i,comment._id,true,subComment._id)">Edit</ion-col>\n              <ion-col col-3 *ngIf="subComment.UserUid==user" style="padding: 0px;color:#e2b000;font-size:12px;padding-top: 4px" (click)="deleteSubComment(comment._id,subComment._id,i)">Delete</ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-col>\n      </ion-row>\n\n      <ion-grid *ngIf="Reply && indexToReply == i" style="padding:0">\n        <ion-row style="padding-bottom: 5px;">\n\n          <ion-col>\n            <ion-row style="padding: 0px;">\n              <ion-col style="padding: 0px; background: white;    font-size: 16px;\n                height: 40px;\n                border-radius: 23px;     color: black;  ">\n                <ion-input #myInput [(ngModel)]="SubcommentText" id="newcomment" type="text" placeholder="Write your comment"></ion-input>\n              </ion-col>\n              <ion-col style="padding: 0px;" (tap)="AddSubComment(comment._id,i)" col-3>\n                <!-- <ion-icon (tap)="AddSubComment(comment._id,i)" style="margin:0px;color: #535453;font-size: 2.5em;    margin-top: 14%;" name="md-send"\n                    item-right primary></ion-icon> -->\n                <button style="background: #ffc046;\n                    color: #333333  ;\n                    font-weight: 500;\n                    border-radius: 23px;\n                    height: 40px;\n                    margin-left: 10px;\n                    width: 60px;">POST</button>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-grid>\n\n    <ion-grid *ngIf="Edit  && indexToReply == i" style="padding:0">\n      <ion-row style="padding-bottom: 5px;">\n        <ion-col>\n          <ion-row  style="padding: 0px">\n            <ion-col style="padding: 0px; background: white;    font-size: 16px;\n                height: 40px;\n                border-radius: 23px;     color: black; ">\n              <ion-input #myInput2 [(ngModel)]="EditcommentText" id="editnewcomment" type="text" placeholder="Write your comment"></ion-input>\n            </ion-col>\n            <ion-col *ngIf="!isSubEdit" style="padding: 0px" col-2 (tap)="UpdateComment()">\n              <button style="background: #ffc046;\n                    color: #333333  ;\n                    font-weight: 500;\n                    border-radius: 23px;\n                    height: 40px;\n                    margin-left: 10px;\n                    width: 60px;">POST</button>\n            </ion-col>\n            <ion-col *ngIf="isSubEdit" style="padding: 0px" col-2 (tap)="UpdateSubComment()">\n              <button style="background: #ffc046;\n                      color: #333333  ;\n                      font-weight: 500;\n                      border-radius: 23px;\n                      height: 40px;\n                      margin-left: 10px;\n                      width: 60px;">POST</button>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </div>\n\n  <ion-grid *ngIf="!Reply && !Edit && user">\n    <ion-row style="padding-bottom: 5px;">\n      \n      <ion-col>\n        <ion-row  style="padding: 0px">\n          <ion-col style="padding: 0px; background: white;    font-size: 16px;\n          height: 40px;\n          border-radius: 23px;     color: black; ">\n            <ion-input \n              #myInput [(ngModel)]="commentText" id="newcomment" type="text" placeholder="Write your comment"></ion-input>\n          </ion-col>\n          <ion-col style="padding: 0px" col-2 (tap)="AddComment()">\n           \n              <button style="background: #ffc046;\n              color: #333333  ;\n              font-weight: 500;\n              border-radius: 23px;\n              height: 40px;\n              margin-left: 10px;\n              width: 60px;">POST</button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <div class="spinner" *ngIf="!GotAllComment">\n    <div class="bounce1"></div>\n    <div class="bounce2"></div>\n    <div class="bounce3"></div>\n  </div>\n  \n  \n   \n  \n</ion-content>\n\n'/*ion-inline-end:"C:\Users\user\Desktop\interactive-crpto-v2\src\pages\crypto-review-read-more\crypto-review-read-more.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_8__providers_track_event_track_event__["a" /* TrackEventProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_social_data_social_data__["a" /* SocialDataProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_auth_data_auth_data__["a" /* AuthDataProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
    ], CryptoReviewReadMorePage);
    return CryptoReviewReadMorePage;
}());

//# sourceMappingURL=crypto-review-read-more.js.map

/***/ }),

/***/ 591:
/***/ (function(module, exports) {

// HACK: does nothing, because `toPromise` now lives on the `Observable` itself.
// leaving this module here to prevent breakage.
//# sourceMappingURL=toPromise.js.map

/***/ }),

/***/ 592:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(10);
var map_1 = __webpack_require__(153);
Observable_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

/***/ })

});
//# sourceMappingURL=7.js.map