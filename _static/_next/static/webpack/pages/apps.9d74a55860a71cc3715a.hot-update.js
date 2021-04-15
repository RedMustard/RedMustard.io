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
    title: "RedMustard.io | Apps",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "h-h1",
      children: "Apps"
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
      children: "You are currently on: /apps"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2FwcHMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIldpdGhTdGF0aWNQcm9wcyIsIml0ZW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBSUE7QUFDQTs7QUFNQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsc0JBQ3BCLHFFQUFDLGlFQUFEO0FBQVEsU0FBSyxFQUFDLHNCQUFkO0FBQUEsNEJBQ0k7QUFBSSxlQUFTLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUk7QUFBQSxtRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLGVBT0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQSixlQVNJLHFFQUFDLHdEQUFEO0FBQU0sV0FBSyxFQUFFQTtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFUSixlQVdJO0FBQUEsNkJBQ0kscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsR0FBWDtBQUFBLCtCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEb0I7QUFBQSxDQUF4Qjs7S0FBTUQsZTs7QUE0QlNBLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FwcHMuOWQ3NGE1NTg2MGE3MWNjMzcxNWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBzYW1wbGVVc2VyRGF0YSB9IGZyb20gJy4uLy4uL3V0aWxzL3NhbXBsZS1kYXRhJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0JztcbmltcG9ydCBMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGlzdCc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gICAgaXRlbXM6IFVzZXJbXTtcbn07XG5cbmNvbnN0IFdpdGhTdGF0aWNQcm9wcyA9ICh7IGl0ZW1zIH06IFByb3BzKSA9PiAoXG4gICAgPExheW91dCB0aXRsZT1cIlJlZE11c3RhcmQuaW8gfCBBcHBzXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJoLWgxXCI+QXBwczwvaDE+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICBFeGFtcGxlIGZldGNoaW5nIGRhdGEgZnJvbSBpbnNpZGVcbiAgICAgICAgICAgIDxjb2RlPmdldFN0YXRpY1Byb3BzKCk8L2NvZGU+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxwPllvdSBhcmUgY3VycmVudGx5IG9uOiAvYXBwczwvcD5cblxuICAgICAgICA8TGlzdCBpdGVtcz17aXRlbXN9IC8+XG5cbiAgICAgICAgPHA+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgIDxkaXY+R28gaG9tZTwvZGl2PlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L3A+XG4gICAgPC9MYXlvdXQ+XG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICAgIC8vIEV4YW1wbGUgZm9yIGluY2x1ZGluZyBzdGF0aWMgcHJvcHMgaW4gYSBOZXh0LmpzIGZ1bmN0aW9uIGNvbXBvbmVudCBwYWdlLlxuICAgIC8vIERvbid0IGZvcmdldCB0byBpbmNsdWRlIHRoZSByZXNwZWN0aXZlIHR5cGVzIGZvciBhbnkgcHJvcHMgcGFzc2VkIGludG9cbiAgICAvLyB0aGUgY29tcG9uZW50LlxuICAgIGNvbnN0IGl0ZW1zOiBVc2VyW10gPSBzYW1wbGVVc2VyRGF0YTtcbiAgICByZXR1cm4geyBwcm9wczogeyBpdGVtcyB9IH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXaXRoU3RhdGljUHJvcHM7XG4iXSwic291cmNlUm9vdCI6IiJ9