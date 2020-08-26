(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["path-request-path-request-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/path-request/path-request.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/path-request/path-request.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      Path Request Selection\n    </ion-title>\n \n    <ion-buttons slot=\"start\" class=\"button_style\">\n      <ion-button (click)=\"switchStyle()\">\n        {{ tablestyle }}\n      </ion-button>\n    </ion-buttons>\n \n    <ion-searchbar animated  slot=\"end\" (ionInput)=\"filterList($event)\" placeholder=\"Search by Path Request\"></ion-searchbar>\n\n  </ion-toolbar>\n</ion-header>\n \n<ion-content>\n \n    <ngx-datatable  class=\"pathrequest_table\"\n    [ngClass]=\"tablestyle\" \n    [rows]=\"pathrequests\"\n    [columnMode]=\"'force'\" \n    [headerHeight]=\"50\" \n    [rowHeight]=\"'auto'\" \n    [rowClass]=\"getRowClass.bind(this)\">\n \n    <ngx-datatable-column name=\"Pathrequest\"></ngx-datatable-column>\n    <ngx-datatable-column name=\"Hnumber\"></ngx-datatable-column>\n    <ngx-datatable-column name=\"Procedure\"></ngx-datatable-column>\n    <ngx-datatable-column name=\"Status\"></ngx-datatable-column>\n    <ngx-datatable-column name=\"Created\"></ngx-datatable-column>\n    <ngx-datatable-column name=\"Species\"></ngx-datatable-column>\n    <ngx-datatable-column name=\"Animal\"></ngx-datatable-column>\n    <ngx-datatable-column name=\"Investigator\"></ngx-datatable-column>\n    <ngx-datatable-column name=\"Pathologist\"></ngx-datatable-column>\n\n    <ngx-datatable-column name=\"Actions\" sortable=\"false\" prop=\"name\">\n      <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n        <ion-button size=\"small\" [routerLink]=\"['/view-procedure']\" fill=\"outline\" (click)=\"open(row)\">View</ion-button>\n      </ng-template>\n    </ngx-datatable-column>\n \n  </ngx-datatable>\n \n</ion-content>"

/***/ }),

/***/ "./src/app/path-request/path-request-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/path-request/path-request-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: PathRequestPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PathRequestPageRoutingModule", function() { return PathRequestPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _path_request_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./path-request.page */ "./src/app/path-request/path-request.page.ts");




var routes = [
    {
        path: '',
        component: _path_request_page__WEBPACK_IMPORTED_MODULE_3__["PathRequestPage"]
    }
];
var PathRequestPageRoutingModule = /** @class */ (function () {
    function PathRequestPageRoutingModule() {
    }
    PathRequestPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], PathRequestPageRoutingModule);
    return PathRequestPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/path-request/path-request.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/path-request/path-request.module.ts ***!
  \*****************************************************/
/*! exports provided: PathRequestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PathRequestPageModule", function() { return PathRequestPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _path_request_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./path-request-routing.module */ "./src/app/path-request/path-request-routing.module.ts");
/* harmony import */ var _path_request_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./path-request.page */ "./src/app/path-request/path-request.page.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm5/swimlane-ngx-datatable.js");








var PathRequestPageModule = /** @class */ (function () {
    function PathRequestPageModule() {
    }
    PathRequestPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"],
                _path_request_routing_module__WEBPACK_IMPORTED_MODULE_5__["PathRequestPageRoutingModule"]
            ],
            declarations: [_path_request_page__WEBPACK_IMPORTED_MODULE_6__["PathRequestPage"]]
        })
    ], PathRequestPageModule);
    return PathRequestPageModule;
}());



/***/ }),

/***/ "./src/app/path-request/path-request.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/path-request/path-request.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-searchbar {\n  margin-top: 10px;\n  width: 265px;\n}\n\n.button_style {\n  margin-top: 10px;\n}\n\n.pathrequest_table {\n  margin-left: 10px;\n  margin-right: 10px;\n  margin-top: 10px;\n  border-top: 2px solid #ddd;\n  border-bottom: 2px solid #ddd;\n  border-left: 2px solid #ddd;\n  border-right: 2px solid #ddd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmFuY29iMS9OZWNyb3BzeUFwcC9zcmMvYXBwL3BhdGgtcmVxdWVzdC9wYXRoLXJlcXVlc3QucGFnZS5zY3NzIiwic3JjL2FwcC9wYXRoLXJlcXVlc3QvcGF0aC1yZXF1ZXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYXRoLXJlcXVlc3QvcGF0aC1yZXF1ZXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zZWFyY2hiYXJ7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB3aWR0aDogMjY1cHg7XG59XG5cbi5idXR0b25fc3R5bGV7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnBhdGhyZXF1ZXN0X3RhYmxle1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZGRkO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGRkO1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2RkZDtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjZGRkO1xufSIsImlvbi1zZWFyY2hiYXIge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB3aWR0aDogMjY1cHg7XG59XG5cbi5idXR0b25fc3R5bGUge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ucGF0aHJlcXVlc3RfdGFibGUge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXItdG9wOiAycHggc29saWQgI2RkZDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2RkZDtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI2RkZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/path-request/path-request.page.ts":
/*!***************************************************!*\
  !*** ./src/app/path-request/path-request.page.ts ***!
  \***************************************************/
/*! exports provided: PathRequestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PathRequestPage", function() { return PathRequestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_pathrequests_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../assets/pathrequests.json */ "./src/assets/pathrequests.json");
var _assets_pathrequests_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../../assets/pathrequests.json */ "./src/assets/pathrequests.json", 1);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var PathRequestPage = /** @class */ (function () {
    function PathRequestPage(alertCtrl) {
        this.alertCtrl = alertCtrl;
        this.pathrequests = _assets_pathrequests_json__WEBPACK_IMPORTED_MODULE_2__;
        this.tablestyle = 'bootstrap';
        this.customRowClass = false;
    }
    PathRequestPage.prototype.ngOnInit = function () {
    };
    PathRequestPage.prototype.switchStyle = function () {
        if (this.tablestyle == 'dark') {
            this.tablestyle = 'bootstrap';
        }
        else {
            this.tablestyle = 'dark';
        }
    };
    PathRequestPage.prototype.getRowClass = function (row) {
        if (!this.customRowClass) {
            return {};
        }
    };
    PathRequestPage.prototype.open = function (row) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    PathRequestPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
    ]; };
    PathRequestPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-path-request',
            template: __webpack_require__(/*! raw-loader!./path-request.page.html */ "./node_modules/raw-loader/index.js!./src/app/path-request/path-request.page.html"),
            styles: [__webpack_require__(/*! ./path-request.page.scss */ "./src/app/path-request/path-request.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
    ], PathRequestPage);
    return PathRequestPage;
}());



/***/ })

}]);
//# sourceMappingURL=path-request-path-request-module-es5.js.map