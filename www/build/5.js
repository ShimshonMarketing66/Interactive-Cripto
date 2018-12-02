webpackJsonp([5],{

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPairsPageModule", function() { return ListPairsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_pairs__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(514);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ListPairsPageModule = /** @class */ (function () {
    function ListPairsPageModule() {
    }
    ListPairsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__list_pairs__["a" /* ListPairsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__list_pairs__["a" /* ListPairsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], ListPairsPageModule);
    return ListPairsPageModule;
}());

//# sourceMappingURL=list-pairs.module.js.map

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

/***/ 589:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPairsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_crypto_crypto__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_data_auth_data__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_track_event_track_event__ = __webpack_require__(147);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListPairsPage = /** @class */ (function () {
    function ListPairsPage(navCtrl, trackEvent, cryptoProvider, authData, navParams) {
        this.navCtrl = navCtrl;
        this.trackEvent = trackEvent;
        this.cryptoProvider = cryptoProvider;
        this.authData = authData;
        this.navParams = navParams;
        this.isAlerts = false;
        this.offsetRequested = 0;
        this.allpairs = [];
        this.allpairs2 = [];
    }
    ListPairsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListPairsPage');
        for (var index = 0; index < 20; index++) {
            this.allpairs.push(this.cryptoProvider.arrAllCrypto[index]);
        }
        this.offsetRequested += 20;
        this.allpairs2 = this.cryptoProvider.arrAllCrypto;
        this.isAlerts = this.navParams.get("isAlerts");
        this.trackEvent.trackView("ListPairsPage");
    };
    ListPairsPage.prototype.getItems = function (ev) {
        var val = ev.target.value;
        if (val == undefined) {
            this.allpairs = this.allpairs2;
            return;
        }
        this.allpairs = this.allpairs2.filter(function (item) {
            var x = item.pair.split("_")[0] += item.pair.split("_")[1];
            return (item.pair.toLowerCase().indexOf(val.toLowerCase()) > -1 || (item.name.toLowerCase().indexOf(val.toLowerCase())) > -1) || (x.indexOf(val.toLowerCase()) > -1) || (x.indexOf(val.toUpperCase()) > -1);
        });
    };
    ListPairsPage.prototype.gotoalert = function (pair) {
        this.navCtrl.push("alert", {
            FROMSYMBOL: pair.split("_")[0],
            TOSYMBOL: pair.split("_")[1]
        });
    };
    ListPairsPage.prototype.addtoWhachlist = function (pair, type, index) {
        if (type) {
            this.cryptoProvider.arrAllCrypto[index].isWatchlist = false;
            this.authData.user.watchlist.splice(index, 1);
            for (var index2 = 0; index2 < this.cryptoProvider.mywatchlist.length; index2++) {
                if (pair == this.cryptoProvider.mywatchlist[index2].pair) {
                    this.cryptoProvider.mywatchlist.splice(index2, 1);
                    break;
                }
            }
            this.cryptoProvider.deleteToWhachList({
                pair: pair, _id: this.authData.user._id
            });
        }
        else {
            this.cryptoProvider.arrAllCrypto[index].isWatchlist = true;
            this.cryptoProvider.mywatchlist.push(this.cryptoProvider.arrAllCrypto[index]);
            this.authData.user.watchlist.push({ pair: pair });
            this.cryptoProvider.addToWhachList({
                pair: pair, _id: this.authData.user._id
            });
        }
        if (this.cryptoProvider.mywatchlist.length > 0)
            this.cryptoProvider.isWatchlistEmpty = false;
        else
            this.cryptoProvider.isWatchlistEmpty = true;
    };
    ListPairsPage.prototype.doInfinite = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var index = 0;
            for (; (_this.offsetRequested + index) < _this.allpairs2.length && index < 20; index++) {
                _this.allpairs.push(_this.allpairs2[index + _this.offsetRequested]);
            }
            _this.offsetRequested += index;
            resolve();
        });
    };
    ListPairsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-list-pairs',template:/*ion-inline-start:"C:\Users\user\Desktop\interactive-crpto-v2\src\pages\list-pairs\list-pairs.html"*/'\n<ion-header  >\n\n  <ion-navbar>\n    <ion-title>Add Coin</ion-title>\n  </ion-navbar>\n  <ion-grid style="background: #2b2b2b;">\n      <ion-row>\n              <ion-col style="margin: auto;">\n                      <ion-searchbar (ionInput)="getItems($event)" [(ngModel)]="myInput"\n                              [showCancelButton]="false" (ionCancel)="onCancel($event)">\n                      </ion-searchbar>\n              </ion-col>\n              <ion-col col-3 style="margin: auto;padding:3px;">\n                      <button (click)="navCtrl.pop()" style="height: 27px;   width: 100%;background: #00aeef;color: #ffffff;border-radius: 4px;">Cancel</button>\n              </ion-col>\n      </ion-row>\n</ion-grid>\n</ion-header>\n\n\n<ion-content  *ngIf="!isAlerts" style="background: #2b2b2b;">\n   \n  <ion-grid   *ngFor="let item of allpairs; let i = index" style="background: #2b2b2b;color:#ffffff;border-bottom: solid 1px #4a4a4a;height: 50px;    padding-bottom: 10px;" >\n    <ion-row  style="height: 40px; text-align: center;">\n        <ion-col col-2>\n            <img src="{{item?.img}}" height="30">\n                  </ion-col>\n      <ion-col style="height: 40px; text-align: start;margin-top: 5px;">\n            {{item?.name}} &nbsp;  ( {{item?.pair| split}} )\n                  </ion-col>\n      \n   \n      <ion-col col-1 (click)="addtoWhachlist(item.pair,item.isWatchlist,i)">                <ion-icon *ngIf="item.isWatchlist" name="md-star" style="color: #ffc046; font-size: 25px;"          ></ion-icon> \n        <ion-icon  *ngIf="!item.isWatchlist" name="star-o" ></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-infinite-scroll  (ionInfinite)="$event.waitFor(doInfinite())">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n<ion-content *ngIf="isAlerts" style="background: #2b2b2b;">\n   \n    <ion-grid   *ngFor="let item of allpairs; let i = index" style="background: #2b2b2b;color:#ffffff;border-bottom: solid 1px #4a4a4a;height: 50px;    padding-bottom: 10px;" >\n      <ion-row (click)="gotoalert(item?.pair)" style="height: 40px; text-align: center;">\n          <ion-col col-2>\n              <img src="{{item?.img}}" height="30">\n                    </ion-col>\n        <ion-col style="height: 40px; text-align: start;margin-top: 5px;">\n  {{item?.pair| split}}\n        </ion-col>\n        <ion-col col-1>              <ion-icon  style="font-size:30px; " name="ios-arrow-forward-outline" item-right></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-infinite-scroll  (ionInfinite)="$event.waitFor(doInfinite())">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </ion-content>\n'/*ion-inline-end:"C:\Users\user\Desktop\interactive-crpto-v2\src\pages\list-pairs\list-pairs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_track_event_track_event__["a" /* TrackEventProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_crypto_crypto__["a" /* CryptoProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_data_auth_data__["a" /* AuthDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], ListPairsPage);
    return ListPairsPage;
}());

//# sourceMappingURL=list-pairs.js.map

/***/ })

});
//# sourceMappingURL=5.js.map