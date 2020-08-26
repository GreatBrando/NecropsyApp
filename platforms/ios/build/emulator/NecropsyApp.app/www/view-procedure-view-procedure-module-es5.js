(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-procedure-view-procedure-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/view-procedure/view-procedure.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view-procedure/view-procedure.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu =\"main-menu\"></ion-menu-button>\n    </ion-buttons>\n    \n    <ion-buttons>\n      <ion-back-button defaultHref=\"/path-request\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-buttons class=\"button_style\" slot=\"end\">\n      <ion-button (click)=\"switchStyle()\">\n        {{ tablestyle }}\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title>\n      View Procedure\n    </ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n   <div class=\"Procedure-Header\">\n      <h1> <b>Path Request #:</b> PL2013-117(5) <b>&nbsp;&nbsp;H#:</b> H2020-308 <b>&nbsp;&nbsp;Status:</b> Open </h1>\n      <h1> <b>Title:</b> Dummy Study to test Middleware-PathLIMs <b>&nbsp;&nbsp;Species:</b> Mouse</h1>\n      <h1> <b>Necropsy Procedure List</b> </h1>\n   </div>\n\n   <ngx-datatable  class=\"pathrequest_table\"\n    [ngClass]=\"tablestyle\" \n    [rows]=\"pathrequests\"\n    [columnMode]=\"'force'\" \n    [headerHeight]=\"60\" \n    [rowHeight]=\"'auto'\" \n    [rowClass]=\"getRowClass.bind(this)\">\n \n    <ngx-datatable-column name=\"Requested\"></ngx-datatable-column>\n    <ngx-datatable-column name=\"Quantity\"></ngx-datatable-column>\n    <ngx-datatable-column name=\"Location\"></ngx-datatable-column>\n    <ngx-datatable-column name=\"Comments\"></ngx-datatable-column>\n    <ngx-datatable-column name=\"Monitor\"></ngx-datatable-column>\n\n    <ngx-datatable-column name=\"Actions\" sortable=\"false\" prop=\"name\">\n      <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n        <ion-button size=\"small\" [routerLink]=\"['/view-necropsy-details']\" fill=\"outline\" (click)=\"open(row)\">View Necropsy</ion-button>\n      </ng-template>\n    </ngx-datatable-column>\n \n  </ngx-datatable>\n  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/view-procedure/view-procedure-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/view-procedure/view-procedure-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ViewProcedurePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProcedurePageRoutingModule", function() { return ViewProcedurePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _view_procedure_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-procedure.page */ "./src/app/view-procedure/view-procedure.page.ts");




var routes = [
    {
        path: '',
        component: _view_procedure_page__WEBPACK_IMPORTED_MODULE_3__["ViewProcedurePage"]
    }
];
var ViewProcedurePageRoutingModule = /** @class */ (function () {
    function ViewProcedurePageRoutingModule() {
    }
    ViewProcedurePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ViewProcedurePageRoutingModule);
    return ViewProcedurePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/view-procedure/view-procedure.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/view-procedure/view-procedure.module.ts ***!
  \*********************************************************/
/*! exports provided: ViewProcedurePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProcedurePageModule", function() { return ViewProcedurePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _view_procedure_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-procedure-routing.module */ "./src/app/view-procedure/view-procedure-routing.module.ts");
/* harmony import */ var _view_procedure_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-procedure.page */ "./src/app/view-procedure/view-procedure.page.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm5/swimlane-ngx-datatable.js");








var ViewProcedurePageModule = /** @class */ (function () {
    function ViewProcedurePageModule() {
    }
    ViewProcedurePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"],
                _view_procedure_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewProcedurePageRoutingModule"]
            ],
            declarations: [_view_procedure_page__WEBPACK_IMPORTED_MODULE_6__["ViewProcedurePage"]]
        })
    ], ViewProcedurePageModule);
    return ViewProcedurePageModule;
}());



/***/ }),

/***/ "./src/app/view-procedure/view-procedure.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/view-procedure/view-procedure.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Procedure-Header {\n  position: relative;\n  margin-left: 20px;\n}\n\n.button_style {\n  margin-right: 30px;\n  height: 30px;\n  width: 50px;\n}\n\n.pathrequest_table {\n  margin-left: 20px;\n  margin-right: 20px;\n  border-top: 2px solid #ddd;\n  border-left: 2px solid #ddd;\n  border-right: 2px solid #ddd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmFuY29iMS9OZWNyb3BzeUFwcC9zcmMvYXBwL3ZpZXctcHJvY2VkdXJlL3ZpZXctcHJvY2VkdXJlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdmlldy1wcm9jZWR1cmUvdmlldy1wcm9jZWR1cmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdmlldy1wcm9jZWR1cmUvdmlldy1wcm9jZWR1cmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLlByb2NlZHVyZS1IZWFkZXJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4uYnV0dG9uX3N0eWxle1xuICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6ICA1MHB4O1xufVxuXG4ucGF0aHJlcXVlc3RfdGFibGV7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZGRkO1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2RkZDtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjZGRkO1xufVxuIiwiLlByb2NlZHVyZS1IZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4uYnV0dG9uX3N0eWxlIHtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG4ucGF0aHJlcXVlc3RfdGFibGUge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBib3JkZXItdG9wOiAycHggc29saWQgI2RkZDtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZGRkO1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjZGRkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/view-procedure/view-procedure.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/view-procedure/view-procedure.page.ts ***!
  \*******************************************************/
/*! exports provided: ViewProcedurePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProcedurePage", function() { return ViewProcedurePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_pathrequests_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../assets/pathrequests.json */ "./src/assets/pathrequests.json");
var _assets_pathrequests_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../../assets/pathrequests.json */ "./src/assets/pathrequests.json", 1);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var ViewProcedurePage = /** @class */ (function () {
    function ViewProcedurePage(alertCtrl) {
        this.alertCtrl = alertCtrl;
        this.pathrequests = _assets_pathrequests_json__WEBPACK_IMPORTED_MODULE_2__;
        this.tablestyle = 'bootstrap';
        this.customRowClass = false;
    }
    ViewProcedurePage.prototype.ngOnInit = function () {
    };
    ViewProcedurePage.prototype.switchStyle = function () {
        if (this.tablestyle == 'dark') {
            this.tablestyle = 'bootstrap';
        }
        else {
            this.tablestyle = 'dark';
        }
    };
    ViewProcedurePage.prototype.getRowClass = function (row) {
        if (!this.customRowClass) {
            return {};
        }
    };
    ViewProcedurePage.prototype.open = function (row) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    ViewProcedurePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
    ]; };
    ViewProcedurePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-procedure',
            template: __webpack_require__(/*! raw-loader!./view-procedure.page.html */ "./node_modules/raw-loader/index.js!./src/app/view-procedure/view-procedure.page.html"),
            styles: [__webpack_require__(/*! ./view-procedure.page.scss */ "./src/app/view-procedure/view-procedure.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
    ], ViewProcedurePage);
    return ViewProcedurePage;
}());



/***/ })

}]);
//# sourceMappingURL=view-procedure-view-procedure-module-es5.js.map