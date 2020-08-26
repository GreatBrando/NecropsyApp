(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["animal-worklist-animal-worklist-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/animal-worklist/animal-worklist.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/animal-worklist/animal-worklist.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    \n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu =\"main-menu\"></ion-menu-button>\n    </ion-buttons>\n    \n    <ion-buttons>\n      <ion-back-button defaultHref=\"/path-request\"></ion-back-button>\n    </ion-buttons>\n\n     <ion-buttons class=\"button_style\" slot=\"end\">\n      <ion-button (click)=\"switchStyle()\">\n        {{ tablestyle }}\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title>\n      Animal Worklist\n    </ion-title>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <div class=\"AnimalWorklist-Header\">\n        <h1> <b>Path Request #:</b> PL2013-117(5) <b>&nbsp;&nbsp;Species:</b> Mouse </h1>\n        <h1> <b>Requested On:</b> 05/07/2020 (08:21 PM) </h1>\n        <h1> <b>Available Animals List</b> </h1>\n  </div>\n\n  <ngx-datatable  class=\"animalworklist_table\"\n    [ngClass]=\"tablestyle\" \n    [rows]=\"pathrequests\"\n    [columnMode]=\"'force'\" \n    [headerHeight]=\"60\" \n    [rowHeight]=\"'auto'\" \n    [rowClass]=\"getRowClass.bind(this)\">\n \n    <ngx-datatable-column name=\"Animals\"></ngx-datatable-column>\n    <ngx-datatable-column name=\"State\"></ngx-datatable-column>\n    <ngx-datatable-column name=\"Technician\"></ngx-datatable-column>\n    <ngx-datatable-column name=\"Completion\"></ngx-datatable-column>\n\n    <ngx-datatable-column name=\"Actions\" sortable=\"false\" prop=\"name\">\n      <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n        <ion-button size=\"small\" [routerLink]=\"['/necropsy-task-fulfillment']\" fill=\"outline\" (click)=\"open(row)\">Enter Gross Observations</ion-button>\n      </ng-template>\n    </ngx-datatable-column>\n\n  </ngx-datatable>\n  \n<div class=\"AnimalWorklist-Footer\">\n  <ion-button class=\"complete_worklist\" size=\"small\" [routerLink]=\"['/path-request']\">Complete Worklist</ion-button>\n</div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/animal-worklist/animal-worklist-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/animal-worklist/animal-worklist-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: AnimalWorklistPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimalWorklistPageRoutingModule", function() { return AnimalWorklistPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _animal_worklist_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animal-worklist.page */ "./src/app/animal-worklist/animal-worklist.page.ts");




const routes = [
    {
        path: '',
        component: _animal_worklist_page__WEBPACK_IMPORTED_MODULE_3__["AnimalWorklistPage"]
    }
];
let AnimalWorklistPageRoutingModule = class AnimalWorklistPageRoutingModule {
};
AnimalWorklistPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AnimalWorklistPageRoutingModule);



/***/ }),

/***/ "./src/app/animal-worklist/animal-worklist.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/animal-worklist/animal-worklist.module.ts ***!
  \***********************************************************/
/*! exports provided: AnimalWorklistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimalWorklistPageModule", function() { return AnimalWorklistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _animal_worklist_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./animal-worklist-routing.module */ "./src/app/animal-worklist/animal-worklist-routing.module.ts");
/* harmony import */ var _animal_worklist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./animal-worklist.page */ "./src/app/animal-worklist/animal-worklist.page.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js");








let AnimalWorklistPageModule = class AnimalWorklistPageModule {
};
AnimalWorklistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"],
            _animal_worklist_routing_module__WEBPACK_IMPORTED_MODULE_5__["AnimalWorklistPageRoutingModule"]
        ],
        declarations: [_animal_worklist_page__WEBPACK_IMPORTED_MODULE_6__["AnimalWorklistPage"]]
    })
], AnimalWorklistPageModule);



/***/ }),

/***/ "./src/app/animal-worklist/animal-worklist.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/animal-worklist/animal-worklist.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".AnimalWorklist-Header {\n  position: relative;\n  margin-left: 20px;\n}\n\n.AnimalWorklist-Footer {\n  width: 1062px;\n  margin-top: 5px;\n  display: inline-block;\n}\n\n.button_style {\n  margin-right: 30px;\n  height: 30px;\n  width: 50px;\n}\n\n.animalworklist_table {\n  margin-left: 20px;\n  margin-right: 20px;\n  border-top: 2px solid #ddd;\n  border-bottom: 2px solid #ddd;\n  border-left: 2px solid #ddd;\n  border-right: 2px solid #ddd;\n}\n\n.complete_worklist {\n  float: right;\n  height: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmFuY29iMS9OZWNyb3BzeUFwcC9zcmMvYXBwL2FuaW1hbC13b3JrbGlzdC9hbmltYWwtd29ya2xpc3QucGFnZS5zY3NzIiwic3JjL2FwcC9hbmltYWwtd29ya2xpc3QvYW5pbWFsLXdvcmtsaXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FuaW1hbC13b3JrbGlzdC9hbmltYWwtd29ya2xpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLkFuaW1hbFdvcmtsaXN0LUhlYWRlcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5BbmltYWxXb3JrbGlzdC1Gb290ZXJ7XG4gICAgd2lkdGg6IDEwNjJweDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYnV0dG9uX3N0eWxle1xuICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6ICA1MHB4O1xufVxuXG4uYW5pbWFsd29ya2xpc3RfdGFibGV7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZGRkO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGRkO1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2RkZDtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjZGRkO1xufVxuXG4uY29tcGxldGVfd29ya2xpc3R7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGhlaWdodDogMzVweDtcbn1cblxuIiwiLkFuaW1hbFdvcmtsaXN0LUhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5BbmltYWxXb3JrbGlzdC1Gb290ZXIge1xuICB3aWR0aDogMTA2MnB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmJ1dHRvbl9zdHlsZSB7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogNTBweDtcbn1cblxuLmFuaW1hbHdvcmtsaXN0X3RhYmxlIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGRkO1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNkZGQ7XG59XG5cbi5jb21wbGV0ZV93b3JrbGlzdCB7XG4gIGZsb2F0OiByaWdodDtcbiAgaGVpZ2h0OiAzNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/animal-worklist/animal-worklist.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/animal-worklist/animal-worklist.page.ts ***!
  \*********************************************************/
/*! exports provided: AnimalWorklistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimalWorklistPage", function() { return AnimalWorklistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _assets_pathrequests_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../assets/pathrequests.json */ "./src/assets/pathrequests.json");
var _assets_pathrequests_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../../assets/pathrequests.json */ "./src/assets/pathrequests.json", 1);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let AnimalWorklistPage = class AnimalWorklistPage {
    constructor(alertCtrl) {
        this.alertCtrl = alertCtrl;
        this.pathrequests = _assets_pathrequests_json__WEBPACK_IMPORTED_MODULE_2__;
        this.tablestyle = 'bootstrap';
        this.customRowClass = false;
    }
    ngOnInit() {
    }
    switchStyle() {
        if (this.tablestyle == 'dark') {
            this.tablestyle = 'bootstrap';
        }
        else {
            this.tablestyle = 'dark';
        }
    }
    getRowClass(row) {
        if (!this.customRowClass) {
            return {};
        }
    }
    open(row) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
        });
    }
};
AnimalWorklistPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
AnimalWorklistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-animal-worklist',
        template: __webpack_require__(/*! raw-loader!./animal-worklist.page.html */ "./node_modules/raw-loader/index.js!./src/app/animal-worklist/animal-worklist.page.html"),
        styles: [__webpack_require__(/*! ./animal-worklist.page.scss */ "./src/app/animal-worklist/animal-worklist.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
], AnimalWorklistPage);



/***/ })

}]);
//# sourceMappingURL=animal-worklist-animal-worklist-module-es2015.js.map