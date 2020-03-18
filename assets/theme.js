/* 
         IMPORTANT NOTE:
         
         This file is the unminified JS that is used by the theme. This file is therefore not included into the "theme.liquid" Liquid. It is bundled only
         for developers who would like to add their own JavaScript or edit the existing JavaScript. Re-minifying the ile and make sure you include it into
         the "theme.liquid" is up to the developers responsibility.
         
         Because we are using WebPack internally to bundle our JavaScript code, even the unminified file can be quite hard to read or edit due to all the
         code added by WebPack.
         
         Please note that we do not provide any assistance for changes made here that may break the theme: it's at your own risk :).
      */
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/******/(function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/var installedModules = {};
  /******/
  /******/ // The require function
  /******/function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/if (installedModules[moduleId]) {
      /******/return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/var module = installedModules[moduleId] = {
      /******/i: moduleId,
      /******/l: false,
      /******/exports: {}
      /******/ };
    /******/
    /******/ // Execute the module function
    /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Flag the module as loaded
    /******/module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/__webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/__webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/__webpack_require__.d = function (exports, name, getter) {
    /******/if (!__webpack_require__.o(exports, name)) {
      /******/Object.defineProperty(exports, name, {
        /******/configurable: false,
        /******/enumerable: true,
        /******/get: getter
        /******/ });
      /******/
    }
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/__webpack_require__.n = function (module) {
    /******/var getter = module && module.__esModule ?
    /******/function getDefault() {
      return module['default'];
    } :
    /******/function getModuleExports() {
      return module;
    };
    /******/__webpack_require__.d(getter, 'a', getter);
    /******/return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/__webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/__webpack_require__.p = "";
  /******/
  /******/ // Load entry module and return exports
  /******/return __webpack_require__(__webpack_require__.s = 55);
  /******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

  var Responsive = function () {
    function Responsive() {
      _classCallCheck(this, Responsive);
    }

    _createClass(Responsive, null, [{
      key: 'matchesBreakpoint',
      value: function matchesBreakpoint(breakpoint) {
        switch (breakpoint) {
          case 'phone':
            return window.matchMedia('screen and (max-width: 640px)').matches;

          case 'tablet':
            return window.matchMedia('screen and (min-width: 641px) and (max-width: 1023px)').matches;

          case 'tablet-and-up':
            return window.matchMedia('screen and (min-width: 641px)').matches;

          case 'pocket':
            return window.matchMedia('screen and (max-width: 1023px)').matches;

          case 'lap':
            return window.matchMedia('screen and (min-width: 1024px) and (max-width: 1279px)').matches;

          case 'lap-and-up':
            return window.matchMedia('screen and (min-width: 1024px)').matches;

          case 'desk':
            return window.matchMedia('screen and (min-width: 1280px)').matches;

          case 'widescreen':
            return window.matchMedia('screen and (min-width: 1440px)').matches;

          case 'supports-hover':
            return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
        }
      }
    }, {
      key: 'getCurrentBreakpoint',
      value: function getCurrentBreakpoint() {
        if (window.matchMedia('screen and (max-width: 640px)').matches) {
          return 'phone';
        }

        if (window.matchMedia('screen and (min-width: 641px) and (max-width: 1023px)').matches) {
          return 'tablet';
        }

        if (window.matchMedia('screen and (min-width: 1024px) and (max-width: 1279px)').matches) {
          return 'lap';
        }

        if (window.matchMedia('screen and (min-width: 1280px)').matches) {
          return 'desk';
        }
      }
    }]);

    return Responsive;
  }();
  /* harmony export (immutable) */

  __webpack_exports__["default"] = Responsive;

  /***/
},
/* 1 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

  var Currency = function () {
    function Currency() {
      _classCallCheck(this, Currency);
    }

    _createClass(Currency, null, [{
      key: 'formatMoney',

      /**
       * Format money values based on your shop currency settings
       *
       * @param  {Number|string} cents - value in cents or dollar amount e.g. 300 cents or 3.00 dollars
       * @param  {String} format - shop money_format setting
       * @return {String} value - formatted value
       */
      value: function formatMoney(cents, format) {
        if (typeof cents === 'string') {
          cents = cents.replace('.', '');
        }

        var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/,
            formatString = format || '${{amount}}';

        function defaultTo(value, defaultValue) {
          return value == null || value !== value ? defaultValue : value;
        }

        function formatWithDelimiters(number, precision, thousands, decimal) {
          precision = defaultTo(precision, 2);
          thousands = defaultTo(thousands, ',');
          decimal = defaultTo(decimal, '.');

          if (isNaN(number) || number == null) {
            return 0;
          }

          number = (number / 100.0).toFixed(precision);

          var parts = number.split('.'),
              dollarsAmount = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands),
              centsAmount = parts[1] ? decimal + parts[1] : '';

          return dollarsAmount + centsAmount;
        }

        var value = '';

        switch (formatString.match(placeholderRegex)[1]) {
          case 'amount':
            value = formatWithDelimiters(cents, 2);
            break;
          case 'amount_no_decimals':
            value = formatWithDelimiters(cents, 0);
            break;
          case 'amount_with_space_separator':
            value = formatWithDelimiters(cents, 2, ' ', '.');
            break;
          case 'amount_no_decimals_with_comma_separator':
            value = formatWithDelimiters(cents, 0, ',', '.');
            break;
          case 'amount_no_decimals_with_space_separator':
            value = formatWithDelimiters(cents, 0, ' ');
            break;
          case 'amount_with_comma_separator':
            value = formatWithDelimiters(cents, 2, '.', ',');
            break;
        }

        if (formatString.indexOf('with_comma_separator') !== -1) {
          return formatString.replace(placeholderRegex, value).replace(',00', '');
        } else {
          return formatString.replace(placeholderRegex, value).replace('.00', '');
        }
      }

      /**
       * Allow to converts all elements from one currency to another. To speed up, you can pass a selector that will
       * act as the root element
       */

    }, {
      key: 'convertAll',
      value: function convertAll(selector) {
        var _this = this;

        var moneyFormats = {
          "USD": {
            "money_format": "${{amount}}",
            "money_with_currency_format": "${{amount}} USD"
          },
          "EUR": {
            "money_format": "&euro;{{amount}}",
            "money_with_currency_format": "&euro;{{amount}} EUR"
          },
          "GBP": {
            "money_format": "&pound;{{amount}}",
            "money_with_currency_format": "&pound;{{amount}} GBP"
          },
          "CAD": {
            "money_format": "${{amount}}",
            "money_with_currency_format": "${{amount}} CAD"
          },
          "ALL": {
            "money_format": "Lek {{amount}}",
            "money_with_currency_format": "Lek {{amount}} ALL"
          },
          "DZD": {
            "money_format": "DA {{amount}}",
            "money_with_currency_format": "DA {{amount}} DZD"
          },
          "AOA": {
            "money_format": "Kz{{amount}}",
            "money_with_currency_format": "Kz{{amount}} AOA"
          },
          "ARS": {
            "money_format": "${{amount_with_comma_separator}}",
            "money_with_currency_format": "${{amount_with_comma_separator}} ARS"
          },
          "AMD": {
            "money_format": "{{amount}} AMD",
            "money_with_currency_format": "{{amount}} AMD"
          },
          "AWG": {
            "money_format": "Afl{{amount}}",
            "money_with_currency_format": "Afl{{amount}} AWG"
          },
          "AUD": {
            "money_format": "${{amount}}",
            "money_with_currency_format": "${{amount}} AUD"
          },
          "BBD": {
            "money_format": "${{amount}}",
            "money_with_currency_format": "${{amount}} Bds"
          },
          "AZN": {
            "money_format": "m.{{amount}}",
            "money_with_currency_format": "m.{{amount}} AZN"
          },
          "BDT": {
            "money_format": "Tk {{amount}}",
            "money_with_currency_format": "Tk {{amount}} BDT"
          },
          "BSD": {
            "money_format": "BS${{amount}}",
            "money_with_currency_format": "BS${{amount}} BSD"
          },
          "BHD": {
            "money_format": "{{amount}} BD",
            "money_with_currency_format": "{{amount}} BHD"
          },
          "BYR": {
            "money_format": "Br {{amount}}",
            "money_with_currency_format": "Br {{amount}} BYR"
          },
          "BZD": {
            "money_format": "BZ${{amount}}",
            "money_with_currency_format": "BZ${{amount}} BZD"
          },
          "BTN": {
            "money_format": "Nu {{amount}}",
            "money_with_currency_format": "Nu {{amount}} BTN"
          },
          "BAM": {
            "money_format": "KM {{amount_with_comma_separator}}",
            "money_with_currency_format": "KM {{amount_with_comma_separator}} BAM"
          },
          "BRL": {
            "money_format": "R$ {{amount_with_comma_separator}}",
            "money_with_currency_format": "R$ {{amount_with_comma_separator}} BRL"
          },
          "BOB": {
            "money_format": "Bs{{amount_with_comma_separator}}",
            "money_with_currency_format": "Bs{{amount_with_comma_separator}} BOB"
          },
          "BWP": {
            "money_format": "P{{amount}}",
            "money_with_currency_format": "P{{amount}} BWP"
          },
          "BND": {
            "money_format": "${{amount}}",
            "money_with_currency_format": "${{amount}} BND"
          },
          "BGN": {
            "money_format": "{{amount}} Ð»Ð²",
            "money_with_currency_format": "{{amount}} Ð»Ð² BGN"
          },
          "MMK": {
            "money_format": "K{{amount}}",
            "money_with_currency_format": "K{{amount}} MMK"
          },
          "KHR": {
            "money_format": "KHR{{amount}}",
            "money_with_currency_format": "KHR{{amount}}"
          },
          "KYD": {
            "money_format": "${{amount}}",
            "money_with_currency_format": "${{amount}} KYD"
          },
          "XAF": {
            "money_format": "FCFA{{amount}}",
            "money_with_currency_format": "FCFA{{amount}} XAF"
          },
          "CLP": {
            "money_format": "${{amount_no_decimals}}",
            "money_with_currency_format": "${{amount_no_decimals}} CLP"
          },
          "CNY": {
            "money_format": "&#165;{{amount}}",
            "money_with_currency_format": "&#165;{{amount}} CNY"
          },
          "COP": {
            "money_format": "${{amount_with_comma_separator}}",
            "money_with_currency_format": "${{amount_with_comma_separator}} COP"
          },
          "CRC": {
            "money_format": "&#8353; {{amount_with_comma_separator}}",
            "money_with_currency_format": "&#8353; {{amount_with_comma_separator}} CRC"
          },
          "HRK": {
            "money_format": "{{amount_with_comma_separator}} kn",
            "money_with_currency_format": "{{amount_with_comma_separator}} kn HRK"
          },
          "CZK": {
            "money_format": "{{amount_with_comma_separator}} K&#269;",
            "money_with_currency_format": "{{amount_with_comma_separator}} K&#269;"
          },
          "DKK": {
            "money_format": "{{amount_with_comma_separator}}",
            "money_with_currency_format": "kr.{{amount_with_comma_separator}}"
          },
          "DOP": {
            "money_format": "RD$ {{amount}}",
            "money_with_currency_format": "RD$ {{amount}}"
          },
          "XCD": {
            "money_format": "${{amount}}",
            "money_with_currency_format": "EC${{amount}}"
          },
          "EGP": {
            "money_format": "LE {{amount}}",
            "money_with_currency_format": "LE {{amount}} EGP"
          },
          "ETB": {
            "money_format": "Br{{amount}}",
            "money_with_currency_format": "Br{{amount}} ETB"
          },
          "XPF": {
            "money_format": "{{amount_no_decimals_with_comma_separator}} XPF",
            "money_with_currency_format": "{{amount_no_decimals_with_comma_separator}} XPF"
          },
          "FJD": {
            "money_format": "${{amount}}",
            "money_with_currency_format": "FJ${{amount}}"
          },
          "GMD": {
            "money_format": "D {{amount}}",
            "money_with_currency_format": "D {{amount}} GMD"
          },
          "GHS": {
            "money_format": "GH&#8373;{{amount}}",
            "money_with_currency_format": "GH&#8373;{{amount}}"
          },
          "GTQ": {
            "money_format": "Q{{amount}}",
            "money_with_currency_format": "{{amount}} GTQ"
          },
          "GYD": {
            "money_format": "G${{amount}}",
            "money_with_currency_format": "${{amount}} GYD"
          },
          "GEL": {
            "money_format": "{{amount}} GEL",
            "money_with_currency_format": "{{amount}} GEL"
          },
          "HNL": {
            "money_format": "L {{amount}}",
            "money_with_currency_format": "L {{amount}} HNL"
          },
          "HKD": {
            "money_format": "${{amount}}",
            "money_with_currency_format": "HK${{amount}}"
          },
          "HUF": {
            "money_format": "{{amount_no_decimals_with_comma_separator}}",
            "money_with_currency_format": "{{amount_no_decimals_with_comma_separator}} Ft"
          },
          "ISK": {
            "money_format": "{{amount_no_decimals}} kr",
            "money_with_currency_format": "{{amount_no_decimals}} kr ISK"
          },
          "INR": {
            "money_format": "Rs. {{amount}}",
            "money_with_currency_format": "Rs. {{amount}}"
          },
          "IDR": {
            "money_format": "{{amount_with_comma_separator}}",
            "money_with_currency_format": "Rp {{amount_with_comma_separator}}"
          },
          "ILS": {
            "money_format": "{{amount}} NIS",
            "money_with_currency_format": "{{amount}} NIS"
          },
          "JMD": {
            "money_format": "${{amount}}",
            "money_with_currency_format": "${{amount}} JMD"
          },
          "JPY": {
            "money_format": "&#165;{{amount_no_decimals}}",
            "money_with_currency_format": "&#165;{{amount_no_decimals}} JPY"
          },
          "JEP": {
            "money_format": "&pound;{{amount}}",
            "money_with_currency_format": "&pound;{{amount}} JEP"
          },
          "JOD": {
            "money_format": "{{amount}} JD",
            "money_with_currency_format": "{{amount}} JOD"
          },
          "KZT": {
            "money_format": "{{amount}} KZT",
            "money_with_currency_format": "{{amount}} KZT"
          },
          "KES": {
            "money_format": "KSh{{amount}}",
            "money_with_currency_format": "KSh{{amount}}"
          },
          "KWD": {
            "money_format": "{{amount}} KD",
            "money_with_currency_format": "{{amount}} KWD"
          },
          "KGS": {
            "money_format": "Ð»Ð²{{amount}}",
            "money_with_currency_format": "Ð»Ð²{{amount}}"
          },
          "LVL": {
            "money_format": "Ls {{amount}}",
            "money_with_currency_format": "Ls {{amount}} LVL"
          },
          "LBP": {
            "money_format": "L&pound;{{amount}}",
            "money_with_currency_format": "L&pound;{{amount}} LBP"
          },
          "LTL": {
            "money_format": "{{amount}} Lt",
            "money_with_currency_format": "{{amount}} Lt"
          },
          "MGA": {
            "money_format": "Ar {{amount}}",
            "money_with_currency_format": "Ar {{amount}} MGA"
          },
          "MKD": {
            "money_format": "ден {{amount}}",
            "money_with_currency_format": "ден {{amount}} MKD"
          },
          "MOP": {
            "money_format": "MOP${{amount}}",
            "money_with_currency_format": "MOP${{amount}}"
          },
          "MVR": {
            "money_format": "Rf{{amount}}",
            "money_with_currency_format": "Rf{{amount}} MRf"
          },
          "MXN": {
            "money_format": "$ {{amount}}",
            "money_with_currency_format": "$ {{amount}} MXN"
          },
          "MYR": {
            "money_format": "RM{{amount}} MYR",
            "money_with_currency_format": "RM{{amount}} MYR"
          },
          "MUR": {
            "money_format": "Rs {{amount}}",
            "money_with_currency_format": "Rs {{amount}} MUR"
          },
          "MDL": {
            "money_format": "{{amount}} MDL",
            "money_with_currency_format": "{{amount}} MDL"
          },
          "MAD": {
            "money_format": "{{amount}} dh",
            "money_with_currency_format": "Dh {{amount}} MAD"
          },
          "MNT": {
            "money_format": "{{amount_no_decimals}} &#8366",
            "money_with_currency_format": "{{amount_no_decimals}} MNT"
          },
          "MZN": {
            "money_format": "{{amount}} Mt",
            "money_with_currency_format": "Mt {{amount}} MZN"
          },
          "NAD": {
            "money_format": "N${{amount}}",
            "money_with_currency_format": "N${{amount}} NAD"
          },
          "NPR": {
            "money_format": "Rs{{amount}}",
            "money_with_currency_format": "Rs{{amount}} NPR"
          },
          "ANG": {
            "money_format": "&fnof;{{amount}}",
            "money_with_currency_format": "{{amount}} NA&fnof;"
          },
          "NZD": {
            "money_format": "${{amount}}",
            "money_with_currency_format": "${{amount}} NZD"
          },
          "NIO": {
            "money_format": "C${{amount}}",
            "money_with_currency_format": "C${{amount}} NIO"
          },
          "NGN": {
            "money_format": "&#8358;{{amount}}",
            "money_with_currency_format": "&#8358;{{amount}} NGN"
          },
          "NOK": {
            "money_format": "kr {{amount_with_comma_separator}}",
            "money_with_currency_format": "kr {{amount_with_comma_separator}} NOK"
          },
          "OMR": {
            "money_format": "{{amount_with_comma_separator}} OMR",
            "money_with_currency_format": "{{amount_with_comma_separator}} OMR"
          },
          "PKR": {
            "money_format": "Rs.{{amount}}",
            "money_with_currency_format": "Rs.{{amount}} PKR"
          },
          "PGK": {
            "money_format": "K {{amount}}",
            "money_with_currency_format": "K {{amount}} PGK"
          },
          "PYG": {
            "money_format": "Gs. {{amount_no_decimals_with_comma_separator}}",
            "money_with_currency_format": "Gs. {{amount_no_decimals_with_comma_separator}} PYG"
          },
          "PEN": {
            "money_format": "S/. {{amount}}",
            "money_with_currency_format": "S/. {{amount}} PEN"
          },
          "PHP": {
            "money_format": "&#8369;{{amount}}",
            "money_with_currency_format": "&#8369;{{amount}} PHP"
          },
          "PLN": {
            "money_format": "{{amount_with_comma_separator}} zl",
            "money_with_currency_format": "{{amount_with_comma_separator}} zl PLN"
          },
          "QAR": {
            "money_format": "QAR {{amount_with_comma_separator}}",
            "money_with_currency_format": "QAR {{amount_with_comma_separator}}"
          },
          "RON": {
            "money_format": "{{amount_with_comma_separator}} lei",
            "money_with_currency_format": "{{amount_with_comma_separator}} lei RON"
          },
          "RUB": {
            "money_format": "&#1088;&#1091;&#1073;{{amount_with_comma_separator}}",
            "money_with_currency_format": "&#1088;&#1091;&#1073;{{amount_with_comma_separator}} RUB"
          },
          "RWF": {
            "money_format": "{{amount_no_decimals}} RF",
            "money_with_currency_format": "{{amount_no_decimals}} RWF"
          },
          "WST": {
            "money_format": "WS$ {{amount}}",
            "money_with_currency_format": "WS$ {{amount}} WST"
          },
          "SAR": {
            "money_format": "{{amount}} SR",
            "money_with_currency_format": "{{amount}} SAR"
          },
          "STD": {
            "money_format": "Db {{amount}}",
            "money_with_currency_format": "Db {{amount}} STD"
          },
          "RSD": {
            "money_format": "{{amount}} RSD",
            "money_with_currency_format": "{{amount}} RSD"
          },
          "SCR": {
            "money_format": "Rs {{amount}}",
            "money_with_currency_format": "Rs {{amount}} SCR"
          },
          "SGD": {
            "money_format": "${{amount}}",
            "money_with_currency_format": "${{amount}} SGD"
          },
          "SYP": {
            "money_format": "S&pound;{{amount}}",
            "money_with_currency_format": "S&pound;{{amount}} SYP"
          },
          "ZAR": {
            "money_format": "R {{amount}}",
            "money_with_currency_format": "R {{amount}} ZAR"
          },
          "KRW": {
            "money_format": "&#8361;{{amount_no_decimals}}",
            "money_with_currency_format": "&#8361;{{amount_no_decimals}} KRW"
          },
          "LKR": {
            "money_format": "Rs {{amount}}",
            "money_with_currency_format": "Rs {{amount}} LKR"
          },
          "SEK": {
            "money_format": "{{amount_no_decimals}} kr",
            "money_with_currency_format": "{{amount_no_decimals}} kr SEK"
          },
          "CHF": {
            "money_format": "{{amount}} CHF",
            "money_with_currency_format": "{{amount}} CHF"
          },
          "TWD": {
            "money_format": "${{amount}}",
            "money_with_currency_format": "${{amount}} TWD"
          },
          "THB": {
            "money_format": "{{amount}} &#xe3f;",
            "money_with_currency_format": "{{amount}} &#xe3f; THB"
          },
          "TZS": {
            "money_format": "{{amount}} TZS",
            "money_with_currency_format": "{{amount}} TZS"
          },
          "TTD": {
            "money_format": "${{amount}}",
            "money_with_currency_format": "${{amount}} TTD"
          },
          "TND": {
            "money_format": "{{amount}}",
            "money_with_currency_format": "{{amount}} DT"
          },
          "TRY": {
            "money_format": "{{amount}}TL",
            "money_with_currency_format": "{{amount}}TL"
          },
          "UGX": {
            "money_format": "Ush {{amount_no_decimals}}",
            "money_with_currency_format": "Ush {{amount_no_decimals}} UGX"
          },
          "UAH": {
            "money_format": "₴{{amount}}",
            "money_with_currency_format": "{{amount}} UAH"
          },
          "AED": {
            "money_format": "Dhs. {{amount}}",
            "money_with_currency_format": "Dhs. {{amount}} AED"
          },
          "UYU": {
            "money_format": "${{amount_with_comma_separator}}",
            "money_with_currency_format": "${{amount_with_comma_separator}} UYU"
          },
          "VUV": {
            "money_format": "{{amount}} VT",
            "money_with_currency_format": "{{amount}} VT"
          },
          "VEF": {
            "money_format": "Bs. {{amount_with_comma_separator}}",
            "money_with_currency_format": "Bs. {{amount_with_comma_separator}} VEF"
          },
          "VND": {
            "money_format": "{{amount_no_decimals_with_comma_separator}}&#8363;",
            "money_with_currency_format": "{{amount_no_decimals_with_comma_separator}} VND"
          },
          "XBT": {
            "money_format": "{{amount_no_decimals}} BTC",
            "money_with_currency_format": "{{amount_no_decimals}} BTC"
          },
          "XOF": {
            "money_format": "CFA{{amount}}",
            "money_with_currency_format": "CFA{{amount}} XOF"
          },
          "ZMW": {
            "money_format": "K{{amount_no_decimals_with_comma_separator}}",
            "money_with_currency_format": "ZMW{{amount_no_decimals_with_comma_separator}}"
          }
        };

        var baseCurrency = window.theme.shopCurrency,
            newCurrency = document.querySelector('.currency-selector').value;

        (selector || document).querySelectorAll('[data-money-convertible]').forEach(function (item) {
          if (!item.hasAttribute('data-currency-' + baseCurrency)) {
            item.setAttribute('data-currency-' + baseCurrency, item.innerHTML);
          }

          // If the amount has already been converted, we leave it alone.
          if (item.getAttribute('data-currency') === newCurrency) {
            return;
          }

          var baseAmount = item.getAttribute('data-currency-' + baseCurrency);

          // If we are converting to a currency that we have saved, we will use the saved amount.
          if (item.hasAttribute('data-currency-' + newCurrency)) {
            item.innerHTML = item.getAttribute('data-currency-' + newCurrency);
          } else {
            var newFormat = moneyFormats[newCurrency][window.theme.currencyConversionMoneyFormat] || '{{amount}}';

            // We have to normalize by replacing dot by comma and comma by dot
            if (window.theme.moneyFormat.indexOf('with_comma_separator') !== -1) {
              baseAmount = baseAmount.replace(/[,.]/g, function (match) {
                // If `,` is matched return `.`, if `.` matched return `,`
                return match === ',' ? '.' : ',';
              });
            }

            // Converting to Y for the first time? Let's get to it!
            var cents = window.Currency.convert(parseFloat(baseAmount.replace(/^[^0-9]+|[^0-9.]/g, '', ''), 10) * 100, baseCurrency, newCurrency);

            if (window.theme.currencyConversionRoundAmounts) {
              cents = Math.round(cents / 100) * 100;
            }

            var newFormattedAmount = _this.formatMoney(cents, newFormat);

            item.innerHTML = newFormattedAmount;
            item.setAttribute('data-currency-' + newCurrency, newFormattedAmount);
          }

          // We record the new currency locally.
          item.setAttribute('data-currency', newCurrency);
        });

        localStorage.setItem('currency', newCurrency);
      }
    }]);

    return Currency;
  }();
  /* harmony export (immutable) */

  __webpack_exports__["default"] = Currency;

  /***/
},
/* 2 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /**
   * This implementation allows to serialize a form
   */

  var Form = function () {
    function Form() {
      _classCallCheck(this, Form);
    }

    _createClass(Form, null, [{
      key: 'serialize',
      value: function serialize(form) {
        function stringKey(key, value) {
          var beginBracket = key.lastIndexOf('[');

          if (beginBracket === -1) {
            var _hash = {};
            _hash[key] = value;
            return _hash;
          }

          var newKey = key.substr(0, beginBracket);
          var newValue = {};

          newValue[key.substring(beginBracket + 1, key.length - 1)] = value;

          return stringKey(newKey, newValue);
        }

        var hash = {};

        for (var i = 0, len = form.elements.length; i < len; i++) {
          var formElement = form.elements[i];

          if (formElement.name === '' || formElement.disabled) {
            continue;
          }

          if (formElement.name && !formElement.disabled && (formElement.checked || /select|textarea/i.test(formElement.nodeName) || /hidden|text|search|tel|url|email|password|datetime|date|month|week|time|datetime-local|number|range|color/i.test(formElement.type))) {
            var stringKeys = stringKey(formElement.name, formElement.value);
            hash = Form.extend(hash, stringKeys);
          }
        }

        return hash;
      }
    }, {
      key: 'extend',
      value: function extend() {
        var extended = {};
        var i = 0;

        // Merge the object into the extended object
        var merge = function merge(obj) {
          for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
              // If property is an object, merge properties
              if (Object.prototype.toString.call(obj[prop]) === '[object Object]') {
                extended[prop] = Form.extend(extended[prop], obj[prop]);
              } else {
                extended[prop] = obj[prop];
              }
            }
          }
        };

        // Loop through each object and conduct a merge
        for (; i < arguments.length; i++) {
          merge(arguments[i]);
        }

        return extended;
      }
    }]);

    return Form;
  }();
  /* harmony export (immutable) */

  __webpack_exports__["default"] = Form;

  /***/
},
/* 3 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /**
   * Various DOM helper
   */

  var Dom = function () {
    function Dom() {
      _classCallCheck(this, Dom);
    }

    _createClass(Dom, null, [{
      key: 'getSiblings',

      /**
       * Get all the previous and next siblings, optionally filtered by a selector
       */
      value: function getSiblings(element, filter) {
        var includeSelf = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        var siblings = [];
        var currentElement = element;

        // Do the previous first
        while (currentElement = currentElement.previousElementSibling) {
          if (!filter || currentElement.matches(filter)) {
            siblings.push(currentElement);
          }
        }

        if (includeSelf) {
          siblings.push(element);
        }

        // Then the next side
        currentElement = element;

        while (currentElement = currentElement.nextElementSibling) {
          if (!filter || currentElement.matches(filter)) {
            siblings.push(currentElement);
          }
        }

        return siblings;
      }
    }]);

    return Dom;
  }();
  /* harmony export (immutable) */

  __webpack_exports__["default"] = Dom;

  /***/
},
/* 4 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__components_ShippingEstimator__ = __webpack_require__(10);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__components_OverflowScroller__ = __webpack_require__(17);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__components_QuantityPicker__ = __webpack_require__(22);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__components_ProductGallery__ = __webpack_require__(18);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__components_ProductVariants__ = __webpack_require__(21);

  var ProductSection = function () {
    function ProductSection(element) {
      var _this2 = this;

      _classCallCheck(this, ProductSection);

      this.element = element;
      this.delegateElement = new domDelegate.Delegate(this.element);
      this.options = JSON.parse(this.element.getAttribute('data-section-settings'));

      this.productGallery = new __WEBPACK_IMPORTED_MODULE_3__components_ProductGallery__["default"](this.element, this.options);

      this._initShopifyReviews();

      // If loaded by quick view, we need to do various initialization stuff
      if (this.options['isQuickView'] && this.options['showPaymentButton'] && window.Shopify.PaymentButton) {
        Shopify.PaymentButton.init();
      }

      this.productVariants = new __WEBPACK_IMPORTED_MODULE_4__components_ProductVariants__["default"](this.element, this.options);

      if (this.options['showShippingEstimator']) {
        this.shippingEstimator = new __WEBPACK_IMPORTED_MODULE_0__components_ShippingEstimator__["default"](this.element.querySelector('.shipping-estimator'), { singleProduct: true });
      }

      if (this.options['showQuantitySelector']) {
        var quantityPickerElement = this.element.querySelector('select[name="quantity"]');

        if (quantityPickerElement) {
          this.quantityPicker = new __WEBPACK_IMPORTED_MODULE_2__components_QuantityPicker__["default"](quantityPickerElement);
        }
      }

      var productInfoElement = this.element.querySelector('.product-block-list__item--info .card');

      if (productInfoElement) {
        this.element.querySelector('.product-block-list__wrapper').style.minHeight = productInfoElement.clientHeight + 'px';

        if (window.ResizeObserver) {
          this.productInfoResizeObserver = new ResizeObserver(function (event) {
            if (event[0].contentBoxSize) {
              _this2.element.querySelector('.product-block-list__wrapper').style.minHeight = event[0].contentBoxSize.blockSize + 'px';
            } else {
              _this2.element.querySelector('.product-block-list__wrapper').style.minHeight = event[0].contentRect.height + 'px';
            }
          });

          this.productInfoResizeObserver.observe(productInfoElement);
        }

        if (this.options['infoOverflowScroll']) {
          this.infoOverflowScroller = new __WEBPACK_IMPORTED_MODULE_1__components_OverflowScroller__["default"](productInfoElement, {
            offsetTop: document.documentElement.style.getPropertyValue('--header-is-sticky') * parseInt(document.documentElement.style.getPropertyValue('--header-height') + 30),
            offsetBottom: 30
          });
        }
      }

      this._attachListeners();
    }

    _createClass(ProductSection, [{
      key: 'onUnload',
      value: function onUnload() {
        this.productVariants.destroy();
        this.productGallery.destroy();

        if (this.options['showShippingEstimator']) {
          this.shippingEstimator.destroy();
        }

        if (this.options['infoOverflowScroll']) {
          this.infoOverflowScroller.destroy();
        }

        if (window.ResizeObserver && this.productInfoResizeObserver) {
          this.productInfoResizeObserver.disconnect();
        }

        this.delegateElement.off();

        this.element.removeEventListener('variant:changed', this._onVariantChangedListener);
      }
    }, {
      key: '_attachListeners',
      value: function _attachListeners() {
        this._onVariantChangedListener = this._onVariantChanged.bind(this);

        this.element.addEventListener('variant:changed', this._onVariantChangedListener);
      }

      /**
       * Shopify Reviews app is quite funky and hard to extend... excuse this code
       */

    }, {
      key: '_initShopifyReviews',
      value: function _initShopifyReviews() {
        var _this3 = this;

        if (Shopify.designMode && window.SPR) {
          window.SPR.initDomEls();
          window.SPR.loadBadges();
          window.SPR.loadProducts();
        }

        window.SPRCallbacks = {};

        // This allows us to add some class to adjust the styling
        window.SPRCallbacks.onFormSuccess = function () {
          _this3.element.querySelector('#shopify-product-reviews .spr-form').classList.add('spr-form-submitted');
        };

        // If loaded by quick view, we need to do various initialization stuff
        if (this.options['isQuickView'] && window.SPR) {
          window.SPR.initDomEls();
          window.SPR.loadBadges();

          if (this.options['showPaymentButton'] && window.Shopify.PaymentButton) {
            Shopify.PaymentButton.init();
          }
        }
      }

      /**
       * This method is called when the variant is changed due to option
       */

    }, {
      key: '_onVariantChanged',
      value: function _onVariantChanged(event) {
        this.productGallery.variantHasChanged(event.detail.variant);
      }
    }]);

    return ProductSection;
  }();
  /* harmony export (immutable) */

  __webpack_exports__["default"] = ProductSection;

  /***/
},
/* 5 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  var animationQueue = {};

  var Animation = function () {
    function Animation() {
      _classCallCheck(this, Animation);
    }

    _createClass(Animation, null, [{
      key: 'slideUp',

      /**
       * Slide up aims to close an element. To do that, we take the height of the element, and set it to 0 to
       * force an animation
       */
      value: function slideUp(element, callback) {
        var propertyToAnimate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'height';

        element.style[propertyToAnimate] = element.scrollHeight + 'px'; // Force previous height to allow CSS transition
        element.offsetHeight; // Force redraw
        element.style[propertyToAnimate] = 0;

        if (animationQueue[element.id]) {
          element.removeEventListener('transitionend', animationQueue[element.id]);
          delete animationQueue[element.id];
        }

        var transitionEnded = function transitionEnded(event) {
          if (event.propertyName === 'height') {
            element.removeEventListener('transitionend', transitionEnded);
            (callback || function () {})();
          }
        };

        element.addEventListener('transitionend', transitionEnded);
      }

      /**
       * Slide down aims to open an element. To do that, you must make sure that the element you are trying to open
       * is set with height: 0; overflow: hidden in the CSS, and does not contain any padding nor margin.
       */

    }, {
      key: 'slideDown',
      value: function slideDown(element, callback) {
        var propertyToAnimate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'height';

        // To do the animation we temporarily hide it, check the height, and transition to it
        element.style[propertyToAnimate] = element.scrollHeight + 'px';

        var transitionEnded = function transitionEnded(event) {
          if (event.propertyName === propertyToAnimate) {
            var defaultValue = 'auto';

            if (propertyToAnimate === 'max-height') {
              defaultValue = 'none';
            }

            element.style[propertyToAnimate] = defaultValue; // Allows the content to grow normally
            element.removeEventListener('transitionend', transitionEnded);
            delete animationQueue[element.id];

            (callback || function () {})();
          }
        };

        element.addEventListener('transitionend', transitionEnded);
        animationQueue[element.id] = transitionEnded;
      }
    }]);

    return Animation;
  }();
  /* harmony export (immutable) */

  __webpack_exports__["default"] = Animation;

  /***/
},
/* 6 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /**
   * This component handles all the mechanisms to update a color swatch item on collection list
   */

  var ProductItemColorSwatch = function () {
    function ProductItemColorSwatch(element) {
      _classCallCheck(this, ProductItemColorSwatch);

      this.element = element;
      this.delegateElement = new domDelegate.Delegate(this.element);

      this._attachListeners();
      this.recalculateSwatches();
    }

    _createClass(ProductItemColorSwatch, [{
      key: 'destroy',
      value: function destroy() {
        this.delegateElement.off();
        window.removeEventListener('resize', this._recalculateSwatchesListener);
      }
    }, {
      key: 'recalculateSwatches',
      value: function recalculateSwatches() {
        var _this4 = this;

        // If you have too many swatches, it will grow into more than one lines, which is not desirable. Instead,
        // we'd like to only show one line only, and show a "+X" if there are too many swatches

        fastdom.measure(function () {
          // For each swatch list we get the number of swatches, and make sure that we don't display more than 100% of
          // the width
          _this4.element.querySelectorAll('.product-item__swatch-list').forEach(function (swatchList) {
            // Get the width of the swatch list (this is 100%)
            var currentWidth = swatchList.clientWidth,
                maxAllowedWidth = parseInt(Math.min(currentWidth, 200));

            // A single swatch takes 30px, so let's figure out how many we can fit completely
            var maxFit = Math.floor(maxAllowedWidth / 30);

            // Now, we add a special class to the one after "maxFit"
            fastdom.mutate(function () {
              var colorSwatches = swatchList.querySelectorAll('.color-swatch');

              // For each, we reset the attributes if needed
              colorSwatches.forEach(function (colorSwatch, index) {
                colorSwatch.classList.remove('color-swatch--view-more');

                if (maxFit === index + 1 && maxFit !== colorSwatches.length) {
                  colorSwatch.classList.add('color-swatch--view-more');
                }
              });
            });
          });
        });
      }
    }, {
      key: '_attachListeners',
      value: function _attachListeners() {
        this._recalculateSwatchesListener = this.recalculateSwatches.bind(this);

        this.delegateElement.on('change', '.product-item__swatch-list .color-swatch__radio', this._colorChanged.bind(this));
        window.addEventListener('resize', this._recalculateSwatchesListener);
      }
    }, {
      key: '_colorChanged',
      value: function _colorChanged(event, target) {
        // We need to change the URL of the various links
        var productItem = target.closest('.product-item'),
            variantUrl = target.getAttribute('data-variant-url');

        productItem.querySelector('.product-item__image-wrapper').setAttribute('href', variantUrl);
        productItem.querySelector('.product-item__title').setAttribute('href', variantUrl);

        // If we have a custom image for the variant, we change it
        var originalImageElement = productItem.querySelector('.product-item__primary-image');

        if (target.hasAttribute('data-image-url') && target.getAttribute('data-media-id') !== originalImageElement.getAttribute('data-media-id')) {
          var newImageElement = document.createElement('img');
          newImageElement.className = 'product-item__primary-image lazyload image--fade-in';
          newImageElement.setAttribute('data-media-id', target.getAttribute('data-media-id'));
          newImageElement.setAttribute('data-src', target.getAttribute('data-image-url'));
          newImageElement.setAttribute('data-widths', target.getAttribute('data-image-widths'));
          newImageElement.setAttribute('data-sizes', 'auto');

          // Replace the original node
          originalImageElement.parentNode.style.paddingBottom = 100.0 / newImageElement.getAttribute('data-image-aspect-ratio') + '%';
          originalImageElement.parentNode.replaceChild(newImageElement, originalImageElement);
        }
      }
    }]);

    return ProductItemColorSwatch;
  }();
  /* harmony export (immutable) */

  __webpack_exports__["default"] = ProductItemColorSwatch;

  /***/
},
/* 7 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

  var Accessibility = function () {
    function Accessibility() {
      _classCallCheck(this, Accessibility);
    }

    _createClass(Accessibility, null, [{
      key: 'trapFocus',

      /**
       * Traps the focus in a particular container
       */
      value: function trapFocus(container, namespace) {
        this.listeners = this.listeners || {};

        // We check if there is an element with the attribute "autofocus"
        var elementToFocus = container.querySelector('[autofocus]') || container;

        container.setAttribute('tabindex', '-1');
        elementToFocus.focus();

        this.listeners[namespace] = function (event) {
          if (container !== event.target && !container.contains(event.target)) {
            elementToFocus.focus();
          }
        };

        document.addEventListener('focusin', this.listeners[namespace]);
      }

      /**
       * Removes the trap of focus in a particular container
       */

    }, {
      key: 'removeTrapFocus',
      value: function removeTrapFocus(container, namespace) {
        if (container) {
          container.removeAttribute('tabindex');
        }

        document.removeEventListener('focusin', this.listeners[namespace]);
      }

      /**
       * Reset any previous trap focus
       */

    }, {
      key: 'clearTrapFocus',
      value: function clearTrapFocus() {
        for (var key in this.listeners) {
          if (this.listeners.hasOwnProperty(key)) {
            document.removeEventListener('focusin', this.listeners[key]);
          }
        }

        this.listeners = {};
      }
    }]);

    return Accessibility;
  }();
  /* harmony export (immutable) */

  __webpack_exports__["default"] = Accessibility;

  /***/
},
/* 8 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__helper_Responsive__ = __webpack_require__(0);

  /**
   * The given ID must be the value picker itself (the element that contains the class "value-picker", not the button that toggles it
   */

  var ValuePicker = function () {
    function ValuePicker(id) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, ValuePicker);

      this.id = id;
      this.delegateRoot = new domDelegate.Delegate(document.documentElement);

      this.isOpen = false;
      this.togglerElement = document.querySelector('[data-action="open-value-picker"][aria-controls="' + this.id + '"]');
      this.onSelect = options['onValueSelect'] || function () {};

      this._attachListeners();
    }

    _createClass(ValuePicker, [{
      key: 'destroy',
      value: function destroy() {
        this.delegateRoot.off();
      }
    }, {
      key: '_attachListeners',
      value: function _attachListeners() {
        this.delegateRoot.on('click', '[data-action="open-value-picker"][aria-controls="' + this.id + '"]', this._toggle.bind(this));
        this.delegateRoot.on('click', '[data-action="close-value-picker"][aria-controls="' + this.id + '"]', this._toggle.bind(this));
        this.delegateRoot.on('click', '#' + this.id + ' [data-action="select-value"]', this._selectValue.bind(this));
        this.delegateRoot.on('click', this._detectOutsideClick.bind(this), true);
      }
    }, {
      key: '_toggle',
      value: function _toggle(event) {
        if (this.isOpen) {
          this._close(event);
        } else {
          this._open(event);
        }
      }
    }, {
      key: '_open',
      value: function _open(event) {
        /*if (event) {
          event.stopPropagation();
        }*/

        document.querySelector('[data-action="open-value-picker"][aria-controls="' + this.id + '"]').setAttribute('aria-expanded', 'true');
        document.getElementById(this.id).setAttribute('aria-hidden', 'false');

        // This is quite ugly, but in order to avoid an issue with the header that has a higher z-index, we have to temporarily reduce
        // it while we have the element open
        if (__WEBPACK_IMPORTED_MODULE_0__helper_Responsive__["default"].matchesBreakpoint('phone')) {
          var headerElement = document.getElementById('shopify-section-header');
          headerElement.style.zIndex = '3';
        }

        this.isOpen = true;

        document.body.classList.add('no-mobile-scroll');
      }
    }, {
      key: '_close',
      value: function _close(event) {
        /*if (event) {
          event.stopPropagation();
        }*/

        document.querySelector('[data-action="open-value-picker"][aria-controls="' + this.id + '"]').setAttribute('aria-expanded', 'false');
        document.getElementById(this.id).setAttribute('aria-hidden', 'true');

        // This is quite ugly, but in order to avoid an issue with the header that has a higher z-index, we have to temporarily reduce
        // it while we have the element open
        var headerElement = document.getElementById('shopify-section-header');
        headerElement.style.zIndex = '';

        this.isOpen = false;

        document.body.classList.remove('no-mobile-scroll');
      }
    }, {
      key: '_selectValue',
      value: function _selectValue(event, target) {
        this.onSelect(target.getAttribute('data-value'));
        this._close();
      }
    }, {
      key: '_detectOutsideClick',
      value: function _detectOutsideClick(event) {
        // If already closed, nothing to do
        if (!this.isOpen || this.togglerElement === event.target || this.togglerElement.contains(event.target)) {
          return;
        }

        if (!event.target.closest('.value-picker__inner') && this.isOpen) {
          this._close(event);
        }
      }
    }]);

    return ValuePicker;
  }();
  /* harmony export (immutable) */

  __webpack_exports__["default"] = ValuePicker;

  /***/
},
/* 9 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

  var CountrySelector = function () {
    function CountrySelector(countrySelect, provinceSelect) {
      _classCallCheck(this, CountrySelector);

      this.countrySelect = countrySelect;
      this.provinceSelect = provinceSelect;

      if (this.countrySelect && this.provinceSelect) {
        this._attachListeners();
        this._initSelectors();
      }
    }

    _createClass(CountrySelector, [{
      key: 'destroy',
      value: function destroy() {
        if (this.countrySelect) {
          this.countrySelect.removeEventListener('change', this._onCountryChangedListener);
        }
      }
    }, {
      key: '_initSelectors',
      value: function _initSelectors() {
        // Check first the default value of country
        var defaultCountry = this.countrySelect.getAttribute('data-default');

        if (defaultCountry) {
          for (var i = 0; i !== this.countrySelect.options.length; ++i) {
            if (this.countrySelect.options[i].text === defaultCountry) {
              this.countrySelect.selectedIndex = i;
              break;
            }
          }
        } else {
          this.countrySelect.selectedIndex = 0;
        }

        var event = new Event('change', { bubbles: true });
        this.countrySelect.dispatchEvent(event);

        // Then the province
        var defaultProvince = this.provinceSelect.getAttribute('data-default');

        if (defaultProvince) {
          this.provinceSelect.value = defaultProvince;
        }
      }
    }, {
      key: '_attachListeners',
      value: function _attachListeners() {
        this._onCountryChangedListener = this._onCountryChanged.bind(this);
        this.countrySelect.addEventListener('change', this._onCountryChangedListener);
      }
    }, {
      key: '_onCountryChanged',
      value: function _onCountryChanged() {
        var _this5 = this;

        var selectedOption = this.countrySelect.options[this.countrySelect.selectedIndex];

        if (!selectedOption) {
          return;
        }

        var provinces = JSON.parse(selectedOption.getAttribute('data-provinces') || '[]');

        // First remove all options
        this.provinceSelect.innerHTML = '';

        if (provinces.length === 0) {
          this.provinceSelect.closest('.form__input-wrapper').style.display = 'none';
          return;
        }

        // We need to build the provinces array
        provinces.forEach(function (data) {
          _this5.provinceSelect.options.add(new Option(data[1], data[0]));
        });

        this.provinceSelect.closest('.form__input-wrapper').style.display = 'block';
      }
    }]);

    return CountrySelector;
  }();
  /* harmony export (immutable) */

  __webpack_exports__["default"] = CountrySelector;

  /***/
},
/* 10 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__CountrySelector__ = __webpack_require__(9);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__helper_Currency__ = __webpack_require__(1);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__helper_Form__ = __webpack_require__(2);

  var ShippingEstimator = function () {
    function ShippingEstimator(element, options) {
      _classCallCheck(this, ShippingEstimator);

      this.element = element;
      this.delegateElement = new domDelegate.Delegate(this.element);
      this.options = options;
      this.countrySelector = new __WEBPACK_IMPORTED_MODULE_0__CountrySelector__["default"](this.element.querySelector('[name="country"]'), this.element.querySelector('[name="province"]'));

      this._attachListeners();
    }

    _createClass(ShippingEstimator, [{
      key: 'destroy',
      value: function destroy() {
        this.delegateElement.off('click');
        this.countrySelector.destroy();
      }
    }, {
      key: '_attachListeners',
      value: function _attachListeners() {
        this.delegateElement.on('click', '[data-action="estimate-shipping"]', this._fetchRates.bind(this));
      }
    }, {
      key: '_fetchRates',
      value: function _fetchRates() {
        document.dispatchEvent(new CustomEvent('theme:loading:start'));

        if (this.options['singleProduct']) {
          this._fetchRatesForProduct();
        } else {
          this._fetchRatesForCart();
        }
      }
    }, {
      key: '_fetchRatesForCart',
      value: function _fetchRatesForCart() {
        var _this6 = this;

        var country = this.element.querySelector('[name="country"]').value,
            province = this.element.querySelector('[name="province"]').value,
            zip = this.element.querySelector('[name="zip"]').value;

        fetch(window.theme.localeRootUrl + '/cart/shipping_rates.json?shipping_address[zip]=' + zip + '&shipping_address[country]=' + country + '&shipping_address[province]=' + province, {
          credentials: 'same-origin',
          method: 'GET'
        }).then(function (response) {
          document.dispatchEvent(new CustomEvent('theme:loading:end'));

          response.json().then(function (result) {
            _this6._formatResults(response.ok, result);
          });
        });
      }

      /**
       * Technique is coming from this website: https://freakdesign.com.au/blogs/news/get-shipping-estimates-on-a-product-page
       */

    }, {
      key: '_fetchRatesForProduct',
      value: function _fetchRatesForProduct() {
        var _this7 = this;

        // grab the current cookie for the cart and we store it
        var cartCookie = this._getCookie('cart'),
            tempCookieValue = 'temp-cart-cookie___' + Date.now() + parseInt(Math.random() * 1000),
            fakeCookieValue = 'fake-cart-cookie___' + Date.now() + parseInt(Math.random() * 1000);

        // if not found, make a new temp cookie
        if (!cartCookie) {
          this._updateCartCookie(tempCookieValue);
          cartCookie = this._getCookie('cart');
        }

        // if found but has a weird length, bail
        if (cartCookie.length < 32) {
          return;
        }

        // change the cookie value to a new 32 character value
        this._updateCartCookie(fakeCookieValue);

        // add the product to our fake cart
        var formElement = document.querySelector('form[action*="/cart/add"]');

        fetch(window.theme.localeRootUrl + '/cart/add.js', {
          body: JSON.stringify(__WEBPACK_IMPORTED_MODULE_2__helper_Form__["default"].serialize(formElement)),
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest' // This is needed as currently there is a bug in Shopify that assumes this header
          },
          method: 'POST'
        }).then(function (response) {
          response.json().then(function () {
            var country = _this7.element.querySelector('[name="country"]').value,
                province = _this7.element.querySelector('[name="province"]').value,
                zip = _this7.element.querySelector('[name="zip"]').value;

            fetch(window.theme.localeRootUrl + '/cart/shipping_rates.json?shipping_address[zip]=' + zip + '&shipping_address[country]=' + country + '&shipping_address[province]=' + province, {
              credentials: 'same-origin',
              method: 'GET'
            }).then(function (response) {
              document.dispatchEvent(new CustomEvent('theme:loading:end'));

              response.json().then(function (result) {
                _this7._formatResults(response.ok, result);
              });

              _this7._updateCartCookie(cartCookie); // We can restore the cookie
            }).catch(function () {
              _this7._updateCartCookie(cartCookie);
            });
          }).catch(function () {
            // We have error so we have to reset cookie
            _this7._updateCartCookie(cartCookie);
            document.dispatchEvent(new CustomEvent('theme:loading:end'));
          });
        });
      }
    }, {
      key: '_formatResults',
      value: function _formatResults(isOk, results) {
        var resultsElement = this.element.querySelector('.shipping-estimator__results');

        resultsElement.innerHTML = '';

        if (isOk) {
          var shippingRates = results['shipping_rates'];

          if (shippingRates.length === 0) {
            resultsElement.innerHTML = '<p>' + window.languages.shippingEstimatorNoResults + '</p>';
          } else {
            if (shippingRates.length === 1) {
              resultsElement.innerHTML = '<p>' + window.languages.shippingEstimatorOneResult + '</p>';
            } else {
              resultsElement.innerHTML = '<p>' + window.languages.shippingEstimatorMultipleResults.replace('{{count}}', shippingRates.length) + '</p>';
            }

            var listRatesHtml = '';

            shippingRates.forEach(function (item) {
              listRatesHtml += '<li>' + item['name'] + ': ' + __WEBPACK_IMPORTED_MODULE_1__helper_Currency__["default"].formatMoney(item['price'], window.theme.moneyFormat) + '</li>';
            });

            resultsElement.innerHTML += '<ul>' + listRatesHtml + '</ul>';
          }
        } else {
          resultsElement.innerHTML = '<p>' + window.languages.shippingEstimatorErrors + '</p>';

          var errorHtml = '';

          Object.keys(results).forEach(function (key) {
            errorHtml += '<li class="alert__list-item">' + key + ' ' + results[key] + '</li>';
          });

          resultsElement.innerHTML += '<ul>' + errorHtml + '</ul>';
        }

        resultsElement.style.display = 'block';
      }
    }, {
      key: '_getCookie',
      value: function _getCookie(name) {
        var value = '; ' + document.cookie,
            parts = value.split('; ' + name + '=');

        if (parts.length === 2) {
          return parts.pop().split(';').shift();
        }
      }
    }, {
      key: '_updateCartCookie',
      value: function _updateCartCookie(value) {
        var date = new Date();
        date.setTime(date.getTime() + 14 * 86400000);

        document.cookie = 'cart=' + value + '; expires=' + date.toUTCString() + '; path=/';
      }
    }]);

    return ShippingEstimator;
  }();
  /* harmony export (immutable) */

  __webpack_exports__["default"] = ShippingEstimator;

  /***/
},
/* 11 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__helper_Accessibility__ = __webpack_require__(7);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__helper_Responsive__ = __webpack_require__(0);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__helper_Currency__ = __webpack_require__(1);

  /**
   * This class handles both the mini cart and the dedicated cart page. It's not the cleanest code on earth but works well :)
   */

  var Cart = function () {
    function Cart(element, options) {
      _classCallCheck(this, Cart);

      this.element = element;
      this.delegateElement = new domDelegate.Delegate(this.element);
      this.delegateRoot = new domDelegate.Delegate(document.documentElement);
      this.options = options;

      this.miniCartElement = this.element.querySelector('.mini-cart');
      this.isMiniCartOpen = false;

      if (window.theme.template !== 'cart' && this.miniCartElement) {
        this.miniCartToggleElement = this.element.querySelector('[aria-controls="' + this.miniCartElement.id + '"]');
        this._checkMiniCartScrollability();
      }

      this.itemCount = window.theme.cartCount;

      this._attachListeners();
    }

    _createClass(Cart, [{
      key: 'destroy',
      value: function destroy() {
        this.delegateElement.off();
        this.delegateRoot.off();

        window.removeEventListener('resize', this._calculateMiniCartHeightListener);
      }
    }, {
      key: '_attachListeners',
      value: function _attachListeners() {
        this._calculateMiniCartHeightListener = this._calculateMiniCartHeight.bind(this);

        if (window.theme.template !== 'cart' && window.theme.cartType !== 'page') {
          this.delegateElement.on('click', '[data-action="toggle-mini-cart"]', this._toggleMiniCart.bind(this));
          this.delegateRoot.on('click', this._onWindowClick.bind(this));

          window.addEventListener('resize', this._calculateMiniCartHeightListener);
        }

        this.delegateRoot.on('click', '[data-action="decrease-quantity"]', this._updateQuantity.bind(this));
        this.delegateRoot.on('click', '[data-action="increase-quantity"]', this._updateQuantity.bind(this));
        this.delegateRoot.on('change', '.quantity-selector__value', this._updateQuantity.bind(this));
        this.delegateRoot.on('keyup', '.quantity-selector__value', this._updateQuantitySize.bind(this));

        this.delegateRoot.on('product:added', this._onProductAdded.bind(this));
        this.delegateRoot.on('cart:refresh', this._onCartRefresh.bind(this));
      }
    }, {
      key: '_toggleMiniCart',
      value: function _toggleMiniCart(event) {
        if (event) {
          event.preventDefault();
        }

        if (this.isMiniCartOpen) {
          this._closeMiniCart();
        } else {
          this._openMiniCart();
        }
      }
    }, {
      key: '_openMiniCart',
      value: function _openMiniCart() {
        this.miniCartToggleElement.setAttribute('aria-expanded', 'true');

        // If we are on mobile phone we also set the aria-expanded attribute to true on the icon state holder
        if (__WEBPACK_IMPORTED_MODULE_1__helper_Responsive__["default"].getCurrentBreakpoint() === 'phone') {
          this.miniCartToggleElement.querySelector('.header__cart-icon').setAttribute('aria-expanded', 'true');
        }

        // Finally also set aria-hidden to false on controlled element
        this.miniCartElement.setAttribute('aria-hidden', 'false');
        this.isMiniCartOpen = true;

        this._calculateMiniCartHeight();

        // Trap the focus
        __WEBPACK_IMPORTED_MODULE_0__helper_Accessibility__["default"].trapFocus(this.miniCartElement, 'mini-cart');
        document.body.classList.add('no-mobile-scroll');
      }
    }, {
      key: '_closeMiniCart',
      value: function _closeMiniCart() {
        this.miniCartToggleElement.setAttribute('aria-expanded', 'false');

        // If we are on mobile phone we also set the aria-expanded attribute to true on the icon state holder
        if (__WEBPACK_IMPORTED_MODULE_1__helper_Responsive__["default"].getCurrentBreakpoint() === 'phone') {
          this.miniCartToggleElement.querySelector('.header__cart-icon').setAttribute('aria-expanded', 'false');
          this.miniCartElement.style.maxHeight = '';
        }

        // Finally also set aria-hidden to false on controlled element
        this.miniCartElement.setAttribute('aria-hidden', 'true');
        this.isMiniCartOpen = false;
        document.body.classList.remove('no-mobile-scroll');
      }
    }, {
      key: '_calculateMiniCartHeight',
      value: function _calculateMiniCartHeight() {
        if (__WEBPACK_IMPORTED_MODULE_1__helper_Responsive__["default"].getCurrentBreakpoint() === 'phone') {
          if (this.isMiniCartOpen) {
            var maxHeight = window.innerHeight - document.querySelector('.header').getBoundingClientRect().bottom;
            this.miniCartElement.style.maxHeight = maxHeight + 'px';

            // We also need to calculate the content part height to avoid any issue on Chrome
            var miniCartContentElement = this.miniCartElement.querySelector('.mini-cart__content'),
                miniCartRecapElement = this.miniCartElement.querySelector('.mini-cart__recap');

            if (miniCartRecapElement) {
              miniCartContentElement.style.maxHeight = maxHeight - miniCartRecapElement.clientHeight + 'px';
            }
          } else {
            this.miniCartElement.style.maxHeight = '';
            this.miniCartElement.querySelector('.mini-cart__content').style.maxHeight = '';
          }
        } else {
          this.miniCartElement.style.maxHeight = '';
          this.miniCartElement.querySelector('.mini-cart__content').style.maxHeight = '';
        }
      }

      /**
       * Change the quantity of the cart
       */

    }, {
      key: '_updateQuantity',
      value: function _updateQuantity(event, target) {
        var _this8 = this;

        var parsedQuantity = 1;

        // If we are in "page" mode, we reload the page instead of doing that in Ajax to have a better compatibility with apps
        if (window.theme.cartType === 'page' && target.hasAttribute('data-href')) {
          window.location.href = target.getAttribute('data-href');
          return;
        }

        if (target.tagName === 'INPUT') {
          parsedQuantity = parseInt(target.value);
        } else {
          parsedQuantity = parseInt(target.getAttribute('data-quantity'));
        }

        document.dispatchEvent(new CustomEvent('theme:loading:start'));

        fetch(window.theme.localeRootUrl + '/cart/change.js', {
          body: JSON.stringify({
            id: target.getAttribute('data-line-id'),
            quantity: parsedQuantity
          }),
          credentials: 'same-origin',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest' // This is needed as currently there is a bug in Shopify that assumes this header
          }
        }).then(function (cart) {
          cart.json().then(function (content) {
            _this8.itemCount = content['item_count'];
            _this8._rerender(false).then(function () {
              document.dispatchEvent(new CustomEvent('theme:loading:end'));
            });
          });
        });

        event.preventDefault();
      }
    }, {
      key: '_updateQuantitySize',
      value: function _updateQuantitySize(event, target) {
        target.setAttribute('size', Math.max(target.value.length, 2));
      }

      /**
       * This method is called internally to rerender the cart, based on the content returned by Shopify Ajax API.
       * We could save some performance by updating directly in JavaScript instead of doing a GET call to get the HTML
       * from Shopify, but by experience, this allows for easier app integration as it allows the Liquid to re-run
       * all the time and hence having easier logic.
       */

    }, {
      key: '_rerender',
      value: function _rerender() {
        var _this9 = this;

        var scrollToTop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        // Note: appending a timestamp is necessary as the polyfill on IE11 and lower does not support the "cache" property
        var url = '';

        if (window.theme.template !== 'cart') {
          url = window.theme.localeRootUrl + '/cart?view=mini-cart&timestamp=' + Date.now();
        } else {
          url = window.theme.localeRootUrl + '/cart?timestamp=' + Date.now();
        }

        return fetch(url, {
          credentials: 'same-origin',
          method: 'GET'
        }).then(function (content) {
          content.text().then(function (html) {
            // We extract the data-item-count from the returned element
            var myDiv = document.createElement('div');
            myDiv.innerHTML = html;

            if (myDiv.firstElementChild && myDiv.firstElementChild.hasAttribute('data-item-count')) {
              _this9.itemCount = parseInt(myDiv.firstElementChild.getAttribute('data-item-count'));
            }

            _this9.element.querySelector('.header__cart-count').textContent = _this9.itemCount;

            if (window.theme.template !== 'cart') {
              // Note: we could use outerHTML here but outerHTML does not update the reference to new object
              var tempElement = document.createElement('div');
              tempElement.innerHTML = html;

              // When we re-render, we need to preserve the scroll position when content changes
              var miniCartItemListElement = _this9.miniCartElement.querySelector('.mini-cart__line-item-list'),
                  scrollPosition = null;

              if (miniCartItemListElement) {
                scrollPosition = miniCartItemListElement.scrollTop;
              }

              _this9.miniCartElement.innerHTML = tempElement.querySelector('.mini-cart').innerHTML;

              var newMiniCartItemListElement = _this9.miniCartElement.querySelector('.mini-cart__line-item-list');

              if (newMiniCartItemListElement && scrollPosition !== null) {
                newMiniCartItemListElement.scrollTop = scrollPosition;
              }

              _this9._checkMiniCartScrollability();
              _this9._calculateMiniCartHeight();

              _this9.element.dispatchEvent(new CustomEvent('cart:rerendered'));
            } else {
              // The replacement of the DOM here could be made better and more resilient (maybe exploring using a virtual DOM approach in future?)
              var _tempElement = document.createElement('div');
              _tempElement.innerHTML = html;

              var originalCart = document.querySelector('[data-section-type="cart"]');
              originalCart.innerHTML = _tempElement.querySelector('[data-section-type="cart"]').innerHTML;

              if (scrollToTop) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }

              // Reload the Shopify Review badges
              if (window.SPR) {
                window.SPR.initDomEls();
                window.SPR.loadBadges();
              }

              _this9.element.dispatchEvent(new CustomEvent('cart:rerendered', { bubbles: true }));
            }

            if (window.theme.currencyConversionEnabled) {
              __WEBPACK_IMPORTED_MODULE_2__helper_Currency__["default"].convertAll(_this9.element);
            }
          });
        });
      }

      /**
       * Check if the mini-cart is scrollable
       */

    }, {
      key: '_checkMiniCartScrollability',
      value: function _checkMiniCartScrollability() {
        var miniCartItemList = this.miniCartElement.querySelector('.mini-cart__line-item-list');

        if (miniCartItemList && miniCartItemList.scrollHeight > miniCartItemList.clientHeight) {
          miniCartItemList.classList.add('is-scrollable');
        }
      }

      /**
       * This callback is automatically called when a variant has been added, which allows us to open it and re-render
       */

    }, {
      key: '_onProductAdded',
      value: function _onProductAdded(event) {
        var _this10 = this;

        this.itemCount += event.detail.quantity; /* Add the quantity added */

        this._onCartRefresh().then(function () {
          if (window.theme.template !== 'cart') {
            // If we don't have the sticky header enabled, we scroll to top to make sure it is visible
            if (!_this10.options['useStickyHeader']) {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }

            _this10._openMiniCart();
          }
        });
      }

      /**
       * Allows to refresh the mini-cart
       */

    }, {
      key: '_onCartRefresh',
      value: function _onCartRefresh() {
        return this._rerender().then(function () {
          document.dispatchEvent(new CustomEvent('theme:loading:end'));
        });
      }

      /**
       * We need to catch click outside the element to automatically close mini-cart
       */

    }, {
      key: '_onWindowClick',
      value: function _onWindowClick(event) {
        if (this.miniCartElement && this.isMiniCartOpen && !this.element.contains(event.target)) {
          this._closeMiniCart();
        }
      }
    }]);

    return Cart;
  }();
  /* harmony export (immutable) */

  __webpack_exports__["default"] = Cart;

  /***/
},
/* 12 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

  var CollectionFilterDrawer = function () {
    function CollectionFilterDrawer(options) {
      _classCallCheck(this, CollectionFilterDrawer);

      this.element = document.getElementById('mobile-collection-filters');
      this.delegateRoot = new domDelegate.Delegate(document.documentElement);
      this.options = options;
      this.isOpen = false;

      if (this.element) {
        this._attachListeners();
      }
    }

    _createClass(CollectionFilterDrawer, [{
      key: 'destroy',
      value: function destroy() {
        this.delegateRoot.off();
      }
    }, {
      key: '_attachListeners',
      value: function _attachListeners() {
        this.delegateRoot.on('click', '[aria-controls="mobile-collection-filters"][data-action="open-drawer"]', this.open.bind(this));
        this.delegateRoot.on('click', '#mobile-collection-filters [data-action="close-drawer"]', this.close.bind(this));

        document.addEventListener('collection-filter:close', this.close.bind(this));
        document.addEventListener('click', this._detectOutsideClick.bind(this));
        window.addEventListener('resize', this._computeDrawerHeight.bind(this));
      }
    }, {
      key: 'open',
      value: function open(event) {
        if (event) {
          event.stopPropagation();
        }

        this._computeDrawerHeight();
        this.isOpen = true;

        document.querySelector('[aria-controls="mobile-collection-filters"]').setAttribute('aria-expanded', 'true');
        document.getElementById('mobile-collection-filters').setAttribute('aria-hidden', 'false');

        document.body.classList.add('no-mobile-scroll');
      }
    }, {
      key: 'close',
      value: function close(event) {
        if (event) {
          event.stopPropagation();
        }

        this.isOpen = false;

        document.querySelector('[aria-controls="mobile-collection-filters"]').setAttribute('aria-expanded', 'false');
        document.getElementById('mobile-collection-filters').setAttribute('aria-hidden', 'true');

        document.body.classList.remove('no-mobile-scroll');
      }
    }, {
      key: '_computeDrawerHeight',
      value: function _computeDrawerHeight() {
        document.getElementById('mobile-collection-filters').querySelector('.collection-drawer').style.maxHeight = window.innerHeight + 'px';
      }

      /**
       * This method is called by the collection section whenever the filters have changed, so we can update them
       */

    }, {
      key: '_filtersHaveChanged',
      value: function _filtersHaveChanged(newFilters) {
        var _this11 = this;

        if (!this.element) {
          return;
        }

        fastdom.mutate(function () {
          // First, we update the filters count
          var filterCountElement = _this11.element.querySelector('.collection-drawer__filter-count');

          filterCountElement.innerText = '(' + newFilters.length + ')';
          filterCountElement.style.display = newFilters.length === 0 ? 'none' : 'inline';

          // Then we hide/display the clear tag button
          _this11.element.querySelector('[data-action="clear-tags"]').style.display = newFilters.length === 0 ? 'none' : 'block';

          // Finally, we have to toggle on/off the active filter
          if (_this11.options['filterType'] === 'group') {
            _this11.element.querySelectorAll('.collection__filter-item-active').forEach(function (item) {
              // We check if this item has an active tag
              var parentList = item.closest('.collection__filter-group');

              // We find if there is associated active data-tag
              var activeDataTag = parentList.querySelector('.is-selected[data-tag]');

              if (activeDataTag) {
                item.style.display = 'block';
                item.innerText = activeDataTag.getAttribute('data-tag-user');
              } else {
                item.style.display = 'none';
              }
            });
          }
        });
      }
    }, {
      key: '_detectOutsideClick',
      value: function _detectOutsideClick(event) {
        if (this.isOpen && !event.target.closest('.collection-drawer__inner')) {
          this.close();
        }
      }
    }]);

    return CollectionFilterDrawer;
  }();
  /* harmony export (immutable) */

  __webpack_exports__["default"] = CollectionFilterDrawer;

  /***/
},
/* 13 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__helper_Dom__ = __webpack_require__(3);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__helper_Responsive__ = __webpack_require__(0);

  var DesktopNavigation = function () {
    function DesktopNavigation(element, navigationLayout, openTrigger) {
      _classCallCheck(this, DesktopNavigation);

      this.element = element;
      this.delegateElement = new domDelegate.Delegate(this.element);
      this.delegateRoot = new domDelegate.Delegate(document.documentElement);

      this.useInlineNavigation = navigationLayout === 'inline';
      this.isNavigationVisible = this.useInlineNavigation;
      this.openTrigger = openTrigger;

      // If we use a device that does not support hover, we force the open trigger to be on click (for instance iPad)
      if (!__WEBPACK_IMPORTED_MODULE_1__helper_Responsive__["default"].matchesBreakpoint('supports-hover')) {
        this.openTrigger = 'click';
      }

      this.openItems = [];
      this.dropdownActivationTimeouts = {};
      this.dropdownDeactivationTimeouts = {};

      this.DROPDOWN_TIMEOUT = 100;

      this._attachListeners();

      if (this.useInlineNavigation) {
        this._setupInlineNavigation();
      }
    }

    _createClass(DesktopNavigation, [{
      key: 'destroy',
      value: function destroy() {
        this.delegateElement.off();
        this.delegateRoot.off();
      }
    }, {
      key: 'onBlockSelect',
      value: function onBlockSelect(event) {
        var _this12 = this;

        if (!this.useInlineNavigation) {
          this._openNavigation();
        }

        // We receive a reference to the mega-menu, but for simpler handling, we simulate as if the button was hovered. First, we must close
        // mega-menu if there is already one that is open
        __WEBPACK_IMPORTED_MODULE_0__helper_Dom__["default"].getSiblings(event.target.parentNode, '.is-dropdown-open').forEach(function (openItem) {
          _this12._deactivateDropdown(event, openItem.querySelector('[data-type="menuitem"][aria-haspopup]'));
        });

        // The previousElementSibling is always the link itself
        this._activateDropdown(event, event.target.previousElementSibling);
      }
    }, {
      key: 'onBlockDeselect',
      value: function onBlockDeselect(event) {
        if (!this.useInlineNavigation) {
          this._closeNavigation();
        }

        // The deactivation is done on the wrapping div (so parentNode)
        this._deactivateDropdown(event, event.target.parentNode);
      }
    }, {
      key: '_attachListeners',
      value: function _attachListeners() {
        this.delegateElement.on('focusout', this._onFocusOut.bind(this));
        this.delegateRoot.on('click', this._onClick.bind(this));

        this.delegateElement.on('click', '[data-action="toggle-menu"]', this._toggleNavigation.bind(this));

        if (this.openTrigger === 'hover') {
          this.delegateElement.on('focusin', '[data-type="menuitem"][aria-haspopup]', this._activateDropdown.bind(this));
          this.delegateElement.on('mouseover', '[data-type="menuitem"][aria-haspopup]', this._activateDropdown.bind(this));

          this.delegateElement.on('mouseover', '[data-type="menu"][aria-hidden="false"]', this._blockDropdownDeactivation.bind(this));

          this.delegateElement.on('focusout', '.is-dropdown-open', this._deactivateDropdown.bind(this));
          this.delegateElement.on('mouseout', '.is-dropdown-open', this._deactivateDropdown.bind(this));
        } else {
          this.delegateElement.on('click', '[data-type="menuitem"][aria-haspopup]', this._toggleDropdown.bind(this));
        }
      }

      /**
       * When the whole menu looses focus, it's automatically closed (in the case of condensed menu)
       */

    }, {
      key: '_onFocusOut',
      value: function _onFocusOut(event) {
        // event.relatedTarget is the new target that receives focus
        if (event.relatedTarget !== null && !this.element.contains(event.relatedTarget)) {
          this._closeNavigation();
        }
      }

      /**
       * We need to catch click outside the element to automatically close menu
       */

    }, {
      key: '_onClick',
      value: function _onClick(event) {
        if (!this.element.contains(event.target)) {
          this._closeNavigation();
        }
      }

      /**
       * Open the navigation (really make sense for condensed menu-
       */

    }, {
      key: '_openNavigation',
      value: function _openNavigation() {
        // Inline navigation is always visible so there is nothing to open
        if (this.useInlineNavigation) {
          return;
        }

        this.element.querySelector('[data-action="toggle-menu"]').setAttribute('aria-expanded', 'true');
        this.element.querySelector('[data-type="menu"]').setAttribute('aria-hidden', 'false');
        this.isNavigationVisible = true;
      }

      /**
       * Close the navigation (really make sense for condensed menu)
       */

    }, {
      key: '_closeNavigation',
      value: function _closeNavigation() {
        var _this13 = this;

        if (!this.useInlineNavigation) {
          this.element.querySelector('[data-action="toggle-menu"]').setAttribute('aria-expanded', 'false');
          this.element.querySelector('[data-type="menu"]').setAttribute('aria-hidden', 'true');
        }

        this.isNavigationVisible = false;

        if (this.openTrigger === 'click') {
          var cloneOpenItems = this.openItems.slice(0);

          cloneOpenItems.forEach(function (item) {
            _this13._deactivateDropdown(event, item);
          });
        }
      }

      /**
       * Toggle navigation
       */

    }, {
      key: '_toggleNavigation',
      value: function _toggleNavigation(event) {
        if (this.isNavigationVisible) {
          this._closeNavigation();
        } else {
          this._openNavigation();
        }
      }

      /**
       * Toggle a dropdown
       */

    }, {
      key: '_toggleDropdown',
      value: function _toggleDropdown(event, target) {
        // If the link is currently not expanded, we block the click
        if (target.getAttribute('aria-expanded') === 'false') {
          event.preventDefault();
        }

        if (target.getAttribute('aria-expanded') === 'true') {
          // If the link target is "#", by convention we close the dropdown, otherwise we just follow the link
          if (target.getAttribute('href') === '#') {
            event.preventDefault();
            this._deactivateDropdown(event, target.closest('.is-dropdown-open'));
          }
        } else {
          this._activateDropdown(event, target);
        }
      }

      /**
       * Open a dropdown menu
       */

    }, {
      key: '_activateDropdown',
      value: function _activateDropdown(event, target) {
        var _this14 = this;

        // If we are on click, we first need to close any other dropdown (if needed)
        if (this.openTrigger === 'click') {
          var cloneOpenItems = this.openItems.slice(0);

          cloneOpenItems.forEach(function (item) {
            if (!item.contains(target)) {
              _this14._deactivateDropdown(event, item);
            }
          });
        }

        var menuToOpen = __WEBPACK_IMPORTED_MODULE_0__helper_Dom__["default"].getSiblings(target, '[aria-hidden]')[0];

        var callback = function callback() {
          target.setAttribute('aria-expanded', 'true');
          target.parentNode.classList.add('is-dropdown-open');

          menuToOpen.setAttribute('aria-hidden', 'false');

          // If this menu was scheduled for deactivation, we remove the scheduling as it is now meant to open
          if (_this14.openTrigger === 'hover' && _this14.dropdownDeactivationTimeouts[menuToOpen.id]) {
            clearTimeout(_this14.dropdownDeactivationTimeouts[menuToOpen.id]);
            delete _this14.dropdownDeactivationTimeouts[menuToOpen.id];
          }

          // If we are in inline navigation, we may be on the edge of the screen. If that's the case we check if any of the sub-sub-menu goes outside the screen. If
          // this is the case, sub-sub-menu will be displayed on the left
          if (_this14.useInlineNavigation) {
            var windowWidth = window.innerWidth,
                shouldOpenLeft = false;

            menuToOpen.querySelectorAll('.nav-dropdown').forEach(function (subSubMenu) {
              if (subSubMenu.getBoundingClientRect().right > windowWidth) {
                shouldOpenLeft = true;
              }
            });

            if (shouldOpenLeft) {
              menuToOpen.classList.add('nav-dropdown--inverse');
            }
          }

          target.closest('[data-type="menu"]').classList.add('nav-dropdown--glued');

          if (menuToOpen.classList.contains('mega-menu')) {
            _this14._setupMegaMenu(menuToOpen);
          }

          if (_this14.openTrigger === 'click') {
            _this14.openItems.push(target.parentNode);
          }
        };

        // If we are using on click, we can directly close, otherwise we apply a slight delay before closing the menu,
        // so that the deactivation could be cancelled if the mouse is back to the dropdown (which can happen when doing
        // horizontal movement)

        if (this.openTrigger === 'click') {
          callback();
        } else {
          // Any other menu that has been scheduled for activation must be deactivated as it's now this one that is supposed to open
          for (var toDeactivate in this.dropdownActivationTimeouts) {
            if (this.dropdownActivationTimeouts.hasOwnProperty(toDeactivate)) {
              clearTimeout(this.dropdownActivationTimeouts[toDeactivate]);
              delete this.dropdownActivationTimeouts[toDeactivate];
            }
          }

          callback();

          /*this.dropdownActivationTimeouts[menuToOpen.id] = setTimeout(() => {
            callback();
            delete this.dropdownActivationTimeouts[menuToOpen.id];
          }, this.DROPDOWN_TIMEOUT);*/
        }
      }

      /**
       * Close a dropdown menu
       */

    }, {
      key: '_deactivateDropdown',
      value: function _deactivateDropdown(event, target) {
        var _this15 = this;

        // event.relatedTarget is the new target. This allows to make sure to only close the dropdown if we leave the containing div
        if (this.openTrigger === 'hover' && target.contains(event.relatedTarget)) {
          return;
        }

        var menuToClose = target.querySelector('[aria-hidden]');

        var callback = function callback() {
          target.classList.remove('is-dropdown-open');
          target.querySelector('[data-type="menuitem"]').setAttribute('aria-expanded', 'false');

          var menuToClose = target.querySelector('[aria-hidden]');
          menuToClose.setAttribute('aria-hidden', 'true');

          target.closest('[data-type="menu"]').classList.remove('nav-dropdown--glued');

          // If on click, we also close all sub-menus that may be open
          if (_this15.openTrigger === 'click') {
            target.querySelectorAll('.is-dropdown-open').forEach(function (item) {
              _this15._deactivateDropdown(event, item);

              var index = _this15.openItems.indexOf(item);

              if (index > -1) {
                _this15.openItems.splice(index, 1);
              }
            });

            // It has been deactivated so we also remove this one
            var index = _this15.openItems.indexOf(target);

            if (index > -1) {
              _this15.openItems.splice(index, 1);
            }
          }
        };

        // If we are using on click, we can directly close, otherwise we apply a slight delay before closing the menu,
        // so that the deactivation could be cancelled if the mouse is back to the dropdown (which can happen when doing
        // horizontal movement)

        if (this.openTrigger === 'click') {
          callback();
        } else {
          this.dropdownDeactivationTimeouts[menuToClose.id] = setTimeout(function () {
            callback();
            delete _this15.dropdownDeactivationTimeouts[menuToClose.id];
          }, this.DROPDOWN_TIMEOUT);
        }
      }

      /**
       * This method allows to block the dropdown deactivation if the mouse is back on the element. This may happen for
       * instance when the customer does a kind of diagonal movement to the menu. While the mouse may leave the opening
       * item, we want the item to stay open
       */

    }, {
      key: '_blockDropdownDeactivation',
      value: function _blockDropdownDeactivation(event, target) {
        if (this.dropdownDeactivationTimeouts[target.id] !== undefined) {
          clearTimeout(this.dropdownDeactivationTimeouts[target.id]);
          delete this.dropdownDeactivationTimeouts[target.id];

          // If we blocked the deactivation, then we must also remove any pending menu that could have been scheduled to open
          for (var toDeactivate in this.dropdownActivationTimeouts) {
            if (this.dropdownActivationTimeouts.hasOwnProperty(toDeactivate)) {
              clearTimeout(this.dropdownActivationTimeouts[toDeactivate]);
              delete this.dropdownActivationTimeouts[toDeactivate];
            }
          }
        }
      }

      /**
       * Set the maximum width allowed for the given mega-menu. For the inline style, it is always full width so nothing to do
       */

    }, {
      key: '_setupMegaMenu',
      value: function _setupMegaMenu(megaMenu) {
        if (!this.useInlineNavigation) {
          var navDropdownWidth = megaMenu.closest('.nav-dropdown').clientWidth;
          megaMenu.style.maxWidth = Math.min(1400 - navDropdownWidth, parseInt(window.innerWidth - navDropdownWidth - 80)) + 'px';
        }
      }

      /**
       * Fix inline navigation
       */

    }, {
      key: '_setupInlineNavigation',
      value: function _setupInlineNavigation() {
        var _this16 = this;

        this.element.querySelectorAll('.mega-menu').forEach(function (megaMenu) {
          megaMenu.closest('.nav-bar__item').classList.add('nav-bar__item--static');
        });

        // If using the inline navigation, we also set up a mutation observer whenever a sub-sub-dropdown is open, in order
        // to calculate their distance from the top of the screen, so we can apply a max-height properly
        if ('MutationObserver' in window) {
          this.dropdownMenuObserver = new MutationObserver(function (mutationList) {
            mutationList.forEach(function (mutation) {
              if (mutation.target.getAttribute('aria-hidden') === 'false') {
                // We set a CSS variable, so we can do various calculation in CSS
                mutation.target.style.setProperty('--distance-to-top', mutation.target.getBoundingClientRect().top + 'px');
              }
            });
          });

          this.element.querySelectorAll('.nav-dropdown .nav-dropdown').forEach(function (item) {
            _this16.dropdownMenuObserver.observe(item, { attributes: true, attributeFilter: ['aria-hidden'] });
          });
        }
      }
    }]);

    return DesktopNavigation;
  }();
  /* harmony export (immutable) */

  __webpack_exports__["default"] = DesktopNavigation;

  /***/
},
/* 14 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__helper_Responsive__ = __webpack_require__(0);

  var ExitPopup = function () {
    function ExitPopup(element) {
      _classCallCheck(this, ExitPopup);

      this.element = element;

      this.delegateElement = new domDelegate.Delegate(this.element);
      this.options = JSON.parse(element.getAttribute('data-popup-settings'));
      this.hasOpenOnceInCurrentPage = false;

      // If the popup has been already displayed, we do not display it
      try {
        if (window.location.hash === '#exit-popup') {
          this._openPopup();
        }
      } catch (error) {
        // Some browsers (especially in private mode) throw an exception when trying to access local storage, so we protect ourselves here
      }

      this._attachListeners();
    }

    _createClass(ExitPopup, [{
      key: 'destroy',
      value: function destroy() {
        this.delegateElement.off();
      }
    }, {
      key: '_attachListeners',
      value: function _attachListeners() {
        var _this17 = this;

        /* Some browsers like Android emit a mouseleave event when opening keyboard. This is too unreliable for touch devices */
        if (!__WEBPACK_IMPORTED_MODULE_0__helper_Responsive__["default"].matchesBreakpoint('supports-hover')) {
          return;
        }

        this.delegateElement.on('click', '[data-action="close-popup"]', this._closePopup.bind(this));

        document.addEventListener('mouseleave', function () {
          if (!_this17.hasOpenOnceInCurrentPage) {
            if (!_this17.options['showOnlyOnce'] || _this17.options['showOnlyOnce'] && localStorage.getItem('themeExitPopup') === null) {
              _this17._openPopup();
            }
          }
        });

        this._clickOutsideListener = this._checkClickOutside.bind(this);
      }
    }, {
      key: '_openPopup',
      value: function _openPopup() {
        if (!window.theme.isNewsletterPopupOpen) {
          this.element.setAttribute('aria-hidden', 'false');
          localStorage.setItem('themeExitPopup', 'true');

          this.hasOpenOnceInCurrentPage = true;
          window.theme.isExitPopupOpen = true;

          this.delegateElement.on('click', this._clickOutsideListener);
        }
      }
    }, {
      key: '_closePopup',
      value: function _closePopup() {
        this.element.setAttribute('aria-hidden', 'true');
        window.theme.isExitPopupOpen = false;
        this.delegateElement.off('click', this._clickOutsideListener);
      }
    }, {
      key: '_checkClickOutside',
      value: function _checkClickOutside(event) {
        if (!this.element.contains(event.target) || this.element === event.target) {
          this._closePopup();
        }
      }
    }]);

    return ExitPopup;
  }();
  /* harmony export (immutable) */

  __webpack_exports__["default"] = ExitPopup;

  /***/
},
/* 15 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

  var MobileNavigation = function () {
    function MobileNavigation(element) {
      _classCallCheck(this, MobileNavigation);

      this.element = element;
      this.delegateElement = new domDelegate.Delegate(this.element);
      this.delegateRoot = new domDelegate.Delegate(document.documentElement);

      this.mobileMenuElement = this.element.querySelector('.mobile-menu');
      this.mobileMenuToggleElement = this.element.querySelector('[aria-controls="' + this.mobileMenuElement.id + '"]');

      this.isOpen = false;

      this._attachListeners();
    }

    _createClass(MobileNavigation, [{
      key: 'destroy',
      value: function destroy() {
        this.delegateElement.off();
        this.delegateRoot.off();
        window.removeEventListener('resize', this._calculatMaxHeightListener);
      }
    }, {
      key: '_attachListeners',
      value: function _attachListeners() {
        this._calculatMaxHeightListener = this._calculateMaxHeight.bind(this);

        this.delegateElement.on('click', '[data-action="toggle-menu"]', this._toggleMenu.bind(this));
        this.delegateElement.on('click', '[data-action="open-panel"]', this._openPanel.bind(this));
        this.delegateElement.on('click', '[data-action="close-panel"]', this._closePanel.bind(this));
        this.delegateRoot.on('click', this._onWindowClick.bind(this));

        window.addEventListener('resize', this._calculatMaxHeightListener);
      }
    }, {
      key: '_toggleMenu',
      value: function _toggleMenu() {
        this.isOpen = !this.isOpen;

        this.mobileMenuToggleElement.setAttribute('aria-expanded', this.isOpen ? 'true' : 'false');
        this.mobileMenuElement.setAttribute('aria-hidden', this.isOpen ? 'false' : 'true');

        if (!this.isOpen) {
          this.mobileMenuElement.style.maxHeight = '';

          // If closed, we need to close all sub-menus
          this.element.querySelectorAll('.mobile-menu__panel.is-open').forEach(function (item) {
            item.classList.remove('is-open');
          });

          document.body.classList.remove('no-mobile-scroll');
        } else {
          // We need to restrict the height
          this._calculateMaxHeight();

          document.body.classList.add('no-mobile-scroll');
        }
      }
    }, {
      key: '_openPanel',
      value: function _openPanel(event, target) {
        target.setAttribute('aria-expanded', 'true');
        this.element.querySelector('#' + target.getAttribute('aria-controls')).classList.add('is-open');
      }
    }, {
      key: '_closePanel',
      value: function _closePanel(event, target) {
        // We first get the panel to be closed
        var panelToClose = target.closest('.mobile-menu__panel.is-open');
        panelToClose.classList.remove('is-open');

        // Then update the ARIA attributes for button that control it
        this.element.querySelector('[aria-controls="' + panelToClose.id + '"]').setAttribute('aria-expanded', 'false');
      }
    }, {
      key: '_calculateMaxHeight',
      value: function _calculateMaxHeight() {
        if (this.isOpen) {
          this.mobileMenuElement.style.maxHeight = window.innerHeight - document.querySelector('.header').getBoundingClientRect().bottom + 'px';
        }
      }
    }, {
      key: '_onWindowClick',
      value: function _onWindowClick(event) {
        if (this.isOpen && !this.element.contains(event.target)) {
          this._toggleMenu();
        }
      }
    }]);

    return MobileNavigation;
  }();
  /* harmony export (immutable) */

  __webpack_exports__["default"] = MobileNavigation;

  /***/
},
/* 16 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

  var NewsletterPopup = function () {
    function NewsletterPopup(element) {
      _classCallCheck(this, NewsletterPopup);

      this.element = element;

      this.delegateElement = new domDelegate.Delegate(this.element);
      this.options = JSON.parse(element.getAttribute('data-popup-settings'));

      // If the popup has been already displayed, we do not display it
      try {
        if (window.location.hash === '#newsletter-popup') {
          this._openPopup();
        } else if (!this.options['showOnlyOnce'] || this.options['showOnlyOnce'] && localStorage.getItem('themePopup') === null) {
          setTimeout(this._openPopup.bind(this), this.options['apparitionDelay'] * 1000);
        }
      } catch (error) {
        // Some browsers (especially in private mode) throw an exception when trying to access local storage, so we protect ourselves here
      }

      this._attachListeners();
    }

    _createClass(NewsletterPopup, [{
      key: 'destroy',
      value: function destroy() {
        this.delegateElement.off();
      }
    }, {
      key: '_attachListeners',
      value: function _attachListeners() {
        this.delegateElement.on('click', '[data-action="close-popup"]', this._closePopup.bind(this));
        this._clickOutsideListener = this._checkClickOutside.bind(this);
      }
    }, {
      key: '_openPopup',
      value: function _openPopup() {
        if (!window.theme.isExitPopupOpen) {
          this.element.setAttribute('aria-hidden', 'false');
          localStorage.setItem('themePopup', 'true');

          window.theme.isNewsletterPopupOpen = true;

          this.delegateElement.on('click', this._clickOutsideListener);
        }
      }
    }, {
      key: '_closePopup',
      value: function _closePopup() {
        this.element.setAttribute('aria-hidden', 'true');
        window.theme.isNewsletterPopupOpen = false;

        this.delegateElement.off('click');
      }
    }, {
      key: '_checkClickOutside',
      value: function _checkClickOutside(event) {
        if (!this.element.contains(event.target) || this.element === event.target) {
          this._closePopup();
        }
      }
    }]);

    return NewsletterPopup;
  }();
  /* harmony export (immutable) */

  __webpack_exports__["default"] = NewsletterPopup;

  /***/
},
/* 17 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /**
   * This class allows to automatically scrolls within a div when this div does not fit into the visible space
   */

  var OverflowScroller = function () {
    function OverflowScroller(element, options) {
      _classCallCheck(this, OverflowScroller);

      if (!element) {
        return;
      }

      this.element = element;
      this.options = options;

      this.lastKnownY = window.scrollY;
      this.currentTop = 0;
      this.initialTopOffset = options['offsetTop'] || parseInt(window.getComputedStyle(this.element).top);

      this._attachListeners();
    }

    _createClass(OverflowScroller, [{
      key: 'destroy',
      value: function destroy() {
        window.removeEventListener('scroll', this._checkPositionListener);
      }
    }, {
      key: '_attachListeners',
      value: function _attachListeners() {
        this._checkPositionListener = this._checkPosition.bind(this);
        window.addEventListener('scroll', this._checkPositionListener);
      }
    }, {
      key: '_checkPosition',
      value: function _checkPosition() {
        var _this18 = this;

        fastdom.measure(function () {
          var bounds = _this18.element.getBoundingClientRect(),
              maxTop = bounds.top + window.scrollY - _this18.element.offsetTop + _this18.initialTopOffset,
              minTop = _this18.element.clientHeight - window.innerHeight + (_this18.options['offsetBottom'] || 0);

          if (window.scrollY < _this18.lastKnownY) {
            _this18.currentTop -= window.scrollY - _this18.lastKnownY;
          } else {
            _this18.currentTop += _this18.lastKnownY - window.scrollY;
          }

          _this18.currentTop = Math.min(Math.max(_this18.currentTop, -minTop), maxTop, _this18.initialTopOffset);
          _this18.lastKnownY = window.scrollY;
        });

        fastdom.mutate(function () {
          _this18.element.style.top = _this18.currentTop + 'px';
        });
      }
    }]);

    return OverflowScroller;
  }();
  /* harmony export (immutable) */

  __webpack_exports__["default"] = OverflowScroller;

  /***/
},
/* 18 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__helper_Responsive__ = __webpack_require__(0);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__components_ProductModel__ = __webpack_require__(19);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__components_ProductVideo__ = __webpack_require__(20);

  var ProductGallery = function () {
    function ProductGallery(element, options) {
      _classCallCheck(this, ProductGallery);

      this.element = element;
      this.delegateElement = new domDelegate.Delegate(this.element);
      this.viewInSpaceElement = this.element.querySelector('[data-shopify-xr]');
      this.options = options;

      // The media property will hold all the media manages by the gallery so we can easily turn them off. They are
      // indexed by the media ID
      this.media = {};
      this.previouslySelectedMedia = null;

      this._createCarousel();
      this._createZoom();

      this._attachListeners();
    }

    _createClass(ProductGallery, [{
      key: 'destroy',
      value: function destroy() {
        if (this.flickityInstance) {
          this.flickityInstance.destroy();
        }

        for (var mediaId in this.media) {
          if (this.media.hasOwnProperty(mediaId)) {
            this.media[mediaId].destroy();
          }
        }
      }
    }, {
      key: '_attachListeners',
      value: function _attachListeners() {
        this.delegateElement.on('model:played', this._disableDrag.bind(this));
        this.delegateElement.on('video:played', this._disableDrag.bind(this));

        this.delegateElement.on('model:paused', this._enableDrag.bind(this));
        this.delegateElement.on('video:paused', this._enableDrag.bind(this));
      }

      /**
       * This method must be called whenever the variant is changed
       */

    }, {
      key: 'variantHasChanged',
      value: function variantHasChanged(newVariant) {
        var _this19 = this;

        // We may have selected a variant that will cause the set of images to change completely. To do that we need to iterate through all images,
        // check for the attribute "data-group-name" and verify if some images need to be filtered or not

        var shouldReload = false;

        fastdom.mutate(function () {
          _this19.productGalleryCellsElements.forEach(function (cell, imageIndex) {
            if (cell.hasAttribute('data-group-name')) {
              // If it has an attribute, we get the group name, and match it against the option
              var groupName = cell.getAttribute('data-group-name');

              _this19.options['productOptions'].forEach(function (option, optionIndex) {
                if (option.toLowerCase() === groupName) {
                  // groupName from attribute is already lowercased in Liquid
                  // Now we compare the value: if it's the same or that the image is part of the variant we keep it, otherwise we filter it
                  if (newVariant['option' + (optionIndex + 1)].toLowerCase() === cell.getAttribute('data-group-value') || newVariant['featured_media'] && newVariant['featured_media']['id'] === parseInt(cell.getAttribute('data-media-id'))) {
                    cell.classList.remove('is-filtered');
                    _this19.productThumbnailsCellsElements[imageIndex].classList.remove('is-filtered');
                  } else {
                    cell.classList.add('is-filtered');
                    _this19.productThumbnailsCellsElements[imageIndex].classList.add('is-filtered');
                  }
                }
              });

              shouldReload = true;
            }
          });

          if (shouldReload) {
            _this19.flickityInstance.deactivate();
            _this19.flickityInstance.activate();
          }

          if (__WEBPACK_IMPORTED_MODULE_0__helper_Responsive__["default"].matchesBreakpoint('lap-and-up')) {
            var slides = _this19.element.querySelectorAll('.product-gallery__carousel-item');
            slides.forEach(function (slide) {
              slide.classList.remove('product-gallery__carousel-item--hidden');
            });
          }

          if (newVariant && newVariant['featured_media']) {
            _this19.flickityInstance.selectCell('[data-media-id="' + newVariant['featured_media']['id'] + '"]');
          }
        });
      }
    }, {
      key: '_createCarousel',
      value: function _createCarousel() {
        var _this20 = this;

        this.productGalleryElement = this.element.querySelector('.product-gallery__carousel');
        this.productGalleryCellsElements = this.productGalleryElement ? this.productGalleryElement.querySelectorAll('.product-gallery__carousel-item') : [];

        if (this.productGalleryElement) {
          // We need to create a list of media (for now we only handle video and model a bit differently)
          this.productGalleryCellsElements.forEach(function (item) {
            switch (item.getAttribute('data-media-type')) {
              case 'external_video':
              case 'video':
                _this20.media[item.getAttribute('data-media-id')] = new __WEBPACK_IMPORTED_MODULE_2__components_ProductVideo__["default"](item, _this20.options['enableVideoLooping']);
                break;

              case 'model':
                _this20.media[item.getAttribute('data-media-id')] = new __WEBPACK_IMPORTED_MODULE_1__components_ProductModel__["default"](item);
                break;
            }
          });

          if (parseInt(this.productGalleryElement.getAttribute('data-media-count')) > 1) {
            // Due to the fact that some images may be filtered, we have to do additional logic to compute the initial index
            var filteredCells = [].slice.call(this.productGalleryCellsElements).filter(function (item) {
              return !item.classList.contains('is-filtered');
            });

            var initialIndex = 0;

            filteredCells.forEach(function (item, index) {
              if (item.getAttribute('data-media-id') === _this20.productGalleryElement.getAttribute('data-initial-media-id')) {
                initialIndex = index;
              }
            });

            this.flickityInstance = new Flickity(this.productGalleryElement, {
              accessibility: false,
              prevNextButtons: false,
              pageDots: false,
              adaptiveHeight: true,
              draggable: !__WEBPACK_IMPORTED_MODULE_0__helper_Responsive__["default"].matchesBreakpoint('supports-hover'),
              fade: this.options['galleryTransitionEffect'] === 'fade',
              cellSelector: '.product-gallery__carousel-item:not(.is-filtered)',
              initialIndex: initialIndex
            });
          }
        }

        // If there are thumbnails, we need to synchronize the thumbnails
        this.productThumbnailsListElement = this.element.querySelector('.product-gallery__thumbnail-list');

        if (this.productThumbnailsListElement && this.flickityInstance) {
          this.productThumbnailsCellsElements = this.productThumbnailsListElement.querySelectorAll('.product-gallery__thumbnail');

          this.delegateElement.on('click', '.product-gallery__thumbnail', this._onThumbnailClicked.bind(this));
          this.flickityInstance.on('select', this._onGallerySlideChanged.bind(this));

          if (this.options['galleryTransitionEffect'] === 'fade') {
            this.flickityInstance.on('select', this._onGallerySlideSettled.bind(this));
          } else {
            this.flickityInstance.on('settle', this._onGallerySlideSettled.bind(this));
          }

          this._onGallerySlideChanged(false); // We call it once initially to force adjust the thumbnails
          this._onGallerySlideSettled();
        }
      }
    }, {
      key: '_createZoom',
      value: function _createZoom() {
        var _this21 = this;

        if (this.options['enableImageZoom']) {
          this.driftObjects = [];
          var zoomWrapper = this.element.querySelector('.product__zoom-wrapper');

          // While Drift has a "handleTouch" option, we've found it's not working well, so we are doing our own
          // test here to prevent loading it at all on mobile
          if (__WEBPACK_IMPORTED_MODULE_0__helper_Responsive__["default"].matchesBreakpoint('supports-hover')) {
            this.element.querySelectorAll('.product-gallery__image').forEach(function (image) {
              _this21.driftObjects.push(new Drift(image, {
                containInline: _this21.options['zoomEffect'] === 'outside',
                inlinePane: window.innerWidth < 1024 ? true : _this21.options['zoomEffect'] !== 'outside',
                hoverBoundingBox: _this21.options['zoomEffect'] === 'outside',
                handleTouch: false,
                inlineOffsetY: window.innerWidth < 1024 ? -85 : 0,
                paneContainer: zoomWrapper
              }));
            });
          }
        }
      }
    }, {
      key: '_onGallerySlideChanged',
      value: function _onGallerySlideChanged() {
        var _this22 = this;

        var animate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        var previousNavElement = null,
            newNavElement = null;

        this.productThumbnailsCellsElements.forEach(function (item) {
          if (item.classList.contains('is-nav-selected')) {
            previousNavElement = item;
          }

          if (item.getAttribute('data-media-id') === _this22.flickityInstance.selectedElement.getAttribute('data-media-id')) {
            newNavElement = item;
          }
        });

        previousNavElement.classList.remove('is-nav-selected');
        newNavElement.classList.add('is-nav-selected');

        // We animate to move the selected nav item
        if (__WEBPACK_IMPORTED_MODULE_0__helper_Responsive__["default"].matchesBreakpoint('pocket')) {
          var scrollX = newNavElement.offsetLeft - (this.productThumbnailsListElement.parentNode.clientWidth - newNavElement.clientWidth) / 2;
          this.productThumbnailsListElement.parentNode.scrollTo({ left: scrollX, behavior: animate ? 'smooth' : 'auto' });
        } else {
          var scrollY = newNavElement.offsetTop - (this.productThumbnailsListElement.clientHeight - newNavElement.clientHeight) / 2;
          this.productThumbnailsListElement.scrollTo({ top: scrollY, behavior: animate ? 'smooth' : 'auto' });
        }
      }

      /**
       * The difference with "change" is that this function is called after the item has transitioned
       */

    }, {
      key: '_onGallerySlideSettled',
      value: function _onGallerySlideSettled() {
        this._handleMedia(this.flickityInstance.selectedElement);

        if (__WEBPACK_IMPORTED_MODULE_0__helper_Responsive__["default"].matchesBreakpoint('lap-and-up')) {
          var slides = this.element.querySelectorAll('.product-gallery__carousel-item:not(.is-selected)');
          slides.forEach(function (slide) {
            slide.classList.add('product-gallery__carousel-item--hidden');
          });
        }
      }
    }, {
      key: '_onThumbnailClicked',
      value: function _onThumbnailClicked(event, target) {
        this.flickityInstance.selectCell('[data-media-id="' + target.getAttribute('data-media-id') + '"]');
        event.preventDefault();

        if (__WEBPACK_IMPORTED_MODULE_0__helper_Responsive__["default"].matchesBreakpoint('lap-and-up')) {
          var slides = this.element.querySelectorAll('.product-gallery__carousel-item');
          slides.forEach(function (slide) {
            slide.classList.remove('product-gallery__carousel-item--hidden');
          });
        }
      }
    }, {
      key: '_disableDrag',
      value: function _disableDrag() {
        this.flickityInstance.options.draggable = false;
        this.flickityInstance.updateDraggable();
      }
    }, {
      key: '_enableDrag',
      value: function _enableDrag() {
        this.flickityInstance.options.draggable = !__WEBPACK_IMPORTED_MODULE_0__helper_Responsive__["default"].matchesBreakpoint('supports-hover');
        this.flickityInstance.updateDraggable();
      }

      /**
       * This method will handle the given media (for now model and video) to do the appropriate actions (such as launching
       * a video for instance)
       */

    }, {
      key: '_handleMedia',
      value: function _handleMedia(item) {
        var isInitialLoading = this.previouslySelectedMedia === null;

        // First, we need to turn off the previous media (if any)
        if (this.previouslySelectedMedia && this.previouslySelectedMedia !== item) {
          switch (this.previouslySelectedMedia.getAttribute('data-media-type')) {
            case 'video':
            case 'external_video':
            case 'model':
              this.media[this.previouslySelectedMedia.getAttribute('data-media-id')].hasBeenDeselected();
          }

          // If the previous media was a model, we need to adjust the "view in space" button to go back to initial value
          if (this.previouslySelectedMedia.getAttribute('data-media-type') === 'model' && this.viewInSpaceElement) {
            this.viewInSpaceElement.setAttribute('data-shopify-model3d-id', this.viewInSpaceElement.getAttribute('data-shopify-model3d-default-id'));
          }
        }

        // Then, we have to handle the currently selected media
        switch (item.getAttribute('data-media-type')) {
          case 'video':
          case 'external_video':
          case 'model':
            this.media[item.getAttribute('data-media-id')].hasBeenSelected(isInitialLoading);
            this.element.querySelector('.product-gallery__carousel').classList.remove('product-gallery__carousel--zoomable');
            break;

          case 'image':
            this.element.querySelector('.product-gallery__carousel').classList.add('product-gallery__carousel--zoomable');
            break;
        }

        // If the media is a model, we need to adjust the "view in space" button
        if (item.getAttribute('data-media-type') === 'model' && this.viewInSpaceElement) {
          this.viewInSpaceElement.setAttribute('data-shopify-model3d-id', item.getAttribute('data-media-id'));
        }

        // We set the previously selected media to the currently new one, so that when it changes it can be properly accounted
        this.previouslySelectedMedia = item;
      }
    }]);

    return ProductGallery;
  }();
  /* harmony export (immutable) */

  __webpack_exports__["default"] = ProductGallery;

  /***/
},
/* 19 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__helper_Responsive__ = __webpack_require__(0);

  var ProductModel = function () {
    function ProductModel(element) {
      _classCallCheck(this, ProductModel);

      this.element = element;
      this.delegateElement = new domDelegate.Delegate(this.element);
      this.delegateRoot = new domDelegate.Delegate(document.documentElement);

      this._attachListeners();

      var stylesheet = document.createElement('link');
      stylesheet.rel = 'stylesheet';
      stylesheet.href = 'https://cdn.shopify.com/shopifycloud/model-viewer-ui/assets/v1.0/model-viewer-ui.css';
      document.head.appendChild(stylesheet);

      window.Shopify.loadFeatures([{
        name: 'model-viewer-ui',
        version: '1.0',
        onLoad: this._setupModelViewerUI.bind(this)
      }, {
        name: 'shopify-xr',
        version: '1.0'
      }]);
    }

    _createClass(ProductModel, [{
      key: 'destroy',
      value: function destroy() {}
    }, {
      key: '_attachListeners',
      value: function _attachListeners() {
        var _this23 = this;

        this.element.querySelector('model-viewer').addEventListener('shopify_model_viewer_ui_toggle_play', function () {
          _this23.element.dispatchEvent(new CustomEvent('model:played', { bubbles: true }));
        });
        this.element.querySelector('model-viewer').addEventListener('shopify_model_viewer_ui_toggle_pause', function () {
          _this23.element.dispatchEvent(new CustomEvent('model:paused', { bubbles: true }));
        });
      }
    }, {
      key: 'hasBeenSelected',
      value: function hasBeenSelected(isInitialLoading) {
        // As per guidelines, we only need to autoplay when it's not a touch device, and on desktop only if it's not the
        // initial loading
        if (__WEBPACK_IMPORTED_MODULE_0__helper_Responsive__["default"].matchesBreakpoint('supports-hover') && !isInitialLoading) {
          this.modelUi.play();
        }
      }
    }, {
      key: 'hasBeenDeselected',
      value: function hasBeenDeselected() {
        // In all cases, we just turn it off
        this.modelUi.pause();
      }
    }, {
      key: '_setupModelViewerUI',
      value: function _setupModelViewerUI() {
        this.modelElement = this.element.querySelector('model-viewer');
        this.modelUi = new window.Shopify.ModelViewerUI(this.modelElement);
      }
    }]);

    return ProductModel;
  }();
  /* harmony export (immutable) */

  __webpack_exports__["default"] = ProductModel;

  /***/
},
/* 20 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__helper_Responsive__ = __webpack_require__(0);

  var ProductVideo = function () {
    function ProductVideo(element, enableVideoLooping) {
      _classCallCheck(this, ProductVideo);

      this.element = element;
      this.delegateElement = new domDelegate.Delegate(this.element);
      this.enableVideoLooping = enableVideoLooping;
      this.player = null;

      switch (this.element.getAttribute('data-media-type')) {
        case 'video':
          var stylesheet = document.createElement('link');
          stylesheet.rel = 'stylesheet';
          stylesheet.href = 'https://cdn.shopify.com/shopifycloud/shopify-plyr/v1.0/shopify-plyr.css';
          document.head.appendChild(stylesheet);

          window.Shopify.loadFeatures([{
            name: 'video-ui',
            version: '1.0',
            onLoad: this._setupHtml5Video.bind(this)
          }]);
          break;

        case 'external_video':
          this._setupExternalVideo();
          break;
      }
    }

    _createClass(ProductVideo, [{
      key: 'destroy',
      value: function destroy() {
        if (this.player) {
          this.player.destroy(); // Both Plyr and YouTube API use the same name
        }
      }
    }, {
      key: 'hasBeenSelected',
      value: function hasBeenSelected(isInitialLoading) {
        // As per guidelines, we only need to autoplay when it's not a touch device, and on desktop only if it's not the
        // initial loading
        if (__WEBPACK_IMPORTED_MODULE_0__helper_Responsive__["default"].matchesBreakpoint('supports-hover') && !isInitialLoading) {
          this.play();
        }
      }
    }, {
      key: 'hasBeenDeselected',
      value: function hasBeenDeselected() {
        this.pause();
      }
    }, {
      key: 'play',
      value: function play() {
        switch (this.element.getAttribute('data-media-type')) {
          case 'video':
            this.player.play();
            break;

          case 'external_video':
            this.player.playVideo();

            // If we're using YouTube, we have to focus the parent div (as it's not possible to directly focus an iframe)
            this.element.focus();

            break;
        }
      }
    }, {
      key: 'pause',
      value: function pause() {
        switch (this.element.getAttribute('data-media-type')) {
          case 'video':
            this.player.pause();
            break;

          case 'external_video':
            this.player.pauseVideo();
            break;
        }
      }
    }, {
      key: '_setupHtml5Video',
      value: function _setupHtml5Video() {
        var _this24 = this;

        this.player = new Shopify.Plyr(this.element.querySelector('video'), {
          controls: ['play', 'progress', 'mute', 'volume', 'play-large', 'fullscreen'],
          loop: { active: this.enableVideoLooping },
          hideControlsOnPause: true,
          clickToPlay: true,
          iconUrl: '//cdn.shopify.com/shopifycloud/shopify-plyr/v1.0/shopify-plyr.svg',
          tooltips: {
            controls: false,
            seek: true
          }
        });

        this.player.on('play', function () {
          _this24.element.dispatchEvent(new CustomEvent('video:played', { bubbles: true }));
        });
        this.player.on('pause', function () {
          _this24.element.dispatchEvent(new CustomEvent('video:paused', { bubbles: true }));
        });
      }
    }, {
      key: '_setupExternalVideo',
      value: function _setupExternalVideo() {
        if (this.element.getAttribute('data-media-host') === 'youtube') {
          this._loadYouTubeScript().then(this._setupYouTubePlayer.bind(this));
        }
      }
    }, {
      key: '_setupYouTubePlayer',
      value: function _setupYouTubePlayer() {
        var _this25 = this;

        var playerLoadingInterval = setInterval(function () {
          if (window.YT !== undefined && window.YT.Player !== undefined) {
            _this25.player = new YT.Player(_this25.element.querySelector('iframe'), {
              videoId: _this25.element.getAttribute('data-video-id'),
              events: {
                onStateChange: function onStateChange(event) {
                  if (event.data === 0 && _this25.enableVideoLooping) {
                    event.target.seekTo(0);
                  }
                }
              }
            });

            clearInterval(playerLoadingInterval);
          }
        }, 50);
      }
    }, {
      key: '_loadYouTubeScript',
      value: function _loadYouTubeScript() {
        return new Promise(function (resolve, reject) {
          var script = document.createElement('script');
          document.body.appendChild(script);
          script.onload = resolve;
          script.onerror = reject;
          script.async = true;
          script.src = '//www.youtube.com/iframe_api';
        });
      }
    }]);

    return ProductVideo;
  }();
  /* harmony export (immutable) */

  __webpack_exports__["default"] = ProductVideo;

  /***/
},
/* 21 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__helper_Currency__ = __webpack_require__(1);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__helper_Form__ = __webpack_require__(2);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__helper_Animation__ = __webpack_require__(5);

  var ProductVariants = function () {
    function ProductVariants(element, options) {
      var _this26 = this;

      _classCallCheck(this, ProductVariants);

      this.element = element;
      this.delegateElement = new domDelegate.Delegate(this.element);
      this.options = options;

      var productJsonElement = this.element.querySelector('[data-product-json]');

      // If we are using placeholder, there is no JSON so we wrap here!
      if (productJsonElement) {
        var jsonData = JSON.parse(productJsonElement.innerHTML);

        this.productData = jsonData['product'];
        this.productOptionsWithValues = jsonData['options_with_values'];
        this.variantsInventories = jsonData['inventories'] || {};
        this.variantSelectors = this.element.querySelectorAll('.product-form__option[data-selector-type]');
        this.masterSelector = this.element.querySelector('#product-select-' + this.productData['id']);

        // We init value with the first selected variant
        this.productData['variants'].forEach(function (variant) {
          if (variant['id'] === jsonData['selected_variant_id']) {
            _this26.currentVariant = variant;
            _this26.option1 = variant['option1'];
            _this26.option2 = variant['option2'];
            _this26.option3 = variant['option3'];
          }
        });
      }

      this._updateSelectors(this.currentVariant); // We update the selectors on initial load to disable the sold out variants
      this._setupStockCountdown();
      this._attachListeners();
    }

    _createClass(ProductVariants, [{
      key: 'destroy',
      value: function destroy() {
        this.delegateElement.off('click');
      }
    }, {
      key: '_attachListeners',
      value: function _attachListeners() {
        this.delegateElement.on('change', '.product-form__single-selector', this._onOptionChanged.bind(this));
        this.delegateElement.on('click', '[data-action="add-to-cart"]', this._addToCart.bind(this));
      }

      /**
       * ---------------------------------------------------------------------------------------------------
       * CODE THAT HANDLE VARIANT CHANGES IN THE FRONT
       *
       * Please note that this code is highly dependant on the markup and classes, so make sure to NOT
       * edit this code
       * ---------------------------------------------------------------------------------------------------
       */

      /**
       * This callback is called whenever the variant changes and allows to update data about the active variant
       */

    }, {
      key: '_onVariantChanged',
      value: function _onVariantChanged(previousVariant, newVariant) {
        // 1st: the prices
        this._updateProductPrices(newVariant, previousVariant);

        // 2th: update inventory
        this._updateInventory(newVariant, previousVariant);

        // 3th: update SKU
        this._updateSku(newVariant, previousVariant);

        // 4th: update the discount label (if necessary)
        this._updateDiscountLabel(newVariant, previousVariant);

        // 5th: update the unit price (if necessary)
        this._updateUnitPrice(newVariant, previousVariant);

        // 6th: update selectors
        this._updateSelectors(newVariant, previousVariant);

        // 7th: the add to cart button
        this._updateAddToCartButton(newVariant, previousVariant);

        if (window.theme.currencyConversionEnabled) {
          __WEBPACK_IMPORTED_MODULE_0__helper_Currency__["default"].convertAll(this.element);
        }

        // Finally, we send an event so that other system could hook and do their own logic
        this.element.dispatchEvent(new CustomEvent('variant:changed', {
          bubbles: true,
          detail: { variant: newVariant, previousVariant: previousVariant }
        }));
      }

      /**
       * Update the prices (optionally showing compare at price)
       */

    }, {
      key: '_updateProductPrices',
      value: function _updateProductPrices(newVariant, previousVariant) {
        var productPrices = this.element.querySelector('.price-list');

        if (!newVariant) {
          productPrices.style.display = 'none';
        } else {
          if (previousVariant && previousVariant['price'] === newVariant['price'] && previousVariant['compare_at_price'] === newVariant['compare_at_price']) {
            return; // The price do not have changed so let's return to avoid changing the DOM for nothing
          }

          productPrices.innerHTML = '';

          if (newVariant['compare_at_price'] > newVariant['price']) {
            productPrices.innerHTML += '<span class="price price--highlight" data-money-convertible>' + __WEBPACK_IMPORTED_MODULE_0__helper_Currency__["default"].formatMoney(newVariant['price'], window.theme.moneyFormat) + '</span>';
            productPrices.innerHTML += '<span class="price price--compare" data-money-convertible>' + __WEBPACK_IMPORTED_MODULE_0__helper_Currency__["default"].formatMoney(newVariant['compare_at_price'], window.theme.moneyFormat) + '</span>';
          } else {
            productPrices.innerHTML += '<span class="price" data-money-convertible>' + __WEBPACK_IMPORTED_MODULE_0__helper_Currency__["default"].formatMoney(newVariant['price'], window.theme.moneyFormat) + '</span>';
          }

          productPrices.style.display = '';
        }
      }

      /**
       * Update the inventory (if needed)
       */

    }, {
      key: '_updateInventory',
      value: function _updateInventory(newVariant) {
        if (!this.options['showInventoryQuantity'] || !newVariant) {
          return;
        }

        var productFormInventoryElement = this.element.querySelector('.product-form__inventory'),
            variantInventoryManagement = this.variantsInventories[newVariant['id']]['inventory_management'],
            variantInventoryPolicy = this.variantsInventories[newVariant['id']]['inventory_policy'],
            variantInventoryQuantity = this.variantsInventories[newVariant['id']]['inventory_quantity'],
            variantInventoryMessage = this.variantsInventories[newVariant['id']]['inventory_message'];

        productFormInventoryElement.classList.remove('inventory--high');
        productFormInventoryElement.classList.remove('inventory--low');

        if (newVariant['available']) {
          if (null !== variantInventoryManagement && variantInventoryPolicy === 'deny' && this.options['lowInventoryThreshold'] > 0) {
            if (variantInventoryQuantity <= this.options['lowInventoryThreshold']) {
              productFormInventoryElement.classList.add('inventory--low');
            } else {
              productFormInventoryElement.classList.add('inventory--high');
            }
          } else {
            productFormInventoryElement.classList.add('inventory--high');
          }
        }

        // We also need to update the stock countdown if setup
        var stockCountdown = this.element.querySelector('.inventory-bar');

        if (stockCountdown) {
          var stockCountdownProgress = Math.min(Math.max(variantInventoryQuantity / parseInt(stockCountdown.getAttribute('data-stock-countdown-max')) * 100.0, 0), 100);

          stockCountdown.classList.toggle('inventory-bar--hidden', stockCountdownProgress === 0);
          stockCountdown.firstElementChild.style.width = stockCountdownProgress + '%';
        }

        productFormInventoryElement.innerHTML = variantInventoryMessage;
      }

      /**
       * Update SKU
       */

    }, {
      key: '_updateSku',
      value: function _updateSku(newVariant, previousVariant) {
        var productSku = this.element.querySelector('.product-meta__sku-number');

        if (!productSku) {
          return;
        }

        if (!newVariant) {
          productSku.style.display = 'none';
        } else {
          if (previousVariant && previousVariant['sku'] === newVariant['sku']) {
            return; // The SKU do not have changed so let's return to avoid changing the DOM for nothing
          }

          productSku.innerHTML = newVariant['sku'];
          productSku.style.display = '';
        }
      }

      /**
       * Update the discount label
       */

    }, {
      key: '_updateDiscountLabel',
      value: function _updateDiscountLabel(newVariant, previousVariant) {
        if (!window.theme.showDiscount) {
          return; // Nothing to do if discount label is configured to be hidden
        }

        var discountLabel = this.element.querySelector('.product-meta .product-label--on-sale');

        // Some merchants have removed it from the code so we have to act defensive
        if (!discountLabel) {
          return;
        }

        if (!newVariant || !(newVariant['price'] < newVariant['compare_at_price'])) {
          discountLabel.style.display = 'none';
        } else {
          // We compute the savings based on the setting
          var savings = null;

          if (window.theme.discountMode === 'percentage') {
            savings = Math.round((newVariant['compare_at_price'] - newVariant['price']) * 100 / newVariant['compare_at_price']) + '%';
          } else {
            savings = '<span data-money-convertible>' + __WEBPACK_IMPORTED_MODULE_0__helper_Currency__["default"].formatMoney(newVariant['compare_at_price'] - newVariant['price'], window.theme.moneyFormat) + '</span>';
          }

          discountLabel.innerHTML = '' + window.languages.collectionOnSaleLabel.replace('{{savings}}', savings);
          discountLabel.style.display = 'inline-block';
        }
      }
    }, {
      key: '_updateUnitPrice',
      value: function _updateUnitPrice(newVariant, previousVariant) {
        var unitPriceMeasurement = this.element.querySelector('.unit-price-measurement');

        if (!newVariant || !newVariant['unit_price_measurement']) {
          unitPriceMeasurement.parentNode.style.display = 'none';
        } else {
          unitPriceMeasurement.parentNode.style.display = 'block';

          unitPriceMeasurement.querySelector('.unit-price-measurement__price').innerHTML = __WEBPACK_IMPORTED_MODULE_0__helper_Currency__["default"].formatMoney(newVariant['unit_price'], window.theme.moneyFormat);
          unitPriceMeasurement.querySelector('.unit-price-measurement__reference-unit').innerHTML = newVariant['unit_price_measurement']['reference_unit'];

          // Reference value may be absent
          var unitPriceReferenceValue = unitPriceMeasurement.querySelector('.unit-price-measurement__reference-value');

          if (unitPriceReferenceValue) {
            unitPriceReferenceValue.innerHTML = newVariant['unit_price_measurement']['reference_value'];
          }
        }
      }

      /**
       * Warehouse automatically adds a "disabled" state to sold out/unavailable variant. When we change the variant we have to recompute
       * all the selectors
       */

    }, {
      key: '_updateSelectors',
      value: function _updateSelectors(newVariant) {
        var _this27 = this;

        // No need to recompute the combinations if variant does not exist
        if (!newVariant) {
          return;
        }

        var option1 = newVariant['option1'],
            option2 = newVariant['option2'],
            option3 = newVariant['option3'],
            variantsCount = this.productData['variants'].length;

        this.variantSelectors.forEach(function (selector, i) {
          var selectorType = selector.getAttribute('data-selector-type');

          if (selectorType !== 'select') {
            var optionIndex = i + 1,
                optionValues = _this27.productOptionsWithValues[i]['values'];

            optionValues.forEach(function (valueToCheck, j) {
              var variantAvailable = false;

              if (optionIndex === 1) {
                for (var k = 0; k !== variantsCount; ++k) {
                  var currentVariant = _this27.productData['variants'][k];

                  if (currentVariant['option1'] === valueToCheck && currentVariant['option2'] === option2 && currentVariant['option3'] === option3) {
                    variantAvailable = currentVariant['available'];
                    break;
                  }
                }
              } else if (optionIndex === 2) {
                for (var _k = 0; _k !== variantsCount; ++_k) {
                  var _currentVariant = _this27.productData['variants'][_k];

                  if (_currentVariant['option1'] === option1 && _currentVariant['option2'] === valueToCheck && _currentVariant['option3'] === option3) {
                    variantAvailable = _currentVariant['available'];
                    break;
                  }
                }
              } else if (optionIndex === 3) {
                for (var _k2 = 0; _k2 !== variantsCount; ++_k2) {
                  var _currentVariant2 = _this27.productData['variants'][_k2];

                  if (_currentVariant2['option1'] === option1 && _currentVariant2['option2'] === option2 && _currentVariant2['option3'] === valueToCheck) {
                    variantAvailable = _currentVariant2['available'];
                    break;
                  }
                }
              }

              switch (selectorType) {
                case 'color':
                  selector.querySelector('.color-swatch:nth-child(' + (j + 1) + ')').classList.toggle('color-swatch--disabled', !variantAvailable);
                  break;

                case 'variant':
                  selector.querySelector('.variant-swatch:nth-child(' + (j + 1) + ')').classList.toggle('variant-swatch--disabled', !variantAvailable);
                  break;

                case 'block':
                  selector.querySelector('.block-swatch:nth-child(' + (j + 1) + ')').classList.toggle('block-swatch--disabled', !variantAvailable);
                  break;
              }
            });
          }
        });
      }

      /**
       * Update the add to cart
       */

    }, {
      key: '_updateAddToCartButton',
      value: function _updateAddToCartButton(newVariant) {
        var addToCartButtonElement = this.element.querySelector('.product-form__add-button'),
            infoListElement = this.element.querySelector('.product-form__info-list');

        if (!newVariant) {
          addToCartButtonElement.setAttribute('disabled', 'disabled');
          addToCartButtonElement.classList.add('button--disabled');
          addToCartButtonElement.classList.remove('button--primary');
          addToCartButtonElement.removeAttribute('data-action');
          addToCartButtonElement.innerHTML = window.languages.productFormUnavailable;

          infoListElement.style.display = 'none';
        } else {
          infoListElement.style.display = 'block';

          if (newVariant['available']) {
            addToCartButtonElement.removeAttribute('disabled');
            addToCartButtonElement.classList.remove('button--disabled');
            addToCartButtonElement.classList.add('button--primary');
            addToCartButtonElement.setAttribute('data-action', 'add-to-cart');
            addToCartButtonElement.innerHTML = window.languages.productFormAddToCart;
          } else {
            addToCartButtonElement.setAttribute('disabled', 'disabled');
            addToCartButtonElement.classList.add('button--disabled');
            addToCartButtonElement.classList.remove('button--primary');
            addToCartButtonElement.removeAttribute('data-action');
            addToCartButtonElement.innerHTML = window.languages.productFormSoldOut;
          }
        }

        // We handle the smart payment button
        if (this.options['showPaymentButton']) {
          var paymentButtonElement = this.element.querySelector('.shopify-payment-button');

          if (!newVariant || !newVariant['available']) {
            paymentButtonElement.style.display = 'none';
          } else {
            paymentButtonElement.style.display = 'block';
          }
        }
      }

      /**
       * ---------------------------------------------------------------------------------------------------
       * INTERNAL CODE THAT HANDLE VARIANT CHANGES
       * ---------------------------------------------------------------------------------------------------
       */

      /**
       * Whenever an option is changed, this code fetch the corresponding active variant
       */

    }, {
      key: '_onOptionChanged',
      value: function _onOptionChanged(event, target) {
        this['option' + target.getAttribute('data-option-position')] = target.value;

        // We update the selected value
        var selectedValueElement = target.closest('.product-form__option').querySelector('.product-form__selected-value');

        if (selectedValueElement) {
          selectedValueElement.innerHTML = target.value;
        }

        // Finally, we get the new variant
        var previousVariant = this.currentVariant;
        this.currentVariant = this._getCurrentVariantFromOptions();

        this._onVariantChanged(previousVariant, this.currentVariant);

        if (this.currentVariant) {
          if (this.options['enableHistoryState'] && history.replaceState) {
            var newUrl = window.location.protocol + '//' + window.location.host + window.location.pathname + '?variant=' + this.currentVariant.id;
            window.history.replaceState({ path: newUrl }, '', newUrl);
          }

          // We need to modify the hidden select that contain the id attribute as well
          this.masterSelector.querySelector('[selected]').removeAttribute('selected');
          this.masterSelector.querySelector('[value="' + this.currentVariant['id'] + '"]').setAttribute('selected', 'selected');
        }
      }

      /**
       * Get the active variant based on the options
       */

    }, {
      key: '_getCurrentVariantFromOptions',
      value: function _getCurrentVariantFromOptions() {
        var _this28 = this;

        var found = false;

        this.productData['variants'].forEach(function (variant) {
          if (variant['option1'] === _this28.option1 && variant['option2'] === _this28.option2 && variant['option3'] === _this28.option3) {
            found = variant;
          }
        });

        return found || null;
      }

      /**
       * ---------------------------------------------------------------------------------------------------
       * INTERNAL CODE THAT HANDLE PRODUCT ADD TO CART
       * ---------------------------------------------------------------------------------------------------
       */

    }, {
      key: '_addToCart',
      value: function _addToCart(event, target) {
        var _this29 = this;

        if (window.theme.cartType === 'page') {
          return; // When using a cart type of page, we just simply redirect to the cart page
        }

        event.preventDefault(); // Prevent form to be submitted
        event.stopPropagation();

        // First, we switch the status of the button
        target.setAttribute('disabled', 'disabled');
        document.dispatchEvent(new CustomEvent('theme:loading:start'));

        // Then we add the product in Ajax
        var formElement = this.element.querySelector('form[action*="/cart/add"]');

        fetch(window.theme.localeRootUrl + '/cart/add.js', {
          body: JSON.stringify(__WEBPACK_IMPORTED_MODULE_1__helper_Form__["default"].serialize(formElement)),
          credentials: 'same-origin',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest' // This is needed as currently there is a bug in Shopify that assumes this header
          }
        }).then(function (response) {
          document.dispatchEvent(new CustomEvent('theme:loading:end'));

          if (response.ok) {
            target.removeAttribute('disabled');

            // We simply trigger an event so the mini-cart can re-render
            _this29.element.dispatchEvent(new CustomEvent('product:added', {
              bubbles: true,
              detail: {
                variant: _this29.currentVariant,
                quantity: parseInt(formElement.querySelector('[name="quantity"]').value)
              }
            }));

            // If we are in the context of quick view, we also force closing the modal
            if (_this29.options['isQuickView']) {
              document.dispatchEvent(new CustomEvent('modal:close'));
            }
          } else {
            response.json().then(function (content) {
              var errorMessageElement = document.createElement('div');
              errorMessageElement.className = 'product-form__error';
              errorMessageElement.innerHTML = '<p class="alert alert--error">' + content['description'] + '</p>';

              target.removeAttribute('disabled');
              target.parentNode.insertAdjacentElement('afterend', errorMessageElement);

              __WEBPACK_IMPORTED_MODULE_2__helper_Animation__["default"].slideDown(errorMessageElement);

              setTimeout(function () {
                __WEBPACK_IMPORTED_MODULE_2__helper_Animation__["default"].slideUp(errorMessageElement, function () {
                  errorMessageElement.remove();
                });
              }, 5500);
            });
          }
        });

        event.preventDefault();
      }

      /**
       * ---------------------------------------------------------------------------------------------------
       * INTERNAL CODE THAT HANDLE PRODUCT ADD TO CART
       * ---------------------------------------------------------------------------------------------------
       */

      /**
       * In order to have a small animation when the inventory bar is visible, we setup an intersection observer
       */

    }, {
      key: '_setupStockCountdown',
      value: function _setupStockCountdown() {
        var _this30 = this;

        // If there is an inventory bar, we trigger an intersection observer to add an animation
        var stockCountdown = this.element.querySelector('.inventory-bar');

        if (stockCountdown) {
          var stockCountdownIntersectionObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (item) {
              if (item.isIntersecting) {
                var variantInventoryQuantity = _this30.variantsInventories[_this30.currentVariant['id']]['inventory_quantity'];
                var stockCountdownProgress = Math.min(Math.max(variantInventoryQuantity / parseInt(stockCountdown.getAttribute('data-stock-countdown-max')) * 100.0, 0), 100);

                stockCountdown.classList.toggle('inventory-bar--hidden', stockCountdownProgress === 0);
                stockCountdown.firstElementChild.style.width = stockCountdownProgress + '%';

                stockCountdownIntersectionObserver.disconnect();
              }
            });
          });

          stockCountdownIntersectionObserver.observe(stockCountdown);
        }
      }
    }]);

    return ProductVariants;
  }();
  /* harmony export (immutable) */

  __webpack_exports__["default"] = ProductVariants;

  /***/
},
/* 22 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

  var QuantityPicker = function () {
    function QuantityPicker(element) {
      _classCallCheck(this, QuantityPicker);

      this.element = element;
      this._attachListeners();
    }

    _createClass(QuantityPicker, [{
      key: '_attachListeners',
      value: function _attachListeners() {
        this.element.addEventListener('change', this._onSelectValueChanged.bind(this));
      }
    }, {
      key: '_onSelectValueChanged',
      value: function _onSelectValueChanged(event) {
        var value = parseInt(event.target.value);

        // If 10, we switch to standard input for easier selection of large quantities
        if (value === 10) {
          var selectWrapper = event.target.closest('.select-wrapper'),
              inputElement = document.createElement('input');

          inputElement.id = event.target.id;
          inputElement.className = 'product-form__quantity form__field form__field--small form__field--text';
          inputElement.pattern = '[0-9]*';
          inputElement.name = 'quantity';
          inputElement.value = '10';

          selectWrapper.parentNode.replaceChild(inputElement, selectWrapper);

          inputElement.focus();

          // We need to start listening to the event now
          inputElement.addEventListener('keyup', this._onInputValueChanged.bind(this));
          inputElement.addEventListener('focusout', this._onInputFocusOut.bind(this));
        }
      }
    }, {
      key: '_onInputValueChanged',
      value: function _onInputValueChanged(event) {
        var value = event.target.value;

        if (value !== '' && isNaN(value)) {
          event.target.value = Math.max(1, parseInt(value) || 1);
        }
      }
    }, {
      key: '_onInputFocusOut',
      value: function _onInputFocusOut(event) {
        event.target.value = Math.max(1, parseInt(event.target.value) || 1);
      }
    }]);

    return QuantityPicker;
  }();
  /* harmony export (immutable) */

  __webpack_exports__["default"] = QuantityPicker;

  /***/
},
/* 23 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

  var Image = function () {
    function Image() {
      _classCallCheck(this, Image);
    }

    _createClass(Image, null, [{
      key: 'getSizedImageUrl',

      /**
       * Create a CDN URL (similar to the img_url filter in Liquid)
       */
      value: function getSizedImageUrl(src, size) {
        if (size === null) {
          return src;
        }

        if (size === 'master') {
          return src.replace(/http(s)?:/, '');
        }

        var match = src.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);

        if (match) {
          var prefix = src.split(match[0]);
          var suffix = match[0];

          return (prefix[0] + '_' + size + suffix).replace(/http(s)?:/, '');
        } else {
          return null;
        }
      }

      /**
       * From a given set of desired sizes and a given image, filter out any unwanted sizes
       */

    }, {
      key: 'getSupportedSizes',
      value: function getSupportedSizes(image, desiredSizes) {
        var supportedSizes = [],
            imageWidth = image['width'];

        desiredSizes.forEach(function (width) {
          if (imageWidth >= width) {
            supportedSizes.push(width);
          }
        });

        return supportedSizes;
      }
    }]);

    return Image;
  }();
  /* harmony export (immutable) */

  __webpack_exports__["default"] = Image;

  /***/
},
/* 24 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__Accessibility__ = __webpack_require__(7);
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "AccessibilityHelper", function () {
    return __WEBPACK_IMPORTED_MODULE_0__Accessibility__["default"];
  });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__Animation__ = __webpack_require__(5);
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "AnimationHelper", function () {
    return __WEBPACK_IMPORTED_MODULE_1__Animation__["default"];
  });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__Currency__ = __webpack_require__(1);
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "CurrencyHelper", function () {
    return __WEBPACK_IMPORTED_MODULE_2__Currency__["default"];
  });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__Dom__ = __webpack_require__(3);
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "DomHelper", function () {
    return __WEBPACK_IMPORTED_MODULE_3__Dom__["default"];
  });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__Image__ = __webpack_require__(23);
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "ImageHelper", function () {
    return __WEBPACK_IMPORTED_MODULE_4__Image__["default"];
  });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_5__Responsive__ = __webpack_require__(0);
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "ResponsiveHelper", function () {
    return __WEBPACK_IMPORTED_MODULE_5__Responsive__["default"];
  });

  /***/
},
/* 25 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__helper_Animation__ = __webpack_require__(5);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__helper_Dom__ = __webpack_require__(3);
  /**
   * Handle the collapsibles. This plugin is global, so it listens to any click on [data-action="toggle-collapsible"] element
   */

  var CollapsibleManager = function () {
    function CollapsibleManager() {
      _classCallCheck(this, CollapsibleManager);

      this.domDelegate = new domDelegate.Delegate(document.body);
      this._attachListeners();
    }

    _createClass(CollapsibleManager, [{
      key: '_attachListeners',
      value: function _attachListeners() {
        this.domDelegate.on('click', '[data-action="toggle-collapsible"]:not([disabled])', this._toggleCollapsible.bind(this));
        document.addEventListener('collapsible:toggle', this._toggleCollapsible.bind(this));
      }

      /**
       * Toggle a given collapsible
       */

    }, {
      key: '_toggleCollapsible',
      value: function _toggleCollapsible(event, target) {
        var _this31 = this;

        // If the target is null, it may be because someone has sent the global event "collapsible:toggle". If that the case
        // we can retrieve the toggle button by using the event.detail.id
        if (!target && event.detail) {
          target = document.querySelector('[aria-controls="' + event.detail.id + '"]');
        }

        var isOpen = target.getAttribute('aria-expanded') === 'true',
            parentCollapsible = target.parentNode;

        if (isOpen) {
          this._close(parentCollapsible);
        } else {
          this._open(parentCollapsible);
        }

        // We make sure to close any siblings collapsible as well
        if (target.getAttribute('data-close-siblings') !== 'false') {
          __WEBPACK_IMPORTED_MODULE_1__helper_Dom__["default"].getSiblings(parentCollapsible).forEach(function (collapsibleToClose) {
            return _this31._close(collapsibleToClose);
          });
        }
      }

      /**
       * Open a given collapsible
       */

    }, {
      key: '_open',
      value: function _open(collapsible) {
        var toggleButton = collapsible.querySelector('[aria-controls]');

        if (!toggleButton || toggleButton.getAttribute('aria-expanded') === 'true') {
          return; // It's already open
        }

        var collapsibleContent = collapsible.querySelector('#' + toggleButton.getAttribute('aria-controls'));

        toggleButton.setAttribute('aria-expanded', 'true');

        if (collapsibleContent.hasAttribute('aria-hidden')) {
          collapsibleContent.setAttribute('aria-hidden', 'false');
        }

        __WEBPACK_IMPORTED_MODULE_0__helper_Animation__["default"].slideDown(collapsibleContent, function () {
          if (toggleButton.hasAttribute('data-collapsible-force-overflow')) {
            collapsibleContent.style.overflow = 'visible';
          }

          // If there is an autofocus field, we focus it
          var autofocusElement = collapsibleContent.querySelector('[autofocus]');

          if (autofocusElement) {
            autofocusElement.focus();
          }
        });
      }

      /**
       * Close a given collapsible
       */

    }, {
      key: '_close',
      value: function _close(collapsible) {
        var toggleButton = collapsible.querySelector('[aria-controls]');

        if (!toggleButton || toggleButton.getAttribute('aria-expanded') === 'false') {
          return; // It's already closed
        }

        var collapsibleContent = collapsible.querySelector('#' + toggleButton.getAttribute('aria-controls'));

        if (toggleButton.hasAttribute('data-collapsible-force-overflow')) {
          collapsibleContent.style.overflow = 'hidden';
        }

        if (collapsibleContent.hasAttribute('aria-hidden')) {
          collapsibleContent.setAttribute('aria-hidden', 'true');
        }

        toggleButton.setAttribute('aria-expanded', 'false');
        __WEBPACK_IMPORTED_MODULE_0__helper_Animation__["default"].slideUp(collapsibleContent);
      }
    }]);

    return CollapsibleManager;
  }();
  /* harmony export (immutable) */

  __webpack_exports__["default"] = CollapsibleManager;

  /***/
},
/* 26 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /**
   * Simple plugin that handles the loading bar actions
   *
   * This plugin uses delegate events so it's independent of the sections.
   */

  var LoadingBar = function () {
    function LoadingBar() {
      _classCallCheck(this, LoadingBar);

      this.element = document.querySelector('.loading-bar');

      if (this.element) {
        document.addEventListener('theme:loading:start', this._onLoadingStart.bind(this));
        document.addEventListener('theme:loading:end', this._onLoadingEnd.bind(this));

        this.element.addEventListener('transitionend', this._onTransitionEnd.bind(this));
      }
    }

    _createClass(LoadingBar, [{
      key: '_onLoadingStart',
      value: function _onLoadingStart() {
        this.element.classList.add('is-visible');
        this.element.style.width = '40%';
      }
    }, {
      key: '_onLoadingEnd',
      value: function _onLoadingEnd() {
        this.element.style.width = '100%';
        this.element.classList.add('is-finished');
      }
    }, {
      key: '_onTransitionEnd',
      value: function _onTransitionEnd(event) {
        if (event.propertyName === 'width' && this.element.classList.contains('is-finished')) {
          this.element.classList.remove('is-visible');
          this.element.classList.remove('is-finished');
          this.element.style.width = '0';
        }
      }
    }]);

    return LoadingBar;
  }();
  /* harmony export (immutable) */

  __webpack_exports__["default"] = LoadingBar;

  /***/
},
/* 27 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__helper_Accessibility__ = __webpack_require__(7);
  /**
   * Handle the modals. This plugin is global, so it listens to any click on [data-action="open-modal"] element
   */

  var ModalManager = function () {
    function ModalManager() {
      _classCallCheck(this, ModalManager);

      this.domDelegate = new domDelegate.Delegate(document.body);
      this.activeModal = document.querySelector('.modal[aria-hidden="false"]');

      this._attachListeners();
    }

    _createClass(ModalManager, [{
      key: '_attachListeners',
      value: function _attachListeners() {
        this.domDelegate.on('click', '[data-action="open-modal"]', this._openModal.bind(this));
        this.domDelegate.on('click', '[data-action="close-modal"]', this._closeModal.bind(this));

        // We allow any other code to force closing a modal by listening to the "modal:close" event
        document.addEventListener('modal:close', this._closeModal.bind(this));

        this._clickOutsideListener = this._checkClickOutside.bind(this);

        // If there is already an active modal when the page is loaded, we directly attach the listener on outside click
        if (this.activeModal) {
          document.documentElement.classList.add('is-locked');
          this.domDelegate.on('click', this._clickOutsideListener);
        }
      }
    }, {
      key: '_openModal',
      value: function _openModal(event, target) {
        var _this32 = this;

        var modal = document.querySelector('#' + target.getAttribute('aria-controls'));

        if (modal) {
          var onOpen = function onOpen(event) {
            if (event.propertyName === 'visibility') {
              modal.removeEventListener('transitionend', onOpen);
              __WEBPACK_IMPORTED_MODULE_0__helper_Accessibility__["default"].trapFocus(modal, 'modal');

              _this32.activeModal = modal;
            }
          };

          modal.addEventListener('transitionend', onOpen);
          modal.setAttribute('aria-hidden', 'false');

          document.documentElement.classList.add('is-locked');
          this.domDelegate.on('click', this._clickOutsideListener);

          return false; // Prevent the event to be propagated to the clickOutsideListener immediately
        }
      }
    }, {
      key: '_closeModal',
      value: function _closeModal() {
        var _this33 = this;

        if (this.activeModal) {
          var onClose = function onClose(event) {
            if (event.propertyName === 'visibility') {
              _this33.activeModal.removeEventListener('transitionend', onClose);
              __WEBPACK_IMPORTED_MODULE_0__helper_Accessibility__["default"].removeTrapFocus(_this33.activeModal, 'modal');

              // We emit an event saying it has closed, which can give the option to do cleanup
              _this33.activeModal.dispatchEvent(new CustomEvent('modal:closed'));

              _this33.activeModal = null;
            }
          };

          this.activeModal.addEventListener('transitionend', onClose);
          this.activeModal.setAttribute('aria-hidden', 'true');

          document.documentElement.classList.remove('is-locked');
          this.domDelegate.off('click', this._clickOutsideListener);
        }
      }
    }, {
      key: '_checkClickOutside',
      value: function _checkClickOutside(event) {
        if (this.activeModal && (!this.activeModal.contains(event.target) || this.activeModal === event.target)) {
          this._closeModal();
        }
      }
    }]);

    return ModalManager;
  }();
  /* harmony export (immutable) */

  __webpack_exports__["default"] = ModalManager;

  /***/
},
/* 28 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__helper_Responsive__ = __webpack_require__(0);

  var PopoverManager = function () {
    function PopoverManager() {
      _classCallCheck(this, PopoverManager);

      this.delegateElement = new domDelegate.Delegate(document.body);
      this.delegateRoot = new domDelegate.Delegate(document.documentElement);
      this.activePopover = null;

      this._attachListeners();
    }

    _createClass(PopoverManager, [{
      key: '_attachListeners',
      value: function _attachListeners() {
        this.delegateElement.on('click', '[data-action="toggle-popover"]', this._togglePopover.bind(this));
        this.delegateElement.on('click', '[data-action="show-popover-panel"]', this._showPanel.bind(this));
        this.delegateRoot.on('click', this._onWindowClick.bind(this));

        document.addEventListener('popover:close', this._closeActivePopover.bind(this));

        window.addEventListener('resize', this._windowResized.bind(this));
      }
    }, {
      key: '_togglePopover',
      value: function _togglePopover(event, target) {
        var hasActivePopover = this.activePopover !== null,
            previousActivePopoverId = this.activePopover ? this.activePopover.id : null;

        // If the toggler has a "data-follow-link" attribute, we match against the breakpoint and redirect to the page
        if (target.hasAttribute('data-follow-link') && __WEBPACK_IMPORTED_MODULE_0__helper_Responsive__["default"].matchesBreakpoint(target.getAttribute('data-follow-link'))) {
          return;
        }

        if (hasActivePopover) {
          this._closeActivePopover();
        }

        if (!hasActivePopover || hasActivePopover && target.getAttribute('aria-controls') !== previousActivePopoverId) {
          this._openPopover(target);
        }

        event.preventDefault();
      }
    }, {
      key: '_closeActivePopover',
      value: function _closeActivePopover() {
        this.activePopover.setAttribute('aria-hidden', 'true');
        document.querySelector('[aria-controls="' + this.activePopover.id + '"]').setAttribute('aria-expanded', 'false');
        this.activePopover = null;
      }
    }, {
      key: '_openPopover',
      value: function _openPopover(target) {
        var element = document.getElementById(target.getAttribute('aria-controls'));

        target.setAttribute('aria-expanded', 'true');
        element.setAttribute('aria-hidden', 'false');

        // If we are on mobile phone we also set the aria-expanded attribute to true on the icon state holder
        if (__WEBPACK_IMPORTED_MODULE_0__helper_Responsive__["default"].getCurrentBreakpoint() === 'phone') {
          element.style.height = window.innerHeight - document.querySelector('.header').getBoundingClientRect().bottom + 'px';
        } else {
          element.style.height = '';

          // If the popover contains a "panel-list", we set the height to the active panel
          var panelList = element.querySelector('.popover__panel-list');

          if (panelList) {
            panelList.style.height = panelList.clientHeight + 'px';
          }
        }

        this.activePopover = element;
      }
    }, {
      key: '_showPanel',
      value: function _showPanel(event, target) {
        // If no active popover, we do nothing
        if (!this.activePopover) {
          return;
        }

        // Otherwise we get all the panels within the popover
        var panels = this.activePopover.querySelectorAll('.popover__panel');

        panels.forEach(function (panel) {
          if (panel.id === target.getAttribute('aria-controls')) {
            panel.classList.add('is-selected');
            panel.closest('.popover__panel-list').style.height = panel.clientHeight + 'px';
          } else {
            panel.classList.remove('is-selected');
          }
        });
      }
    }, {
      key: '_onWindowClick',
      value: function _onWindowClick(event) {
        if (event.target.getAttribute('data-action') === 'toggle-popover' || event.target.closest('[data-action="toggle-popover"]')) {
          return;
        }

        if (this.activePopover && !this.activePopover.contains(event.target)) {
          this._closeActivePopover();
        }
      }
    }, {
      key: '_windowResized',
      value: function _windowResized() {
        if (__WEBPACK_IMPORTED_MODULE_0__helper_Responsive__["default"].getCurrentBreakpoint() === 'phone' && this.activePopover) {
          this.activePopover.style.height = window.innerHeight - document.querySelector('.header').getBoundingClientRect().bottom + 'px';
        }
      }
    }]);

    return PopoverManager;
  }();
  /* harmony export (immutable) */

  __webpack_exports__["default"] = PopoverManager;

  /***/
},
/* 29 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__helper_Currency__ = __webpack_require__(1);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__helper_Responsive__ = __webpack_require__(0);

  var SearchBar = function () {
    function SearchBar(element) {
      _classCallCheck(this, SearchBar);

      this.element = element;
      this.delegateElement = new domDelegate.Delegate(this.element);

      this.headerElement = this.element.closest('.header');
      this.searchBarElement = this.element.querySelector('.search-bar');
      this.inputElement = this.element.querySelector('[name="q"]');
      this.searchMenuElement = this.element.querySelector('.search-bar__menu-wrapper');
      this.searchResultsElement = this.element.querySelector('.search-bar__results');
      this.closeButtonElement = this.element.querySelector('.search-bar__close-button');

      this.productTypeFilter = '';
      this.isSearchOpen = false;

      this._attachListeners();
    }

    _createClass(SearchBar, [{
      key: 'destroy',
      value: function destroy() {
        this.delegateElement.off();
      }
    }, {
      key: '_attachListeners',
      value: function _attachListeners() {
        this.delegateElement.on('click', '[data-action="clear-input"]', this._clearInput.bind(this));
        this.delegateElement.on('click', '[data-action="unfix-search"]', this._unfixMobileSearch.bind(this));
        this.delegateElement.on('focusin', '[name="q"]', this._onInputFocus.bind(this));
        this.delegateElement.on('focusout', this._onFocusOut.bind(this));
        this.delegateElement.on('keydown', '[name="q"]', this._handleTab.bind(this));
        this.delegateElement.on('input', '[name="q"]', this._debounce(this._doSearch.bind(this), 250));
        this.delegateElement.on('change', '#search-product-type', this._productTypeChanged.bind(this));
        this.delegateElement.on('submit', this._onFormSubmit.bind(this));
      }

      /**
       * Toggle the mobile search (only applicable if the show condensed search is shown)
       */

    }, {
      key: 'toggleMobileSearch',
      value: function toggleMobileSearch() {
        if (this.isSearchOpen) {
          this.headerElement.classList.remove('header--search-expanded');
          this.element.classList.remove('is-visible');
        } else {
          this.headerElement.classList.add('header--search-expanded');
          this.element.classList.add('is-visible');
        }

        this.isSearchOpen = !this.isSearchOpen;
      }
    }, {
      key: '_unfixMobileSearch',
      value: function _unfixMobileSearch() {
        this.element.classList.remove('is-fixed');
        this.closeButtonElement.style.width = '';
        this.searchBarElement.classList.remove('is-expanded');
        this.searchResultsElement.setAttribute('aria-hidden', 'true');
        this.inputElement.classList.remove('is-filled');

        document.body.classList.remove('no-mobile-scroll');

        if (this.searchMenuElement) {
          this.searchMenuElement.setAttribute('aria-hidden', 'true');
        }
      }

      /**
       * Only on mobile
       */

    }, {
      key: '_clearInput',
      value: function _clearInput() {
        this.inputElement.value = '';
        this.inputElement.classList.remove('is-filled');

        this.searchResultsElement.setAttribute('aria-hidden', 'true');

        if (this.searchMenuElement) {
          this.searchMenuElement.setAttribute('aria-hidden', 'false');
        }
      }

      /**
       * When the input get focus, we display the quick links if they were specified by the merchant, or we open results if
       * results were previously loaded
       */

    }, {
      key: '_onInputFocus',
      value: function _onInputFocus() {
        this.element.classList.add('is-fixed');
        this.closeButtonElement.style.width = this.closeButtonElement.firstElementChild.offsetWidth + 'px';

        document.body.classList.add('no-mobile-scroll');

        if (this.inputElement.value === '') {
          if (this.searchMenuElement) {
            this.searchMenuElement.setAttribute('aria-hidden', 'false');
          }

          this.searchResultsElement.setAttribute('aria-hidden', 'true');
        } else {
          if (this.searchMenuElement) {
            this.searchMenuElement.setAttribute('aria-hidden', 'true');
          }

          this.searchResultsElement.setAttribute('aria-hidden', 'false');
          this.inputElement.classList.add('is-filled');
          this.searchBarElement.classList.add('is-expanded');
        }

        if (this.searchMenuElement) {
          this.searchBarElement.classList.add('is-expanded');
        }
      }

      /**
       * Whenever the focus leaves the search, we close everything (both search results and quick links)
       */

    }, {
      key: '_onFocusOut',
      value: function _onFocusOut(event) {
        // On phone, nothing happens on focus out
        if (__WEBPACK_IMPORTED_MODULE_1__helper_Responsive__["default"].matchesBreakpoint('phone')) {
          return;
        }

        this.element.classList.remove('is-fixed');
        document.body.classList.remove('no-mobile-scroll');

        // event.relatedTarget allows to get the new element that get focus. If it's outside the div that contains the search, we close it
        if (!this.element.contains(event.relatedTarget)) {
          if (this.searchMenuElement) {
            this.searchMenuElement.setAttribute('aria-hidden', 'true');
          }

          this.searchResultsElement.setAttribute('aria-hidden', 'true');

          this.searchBarElement.classList.remove('is-expanded');
        }
      }

      /**
       * This allows to slightly improve the accessibility and user experience by directly focusing on the first search results (if any)
       */

    }, {
      key: '_handleTab',
      value: function _handleTab(event) {
        if (event.keyCode !== 9) {
          return;
        }

        // Try to get the first link into the results to give focus to this element
        var firstFocusableElement = this.searchResultsElement.querySelector('a');

        if (firstFocusableElement) {
          firstFocusableElement.focus();
          event.preventDefault();
        }
      }

      /**
       * Fire the different Ajax requests
       */

    }, {
      key: '_doSearch',
      value: function _doSearch() {
        var _this34 = this;

        // Unfortunately, fetch does not support as of today cancelling a request. As a consequence what we do is that we manually
        // keep track of sent requests, and only use the results of the last one
        var currentInput = this.inputElement.value;
        this.lastInputValue = currentInput;

        if (currentInput === '') {
          if (this.searchMenuElement) {
            this.searchMenuElement.setAttribute('aria-hidden', 'false');
          } else {
            this.searchBarElement.classList.remove('is-expanded');
          }

          this.searchResultsElement.setAttribute('aria-hidden', 'true');
        } else {
          if (this.searchMenuElement) {
            this.searchMenuElement.setAttribute('aria-hidden', 'true');
          }

          this.searchResultsElement.setAttribute('aria-hidden', 'false');
          this.searchBarElement.classList.add('is-expanded', 'is-loading');

          var queryOptions = { method: 'GET', credentials: 'same-origin' },
              productQuery = '' + (this.productTypeFilter !== '' ? 'product_type:' + this.productTypeFilter + ' AND ' : '') + this.lastInputValue + '*',
              queries = [fetch(window.theme.localeRootUrl + '/search?view=ajax&q=' + productQuery + '&type=product', queryOptions)];

          if (window.theme.searchMode !== 'product') {
            queries.push(fetch(window.theme.localeRootUrl + '/search?view=ajax&q=' + encodeURIComponent(this.lastInputValue) + '*&type=' + window.theme.searchMode.replace('product,', ''), queryOptions));
          }

          Promise.all(queries).then(function (responses) {
            // If we receive the result for a query that is not the last one, we simply do not process the result
            if (_this34.lastInputValue !== currentInput) {
              return;
            }

            Promise.all(responses.map(function (response) {
              return response.text();
            })).then(function (contents) {
              _this34.searchBarElement.classList.remove('is-loading');

              var searchContent = document.createElement('div');
              searchContent.innerHTML = contents.join('').trim();

              // If there is a "view all" button, we move it at the end of the results
              var viewAll = searchContent.querySelector('.search-bar__view-all');

              if (viewAll) {
                searchContent.insertAdjacentElement('beforeend', viewAll);
              }

              _this34.searchBarElement.querySelector('.search-bar__results-inner').innerHTML = searchContent.innerHTML;

              if (window.theme.currencyConversionEnabled) {
                __WEBPACK_IMPORTED_MODULE_0__helper_Currency__["default"].convertAll(_this34.element);
              }
            });
          });
        }
      }

      /**
       * Warehouse allows to display a filter by type. When its value change, we re-do a new search to get the new data
       */

    }, {
      key: '_productTypeChanged',
      value: function _productTypeChanged(event, target) {
        target.closest('.search-bar__filter').querySelector('.search-bar__filter-active').innerText = target.options[target.selectedIndex].innerText;
        this.productTypeFilter = target.value;

        if (this.inputElement.value !== '') {
          this._doSearch();
        }
      }

      /**
       * Called when the form is submitted using the Enter key. We have to capture it and transform the query to include the wildcard
       */

    }, {
      key: '_onFormSubmit',
      value: function _onFormSubmit(event) {
        if (this.inputElement.value === '') {
          event.preventDefault(); // Do not submit if no value
        } else {
          // To prevent for the value to temporarily shows the "*", we clone the input as a hidden field
          var cloneNode = this.inputElement.cloneNode();
          cloneNode.setAttribute('type', 'hidden');
          cloneNode.value = '' + (this.productTypeFilter !== '' ? 'product_type:' + this.productTypeFilter + ' AND ' : '') + this.inputElement.value + '*';

          // We remove the "q" attribute on existing node so it's not submitted
          this.inputElement.removeAttribute('name');

          // And we insert it into the DOM
          this.inputElement.insertAdjacentElement('afterend', cloneNode);
        }
      }

      /**
       * Simple function that allows to debounce
       */

    }, {
      key: '_debounce',
      value: function _debounce(fn, delay) {
        var _this35 = this;

        var timer = null;

        return function () {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          clearTimeout(timer);

          timer = setTimeout(function () {
            fn.apply(_this35, args);
          }, delay);
        };
      }
    }]);

    return SearchBar;
  }();
  /* harmony export (immutable) */

  __webpack_exports__["default"] = SearchBar;

  /***/
},
/* 30 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__CollapsibleManager__ = __webpack_require__(25);
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "CollapsibleManager", function () {
    return __WEBPACK_IMPORTED_MODULE_0__CollapsibleManager__["default"];
  });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__CountrySelector__ = __webpack_require__(9);
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "CountrySelector", function () {
    return __WEBPACK_IMPORTED_MODULE_1__CountrySelector__["default"];
  });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__DesktopNavigation__ = __webpack_require__(13);
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "DesktopNavigation", function () {
    return __WEBPACK_IMPORTED_MODULE_2__DesktopNavigation__["default"];
  });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__CollectionFilterDrawer__ = __webpack_require__(12);
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "CollectionFilterDrawer", function () {
    return __WEBPACK_IMPORTED_MODULE_3__CollectionFilterDrawer__["default"];
  });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__ExitPopup__ = __webpack_require__(14);
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "ExitPopup", function () {
    return __WEBPACK_IMPORTED_MODULE_4__ExitPopup__["default"];
  });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_5__LoadingBar__ = __webpack_require__(26);
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "LoadingBar", function () {
    return __WEBPACK_IMPORTED_MODULE_5__LoadingBar__["default"];
  });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_6__Cart__ = __webpack_require__(11);
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "Cart", function () {
    return __WEBPACK_IMPORTED_MODULE_6__Cart__["default"];
  });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_7__MobileNavigation__ = __webpack_require__(15);
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "MobileNavigation", function () {
    return __WEBPACK_IMPORTED_MODULE_7__MobileNavigation__["default"];
  });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_8__ModalManager__ = __webpack_require__(27);
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "ModalManager", function () {
    return __WEBPACK_IMPORTED_MODULE_8__ModalManager__["default"];
  });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_9__NewsletterPopup__ = __webpack_require__(16);
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "NewsletterPopup", function () {
    return __WEBPACK_IMPORTED_MODULE_9__NewsletterPopup__["default"];
  });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_10__OverflowScroller__ = __webpack_require__(17);
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "OverflowScroller", function () {
    return __WEBPACK_IMPORTED_MODULE_10__OverflowScroller__["default"];
  });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_11__PopoverManager__ = __webpack_require__(28);
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "PopoverManager", function () {
    return __WEBPACK_IMPORTED_MODULE_11__PopoverManager__["default"];
  });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_12__ProductItemColorSwatch__ = __webpack_require__(6);
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "ProductItemColorSwatch", function () {
    return __WEBPACK_IMPORTED_MODULE_12__ProductItemColorSwatch__["default"];
  });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_13__ProductVariants__ = __webpack_require__(21);
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "ProductVariants", function () {
    return __WEBPACK_IMPORTED_MODULE_13__ProductVariants__["default"];
  });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_14__ProductGallery__ = __webpack_require__(18);
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "ProductGallery", function () {
    return __WEBPACK_IMPORTED_MODULE_14__ProductGallery__["default"];
  });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_15__ProductModel__ = __webpack_require__(19);
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "ProductModel", function () {
    return __WEBPACK_IMPORTED_MODULE_15__ProductModel__["default"];
  });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_16__ProductVideo__ = __webpack_require__(20);
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "ProductVideo", function () {
    return __WEBPACK_IMPORTED_MODULE_16__ProductVideo__["default"];
  });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_17__QuantityPicker__ = __webpack_require__(22);
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "QuantityPicker", function () {
    return __WEBPACK_IMPORTED_MODULE_17__QuantityPicker__["default"];
  });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_18__ShippingEstimator__ = __webpack_require__(10);
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "ShippingEstimator", function () {
    return __WEBPACK_IMPORTED_MODULE_18__ShippingEstimator__["default"];
  });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_19__ValuePicker__ = __webpack_require__(8);
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "ValuePicker", function () {
    return __WEBPACK_IMPORTED_MODULE_19__ValuePicker__["default"];
  });

  /***/
},
/* 31 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__components_CountrySelector__ = __webpack_require__(9);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__components_ValuePicker__ = __webpack_require__(8);

  var AccountSection = function () {
    function AccountSection(element) {
      _classCallCheck(this, AccountSection);

      this.element = element;
      this.domDelegate = new domDelegate.Delegate(this.element);

      this.element.querySelectorAll('[action*="/account/addresses"]').forEach(function (addressForm) {
        new __WEBPACK_IMPORTED_MODULE_0__components_CountrySelector__["default"](addressForm.querySelector('[name="address[country]"]'), addressForm.querySelector('[name="address[province]"]'));
      });

      this.pageSelector = new __WEBPACK_IMPORTED_MODULE_1__components_ValuePicker__["default"]('account-selector');
    }

    _createClass(AccountSection, [{
      key: '_onUnload',
      value: function _onUnload() {
        this.pageSelector.destroy();
      }
    }]);

    return AccountSection;
  }();
  /* harmony export (immutable) */

  __webpack_exports__["default"] = AccountSection;

  /***/
},
/* 32 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__helper_Accessibility__ = __webpack_require__(7);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__helper_Animation__ = __webpack_require__(5);

  var AnnouncementBarSection = function () {
    function AnnouncementBarSection(element) {
      _classCallCheck(this, AnnouncementBarSection);

      this.element = element;
      this.domDelegate = new domDelegate.Delegate(this.element);
      this.options = JSON.parse(this.element.getAttribute('data-section-settings'));
      this.isOpen = false;

      // We set the new width of the announcement bar button if any
      if (this.options['showNewsletter']) {
        document.documentElement.style.setProperty('--announcement-bar-button-width', this.element.querySelector('.announcement-bar__button').clientWidth + 'px');
      } else {
        document.documentElement.style.removeProperty('--announcement-bar-button-width');
      }

      this._attachListeners();
    }

    _createClass(AnnouncementBarSection, [{
      key: 'onSelect',
      value: function onSelect() {
        if (this.options['showNewsletter'] && !this.isOpen) {
          this._toggleNewsletter();
        }
      }
    }, {
      key: 'onDeselect',
      value: function onDeselect() {
        if (this.options['showNewsletter'] && this.isOpen) {
          this._toggleNewsletter();
        }
      }
    }, {
      key: 'onUnload',
      value: function onUnload() {
        this.domDelegate.off();
      }
    }, {
      key: '_attachListeners',
      value: function _attachListeners() {
        this.domDelegate.on('click', '[data-action="toggle-newsletter"]', this._toggleNewsletter.bind(this));
        this.domDelegate.on('keyup', this._handleKey.bind(this));
      }
    }, {
      key: '_toggleNewsletter',
      value: function _toggleNewsletter() {
        var togglerElement = this.element.querySelector('.announcement-bar__button'),
            newsletterElement = this.element.querySelector('.announcement-bar__newsletter');

        if (togglerElement.getAttribute('aria-expanded') === 'false') {
          togglerElement.setAttribute('aria-expanded', 'true');
          newsletterElement.setAttribute('aria-hidden', 'false');

          __WEBPACK_IMPORTED_MODULE_1__helper_Animation__["default"].slideDown(newsletterElement, function () {
            __WEBPACK_IMPORTED_MODULE_0__helper_Accessibility__["default"].trapFocus(newsletterElement, 'announcement-bar');
          });
        } else {
          togglerElement.setAttribute('aria-expanded', 'false');
          newsletterElement.setAttribute('aria-hidden', 'true');

          __WEBPACK_IMPORTED_MODULE_1__helper_Animation__["default"].slideUp(newsletterElement);
          __WEBPACK_IMPORTED_MODULE_0__helper_Accessibility__["default"].removeTrapFocus(newsletterElement, 'announcement-bar');
        }

        this.isOpen = !this.isOpen;
      }
    }, {
      key: '_handleKey',
      value: function _handleKey(event) {
        if (event.keyCode === 27 && this.isOpen) {
          this._toggleNewsletter();
        }
      }
    }]);

    return AnnouncementBarSection;
  }();
  /* harmony export (immutable) */

  __webpack_exports__["default"] = AnnouncementBarSection;

  /***/
},
/* 33 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

  var BlogPostSection = function BlogPostSection(element) {
    _classCallCheck(this, BlogPostSection);

    this.element = element;

    if (Shopify.designMode) {
      var elementToAdd = this.element.querySelector('.page__header');

      if (elementToAdd) {
        document.querySelector('.blog-container').previousElementSibling.remove();
        document.querySelector('.blog-container').insertAdjacentElement('beforebegin', elementToAdd);
      }
    }
  };
  /* harmony export (immutable) */

  __webpack_exports__["default"] = BlogPostSection;

  /***/
},
/* 34 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__components_ValuePicker__ = __webpack_require__(8);

  var BlogSection = function () {
    function BlogSection(element) {
      _classCallCheck(this, BlogSection);

      this.element = element;
      this.blogTagSelector = new __WEBPACK_IMPORTED_MODULE_0__components_ValuePicker__["default"]('blog-tag-selector');

      if (Shopify.designMode) {
        var elementToAdd = this.element.querySelector('.page__header');

        if (elementToAdd) {
          document.querySelector('.blog-container').previousElementSibling.remove();
          document.querySelector('.blog-container').insertAdjacentElement('beforebegin', elementToAdd);
        }
      }
    }

    _createClass(BlogSection, [{
      key: 'onUnload',
      value: function onUnload() {
        this.blogTagSelector.destroy();
      }
    }]);

    return BlogSection;
  }();
  /* harmony export (immutable) */

  __webpack_exports__["default"] = BlogSection;

  /***/
},
/* 35 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

  var BlogSidebarSection = function () {
    function BlogSidebarSection(element) {
      _classCallCheck(this, BlogSidebarSection);

      this.element = element;

      if (Shopify.designMode && window.SPR) {
        window.SPR.initDomEls();
        window.SPR.loadBadges();
      }

      if (window.theme.template === 'blog') {
        this._fixItemsPerRow();
      }
    }

    /**
     * If sidebar is not visible, then we must do some adjustments to the grid of article (especially, we must change how many items per row are displayed).
     * Because Shopify sections are independent, I didn't find a better approach than changing it in JavaScript
     */


    _createClass(BlogSidebarSection, [{
      key: '_fixItemsPerRow',
      value: function _fixItemsPerRow() {
        var blocks = this.element.querySelectorAll('.blog-sidebar__item');

        if (blocks.length === 0) {
          document.querySelector('.blog-container').classList.add('blog-container--without-sidebar');
          document.querySelectorAll('.shopify-section__blog-posts .block-list__item').forEach(function (item) {
            if (item.classList.contains('1/2--lap-and-up')) {
              item.classList.remove('1/2--lap-and-up');
              item.classList.add('1/3--lap-and-up');
            }
          });
        } else {
          document.querySelector('.blog-container').classList.remove('blog-container--without-sidebar');
          document.querySelectorAll('.shopify-section__blog-posts .block-list__item').forEach(function (item) {
            if (item.classList.contains('1/3--lap-and-up')) {
              item.classList.remove('1/3--lap-and-up');
              item.classList.add('1/2--lap-and-up');
            }
          });
        }
      }
    }]);

    return BlogSidebarSection;
  }();
  /* harmony export (immutable) */

  __webpack_exports__["default"] = BlogSidebarSection;

  /***/
},
/* 36 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__components_ShippingEstimator__ = __webpack_require__(10);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__helper_Form__ = __webpack_require__(2);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__ProductSection__ = __webpack_require__(4);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__helper_Currency__ = __webpack_require__(1);

  var CartSection = function () {
    function CartSection(element) {
      _classCallCheck(this, CartSection);

      this.element = element;
      this.domDelegate = new domDelegate.Delegate(this.element);
      this.delegateRoot = new domDelegate.Delegate(document.documentElement);
      this.options = JSON.parse(this.element.getAttribute('data-section-settings'));

      if (this.options['showShippingEstimator']) {
        this.shippingEstimator = new __WEBPACK_IMPORTED_MODULE_0__components_ShippingEstimator__["default"](this.element.querySelector('.shipping-estimator'), { singleProduct: false });
      }

      this._attachListeners();
      this._enforceMinimumHeight();
    }

    _createClass(CartSection, [{
      key: 'onUnload',
      value: function onUnload() {
        if (this.options['showShippingEstimator']) {
          this.shippingEstimator.destroy();
        }
      }
    }, {
      key: '_attachListeners',
      value: function _attachListeners() {
        this.domDelegate.on('click', '[data-action="add-to-cart"]', this._addToCart.bind(this));
        this.domDelegate.on('click', '[data-action="save-note"]', this._saveNote.bind(this));
        this.domDelegate.on('click', '[data-secondary-action="open-quick-view"]', this._openQuickView.bind(this));

        this.delegateRoot.on('cart:rerendered', this._onCartRerendered.bind(this));
      }
    }, {
      key: '_saveNote',
      value: function _saveNote() {
        var noteValue = this.element.querySelector('[name="cart[note]"]').value;

        fetch(window.theme.localeRootUrl + '/cart/update.js', {
          body: JSON.stringify({ note: noteValue }),
          credentials: 'same-origin',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest' // This is needed as currently there is a bug in Shopify that assumes this header
          }
        });

        // Hide or show the note edit button depending on content
        this.element.querySelector('.cart-recap__note-edit').classList.toggle('is-visible', noteValue !== '');

        // Close the button by sending a global event
        document.dispatchEvent(new CustomEvent('collapsible:toggle', {
          detail: {
            id: 'order-note'
          }
        }));
      }
    }, {
      key: '_addToCart',
      value: function _addToCart(event, target) {
        var _this36 = this;

        if (window.theme.cartType === 'page') {
          return; // When using a cart type of page, we just simply redirect to the cart page
        }

        event.preventDefault(); // Prevent form to be submitted
        event.stopPropagation();

        // First, we switch the status of the button
        target.setAttribute('disabled', 'disabled');
        document.dispatchEvent(new CustomEvent('theme:loading:start'));

        // Then we add the product in Ajax
        var formElement = target.closest('form[action*="/cart/add"]');

        fetch(window.theme.localeRootUrl + '/cart/add.js', {
          body: JSON.stringify(__WEBPACK_IMPORTED_MODULE_1__helper_Form__["default"].serialize(formElement)),
          credentials: 'same-origin',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest' // This is needed as currently there is a bug in Shopify that assumes this header
          }
        }).then(function (response) {
          if (response.ok) {
            target.removeAttribute('disabled');

            // We simply trigger an event so the mini-cart can re-render
            _this36.element.dispatchEvent(new CustomEvent('product:added', {
              bubbles: true,
              detail: {
                variant: null,
                quantity: parseInt(formElement.querySelector('[name="quantity"]').value)
              }
            }));
          } else {
            target.removeAttribute('disabled');
          }
        });

        event.preventDefault();
      }
    }, {
      key: '_openQuickView',
      value: function _openQuickView(event, target) {
        var modal = document.getElementById(target.getAttribute('aria-controls'));
        modal.classList.add('is-loading');

        fetch(target.getAttribute('data-product-url') + '?view=quick-view', {
          credentials: 'same-origin',
          method: 'GET'
        }).then(function (response) {
          response.text().then(function (content) {
            modal.querySelector('.modal__inner').innerHTML = content;
            modal.classList.remove('is-loading');

            // Register a new section to power the JS
            var modalProductSection = new __WEBPACK_IMPORTED_MODULE_2__ProductSection__["default"](modal.querySelector('[data-section-type="product"]'));

            if (window.theme.currencyConversionEnabled) {
              __WEBPACK_IMPORTED_MODULE_3__helper_Currency__["default"].convertAll(modal);
            }

            // We set a listener so we can cleanup on close
            var doCleanUp = function doCleanUp() {
              modalProductSection.onUnload();
              modal.removeEventListener('modal:closed', doCleanUp);
            };

            modal.addEventListener('modal:closed', doCleanUp);
          });
        });
      }

      /**
       * On desktop we need to enforce a minimum height for the cart-wrapper
       */

    }, {
      key: '_enforceMinimumHeight',
      value: function _enforceMinimumHeight() {
        var cartWrapperElement = this.element.querySelector('.cart-wrapper'),
            cartRecapScrollerElement = this.element.querySelector('.cart-recap__scroller');

        if (cartWrapperElement && cartRecapScrollerElement) {
          cartWrapperElement.style.minHeight = cartRecapScrollerElement.clientHeight + 'px';

          if (window.ResizeObserver) {
            var resizeObserver = new ResizeObserver(function (entries) {
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                for (var _iterator = entries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var entry = _step.value;

                  cartWrapperElement.style.minHeight = parseInt(entry.contentRect.height) + 'px';
                }
              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }
            });

            resizeObserver.observe(cartRecapScrollerElement);
          }
        }
      }

      /* When the cart re-render, we have some operations to do */

    }, {
      key: '_onCartRerendered',
      value: function _onCartRerendered() {
        // For now the only thing we have to do is re-create the shipping estimator
        if (this.options['showShippingEstimator']) {
          this.shippingEstimator.destroy();
          this.shippingEstimator = new __WEBPACK_IMPORTED_MODULE_0__components_ShippingEstimator__["default"](this.element.querySelector('.shipping-estimator'), { singleProduct: false });
        }

        this._enforceMinimumHeight();
      }
    }]);

    return CartSection;
  }();
  /* harmony export (immutable) */

  __webpack_exports__["default"] = CartSection;

  /***/
},
/* 37 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

  var CollectionListSection = function () {
    function CollectionListSection(element) {
      _classCallCheck(this, CollectionListSection);

      this.element = element;

      this.flickityInstance = new Flickity(this.element.querySelector('.collection-list'), {
        watchCSS: true,
        prevNextButtons: true,
        draggable: !window.matchMedia('(-moz-touch-enabled: 0), (hover: hover)').matches,
        pageDots: false,
        cellAlign: 'left',
        contain: true,
        groupCells: true
      });
    }

    _createClass(CollectionListSection, [{
      key: 'onUnload',
      value: function onUnload() {
        this.flickityInstance.destroy();
      }
    }, {
      key: 'onBlockSelect',
      value: function onBlockSelect(event) {
        if (this.flickityInstance.isActive) {
          this.flickityInstance.selectCell(parseInt(event.target.getAttribute('data-collection-index')), null, event.detail.load);
        }
      }
    }]);

    return CollectionListSection;
  }();
  /* harmony export (immutable) */

  __webpack_exports__["default"] = CollectionListSection;

  /***/
},
/* 38 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__helper_Dom__ = __webpack_require__(3);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__helper_Currency__ = __webpack_require__(1);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__helper_Form__ = __webpack_require__(2);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__helper_Responsive__ = __webpack_require__(0);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__components_ValuePicker__ = __webpack_require__(8);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_5__components_CollectionFilterDrawer__ = __webpack_require__(12);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_6__components_ProductItemColorSwatch__ = __webpack_require__(6);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_7__sections_ProductSection__ = __webpack_require__(4);

  var CollectionSection = function () {
    function CollectionSection(element) {
      _classCallCheck(this, CollectionSection);

      this.element = element;
      this.delegateElement = new domDelegate.Delegate(this.element);
      this.options = JSON.parse(this.element.getAttribute('data-section-settings'));

      this.collectionFilterTagElements = this.element.querySelectorAll('[data-tag]');

      this.currentUrl = new URL(window.location.href);
      this.currentTags = this.options['currentTags'];

      if (Shopify.designMode && window.SPR) {
        window.SPR.initDomEls();
        window.SPR.loadBadges();
      }

      this.mobileFilterDrawer = new __WEBPACK_IMPORTED_MODULE_5__components_CollectionFilterDrawer__["default"](this.options);
      this.displayByValuePicker = new __WEBPACK_IMPORTED_MODULE_4__components_ValuePicker__["default"]('display-by-selector', { onValueSelect: this._showingCountChanged.bind(this) });
      this.sortByValuePicker = new __WEBPACK_IMPORTED_MODULE_4__components_ValuePicker__["default"]('sort-by-selector', { onValueSelect: this._sortByChanged.bind(this) });
      this.productItemColorSwatch = new __WEBPACK_IMPORTED_MODULE_6__components_ProductItemColorSwatch__["default"](this.element);

      // If we are in the template search and that we are supposed to show pages and blog posts, we do more work
      if (window.theme.template === 'search' && window.theme.searchMode !== 'product') {
        this._loadContentResults();
      }

      this._attachListeners();
    }

    _createClass(CollectionSection, [{
      key: 'onUnload',
      value: function onUnload() {
        this.delegateElement.off();
        this.mobileFilterDrawer.destroy();
        this.displayByValuePicker.destroy();
        this.sortByValuePicker.destroy();
        this.productItemColorSwatch.destroy();
      }
    }, {
      key: 'onSelect',
      value: function onSelect(event) {
        if (Shopify.designMode && event.detail.load) {
          // We also force the layout and number of items per page in the editor, no matter if you have choose an explicit mode
          this.element.querySelector('.collection__layout-button[data-layout-mode="' + this.options['defaultLayout'] + '"]').click();
          this._showingCountChanged(this.options['defaultProductsPerPage']);
        }
      }
    }, {
      key: '_attachListeners',
      value: function _attachListeners() {
        var _this37 = this;

        this.delegateElement.on('click', '[data-action="change-layout"]', this._changeLayout.bind(this));
        this.delegateElement.on('change', '#mobile-sort-by, #desktop-sort-by', this._sortByChanged.bind(this));
        this.delegateElement.on('change', '#showing-count', this._showingCountChanged.bind(this));
        this.delegateElement.on('click', '.pagination [data-page]', this._paginationPageChanged.bind(this));
        this.delegateElement.on('click', '[data-action="toggle-tag"]', this._tagToggled.bind(this));
        this.delegateElement.on('click', '[data-action="clear-tags"]', this._clearTags.bind(this));
        this.delegateElement.on('click', '[data-secondary-action="open-quick-view"]', this._openQuickView.bind(this));
        this.delegateElement.on('click', '[data-action="add-to-cart"]', this._addToCart.bind(this));

        window.addEventListener('popstate', function (event) {
          if (event.state.path) {
            _this37.currentUrl = new URL(event.state.path);
            _this37._reload(false);
          }
        });
      }
    }, {
      key: '_openQuickView',
      value: function _openQuickView(event, target) {
        var productUrl = new URL('' + window.location.origin + target.getAttribute('data-product-url'));

        // If we are on mobile or tablet, we redirect to product page directly
        if (__WEBPACK_IMPORTED_MODULE_3__helper_Responsive__["default"].matchesBreakpoint('phone') || __WEBPACK_IMPORTED_MODULE_3__helper_Responsive__["default"].matchesBreakpoint('tablet')) {
          window.location.href = productUrl.href;
          return false;
        }

        var modal = document.getElementById(target.getAttribute('aria-controls'));
        modal.classList.add('is-loading');

        productUrl.searchParams.set('view', 'quick-view');

        fetch(productUrl.href, {
          credentials: 'same-origin',
          method: 'GET'
        }).then(function (response) {
          response.text().then(function (content) {
            modal.querySelector('.modal__inner').innerHTML = content;
            modal.classList.remove('is-loading');

            // Register a new section to power the JS
            var modalProductSection = new __WEBPACK_IMPORTED_MODULE_7__sections_ProductSection__["default"](modal.querySelector('[data-section-type="product"]'));

            if (window.theme.currencyConversionEnabled) {
              __WEBPACK_IMPORTED_MODULE_1__helper_Currency__["default"].convertAll(modal);
            }

            // We set a listener so we can cleanup on close
            var doCleanUp = function doCleanUp() {
              modalProductSection.onUnload();
              modal.removeEventListener('modal:closed', doCleanUp);
            };

            modal.addEventListener('modal:closed', doCleanUp);
          });
        });
      }

      /**
       * Switch layout mode
       */

    }, {
      key: '_changeLayout',
      value: function _changeLayout(event, target) {
        var _this38 = this;

        if (target.classList.contains('is-selected')) {
          return;
        }

        var newLayoutMode = target.getAttribute('data-layout-mode');

        // We save the new attribute so that we can select the appropriate mode without causing reflow
        fetch(window.theme.localeRootUrl + '/cart/update.js', {
          body: JSON.stringify({
            attributes: {
              'collection_layout': newLayoutMode
            }
          }),
          credentials: 'same-origin',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest' // This is needed as currently there is a bug in Shopify that assumes this header
          }
        });

        // Finally, we change everything!
        fastdom.mutate(function () {
          __WEBPACK_IMPORTED_MODULE_0__helper_Dom__["default"].getSiblings(target, '.is-selected').forEach(function (button) {
            return button.classList.remove('is-selected');
          });
          target.classList.add('is-selected');

          _this38.element.querySelectorAll('.product-item').forEach(function (item) {
            if (newLayoutMode === 'grid') {
              item.className = 'product-item product-item--vertical ' + _this38.options['gridClasses'];
            } else {
              item.className = 'product-item product-item--list';
            }
          });

          // Reload the swatches
          _this38.productItemColorSwatch.recalculateSwatches();
        });
      }

      /**
       * Update the URL and reload products
       */

    }, {
      key: '_sortByChanged',
      value: function _sortByChanged(value) {
        this.currentUrl.searchParams.set('sort_by', value);
        this.currentUrl.searchParams.delete('page');
        this._reload(true);
      }

      /**
       * When the number of items has changed
       */

    }, {
      key: '_showingCountChanged',
      value: function _showingCountChanged(value) {
        var _this39 = this;

        this.currentUrl.searchParams.delete('page');

        // We save the new value as a cart attribute, so it can be retrieved in Liquid easily :)

        fetch(window.theme.localeRootUrl + '/cart/update.js', {
          body: JSON.stringify({ attributes: { 'collection_products_per_page': value } }),
          credentials: 'same-origin',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest' // This is needed as currently there is a bug in Shopify that assumes this header
          }
        }).then(function () {
          _this39._reload(true);
        });
      }

      /**
       * When the page has changed
       */

    }, {
      key: '_paginationPageChanged',
      value: function _paginationPageChanged(event, target) {
        event.preventDefault();

        this.currentUrl.searchParams.set('page', parseInt(target.getAttribute('data-page')));
        this._reload(true);
      }

      /**
       * When a new tag is selected
       */

    }, {
      key: '_tagToggled',
      value: function _tagToggled(event, target) {
        var _this40 = this;

        var newTag = target.getAttribute('data-tag'),
            hadTags = this.currentTags.length > 0;

        if (this.currentTags.includes(newTag)) {
          this.currentTags = this.currentTags.filter(function (value) {
            return value !== newTag;
          });
        } else {
          if (this.options['filterType'] === 'tag') {
            this.currentTags = [newTag]; // When using tag mode, we only allow one tag at maximum
          } else {
            // In the group mode, we need to make sure to remove the other tags that are matching the given group
            var tagGroup = newTag.split('_')[0];

            this.currentTags.forEach(function (existingTag) {
              if (existingTag.split('_')[0] === tagGroup) {
                _this40.currentTags = _this40.currentTags.filter(function (value) {
                  return value !== existingTag;
                });
              }
            });

            this.currentTags.push(newTag);
          }
        }

        this.currentUrl.searchParams.delete('page');
        this._updateTagUrl(hadTags);

        // Finally, we can reload!
        this._reload(true);
      }
    }, {
      key: '_clearTags',
      value: function _clearTags() {
        var hadTags = this.currentTags.length > 0;

        this.currentTags = [];

        this.currentUrl.searchParams.delete('page');
        this._updateTagUrl(hadTags);

        // Finally, we can reload!
        this._reload(true).then(function () {
          document.dispatchEvent(new CustomEvent('collection-filter:close'));
        });
      }
    }, {
      key: '_updateTagUrl',
      value: function _updateTagUrl(hadTags) {
        var _this41 = this;

        // Then, we update the DOM
        fastdom.mutate(function () {
          _this41.collectionFilterTagElements.forEach(function (tagElement) {
            if (_this41.currentTags.includes(tagElement.getAttribute('data-tag'))) {
              tagElement.classList.add('is-selected');

              if (tagElement.tagName === 'INPUT') {
                tagElement.checked = true;
              }
            } else {
              tagElement.classList.remove('is-selected');

              if (tagElement.tagName === 'INPUT') {
                tagElement.checked = false;
              }
            }
          });
        });

        // Then, update the URL. When the collection is automatic (such as vendors and types collections), tags must be added
        // within a constraint query parameter, otherwise they must be appended to the path
        if (this.options['isAutomatic']) {
          if (this.currentTags.length === 0) {
            this.currentUrl.searchParams.delete('constraint');
          } else {
            this.currentUrl.searchParams.set('constraint', this.currentTags.join('+'));
          }
        } else {
          var tagPath = this.currentTags.join('+'),
              currentPathName = this.currentUrl.pathname.substr(-1) === '/' ? this.currentUrl.pathname.substr(0, this.currentUrl.pathname.length - 1) : this.currentUrl.pathname;

          if (hadTags) {
            var pathParts = currentPathName.split('/');
            pathParts.pop();

            this.currentUrl.pathname = pathParts.join('/') + '/' + tagPath;
          } else {
            this.currentUrl.pathname = currentPathName + '/' + tagPath;
          }
        }
      }

      /**
       * Reload all products from the current URL
       *
       * @private
       */

    }, {
      key: '_reload',
      value: function _reload(pushState) {
        var _this42 = this;

        // Then, we replace the URL
        if (pushState) {
          window.history.pushState({ path: this.currentUrl.toString() }, '', this.currentUrl.toString());
        }

        document.dispatchEvent(new CustomEvent('theme:loading:start'));

        // We notify the mobile collection drawer that it has changed
        this.mobileFilterDrawer._filtersHaveChanged(this.currentTags);

        // We scroll to the top
        var computedStyles = window.getComputedStyle(document.documentElement);

        // To load the content we use the newly introduced "Sections API", which also to get data much more efficiently
        var sectionUrl = '';

        if (this.currentUrl.search) {
          sectionUrl = this.currentUrl.pathname + '/' + this.currentUrl.search + '&section_id=' + this.element.getAttribute('data-section-id');
        } else {
          sectionUrl = this.currentUrl.pathname + '?section_id=' + this.element.getAttribute('data-section-id');
        }

        return fetch(sectionUrl, {
          credentials: 'same-origin',
          method: 'GET'
        }).then(function (response) {
          response.text().then(function (content) {
            var tempElement = document.createElement('div');
            tempElement.innerHTML = content;

            _this42.element.querySelector('.collection__dynamic-part').innerHTML = tempElement.querySelector('.collection__dynamic-part').innerHTML;

            var activeFilters = _this42.element.querySelector('.collection__active-filters');

            // A given collection may not have any filters
            if (activeFilters) {
              activeFilters.innerHTML = tempElement.querySelector('.collection__active-filters').innerHTML;
            }

            if (window.theme.currencyConversionEnabled) {
              __WEBPACK_IMPORTED_MODULE_1__helper_Currency__["default"].convertAll(_this42.element);
            }

            // Reload the Shopify Review badges
            if (window.SPR) {
              window.SPR.initDomEls();
              window.SPR.loadBadges();
            }

            // Reload the swatches
            _this42.productItemColorSwatch.recalculateSwatches();

            var elementOffset = _this42.element.querySelector('.collection').getBoundingClientRect().top - 25 - parseInt(computedStyles.getPropertyValue('--header-is-sticky')) * parseInt(computedStyles.getPropertyValue('--header-height'));

            if (elementOffset < 0) {
              window.scrollBy({ top: elementOffset, behavior: 'smooth' });
            }

            // Finally, we scroll to the element

            document.dispatchEvent(new CustomEvent('theme:loading:end'));
          });
        });
      }

      /**
       * ---------------------------------------------------------------------------------------------------
       * SEARCH PAGE SPECIFIC METHOD
       * ---------------------------------------------------------------------------------------------------
       */

    }, {
      key: '_loadContentResults',
      value: function _loadContentResults() {
        var _this43 = this;

        var currentUrl = new URL(window.location.href);

        fetch(window.theme.localeRootUrl + '/search?view=content&q=' + currentUrl.searchParams.get('q') + '&type=' + window.theme.searchMode.replace('product,', ''), {
          credentials: 'same-origin'
        }).then(function (response) {
          response.text().then(function (content) {
            var linkSearchResults = _this43.element.querySelector('.link-search-results');

            if (linkSearchResults && content.trim() !== '') {
              linkSearchResults.innerHTML = content;
              linkSearchResults.style.display = 'block';
            }
          });
        });
      }

      /**
       * ---------------------------------------------------------------------------------------------------
       * INTERNAL CODE THAT HANDLE PRODUCT ADD TO CART
       * ---------------------------------------------------------------------------------------------------
       */

    }, {
      key: '_addToCart',
      value: function _addToCart(event, target) {
        var _this44 = this;

        if (window.theme.cartType === 'page') {
          return; // When using a cart type of page, we just simply redirect to the cart page
        }

        event.preventDefault(); // Prevent form to be submitted
        event.stopPropagation();

        // First, we switch the status of the button
        target.setAttribute('disabled', 'disabled');
        document.dispatchEvent(new CustomEvent('theme:loading:start'));

        // Then we add the product in Ajax
        var formElement = target.closest('form[action*="/cart/add"]');

        fetch(window.theme.localeRootUrl + '/cart/add.js', {
          body: JSON.stringify(__WEBPACK_IMPORTED_MODULE_2__helper_Form__["default"].serialize(formElement)),
          credentials: 'same-origin',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest' // This is needed as currently there is a bug in Shopify that assumes this header
          }
        }).then(function (response) {
          target.removeAttribute('disabled');

          if (response.ok) {
            // We simply trigger an event so the mini-cart can re-render
            _this44.element.dispatchEvent(new CustomEvent('product:added', {
              bubbles: true,
              detail: {
                variant: null,
                quantity: parseInt(formElement.querySelector('[name="quantity"]').value)
              }
            }));
          } else {
            document.dispatchEvent(new CustomEvent('theme:loading:end'));
          }
        });

        event.preventDefault();
      }
    }]);

    return CollectionSection;
  }();
  /* harmony export (immutable) */

  __webpack_exports__["default"] = CollectionSection;

  /***/
},
/* 39 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__helper_Form__ = __webpack_require__(2);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__helper_Responsive__ = __webpack_require__(0);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__components_ProductItemColorSwatch__ = __webpack_require__(6);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__ProductSection__ = __webpack_require__(4);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__helper_Currency__ = __webpack_require__(1);

  var FeaturedCollectionSection = function () {
    function FeaturedCollectionSection(element) {
      _classCallCheck(this, FeaturedCollectionSection);

      this.element = element;
      this.delegateElement = new domDelegate.Delegate(this.element);
      this.options = JSON.parse(this.element.getAttribute('data-section-settings'));

      if (!this.options['stackable']) {
        this.flickityInstance = new Flickity(this.element.querySelector('.product-list'), {
          watchCSS: true,
          pageDots: false,
          prevNextButtons: true,
          contain: true,
          groupCells: true,
          cellAlign: 'left',
          draggable: !window.matchMedia('(-moz-touch-enabled: 0), (hover: hover)').matches
        });
      }

      if (Shopify.designMode && window.SPR) {
        window.SPR.initDomEls();
        window.SPR.loadBadges();
      }

      this.productItemColorSwatch = new __WEBPACK_IMPORTED_MODULE_2__components_ProductItemColorSwatch__["default"](this.element);

      this._fixSafari();
      this._attachListeners();
    }

    _createClass(FeaturedCollectionSection, [{
      key: 'onUnload',
      value: function onUnload() {
        if (!this.options['stackable']) {
          this.flickityInstance.destroy();
        }

        window.removeEventListener('resize', this._fixSafariListener);
        this.delegateElement.off('change');

        this.productItemColorSwatch.destroy();
      }
    }, {
      key: '_attachListeners',
      value: function _attachListeners() {
        this._fixSafariListener = this._fixSafari.bind(this);

        window.addEventListener('resize', this._fixSafariListener);
        this.delegateElement.on('click', '[data-action="add-to-cart"]', this._addToCart.bind(this));
        this.delegateElement.on('click', '[data-secondary-action="open-quick-view"]', this._openQuickView.bind(this));
      }

      /**
       * On Safari 11.1 and lower, the browser incorrectly calculate the height of flex and grid items due to a bug
       * on how padding percentage is calculated (that we use for allocating image space). This is solved in Safari 11.1 and higher.
       *
       * For those browsers, we fix that in JavaScript by setting the height directly for each aspect ratio image
       *
       * @private
       */

    }, {
      key: '_fixSafari',
      value: function _fixSafari() {
        var userAgent = window.navigator.userAgent.toLowerCase();

        if (userAgent.includes('safari') && (userAgent.includes('version/10.1') || userAgent.includes('version/10.3') || userAgent.includes('version/11.0'))) {
          var isPhone = __WEBPACK_IMPORTED_MODULE_1__helper_Responsive__["default"].matchesBreakpoint('phone');

          this.element.querySelectorAll('.product-item__image-wrapper .aspect-ratio, .product-item__image-wrapper .placeholder-svg').forEach(function (image) {
            if (isPhone) {
              image.parentNode.style.height = null;
            } else {
              image.parentNode.style.height = image.clientHeight + 'px';
            }
          });
        }
      }
    }, {
      key: '_openQuickView',
      value: function _openQuickView(event, target) {
        var productUrl = new URL('' + window.location.origin + target.getAttribute('data-product-url'));

        // If we are on mobile or tablet, we redirect to product page directly
        if (__WEBPACK_IMPORTED_MODULE_1__helper_Responsive__["default"].matchesBreakpoint('phone') || __WEBPACK_IMPORTED_MODULE_1__helper_Responsive__["default"].matchesBreakpoint('tablet')) {
          window.location.href = productUrl.href;
          return false;
        }

        var modal = document.getElementById(target.getAttribute('aria-controls'));
        modal.classList.add('is-loading');

        productUrl.searchParams.set('view', 'quick-view');

        fetch(productUrl.href, {
          credentials: 'same-origin',
          method: 'GET'
        }).then(function (response) {
          response.text().then(function (content) {
            modal.querySelector('.modal__inner').innerHTML = content;
            modal.classList.remove('is-loading');

            // Register a new section to power the JS
            var modalProductSection = new __WEBPACK_IMPORTED_MODULE_3__ProductSection__["default"](modal.querySelector('[data-section-type="product"]'));

            if (window.theme.currencyConversionEnabled) {
              __WEBPACK_IMPORTED_MODULE_4__helper_Currency__["default"].convertAll(modal);
            }

            // We set a listener so we can cleanup on close
            var doCleanUp = function doCleanUp() {
              modalProductSection.onUnload();
              modal.removeEventListener('modal:closed', doCleanUp);
            };

            modal.addEventListener('modal:closed', doCleanUp);
          });
        });
      }

      /**
       * ---------------------------------------------------------------------------------------------------
       * INTERNAL CODE THAT HANDLE PRODUCT ADD TO CART
       * ---------------------------------------------------------------------------------------------------
       */

    }, {
      key: '_addToCart',
      value: function _addToCart(event, target) {
        var _this45 = this;

        if (window.theme.cartType === 'page') {
          return; // When using a cart type of page, we just simply redirect to the cart page
        }

        event.preventDefault(); // Prevent form to be submitted
        event.stopPropagation();

        // First, we switch the status of the button
        target.setAttribute('disabled', 'disabled');
        document.dispatchEvent(new CustomEvent('theme:loading:start'));

        // Then we add the product in Ajax
        var formElement = target.closest('form[action*="/cart/add"]');

        fetch(window.theme.localeRootUrl + '/cart/add.js', {
          body: JSON.stringify(__WEBPACK_IMPORTED_MODULE_0__helper_Form__["default"].serialize(formElement)),
          credentials: 'same-origin',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest' // This is needed as currently there is a bug in Shopify that assumes this header
          }
        }).then(function (response) {
          target.removeAttribute('disabled');

          if (response.ok) {
            // We simply trigger an event so the mini-cart can re-render
            _this45.element.dispatchEvent(new CustomEvent('product:added', {
              bubbles: true,
              detail: {
                variant: null,
                quantity: parseInt(formElement.querySelector('[name="quantity"]').value)
              }
            }));
          } else {
            document.dispatchEvent(new CustomEvent('theme:loading:end'));
          }
        });

        event.preventDefault();
      }
    }]);

    return FeaturedCollectionSection;
  }();
  /* harmony export (immutable) */

  __webpack_exports__["default"] = FeaturedCollectionSection;

  /***/
},
/* 40 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__helper_Responsive__ = __webpack_require__(0);

  var FooterSection = function () {
    function FooterSection(element) {
      _classCallCheck(this, FooterSection);

      this.element = element;
      this.domDelegate = new domDelegate.Delegate(this.element);

      this.cookieBarElement = this.element.querySelector('.cookie-bar');

      if (this.cookieBarElement) {
        this._setupCookieBar();
      }

      this._setupCollapsibles();
      this._attachListeners();
    }

    _createClass(FooterSection, [{
      key: 'onUnload',
      value: function onUnload() {
        window.removeEventListener('resize', this._setupCollapsiblesListener);
        this.domDelegate.off();
      }
    }, {
      key: 'onSelect',
      value: function onSelect() {
        if (this.cookieBarElement) {
          this.cookieBarElement.setAttribute('aria-hidden', 'false');
        }
      }
    }, {
      key: 'onDeselect',
      value: function onDeselect() {
        if (this.cookieBarElement) {
          this.cookieBarElement.setAttribute('aria-hidden', 'true');
        }
      }
    }, {
      key: '_attachListeners',
      value: function _attachListeners() {
        this._setupCollapsiblesListener = this._setupCollapsibles.bind(this);

        window.addEventListener('resize', this._setupCollapsiblesListener);
        this.domDelegate.on('click', '[data-action="accept-terms"]', this._acceptCookieBarTerms.bind(this));
      }

      /**
       * On mobile, some block items are collapsed, so we must slightly edit their HTML
       */

    }, {
      key: '_setupCollapsibles',
      value: function _setupCollapsibles() {
        var collapsibleToggles = this.element.querySelectorAll('[data-action="toggle-collapsible"]'),
            isPhone = __WEBPACK_IMPORTED_MODULE_0__helper_Responsive__["default"].matchesBreakpoint('phone');

        collapsibleToggles.forEach(function (collapsibleToggle) {
          if (isPhone) {
            collapsibleToggle.removeAttribute('disabled');
          } else {
            collapsibleToggle.setAttribute('disabled', 'disabled');
            document.getElementById(collapsibleToggle.getAttribute('aria-controls')).style.height = '';
          }
        });
      }
    }, {
      key: '_setupCookieBar',
      value: function _setupCookieBar() {
        // We check if we should make it visible
        try {
          if (localStorage.getItem('cookieWasAccepted') === null) {
            this.cookieBarElement.setAttribute('aria-hidden', 'false');
          }
        } catch (exception) {
          // Some browser may throw an exception when trying to access the local storage in private mode for instance, so we just ignore it
        }
      }
    }, {
      key: '_acceptCookieBarTerms',
      value: function _acceptCookieBarTerms() {
        // We close the cookie bar and we set a value in local storage to not show it again
        this.cookieBarElement.setAttribute('aria-hidden', 'true');

        try {
          localStorage.setItem('cookieWasAccepted', 'true');
        } catch (exception) {}
      }
    }]);

    return FooterSection;
  }();
  /* harmony export (immutable) */

  __webpack_exports__["default"] = FooterSection;

  /***/
},
/* 41 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

  var GiftCardSection = function () {
    function GiftCardSection(container) {
      _classCallCheck(this, GiftCardSection);

      this.element = container;
      this.delegateElement = new domDelegate.Delegate(this.element);

      this._createQrCode();
      this._attachListeners();
    }

    _createClass(GiftCardSection, [{
      key: 'onUnload',
      value: function onUnload() {
        this.delegateElement.off();
      }
    }, {
      key: '_createQrCode',
      value: function _createQrCode() {
        var qrCodeElements = document.querySelectorAll('.gift-card__qr');

        qrCodeElements.forEach(function (qrCodeElement) {
          new QRCode(qrCodeElement, {
            text: qrCodeElement.getAttribute('data-identifier'),
            width: 200,
            height: 200
          });
        });
      }
    }, {
      key: '_attachListeners',
      value: function _attachListeners() {
        this.delegateElement.on('click', '[data-action="print"]', this._print.bind(this));
        this.delegateElement.on('click', '[data-action="select-code"]', this._selectCode.bind(this));
      }
    }, {
      key: '_print',
      value: function _print() {
        window.print();
      }
    }, {
      key: '_selectCode',
      value: function _selectCode(event, element) {
        element.select();
      }
    }]);

    return GiftCardSection;
  }();
  /* harmony export (immutable) */

  __webpack_exports__["default"] = GiftCardSection;

  /***/
},
/* 42 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__components_DesktopNavigation__ = __webpack_require__(13);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__components_MobileNavigation__ = __webpack_require__(15);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__components_Cart__ = __webpack_require__(11);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__components_SearchBar__ = __webpack_require__(29);

  var HeaderSection = function () {
    function HeaderSection(element) {
      _classCallCheck(this, HeaderSection);

      this.element = element;
      this.delegateElement = new domDelegate.Delegate(this.element);
      this.options = JSON.parse(this.element.getAttribute('data-section-settings'));

      this.searchBar = new __WEBPACK_IMPORTED_MODULE_3__components_SearchBar__["default"](this.element.querySelector('.header__search-bar-wrapper'));
      this.cart = new __WEBPACK_IMPORTED_MODULE_2__components_Cart__["default"](this.element.querySelector('.header__action-item--cart'), { useStickyHeader: this.options['useStickyHeader'] });

      // We create the desktop and mobile navigation conditionally as we've found that some merchants may have no menu
      var desktopNavigationElement = this.element.querySelector(this.options['navigationLayout'] === 'inline' ? '.nav-bar' : '.header__desktop-nav');
      if (desktopNavigationElement) {
        this.desktopNavigation = new __WEBPACK_IMPORTED_MODULE_0__components_DesktopNavigation__["default"](desktopNavigationElement, this.options['navigationLayout'], this.options['desktopOpenTrigger']);
      }

      var mobileNavigationElement = this.element.querySelector('.header__mobile-nav');
      if (mobileNavigationElement) {
        this.mobileNavigation = new __WEBPACK_IMPORTED_MODULE_1__components_MobileNavigation__["default"](mobileNavigationElement);
      }

      this._setupCssVariables();
      this._attachListeners();
    }

    _createClass(HeaderSection, [{
      key: 'onUnload',
      value: function onUnload() {
        this.searchBar.destroy();
        this.cart.destroy();

        if (this.desktopNavigation) {
          this.desktopNavigation.destroy();
        }

        if (this.mobileNavigation) {
          this.mobileNavigation.destroy();
        }

        window.removeEventListener('resize', this._setupCssVariablesListener);
      }
    }, {
      key: 'onBlockSelect',
      value: function onBlockSelect(event) {
        if (this.desktopNavigation) {
          this.desktopNavigation.onBlockSelect(event);
        }
      }
    }, {
      key: 'onBlockDeselect',
      value: function onBlockDeselect(event) {
        if (this.desktopNavigation) {
          this.desktopNavigation.onBlockDeselect(event);
        }
      }
    }, {
      key: '_attachListeners',
      value: function _attachListeners() {
        this._setupCssVariablesListener = this._setupCssVariables.bind(this);
        window.addEventListener('resize', this._setupCssVariablesListener);

        this.delegateElement.on('click', '[data-action="toggle-search"]', this._toggleMobileSearch.bind(this));
      }

      /**
       * We have some positioning that is based on the CSS variables, so we must make sure to update them whenever
       * the section is reloaded into the editor
       */

    }, {
      key: '_setupCssVariables',
      value: function _setupCssVariables() {
        document.documentElement.style.setProperty('--header-height', this.element.parentNode.clientHeight + 'px');
      }

      /**
       * Toggle the mobile search
       */

    }, {
      key: '_toggleMobileSearch',
      value: function _toggleMobileSearch(event) {
        this.searchBar.toggleMobileSearch();
        event.preventDefault();
      }
    }]);

    return HeaderSection;
  }();
  /* harmony export (immutable) */

  __webpack_exports__["default"] = HeaderSection;

  /***/
},
/* 43 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

  var LoginSection = function () {
    function LoginSection(element) {
      _classCallCheck(this, LoginSection);

      this.element = element;
      this.domDelegate = new domDelegate.Delegate(this.element);

      this.customerLoginForm = this.element.querySelector('#customer_login');
      this.recoverPasswordForm = this.element.querySelector('#recover_customer_password');

      this.domDelegate.on('click', '[data-action="toggle-login-form"]', this._showRecoverPassword.bind(this));
    }

    _createClass(LoginSection, [{
      key: '_showRecoverPassword',
      value: function _showRecoverPassword() {
        var isLoginActive = this.customerLoginForm.style.display === 'block';

        if (isLoginActive) {
          this.customerLoginForm.style.display = 'none';
          this.recoverPasswordForm.style.display = 'block';
        } else {
          this.customerLoginForm.style.display = 'block';
          this.recoverPasswordForm.style.display = 'none';
        }
      }
    }]);

    return LoginSection;
  }();
  /* harmony export (immutable) */

  __webpack_exports__["default"] = LoginSection;

  /***/
},
/* 44 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__helper_Dom__ = __webpack_require__(3);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__helper_Responsive__ = __webpack_require__(0);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__helper_Animation__ = __webpack_require__(5);

  var MapSection = function () {
    function MapSection(element) {
      _classCallCheck(this, MapSection);

      this.element = element;
      this.delegateElement = new domDelegate.Delegate(this.element);
      this.options = JSON.parse(element.getAttribute('data-section-settings'));

      this.mapPositions = [];
      this.desktopMarkers = [];
      this.desktopMapElement = null;
      this.mobileMarkers = [];
      this.mobileMapElements = [];

      if (this.options['apiKey'] && this.options['mapAddresses'].length > 0) {
        this._loadScript().then(this._initMaps.bind(this));
      }

      this._attachListeners();
    }

    _createClass(MapSection, [{
      key: 'onUnload',
      value: function onUnload() {
        this.delegateElement.off('click');

        if (this.options['apiKey'] && this.options['mapAddresses'].length > 0) {
          google.maps.event.clearInstanceListeners(window);
        }
      }
    }, {
      key: 'onBlockSelect',
      value: function onBlockSelect(event) {
        this._showStore(event.target);
      }
    }, {
      key: '_attachListeners',
      value: function _attachListeners() {
        var _this46 = this;

        this.delegateElement.on('click', '[data-action="toggle-store"]', function (event, target) {
          _this46._showStore(target.closest('.map__store-item'));
        });
      }
    }, {
      key: '_showStore',
      value: function _showStore(storeItem) {
        var _this47 = this;

        var toggleButton = storeItem.querySelector('[data-action="toggle-store"]');

        // If already open, we do nothing unless we are on mobile (as we need at least one store visible on desktop)
        if (__WEBPACK_IMPORTED_MODULE_1__helper_Responsive__["default"].getCurrentBreakpoint() !== 'phone' && toggleButton.getAttribute('aria-expanded') === 'true') {
          return;
        }

        // Otherwise, we activate it
        if (toggleButton.getAttribute('aria-expanded') === 'true') {
          toggleButton.setAttribute('aria-expanded', 'false');
          __WEBPACK_IMPORTED_MODULE_2__helper_Animation__["default"].slideUp(storeItem.querySelector('.map__store-collapsible'));
        } else {
          toggleButton.setAttribute('aria-expanded', 'true');
          __WEBPACK_IMPORTED_MODULE_2__helper_Animation__["default"].slideDown(storeItem.querySelector('.map__store-collapsible'));
        }

        // Finally, we close the other ones (if any is open)
        __WEBPACK_IMPORTED_MODULE_0__helper_Dom__["default"].getSiblings(storeItem).forEach(function (storeItemToClose) {
          storeItemToClose.querySelector('[data-action="toggle-store"]').setAttribute('aria-expanded', 'false');
          __WEBPACK_IMPORTED_MODULE_2__helper_Animation__["default"].slideUp(storeItemToClose.querySelector('.map__store-collapsible'));
        });

        // We need to move the map to the new center, and we need to change its color to make it active
        var storeIndex = parseInt(storeItem.getAttribute('data-store-index'));
        this.desktopMapElement.panTo(this.mapPositions[storeIndex]);

        this.desktopMarkers.forEach(function (marker, index) {
          marker.setMap(_this47.desktopMapElement);

          if (index === storeIndex) {
            marker.icon.fillColor = _this47.options['markerActiveColor'];
          } else {
            marker.icon.fillColor = _this47.options['markerColor'];
          }
        });
      }
    }, {
      key: '_loadScript',
      value: function _loadScript() {
        var _this48 = this;

        return new Promise(function (resolve, reject) {
          var script = document.createElement('script');
          document.body.appendChild(script);
          script.onload = resolve;
          script.onerror = reject;
          script.async = true;
          script.src = 'https://maps.googleapis.com/maps/api/js?key=' + _this48.options['apiKey'];
        });
      }
    }, {
      key: '_initMaps',
      value: function _initMaps() {
        var _this49 = this;

        // First, we gather all the maps (desktop and mobile)
        var mapOptions = {
          zoom: this.options['zoom'],
          draggable: this.options['draggableMap'],
          clickableIcons: false,
          scrollwheel: this.options['draggableMap'],
          disableDoubleClickZoom: true,
          disableDefaultUI: !this.options['showMapControls'],
          styles: JSON.parse(this.element.querySelector('[data-gmap-style]').innerHTML)
        };

        this.desktopMapElement = new google.maps.Map(this.element.querySelector('.map__map-container--desktop .map__gmap'), mapOptions);
        this.mobileMapElements = [];

        this.element.querySelectorAll('.map__map-container--mobile .map__gmap').forEach(function (item, index) {
          _this49.mobileMapElements[index] = new google.maps.Map(item, mapOptions);
        });

        // Then we geocode all addresses
        this._geocodeAddresses();

        // Make sure we attach the listeners so that it's properly resized
        google.maps.event.addDomListener(window, 'resize', function () {
          var desktopCenter = _this49.desktopMapElement.getCenter();
          google.maps.event.trigger(_this49.desktopMapElement, 'resize');
          _this49.desktopMapElement.setCenter(desktopCenter);

          _this49.mobileMapElements.forEach(function (mobileMap) {
            var mobileCenter = mobileMap.getCenter();
            google.maps.event.trigger(mobileMap, 'resize');
            mobileMap.setCenter(mobileCenter);
          });
        });
      }
    }, {
      key: '_onMarkerClicked',
      value: function _onMarkerClicked(address) {
        window.open('https://www.google.com/maps/search/?api=1&query=' + address, '_blank');
      }
    }, {
      key: '_geocodeAddresses',
      value: function _geocodeAddresses() {
        var _this50 = this;

        // Then, we geocode all the addresses, and place them on the map
        var geocoder = new google.maps.Geocoder();

        this.options['mapAddresses'].forEach(function (address, index) {
          geocoder.geocode({ address: address }, function (results, status) {
            if (status !== google.maps.GeocoderStatus.OK) {
              if (Shopify.designMode) {}
            } else {
              var position = results[0].geometry.location;

              _this50.mapPositions[index] = position;

              // The desktop map holds all the markers, so we add it to the desktop global map.
              _this50.desktopMarkers[index] = new google.maps.Marker({
                map: index === 0 ? _this50.desktopMapElement : null,
                position: position,
                icon: {
                  path: 'M12.5,0 C6.388889,0 0,4.7304348 0,12.5217391 C0,19.8956522 11.111111,31.1652174 11.527778,31.5826087 C11.805556,31.8608696 12.083333,32 12.5,32 C12.916667,32 13.194444,31.8608696 13.472222,31.5826087 C13.888889,31.1652174 25,19.8956522 25,12.5217391 C25,4.7304348 18.611111,0 12.5,0 Z M12,16 C9.733333,16 8,14.2666667 8,12 C8,9.7333333 9.733333,8 12,8 C14.266667,8 16,9.7333333 16,12 C16,14.2666667 14.266667,16 12,16 Z',
                  fillColor: index === 0 ? _this50.options['markerActiveColor'] : _this50.options['markerColor'],
                  fillOpacity: 1,
                  anchor: new google.maps.Point(12, 30),
                  strokeWeight: 0
                }
              });

              // We then add it on the corresponding mobile map
              _this50.mobileMarkers[index] = new google.maps.Marker({
                map: _this50.mobileMapElements[index],
                position: position,
                icon: {
                  path: 'M12.5,0 C6.388889,0 0,4.7304348 0,12.5217391 C0,19.8956522 11.111111,31.1652174 11.527778,31.5826087 C11.805556,31.8608696 12.083333,32 12.5,32 C12.916667,32 13.194444,31.8608696 13.472222,31.5826087 C13.888889,31.1652174 25,19.8956522 25,12.5217391 C25,4.7304348 18.611111,0 12.5,0 Z M12,16 C9.733333,16 8,14.2666667 8,12 C8,9.7333333 9.733333,8 12,8 C14.266667,8 16,9.7333333 16,12 C16,14.2666667 14.266667,16 12,16 Z',
                  fillColor: _this50.options['markerActiveColor'],
                  fillOpacity: 1,
                  anchor: new google.maps.Point(12, 30),
                  strokeWeight: 0
                }
              });

              _this50.desktopMarkers[index].addListener('click', _this50._onMarkerClicked.bind(_this50, address));
              _this50.mobileMarkers[index].addListener('click', _this50._onMarkerClicked.bind(_this50, address));

              if (index === 0) {
                _this50.desktopMapElement.setCenter(position);
              }

              _this50.mobileMapElements[index].setCenter(position);
            }
          });
        });
      }
    }]);

    return MapSection;
  }();
  /* harmony export (immutable) */

  __webpack_exports__["default"] = MapSection;

  /***/
},
/* 45 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

  var MinimalHeaderSection = function () {
    function MinimalHeaderSection(element) {
      _classCallCheck(this, MinimalHeaderSection);

      this.element = element;

      this._setupCssVariables();
      this._attachListeners();
    }

    _createClass(MinimalHeaderSection, [{
      key: 'onUnload',
      value: function onUnload() {
        window.removeEventListener('resize', this._setupCssVariablesListener);
      }
    }, {
      key: '_attachListeners',
      value: function _attachListeners() {
        this._setupCssVariablesListener = this._setupCssVariables.bind(this);
        window.addEventListener('resize', this._setupCssVariablesListener);
      }

      /**
       * We have some positioning that is based on the CSS variables, so we must make sure to update them whenever
       * the section is reloaded into the editor
       */

    }, {
      key: '_setupCssVariables',
      value: function _setupCssVariables() {
        document.documentElement.style.setProperty('--header-height', this.element.parentNode.clientHeight + 'px');
      }
    }]);

    return MinimalHeaderSection;
  }();
  /* harmony export (immutable) */

  __webpack_exports__["default"] = MinimalHeaderSection;

  /***/
},
/* 46 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__components_NewsletterPopup__ = __webpack_require__(16);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__components_ExitPopup__ = __webpack_require__(14);

  /**
   * This class handles both the newsletter popup and exit popup
   */

  var PopupsSection = function () {
    function PopupsSection(element) {
      var _this51 = this;

      _classCallCheck(this, PopupsSection);

      element.querySelectorAll('[data-popup-type]').forEach(function (popup) {
        if (popup.getAttribute('data-popup-type') === 'exit') {
          _this51.exitPopup = new __WEBPACK_IMPORTED_MODULE_1__components_ExitPopup__["default"](popup);
        } else if (popup.getAttribute('data-popup-type') === 'newsletter') {
          _this51.newsletterPopup = new __WEBPACK_IMPORTED_MODULE_0__components_NewsletterPopup__["default"](popup);
        }
      });
    }

    _createClass(PopupsSection, [{
      key: 'onUnload',
      value: function onUnload() {
        if (this.exitPopup) {
          this.exitPopup.destroy();
        }

        if (this.newsletterPopup) {
          this.newsletterPopup.destroy();
        }
      }
    }, {
      key: 'onBlockSelect',
      value: function onBlockSelect(event) {
        if (event.target.getAttribute('data-popup-type') === 'exit' && this.exitPopup) {
          this.exitPopup._openPopup();
        } else if (event.target.getAttribute('data-popup-type') === 'newsletter' && this.newsletterPopup) {
          this.newsletterPopup._openPopup();
        }
      }
    }, {
      key: 'onBlockDeselect',
      value: function onBlockDeselect() {
        if (this.exitPopup) {
          this.exitPopup._closePopup();
        }

        if (this.newsletterPopup) {
          this.newsletterPopup._closePopup();
        }
      }
    }]);

    return PopupsSection;
  }();
  /* harmony export (immutable) */

  __webpack_exports__["default"] = PopupsSection;

  /***/
},
/* 47 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__helper_Responsive__ = __webpack_require__(0);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__components_ProductItemColorSwatch__ = __webpack_require__(6);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__helper_Currency__ = __webpack_require__(1);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__ProductSection__ = __webpack_require__(4);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__helper_Form__ = __webpack_require__(2);

  var ProductRecommendationsSection = function () {
    function ProductRecommendationsSection(element) {
      _classCallCheck(this, ProductRecommendationsSection);

      this.element = element;
      this.delegateElement = new domDelegate.Delegate(this.element);
      this.options = JSON.parse(this.element.getAttribute('data-section-settings'));

      if (this.options['useRecommendations']) {
        this._loadRecommendations().then(this._createSlideshow.bind(this));
      } else {
        this._createSlideshow();
      }

      this.productItemColorSwatch = new __WEBPACK_IMPORTED_MODULE_1__components_ProductItemColorSwatch__["default"](this.element);

      this._fixSafari();
      this._attachListeners();
    }

    _createClass(ProductRecommendationsSection, [{
      key: 'onUnload',
      value: function onUnload() {
        if (!this.options['stackable']) {
          this.flickityInstance.destroy();
        }

        window.removeEventListener('resize', this._fixSafariListener);
        this.delegateElement.off('change');

        this.productItemColorSwatch.destroy();
      }
    }, {
      key: '_attachListeners',
      value: function _attachListeners() {
        this._fixSafariListener = this._fixSafari.bind(this);

        window.addEventListener('resize', this._fixSafariListener);
        this.delegateElement.on('click', '[data-action="add-to-cart"]', this._addToCart.bind(this));
        this.delegateElement.on('click', '[data-secondary-action="open-quick-view"]', this._openQuickView.bind(this));
      }

      /**
       * On Safari 11.1 and lower, the browser incorrectly calculate the height of flex and grid items due to a bug
       * on how padding percentage is calculated (that we use for allocating image space). This is solved in Safari 11.1 and higher.
       *
       * For those browsers, we fix that in JavaScript by setting the height directly for each aspect ratio image
       *
       * @private
       */

    }, {
      key: '_fixSafari',
      value: function _fixSafari() {
        var userAgent = window.navigator.userAgent.toLowerCase();

        if (userAgent.includes('safari') && (userAgent.includes('version/10.1') || userAgent.includes('version/10.3') || userAgent.includes('version/11.0'))) {
          var isPhone = __WEBPACK_IMPORTED_MODULE_0__helper_Responsive__["default"].matchesBreakpoint('phone');

          this.element.querySelectorAll('.product-item__image-wrapper .aspect-ratio, .product-item__image-wrapper .placeholder-svg').forEach(function (image) {
            if (isPhone) {
              image.parentNode.style.height = null;
            } else {
              image.parentNode.style.height = image.clientHeight + 'px';
            }
          });
        }
      }

      /**
       * This section uses the native product recommendations feature of Shopify (https://help.shopify.com/en/themes/liquid/objects/recommendations)
       */

    }, {
      key: '_loadRecommendations',
      value: function _loadRecommendations() {
        var _this52 = this;

        var url = '/recommendations/products?section_id=product-recommendations&product_id=' + this.options['productId'] + '&limit=' + this.options['recommendationsCount'];

        return fetch(url).then(function (response) {
          return response.text().then(function (content) {
            var container = document.createElement('div');
            container.innerHTML = content;

            _this52.element.querySelector('.product-recommendations').innerHTML = container.querySelector('.product-recommendations').innerHTML;
            _this52.productItemColorSwatch.recalculateSwatches();

            // Convert any amount (if applicable)
            if (window.theme.currencyConversionEnabled) {
              __WEBPACK_IMPORTED_MODULE_2__helper_Currency__["default"].convertAll(_this52.element);
            }

            if (Shopify.designMode && window.SPR) {
              window.SPR.initDomEls();
              window.SPR.loadBadges();
            }
          });
        });
      }
    }, {
      key: '_createSlideshow',
      value: function _createSlideshow() {
        if (!this.options['stackable']) {
          this.flickityInstance = new Flickity(this.element.querySelector('.product-list'), {
            watchCSS: true,
            pageDots: false,
            prevNextButtons: true,
            contain: true,
            groupCells: true,
            cellAlign: 'left',
            draggable: !window.matchMedia('(-moz-touch-enabled: 0), (hover: hover)').matches
          });
        }

        if (Shopify.designMode && window.SPR) {
          window.SPR.initDomEls();
          window.SPR.loadBadges();
        }
      }
    }, {
      key: '_openQuickView',
      value: function _openQuickView(event, target) {
        var productUrl = new URL('' + window.location.origin + target.getAttribute('data-product-url'));

        // If we are on mobile or tablet, we redirect to product page directly
        if (__WEBPACK_IMPORTED_MODULE_0__helper_Responsive__["default"].matchesBreakpoint('phone') || __WEBPACK_IMPORTED_MODULE_0__helper_Responsive__["default"].matchesBreakpoint('tablet')) {
          window.location.href = productUrl.href;
          return false;
        }

        var modal = document.getElementById(target.getAttribute('aria-controls'));
        modal.classList.add('is-loading');

        productUrl.searchParams.set('view', 'quick-view');

        fetch(productUrl.href, {
          credentials: 'same-origin',
          method: 'GET'
        }).then(function (response) {
          response.text().then(function (content) {
            modal.querySelector('.modal__inner').innerHTML = content;
            modal.classList.remove('is-loading');

            // Register a new section to power the JS
            var modalProductSection = new __WEBPACK_IMPORTED_MODULE_3__ProductSection__["default"](modal.querySelector('[data-section-type="product"]'));

            if (window.theme.currencyConversionEnabled) {
              __WEBPACK_IMPORTED_MODULE_2__helper_Currency__["default"].convertAll(modal);
            }

            // We set a listener so we can cleanup on close
            var doCleanUp = function doCleanUp() {
              modalProductSection.onUnload();
              modal.removeEventListener('modal:closed', doCleanUp);
            };

            modal.addEventListener('modal:closed', doCleanUp);
          });
        });
      }

      /**
       * ---------------------------------------------------------------------------------------------------
       * INTERNAL CODE THAT HANDLE PRODUCT ADD TO CART
       * ---------------------------------------------------------------------------------------------------
       */

    }, {
      key: '_addToCart',
      value: function _addToCart(event, target) {
        var _this53 = this;

        if (window.theme.cartType === 'page') {
          return; // When using a cart type of page, we just simply redirect to the cart page
        }

        event.preventDefault(); // Prevent form to be submitted
        event.stopPropagation();

        // First, we switch the status of the button
        target.setAttribute('disabled', 'disabled');
        document.dispatchEvent(new CustomEvent('theme:loading:start'));

        // Then we add the product in Ajax
        var formElement = target.closest('form[action*="/cart/add"]');

        fetch(window.theme.localeRootUrl + '/cart/add.js', {
          body: JSON.stringify(__WEBPACK_IMPORTED_MODULE_4__helper_Form__["default"].serialize(formElement)),
          credentials: 'same-origin',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest' // This is needed as currently there is a bug in Shopify that assumes this header
          }
        }).then(function (response) {
          target.removeAttribute('disabled');

          if (response.ok) {
            // We simply trigger an event so the mini-cart can re-render
            _this53.element.dispatchEvent(new CustomEvent('product:added', {
              bubbles: true,
              detail: {
                variant: null,
                quantity: parseInt(formElement.querySelector('[name="quantity"]').value)
              }
            }));
          } else {
            document.dispatchEvent(new CustomEvent('theme:loading:end'));
          }
        });

        event.preventDefault();
      }
    }]);

    return ProductRecommendationsSection;
  }();
  /* harmony export (immutable) */

  __webpack_exports__["default"] = ProductRecommendationsSection;

  /***/
},
/* 48 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

  var QuickLinksSection = function QuickLinksSection(element) {
    _classCallCheck(this, QuickLinksSection);

    this.element = element;

    // Make sure that the section is always visible in the editor, even if the option to hide it on desktop is checked
    if (Shopify.designMode) {
      this.element.classList.remove('hidden-lap-and-up');
    }
  };
  /* harmony export (immutable) */

  __webpack_exports__["default"] = QuickLinksSection;

  /***/
},
/* 49 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__helper_Currency__ = __webpack_require__(1);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__components_ProductItemColorSwatch__ = __webpack_require__(6);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__helper_Responsive__ = __webpack_require__(0);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__ProductSection__ = __webpack_require__(4);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__helper_Form__ = __webpack_require__(2);

  var RecentlyViewedProductsSection = function () {
    function RecentlyViewedProductsSection(element) {
      _classCallCheck(this, RecentlyViewedProductsSection);

      this.element = element;
      this.delegateElement = new domDelegate.Delegate(this.element);
      this.options = JSON.parse(this.element.getAttribute('data-section-settings'));

      if (this.options['currentProductId']) {
        this._saveCurrentProduct();
      }

      this.productItemColorSwatch = new __WEBPACK_IMPORTED_MODULE_1__components_ProductItemColorSwatch__["default"](this.element);

      this._fetchProducts();
      this._attachListeners();
    }

    _createClass(RecentlyViewedProductsSection, [{
      key: 'onUnload',
      value: function onUnload() {
        if (this.flickityInstance) {
          this.flickityInstance.destroy();
        }

        this.productItemColorSwatch.destroy();
      }
    }, {
      key: '_attachListeners',
      value: function _attachListeners() {
        this.delegateElement.on('click', '[data-action="add-to-cart"]', this._addToCart.bind(this));
        this.delegateElement.on('click', '[data-secondary-action="open-quick-view"]', this._openQuickView.bind(this));
      }

      /**
       * When we are on a product page, we need to save the current product ID into local storage
       */

    }, {
      key: '_saveCurrentProduct',
      value: function _saveCurrentProduct() {
        var items = JSON.parse(localStorage.getItem('recentlyViewedProducts') || '[]'),
            currentProductId = this.options['currentProductId'];

        // We check if the current product already exists, and if it does not, we add it at the start
        if (!items.includes(currentProductId)) {
          items.unshift(currentProductId);
        }

        // Then, we save the current product into the local storage, by keeping only the 18 most recent
        try {
          localStorage.setItem('recentlyViewedProducts', JSON.stringify(items.slice(0, 18)));
        } catch (error) {
          // Do nothing, this may happen in Safari in incognito mode
        }
      }

      /**
       * In order to get the products to display, we hit the search template with the given IDs.
       */

    }, {
      key: '_fetchProducts',
      value: function _fetchProducts() {
        var _this54 = this;

        var queryString = this._getSearchQueryString();

        if (queryString === '') {
          return;
        }

        var template = window.theme.template === 'index' ? 'recently-viewed-products' : 'static-recently-viewed-products';

        fetch(window.theme.localeRootUrl + '/search?view=' + template + '&type=product&q=' + queryString, {
          credentials: 'same-origin',
          method: 'GET'
        }).then(function (response) {
          response.text().then(function (content) {
            var tempElement = document.createElement('div');
            tempElement.innerHTML = content;

            // Set the content
            _this54.element.querySelector('.recently-viewed-products-placeholder').innerHTML = tempElement.querySelector('[data-section-type="recently-viewed-products"] .recently-viewed-products-placeholder').innerHTML;

            // By default the section hide the products, so we force the section to be visible
            _this54.element.parentNode.style.display = 'block';

            _this54.productItemColorSwatch.recalculateSwatches();

            // Convert any amount (if applicable)
            if (window.theme.currencyConversionEnabled) {
              __WEBPACK_IMPORTED_MODULE_0__helper_Currency__["default"].convertAll(_this54.element);
            }

            if (Shopify.designMode && window.SPR) {
              window.SPR.initDomEls();
              window.SPR.loadBadges();
            }

            // Create the slideshow
            _this54.flickityInstance = new Flickity(_this54.element.querySelector('.product-list'), {
              watchCSS: true,
              pageDots: false,
              prevNextButtons: true,
              contain: true,
              groupCells: true,
              cellAlign: 'left',
              draggable: !window.matchMedia('(-moz-touch-enabled: 0), (hover: hover)').matches
            });
          });
        });
      }
    }, {
      key: '_getSearchQueryString',
      value: function _getSearchQueryString() {
        var items = JSON.parse(localStorage.getItem('recentlyViewedProducts') || '[]');

        // If we are on a product template, we make sure to remove the main product from the related product
        if (items.includes(this.options['currentProductId'])) {
          items.splice(items.indexOf(this.options['currentProductId']), 1);
        }

        return items.map(function (item) {
          return 'id:' + item;
        }).join(' OR ');
      }
    }, {
      key: '_openQuickView',
      value: function _openQuickView(event, target) {
        var productUrl = new URL('' + window.location.origin + target.getAttribute('data-product-url'));

        // If we are on mobile or tablet, we redirect to product page directly
        if (__WEBPACK_IMPORTED_MODULE_2__helper_Responsive__["default"].matchesBreakpoint('phone') || __WEBPACK_IMPORTED_MODULE_2__helper_Responsive__["default"].matchesBreakpoint('tablet')) {
          window.location.href = productUrl.href;
          return false;
        }

        var modal = document.getElementById(target.getAttribute('aria-controls'));
        modal.classList.add('is-loading');

        productUrl.searchParams.set('view', 'quick-view');

        fetch(productUrl.href, {
          credentials: 'same-origin',
          method: 'GET'
        }).then(function (response) {
          response.text().then(function (content) {
            modal.querySelector('.modal__inner').innerHTML = content;
            modal.classList.remove('is-loading');

            // Register a new section to power the JS
            var modalProductSection = new __WEBPACK_IMPORTED_MODULE_3__ProductSection__["default"](modal.querySelector('[data-section-type="product"]'));

            if (window.theme.currencyConversionEnabled) {
              __WEBPACK_IMPORTED_MODULE_0__helper_Currency__["default"].convertAll(modal);
            }

            // We set a listener so we can cleanup on close
            var doCleanUp = function doCleanUp() {
              modalProductSection.onUnload();
              modal.removeEventListener('modal:closed', doCleanUp);
            };

            modal.addEventListener('modal:closed', doCleanUp);
          });
        });
      }

      /**
       * ---------------------------------------------------------------------------------------------------
       * INTERNAL CODE THAT HANDLE PRODUCT ADD TO CART
       * ---------------------------------------------------------------------------------------------------
       */

    }, {
      key: '_addToCart',
      value: function _addToCart(event, target) {
        var _this55 = this;

        if (window.theme.cartType === 'page') {
          return; // When using a cart type of page, we just simply redirect to the cart page
        }

        event.preventDefault(); // Prevent form to be submitted
        event.stopPropagation();

        // First, we switch the status of the button
        target.setAttribute('disabled', 'disabled');
        document.dispatchEvent(new CustomEvent('theme:loading:start'));

        // Then we add the product in Ajax
        var formElement = target.closest('form[action*="/cart/add"]');

        fetch(window.theme.localeRootUrl + '/cart/add.js', {
          body: JSON.stringify(__WEBPACK_IMPORTED_MODULE_4__helper_Form__["default"].serialize(formElement)),
          credentials: 'same-origin',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest' // This is needed as currently there is a bug in Shopify that assumes this header
          }
        }).then(function (response) {
          target.removeAttribute('disabled');

          if (response.ok) {
            // We simply trigger an event so the mini-cart can re-render
            _this55.element.dispatchEvent(new CustomEvent('product:added', {
              bubbles: true,
              detail: {
                variant: null,
                quantity: parseInt(formElement.querySelector('[name="quantity"]').value)
              }
            }));
          } else {
            document.dispatchEvent(new CustomEvent('theme:loading:end'));
          }
        });

        event.preventDefault();
      }
    }]);

    return RecentlyViewedProductsSection;
  }();
  /* harmony export (immutable) */

  __webpack_exports__["default"] = RecentlyViewedProductsSection;

  /***/
},
/* 50 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /**
   * This code is extracted from Slate
   */

  var SectionContainer = function () {
    function SectionContainer() {
      _classCallCheck(this, SectionContainer);

      this.constructors = [];
      this.instances = [];

      this._attachListeners();
    }

    _createClass(SectionContainer, [{
      key: '_attachListeners',
      value: function _attachListeners() {
        document.addEventListener('shopify:section:load', this._onSectionLoad.bind(this));
        document.addEventListener('shopify:section:unload', this._onSectionUnload.bind(this));
        document.addEventListener('shopify:section:select', this._onSelect.bind(this));
        document.addEventListener('shopify:section:deselect', this._onDeselect.bind(this));
        document.addEventListener('shopify:section:reorder', this._onReorder.bind(this));
        document.addEventListener('shopify:block:select', this._onBlockSelect.bind(this));
        document.addEventListener('shopify:block:deselect', this._onBlockDeselect.bind(this));
      }
    }, {
      key: 'register',
      value: function register(type, constructor) {
        var _this56 = this;

        this.constructors[type] = constructor;

        document.querySelectorAll('[data-section-type=' + type + ']').forEach(function (container) {
          _this56._createInstance(container, constructor);
        });
      }

      /**
       * Return an object from an array of objects that matches the provided key and value
       */

    }, {
      key: '_findInstance',
      value: function _findInstance(array, key, value) {
        for (var i = 0; i < array.length; i++) {
          if (array[i][key] === value) {
            return array[i];
          }
        }
      }

      /**
       * Remove an object from an array of objects by matching the provided key and value
       */

    }, {
      key: '_removeInstance',
      value: function _removeInstance(array, key, value) {
        var i = array.length;

        while (i--) {
          if (array[i][key] === value) {
            array.splice(i, 1);
            break;
          }
        }

        return array;
      }
    }, {
      key: '_onSectionLoad',
      value: function _onSectionLoad(event) {
        var container = event.target.querySelector('[data-section-id]');

        if (container) {
          this._createInstance(container);
        }
      }
    }, {
      key: '_onSectionUnload',
      value: function _onSectionUnload(event) {
        var instance = this._findInstance(this.instances, 'id', event.detail.sectionId);

        if (!instance) {
          return;
        }

        if (typeof instance.onUnload === 'function') {
          instance.onUnload(event);
        }

        this.instances = this._removeInstance(this.instances, 'id', event.detail.sectionId);
      }
    }, {
      key: '_onSelect',
      value: function _onSelect(event) {
        var instance = this._findInstance(this.instances, 'id', event.detail.sectionId);

        if (instance && typeof instance.onSelect === 'function') {
          instance.onSelect(event);
        }
      }
    }, {
      key: '_onDeselect',
      value: function _onDeselect(event) {
        var instance = this._findInstance(this.instances, 'id', event.detail.sectionId);

        if (instance && typeof instance.onDeselect === 'function') {
          instance.onDeselect(event);
        }
      }
    }, {
      key: '_onReorder',
      value: function _onReorder(event) {
        var instance = this._findInstance(this.instances, 'id', event.detail.sectionId);

        if (instance && typeof instance.onReorder === 'function') {
          instance.onReorder(event);
        }
      }
    }, {
      key: '_onBlockSelect',
      value: function _onBlockSelect(event) {
        var instance = this._findInstance(this.instances, 'id', event.detail.sectionId);

        if (instance && typeof instance.onBlockSelect === 'function') {
          instance.onBlockSelect(event);
        }
      }
    }, {
      key: '_onBlockDeselect',
      value: function _onBlockDeselect(event) {
        var instance = this._findInstance(this.instances, 'id', event.detail.sectionId);

        if (instance && typeof instance.onBlockDeselect === 'function') {
          instance.onBlockDeselect(event);
        }
      }
    }, {
      key: '_createInstance',
      value: function _createInstance(container, constructor) {
        var id = container.getAttribute('data-section-id'),
            type = container.getAttribute('data-section-type');

        constructor = constructor || this.constructors[type];

        if (typeof constructor === 'undefined') {
          return;
        }

        var instance = Object.assign(new constructor(container), {
          id: id,
          type: type,
          container: container
        });

        this.instances.push(instance);
      }
    }]);

    return SectionContainer;
  }();
  /* harmony export (immutable) */

  __webpack_exports__["default"] = SectionContainer;

  /***/
},
/* 51 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

  var SlideshowSection = function () {
    function SlideshowSection(element) {
      _classCallCheck(this, SlideshowSection);

      this.element = element;
      this.options = JSON.parse(this.element.getAttribute('data-section-settings'));

      this.flickityInstance = new Flickity(element.querySelector('.slideshow'), {
        pageDots: this.options['pageDots'],
        prevNextButtons: this.options['prevNextButtons'],
        wrapAround: true,
        dragThreshold: 12,
        draggable: '>1',
        fade: this.options['transitionEffect'] === 'fade',
        setGallerySize: this.options['setGallerySize'],
        adaptiveHeight: this.options['adaptiveHeight'],
        autoPlay: this.options['autoPlay'] ? this.options['cycleSpeed'] : false
      });
    }

    _createClass(SlideshowSection, [{
      key: 'onUnload',
      value: function onUnload() {
        this.flickityInstance.destroy();
      }
    }, {
      key: 'onBlockSelect',
      value: function onBlockSelect(event) {
        if (this.flickityInstance.isActive) {
          this.flickityInstance.selectCell(parseInt(event.target.getAttribute('data-block-index')), false, event.detail.load);
          this.flickityInstance.pausePlayer();
        }
      }
    }, {
      key: 'onBlockDeselect',
      value: function onBlockDeselect() {
        if (this.flickityInstance.isActive) {
          this.flickityInstance.unpausePlayer();
        }
      }
    }]);

    return SlideshowSection;
  }();
  /* harmony export (immutable) */

  __webpack_exports__["default"] = SlideshowSection;

  /***/
},
/* 52 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

  var TextWithIconsSection = function () {
    function TextWithIconsSection(element) {
      _classCallCheck(this, TextWithIconsSection);

      this.flickityInstance = new Flickity(element.querySelector('.text-with-icons'), {
        pageDots: true,
        prevNextButtons: false,
        wrapAround: true,
        autoPlay: 5000,
        watchCSS: true
      });
    }

    _createClass(TextWithIconsSection, [{
      key: 'onUnload',
      value: function onUnload() {
        this.flickityInstance.destroy();
      }
    }, {
      key: 'onBlockSelect',
      value: function onBlockSelect(event) {
        if (this.flickityInstance.isActive) {
          this.flickityInstance.selectCell(parseInt(event.target.getAttribute('data-block-index')), false, event.detail.load);
          this.flickityInstance.pausePlayer();
        }
      }
    }, {
      key: 'onBlockDeselect',
      value: function onBlockDeselect() {
        if (this.flickityInstance.isActive) {
          this.flickityInstance.unpausePlayer();
        }
      }
    }]);

    return TextWithIconsSection;
  }();
  /* harmony export (immutable) */

  __webpack_exports__["default"] = TextWithIconsSection;

  /***/
},
/* 53 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__helper_Dom__ = __webpack_require__(3);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__helper_Responsive__ = __webpack_require__(0);

  var VideoSection = function () {
    function VideoSection(element) {
      _classCallCheck(this, VideoSection);

      this.element = element;
      this.domDelegate = new domDelegate.Delegate(this.element);
      this.options = JSON.parse(this.element.getAttribute('data-section-settings'));

      this.videoPreviewList = this.element.querySelector('.video-preview-list');
      this.videos = this.element.querySelectorAll('.video-list .video-list__item');

      this._attachListeners();
    }

    _createClass(VideoSection, [{
      key: 'onUnload',
      value: function onUnload() {
        this.domDelegate.off('click');
      }
    }, {
      key: 'onBlockSelect',
      value: function onBlockSelect(event) {
        this._selectVideo(event, event.target);
      }
    }, {
      key: '_attachListeners',
      value: function _attachListeners() {
        this.domDelegate.on('click', '[data-action="play-video"]', this._playVideo.bind(this));
        this.domDelegate.on('click', '[data-action="select-video"]', this._selectVideo.bind(this));
      }
    }, {
      key: '_playVideo',
      value: function _playVideo(event, target) {
        // To start the video, we simply replace the iframe source
        var iframe = target.querySelector('iframe');

        iframe.src = iframe.getAttribute('data-src');
        target.classList.add('is-playing');
      }
    }, {
      key: '_selectVideo',
      value: function _selectVideo(event, target) {
        var _this57 = this;

        var video = this.videos[parseInt(target.getAttribute('data-video-index'))];

        target.classList.add('is-selected');
        video.setAttribute('aria-hidden', 'false');

        __WEBPACK_IMPORTED_MODULE_0__helper_Dom__["default"].getSiblings(target, '.is-selected').forEach(function (previousVideoPreviewElement) {
          var previousVideo = _this57.videos[parseInt(previousVideoPreviewElement.getAttribute('data-video-index'))];

          previousVideo.setAttribute('aria-hidden', 'true');
          previousVideo.classList.remove('is-playing');

          // We need to reset the iframe
          var oldIframe = previousVideo.querySelector('iframe'),
              newIframe = oldIframe.cloneNode(false);

          newIframe.removeAttribute('src');
          oldIframe.parentNode.replaceChild(newIframe, oldIframe);

          previousVideoPreviewElement.classList.remove('is-selected');
        });

        // We animate to move the selected nav item on mobile
        if (__WEBPACK_IMPORTED_MODULE_1__helper_Responsive__["default"].matchesBreakpoint('phone')) {
          var scrollX = target.offsetLeft - (this.videoPreviewList.parentNode.clientWidth - target.clientWidth) / 2;
          this.videoPreviewList.parentNode.scrollTo({ left: scrollX, behavior: 'smooth' });
        }
      }
    }]);

    return VideoSection;
  }();
  /* harmony export (immutable) */

  __webpack_exports__["default"] = VideoSection;

  /***/
},
/* 54 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__AccountSection__ = __webpack_require__(31);
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "AccountSection", function () {
    return __WEBPACK_IMPORTED_MODULE_0__AccountSection__["default"];
  });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__AnnouncementBarSection__ = __webpack_require__(32);
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "AnnouncementBarSection", function () {
    return __WEBPACK_IMPORTED_MODULE_1__AnnouncementBarSection__["default"];
  });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__BlogSection__ = __webpack_require__(34);
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "BlogSection", function () {
    return __WEBPACK_IMPORTED_MODULE_2__BlogSection__["default"];
  });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__BlogPostSection__ = __webpack_require__(33);
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "BlogPostSection", function () {
    return __WEBPACK_IMPORTED_MODULE_3__BlogPostSection__["default"];
  });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__BlogSidebarSection__ = __webpack_require__(35);
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "BlogSidebarSection", function () {
    return __WEBPACK_IMPORTED_MODULE_4__BlogSidebarSection__["default"];
  });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_5__CartSection__ = __webpack_require__(36);
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "CartSection", function () {
    return __WEBPACK_IMPORTED_MODULE_5__CartSection__["default"];
  });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_6__CollectionListSection__ = __webpack_require__(37);
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "CollectionListSection", function () {
    return __WEBPACK_IMPORTED_MODULE_6__CollectionListSection__["default"];
  });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_7__CollectionSection__ = __webpack_require__(38);
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "CollectionSection", function () {
    return __WEBPACK_IMPORTED_MODULE_7__CollectionSection__["default"];
  });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_8__FeaturedCollectionSection__ = __webpack_require__(39);
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "FeaturedCollectionSection", function () {
    return __WEBPACK_IMPORTED_MODULE_8__FeaturedCollectionSection__["default"];
  });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_9__GiftCardSection__ = __webpack_require__(41);
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "GiftCardSection", function () {
    return __WEBPACK_IMPORTED_MODULE_9__GiftCardSection__["default"];
  });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_10__FooterSection__ = __webpack_require__(40);
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "FooterSection", function () {
    return __WEBPACK_IMPORTED_MODULE_10__FooterSection__["default"];
  });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_11__HeaderSection__ = __webpack_require__(42);
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "HeaderSection", function () {
    return __WEBPACK_IMPORTED_MODULE_11__HeaderSection__["default"];
  });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_12__LoginSection__ = __webpack_require__(43);
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "LoginSection", function () {
    return __WEBPACK_IMPORTED_MODULE_12__LoginSection__["default"];
  });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_13__MapSection__ = __webpack_require__(44);
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "MapSection", function () {
    return __WEBPACK_IMPORTED_MODULE_13__MapSection__["default"];
  });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_14__MinimalHeaderSection__ = __webpack_require__(45);
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "MinimalHeaderSection", function () {
    return __WEBPACK_IMPORTED_MODULE_14__MinimalHeaderSection__["default"];
  });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_15__ProductSection__ = __webpack_require__(4);
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "ProductSection", function () {
    return __WEBPACK_IMPORTED_MODULE_15__ProductSection__["default"];
  });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_16__QuickLinksSection__ = __webpack_require__(48);
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "QuickLinksSection", function () {
    return __WEBPACK_IMPORTED_MODULE_16__QuickLinksSection__["default"];
  });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_17__PopupsSection__ = __webpack_require__(46);
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "PopupsSection", function () {
    return __WEBPACK_IMPORTED_MODULE_17__PopupsSection__["default"];
  });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_18__ProductRecommendations__ = __webpack_require__(47);
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "ProductRecommendations", function () {
    return __WEBPACK_IMPORTED_MODULE_18__ProductRecommendations__["default"];
  });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_19__RecentlyViewedProductsSection__ = __webpack_require__(49);
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "RecentlyViewedProductsSection", function () {
    return __WEBPACK_IMPORTED_MODULE_19__RecentlyViewedProductsSection__["default"];
  });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_20__SectionContainer__ = __webpack_require__(50);
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "SectionContainer", function () {
    return __WEBPACK_IMPORTED_MODULE_20__SectionContainer__["default"];
  });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_21__SlideshowSection__ = __webpack_require__(51);
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "SlideshowSection", function () {
    return __WEBPACK_IMPORTED_MODULE_21__SlideshowSection__["default"];
  });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_22__TextWithIconsSection__ = __webpack_require__(52);
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "TextWithIconsSection", function () {
    return __WEBPACK_IMPORTED_MODULE_22__TextWithIconsSection__["default"];
  });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_23__VideoSection__ = __webpack_require__(53);
  /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "VideoSection", function () {
    return __WEBPACK_IMPORTED_MODULE_23__VideoSection__["default"];
  });

  /***/
},
/* 55 */
/***/function (module, exports, __webpack_require__) {

  __webpack_require__(7);
  __webpack_require__(5);
  __webpack_require__(1);
  __webpack_require__(3);
  __webpack_require__(2);
  __webpack_require__(23);
  __webpack_require__(0);
  __webpack_require__(24);
  __webpack_require__(11);
  __webpack_require__(25);
  __webpack_require__(12);
  __webpack_require__(9);
  __webpack_require__(13);
  __webpack_require__(14);
  __webpack_require__(26);
  __webpack_require__(15);
  __webpack_require__(27);
  __webpack_require__(16);
  __webpack_require__(17);
  __webpack_require__(28);
  __webpack_require__(18);
  __webpack_require__(6);
  __webpack_require__(19);
  __webpack_require__(21);
  __webpack_require__(20);
  __webpack_require__(22);
  __webpack_require__(29);
  __webpack_require__(10);
  __webpack_require__(8);
  __webpack_require__(30);
  __webpack_require__(31);
  __webpack_require__(32);
  __webpack_require__(33);
  __webpack_require__(34);
  __webpack_require__(35);
  __webpack_require__(36);
  __webpack_require__(37);
  __webpack_require__(38);
  __webpack_require__(39);
  __webpack_require__(40);
  __webpack_require__(41);
  __webpack_require__(42);
  __webpack_require__(43);
  __webpack_require__(44);
  __webpack_require__(45);
  __webpack_require__(46);
  __webpack_require__(47);
  __webpack_require__(4);
  __webpack_require__(48);
  __webpack_require__(49);
  __webpack_require__(50);
  __webpack_require__(51);
  __webpack_require__(52);
  __webpack_require__(53);
  __webpack_require__(54);
  module.exports = __webpack_require__(56);

  /***/
},
/* 56 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__components__ = __webpack_require__(30);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__helper__ = __webpack_require__(24);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__sections__ = __webpack_require__(54);

  (function () {
    // Some polyfills not provided yet by polyfills.io

    if (window.NodeList && !NodeList.prototype.forEach) {
      NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
          callback.call(thisArg, this[i], i, this);
        }
      };
    }

    // Instantiate global plugins

    new __WEBPACK_IMPORTED_MODULE_0__components__["CollapsibleManager"]();
    new __WEBPACK_IMPORTED_MODULE_0__components__["LoadingBar"]();
    new __WEBPACK_IMPORTED_MODULE_0__components__["ModalManager"]();
    new __WEBPACK_IMPORTED_MODULE_0__components__["PopoverManager"]();

    // Then, we instantiate specific sections that may appear in all pages, and then only the template specific sections

    var sections = new __WEBPACK_IMPORTED_MODULE_2__sections__["SectionContainer"]();

    sections.register('account', __WEBPACK_IMPORTED_MODULE_2__sections__["AccountSection"]);
    sections.register('announcement-bar', __WEBPACK_IMPORTED_MODULE_2__sections__["AnnouncementBarSection"]);
    sections.register('blog', __WEBPACK_IMPORTED_MODULE_2__sections__["BlogSection"]);
    sections.register('blog-sidebar', __WEBPACK_IMPORTED_MODULE_2__sections__["BlogSidebarSection"]);
    sections.register('blog-post', __WEBPACK_IMPORTED_MODULE_2__sections__["BlogPostSection"]);
    sections.register('cart', __WEBPACK_IMPORTED_MODULE_2__sections__["CartSection"]);
    sections.register('collection-list', __WEBPACK_IMPORTED_MODULE_2__sections__["CollectionListSection"]);
    sections.register('collection', __WEBPACK_IMPORTED_MODULE_2__sections__["CollectionSection"]);
    sections.register('featured-collection', __WEBPACK_IMPORTED_MODULE_2__sections__["FeaturedCollectionSection"]);
    sections.register('footer', __WEBPACK_IMPORTED_MODULE_2__sections__["FooterSection"]);
    sections.register('gift-card', __WEBPACK_IMPORTED_MODULE_2__sections__["GiftCardSection"]);
    sections.register('header', __WEBPACK_IMPORTED_MODULE_2__sections__["HeaderSection"]);
    sections.register('login', __WEBPACK_IMPORTED_MODULE_2__sections__["LoginSection"]);
    sections.register('map', __WEBPACK_IMPORTED_MODULE_2__sections__["MapSection"]);
    sections.register('minimal-header', __WEBPACK_IMPORTED_MODULE_2__sections__["MinimalHeaderSection"]);
    sections.register('popups', __WEBPACK_IMPORTED_MODULE_2__sections__["PopupsSection"]);
    sections.register('product-recommendations', __WEBPACK_IMPORTED_MODULE_2__sections__["ProductRecommendations"]);
    sections.register('product', __WEBPACK_IMPORTED_MODULE_2__sections__["ProductSection"]);
    sections.register('quick-links', __WEBPACK_IMPORTED_MODULE_2__sections__["QuickLinksSection"]);
    sections.register('recently-viewed-products', __WEBPACK_IMPORTED_MODULE_2__sections__["RecentlyViewedProductsSection"]);
    sections.register('slideshow', __WEBPACK_IMPORTED_MODULE_2__sections__["SlideshowSection"]);
    sections.register('text-with-icons', __WEBPACK_IMPORTED_MODULE_2__sections__["TextWithIconsSection"]);
    sections.register('video', __WEBPACK_IMPORTED_MODULE_2__sections__["VideoSection"]);

    /**
     * ----------------------------------------------------------------------------
     * CURRENCY CONVERSION
     * ----------------------------------------------------------------------------
     */

    (function () {
      var documentDelegate = new domDelegate.Delegate(document.body);

      var shopCurrency = window.theme.shopCurrency,
          currencySelectors = document.querySelectorAll('.currency-selector'),
          currencySelectorsValues = document.querySelectorAll('.currency-selector__value');

      // We have two cases: either the theme currency conversion is enabled, in which case the conversion is just based on today's rates, but
      // the checkout is still processed in store's currency OR the merchant is using Shopify native multi-currency feature. For the native
      // multi-currency, everything is directly handled through the Shopify form, so we have nothing to do :)
      if (window.theme.currencyConversionEnabled) {
        var onValueChanged = function onValueChanged(newCurrency) {
          // As we have multiple selectors in the page, we need to update them all
          currencySelectors.forEach(function (currencySelectorToUpdate) {
            currencySelectorToUpdate.value = newCurrency;
          });

          // Also update other selectors which are not using select
          currencySelectorsValues.forEach(function (currencySelectorValue) {
            currencySelectorValue.innerHTML = newCurrency;
          });

          // Then we can convert everything
          __WEBPACK_IMPORTED_MODULE_1__helper__["CurrencyHelper"].convertAll();
        };

        if (currencySelectors.length > 0) {
          var currencyHasChanged = function currencyHasChanged(event) {
            var newCurrency = event.target.value;
            onValueChanged(newCurrency);
          };

          currencySelectors.forEach(function (currencySelector) {
            currencySelector.addEventListener('change', currencyHasChanged);
          });

          documentDelegate.on('click', '[data-action="select-currency"]', function (event, target) {
            onValueChanged(target.getAttribute('data-currency-code'));
            document.dispatchEvent(new CustomEvent('popover:close'));
          });

          var currentCurrency = localStorage.getItem('currency') || shopCurrency;

          if (currentCurrency !== shopCurrency) {
            onValueChanged(currentCurrency);
          }
        }
      }
    })();

    /**
     * ----------------------------------------------------------------------------
     * LOCALE SELECTOR
     * ----------------------------------------------------------------------------
     */

    (function () {
      var documentDelegate = new domDelegate.Delegate(document.body);

      documentDelegate.on('change', '.locale-selector', function (event, target) {
        window.location.href = target.value;
      });
    })();

    /**
     * ----------------------------------------------------------------------------
     * RTE
     * ----------------------------------------------------------------------------
     */

    (function () {
      // We wrap each RTE table by a specific class to allow wrapping
      document.querySelectorAll('.rte table').forEach(function (table) {
        table.outerHTML = '<div class="table-wrapper">' + table.outerHTML + '</div>';
      });

      document.querySelectorAll('.rte iframe').forEach(function (iframe) {
        // We scope the wrapping only for YouTube and Vimeo
        if (iframe.src.indexOf('youtube') !== -1 || iframe.src.indexOf('youtu.be') !== -1 || iframe.src.indexOf('vimeo') !== -1) {
          iframe.outerHTML = '<div class="video-wrapper">' + iframe.outerHTML + '</div>';

          // Re-set the src attribute on each iframe after page load for Chrome's "incorrect iFrame content on 'back'" bug.
          // https://code.google.com/p/chromium/issues/detail?id=395791. Need to specifically target video and admin bar
          iframe.src = iframe.src;
        }
      });
    })();

    /**
     * ----------------------------------------------------------------------------
     * FLICKITY
     *
     * Starting from iOS 11, Safari on iOS is experiencing a bug that prevents
     * event.preventDefault to be called on dynamically added listeners, which is
     * what Flickity is using.
     *
     * The bug is coming from iOS but it impacts indirectly Flickity. A temporary
     * fix has been suggested here: https://github.com/metafizzy/flickity/issues/740
     * and that we are using here as a temporary workaround, that should be removed
     * once the bug is fixed on iOS
     * ----------------------------------------------------------------------------
     */

    (function () {
      var touchingCarousel = false,
          touchStartCoords = void 0;

      document.body.addEventListener('touchstart', function (e) {
        var flickitySliderElement = e.target.closest('.flickity-slider');

        if (flickitySliderElement) {
          var flickity = Flickity.data(flickitySliderElement.closest('.flickity-enabled'));

          if (flickity.isDraggable) {
            touchingCarousel = true;
          } else {
            touchingCarousel = false;
            return;
          }
        } else {
          touchingCarousel = false;
          return;
        }

        touchStartCoords = {
          x: e.touches[0].pageX,
          y: e.touches[0].pageY
        };
      });

      document.body.addEventListener('touchmove', function (e) {
        if (!(touchingCarousel && e.cancelable)) {
          return;
        }

        var moveVector = {
          x: e.touches[0].pageX - touchStartCoords.x,
          y: e.touches[0].pageY - touchStartCoords.y
        };

        if (Math.abs(moveVector.x) > 8) e.preventDefault();
      }, { passive: false });
    })();

    /**
     * ----------------------------------------------------------------------------
     * UTILS
     * ----------------------------------------------------------------------------
     */

    /**
     * NOTE: I'm really not satisfied with the way this is handled, but this has been asked by design at the very
     *       end of the process. This should be abstracted at some point to make it easier to re-use and with slightly
     *       cleaner code!
     */
    (function () {
      // In card, elements that have a "card__section" with a [aria-expanded] attribute can be clickable to open the content
      // of the card itself
      var documentDelegate = new domDelegate.Delegate(document.body);

      documentDelegate.on('click', '.expandable-content__toggle', function (item, expandableButton) {
        var parentSection = expandableButton.closest('.expandable-content');

        if (parentSection.getAttribute('aria-expanded') === 'true') {
          // Previously expanded, so we have to close it
          parentSection.setAttribute('aria-expanded', 'false');
          parentSection.style['max-height'] = parentSection.offsetHeight + 'px';
          parentSection.offsetHeight; // Use to force a redraw
          parentSection.style['max-height'] = null; // Remove the attribute to let the CSS decide the max-height

          var expandableText = expandableButton.querySelector('.expandable-content__toggle-text');
          expandableText.innerHTML = expandableText.getAttribute('data-view-more');

          // We also have to scroll back to the top to preserve scroll position
          var parentCard = parentSection.closest('.card');

          if (parentCard) {
            var amountToScroll = parentCard.getBoundingClientRect().top - 15 - parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height'));

            window.scrollBy({ top: amountToScroll, behavior: 'smooth' });
          }
        } else {
          // Previously collapsed, so we have to open it
          parentSection.setAttribute('aria-expanded', 'true');

          // Because the expandable button is still positioned absolutely, we need to add margin to the sibling
          // text to account the button. It's a bit ugly and hacky but this was the simplest I've found
          if (expandableButton.previousElementSibling) {
            expandableButton.previousElementSibling.style['margin-bottom'] = parseInt(expandableButton.clientHeight / 1.5) + 'px';
          }

          __WEBPACK_IMPORTED_MODULE_1__helper__["AnimationHelper"].slideDown(parentSection, null, 'max-height');
          var _expandableText = expandableButton.querySelector('.expandable-content__toggle-text');
          _expandableText.innerHTML = _expandableText.getAttribute('data-view-less');
        }
      });

      var processCollapsibles = function processCollapsibles() {
        document.querySelectorAll('.expandable-content[aria-expanded]').forEach(function (item) {
          if (item.scrollHeight > item.clientHeight) {
            item.classList.add('expandable-content--expandable');
          } else {
            item.setAttribute('aria-expanded', 'true');
          }
        });
      };

      document.addEventListener('shopify:section:load', function (event) {
        processCollapsibles();
      });

      processCollapsibles();
    })();

    (function () {
      // Mobile browsers (like iOS) do not support opening keyboard, so we simply prevent the autofocus by unblurring
      // all the fields

      if (__WEBPACK_IMPORTED_MODULE_1__helper__["ResponsiveHelper"].getCurrentBreakpoint() === 'phone') {
        var autoFocusedElements = document.querySelectorAll('input[autofocus]');

        for (var i = 0; i < autoFocusedElements.length; i++) {
          autoFocusedElements[i].blur();
          autoFocusedElements[i].removeAttribute('autofocus');
        }
      }
    })();

    (function () {
      var documentDelegate = new domDelegate.Delegate(document.body);

      documentDelegate.on('click', '[href^="#"], [data-href]', function (event, target) {
        var selector = target.hasAttribute('href') ? target.getAttribute('href') : target.getAttribute('data-href');

        if (selector === '#') {
          return;
        }

        var element = document.querySelector(selector),
            offset = parseInt(target.getAttribute('data-offset') || 0),
            toTop = 0;

        while (element.offsetParent.tagName !== 'BODY') {
          toTop += element.offsetTop;
          element = element.offsetParent;
        }

        toTop += element.offsetTop;

        window.scrollTo({ behavior: 'smooth', top: toTop - offset });

        event.preventDefault();
      });
    })();

    (function () {
      function handleFirstTab(event) {
        if (event.keyCode === 9) {
          document.body.classList.add('is-tabbing');
          window.removeEventListener('keydown', handleFirstTab);
        }
      }

      window.addEventListener('keydown', handleFirstTab);
    })();

    (function () {
      var documentDelegate = new domDelegate.Delegate(document.body);

      documentDelegate.on('keyup', 'input, textarea', function (event, target) {
        target.classList.toggle('is-filled', target.value !== '');
      });

      documentDelegate.on('change', 'select', function (event, target) {
        target.parentNode.classList.toggle('is-filled', target.value !== '');
      });
    })();

    // This snippet allows to automatically adds a target="_blank" to any link that is external. This is actually
    // somewhat always desired by merchant and will allow to reduce support
    (function () {
      var links = document.links;

      fastdom.mutate(function () {
        for (var i = 0, linksLength = links.length; i < linksLength; i++) {
          if (links[i].hostname !== window.location.hostname) {
            links[i].target = '_blank';
          }
        }
      });
    })();
  })();

  /***/
}]
/******/);