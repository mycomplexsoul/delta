(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "button {\r\n  box-shadow: inset 0px 1px 0px 0px #54a3f7;\r\n  background: linear-gradient(to bottom, #007dc1 5%, #0061a7 100%);\r\n  background-color: #007dc1;\r\n  border-radius: 3px;\r\n  border: 1px solid #124d77;\r\n  display: inline-block;\r\n  cursor: pointer;\r\n  color: #ffffff;\r\n  font-family: Arial;\r\n  font-size: 13px;\r\n  padding: 2px 20px;\r\n  text-decoration: none;\r\n  text-shadow: 0px 1px 0px #154682;\r\n}\r\n\r\nbutton:hover {\r\n  background: linear-gradient(to bottom, #0061a7 5%, #007dc1 100%);\r\n  background-color: #0061a7;\r\n}\r\n\r\nbutton:disabled {\r\n  background: linear-gradient(to bottom, #007dc1 5%, #0061a7 100%);\r\n  cursor: not-allowed;\r\n  opacity: 0.5;\r\n}\r\n\r\n@media (max-width: 504px) {\r\n  button {\r\n    height: 28px;\r\n  }\r\n}\r\n\r\n.button-link {\r\n  background: none;\r\n  border: none;\r\n  padding: 0;\r\n  text-decoration: underline;\r\n  cursor: pointer;\r\n  text-shadow: none;\r\n  box-shadow: none;\r\n  border-radius: 0;\r\n  color: #333;\r\n}\r\n\r\n.button-link:hover {\r\n  background: none;\r\n  color: #006da3;\r\n}\r\n\r\n:root {\r\n  --font-color: #888;\r\n  --background-color: #eee;\r\n}\r\n\r\n/* Master Styles */\r\n\r\nh1 {\r\n  color: #369;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 150%;\r\n}\r\n\r\nh2,\r\nh3 {\r\n  color: #369;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: lighter;\r\n}\r\n\r\n.display-inline {\r\n  display: inline;\r\n}\r\n\r\nbody {\r\n  background-color: var(--background-color);\r\n  font-size: 13px;\r\n}\r\n\r\n@media (min-width: 505px) {\r\n  body {\r\n    font-size: 11px;\r\n  }\r\n}\r\n\r\nbody,\r\ninput[text] {\r\n  color: var(--font-color);\r\n  font-family: Cambria, Georgia;\r\n}\r\n\r\na {\r\n  cursor: pointer;\r\n}\r\n\r\n/* Navigation link styles */\r\n\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: var(--background-color);\r\n  border-radius: 4px;\r\n}\r\n\r\nnav a:visited,\r\na:link {\r\n  color: #607d8b;\r\n}\r\n\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #cfd8dc;\r\n}\r\n\r\nnav a.router-link-active {\r\n  color: #039be5;\r\n}\r\n\r\n/* items class */\r\n\r\n.items {\r\n  margin: 0 0 2em 0;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: 24em;\r\n}\r\n\r\n.items li {\r\n  cursor: pointer;\r\n  position: relative;\r\n  left: 0;\r\n  background-color: var(--background-color);\r\n  margin: 0.5em;\r\n  padding: 0.3em 0;\r\n  height: 1.6em;\r\n  border-radius: 4px;\r\n}\r\n\r\n.items li:hover {\r\n  color: #607d8b;\r\n  background-color: #ddd;\r\n  left: 0.1em;\r\n}\r\n\r\n.items li.selected:hover {\r\n  background-color: #bbd8dc;\r\n  color: white;\r\n}\r\n\r\n.items .text {\r\n  position: relative;\r\n  top: -3px;\r\n}\r\n\r\n.items {\r\n  margin: 0 0 2em 0;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: 24em;\r\n}\r\n\r\n.items li {\r\n  cursor: pointer;\r\n  position: relative;\r\n  left: 0;\r\n  background-color: var(--background-color);\r\n  margin: 0.5em;\r\n  padding: 0.3em 0;\r\n  height: 1.6em;\r\n  border-radius: 4px;\r\n}\r\n\r\n.items li:hover {\r\n  color: #607d8b;\r\n  background-color: #ddd;\r\n  left: 0.1em;\r\n}\r\n\r\n.items li.selected {\r\n  background-color: #cfd8dc;\r\n  color: white;\r\n}\r\n\r\n.items li.selected:hover {\r\n  background-color: #bbd8dc;\r\n}\r\n\r\n.items .text {\r\n  position: relative;\r\n  top: -3px;\r\n}\r\n\r\n.items .badge {\r\n  display: inline-block;\r\n  font-size: small;\r\n  color: white;\r\n  padding: 0.8em 0.7em 0 0.7em;\r\n  background-color: #607d8b;\r\n  line-height: 1em;\r\n  position: relative;\r\n  left: -1px;\r\n  top: -4px;\r\n  height: 1.8em;\r\n  margin-right: 0.8em;\r\n  border-radius: 4px 0 0 4px;\r\n}\r\n\r\n/* everywhere else */\r\n\r\n* {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n/* global framework style-guide */\r\n\r\n.text-align-right {\r\n  text-align: right;\r\n}\r\n\r\n.width-80 {\r\n  min-width: 80px;\r\n}\r\n\r\n.width-80-strict {\r\n  width: 80px;\r\n}\r\n\r\n.width-100 {\r\n  min-width: 100px;\r\n}\r\n\r\n.width-100-pct {\r\n  min-width: 100%;\r\n}\r\n\r\n.max-width-100-pct {\r\n  max-width: 100%;\r\n}\r\n\r\n.width-120 {\r\n  width: 120px;\r\n}\r\n\r\n@media print {\r\n  .width-100-pct-print-only {\r\n    min-width: 100%;\r\n  }\r\n}\r\n\r\n@media (max-width: 504px) {\r\n  .width-100-pct-mobile-only {\r\n    min-width: 100%;\r\n  }\r\n}\r\n\r\n.padding-all-5 {\r\n  padding: 5px;\r\n}\r\n\r\n.padding-all-3 {\r\n  padding: 3px;\r\n}\r\n\r\n.padding-left-5 {\r\n  padding-left: 5px;\r\n}\r\n\r\n.padding-right-5 {\r\n  padding-right: 5px;\r\n}\r\n\r\n/* tasks styles */\r\n\r\ntasks .task-done {\r\n  text-decoration: line-through;\r\n  color: gray;\r\n}\r\n\r\ntasks .task-in-process {\r\n  font-style: italic;\r\n  font-weight: bold;\r\n  color: blue !important;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  color: #333;\r\n  font-family: monospace;\r\n}\r\n\r\n* {\r\n  font-family: monospace;\r\n}\r\n\r\ninput.task {\r\n  width: 50%;\r\n  min-width: 100px;\r\n}\r\n\r\ninput[type=\"checkbox\"] {\r\n  vertical-align: middle;\r\n}\r\n\r\ntextarea.task-multiple {\r\n  width: 50%;\r\n  min-width: 100px;\r\n  min-height: 120px;\r\n  vertical-align: text-top;\r\n}\r\n\r\n.task-eta {\r\n  color: gray;\r\n  font-weight: bold;\r\n}\r\n\r\n.task-no-eta {\r\n  color: red;\r\n}\r\n\r\n.task-text {\r\n  line-height: 1.3rem;\r\n}\r\n\r\n.task-age-1 {\r\n  color: gray;\r\n}\r\n\r\n.task-age-2 {\r\n  color: brown;\r\n}\r\n\r\n.task-age-10 {\r\n  color: red;\r\n}\r\n\r\n.productivity-good {\r\n  color: green;\r\n}\r\n\r\n.productivity-bad {\r\n  color: brown;\r\n}\r\n\r\n.task-open-with-tt {\r\n  color: green;\r\n}\r\n\r\n.task-tags {\r\n  color: gray;\r\n}\r\n\r\n.task-highlighted {\r\n  background-color: #ddd;\r\n}\r\n\r\n.task-priority {\r\n  background-color: yellow;\r\n}\r\n\r\n.tag:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.task-progressed {\r\n  background-color: #a2ffa9;\r\n}\r\n\r\n.task-unexpected {\r\n  background-color: #81d4fa;\r\n}\r\n\r\n.task-important {\r\n  background-color: #f9b97c;\r\n}\r\n\r\n.task-qualifier-icon {\r\n  padding-right: 2px;\r\n}\r\n\r\n.task-qualifier-urgent {\r\n  color: red;\r\n  font-weight: bold;\r\n}\r\n\r\n.task-qualifier-flag {\r\n  color: red;\r\n}\r\n\r\n.clickable {\r\n  cursor: pointer;\r\n}\r\n\r\n@media (max-width: 504px) {\r\n  .mobile-only {\r\n    display: inline-block;\r\n  }\r\n  table.mobile-only {\r\n    display: inline-table;\r\n  }\r\n  .desktop-only {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media (min-width: 505px) {\r\n  .mobile-only {\r\n    display: none;\r\n  }\r\n  .desktop-only {\r\n    display: inline-block;\r\n  }\r\n  table.desktop-only {\r\n    display: inline-table;\r\n  }\r\n  th.desktop-only,\r\n  td.desktop-only {\r\n    display: table-cell;\r\n  }\r\n}\r\n\r\n.task-open-task-list-container--grid {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.task-record {\r\n  max-width: 450px;\r\n  min-width: 200px;\r\n  flex: 1 0;\r\n  margin: 5px;\r\n  padding: 5px;\r\n  border: 1px solid lightgray;\r\n}\r\n\r\n.task-record-items {\r\n  display: flow-root;\r\n}\r\n\r\n@media (max-width: 504px) {\r\n  .task-record-custom-size {\r\n    max-height: initial !important;\r\n  }\r\n}\r\n\r\n.task-record-no-task-done {\r\n  border: 1px dashed #dd0000;\r\n}\r\n\r\n@media (min-width: 505px) {\r\n  .task-record-items {\r\n    max-height: 390px;\r\n    overflow-y: auto;\r\n  }\r\n\r\n  .task-open-task-list-container--grid .task-record {\r\n    flex: 0 0 31%;\r\n  }\r\n  .task-open-task-list-container--float .task-record {\r\n    float: left;\r\n  }\r\n}\r\n\r\n#Info {\r\n  clear: both;\r\n}\r\n\r\n.task-indicators-container {\r\n  overflow-x: auto;\r\n}\r\n\r\n.task-item-toolbar {\r\n  position: fixed;\r\n  bottom: 0;\r\n  left: 0;\r\n  background-color: var(--background-color);\r\n  width: 100%;\r\n  height: auto;\r\n  border-top: 1px solid black;\r\n}\r\n\r\n.task-item-toolbar-content {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  font-size: 200%;\r\n}\r\n\r\n@media (min-width: 505px) {\r\n  .task-item-toolbar {\r\n    display: none;\r\n  }\r\n}\r\n\r\n.option-item {\r\n  display: block;\r\n}\r\n\r\nlabel.label-left {\r\n  width: 150px;\r\n  display: inline-block;\r\n}\r\n\r\nmenu {\r\n  display: block;\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  background-color: #aaa;\r\n}\r\n\r\n.field {\r\n  display: block;\r\n  margin: 10px 0;\r\n}\r\n\r\n.field-input {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n.field-select {\r\n  width: calc(100% - 60px);\r\n  display: inline;\r\n}\r\n\r\ncombo-item > button {\r\n  width: 50px;\r\n  display: inline;\r\n}\r\n\r\n@media (min-width: 505px) {\r\n  .field-input {\r\n    display: inline;\r\n    width: auto;\r\n  }\r\n\r\n  .field-input[type=\"text\"] {\r\n    width: 60%;\r\n  }\r\n\r\n  .field-select {\r\n    width: auto;\r\n  }\r\n\r\n  combo-item > button {\r\n    width: 50px;\r\n  }\r\n}\r\n\r\ninput[type=\"radio\"] {\r\n  vertical-align: bottom;\r\n}\r\n\r\n.balance-zero {\r\n  color: gray;\r\n}\r\n\r\n.balance-positive {\r\n  color: green;\r\n}\r\n\r\n.balance-negative {\r\n  color: red;\r\n}\r\n\r\n.movement-box {\r\n  border: 1px solid lightgray;\r\n  margin: 5px;\r\n  padding: 5px;\r\n  display: block;\r\n  width: 100%;\r\n  cursor: pointer;\r\n}\r\n\r\n@media (min-width: 505px) {\r\n  .movement-box {\r\n    width: 350px;\r\n  }\r\n}\r\n\r\n.movement-box:hover {\r\n  background-color: #e6e6e6;\r\n}\r\n\r\n.movement-list {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  flex: 1;\r\n}\r\n\r\n.movement-amount-income {\r\n  color: green;\r\n}\r\n\r\n.movement-amount-expense {\r\n  color: red;\r\n}\r\n\r\n.movement-amount-transfer {\r\n  color: violet;\r\n}\r\n\r\n.movement-account {\r\n  color: gray;\r\n}\r\n\r\n.movement-date {\r\n  color: cornflowerblue;\r\n}\r\n\r\n.movement-description {\r\n  font-weight: bold;\r\n}\r\n\r\n.movement-budget {\r\n  color: gray;\r\n}\r\n\r\n.movement-category {\r\n  color: gray;\r\n}\r\n\r\n.movement-place {\r\n  color: gray;\r\n}\r\n\r\n.general-badge-new,\r\n.general-badge-edited,\r\n.general-badge-archived,\r\n.movement-badge-new,\r\n.movement-badge-edited,\r\n.lasttime-badge-archived,\r\n.lasttime-badge-new,\r\n.lasttime-badge-edited {\r\n  border: 1px solid green;\r\n  padding: 0 5px;\r\n  background: lightgreen;\r\n  color: blue;\r\n}\r\n\r\ncombo-item .combo-item-container {\r\n  border: 1px dashed cornflowerblue;\r\n  padding: 10px;\r\n  margin: 10px;\r\n}\r\n\r\n.login {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex: 1 0 auto;\r\n  align-content: center;\r\n  justify-items: center;\r\n  border: 1px dashed gray;\r\n  width: 300px;\r\n  margin: 0 auto;\r\n  padding: 10px;\r\n}\r\n\r\n/* Card styles */\r\n\r\n.card-list {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  flex: 1;\r\n}\r\n\r\n.card-item-container {\r\n  border: 1px solid lightgray;\r\n  margin: 5px;\r\n  padding: 5px;\r\n  display: block;\r\n  width: 100%;\r\n  cursor: pointer;\r\n}\r\n\r\n@media (min-width: 505px) {\r\n  .card-item-container {\r\n    width: 350px;\r\n  }\r\n}\r\n\r\n.app-container {\r\n  margin: 10px;\r\n  margin-top: 0;\r\n}\r\n\r\nlink {\r\n  display: block;\r\n}\r\n\r\n.display-block {\r\n  display: block;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n/* @​media (prefers-color-scheme: dark) {\r\n\r\n}*/\r\n\r\n.color-green {\r\n  color: green;\r\n}\r\n\r\n.color-red {\r\n  color: red;\r\n}\r\n\r\n.text-align-center {\r\n  text-align: center;\r\n}\r\n\r\n.margin-all-0 {\r\n  margin: 0;\r\n}\r\n\r\n.margin-top-3 {\r\n  margin-top: 3px;\r\n}\r\n\r\n.vertical-align-top {\r\n  vertical-align: text-top;\r\n}\r\n\r\n.print-only {\r\n  display: none;\r\n}\r\n\r\n.page-break-after {\r\n  page-break-after: always;\r\n}\r\n\r\n.page-break-before {\r\n  page-break-before: always;\r\n}\r\n\r\n.hide-on-print {\r\n  display: block;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n@media print {\r\n  @page {\r\n    margin: 0;\r\n  }\r\n\r\n  body {\r\n    background-color: white;\r\n    margin: 1.6cm;\r\n  }\r\n\r\n  menu {\r\n    display: none;\r\n  }\r\n\r\n  .page-top {\r\n    margin-top: 1.6cm !important;\r\n  }\r\n\r\n  .print-only {\r\n    display: block;\r\n  }\r\n\r\n  .hide-on-print {\r\n    display: none;\r\n  }\r\n}\r\n\r\n.input-invalid {\r\n  border: 1px solid red;\r\n}\r\n\r\n.task-next-time-ahead {\r\n  background-color: #afff94;\r\n}\r\n\r\n.task-next-time-behind {\r\n  background-color: #ffa7a7;\r\n}\r\n\r\n#nextToDoTodayList .task-record {\r\n  max-width: 100%;\r\n  max-height: none;\r\n}\r\n\r\n.columns-3 {\r\n  -moz-column-count: 1;\r\n       column-count: 1;\r\n}\r\n\r\n@media (min-width: 505px) {\r\n  .columns-3 {\r\n    -moz-column-count: 3;\r\n         column-count: 3;\r\n  }\r\n}\r\n\r\n.no-underline {\r\n  text-decoration: none;\r\n}\r\n\r\n.task-options-section-title {\r\n  font-weight: bold;\r\n  margin-top: 10px;\r\n}\r\n\r\n*:focus {\r\n  outline: 1px solid #2453ff;\r\n}\r\n\r\nkbd {\r\n  background-color: var(--background-color);\r\n  border-radius: 3px;\r\n  border: 1px solid #b4b4b4;\r\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),\r\n    0 2px 0 0 rgba(255, 255, 255, 0.7) inset;\r\n  color: #333;\r\n  display: inline-block;\r\n  font-size: 0.85em;\r\n  font-weight: 700;\r\n  line-height: 1;\r\n  padding: 2px 4px;\r\n  white-space: nowrap;\r\n}\r\n\r\n/* Auto-grow textarea styles */\r\n\r\n.grow-wrap {\r\n  /* easy way to plop the elements on top of each other and have them both sized based on the tallest one's height */\r\n  display: grid;\r\n}\r\n\r\n.grow-wrap::after {\r\n  /* Note the weird space! Needed to preventy jumpy behavior */\r\n  content: attr(data-replicated-value) \" \";\r\n\r\n  /* This is how textarea text behaves */\r\n  white-space: pre-wrap;\r\n\r\n  /* Hidden from view, clicks, and screen readers */\r\n  visibility: hidden;\r\n}\r\n\r\n.grow-wrap > textarea {\r\n  /* You could leave this, but after a user resizes, then it ruins the auto sizing */\r\n  resize: none;\r\n\r\n  /* Firefox shows scrollbar on growth, you can hide like this. */\r\n  overflow: hidden;\r\n}\r\n\r\n.grow-wrap > textarea,\r\n.grow-wrap::after {\r\n  /* Identical styling required!! */\r\n  border: 1px solid black;\r\n  padding: 0.5rem;\r\n  font: inherit;\r\n\r\n  /* Place on top of each other */\r\n  grid-area: 1 / 1 / 2 / 2;\r\n}\r\n\r\n/* Scrollbars styles */\r\n\r\n::-webkit-scrollbar {\r\n  width: 5px;\r\n  height: 5px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background: linear-gradient(13deg, #b2d3ff 14%, #669ed1 64%);\r\n  border-radius: 10px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n  background: linear-gradient(13deg, #669ed1 14%, #006aff 64%);\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n  background: #ffffff;\r\n  border-radius: 10px;\r\n  box-shadow: inset 7px 10px 12px #f0f0f0;\r\n}\r\n\r\n/* End Scrollbars */\r\n", "",{"version":3,"sources":["app/styles/button.css","styles.css"],"names":[],"mappings":"AAAA;EACE,yCAAyC;EACzC,gEAAgE;EAChE,yBAAyB;EACzB,kBAAkB;EAClB,yBAAyB;EACzB,qBAAqB;EACrB,eAAe;EACf,cAAc;EACd,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,qBAAqB;EACrB,gCAAgC;AAClC;;AAEA;EACE,gEAAgE;EAChE,yBAAyB;AAC3B;;AAEA;EACE,gEAAgE;EAChE,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE;IACE,YAAY;EACd;AACF;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,UAAU;EACV,0BAA0B;EAC1B,eAAe;EACf,iBAAiB;EACjB,gBAAgB;EAChB,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,cAAc;AAChB;;AC9CA;EACE,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA,kBAAkB;;AAClB;EACE,WAAW;EACX,yCAAyC;EACzC,eAAe;AACjB;;AACA;;EAEE,WAAW;EACX,yCAAyC;EACzC,oBAAoB;AACtB;;AACA;EACE,eAAe;AACjB;;AACA;EACE,yCAAyC;EACzC,eAAe;AACjB;;AACA;EACE;IACE,eAAe;EACjB;AACF;;AACA;;EAEE,wBAAwB;EACxB,6BAA6B;AAC/B;;AACA;EACE,eAAe;AACjB;;AAEA,2BAA2B;;AAC3B;EACE,iBAAiB;EACjB,qBAAqB;EACrB,gBAAgB;EAChB,qBAAqB;EACrB,yCAAyC;EACzC,kBAAkB;AACpB;;AACA;;EAEE,cAAc;AAChB;;AACA;EACE,cAAc;EACd,yBAAyB;AAC3B;;AACA;EACE,cAAc;AAChB;;AAEA,gBAAgB;;AAChB;EACE,iBAAiB;EACjB,qBAAqB;EACrB,UAAU;EACV,WAAW;AACb;;AACA;EACE,eAAe;EACf,kBAAkB;EAClB,OAAO;EACP,yCAAyC;EACzC,aAAa;EACb,gBAAgB;EAChB,aAAa;EACb,kBAAkB;AACpB;;AACA;EACE,cAAc;EACd,sBAAsB;EACtB,WAAW;AACb;;AACA;EACE,yBAAyB;EACzB,YAAY;AACd;;AACA;EACE,kBAAkB;EAClB,SAAS;AACX;;AACA;EACE,iBAAiB;EACjB,qBAAqB;EACrB,UAAU;EACV,WAAW;AACb;;AACA;EACE,eAAe;EACf,kBAAkB;EAClB,OAAO;EACP,yCAAyC;EACzC,aAAa;EACb,gBAAgB;EAChB,aAAa;EACb,kBAAkB;AACpB;;AACA;EACE,cAAc;EACd,sBAAsB;EACtB,WAAW;AACb;;AACA;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,yBAAyB;AAC3B;;AACA;EACE,kBAAkB;EAClB,SAAS;AACX;;AACA;EACE,qBAAqB;EACrB,gBAAgB;EAChB,YAAY;EACZ,4BAA4B;EAC5B,yBAAyB;EACzB,gBAAgB;EAChB,kBAAkB;EAClB,UAAU;EACV,SAAS;EACT,aAAa;EACb,mBAAmB;EACnB,0BAA0B;AAC5B;;AAEA,oBAAoB;;AACpB;EACE,yCAAyC;AAC3C;;AAEA,iCAAiC;;AACjC;EACE,iBAAiB;AACnB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE;IACE,eAAe;EACjB;AACF;;AAEA;EACE;IACE,eAAe;EACjB;AACF;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB;;AAEA,iBAAiB;;AACjB;EACE,6BAA6B;EAC7B,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,sBAAsB;AACxB;;AAEA;EACE,SAAS;EACT,WAAW;EACX,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,UAAU;EACV,gBAAgB;AAClB;;AACA;EACE,sBAAsB;AACxB;;AACA;EACE,UAAU;EACV,gBAAgB;EAChB,iBAAiB;EACjB,wBAAwB;AAC1B;;AACA;EACE,WAAW;EACX,iBAAiB;AACnB;;AACA;EACE,UAAU;AACZ;;AACA;EACE,mBAAmB;AACrB;;AACA;EACE,WAAW;AACb;;AACA;EACE,YAAY;AACd;;AACA;EACE,UAAU;AACZ;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AACA;EACE,YAAY;AACd;;AACA;EACE,WAAW;AACb;;AACA;EACE,sBAAsB;AACxB;;AACA;EACE,wBAAwB;AAC1B;;AACA;EACE,eAAe;AACjB;;AACA;EACE,yBAAyB;AAC3B;;AACA;EACE,yBAAyB;AAC3B;;AACA;EACE,yBAAyB;AAC3B;;AACA;EACE,kBAAkB;AACpB;;AACA;EACE,UAAU;EACV,iBAAiB;AACnB;;AACA;EACE,UAAU;AACZ;;AACA;EACE,eAAe;AACjB;;AACA;EACE;IACE,qBAAqB;EACvB;EACA;IACE,qBAAqB;EACvB;EACA;IACE,aAAa;EACf;AACF;;AACA;EACE;IACE,aAAa;EACf;EACA;IACE,qBAAqB;EACvB;EACA;IACE,qBAAqB;EACvB;EACA;;IAEE,mBAAmB;EACrB;AACF;;AAEA;EACE,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,SAAS;EACT,WAAW;EACX,YAAY;EACZ,2BAA2B;AAC7B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE;IACE,8BAA8B;EAChC;AACF;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE;IACE,iBAAiB;IACjB,gBAAgB;EAClB;;EAEA;IACE,aAAa;EACf;EACA;IACE,WAAW;EACb;AACF;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,SAAS;EACT,OAAO;EACP,yCAAyC;EACzC,WAAW;EACX,YAAY;EACZ,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE;IACE,aAAa;EACf;AACF;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,qBAAqB;AACvB;;AAEA;EACE,cAAc;EACd,SAAS;EACT,UAAU;EACV,gBAAgB;EAChB,wBAAgB;EAAhB,gBAAgB;EAChB,MAAM;EACN,OAAO;EACP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","file":"styles.css","sourcesContent":["button {\r\n  box-shadow: inset 0px 1px 0px 0px #54a3f7;\r\n  background: linear-gradient(to bottom, #007dc1 5%, #0061a7 100%);\r\n  background-color: #007dc1;\r\n  border-radius: 3px;\r\n  border: 1px solid #124d77;\r\n  display: inline-block;\r\n  cursor: pointer;\r\n  color: #ffffff;\r\n  font-family: Arial;\r\n  font-size: 13px;\r\n  padding: 2px 20px;\r\n  text-decoration: none;\r\n  text-shadow: 0px 1px 0px #154682;\r\n}\r\n\r\nbutton:hover {\r\n  background: linear-gradient(to bottom, #0061a7 5%, #007dc1 100%);\r\n  background-color: #0061a7;\r\n}\r\n\r\nbutton:disabled {\r\n  background: linear-gradient(to bottom, #007dc1 5%, #0061a7 100%);\r\n  cursor: not-allowed;\r\n  opacity: 0.5;\r\n}\r\n\r\n@media (max-width: 504px) {\r\n  button {\r\n    height: 28px;\r\n  }\r\n}\r\n\r\n.button-link {\r\n  background: none;\r\n  border: none;\r\n  padding: 0;\r\n  text-decoration: underline;\r\n  cursor: pointer;\r\n  text-shadow: none;\r\n  box-shadow: none;\r\n  border-radius: 0;\r\n  color: #333;\r\n}\r\n\r\n.button-link:hover {\r\n  background: none;\r\n  color: #006da3;\r\n}\r\n","@import \"./app/styles/button.css\";\r\n\r\n:root {\r\n  --font-color: #888;\r\n  --background-color: #eee;\r\n}\r\n\r\n/* Master Styles */\r\nh1 {\r\n  color: #369;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 150%;\r\n}\r\nh2,\r\nh3 {\r\n  color: #369;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: lighter;\r\n}\r\n.display-inline {\r\n  display: inline;\r\n}\r\nbody {\r\n  background-color: var(--background-color);\r\n  font-size: 13px;\r\n}\r\n@media (min-width: 505px) {\r\n  body {\r\n    font-size: 11px;\r\n  }\r\n}\r\nbody,\r\ninput[text] {\r\n  color: var(--font-color);\r\n  font-family: Cambria, Georgia;\r\n}\r\na {\r\n  cursor: pointer;\r\n}\r\n\r\n/* Navigation link styles */\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: var(--background-color);\r\n  border-radius: 4px;\r\n}\r\nnav a:visited,\r\na:link {\r\n  color: #607d8b;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #cfd8dc;\r\n}\r\nnav a.router-link-active {\r\n  color: #039be5;\r\n}\r\n\r\n/* items class */\r\n.items {\r\n  margin: 0 0 2em 0;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: 24em;\r\n}\r\n.items li {\r\n  cursor: pointer;\r\n  position: relative;\r\n  left: 0;\r\n  background-color: var(--background-color);\r\n  margin: 0.5em;\r\n  padding: 0.3em 0;\r\n  height: 1.6em;\r\n  border-radius: 4px;\r\n}\r\n.items li:hover {\r\n  color: #607d8b;\r\n  background-color: #ddd;\r\n  left: 0.1em;\r\n}\r\n.items li.selected:hover {\r\n  background-color: #bbd8dc;\r\n  color: white;\r\n}\r\n.items .text {\r\n  position: relative;\r\n  top: -3px;\r\n}\r\n.items {\r\n  margin: 0 0 2em 0;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: 24em;\r\n}\r\n.items li {\r\n  cursor: pointer;\r\n  position: relative;\r\n  left: 0;\r\n  background-color: var(--background-color);\r\n  margin: 0.5em;\r\n  padding: 0.3em 0;\r\n  height: 1.6em;\r\n  border-radius: 4px;\r\n}\r\n.items li:hover {\r\n  color: #607d8b;\r\n  background-color: #ddd;\r\n  left: 0.1em;\r\n}\r\n.items li.selected {\r\n  background-color: #cfd8dc;\r\n  color: white;\r\n}\r\n\r\n.items li.selected:hover {\r\n  background-color: #bbd8dc;\r\n}\r\n.items .text {\r\n  position: relative;\r\n  top: -3px;\r\n}\r\n.items .badge {\r\n  display: inline-block;\r\n  font-size: small;\r\n  color: white;\r\n  padding: 0.8em 0.7em 0 0.7em;\r\n  background-color: #607d8b;\r\n  line-height: 1em;\r\n  position: relative;\r\n  left: -1px;\r\n  top: -4px;\r\n  height: 1.8em;\r\n  margin-right: 0.8em;\r\n  border-radius: 4px 0 0 4px;\r\n}\r\n\r\n/* everywhere else */\r\n* {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n/* global framework style-guide */\r\n.text-align-right {\r\n  text-align: right;\r\n}\r\n\r\n.width-80 {\r\n  min-width: 80px;\r\n}\r\n\r\n.width-80-strict {\r\n  width: 80px;\r\n}\r\n\r\n.width-100 {\r\n  min-width: 100px;\r\n}\r\n\r\n.width-100-pct {\r\n  min-width: 100%;\r\n}\r\n\r\n.max-width-100-pct {\r\n  max-width: 100%;\r\n}\r\n\r\n.width-120 {\r\n  width: 120px;\r\n}\r\n\r\n@media print {\r\n  .width-100-pct-print-only {\r\n    min-width: 100%;\r\n  }\r\n}\r\n\r\n@media (max-width: 504px) {\r\n  .width-100-pct-mobile-only {\r\n    min-width: 100%;\r\n  }\r\n}\r\n\r\n.padding-all-5 {\r\n  padding: 5px;\r\n}\r\n\r\n.padding-all-3 {\r\n  padding: 3px;\r\n}\r\n\r\n.padding-left-5 {\r\n  padding-left: 5px;\r\n}\r\n\r\n.padding-right-5 {\r\n  padding-right: 5px;\r\n}\r\n\r\n/* tasks styles */\r\ntasks .task-done {\r\n  text-decoration: line-through;\r\n  color: gray;\r\n}\r\n\r\ntasks .task-in-process {\r\n  font-style: italic;\r\n  font-weight: bold;\r\n  color: blue !important;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  color: #333;\r\n  font-family: monospace;\r\n}\r\n\r\n* {\r\n  font-family: monospace;\r\n}\r\n\r\ninput.task {\r\n  width: 50%;\r\n  min-width: 100px;\r\n}\r\ninput[type=\"checkbox\"] {\r\n  vertical-align: middle;\r\n}\r\ntextarea.task-multiple {\r\n  width: 50%;\r\n  min-width: 100px;\r\n  min-height: 120px;\r\n  vertical-align: text-top;\r\n}\r\n.task-eta {\r\n  color: gray;\r\n  font-weight: bold;\r\n}\r\n.task-no-eta {\r\n  color: red;\r\n}\r\n.task-text {\r\n  line-height: 1.3rem;\r\n}\r\n.task-age-1 {\r\n  color: gray;\r\n}\r\n.task-age-2 {\r\n  color: brown;\r\n}\r\n.task-age-10 {\r\n  color: red;\r\n}\r\n\r\n.productivity-good {\r\n  color: green;\r\n}\r\n\r\n.productivity-bad {\r\n  color: brown;\r\n}\r\n.task-open-with-tt {\r\n  color: green;\r\n}\r\n.task-tags {\r\n  color: gray;\r\n}\r\n.task-highlighted {\r\n  background-color: #ddd;\r\n}\r\n.task-priority {\r\n  background-color: yellow;\r\n}\r\n.tag:hover {\r\n  cursor: pointer;\r\n}\r\n.task-progressed {\r\n  background-color: #a2ffa9;\r\n}\r\n.task-unexpected {\r\n  background-color: #81d4fa;\r\n}\r\n.task-important {\r\n  background-color: #f9b97c;\r\n}\r\n.task-qualifier-icon {\r\n  padding-right: 2px;\r\n}\r\n.task-qualifier-urgent {\r\n  color: red;\r\n  font-weight: bold;\r\n}\r\n.task-qualifier-flag {\r\n  color: red;\r\n}\r\n.clickable {\r\n  cursor: pointer;\r\n}\r\n@media (max-width: 504px) {\r\n  .mobile-only {\r\n    display: inline-block;\r\n  }\r\n  table.mobile-only {\r\n    display: inline-table;\r\n  }\r\n  .desktop-only {\r\n    display: none;\r\n  }\r\n}\r\n@media (min-width: 505px) {\r\n  .mobile-only {\r\n    display: none;\r\n  }\r\n  .desktop-only {\r\n    display: inline-block;\r\n  }\r\n  table.desktop-only {\r\n    display: inline-table;\r\n  }\r\n  th.desktop-only,\r\n  td.desktop-only {\r\n    display: table-cell;\r\n  }\r\n}\r\n\r\n.task-open-task-list-container--grid {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.task-record {\r\n  max-width: 450px;\r\n  min-width: 200px;\r\n  flex: 1 0;\r\n  margin: 5px;\r\n  padding: 5px;\r\n  border: 1px solid lightgray;\r\n}\r\n\r\n.task-record-items {\r\n  display: flow-root;\r\n}\r\n\r\n@media (max-width: 504px) {\r\n  .task-record-custom-size {\r\n    max-height: initial !important;\r\n  }\r\n}\r\n\r\n.task-record-no-task-done {\r\n  border: 1px dashed #dd0000;\r\n}\r\n\r\n@media (min-width: 505px) {\r\n  .task-record-items {\r\n    max-height: 390px;\r\n    overflow-y: auto;\r\n  }\r\n\r\n  .task-open-task-list-container--grid .task-record {\r\n    flex: 0 0 31%;\r\n  }\r\n  .task-open-task-list-container--float .task-record {\r\n    float: left;\r\n  }\r\n}\r\n\r\n#Info {\r\n  clear: both;\r\n}\r\n\r\n.task-indicators-container {\r\n  overflow-x: auto;\r\n}\r\n\r\n.task-item-toolbar {\r\n  position: fixed;\r\n  bottom: 0;\r\n  left: 0;\r\n  background-color: var(--background-color);\r\n  width: 100%;\r\n  height: auto;\r\n  border-top: 1px solid black;\r\n}\r\n\r\n.task-item-toolbar-content {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  font-size: 200%;\r\n}\r\n\r\n@media (min-width: 505px) {\r\n  .task-item-toolbar {\r\n    display: none;\r\n  }\r\n}\r\n\r\n.option-item {\r\n  display: block;\r\n}\r\n\r\nlabel.label-left {\r\n  width: 150px;\r\n  display: inline-block;\r\n}\r\n\r\nmenu {\r\n  display: block;\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n  position: sticky;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  background-color: #aaa;\r\n}\r\n\r\n.field {\r\n  display: block;\r\n  margin: 10px 0;\r\n}\r\n\r\n.field-input {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n.field-select {\r\n  width: calc(100% - 60px);\r\n  display: inline;\r\n}\r\n\r\ncombo-item > button {\r\n  width: 50px;\r\n  display: inline;\r\n}\r\n\r\n@media (min-width: 505px) {\r\n  .field-input {\r\n    display: inline;\r\n    width: auto;\r\n  }\r\n\r\n  .field-input[type=\"text\"] {\r\n    width: 60%;\r\n  }\r\n\r\n  .field-select {\r\n    width: auto;\r\n  }\r\n\r\n  combo-item > button {\r\n    width: 50px;\r\n  }\r\n}\r\n\r\ninput[type=\"radio\"] {\r\n  vertical-align: bottom;\r\n}\r\n\r\n.balance-zero {\r\n  color: gray;\r\n}\r\n\r\n.balance-positive {\r\n  color: green;\r\n}\r\n\r\n.balance-negative {\r\n  color: red;\r\n}\r\n\r\n.movement-box {\r\n  border: 1px solid lightgray;\r\n  margin: 5px;\r\n  padding: 5px;\r\n  display: block;\r\n  width: 100%;\r\n  cursor: pointer;\r\n}\r\n\r\n@media (min-width: 505px) {\r\n  .movement-box {\r\n    width: 350px;\r\n  }\r\n}\r\n\r\n.movement-box:hover {\r\n  background-color: #e6e6e6;\r\n}\r\n\r\n.movement-list {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  flex: 1;\r\n}\r\n\r\n.movement-amount-income {\r\n  color: green;\r\n}\r\n\r\n.movement-amount-expense {\r\n  color: red;\r\n}\r\n\r\n.movement-amount-transfer {\r\n  color: violet;\r\n}\r\n\r\n.movement-account {\r\n  color: gray;\r\n}\r\n\r\n.movement-date {\r\n  color: cornflowerblue;\r\n}\r\n\r\n.movement-description {\r\n  font-weight: bold;\r\n}\r\n\r\n.movement-budget {\r\n  color: gray;\r\n}\r\n\r\n.movement-category {\r\n  color: gray;\r\n}\r\n\r\n.movement-place {\r\n  color: gray;\r\n}\r\n\r\n.general-badge-new,\r\n.general-badge-edited,\r\n.general-badge-archived,\r\n.movement-badge-new,\r\n.movement-badge-edited,\r\n.lasttime-badge-archived,\r\n.lasttime-badge-new,\r\n.lasttime-badge-edited {\r\n  border: 1px solid green;\r\n  padding: 0 5px;\r\n  background: lightgreen;\r\n  color: blue;\r\n}\r\n\r\ncombo-item .combo-item-container {\r\n  border: 1px dashed cornflowerblue;\r\n  padding: 10px;\r\n  margin: 10px;\r\n}\r\n\r\n.login {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex: 1 0 auto;\r\n  align-content: center;\r\n  justify-items: center;\r\n  border: 1px dashed gray;\r\n  width: 300px;\r\n  margin: 0 auto;\r\n  padding: 10px;\r\n}\r\n\r\n/* Card styles */\r\n.card-list {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  flex: 1;\r\n}\r\n\r\n.card-item-container {\r\n  border: 1px solid lightgray;\r\n  margin: 5px;\r\n  padding: 5px;\r\n  display: block;\r\n  width: 100%;\r\n  cursor: pointer;\r\n}\r\n\r\n@media (min-width: 505px) {\r\n  .card-item-container {\r\n    width: 350px;\r\n  }\r\n}\r\n\r\n.app-container {\r\n  margin: 10px;\r\n  margin-top: 0;\r\n}\r\n\r\nlink {\r\n  display: block;\r\n}\r\n\r\n.display-block {\r\n  display: block;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n/* @​media (prefers-color-scheme: dark) {\r\n\r\n}*/\r\n\r\n.color-green {\r\n  color: green;\r\n}\r\n\r\n.color-red {\r\n  color: red;\r\n}\r\n\r\n.text-align-center {\r\n  text-align: center;\r\n}\r\n\r\n.margin-all-0 {\r\n  margin: 0;\r\n}\r\n\r\n.margin-top-3 {\r\n  margin-top: 3px;\r\n}\r\n\r\n.vertical-align-top {\r\n  vertical-align: text-top;\r\n}\r\n\r\n.print-only {\r\n  display: none;\r\n}\r\n\r\n.page-break-after {\r\n  page-break-after: always;\r\n}\r\n\r\n.page-break-before {\r\n  page-break-before: always;\r\n}\r\n\r\n.hide-on-print {\r\n  display: block;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n@media print {\r\n  @page {\r\n    margin: 0;\r\n  }\r\n\r\n  body {\r\n    background-color: white;\r\n    margin: 1.6cm;\r\n  }\r\n\r\n  menu {\r\n    display: none;\r\n  }\r\n\r\n  .page-top {\r\n    margin-top: 1.6cm !important;\r\n  }\r\n\r\n  .print-only {\r\n    display: block;\r\n  }\r\n\r\n  .hide-on-print {\r\n    display: none;\r\n  }\r\n}\r\n\r\n.input-invalid {\r\n  border: 1px solid red;\r\n}\r\n\r\n.task-next-time-ahead {\r\n  background-color: #afff94;\r\n}\r\n\r\n.task-next-time-behind {\r\n  background-color: #ffa7a7;\r\n}\r\n\r\n#nextToDoTodayList .task-record {\r\n  max-width: 100%;\r\n  max-height: none;\r\n}\r\n\r\n.columns-3 {\r\n  column-count: 1;\r\n}\r\n\r\n@media (min-width: 505px) {\r\n  .columns-3 {\r\n    column-count: 3;\r\n  }\r\n}\r\n\r\n.no-underline {\r\n  text-decoration: none;\r\n}\r\n\r\n.task-options-section-title {\r\n  font-weight: bold;\r\n  margin-top: 10px;\r\n}\r\n\r\n*:focus {\r\n  outline: 1px solid #2453ff;\r\n}\r\n\r\nkbd {\r\n  background-color: var(--background-color);\r\n  border-radius: 3px;\r\n  border: 1px solid #b4b4b4;\r\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),\r\n    0 2px 0 0 rgba(255, 255, 255, 0.7) inset;\r\n  color: #333;\r\n  display: inline-block;\r\n  font-size: 0.85em;\r\n  font-weight: 700;\r\n  line-height: 1;\r\n  padding: 2px 4px;\r\n  white-space: nowrap;\r\n}\r\n\r\n/* Auto-grow textarea styles */\r\n.grow-wrap {\r\n  /* easy way to plop the elements on top of each other and have them both sized based on the tallest one's height */\r\n  display: grid;\r\n}\r\n.grow-wrap::after {\r\n  /* Note the weird space! Needed to preventy jumpy behavior */\r\n  content: attr(data-replicated-value) \" \";\r\n\r\n  /* This is how textarea text behaves */\r\n  white-space: pre-wrap;\r\n\r\n  /* Hidden from view, clicks, and screen readers */\r\n  visibility: hidden;\r\n}\r\n.grow-wrap > textarea {\r\n  /* You could leave this, but after a user resizes, then it ruins the auto sizing */\r\n  resize: none;\r\n\r\n  /* Firefox shows scrollbar on growth, you can hide like this. */\r\n  overflow: hidden;\r\n}\r\n.grow-wrap > textarea,\r\n.grow-wrap::after {\r\n  /* Identical styling required!! */\r\n  border: 1px solid black;\r\n  padding: 0.5rem;\r\n  font: inherit;\r\n\r\n  /* Place on top of each other */\r\n  grid-area: 1 / 1 / 2 / 2;\r\n}\r\n\r\n/* Scrollbars styles */\r\n::-webkit-scrollbar {\r\n  width: 5px;\r\n  height: 5px;\r\n}\r\n::-webkit-scrollbar-thumb {\r\n  background: linear-gradient(13deg, #b2d3ff 14%, #669ed1 64%);\r\n  border-radius: 10px;\r\n}\r\n::-webkit-scrollbar-thumb:hover {\r\n  background: linear-gradient(13deg, #669ed1 14%, #006aff 64%);\r\n}\r\n::-webkit-scrollbar-track {\r\n  background: #ffffff;\r\n  border-radius: 10px;\r\n  box-shadow: inset 7px 10px 12px #f0f0f0;\r\n}\r\n/* End Scrollbars */\r\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--13-1!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\data\code\intranet\src\styles.css */"./src/styles.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map