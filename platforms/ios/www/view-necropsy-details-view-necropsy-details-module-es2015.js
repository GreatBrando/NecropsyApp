(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-necropsy-details-view-necropsy-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/view-necropsy-details/view-necropsy-details.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view-necropsy-details/view-necropsy-details.page.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu =\"main-menu\"></ion-menu-button>\n    </ion-buttons>\n\n    <ion-buttons>\n      <ion-back-button defaultHref=\"/path-request\"></ion-back-button>\n    </ion-buttons>\n\n     <ion-buttons class=\"button_style\"  slot=\"end\">\n      <ion-button (click)=\"switchStyle()\">\n        {{ tablestyle }}\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title>\n      View Necropsy Details\n    </ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div class=\"Necropsy-Header\">\n      <h1> <b>Path Request #:</b> PL2013-117(5) <b>&nbsp;&nbsp;Animals:</b> 2 <b>&nbsp;&nbsp;Species:</b> Mouse <b>&nbsp;&nbsp;Marker:</b> Null </h1>\n      <h1> <b>Method:</b> Paraffin <b>&nbsp;&nbsp;Handling:</b> Immersion <b>&nbsp;&nbsp;Fixative:</b> NBF <b>&nbsp;&nbsp;Processing:</b> Paraffin </h1>\n      <h1><b>Tissues for Necropsy List</b></h1>\n  </div>\n\n  <ngx-datatable  class=\"necropsydetails_table\"\n    [ngClass]=\"tablestyle\" \n    [rows]=\"pathrequests\"\n    [columnMode]=\"'force'\" \n    [headerHeight]=\"60\" \n    [rowHeight]=\"'auto'\" \n    [rowClass]=\"getRowClass.bind(this)\">\n \n    <ngx-datatable-column name=\"Tissue\"></ngx-datatable-column>\n    <ngx-datatable-column name=\"Collect\"></ngx-datatable-column>\n    <ngx-datatable-column name=\"Weigh\"></ngx-datatable-column>\n    <ngx-datatable-column name=\"Photo\"></ngx-datatable-column>\n    <ngx-datatable-column name=\"Comment\"></ngx-datatable-column>\n\n  </ngx-datatable>\n\n    <ion-button class=\"worklist_button\" size=\"small\" [routerLink]=\"['/animal-worklist']\" (click)=\"open(row)\">View Animal Worklist</ion-button>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/view-necropsy-details/view-necropsy-details-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/view-necropsy-details/view-necropsy-details-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ViewNecropsyDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewNecropsyDetailsPageRoutingModule", function() { return ViewNecropsyDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _view_necropsy_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-necropsy-details.page */ "./src/app/view-necropsy-details/view-necropsy-details.page.ts");




const routes = [
    {
        path: '',
        component: _view_necropsy_details_page__WEBPACK_IMPORTED_MODULE_3__["ViewNecropsyDetailsPage"]
    }
];
let ViewNecropsyDetailsPageRoutingModule = class ViewNecropsyDetailsPageRoutingModule {
};
ViewNecropsyDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ViewNecropsyDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/view-necropsy-details/view-necropsy-details.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/view-necropsy-details/view-necropsy-details.module.ts ***!
  \***********************************************************************/
/*! exports provided: ViewNecropsyDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewNecropsyDetailsPageModule", function() { return ViewNecropsyDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _view_necropsy_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-necropsy-details-routing.module */ "./src/app/view-necropsy-details/view-necropsy-details-routing.module.ts");
/* harmony import */ var _view_necropsy_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-necropsy-details.page */ "./src/app/view-necropsy-details/view-necropsy-details.page.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js");








let ViewNecropsyDetailsPageModule = class ViewNecropsyDetailsPageModule {
};
ViewNecropsyDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"],
            _view_necropsy_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewNecropsyDetailsPageRoutingModule"]
        ],
        declarations: [_view_necropsy_details_page__WEBPACK_IMPORTED_MODULE_6__["ViewNecropsyDetailsPage"]]
    })
], ViewNecropsyDetailsPageModule);



/***/ }),

/***/ "./src/app/view-necropsy-details/view-necropsy-details.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/view-necropsy-details/view-necropsy-details.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Necropsy-Header {\n  position: relative;\n  margin-left: 20px;\n}\n\n.button_style {\n  margin-right: 30px;\n  height: 30px;\n  width: 50px;\n}\n\n.worklist_button {\n  margin-left: 920px;\n}\n\n.necropsydetails_table {\n  margin-left: 20px;\n  margin-right: 20px;\n  border-top: 2px solid #ddd;\n  border-bottom: 2px solid #ddd;\n  border-left: 2px solid #ddd;\n  border-right: 2px solid #ddd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmFuY29iMS9OZWNyb3BzeUFwcC9zcmMvYXBwL3ZpZXctbmVjcm9wc3ktZGV0YWlscy92aWV3LW5lY3JvcHN5LWRldGFpbHMucGFnZS5zY3NzIiwic3JjL2FwcC92aWV3LW5lY3JvcHN5LWRldGFpbHMvdmlldy1uZWNyb3BzeS1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FER0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctbmVjcm9wc3ktZGV0YWlscy92aWV3LW5lY3JvcHN5LWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLk5lY3JvcHN5LUhlYWRlcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5idXR0b25fc3R5bGV7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogIDUwcHg7XG59XG5cbi53b3JrbGlzdF9idXR0b257XG4gICAgbWFyZ2luLWxlZnQ6IDkyMHB4O1xuXG59XG5cbi5uZWNyb3BzeWRldGFpbHNfdGFibGV7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZGRkO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGRkO1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2RkZDtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjZGRkO1xufVxuXG4iLCIuTmVjcm9wc3ktSGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLmJ1dHRvbl9zdHlsZSB7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogNTBweDtcbn1cblxuLndvcmtsaXN0X2J1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiA5MjBweDtcbn1cblxuLm5lY3JvcHN5ZGV0YWlsc190YWJsZSB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZGRkO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RkZDtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZGRkO1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjZGRkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/view-necropsy-details/view-necropsy-details.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/view-necropsy-details/view-necropsy-details.page.ts ***!
  \*********************************************************************/
/*! exports provided: ViewNecropsyDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewNecropsyDetailsPage", function() { return ViewNecropsyDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _assets_pathrequests_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../assets/pathrequests.json */ "./src/assets/pathrequests.json");
var _assets_pathrequests_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../../assets/pathrequests.json */ "./src/assets/pathrequests.json", 1);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let ViewNecropsyDetailsPage = class ViewNecropsyDetailsPage {
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
ViewNecropsyDetailsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
ViewNecropsyDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-necropsy-details',
        template: __webpack_require__(/*! raw-loader!./view-necropsy-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/view-necropsy-details/view-necropsy-details.page.html"),
        styles: [__webpack_require__(/*! ./view-necropsy-details.page.scss */ "./src/app/view-necropsy-details/view-necropsy-details.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
], ViewNecropsyDetailsPage);



/***/ })

}]);
//# sourceMappingURL=view-necropsy-details-view-necropsy-details-module-es2015.js.map