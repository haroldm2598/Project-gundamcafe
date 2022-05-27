"use strict";
(self["webpackChunk_18_project"] = self["webpackChunk_18_project"] || []).push([["menuIndex"],{

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

/***/ "./src/js/menu/contentMenu.js":
/*!************************************!*\
  !*** ./src/js/menu/contentMenu.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contentComponents": () => (/* binding */ contentComponents)
/* harmony export */ });
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.json */ "./src/js/menu/data.json");



// https://api.unsplash.com/search/photos?query=minimal

const contentComponents = () => {
	const clientId = 'rYIji7X0Fh9YOV1m8NBErYTgqLoNB9bnE18d0HP_VlU';
	const url =
		'https://api.unsplash.com/search/photos?query=restaurant&client_id=' +
		clientId;

	const div = document.createElement('div');
	const data = _data_json__WEBPACK_IMPORTED_MODULE_1__.details;

	// (async () => {
	// 	let getImg = await getImage();
	// 	const testingImg = new Image();

	// 	testingImg.src = getImg;
	// 	div.appendChild(testingImg);
	// })();

	div.classList.add('menuContainer');

	for (let i = 0; i < data.length; i++) {
		const div1 = document.createElement('div');
		const div2 = document.createElement('div');
		const div3 = document.createElement('div');
		const h3 = document.createElement('h3');
		const para = document.createElement('p');

		div1.classList.add('menuContainer__item');
		div2.classList.add('menuContainer__item--img');
		div3.classList.add('menuContainer__item--content');

		(async () => {
			let getImg = await getImage();
			const testingImg = new Image();

			testingImg.src = getImg;
			div2.appendChild(testingImg);
		})();

		h3.textContent = data[i].title;
		para.textContent = data[i].about;

		div1.appendChild(div2);
		div1.appendChild(div3);
		div3.appendChild(h3);
		div3.appendChild(para);
		div.appendChild(div1);
	}

	async function getImage() {
		let randomNumber = Math.floor(Math.random() * 6);
		return fetch(url)
			.then((response) => response.json())
			.then((data) => {
				let allImages = data.results[randomNumber];
				return allImages.urls.regular;
			});
	}

	return div;
};


/***/ }),

/***/ "./src/js/menu/menu.js":
/*!*****************************!*\
  !*** ./src/js/menu/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuComponents": () => (/* binding */ menuComponents)
/* harmony export */ });
/* harmony import */ var _reusableComponents_navbarSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reusableComponents/navbarSection */ "./src/js/reusableComponents/navbarSection.js");
/* harmony import */ var _reusableComponents_footerSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reusableComponents/footerSection */ "./src/js/reusableComponents/footerSection.js");
/* harmony import */ var _menu_contentMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu/contentMenu */ "./src/js/menu/contentMenu.js");
/* harmony import */ var _eventListener_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../eventListener/index */ "./src/js/eventListener/index.js");





const menuComponents = () => {
	document.body.appendChild((0,_reusableComponents_navbarSection__WEBPACK_IMPORTED_MODULE_0__.navbarComponent)());
	document.body.appendChild((0,_menu_contentMenu__WEBPACK_IMPORTED_MODULE_2__.contentComponents)());
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

/***/ "./src/menuIndex.js":
/*!**************************!*\
  !*** ./src/menuIndex.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_menu_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/menu/menu */ "./src/js/menu/menu.js");


(0,_js_menu_menu__WEBPACK_IMPORTED_MODULE_0__.menuComponents)();


/***/ }),

/***/ "./src/js/menu/data.json":
/*!*******************************!*\
  !*** ./src/js/menu/data.json ***!
  \*******************************/
/***/ ((module) => {

module.exports = JSON.parse('{"details":[{"title":"Lorem Ipsum","about":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis massa eget mauris dictum ultrices in id justo. Suspendisse vel ornare quam"},{"title":"Lorem Ipsum","about":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis massa eget mauris dictum ultrices in id justo. Suspendisse vel ornare quam"},{"title":"Lorem Ipsum","about":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis massa eget mauris dictum ultrices in id justo. Suspendisse vel ornare quam"},{"title":"Lorem Ipsum","about":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis massa eget mauris dictum ultrices in id justo. Suspendisse vel ornare quam"},{"title":"Lorem Ipsum","about":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis massa eget mauris dictum ultrices in id justo. Suspendisse vel ornare quam"},{"title":"Lorem Ipsum","about":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis massa eget mauris dictum ultrices in id justo. Suspendisse vel ornare quam"}]}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/menuIndex.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VyxXQUFXLFlBQVksTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLE1BQU0sTUFBTSxVQUFVLEtBQUssS0FBSyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsWUFBWSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFlBQVksWUFBWSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxZQUFZLFlBQVksV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFB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QUFJLG1EQUFnQixFQUFFO0FBQ3ZDLG9CQUFvQiw0Q0FBUztBQUM3QjtBQUNBLGtCQUFrQixzQkFBc0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw0Q0FBUztBQUMvQixzQkFBc0IsNENBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ25DZ0M7QUFDaEM7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsb0JBQW9CO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isb0JBQW9CO0FBQ3RDLGtDQUFrQyxXQUFXO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0Q2dEO0FBQ2hEO0FBQ0EsNkRBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8xOF9wcm9qZWN0Ly4vc3JjL3N0eWxlcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vMThfcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vMThfcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovLzE4X3Byb2plY3QvLi9zcmMvc3R5bGVzL21haW4uc2Nzcz82OWM3Iiwid2VicGFjazovLzE4X3Byb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vMThfcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vMThfcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8xOF9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLzE4X3Byb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly8xOF9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vMThfcHJvamVjdC8uL3NyYy9qcy9ldmVudExpc3RlbmVyL2luZGV4LmpzIiwid2VicGFjazovLzE4X3Byb2plY3QvLi9zcmMvanMvbWVudS9jb250ZW50TWVudS5qcyIsIndlYnBhY2s6Ly8xOF9wcm9qZWN0Ly4vc3JjL2pzL21lbnUvbWVudS5qcyIsIndlYnBhY2s6Ly8xOF9wcm9qZWN0Ly4vc3JjL2pzL3JldXNhYmxlQ29tcG9uZW50cy9kYXRhLmpzIiwid2VicGFjazovLzE4X3Byb2plY3QvLi9zcmMvanMvcmV1c2FibGVDb21wb25lbnRzL2Zvb3RlclNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vMThfcHJvamVjdC8uL3NyYy9qcy9yZXVzYWJsZUNvbXBvbmVudHMvbmF2YmFyU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8xOF9wcm9qZWN0Ly4vc3JjL21lbnVJbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDMwMDs0MDA7NTAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4ubmF2YmFyQ29udGFpbmVyIHtcXG4gIGhlaWdodDogMy41ZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzcyYzM5O1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5uYXZiYXJDb250YWluZXJfX21lbnVCYXJzIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5uYXZiYXJDb250YWluZXJfX3VsIHtcXG4gIHBhZGRpbmc6IDAuNmVtIDA7XFxuICBtYXJnaW46IDAgMjJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogNTtcXG59XFxuLm5hdmJhckNvbnRhaW5lcl9fdWwtLWxpIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLm5hdmJhckNvbnRhaW5lcl9fdWwtLWFuY2hvciB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xcbn1cXG4ubmF2YmFyQ29udGFpbmVyX191bC0tYW5jaG9yOmhvdmVyIHtcXG4gIGNvbG9yOiAjZmY4Nzg5O1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNDhlbSkgYW5kIChtYXgtd2lkdGg6IDY0ZW0pIHtcXG4gIC5uYXZiYXJDb250YWluZXJfX3VsIHtcXG4gICAgbWFyZ2luOiAwIDExZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAyNi41NjI1ZW0pIGFuZCAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAubmF2YmFyQ29udGFpbmVyX19tZW51QmFycyB7XFxuICAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgZmlsbDogI2ZmZjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbiAgLm5hdmJhckNvbnRhaW5lcl9fdWwge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAyZW0gMWVtIDFlbSAwO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjNzJjMzk7XFxuICB9XFxuICAubmF2YmFyQ29udGFpbmVyX191bC0tYW5jaG9yIHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICB9XFxuICAubmF2YmFyQ29udGFpbmVyIC5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDIzLjQzNzVlbSkgYW5kIChtYXgtd2lkdGg6IDI2LjU2MjVlbSkge1xcbiAgLm5hdmJhckNvbnRhaW5lcl9fdWwtLWxpIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDI2LjU2MjVlbSkge1xcbiAgLm5hdmJhckNvbnRhaW5lcl9fbWVudUJhcnMge1xcbiAgICBwYWRkaW5nOiAwLjVlbSAxZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGZpbGw6ICNmZmY7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG4gIC5uYXZiYXJDb250YWluZXJfX3VsIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMmVtIDFlbSAxZW0gMDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzcyYzM5O1xcbiAgfVxcbiAgLm5hdmJhckNvbnRhaW5lcl9fdWwtLWFuY2hvciB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgfVxcbiAgLm5hdmJhckNvbnRhaW5lciAuaGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcblxcbi5mb290ZXJDb250YWluZXIge1xcbiAgaGVpZ2h0OiAzLjVlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzcyYzM5O1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5mb290ZXJDb250YWluZXJfX3VsIHtcXG4gIHBhZGRpbmc6IDAuNmVtIDA7XFxuICBtYXJnaW46IDAgNWVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG4uZm9vdGVyQ29udGFpbmVyX191bC0tbGkge1xcbiAgcGFkZGluZzogMCAwLjVlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmZvb3RlckNvbnRhaW5lcl9fdWwtLWxpICNmb290ZXJJY29ucyB7XFxuICBmaWxsOiAjZmZmO1xcbiAgaGVpZ2h0OiBcXFwiMTBlbVxcXCI7XFxuICB3aWR0aDogXFxcIjEwZW1cXFwiO1xcbn1cXG4uZm9vdGVyQ29udGFpbmVyX19wYXJhIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAyMy40Mzc1ZW0pIGFuZCAobWF4LXdpZHRoOiAyNi41NjI1ZW0pIHtcXG4gIC5mb290ZXJDb250YWluZXJfX3VsIHtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG4gIC5mb290ZXJDb250YWluZXIgPiAqIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgfVxcbiAgLmZvb3RlckNvbnRhaW5lcl9fcGFyYSB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDI2LjU2MjVlbSkge1xcbiAgLmZvb3RlckNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDFlbSAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG59XFxuXFxuLmNvbnRlbnRDb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMmVtIDMuNWVtO1xcbiAgbWFyZ2luOiAzZW0gMmVtIDA7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImZpcnN0IHNlY29uZFxcXCIgXFxcImJ1dHRvbiBidXR0b25cXFwiO1xcbn1cXG4uY29udGVudENvbnRhaW5lcl9fZmlyc3Qge1xcbiAgZ3JpZC1hcmVhOiBmaXJzdDtcXG59XFxuLmNvbnRlbnRDb250YWluZXJfX2ZpcnN0LS1pbWFnZSB7XFxuICBoZWlnaHQ6IDMwZW07XFxuICB3aWR0aDogMzBlbTtcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4uY29udGVudENvbnRhaW5lcl9fc2Vjb25kIHtcXG4gIGdyaWQtYXJlYTogc2Vjb25kO1xcbiAgcGFkZGluZzogMmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG4uY29udGVudENvbnRhaW5lcl9fc2Vjb25kIHAge1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAzZW07XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG4uY29udGVudENvbnRhaW5lcl9fdGhpcmQge1xcbiAgZ3JpZC1hcmVhOiBidXR0b247XFxuICBtYXJnaW46IDFlbSBhdXRvO1xcbn1cXG4uY29udGVudENvbnRhaW5lcl9fdGhpcmQtLWJ1dHRvbiB7XFxuICBwYWRkaW5nOiAwLjhlbSAzLjVlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZDA1MTE7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcXG59XFxuLmNvbnRlbnRDb250YWluZXJfX3RoaXJkLS1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M3MmMzOTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDQ4ZW0pIGFuZCAobWF4LXdpZHRoOiA2NGVtKSB7XFxuICAuY29udGVudENvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAyZW07XFxuICB9XFxuICAuY29udGVudENvbnRhaW5lcl9fZmlyc3Qge1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxuICAuY29udGVudENvbnRhaW5lcl9fc2Vjb25kIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcbiAgLmNvbnRlbnRDb250YWluZXJfX3NlY29uZCBwIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMjYuNTYyNWVtKSBhbmQgKG1heC13aWR0aDogNDhlbSkge1xcbiAgLmNvbnRlbnRDb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDVlbTtcXG4gICAgbWFyZ2luOiAxZW07XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJmaXJzdFxcXCIgXFxcInNlY29uZFxcXCIgXFxcImJ1dHRvblxcXCI7XFxuICB9XFxuICAuY29udGVudENvbnRhaW5lcl9fZmlyc3QsIC5jb250ZW50Q29udGFpbmVyX19zZWNvbmQge1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxuICAuY29udGVudENvbnRhaW5lcl9fZmlyc3QtLWltYWdlIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICB9XFxuICAuY29udGVudENvbnRhaW5lcl9fc2Vjb25kIHtcXG4gICAgbWFyZ2luLXRvcDogMWVtO1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gIH1cXG4gIC5jb250ZW50Q29udGFpbmVyX19zZWNvbmQgcCB7XFxuICAgIG1hcmdpbi10b3A6IDFlbTtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG4gIC5jb250ZW50Q29udGFpbmVyX190aGlyZCB7XFxuICAgIG1hcmdpbi10b3A6IDFlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDIzLjQzNzVlbSkgYW5kIChtYXgtd2lkdGg6IDI2LjU2MjVlbSkge1xcbiAgLmNvbnRlbnRDb250YWluZXI6bm90KDpsYXN0LWNoaWxkKSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG4gIC5jb250ZW50Q29udGFpbmVyX19maXJzdC0taW1hZ2Uge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIH1cXG4gIC5jb250ZW50Q29udGFpbmVyX19zZWNvbmQgcCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiAyNi41NjI1ZW0pIHtcXG4gIC5jb250ZW50Q29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJmaXJzdFxcXCIgXFxcInNlY29uZFxcXCIgXFxcImJ1dHRvblxcXCI7XFxuICB9XFxuICAuY29udGVudENvbnRhaW5lcl9fZmlyc3QsIC5jb250ZW50Q29udGFpbmVyX19zZWNvbmQge1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxuICAuY29udGVudENvbnRhaW5lcl9fZmlyc3QtLWltYWdlIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICB9XFxuICAuY29udGVudENvbnRhaW5lcl9fc2Vjb25kIHAge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxufVxcblxcbi5tZW51Q29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDRlbSA1ZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxuICBnYXA6IDFlbTtcXG59XFxuLm1lbnVDb250YWluZXJfX2l0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMjBlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY29sb3I6ICMwMDA7XFxufVxcbi5tZW51Q29udGFpbmVyX19pdGVtLS1pbWcge1xcbiAgaGVpZ2h0OiAyMGVtO1xcbiAgd2lkdGg6IDIwZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbn1cXG4ubWVudUNvbnRhaW5lcl9faXRlbS0taW1nIGltZyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG4ubWVudUNvbnRhaW5lcl9faXRlbS0tY29udGVudCB7XFxuICB3aWR0aDogNTAlO1xcbiAgcGFkZGluZzogMmVtIDFlbTtcXG59XFxuLm1lbnVDb250YWluZXJfX2l0ZW0tLWNvbnRlbnQgaDMge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG59XFxuLm1lbnVDb250YWluZXJfX2l0ZW0tLWNvbnRlbnQgcCB7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA0OGVtKSBhbmQgKG1heC13aWR0aDogNjRlbSkge1xcbiAgLm1lbnVDb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAyNi41NjI1ZW0pIGFuZCAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAubWVudUNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDJlbSAxZW07XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgfVxcbiAgLm1lbnVDb250YWluZXJfX2l0ZW0tLWNvbnRlbnQgaDMge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICB9XFxuICAubWVudUNvbnRhaW5lcl9faXRlbS0tY29udGVudCBwIHtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiAyNi41NjI1ZW0pIHtcXG4gIC5tZW51Q29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMWVtIDAuNWVtO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnI7XFxuICB9XFxuICAubWVudUNvbnRhaW5lcl9faXRlbSB7XFxuICAgIGhlaWdodDogMzBlbTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIC5tZW51Q29udGFpbmVyX19pdGVtLS1pbWcge1xcbiAgICBoZWlnaHQ6IDIwZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgLm1lbnVDb250YWluZXJfX2l0ZW0tLWNvbnRlbnQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMWVtO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9fY29sb3JzLnNjc3NcIixc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SjtBRXRSQztFRjJURDtJQTBDRSxZQUFBO0VBM0VBO0FBQ0Y7QUVqU0M7RUZpVUQ7SUE4Q0UsZ0JBQUE7SUFDQSwwQkFBQTtFQTFFQTtFQThFRTtJQUNDLGtCQUFBO0VBNUVIO0VBK0VFO0lBQ0MsZ0JBQUE7RUE3RUg7QUFDRjtBRTNVQztFRitWRDtJQStERSxrQkFBQTtJQUNBLDBCQUFBO0lBQ0EsdUJBQUE7RUEvRUE7RUFpRkE7SUFDQyxZQUFBO0lBQ0Esc0JBQUE7RUEvRUQ7RUFpRkM7SUFDQyxZQUFBO0lBQ0EsV0FBQTtFQS9FRjtFQWtGQztJQUNDLFdBQUE7SUFDQSxZQUFBO0VBaEZGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnLi9jb2xvcnMnO1xcclxcbkBpbXBvcnQgJy4vbWl4aW5zJztcXHJcXG5cXHJcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAzMDA7NDAwOzUwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuKiB7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLy8gLS0tLS0tLS0tLS0gUkVTVUFCTEUgQ09NUE9ORU5UUyAtLS0tLS0tLS0tLVxcclxcbi5uYXZiYXJDb250YWluZXIge1xcclxcblxcdGhlaWdodDogMy41ZW07XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogJHJlZENvbG9yLS0tMjtcXHJcXG5cXHRjb2xvcjogJG5ldXRyYWw7XFxyXFxuXFxyXFxuXFx0Jl9fbWVudUJhcnMge1xcclxcblxcdFxcdGRpc3BsYXk6IG5vbmU7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCZfX3VsIHtcXHJcXG5cXHRcXHRwYWRkaW5nOiAwLjZlbSAwO1xcclxcblxcdFxcdG1hcmdpbjogMCAyMmVtO1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuXFx0XFx0YWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxyXFxuXFx0XFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcblxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRcXHR6LWluZGV4OiA1O1xcclxcblxcclxcblxcdFxcdCYtLWxpIHtcXHJcXG5cXHRcXHRcXHRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxyXFxuXFx0XFx0XFx0Zm9udC1zaXplOiAxLjhyZW07XFxyXFxuXFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDYwMDtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Ji0tYW5jaG9yIHtcXHJcXG5cXHRcXHRcXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuXFx0XFx0XFx0Y29sb3I6ICRuZXV0cmFsO1xcclxcblxcdFxcdFxcdHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xcclxcblxcclxcblxcdFxcdFxcdCY6aG92ZXIge1xcclxcblxcdFxcdFxcdFxcdGNvbG9yOiAkcmVkQ29sb3ItLS0zO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcblxcdEBpbmNsdWRlIGxhcHRvcC1zbWFsbCB7XFxyXFxuXFx0XFx0Jl9fdWwge1xcclxcblxcdFxcdFxcdG1hcmdpbjogMCAxMWVtO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0QGluY2x1ZGUgdGFibGV0IHtcXHJcXG5cXHRcXHQmX19tZW51QmFycyB7XFxyXFxuXFx0XFx0XFx0cGFkZGluZzogMC41ZW0gMWVtO1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG5cXHRcXHRcXHRmaWxsOiAkbmV1dHJhbDtcXHJcXG5cXHRcXHRcXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdCZfX3VsIHtcXHJcXG5cXHRcXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRcXHRtYXJnaW46IDA7XFxyXFxuXFx0XFx0XFx0cGFkZGluZzogMmVtIDFlbSAxZW0gMDtcXHJcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxyXFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkQ29sb3ItLS0yO1xcclxcblxcclxcblxcdFxcdFxcdCYtLWFuY2hvciB7XFxyXFxuXFx0XFx0XFx0XFx0Y29sb3I6ICRuZXV0cmFsO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0LmhpZGUge1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IG5vbmU7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHRAaW5jbHVkZSBtb2JpbGUtbGFyZ2Uge1xcclxcblxcdFxcdCZfX3VsIHtcXHJcXG5cXHRcXHRcXHQmLS1saSB7XFxyXFxuXFx0XFx0XFx0XFx0Zm9udC1zaXplOiAxcmVtO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcblxcdEBpbmNsdWRlIG1vYmlsZS1hbGxTaXplIHtcXHJcXG5cXHRcXHQmX19tZW51QmFycyB7XFxyXFxuXFx0XFx0XFx0cGFkZGluZzogMC41ZW0gMWVtO1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG5cXHRcXHRcXHRmaWxsOiAkbmV1dHJhbDtcXHJcXG5cXHRcXHRcXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdCZfX3VsIHtcXHJcXG5cXHRcXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRcXHRtYXJnaW46IDA7XFxyXFxuXFx0XFx0XFx0cGFkZGluZzogMmVtIDFlbSAxZW0gMDtcXHJcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxyXFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkQ29sb3ItLS0yO1xcclxcblxcclxcblxcdFxcdFxcdCYtLWFuY2hvciB7XFxyXFxuXFx0XFx0XFx0XFx0Y29sb3I6ICRuZXV0cmFsO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0LmhpZGUge1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IG5vbmU7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlckNvbnRhaW5lciB7XFxyXFxuXFx0aGVpZ2h0OiAzLjVlbTtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogJHJlZENvbG9yLS0tMjtcXHJcXG5cXHRjb2xvcjogJG5ldXRyYWw7XFxyXFxuXFxyXFxuXFx0Jl9fdWwge1xcclxcblxcdFxcdHBhZGRpbmc6IDAuNmVtIDA7XFxyXFxuXFx0XFx0bWFyZ2luOiAwIDVlbTtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRcXHRhbGlnbi1pdGVtczogc3RyZXRjaDtcXHJcXG5cXHRcXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuXFxyXFxuXFx0XFx0Ji0tbGkge1xcclxcblxcdFxcdFxcdHBhZGRpbmc6IDAgMC41ZW07XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG5cXHRcXHRcXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFxyXFxuXFx0XFx0XFx0I2Zvb3Rlckljb25zIHtcXHJcXG5cXHRcXHRcXHRcXHRmaWxsOiAjZmZmO1xcclxcblxcdFxcdFxcdFxcdGhlaWdodDogJzEwZW0nO1xcclxcblxcdFxcdFxcdFxcdHdpZHRoOiAnMTBlbSc7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Jl9fcGFyYSB7XFxyXFxuXFx0XFx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcclxcblxcdFxcdGZvbnQtc2l6ZTogMXJlbTtcXHJcXG5cXHRcXHRmb250LXdlaWdodDogNTAwO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHRAaW5jbHVkZSBtb2JpbGUtbGFyZ2Uge1xcclxcblxcdFxcdCZfX3VsIHtcXHJcXG5cXHRcXHRcXHRwYWRkaW5nOiAwO1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQmID4gKiB7XFxyXFxuXFx0XFx0XFx0bWFyZ2luLWJvdHRvbTogMWVtO1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQmX19wYXJhIHtcXHJcXG5cXHRcXHRcXHRmb250LXNpemU6IDEuMnJlbTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcblxcdEBpbmNsdWRlIG1vYmlsZS1hbGxTaXplIHtcXHJcXG5cXHRcXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0cGFkZGluZzogMWVtIDA7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLy8gLS0tLS0tLS0tLS0gSE9NRSBDT01QT05FTlRTIC0tLS0tLS0tLS0tXFxyXFxuXFxyXFxuLmNvbnRlbnRDb250YWluZXIge1xcclxcblxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHRwYWRkaW5nOiAyZW0gMy41ZW07XFxyXFxuXFx0bWFyZ2luOiAzZW0gMmVtIDA7XFxyXFxuXFx0ZGlzcGxheTogZ3JpZDtcXHJcXG5cXHRncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcblxcdFxcdCdmaXJzdCBzZWNvbmQnXFxyXFxuXFx0XFx0J2J1dHRvbiBidXR0b24nO1xcclxcblxcclxcblxcdCZfX2ZpcnN0IHtcXHJcXG5cXHRcXHRncmlkLWFyZWE6IGZpcnN0O1xcclxcblxcdFxcdC8vIG1hcmdpbi1yaWdodDogMWVtO1xcclxcblxcclxcblxcdFxcdCYtLWltYWdlIHtcXHJcXG5cXHRcXHRcXHRoZWlnaHQ6IDMwZW07XFxyXFxuXFx0XFx0XFx0d2lkdGg6IDMwZW07XFxyXFxuXFx0XFx0XFx0b2JqZWN0LWZpdDogY29udGFpbjtcXHJcXG5cXHRcXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0XFx0XFx0ei1pbmRleDogMTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCZfX3NlY29uZCB7XFxyXFxuXFx0XFx0Z3JpZC1hcmVhOiBzZWNvbmQ7XFxyXFxuXFx0XFx0cGFkZGluZzogMmVtO1xcclxcblxcdFxcdGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXHJcXG5cXHJcXG5cXHRcXHRwIHtcXHJcXG5cXHRcXHRcXHRtYXJnaW4tdG9wOiAxZW07XFxyXFxuXFx0XFx0XFx0bWFyZ2luLXJpZ2h0OiAzZW07XFxyXFxuXFx0XFx0XFx0bGluZS1oZWlnaHQ6IDEuNTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCZfX3RoaXJkIHtcXHJcXG5cXHRcXHRncmlkLWFyZWE6IGJ1dHRvbjtcXHJcXG5cXHRcXHRtYXJnaW46IDFlbSBhdXRvO1xcclxcblxcclxcblxcdFxcdCYtLWJ1dHRvbiB7XFxyXFxuXFx0XFx0XFx0cGFkZGluZzogMC44ZW0gMy41ZW07XFxyXFxuXFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogMWVtO1xcclxcblxcdFxcdFxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkQ29sb3ItLS0xO1xcclxcblxcdFxcdFxcdGNvbG9yOiAkbmV1dHJhbDtcXHJcXG5cXHRcXHRcXHRmb250LXNpemU6IDFyZW07XFxyXFxuXFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG5cXHRcXHRcXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0XFx0XFx0dHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XFxyXFxuXFxyXFxuXFx0XFx0XFx0Jjpob3ZlciB7XFxyXFxuXFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogJHJlZENvbG9yLS0tMjtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHRAaW5jbHVkZSBsYXB0b3Atc21hbGwge1xcclxcblxcdFxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHRcXHRwYWRkaW5nOiAwO1xcclxcblxcdFxcdG1hcmdpbjogMmVtO1xcclxcblxcclxcblxcdFxcdCZfX2ZpcnN0IHtcXHJcXG5cXHRcXHRcXHRtYXJnaW46IDA7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdCZfX3NlY29uZCB7XFxyXFxuXFx0XFx0XFx0bWFyZ2luOiAwO1xcclxcblxcdFxcdFxcdHBhZGRpbmc6IDA7XFxyXFxuXFxyXFxuXFx0XFx0XFx0cCB7XFxyXFxuXFx0XFx0XFx0XFx0bWFyZ2luOiAwO1xcclxcblxcdFxcdFxcdFxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0QGluY2x1ZGUgdGFibGV0IHtcXHJcXG5cXHRcXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0XFx0cGFkZGluZzogNWVtO1xcclxcblxcdFxcdG1hcmdpbjogMWVtO1xcclxcblxcdFxcdGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuXFx0XFx0XFx0J2ZpcnN0J1xcclxcblxcdFxcdFxcdCdzZWNvbmQnXFxyXFxuXFx0XFx0XFx0J2J1dHRvbic7XFxyXFxuXFxyXFxuXFx0XFx0Jl9fZmlyc3QsXFxyXFxuXFx0XFx0Jl9fc2Vjb25kIHtcXHJcXG5cXHRcXHRcXHRtYXJnaW46IDA7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdCZfX2ZpcnN0IHtcXHJcXG5cXHRcXHRcXHQmLS1pbWFnZSB7XFxyXFxuXFx0XFx0XFx0XFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdFxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdFxcdFxcdG9iamVjdC1maXQ6IGNvdmVyO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Jl9fc2Vjb25kIHtcXHJcXG5cXHRcXHRcXHRtYXJnaW4tdG9wOiAxZW07XFxyXFxuXFx0XFx0XFx0Zm9udC1zaXplOiAwLjlyZW07XFxyXFxuXFxyXFxuXFx0XFx0XFx0cCB7XFxyXFxuXFx0XFx0XFx0XFx0bWFyZ2luLXRvcDogMWVtO1xcclxcblxcdFxcdFxcdFxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQmX190aGlyZCB7XFxyXFxuXFx0XFx0XFx0bWFyZ2luLXRvcDogMWVtO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0QGluY2x1ZGUgbW9iaWxlLWxhcmdlIHtcXHJcXG5cXHRcXHQmOm5vdCg6bGFzdC1jaGlsZCkge1xcclxcblxcdFxcdFxcdG1hcmdpbjogMDtcXHJcXG5cXHRcXHRcXHRwYWRkaW5nOiAwO1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQmX19maXJzdCB7XFxyXFxuXFx0XFx0XFx0Ji0taW1hZ2Uge1xcclxcblxcdFxcdFxcdFxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHRcXHRcXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRcXHRcXHRvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdCZfX3NlY29uZCB7XFxyXFxuXFx0XFx0XFx0cCB7XFxyXFxuXFx0XFx0XFx0XFx0bWFyZ2luOiAwO1xcclxcblxcdFxcdFxcdFxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0QGluY2x1ZGUgbW9iaWxlLWFsbFNpemUge1xcclxcblxcdFxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHRcXHRtYXJnaW46IDA7XFxyXFxuXFx0XFx0cGFkZGluZzogMDtcXHJcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcblxcdFxcdFxcdCdmaXJzdCdcXHJcXG5cXHRcXHRcXHQnc2Vjb25kJ1xcclxcblxcdFxcdFxcdCdidXR0b24nO1xcclxcblxcclxcblxcdFxcdCZfX2ZpcnN0LFxcclxcblxcdFxcdCZfX3NlY29uZCB7XFxyXFxuXFx0XFx0XFx0bWFyZ2luOiAwO1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQmX19maXJzdCB7XFxyXFxuXFx0XFx0XFx0Ji0taW1hZ2Uge1xcclxcblxcdFxcdFxcdFxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHRcXHRcXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRcXHRcXHRvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdCZfX3NlY29uZCB7XFxyXFxuXFx0XFx0XFx0cCB7XFxyXFxuXFx0XFx0XFx0XFx0bWFyZ2luOiAwO1xcclxcblxcdFxcdFxcdFxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbi8vIC0tLS0tLS0tLS0tIE1FTlUgQ09NUE9ORU5UUyAtLS0tLS0tLS0tLVxcclxcblxcclxcbi5tZW51Q29udGFpbmVyIHtcXHJcXG5cXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0cGFkZGluZzogNGVtIDVlbTtcXHJcXG5cXHRkaXNwbGF5OiBncmlkO1xcclxcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXHJcXG5cXHRnYXA6IDFlbTtcXHJcXG5cXHJcXG5cXHQmX19pdGVtIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdGhlaWdodDogMjBlbTtcXHJcXG5cXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRjb2xvcjogIzAwMDtcXHJcXG5cXHJcXG5cXHRcXHQmLS1pbWcge1xcclxcblxcdFxcdFxcdGhlaWdodDogMjBlbTtcXHJcXG5cXHRcXHRcXHR3aWR0aDogMjBlbTtcXHJcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcclxcblxcclxcblxcdFxcdFxcdGltZyB7XFxyXFxuXFx0XFx0XFx0XFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdFxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdFxcdFxcdG9iamVjdC1maXQ6IGNvdmVyO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Ji0tY29udGVudCB7XFxyXFxuXFx0XFx0XFx0d2lkdGg6IDUwJTtcXHJcXG5cXHRcXHRcXHRwYWRkaW5nOiAyZW0gMWVtO1xcclxcblxcclxcblxcdFxcdFxcdGgzIHtcXHJcXG5cXHRcXHRcXHRcXHRmb250LXNpemU6IDEuNXJlbTtcXHJcXG5cXHRcXHRcXHRcXHRtYXJnaW4tYm90dG9tOiAwLjVlbTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0cCB7XFxyXFxuXFx0XFx0XFx0XFx0Zm9udC1zaXplOiAxLjI1cmVtO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcblxcdEBpbmNsdWRlIGxhcHRvcC1zbWFsbCB7XFxyXFxuXFx0XFx0cGFkZGluZzogMWVtO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHRAaW5jbHVkZSB0YWJsZXQge1xcclxcblxcdFxcdHBhZGRpbmc6IDJlbSAxZW07XFxyXFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuXFxyXFxuXFx0XFx0Jl9faXRlbSB7XFxyXFxuXFx0XFx0XFx0Ji0tY29udGVudCB7XFxyXFxuXFx0XFx0XFx0XFx0aDMge1xcclxcblxcdFxcdFxcdFxcdFxcdG1hcmdpbi1ib3R0b206IDFlbTtcXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0cCB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0bGluZS1oZWlnaHQ6IDEuNTtcXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0QGluY2x1ZGUgbW9iaWxlLWFsbFNpemUge1xcclxcblxcdFxcdHBhZGRpbmc6IDFlbSAwLjVlbTtcXHJcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG5cXHRcXHRncmlkLXRlbXBsYXRlLXJvd3M6IDJmcjtcXHJcXG5cXHJcXG5cXHRcXHQmX19pdGVtIHtcXHJcXG5cXHRcXHRcXHRoZWlnaHQ6IDMwZW07XFxyXFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHJcXG5cXHRcXHRcXHQmLS1pbWcge1xcclxcblxcdFxcdFxcdFxcdGhlaWdodDogMjBlbTtcXHJcXG5cXHRcXHRcXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0Ji0tY29udGVudCB7XFxyXFxuXFx0XFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0XFx0XFx0cGFkZGluZzogMWVtO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cIixcIiRuZXV0cmFsOiAjZmZmO1xcclxcbiRyZWRDb2xvci0tLTE6ICM0ZDA1MTE7XFxyXFxuJHJlZENvbG9yLS0tMjogI2M3MmMzOTtcXHJcXG4kcmVkQ29sb3ItLS0zOiAjZmY4Nzg5O1xcclxcbiRibHVlQ29sb3ItLS0xOiAjMTAzZThmO1xcclxcbiRibHVlQ29sb3ItLS0yOiAjMTZiOWY1O1xcclxcbiRibHVlQ29sb3ItLS0zOiAjYzJlN2ZmO1xcclxcblwiLFwiQG1peGluIG1vYmlsZS1hbGxTaXplIHtcXHJcXG5cXHRAbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDI2LjU2MjVlbSkge1xcclxcblxcdFxcdEBjb250ZW50O1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIG1vYmlsZS1zbWFsbCB7XFxyXFxuXFx0QG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcXHJcXG5cXHRcXHRAY29udGVudDtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBtb2JpbGUtbWVkaXVtIHtcXHJcXG5cXHRAbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDIzLjQzNzVlbSkge1xcclxcblxcdFxcdEBjb250ZW50O1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIG1vYmlsZS1sYXJnZSB7XFxyXFxuXFx0QG1lZGlhIChtaW4td2lkdGg6IDIzLjQzNzVlbSkgYW5kIChtYXgtd2lkdGg6IDI2LjU2MjVlbSkge1xcclxcblxcdFxcdEBjb250ZW50O1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIHRhYmxldC1tb2JpbGUge1xcclxcblxcdEBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNDhlbSkge1xcclxcblxcdFxcdEBjb250ZW50O1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIHRhYmxldCB7XFxyXFxuXFx0QG1lZGlhIChtaW4td2lkdGg6IDI2LjU2MjVlbSkgYW5kIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXHJcXG5cXHRcXHRAY29udGVudDtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBsYXB0b3Atc21hbGwge1xcclxcblxcdEBtZWRpYSAobWluLXdpZHRoOiA0OGVtKSBhbmQgKG1heC13aWR0aDogNjRlbSkge1xcclxcblxcdFxcdEBjb250ZW50O1xcclxcblxcdH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjb25zdCBmdW5jRXZlbnQgPSAoKSA9PiB7XHJcblx0Y29uc3QgbmF2YmFyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51QmFyJyk7XHJcblx0Y29uc3QgbmF2YmFyTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXJDb250YWluZXJfX3VsJyk7XHJcblx0Y29uc3QgZXZlbnRGdW5jID0gKCkgPT4ge1xyXG5cdFx0bmF2YmFyTGlzdC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XHJcblx0fTtcclxuXHRuYXZiYXJNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnRGdW5jKTtcclxuXHRyZXR1cm4gbmF2YmFyTWVudTtcclxufTtcclxuIiwiaW1wb3J0ICcuLi8uLi9zdHlsZXMvbWFpbi5zY3NzJztcclxuaW1wb3J0IGpzb24gZnJvbSAnLi9kYXRhLmpzb24nO1xyXG5cclxuLy8gaHR0cHM6Ly9hcGkudW5zcGxhc2guY29tL3NlYXJjaC9waG90b3M/cXVlcnk9bWluaW1hbFxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbnRlbnRDb21wb25lbnRzID0gKCkgPT4ge1xyXG5cdGNvbnN0IGNsaWVudElkID0gJ3JZSWppN1gwRmg5WU9WMW04TkJFcllUZ3FMb05COWJuRTE4ZDBIUF9WbFUnO1xyXG5cdGNvbnN0IHVybCA9XHJcblx0XHQnaHR0cHM6Ly9hcGkudW5zcGxhc2guY29tL3NlYXJjaC9waG90b3M/cXVlcnk9cmVzdGF1cmFudCZjbGllbnRfaWQ9JyArXHJcblx0XHRjbGllbnRJZDtcclxuXHJcblx0Y29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0Y29uc3QgZGF0YSA9IGpzb24uZGV0YWlscztcclxuXHJcblx0Ly8gKGFzeW5jICgpID0+IHtcclxuXHQvLyBcdGxldCBnZXRJbWcgPSBhd2FpdCBnZXRJbWFnZSgpO1xyXG5cdC8vIFx0Y29uc3QgdGVzdGluZ0ltZyA9IG5ldyBJbWFnZSgpO1xyXG5cclxuXHQvLyBcdHRlc3RpbmdJbWcuc3JjID0gZ2V0SW1nO1xyXG5cdC8vIFx0ZGl2LmFwcGVuZENoaWxkKHRlc3RpbmdJbWcpO1xyXG5cdC8vIH0pKCk7XHJcblxyXG5cdGRpdi5jbGFzc0xpc3QuYWRkKCdtZW51Q29udGFpbmVyJyk7XHJcblxyXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG5cdFx0Y29uc3QgZGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0Y29uc3QgZGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0Y29uc3QgZGl2MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0Y29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG5cdFx0Y29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHJcblx0XHRkaXYxLmNsYXNzTGlzdC5hZGQoJ21lbnVDb250YWluZXJfX2l0ZW0nKTtcclxuXHRcdGRpdjIuY2xhc3NMaXN0LmFkZCgnbWVudUNvbnRhaW5lcl9faXRlbS0taW1nJyk7XHJcblx0XHRkaXYzLmNsYXNzTGlzdC5hZGQoJ21lbnVDb250YWluZXJfX2l0ZW0tLWNvbnRlbnQnKTtcclxuXHJcblx0XHQoYXN5bmMgKCkgPT4ge1xyXG5cdFx0XHRsZXQgZ2V0SW1nID0gYXdhaXQgZ2V0SW1hZ2UoKTtcclxuXHRcdFx0Y29uc3QgdGVzdGluZ0ltZyA9IG5ldyBJbWFnZSgpO1xyXG5cclxuXHRcdFx0dGVzdGluZ0ltZy5zcmMgPSBnZXRJbWc7XHJcblx0XHRcdGRpdjIuYXBwZW5kQ2hpbGQodGVzdGluZ0ltZyk7XHJcblx0XHR9KSgpO1xyXG5cclxuXHRcdGgzLnRleHRDb250ZW50ID0gZGF0YVtpXS50aXRsZTtcclxuXHRcdHBhcmEudGV4dENvbnRlbnQgPSBkYXRhW2ldLmFib3V0O1xyXG5cclxuXHRcdGRpdjEuYXBwZW5kQ2hpbGQoZGl2Mik7XHJcblx0XHRkaXYxLmFwcGVuZENoaWxkKGRpdjMpO1xyXG5cdFx0ZGl2My5hcHBlbmRDaGlsZChoMyk7XHJcblx0XHRkaXYzLmFwcGVuZENoaWxkKHBhcmEpO1xyXG5cdFx0ZGl2LmFwcGVuZENoaWxkKGRpdjEpO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgZnVuY3Rpb24gZ2V0SW1hZ2UoKSB7XHJcblx0XHRsZXQgcmFuZG9tTnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNik7XHJcblx0XHRyZXR1cm4gZmV0Y2godXJsKVxyXG5cdFx0XHQudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuXHRcdFx0LnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0XHRsZXQgYWxsSW1hZ2VzID0gZGF0YS5yZXN1bHRzW3JhbmRvbU51bWJlcl07XHJcblx0XHRcdFx0cmV0dXJuIGFsbEltYWdlcy51cmxzLnJlZ3VsYXI7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGRpdjtcclxufTtcclxuIiwiaW1wb3J0IHsgbmF2YmFyQ29tcG9uZW50IH0gZnJvbSAnLi4vcmV1c2FibGVDb21wb25lbnRzL25hdmJhclNlY3Rpb24nO1xyXG5pbXBvcnQgeyBmb290ZXJDb21wb25lbnQgfSBmcm9tICcuLi9yZXVzYWJsZUNvbXBvbmVudHMvZm9vdGVyU2VjdGlvbic7XHJcbmltcG9ydCB7IGNvbnRlbnRDb21wb25lbnRzIH0gZnJvbSAnLi4vbWVudS9jb250ZW50TWVudSc7XHJcbmltcG9ydCB7IGZ1bmNFdmVudCB9IGZyb20gJy4uL2V2ZW50TGlzdGVuZXIvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1lbnVDb21wb25lbnRzID0gKCkgPT4ge1xyXG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobmF2YmFyQ29tcG9uZW50KCkpO1xyXG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudENvbXBvbmVudHMoKSk7XHJcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb290ZXJDb21wb25lbnQoKSk7XHJcblx0ZnVuY0V2ZW50KCk7XHJcbn07XHJcbiIsImltcG9ydCAnLi4vLi4vc3R5bGVzL21haW4uc2Nzcyc7XHJcblxyXG5jb25zdCBkYXRlID0gbmV3IERhdGUoKTtcclxuY29uc3QgZ2V0WWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBmb290ZXJBcnIgPSBbXHJcblx0e1xyXG5cdFx0dGl0bGU6ICdHdW5kYW0gQ2FmZScsXHJcblx0XHRpY29uczogW1xyXG5cdFx0XHRgPHN2ZyBpZD1cImZvb3Rlckljb25zXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIGhlaWdodD0nMmVtJyB3aWR0aD0nMmVtJz5cclxuICAgICAgICAgICAgICAgIDxwYXRoICBkPVwiTTUwNCAyNTZDNTA0IDExOSAzOTMgOCAyNTYgOFM4IDExOSA4IDI1NmMwIDEyMy43OCA5MC42OSAyMjYuMzggMjA5LjI1IDI0NVYzMjcuNjloLTYzVjI1Nmg2M3YtNTQuNjRjMC02Mi4xNSAzNy05Ni40OCA5My42Ny05Ni40OCAyNy4xNCAwIDU1LjUyIDQuODQgNTUuNTIgNC44NHY2MWgtMzEuMjhjLTMwLjggMC00MC40MSAxOS4xMi00MC40MSAzOC43M1YyNTZoNjguNzhsLTExIDcxLjY5aC01Ny43OFY1MDFDNDEzLjMxIDQ4Mi4zOCA1MDQgMzc5Ljc4IDUwNCAyNTZ6XCIvPlxyXG4gICAgICAgICAgICA8L3N2Zz5gLFxyXG5cdFx0XHRgPHN2ZyBpZD1cImZvb3Rlckljb25zXCIgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNDk2IDUxMicgaGVpZ2h0PScyZW0nIHdpZHRoPScyZW0nPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggIGQ9J00xNjUuOSAzOTcuNGMwIDItMi4zIDMuNi01LjIgMy42LTMuMy4zLTUuNi0xLjMtNS42LTMuNiAwLTIgMi4zLTMuNiA1LjItMy42IDMtLjMgNS42IDEuMyA1LjYgMy42em0tMzEuMS00LjVjLS43IDIgMS4zIDQuMyA0LjMgNC45IDIuNiAxIDUuNiAwIDYuMi0ycy0xLjMtNC4zLTQuMy01LjJjLTIuNi0uNy01LjUuMy02LjIgMi4zem00NC4yLTEuN2MtMi45LjctNC45IDIuNi00LjYgNC45LjMgMiAyLjkgMy4zIDUuOSAyLjYgMi45LS43IDQuOS0yLjYgNC42LTQuNi0uMy0xLjktMy0zLjItNS45LTIuOXpNMjQ0LjggOEMxMDYuMSA4IDAgMTEzLjMgMCAyNTJjMCAxMTAuOSA2OS44IDIwNS44IDE2OS41IDIzOS4yIDEyLjggMi4zIDE3LjMtNS42IDE3LjMtMTIuMSAwLTYuMi0uMy00MC40LS4zLTYxLjQgMCAwLTcwIDE1LTg0LjctMjkuOCAwIDAtMTEuNC0yOS4xLTI3LjgtMzYuNiAwIDAtMjIuOS0xNS43IDEuNi0xNS40IDAgMCAyNC45IDIgMzguNiAyNS44IDIxLjkgMzguNiA1OC42IDI3LjUgNzIuOSAyMC45IDIuMy0xNiA4LjgtMjcuMSAxNi0zMy43LTU1LjktNi4yLTExMi4zLTE0LjMtMTEyLjMtMTEwLjUgMC0yNy41IDcuNi00MS4zIDIzLjYtNTguOS0yLjYtNi41LTExLjEtMzMuMyAyLjYtNjcuOSAyMC45LTYuNSA2OSAyNyA2OSAyNyAyMC01LjYgNDEuNS04LjUgNjIuOC04LjVzNDIuOCAyLjkgNjIuOCA4LjVjMCAwIDQ4LjEtMzMuNiA2OS0yNyAxMy43IDM0LjcgNS4yIDYxLjQgMi42IDY3LjkgMTYgMTcuNyAyNS44IDMxLjUgMjUuOCA1OC45IDAgOTYuNS01OC45IDEwNC4yLTExNC44IDExMC41IDkuMiA3LjkgMTcgMjIuOSAxNyA0Ni40IDAgMzMuNy0uMyA3NS40LS4zIDgzLjYgMCA2LjUgNC42IDE0LjQgMTcuMyAxMi4xQzQyOC4yIDQ1Ny44IDQ5NiAzNjIuOSA0OTYgMjUyIDQ5NiAxMTMuMyAzODMuNSA4IDI0NC44IDh6TTk3LjIgMzUyLjljLTEuMyAxLTEgMy4zLjcgNS4yIDEuNiAxLjYgMy45IDIuMyA1LjIgMSAxLjMtMSAxLTMuMy0uNy01LjItMS42LTEuNi0zLjktMi4zLTUuMi0xem0tMTAuOC04LjFjLS43IDEuMy4zIDIuOSAyLjMgMy45IDEuNiAxIDMuNi43IDQuMy0uNy43LTEuMy0uMy0yLjktMi4zLTMuOS0yLS42LTMuNi0uMy00LjMuN3ptMzIuNCAzNS42Yy0xLjYgMS4zLTEgNC4zIDEuMyA2LjIgMi4zIDIuMyA1LjIgMi42IDYuNSAxIDEuMy0xLjMuNy00LjMtMS4zLTYuMi0yLjItMi4zLTUuMi0yLjYtNi41LTF6bS0xMS40LTE0LjdjLTEuNiAxLTEuNiAzLjYgMCA1LjkgMS42IDIuMyA0LjMgMy4zIDUuNiAyLjMgMS42LTEuMyAxLjYtMy45IDAtNi4yLTEuNC0yLjMtNC0zLjMtNS42LTJ6JyAvPlxyXG4gICAgICAgICAgICA8L3N2Zz5gLFxyXG5cdFx0XHRgPHN2ZyBpZD1cImZvb3Rlckljb25zXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiIGhlaWdodD0nMmVtJyB3aWR0aD0nMmVtJz5cclxuICAgICAgICAgICAgICAgIDxwYXRoICBkPVwiTTIyNC4xIDE0MWMtNjMuNiAwLTExNC45IDUxLjMtMTE0LjkgMTE0LjlzNTEuMyAxMTQuOSAxMTQuOSAxMTQuOVMzMzkgMzE5LjUgMzM5IDI1NS45IDI4Ny43IDE0MSAyMjQuMSAxNDF6bTAgMTg5LjZjLTQxLjEgMC03NC43LTMzLjUtNzQuNy03NC43czMzLjUtNzQuNyA3NC43LTc0LjcgNzQuNyAzMy41IDc0LjcgNzQuNy0zMy42IDc0LjctNzQuNyA3NC43em0xNDYuNC0xOTQuM2MwIDE0LjktMTIgMjYuOC0yNi44IDI2LjgtMTQuOSAwLTI2LjgtMTItMjYuOC0yNi44czEyLTI2LjggMjYuOC0yNi44IDI2LjggMTIgMjYuOCAyNi44em03Ni4xIDI3LjJjLTEuNy0zNS45LTkuOS02Ny43LTM2LjItOTMuOS0yNi4yLTI2LjItNTgtMzQuNC05My45LTM2LjItMzctMi4xLTE0Ny45LTIuMS0xODQuOSAwLTM1LjggMS43LTY3LjYgOS45LTkzLjkgMzYuMXMtMzQuNCA1OC0zNi4yIDkzLjljLTIuMSAzNy0yLjEgMTQ3LjkgMCAxODQuOSAxLjcgMzUuOSA5LjkgNjcuNyAzNi4yIDkzLjlzNTggMzQuNCA5My45IDM2LjJjMzcgMi4xIDE0Ny45IDIuMSAxODQuOSAwIDM1LjktMS43IDY3LjctOS45IDkzLjktMzYuMiAyNi4yLTI2LjIgMzQuNC01OCAzNi4yLTkzLjkgMi4xLTM3IDIuMS0xNDcuOCAwLTE4NC44ek0zOTguOCAzODhjLTcuOCAxOS42LTIyLjkgMzQuNy00Mi42IDQyLjYtMjkuNSAxMS43LTk5LjUgOS0xMzIuMSA5cy0xMDIuNyAyLjYtMTMyLjEtOWMtMTkuNi03LjgtMzQuNy0yMi45LTQyLjYtNDIuNi0xMS43LTI5LjUtOS05OS41LTktMTMyLjFzLTIuNi0xMDIuNyA5LTEzMi4xYzcuOC0xOS42IDIyLjktMzQuNyA0Mi42LTQyLjYgMjkuNS0xMS43IDk5LjUtOSAxMzIuMS05czEwMi43LTIuNiAxMzIuMSA5YzE5LjYgNy44IDM0LjcgMjIuOSA0Mi42IDQyLjYgMTEuNyAyOS41IDkgOTkuNSA5IDEzMi4xczIuNyAxMDIuNy05IDEzMi4xelwiLz5cclxuICAgICAgICAgICAgPC9zdmc+YCxcclxuXHRcdFx0YDxzdmcgaWQ9XCJmb290ZXJJY29uc1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiBoZWlnaHQ9JzJlbScgd2lkdGg9JzJlbSc+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCAgZD1cIk00NTkuMzcgMTUxLjcxNmMuMzI1IDQuNTQ4LjMyNSA5LjA5Ny4zMjUgMTMuNjQ1IDAgMTM4LjcyLTEwNS41ODMgMjk4LjU1OC0yOTguNTU4IDI5OC41NTgtNTkuNDUyIDAtMTE0LjY4LTE3LjIxOS0xNjEuMTM3LTQ3LjEwNiA4LjQ0Ny45NzQgMTYuNTY4IDEuMjk5IDI1LjM0IDEuMjk5IDQ5LjA1NSAwIDk0LjIxMy0xNi41NjggMTMwLjI3NC00NC44MzItNDYuMTMyLS45NzUtODQuNzkyLTMxLjE4OC05OC4xMTItNzIuNzcyIDYuNDk4Ljk3NCAxMi45OTUgMS42MjQgMTkuODE4IDEuNjI0IDkuNDIxIDAgMTguODQzLTEuMyAyNy42MTQtMy41NzMtNDguMDgxLTkuNzQ3LTg0LjE0My01MS45OC04NC4xNDMtMTAyLjk4NXYtMS4yOTljMTMuOTY5IDcuNzk3IDMwLjIxNCAxMi42NyA0Ny40MzEgMTMuMzE5LTI4LjI2NC0xOC44NDMtNDYuNzgxLTUxLjAwNS00Ni43ODEtODcuMzkxIDAtMTkuNDkyIDUuMTk3LTM3LjM2IDE0LjI5NC01Mi45NTQgNTEuNjU1IDYzLjY3NSAxMjkuMyAxMDUuMjU4IDIxNi4zNjUgMTA5LjgwNy0xLjYyNC03Ljc5Ny0yLjU5OS0xNS45MTgtMi41OTktMjQuMDQgMC01Ny44MjggNDYuNzgyLTEwNC45MzQgMTA0LjkzNC0xMDQuOTM0IDMwLjIxMyAwIDU3LjUwMiAxMi42NyA3Ni42NyAzMy4xMzcgMjMuNzE1LTQuNTQ4IDQ2LjQ1Ni0xMy4zMiA2Ni41OTktMjUuMzQtNy43OTggMjQuMzY2LTI0LjM2NiA0NC44MzMtNDYuMTMyIDU3LjgyNyAyMS4xMTctMi4yNzMgNDEuNTg0LTguMTIyIDYwLjQyNi0xNi4yNDMtMTQuMjkyIDIwLjc5MS0zMi4xNjEgMzkuMzA4LTUyLjYyOCA1NC4yNTN6XCIvPlxyXG4gICAgICAgICAgICA8L3N2Zz5gXHJcblx0XHRdLFxyXG5cdFx0ZGF0ZTogYEFsbCByaWdodCByZXNlcnZlIEAke2dldFllYXJ9YFxyXG5cdH1cclxuXTtcclxuIiwiaW1wb3J0ICcuLi8uLi9zdHlsZXMvbWFpbi5zY3NzJztcclxuaW1wb3J0IHsgZm9vdGVyQXJyIH0gZnJvbSAnLi9kYXRhJztcclxuXHJcbmV4cG9ydCBjb25zdCBmb290ZXJDb21wb25lbnQgPSAoKSA9PiB7XHJcblx0Y29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0Y29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG5cdGNvbnN0IHBhcmExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cdGNvbnN0IHBhcmEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cclxuXHRkaXYuY2xhc3NMaXN0LmFkZCgnZm9vdGVyQ29udGFpbmVyJyk7XHJcblx0dWwuY2xhc3NMaXN0LmFkZCgnZm9vdGVyQ29udGFpbmVyX191bCcpO1xyXG5cdHBhcmExLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlckNvbnRhaW5lcl9fcGFyYScpO1xyXG5cdHBhcmEyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlckNvbnRhaW5lcl9fcGFyYScpO1xyXG5cclxuXHRmb3IgKGxldCBpID0gMDsgaSA8IGZvb3RlckFyci5sZW5ndGg7IGkrKykge1xyXG5cdFx0Y29uc3QgZm9udEljb25zID0gZm9vdGVyQXJyW2ldLmljb25zO1xyXG5cclxuXHRcdGZvciAobGV0IGogPSAwOyBqIDwgZm9udEljb25zLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuXHJcblx0XHRcdGxpLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlckNvbnRhaW5lcl9fdWwtLWxpJyk7XHJcblx0XHRcdGxpLmlubmVySFRNTCA9IGZvbnRJY29uc1tqXTtcclxuXHJcblx0XHRcdHVsLmFwcGVuZENoaWxkKGxpKTtcclxuXHRcdH1cclxuXHJcblx0XHRwYXJhMS50ZXh0Q29udGVudCA9IGZvb3RlckFycltpXS50aXRsZTtcclxuXHRcdHBhcmEyLnRleHRDb250ZW50ID0gZm9vdGVyQXJyW2ldLmRhdGU7XHJcblx0fVxyXG5cclxuXHRkaXYuYXBwZW5kQ2hpbGQocGFyYTEpO1xyXG5cdGRpdi5hcHBlbmRDaGlsZCh1bCk7XHJcblx0ZGl2LmFwcGVuZENoaWxkKHBhcmEyKTtcclxuXHJcblx0cmV0dXJuIGRpdjtcclxufTtcclxuIiwiaW1wb3J0ICcuLi8uLi9zdHlsZXMvbWFpbi5zY3NzJztcclxuXHJcbmV4cG9ydCBjb25zdCBuYXZiYXJDb21wb25lbnQgPSAoKSA9PiB7XHJcblx0Y29uc3QgbmFtZUFyciA9IFsnSG9tZScsICdNZW51JywgJ0NvbnRhY3QnXTtcclxuXHRjb25zdCBsaW5rQXJyID0gWydpbmRleC5odG1sJywgJ21lbnUuaHRtbCcsICdjb250YWN0Lmh0bWwnXTtcclxuXHRjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcblx0Y29uc3QgbWVudUJhcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcblx0ZGl2LmNsYXNzTGlzdC5hZGQoJ25hdmJhckNvbnRhaW5lcicpO1xyXG5cdHVsLmNsYXNzTGlzdC5hZGQoJ25hdmJhckNvbnRhaW5lcl9fdWwnKTtcclxuXHR1bC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcblx0bWVudUJhcnMuY2xhc3NMaXN0LmFkZCgnbmF2YmFyQ29udGFpbmVyX19tZW51QmFycycpO1xyXG5cdC8vIG1lbnVCYXJzLnNldEF0dHJpYnV0ZSgpO1xyXG5cclxuXHRtZW51QmFycy5pbm5lckhUTUwgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0NDggNTEyXCIgaGVpZ2h0PVwiMi41ZW1cIiB3aWR0aD1cIjIuNWVtXCIgaWQ9XCJtZW51QmFyXCI+PHBhdGggZD1cIk0wIDk2QzAgNzguMzMgMTQuMzMgNjQgMzIgNjRINDE2QzQzMy43IDY0IDQ0OCA3OC4zMyA0NDggOTZDNDQ4IDExMy43IDQzMy43IDEyOCA0MTYgMTI4SDMyQzE0LjMzIDEyOCAwIDExMy43IDAgOTZ6TTAgMjU2QzAgMjM4LjMgMTQuMzMgMjI0IDMyIDIyNEg0MTZDNDMzLjcgMjI0IDQ0OCAyMzguMyA0NDggMjU2QzQ0OCAyNzMuNyA0MzMuNyAyODggNDE2IDI4OEgzMkMxNC4zMyAyODggMCAyNzMuNyAwIDI1NnpNNDE2IDQ0OEgzMkMxNC4zMyA0NDggMCA0MzMuNyAwIDQxNkMwIDM5OC4zIDE0LjMzIDM4NCAzMiAzODRINDE2QzQzMy43IDM4NCA0NDggMzk4LjMgNDQ4IDQxNkM0NDggNDMzLjcgNDMzLjcgNDQ4IDQxNiA0NDh6XCIvPjwvc3ZnPmA7XHJcblxyXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgbmFtZUFyci5sZW5ndGg7IGkrKykge1xyXG5cdFx0Y29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG5cdFx0Y29uc3QgYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG5cclxuXHRcdGFuY2hvci50ZXh0Q29udGVudCA9IG5hbWVBcnJbaV07XHJcblxyXG5cdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBsaW5rQXJyLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdGFuY2hvci5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBgJHtsaW5rQXJyW2ldfWApO1xyXG5cdFx0fVxyXG5cclxuXHRcdGFuY2hvci5jbGFzc0xpc3QuYWRkKCduYXZiYXJDb250YWluZXJfX3VsLS1hbmNob3InKTtcclxuXHRcdGxpLmNsYXNzTGlzdC5hZGQoJ25hdmJhckNvbnRhaW5lcl9fdWwtLWxpJyk7XHJcblxyXG5cdFx0bGkuYXBwZW5kQ2hpbGQoYW5jaG9yKTtcclxuXHRcdHVsLmFwcGVuZENoaWxkKGxpKTtcclxuXHR9XHJcblxyXG5cdGRpdi5hcHBlbmRDaGlsZChtZW51QmFycyk7XHJcblx0ZGl2LmFwcGVuZENoaWxkKHVsKTtcclxuXHJcblx0cmV0dXJuIGRpdjtcclxufTtcclxuIiwiaW1wb3J0IHsgbWVudUNvbXBvbmVudHMgfSBmcm9tICcuL2pzL21lbnUvbWVudSc7XHJcblxyXG5tZW51Q29tcG9uZW50cygpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=