(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-necropsy-details-view-necropsy-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/view-necropsy-details/view-necropsy-details.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view-necropsy-details/view-necropsy-details.page.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu =\"main-menu\"></ion-menu-button>\n    </ion-buttons>\n\n    <ion-buttons>\n      <ion-back-button (click)=\"goToProcedure()\"></ion-back-button>\n    </ion-buttons>\n\n     <ion-buttons class=\"button_style\"  slot=\"end\">\n      <ion-button (click)=\"switchStyle()\">\n        {{ tablestyle }}\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title>\n      View Necropsy Details\n    </ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div class=\"Necropsy-Header\">\n      <h1> <b>Path Request #:</b> {{pathrequestid}} <b>&nbsp;&nbsp;Animals:</b> {{animalqty}} <b>&nbsp;&nbsp;Marker:</b> {{marker}} </h1>\n      <h1> <b>Method:</b> {{method}} <b>&nbsp;&nbsp;Handling:</b> {{handling}} <b>&nbsp;&nbsp;Fixative:</b> {{fixative}} <b>&nbsp;&nbsp;Processing:</b> {{processing}} </h1>\n      <h1><b>Tissues for Necropsy List</b></h1>\n  </div>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n      pullingIcon=\"arrow-dropdown\"\n      pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ngx-datatable  class=\"necropsydetails_table\"\n    [ngClass]=\"tablestyle\" \n    [rows]=\"items\"\n    [columnMode]=\"'force'\" \n    [headerHeight]=\"60\" \n    [rowHeight]=\"'auto'\">\n \n    <ngx-datatable-column prop=\"tissue\" name=\"tissue\"></ngx-datatable-column>\n    <ngx-datatable-column prop=\"weigh_flg\" name=\"weigh_flg\"></ngx-datatable-column>\n    <ngx-datatable-column prop=\"photo_flg\" name=\"photo_flg\"></ngx-datatable-column>\n    <ngx-datatable-column prop=\"tissue_comment\" name=\"tissue_comment\"></ngx-datatable-column>\n\n  </ngx-datatable>\n\n    <ion-button class=\"worklist_button\" size=\"small\" (click)=\"goToAnimalWorklist()\">View Animal Worklist</ion-button>\n\n</ion-content>\n"

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

module.exports = ".Necropsy-Header {\n  position: relative;\n  margin-left: 20px;\n}\n\n.button_style {\n  margin-right: 30px;\n  height: 30px;\n  width: 50px;\n}\n\n.worklist_button {\n  margin-left: 1029px;\n}\n\n.necropsydetails_table {\n  margin-left: 20px;\n  margin-right: 20px;\n  border-top: 2px solid #ddd;\n  border-bottom: 2px solid #ddd;\n  border-left: 2px solid #ddd;\n  border-right: 2px solid #ddd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmFuY29iMS9OZWNyb3BzeUFwcC9zcmMvYXBwL3ZpZXctbmVjcm9wc3ktZGV0YWlscy92aWV3LW5lY3JvcHN5LWRldGFpbHMucGFnZS5zY3NzIiwic3JjL2FwcC92aWV3LW5lY3JvcHN5LWRldGFpbHMvdmlldy1uZWNyb3BzeS1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FER0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctbmVjcm9wc3ktZGV0YWlscy92aWV3LW5lY3JvcHN5LWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLk5lY3JvcHN5LUhlYWRlcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5idXR0b25fc3R5bGV7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogIDUwcHg7XG59XG5cbi53b3JrbGlzdF9idXR0b257XG4gICAgbWFyZ2luLWxlZnQ6IDEwMjlweDtcblxufVxuXG4ubmVjcm9wc3lkZXRhaWxzX3RhYmxle1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgI2RkZDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RkZDtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNkZGQ7XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI2RkZDtcbn1cblxuIiwiLk5lY3JvcHN5LUhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5idXR0b25fc3R5bGUge1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbi53b3JrbGlzdF9idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMTAyOXB4O1xufVxuXG4ubmVjcm9wc3lkZXRhaWxzX3RhYmxlIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGRkO1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNkZGQ7XG59Il19 */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _assets_pathrequests_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../assets/pathrequests.json */ "./src/assets/pathrequests.json");
var _assets_pathrequests_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../../assets/pathrequests.json */ "./src/assets/pathrequests.json", 1);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");








let ViewNecropsyDetailsPage = class ViewNecropsyDetailsPage {
    constructor(alertCtrl, http, route, router, navCtrl) {
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.route = route;
        this.router = router;
        this.navCtrl = navCtrl;
        this.pathrequests = _assets_pathrequests_json__WEBPACK_IMPORTED_MODULE_3__;
        this.tablestyle = 'bootstrap';
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.pathrequestid = params["pathrequestid"];
            this.procedureid = params["procedureid"];
            this.hnumber = params["hnumber"];
            this.requeststatus = params["requeststatus"];
            this.pathtitle = params["pathtitle"];
            this.primaryinvestigator = params["primaryinvestigator"];
            this.studypathologist = params["studypathologist"];
            this.requestdate = params["requestdate"];
            this.animalqty = params["animalqty"];
            this.marker = params["marker"];
            this.method = params["method"];
            this.fixative = params["fixative"];
            this.handling = params["handling"];
            this.processing = params["processing"];
            console.log(this.pathrequestid);
            console.log(this.procedureid);
            this.loadData();
            this.checkForUndefined();
        });
    }
    switchStyle() {
        if (this.tablestyle == 'dark') {
            this.tablestyle = 'bootstrap';
        }
        else {
            this.tablestyle = 'dark';
        }
    }
    loadData() {
        let data;
        data = this.http.get('http://10.136.137.223:18080/ords/pathlimsreports/v_nec_int_tissue/?q=%7B%22path_request_id%22:%22' + this.pathrequestid + '%22,%22procedure_id%22:' + this.procedureid + '%7D')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((response) => response.items)); // map to use the items key!
        data.subscribe(data => {
            this.items = data;
            console.log(data);
        });
        /* Old Method
        let data:Observable<any>;
        data = this.http.get('assets/v_nec_int_tissue.json');
        data.subscribe(data => {
          this.items = data.filter(item => item.pathrequestid === this.pathrequestid && item.procedureid === this.procedureid);
        });
        */
    }
    checkForUndefined() {
        if (this.marker === undefined) {
            this.marker = "none";
        }
        if (this.method === undefined) {
            this.method = "none";
        }
        if (this.fixative === undefined) {
            this.fixative = "none";
        }
        if (this.handling === undefined) {
            this.handling = "none";
        }
        if (this.processing === undefined) {
            this.processing = "none";
        }
    }
    goToAnimalWorklist() {
        let navigationExtras = {
            queryParams: {
                pathrequestid: this.pathrequestid,
                procedureid: this.procedureid,
                animalqty: this.animalqty,
                hnumber: this.hnumber,
                requeststatus: this.requeststatus,
                pathtitle: this.pathtitle,
                primaryinvestigator: this.primaryinvestigator,
                studypathologist: this.studypathologist,
                marker: this.marker,
                method: this.method,
                fixative: this.fixative,
                handling: this.handling,
                processing: this.processing,
                requestdate: this.requestdate
            }
        };
        this.navCtrl.navigateForward(['animal-worklist'], navigationExtras);
    }
    goToProcedure() {
        let navigationExtras = {
            queryParams: {
                pathrequestid: this.pathrequestid,
                procedureid: this.procedureid,
                hnumber: this.hnumber,
                requeststatus: this.requeststatus,
                pathtitle: this.pathtitle
            }
        };
        console.log(navigationExtras);
        this.navCtrl.navigateBack(['/view-procedure'], navigationExtras);
    }
    doRefresh(event) {
        this.loadData();
        event.target.complete();
    }
};
ViewNecropsyDetailsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
ViewNecropsyDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-necropsy-details',
        template: __webpack_require__(/*! raw-loader!./view-necropsy-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/view-necropsy-details/view-necropsy-details.page.html"),
        styles: [__webpack_require__(/*! ./view-necropsy-details.page.scss */ "./src/app/view-necropsy-details/view-necropsy-details.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
], ViewNecropsyDetailsPage);



/***/ })

}]);
//# sourceMappingURL=view-necropsy-details-view-necropsy-details-module-es2015.js.map