webpackJsonp([2],{

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartPageModule", function() { return ChartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chart__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_ui_component_ui_component__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_study_dialog_component_study_dialog_component__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_chart_component_chart_component__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_colorpicker_component_colorpicker__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_pipes_property_filter_pipe__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_theme_dialog_component_theme_dialog_component__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_timezone_dialog_component_timezone_dialog_component__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_overlay_menu_component_overlay_menu__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_drawing_toolbar_component_drawing_toolbar_component__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_pipes_title_case_pipe__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pipes_pipes_module__ = __webpack_require__(514);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var ChartPageModule = /** @class */ (function () {
    function ChartPageModule() {
    }
    ChartPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chart__["a" /* ChartPage */],
                __WEBPACK_IMPORTED_MODULE_3__app_ui_component_ui_component__["a" /* ChartUI */],
                __WEBPACK_IMPORTED_MODULE_12__app_drawing_toolbar_component_drawing_toolbar_component__["a" /* DrawingToolbar */],
                __WEBPACK_IMPORTED_MODULE_6__app_chart_component_chart_component__["a" /* ChartComponent */],
                __WEBPACK_IMPORTED_MODULE_7__app_colorpicker_component_colorpicker__["a" /* Colorpicker */],
                __WEBPACK_IMPORTED_MODULE_8__app_pipes_property_filter_pipe__["a" /* FilterByPropertyPipe */],
                __WEBPACK_IMPORTED_MODULE_4__app_study_dialog_component_study_dialog_component__["a" /* StudyDialog */],
                __WEBPACK_IMPORTED_MODULE_9__app_theme_dialog_component_theme_dialog_component__["a" /* ThemeDialog */],
                __WEBPACK_IMPORTED_MODULE_10__app_timezone_dialog_component_timezone_dialog_component__["a" /* TimezoneDialog */],
                __WEBPACK_IMPORTED_MODULE_11__app_overlay_menu_component_overlay_menu__["a" /* OverlayMenu */],
                __WEBPACK_IMPORTED_MODULE_13__app_pipes_title_case_pipe__["a" /* TitlecasePipe */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chart__["a" /* ChartPage */]),
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* DirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_14__pipes_pipes_module__["a" /* PipesModule */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */],
                __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NO_ERRORS_SCHEMA */]]
        })
    ], ChartPageModule);
    return ChartPageModule;
}());

//# sourceMappingURL=chart.module.js.map

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

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Colorpicker; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Colorpicker = /** @class */ (function () {
    function Colorpicker(element) {
        this.element = element;
        this.posLeft = 0;
        this.posTop = 0;
        this.caller = false;
        this.parent = false;
        this.launch = false;
        this.setThemeSwatchColor = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.setStudySwatchColor = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.setDrawingSwatchColor = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.setColor = function (params) {
            var that = this;
            return function () {
                if (that.parent == "output" || that.parent == "input" || that.parent == "parameter")
                    that.setStudySwatchColor.emit({ color: arguments[0], source: that.caller, params: params });
                else if (that.parent == "drawingParameters")
                    that.setDrawingSwatchColor.emit({ color: arguments[0], source: that.caller, params: params });
                else
                    that.setThemeSwatchColor.emit({ color: arguments[0], source: that.caller, params: params });
                that.closeMe();
            };
        };
        this.closeMe = function () {
            this.launch = false;
            this.posLeft = 0;
            this.posTop = 0;
        };
        this.colorPickerColors = [
            "ffffff", "ffd0cf", "ffd9bb", "fff56c", "eaeba3", "d3e8ae", "adf3ec", "ccdcfa", "d9c3eb",
            "efefef", "eb8b87", "ffb679", "ffe252", "e2e485", "c5e093", "9de3df", "b1c9f8", "c5a6e1",
            "cccccc", "e36460", "ff9250", "ffcd2b", "dcdf67", "b3d987", "66cac4", "97b8f7", "b387d7",
            "9b9b9b", "dd3e39", "ff6a23", "faaf3a", "c9d641", "8bc176", "33b9b0", "7da6f5", "9f6ace",
            "656565", "b82c0b", "be501b", "e99b54", "97a030", "699158", "00a99d", "5f7cb8", "784f9a",
            "343434", "892008", "803512", "ab611f", "646c20", "46603a", "007e76", "3e527a", "503567",
            "000000", "5c1506", "401a08", "714114", "333610", "222f1d", "00544f", "1f2a3c", "281a33"
        ];
    }
    Colorpicker.prototype.launchColorpicker = function (params) {
        this.createColorPicker(this.element.nativeElement.children.colorPicker.children[0], this.setColor(params.setting));
        var clicked = params.swatch;
        this.posLeft = (clicked.offsetLeft + "px");
        this.posTop = (clicked.offsetHeight + "px");
        this.caller = clicked;
        this.parent = clicked.parentNode.classList[0];
        this.launch = true;
    };
    Colorpicker.prototype.createColorPicker = function (div, fc) {
        CIQ.clearNode(div);
        var ul = document.createElement("ul");
        ul.style.margin = '0';
        ul.style.padding = '0';
        ul.style.listStyleType = 'none';
        ul.style.zoom = '1';
        div.appendChild(ul);
        function clkFn(c) { return function () { fc(c); return false; }; }
        for (var _i = 0, _a = this.colorPickerColors; _i < _a.length; _i++) {
            var currentColor = _a[_i];
            var li = document.createElement("li");
            var a = document.createElement("a");
            li.appendChild(a);
            li.style.cssFloat = 'left';
            li.style.margin = '0 5px 5px 0';
            a.href = "#";
            a.title = currentColor;
            a.style.background = "#" + currentColor;
            a.innerHTML = currentColor;
            a.style.display = 'block';
            a.style.width = '13px';
            a.style.height = '13px';
            a.style.textDecoration = 'none';
            a.style.textIndent = '-100000px';
            a.style.outline = '0';
            a.style.border = '1px solid #aaa';
            ul.appendChild(li);
            a.onclick = clkFn(currentColor);
        }
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Colorpicker.prototype, "setThemeSwatchColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Colorpicker.prototype, "setStudySwatchColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Colorpicker.prototype, "setDrawingSwatchColor", void 0);
    Colorpicker = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'colorpicker',template:/*ion-inline-start:"C:\Users\user\Desktop\interactive-crpto-v2\src\app\colorpicker_component\colorpicker.html"*/'<div id="colorPicker" [ngStyle]="{\'top\':posTop, \'left\':posLeft, \'display\': launch ? \'block\':\'none\' }">\n	<div class="color-picker-options"></div>\n</div>'/*ion-inline-end:"C:\Users\user\Desktop\interactive-crpto-v2\src\app\colorpicker_component\colorpicker.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], Colorpicker);
    return Colorpicker;
}());

//# sourceMappingURL=colorpicker.js.map

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__swipe_segment_swipe_segment__ = __webpack_require__(545);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DirectivesModule = /** @class */ (function () {
    function DirectivesModule() {
    }
    DirectivesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__swipe_segment_swipe_segment__["a" /* SwipeSegmentDirective */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__swipe_segment_swipe_segment__["a" /* SwipeSegmentDirective */]]
        })
    ], DirectivesModule);
    return DirectivesModule;
}());

//# sourceMappingURL=directives.module.js.map

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwipeSegmentDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_gestures_gesture__ = __webpack_require__(307);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SwipeSegmentDirective = /** @class */ (function () {
    function SwipeSegmentDirective(_el) {
        this._el = _el;
        this.tabsList = [];
        this.currentTab = '';
        this.tabChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.el = _el.nativeElement;
        console.log(this.el);
    }
    SwipeSegmentDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.swipeGesture = new __WEBPACK_IMPORTED_MODULE_1_ionic_angular_gestures_gesture__["a" /* Gesture */](this.el);
        this.swipeGesture.listen();
        this.swipeGesture.on('swipe', function (event) {
            _this.swipeHandler(event);
        });
    };
    SwipeSegmentDirective.prototype.swipeHandler = function (event) {
        console.log(event);
        if (event.direction == '2') {
            // move forward
            var currentIndex = this.tabsList.indexOf(this.currentTab), nextIndex = currentIndex + 1;
            console.log(nextIndex, this.tabsList.length);
            if (nextIndex < this.tabsList.length) {
                this.currentTab = this.tabsList[nextIndex];
                this.tabChanged.emit(this.currentTab);
            }
        }
        else if (event.direction == '4') {
            // move backward
            var currentIndex = this.tabsList.indexOf(this.currentTab), nextIndex = currentIndex - 1;
            if (nextIndex >= 0) {
                this.currentTab = this.tabsList[nextIndex];
                this.tabChanged.emit(this.currentTab);
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], SwipeSegmentDirective.prototype, "tabsList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], SwipeSegmentDirective.prototype, "currentTab", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], SwipeSegmentDirective.prototype, "tabChanged", void 0);
    SwipeSegmentDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[swipeSegment]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], SwipeSegmentDirective);
    return SwipeSegmentDirective;
}());

//# sourceMappingURL=swipe-segment.js.map

/***/ }),

/***/ 569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_crypto_crypto__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_social_data_social_data__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_data_auth_data__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_app_app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(37);
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








var ChartPage = /** @class */ (function () {
    function ChartPage(trackEvent, http, app, authData, navCtrl, cryptoProvider, alertCtrl, socialprovider, AuthData, loadingCtrl, navParams) {
        this.trackEvent = trackEvent;
        this.http = http;
        this.app = app;
        this.authData = authData;
        this.navCtrl = navCtrl;
        this.cryptoProvider = cryptoProvider;
        this.alertCtrl = alertCtrl;
        this.socialprovider = socialprovider;
        this.AuthData = AuthData;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.NEWS = "NEWS";
        this.CHART = "CHART";
        this.REVIEW = "REVIEW";
        this.CHAT = "CHAT";
        this.date = new Date().toLocaleTimeString();
        this.selectedSegment = this.CHART;
        this.newsarry = [];
        this.anyNews = true;
        this.anyReview = true;
        //chat
        this.GotAllComment = false;
        this.comments = [];
        this.ImgProfile = "http://xosignals.herokuapp.com/api2/sendImgCountryByName/";
        this.allSegments = [this.CHART, this.REVIEW, this.NEWS, this.CHAT];
        for (var index = 0; index < this.cryptoProvider.arrAllCrypto.length; index++) {
            if (this.navParams.get("pair") == this.cryptoProvider.arrAllCrypto[index].pair) {
                this.coin = this.cryptoProvider.arrAllCrypto[index];
                break;
            }
        }
        this.GetAllComment();
        this.getCoinNews();
        if (this.authData.user._id)
            this.ImgProfile += this.authData.user.countryData.country;
    }
    ChartPage.prototype.ionViewDidEnter = function () {
        console.log('ionViewDidEnter ChartPage');
        this.trackEvent.trackView("ChartPage");
        if (this.authData.user._id) {
            this.socialprovider.checkunLike(this.coin);
            this.socialprovider.checkLike(this.coin);
            this.getreview();
        }
    };
    ChartPage.prototype.changeSegment = function (segment) {
        this.selectedSegment = segment;
        this.chartpage.scrollToTop(0);
        this.trackEvent.trackView("ChartPage" + segment);
    };
    ChartPage.prototype.updateLike = function (type) {
        if (this.authData.user._id) {
            var a = [];
            a.push(this.coin);
            this.socialprovider.updateLike(a, this.coin._id, type, 0, 'allcrypto');
        }
        else {
            this.app.getRootNav().push("connection");
        }
    };
    ChartPage.prototype.addtoWhachlist = function (pair, type) {
        if (this.authData.user._id) {
            if (type) {
                this.coin.isWatchlist = false;
                for (var index2 = 0; index2 < this.cryptoProvider.mywatchlist.length; index2++) {
                    if (pair == this.cryptoProvider.mywatchlist[index2].pair) {
                        this.cryptoProvider.mywatchlist.splice(index2, 1);
                        this.authData.user.watchlist.splice(index2, 1);
                        break;
                    }
                }
                this.cryptoProvider.deleteToWhachList({
                    pair: pair, _id: this.authData.user._id
                });
            }
            else {
                this.coin.isWatchlist = true;
                this.cryptoProvider.mywatchlist.push(this.coin);
                this.authData.user.watchlist.push({ pair: pair });
                this.cryptoProvider.addToWhachList({
                    pair: pair, _id: this.authData.user._id
                });
            }
            if (this.cryptoProvider.mywatchlist.length > 0)
                this.cryptoProvider.isWatchlistEmpty = false;
            else
                this.cryptoProvider.isWatchlistEmpty = true;
        }
        else {
            this.app.getRootNav().push("connection");
        }
    };
    ChartPage.prototype.addTransaction = function () {
        if (this.authData.user._id)
            this.navCtrl.push("port-folio-transaction", { pair: this.coin.pair });
        else {
            this.app.getRootNav().setRoot("connection");
        }
    };
    ChartPage.prototype.gotoalert = function () {
        if (!this.authData.user._id)
            this.app.getRootNav().setRoot("connection");
        else
            this.navCtrl.push("alert", {
                FROMSYMBOL: this.coin.pair.split("_")[0],
                TOSYMBOL: this.coin.pair.split("_")[1]
            });
    };
    ChartPage.prototype.getreview = function () {
        var _this = this;
        this.http.get("https://afternoon-mountain-15657.herokuapp.com/cryptoReview/" + this.coin.name + "/En", { responseType: 'text' })
            .toPromise()
            .then(function (response) {
            _this.textreview = response;
        })
            .catch(function (err) {
            console.log("No news available for this coin");
            _this.anyReview = false;
        });
    };
    //news
    ChartPage.prototype.getCoinNews = function () {
        var _this = this;
        this.http.get("http://afternoon-mountain-15657.herokuapp.com/getCoinNews/" + this.coin.name).toPromise().then(function (allnews) {
            _this.newsarry = allnews;
            if (_this.newsarry.length < 1) {
                console.log("No news available for this coin");
                _this.anyNews = false;
            }
        });
    };
    ChartPage.prototype.readMore = function (i) {
        console.log(i);
        this.navCtrl.push("read-review", {
            Article: this.newsarry[i],
            language: "en"
        });
    };
    //chat
    ChartPage.prototype.GetAllComment = function () {
        var _this = this;
        this.http.post("http://afternoon-mountain-15657.herokuapp.com/api/GetAllComment", { "_id": this.coin._id })
            .toPromise()
            .then(function (data) {
            _this.GotAllComment = true;
            _this.comments = data;
        }).catch(function (err) {
            var alert = _this.alertCtrl.create({
                title: 'Sorry!',
                subTitle: "unable to get comments right now - try later ",
                buttons: ['Ok']
            });
            alert.present();
        });
    };
    ChartPage.prototype.clickeditComment = function (EditcommentText, i, Commrnt_id, isSubEditval, subComment_id) {
        var _this = this;
        if (!this.authData.user._id) {
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
    ChartPage.prototype.reply = function (i) {
        var _this = this;
        if (!this.authData.user._id) {
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
    ChartPage.prototype.clickChat = function () {
        var _this = this;
        if (!this.authData.user._id) {
            this.app.getRootNav().setRoot("connection");
            return;
        }
        this.Edit = false;
        this.Reply = false;
        setTimeout(function () {
            _this.myInput.setFocus();
        }, 150);
        setTimeout(function () {
            if (_this.chartpage) {
                _this.chartpage.scrollToBottom();
            }
        }, 500);
    };
    ChartPage.prototype.clickContent = function () {
        this.Edit = false;
        this.Reply = false;
    };
    ChartPage.prototype.openLogin = function () {
        this.app.getRootNav().setRoot("connection");
    };
    ChartPage.prototype.AddComment = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        if (this.commentText.length < 2) {
            loading.dismiss();
            var alert_1 = this.alertCtrl.create({
                title: 'error!',
                subTitle: "plese enter more then 3 leters ",
                buttons: ['Ok']
            });
            alert_1.present();
            return;
        }
        this.http.post("http://afternoon-mountain-15657.herokuapp.com/api/AddComment", { "_id": this.coin._id, "UserUid": this.authData.user._id, "name": this.authData.user.first_name + " " + this.authData.user.last_name, "photoUrl": this.ImgProfile, "comment": this.commentText })
            .toPromise()
            .then(function (data) {
            _this.comments.unshift({
                "_id": data._id,
                "ArticleId": _this.coin._id,
                "UserUid": _this.authData.user._id,
                "name": _this.authData.user.first_name + " " + _this.authData.user.last_name,
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
    ChartPage.prototype.DeleteComment = function (Commrnt_id, i) {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.http.post("http://afternoon-mountain-15657.herokuapp.com/api/DeleteComment", { "_id": Commrnt_id })
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
    ChartPage.prototype.UpdateComment = function (i) {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.http.post("http://afternoon-mountain-15657.herokuapp.com/api/UpdateComment", { "_id": this.Commrnt_id, "UserUid": this.authData.user._id, "comment": this.EditcommentText })
            .toPromise()
            .then(function (data) {
            loading.dismiss();
            _this.comments[_this.indexToReply].comment = _this.EditcommentText;
            _this.EditcommentText = "";
            _this.Edit = false;
            _this.Reply = false;
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
    ChartPage.prototype.AddSubComment = function (Commrnt_id, i) {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.http.post("http://afternoon-mountain-15657.herokuapp.com/api/AddSubComment", { "_id": Commrnt_id, "UserUid": this.authData.user._id, "name": this.authData.user.first_name + " " + this.authData.user.last_name, "photoUrl": this.ImgProfile, "comment": this.SubcommentText })
            .toPromise()
            .then(function (data) {
            loading.dismiss();
            _this.comments[i].subComment.push({
                "_id": Commrnt_id,
                "UserUid": _this.authData.user._id,
                "name": _this.authData.user.first_name + " " + _this.authData.user.last_name,
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
    ChartPage.prototype.deleteSubComment = function (Commrnt_id, SubcommentID, i) {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.http.post("http://afternoon-mountain-15657.herokuapp.com/api/DeleteSubComment", { "SubcommentID": SubcommentID, "_id": Commrnt_id })
            .toPromise()
            .then(function (data) {
            for (var index = 0; index < (_this.comments[i].subComment).length; index++) {
                if (_this.comments[i].subComment[index]._id == SubcommentID) {
                    _this.comments[i].subComment.splice(index, 1);
                    break;
                }
            }
            _this.Edit = false;
            _this.Reply = false;
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
    ChartPage.prototype.UpdateSubComment = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.http.post("http://afternoon-mountain-15657.herokuapp.com/api/UpdateSubComment", { "_id": this.Commrnt_id, "SubcommentID": this.indexToReply, "comment": this.EditcommentText })
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
    ChartPage.prototype.addcoin = function () {
        if (this.authData.user._id != undefined) {
            this.navCtrl.push("list-pairs");
        }
        else
            this.app.getRootNav().push("connection");
    };
    ChartPage.prototype.onScroll = function (event) {
        if (this.selectedSegment == "CHAT") {
            var header = document.getElementById("mychat");
            header.classList.add("sticky");
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])("myInput"),
        __metadata("design:type", Object)
    ], ChartPage.prototype, "myInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])("myInput2"),
        __metadata("design:type", Object)
    ], ChartPage.prototype, "myInput2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])("chartpage"),
        __metadata("design:type", Object)
    ], ChartPage.prototype, "chartpage", void 0);
    ChartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-chart',template:/*ion-inline-start:"C:\Users\user\Desktop\interactive-crpto-v2\src\pages\chart\chart.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n\n      {{coin.name}}\n      <span (click)="addcoin()" style="color: #ffc046;    float: right;    font-weight: 300;  ">\n        {{coin.pair | tosymbol}}\n        &nbsp;\n        <ion-icon style="color: #ffffff;" name="md-add"></ion-icon>\n      </span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content #chartpage style="background: #2b2b2b;color: #ffffff;" (ionScroll)="onScroll($event)">\n \n \n  <ion-grid>\n    <ion-row>\n      <ion-col col-2>\n        <img src="{{coin?.img}}" height="30">\n      </ion-col>\n      <ion-col style="    margin-top: 7px;font-weight: 500;font-size: 16px;"> {{coin?.price}}\n      </ion-col>\n      <ion-col style="    margin-top: 7px;" [style.color]="coin?.change24 > 0 ? \'#05bd9b\':\'#ef4364\'"> {{coin?.change24}}%\n      </ion-col>\n      <ion-col (click)="addtoWhachlist(coin?.pair,coin?.isWatchlist)" col-1><span style="padding-left: 3px;">\n          <ion-icon *ngIf="coin.isWatchlist" name="md-star" style="color: #ffc046;    font-size: 27px;"          ></ion-icon> \n          <ion-icon  *ngIf="!coin.isWatchlist" name="star-o" ></ion-icon>               </span>\n        </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid>\n    <ion-row style="height: 35px;\n    font-size: 14px;\n    text-align: center;">\n      <ion-col style="    margin-top: 6px; "> Updated: {{date}} </ion-col>\n      <ion-col col-3>\n        <a href={{cryptoProvider.tradeLink}}>\n          <button style="    border-radius: 4px;width: 60px;background: #05bd9b;color: #ffffff;padding: 5px;height: 30px;">TRADE</button>\n        </a>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n  <div style="background: #2b2b2b;position: sticky;top: 0;z-index: 999;">\n\n    <div>\n      <ion-grid>\n        <ion-row style="white-space: nowrap;display: -webkit-inline-box;">\n          <ion-col class="segments" (click)="changeSegment(CHART)" [ngStyle]="selectedSegment == \'CHART\' && {\'border-bottom\': \'1px solid #ffc046\',\'color\': \'#ffc046\'}">CHART</ion-col>\n          <ion-col class="segments" (click)="changeSegment(REVIEW)" [ngStyle]="selectedSegment == \'REVIEW\' && {\'border-bottom\': \'1px solid #ffc046\',\'color\': \'#ffc046\'}">REVIEW</ion-col>\n          <ion-col class="segments" (click)="changeSegment(NEWS)" [ngStyle]="selectedSegment == \'NEWS\' && {\'border-bottom\': \'1px solid #ffc046\',\'color\': \'#ffc046\'}">NEWS</ion-col>\n          <ion-col class="segments" (click)="changeSegment(CHAT)" [ngStyle]="selectedSegment == \'CHAT\' && {\'border-bottom\': \'1px solid #ffc046\',\'color\': \'#ffc046\'}">CHAT</ion-col>\n\n\n\n        </ion-row>\n      </ion-grid>\n\n    </div>\n\n  </div>\n  <div [ngSwitch]="selectedSegment" swipeSegment [tabsList]="allSegments" [(currentTab)]="selectedSegment" (tabChanged)="changeSegment($event)"\n    class="swipe-area">\n    <div *ngSwitchCase="CHART">\n        <div class="my-Class-Chart" style="height: 350px;">\n            <chart-ui #chartUi class="ciq-night"></chart-ui>\n          </div>\n      <div class="rowchart">Volume: {{coin?.volume}}</div>\n      <div class="rowchart">Market Cap: {{coin?.marketcap}}</div>\n      <div class="rowchart">High: {{coin?.high}}</div>\n      <div class="rowchart">Low: {{coin?.low}}</div>\n      <div class="rowchart">Price {{coin?.name}}</div>\n      <div class="rowchart">Currency: {{coin?.name}}</div>\n      <div class="rowchart">Open {{coin?.open}}</div>\n      <div class="rowchart">Close {{coin?.close}}</div>\n      <div class="rowchart">Day High {{coin?.high24}}</div>\n      <div class="rowchart">Day Change:{{coin?.change24}}% </div>\n      <div class="rowchart">Volume: {{coin?.volume}}</div>\n      <ion-grid style="text-align: center;">\n        <ion-row style="border-top: solid 1px #4a4a4a;    height: 30px;\n        ">\n          <ion-col>\n            <div style="font-size: 15px;font-weight: 500;text-align: center;">Social Sentiment:</div>\n\n          </ion-col>\n        </ion-row>\n        <ion-row style="border-bottom: solid 1px #4a4a4a; ">\n          <ion-col (click)="updateLike(\'like\')" style="text-align: -webkit-center;">\n            <div style="text-align: center;width: 80px;height: 30px;padding-top: 6px;border:solid 1px#05bd9b;color:#05bd9b;border-radius: 3px;  "\n              [style.background]="coin?.Like ?\'#05bd9b\':\'#2b2b2b\'" [style.color]="coin?.Like?\' #ffffff\':\'#05bd9b\'">\n              BULLISH</div>\n            <div style="color: #9b9b9b;text-align: center;font-size:11px;margin-top:7px;"> {{coin?.likes}}% &nbsp;Bullish</div>\n          </ion-col>\n          <ion-col (click)="updateLike(\'unlike\')" style="text-align: -webkit-center;">\n            <div style="text-align: center;width: 80px;height: 30px;padding-top: 6px;border:solid 1px#ef4364;color:#ef4364;border-radius: 3px;"\n              [style.background]="coin?.unLike ?\'#ef4364\':\'#2b2b2b\'" [style.color]="coin?.unLike?\' #ffffff\':\'#ef4364\'">\n              BEARISH</div>\n            <div style="color: #9b9b9b;text-align: center;font-size:11px;margin-top:7px;">{{coin?.unlikes}}% &nbsp; Bearish</div>\n          </ion-col>\n        </ion-row>\n        <ion-row (click)="addTransaction()"style="border-bottom: solid 1px #4a4a4a;">\n          <ion-col style="color:#ffc046;    height: 45px;\n          margin-top: 10px;  ">\n            <ion-icon name="portfolio-gold"></ion-icon> &nbsp;Add to Portfolio</ion-col>\n        </ion-row>\n        <ion-row  (click)="gotoalert()" style="border-bottom: solid 1px #4a4a4a;">\n          <ion-col style="color:#ffc046;    height: 45px;\n          margin-top: 10px;  ">\n            <ion-icon name="alerts-gold"></ion-icon> &nbsp;Create Alert\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <div *ngSwitchCase="REVIEW">\n      <div *ngIf="anyReview"></div>\n        <div padding style="color:white" [innerHtml]="textreview"></div>\n     <div *ngIf="!anyReview"  style="text-align: center;\n     margin-top: 35px;">No review available for this coin</div>\n    </div>\n    <div *ngSwitchCase="NEWS">\n      <div *ngIf="anyNews" style="background: #2b2b2b;padding: 5px;">\n      <div *ngFor="let new of newsarry let i = index" style="color: #ffffff;font-size: 16px;text-align: start;">\n        <div style="padding-top: 5px;" (click)="readMore(i)">{{new.title}}</div>\n        <div (click)="readMore(i)" style="color:#9b9b9b;padding-bottom: 10px;border-bottom:solid 1px #4a4a4a;">{{new.Date}}</div>\n      </div>    </div>\n      <div *ngIf="!anyNews" style="text-align: center;\n      margin-top: 35px;">No news available for this coin </div>\n    </div>\n    <div *ngSwitchCase="CHAT"  >\n       <!-- Comments -->\n   <div *ngFor="let comment of comments;let i =index">\n    <ion-grid *ngIf="GotAllComment" style="padding:0">\n      <ion-row style="padding-bottom: 5px;border-bottom:solid 1px #4a4a4a;">\n        <ion-col style="padding: 0px;" col-2>\n          <img [src]=comment.photoUrl class="imgForMainComment">\n        </ion-col>\n        <ion-col col-10 style="border-radius: 12px;padding-left: 7px;">\n          <div class="nameForMainComment">{{comment.name}}</div>\n          <div class="commentForMainComment">{{comment.comment}}</div>\n          <ion-grid style="padding: 0px;">\n            <ion-row style="padding: 0px;">\n              <ion-col style="padding: 0px;color:#e2b000;font-size:12px;padding-top: 4px;" (click)="reply(i)">Reply</ion-col>\n              <ion-col col-3 *ngIf="comment.UserUid==authData?.user?._id" style="padding: 0px;color:#e2b000;font-size:12px;padding-top: 4px" (click)="clickeditComment(comment.comment,i,comment._id,false)">Edit</ion-col>\n              <ion-col col-3 *ngIf="comment.UserUid==authData?.user?._id" style="padding: 0px;color:#e2b000;font-size:12px;padding-top: 4px" (click)="DeleteComment(comment._id,i)">Delete</ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-col>\n      </ion-row>\n\n      <!-- subComment -->\n      <ion-row *ngFor="let subComment of comment.subComment;" style="padding-bottom: 5px;">\n        <ion-col col-3 style="padding:0;  ">\n          <img [src]=subComment.photoUrl height="30" class="imgForMainSubComment">\n        </ion-col>\n        <ion-col col-9 style="background:#eeeeee;border-radius: 12px;padding-left: 7px;">\n          <div class="nameForSubComment">{{subComment.name}}</div>\n          <div class="commentForSubComment">{{subComment.comment}}</div>\n          <ion-grid style="padding: 0px;">\n            <ion-row style="padding: 0px;">\n              <ion-col style="padding: 0px;color:#e2b000;font-size:12px;padding-top: 4px;" (click)="reply(i)">Reply</ion-col>\n              <ion-col col-3 *ngIf="subComment.UserUid==authData?.user?._id" style="padding: 0px;color:#e2b000;font-size:12px;padding-top: 4px" (click)="clickeditComment(subComment.comment,i,comment._id,true,subComment._id)">Edit</ion-col>\n              <ion-col col-3 *ngIf="subComment.UserUid==authData?.user?._id" style="padding: 0px;color:#e2b000;font-size:12px;padding-top: 4px" (click)="deleteSubComment(comment._id,subComment._id,i)">Delete</ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-col>\n      </ion-row>\n\n      <ion-grid *ngIf="Reply && indexToReply == i" style="padding:0;position: sticky;\n      bottom: 0;\n      background: #2b2b2b;">\n        <ion-row style="padding-bottom: 5px;">\n\n          <ion-col>\n            <ion-row style="padding: 0px;">\n              <ion-col style="padding: 0px; background: white;    font-size: 16px;\n                height: 40px;\n                border-radius: 23px;     color: black;  ">\n                <ion-input #myInput [(ngModel)]="SubcommentText" id="newcomment" type="text" placeholder="Write your comment"></ion-input>\n              </ion-col>\n              <ion-col style="padding: 0px;" (tap)="AddSubComment(comment._id,i)" col-3>\n                <!-- <ion-icon (tap)="AddSubComment(comment._id,i)" style="margin:0px;color: #535453;font-size: 2.5em;    margin-top: 14%;" name="md-send"\n                    item-right primary></ion-icon> -->\n                <button style="background: #ffc046;\n                    color: #333333  ;\n                    font-weight: 500;\n                    border-radius: 23px;\n                    height: 40px;\n                    margin-left: 10px;\n                    width: 60px;">POST</button>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-grid>\n\n    <ion-grid *ngIf="Edit  && indexToReply == i" style="padding:0;position: sticky;\n    bottom: 0;\n    background: #2b2b2b;">\n      <ion-row style="padding-bottom: 5px;">\n        <ion-col>\n          <ion-row  style="padding: 0px">\n            <ion-col style="padding: 0px; background: white;    font-size: 16px;\n                height: 40px;\n                border-radius: 23px;     color: black; ">\n              <ion-input #myInput2 [(ngModel)]="EditcommentText" id="editnewcomment" type="text" placeholder="Write your comment"></ion-input>\n            </ion-col>\n            <ion-col *ngIf="!isSubEdit" style="padding: 0px" col-3 (tap)="UpdateComment()">\n              <button style="background: #ffc046;\n                    color: #333333  ;\n                    font-weight: 500;\n                    border-radius: 23px;\n                    height: 40px;\n                    margin-left: 10px;\n                    width: 60px;">POST</button>\n            </ion-col>\n            <ion-col *ngIf="isSubEdit" style="padding: 0px" col-3 (tap)="UpdateSubComment()">\n              <button style="background: #ffc046;\n                      color: #333333  ;\n                      font-weight: 500;\n                      border-radius: 23px;\n                      height: 40px;\n                      margin-left: 10px;\n                     ">POST</button>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </div>\n  <ion-fab  bottom  id="mychat">\n    \n\n  <ion-grid *ngIf="!Reply && !Edit && authData?.user?._id" style="position: -webkit-sticky;\n  position: sticky;\n  bottom: 0;\n  background: #2b2b2b;">\n    <ion-row style="padding-bottom: 5px;">\n      \n      <ion-col>\n        <ion-row  style="padding: 0px">\n          <ion-col style="padding: 0px; background: white;    font-size: 16px;\n          height: 40px;\n          border-radius: 23px;     color: black; ">\n            <ion-input \n              #myInput [(ngModel)]="commentText" id="newcomment" type="text" placeholder="Write your comment"></ion-input>\n          </ion-col>\n          <ion-col style="padding: 0px" col-3 (tap)="AddComment()">\n           \n              <button style="background: #ffc046;\n              color: #333333  ;\n              font-weight: 500;\n              border-radius: 23px;\n              height: 40px;\n              margin-left: 10px;\n              width: 60px;">POST</button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n    </ion-fab>\n  <div class="spinner" *ngIf="!GotAllComment">\n    <div class="bounce1"></div>\n    <div class="bounce2"></div>\n    <div class="bounce3"></div>\n  </div>\n\n    <ion-grid *ngIf="!authData?.user?._id" (click)="openLogin()">\n      <ion-row style="padding-bottom: 5px;">\n      \n        <ion-col>\n          <ion-row  style="padding: 0px">\n            <ion-col style="padding: 0px; background: white;    font-size: 16px;\n            height: 40px;\n            border-radius: 23px;     color: black; ">\n              <ion-input \n                #myInput [(ngModel)]="commentText" id="newcomment" type="text" placeholder="Write your comment" disabled></ion-input>\n            </ion-col>\n            <ion-col style="padding: 0px" col-3 >\n             \n                <button style="background: #ffc046;\n                color: #333333  ;\n                font-weight: 500;\n                border-radius: 23px;\n                height: 40px;\n                margin-left: 10px;\n                width: 60px;">POST</button>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n      </ion-grid>\n   \n  \n    </div>\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\user\Desktop\interactive-crpto-v2\src\pages\chart\chart.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__providers_track_event_track_event__["a" /* TrackEventProvider */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_app_app__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_data_auth_data__["a" /* AuthDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_crypto_crypto__["a" /* CryptoProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_social_data_social_data__["a" /* SocialDataProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_data_auth_data__["a" /* AuthDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], ChartPage);
    return ChartPage;
}());

//# sourceMappingURL=chart.js.map

/***/ }),

/***/ 570:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chart_service_chart_service__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_chart_chart__ = __webpack_require__(569);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChartComponent = /** @class */ (function () {
    function ChartComponent(coin, http, navParams, chartService) {
        this.coin = coin;
        this.http = http;
        this.navParams = navParams;
        this.chartService = chartService;
        this.chartSeries = [];
    }
    ;
    ChartComponent.prototype.ngOnInit = function () {
        this.ciq = new CIQ.ChartEngine({ container: $$$("#chartContainer") });
        this.ciq.setPeriodicityV2(1, 60);
        this.chartService.attachQuoteFeed(this.ciq);
        // var symb = {
        //   exchDisp: "none",
        //   group: "crypto",
        //   symbol: "BTC_USD"}
        //   console.log("symb","symb");
        console.log(this.coin.coin.pair, "coin");
        var symb = { symbol: this.coin.coin.pair.split("_")[0] + "/" + this.coin.coin.pair.split("_")[1], name: "Bitcoin", exchDisp: "AGG" };
        this.ciq.newChart(symb);
    };
    // https://angular.io/docs/ts/latest/api/core/index/OnDestroy-class.html
    ChartComponent.prototype.ngOnDestroy = function () {
        // This will remove the quoteDriver, styles and
        // eventListeners for this ChartEngine instance.
        this.ciq.destroy();
    };
    ChartComponent.prototype.getLayout = function () {
        return this.ciq.layout;
    };
    ChartComponent.prototype.removeSeries = function (series) {
        var index = this.chartSeries.indexOf(series, 0);
        if (index > -1) {
            this.chartSeries.splice(index, 1);
        }
        this.ciq.removeSeries(series.display, this.ciq.ciq);
    };
    ChartComponent.prototype.set = function (multiplier, span) {
        var params = {
            multiplier: multiplier,
            span: span,
        };
        this.ciq.setSpan(params, function () {
            console.log("span set");
        });
    };
    ;
    ChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'chart',template:/*ion-inline-start:"C:\Users\user\Desktop\interactive-crpto-v2\src\app\chart_component\chart.component.html"*/'<div id="chartContainer" class="chartContainer">\n	<div class="comparisons">\n		<div class="comparisonWrapper" *ngFor="let comparison of chartSeries">\n			<div class="chartSeriesColor" [ngStyle]="{\'background-color\':comparison.parameters.color}"></div>\n			<div class="chartSeries">{{comparison.display}}</div>\n			<div class="deleteSeries" (click)="removeSeries(comparison)"></div>\n		</div>\n	</div>\n</div>\n'/*ion-inline-end:"C:\Users\user\Desktop\interactive-crpto-v2\src\app\chart_component\chart.component.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_1__chart_service_chart_service__["a" /* ChartService */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__pages_chart_chart__["a" /* ChartPage */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__chart_service_chart_service__["a" /* ChartService */]])
    ], ChartComponent);
    return ChartComponent;
}());

//# sourceMappingURL=chart.component.js.map

/***/ }),

/***/ 571:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudyDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipes_property_filter_pipe__ = __webpack_require__(572);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StudyDialog = /** @class */ (function () {
    function StudyDialog() {
        this.studyHelper = {};
        this.inputs = [];
        this.activeOutput = {};
        this.launchDialog = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.launchColorpickerEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.launchOverlayMenu = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.showMenu = function () {
            this.launchOverlayMenu.emit({ sd: arguments[0].sd, ciq: arguments[0].stx });
        };
        this.showDialog = function (params) {
            var _this = this;
            this.zone.run(function () {
                _this.studyHelper = new CIQ.Studies.DialogHelper({ sd: params.sd, stx: params.stx });
                _this.inputs = _this.studyHelper.inputs;
                _this.outputs = _this.studyHelper.outputs;
                _this.parameters = _this.studyHelper.parameters;
                _this.studyId = _this.studyHelper.name;
                _this.studyName = _this.studyHelper.title;
                _this.launchDialog.emit(true);
            });
        };
        this.removeStudy = function (args) {
            console.log(args);
            CIQ.Studies.removeStudy(args.stx, args.sd);
        };
        this.closeMe = function () {
            console.log("closeMe");
            this.launchDialog.emit(false);
        };
        this.updateStudy = function (inputs, outputs, params) {
            var currentInputs = {};
            var currentOutputs = {};
            var currentParams = {};
            for (var i = 0; i < inputs.length; i++) {
                currentInputs[inputs[i].name] = inputs[i].value;
            }
            for (var x = 0; x < outputs.length; x++) {
                currentOutputs[outputs[x].name] = outputs[x].color;
            }
            for (var y = 0; y < params.length; y++) {
                currentParams[params[y].name + 'Value'] = params[y].value;
                currentParams[params[y].name + 'Color'] = params[y].color;
            }
            this.studyHelper.updateStudy({ inputs: currentInputs, outputs: currentOutputs, parameters: currentParams });
        };
        this.zone = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* NgZone */]({ enableLongStackTrace: false });
    }
    StudyDialog.prototype.addStudy = function (study, ciq) {
        var self = this;
        var closure = function (fc) {
            return function () {
                fc.apply(self, arguments);
            };
        };
        ciq.callbacks.studyOverlayEdit = closure(this.showMenu);
        ciq.callbacks.studyPanelEdit = closure(this.showDialog);
        CIQ.Studies.addStudy(ciq, study);
    };
    StudyDialog.prototype.updateStudyHelperColors = function (color, params) {
        for (var x in this.studyHelper.outputs) {
            if (this.studyHelper.outputs.hasOwnProperty(x)) {
                if (this.studyHelper.outputs[x].name == params.name) {
                    this.studyHelper.outputs[x].color = '#' + color;
                }
            }
        }
        for (var y in this.studyHelper.parameters) {
            if (this.studyHelper.parameters.hasOwnProperty(y)) {
                if (this.studyHelper.parameters[y].name == params.name) {
                    this.studyHelper.parameters[y].color = '#' + color;
                }
            }
        }
    };
    ;
    StudyDialog.prototype.launchColorpicker = function (setting, event) {
        this.activeOutput['div'] = event.target;
        this.launchColorpickerEvent.emit({
            swatch: event.target,
            setting: setting
        });
    };
    StudyDialog.prototype.setColorFromPicker = function (params) {
        this.updateStudyHelperColors(params.color, params.params);
        this.activeOutput.div.style.backgroundColor = CIQ.hexToRgba('#' + params.color);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], StudyDialog.prototype, "launchDialog", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], StudyDialog.prototype, "launchColorpickerEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], StudyDialog.prototype, "launchOverlayMenu", void 0);
    StudyDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'study-dialog',template:/*ion-inline-start:"C:\Users\user\Desktop\interactive-crpto-v2\src\app\study_dialog_component\study.dialog.component.html"*/'<div class="dialog-overlay" id="studyDialog" *ngIf="launchDialog | async">\n	<div class="dialog">\n		<h3>{{studyName}}</h3>\n		<div id="inputs">\n			<div class="input dialog-item" *ngFor="let input of inputs | filterByPropertyPipe:{type: \'number\'}">\n				<input type="number" [(ngModel)]="input.value">\n				<span>{{input.heading}}</span>\n			</div>\n			<div class="input dialog-item" *ngFor="let input of inputs | filterByPropertyPipe:{type: \'text\'}">\n				<input type="text" [(ngModel)]="input.value">\n				<span>{{input.heading}}</span>\n			</div>\n			<div class="input dialog-item" *ngFor="let input of inputs | filterByPropertyPipe:{type: \'checkbox\'}">\n				<input type="checkbox" [(ngModel)]="input.value">\n				<span>{{input.heading}}</span>\n			</div>\n			<div class="input dialog-item" *ngFor="let input of inputs | filterByPropertyPipe:{type: \'select\'}">\n				<select [(ngModel)]="value">\n					<option *ngFor="let option of input.options">{{option}}</option>\n				</select>\n				<span>{{input.heading}}</span>\n			</div>\n		</div>\n		<div id="outputs">\n			<div class="output dialog-item" *ngFor="let output of outputs">\n				<div *ngIf="output.color" [ngStyle]="{\'background-color\':output.color}" class="color-picker-swatch output" (click)="launchColorpicker(output,$event)"></div>\n				<span>{{output.heading}}</span>\n			</div>\n		</div>\n		<div id="parameters">\n			<div class="parameter dialog-item" *ngFor="let param of parameters">\n				<div *ngIf="param.color" [ngStyle]="{\'background-color\':param.color}" class="color-picker-swatch param" (click)="launchColorpicker(param,$event)"></div>\n				<input *ngIf="param.name==\'studyOverZones\'" type="checkbox" [(ngModel)]="param.value">\n				<input *ngIf="param.name==\'studyOverBought\' || param.name==\'studyOverSold\'" type="number" [(ngModel)]="param.value">\n				<span>{{param.heading}}</span>\n			</div>\n		</div>\n		<button class="pull-right" (click)="updateStudy(inputs, outputs, parameters); closeMe();">Save</button>\n	</div>\n</div>\n'/*ion-inline-end:"C:\Users\user\Desktop\interactive-crpto-v2\src\app\study_dialog_component\study.dialog.component.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_1__pipes_property_filter_pipe__["a" /* FilterByPropertyPipe */]]
        }),
        __metadata("design:paramtypes", [])
    ], StudyDialog);
    return StudyDialog;
}());

//# sourceMappingURL=study.dialog.component.js.map

/***/ }),

/***/ 572:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterByPropertyPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterByPropertyPipe = /** @class */ (function () {
    function FilterByPropertyPipe() {
    }
    FilterByPropertyPipe.prototype.transform = function (value, filters) {
        var filter = function (obj, filters) {
            return Object.keys(filters).every(function (prop) { return obj[prop] === filters[prop]; });
        };
        return value.filter(function (obj) { return filter(obj, filters.type); });
    };
    FilterByPropertyPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({ name: 'filterByPropertyPipe' })
    ], FilterByPropertyPipe);
    return FilterByPropertyPipe;
}());

//# sourceMappingURL=property.filter.pipe.js.map

/***/ }),

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__colorpicker_component_colorpicker__ = __webpack_require__(543);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThemeDialog = /** @class */ (function () {
    function ThemeDialog() {
        this.activeOutput = {};
        this.themeHelper = {};
        this.themeToPush = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.launchDialog = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.launchColorpickerEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.updateThemeHelper = function (color, themeDetail) {
            switch (themeDetail) {
                case 'candleUp':
                    this.themeHelper.settings.chartTypes["Candle/Bar"].up.color = CIQ.hexToRgba('#' + color);
                    break;
                case 'candleDown':
                    this.themeHelper.settings.chartTypes["Candle/Bar"].down.color = CIQ.hexToRgba('#' + color);
                    break;
                case 'wickUp':
                    this.themeHelper.settings.chartTypes["Candle/Bar"].up.wick = CIQ.hexToRgba('#' + color);
                    break;
                case 'wickDown':
                    this.themeHelper.settings.chartTypes["Candle/Bar"].down.wick = CIQ.hexToRgba('#' + color);
                    break;
                case 'borderUp':
                    this.themeHelper.settings.chartTypes["Candle/Bar"].up.border = CIQ.hexToRgba('#' + color);
                    break;
                case 'borderDown':
                    this.themeHelper.settings.chartTypes["Candle/Bar"].down.border = CIQ.hexToRgba('#' + color);
                    break;
                case 'lineBar':
                    this.themeHelper.settings.chartTypes["Line"].color = CIQ.hexToRgba('#' + color);
                    break;
                case 'mountain':
                    this.themeHelper.settings.chartTypes["Mountain"].color = CIQ.hexToRgba('#' + color);
                    break;
                case 'chartBackground':
                    this.themeHelper.settings.chart["Background"].color = CIQ.hexToRgba('#' + color);
                    break;
                case 'dividers':
                    this.themeHelper.settings.chart["Grid Dividers"].color = CIQ.hexToRgba('#' + color);
                    break;
                case 'lines':
                    this.themeHelper.settings.chart["Grid Lines"].color = CIQ.hexToRgba('#' + color);
                    break;
                case 'axis':
                    this.themeHelper.settings.chart["Axis Text"].color = CIQ.hexToRgba('#' + color);
                    break;
            }
        };
        this.showDialog = function (chart) {
            var _this = this;
            this.ciq = chart;
            this.zone.run(function () {
                _this.themeHelper = new CIQ.ThemeHelper({ 'stx': _this.ciq });
                _this.candleUp = _this.themeHelper.settings.chartTypes["Candle/Bar"].up;
                _this.candleDown = _this.themeHelper.settings.chartTypes["Candle/Bar"].down;
                _this.lineBarChart = _this.themeHelper.settings.chartTypes["Line"];
                _this.mountainChart = _this.themeHelper.settings.chartTypes["Mountain"];
                _this.axis = _this.themeHelper.settings.chart["Axis Text"];
                _this.background = _this.themeHelper.settings.chart["Background"];
                _this.gridDividers = _this.themeHelper.settings.chart["Grid Dividers"];
                _this.gridLines = _this.themeHelper.settings.chart["Grid Lines"];
                _this.launchDialog.emit(true);
            });
        };
        this.closeMe = function (saveTheme) {
            if (saveTheme) {
                var clone = CIQ.clone(this.themeHelper.settings);
                var newTheme = { 'name': this.themeName, 'settings': clone };
                this.themeToPush.emit(newTheme);
                this.updateTheme(newTheme);
            }
            this.launchDialog.emit(false);
        };
        this.zone = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* NgZone */]({ enableLongStackTrace: false });
    }
    ThemeDialog.prototype.updateTheme = function (theme) {
        var _this = this;
        if (theme.name == "Default") {
            this.themeHelper = new CIQ.ThemeHelper({ 'stx': this.ciq });
        }
        this.zone.run(function () {
            _this.themeHelper.settings = theme.settings;
            _this.themeHelper.update();
        });
    };
    ThemeDialog.prototype.launchColorpicker = function (setting, event) {
        this.activeOutput['div'] = event.target;
        this.launchColorpickerEvent.emit({
            swatch: event.target,
            setting: setting
        });
    };
    ThemeDialog.prototype.setColorFromPicker = function (params) {
        this.updateThemeHelper(params.color, params.params);
        this.activeOutput.div.style.backgroundColor = CIQ.hexToRgba('#' + params.color);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], ThemeDialog.prototype, "themeToPush", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], ThemeDialog.prototype, "launchDialog", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], ThemeDialog.prototype, "launchColorpickerEvent", void 0);
    ThemeDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'theme-dialog',template:/*ion-inline-start:"C:\Users\user\Desktop\interactive-crpto-v2\src\app\theme_dialog_component\theme.dialog.component.html"*/'<div class="dialog-overlay" *ngIf="launchDialog | async">\n	<div class="dialog">\n    <div class="cq-close" (click)="closeMe();"></div>\n		<h3>Custom Theme</h3>\n		<div class="candles">\n			<div class="dialog-item color">\n				<span>Candle Color</span>\n				<div [ngStyle]="{\'background-color\':candleDown.color}" class="color-picker-swatch colorDown" (click)="launchColorpicker(\'candleDown\',$event)"></div>\n				<div [ngStyle]="{\'background-color\':candleUp.color}" class="color-picker-swatch colorUp" (click)="launchColorpicker(\'candleUp\', $event)"></div>\n			</div>\n			<div class="dialog-item wick">\n				<span>Candle Wick</span>\n				<div [ngStyle]="{\'background-color\':candleDown.wick}" class="color-picker-swatch wickDown" (click)="launchColorpicker(\'wickDown\',$event)"></div>\n				<div [ngStyle]="{\'background-color\':candleUp.wick}" class="color-picker-swatch wickUp" (click)="launchColorpicker(\'wickUp\',$event)"></div>\n			</div>\n			<div class="dialog-item border">\n				<span>Candle Border</span>\n				<div [ngStyle]="{\'background-color\':candleDown.border}" class="color-picker-swatch borderDown" (click)="launchColorpicker(\'borderDown\',$event)"></div>\n				<div [ngStyle]="{\'background-color\':candleUp.border}" class="color-picker-swatch borderUp" (click)="launchColorpicker(\'borderUp\',$event)"></div>\n			</div>\n		</div>\n		<div class="dialog-item lineBarChart">\n			<span>Line/Bar Chart</span>\n			<div [ngStyle]="{\'background-color\':lineBarChart.color}" class="color-picker-swatch lineBar" (click)="launchColorpicker(\'lineBar\',$event)"></div>\n		</div>\n		<div class="dialog-item mountainChart">\n			<span>Mountain Color</span>\n			<div [ngStyle]="{\'background-color\':mountainChart.color}" class="color-picker-swatch mountain" (click)="launchColorpicker(\'mountain\',$event)"></div>\n		</div>\n		<div class="dialog-item background">\n			<span>Background</span>\n			<div [ngStyle]="{\'background-color\':background.color}" class="color-picker-swatch chartBackground" (click)="launchColorpicker(\'chartBackground\',$event)"></div>\n		</div>\n		<div class="dialog-item gridLines">\n			<span>Grid Lines</span>\n			<div [ngStyle]="{\'background-color\':gridLines.color}" class="color-picker-swatch lines" (click)="launchColorpicker(\'lines\',$event)"></div>\n		</div>\n		<div class="dialog-item dateDividers">\n			<span>Date Dividers</span>\n			<div [ngStyle]="{\'background-color\':gridDividers.color}" class="color-picker-swatch dividers" (click)="launchColorpicker(\'dividers\',$event)"></div>\n		</div>\n		<div class="dialog-item axisText">\n			<span>Axis Text</span>\n			<div [ngStyle]="{\'background-color\':axis.color}" class="color-picker-swatch axis" (click)="launchColorpicker(\'axis\',$event)"></div>\n		</div>\n		<div class="dialog-item theme-save">\n			<input class="ciq" type="text" placeholder="Name Your Theme" [(ngModel)]="themeName">\n			<button class="pull-right ciq" (click)="closeMe(true);">Save</button>\n		</div>\n	</div>\n</div>\n'/*ion-inline-end:"C:\Users\user\Desktop\interactive-crpto-v2\src\app\theme_dialog_component\theme.dialog.component.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_1__colorpicker_component_colorpicker__["a" /* Colorpicker */]]
        }),
        __metadata("design:paramtypes", [])
    ], ThemeDialog);
    return ThemeDialog;
}());

//# sourceMappingURL=theme.dialog.component.js.map

/***/ }),

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverlayMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OverlayMenu = /** @class */ (function () {
    function OverlayMenu(element) {
        this.element = element;
        this.left = 0;
        this.top = 0;
        this.launchMenu = false;
        this.launchStudyDialog = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.removeStudy = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.launchMe = function (params) {
            this.launchMenu = true;
            this.top = params.ciq.cy + 'px';
            this.left = params.ciq.cx + 'px';
            this.ciq = params.ciq;
            this.sd = params.sd;
        };
    }
    OverlayMenu.prototype.closeMe = function () {
        this.launchMenu = null;
    };
    ;
    OverlayMenu.prototype.clickHandler = function (event) {
        if (event == 'edit') {
            this.launchStudyDialog.emit({ sd: this.sd, stx: this.ciq });
        }
        else {
            this.removeStudy.emit({ sd: this.sd, stx: this.ciq });
        }
        this.closeMe();
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], OverlayMenu.prototype, "launchStudyDialog", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], OverlayMenu.prototype, "removeStudy", void 0);
    OverlayMenu = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'overlay-menu',template:/*ion-inline-start:"C:\Users\user\Desktop\interactive-crpto-v2\src\app\overlay_menu_component\overlay.menu.html"*/'<span class="overlayMenu" *ngIf="launchMenu" [ngStyle]="{\'top\':top, \'left\':left}">\n	<div class="edit" (click)="clickHandler(\'edit\')">Edit settings...</div>\n	<div class="delete" (click)="clickHandler(\'delete\')">Delete study</div>\n</span>\n'/*ion-inline-end:"C:\Users\user\Desktop\interactive-crpto-v2\src\app\overlay_menu_component\overlay.menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], OverlayMenu);
    return OverlayMenu;
}());

//# sourceMappingURL=overlay.menu.js.map

/***/ }),

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimezoneDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimezoneDialog = /** @class */ (function () {
    function TimezoneDialog() {
        this.timezones = [];
        this.launchDialog = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.closeMe = function () {
            this.launchDialog.emit(false);
        };
        this.timezoneMap = CIQ.timeZoneMap;
        this.myZone = true; //default behavior
    }
    TimezoneDialog.prototype.launchTimezoneDialog = function (chart) {
        for (var i in this.timezoneMap) {
            this.timezones.push(this.timezoneMap[i]);
        }
        this.timezones.sort(function (a, b) {
            if (a < b) {
                return -1;
            }
            if (a > b) {
                return 1;
            }
            // must be equal
            return 0;
        });
        this.ciq = chart;
        this.launchDialog.emit(true);
    };
    TimezoneDialog.prototype.setTimezone = function (zone) {
        this.ciq.setTimeZone(this.ciq.dataZone, zone);
        this.myZone = false;
        if (this.ciq.chart.symbol)
            this.ciq.draw();
        this.launchDialog.emit(false);
    };
    ;
    TimezoneDialog.prototype.setMyTimezone = function () {
        this.ciq.defaultDisplayTimeZone = null;
        for (var i = 0; i < CIQ.ChartEngine.registeredContainers.length; i++) {
            var stx = CIQ.ChartEngine.registeredContainers[i].stx;
            stx.displayZone = null;
            this.myZone = true;
            stx.setTimeZone();
            if (stx.displayInitialized)
                stx.draw();
        }
        if (this.ciq.chart.symbol)
            this.ciq.draw();
        this.closeMe();
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], TimezoneDialog.prototype, "launchDialog", void 0);
    TimezoneDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'timezone-dialog',template:/*ion-inline-start:"C:\Users\user\Desktop\interactive-crpto-v2\src\app\timezone_dialog_component\timezone.dialog.component.html"*/'<div class="dialog-overlay" id="timezoneDialog" *ngIf="launchDialog | async">\n	<div class="dialog timezone">\n    <div class="cq-close" (click)="closeMe();"></div>\n    <h3 class="center">Select Timezone</h3>\n    <div *ngIf="myZone" class="current-location-message">Your timezone is your current location</div>\n    <button *ngIf="!myZone" class="current-location-btn" (click)="setMyTimezone();">Use my current location</button>\n		<ul class="timezoneList">\n			<li class="dialog-item" *ngFor="let zone of timezones" (click)="setTimezone(zone);">{{zone}}</li>\n		</ul>\n    <div class="instruct">(Scroll for more options)</div>\n	</div>\n</div>\n'/*ion-inline-end:"C:\Users\user\Desktop\interactive-crpto-v2\src\app\timezone_dialog_component\timezone.dialog.component.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], TimezoneDialog);
    return TimezoneDialog;
}());

//# sourceMappingURL=timezone.dialog.component.js.map

/***/ }),

/***/ 576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TitlecasePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TitlecasePipe = /** @class */ (function () {
    function TitlecasePipe() {
    }
    TitlecasePipe.prototype.transform = function (input) {
        if (!input) {
            return '';
        }
        else {
            return input.replace(/\w\S*/g, (function (txt) { return txt[0].toUpperCase() + txt.substr(1).toLowerCase(); }));
        }
    };
    TitlecasePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({ name: 'titlecase' })
    ], TitlecasePipe);
    return TitlecasePipe;
}());

//# sourceMappingURL=title.case.pipe.js.map

/***/ }),

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartUI; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chart_component_chart_component__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_study_dialog_component_study_dialog_component__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_theme_dialog_component_theme_dialog_component__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_overlay_menu_component_overlay_menu__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_colorpicker_component_colorpicker__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_timezone_dialog_component_timezone_dialog_component__ = __webpack_require__(575);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ChartUI = /** @class */ (function () {
    function ChartUI(zone) {
        this.zone = zone;
        this.PeriodSelected = "1 Hour";
        this.TypeSelected = "candle";
        this.orderedStudies = Object.keys(CIQ.Studies.studyLibrary).sort(function (a, b) {
            if (a < b) {
                return -1;
            }
            if (a > b) {
                return 1;
            }
            // must be equal
            return 0;
        });
        this.studies = {
            list: this.orderedStudies,
            selectedOption: ''
        };
        this.themes = [{
                "name": "Default",
                "settings": // the default theme settings
                {
                    "chart": {
                        "Axis Text": { "color": "rgba(197,199,201,1)" },
                        "Background": { "color": "rgba(28,42,53,1)" },
                        "Grid Dividers": { "color": "rgba(37,55,70,1)" },
                        "Grid Lines": { "color": "rgba(33,50,63,1)" }
                    },
                    "chartTypes": {
                        "Candle/Bar": {
                            "down": { "border": "rgba(227,70,33,1)", "color": "rgba(184,44,12,1)", "wick": "rgba(0,0,0,1)" },
                            "up": { "border": "rgba(184,222,168,1)", "color": "rgba(140,193,118,1)", "wick": "rgba(0,0,0,1)" }
                        },
                        "Line": { "color": "rgba(0,0,0,1)" },
                        "Mountain": { "color": "rgba(102,202,196,0.498039)" }
                    }
                }
            },
            { "name": "+ New Theme" }];
        this.periodicityOptions = [
            {
                period: 1,
                interval: 1,
                label: '1 Min',
            },
            {
                period: 1,
                interval: 3,
                label: '3 Min',
            },
            {
                period: 1,
                interval: 5,
                label: '5 Min',
            },
            {
                period: 1,
                interval: 10,
                label: '10 Min',
            },
            {
                period: 3,
                interval: 5,
                label: '15 Min',
            },
            {
                period: 1,
                interval: 30,
                label: '30 Min',
            },
            {
                period: 1,
                interval: 60,
                label: '1 Hour',
            },
            {
                period: 8,
                interval: 30,
                label: '4 Hour',
            },
            {
                period: 1,
                interval: 'day',
                label: '1 Day',
            },
            {
                period: 2,
                interval: 'day',
                label: '2 Day',
            },
            {
                period: 3,
                interval: 'day',
                label: '3 Day',
            },
            {
                period: 5,
                interval: 'day',
                label: '5 Day',
            },
            {
                period: 10,
                interval: 'day',
                label: '10 Day',
            },
            {
                period: 20,
                interval: 'day',
                label: '20 Day',
            },
            {
                period: 1,
                interval: 'week',
                label: '1 Wk',
            },
            {
                period: 1,
                interval: 'month',
                label: '1 Mon',
            }
        ];
        this.chartTypes = [
            {
                type: 'bar',
                label: 'bar',
            },
            {
                type: 'candle',
                label: 'candle',
            },
            {
                type: 'colored_bar',
                label: 'colored bar',
            },
            {
                type: 'hollow_candle',
                label: 'hollow candle',
            },
            {
                type: 'line',
                label: 'line',
            },
            {
                type: 'mountain',
                label: 'mountain',
            },
            {
                type: 'volume_candle',
                label: 'volume candle',
            },
            {
                type: 'heikinashi',
                label: 'Heikin-Ashi',
            },
            {
                type: 'kagi',
                label: 'kagi',
                aggregationEdit: {
                    title: 'Set Reversal Percentage',
                    inputs: [
                        {
                            lookup: 'kagi',
                            label: 'kagi',
                        }
                    ]
                }
            },
            {
                type: 'linebreak',
                label: 'line break',
                aggregationEdit: {
                    title: 'Set Price Lines',
                    inputs: [
                        {
                            lookup: 'priceLines',
                            label: 'price line'
                        }
                    ]
                }
            },
            {
                type: 'renko',
                label: 'renko',
                aggregationEdit: {
                    title: 'Set Range',
                    inputs: [
                        {
                            lookup: 'renko',
                            label: 'renko'
                        }
                    ]
                }
            },
            {
                type: 'rangebars',
                label: 'range bars',
                aggregationEdit: {
                    title: 'Set Range',
                    inputs: [
                        {
                            lookup: 'range',
                            label: 'range'
                        }
                    ]
                }
            },
            {
                type: 'pandf',
                label: 'point & figure',
                aggregationEdit: {
                    title: 'Set Point & Figure Parameters',
                    inputs: [
                        {
                            lookup: 'pandf.box',
                            label: 'box'
                        },
                        {
                            lookup: 'pandf.reversal',
                            label: 'reversal'
                        }
                    ]
                }
            }
        ];
        this.periodicity = "1 Hour";
        this.chartType = "candle";
    }
    ChartUI.prototype.ngAfterViewChecked = function () {
        this.chartLayout = this.getChartLayout();
    };
    ChartUI.prototype.changeSymbol = function (symb) {
        this.chartComponent.ciq.newChart(symb);
        this.symbolInput = '';
    };
    ChartUI.prototype.changePeriodicity = function (period, interval) {
        var _this = this;
        this.chartComponent.ciq.setPeriodicityV2(period, interval);
        for (var i in this.periodicityOptions) {
            if (this.periodicityOptions[i].interval == this.chartLayout.interval && this.periodicityOptions[i].period == this.chartLayout.periodicity) {
                this.zone.run(function () { _this.periodicity = _this.periodicityOptions[i].label; });
            }
        }
    };
    ChartUI.prototype.changeChartType = function (type) {
        console.log("changeChartType->", type);
        if ((type.aggregationEdit && this.chartComponent.ciq.layout.aggregationType != type.type) || type.type == 'heikinashi') {
            this.chartComponent.ciq.setChartType('candle');
            this.chartComponent.ciq.setAggregationType(type.type);
        }
        else {
            this.chartComponent.ciq.setChartType(type.type);
        }
        //update the ui
        this.chartType = type.label;
    };
    ChartUI.prototype.toggleCrosshairs = function () {
        var state = this.chartComponent.ciq.layout.crosshair;
        this.chartComponent.ciq.layout.crosshair = !state;
    };
    ChartUI.prototype.addComparison = function () {
        if (this.symbolComparison) {
            // Note that this color generator has a bias toward darker colors. Just needed a quick solution here.
            var getRandomColor = function () {
                var letters = '0123456789ABCDEF';
                var color = '#';
                for (var i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
            };
            var newSeries = this.chartComponent.ciq.addSeries(this.symbolComparison, {
                isComparison: true,
                color: getRandomColor(),
                data: { useDefaultQuoteFeed: true },
            });
            //update the comparison legend
            this.chartComponent.chartSeries.push(newSeries);
            this.symbolComparison = null;
        }
        else {
            console.log("Error: no symbol for comparison entered");
        }
    };
    ChartUI.prototype.getChartLayout = function () {
        return this.chartComponent.getLayout();
    };
    ChartUI.prototype.handleThemeSelect = function (theme) {
        if (theme.name == "+ New Theme") {
            this.themeDialog.showDialog(this.chartComponent.ciq);
        }
        else {
            this.themeDialog.updateTheme(theme);
        }
    };
    ChartUI.prototype.updateThemeList = function (params) {
        if (params.name) {
            var duplicate = false;
            for (var i = 0; i < this.themes.length; i++) {
                if (this.themes[i].name == params.name) {
                    this.themes[i].settings = params.settings;
                    duplicate = true;
                }
            }
            if (!duplicate)
                this.themes.splice((this.themes.length - 1), 0, params);
        }
        else
            console.error("Please name your custom theme.");
    };
    ;
    ChartUI.prototype.onSelectPeriod = function () {
        for (var index = 0; index < this.periodicityOptions.length; index++) {
            if (this.periodicityOptions[index].label == this.PeriodSelected) {
                this.changePeriodicity(this.periodicityOptions[index].period, this.periodicityOptions[index].interval);
                break;
            }
        }
    };
    ChartUI.prototype.onSelectType = function () {
        for (var index = 0; index < this.chartTypes.length; index++) {
            if (this.chartTypes[index].label == this.TypeSelected) {
                this.changeChartType(this.chartTypes[index]);
                break;
            }
        }
    };
    ChartUI.prototype.onSelectStudy = function () {
        console.log(this.StudySelected);
        CIQ.Studies.addStudy(this.chartComponent.ciq, this.StudySelected);
    };
    ChartUI.prototype.clearStudies = function () {
        var _this = this;
        console.log("clearStudies");
        this.StudySelected = "";
        var s = this.getChartLayout().studies;
        if (!s)
            return;
        for (var n in s) {
            var sd = s[n];
            CIQ.Studies.removeStudy(this.chartComponent.ciq, sd);
        }
        setTimeout(function () {
            s = _this.getChartLayout().studies;
            if (!s)
                return;
            for (var n in s) {
                var sd = s[n];
                CIQ.Studies.removeStudy(_this.chartComponent.ciq, sd);
            }
        }, 1000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__chart_component_chart_component__["a" /* ChartComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__chart_component_chart_component__["a" /* ChartComponent */])
    ], ChartUI.prototype, "chartComponent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__app_theme_dialog_component_theme_dialog_component__["a" /* ThemeDialog */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__app_theme_dialog_component_theme_dialog_component__["a" /* ThemeDialog */])
    ], ChartUI.prototype, "themeDialog", void 0);
    ChartUI = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'chart-ui',template:/*ion-inline-start:"C:\Users\user\Desktop\interactive-crpto-v2\src\app\ui_component\ui.component.html"*/'<!-- <nav class="ciq-nav">\n	<div class="left">\n    <span class="symbol-frame">\n      <input id="symbolInput" placeholder="Set Symbol" type="text" (keyup.enter)="changeSymbol()" [(ngModel)]="symbolInput"><div class="symbol-btn" (click)=changeSymbol()></div>\n    </span>\n    <span class="symbol-frame">\n      <input id="symbolCompareInput" placeholder="Add Comparison" type="text" (keyup.enter)="addComparison()" [(ngModel)]="symbolComparison"><div class="comparison-btn" (click)="addComparison()"></div>\n    </span>\n	</div>\n	<div class="right">\n    <menu-select id="periodicitySelect">\n      <span class="title">{{periodicity}}</span>\n      <menu-select-options class="menu-hover">\n        <menu-option *ngFor="let period of periodicityOptions" (click)="changePeriodicity(period.period, period.interval)">\n          {{period.label}}\n        </menu-option>\n      </menu-select-options>\n    </menu-select>\n    <menu-select id="chartTypeSelect">\n      <span class="title">{{chartType}}</span>\n      <menu-select-options class="menu-hover">\n        <menu-option *ngFor="let type of chartTypes" (click)="changeChartType(type)">\n          {{type.label}}\n        </menu-option>\n      </menu-select-options>\n    </menu-select>\n    <menu-select id="studySelect">\n      <span class="title">{{studies.selectedOption || "Add Study"}}</span>\n      <menu-select-options>\n        <menu-option *ngFor="let study of studies.list" (click)="studyDialog.addStudy(study, chartComponent.ciq)">\n          {{study}}\n        </menu-option>\n      </menu-select-options>\n    </menu-select>\n    <menu-select id="themeSelect">\n      <span class="title">Select Theme</span>\n      <menu-select-options class="menu-hover">\n        <menu-option *ngFor="let theme of themes" (click)="handleThemeSelect(theme)"><span>{{theme.name}}</span></menu-option>\n      </menu-select-options>\n    </menu-select>\n    <button class="crosshair-btn" (click)="toggleCrosshairs()"></button>\n    <button class="timezone-btn" (click)="timezoneDialog.launchTimezoneDialog(chartComponent.ciq)" ngClass="{\'active\':cqNgUi.cqNgChart.ciq.layout.crosshair}"></button>\n		<button class="drawing-toolbar-btn" (click)="drawingToolbar.toggleDrawingToolbar(chartComponent.ciq)"></button>\n	</div>\n</nav> -->\n\n<!-- The components -->\n<!-- <menu-select id="periodicitySelect">\n  <span class="title">{{periodicity}}</span>\n  <menu-select-options class="menu-hover">\n    <menu-option *ngFor="let period of periodicityOptions" (click)="changePeriodicity(period.period, period.interval)">\n      {{period.label}}\n    </menu-option>\n  </menu-select-options>\n</menu-select> -->\n\n\n\n\n<div class="ciq-chart-area" id="ciq-chart-area-for-lanscape-mode">\n\n    <div style="position:absolute;top:0;z-index: 1000;font-size: 16px;" (tap)="clearStudies()" *ngIf="StudySelected">\n        Clear Studies\n      </div>\n\n	<drawing-toolbar #drawingToolbar (launchColorpickerEvent)="colorpicker.launchColorpicker($event)"></drawing-toolbar>\n  <chart #chartComponent></chart>\n</div>\n\n<!-- <div class="ciq-footer">\n  <div class="quick-link" (click)="chartComponent.set(1, \'all\')">All</div>\n  <div class="quick-link" (click)="chartComponent.set(5, \'year\')">5y</div>\n  <div class="quick-link" (click)="chartComponent.set(1, \'year\')">1y</div>\n  <div class="quick-link" (click)="chartComponent.set(1, \'YTD\')">YTD</div>\n  <div class="quick-link" (click)="chartComponent.set(3, \'month\')">3m</div>\n  <div class="quick-link" (click)="chartComponent.set(1, \'month\')">1m</div>\n  <div class="quick-link" (click)="chartComponent.set(5, \'day\')">5d</div>\n  <div class="quick-link" (click)="chartComponent.set(1, \'today\')">1d</div>\n</div> -->\n\n\n<!-- <study-dialog #studyDialog [(launchDialog)]="launchDialog" (launchColorpickerEvent)="colorpicker.launchColorpicker($event)" (launchOverlayMenu)="overlayMenu.launchMe($event)"></study-dialog>\n<theme-dialog #themeDialog (themeToPush)="updateThemeList($event)" (launchColorpickerEvent)="colorpicker.launchColorpicker($event)"></theme-dialog>\n<timezone-dialog #timezoneDialog></timezone-dialog>\n<colorpicker #colorpicker (setDrawingSwatchColor)="drawingToolbar.setColorFromPicker($event)" (setThemeSwatchColor)="themeDialog.setColorFromPicker($event)" (setStudySwatchColor)="studyDialog.setColorFromPicker($event)"></colorpicker>\n<overlay-menu #overlayMenu (launchStudyDialog)="studyDialog.showDialog($event)" (removeStudy)="studyDialog.removeStudy($event)"></overlay-menu> -->\n\n\n<ion-grid style="background: #1c2a35;">\n  <ion-row>\n    <ion-col>\n        <ion-select interface="action-sheet" placeholder="1 Hour" [(ngModel)]="PeriodSelected" (ionChange)="onSelectPeriod()" >\n            <ion-option  *ngFor="let period of periodicityOptions" selected="period.label == PeriodSelected">{{period.label}}</ion-option>\n          </ion-select>\n    </ion-col>\n    <ion-col>\n        <ion-select interface="action-sheet" placeholder="candle" [(ngModel)]="TypeSelected" (ionChange)="onSelectType()" >\n            <ion-option  *ngFor="let type of chartTypes" selected="type.label == TypeSelected">{{type.label}}</ion-option>\n          </ion-select>\n      </ion-col>\n      <ion-col>\n          <ion-select interface="action-sheet" placeholder="Add Study" [(ngModel)]="StudySelected" (ionChange)="onSelectStudy()" >\n              <ion-option  *ngFor="let study of studies.list">{{study}}</ion-option>\n            </ion-select>\n        </ion-col>\n  </ion-row>\n</ion-grid>\n\n'/*ion-inline-end:"C:\Users\user\Desktop\interactive-crpto-v2\src\app\ui_component\ui.component.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_1__chart_component_chart_component__["a" /* ChartComponent */], __WEBPACK_IMPORTED_MODULE_2__app_study_dialog_component_study_dialog_component__["a" /* StudyDialog */], __WEBPACK_IMPORTED_MODULE_3__app_theme_dialog_component_theme_dialog_component__["a" /* ThemeDialog */], __WEBPACK_IMPORTED_MODULE_6__app_timezone_dialog_component_timezone_dialog_component__["a" /* TimezoneDialog */], __WEBPACK_IMPORTED_MODULE_5__app_colorpicker_component_colorpicker__["a" /* Colorpicker */], __WEBPACK_IMPORTED_MODULE_4__app_overlay_menu_component_overlay_menu__["a" /* OverlayMenu */]],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* NgZone */]])
    ], ChartUI);
    return ChartUI;
}());

//# sourceMappingURL=ui.component.js.map

/***/ }),

/***/ 583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartService; });
var ChartService = /** @class */ (function () {
    function ChartService() {
        console.log("ChartService->constructor");
        // To implement your own quotefeed and see other methods of data loading, check out our tutorial: http://documentation.chartiq.com/tutorial-Data%20Loading.html
        CIQ.QuoteFeed.MyFeed = function (url) {
            this.url = url;
        };
        console.log(quotefeedSimulator);
        // Inherit from the base feed
        CIQ.QuoteFeed.MyFeed.ciqInheritsFrom(CIQ.QuoteFeed);
    }
    ChartService.prototype.attachQuoteFeed = function (chart) {
        console.log("ChartService->attachQuoteFeed");
        chart.attachQuoteFeed(quotefeedSimulator, { refreshInterval: 1 });
    };
    return ChartService;
}());

//# sourceMappingURL=chart.service.js.map

/***/ }),

/***/ 584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrawingToolbar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipes_title_case_pipe__ = __webpack_require__(576);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DrawingToolbar = /** @class */ (function () {
    function DrawingToolbar() {
        this.activeOutput = {};
        this.drawingTools = [];
        this.open = false;
        this.fontSize = 13;
        this.fontFamily = "Helvetica"; //defaults
        this.fontSizeOptions = [8, 10, 12, 13, 14, 16, 20, 28, 36, 48, 64];
        this.fontFamilyOptions = ["Helvetica", "Courier", "Garamond", "Palatino", "Times New Roman"];
        this.bold = false;
        this.italic = false;
        this.showFontOptions = false;
        this.launchToolbar = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.launchColorpickerEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.launchColorpicker = function (setting, event) {
            this.activeOutput['div'] = event.target;
            this.launchColorpickerEvent.emit({
                swatch: event.target,
                setting: setting
            });
        };
        this.updateToolColors = function (color, settings) {
            if (settings == "drawingFill") {
                this.ciq.changeVectorParameter("fillColor", "#" + color);
            }
            else if (settings == "drawingLine") {
                this.ciq.changeVectorParameter("currentColor", "#" + color);
            }
        };
        this.drawingToolsMap = CIQ.Drawing.getDrawingToolList({});
        //sort the tools
        for (var i in this.drawingToolsMap) {
            this.drawingTools.push(this.drawingToolsMap[i]);
        }
        this.drawingTools.sort(function (a, b) {
            if (a < b) {
                return -1;
            }
            if (a > b) {
                return 1;
            }
            // must be equal
            return 0;
        });
    }
    DrawingToolbar.prototype.toggleDrawingToolbar = function (chart) {
        if (chart)
            this.ciq = chart;
        this.launchToolbar.emit(!this.open);
        this.open = !this.open;
        if (!this.open) {
            this.selectedTool = false;
            this.toolParams = false;
            this.fillColor = false;
            this.lineColor = false;
            this.lineWidth = false;
            this.pattern = false;
            this.ciq.changeVectorType('');
        }
        var elem = document.getElementById("chartContainer");
        if (this.open)
            elem.className += " toolbarOn";
        else
            elem.classList.remove("toolbarOn");
        this.ciq.draw();
    };
    DrawingToolbar.prototype.setTool = function (tool) {
        // Set all the info for the toolbar
        this.selectedTool = __WEBPACK_IMPORTED_MODULE_1__pipes_title_case_pipe__["a" /* TitlecasePipe */].prototype.transform(tool);
        this.toolParams = CIQ.Drawing.getDrawingParameters(this.ciq, tool);
        if (tool == 'callout' || tool == 'annotation') {
            // Sync the defaults for font tool
            var style = this.ciq.canvasStyle("stx_annotation");
            var size = style.fontSize;
            this.ciq.currentVectorParameters.annotation.font.size = size;
            this.fontSize = size;
            this.ciq.currentVectorParameters.annotation.font.family = style.fontFamily;
            this.fontFamily = style.fontFamily;
            this.ciq.currentVectorParameters.annotation.font.style = style.fontStyle;
            this.ciq.currentVectorParameters.annotation.font.weight = style.fontWeight;
            this.showFontOptions = true;
        }
        else {
            this.showFontOptions = false;
        }
        this.fillColor = this.toolParams.fillColor;
        if (this.toolParams.color == "auto")
            this.lineColor = "white";
        else
            this.lineColor = this.toolParams.color;
        this.lineWidth = this.toolParams.lineWidth;
        this.pattern = this.toolParams.pattern;
        if (this.lineWidth && this.pattern)
            this.selectedLineClass = 'ciq-' + this.pattern + '-' + this.lineWidth;
        // Activate the tool
        this.ciq.changeVectorType(tool);
    };
    ;
    DrawingToolbar.prototype.setColorFromPicker = function (params) {
        if (this.activeOutput.div == params.source) {
            this.updateToolColors(params.color, params.params);
            this.activeOutput.div.style.backgroundColor = CIQ.hexToRgba('#' + params.color);
        }
    };
    DrawingToolbar.prototype.setLinePattern = function (newClass, newWidth, newPattern) {
        // Set the info for the toolbar menu
        this.selectedLineClass = newClass;
        // Activate the new parameters
        this.ciq.changeVectorParameter("lineWidth", newWidth);
        this.ciq.changeVectorParameter("pattern", newPattern);
    };
    ;
    DrawingToolbar.prototype.setFontSize = function (newSize) {
        this.fontSize = newSize + 'px';
        this.ciq.changeVectorParameter("fontSize", newSize + 'px');
    };
    ;
    DrawingToolbar.prototype.setFontFamily = function (newFamily) {
        this.fontFamily = newFamily;
        this.ciq.changeVectorParameter("fontFamily", newFamily);
    };
    ;
    DrawingToolbar.prototype.toggleStyle = function (newStyle) {
        if (newStyle == 'bold') {
            if (!this.bold) {
                this.ciq.changeVectorParameter("fontWeight", "bold");
                this.bold = true;
            }
            else {
                this.ciq.changeVectorParameter("fontWeight", "normal");
                this.bold = false;
            }
        }
        else if (newStyle == 'italic') {
            if (!this.italic) {
                this.ciq.changeVectorParameter("fontStyle", "italic");
                this.italic = true;
            }
            else {
                this.ciq.changeVectorParameter("fontStyle", "normal");
                this.italic = false;
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], DrawingToolbar.prototype, "launchToolbar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], DrawingToolbar.prototype, "launchColorpickerEvent", void 0);
    DrawingToolbar = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'drawing-toolbar',template:/*ion-inline-start:"C:\Users\user\Desktop\interactive-crpto-v2\src\app\drawing_toolbar_component\drawing.toolbar.component.html"*/'<div class="toolbar" *ngIf="launchToolbar | async">\n	<menu-select id="toolSelect">\n		<span class="title">{{selectedTool || "Select Tool"}}</span>\n		<menu-select-options class="menu-hover">\n			<menu-option class="option" *ngFor="let tool of drawingTools" (click)="setTool(tool)"><span>{{tool | titlecase}}</span></menu-option>\n		</menu-select-options>\n	</menu-select>\n	<div class="drawingParameters" *ngIf="toolParams">\n		<div *ngIf="fillColor" [ngStyle]="{\'background-color\':fillColor}" class="color-picker-swatch fill" (click)="launchColorpicker(\'drawingFill\', $event)"></div>\n		<div *ngIf="lineColor" [ngStyle]="{\'background-color\':lineColor}" class="color-picker-swatch line" (click)="launchColorpicker(\'drawingLine\', $event)"></div>\n		<div *ngIf="lineWidth && pattern">\n			<menu-select id="lineSelect">\n				<span class="title" [ngClass]="selectedLineClass"></span>\n				<menu-select-options class="menu-hover">\n					<menu-option class="option" (click)="setLinePattern(\'ciq-solid-1\', 1, \'solid\')"><span class="ciq-line-style-option ciq-solid-1"></span></menu-option>\n					<menu-option class="option" (click)="setLinePattern(\'ciq-solid-3\', 3, \'solid\')"><span class="ciq-line-style-option ciq-solid-3"></span></menu-option>\n					<menu-option class="option" (click)="setLinePattern(\'ciq-solid-5\', 5, \'solid\')"><span class="ciq-line-style-option ciq-solid-5"></span></menu-option>\n					<menu-option class="option" (click)="setLinePattern(\'ciq-dotted-1\', 1, \'dotted\')"><span class="ciq-line-style-option ciq-dotted-1"></span></menu-option>\n					<menu-option class="option" (click)="setLinePattern(\'ciq-dotted-3\', 3, \'dotted\')"><span class="ciq-line-style-option ciq-dotted-3"></span></menu-option>\n					<menu-option class="option" (click)="setLinePattern(\'ciq-dotted-5\', 5, \'dotted\')"><span class="ciq-line-style-option ciq-dotted-5"></span></menu-option>\n					<menu-option class="option" (click)="setLinePattern(\'ciq-dashed-1\', 1, \'dashed\')"><span class="ciq-line-style-option ciq-dashed-1"></span></menu-option>\n					<menu-option class="option" (click)="setLinePattern(\'ciq-dashed-3\', 3, \'dashed\')"><span class="ciq-line-style-option ciq-dashed-3"></span></menu-option>\n					<menu-option class="option" (click)="setLinePattern(\'ciq-dashed-5\', 5, \'dashed\')"><span class="ciq-line-style-option ciq-dashed-5"></span></menu-option>\n				</menu-select-options>\n			</menu-select>\n		</div>\n		<div *ngIf="selectedTool==\'Callout\' || selectedTool==\'Annotation\'">\n			<div class="italicBtn" (click)="toggleStyle(\'italic\')">I</div>\n			<div class="boldBtn" (click)="toggleStyle(\'bold\')">B</div>\n			<menu-select id="fontSizeSelect">\n				<span class="title">{{fontSize}}</span>\n				<menu-select-options class="menu-hover">\n					<menu-option class="option" *ngFor="let option of fontSizeOptions" (click)="setFontSize(option)"><span>{{option}}</span></menu-option>\n				</menu-select-options>\n			</menu-select>\n			<menu-select id="fontFamilySelect">\n				<span class="title">{{fontFamily}}</span>\n				<menu-select-options class="menu-hover">\n					<menu-option class="option" *ngFor="let option of fontFamilyOptions" (click)="setFontFamily(option)"><span [style.font-family]="option">{{option}}</span></menu-option>\n				</menu-select-options>\n			</menu-select>\n		</div>\n	</div>\n</div>\n'/*ion-inline-end:"C:\Users\user\Desktop\interactive-crpto-v2\src\app\drawing_toolbar_component\drawing.toolbar.component.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_1__pipes_title_case_pipe__["a" /* TitlecasePipe */]]
        }),
        __metadata("design:paramtypes", [])
    ], DrawingToolbar);
    return DrawingToolbar;
}());

//# sourceMappingURL=drawing.toolbar.component.js.map

/***/ })

});
//# sourceMappingURL=2.js.map