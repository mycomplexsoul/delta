(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* Master Styles */\nh1 {\n  color: #369;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 150%;\n}\nh2,\nh3 {\n  color: #369;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: lighter;\n}\n.display-inline {\n  display: inline;\n}\nbody {\n  background-color: #eee;\n  font-size: 13px;\n}\n@media (min-width: 505px) {\n  body {\n    font-size: 11px;\n  }\n}\nbody,\ninput[text],\nbutton {\n  color: #888;\n  font-family: Cambria, Georgia;\n}\na {\n  cursor: pointer;\n}\nbutton {\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n}\nbutton:hover {\n  background-color: #cfd8dc;\n}\nbutton:disabled {\n  background-color: #eee;\n  color: #aaa;\n  cursor: auto;\n}\n/* Navigation link styles */\nnav a {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n}\nnav a:visited,\na:link {\n  color: #607d8b;\n}\nnav a:hover {\n  color: #039be5;\n  background-color: #cfd8dc;\n}\nnav a.router-link-active {\n  color: #039be5;\n}\n/* items class */\n.items {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 24em;\n}\n.items li {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #eee;\n  margin: 0.5em;\n  padding: 0.3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n.items li:hover {\n  color: #607d8b;\n  background-color: #ddd;\n  left: 0.1em;\n}\n.items li.selected:hover {\n  background-color: #bbd8dc;\n  color: white;\n}\n.items .text {\n  position: relative;\n  top: -3px;\n}\n.items {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 24em;\n}\n.items li {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #eee;\n  margin: 0.5em;\n  padding: 0.3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n.items li:hover {\n  color: #607d8b;\n  background-color: #ddd;\n  left: 0.1em;\n}\n.items li.selected {\n  background-color: #cfd8dc;\n  color: white;\n}\n.items li.selected:hover {\n  background-color: #bbd8dc;\n}\n.items .text {\n  position: relative;\n  top: -3px;\n}\n.items .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607d8b;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  margin-right: 0.8em;\n  border-radius: 4px 0 0 4px;\n}\n/* everywhere else */\n* {\n  font-family: Arial, Helvetica, sans-serif;\n}\n/* global framework style-guide */\n.text-align-right {\n  text-align: right;\n}\n.width-80 {\n  min-width: 80px;\n}\n.width-80-strict {\n  width: 80px;\n}\n.width-100 {\n  min-width: 100px;\n}\n.width-100-pct {\n  min-width: 100%;\n}\n.width-120 {\n  width: 120px;\n}\n@media print {\n  .width-100-pct-print-only {\n    min-width: 100%;\n  }\n}\n@media (max-width: 504px) {\n  .width-100-pct-mobile-only {\n    min-width: 100%;\n  }\n}\n.padding-all-5 {\n  padding: 5px;\n}\n.padding-all-3 {\n  padding: 3px;\n}\n.padding-left-5 {\n  padding-left: 5px;\n}\n.padding-right-5 {\n  padding-right: 5px;\n}\n/* tasks styles */\ntasks .task-done {\n  text-decoration: line-through;\n  color: gray;\n}\ntasks .task-in-process {\n  font-style: italic;\n  font-weight: bold;\n  color: blue !important;\n}\nbody {\n  margin: 0;\n  color: #333;\n  font-family: monospace;\n}\n* {\n  font-family: monospace;\n}\nbutton {\n  color: #222;\n  font-family: monospace;\n  padding: 1px 5px;\n  border: 1px solid #2f93f7;\n  background-color: #e6ecff;\n  border-radius: 0;\n}\ninput.task {\n  width: 50%;\n  min-width: 100px;\n}\ninput[type=\"checkbox\"] {\n  vertical-align: middle;\n}\ntextarea.task-multiple {\n  width: 50%;\n  min-width: 100px;\n  height: 120px;\n  vertical-align: text-top;\n}\n.task-eta {\n  color: gray;\n  font-weight: bold;\n}\n.task-no-eta {\n  color: red;\n}\n.task-text {\n  line-height: 1.3rem;\n}\n.task-age-1 {\n  color: gray;\n}\n.task-age-2 {\n  color: brown;\n}\n.task-age-10 {\n  color: red;\n}\n.productivity-good {\n  color: green;\n}\n.productivity-bad {\n  color: brown;\n}\n.task-important {\n  font-weight: bold;\n}\n.task-open-with-tt {\n  color: green;\n}\n.task-tags {\n  color: gray;\n}\n.task-highlighted {\n  background-color: #ddd;\n}\n.task-urgent {\n  background-color: yellow;\n}\n.tag:hover {\n  cursor: pointer;\n}\n.task-progressed {\n  background-color: #a2ffa9;\n}\n.task-call {\n  background-color: #81d4fa;\n}\n.task-unexpected {\n  background-color: #f9b97c;\n}\n.clickable {\n  cursor: pointer;\n}\n@media (max-width: 504px) {\n  .mobile-only {\n    display: inline-block;\n  }\n  table.mobile-only {\n    display: inline-table;\n  }\n  .desktop-only {\n    display: none;\n  }\n}\n@media (min-width: 505px) {\n  .mobile-only {\n    display: none;\n  }\n  .desktop-only {\n    display: inline-block;\n  }\n  table.desktop-only {\n    display: inline-table;\n  }\n}\n.task-open-task-list-container--grid {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n}\n.task-record {\n  max-width: 450px;\n  min-width: 200px;\n  -webkit-box-flex: 1;\n          flex: 1 0;\n  margin: 5px;\n  padding: 5px;\n  border: 1px solid lightgray;\n}\n.task-record-no-task-done {\n  border: 1px dashed #dd0000;\n}\n@media (min-width: 505px) {\n  .task-record {\n    overflow-y: auto;\n    max-height: 390px;\n  }\n  .task-open-task-list-container--grid .task-record {\n    -webkit-box-flex: 0;\n            flex: 0 0 31%;\n  }\n  .task-open-task-list-container--float .task-record {\n    float: left;\n  }\n}\n#Info {\n  clear: both;\n}\n.task-indicators-container {\n  overflow-x: auto;\n}\n.task-item-toolbar {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  background-color: #eee;\n  width: 100%;\n  height: auto;\n  border-top: 1px solid black;\n}\n.task-item-toolbar-content {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 200%;\n}\n@media (min-width: 505px) {\n  .task-item-toolbar {\n    display: none;\n  }\n}\n.option-item {\n  display: block;\n}\nlabel.label-left {\n  width: 150px;\n  display: inline-block;\n}\nmenu {\n  display: block;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  left: 0;\n  width: 100%;\n  background-color: #aaa;\n}\n.field {\n  display: block;\n  margin: 10px 0;\n}\n.field-input {\n  display: block;\n  width: 100%;\n}\n.field-select {\n  width: calc(100% - 60px);\n  display: inline;\n}\ncombo-item > button {\n  width: 50px;\n  display: inline;\n}\n@media (min-width: 505px) {\n  .field-input {\n    display: inline;\n    width: auto;\n  }\n\n  .field-input[type=\"text\"] {\n    width: 60%;\n  }\n\n  .field-select {\n    width: auto;\n  }\n\n  combo-item > button {\n    width: 50px;\n  }\n}\ninput[type=\"radio\"] {\n  vertical-align: bottom;\n}\n.balance-zero {\n  color: gray;\n}\n.balance-positive {\n  color: green;\n}\n.balance-negative {\n  color: red;\n}\n.movement-box {\n  border: 1px solid lightgray;\n  margin: 5px;\n  padding: 5px;\n  display: block;\n  width: 100%;\n  cursor: pointer;\n}\n@media (min-width: 505px) {\n  .movement-box {\n    width: 350px;\n  }\n}\n.movement-box:hover {\n  background-color: #e6e6e6;\n}\n.movement-list {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n.movement-amount-income {\n  color: green;\n}\n.movement-amount-expense {\n  color: red;\n}\n.movement-amount-transfer {\n  color: violet;\n}\n.movement-account {\n  color: gray;\n}\n.movement-date {\n  color: cornflowerblue;\n}\n.movement-description {\n  font-weight: bold;\n}\n.movement-budget {\n  color: gray;\n}\n.movement-category {\n  color: gray;\n}\n.movement-place {\n  color: gray;\n}\n.general-badge-new,\n.general-badge-edited,\n.general-badge-archived,\n.movement-badge-new,\n.movement-badge-edited,\n.lasttime-badge-archived,\n.lasttime-badge-new,\n.lasttime-badge-edited {\n  border: 1px solid green;\n  padding: 0 5px;\n  background: lightgreen;\n  color: blue;\n}\ncombo-item .combo-item-container {\n  border: 1px dashed cornflowerblue;\n  padding: 10px;\n  margin: 10px;\n}\n.login {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n          flex: 1 0 auto;\n  align-content: center;\n  justify-items: center;\n  border: 1px dashed gray;\n  width: 300px;\n  margin: 0 auto;\n  padding: 10px;\n}\n/* Card styles */\n.card-list {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n.card-item-container {\n  border: 1px solid lightgray;\n  margin: 5px;\n  padding: 5px;\n  display: block;\n  width: 100%;\n  cursor: pointer;\n}\n@media (min-width: 505px) {\n  .card-item-container {\n    width: 350px;\n  }\n}\n.app-container {\n  margin: 10px;\n  margin-top: 0;\n}\nlink {\n  display: block;\n}\n.hidden {\n  display: none;\n}\n/* @​media (prefers-color-scheme: dark) {\n\n}*/\n.color-green {\n  color: green;\n}\n.color-red {\n  color: red;\n}\n.text-align-center {\n  text-align: center;\n}\n.margin-all-0 {\n  margin: 0;\n}\n.margin-top-3 {\n  margin-top: 3px;\n}\n.vertical-align-top {\n  vertical-align: text-top;\n}\n.print-only {\n  display: none;\n}\n.page-break-after {\n  page-break-after: always;\n}\n.page-break-before {\n  page-break-before: always;\n}\n@media print {\n  @page {\n    margin: 0;\n  }\n\n  body {\n    background-color: white;\n    margin: 1.6cm;\n  }\n\n  menu {\n    display: none;\n  }\n\n  .page-top {\n    margin-top: 1.6cm !important;\n  }\n\n  .print-only {\n    display: block;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,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QUNFLFVBQVU7QUFDWjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxTQUFTO0FBQ1g7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0U7SUFDRSxTQUFTO0VBQ1g7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsNEJBQTRCO0VBQzlCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjtBQUNGIiwiZmlsZSI6InNyYy9zdHlsZXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTWFzdGVyIFN0eWxlcyAqL1xuaDEge1xuICBjb2xvcjogIzM2OTtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTUwJTtcbn1cbmgyLFxuaDMge1xuICBjb2xvcjogIzM2OTtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuLmRpc3BsYXktaW5saW5lIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1MDVweCkge1xuICBib2R5IHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gIH1cbn1cbmJvZHksXG5pbnB1dFt0ZXh0XSxcbmJ1dHRvbiB7XG4gIGNvbG9yOiAjODg4O1xuICBmb250LWZhbWlseTogQ2FtYnJpYSwgR2VvcmdpYTtcbn1cbmEge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5idXR0b24ge1xuICBmb250LWZhbWlseTogQXJpYWw7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NmZDhkYztcbn1cbmJ1dHRvbjpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGNvbG9yOiAjYWFhO1xuICBjdXJzb3I6IGF1dG87XG59XG5cbi8qIE5hdmlnYXRpb24gbGluayBzdHlsZXMgKi9cbm5hdiBhIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5uYXYgYTp2aXNpdGVkLFxuYTpsaW5rIHtcbiAgY29sb3I6ICM2MDdkOGI7XG59XG5uYXYgYTpob3ZlciB7XG4gIGNvbG9yOiAjMDM5YmU1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjO1xufVxubmF2IGEucm91dGVyLWxpbmstYWN0aXZlIHtcbiAgY29sb3I6ICMwMzliZTU7XG59XG5cbi8qIGl0ZW1zIGNsYXNzICovXG4uaXRlbXMge1xuICBtYXJnaW46IDAgMCAyZW0gMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMjRlbTtcbn1cbi5pdGVtcyBsaSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBtYXJnaW46IDAuNWVtO1xuICBwYWRkaW5nOiAwLjNlbSAwO1xuICBoZWlnaHQ6IDEuNmVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uaXRlbXMgbGk6aG92ZXIge1xuICBjb2xvcjogIzYwN2Q4YjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgbGVmdDogMC4xZW07XG59XG4uaXRlbXMgbGkuc2VsZWN0ZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJkOGRjO1xuICBjb2xvcjogd2hpdGU7XG59XG4uaXRlbXMgLnRleHQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTNweDtcbn1cbi5pdGVtcyB7XG4gIG1hcmdpbjogMCAwIDJlbSAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAyNGVtO1xufVxuLml0ZW1zIGxpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIG1hcmdpbjogMC41ZW07XG4gIHBhZGRpbmc6IDAuM2VtIDA7XG4gIGhlaWdodDogMS42ZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5pdGVtcyBsaTpob3ZlciB7XG4gIGNvbG9yOiAjNjA3ZDhiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICBsZWZ0OiAwLjFlbTtcbn1cbi5pdGVtcyBsaS5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZmQ4ZGM7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLml0ZW1zIGxpLnNlbGVjdGVkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JiZDhkYztcbn1cbi5pdGVtcyAudGV4dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtM3B4O1xufVxuLml0ZW1zIC5iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwLjhlbSAwLjdlbSAwIDAuN2VtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3ZDhiO1xuICBsaW5lLWhlaWdodDogMWVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC0xcHg7XG4gIHRvcDogLTRweDtcbiAgaGVpZ2h0OiAxLjhlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjhlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XG59XG5cbi8qIGV2ZXJ5d2hlcmUgZWxzZSAqL1xuKiB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG4vKiBnbG9iYWwgZnJhbWV3b3JrIHN0eWxlLWd1aWRlICovXG4udGV4dC1hbGlnbi1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ud2lkdGgtODAge1xuICBtaW4td2lkdGg6IDgwcHg7XG59XG5cbi53aWR0aC04MC1zdHJpY3Qge1xuICB3aWR0aDogODBweDtcbn1cblxuLndpZHRoLTEwMCB7XG4gIG1pbi13aWR0aDogMTAwcHg7XG59XG5cbi53aWR0aC0xMDAtcGN0IHtcbiAgbWluLXdpZHRoOiAxMDAlO1xufVxuXG4ud2lkdGgtMTIwIHtcbiAgd2lkdGg6IDEyMHB4O1xufVxuXG5AbWVkaWEgcHJpbnQge1xuICAud2lkdGgtMTAwLXBjdC1wcmludC1vbmx5IHtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDUwNHB4KSB7XG4gIC53aWR0aC0xMDAtcGN0LW1vYmlsZS1vbmx5IHtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLnBhZGRpbmctYWxsLTUge1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5wYWRkaW5nLWFsbC0zIHtcbiAgcGFkZGluZzogM3B4O1xufVxuXG4ucGFkZGluZy1sZWZ0LTUge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuLnBhZGRpbmctcmlnaHQtNSB7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLyogdGFza3Mgc3R5bGVzICovXG50YXNrcyAudGFzay1kb25lIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIGNvbG9yOiBncmF5O1xufVxuXG50YXNrcyAudGFzay1pbi1wcm9jZXNzIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGJsdWUgIWltcG9ydGFudDtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG59XG5cbioge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xufVxuXG5idXR0b24ge1xuICBjb2xvcjogIzIyMjtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgcGFkZGluZzogMXB4IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzJmOTNmNztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZWNmZjtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuaW5wdXQudGFzayB7XG4gIHdpZHRoOiA1MCU7XG4gIG1pbi13aWR0aDogMTAwcHg7XG59XG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxudGV4dGFyZWEudGFzay1tdWx0aXBsZSB7XG4gIHdpZHRoOiA1MCU7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcbn1cbi50YXNrLWV0YSB7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi50YXNrLW5vLWV0YSB7XG4gIGNvbG9yOiByZWQ7XG59XG4udGFzay10ZXh0IHtcbiAgbGluZS1oZWlnaHQ6IDEuM3JlbTtcbn1cbi50YXNrLWFnZS0xIHtcbiAgY29sb3I6IGdyYXk7XG59XG4udGFzay1hZ2UtMiB7XG4gIGNvbG9yOiBicm93bjtcbn1cbi50YXNrLWFnZS0xMCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5wcm9kdWN0aXZpdHktZ29vZCB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLnByb2R1Y3Rpdml0eS1iYWQge1xuICBjb2xvcjogYnJvd247XG59XG4udGFzay1pbXBvcnRhbnQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi50YXNrLW9wZW4td2l0aC10dCB7XG4gIGNvbG9yOiBncmVlbjtcbn1cbi50YXNrLXRhZ3Mge1xuICBjb2xvcjogZ3JheTtcbn1cbi50YXNrLWhpZ2hsaWdodGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbn1cbi50YXNrLXVyZ2VudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbn1cbi50YWc6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udGFzay1wcm9ncmVzc2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EyZmZhOTtcbn1cbi50YXNrLWNhbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODFkNGZhO1xufVxuLnRhc2stdW5leHBlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWI5N2M7XG59XG4uY2xpY2thYmxlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDUwNHB4KSB7XG4gIC5tb2JpbGUtb25seSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIHRhYmxlLm1vYmlsZS1vbmx5IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XG4gIH1cbiAgLmRlc2t0b3Atb25seSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDUwNXB4KSB7XG4gIC5tb2JpbGUtb25seSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuZGVza3RvcC1vbmx5IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgdGFibGUuZGVza3RvcC1vbmx5IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XG4gIH1cbn1cblxuLnRhc2stb3Blbi10YXNrLWxpc3QtY29udGFpbmVyLS1ncmlkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLnRhc2stcmVjb3JkIHtcbiAgbWF4LXdpZHRoOiA0NTBweDtcbiAgbWluLXdpZHRoOiAyMDBweDtcbiAgZmxleDogMSAwO1xuICBtYXJnaW46IDVweDtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG4udGFzay1yZWNvcmQtbm8tdGFzay1kb25lIHtcbiAgYm9yZGVyOiAxcHggZGFzaGVkICNkZDAwMDA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTA1cHgpIHtcbiAgLnRhc2stcmVjb3JkIHtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IDM5MHB4O1xuICB9XG4gIC50YXNrLW9wZW4tdGFzay1saXN0LWNvbnRhaW5lci0tZ3JpZCAudGFzay1yZWNvcmQge1xuICAgIGZsZXg6IDAgMCAzMSU7XG4gIH1cbiAgLnRhc2stb3Blbi10YXNrLWxpc3QtY29udGFpbmVyLS1mbG9hdCAudGFzay1yZWNvcmQge1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG59XG5cbiNJbmZvIHtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi50YXNrLWluZGljYXRvcnMtY29udGFpbmVyIHtcbiAgb3ZlcmZsb3cteDogYXV0bztcbn1cblxuLnRhc2staXRlbS10b29sYmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLnRhc2staXRlbS10b29sYmFyLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMDAlO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTA1cHgpIHtcbiAgLnRhc2staXRlbS10b29sYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5vcHRpb24taXRlbSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5sYWJlbC5sYWJlbC1sZWZ0IHtcbiAgd2lkdGg6IDE1MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbm1lbnUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhO1xufVxuXG4uZmllbGQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG5cbi5maWVsZC1pbnB1dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZpZWxkLXNlbGVjdCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG5jb21iby1pdGVtID4gYnV0dG9uIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDUwNXB4KSB7XG4gIC5maWVsZC1pbnB1dCB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG5cbiAgLmZpZWxkLWlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcbiAgICB3aWR0aDogNjAlO1xuICB9XG5cbiAgLmZpZWxkLXNlbGVjdCB7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cblxuICBjb21iby1pdGVtID4gYnV0dG9uIHtcbiAgICB3aWR0aDogNTBweDtcbiAgfVxufVxuXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xufVxuXG4uYmFsYW5jZS16ZXJvIHtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi5iYWxhbmNlLXBvc2l0aXZlIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4uYmFsYW5jZS1uZWdhdGl2ZSB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5tb3ZlbWVudC1ib3gge1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIG1hcmdpbjogNXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTA1cHgpIHtcbiAgLm1vdmVtZW50LWJveCB7XG4gICAgd2lkdGg6IDM1MHB4O1xuICB9XG59XG5cbi5tb3ZlbWVudC1ib3g6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xufVxuXG4ubW92ZW1lbnQtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZmxleDogMTtcbn1cblxuLm1vdmVtZW50LWFtb3VudC1pbmNvbWUge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5tb3ZlbWVudC1hbW91bnQtZXhwZW5zZSB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5tb3ZlbWVudC1hbW91bnQtdHJhbnNmZXIge1xuICBjb2xvcjogdmlvbGV0O1xufVxuXG4ubW92ZW1lbnQtYWNjb3VudCB7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4ubW92ZW1lbnQtZGF0ZSB7XG4gIGNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcbn1cblxuLm1vdmVtZW50LWRlc2NyaXB0aW9uIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5tb3ZlbWVudC1idWRnZXQge1xuICBjb2xvcjogZ3JheTtcbn1cblxuLm1vdmVtZW50LWNhdGVnb3J5IHtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi5tb3ZlbWVudC1wbGFjZSB7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4uZ2VuZXJhbC1iYWRnZS1uZXcsXG4uZ2VuZXJhbC1iYWRnZS1lZGl0ZWQsXG4uZ2VuZXJhbC1iYWRnZS1hcmNoaXZlZCxcbi5tb3ZlbWVudC1iYWRnZS1uZXcsXG4ubW92ZW1lbnQtYmFkZ2UtZWRpdGVkLFxuLmxhc3R0aW1lLWJhZGdlLWFyY2hpdmVkLFxuLmxhc3R0aW1lLWJhZGdlLW5ldyxcbi5sYXN0dGltZS1iYWRnZS1lZGl0ZWQge1xuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcbiAgcGFkZGluZzogMCA1cHg7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JlZW47XG4gIGNvbG9yOiBibHVlO1xufVxuXG5jb21iby1pdGVtIC5jb21iby1pdGVtLWNvbnRhaW5lciB7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCBjb3JuZmxvd2VyYmx1ZTtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4ubG9naW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4OiAxIDAgYXV0bztcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCBncmF5O1xuICB3aWR0aDogMzAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4vKiBDYXJkIHN0eWxlcyAqL1xuLmNhcmQtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZmxleDogMTtcbn1cblxuLmNhcmQtaXRlbS1jb250YWluZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIG1hcmdpbjogNXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTA1cHgpIHtcbiAgLmNhcmQtaXRlbS1jb250YWluZXIge1xuICAgIHdpZHRoOiAzNTBweDtcbiAgfVxufVxuXG4uYXBwLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMTBweDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxubGluayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogQOKAi21lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuXG59Ki9cblxuLmNvbG9yLWdyZWVuIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4uY29sb3ItcmVkIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnRleHQtYWxpZ24tY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWFyZ2luLWFsbC0wIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubWFyZ2luLXRvcC0zIHtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuXG4udmVydGljYWwtYWxpZ24tdG9wIHtcbiAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xufVxuXG4ucHJpbnQtb25seSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5wYWdlLWJyZWFrLWFmdGVyIHtcbiAgcGFnZS1icmVhay1hZnRlcjogYWx3YXlzO1xufVxuXG4ucGFnZS1icmVhay1iZWZvcmUge1xuICBwYWdlLWJyZWFrLWJlZm9yZTogYWx3YXlzO1xufVxuXG5AbWVkaWEgcHJpbnQge1xuICBAcGFnZSB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luOiAxLjZjbTtcbiAgfVxuXG4gIG1lbnUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAucGFnZS10b3Age1xuICAgIG1hcmdpbi10b3A6IDEuNmNtICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucHJpbnQtb25seSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbiJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\data\code\intranet\src\styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map