webpackHotUpdate("static/development/pages/signup.js",{

/***/ "./pages/components/CreateAccountForm.js":
/*!***********************************************!*\
  !*** ./pages/components/CreateAccountForm.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);








var centerStyle = {
  textAlign: "center"
};
var formGridStyle = {
  position: "relative",
  top: "5em",
  display: "inline-block",
  width: "480px",
  height: "300px"
};
var inputStyle = {
  width: "475px",
  paddingTop: "11px",
  fontSize: "16px",
  letterSpacing: "normal",
  paddingBottom: "11px",
  lineHeight: "24px",
  borderRadius: "5px",
  marginBottom: "20px",
  borderWidth: "1px"
};

var CreateAccountForm =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(CreateAccountForm, _Component);

  function CreateAccountForm() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CreateAccountForm);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CreateAccountForm).call(this));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "populateUserField", function (event) {
      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, event.target.name, event.target.value));

      console.log(_this.state[event.target.name]);
    });

    _this.state = {
      email: "",
      fname: "",
      lname: "",
      password: ""
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CreateAccountForm, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "signUpPage",
        style: centerStyle
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
        action: "POST",
        id: "createAccountForm",
        className: "container-form-grid",
        style: formGridStyle
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        style: inputStyle,
        type: "text",
        name: "email",
        placeholder: "Email address",
        onChange: this.populateUserField
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        style: inputStyle,
        type: "text",
        name: "fname",
        placeholder: "First name",
        onChange: this.populateUserField
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        style: inputStyle,
        type: "text",
        name: "lname",
        placeholder: "Last name",
        onChange: this.populateUserField
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        style: inputStyle,
        type: "text",
        name: "password",
        placeholder: "Create a Password",
        onChange: this.populateUserField
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        style: inputStyle,
        type: "submit",
        value: "Sign up"
      })));
    }
  }]);

  return CreateAccountForm;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CreateAccountForm);

/***/ })

})
//# sourceMappingURL=signup.js.3845d2c8772315ad0d79.hot-update.js.map