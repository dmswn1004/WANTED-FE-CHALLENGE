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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  width: 40.75rem;\\n  padding: 8rem 4rem;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  display: grid;\\n  grid-template-columns: repeat(2, 1fr);\\n  grid-gap: 2rem;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  width: 15.625rem;\\n  height: 15.625rem;\\n  padding: 0.5rem;\\n  border-radius: 1.25rem;\\n  background: rgba(217, 217, 217, 0.13);\\n  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.20);\\n  text-align: center;\\n\\n  &:hover {\\n    background: white;\\n  }\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  padding: 0.5rem 0;\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  color: #000;\\n  font-size: 1.25rem;\\n  font-style: normal;\\n  font-weight: 500;\\n  line-height: normal;\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  // width: 10rem;\\n  border: 1px solid #000;\\n  border-radius: 1.25rem;\\n\"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\nvar PostList = function(param) {\n    var posts = param.posts;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Form, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(PostListContainer, {\n            children: posts.map(function(post) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/\".concat(post.id),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(PostItem, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                src: post.img,\n                                width: 160,\n                                height: 160\n                            }, void 0, false, {\n                                fileName: \"/Users/macpro/code repository/WANTED-FE-CHALLENGE/Week2/components/PostList.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Div, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(PostTitle, {\n                                    children: post.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/macpro/code repository/WANTED-FE-CHALLENGE/Week2/components/PostList.tsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 20\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/macpro/code repository/WANTED-FE-CHALLENGE/Week2/components/PostList.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TagForm, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                    children: post.tag\n                                }, void 0, false, {\n                                    fileName: \"/Users/macpro/code repository/WANTED-FE-CHALLENGE/Week2/components/PostList.tsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 24\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/macpro/code repository/WANTED-FE-CHALLENGE/Week2/components/PostList.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, post.id, true, {\n                        fileName: \"/Users/macpro/code repository/WANTED-FE-CHALLENGE/Week2/components/PostList.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/macpro/code repository/WANTED-FE-CHALLENGE/Week2/components/PostList.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 11\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/macpro/code repository/WANTED-FE-CHALLENGE/Week2/components/PostList.tsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/macpro/code repository/WANTED-FE-CHALLENGE/Week2/components/PostList.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, _this);\n};\n_c = PostList;\nvar Form = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n    displayName: \"PostList__Form\",\n    componentId: \"sc-c1ca4ac9-0\"\n})(_templateObject());\n_c1 = Form;\nvar PostListContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n    displayName: \"PostList__PostListContainer\",\n    componentId: \"sc-c1ca4ac9-1\"\n})(_templateObject1());\n_c2 = PostListContainer;\nvar PostItem = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n    displayName: \"PostList__PostItem\",\n    componentId: \"sc-c1ca4ac9-2\"\n})(_templateObject2());\n_c3 = PostItem;\nvar Div = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n    displayName: \"PostList__Div\",\n    componentId: \"sc-c1ca4ac9-3\"\n})(_templateObject3());\n_c4 = Div;\nvar PostTitle = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].span.withConfig({\n    displayName: \"PostList__PostTitle\",\n    componentId: \"sc-c1ca4ac9-4\"\n})(_templateObject4());\n_c5 = PostTitle;\nvar TagForm = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n    displayName: \"PostList__TagForm\",\n    componentId: \"sc-c1ca4ac9-5\"\n})(_templateObject5());\n_c6 = TagForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostList);\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6;\n$RefreshReg$(_c, \"PostList\");\n$RefreshReg$(_c1, \"Form\");\n$RefreshReg$(_c2, \"PostListContainer\");\n$RefreshReg$(_c3, \"PostItem\");\n$RefreshReg$(_c4, \"Div\");\n$RefreshReg$(_c5, \"PostTitle\");\n$RefreshReg$(_c6, \"TagForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3RMaXN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ1Y7QUFDRTtBQWMvQixJQUFNRyxRQUFRLEdBQTRCLGdCQUFlO1FBQVpDLEtBQUssU0FBTEEsS0FBSztJQUNoRCxxQkFDRSw4REFBQ0MsSUFBSTtrQkFDSCw0RUFBQ0MsaUJBQWlCO3NCQUNmRixLQUFLLENBQUNHLEdBQUcsQ0FBQyxTQUFDQyxJQUFJO3FDQUNkLDhEQUFDUCxrREFBSTtvQkFBQ1EsSUFBSSxFQUFFLEdBQUUsQ0FBVSxPQUFSRCxJQUFJLENBQUNFLEVBQUUsQ0FBRTs4QkFDdkIsNEVBQUNDLFFBQVE7OzBDQUNQLDhEQUFDVCxtREFBSztnQ0FBQ1UsR0FBRyxFQUFFSixJQUFJLENBQUNLLEdBQUc7Z0NBQUVDLEtBQUssRUFBRSxHQUFHO2dDQUFFQyxNQUFNLEVBQUUsR0FBRzs7Ozs7cUNBQUc7MENBQ2hELDhEQUFDQyxHQUFHOzBDQUFDLDRFQUFDQyxTQUFTOzhDQUFFVCxJQUFJLENBQUNVLEtBQUs7Ozs7O3lDQUFhOzs7OztxQ0FBTTswQ0FDOUMsOERBQUNDLE9BQU87MENBQUMsNEVBQUNDLE1BQUk7OENBQUVaLElBQUksQ0FBQ2EsR0FBRzs7Ozs7eUNBQVE7Ozs7O3FDQUFVOzt1QkFIN0JiLElBQUksQ0FBQ0UsRUFBRTs7Ozs2QkFJWDs7Ozs7eUJBQ047YUFDUixDQUFDOzs7OztpQkFDZ0I7Ozs7O2FBQ2YsQ0FDUDtBQUNKLENBQUM7QUFoQktQLEtBQUFBLFFBQVE7QUFrQmQsSUFBTUUsSUFBSSxHQUFHTCx3RUFBVTs7O3FCQUd0QjtBQUhLSyxNQUFBQSxJQUFJO0FBS1YsSUFBTUMsaUJBQWlCLEdBQUdOLHdFQUFVOzs7c0JBSW5DO0FBSktNLE1BQUFBLGlCQUFpQjtBQU12QixJQUFNSyxRQUFRLEdBQUdYLHdFQUFVOzs7c0JBWTFCO0FBWktXLE1BQUFBLFFBQVE7QUFjZCxJQUFNSyxHQUFHLEdBQUdoQix3RUFBVTs7O3NCQUVyQjtBQUZLZ0IsTUFBQUEsR0FBRztBQUlULElBQU1DLFNBQVMsR0FBR2pCLHlFQUFXOzs7c0JBTTVCO0FBTktpQixNQUFBQSxTQUFTO0FBUWYsSUFBTUUsT0FBTyxHQUFHbkIsd0VBQVU7OztzQkFJekI7QUFKS21CLE1BQUFBLE9BQU87QUFNYiwrREFBZWhCLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Bvc3RMaXN0LnRzeD9jMzNlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuZXhwb3J0IGludGVyZmFjZSBQb3N0IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgaW1nOiBzdHJpbmc7XG4gICAgdGFnOiBzdHJpbmdbXTtcbiAgICBkYXRlOiBzdHJpbmc7XG59XG4gIFxuZXhwb3J0IGludGVyZmFjZSBQb3N0TGlzdFByb3BzIHtcbiAgICBwb3N0czogUG9zdFtdO1xufVxuXG5jb25zdCBQb3N0TGlzdDogUmVhY3QuRkM8UG9zdExpc3RQcm9wcz4gPSAoeyBwb3N0cyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEZvcm0+XG4gICAgICA8UG9zdExpc3RDb250YWluZXI+XG4gICAgICAgIHtwb3N0cy5tYXAoKHBvc3QpID0+IChcbiAgICAgICAgICA8TGluayBocmVmPXtgLyR7cG9zdC5pZH1gfT5cbiAgICAgICAgICAgIDxQb3N0SXRlbSBrZXk9e3Bvc3QuaWR9PlxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtwb3N0LmltZ30gd2lkdGg9ezE2MH0gaGVpZ2h0PXsxNjB9Lz5cbiAgICAgICAgICAgICAgPERpdj48UG9zdFRpdGxlPntwb3N0LnRpdGxlfTwvUG9zdFRpdGxlPjwvRGl2PlxuICAgICAgICAgICAgICA8VGFnRm9ybT48c3Bhbj57cG9zdC50YWd9PC9zcGFuPjwvVGFnRm9ybT5cbiAgICAgICAgICAgIDwvUG9zdEl0ZW0+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApKX1cbiAgICAgIDwvUG9zdExpc3RDb250YWluZXI+XG4gICAgPC9Gb3JtPlxuICApO1xufTtcblxuY29uc3QgRm9ybSA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiA0MC43NXJlbTtcbiAgcGFkZGluZzogOHJlbSA0cmVtO1xuYFxuXG5jb25zdCBQb3N0TGlzdENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIGdyaWQtZ2FwOiAycmVtO1xuYDtcblxuY29uc3QgUG9zdEl0ZW0gPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTUuNjI1cmVtO1xuICBoZWlnaHQ6IDE1LjYyNXJlbTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBib3JkZXItcmFkaXVzOiAxLjI1cmVtO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIxNywgMjE3LCAyMTcsIDAuMTMpO1xuICBib3gtc2hhZG93OiA0cHggNHB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIwKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICB9XG5gO1xuXG5jb25zdCBEaXYgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAwLjVyZW0gMDtcbmBcblxuY29uc3QgUG9zdFRpdGxlID0gc3R5bGVkLnNwYW5gXG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbmA7XG5cbmNvbnN0IFRhZ0Zvcm0gPSBzdHlsZWQuZGl2YFxuICAvLyB3aWR0aDogMTByZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDEuMjVyZW07XG5gXG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RMaXN0OyJdLCJuYW1lcyI6WyJzdHlsZWQiLCJMaW5rIiwiSW1hZ2UiLCJQb3N0TGlzdCIsInBvc3RzIiwiRm9ybSIsIlBvc3RMaXN0Q29udGFpbmVyIiwibWFwIiwicG9zdCIsImhyZWYiLCJpZCIsIlBvc3RJdGVtIiwic3JjIiwiaW1nIiwid2lkdGgiLCJoZWlnaHQiLCJEaXYiLCJQb3N0VGl0bGUiLCJ0aXRsZSIsIlRhZ0Zvcm0iLCJzcGFuIiwidGFnIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/PostList.tsx\n"));

/***/ })

});