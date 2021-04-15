webpackHotUpdate_N_E("pages/apps",{

/***/ "./src/pages/apps/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/apps/index.tsx ***!
  \**********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout/Layout */ "./src/components/Layout/Layout.tsx");
/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/List */ "./src/components/List.tsx");


var _jsxFileName = "/home/barnes/repos/RedMustard.io/src/pages/apps/index.tsx",
    _this = undefined;





var WithStaticProps = function WithStaticProps(_ref) {
  var items = _ref.items;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Users List | Next.js + TypeScript Example",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "h-h1",
      children: "App List"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: ["Example fetching data from inside", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("code", {
        children: "getStaticProps()"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "You are currently on: /users"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
      items: items
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: "Go home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, _this);
};

_c = WithStaticProps;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (WithStaticProps);

var _c;

$RefreshReg$(_c, "WithStaticProps");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2FwcHMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIldpdGhTdGF0aWNQcm9wcyIsIml0ZW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBSUE7QUFDQTs7QUFNQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsc0JBQ3BCLHFFQUFDLGlFQUFEO0FBQVEsU0FBSyxFQUFDLDJDQUFkO0FBQUEsNEJBQ0k7QUFBSSxlQUFTLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUk7QUFBQSxtRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLGVBT0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQSixlQVNJLHFFQUFDLHdEQUFEO0FBQU0sV0FBSyxFQUFFQTtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFUSixlQVdJO0FBQUEsNkJBQ0kscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsR0FBWDtBQUFBLCtCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEb0I7QUFBQSxDQUF4Qjs7S0FBTUQsZTs7QUE0QlNBLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FwcHMuYmM4OTk1MWZhMWZmMTYwNTFlMDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBzYW1wbGVVc2VyRGF0YSB9IGZyb20gJy4uLy4uL3V0aWxzL3NhbXBsZS1kYXRhJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0JztcbmltcG9ydCBMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGlzdCc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gICAgaXRlbXM6IFVzZXJbXTtcbn07XG5cbmNvbnN0IFdpdGhTdGF0aWNQcm9wcyA9ICh7IGl0ZW1zIH06IFByb3BzKSA9PiAoXG4gICAgPExheW91dCB0aXRsZT1cIlVzZXJzIExpc3QgfCBOZXh0LmpzICsgVHlwZVNjcmlwdCBFeGFtcGxlXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJoLWgxXCI+QXBwIExpc3Q8L2gxPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgRXhhbXBsZSBmZXRjaGluZyBkYXRhIGZyb20gaW5zaWRlXG4gICAgICAgICAgICA8Y29kZT5nZXRTdGF0aWNQcm9wcygpPC9jb2RlPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8cD5Zb3UgYXJlIGN1cnJlbnRseSBvbjogL3VzZXJzPC9wPlxuXG4gICAgICAgIDxMaXN0IGl0ZW1zPXtpdGVtc30gLz5cblxuICAgICAgICA8cD5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5HbyBob21lPC9kaXY+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvcD5cbiAgICA8L0xheW91dD5cbik7XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gICAgLy8gRXhhbXBsZSBmb3IgaW5jbHVkaW5nIHN0YXRpYyBwcm9wcyBpbiBhIE5leHQuanMgZnVuY3Rpb24gY29tcG9uZW50IHBhZ2UuXG4gICAgLy8gRG9uJ3QgZm9yZ2V0IHRvIGluY2x1ZGUgdGhlIHJlc3BlY3RpdmUgdHlwZXMgZm9yIGFueSBwcm9wcyBwYXNzZWQgaW50b1xuICAgIC8vIHRoZSBjb21wb25lbnQuXG4gICAgY29uc3QgaXRlbXM6IFVzZXJbXSA9IHNhbXBsZVVzZXJEYXRhO1xuICAgIHJldHVybiB7IHByb3BzOiB7IGl0ZW1zIH0gfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdpdGhTdGF0aWNQcm9wcztcbiJdLCJzb3VyY2VSb290IjoiIn0=