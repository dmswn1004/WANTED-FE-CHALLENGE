"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/PostList.tsx":
/*!*********************************!*\
  !*** ./components/PostList.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  width: 40.75rem;\\n  padding: 8rem 4rem;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  display: grid;\\n  grid-template-columns: repeat(2, 1fr);\\n  grid-gap: 2rem;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  width: 15.625rem;\\n  height: 15.625rem;\\n  padding: 0.5rem;\\n  border-radius: 1.25rem;\\n  background: rgba(217, 217, 217, 0.13);\\n  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.20);\\n  text-align: center;\\n\\n  &:hover {\\n    background: white;\\n  }\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  padding: 0.5rem 0;\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  color: #000;\\n  font-size: 1.25rem;\\n  font-style: normal;\\n  font-weight: 500;\\n  line-height: normal;\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  padding: 0.125rem 0.5rem;\\n  border: 2px solid #61DAFB;;\\n  border-radius: 1.25rem;\\n\"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\nvar PostList = function(param) {\n    var posts = param.posts;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Form, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(PostListContainer, {\n            children: posts.map(function(post) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/\".concat(post.id),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(PostItem, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                src: post.img,\n                                width: 160,\n                                height: 160\n                            }, void 0, false, {\n                                fileName: \"/Users/macpro/code repository/WANTED-FE-CHALLENGE/Week2/components/PostList.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Div, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(PostTitle, {\n                                    children: post.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/macpro/code repository/WANTED-FE-CHALLENGE/Week2/components/PostList.tsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 20\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/macpro/code repository/WANTED-FE-CHALLENGE/Week2/components/PostList.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 15\n                            }, _this),\n                            post.tag.map(function(tag) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TagForm, {\n                                    children: tag\n                                }, void 0, false, {\n                                    fileName: \"/Users/macpro/code repository/WANTED-FE-CHALLENGE/Week2/components/PostList.tsx\",\n                                    lineNumber: 27,\n                                    columnNumber: 19\n                                }, _this);\n                            })\n                        ]\n                    }, post.id, true, {\n                        fileName: \"/Users/macpro/code repository/WANTED-FE-CHALLENGE/Week2/components/PostList.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/macpro/code repository/WANTED-FE-CHALLENGE/Week2/components/PostList.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 11\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/macpro/code repository/WANTED-FE-CHALLENGE/Week2/components/PostList.tsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/macpro/code repository/WANTED-FE-CHALLENGE/Week2/components/PostList.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, _this);\n};\n_c = PostList;\nvar Form = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n    displayName: \"PostList__Form\",\n    componentId: \"sc-3a97c2f5-0\"\n})(_templateObject());\n_c1 = Form;\nvar PostListContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n    displayName: \"PostList__PostListContainer\",\n    componentId: \"sc-3a97c2f5-1\"\n})(_templateObject1());\n_c2 = PostListContainer;\nvar PostItem = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n    displayName: \"PostList__PostItem\",\n    componentId: \"sc-3a97c2f5-2\"\n})(_templateObject2());\n_c3 = PostItem;\nvar Div = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n    displayName: \"PostList__Div\",\n    componentId: \"sc-3a97c2f5-3\"\n})(_templateObject3());\n_c4 = Div;\nvar PostTitle = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].span.withConfig({\n    displayName: \"PostList__PostTitle\",\n    componentId: \"sc-3a97c2f5-4\"\n})(_templateObject4());\n_c5 = PostTitle;\nvar TagForm = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].span.withConfig({\n    displayName: \"PostList__TagForm\",\n    componentId: \"sc-3a97c2f5-5\"\n})(_templateObject5());\n_c6 = TagForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostList);\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6;\n$RefreshReg$(_c, \"PostList\");\n$RefreshReg$(_c1, \"Form\");\n$RefreshReg$(_c2, \"PostListContainer\");\n$RefreshReg$(_c3, \"PostItem\");\n$RefreshReg$(_c4, \"Div\");\n$RefreshReg$(_c5, \"PostTitle\");\n$RefreshReg$(_c6, \"TagForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3RMaXN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ1Y7QUFDRTtBQWMvQixJQUFNRyxRQUFRLEdBQTRCLGdCQUFlO1FBQVpDLEtBQUssU0FBTEEsS0FBSztJQUNoRCxxQkFDRSw4REFBQ0MsSUFBSTtrQkFDSCw0RUFBQ0MsaUJBQWlCO3NCQUNmRixLQUFLLENBQUNHLEdBQUcsQ0FBQyxTQUFDQyxJQUFJO3FDQUNkLDhEQUFDUCxrREFBSTtvQkFBQ1EsSUFBSSxFQUFFLEdBQUUsQ0FBVSxPQUFSRCxJQUFJLENBQUNFLEVBQUUsQ0FBRTs4QkFDdkIsNEVBQUNDLFFBQVE7OzBDQUNQLDhEQUFDVCxtREFBSztnQ0FBQ1UsR0FBRyxFQUFFSixJQUFJLENBQUNLLEdBQUc7Z0NBQUVDLEtBQUssRUFBRSxHQUFHO2dDQUFFQyxNQUFNLEVBQUUsR0FBRzs7Ozs7cUNBQUc7MENBQ2hELDhEQUFDQyxHQUFHOzBDQUFDLDRFQUFDQyxTQUFTOzhDQUFFVCxJQUFJLENBQUNVLEtBQUs7Ozs7O3lDQUFhOzs7OztxQ0FBTTs0QkFDM0NWLElBQUksQ0FBQ1csR0FBRyxDQUFDWixHQUFHLENBQUMsU0FBQ1ksR0FBRztxREFDaEIsOERBQUNDLE9BQU87OENBQ0xELEdBQUc7Ozs7O3lDQUNJOzZCQUNYLENBQUM7O3VCQVBTWCxJQUFJLENBQUNFLEVBQUU7Ozs7NkJBUVg7Ozs7O3lCQUNOO2FBQ1IsQ0FBQzs7Ozs7aUJBQ2dCOzs7OzthQUNmLENBQ1A7QUFDSixDQUFDO0FBcEJLUCxLQUFBQSxRQUFRO0FBc0JkLElBQU1FLElBQUksR0FBR0wsd0VBQVU7OztxQkFHdEI7QUFIS0ssTUFBQUEsSUFBSTtBQUtWLElBQU1DLGlCQUFpQixHQUFHTix3RUFBVTs7O3NCQUluQztBQUpLTSxNQUFBQSxpQkFBaUI7QUFNdkIsSUFBTUssUUFBUSxHQUFHWCx3RUFBVTs7O3NCQVkxQjtBQVpLVyxNQUFBQSxRQUFRO0FBY2QsSUFBTUssR0FBRyxHQUFHaEIsd0VBQVU7OztzQkFFckI7QUFGS2dCLE1BQUFBLEdBQUc7QUFJVCxJQUFNQyxTQUFTLEdBQUdqQix5RUFBVzs7O3NCQU01QjtBQU5LaUIsTUFBQUEsU0FBUztBQVFmLElBQU1HLE9BQU8sR0FBR3BCLHlFQUFXOzs7c0JBSTFCO0FBSktvQixNQUFBQSxPQUFPO0FBTWIsK0RBQWVqQixRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0TGlzdC50c3g/YzMzZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9zdCB7XG4gICAgaWQ6IHN0cmluZztcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGltZzogc3RyaW5nO1xuICAgIHRhZzogc3RyaW5nW107XG4gICAgZGF0ZTogc3RyaW5nO1xufVxuICBcbmV4cG9ydCBpbnRlcmZhY2UgUG9zdExpc3RQcm9wcyB7XG4gICAgcG9zdHM6IFBvc3RbXTtcbn1cblxuY29uc3QgUG9zdExpc3Q6IFJlYWN0LkZDPFBvc3RMaXN0UHJvcHM+ID0gKHsgcG9zdHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxGb3JtPlxuICAgICAgPFBvc3RMaXN0Q29udGFpbmVyPlxuICAgICAgICB7cG9zdHMubWFwKChwb3N0KSA9PiAoXG4gICAgICAgICAgPExpbmsgaHJlZj17YC8ke3Bvc3QuaWR9YH0+XG4gICAgICAgICAgICA8UG9zdEl0ZW0ga2V5PXtwb3N0LmlkfT5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17cG9zdC5pbWd9IHdpZHRoPXsxNjB9IGhlaWdodD17MTYwfS8+XG4gICAgICAgICAgICAgIDxEaXY+PFBvc3RUaXRsZT57cG9zdC50aXRsZX08L1Bvc3RUaXRsZT48L0Rpdj5cbiAgICAgICAgICAgICAgICB7cG9zdC50YWcubWFwKCh0YWcpID0+IChcbiAgICAgICAgICAgICAgICAgIDxUYWdGb3JtPlxuICAgICAgICAgICAgICAgICAgICB7dGFnfVxuICAgICAgICAgICAgICAgICAgPC9UYWdGb3JtPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9Qb3N0SXRlbT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICkpfVxuICAgICAgPC9Qb3N0TGlzdENvbnRhaW5lcj5cbiAgICA8L0Zvcm0+XG4gICk7XG59O1xuXG5jb25zdCBGb3JtID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDQwLjc1cmVtO1xuICBwYWRkaW5nOiA4cmVtIDRyZW07XG5gXG5cbmNvbnN0IFBvc3RMaXN0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgZ3JpZC1nYXA6IDJyZW07XG5gO1xuXG5jb25zdCBQb3N0SXRlbSA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxNS42MjVyZW07XG4gIGhlaWdodDogMTUuNjI1cmVtO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEuMjVyZW07XG4gIGJhY2tncm91bmQ6IHJnYmEoMjE3LCAyMTcsIDIxNywgMC4xMyk7XG4gIGJveC1zaGFkb3c6IDRweCA0cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjApO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gIH1cbmA7XG5cbmNvbnN0IERpdiA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xuYFxuXG5jb25zdCBQb3N0VGl0bGUgPSBzdHlsZWQuc3BhbmBcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuYDtcblxuY29uc3QgVGFnRm9ybSA9IHN0eWxlZC5zcGFuYFxuICBwYWRkaW5nOiAwLjEyNXJlbSAwLjVyZW07XG4gIGJvcmRlcjogMnB4IHNvbGlkICM2MURBRkI7O1xuICBib3JkZXItcmFkaXVzOiAxLjI1cmVtO1xuYFxuXG5leHBvcnQgZGVmYXVsdCBQb3N0TGlzdDsiXSwibmFtZXMiOlsic3R5bGVkIiwiTGluayIsIkltYWdlIiwiUG9zdExpc3QiLCJwb3N0cyIsIkZvcm0iLCJQb3N0TGlzdENvbnRhaW5lciIsIm1hcCIsInBvc3QiLCJocmVmIiwiaWQiLCJQb3N0SXRlbSIsInNyYyIsImltZyIsIndpZHRoIiwiaGVpZ2h0IiwiRGl2IiwiUG9zdFRpdGxlIiwidGl0bGUiLCJ0YWciLCJUYWdGb3JtIiwiZGl2Iiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/PostList.tsx\n"));

/***/ })

});