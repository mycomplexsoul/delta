(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* Master Styles */\nh1 {\n  color: #369;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 250%;\n}\nh2,\nh3 {\n  color: #444;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: lighter;\n}\nbody {\n  background-color: #eee;\n  font-size: 13px;\n}\n@media (min-width: 505px) {\n  body {\n    font-size: 11px;\n  }\n}\nbody,\ninput[text],\nbutton {\n  color: #888;\n  font-family: Cambria, Georgia;\n}\na {\n  cursor: pointer;\n}\nbutton {\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n}\nbutton:hover {\n  background-color: #cfd8dc;\n}\nbutton:disabled {\n  background-color: #eee;\n  color: #aaa;\n  cursor: auto;\n}\n/* Navigation link styles */\nnav a {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n}\nnav a:visited,\na:link {\n  color: #607d8b;\n}\nnav a:hover {\n  color: #039be5;\n  background-color: #cfd8dc;\n}\nnav a.router-link-active {\n  color: #039be5;\n}\n/* items class */\n.items {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 24em;\n}\n.items li {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #eee;\n  margin: 0.5em;\n  padding: 0.3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n.items li:hover {\n  color: #607d8b;\n  background-color: #ddd;\n  left: 0.1em;\n}\n.items li.selected:hover {\n  background-color: #bbd8dc;\n  color: white;\n}\n.items .text {\n  position: relative;\n  top: -3px;\n}\n.items {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 24em;\n}\n.items li {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #eee;\n  margin: 0.5em;\n  padding: 0.3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n.items li:hover {\n  color: #607d8b;\n  background-color: #ddd;\n  left: 0.1em;\n}\n.items li.selected {\n  background-color: #cfd8dc;\n  color: white;\n}\n.items li.selected:hover {\n  background-color: #bbd8dc;\n}\n.items .text {\n  position: relative;\n  top: -3px;\n}\n.items .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607d8b;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  margin-right: 0.8em;\n  border-radius: 4px 0 0 4px;\n}\n/* everywhere else */\n* {\n  font-family: Arial, Helvetica, sans-serif;\n}\n/* global framework style-guide */\n.text-align-right {\n  text-align: right;\n}\n.width-80 {\n  min-width: 80px;\n}\n.width-100 {\n  min-width: 100px;\n}\n.padding-all-5 {\n  padding: 5px;\n}\n.padding-left-5 {\n  padding-left: 5px;\n}\n.padding-right-5 {\n  padding-right: 5px;\n}\n/* tasks styles */\ntasks .task-done {\n  text-decoration: line-through;\n  color: gray;\n}\ntasks .task-in-process {\n  font-style: italic;\n  font-weight: bold;\n  color: blue !important;\n}\nbody {\n  margin: 0;\n  color: #333;\n  font-family: monospace;\n}\n* {\n  font-family: monospace;\n}\nbutton {\n  color: #222;\n  font-family: monospace;\n  padding: 1px 5px;\n  border: 1px solid #2f93f7;\n  background-color: #e6ecff;\n  border-radius: 0;\n}\ninput.task {\n  width: 50%;\n  min-width: 100px;\n}\ninput[type=\"checkbox\"] {\n  vertical-align: middle;\n}\ntextarea.task-multiple {\n  width: 50%;\n  min-width: 100px;\n  height: 120px;\n  vertical-align: text-top;\n}\n.task-eta {\n  color: gray;\n  font-weight: bold;\n  margin-left: 5px;\n}\n.task-no-eta {\n  color: red;\n}\n.task-text {\n  line-height: 1.3rem;\n}\n.task-age-1 {\n  color: gray;\n}\n.task-age-2 {\n  color: brown;\n}\n.task-age-10 {\n  color: red;\n}\n.productivity-good {\n  color: green;\n}\n.productivity-bad {\n  color: brown;\n}\n.task-important {\n  font-weight: bold;\n}\n.task-open-with-tt {\n  color: green;\n}\n.task-tags {\n  color: gray;\n}\n.task-highlighted {\n  background-color: #ddd;\n}\n.task-urgent {\n  background-color: yellow;\n}\n.tag:hover {\n  cursor: pointer;\n}\n.task-progressed {\n  background-color: #a2ffa9;\n}\n.task-call {\n  background-color: #81d4fa;\n}\n.task-unexpected {\n  background-color: #f9b97c;\n}\n.clickable {\n  cursor: pointer;\n}\n@media (max-width: 504px) {\n  .mobile-only {\n    display: initial;\n  }\n}\n@media (min-width: 505px) {\n  .mobile-only {\n    display: none;\n  }\n}\n.task-open-task-list-container--grid {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n}\n.task-record {\n  max-width: 450px;\n  min-width: 200px;\n  -webkit-box-flex: 1;\n          flex: 1 0;\n  margin: 5px;\n  padding: 5px;\n  border: 1px solid lightgray;\n}\n.task-record-no-task-done {\n  border: 1px dashed #dd0000;\n}\n@media (min-width: 505px) {\n  .task-record {\n    overflow-y: auto;\n    max-height: 390px;\n  }\n  .task-open-task-list-container--grid .task-record {\n    -webkit-box-flex: 0;\n            flex: 0 0 31%;\n  }\n  .task-open-task-list-container--float .task-record {\n    float: left;\n  }\n}\n#Info {\n  clear: both;\n}\n.task-indicators-container {\n  overflow-x: auto;\n}\n.task-item-toolbar {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  background-color: #eee;\n  width: 100%;\n  height: auto;\n  border-top: 1px solid black;\n}\n.task-item-toolbar-content {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 200%;\n}\n@media (min-width: 505px) {\n  .task-item-toolbar {\n    display: none;\n  }\n}\n.option-item {\n  display: block;\n}\nlabel.label-left {\n  width: 150px;\n  display: inline-block;\n}\nmenu {\n  display: block;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  left: 0;\n  width: 100%;\n  background-color: #aaa;\n}\n.field {\n  display: block;\n  margin: 10px 0;\n}\n.field-input {\n  display: block;\n  width: 100%;\n}\n.field-select {\n  width: calc(100% - 60px);\n  display: inline;\n}\ncombo-item > button {\n  width: 50px;\n  display: inline;\n}\n@media (min-width: 505px) {\n  .field-input {\n    display: inline;\n    width: auto;\n  }\n\n  .field-input[type=\"text\"] {\n    width: 60%;\n  }\n\n  .field-select {\n    width: auto;\n  }\n\n  combo-item > button {\n    width: 50px;\n  }\n}\ninput[type=\"radio\"] {\n  vertical-align: bottom;\n}\n.balance-zero {\n  color: gray;\n}\n.balance-positive {\n  color: green;\n}\n.balance-negative {\n  color: red;\n}\n.movement-box {\n  border: 1px solid lightgray;\n  margin: 5px;\n  padding: 5px;\n  display: block;\n  width: 100%;\n  cursor: pointer;\n}\n@media (min-width: 505px) {\n  .movement-box {\n    width: 350px;\n  }\n}\n.movement-box:hover {\n  background-color: #e6e6e6;\n}\n.movement-list {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n.movement-amount-income {\n  color: green;\n}\n.movement-amount-expense {\n  color: red;\n}\n.movement-amount-transfer {\n  color: violet;\n}\n.movement-account {\n  color: gray;\n}\n.movement-date {\n  color: cornflowerblue;\n}\n.movement-description {\n  font-weight: bold;\n}\n.movement-budget {\n  color: gray;\n}\n.movement-category {\n  color: gray;\n}\n.movement-place {\n  color: gray;\n}\n.general-badge-new,\n.general-badge-edited,\n.general-badge-archived,\n.movement-badge-new,\n.movement-badge-edited,\n.lasttime-badge-archived,\n.lasttime-badge-new,\n.lasttime-badge-edited {\n  border: 1px solid green;\n  padding: 0 5px;\n  background: lightgreen;\n  color: blue;\n}\ncombo-item .combo-item-container {\n  border: 1px dashed cornflowerblue;\n  padding: 10px;\n  margin: 10px;\n}\n.login {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n          flex: 1 0 auto;\n  align-content: center;\n  justify-items: center;\n  border: 1px dashed gray;\n  width: 300px;\n  margin: 0 auto;\n  padding: 10px;\n}\n/* Card styles */\n.card-list {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n.card-item-container {\n  border: 1px solid lightgray;\n  margin: 5px;\n  padding: 5px;\n  display: block;\n  width: 100%;\n  cursor: pointer;\n}\n@media (min-width: 505px) {\n  .card-item-container {\n    width: 350px;\n  }\n}\n.app-container {\n  margin: 10px;\n  margin-top: 0;\n}\nlink {\n  display: block;\n}\n.hidden {\n  display: none;\n}\n/* @​media (prefers-color-scheme: dark) {\n\n}*/\n.color-green {\n  color: green;\n}\n.color-red {\n  color: red;\n}\n\n/*# sourceMappingURL=data:application/json;base64,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O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBOzs7Ozs7OztFQVFFLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjtBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGFBQWE7RUFDYixZQUFZO0FBQ2Q7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLG1CQUFjO1VBQWQsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixjQUFjO0VBQ2QsYUFBYTtBQUNmO0FBRUEsZ0JBQWdCO0FBQ2hCO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFPO1VBQVAsT0FBTztBQUNUO0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2QsV0FBVztFQUNYLGVBQWU7QUFDakI7QUFFQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUVBOztFQUVFO0FBRUY7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIE1hc3RlciBTdHlsZXMgKi9cbmgxIHtcbiAgY29sb3I6ICMzNjk7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDI1MCU7XG59XG5oMixcbmgzIHtcbiAgY29sb3I6ICM0NDQ7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbn1cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTA1cHgpIHtcbiAgYm9keSB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICB9XG59XG5ib2R5LFxuaW5wdXRbdGV4dF0sXG5idXR0b24ge1xuICBjb2xvcjogIzg4ODtcbiAgZm9udC1mYW1pbHk6IENhbWJyaWEsIEdlb3JnaWE7XG59XG5hIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZmQ4ZGM7XG59XG5idXR0b246ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBjb2xvcjogI2FhYTtcbiAgY3Vyc29yOiBhdXRvO1xufVxuXG4vKiBOYXZpZ2F0aW9uIGxpbmsgc3R5bGVzICovXG5uYXYgYSB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxubmF2IGE6dmlzaXRlZCxcbmE6bGluayB7XG4gIGNvbG9yOiAjNjA3ZDhiO1xufVxubmF2IGE6aG92ZXIge1xuICBjb2xvcjogIzAzOWJlNTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NmZDhkYztcbn1cbm5hdiBhLnJvdXRlci1saW5rLWFjdGl2ZSB7XG4gIGNvbG9yOiAjMDM5YmU1O1xufVxuXG4vKiBpdGVtcyBjbGFzcyAqL1xuLml0ZW1zIHtcbiAgbWFyZ2luOiAwIDAgMmVtIDA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDI0ZW07XG59XG4uaXRlbXMgbGkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgbWFyZ2luOiAwLjVlbTtcbiAgcGFkZGluZzogMC4zZW0gMDtcbiAgaGVpZ2h0OiAxLjZlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLml0ZW1zIGxpOmhvdmVyIHtcbiAgY29sb3I6ICM2MDdkOGI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIGxlZnQ6IDAuMWVtO1xufVxuLml0ZW1zIGxpLnNlbGVjdGVkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JiZDhkYztcbiAgY29sb3I6IHdoaXRlO1xufVxuLml0ZW1zIC50ZXh0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0zcHg7XG59XG4uaXRlbXMge1xuICBtYXJnaW46IDAgMCAyZW0gMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMjRlbTtcbn1cbi5pdGVtcyBsaSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBtYXJnaW46IDAuNWVtO1xuICBwYWRkaW5nOiAwLjNlbSAwO1xuICBoZWlnaHQ6IDEuNmVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uaXRlbXMgbGk6aG92ZXIge1xuICBjb2xvcjogIzYwN2Q4YjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgbGVmdDogMC4xZW07XG59XG4uaXRlbXMgbGkuc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5pdGVtcyBsaS5zZWxlY3RlZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiYmQ4ZGM7XG59XG4uaXRlbXMgLnRleHQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTNweDtcbn1cbi5pdGVtcyAuYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC44ZW0gMC43ZW0gMCAwLjdlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwN2Q4YjtcbiAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAtMXB4O1xuICB0b3A6IC00cHg7XG4gIGhlaWdodDogMS44ZW07XG4gIG1hcmdpbi1yaWdodDogMC44ZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xufVxuXG4vKiBldmVyeXdoZXJlIGVsc2UgKi9cbioge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuLyogZ2xvYmFsIGZyYW1ld29yayBzdHlsZS1ndWlkZSAqL1xuLnRleHQtYWxpZ24tcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLndpZHRoLTgwIHtcbiAgbWluLXdpZHRoOiA4MHB4O1xufVxuXG4ud2lkdGgtMTAwIHtcbiAgbWluLXdpZHRoOiAxMDBweDtcbn1cblxuLnBhZGRpbmctYWxsLTUge1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5wYWRkaW5nLWxlZnQtNSB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG4ucGFkZGluZy1yaWdodC01IHtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG4vKiB0YXNrcyBzdHlsZXMgKi9cbnRhc2tzIC50YXNrLWRvbmUge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgY29sb3I6IGdyYXk7XG59XG5cbnRhc2tzIC50YXNrLWluLXByb2Nlc3Mge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogYmx1ZSAhaW1wb3J0YW50O1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzMzMztcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbn1cblxuKiB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG59XG5cbmJ1dHRvbiB7XG4gIGNvbG9yOiAjMjIyO1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICBwYWRkaW5nOiAxcHggNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMmY5M2Y3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlY2ZmO1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG5pbnB1dC50YXNrIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWluLXdpZHRoOiAxMDBweDtcbn1cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG50ZXh0YXJlYS50YXNrLW11bHRpcGxlIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xufVxuLnRhc2stZXRhIHtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLnRhc2stbm8tZXRhIHtcbiAgY29sb3I6IHJlZDtcbn1cbi50YXNrLXRleHQge1xuICBsaW5lLWhlaWdodDogMS4zcmVtO1xufVxuLnRhc2stYWdlLTEge1xuICBjb2xvcjogZ3JheTtcbn1cbi50YXNrLWFnZS0yIHtcbiAgY29sb3I6IGJyb3duO1xufVxuLnRhc2stYWdlLTEwIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnByb2R1Y3Rpdml0eS1nb29kIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4ucHJvZHVjdGl2aXR5LWJhZCB7XG4gIGNvbG9yOiBicm93bjtcbn1cbi50YXNrLWltcG9ydGFudCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnRhc2stb3Blbi13aXRoLXR0IHtcbiAgY29sb3I6IGdyZWVuO1xufVxuLnRhc2stdGFncyB7XG4gIGNvbG9yOiBncmF5O1xufVxuLnRhc2staGlnaGxpZ2h0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuLnRhc2stdXJnZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xufVxuLnRhZzpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi50YXNrLXByb2dyZXNzZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTJmZmE5O1xufVxuLnRhc2stY2FsbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MWQ0ZmE7XG59XG4udGFzay11bmV4cGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5Yjk3Yztcbn1cbi5jbGlja2FibGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTA0cHgpIHtcbiAgLm1vYmlsZS1vbmx5IHtcbiAgICBkaXNwbGF5OiBpbml0aWFsO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTA1cHgpIHtcbiAgLm1vYmlsZS1vbmx5IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi50YXNrLW9wZW4tdGFzay1saXN0LWNvbnRhaW5lci0tZ3JpZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi50YXNrLXJlY29yZCB7XG4gIG1heC13aWR0aDogNDUwcHg7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIGZsZXg6IDEgMDtcbiAgbWFyZ2luOiA1cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xufVxuLnRhc2stcmVjb3JkLW5vLXRhc2stZG9uZSB7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjZGQwMDAwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDUwNXB4KSB7XG4gIC50YXNrLXJlY29yZCB7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBtYXgtaGVpZ2h0OiAzOTBweDtcbiAgfVxuICAudGFzay1vcGVuLXRhc2stbGlzdC1jb250YWluZXItLWdyaWQgLnRhc2stcmVjb3JkIHtcbiAgICBmbGV4OiAwIDAgMzElO1xuICB9XG4gIC50YXNrLW9wZW4tdGFzay1saXN0LWNvbnRhaW5lci0tZmxvYXQgLnRhc2stcmVjb3JkIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxufVxuXG4jSW5mbyB7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4udGFzay1pbmRpY2F0b3JzLWNvbnRhaW5lciB7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG5cbi50YXNrLWl0ZW0tdG9vbGJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi50YXNrLWl0ZW0tdG9vbGJhci1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjAwJTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDUwNXB4KSB7XG4gIC50YXNrLWl0ZW0tdG9vbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4ub3B0aW9uLWl0ZW0ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxubGFiZWwubGFiZWwtbGVmdCB7XG4gIHdpZHRoOiAxNTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5tZW51IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhYTtcbn1cblxuLmZpZWxkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuXG4uZmllbGQtaW5wdXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5maWVsZC1zZWxlY3Qge1xuICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuY29tYm8taXRlbSA+IGJ1dHRvbiB7XG4gIHdpZHRoOiA1MHB4O1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1MDVweCkge1xuICAuZmllbGQtaW5wdXQge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuXG4gIC5maWVsZC1pbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gICAgd2lkdGg6IDYwJTtcbiAgfVxuXG4gIC5maWVsZC1zZWxlY3Qge1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG5cbiAgY29tYm8taXRlbSA+IGJ1dHRvbiB7XG4gICAgd2lkdGg6IDUwcHg7XG4gIH1cbn1cblxuaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbn1cblxuLmJhbGFuY2UtemVybyB7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4uYmFsYW5jZS1wb3NpdGl2ZSB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmJhbGFuY2UtbmVnYXRpdmUge1xuICBjb2xvcjogcmVkO1xufVxuXG4ubW92ZW1lbnQtYm94IHtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBtYXJnaW46IDVweDtcbiAgcGFkZGluZzogNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDUwNXB4KSB7XG4gIC5tb3ZlbWVudC1ib3gge1xuICAgIHdpZHRoOiAzNTBweDtcbiAgfVxufVxuXG4ubW92ZW1lbnQtYm94OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbn1cblxuLm1vdmVtZW50LWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXg6IDE7XG59XG5cbi5tb3ZlbWVudC1hbW91bnQtaW5jb21lIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4ubW92ZW1lbnQtYW1vdW50LWV4cGVuc2Uge1xuICBjb2xvcjogcmVkO1xufVxuXG4ubW92ZW1lbnQtYW1vdW50LXRyYW5zZmVyIHtcbiAgY29sb3I6IHZpb2xldDtcbn1cblxuLm1vdmVtZW50LWFjY291bnQge1xuICBjb2xvcjogZ3JheTtcbn1cblxuLm1vdmVtZW50LWRhdGUge1xuICBjb2xvcjogY29ybmZsb3dlcmJsdWU7XG59XG5cbi5tb3ZlbWVudC1kZXNjcmlwdGlvbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubW92ZW1lbnQtYnVkZ2V0IHtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi5tb3ZlbWVudC1jYXRlZ29yeSB7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4ubW92ZW1lbnQtcGxhY2Uge1xuICBjb2xvcjogZ3JheTtcbn1cblxuLmdlbmVyYWwtYmFkZ2UtbmV3LFxuLmdlbmVyYWwtYmFkZ2UtZWRpdGVkLFxuLmdlbmVyYWwtYmFkZ2UtYXJjaGl2ZWQsXG4ubW92ZW1lbnQtYmFkZ2UtbmV3LFxuLm1vdmVtZW50LWJhZGdlLWVkaXRlZCxcbi5sYXN0dGltZS1iYWRnZS1hcmNoaXZlZCxcbi5sYXN0dGltZS1iYWRnZS1uZXcsXG4ubGFzdHRpbWUtYmFkZ2UtZWRpdGVkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBiYWNrZ3JvdW5kOiBsaWdodGdyZWVuO1xuICBjb2xvcjogYmx1ZTtcbn1cblxuY29tYm8taXRlbSAuY29tYm8taXRlbS1jb250YWluZXIge1xuICBib3JkZXI6IDFweCBkYXNoZWQgY29ybmZsb3dlcmJsdWU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLmxvZ2luIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleDogMSAwIGF1dG87XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDFweCBkYXNoZWQgZ3JheTtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLyogQ2FyZCBzdHlsZXMgKi9cbi5jYXJkLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXg6IDE7XG59XG5cbi5jYXJkLWl0ZW0tY29udGFpbmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBtYXJnaW46IDVweDtcbiAgcGFkZGluZzogNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDUwNXB4KSB7XG4gIC5jYXJkLWl0ZW0tY29udGFpbmVyIHtcbiAgICB3aWR0aDogMzUwcHg7XG4gIH1cbn1cblxuLmFwcC1jb250YWluZXIge1xuICBtYXJnaW46IDEwcHg7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbmxpbmsge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIEDigIttZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcblxufSovXG5cbi5jb2xvci1ncmVlbiB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmNvbG9yLXJlZCB7XG4gIGNvbG9yOiByZWQ7XG59XG4iXX0= */", '', '']]

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
//# sourceMappingURL=styles-es5.js.map