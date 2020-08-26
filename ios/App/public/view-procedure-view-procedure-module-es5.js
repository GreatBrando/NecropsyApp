(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-procedure-view-procedure-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/view-procedure/view-procedure.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view-procedure/view-procedure.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu =\"main-menu\"></ion-menu-button>\n    </ion-buttons>\n    \n    <ion-buttons>\n      <ion-back-button defaultHref=\"/path-request\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-buttons class=\"button_style\" slot=\"end\">\n      <ion-button (click)=\"switchStyle()\">\n        {{ tablestyle }}\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title>\n      View Procedure\n    </ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n   <div class=\"Procedure-Header\">\n      <h1> <b>Path Request #:</b> {{pathrequestid}} <b>&nbsp;&nbsp;H#:</b> {{hnumber}} <b>&nbsp;&nbsp;Status:</b> {{requeststatus}} </h1>\n      <h1> <b>Title:</b> {{pathtitle}} </h1>\n      <h1> <b>Necropsy Procedure List</b> </h1>\n   </div>\n\n   <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n      pullingIcon=\"arrow-dropdown\"\n      pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n   </ion-refresher>\n\n   <ngx-datatable  class=\"pathrequest_table\"\n    [ngClass]=\"tablestyle\" \n    [rows]=\"items\"\n    [columnMode]=\"'force'\" \n    [headerHeight]=\"60\" \n    [rowHeight]=\"'auto'\">\n\n     <ngx-datatable-column prop=\"procedure_id\" name=\"procedure_id\"></ngx-datatable-column>\n    <ngx-datatable-column prop=\"request_date\" name=\"request_date\"></ngx-datatable-column>\n    <ngx-datatable-column prop=\"animal_qty\" name=\"animal_qty\"></ngx-datatable-column>\n    <ngx-datatable-column prop=\"location\"  name=\"location\"></ngx-datatable-column>\n    <ngx-datatable-column prop=\"procedure_comment\"  name=\"procedure_comment\"></ngx-datatable-column>\n    <ngx-datatable-column prop=\"study_monitor\" name=\"study_monitor\"></ngx-datatable-column>\n_\n    <ngx-datatable-column name=\"Actions\" sortable=\"false\" prop=\"name\">\n      <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n        <ion-button size=\"small\" fill=\"outline\" (click)=\"goToNecropsyDetails(row)\">View Necropsy</ion-button>\n      </ng-template>\n    </ngx-datatable-column>\n \n  </ngx-datatable>\n  \n</ion-content>\n"

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

module.exports = ".Procedure-Header {\n  position: relative;\n  margin-left: 20px;\n}\n\n.button_style {\n  margin-right: 30px;\n  height: 30px;\n  width: 50px;\n}\n\n.pathrequest_table {\n  margin-left: 20px;\n  margin-right: 20px;\n  border-top: 2px solid #ddd;\n  border-left: 2px solid #ddd;\n  border-right: 2px solid #ddd;\n  border-bottom: 2px solid #ddd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmFuY29iMS9OZWNyb3BzeUFwcC9zcmMvYXBwL3ZpZXctcHJvY2VkdXJlL3ZpZXctcHJvY2VkdXJlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdmlldy1wcm9jZWR1cmUvdmlldy1wcm9jZWR1cmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC92aWV3LXByb2NlZHVyZS92aWV3LXByb2NlZHVyZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuUHJvY2VkdXJlLUhlYWRlcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5idXR0b25fc3R5bGV7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogIDUwcHg7XG59XG5cbi5wYXRocmVxdWVzdF90YWJsZXtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNkZGQ7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZGRkO1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNkZGQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkZGQ7XG59XG4iLCIuUHJvY2VkdXJlLUhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5idXR0b25fc3R5bGUge1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbi5wYXRocmVxdWVzdF90YWJsZSB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZGRkO1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGRkO1xufSJdfQ== */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _assets_pathrequests_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../assets/pathrequests.json */ "./src/assets/pathrequests.json");
var _assets_pathrequests_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../../assets/pathrequests.json */ "./src/assets/pathrequests.json", 1);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");








var ViewProcedurePage = /** @class */ (function () {
    function ViewProcedurePage(alertCtrl, http, route, router, navCtrl) {
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.route = route;
        this.router = router;
        this.navCtrl = navCtrl;
        this.pathrequests = _assets_pathrequests_json__WEBPACK_IMPORTED_MODULE_3__;
        this.tablestyle = 'bootstrap';
    }
    ViewProcedurePage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.pathrequestid = params["pathrequestid"];
            _this.hnumber = params["hnumber"];
            _this.requeststatus = params["requeststatus"];
            _this.pathtitle = params["pathtitle"];
            _this.primaryinvestigator = params["primaryinvestigator"];
            _this.studypathologist = params["studypathologist"];
            _this.loadData();
        });
    };
    ViewProcedurePage.prototype.loadData = function () {
        var _this = this;
        var data;
        data = this.http.get('http://10.136.137.223:18080/ords/pathlimsreports/v_nec_int_procedure/?q=%7B%22path_request_id%22:%22' + this.pathrequestid + '%22%7D')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (response) { return response.items; })); // map to use the items key!
        data.subscribe(function (data) {
            _this.items = data;
            console.log(data);
        });
        /* Old Method
        let data:Observable<any>;
        data = this.http.get('assets/v_nec_int_procedure.json');
        data.subscribe(data => {
          this.items = data.filter(item => item.pathrequestid === this.pathrequestid)
        });
        */
    };
    ViewProcedurePage.prototype.goToNecropsyDetails = function (row) {
        var navigationExtras = {
            queryParams: {
                pathrequestid: row.path_request_id,
                hnumber: this.hnumber,
                pathtitle: this.pathtitle,
                primaryinvestigator: this.primaryinvestigator,
                procedureid: row.procedure_id,
                requeststatus: this.requeststatus,
                requestdate: row.request_date,
                studypathologist: this.studypathologist,
                animalqty: row.animal_qty,
                marker: row.marker,
                method: row.method,
                fixative: row.fixative,
                handling: row.handling,
                processing: row.processing
                /* Old Method
                 pathrequestid: row.pathrequestid,
                 hnumber: this.hnumber,
                 pathtitle: this.pathtitle,
                 primaryinvestigator: this.primaryinvestigator,
                 procedureid: row.procedureid,
                 requeststatus: this.requeststatus,
                 requestdate: row.requestdate,
                 studypathologist: this.studypathologist,
                 animalqty: row.animalqty,
                 marker: row.marker,
                 method: row.method,
                 fixative: row.fixative,
                 handling: row.handling,
                 processing: row.processing
                */
            }
        };
        console.log(navigationExtras);
        this.navCtrl.navigateForward(['view-necropsy-details'], navigationExtras);
    };
    ViewProcedurePage.prototype.switchStyle = function () {
        if (this.tablestyle == 'dark') {
            this.tablestyle = 'bootstrap';
        }
        else {
            this.tablestyle = 'dark';
        }
    };
    ViewProcedurePage.prototype.doRefresh = function (event) {
        this.loadData();
        event.target.complete();
    };
    ViewProcedurePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
    ]; };
    ViewProcedurePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-procedure',
            template: __webpack_require__(/*! raw-loader!./view-procedure.page.html */ "./node_modules/raw-loader/index.js!./src/app/view-procedure/view-procedure.page.html"),
            styles: [__webpack_require__(/*! ./view-procedure.page.scss */ "./src/app/view-procedure/view-procedure.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
    ], ViewProcedurePage);
    return ViewProcedurePage;
}());



/***/ })

}]);
//# sourceMappingURL=view-procedure-view-procedure-module-es5.js.map