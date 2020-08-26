(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["path-request-path-request-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/path-request/path-request.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/path-request/path-request.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      Path Request Selection\n    </ion-title>\n \n    <ion-buttons slot=\"start\" class=\"button_style\">\n      <ion-button (click)=\"switchStyle()\">\n        {{ tablestyle }}\n      </ion-button>\n    </ion-buttons>\n \n    <ion-searchbar animated  slot=\"end\"  (ionInput)=\"filterItems($event)\" placeholder=\"Search by Path Request\"></ion-searchbar>\n\n  </ion-toolbar>\n</ion-header>\n \n<ion-content>\n\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n      <ion-refresher-content\n        pullingIcon=\"arrow-dropdown\"\n        pullingText=\"Pull to refresh\"\n        refreshingSpinner=\"circles\"\n        refreshingText=\"Refreshing...\">\n      </ion-refresher-content>\n    </ion-refresher>\n \n    <ngx-datatable  class=\"pathrequest_table\"\n    [ngClass]=\"tablestyle\" \n    [rows]=\"pathRequestFilter\"\n    [columnMode]=\"'force'\" \n    [headerHeight]=\"50\" \n    [rowHeight]=\"'auto'\">\n \n    <ngx-datatable-column prop=\"path_request_id\" name=\"path_request_id\"></ngx-datatable-column>\n    <ngx-datatable-column prop=\"h_number\" name=\"h_number\"></ngx-datatable-column>\n    <ngx-datatable-column prop=\"request_status\" name=\"request_status\"></ngx-datatable-column>\n    <ngx-datatable-column prop=\"animal_count\" name=\"animal_count\"></ngx-datatable-column>\n    <ngx-datatable-column prop=\"primary_investigator\" name=\"primary_investigator\"></ngx-datatable-column>\n    <ngx-datatable-column prop=\"study_pathologist\" name=\"study_pathologist\"></ngx-datatable-column>\n\n    <ngx-datatable-column name=\"Actions\" sortable=\"false\" prop=\"name\">\n      <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n        <ion-button size=\"small\" fill=\"outline\" (click)=\"goToProcedureDetails(row)\">View</ion-button>\n      </ng-template>\n    </ngx-datatable-column>\n \n  </ngx-datatable>\n \n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _path_request_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./path-request.page */ "./src/app/path-request/path-request.page.ts");




const routes = [
    {
        path: '',
        component: _path_request_page__WEBPACK_IMPORTED_MODULE_3__["PathRequestPage"]
    }
];
let PathRequestPageRoutingModule = class PathRequestPageRoutingModule {
};
PathRequestPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PathRequestPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _path_request_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./path-request-routing.module */ "./src/app/path-request/path-request-routing.module.ts");
/* harmony import */ var _path_request_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./path-request.page */ "./src/app/path-request/path-request.page.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js");








let PathRequestPageModule = class PathRequestPageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let PathRequestPage = class PathRequestPage {
    constructor(alertCtrl, http, router, navCtrl) {
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.router = router;
        this.navCtrl = navCtrl;
        this.tablestyle = 'bootstrap';
    }
    ngOnInit() {
        this.loadData();
    }
    loadData() {
        let data;
        data = this.http.get('http://10.136.137.223:18080/ords/pathlimsreports/v_nec_int_pathrequest/?limit=1000')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => response.items)); // map to use the items key!
        data.subscribe(data => {
            this.items = data;
            this.initializeItems();
            console.log(data);
        });
        /* Old Method
        let data:Observable<any>;
        data = this.http.get('assets/v_nec_int_pathrequests.json');
        data.subscribe(data => {
         this.items = data;
         this.initializeItems();
        });
        */
    }
    initializeItems() {
        this.pathRequestFilter = this.items;
    }
    goToProcedureDetails(row) {
        let navigationExtras = {
            queryParams: {
                /* Old Method
                pathrequestid: row.pathrequestid,
                hnumber: row.hnumber,
                requeststatus: row.requeststatus,
                pathtitle: row.pathtitle,
                primaryinvestigator: row.primaryinvestigator,
                studypathologist: row.studypathologist
                */
                pathrequestid: row.path_request_id,
                hnumber: row.h_number,
                requeststatus: row.request_status,
                pathtitle: row.path_title,
                primaryinvestigator: row.primary_investigator,
                studypathologist: row.study_pathologist
            }
        };
        this.navCtrl.navigateForward(['/view-procedure'], navigationExtras);
    }
    filterItems(ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.pathRequestFilter = this.items.filter(item => {
                //Original is pathrequestid
                return (item.path_request_id.toString().toLowerCase().indexOf(val.toString().toLowerCase()) > -1);
            });
        }
    }
    switchStyle() {
        if (this.tablestyle == 'dark') {
            this.tablestyle = 'bootstrap';
        }
        else {
            this.tablestyle = 'dark';
        }
    }
    doRefresh(event) {
        this.loadData();
        event.target.complete();
    }
};
PathRequestPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
PathRequestPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-path-request',
        template: __webpack_require__(/*! raw-loader!./path-request.page.html */ "./node_modules/raw-loader/index.js!./src/app/path-request/path-request.page.html"),
        styles: [__webpack_require__(/*! ./path-request.page.scss */ "./src/app/path-request/path-request.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], PathRequestPage);



/***/ })

}]);
//# sourceMappingURL=path-request-path-request-module-es2015.js.map