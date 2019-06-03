webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/SignUpPage.js":
/*!****************************************!*\
  !*** ./pages/components/SignUpPage.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createaccount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createaccount */ "./pages/components/createaccount.js");


/***/ }),

/***/ "./pages/components/createaccount.js":
/*!*******************************************!*\
  !*** ./pages/components/createaccount.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/admin/Desktop/javascript/projects/loginui/pages/components/createaccount.js";


// import './css/createaccount.css';
var CreateAccountForm = function CreateAccountForm() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    action: "POST",
    className: "createAccountForm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "email",
    placeholder: "Email address",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "fname",
    placeholder: "First name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "lname",
    placeholder: "Last name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "password",
    placeholder: "Create a Password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "submit",
    value: "Sign up",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (CreateAccountForm);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_WelcomePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/WelcomePage */ "./pages/components/WelcomePage.js");
/* harmony import */ var _components_SignUpPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/SignUpPage */ "./pages/components/SignUpPage.js");
var _jsxFileName = "/Users/admin/Desktop/javascript/projects/loginui/pages/index.js";

// Link API to navigate pages (client side navigation - using <a> tag with out Link would result in server side navigation)




var Root = function Root() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_WelcomePage__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SignUpPage__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Root);

/***/ })

})
//# sourceMappingURL=index.js.26d51f16432f8a51c52b.hot-update.js.map