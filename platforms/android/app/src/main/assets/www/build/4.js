webpackJsonp([4],{

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllcoinPageModule", function() { return AllcoinPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__port_folio_transaction__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_firebase__ = __webpack_require__(149);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AllcoinPageModule = /** @class */ (function () {
    function AllcoinPageModule() {
    }
    AllcoinPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__port_folio_transaction__["a" /* PortFolioTransactionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__port_folio_transaction__["a" /* PortFolioTransactionPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ], providers: [__WEBPACK_IMPORTED_MODULE_5__ionic_native_firebase__["a" /* Firebase */]]
        })
    ], AllcoinPageModule);
    return AllcoinPageModule;
}());

//# sourceMappingURL=port-folio-transaction.module.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__currency_symbol_currency_symbol__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rm_point_rm_point__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tofixe_tofixe__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__to_fixe_number_to_fixe_number__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__key_key__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__split_split__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tosymbol_tosymbol__ = __webpack_require__(521);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__currency_symbol_currency_symbol__["a" /* CurrencySymbolPipe */],
                __WEBPACK_IMPORTED_MODULE_2__rm_point_rm_point__["a" /* RmPointPipe */], __WEBPACK_IMPORTED_MODULE_3__tofixe_tofixe__["a" /* TofixePipe */], __WEBPACK_IMPORTED_MODULE_4__to_fixe_number_to_fixe_number__["a" /* ToFixeNumberPipe */],
                __WEBPACK_IMPORTED_MODULE_5__key_key__["a" /* KeyPipe */],
                __WEBPACK_IMPORTED_MODULE_6__split_split__["a" /* SplitPipe */],
                __WEBPACK_IMPORTED_MODULE_7__tosymbol_tosymbol__["a" /* TosymbolPipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__currency_symbol_currency_symbol__["a" /* CurrencySymbolPipe */],
                __WEBPACK_IMPORTED_MODULE_2__rm_point_rm_point__["a" /* RmPointPipe */], __WEBPACK_IMPORTED_MODULE_3__tofixe_tofixe__["a" /* TofixePipe */], __WEBPACK_IMPORTED_MODULE_4__to_fixe_number_to_fixe_number__["a" /* ToFixeNumberPipe */],
                __WEBPACK_IMPORTED_MODULE_5__key_key__["a" /* KeyPipe */],
                __WEBPACK_IMPORTED_MODULE_6__split_split__["a" /* SplitPipe */],
                __WEBPACK_IMPORTED_MODULE_7__tosymbol_tosymbol__["a" /* TosymbolPipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencySymbolPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CurrencySymbolPipe = /** @class */ (function () {
    function CurrencySymbolPipe(http) {
        this.http = http;
        this.currency = {
            "BTC": {
                "symbol": "Ƀ",
                "name": "Bitcoin",
                "symbol_native": "Ƀ",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "BTC",
                "name_plural": "Bitcoin"
            },
            "USD": {
                "symbol": "$",
                "name": "US Dollar",
                "symbol_native": "$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "USD",
                "name_plural": "US dollars"
            },
            "CAD": {
                "symbol": "CA$",
                "name": "Canadian Dollar",
                "symbol_native": "$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "CAD",
                "name_plural": "Canadian dollars"
            },
            "EUR": {
                "symbol": "€",
                "name": "Euro",
                "symbol_native": "€",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "EUR",
                "name_plural": "euros"
            },
            "AED": {
                "symbol": "AED",
                "name": "United Arab Emirates Dirham",
                "symbol_native": "د.إ.‏",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "AED",
                "name_plural": "UAE dirhams"
            },
            "AFN": {
                "symbol": "Af",
                "name": "Afghan Afghani",
                "symbol_native": "؋",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "AFN",
                "name_plural": "Afghan Afghanis"
            },
            "ALL": {
                "symbol": "ALL",
                "name": "Albanian Lek",
                "symbol_native": "Lek",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "ALL",
                "name_plural": "Albanian lekë"
            },
            "AMD": {
                "symbol": "AMD",
                "name": "Armenian Dram",
                "symbol_native": "դր.",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "AMD",
                "name_plural": "Armenian drams"
            },
            "ARS": {
                "symbol": "AR$",
                "name": "Argentine Peso",
                "symbol_native": "$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "ARS",
                "name_plural": "Argentine pesos"
            },
            "AUD": {
                "symbol": "AU$",
                "name": "Australian Dollar",
                "symbol_native": "$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "AUD",
                "name_plural": "Australian dollars"
            },
            "AZN": {
                "symbol": "man.",
                "name": "Azerbaijani Manat",
                "symbol_native": "ман.",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "AZN",
                "name_plural": "Azerbaijani manats"
            },
            "BAM": {
                "symbol": "KM",
                "name": "Bosnia-Herzegovina Convertible Mark",
                "symbol_native": "KM",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "BAM",
                "name_plural": "Bosnia-Herzegovina convertible marks"
            },
            "BDT": {
                "symbol": "Tk",
                "name": "Bangladeshi Taka",
                "symbol_native": "৳",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "BDT",
                "name_plural": "Bangladeshi takas"
            },
            "BGN": {
                "symbol": "BGN",
                "name": "Bulgarian Lev",
                "symbol_native": "лв.",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "BGN",
                "name_plural": "Bulgarian leva"
            },
            "BHD": {
                "symbol": "BD",
                "name": "Bahraini Dinar",
                "symbol_native": "د.ب.‏",
                "decimal_digits": 3,
                "rounding": 0,
                "code": "BHD",
                "name_plural": "Bahraini dinars"
            },
            "BIF": {
                "symbol": "FBu",
                "name": "Burundian Franc",
                "symbol_native": "FBu",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "BIF",
                "name_plural": "Burundian francs"
            },
            "BND": {
                "symbol": "BN$",
                "name": "Brunei Dollar",
                "symbol_native": "$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "BND",
                "name_plural": "Brunei dollars"
            },
            "BOB": {
                "symbol": "Bs",
                "name": "Bolivian Boliviano",
                "symbol_native": "Bs",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "BOB",
                "name_plural": "Bolivian bolivianos"
            },
            "BRL": {
                "symbol": "R$",
                "name": "Brazilian Real",
                "symbol_native": "R$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "BRL",
                "name_plural": "Brazilian reals"
            },
            "BWP": {
                "symbol": "BWP",
                "name": "Botswanan Pula",
                "symbol_native": "P",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "BWP",
                "name_plural": "Botswanan pulas"
            },
            "BYR": {
                "symbol": "BYR",
                "name": "Belarusian Ruble",
                "symbol_native": "BYR",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "BYR",
                "name_plural": "Belarusian rubles"
            },
            "BZD": {
                "symbol": "BZ$",
                "name": "Belize Dollar",
                "symbol_native": "$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "BZD",
                "name_plural": "Belize dollars"
            },
            "CDF": {
                "symbol": "CDF",
                "name": "Congolese Franc",
                "symbol_native": "FrCD",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "CDF",
                "name_plural": "Congolese francs"
            },
            "CHF": {
                "symbol": "CHF",
                "name": "Swiss Franc",
                "symbol_native": "CHF",
                "decimal_digits": 2,
                "rounding": 0.05,
                "code": "CHF",
                "name_plural": "Swiss francs"
            },
            "CLP": {
                "symbol": "CL$",
                "name": "Chilean Peso",
                "symbol_native": "$",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "CLP",
                "name_plural": "Chilean pesos"
            },
            "CNY": {
                "symbol": "CN¥",
                "name": "Chinese Yuan",
                "symbol_native": "CN¥",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "CNY",
                "name_plural": "Chinese yuan"
            },
            "COP": {
                "symbol": "CO$",
                "name": "Colombian Peso",
                "symbol_native": "$",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "COP",
                "name_plural": "Colombian pesos"
            },
            "CRC": {
                "symbol": "₡",
                "name": "Costa Rican Colón",
                "symbol_native": "₡",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "CRC",
                "name_plural": "Costa Rican colóns"
            },
            "CVE": {
                "symbol": "CV$",
                "name": "Cape Verdean Escudo",
                "symbol_native": "CV$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "CVE",
                "name_plural": "Cape Verdean escudos"
            },
            "CZK": {
                "symbol": "Kč",
                "name": "Czech Republic Koruna",
                "symbol_native": "Kč",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "CZK",
                "name_plural": "Czech Republic korunas"
            },
            "DJF": {
                "symbol": "Fdj",
                "name": "Djiboutian Franc",
                "symbol_native": "Fdj",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "DJF",
                "name_plural": "Djiboutian francs"
            },
            "DKK": {
                "symbol": "Dkr",
                "name": "Danish Krone",
                "symbol_native": "kr",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "DKK",
                "name_plural": "Danish kroner"
            },
            "DOP": {
                "symbol": "RD$",
                "name": "Dominican Peso",
                "symbol_native": "RD$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "DOP",
                "name_plural": "Dominican pesos"
            },
            "DZD": {
                "symbol": "DA",
                "name": "Algerian Dinar",
                "symbol_native": "د.ج.‏",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "DZD",
                "name_plural": "Algerian dinars"
            },
            "EEK": {
                "symbol": "Ekr",
                "name": "Estonian Kroon",
                "symbol_native": "kr",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "EEK",
                "name_plural": "Estonian kroons"
            },
            "EGP": {
                "symbol": "EGP",
                "name": "Egyptian Pound",
                "symbol_native": "ج.م.‏",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "EGP",
                "name_plural": "Egyptian pounds"
            },
            "ERN": {
                "symbol": "Nfk",
                "name": "Eritrean Nakfa",
                "symbol_native": "Nfk",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "ERN",
                "name_plural": "Eritrean nakfas"
            },
            "ETB": {
                "symbol": "Br",
                "name": "Ethiopian Birr",
                "symbol_native": "Br",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "ETB",
                "name_plural": "Ethiopian birrs"
            },
            "GBP": {
                "symbol": "£",
                "name": "British Pound Sterling",
                "symbol_native": "£",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "GBP",
                "name_plural": "British pounds sterling"
            },
            "GEL": {
                "symbol": "GEL",
                "name": "Georgian Lari",
                "symbol_native": "GEL",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "GEL",
                "name_plural": "Georgian laris"
            },
            "GHS": {
                "symbol": "GH₵",
                "name": "Ghanaian Cedi",
                "symbol_native": "GH₵",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "GHS",
                "name_plural": "Ghanaian cedis"
            },
            "GNF": {
                "symbol": "FG",
                "name": "Guinean Franc",
                "symbol_native": "FG",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "GNF",
                "name_plural": "Guinean francs"
            },
            "GTQ": {
                "symbol": "GTQ",
                "name": "Guatemalan Quetzal",
                "symbol_native": "Q",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "GTQ",
                "name_plural": "Guatemalan quetzals"
            },
            "HKD": {
                "symbol": "HK$",
                "name": "Hong Kong Dollar",
                "symbol_native": "$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "HKD",
                "name_plural": "Hong Kong dollars"
            },
            "HNL": {
                "symbol": "HNL",
                "name": "Honduran Lempira",
                "symbol_native": "L",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "HNL",
                "name_plural": "Honduran lempiras"
            },
            "HRK": {
                "symbol": "kn",
                "name": "Croatian Kuna",
                "symbol_native": "kn",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "HRK",
                "name_plural": "Croatian kunas"
            },
            "HUF": {
                "symbol": "Ft",
                "name": "Hungarian Forint",
                "symbol_native": "Ft",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "HUF",
                "name_plural": "Hungarian forints"
            },
            "IDR": {
                "symbol": "Rp",
                "name": "Indonesian Rupiah",
                "symbol_native": "Rp",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "IDR",
                "name_plural": "Indonesian rupiahs"
            },
            "ILS": {
                "symbol": "₪",
                "name": "Israeli New Sheqel",
                "symbol_native": "₪",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "ILS",
                "name_plural": "Israeli new sheqels"
            },
            "INR": {
                "symbol": "Rs",
                "name": "Indian Rupee",
                "symbol_native": "টকা",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "INR",
                "name_plural": "Indian rupees"
            },
            "IQD": {
                "symbol": "IQD",
                "name": "Iraqi Dinar",
                "symbol_native": "د.ع.‏",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "IQD",
                "name_plural": "Iraqi dinars"
            },
            "IRR": {
                "symbol": "IRR",
                "name": "Iranian Rial",
                "symbol_native": "﷼",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "IRR",
                "name_plural": "Iranian rials"
            },
            "ISK": {
                "symbol": "Ikr",
                "name": "Icelandic Króna",
                "symbol_native": "kr",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "ISK",
                "name_plural": "Icelandic krónur"
            },
            "JMD": {
                "symbol": "J$",
                "name": "Jamaican Dollar",
                "symbol_native": "$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "JMD",
                "name_plural": "Jamaican dollars"
            },
            "JOD": {
                "symbol": "JD",
                "name": "Jordanian Dinar",
                "symbol_native": "د.أ.‏",
                "decimal_digits": 3,
                "rounding": 0,
                "code": "JOD",
                "name_plural": "Jordanian dinars"
            },
            "JPY": {
                "symbol": "¥",
                "name": "Japanese Yen",
                "symbol_native": "￥",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "JPY",
                "name_plural": "Japanese yen"
            },
            "KES": {
                "symbol": "Ksh",
                "name": "Kenyan Shilling",
                "symbol_native": "Ksh",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "KES",
                "name_plural": "Kenyan shillings"
            },
            "KHR": {
                "symbol": "KHR",
                "name": "Cambodian Riel",
                "symbol_native": "៛",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "KHR",
                "name_plural": "Cambodian riels"
            },
            "KMF": {
                "symbol": "CF",
                "name": "Comorian Franc",
                "symbol_native": "FC",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "KMF",
                "name_plural": "Comorian francs"
            },
            "KRW": {
                "symbol": "₩",
                "name": "South Korean Won",
                "symbol_native": "₩",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "KRW",
                "name_plural": "South Korean won"
            },
            "KWD": {
                "symbol": "KD",
                "name": "Kuwaiti Dinar",
                "symbol_native": "د.ك.‏",
                "decimal_digits": 3,
                "rounding": 0,
                "code": "KWD",
                "name_plural": "Kuwaiti dinars"
            },
            "KZT": {
                "symbol": "KZT",
                "name": "Kazakhstani Tenge",
                "symbol_native": "тңг.",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "KZT",
                "name_plural": "Kazakhstani tenges"
            },
            "LBP": {
                "symbol": "LB£",
                "name": "Lebanese Pound",
                "symbol_native": "ل.ل.‏",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "LBP",
                "name_plural": "Lebanese pounds"
            },
            "LKR": {
                "symbol": "SLRs",
                "name": "Sri Lankan Rupee",
                "symbol_native": "SL Re",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "LKR",
                "name_plural": "Sri Lankan rupees"
            },
            "LTL": {
                "symbol": "Lt",
                "name": "Lithuanian Litas",
                "symbol_native": "Lt",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "LTL",
                "name_plural": "Lithuanian litai"
            },
            "LVL": {
                "symbol": "Ls",
                "name": "Latvian Lats",
                "symbol_native": "Ls",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "LVL",
                "name_plural": "Latvian lati"
            },
            "LYD": {
                "symbol": "LD",
                "name": "Libyan Dinar",
                "symbol_native": "د.ل.‏",
                "decimal_digits": 3,
                "rounding": 0,
                "code": "LYD",
                "name_plural": "Libyan dinars"
            },
            "MAD": {
                "symbol": "MAD",
                "name": "Moroccan Dirham",
                "symbol_native": "د.م.‏",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "MAD",
                "name_plural": "Moroccan dirhams"
            },
            "MDL": {
                "symbol": "MDL",
                "name": "Moldovan Leu",
                "symbol_native": "MDL",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "MDL",
                "name_plural": "Moldovan lei"
            },
            "MGA": {
                "symbol": "MGA",
                "name": "Malagasy Ariary",
                "symbol_native": "MGA",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "MGA",
                "name_plural": "Malagasy Ariaries"
            },
            "MKD": {
                "symbol": "MKD",
                "name": "Macedonian Denar",
                "symbol_native": "MKD",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "MKD",
                "name_plural": "Macedonian denari"
            },
            "MMK": {
                "symbol": "MMK",
                "name": "Myanma Kyat",
                "symbol_native": "K",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "MMK",
                "name_plural": "Myanma kyats"
            },
            "MOP": {
                "symbol": "MOP$",
                "name": "Macanese Pataca",
                "symbol_native": "MOP$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "MOP",
                "name_plural": "Macanese patacas"
            },
            "MUR": {
                "symbol": "MURs",
                "name": "Mauritian Rupee",
                "symbol_native": "MURs",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "MUR",
                "name_plural": "Mauritian rupees"
            },
            "MXN": {
                "symbol": "MX$",
                "name": "Mexican Peso",
                "symbol_native": "$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "MXN",
                "name_plural": "Mexican pesos"
            },
            "MYR": {
                "symbol": "RM",
                "name": "Malaysian Ringgit",
                "symbol_native": "RM",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "MYR",
                "name_plural": "Malaysian ringgits"
            },
            "MZN": {
                "symbol": "MTn",
                "name": "Mozambican Metical",
                "symbol_native": "MTn",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "MZN",
                "name_plural": "Mozambican meticals"
            },
            "NAD": {
                "symbol": "N$",
                "name": "Namibian Dollar",
                "symbol_native": "N$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "NAD",
                "name_plural": "Namibian dollars"
            },
            "NGN": {
                "symbol": "₦",
                "name": "Nigerian Naira",
                "symbol_native": "₦",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "NGN",
                "name_plural": "Nigerian nairas"
            },
            "NIO": {
                "symbol": "C$",
                "name": "Nicaraguan Córdoba",
                "symbol_native": "C$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "NIO",
                "name_plural": "Nicaraguan córdobas"
            },
            "NOK": {
                "symbol": "Nkr",
                "name": "Norwegian Krone",
                "symbol_native": "kr",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "NOK",
                "name_plural": "Norwegian kroner"
            },
            "NPR": {
                "symbol": "NPRs",
                "name": "Nepalese Rupee",
                "symbol_native": "नेरू",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "NPR",
                "name_plural": "Nepalese rupees"
            },
            "NZD": {
                "symbol": "NZ$",
                "name": "New Zealand Dollar",
                "symbol_native": "$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "NZD",
                "name_plural": "New Zealand dollars"
            },
            "OMR": {
                "symbol": "OMR",
                "name": "Omani Rial",
                "symbol_native": "ر.ع.‏",
                "decimal_digits": 3,
                "rounding": 0,
                "code": "OMR",
                "name_plural": "Omani rials"
            },
            "PAB": {
                "symbol": "B/.",
                "name": "Panamanian Balboa",
                "symbol_native": "B/.",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "PAB",
                "name_plural": "Panamanian balboas"
            },
            "PEN": {
                "symbol": "S/.",
                "name": "Peruvian Nuevo Sol",
                "symbol_native": "S/.",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "PEN",
                "name_plural": "Peruvian nuevos soles"
            },
            "PHP": {
                "symbol": "₱",
                "name": "Philippine Peso",
                "symbol_native": "₱",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "PHP",
                "name_plural": "Philippine pesos"
            },
            "PKR": {
                "symbol": "PKRs",
                "name": "Pakistani Rupee",
                "symbol_native": "₨",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "PKR",
                "name_plural": "Pakistani rupees"
            },
            "PLN": {
                "symbol": "zł",
                "name": "Polish Zloty",
                "symbol_native": "zł",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "PLN",
                "name_plural": "Polish zlotys"
            },
            "PYG": {
                "symbol": "₲",
                "name": "Paraguayan Guarani",
                "symbol_native": "₲",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "PYG",
                "name_plural": "Paraguayan guaranis"
            },
            "QAR": {
                "symbol": "QR",
                "name": "Qatari Rial",
                "symbol_native": "ر.ق.‏",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "QAR",
                "name_plural": "Qatari rials"
            },
            "RON": {
                "symbol": "RON",
                "name": "Romanian Leu",
                "symbol_native": "RON",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "RON",
                "name_plural": "Romanian lei"
            },
            "RSD": {
                "symbol": "din.",
                "name": "Serbian Dinar",
                "symbol_native": "дин.",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "RSD",
                "name_plural": "Serbian dinars"
            },
            "RUB": {
                "symbol": "RUB",
                "name": "Russian Ruble",
                "symbol_native": "руб.",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "RUB",
                "name_plural": "Russian rubles"
            },
            "RWF": {
                "symbol": "RWF",
                "name": "Rwandan Franc",
                "symbol_native": "FR",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "RWF",
                "name_plural": "Rwandan francs"
            },
            "SAR": {
                "symbol": "SR",
                "name": "Saudi Riyal",
                "symbol_native": "ر.س.‏",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "SAR",
                "name_plural": "Saudi riyals"
            },
            "SDG": {
                "symbol": "SDG",
                "name": "Sudanese Pound",
                "symbol_native": "SDG",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "SDG",
                "name_plural": "Sudanese pounds"
            },
            "SEK": {
                "symbol": "Skr",
                "name": "Swedish Krona",
                "symbol_native": "kr",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "SEK",
                "name_plural": "Swedish kronor"
            },
            "SGD": {
                "symbol": "S$",
                "name": "Singapore Dollar",
                "symbol_native": "$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "SGD",
                "name_plural": "Singapore dollars"
            },
            "SOS": {
                "symbol": "Ssh",
                "name": "Somali Shilling",
                "symbol_native": "Ssh",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "SOS",
                "name_plural": "Somali shillings"
            },
            "SYP": {
                "symbol": "SY£",
                "name": "Syrian Pound",
                "symbol_native": "ل.س.‏",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "SYP",
                "name_plural": "Syrian pounds"
            },
            "THB": {
                "symbol": "฿",
                "name": "Thai Baht",
                "symbol_native": "฿",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "THB",
                "name_plural": "Thai baht"
            },
            "TND": {
                "symbol": "DT",
                "name": "Tunisian Dinar",
                "symbol_native": "د.ت.‏",
                "decimal_digits": 3,
                "rounding": 0,
                "code": "TND",
                "name_plural": "Tunisian dinars"
            },
            "TOP": {
                "symbol": "T$",
                "name": "Tongan Paʻanga",
                "symbol_native": "T$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "TOP",
                "name_plural": "Tongan paʻanga"
            },
            "TRY": {
                "symbol": "TL",
                "name": "Turkish Lira",
                "symbol_native": "TL",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "TRY",
                "name_plural": "Turkish Lira"
            },
            "TTD": {
                "symbol": "TT$",
                "name": "Trinidad and Tobago Dollar",
                "symbol_native": "$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "TTD",
                "name_plural": "Trinidad and Tobago dollars"
            },
            "TWD": {
                "symbol": "NT$",
                "name": "New Taiwan Dollar",
                "symbol_native": "NT$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "TWD",
                "name_plural": "New Taiwan dollars"
            },
            "TZS": {
                "symbol": "TSh",
                "name": "Tanzanian Shilling",
                "symbol_native": "TSh",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "TZS",
                "name_plural": "Tanzanian shillings"
            },
            "UAH": {
                "symbol": "₴",
                "name": "Ukrainian Hryvnia",
                "symbol_native": "₴",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "UAH",
                "name_plural": "Ukrainian hryvnias"
            },
            "UGX": {
                "symbol": "USh",
                "name": "Ugandan Shilling",
                "symbol_native": "USh",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "UGX",
                "name_plural": "Ugandan shillings"
            },
            "UYU": {
                "symbol": "$U",
                "name": "Uruguayan Peso",
                "symbol_native": "$",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "UYU",
                "name_plural": "Uruguayan pesos"
            },
            "UZS": {
                "symbol": "UZS",
                "name": "Uzbekistan Som",
                "symbol_native": "UZS",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "UZS",
                "name_plural": "Uzbekistan som"
            },
            "VEF": {
                "symbol": "Bs.F.",
                "name": "Venezuelan Bolívar",
                "symbol_native": "Bs.F.",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "VEF",
                "name_plural": "Venezuelan bolívars"
            },
            "VND": {
                "symbol": "₫",
                "name": "Vietnamese Dong",
                "symbol_native": "₫",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "VND",
                "name_plural": "Vietnamese dong"
            },
            "XAF": {
                "symbol": "FCFA",
                "name": "CFA Franc BEAC",
                "symbol_native": "FCFA",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "XAF",
                "name_plural": "CFA francs BEAC"
            },
            "XOF": {
                "symbol": "CFA",
                "name": "CFA Franc BCEAO",
                "symbol_native": "CFA",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "XOF",
                "name_plural": "CFA francs BCEAO"
            },
            "YER": {
                "symbol": "YR",
                "name": "Yemeni Rial",
                "symbol_native": "ر.ي.‏",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "YER",
                "name_plural": "Yemeni rials"
            },
            "ZAR": {
                "symbol": "R",
                "name": "South African Rand",
                "symbol_native": "R",
                "decimal_digits": 2,
                "rounding": 0,
                "code": "ZAR",
                "name_plural": "South African rand"
            },
            "ZMK": {
                "symbol": "ZK",
                "name": "Zambian Kwacha",
                "symbol_native": "ZK",
                "decimal_digits": 0,
                "rounding": 0,
                "code": "ZMK",
                "name_plural": "Zambian kwachas"
            }
        };
    }
    CurrencySymbolPipe.prototype.getCurrensy = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get('./assets/lot of data/currency.json')
                .toPromise()
                .then(function (response) {
                _this.currency = response;
                resolve();
            });
        });
    };
    CurrencySymbolPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (this.currency[value] != undefined) {
            return this.currency[value].symbol;
        }
        else {
            return '$';
        }
    };
    CurrencySymbolPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
            name: 'currencySymbol',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CurrencySymbolPipe);
    return CurrencySymbolPipe;
}());

//# sourceMappingURL=currency-symbol.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RmPointPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the RmPointPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var RmPointPipe = /** @class */ (function () {
    function RmPointPipe() {
    }
    /**
     * Takes a value and remove it point if there.
     */
    RmPointPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!value) {
            return " ";
        }
        return value.split(".")[0];
    };
    RmPointPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
            name: 'rmPoint',
        })
    ], RmPointPipe);
    return RmPointPipe;
}());

//# sourceMappingURL=rm-point.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TofixePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TofixePipe = /** @class */ (function () {
    function TofixePipe() {
    }
    TofixePipe.prototype.transform = function (num) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (num == undefined)
            return 0;
        num = Number(num);
        if (num == 0)
            return 0;
        var isPositive = true;
        if (num < 0) {
            isPositive = false;
            num *= -1;
        }
        if (num < 100) {
            if (num < 10) {
                if (num < 1) {
                    if (num < 0.01) {
                        if (num < 0.001) {
                            if (num < 0.0001) {
                                if (num < 0.00001) {
                                    if (num < 0.000001) {
                                        if (num < 0.0000001) {
                                            if (num < 0.00000001) {
                                                if (num < 0.000000001) {
                                                    if (num < 0.0000000001) {
                                                        if (num < 0.00000000001) {
                                                            if (num < 0.000000000001) {
                                                                if (num < 0.0000000000001) {
                                                                    return isPositive ? Number(num.toFixed(14)) : Number(num.toFixed(14)) * -1;
                                                                }
                                                                return isPositive ? Number(num.toFixed(13)) : Number(num.toFixed(13)) * -1;
                                                            }
                                                            return isPositive ? Number(num.toFixed(12)) : Number(num.toFixed(12)) * -1;
                                                        }
                                                        return isPositive ? Number(num.toFixed(11)) : Number(num.toFixed(11)) * -1;
                                                    }
                                                    return isPositive ? Number(num.toFixed(10)) : Number(num.toFixed(10)) * -1;
                                                }
                                                return isPositive ? Number(num.toFixed(9)) : Number(num.toFixed(9)) * -1;
                                            }
                                            return isPositive ? Number(num.toFixed(8)) : Number(num.toFixed(8)) * -1;
                                        }
                                        return isPositive ? Number(num.toFixed(7)) : Number(num.toFixed(7)) * -1;
                                    }
                                    return isPositive ? Number(num.toFixed(6)) : Number(num.toFixed(6)) * -1;
                                }
                                return isPositive ? Number(num.toFixed(5)) : Number(num.toFixed(5)) * -1;
                            }
                            return isPositive ? Number(num.toFixed(4)) : Number(num.toFixed(4)) * -1;
                        }
                        return isPositive ? Number(num.toFixed(4)) : Number(num.toFixed(4)) * -1;
                    }
                    return isPositive ? Number(num.toFixed(4)) : Number(num.toFixed(4)) * -1;
                }
                return isPositive ? Number(num.toFixed(4)) : Number(num.toFixed(4)) * -1;
            }
            return isPositive ? Number(num.toFixed(3)) : Number(num.toFixed(3)) * -1;
        }
        if (num > 10000) {
            return isPositive ? Number(num.toFixed(1)) : Number(num.toFixed(1)) * -1;
        }
        return Number(num.toFixed(2));
    };
    TofixePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
            name: 'tofixe',
        })
    ], TofixePipe);
    return TofixePipe;
}());

//# sourceMappingURL=tofixe.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToFixeNumberPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ToFixeNumberPipe = /** @class */ (function () {
    function ToFixeNumberPipe() {
    }
    ToFixeNumberPipe.prototype.transform = function (num) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (num == undefined)
            return 0;
        if (num == 0)
            return 0;
        var isPositive = true;
        if (num < 0) {
            isPositive = false;
            num *= -1;
        }
        if (num < 100) {
            if (num < 0.01) {
                if (num < 0.001) {
                    if (num < 0.0001) {
                        if (num < 0.00001) {
                            if (num < 0.000001) {
                                if (num < 0.0000001) {
                                    if (num < 0.00000001) {
                                        if (num < 0.000000001) {
                                            if (num < 0.0000000001) {
                                                if (num < 0.00000000001) {
                                                    if (num < 0.000000000001) {
                                                        if (num < 0.0000000000001) {
                                                            return isPositive ? Number(num.toFixed(14)) : Number(num.toFixed(14)) * -1;
                                                        }
                                                        return isPositive ? Number(num.toFixed(13)) : Number(num.toFixed(13)) * -1;
                                                    }
                                                    return isPositive ? Number(num.toFixed(12)) : Number(num.toFixed(12)) * -1;
                                                }
                                                return isPositive ? Number(num.toFixed(11)) : Number(num.toFixed(11)) * -1;
                                            }
                                            return isPositive ? Number(num.toFixed(10)) : Number(num.toFixed(10)) * -1;
                                        }
                                        return isPositive ? Number(num.toFixed(9)) : Number(num.toFixed(9)) * -1;
                                    }
                                    return isPositive ? Number(num.toFixed(8)) : Number(num.toFixed(8)) * -1;
                                }
                                return isPositive ? Number(num.toFixed(7)) : Number(num.toFixed(7)) * -1;
                            }
                            return isPositive ? Number(num.toFixed(6)) : Number(num.toFixed(6)) * -1;
                        }
                        return isPositive ? Number(num.toFixed(5)) : Number(num.toFixed(5)) * -1;
                    }
                    return isPositive ? Number(num.toFixed(4)) : Number(num.toFixed(4)) * -1;
                }
                return isPositive ? Number(num.toFixed(3)) : Number(num.toFixed(3)) * -1;
            }
            return isPositive ? Number(num.toFixed(2)) : Number(num.toFixed(2)) * -1;
        }
        return isPositive ? Number(num.toFixed(2)) : Number(num.toFixed(2)) * -1;
    };
    ToFixeNumberPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
            name: 'toFixeNumber',
        })
    ], ToFixeNumberPipe);
    return ToFixeNumberPipe;
}());

//# sourceMappingURL=to-fixe-number.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeyPipe = /** @class */ (function () {
    function KeyPipe() {
    }
    KeyPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return Object.keys(value)[0];
    };
    KeyPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
            name: 'key',
        })
    ], KeyPipe);
    return KeyPipe;
}());

//# sourceMappingURL=key.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplitPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SplitPipe = /** @class */ (function () {
    function SplitPipe() {
    }
    SplitPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return value.split("_")[0] + "/" + value.split("_")[1];
    };
    SplitPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
            name: 'split',
        })
    ], SplitPipe);
    return SplitPipe;
}());

//# sourceMappingURL=split.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TosymbolPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the TosymbolPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var TosymbolPipe = /** @class */ (function () {
    function TosymbolPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    TosymbolPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return value.split("_")[1];
    };
    TosymbolPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
            name: 'tosymbol',
        })
    ], TosymbolPipe);
    return TosymbolPipe;
}());

//# sourceMappingURL=tosymbol.js.map

/***/ }),

/***/ 600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortFolioTransactionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_animations__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_data_auth_data__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_crypto_crypto__ = __webpack_require__(303);
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





// import { ToFixeNumberPipe } from '../../pipes/to-fixe-number/to-fixe-number';



var PortFolioTransactionPage = /** @class */ (function () {
    function PortFolioTransactionPage(trackEvent, auth, navCtrl, navParams, http, cryptoprovider, loadingCtrl, alertCtrl) {
        this.trackEvent = trackEvent;
        this.auth = auth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.cryptoprovider = cryptoprovider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.SUBMITBUTTON = "";
        this.PriceBTCPlaceholder = 0;
        this.PriceUSDPlaceholder = 0;
        this.PriceBTC = false;
        this.PriceUSD = false;
        this.CurrenPrice = 0;
        this.AboveBox = false;
        this.BelowBox = false;
        this.Note = "";
        this.isAlert = false;
        this.signtosymbol = "";
        this.Pairs = [];
        var now = new Date();
        this.DateNow = now.toISOString().split('T')[0];
        if (navParams.get("transaction")) {
            this.SUBMITBUTTON = "UPDATE TRANSACTION";
            console.log("navParams.get('transaction')");
            this.ComeForEdit = true;
            this.innitializeWithExistingParams();
        }
        else {
            this.SUBMITBUTTON = "ADD TRANSACTION";
            console.log("!navParams.get('transaction')");
            this.ComeForEdit = false;
            this.innitializeWithNewParams();
        }
    }
    PortFolioTransactionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PortFolioTransactionPage');
    };
    PortFolioTransactionPage.prototype.innitializeTradingPairSelect = function () {
        var _this = this;
        return new Promise(function (resolve) {
            for (var index = 0; index < _this.cryptoprovider.arrAllCrypto.length; index++)
                _this.Pairs.push(_this.cryptoprovider.arrAllCrypto[index].pair);
            resolve(_this.cryptoprovider.arrAllCrypto[0].pair);
        });
    };
    PortFolioTransactionPage.prototype.innitializeExtchangeSelect = function (from, to, comeForInnitialize) {
        var _this = this;
        return new Promise(function (resolve) {
            console.log('http://afternoon-mountain-15657.herokuapp.com/Exchanges/' + from + '/' + to);
            _this.http.get('http://afternoon-mountain-15657.herokuapp.com/Exchanges/' + from + '/' + to).toPromise()
                .then(function (data) {
                if (!comeForInnitialize) {
                    console.log("innitializeExtchangeSelect -> comeForInnitialize");
                    console.log(data);
                    for (var index = 0; index < data.length; index++) {
                        if ("Hitbtc" != data[index])
                            _this.Exchange = data[index];
                    }
                }
                _this.Exchanges = data;
                resolve(data[0]);
            });
        });
    };
    PortFolioTransactionPage.prototype.onSelectExchange = function () {
        var _this = this;
        var arr = this.Pair.split('_');
        this.getPrice(arr[0], arr[1], this.Exchange);
        this.getPriceToBtcAndUsd().then(function (prices) {
            _this.PriceBTCPlaceholder = prices.BTC;
            _this.PriceUSDPlaceholder = prices.USD;
            _this.PriceBTCInput = prices.BTC;
            _this.PriceUSDInput = prices.USD;
        });
    };
    PortFolioTransactionPage.prototype.onSelectPair = function () {
        var _this = this;
        var arr = this.Pair.split('_');
        console.log(arr);
        if (arr[1] != "BTC" && arr[0] != "BTC") {
            this.PriceBTC = true;
        }
        else {
            this.PriceBTC = false;
        }
        if (arr[1] != "USD" && arr[0] != "USD") {
            this.PriceUSD = true;
        }
        else {
            this.PriceUSD = false;
        }
        this.innitializeExtchangeSelect(arr[0], arr[1]).then(function (ex) {
            _this.getPrice(arr[0], arr[1], ex);
            _this.getPriceToBtcAndUsd().then(function (prices) {
                _this.PriceBTCPlaceholder = prices.BTC;
                _this.PriceUSDPlaceholder = prices.USD;
                _this.PriceBTCInput = prices.BTC;
                _this.PriceUSDInput = prices.USD;
            });
        });
    };
    PortFolioTransactionPage.prototype.getPrice = function (from, to, ex, init) {
        var _this = this;
        console.log(from, to, ex, init);
        this.http.get("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=" + from + "&tsyms=" + to)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.CurrenPrice = (data["RAW"][from][to].PRICE);
            var a = _this.CurrenPrice * 0.3;
            var b = _this.CurrenPrice * 1.3;
            _this.Below = _this.toFixeNumber(a);
            _this.Above = _this.toFixeNumber(b);
            _this.signtosymbol = (data["DISPLAY"][from][to].TOSYMBOL);
            if (!init) {
                _this.Price = (data["RAW"][from][to].PRICE);
            }
        });
    };
    PortFolioTransactionPage.prototype.addTransaction = function () {
        var _this = this;
        this.error = "";
        console.log(this.Exchange, this.Pair, this.Price, this.Amount, this.isAlert, this.Note, this.AboveBox, this.BelowBox);
        if (this.isAlert) {
            if (!this.AboveBox && !this.BelowBox) {
                this.error = "You must select Above or Below";
                return;
            }
            if (this.AboveBox && ((this.Above == null) || (this.Above < 0.0000001))) {
                this.error = "Please enter valid numerical <Above> amount";
                return;
            }
            if (this.BelowBox && ((this.Below == null) || (this.Below < 0.0000001))) {
                this.error = "Please enter valid numerical <Below> amount";
                return;
            }
        }
        if (this.Amount == null) {
            this.Amount = 1;
        }
        if (this.Amount < 0.0000001) {
            this.error = "You must enter a valid amount";
            return;
        }
        if (this.Price == null) {
            this.Price = this.CurrenPrice;
        }
        if (this.Price < 0.0000001) {
            this.error = "You must enter a valid price";
            return;
        }
        if (this.PriceBTC) {
            if (this.PriceBTCInput != null) {
                if (this.PriceBTCInput < 0.000000001) {
                    this.error = "Please enter a valid numerical BTC Price";
                    return;
                }
            }
        }
        if (this.PriceUSD) {
            if (this.PriceUSDInput != null) {
                if (this.PriceUSDInput < 0.000000001) {
                    this.error = "Please enter a valid numerical USD Price";
                    return;
                }
            }
        }
        //every thing is correct
        this.loading = this.loadingCtrl.create({ duration: 10000 });
        this.loading.present();
        var ab = 0, bl;
        if (this.BelowBox) {
            bl = this.Below;
        }
        else {
            bl = 0;
        }
        if (this.AboveBox) {
            ab = this.Above;
        }
        else {
            ab = 0;
        }
        var tmpdata = {
            UserUid: this.auth.user._id,
            name: this.auth.user.first_name,
            phone: this.auth.user.phone_number,
            email: this.auth.user.email,
            FROMSYMBOL: this.Pair.split('_')[0],
            TOSYMBOL: this.Pair.split('_')[1],
            Exchange: this.Exchange,
            Persistent: false,
            Mailcheck: false,
            Above: ab,
            Below: Number(bl).toFixed(10).replace(/\.?0+$/, ""),
            SignToSymbole: this.signtosymbol,
            isAppend: false
        };
        if (this.ComeForEdit)
            if (this.ExistingTransaction.AlertID)
                tmpdata["_id"] = this.ExistingTransaction.AlertID;
        if ((!this.isAlert && !this.ComeForEdit) || (!this.isAlert && this.ComeForEdit && !this.ExistingTransaction.AlertID)) {
            this.addTransactionInServe();
        }
        else if (this.isAlert && this.ComeForEdit && this.ExistingTransaction.AlertID) {
            this.setAlertInserverAndGetUid(tmpdata, "updateAlert").then(function (alertid) {
                _this.addTransactionInServe(alertid);
            });
        }
        else if (!this.isAlert && this.ComeForEdit && this.ExistingTransaction.AlertID) {
            this.setAlertInserverAndGetUid(tmpdata, "DeleteAlert").then(function (alertid) {
                _this.addTransactionInServe();
            });
        }
        else if ((this.isAlert && !this.ComeForEdit) || (this.isAlert && this.ComeForEdit && !this.ExistingTransaction.AlertID)) {
            this.setAlertInserverAndGetUid(tmpdata, "AddAlert").then(function (alertid) {
                _this.addTransactionInServe(alertid);
                _this.trackEvent.trackEvent("port-folio transaction", "add alert");
            });
        }
    };
    PortFolioTransactionPage.prototype.addTransactionInServe = function (alertUid) {
        var alertid;
        if (alertUid == undefined) {
            alertid = false;
        }
        else {
            alertid = alertUid;
        }
        var data = {
            UserUid: this.auth.user._id,
            Exchange: this.Exchange,
            From: this.Pair.split('_')[0],
            To: this.Pair.split('_')[1],
            Amount: this.Amount,
            Note: this.Note,
            Date: this.DateTransaction,
            AlertID: alertid,
            Price: this.Price,
            signtosymbol: this.signtosymbol
        };
        //USD
        if (this.PriceUSD) {
            if (this.PriceUSDInput != null) {
                data["CostInUSD"] = this.PriceUSDInput;
            }
            else {
                data["CostInUSD"] = this.PriceUSDPlaceholder;
            }
        }
        else {
            if (this.Price != null) {
                data["CostInUSD"] = this.Price;
            }
            else {
                data["CostInUSD"] = this.Price;
            }
        }
        // if (this.Pair.split("/")[1] == "BTC") {
        //   data["CostInBTC"] = this.Price
        // } else {
        //   if (this.PriceBTCInput != null) {
        //     data["CostInBTC"] = this.PriceBTCInput
        //   } else {
        //     this.PriceBTCInput = this.PriceBTCPlaceholder
        //     data["CostInBTC"] = this.PriceBTCPlaceholder
        //   }
        // }
        //BTC
        if (this.PriceBTC) {
            if (this.PriceBTCInput != null) {
                data["CostInBTC"] = this.PriceBTCInput;
            }
            else {
                data["CostInBTC"] = this.PriceBTCPlaceholder;
            }
        }
        else {
            data["CostInBTC"] = this.PriceBTCPlaceholder;
        }
        console.log(data);
        // if (this.Pair.split("/")[1] == "USD") {
        //   data["CostInUSD"] = this.Price
        // } else {
        //   if (this.PriceUSDInput != null) {
        //     data["CostInUSD"] = this.PriceUSDInput
        //   } else {
        //     this.PriceUSDInput = this.PriceUSDPlaceholder
        //     data["CostInUSD"] = this.PriceUSDPlaceholder
        //   }
        // }
        this.postTransaction(data);
        //  else {
        //   this.getPriceToBtcAndUsd().then(Prices => {
        //     if (this.PriceBTC) {
        //       data["CostInBTC"] = Prices.BTC
        //     } else {
        //       data["CostInBTC"] = Prices.BTC
        //     }
        //     if (this.PriceBTC) {
        //       data["CostInUSD"] = this.PriceBTCInput == null ? this.PriceBTCInput : this.PriceBTCPlaceholder
        //     } else {
        //       data["CostInUSD"] = this.PriceUSDInput == null ? this.PriceUSDInput : this.PriceUSDPlaceholder
        //     }
        //     console.log(data);
        //     this.postTransaction(data)
        //   })
        // }
    };
    PortFolioTransactionPage.prototype.postTransaction = function (dataTransaction) {
        var _this = this;
        var action;
        if (this.ComeForEdit) {
            action = "updateTransaction";
            console.log("this.ComeForEdit", this.ExistingTransaction._id);
            dataTransaction["_id"] = this.ExistingTransaction._id;
        }
        else {
            action = "AddTransaction";
        }
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        header.append('Content-Type', 'application/json');
        this.http.post("http://afternoon-mountain-15657.herokuapp.com/api/" + action, dataTransaction)
            .toPromise()
            .then(function (data) {
            _this.loading.dismiss();
            _this.navCtrl.pop();
            _this.trackEvent.trackView("port-folio transaction");
        }).catch(function (err) {
            _this.loading.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Sorry!',
                subTitle: "Unable to add transaction right now - Please try again later",
                buttons: ['Ok']
            });
            alert.present();
        });
    };
    PortFolioTransactionPage.prototype.getPriceToBtcAndUsd = function () {
        var _this = this;
        var prices = {};
        var TO_IS_BTC = false;
        var TO_IS_USD = false;
        console.log(this.Pair.split("_")[0], this.Pair);
        return new Promise(function (resolve, reject) {
            if (_this.Pair.split("_")[1] == "BTC") {
                prices["BTC"] = _this.Price;
                TO_IS_BTC = true;
            }
            else if (_this.Pair.split("_")[1] == "USD") {
                TO_IS_USD = true;
                prices["USD"] = _this.Price;
            }
            if (!TO_IS_USD && !TO_IS_BTC) {
                _this.getPriceWithConvertion(_this.Pair.split("_")[0], "USD", _this.Exchange).then(function (data) {
                    prices["USD"] = data.price;
                    _this.getPriceWithConvertion(_this.Pair.split("_")[0], "BTC", _this.Exchange).then(function (data) {
                        prices["BTC"] = data.price;
                        resolve(prices);
                    }).catch(function () {
                        reject("err");
                    });
                });
            }
            else if (!TO_IS_BTC && TO_IS_USD) {
                if (_this.Pair.split("_")[0] == "BTC") {
                    prices["BTC"] = 1;
                    resolve(prices);
                }
                else {
                    _this.getPriceWithConvertion(_this.Pair.split("_")[0], "BTC", _this.Exchange).then(function (data) {
                        prices["BTC"] = data.price;
                        resolve(prices);
                    }).catch(function () {
                        reject("err");
                    });
                }
            }
            else {
                _this.getPriceWithConvertion(_this.Pair.split("_")[0], "USD", _this.Exchange).then(function (data) {
                    prices["USD"] = data.price;
                    console.log(data);
                    resolve(prices);
                }).catch(function () {
                    reject("err");
                });
            }
        });
    };
    PortFolioTransactionPage.prototype.getPriceWithConvertion = function (from, to, exchange) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var a;
            if (from == to) {
                a = {
                    price: 1
                };
                console.log("jjj");
                resolve(a);
            }
            else {
                console.log("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=" + from + "&tsyms=" + to);
                var url = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=" + from + "&tsyms=" + to;
                _this.http.get(url).toPromise().then(function (data) {
                    if (data["Response"] != undefined) {
                        var toTmp = to == "USD" ? "BTC" : "USD";
                        _this.convertion(from, toTmp, to, exchange).then(function (PriceData) {
                            console.log(from, toTmp, to, _this.Pair);
                            resolve(PriceData);
                        })
                            .catch(function (err) {
                            reject(err);
                        });
                    }
                    else {
                        var tofixedPrice = (data["RAW"][from][to].PRICE) < 1 && (data["RAW"][from][to].PRICE) > -1 ? 6 : 2;
                        var price = Number(Number(data["RAW"][from][to].PRICE).toFixed(tofixedPrice));
                        a = {
                            price: price
                        };
                        resolve(a);
                    }
                });
            }
        });
    };
    PortFolioTransactionPage.prototype.convertion = function (fromRequire, toTmp, toRequire, exchange) {
        var _this = this;
        console.log(fromRequire + "/" + toRequire + " is called by asking to convert it with " + toTmp);
        return new Promise(function (resolve, reject) {
            var url1 = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=" + fromRequire + "&tsyms=" + toTmp;
            _this.http.get(url1, { responseType: 'json' }).toPromise().then(function (data1) {
                if (data1["Response"] != undefined) {
                    //error... we need to think what todo
                    console.log("a");
                    reject("error");
                }
                else {
                    var fromRequire_ToTmp_Value = data1["RAW"][fromRequire][toTmp].PRICE;
                    //call btc/usd
                    console.log("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=" + toTmp + "&tsyms=" + toRequire);
                    var url = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=" + toTmp + "&tsyms=" + toRequire;
                    _this.http.get(url, { responseType: 'json' }).toPromise().then(function (data) {
                        console.log(data);
                        if (data["Response"] != undefined) {
                            //error... low chance that happens.... beacause every time the call of btc/usd or usd btc exist for every exchange
                            console.log("a");
                            reject("error");
                        }
                        else {
                            console.log("b");
                            var toTmptoRequireValue = data["RAW"][toTmp][toRequire].PRICE;
                            var fromRequiretoRequireValue = _this.toFixeNumber(toTmptoRequireValue * fromRequire_ToTmp_Value);
                            var a = {
                                price: fromRequiretoRequireValue
                            };
                            resolve(a);
                        }
                    });
                }
            });
        });
    };
    PortFolioTransactionPage.prototype.setAlertInserverAndGetUid = function (dataForTheDatabase, action) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            header.append('Content-Type', 'application/json');
            _this.http.post('https://afternoon-mountain-15657.herokuapp.com/api/' + action, dataForTheDatabase)
                .toPromise()
                .then(function (AlertUid) {
                if (action == "AddAlert") {
                    resolve(AlertUid["data"].insertedIds["0"]);
                }
                else if (action == "updateAlert") {
                    resolve(_this.ExistingTransaction.AlertID);
                }
                else {
                    resolve(true);
                }
                // console.log(AlertUid.json().data.insertedIds["0"]);
            })
                .catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    PortFolioTransactionPage.prototype.innitializeWithExistingParams = function () {
        var _this = this;
        this.ExistingTransaction = this.navParams.get("transaction");
        console.log(this.ExistingTransaction);
        this.DateTransaction = this.ExistingTransaction.data;
        this.Price = this.ExistingTransaction.Price;
        this.CurrenPrice = this.Price;
        this.Amount = this.ExistingTransaction.Amount;
        this.Note = this.ExistingTransaction.Note;
        this.DateTransaction = this.ExistingTransaction.Date;
        this.Pair = this.ExistingTransaction.From + "_" + this.ExistingTransaction.To;
        this.Exchange = this.ExistingTransaction.Exchange;
        this.PriceUSDPlaceholder = this.ExistingTransaction.CostInUSD;
        this.PriceBTCPlaceholder = this.ExistingTransaction.CostInBTC;
        this.PriceBTCInput = this.ExistingTransaction.CostInBTC;
        this.PriceUSDInput = this.ExistingTransaction.CostInUSD;
        this.flagForDate = true;
        this.innitializeTradingPairSelect();
        var arr = this.Pair.split('_');
        if (arr[1] = "BTC") {
            this.PriceBTC = true;
        }
        if (arr[1] != "USD") {
            this.PriceUSD = true;
        }
        console.log("aaaa");
        // this.innitializeExtchangeSelect(arr[0], arr[1], true)
        console.log(arr[0], arr[1], this.Exchange, true);
        // this.getPrice(arr[0], arr[1], this.Exchange, true)
        if (this.ExistingTransaction.AlertID) {
            this.isAlert = true;
            var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            header.append('Content-Type', 'application/json');
            this.http.post("https://afternoon-mountain-15657.herokuapp.com/api/getAlerts", {
                "UserUid": this.auth.user._id
            })
                .toPromise()
                .then(function (alerts) {
                for (var index = 0; index < alerts.length; index++) {
                    if (alerts[index]._id == _this.ExistingTransaction.AlertID) {
                        if (alerts[index].Above) {
                            _this.AboveBox = true;
                            _this.Above = alerts[index].Above;
                        }
                        if (alerts[index].Below) {
                            _this.BelowBox = true;
                            _this.Below = alerts[index].Below;
                        }
                    }
                }
            });
        }
        else {
            var a = this.CurrenPrice * 0.3;
            var b = this.CurrenPrice * 1.3;
            this.Below = this.toFixeNumber(a);
            this.Above = this.toFixeNumber(b);
        }
    };
    PortFolioTransactionPage.prototype.innitializeWithNewParams = function () {
        var _this = this;
        this.DateTransaction = this.DateNow;
        this.innitializeTradingPairSelect().then(function (pair) {
            console.log(pair);
            if (_this.navParams.get('pair'))
                _this.Pair = _this.navParams.get('pair');
            else
                _this.Pair = pair;
            var arr = pair.split('_');
            arr[1] != "USD" && arr[0] != "USD" ? _this.PriceUSD = true : _this.PriceUSD = false;
            arr[1] != "BTC" && arr[0] != "BTC" ? _this.PriceBTC = true : _this.PriceBTC = false;
            // this.innitializeExtchangeSelect(arr[0], arr[1], false).then(exchange => {
            console.log("this.getPrice(", arr[0], arr[1]);
            _this.getPrice(arr[0], arr[1], "");
            _this.getPriceToBtcAndUsd().then(function (prices) {
                _this.PriceBTCPlaceholder = prices.BTC;
                _this.PriceUSDPlaceholder = prices.USD;
            });
        });
        // })
    };
    PortFolioTransactionPage.prototype.changeDate = function () {
        return;
        // if (this.DateNow != this.DateTransaction) {
        //   if (this.flagForDate) return
        //   this.flagForDate = true
        //   let arr = this.Pair.split('/')
        //   if (this.DateTransaction != this.DateNow) {
        //     if (arr[1] != "USD") {
        //       this.PriceUSD = true
        //       this.getPriceWithConvertion(this.Pair.split("/")[0], "USD", this.Exchange).then(Price => {
        //         this.PriceUSDInput = Price.price
        //         this.PriceUSDPlaceholder = Price.price
        //       })
        //     } else {
        //       this.PriceUSD = false
        //     }
        //     if (arr[1] != "BTC") {
        //       this.PriceBTC = true
        //       this.getPriceWithConvertion(this.Pair.split("/")[0], "BTC", this.Exchange).then(Price => {
        //         this.PriceBTCPlaceholder = Price.price
        //         this.PriceBTCInput = Price.price
        //       })
        //     } else {
        //       this.PriceBTC = false
        //     }
        //   }
        // } else {
        //   this.flagForDate = false
        //   this.PriceBTC = false
        //   this.PriceUSD = false
        // }
    };
    PortFolioTransactionPage.prototype.toFixeNumber = function (num) {
        if (num == undefined)
            return 0;
        console.log(num);
        if (num == 0)
            return 0;
        var isPositive = true;
        if (num < 0) {
            isPositive = false;
            num *= -1;
        }
        if (num < 100) {
            if (num < 0.01) {
                if (num < 0.001) {
                    if (num < 0.0001) {
                        if (num < 0.00001) {
                            if (num < 0.000001) {
                                if (num < 0.0000001) {
                                    if (num < 0.00000001) {
                                        if (num < 0.000000001) {
                                            if (num < 0.0000000001) {
                                                if (num < 0.00000000001) {
                                                    if (num < 0.000000000001) {
                                                        if (num < 0.0000000000001) {
                                                            return isPositive ? Number(num.toFixed(14)) : Number(num.toFixed(14)) * -1;
                                                        }
                                                        return isPositive ? Number(num.toFixed(13)) : Number(num.toFixed(13)) * -1;
                                                    }
                                                    return isPositive ? Number(num.toFixed(12)) : Number(num.toFixed(12)) * -1;
                                                }
                                                return isPositive ? Number(num.toFixed(11)) : Number(num.toFixed(11)) * -1;
                                            }
                                            return isPositive ? Number(num.toFixed(10)) : Number(num.toFixed(10)) * -1;
                                        }
                                        return isPositive ? Number(num.toFixed(9)) : Number(num.toFixed(9)) * -1;
                                    }
                                    return isPositive ? Number(num.toFixed(8)) : Number(num.toFixed(8)) * -1;
                                }
                                return isPositive ? Number(num.toFixed(7)) : Number(num.toFixed(7)) * -1;
                            }
                            return isPositive ? Number(num.toFixed(6)) : Number(num.toFixed(6)) * -1;
                        }
                        return isPositive ? Number(num.toFixed(5)) : Number(num.toFixed(5)) * -1;
                    }
                    return isPositive ? Number(num.toFixed(4)) : Number(num.toFixed(4)) * -1;
                }
                return isPositive ? Number(num.toFixed(3)) : Number(num.toFixed(3)) * -1;
            }
            return isPositive ? Number(num.toFixed(2)) : Number(num.toFixed(2)) * -1;
        }
        return isPositive ? Number(num.toFixed(2)) : Number(num.toFixed(2)) * -1;
    };
    PortFolioTransactionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-port-folio-transaction',template:/*ion-inline-start:"C:\Users\user\Desktop\interactive-crpto-v2\src\pages\port-folio-transaction\port-folio-transaction.html"*/'\n<ion-header id="header" hideBackButton="false" mode="md">\n  <ion-navbar mode="md">\n\n    <ion-title mode="md">\n        Add Transaction    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content style="background:#2b2b2b;color:white;">\n  <ion-grid >\n\n    <!-- exchange -->\n    <!-- <ion-row style="padding: 7px;border-bottom: 1px solid #6f6f6f;">\n      <ion-col col-1></ion-col>\n      <ion-col col-6 style="text-align: left;color:#d2d2d2">Exchange</ion-col>\n     \n      <ion-col col-4 style="text-align: right;">\n        <select style="-webkit-appearance: none;text-align-last: right;background: #535453;color: #ffffff;border-color: rgb(83, 84, 83);" [(ngModel)]="Exchange"  (change)="onSelectExchange()">\n          <option *ngFor="let exchange of Exchanges" [attr.selected]="exchange == Exchange ? Exchange : null">{{exchange}}</option>\n        </select>\n      </ion-col>\n    </ion-row> -->\n\n    <!-- trading pair -->\n    <ion-row style="padding: 7px;border-bottom: 1px solid #6f6f6f;">\n        <ion-col col-1></ion-col>\n      <ion-col col-6 style="text-align: left;color:#d2d2d2">Trading Pair</ion-col>\n      <ion-col col-4 style="text-align: right;">\n        <select style="-webkit-appearance: none;text-align-last: right;color: #ffffff;background:#2b2b2b;border: none;" [(ngModel)]="Pair" (change)="onSelectPair()">\n          <option *ngFor="let pair of Pairs" [attr.selected]="Pair==pair ? Pair : null">{{pair  }}</option>\n        </select>\n      </ion-col>\n    </ion-row>\n\n    <!--  price -->\n    <ion-row style="padding: 7px;border-bottom: 1px solid #6f6f6f;">\n        <ion-col col-1></ion-col>\n      <ion-col col-6 style="text-align: left;color:#d2d2d2">Price</ion-col>\n      <ion-col style="text-align: left;">\n        <input style="width: 67%;background: border-box;border: none;color: white;text-align: right;" type="number" [(ngModel)]="Price" [placeholder]="CurrenPrice">\n        <label style="width: 27%;color: white;position: absolute;right: 0;">{{signtosymbol}}</label>\n      </ion-col>\n    </ion-row>\n\n    <!--  price for USD -->\n    <ion-row style="padding: 7px;border-bottom: 1px solid #6f6f6f;" *ngIf="PriceBTC" [@enterAnimation]>\n        <ion-col col-1></ion-col>\n      <ion-col col-6 style="text-align: left;color:#d2d2d2">Price (BTC)</ion-col>\n      <ion-col  style="text-align: left;">\n        <input style="width: 67%;background: border-box;border: none;color: white;text-align: right;" type="number" [(ngModel)]="PriceBTCInput" [placeholder]="PriceBTCPlaceholder">\n        <label style="width: 27%;color: white;position: absolute;right: 0;">Ƀ</label>\n      </ion-col>\n    </ion-row>\n\n     <!--  price for BTC -->\n    <ion-row style="padding: 7px;border-bottom: 1px solid #6f6f6f;" *ngIf="PriceUSD" [@enterAnimation]>\n        <ion-col col-1></ion-col>\n      <ion-col col-6 style="text-align: left;color:#d2d2d2">Price (USD)</ion-col>\n      <ion-col  style="text-align: left;">\n        <input style="width: 67%;background: border-box;border: none;color: white;text-align: right;" type="number" [(ngModel)]="PriceUSDInput" [placeholder]="PriceUSDPlaceholder">\n        <label style="width: 27%;color: white;position: absolute;right: 0;">$</label>\n      </ion-col>\n    </ion-row>\n\n       <!--  Amount -->\n    <ion-row style="padding: 7px;border-bottom: 1px solid #6f6f6f;" >\n        <ion-col col-1></ion-col>\n      <ion-col col-6 style="text-align: left;color:#d2d2d2">Amount Bought</ion-col>\n      <ion-col col-4 style="text-align: left;">\n        <input style="text-align: right;background: border-box;border: none;color: white;width: 100%;position: absolute;right: 0;    padding: unset;" type="number" [(ngModel)]="Amount" placeholder="1">\n      </ion-col>\n    </ion-row>\n\n           <!--  date -->\n           <ion-row style="padding: 7px;border-bottom: 1px solid #6f6f6f;">\n              <ion-col col-1></ion-col>\n            <ion-col col-6 style="text-align: left;color:#d2d2d2">Date</ion-col>\n            <ion-col col-4 style="text-align: left;">\n                <ion-datetime style="color: white;padding: unset;text-align: right;" (ionChange)="changeDate()" displayFormat="YYYY/MM/DD" [(ngModel)]="DateTransaction" [min]="2009/01/01" [max]="DateNow"></ion-datetime>\n            </ion-col>\n          </ion-row>\n  </ion-grid>\n\n    <!-- alert -->\n\n  <ion-list  style="background:#2b2b2b;color:white;">\n\n      <ion-item  style="background:#2b2b2b;color:white;">\n        <ion-label>Alert</ion-label>\n        <ion-toggle [(ngModel)]="isAlert"></ion-toggle>\n      </ion-item></ion-list>\n  <ion-grid *ngIf="isAlert" [@enterAnimation] style="margin-left: 10%;overflow : hidden;background:#2b2b2b;color:white;">\n    <ion-row>\n      <ion-col col-2 style="margin-top: 9px">\n        {{ \'Above\' | translate }}\n      </ion-col>\n      <ion-col col-1 style="margin-top: 11px">\n        <ion-icon style="color:#e2b000;" name="ios-arrow-up-outline"></ion-icon>\n      </ion-col>\n      <ion-col col-1 style="margin-top: 11px" >\n        <ion-checkbox [(ngModel)]="AboveBox"></ion-checkbox>\n      </ion-col>\n      <ion-col>\n        <ion-input  [(ngModel)]="Above"  type="number" disabled={{!AboveBox}} style="border-bottom: 1px solid #e6e6e6;width: 80%;"></ion-input>\n      </ion-col>\n    </ion-row>\n\n    <ion-row >\n      <ion-col col-3 style="margin-top: 9px">\n        {{ \'Current\' | translate }}\n      </ion-col>\n      <ion-col col-1 >\n        <ion-checkbox [(ngModel)]="AboveBox" style="opacity:0"></ion-checkbox>\n      </ion-col>    \n      <ion-col >\n        <!-- <input type="checkbox" [(ngModel)]="AboveBox" style="opacity:0"> -->\n        <ion-input readonly="true"  [(ngModel)]="Price"  type="number" placeholder="{{CurrenPrice}}" style="border-bottom: 1px solid #e6e6e6;width: 80%;"></ion-input>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-2 style="margin-top: 9px;">\n       {{ \'Below\' | translate }}\n      </ion-col>\n      <ion-col col-1 style="margin-top: 11px;">\n        <ion-icon style="color:#e2b000;" name="ios-arrow-down-outline"></ion-icon>\n      </ion-col>\n      <ion-col col-1 style="margin-top: 11px;">\n        <ion-checkbox [(ngModel)]="BelowBox"></ion-checkbox>\n      </ion-col>\n      <ion-col>\n        <ion-input  [(ngModel)]="Below"  type="number" disabled={{!BelowBox}} style="border-bottom: 1px solid #e6e6e6;width: 80%;"></ion-input>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid style="background:#2b2b2b;color:white;">\n    <!-- note -->\n    <ion-row style="padding: 7px">\n      <ion-col col-1></ion-col>\n    <ion-col col-2 style="text-align: left;margin-top:5px;">Note</ion-col>\n   \n    <ion-col col style="text-align: left;border: solid 1px #535453;">\n        <ion-input  style="width: 80%;border: none;text-align: right;" type="text" [(ngModel)]="Note" placeholder="Enter Your Note"></ion-input>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n<div style="text-align:center;margin-top: 15px;color:red">\n {{error}}\n</div>\n\n<div style="text-align:center;margin-top:15px;">\n  <button (click)="addTransaction()" style="color: white;border-radius: 11px;height: 41px;background: #e2b000;font-weight: bold;" type="button">{{SUBMITBUTTON}}</button>\n\n</div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\user\Desktop\interactive-crpto-v2\src\pages\port-folio-transaction\port-folio-transaction.html"*/,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* trigger */])('enterAnimation', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* style */])({ transform: 'translateY(-100%)', opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('300ms', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* style */])({ transform: 'translateY(0)', opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* style */])({ transform: 'translateX(0)', opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* style */])({ transform: 'translateX(100%)', opacity: 0 }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__providers_track_event_track_event__["a" /* TrackEventProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_data_auth_data__["a" /* AuthDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_6__providers_crypto_crypto__["a" /* CryptoProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], PortFolioTransactionPage);
    return PortFolioTransactionPage;
}());

//# sourceMappingURL=port-folio-transaction.js.map

/***/ })

});
//# sourceMappingURL=4.js.map