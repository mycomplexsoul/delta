(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* Master Styles */\nh1 {\n  color: #369;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 250%;\n}\nh2,\nh3 {\n  color: #444;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: lighter;\n}\nbody {\n  background-color: #eee;\n  font-size: 13px;\n}\n@media (min-width: 505px) {\n  body {\n    font-size: 11px;\n  }\n}\nbody,\ninput[text],\nbutton {\n  color: #888;\n  font-family: Cambria, Georgia;\n}\na {\n  cursor: pointer;\n}\nbutton {\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n}\nbutton:hover {\n  background-color: #cfd8dc;\n}\nbutton:disabled {\n  background-color: #eee;\n  color: #aaa;\n  cursor: auto;\n}\n/* Navigation link styles */\nnav a {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n}\nnav a:visited,\na:link {\n  color: #607d8b;\n}\nnav a:hover {\n  color: #039be5;\n  background-color: #cfd8dc;\n}\nnav a.router-link-active {\n  color: #039be5;\n}\n/* items class */\n.items {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 24em;\n}\n.items li {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #eee;\n  margin: 0.5em;\n  padding: 0.3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n.items li:hover {\n  color: #607d8b;\n  background-color: #ddd;\n  left: 0.1em;\n}\n.items li.selected:hover {\n  background-color: #bbd8dc;\n  color: white;\n}\n.items .text {\n  position: relative;\n  top: -3px;\n}\n.items {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 24em;\n}\n.items li {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #eee;\n  margin: 0.5em;\n  padding: 0.3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n.items li:hover {\n  color: #607d8b;\n  background-color: #ddd;\n  left: 0.1em;\n}\n.items li.selected {\n  background-color: #cfd8dc;\n  color: white;\n}\n.items li.selected:hover {\n  background-color: #bbd8dc;\n}\n.items .text {\n  position: relative;\n  top: -3px;\n}\n.items .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607d8b;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  margin-right: 0.8em;\n  border-radius: 4px 0 0 4px;\n}\n/* everywhere else */\n* {\n  font-family: Arial, Helvetica, sans-serif;\n}\n/* global framework style-guide */\n.text-align-right {\n  text-align: right;\n}\n.width-80 {\n  min-width: 80px;\n}\n.width-100 {\n  min-width: 100px;\n}\n.padding-all-5 {\n  padding: 5px;\n}\n.padding-left-5 {\n  padding-left: 5px;\n}\n.padding-right-5 {\n  padding-right: 5px;\n}\n/* tasks styles */\ntasks .task-done {\n  text-decoration: line-through;\n  color: gray;\n}\ntasks .task-in-process {\n  font-style: italic;\n  font-weight: bold;\n  color: blue !important;\n}\nbody {\n  margin: 0;\n  color: #333;\n  font-family: monospace;\n}\n* {\n  font-family: monospace;\n}\nbutton {\n  color: #222;\n  font-family: monospace;\n  padding: 1px 5px;\n  border: 1px solid #2f93f7;\n  background-color: #e6ecff;\n  border-radius: 0;\n}\ninput.task {\n  width: 50%;\n  min-width: 100px;\n}\ninput[type=\"checkbox\"] {\n  vertical-align: middle;\n}\ntextarea.task-multiple {\n  width: 50%;\n  min-width: 100px;\n  height: 120px;\n  vertical-align: text-top;\n}\n.task-eta {\n  color: gray;\n  font-weight: bold;\n  margin-left: 5px;\n}\n.task-no-eta {\n  color: red;\n}\n.task-age-1 {\n  color: gray;\n}\n.task-age-2 {\n  color: brown;\n}\n.task-age-10 {\n  color: red;\n}\n.productivity-good {\n  color: green;\n}\n.productivity-bad {\n  color: brown;\n}\n.task-important {\n  font-weight: bold;\n}\n.task-open-with-tt {\n  color: green;\n}\n.task-tags {\n  color: gray;\n}\n.task-highlighted {\n  background-color: #ddd;\n}\n.task-urgent {\n  background-color: yellow;\n}\n.tag:hover {\n  cursor: pointer;\n}\n.task-progressed {\n  background-color: #a2ffa9;\n}\n.task-call {\n  background-color: #81d4fa;\n}\n.task-unexpected {\n  background-color: #f9b97c;\n}\n.clickable {\n  cursor: pointer;\n}\n@media (max-width: 504px) {\n  .mobile-only {\n    display: initial;\n  }\n}\n@media (min-width: 505px) {\n  .mobile-only {\n    display: none;\n  }\n}\n.task-open-task-list-container--grid {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n}\n.task-record {\n  max-width: 450px;\n  min-width: 200px;\n  -webkit-box-flex: 1;\n          flex: 1 0;\n  margin: 5px;\n  padding: 5px;\n  border: 1px solid lightgray;\n}\n@media (min-width: 505px) {\n  .task-open-task-list-container--grid .task-record {\n    -webkit-box-flex: 0;\n            flex: 0 0 31%;\n  }\n  .task-open-task-list-container--float .task-record {\n    float: left;\n  }\n}\n#Info {\n  clear: both;\n}\n.task-indicators-container {\n  overflow-x: auto;\n}\n.task-item-toolbar {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  background-color: #eee;\n  width: 100%;\n  height: auto;\n  border-top: 1px solid black;\n}\n.task-item-toolbar-content {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 200%;\n}\n@media (min-width: 505px) {\n  .task-item-toolbar {\n    display: none;\n  }\n}\n.option-item {\n  display: block;\n}\nlabel.label-left {\n  width: 150px;\n  display: inline-block;\n}\nmenu {\n  display: block;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  left: 0;\n  width: 100%;\n  background-color: #aaa;\n}\n.field {\n  display: block;\n  margin: 10px 0;\n}\n.field-input {\n  display: block;\n  width: 100%;\n}\n.field-select {\n  width: calc(100% - 60px);\n  display: inline;\n}\ncombo-item > button {\n  width: 50px;\n  display: inline;\n}\n@media (min-width: 505px) {\n  .field-input {\n    display: inline;\n    width: auto;\n  }\n\n  .field-input[type=\"text\"] {\n    width: 60%;\n  }\n\n  .field-select {\n    width: auto;\n  }\n\n  combo-item > button {\n    width: 50px;\n  }\n}\ninput[type=\"radio\"] {\n  vertical-align: bottom;\n}\n.balance-zero {\n  color: gray;\n}\n.balance-positive {\n  color: green;\n}\n.balance-negative {\n  color: red;\n}\n.movement-box {\n  border: 1px solid lightgray;\n  margin: 5px;\n  padding: 5px;\n  display: block;\n  width: 100%;\n  cursor: pointer;\n}\n@media (min-width: 505px) {\n  .movement-box {\n    width: 350px;\n  }\n}\n.movement-box:hover {\n  background-color: #e6e6e6;\n}\n.movement-list {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n.movement-amount-income {\n  color: green;\n}\n.movement-amount-expense {\n  color: red;\n}\n.movement-amount-transfer {\n  color: violet;\n}\n.movement-account {\n  color: gray;\n}\n.movement-date {\n  color: cornflowerblue;\n}\n.movement-description {\n  font-weight: bold;\n}\n.movement-budget {\n  color: gray;\n}\n.movement-category {\n  color: gray;\n}\n.movement-place {\n  color: gray;\n}\n.general-badge-new,\n.general-badge-edited,\n.general-badge-archived,\n.movement-badge-new,\n.movement-badge-edited,\n.lasttime-badge-archived,\n.lasttime-badge-new,\n.lasttime-badge-edited {\n  border: 1px solid green;\n  padding: 0 5px;\n  background: lightgreen;\n  color: blue;\n}\ncombo-item .combo-item-container {\n  border: 1px dashed cornflowerblue;\n  padding: 10px;\n  margin: 10px;\n}\n.login {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n          flex: 1 0 auto;\n  align-content: center;\n  justify-items: center;\n  border: 1px dashed gray;\n  width: 300px;\n  margin: 0 auto;\n  padding: 10px;\n}\n/* Card styles */\n.card-list {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n.card-item-container {\n  border: 1px solid lightgray;\n  margin: 5px;\n  padding: 5px;\n  display: block;\n  width: 100%;\n  cursor: pointer;\n}\n@media (min-width: 505px) {\n  .card-item-container {\n    width: 350px;\n  }\n}\n.app-container {\n  margin: 10px;\n  margin-top: 0;\n}\nlink {\n  display: block;\n}\n.hidden {\n  display: none;\n}\n/* @​media (prefers-color-scheme: dark) {\n\n}*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFrQjtBQUNsQjtFQUNFLFdBQVc7RUFDWCx5Q0FBeUM7RUFDekMsZUFBZTtBQUNqQjtBQUNBOztFQUVFLFdBQVc7RUFDWCx5Q0FBeUM7RUFDekMsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7QUFDQTs7O0VBR0UsV0FBVztFQUNYLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7QUFDQTs7RUFFRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBRUEsZ0JBQWdCO0FBQ2hCO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsV0FBVztBQUNiO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7QUFDWDtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsV0FBVztBQUNiO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztBQUNYO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDBCQUEwQjtBQUM1QjtBQUVBLG9CQUFvQjtBQUNwQjtFQUNFLHlDQUF5QztBQUMzQztBQUVBLGlDQUFpQztBQUNqQztFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0UsNkJBQTZCO0VBQzdCLFdBQVc7QUFDYjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLFNBQVM7RUFDVCxXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGO0FBQ0E7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGO0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG1CQUFTO1VBQVQsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRTtJQUNFLG1CQUFhO1lBQWIsYUFBYTtFQUNmO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7QUFDRjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsT0FBTztFQUNQLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtFQUNaLDJCQUEyQjtBQUM3QjtBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjtBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsY0FBYztFQUNkLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7QUFDYjtBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGVBQWU7QUFDakI7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0FBQ2pCO0FBRUE7RUFDRTtJQUNFLGVBQWU7SUFDZixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7QUFDRjtBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2QsV0FBVztFQUNYLGVBQWU7QUFDakI7QUFFQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFPO1VBQVAsT0FBTztBQUNUO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLFVBQVU7QUFDWjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7Ozs7Ozs7O0VBUUUsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsV0FBVztBQUNiO0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsYUFBYTtFQUNiLFlBQVk7QUFDZDtBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsbUJBQWM7VUFBZCxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGNBQWM7RUFDZCxhQUFhO0FBQ2Y7QUFFQSxnQkFBZ0I7QUFDaEI7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQU87VUFBUCxPQUFPO0FBQ1Q7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZUFBZTtBQUNqQjtBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7QUFDRjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7O0VBRUUiLCJmaWxlIjoic3JjL3N0eWxlcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBNYXN0ZXIgU3R5bGVzICovXG5oMSB7XG4gIGNvbG9yOiAjMzY5O1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyNTAlO1xufVxuaDIsXG5oMyB7XG4gIGNvbG9yOiAjNDQ0O1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59XG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDUwNXB4KSB7XG4gIGJvZHkge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgfVxufVxuYm9keSxcbmlucHV0W3RleHRdLFxuYnV0dG9uIHtcbiAgY29sb3I6ICM4ODg7XG4gIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBHZW9yZ2lhO1xufVxuYSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjO1xufVxuYnV0dG9uOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgY29sb3I6ICNhYWE7XG4gIGN1cnNvcjogYXV0bztcbn1cblxuLyogTmF2aWdhdGlvbiBsaW5rIHN0eWxlcyAqL1xubmF2IGEge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbm5hdiBhOnZpc2l0ZWQsXG5hOmxpbmsge1xuICBjb2xvcjogIzYwN2Q4Yjtcbn1cbm5hdiBhOmhvdmVyIHtcbiAgY29sb3I6ICMwMzliZTU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZmQ4ZGM7XG59XG5uYXYgYS5yb3V0ZXItbGluay1hY3RpdmUge1xuICBjb2xvcjogIzAzOWJlNTtcbn1cblxuLyogaXRlbXMgY2xhc3MgKi9cbi5pdGVtcyB7XG4gIG1hcmdpbjogMCAwIDJlbSAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAyNGVtO1xufVxuLml0ZW1zIGxpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIG1hcmdpbjogMC41ZW07XG4gIHBhZGRpbmc6IDAuM2VtIDA7XG4gIGhlaWdodDogMS42ZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5pdGVtcyBsaTpob3ZlciB7XG4gIGNvbG9yOiAjNjA3ZDhiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICBsZWZ0OiAwLjFlbTtcbn1cbi5pdGVtcyBsaS5zZWxlY3RlZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiYmQ4ZGM7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5pdGVtcyAudGV4dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtM3B4O1xufVxuLml0ZW1zIHtcbiAgbWFyZ2luOiAwIDAgMmVtIDA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDI0ZW07XG59XG4uaXRlbXMgbGkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgbWFyZ2luOiAwLjVlbTtcbiAgcGFkZGluZzogMC4zZW0gMDtcbiAgaGVpZ2h0OiAxLjZlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLml0ZW1zIGxpOmhvdmVyIHtcbiAgY29sb3I6ICM2MDdkOGI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIGxlZnQ6IDAuMWVtO1xufVxuLml0ZW1zIGxpLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NmZDhkYztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaXRlbXMgbGkuc2VsZWN0ZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJkOGRjO1xufVxuLml0ZW1zIC50ZXh0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0zcHg7XG59XG4uaXRlbXMgLmJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IHNtYWxsO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAuOGVtIDAuN2VtIDAgMC43ZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDdkOGI7XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogLTFweDtcbiAgdG9wOiAtNHB4O1xuICBoZWlnaHQ6IDEuOGVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuOGVtO1xuICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcbn1cblxuLyogZXZlcnl3aGVyZSBlbHNlICovXG4qIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbi8qIGdsb2JhbCBmcmFtZXdvcmsgc3R5bGUtZ3VpZGUgKi9cbi50ZXh0LWFsaWduLXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi53aWR0aC04MCB7XG4gIG1pbi13aWR0aDogODBweDtcbn1cblxuLndpZHRoLTEwMCB7XG4gIG1pbi13aWR0aDogMTAwcHg7XG59XG5cbi5wYWRkaW5nLWFsbC01IHtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4ucGFkZGluZy1sZWZ0LTUge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuLnBhZGRpbmctcmlnaHQtNSB7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLyogdGFza3Mgc3R5bGVzICovXG50YXNrcyAudGFzay1kb25lIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIGNvbG9yOiBncmF5O1xufVxuXG50YXNrcyAudGFzay1pbi1wcm9jZXNzIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGJsdWUgIWltcG9ydGFudDtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG59XG5cbioge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xufVxuXG5idXR0b24ge1xuICBjb2xvcjogIzIyMjtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgcGFkZGluZzogMXB4IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzJmOTNmNztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZWNmZjtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuaW5wdXQudGFzayB7XG4gIHdpZHRoOiA1MCU7XG4gIG1pbi13aWR0aDogMTAwcHg7XG59XG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxudGV4dGFyZWEudGFzay1tdWx0aXBsZSB7XG4gIHdpZHRoOiA1MCU7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcbn1cbi50YXNrLWV0YSB7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi50YXNrLW5vLWV0YSB7XG4gIGNvbG9yOiByZWQ7XG59XG4udGFzay1hZ2UtMSB7XG4gIGNvbG9yOiBncmF5O1xufVxuLnRhc2stYWdlLTIge1xuICBjb2xvcjogYnJvd247XG59XG4udGFzay1hZ2UtMTAge1xuICBjb2xvcjogcmVkO1xufVxuXG4ucHJvZHVjdGl2aXR5LWdvb2Qge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5wcm9kdWN0aXZpdHktYmFkIHtcbiAgY29sb3I6IGJyb3duO1xufVxuLnRhc2staW1wb3J0YW50IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4udGFzay1vcGVuLXdpdGgtdHQge1xuICBjb2xvcjogZ3JlZW47XG59XG4udGFzay10YWdzIHtcbiAgY29sb3I6IGdyYXk7XG59XG4udGFzay1oaWdobGlnaHRlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG59XG4udGFzay11cmdlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG59XG4udGFnOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnRhc2stcHJvZ3Jlc3NlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhMmZmYTk7XG59XG4udGFzay1jYWxsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgxZDRmYTtcbn1cbi50YXNrLXVuZXhwZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjliOTdjO1xufVxuLmNsaWNrYWJsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDRweCkge1xuICAubW9iaWxlLW9ubHkge1xuICAgIGRpc3BsYXk6IGluaXRpYWw7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1MDVweCkge1xuICAubW9iaWxlLW9ubHkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLnRhc2stb3Blbi10YXNrLWxpc3QtY29udGFpbmVyLS1ncmlkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLnRhc2stcmVjb3JkIHtcbiAgbWF4LXdpZHRoOiA0NTBweDtcbiAgbWluLXdpZHRoOiAyMDBweDtcbiAgZmxleDogMSAwO1xuICBtYXJnaW46IDVweDtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTA1cHgpIHtcbiAgLnRhc2stb3Blbi10YXNrLWxpc3QtY29udGFpbmVyLS1ncmlkIC50YXNrLXJlY29yZCB7XG4gICAgZmxleDogMCAwIDMxJTtcbiAgfVxuICAudGFzay1vcGVuLXRhc2stbGlzdC1jb250YWluZXItLWZsb2F0IC50YXNrLXJlY29yZCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbn1cblxuI0luZm8ge1xuICBjbGVhcjogYm90aDtcbn1cblxuLnRhc2staW5kaWNhdG9ycy1jb250YWluZXIge1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuXG4udGFzay1pdGVtLXRvb2xiYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4udGFzay1pdGVtLXRvb2xiYXItY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDIwMCU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1MDVweCkge1xuICAudGFzay1pdGVtLXRvb2xiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLm9wdGlvbi1pdGVtIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmxhYmVsLmxhYmVsLWxlZnQge1xuICB3aWR0aDogMTUwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxubWVudSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhYWE7XG59XG5cbi5maWVsZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDEwcHggMDtcbn1cblxuLmZpZWxkLWlucHV0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZmllbGQtc2VsZWN0IHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbmNvbWJvLWl0ZW0gPiBidXR0b24ge1xuICB3aWR0aDogNTBweDtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTA1cHgpIHtcbiAgLmZpZWxkLWlucHV0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cblxuICAuZmllbGQtaW5wdXRbdHlwZT1cInRleHRcIl0ge1xuICAgIHdpZHRoOiA2MCU7XG4gIH1cblxuICAuZmllbGQtc2VsZWN0IHtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuXG4gIGNvbWJvLWl0ZW0gPiBidXR0b24ge1xuICAgIHdpZHRoOiA1MHB4O1xuICB9XG59XG5cbmlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG59XG5cbi5iYWxhbmNlLXplcm8ge1xuICBjb2xvcjogZ3JheTtcbn1cblxuLmJhbGFuY2UtcG9zaXRpdmUge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5iYWxhbmNlLW5lZ2F0aXZlIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLm1vdmVtZW50LWJveCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgbWFyZ2luOiA1cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1MDVweCkge1xuICAubW92ZW1lbnQtYm94IHtcbiAgICB3aWR0aDogMzUwcHg7XG4gIH1cbn1cblxuLm1vdmVtZW50LWJveDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG59XG5cbi5tb3ZlbWVudC1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmbGV4OiAxO1xufVxuXG4ubW92ZW1lbnQtYW1vdW50LWluY29tZSB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLm1vdmVtZW50LWFtb3VudC1leHBlbnNlIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLm1vdmVtZW50LWFtb3VudC10cmFuc2ZlciB7XG4gIGNvbG9yOiB2aW9sZXQ7XG59XG5cbi5tb3ZlbWVudC1hY2NvdW50IHtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi5tb3ZlbWVudC1kYXRlIHtcbiAgY29sb3I6IGNvcm5mbG93ZXJibHVlO1xufVxuXG4ubW92ZW1lbnQtZGVzY3JpcHRpb24ge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm1vdmVtZW50LWJ1ZGdldCB7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4ubW92ZW1lbnQtY2F0ZWdvcnkge1xuICBjb2xvcjogZ3JheTtcbn1cblxuLm1vdmVtZW50LXBsYWNlIHtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi5nZW5lcmFsLWJhZGdlLW5ldyxcbi5nZW5lcmFsLWJhZGdlLWVkaXRlZCxcbi5nZW5lcmFsLWJhZGdlLWFyY2hpdmVkLFxuLm1vdmVtZW50LWJhZGdlLW5ldyxcbi5tb3ZlbWVudC1iYWRnZS1lZGl0ZWQsXG4ubGFzdHRpbWUtYmFkZ2UtYXJjaGl2ZWQsXG4ubGFzdHRpbWUtYmFkZ2UtbmV3LFxuLmxhc3R0aW1lLWJhZGdlLWVkaXRlZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xuICBwYWRkaW5nOiAwIDVweDtcbiAgYmFja2dyb3VuZDogbGlnaHRncmVlbjtcbiAgY29sb3I6IGJsdWU7XG59XG5cbmNvbWJvLWl0ZW0gLmNvbWJvLWl0ZW0tY29udGFpbmVyIHtcbiAgYm9yZGVyOiAxcHggZGFzaGVkIGNvcm5mbG93ZXJibHVlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5sb2dpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXg6IDEgMCBhdXRvO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggZGFzaGVkIGdyYXk7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi8qIENhcmQgc3R5bGVzICovXG4uY2FyZC1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmbGV4OiAxO1xufVxuXG4uY2FyZC1pdGVtLWNvbnRhaW5lciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgbWFyZ2luOiA1cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1MDVweCkge1xuICAuY2FyZC1pdGVtLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDM1MHB4O1xuICB9XG59XG5cbi5hcHAtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG5saW5rIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBA4oCLbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG5cbn0qL1xuIl19 */", '', '']]

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