"use strict";
(self["webpackChunk_18_project"] = self["webpackChunk_18_project"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n.navbarContainer {\n  height: 3.5em;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  background-color: #c72c39;\n  color: #fff;\n}\n.navbarContainer__menuBars {\n  display: none;\n}\n.navbarContainer__ul {\n  padding: 0.6em 0;\n  margin: 0 22em;\n  display: flex;\n  justify-content: space-around;\n  align-items: stretch;\n  list-style-type: none;\n  position: relative;\n  z-index: 5;\n}\n.navbarContainer__ul--li {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 1.8rem;\n  font-weight: 600;\n}\n.navbarContainer__ul--anchor {\n  text-decoration: none;\n  color: #fff;\n  transition: all 0.25s ease;\n}\n.navbarContainer__ul--anchor:hover {\n  color: #ff8789;\n}\n@media (min-width: 48em) and (max-width: 64em) {\n  .navbarContainer__ul {\n    margin: 0 11em;\n  }\n}\n@media (min-width: 26.5625em) and (max-width: 48em) {\n  .navbarContainer__menuBars {\n    padding: 0.5em 1em;\n    display: flex;\n    justify-content: flex-end;\n    fill: #fff;\n    cursor: pointer;\n  }\n  .navbarContainer__ul {\n    width: 100%;\n    margin: 0;\n    padding: 2em 1em 1em 0;\n    align-items: flex-end;\n    flex-direction: column;\n    background-color: #c72c39;\n  }\n  .navbarContainer__ul--anchor {\n    color: #fff;\n  }\n  .navbarContainer .hide {\n    display: none;\n  }\n}\n@media (min-width: 23.4375em) and (max-width: 26.5625em) {\n  .navbarContainer__ul--li {\n    font-size: 1rem;\n  }\n}\n@media (min-width: 20em) and (max-width: 26.5625em) {\n  .navbarContainer__menuBars {\n    padding: 0.5em 1em;\n    display: flex;\n    justify-content: flex-end;\n    fill: #fff;\n    cursor: pointer;\n  }\n  .navbarContainer__ul {\n    width: 100%;\n    margin: 0;\n    padding: 2em 1em 1em 0;\n    align-items: flex-end;\n    flex-direction: column;\n    background-color: #c72c39;\n  }\n  .navbarContainer__ul--anchor {\n    color: #fff;\n  }\n  .navbarContainer .hide {\n    display: none;\n  }\n}\n\n.footerContainer {\n  height: 3.5em;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  background-color: #c72c39;\n  color: #fff;\n}\n.footerContainer__ul {\n  padding: 0.6em 0;\n  margin: 0 5em;\n  display: flex;\n  justify-content: space-between;\n  align-items: stretch;\n  list-style-type: none;\n}\n.footerContainer__ul--li {\n  padding: 0 0.5em;\n  display: flex;\n  justify-content: space-around;\n  cursor: pointer;\n}\n.footerContainer__ul--li #footerIcons {\n  fill: #fff;\n  height: \"10em\";\n  width: \"10em\";\n}\n.footerContainer__para {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 1rem;\n  font-weight: 500;\n}\n@media (min-width: 23.4375em) and (max-width: 26.5625em) {\n  .footerContainer__ul {\n    padding: 0;\n  }\n  .footerContainer > * {\n    margin-bottom: 1em;\n  }\n  .footerContainer__para {\n    font-size: 1.2rem;\n  }\n}\n@media (min-width: 20em) and (max-width: 26.5625em) {\n  .footerContainer {\n    height: 100%;\n    width: 100%;\n    padding: 1em 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n}\n\n.contentContainer {\n  height: 100%;\n  padding: 2em 3.5em;\n  margin: 3em 2em 0;\n  display: grid;\n  grid-template-areas: \"first second\" \"button button\";\n}\n.contentContainer__first {\n  grid-area: first;\n}\n.contentContainer__first--image {\n  height: 30em;\n  width: 30em;\n  object-fit: contain;\n  position: relative;\n  z-index: 1;\n}\n.contentContainer__second {\n  grid-area: second;\n  padding: 2em;\n  font-family: \"Roboto\", sans-serif;\n}\n.contentContainer__second p {\n  margin-top: 1em;\n  margin-right: 3em;\n  line-height: 1.5;\n}\n.contentContainer__third {\n  grid-area: button;\n  margin: 1em auto;\n}\n.contentContainer__third--button {\n  padding: 0.8em 3.5em;\n  border-radius: 1em;\n  border: none;\n  background-color: #4d0511;\n  color: #fff;\n  font-size: 1rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.25s ease;\n}\n.contentContainer__third--button:hover {\n  background-color: #c72c39;\n}\n@media (min-width: 48em) and (max-width: 64em) {\n  .contentContainer {\n    height: 100%;\n    padding: 0;\n    margin: 2em;\n  }\n  .contentContainer__first {\n    margin: 0;\n  }\n  .contentContainer__second {\n    margin: 0;\n    padding: 0;\n  }\n  .contentContainer__second p {\n    margin: 0;\n    padding: 0;\n  }\n}\n@media (min-width: 26.5625em) and (max-width: 48em) {\n  .contentContainer {\n    height: 100%;\n    padding: 5em;\n    margin: 1em;\n    grid-template-areas: \"first\" \"second\" \"button\";\n  }\n  .contentContainer__first, .contentContainer__second {\n    margin: 0;\n  }\n  .contentContainer__first--image {\n    height: 100%;\n    width: 100%;\n    object-fit: cover;\n  }\n  .contentContainer__second {\n    margin-top: 1em;\n    font-size: 0.9rem;\n  }\n  .contentContainer__second p {\n    margin-top: 1em;\n    padding: 0;\n  }\n  .contentContainer__third {\n    margin-top: 1em;\n  }\n}\n@media (min-width: 23.4375em) and (max-width: 26.5625em) {\n  .contentContainer:not(:last-child) {\n    margin: 0;\n    padding: 0;\n  }\n  .contentContainer__first--image {\n    height: 100%;\n    width: 100%;\n    object-fit: cover;\n  }\n  .contentContainer__second p {\n    margin: 0;\n    padding: 0;\n  }\n}\n@media (min-width: 20em) and (max-width: 26.5625em) {\n  .contentContainer {\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    grid-template-areas: \"first\" \"second\" \"button\";\n  }\n  .contentContainer__first, .contentContainer__second {\n    margin: 0;\n  }\n  .contentContainer__first--image {\n    height: 100%;\n    width: 100%;\n    object-fit: cover;\n  }\n  .contentContainer__second p {\n    margin: 0;\n    padding: 0;\n  }\n}\n\n.menuContainer {\n  height: 100%;\n  padding: 4em 5em;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  gap: 1em;\n}\n.menuContainer__item {\n  display: flex;\n  height: 20em;\n  width: 100%;\n  color: #000;\n}\n.menuContainer__item--img {\n  height: 20em;\n  width: 20em;\n  background-color: #000;\n}\n.menuContainer__item--img img {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n}\n.menuContainer__item--content {\n  width: 50%;\n  padding: 2em 1em;\n}\n.menuContainer__item--content h3 {\n  font-size: 1.5rem;\n  margin-bottom: 0.5em;\n}\n.menuContainer__item--content p {\n  font-size: 1.25rem;\n}\n@media (min-width: 48em) and (max-width: 64em) {\n  .menuContainer {\n    padding: 1em;\n  }\n}\n@media (min-width: 26.5625em) and (max-width: 48em) {\n  .menuContainer {\n    padding: 2em 1em;\n    grid-template-columns: 1fr;\n  }\n  .menuContainer__item--content h3 {\n    margin-bottom: 1em;\n  }\n  .menuContainer__item--content p {\n    line-height: 1.5;\n  }\n}\n@media (min-width: 20em) and (max-width: 26.5625em) {\n  .menuContainer {\n    padding: 1em 0.5em;\n    grid-template-columns: 1fr;\n    grid-template-rows: 2fr;\n  }\n  .menuContainer__item {\n    height: 30em;\n    flex-direction: column;\n  }\n  .menuContainer__item--img {\n    height: 20em;\n    width: 100%;\n  }\n  .menuContainer__item--content {\n    width: 100%;\n    padding: 1em;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/main.scss","webpack://./src/styles/_colors.scss","webpack://./src/styles/_mixins.scss"],"names":[],"mappings":"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","sourcesContent":["@import './colors';\r\n@import './mixins';\r\n\r\n@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');\r\n\r\n* {\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n// ----------- RESUABLE COMPONENTS -----------\r\n.navbarContainer {\r\n\theight: 3.5em;\r\n\twidth: 100%;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tbackground-color: $redColor---2;\r\n\tcolor: $neutral;\r\n\r\n\t&__menuBars {\r\n\t\tdisplay: none;\r\n\t}\r\n\r\n\t&__ul {\r\n\t\tpadding: 0.6em 0;\r\n\t\tmargin: 0 22em;\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-around;\r\n\t\talign-items: stretch;\r\n\t\tlist-style-type: none;\r\n\t\tposition: relative;\r\n\t\tz-index: 5;\r\n\r\n\t\t&--li {\r\n\t\t\tfont-family: 'Roboto', sans-serif;\r\n\t\t\tfont-size: 1.8rem;\r\n\t\t\tfont-weight: 600;\r\n\t\t}\r\n\r\n\t\t&--anchor {\r\n\t\t\ttext-decoration: none;\r\n\t\t\tcolor: $neutral;\r\n\t\t\ttransition: all 0.25s ease;\r\n\r\n\t\t\t&:hover {\r\n\t\t\t\tcolor: $redColor---3;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t@include laptop-small {\r\n\t\t&__ul {\r\n\t\t\tmargin: 0 11em;\r\n\t\t}\r\n\t}\r\n\r\n\t@include tablet {\r\n\t\t&__menuBars {\r\n\t\t\tpadding: 0.5em 1em;\r\n\t\t\tdisplay: flex;\r\n\t\t\tjustify-content: flex-end;\r\n\t\t\tfill: $neutral;\r\n\t\t\tcursor: pointer;\r\n\t\t}\r\n\r\n\t\t&__ul {\r\n\t\t\twidth: 100%;\r\n\t\t\tmargin: 0;\r\n\t\t\tpadding: 2em 1em 1em 0;\r\n\t\t\talign-items: flex-end;\r\n\t\t\tflex-direction: column;\r\n\t\t\tbackground-color: $redColor---2;\r\n\r\n\t\t\t&--anchor {\r\n\t\t\t\tcolor: $neutral;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t.hide {\r\n\t\t\tdisplay: none;\r\n\t\t}\r\n\t}\r\n\r\n\t@include mobile-large {\r\n\t\t&__ul {\r\n\t\t\t&--li {\r\n\t\t\t\tfont-size: 1rem;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t@include mobile-allSize {\r\n\t\t&__menuBars {\r\n\t\t\tpadding: 0.5em 1em;\r\n\t\t\tdisplay: flex;\r\n\t\t\tjustify-content: flex-end;\r\n\t\t\tfill: $neutral;\r\n\t\t\tcursor: pointer;\r\n\t\t}\r\n\r\n\t\t&__ul {\r\n\t\t\twidth: 100%;\r\n\t\t\tmargin: 0;\r\n\t\t\tpadding: 2em 1em 1em 0;\r\n\t\t\talign-items: flex-end;\r\n\t\t\tflex-direction: column;\r\n\t\t\tbackground-color: $redColor---2;\r\n\r\n\t\t\t&--anchor {\r\n\t\t\t\tcolor: $neutral;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t.hide {\r\n\t\t\tdisplay: none;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n.footerContainer {\r\n\theight: 3.5em;\r\n\twidth: 100%;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tdisplay: flex;\r\n\tjustify-content: space-around;\r\n\talign-items: center;\r\n\tbackground-color: $redColor---2;\r\n\tcolor: $neutral;\r\n\r\n\t&__ul {\r\n\t\tpadding: 0.6em 0;\r\n\t\tmargin: 0 5em;\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t\talign-items: stretch;\r\n\t\tlist-style-type: none;\r\n\r\n\t\t&--li {\r\n\t\t\tpadding: 0 0.5em;\r\n\t\t\tdisplay: flex;\r\n\t\t\tjustify-content: space-around;\r\n\t\t\tcursor: pointer;\r\n\r\n\t\t\t#footerIcons {\r\n\t\t\t\tfill: #fff;\r\n\t\t\t\theight: '10em';\r\n\t\t\t\twidth: '10em';\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t&__para {\r\n\t\tfont-family: 'Roboto', sans-serif;\r\n\t\tfont-size: 1rem;\r\n\t\tfont-weight: 500;\r\n\t}\r\n\r\n\t@include mobile-large {\r\n\t\t&__ul {\r\n\t\t\tpadding: 0;\r\n\t\t}\r\n\r\n\t\t& > * {\r\n\t\t\tmargin-bottom: 1em;\r\n\t\t}\r\n\r\n\t\t&__para {\r\n\t\t\tfont-size: 1.2rem;\r\n\t\t}\r\n\t}\r\n\r\n\t@include mobile-allSize {\r\n\t\theight: 100%;\r\n\t\twidth: 100%;\r\n\t\tpadding: 1em 0;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tjustify-content: center;\r\n\t}\r\n}\r\n\r\n// ----------- HOME COMPONENTS -----------\r\n\r\n.contentContainer {\r\n\theight: 100%;\r\n\tpadding: 2em 3.5em;\r\n\tmargin: 3em 2em 0;\r\n\tdisplay: grid;\r\n\tgrid-template-areas:\r\n\t\t'first second'\r\n\t\t'button button';\r\n\r\n\t&__first {\r\n\t\tgrid-area: first;\r\n\t\t// margin-right: 1em;\r\n\r\n\t\t&--image {\r\n\t\t\theight: 30em;\r\n\t\t\twidth: 30em;\r\n\t\t\tobject-fit: contain;\r\n\t\t\tposition: relative;\r\n\t\t\tz-index: 1;\r\n\t\t}\r\n\t}\r\n\r\n\t&__second {\r\n\t\tgrid-area: second;\r\n\t\tpadding: 2em;\r\n\t\tfont-family: 'Roboto', sans-serif;\r\n\r\n\t\tp {\r\n\t\t\tmargin-top: 1em;\r\n\t\t\tmargin-right: 3em;\r\n\t\t\tline-height: 1.5;\r\n\t\t}\r\n\t}\r\n\r\n\t&__third {\r\n\t\tgrid-area: button;\r\n\t\tmargin: 1em auto;\r\n\r\n\t\t&--button {\r\n\t\t\tpadding: 0.8em 3.5em;\r\n\t\t\tborder-radius: 1em;\r\n\t\t\tborder: none;\r\n\t\t\tbackground-color: $redColor---1;\r\n\t\t\tcolor: $neutral;\r\n\t\t\tfont-size: 1rem;\r\n\t\t\tfont-weight: 700;\r\n\t\t\tcursor: pointer;\r\n\t\t\ttransition: all 0.25s ease;\r\n\r\n\t\t\t&:hover {\r\n\t\t\t\tbackground-color: $redColor---2;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t@include laptop-small {\r\n\t\theight: 100%;\r\n\t\tpadding: 0;\r\n\t\tmargin: 2em;\r\n\r\n\t\t&__first {\r\n\t\t\tmargin: 0;\r\n\t\t}\r\n\r\n\t\t&__second {\r\n\t\t\tmargin: 0;\r\n\t\t\tpadding: 0;\r\n\r\n\t\t\tp {\r\n\t\t\t\tmargin: 0;\r\n\t\t\t\tpadding: 0;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t@include tablet {\r\n\t\theight: 100%;\r\n\t\tpadding: 5em;\r\n\t\tmargin: 1em;\r\n\t\tgrid-template-areas:\r\n\t\t\t'first'\r\n\t\t\t'second'\r\n\t\t\t'button';\r\n\r\n\t\t&__first,\r\n\t\t&__second {\r\n\t\t\tmargin: 0;\r\n\t\t}\r\n\r\n\t\t&__first {\r\n\t\t\t&--image {\r\n\t\t\t\theight: 100%;\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\tobject-fit: cover;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t&__second {\r\n\t\t\tmargin-top: 1em;\r\n\t\t\tfont-size: 0.9rem;\r\n\r\n\t\t\tp {\r\n\t\t\t\tmargin-top: 1em;\r\n\t\t\t\tpadding: 0;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t&__third {\r\n\t\t\tmargin-top: 1em;\r\n\t\t}\r\n\t}\r\n\r\n\t@include mobile-large {\r\n\t\t&:not(:last-child) {\r\n\t\t\tmargin: 0;\r\n\t\t\tpadding: 0;\r\n\t\t}\r\n\r\n\t\t&__first {\r\n\t\t\t&--image {\r\n\t\t\t\theight: 100%;\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\tobject-fit: cover;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t&__second {\r\n\t\t\tp {\r\n\t\t\t\tmargin: 0;\r\n\t\t\t\tpadding: 0;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t@include mobile-allSize {\r\n\t\theight: 100%;\r\n\t\tmargin: 0;\r\n\t\tpadding: 0;\r\n\t\tgrid-template-areas:\r\n\t\t\t'first'\r\n\t\t\t'second'\r\n\t\t\t'button';\r\n\r\n\t\t&__first,\r\n\t\t&__second {\r\n\t\t\tmargin: 0;\r\n\t\t}\r\n\r\n\t\t&__first {\r\n\t\t\t&--image {\r\n\t\t\t\theight: 100%;\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\tobject-fit: cover;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t&__second {\r\n\t\t\tp {\r\n\t\t\t\tmargin: 0;\r\n\t\t\t\tpadding: 0;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n// ----------- MENU COMPONENTS -----------\r\n\r\n.menuContainer {\r\n\theight: 100%;\r\n\tpadding: 4em 5em;\r\n\tdisplay: grid;\r\n\tgrid-template-columns: repeat(2, 1fr);\r\n\tgrid-template-rows: repeat(2, 1fr);\r\n\tgap: 1em;\r\n\r\n\t&__item {\r\n\t\tdisplay: flex;\r\n\t\theight: 20em;\r\n\t\twidth: 100%;\r\n\t\tcolor: #000;\r\n\r\n\t\t&--img {\r\n\t\t\theight: 20em;\r\n\t\t\twidth: 20em;\r\n\t\t\tbackground-color: #000;\r\n\r\n\t\t\timg {\r\n\t\t\t\theight: 100%;\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\tobject-fit: cover;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t&--content {\r\n\t\t\twidth: 50%;\r\n\t\t\tpadding: 2em 1em;\r\n\r\n\t\t\th3 {\r\n\t\t\t\tfont-size: 1.5rem;\r\n\t\t\t\tmargin-bottom: 0.5em;\r\n\t\t\t}\r\n\r\n\t\t\tp {\r\n\t\t\t\tfont-size: 1.25rem;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t@include laptop-small {\r\n\t\tpadding: 1em;\r\n\t}\r\n\r\n\t@include tablet {\r\n\t\tpadding: 2em 1em;\r\n\t\tgrid-template-columns: 1fr;\r\n\r\n\t\t&__item {\r\n\t\t\t&--content {\r\n\t\t\t\th3 {\r\n\t\t\t\t\tmargin-bottom: 1em;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tp {\r\n\t\t\t\t\tline-height: 1.5;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t@include mobile-allSize {\r\n\t\tpadding: 1em 0.5em;\r\n\t\tgrid-template-columns: 1fr;\r\n\t\tgrid-template-rows: 2fr;\r\n\r\n\t\t&__item {\r\n\t\t\theight: 30em;\r\n\t\t\tflex-direction: column;\r\n\r\n\t\t\t&--img {\r\n\t\t\t\theight: 20em;\r\n\t\t\t\twidth: 100%;\r\n\t\t\t}\r\n\r\n\t\t\t&--content {\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\tpadding: 1em;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n","$neutral: #fff;\r\n$redColor---1: #4d0511;\r\n$redColor---2: #c72c39;\r\n$redColor---3: #ff8789;\r\n$blueColor---1: #103e8f;\r\n$blueColor---2: #16b9f5;\r\n$blueColor---3: #c2e7ff;\r\n","@mixin mobile-allSize {\r\n\t@media (min-width: 20em) and (max-width: 26.5625em) {\r\n\t\t@content;\r\n\t}\r\n}\r\n\r\n@mixin mobile-small {\r\n\t@media (max-width: 20em) {\r\n\t\t@content;\r\n\t}\r\n}\r\n\r\n@mixin mobile-medium {\r\n\t@media (min-width: 20em) and (max-width: 23.4375em) {\r\n\t\t@content;\r\n\t}\r\n}\r\n\r\n@mixin mobile-large {\r\n\t@media (min-width: 23.4375em) and (max-width: 26.5625em) {\r\n\t\t@content;\r\n\t}\r\n}\r\n\r\n@mixin tablet-mobile {\r\n\t@media (min-width: 20em) and (max-width: 48em) {\r\n\t\t@content;\r\n\t}\r\n}\r\n\r\n@mixin tablet {\r\n\t@media (min-width: 26.5625em) and (max-width: 48em) {\r\n\t\t@content;\r\n\t}\r\n}\r\n\r\n@mixin laptop-small {\r\n\t@media (min-width: 48em) and (max-width: 64em) {\r\n\t\t@content;\r\n\t}\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_home_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/home/home */ "./src/js/home/home.js");


(0,_js_home_home__WEBPACK_IMPORTED_MODULE_0__.homeComponents)();


/***/ }),

/***/ "./src/js/eventListener/index.js":
/*!***************************************!*\
  !*** ./src/js/eventListener/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "funcEvent": () => (/* binding */ funcEvent)
/* harmony export */ });
const funcEvent = () => {
	const navbarMenu = document.querySelector('#menuBar');
	const navbarList = document.querySelector('.navbarContainer__ul');
	const eventFunc = () => {
		navbarList.classList.toggle('hide');
	};
	navbarMenu.addEventListener('click', eventFunc);
	return navbarMenu;
};


/***/ }),

/***/ "./src/js/home/contentSection.js":
/*!***************************************!*\
  !*** ./src/js/home/contentSection.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contentComponents": () => (/* binding */ contentComponents)
/* harmony export */ });
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _images_homeGundam_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/homeGundam.jpg */ "./src/images/homeGundam.jpg");



const contentComponents = () => {
	const div = document.createElement('div');
	const div1 = document.createElement('div');
	const div2 = document.createElement('div');
	const div3 = document.createElement('div');
	const h1 = document.createElement('h1');
	const para = document.createElement('p');
	const button = document.createElement('button');

	const myImage = new Image();

	myImage.src = _images_homeGundam_jpg__WEBPACK_IMPORTED_MODULE_1__;
	h1.textContent = 'Gundam Cafe';
	para.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
		Donec facilisis massa eget mauris dictum ultrices in id 
		justo. Suspendisse vel ornare quam. Vestibulum ante ipsum 
		primis in faucibus orci luctus et ultrices posuere cubilia
		curae; Donec a tempor eros. Ut viverra laoreet leo at 
		aliquet. Aenean a varius nisl. Interdum et malesuada fames
		ac ante ipsum primis in faucibus. Maecenas ut risus vel
		ante dictum euismod. Sed malesuada tortor libero, ut 
		hendrerit augue rutrum aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
		Donec facilisis massa eget mauris dictum ultrices in id 
		justo. Suspendisse vel ornare quam. Vestibulum ante ipsum 
		primis in faucibus orci luctus et ultrices posuere cubilia
		curae; Donec a tempor eros. Ut viverra laoreet leo at 
		aliquet. Aenean a varius nisl. Interdum et malesuada fames
		ac ante ipsum primis in faucibus.`;
	button.textContent = 'Menu';

	div.classList.add('contentContainer');
	div1.classList.add('contentContainer__first');
	div2.classList.add('contentContainer__second');
	div3.classList.add('contentContainer__third');
	myImage.classList.add('contentContainer__first--image');
	button.classList.add('contentContainer__third--button');

	div1.appendChild(myImage);
	div2.appendChild(h1);
	div2.appendChild(para);
	div3.appendChild(button);
	div.appendChild(div1);
	div.appendChild(div2);
	div.appendChild(div3);

	return div;
};


/***/ }),

/***/ "./src/js/home/home.js":
/*!*****************************!*\
  !*** ./src/js/home/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homeComponents": () => (/* binding */ homeComponents)
/* harmony export */ });
/* harmony import */ var _reusableComponents_navbarSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reusableComponents/navbarSection */ "./src/js/reusableComponents/navbarSection.js");
/* harmony import */ var _reusableComponents_footerSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusableComponents/footerSection */ "./src/js/reusableComponents/footerSection.js");
/* harmony import */ var _home_contentSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home/contentSection */ "./src/js/home/contentSection.js");
/* harmony import */ var _eventListener_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../eventListener/index */ "./src/js/eventListener/index.js");





const homeComponents = () => {
	document.body.appendChild((0,_reusableComponents_navbarSection__WEBPACK_IMPORTED_MODULE_0__.navbarComponent)());
	document.body.appendChild((0,_home_contentSection__WEBPACK_IMPORTED_MODULE_2__.contentComponents)());
	document.body.appendChild((0,_reusableComponents_footerSection__WEBPACK_IMPORTED_MODULE_1__.footerComponent)());
	(0,_eventListener_index__WEBPACK_IMPORTED_MODULE_3__.funcEvent)();
};


/***/ }),

/***/ "./src/js/reusableComponents/data.js":
/*!*******************************************!*\
  !*** ./src/js/reusableComponents/data.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "footerArr": () => (/* binding */ footerArr)
/* harmony export */ });
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/main.scss */ "./src/styles/main.scss");


const date = new Date();
const getYear = date.getFullYear();

const footerArr = [
	{
		title: 'Gundam Cafe',
		icons: [
			`<svg id="footerIcons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height='2em' width='2em'>
                <path  d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/>
            </svg>`,
			`<svg id="footerIcons" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 496 512' height='2em' width='2em'>
                <path  d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z' />
            </svg>`,
			`<svg id="footerIcons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height='2em' width='2em'>
                <path  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
            </svg>`,
			`<svg id="footerIcons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height='2em' width='2em'>
                <path  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
            </svg>`
		],
		date: `All right reserve @${getYear}`
	}
];


/***/ }),

/***/ "./src/js/reusableComponents/footerSection.js":
/*!****************************************************!*\
  !*** ./src/js/reusableComponents/footerSection.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "footerComponent": () => (/* binding */ footerComponent)
/* harmony export */ });
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./src/js/reusableComponents/data.js");



const footerComponent = () => {
	const div = document.createElement('div');
	const ul = document.createElement('ul');
	const para1 = document.createElement('p');
	const para2 = document.createElement('p');

	div.classList.add('footerContainer');
	ul.classList.add('footerContainer__ul');
	para1.classList.add('footerContainer__para');
	para2.classList.add('footerContainer__para');

	for (let i = 0; i < _data__WEBPACK_IMPORTED_MODULE_1__.footerArr.length; i++) {
		const fontIcons = _data__WEBPACK_IMPORTED_MODULE_1__.footerArr[i].icons;

		for (let j = 0; j < fontIcons.length; j++) {
			const li = document.createElement('li');

			li.classList.add('footerContainer__ul--li');
			li.innerHTML = fontIcons[j];

			ul.appendChild(li);
		}

		para1.textContent = _data__WEBPACK_IMPORTED_MODULE_1__.footerArr[i].title;
		para2.textContent = _data__WEBPACK_IMPORTED_MODULE_1__.footerArr[i].date;
	}

	div.appendChild(para1);
	div.appendChild(ul);
	div.appendChild(para2);

	return div;
};


/***/ }),

/***/ "./src/js/reusableComponents/navbarSection.js":
/*!****************************************************!*\
  !*** ./src/js/reusableComponents/navbarSection.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navbarComponent": () => (/* binding */ navbarComponent)
/* harmony export */ });
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/main.scss */ "./src/styles/main.scss");


const navbarComponent = () => {
	const nameArr = ['Home', 'Menu', 'Contact'];
	const linkArr = ['index.html', 'menu.html', 'contact.html'];
	const div = document.createElement('div');
	const ul = document.createElement('ul');
	const menuBars = document.createElement('div');

	div.classList.add('navbarContainer');
	ul.classList.add('navbarContainer__ul');
	ul.classList.add('hide');
	menuBars.classList.add('navbarContainer__menuBars');
	// menuBars.setAttribute();

	menuBars.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="2.5em" width="2.5em" id="menuBar"><path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/></svg>`;

	for (let i = 0; i < nameArr.length; i++) {
		const li = document.createElement('li');
		const anchor = document.createElement('a');

		anchor.textContent = nameArr[i];

		for (let j = 0; j < linkArr.length; j++) {
			anchor.setAttribute('href', `${linkArr[i]}`);
		}

		anchor.classList.add('navbarContainer__ul--anchor');
		li.classList.add('navbarContainer__ul--li');

		li.appendChild(anchor);
		ul.appendChild(li);
	}

	div.appendChild(menuBars);
	div.appendChild(ul);

	return div;
};


/***/ }),

/***/ "./src/images/homeGundam.jpg":
/*!***********************************!*\
  !*** ./src/images/homeGundam.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f0f1e5bca89da42aa312.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVcsWUFBWSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssTUFBTSxNQUFNLFVBQVUsS0FBSyxLQUFLLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxZQUFZLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsWUFBWSxZQUFZLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFlBQVksWUFBWSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1B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eEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw0Q0FBUztBQUMvQixzQkFBc0IsNENBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ25DZ0M7QUFDaEM7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsb0JBQW9CO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isb0JBQW9CO0FBQ3RDLGtDQUFrQyxXQUFXO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8xOF9wcm9qZWN0Ly4vc3JjL3N0eWxlcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vMThfcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vMThfcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovLzE4X3Byb2plY3QvLi9zcmMvc3R5bGVzL21haW4uc2Nzcz82OWM3Iiwid2VicGFjazovLzE4X3Byb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vMThfcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vMThfcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8xOF9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLzE4X3Byb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly8xOF9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vMThfcHJvamVjdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8xOF9wcm9qZWN0Ly4vc3JjL2pzL2V2ZW50TGlzdGVuZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vMThfcHJvamVjdC8uL3NyYy9qcy9ob21lL2NvbnRlbnRTZWN0aW9uLmpzIiwid2VicGFjazovLzE4X3Byb2plY3QvLi9zcmMvanMvaG9tZS9ob21lLmpzIiwid2VicGFjazovLzE4X3Byb2plY3QvLi9zcmMvanMvcmV1c2FibGVDb21wb25lbnRzL2RhdGEuanMiLCJ3ZWJwYWNrOi8vMThfcHJvamVjdC8uL3NyYy9qcy9yZXVzYWJsZUNvbXBvbmVudHMvZm9vdGVyU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8xOF9wcm9qZWN0Ly4vc3JjL2pzL3JldXNhYmxlQ29tcG9uZW50cy9uYXZiYXJTZWN0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMzAwOzQwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5uYXZiYXJDb250YWluZXIge1xcbiAgaGVpZ2h0OiAzLjVlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjNzJjMzk7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLm5hdmJhckNvbnRhaW5lcl9fbWVudUJhcnMge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLm5hdmJhckNvbnRhaW5lcl9fdWwge1xcbiAgcGFkZGluZzogMC42ZW0gMDtcXG4gIG1hcmdpbjogMCAyMmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiA1O1xcbn1cXG4ubmF2YmFyQ29udGFpbmVyX191bC0tbGkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4ubmF2YmFyQ29udGFpbmVyX191bC0tYW5jaG9yIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XFxufVxcbi5uYXZiYXJDb250YWluZXJfX3VsLS1hbmNob3I6aG92ZXIge1xcbiAgY29sb3I6ICNmZjg3ODk7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA0OGVtKSBhbmQgKG1heC13aWR0aDogNjRlbSkge1xcbiAgLm5hdmJhckNvbnRhaW5lcl9fdWwge1xcbiAgICBtYXJnaW46IDAgMTFlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDI2LjU2MjVlbSkgYW5kIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gIC5uYXZiYXJDb250YWluZXJfX21lbnVCYXJzIHtcXG4gICAgcGFkZGluZzogMC41ZW0gMWVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBmaWxsOiAjZmZmO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuICAubmF2YmFyQ29udGFpbmVyX191bCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDJlbSAxZW0gMWVtIDA7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M3MmMzOTtcXG4gIH1cXG4gIC5uYXZiYXJDb250YWluZXJfX3VsLS1hbmNob3Ige1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gIH1cXG4gIC5uYXZiYXJDb250YWluZXIgLmhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMjMuNDM3NWVtKSBhbmQgKG1heC13aWR0aDogMjYuNTYyNWVtKSB7XFxuICAubmF2YmFyQ29udGFpbmVyX191bC0tbGkge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogMjYuNTYyNWVtKSB7XFxuICAubmF2YmFyQ29udGFpbmVyX19tZW51QmFycyB7XFxuICAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgZmlsbDogI2ZmZjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbiAgLm5hdmJhckNvbnRhaW5lcl9fdWwge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAyZW0gMWVtIDFlbSAwO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjNzJjMzk7XFxuICB9XFxuICAubmF2YmFyQ29udGFpbmVyX191bC0tYW5jaG9yIHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICB9XFxuICAubmF2YmFyQ29udGFpbmVyIC5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuXFxuLmZvb3RlckNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDMuNWVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjNzJjMzk7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLmZvb3RlckNvbnRhaW5lcl9fdWwge1xcbiAgcGFkZGluZzogMC42ZW0gMDtcXG4gIG1hcmdpbjogMCA1ZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcbi5mb290ZXJDb250YWluZXJfX3VsLS1saSB7XFxuICBwYWRkaW5nOiAwIDAuNWVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZm9vdGVyQ29udGFpbmVyX191bC0tbGkgI2Zvb3Rlckljb25zIHtcXG4gIGZpbGw6ICNmZmY7XFxuICBoZWlnaHQ6IFxcXCIxMGVtXFxcIjtcXG4gIHdpZHRoOiBcXFwiMTBlbVxcXCI7XFxufVxcbi5mb290ZXJDb250YWluZXJfX3BhcmEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDIzLjQzNzVlbSkgYW5kIChtYXgtd2lkdGg6IDI2LjU2MjVlbSkge1xcbiAgLmZvb3RlckNvbnRhaW5lcl9fdWwge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcbiAgLmZvb3RlckNvbnRhaW5lciA+ICoge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICB9XFxuICAuZm9vdGVyQ29udGFpbmVyX19wYXJhIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogMjYuNTYyNWVtKSB7XFxuICAuZm9vdGVyQ29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMWVtIDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcbn1cXG5cXG4uY29udGVudENvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAyZW0gMy41ZW07XFxuICBtYXJnaW46IDNlbSAyZW0gMDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiZmlyc3Qgc2Vjb25kXFxcIiBcXFwiYnV0dG9uIGJ1dHRvblxcXCI7XFxufVxcbi5jb250ZW50Q29udGFpbmVyX19maXJzdCB7XFxuICBncmlkLWFyZWE6IGZpcnN0O1xcbn1cXG4uY29udGVudENvbnRhaW5lcl9fZmlyc3QtLWltYWdlIHtcXG4gIGhlaWdodDogMzBlbTtcXG4gIHdpZHRoOiAzMGVtO1xcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5jb250ZW50Q29udGFpbmVyX19zZWNvbmQge1xcbiAgZ3JpZC1hcmVhOiBzZWNvbmQ7XFxuICBwYWRkaW5nOiAyZW07XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcbi5jb250ZW50Q29udGFpbmVyX19zZWNvbmQgcCB7XFxuICBtYXJnaW4tdG9wOiAxZW07XFxuICBtYXJnaW4tcmlnaHQ6IDNlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcbi5jb250ZW50Q29udGFpbmVyX190aGlyZCB7XFxuICBncmlkLWFyZWE6IGJ1dHRvbjtcXG4gIG1hcmdpbjogMWVtIGF1dG87XFxufVxcbi5jb250ZW50Q29udGFpbmVyX190aGlyZC0tYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDAuOGVtIDMuNWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRkMDUxMTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xcbn1cXG4uY29udGVudENvbnRhaW5lcl9fdGhpcmQtLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzcyYzM5O1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNDhlbSkgYW5kIChtYXgtd2lkdGg6IDY0ZW0pIHtcXG4gIC5jb250ZW50Q29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDJlbTtcXG4gIH1cXG4gIC5jb250ZW50Q29udGFpbmVyX19maXJzdCB7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG4gIC5jb250ZW50Q29udGFpbmVyX19zZWNvbmQge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxuICAuY29udGVudENvbnRhaW5lcl9fc2Vjb25kIHAge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAyNi41NjI1ZW0pIGFuZCAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAuY29udGVudENvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogNWVtO1xcbiAgICBtYXJnaW46IDFlbTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImZpcnN0XFxcIiBcXFwic2Vjb25kXFxcIiBcXFwiYnV0dG9uXFxcIjtcXG4gIH1cXG4gIC5jb250ZW50Q29udGFpbmVyX19maXJzdCwgLmNvbnRlbnRDb250YWluZXJfX3NlY29uZCB7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG4gIC5jb250ZW50Q29udGFpbmVyX19maXJzdC0taW1hZ2Uge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIH1cXG4gIC5jb250ZW50Q29udGFpbmVyX19zZWNvbmQge1xcbiAgICBtYXJnaW4tdG9wOiAxZW07XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgfVxcbiAgLmNvbnRlbnRDb250YWluZXJfX3NlY29uZCBwIHtcXG4gICAgbWFyZ2luLXRvcDogMWVtO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcbiAgLmNvbnRlbnRDb250YWluZXJfX3RoaXJkIHtcXG4gICAgbWFyZ2luLXRvcDogMWVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMjMuNDM3NWVtKSBhbmQgKG1heC13aWR0aDogMjYuNTYyNWVtKSB7XFxuICAuY29udGVudENvbnRhaW5lcjpub3QoOmxhc3QtY2hpbGQpIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcbiAgLmNvbnRlbnRDb250YWluZXJfX2ZpcnN0LS1pbWFnZSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgfVxcbiAgLmNvbnRlbnRDb250YWluZXJfX3NlY29uZCBwIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDI2LjU2MjVlbSkge1xcbiAgLmNvbnRlbnRDb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImZpcnN0XFxcIiBcXFwic2Vjb25kXFxcIiBcXFwiYnV0dG9uXFxcIjtcXG4gIH1cXG4gIC5jb250ZW50Q29udGFpbmVyX19maXJzdCwgLmNvbnRlbnRDb250YWluZXJfX3NlY29uZCB7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG4gIC5jb250ZW50Q29udGFpbmVyX19maXJzdC0taW1hZ2Uge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIH1cXG4gIC5jb250ZW50Q29udGFpbmVyX19zZWNvbmQgcCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG59XFxuXFxuLm1lbnVDb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogNGVtIDVlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXG4gIGdhcDogMWVtO1xcbn1cXG4ubWVudUNvbnRhaW5lcl9faXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAyMGVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuLm1lbnVDb250YWluZXJfX2l0ZW0tLWltZyB7XFxuICBoZWlnaHQ6IDIwZW07XFxuICB3aWR0aDogMjBlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxufVxcbi5tZW51Q29udGFpbmVyX19pdGVtLS1pbWcgaW1nIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcbi5tZW51Q29udGFpbmVyX19pdGVtLS1jb250ZW50IHtcXG4gIHdpZHRoOiA1MCU7XFxuICBwYWRkaW5nOiAyZW0gMWVtO1xcbn1cXG4ubWVudUNvbnRhaW5lcl9faXRlbS0tY29udGVudCBoMyB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbn1cXG4ubWVudUNvbnRhaW5lcl9faXRlbS0tY29udGVudCBwIHtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDQ4ZW0pIGFuZCAobWF4LXdpZHRoOiA2NGVtKSB7XFxuICAubWVudUNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDI2LjU2MjVlbSkgYW5kIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gIC5tZW51Q29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMmVtIDFlbTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICB9XFxuICAubWVudUNvbnRhaW5lcl9faXRlbS0tY29udGVudCBoMyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gIH1cXG4gIC5tZW51Q29udGFpbmVyX19pdGVtLS1jb250ZW50IHAge1xcbiAgICBsaW5lLWhlaWdodDogMS41O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDI2LjU2MjVlbSkge1xcbiAgLm1lbnVDb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAxZW0gMC41ZW07XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmcjtcXG4gIH1cXG4gIC5tZW51Q29udGFpbmVyX19pdGVtIHtcXG4gICAgaGVpZ2h0OiAzMGVtO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLm1lbnVDb250YWluZXJfX2l0ZW0tLWltZyB7XFxuICAgIGhlaWdodDogMjBlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAubWVudUNvbnRhaW5lcl9faXRlbS0tY29udGVudCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL19jb2xvcnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9fbWl4aW5zLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBS0E7RUFDQyxVQUFBO0VBQ0EsU0FBQTtFQUNBLHNC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RUErRUU7SUFDQyxnQkFBQTtFQTdFSDtBQUNGO0FFM1VDO0VGK1ZEO0lBK0RFLGtCQUFBO0lBQ0EsMEJBQUE7SUFDQSx1QkFBQTtFQS9FQTtFQWlGQTtJQUNDLFlBQUE7SUFDQSxzQkFBQTtFQS9FRDtFQWlGQztJQUNDLFlBQUE7SUFDQSxXQUFBO0VBL0VGO0VBa0ZDO0lBQ0MsV0FBQTtJQUNBLFlBQUE7RUFoRkY7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICcuL2NvbG9ycyc7XFxyXFxuQGltcG9ydCAnLi9taXhpbnMnO1xcclxcblxcclxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDMwMDs0MDA7NTAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4qIHtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4vLyAtLS0tLS0tLS0tLSBSRVNVQUJMRSBDT01QT05FTlRTIC0tLS0tLS0tLS0tXFxyXFxuLm5hdmJhckNvbnRhaW5lciB7XFxyXFxuXFx0aGVpZ2h0OiAzLjVlbTtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkQ29sb3ItLS0yO1xcclxcblxcdGNvbG9yOiAkbmV1dHJhbDtcXHJcXG5cXHJcXG5cXHQmX19tZW51QmFycyB7XFxyXFxuXFx0XFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Jl9fdWwge1xcclxcblxcdFxcdHBhZGRpbmc6IDAuNmVtIDA7XFxyXFxuXFx0XFx0bWFyZ2luOiAwIDIyZW07XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG5cXHRcXHRhbGlnbi1pdGVtczogc3RyZXRjaDtcXHJcXG5cXHRcXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuXFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdFxcdHotaW5kZXg6IDU7XFxyXFxuXFxyXFxuXFx0XFx0Ji0tbGkge1xcclxcblxcdFxcdFxcdGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXHJcXG5cXHRcXHRcXHRmb250LXNpemU6IDEuOHJlbTtcXHJcXG5cXHRcXHRcXHRmb250LXdlaWdodDogNjAwO1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQmLS1hbmNob3Ige1xcclxcblxcdFxcdFxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG5cXHRcXHRcXHRjb2xvcjogJG5ldXRyYWw7XFxyXFxuXFx0XFx0XFx0dHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XFxyXFxuXFxyXFxuXFx0XFx0XFx0Jjpob3ZlciB7XFxyXFxuXFx0XFx0XFx0XFx0Y29sb3I6ICRyZWRDb2xvci0tLTM7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0QGluY2x1ZGUgbGFwdG9wLXNtYWxsIHtcXHJcXG5cXHRcXHQmX191bCB7XFxyXFxuXFx0XFx0XFx0bWFyZ2luOiAwIDExZW07XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHRAaW5jbHVkZSB0YWJsZXQge1xcclxcblxcdFxcdCZfX21lbnVCYXJzIHtcXHJcXG5cXHRcXHRcXHRwYWRkaW5nOiAwLjVlbSAxZW07XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcblxcdFxcdFxcdGZpbGw6ICRuZXV0cmFsO1xcclxcblxcdFxcdFxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Jl9fdWwge1xcclxcblxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdFxcdG1hcmdpbjogMDtcXHJcXG5cXHRcXHRcXHRwYWRkaW5nOiAyZW0gMWVtIDFlbSAwO1xcclxcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG5cXHRcXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRyZWRDb2xvci0tLTI7XFxyXFxuXFxyXFxuXFx0XFx0XFx0Ji0tYW5jaG9yIHtcXHJcXG5cXHRcXHRcXHRcXHRjb2xvcjogJG5ldXRyYWw7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQuaGlkZSB7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcblxcdEBpbmNsdWRlIG1vYmlsZS1sYXJnZSB7XFxyXFxuXFx0XFx0Jl9fdWwge1xcclxcblxcdFxcdFxcdCYtLWxpIHtcXHJcXG5cXHRcXHRcXHRcXHRmb250LXNpemU6IDFyZW07XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0QGluY2x1ZGUgbW9iaWxlLWFsbFNpemUge1xcclxcblxcdFxcdCZfX21lbnVCYXJzIHtcXHJcXG5cXHRcXHRcXHRwYWRkaW5nOiAwLjVlbSAxZW07XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcblxcdFxcdFxcdGZpbGw6ICRuZXV0cmFsO1xcclxcblxcdFxcdFxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Jl9fdWwge1xcclxcblxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdFxcdG1hcmdpbjogMDtcXHJcXG5cXHRcXHRcXHRwYWRkaW5nOiAyZW0gMWVtIDFlbSAwO1xcclxcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG5cXHRcXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRyZWRDb2xvci0tLTI7XFxyXFxuXFxyXFxuXFx0XFx0XFx0Ji0tYW5jaG9yIHtcXHJcXG5cXHRcXHRcXHRcXHRjb2xvcjogJG5ldXRyYWw7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQuaGlkZSB7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyQ29udGFpbmVyIHtcXHJcXG5cXHRoZWlnaHQ6IDMuNWVtO1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkQ29sb3ItLS0yO1xcclxcblxcdGNvbG9yOiAkbmV1dHJhbDtcXHJcXG5cXHJcXG5cXHQmX191bCB7XFxyXFxuXFx0XFx0cGFkZGluZzogMC42ZW0gMDtcXHJcXG5cXHRcXHRtYXJnaW46IDAgNWVtO1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdFxcdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcblxcdFxcdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG5cXHJcXG5cXHRcXHQmLS1saSB7XFxyXFxuXFx0XFx0XFx0cGFkZGluZzogMCAwLjVlbTtcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcblxcdFxcdFxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHJcXG5cXHRcXHRcXHQjZm9vdGVySWNvbnMge1xcclxcblxcdFxcdFxcdFxcdGZpbGw6ICNmZmY7XFxyXFxuXFx0XFx0XFx0XFx0aGVpZ2h0OiAnMTBlbSc7XFxyXFxuXFx0XFx0XFx0XFx0d2lkdGg6ICcxMGVtJztcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQmX19wYXJhIHtcXHJcXG5cXHRcXHRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxyXFxuXFx0XFx0Zm9udC1zaXplOiAxcmVtO1xcclxcblxcdFxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdEBpbmNsdWRlIG1vYmlsZS1sYXJnZSB7XFxyXFxuXFx0XFx0Jl9fdWwge1xcclxcblxcdFxcdFxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdCYgPiAqIHtcXHJcXG5cXHRcXHRcXHRtYXJnaW4tYm90dG9tOiAxZW07XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdCZfX3BhcmEge1xcclxcblxcdFxcdFxcdGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0QGluY2x1ZGUgbW9iaWxlLWFsbFNpemUge1xcclxcblxcdFxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRwYWRkaW5nOiAxZW0gMDtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4vLyAtLS0tLS0tLS0tLSBIT01FIENPTVBPTkVOVFMgLS0tLS0tLS0tLS1cXHJcXG5cXHJcXG4uY29udGVudENvbnRhaW5lciB7XFxyXFxuXFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdHBhZGRpbmc6IDJlbSAzLjVlbTtcXHJcXG5cXHRtYXJnaW46IDNlbSAyZW0gMDtcXHJcXG5cXHRkaXNwbGF5OiBncmlkO1xcclxcblxcdGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuXFx0XFx0J2ZpcnN0IHNlY29uZCdcXHJcXG5cXHRcXHQnYnV0dG9uIGJ1dHRvbic7XFxyXFxuXFxyXFxuXFx0Jl9fZmlyc3Qge1xcclxcblxcdFxcdGdyaWQtYXJlYTogZmlyc3Q7XFxyXFxuXFx0XFx0Ly8gbWFyZ2luLXJpZ2h0OiAxZW07XFxyXFxuXFxyXFxuXFx0XFx0Ji0taW1hZ2Uge1xcclxcblxcdFxcdFxcdGhlaWdodDogMzBlbTtcXHJcXG5cXHRcXHRcXHR3aWR0aDogMzBlbTtcXHJcXG5cXHRcXHRcXHRvYmplY3QtZml0OiBjb250YWluO1xcclxcblxcdFxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRcXHRcXHR6LWluZGV4OiAxO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Jl9fc2Vjb25kIHtcXHJcXG5cXHRcXHRncmlkLWFyZWE6IHNlY29uZDtcXHJcXG5cXHRcXHRwYWRkaW5nOiAyZW07XFxyXFxuXFx0XFx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcclxcblxcclxcblxcdFxcdHAge1xcclxcblxcdFxcdFxcdG1hcmdpbi10b3A6IDFlbTtcXHJcXG5cXHRcXHRcXHRtYXJnaW4tcmlnaHQ6IDNlbTtcXHJcXG5cXHRcXHRcXHRsaW5lLWhlaWdodDogMS41O1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Jl9fdGhpcmQge1xcclxcblxcdFxcdGdyaWQtYXJlYTogYnV0dG9uO1xcclxcblxcdFxcdG1hcmdpbjogMWVtIGF1dG87XFxyXFxuXFxyXFxuXFx0XFx0Ji0tYnV0dG9uIHtcXHJcXG5cXHRcXHRcXHRwYWRkaW5nOiAwLjhlbSAzLjVlbTtcXHJcXG5cXHRcXHRcXHRib3JkZXItcmFkaXVzOiAxZW07XFxyXFxuXFx0XFx0XFx0Ym9yZGVyOiBub25lO1xcclxcblxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRyZWRDb2xvci0tLTE7XFxyXFxuXFx0XFx0XFx0Y29sb3I6ICRuZXV0cmFsO1xcclxcblxcdFxcdFxcdGZvbnQtc2l6ZTogMXJlbTtcXHJcXG5cXHRcXHRcXHRmb250LXdlaWdodDogNzAwO1xcclxcblxcdFxcdFxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRcXHRcXHR0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcXHJcXG5cXHJcXG5cXHRcXHRcXHQmOmhvdmVyIHtcXHJcXG5cXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkQ29sb3ItLS0yO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcblxcdEBpbmNsdWRlIGxhcHRvcC1zbWFsbCB7XFxyXFxuXFx0XFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdFxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0XFx0bWFyZ2luOiAyZW07XFxyXFxuXFxyXFxuXFx0XFx0Jl9fZmlyc3Qge1xcclxcblxcdFxcdFxcdG1hcmdpbjogMDtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Jl9fc2Vjb25kIHtcXHJcXG5cXHRcXHRcXHRtYXJnaW46IDA7XFxyXFxuXFx0XFx0XFx0cGFkZGluZzogMDtcXHJcXG5cXHJcXG5cXHRcXHRcXHRwIHtcXHJcXG5cXHRcXHRcXHRcXHRtYXJnaW46IDA7XFxyXFxuXFx0XFx0XFx0XFx0cGFkZGluZzogMDtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHRAaW5jbHVkZSB0YWJsZXQge1xcclxcblxcdFxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHRcXHRwYWRkaW5nOiA1ZW07XFxyXFxuXFx0XFx0bWFyZ2luOiAxZW07XFxyXFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG5cXHRcXHRcXHQnZmlyc3QnXFxyXFxuXFx0XFx0XFx0J3NlY29uZCdcXHJcXG5cXHRcXHRcXHQnYnV0dG9uJztcXHJcXG5cXHJcXG5cXHRcXHQmX19maXJzdCxcXHJcXG5cXHRcXHQmX19zZWNvbmQge1xcclxcblxcdFxcdFxcdG1hcmdpbjogMDtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Jl9fZmlyc3Qge1xcclxcblxcdFxcdFxcdCYtLWltYWdlIHtcXHJcXG5cXHRcXHRcXHRcXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0XFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0XFx0XFx0b2JqZWN0LWZpdDogY292ZXI7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQmX19zZWNvbmQge1xcclxcblxcdFxcdFxcdG1hcmdpbi10b3A6IDFlbTtcXHJcXG5cXHRcXHRcXHRmb250LXNpemU6IDAuOXJlbTtcXHJcXG5cXHJcXG5cXHRcXHRcXHRwIHtcXHJcXG5cXHRcXHRcXHRcXHRtYXJnaW4tdG9wOiAxZW07XFxyXFxuXFx0XFx0XFx0XFx0cGFkZGluZzogMDtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdCZfX3RoaXJkIHtcXHJcXG5cXHRcXHRcXHRtYXJnaW4tdG9wOiAxZW07XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHRAaW5jbHVkZSBtb2JpbGUtbGFyZ2Uge1xcclxcblxcdFxcdCY6bm90KDpsYXN0LWNoaWxkKSB7XFxyXFxuXFx0XFx0XFx0bWFyZ2luOiAwO1xcclxcblxcdFxcdFxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdCZfX2ZpcnN0IHtcXHJcXG5cXHRcXHRcXHQmLS1pbWFnZSB7XFxyXFxuXFx0XFx0XFx0XFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdFxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdFxcdFxcdG9iamVjdC1maXQ6IGNvdmVyO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Jl9fc2Vjb25kIHtcXHJcXG5cXHRcXHRcXHRwIHtcXHJcXG5cXHRcXHRcXHRcXHRtYXJnaW46IDA7XFxyXFxuXFx0XFx0XFx0XFx0cGFkZGluZzogMDtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHRAaW5jbHVkZSBtb2JpbGUtYWxsU2l6ZSB7XFxyXFxuXFx0XFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdFxcdG1hcmdpbjogMDtcXHJcXG5cXHRcXHRwYWRkaW5nOiAwO1xcclxcblxcdFxcdGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuXFx0XFx0XFx0J2ZpcnN0J1xcclxcblxcdFxcdFxcdCdzZWNvbmQnXFxyXFxuXFx0XFx0XFx0J2J1dHRvbic7XFxyXFxuXFxyXFxuXFx0XFx0Jl9fZmlyc3QsXFxyXFxuXFx0XFx0Jl9fc2Vjb25kIHtcXHJcXG5cXHRcXHRcXHRtYXJnaW46IDA7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdCZfX2ZpcnN0IHtcXHJcXG5cXHRcXHRcXHQmLS1pbWFnZSB7XFxyXFxuXFx0XFx0XFx0XFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdFxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdFxcdFxcdG9iamVjdC1maXQ6IGNvdmVyO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Jl9fc2Vjb25kIHtcXHJcXG5cXHRcXHRcXHRwIHtcXHJcXG5cXHRcXHRcXHRcXHRtYXJnaW46IDA7XFxyXFxuXFx0XFx0XFx0XFx0cGFkZGluZzogMDtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLy8gLS0tLS0tLS0tLS0gTUVOVSBDT01QT05FTlRTIC0tLS0tLS0tLS0tXFxyXFxuXFxyXFxuLm1lbnVDb250YWluZXIge1xcclxcblxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHRwYWRkaW5nOiA0ZW0gNWVtO1xcclxcblxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcclxcblxcdGdhcDogMWVtO1xcclxcblxcclxcblxcdCZfX2l0ZW0ge1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0aGVpZ2h0OiAyMGVtO1xcclxcblxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdGNvbG9yOiAjMDAwO1xcclxcblxcclxcblxcdFxcdCYtLWltZyB7XFxyXFxuXFx0XFx0XFx0aGVpZ2h0OiAyMGVtO1xcclxcblxcdFxcdFxcdHdpZHRoOiAyMGVtO1xcclxcblxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxuXFxyXFxuXFx0XFx0XFx0aW1nIHtcXHJcXG5cXHRcXHRcXHRcXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0XFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0XFx0XFx0b2JqZWN0LWZpdDogY292ZXI7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQmLS1jb250ZW50IHtcXHJcXG5cXHRcXHRcXHR3aWR0aDogNTAlO1xcclxcblxcdFxcdFxcdHBhZGRpbmc6IDJlbSAxZW07XFxyXFxuXFxyXFxuXFx0XFx0XFx0aDMge1xcclxcblxcdFxcdFxcdFxcdGZvbnQtc2l6ZTogMS41cmVtO1xcclxcblxcdFxcdFxcdFxcdG1hcmdpbi1ib3R0b206IDAuNWVtO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHRwIHtcXHJcXG5cXHRcXHRcXHRcXHRmb250LXNpemU6IDEuMjVyZW07XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0QGluY2x1ZGUgbGFwdG9wLXNtYWxsIHtcXHJcXG5cXHRcXHRwYWRkaW5nOiAxZW07XFxyXFxuXFx0fVxcclxcblxcclxcblxcdEBpbmNsdWRlIHRhYmxldCB7XFxyXFxuXFx0XFx0cGFkZGluZzogMmVtIDFlbTtcXHJcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG5cXHJcXG5cXHRcXHQmX19pdGVtIHtcXHJcXG5cXHRcXHRcXHQmLS1jb250ZW50IHtcXHJcXG5cXHRcXHRcXHRcXHRoMyB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0bWFyZ2luLWJvdHRvbTogMWVtO1xcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRwIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRsaW5lLWhlaWdodDogMS41O1xcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHRAaW5jbHVkZSBtb2JpbGUtYWxsU2l6ZSB7XFxyXFxuXFx0XFx0cGFkZGluZzogMWVtIDAuNWVtO1xcclxcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcblxcdFxcdGdyaWQtdGVtcGxhdGUtcm93czogMmZyO1xcclxcblxcclxcblxcdFxcdCZfX2l0ZW0ge1xcclxcblxcdFxcdFxcdGhlaWdodDogMzBlbTtcXHJcXG5cXHRcXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcclxcblxcdFxcdFxcdCYtLWltZyB7XFxyXFxuXFx0XFx0XFx0XFx0aGVpZ2h0OiAyMGVtO1xcclxcblxcdFxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHQmLS1jb250ZW50IHtcXHJcXG5cXHRcXHRcXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRcXHRcXHRwYWRkaW5nOiAxZW07XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcblwiLFwiJG5ldXRyYWw6ICNmZmY7XFxyXFxuJHJlZENvbG9yLS0tMTogIzRkMDUxMTtcXHJcXG4kcmVkQ29sb3ItLS0yOiAjYzcyYzM5O1xcclxcbiRyZWRDb2xvci0tLTM6ICNmZjg3ODk7XFxyXFxuJGJsdWVDb2xvci0tLTE6ICMxMDNlOGY7XFxyXFxuJGJsdWVDb2xvci0tLTI6ICMxNmI5ZjU7XFxyXFxuJGJsdWVDb2xvci0tLTM6ICNjMmU3ZmY7XFxyXFxuXCIsXCJAbWl4aW4gbW9iaWxlLWFsbFNpemUge1xcclxcblxcdEBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogMjYuNTYyNWVtKSB7XFxyXFxuXFx0XFx0QGNvbnRlbnQ7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gbW9iaWxlLXNtYWxsIHtcXHJcXG5cXHRAbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xcclxcblxcdFxcdEBjb250ZW50O1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIG1vYmlsZS1tZWRpdW0ge1xcclxcblxcdEBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogMjMuNDM3NWVtKSB7XFxyXFxuXFx0XFx0QGNvbnRlbnQ7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gbW9iaWxlLWxhcmdlIHtcXHJcXG5cXHRAbWVkaWEgKG1pbi13aWR0aDogMjMuNDM3NWVtKSBhbmQgKG1heC13aWR0aDogMjYuNTYyNWVtKSB7XFxyXFxuXFx0XFx0QGNvbnRlbnQ7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gdGFibGV0LW1vYmlsZSB7XFxyXFxuXFx0QG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA0OGVtKSB7XFxyXFxuXFx0XFx0QGNvbnRlbnQ7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gdGFibGV0IHtcXHJcXG5cXHRAbWVkaWEgKG1pbi13aWR0aDogMjYuNTYyNWVtKSBhbmQgKG1heC13aWR0aDogNDhlbSkge1xcclxcblxcdFxcdEBjb250ZW50O1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGxhcHRvcC1zbWFsbCB7XFxyXFxuXFx0QG1lZGlhIChtaW4td2lkdGg6IDQ4ZW0pIGFuZCAobWF4LXdpZHRoOiA2NGVtKSB7XFxyXFxuXFx0XFx0QGNvbnRlbnQ7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgaG9tZUNvbXBvbmVudHMgfSBmcm9tICcuL2pzL2hvbWUvaG9tZSc7XHJcblxyXG5ob21lQ29tcG9uZW50cygpO1xyXG4iLCJleHBvcnQgY29uc3QgZnVuY0V2ZW50ID0gKCkgPT4ge1xyXG5cdGNvbnN0IG5hdmJhck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudUJhcicpO1xyXG5cdGNvbnN0IG5hdmJhckxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyQ29udGFpbmVyX191bCcpO1xyXG5cdGNvbnN0IGV2ZW50RnVuYyA9ICgpID0+IHtcclxuXHRcdG5hdmJhckxpc3QuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xyXG5cdH07XHJcblx0bmF2YmFyTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50RnVuYyk7XHJcblx0cmV0dXJuIG5hdmJhck1lbnU7XHJcbn07XHJcbiIsImltcG9ydCAnLi4vLi4vc3R5bGVzL21haW4uc2Nzcyc7XHJcbmltcG9ydCBndW5kYW1JbWFnZSBmcm9tICcuLi8uLi9pbWFnZXMvaG9tZUd1bmRhbS5qcGcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbnRlbnRDb21wb25lbnRzID0gKCkgPT4ge1xyXG5cdGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdGNvbnN0IGRpdjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRjb25zdCBkaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0Y29uc3QgZGl2MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuXHRjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cdGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cclxuXHRjb25zdCBteUltYWdlID0gbmV3IEltYWdlKCk7XHJcblxyXG5cdG15SW1hZ2Uuc3JjID0gZ3VuZGFtSW1hZ2U7XHJcblx0aDEudGV4dENvbnRlbnQgPSAnR3VuZGFtIENhZmUnO1xyXG5cdHBhcmEudGV4dENvbnRlbnQgPSBgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC5cclxuXHRcdERvbmVjIGZhY2lsaXNpcyBtYXNzYSBlZ2V0IG1hdXJpcyBkaWN0dW0gdWx0cmljZXMgaW4gaWQgXHJcblx0XHRqdXN0by4gU3VzcGVuZGlzc2UgdmVsIG9ybmFyZSBxdWFtLiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gXHJcblx0XHRwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhXHJcblx0XHRjdXJhZTsgRG9uZWMgYSB0ZW1wb3IgZXJvcy4gVXQgdml2ZXJyYSBsYW9yZWV0IGxlbyBhdCBcclxuXHRcdGFsaXF1ZXQuIEFlbmVhbiBhIHZhcml1cyBuaXNsLiBJbnRlcmR1bSBldCBtYWxlc3VhZGEgZmFtZXNcclxuXHRcdGFjIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzLiBNYWVjZW5hcyB1dCByaXN1cyB2ZWxcclxuXHRcdGFudGUgZGljdHVtIGV1aXNtb2QuIFNlZCBtYWxlc3VhZGEgdG9ydG9yIGxpYmVybywgdXQgXHJcblx0XHRoZW5kcmVyaXQgYXVndWUgcnV0cnVtIGFsaXF1ZXQuTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC5cclxuXHRcdERvbmVjIGZhY2lsaXNpcyBtYXNzYSBlZ2V0IG1hdXJpcyBkaWN0dW0gdWx0cmljZXMgaW4gaWQgXHJcblx0XHRqdXN0by4gU3VzcGVuZGlzc2UgdmVsIG9ybmFyZSBxdWFtLiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gXHJcblx0XHRwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhXHJcblx0XHRjdXJhZTsgRG9uZWMgYSB0ZW1wb3IgZXJvcy4gVXQgdml2ZXJyYSBsYW9yZWV0IGxlbyBhdCBcclxuXHRcdGFsaXF1ZXQuIEFlbmVhbiBhIHZhcml1cyBuaXNsLiBJbnRlcmR1bSBldCBtYWxlc3VhZGEgZmFtZXNcclxuXHRcdGFjIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzLmA7XHJcblx0YnV0dG9uLnRleHRDb250ZW50ID0gJ01lbnUnO1xyXG5cclxuXHRkaXYuY2xhc3NMaXN0LmFkZCgnY29udGVudENvbnRhaW5lcicpO1xyXG5cdGRpdjEuY2xhc3NMaXN0LmFkZCgnY29udGVudENvbnRhaW5lcl9fZmlyc3QnKTtcclxuXHRkaXYyLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnRDb250YWluZXJfX3NlY29uZCcpO1xyXG5cdGRpdjMuY2xhc3NMaXN0LmFkZCgnY29udGVudENvbnRhaW5lcl9fdGhpcmQnKTtcclxuXHRteUltYWdlLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnRDb250YWluZXJfX2ZpcnN0LS1pbWFnZScpO1xyXG5cdGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjb250ZW50Q29udGFpbmVyX190aGlyZC0tYnV0dG9uJyk7XHJcblxyXG5cdGRpdjEuYXBwZW5kQ2hpbGQobXlJbWFnZSk7XHJcblx0ZGl2Mi5hcHBlbmRDaGlsZChoMSk7XHJcblx0ZGl2Mi5hcHBlbmRDaGlsZChwYXJhKTtcclxuXHRkaXYzLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcblx0ZGl2LmFwcGVuZENoaWxkKGRpdjEpO1xyXG5cdGRpdi5hcHBlbmRDaGlsZChkaXYyKTtcclxuXHRkaXYuYXBwZW5kQ2hpbGQoZGl2Myk7XHJcblxyXG5cdHJldHVybiBkaXY7XHJcbn07XHJcbiIsImltcG9ydCB7IG5hdmJhckNvbXBvbmVudCB9IGZyb20gJy4uL3JldXNhYmxlQ29tcG9uZW50cy9uYXZiYXJTZWN0aW9uJztcclxuaW1wb3J0IHsgZm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi4vcmV1c2FibGVDb21wb25lbnRzL2Zvb3RlclNlY3Rpb24nO1xyXG5pbXBvcnQgeyBjb250ZW50Q29tcG9uZW50cyB9IGZyb20gJy4uL2hvbWUvY29udGVudFNlY3Rpb24nO1xyXG5pbXBvcnQgeyBmdW5jRXZlbnQgfSBmcm9tICcuLi9ldmVudExpc3RlbmVyL2luZGV4JztcclxuXHJcbmV4cG9ydCBjb25zdCBob21lQ29tcG9uZW50cyA9ICgpID0+IHtcclxuXHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5hdmJhckNvbXBvbmVudCgpKTtcclxuXHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnRDb21wb25lbnRzKCkpO1xyXG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyQ29tcG9uZW50KCkpO1xyXG5cdGZ1bmNFdmVudCgpO1xyXG59O1xyXG4iLCJpbXBvcnQgJy4uLy4uL3N0eWxlcy9tYWluLnNjc3MnO1xyXG5cclxuY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbmNvbnN0IGdldFllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcblxyXG5leHBvcnQgY29uc3QgZm9vdGVyQXJyID0gW1xyXG5cdHtcclxuXHRcdHRpdGxlOiAnR3VuZGFtIENhZmUnLFxyXG5cdFx0aWNvbnM6IFtcclxuXHRcdFx0YDxzdmcgaWQ9XCJmb290ZXJJY29uc1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiBoZWlnaHQ9JzJlbScgd2lkdGg9JzJlbSc+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCAgZD1cIk01MDQgMjU2QzUwNCAxMTkgMzkzIDggMjU2IDhTOCAxMTkgOCAyNTZjMCAxMjMuNzggOTAuNjkgMjI2LjM4IDIwOS4yNSAyNDVWMzI3LjY5aC02M1YyNTZoNjN2LTU0LjY0YzAtNjIuMTUgMzctOTYuNDggOTMuNjctOTYuNDggMjcuMTQgMCA1NS41MiA0Ljg0IDU1LjUyIDQuODR2NjFoLTMxLjI4Yy0zMC44IDAtNDAuNDEgMTkuMTItNDAuNDEgMzguNzNWMjU2aDY4Ljc4bC0xMSA3MS42OWgtNTcuNzhWNTAxQzQxMy4zMSA0ODIuMzggNTA0IDM3OS43OCA1MDQgMjU2elwiLz5cclxuICAgICAgICAgICAgPC9zdmc+YCxcclxuXHRcdFx0YDxzdmcgaWQ9XCJmb290ZXJJY29uc1wiIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDQ5NiA1MTInIGhlaWdodD0nMmVtJyB3aWR0aD0nMmVtJz5cclxuICAgICAgICAgICAgICAgIDxwYXRoICBkPSdNMTY1LjkgMzk3LjRjMCAyLTIuMyAzLjYtNS4yIDMuNi0zLjMuMy01LjYtMS4zLTUuNi0zLjYgMC0yIDIuMy0zLjYgNS4yLTMuNiAzLS4zIDUuNiAxLjMgNS42IDMuNnptLTMxLjEtNC41Yy0uNyAyIDEuMyA0LjMgNC4zIDQuOSAyLjYgMSA1LjYgMCA2LjItMnMtMS4zLTQuMy00LjMtNS4yYy0yLjYtLjctNS41LjMtNi4yIDIuM3ptNDQuMi0xLjdjLTIuOS43LTQuOSAyLjYtNC42IDQuOS4zIDIgMi45IDMuMyA1LjkgMi42IDIuOS0uNyA0LjktMi42IDQuNi00LjYtLjMtMS45LTMtMy4yLTUuOS0yLjl6TTI0NC44IDhDMTA2LjEgOCAwIDExMy4zIDAgMjUyYzAgMTEwLjkgNjkuOCAyMDUuOCAxNjkuNSAyMzkuMiAxMi44IDIuMyAxNy4zLTUuNiAxNy4zLTEyLjEgMC02LjItLjMtNDAuNC0uMy02MS40IDAgMC03MCAxNS04NC43LTI5LjggMCAwLTExLjQtMjkuMS0yNy44LTM2LjYgMCAwLTIyLjktMTUuNyAxLjYtMTUuNCAwIDAgMjQuOSAyIDM4LjYgMjUuOCAyMS45IDM4LjYgNTguNiAyNy41IDcyLjkgMjAuOSAyLjMtMTYgOC44LTI3LjEgMTYtMzMuNy01NS45LTYuMi0xMTIuMy0xNC4zLTExMi4zLTExMC41IDAtMjcuNSA3LjYtNDEuMyAyMy42LTU4LjktMi42LTYuNS0xMS4xLTMzLjMgMi42LTY3LjkgMjAuOS02LjUgNjkgMjcgNjkgMjcgMjAtNS42IDQxLjUtOC41IDYyLjgtOC41czQyLjggMi45IDYyLjggOC41YzAgMCA0OC4xLTMzLjYgNjktMjcgMTMuNyAzNC43IDUuMiA2MS40IDIuNiA2Ny45IDE2IDE3LjcgMjUuOCAzMS41IDI1LjggNTguOSAwIDk2LjUtNTguOSAxMDQuMi0xMTQuOCAxMTAuNSA5LjIgNy45IDE3IDIyLjkgMTcgNDYuNCAwIDMzLjctLjMgNzUuNC0uMyA4My42IDAgNi41IDQuNiAxNC40IDE3LjMgMTIuMUM0MjguMiA0NTcuOCA0OTYgMzYyLjkgNDk2IDI1MiA0OTYgMTEzLjMgMzgzLjUgOCAyNDQuOCA4ek05Ny4yIDM1Mi45Yy0xLjMgMS0xIDMuMy43IDUuMiAxLjYgMS42IDMuOSAyLjMgNS4yIDEgMS4zLTEgMS0zLjMtLjctNS4yLTEuNi0xLjYtMy45LTIuMy01LjItMXptLTEwLjgtOC4xYy0uNyAxLjMuMyAyLjkgMi4zIDMuOSAxLjYgMSAzLjYuNyA0LjMtLjcuNy0xLjMtLjMtMi45LTIuMy0zLjktMi0uNi0zLjYtLjMtNC4zLjd6bTMyLjQgMzUuNmMtMS42IDEuMy0xIDQuMyAxLjMgNi4yIDIuMyAyLjMgNS4yIDIuNiA2LjUgMSAxLjMtMS4zLjctNC4zLTEuMy02LjItMi4yLTIuMy01LjItMi42LTYuNS0xem0tMTEuNC0xNC43Yy0xLjYgMS0xLjYgMy42IDAgNS45IDEuNiAyLjMgNC4zIDMuMyA1LjYgMi4zIDEuNi0xLjMgMS42LTMuOSAwLTYuMi0xLjQtMi4zLTQtMy4zLTUuNi0yeicgLz5cclxuICAgICAgICAgICAgPC9zdmc+YCxcclxuXHRcdFx0YDxzdmcgaWQ9XCJmb290ZXJJY29uc1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIiBoZWlnaHQ9JzJlbScgd2lkdGg9JzJlbSc+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCAgZD1cIk0yMjQuMSAxNDFjLTYzLjYgMC0xMTQuOSA1MS4zLTExNC45IDExNC45czUxLjMgMTE0LjkgMTE0LjkgMTE0LjlTMzM5IDMxOS41IDMzOSAyNTUuOSAyODcuNyAxNDEgMjI0LjEgMTQxem0wIDE4OS42Yy00MS4xIDAtNzQuNy0zMy41LTc0LjctNzQuN3MzMy41LTc0LjcgNzQuNy03NC43IDc0LjcgMzMuNSA3NC43IDc0LjctMzMuNiA3NC43LTc0LjcgNzQuN3ptMTQ2LjQtMTk0LjNjMCAxNC45LTEyIDI2LjgtMjYuOCAyNi44LTE0LjkgMC0yNi44LTEyLTI2LjgtMjYuOHMxMi0yNi44IDI2LjgtMjYuOCAyNi44IDEyIDI2LjggMjYuOHptNzYuMSAyNy4yYy0xLjctMzUuOS05LjktNjcuNy0zNi4yLTkzLjktMjYuMi0yNi4yLTU4LTM0LjQtOTMuOS0zNi4yLTM3LTIuMS0xNDcuOS0yLjEtMTg0LjkgMC0zNS44IDEuNy02Ny42IDkuOS05My45IDM2LjFzLTM0LjQgNTgtMzYuMiA5My45Yy0yLjEgMzctMi4xIDE0Ny45IDAgMTg0LjkgMS43IDM1LjkgOS45IDY3LjcgMzYuMiA5My45czU4IDM0LjQgOTMuOSAzNi4yYzM3IDIuMSAxNDcuOSAyLjEgMTg0LjkgMCAzNS45LTEuNyA2Ny43LTkuOSA5My45LTM2LjIgMjYuMi0yNi4yIDM0LjQtNTggMzYuMi05My45IDIuMS0zNyAyLjEtMTQ3LjggMC0xODQuOHpNMzk4LjggMzg4Yy03LjggMTkuNi0yMi45IDM0LjctNDIuNiA0Mi42LTI5LjUgMTEuNy05OS41IDktMTMyLjEgOXMtMTAyLjcgMi42LTEzMi4xLTljLTE5LjYtNy44LTM0LjctMjIuOS00Mi42LTQyLjYtMTEuNy0yOS41LTktOTkuNS05LTEzMi4xcy0yLjYtMTAyLjcgOS0xMzIuMWM3LjgtMTkuNiAyMi45LTM0LjcgNDIuNi00Mi42IDI5LjUtMTEuNyA5OS41LTkgMTMyLjEtOXMxMDIuNy0yLjYgMTMyLjEgOWMxOS42IDcuOCAzNC43IDIyLjkgNDIuNiA0Mi42IDExLjcgMjkuNSA5IDk5LjUgOSAxMzIuMXMyLjcgMTAyLjctOSAxMzIuMXpcIi8+XHJcbiAgICAgICAgICAgIDwvc3ZnPmAsXHJcblx0XHRcdGA8c3ZnIGlkPVwiZm9vdGVySWNvbnNcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgaGVpZ2h0PScyZW0nIHdpZHRoPScyZW0nPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggIGQ9XCJNNDU5LjM3IDE1MS43MTZjLjMyNSA0LjU0OC4zMjUgOS4wOTcuMzI1IDEzLjY0NSAwIDEzOC43Mi0xMDUuNTgzIDI5OC41NTgtMjk4LjU1OCAyOTguNTU4LTU5LjQ1MiAwLTExNC42OC0xNy4yMTktMTYxLjEzNy00Ny4xMDYgOC40NDcuOTc0IDE2LjU2OCAxLjI5OSAyNS4zNCAxLjI5OSA0OS4wNTUgMCA5NC4yMTMtMTYuNTY4IDEzMC4yNzQtNDQuODMyLTQ2LjEzMi0uOTc1LTg0Ljc5Mi0zMS4xODgtOTguMTEyLTcyLjc3MiA2LjQ5OC45NzQgMTIuOTk1IDEuNjI0IDE5LjgxOCAxLjYyNCA5LjQyMSAwIDE4Ljg0My0xLjMgMjcuNjE0LTMuNTczLTQ4LjA4MS05Ljc0Ny04NC4xNDMtNTEuOTgtODQuMTQzLTEwMi45ODV2LTEuMjk5YzEzLjk2OSA3Ljc5NyAzMC4yMTQgMTIuNjcgNDcuNDMxIDEzLjMxOS0yOC4yNjQtMTguODQzLTQ2Ljc4MS01MS4wMDUtNDYuNzgxLTg3LjM5MSAwLTE5LjQ5MiA1LjE5Ny0zNy4zNiAxNC4yOTQtNTIuOTU0IDUxLjY1NSA2My42NzUgMTI5LjMgMTA1LjI1OCAyMTYuMzY1IDEwOS44MDctMS42MjQtNy43OTctMi41OTktMTUuOTE4LTIuNTk5LTI0LjA0IDAtNTcuODI4IDQ2Ljc4Mi0xMDQuOTM0IDEwNC45MzQtMTA0LjkzNCAzMC4yMTMgMCA1Ny41MDIgMTIuNjcgNzYuNjcgMzMuMTM3IDIzLjcxNS00LjU0OCA0Ni40NTYtMTMuMzIgNjYuNTk5LTI1LjM0LTcuNzk4IDI0LjM2Ni0yNC4zNjYgNDQuODMzLTQ2LjEzMiA1Ny44MjcgMjEuMTE3LTIuMjczIDQxLjU4NC04LjEyMiA2MC40MjYtMTYuMjQzLTE0LjI5MiAyMC43OTEtMzIuMTYxIDM5LjMwOC01Mi42MjggNTQuMjUzelwiLz5cclxuICAgICAgICAgICAgPC9zdmc+YFxyXG5cdFx0XSxcclxuXHRcdGRhdGU6IGBBbGwgcmlnaHQgcmVzZXJ2ZSBAJHtnZXRZZWFyfWBcclxuXHR9XHJcbl07XHJcbiIsImltcG9ydCAnLi4vLi4vc3R5bGVzL21haW4uc2Nzcyc7XHJcbmltcG9ydCB7IGZvb3RlckFyciB9IGZyb20gJy4vZGF0YSc7XHJcblxyXG5leHBvcnQgY29uc3QgZm9vdGVyQ29tcG9uZW50ID0gKCkgPT4ge1xyXG5cdGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuXHRjb25zdCBwYXJhMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHRjb25zdCBwYXJhMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHJcblx0ZGl2LmNsYXNzTGlzdC5hZGQoJ2Zvb3RlckNvbnRhaW5lcicpO1xyXG5cdHVsLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlckNvbnRhaW5lcl9fdWwnKTtcclxuXHRwYXJhMS5jbGFzc0xpc3QuYWRkKCdmb290ZXJDb250YWluZXJfX3BhcmEnKTtcclxuXHRwYXJhMi5jbGFzc0xpc3QuYWRkKCdmb290ZXJDb250YWluZXJfX3BhcmEnKTtcclxuXHJcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBmb290ZXJBcnIubGVuZ3RoOyBpKyspIHtcclxuXHRcdGNvbnN0IGZvbnRJY29ucyA9IGZvb3RlckFycltpXS5pY29ucztcclxuXHJcblx0XHRmb3IgKGxldCBqID0gMDsgaiA8IGZvbnRJY29ucy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcblxyXG5cdFx0XHRsaS5jbGFzc0xpc3QuYWRkKCdmb290ZXJDb250YWluZXJfX3VsLS1saScpO1xyXG5cdFx0XHRsaS5pbm5lckhUTUwgPSBmb250SWNvbnNbal07XHJcblxyXG5cdFx0XHR1bC5hcHBlbmRDaGlsZChsaSk7XHJcblx0XHR9XHJcblxyXG5cdFx0cGFyYTEudGV4dENvbnRlbnQgPSBmb290ZXJBcnJbaV0udGl0bGU7XHJcblx0XHRwYXJhMi50ZXh0Q29udGVudCA9IGZvb3RlckFycltpXS5kYXRlO1xyXG5cdH1cclxuXHJcblx0ZGl2LmFwcGVuZENoaWxkKHBhcmExKTtcclxuXHRkaXYuYXBwZW5kQ2hpbGQodWwpO1xyXG5cdGRpdi5hcHBlbmRDaGlsZChwYXJhMik7XHJcblxyXG5cdHJldHVybiBkaXY7XHJcbn07XHJcbiIsImltcG9ydCAnLi4vLi4vc3R5bGVzL21haW4uc2Nzcyc7XHJcblxyXG5leHBvcnQgY29uc3QgbmF2YmFyQ29tcG9uZW50ID0gKCkgPT4ge1xyXG5cdGNvbnN0IG5hbWVBcnIgPSBbJ0hvbWUnLCAnTWVudScsICdDb250YWN0J107XHJcblx0Y29uc3QgbGlua0FyciA9IFsnaW5kZXguaHRtbCcsICdtZW51Lmh0bWwnLCAnY29udGFjdC5odG1sJ107XHJcblx0Y29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0Y29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG5cdGNvbnN0IG1lbnVCYXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG5cdGRpdi5jbGFzc0xpc3QuYWRkKCduYXZiYXJDb250YWluZXInKTtcclxuXHR1bC5jbGFzc0xpc3QuYWRkKCduYXZiYXJDb250YWluZXJfX3VsJyk7XHJcblx0dWwuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cdG1lbnVCYXJzLmNsYXNzTGlzdC5hZGQoJ25hdmJhckNvbnRhaW5lcl9fbWVudUJhcnMnKTtcclxuXHQvLyBtZW51QmFycy5zZXRBdHRyaWJ1dGUoKTtcclxuXHJcblx0bWVudUJhcnMuaW5uZXJIVE1MID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiIGhlaWdodD1cIjIuNWVtXCIgd2lkdGg9XCIyLjVlbVwiIGlkPVwibWVudUJhclwiPjxwYXRoIGQ9XCJNMCA5NkMwIDc4LjMzIDE0LjMzIDY0IDMyIDY0SDQxNkM0MzMuNyA2NCA0NDggNzguMzMgNDQ4IDk2QzQ0OCAxMTMuNyA0MzMuNyAxMjggNDE2IDEyOEgzMkMxNC4zMyAxMjggMCAxMTMuNyAwIDk2ek0wIDI1NkMwIDIzOC4zIDE0LjMzIDIyNCAzMiAyMjRINDE2QzQzMy43IDIyNCA0NDggMjM4LjMgNDQ4IDI1NkM0NDggMjczLjcgNDMzLjcgMjg4IDQxNiAyODhIMzJDMTQuMzMgMjg4IDAgMjczLjcgMCAyNTZ6TTQxNiA0NDhIMzJDMTQuMzMgNDQ4IDAgNDMzLjcgMCA0MTZDMCAzOTguMyAxNC4zMyAzODQgMzIgMzg0SDQxNkM0MzMuNyAzODQgNDQ4IDM5OC4zIDQ0OCA0MTZDNDQ4IDQzMy43IDQzMy43IDQ0OCA0MTYgNDQ4elwiLz48L3N2Zz5gO1xyXG5cclxuXHRmb3IgKGxldCBpID0gMDsgaSA8IG5hbWVBcnIubGVuZ3RoOyBpKyspIHtcclxuXHRcdGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuXHRcdGNvbnN0IGFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuXHJcblx0XHRhbmNob3IudGV4dENvbnRlbnQgPSBuYW1lQXJyW2ldO1xyXG5cclxuXHRcdGZvciAobGV0IGogPSAwOyBqIDwgbGlua0Fyci5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRhbmNob3Iuc2V0QXR0cmlidXRlKCdocmVmJywgYCR7bGlua0FycltpXX1gKTtcclxuXHRcdH1cclxuXHJcblx0XHRhbmNob3IuY2xhc3NMaXN0LmFkZCgnbmF2YmFyQ29udGFpbmVyX191bC0tYW5jaG9yJyk7XHJcblx0XHRsaS5jbGFzc0xpc3QuYWRkKCduYXZiYXJDb250YWluZXJfX3VsLS1saScpO1xyXG5cclxuXHRcdGxpLmFwcGVuZENoaWxkKGFuY2hvcik7XHJcblx0XHR1bC5hcHBlbmRDaGlsZChsaSk7XHJcblx0fVxyXG5cclxuXHRkaXYuYXBwZW5kQ2hpbGQobWVudUJhcnMpO1xyXG5cdGRpdi5hcHBlbmRDaGlsZCh1bCk7XHJcblxyXG5cdHJldHVybiBkaXY7XHJcbn07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==