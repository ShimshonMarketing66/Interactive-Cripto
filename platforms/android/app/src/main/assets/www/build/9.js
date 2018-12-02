webpackJsonp([9],{

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsPageModule", function() { return AboutUsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__About_Us__ = __webpack_require__(578);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutUsPageModule = /** @class */ (function () {
    function AboutUsPageModule() {
    }
    AboutUsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__About_Us__["a" /* AboutUsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__About_Us__["a" /* AboutUsPage */]),
            ],
        })
    ], AboutUsPageModule);
    return AboutUsPageModule;
}());

//# sourceMappingURL=About-Us.module.js.map

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return termAndPrivacyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_track_event_track_event__ = __webpack_require__(147);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var termAndPrivacyPage = /** @class */ (function () {
    function termAndPrivacyPage(navCtrl, navParams, menu, trackEvent) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.trackEvent = trackEvent;
        this.opt = this.navParams.get("option");
        console.log("the option selected is ", this.opt);
        this.menu.swipeEnable(false);
    }
    termAndPrivacyPage.prototype.ionViewWillLeave = function () {
        this.menu.swipeEnable(true);
    };
    termAndPrivacyPage.prototype.ngAfterViewInit = function () {
        console.log("the option selected is in view init", this.opt);
        if (this.opt == "1") {
            console.log("margin-top");
            document.getElementById("contentTandPrivacy").style.marginTop = "13.5%";
        }
        else {
        }
    };
    termAndPrivacyPage.prototype.close = function () {
        this.navCtrl.pop();
    };
    termAndPrivacyPage.prototype.ionViewDidLoad = function () {
        this.trackEvent.trackView("termAndPrivacy");
    };
    termAndPrivacyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-termAndPrivacy',template:/*ion-inline-start:"C:\Users\user\Desktop\interactive-crpto-v2\src\pages\termAndPrivacy\termAndPrivacy.html"*/'\n\n\n\n       \n\n\n\n<ion-header id="header" hideBackButton="false">\n\n        <ion-navbar>\n\n         <ion-title>\n\n         </ion-title>\n\n        </ion-navbar>\n\n      </ion-header>\n\n      \n\n<ion-content id="contentTandPrivacy" padding>\n\n    <!-- <div class="text"></div> -->\n\n    <div style="position:relative;">\n\n        <ion-icon class="ionicon" name="information" style="opacity:0"></ion-icon>\n\n        <ion-icon name="close" id="ic-closeTAndC" style="font-size: 35px;     margin-right: 40px;" (click)="close()"></ion-icon>\n\n        <div class="title2">PRIVACY POLICY \n\n        </div>\n\n    </div>\n\n    <span class=sexy_line></span>\n\n    <div class="text"      n   style="font-size: 80%;">\n\n        <div class="text" style="font-size: xx-small;">(Last Revised: September 18, 2017)\n\n        </div>\n\n        <div class="text" ><i>Capitalized terms used here in and not otherwise defined shall have the meanings ascribed to them in InteractiveCrypto’s Terms and Conditions of Use, available here:<a href="https://www.interactivecrypto.com/en/terms-conditions-2/"> www.interactivecrypto.com</a></i>\n\n        </div>\n\n        <div class="text">YOU HERE BY ACKNOWLEDGE THAT THIS POLICY TOGETHER WITH THE TERMS OF THE TERMS AND CONDITIONS OF USE AVAILABLE AT\n\n            <a href="https://www.interactivecrypto.com/en/terms-conditions-2/"> www.interactivecrypto.com</a> (COLLECTIVELY, THE “TERMS OF USE”) FORM\n\n            AN INTEGRAL PART OF ANY USE OF THIS SYSTEM OR OUR SERVICES AND YOU AGREE TO BE BOUND BY BOTH OF THEM and to comply\n\n            with all applicable laws and regulations regarding your use of the Site and the Services and you acknowledge\n\n            that even though the Terms of Use are electronic and are not physically signed by you and the Company, the Terms\n\n            of Use constitute a binding and enforceable legal contract between the Company and you.\n\n        </div>\n\n        <div>IF YOU DO NOT AGREE WITH THESE TERMS OF USE, YOU SHOULD LEAVE THE SITE IMMEDIATELY.\n\n        </div>\n\n        <h2>1. User-Supplied Information</h2>\n\n        <ol>\n\n            <li class="text">\n\n                Upon performing the registration process, you will be asked to provide certain information, such as your first and last name,\n\n                residence, email address, gender and birthday, as well as a username and password and certain financial information.\n\n                The username and password are used to ensure that only you have access to any of the personal information\n\n                you have provided. You are solely responsible for maintaining the secrecy of any password you use to register,\n\n                and you should always be careful whenever disclosing information online.\n\n\n\n            </li>\n\n            <li>\n\n                In addition, we receive and store any information you enter on our Site or give us in any other way. This includes information\n\n                that can identify you (“personal information”). The amount of personally identifying information you provide\n\n                is up to you, and you are not legally obligated to provide such information. However, your use of the Site\n\n                or the Services may be curtailed if such information is not provided.\n\n            </li>\n\n            <li>You may provide information on behalf of another person or entity. If you completed the registration on behalf\n\n                of another entity or if you otherwise provide information regarding another person or entity, you represent\n\n                to us that you were authorized by that person or entity to give us consent to use the submitted information.\n\n                We may use third party contractors to collect and aggregate this information.\n\n            </li>\n\n        </ol>\n\n        <h2>2. Cookies</h2>\n\n        <ol>\n\n            <li>We may use software technologies such as unique identifiers or “cookies” to collect and store information related\n\n                to user interactions with the Services. Cookies are small data files that are placed onto your device by\n\n                our servers. We may use temporary session cookies, which are terminated when the user closes the current\n\n                session, to store certain personal information provided by the user for purposes of administering that session.\n\n                We also may use persistent cookies, which remain saved on the user’s device after the current session is\n\n                closed, to store user information to facilitate future sessions.</li>\n\n            <li>Most browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies\n\n                or to notify you when a cookie is being placed on your device. Each browser is different, but generally users\n\n                can remove cookies by following directions provided in the browser’s “help” file. Please note that, if you\n\n                reject cookies or disable cookies, some features of the Services may not function properly.\n\n            </li>\n\n            <li>This Policy relates only to the use of cookies on the Site and not on the use of cookies by any third-party.\n\n            </li>\n\n            <li>We do not link the information we store in cookies to any personally identifiable information (“<b>PII</b> ”)\n\n                you submit while on our site.\n\n            </li>\n\n        </ol>\n\n        <h2>3. Use of Information\n\n        </h2>\n\n        <div class="text">User identifiable information will be used by the Company and its affiliates\' employees, consultants and third party\n\n            service providers in connection with the Company’s business (including, without limitation, as described elsewhere\n\n            in this Policy), in connection with the operation and management of the Site, to enhance performance of the Site,\n\n            to tailor the Site to Users’ preferences, and to analyze trends, including, without limitation, as follows:\n\n        </div>\n\n        <ol>\n\n            <li>To enable us to verify your credentials, in order to maintain reasonable security, provide developers with the\n\n                information that is useful in developing new features and Services for our users, enable us to develop and\n\n                improve the features, contents, and Services available, fulfill your requests for our products and Services,\n\n                in connection with your use of the Site, to respond to your inquiries about our Services, to offer you our\n\n                products or Services that we believe may be of interest to you, to carry out transactions which you have\n\n                requested, to enforce our rights and resolve disputes.\n\n            </li>\n\n            <li>We will retain information transmitted to us in the context of use of Services for further internal use in connection\n\n                with our efforts to improve our Services and products.\n\n            </li>\n\n            <li>If you wish to subscribe to our newsletter(s), we will use your name and email address to send the newsletter\n\n                to you. Out of respect for your privacy, we provide you a way to unsubscribe by following the unsubscribe\n\n                link located at the bottom of each newsletter communication or by emailing us at contact@interactivecrypto.com.\n\n            </li>\n\n            <li>We may use non-personally identifying information that we collect to provide statistical information about users\n\n                of the Site, to improve the quality, design and content of our Site, to analyze the use of our Site and to\n\n                cooperate with law enforcement.\n\n            </li>\n\n        </ol>\n\n        <h2>4. Disclosure of Information\n\n        </h2>\n\n        <ol>\n\n            <li>In certain cases, we may provide User information to other third parties, such as advertisers, partners or for\n\n                online advertising auctions. Where we provide User information to third parties, other than for use on our\n\n                behalf, it will be provided either in aggregated form that does not identify User identity, or in a form\n\n                that does not link the information to Users’ PII. In certain cases, such as information provided to our advertisers,\n\n                we may provide non-personally identifiable identification (for example, gender) in connection with an IP\n\n                address.\n\n            </li>\n\n            <li>We will not sell, share, rent or trade your personal information with third parties other than as disclosed within\n\n                this Privacy Policy unless we have your consent.\n\n            </li>\n\n           \n\n               <div><li>We may disclose your personal information to:</li> \n\n                        <ul>\n\n                    <li>Third-party vendors who provide Services to us or facilitate or evaluate the Site, such as email service\n\n                        providers sending e-mails on our behalf ;\n\n                    </li>\n\n                    <li>Companies within our corporate family that are involved in operating or providing the Services. We may\n\n                        share your personal information with our affiliates. Our affiliates will follow practices that are\n\n                        at least as restrictive as the practices described in this Privacy Policy, including requests that\n\n                        personal information not be used to provide you with Services;\n\n                    </li>\n\n                    <li>We may share aggregated or anonymous data with third parties for any use whatsoever without restriction.\n\n                    </li>\n\n                </ul>\n\n                </div>\n\n           \n\n\n\n            <div> <li>We also may share your information:</li>\n\n                <ul>\n\n                    <li>In response to subpoenas, court orders, or other legal process or in response to a law enforcement agency’s\n\n                        request; to establish or exercise our legal rights; to defend against legal claims; or as we reasonably\n\n                        believe appropriate to comply with applicable laws, regulations, orders, legal processes or government\n\n                        or regulatory requests, including tax authorities in Israel, the United States and elsewhere, as\n\n                        well as in order to comply with anti-money laundering laws and regulations. In such cases we reserve\n\n                        the exclusive right to raise or waive any legal objection or right available to us.\n\n                    </li>\n\n                    <li>\n\n                        When we believe it is appropriate to investigate, prevent, or take action regarding illegal or suspected illegal activities;\n\n                        to protect and defend the rights, property, or safety of our company or this Site, our customers,\n\n                        or others; and in connection with our Terms of Use and other agreements, including where we believe\n\n                        you may have breached the Terms of Use or other agreements with the Company or its affiliates, to\n\n                        detect, prevent or otherwise address fraud or illegal behavior, security or technical issues, or\n\n                        protect against imminent harm to the rights, property or safety the Company, its affiliates or users\n\n                        or the public as required or permitted by law.\n\n\n\n                    </li>\n\n                    <li>In the event that the Company goes through a business transition, such as a merger, acquisition by another\n\n                        company, or sale of all or a portion of its assets, your PII will likely be among the assets transferred.\n\n                        You will be notified via email or prominent notice on our Site for 30 days before any such change\n\n                        in ownership or control of your personal information.\n\n                    </li>\n\n                </ul>\n\n            </div>\n\n            <li>Other than as set out above, you will be notified when personal information about you will be shared with third\n\n                parties, and you will have an opportunity to choose not to have us share such information.\n\n            </li>\n\n        </ol>\n\n        <h2>5. Links</h2>\n\n        <div class="text">The Site may contain links to other sites. The Company is not responsible for and has no liability for privacy policies\n\n            and/or practices on other sites. We advise you to read the privacy policy stated on other sites you link to through\n\n            the Site. This Policy only governs information that we collect on the Site.\n\n        </div>\n\n        <h2>6. Security</h2>\n\n       <ol> <li>The security of your personal information is important to us. We have put in place appropriate physical, electronic,\n\n            and managerial procedures to safeguard and help prevent unauthorized access, maintain data security, and correctly\n\n            use the information we collect online.\n\n        </li>\n\n        <li>You should be aware, however, that there is no data that is transmitted over the Internet that can be guaranteed\n\n            100% secure in transmission or safe from theft or illegal capture.\n\n        </li>\n\n    </ol>\n\n        <h2>7. Correction/Updating Personal Information\n\n        </h2>\n\n        <div class="text">The Company encourages you to review your information regularly to ensure that it is correct and complete. As a Registered\n\n            User, you can review and change your personal information by going to the page marked “My Profile” on the Site.\n\n        </div>\n\n        <h2>8. Children’s Online Privacy Protection Act Compliance\n\n        </h2>\n\n        <div class="text">​We are in compliance with the requirements of COPPA (Children’s Online Privacy Protection Act). We do not collect\n\n            any information from anyone under 13 years of age. Our website, products and services are all directed to people\n\n            who are at least 13 years old or older.\n\n        </div>\n\n        <h2>9. Questions and Feedback\n\n        </h2>\n\n        <div>We are strongly committed to our relationship with you and want to be sure you understand the steps we have taken\n\n            to protect your personal information. If you have questions or feedback regarding our privacy policy, you may\n\n            direct them to contact@interactivecrypto.com. We will make every effort to answer your questions.\n\n        </div>\n\n        <h2>10. Agreeing to Terms\n\n        </h2>\n\n        <div>IF YOU DO NOT AGREE TO THIS POLICY, PLEASE DO NOT USE OUR SYSTEM OR ANY SERVICES OFFERED BY THIS SITE. YOUR USE OF\n\n            THIS SITE AND OF THE SYSTEM INDICATES ACCEPTANCE OF THIS PRIVACY POLICY.\n\n        </div>\n\n        <div class="text"> <a href="https://www.interactivecrypto.com/en/terms-conditions-2/"> Click here to see our Term and condition in our web site</a> </div>\n\n    </div>\n\n    \n\n    <!-- <h1 class="title">About Interactive crypto:</h1>\n\n    <div class="text"><b style="color:orange" color>Welcome</b> to the application Interactivecrypto which is dedicated to Bitcoin and other virtual\n\n        currencies.\n\n    </div>\n\n    <div class="text">Here you will find explanations, studies, a detailed guide, opinions, ideas and written data.\n\n    </div>\n\n    <div class="text">All this in the clearest, most interesting and most comprehensible way.\n\n    </div>\n\n    <div class="text">No need to be an expert in economics or computer!\n\n    </div>\n\n    <div class="text">With a little curiosity you can know everything about this novelty that risks revolutionizing many areas.\n\n    </div>\n\n    <div class="text">All that is written on the site is from official sources and includes links with other specialists in this field.\n\n    </div>\n\n\n\n    <div class="text">This APP Interactive crypto is the most complete and professional source of information in English</div>\n\n    <h1 class="title" style="text-align: -webkit-center;">Welcome to the future !! He\'s already here! </h1> -->\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\user\Desktop\interactive-crpto-v2\src\pages\termAndPrivacy\termAndPrivacy.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2__providers_track_event_track_event__["a" /* TrackEventProvider */]])
    ], termAndPrivacyPage);
    return termAndPrivacyPage;
}());

//# sourceMappingURL=termAndPrivacy.js.map

/***/ }),

/***/ 578:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_termAndPrivacy_termAndPrivacy__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(50);
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




var AboutUsPage = /** @class */ (function () {
    function AboutUsPage(trackEvent, navCtrl, app, menu) {
        this.trackEvent = trackEvent;
        this.navCtrl = navCtrl;
        this.app = app;
        this.menu = menu;
    }
    AboutUsPage.prototype.openTermsAndPrivacy = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__pages_termAndPrivacy_termAndPrivacy__["a" /* termAndPrivacyPage */], { option: "0" });
    };
    AboutUsPage.prototype.ionViewDidLoad = function () {
        this.menu.swipeEnable(false);
        this.trackEvent.trackView("about-us");
    };
    AboutUsPage.prototype.ionViewWillLeave = function () {
        this.menu.swipeEnable(true);
    };
    AboutUsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-About-Us',template:/*ion-inline-start:"C:\Users\user\Desktop\interactive-crpto-v2\src\pages\About-Us\About-Us.html"*/'\n\n<ion-header id="header" hideBackButton="false">\n\n        <ion-navbar>\n\n           \n\n         <ion-title>\n\n                About Us\n\n         </ion-title>\n\n        </ion-navbar>\n\n      </ion-header>\n\n      \n\n<ion-content padding>\n\n    \n\n    <div style="position:relative;">\n\n    <ion-icon class="ionicon" name="information" style="opacity:0"></ion-icon>\n\n       \n\n        <div class="title2">ABOUT US</div></div>\n\n        <span class=sexy_line></span>\n\n    \n\n    <h1 class="title">About Interactive crypto:</h1>\n\n    <div class="text"><b style="color:orange" color>Welcome</b> to the application Interactivecrypto which is dedicated to Bitcoin and other virtual\n\n        currencies.\n\n    </div>\n\n    <div class="text">Here you will find explanations, studies, a detailed guide, opinions, ideas and written data.\n\n    </div>\n\n    <div class="text">All this in the clearest, most interesting and most comprehensible way.\n\n    </div>\n\n    <div class="text">No need to be an expert in economics or computer!\n\n    </div>\n\n    <div class="text">With a little curiosity you can know everything about this novelty that risks revolutionizing many areas.\n\n    </div>\n\n    <div class="text">All that is written on the site is from official sources and includes links with other specialists in this field.\n\n    </div>\n\n\n\n    <div class="text">This APP Interactive crypto is the most complete and professional source of information in English</div>\n\n    <h1 class="title" style="text-align: -webkit-center;">Welcome to the future !! He\'s already here! </h1>\n\n    <div style="color:blue;display: inline;    text-decoration: underline;"(click)="openTermsAndPrivacy()">Click here to see our terms and privacy condition</div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\user\Desktop\interactive-crpto-v2\src\pages\About-Us\About-Us.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_track_event_track_event__["a" /* TrackEventProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* MenuController */]])
    ], AboutUsPage);
    return AboutUsPage;
}());

//# sourceMappingURL=About-Us.js.map

/***/ })

});
//# sourceMappingURL=9.js.map