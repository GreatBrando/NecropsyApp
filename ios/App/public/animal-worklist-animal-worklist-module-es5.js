(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["animal-worklist-animal-worklist-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/animal-worklist/animal-worklist.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/animal-worklist/animal-worklist.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    \n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu =\"main-menu\"></ion-menu-button>\n    </ion-buttons>\n    \n    <ion-buttons>\n      <ion-back-button (click)=\"goToNecropsyDetails()\"></ion-back-button>\n    </ion-buttons>\n\n     <ion-buttons class=\"button_style\" slot=\"end\">\n      <ion-button (click)=\"switchStyle()\">\n        {{ tablestyle }}\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title>\n      Animal Worklist\n    </ion-title>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <div class=\"AnimalWorklist-Header\">\n        <h1> <b>Path Request #:</b> {{pathrequestid}} </h1>\n        <h1> <b>Requested On:</b> {{requestdate}} </h1>\n        <h1> <b>Available Animals List</b> </h1>\n  </div>\n\n  <ngx-datatable  class=\"animalworklist_table\"\n    [ngClass]=\"tablestyle\" \n    [rows]=\"items\"\n    [columnMode]=\"'force'\" \n    [headerHeight]=\"60\" \n    [rowHeight]=\"'auto'\">\n \n    <ngx-datatable-column prop=\"animal_id\" name=\"animal_id\"></ngx-datatable-column>\n    <ngx-datatable-column name=\"technician\">\n    <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n      <ion-select [(ngModel)]=\"row.technician\" placeholder=\"technician\">\n        <ion-select-option value=\"Sean Flanagan\">Sean Flanagan</ion-select-option>\n        <ion-select-option value=\"Jessica Mills\">Jessica Mills</ion-select-option>\n        <ion-select-option value=\"Alison Huynh\">Alison Huynh</ion-select-option>\n        <ion-select-option value=\"Shannon Hambro\">Shannon Hambro</ion-select-option>\n        <ion-select-option value=\"Victor Nunez\">Victor Nunez</ion-select-option>\n        <ion-select-option value=\"Athrreyaa Ram\">Athrreyaa Ram</ion-select-option>\n      </ion-select>\n     </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"workliststatus\"></ngx-datatable-column>\n    <ngx-datatable-column name=\"completion\"></ngx-datatable-column>\n\n\n    <ngx-datatable-column name=\"Actions\" sortable=\"false\" prop=\"name\">\n      <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n        <ion-button size=\"small\" fill=\"outline\" (click)=\"openModalWithData(row)\">Enter Gross Observations</ion-button>\n      </ng-template>\n    </ngx-datatable-column>\n\n  </ngx-datatable>\n  \n<div class=\"AnimalWorklist-Footer\">\n  <ion-button class=\"complete_worklist\" size=\"small\" (click)=\"downloadPdf()\">Complete Worklist</ion-button>\n  <ion-button class=\"complete_worklist\" size=\"small\" (click)=\"createPdf()\">Submit Task-Fullfilments</ion-button>\n</div>\n\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _animal_worklist_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animal-worklist.page */ "./src/app/animal-worklist/animal-worklist.page.ts");




var routes = [
    {
        path: '',
        component: _animal_worklist_page__WEBPACK_IMPORTED_MODULE_3__["AnimalWorklistPage"]
    }
];
var AnimalWorklistPageRoutingModule = /** @class */ (function () {
    function AnimalWorklistPageRoutingModule() {
    }
    AnimalWorklistPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AnimalWorklistPageRoutingModule);
    return AnimalWorklistPageRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _animal_worklist_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./animal-worklist-routing.module */ "./src/app/animal-worklist/animal-worklist-routing.module.ts");
/* harmony import */ var _animal_worklist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./animal-worklist.page */ "./src/app/animal-worklist/animal-worklist.page.ts");
/* harmony import */ var _modals_task_fulfillment_task_fulfillment_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modals/task-fulfillment/task-fulfillment.page */ "./src/app/modals/task-fulfillment/task-fulfillment.page.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm5/swimlane-ngx-datatable.js");









var AnimalWorklistPageModule = /** @class */ (function () {
    function AnimalWorklistPageModule() {
    }
    AnimalWorklistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__["NgxDatatableModule"],
                _animal_worklist_routing_module__WEBPACK_IMPORTED_MODULE_5__["AnimalWorklistPageRoutingModule"]
            ],
            declarations: [_animal_worklist_page__WEBPACK_IMPORTED_MODULE_6__["AnimalWorklistPage"], _modals_task_fulfillment_task_fulfillment_page__WEBPACK_IMPORTED_MODULE_7__["TaskFulfillmentPage"]],
            entryComponents: [_modals_task_fulfillment_task_fulfillment_page__WEBPACK_IMPORTED_MODULE_7__["TaskFulfillmentPage"]]
        })
    ], AnimalWorklistPageModule);
    return AnimalWorklistPageModule;
}());



/***/ }),

/***/ "./src/app/animal-worklist/animal-worklist.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/animal-worklist/animal-worklist.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".AnimalWorklist-Header {\n  position: relative;\n  margin-left: 20px;\n}\n\n.AnimalWorklist-Footer {\n  width: 1173px;\n  margin-top: 5px;\n  display: inline-block;\n}\n\n.button_style {\n  margin-right: 30px;\n  height: 30px;\n  width: 50px;\n}\n\n.animalworklist_table {\n  margin-left: 20px;\n  margin-right: 20px;\n  border-top: 2px solid #ddd;\n  border-bottom: 2px solid #ddd;\n  border-left: 2px solid #ddd;\n  border-right: 2px solid #ddd;\n}\n\n.complete_worklist {\n  float: right;\n  height: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmFuY29iMS9OZWNyb3BzeUFwcC9zcmMvYXBwL2FuaW1hbC13b3JrbGlzdC9hbmltYWwtd29ya2xpc3QucGFnZS5zY3NzIiwic3JjL2FwcC9hbmltYWwtd29ya2xpc3QvYW5pbWFsLXdvcmtsaXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FuaW1hbC13b3JrbGlzdC9hbmltYWwtd29ya2xpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLkFuaW1hbFdvcmtsaXN0LUhlYWRlcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5BbmltYWxXb3JrbGlzdC1Gb290ZXJ7XG4gICAgd2lkdGg6IDExNzNweDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYnV0dG9uX3N0eWxle1xuICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6ICA1MHB4O1xufVxuXG4uYW5pbWFsd29ya2xpc3RfdGFibGV7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZGRkO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGRkO1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2RkZDtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjZGRkO1xufVxuXG4uY29tcGxldGVfd29ya2xpc3R7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGhlaWdodDogMzVweDtcbn1cblxuIiwiLkFuaW1hbFdvcmtsaXN0LUhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5BbmltYWxXb3JrbGlzdC1Gb290ZXIge1xuICB3aWR0aDogMTE3M3B4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmJ1dHRvbl9zdHlsZSB7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogNTBweDtcbn1cblxuLmFuaW1hbHdvcmtsaXN0X3RhYmxlIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGRkO1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNkZGQ7XG59XG5cbi5jb21wbGV0ZV93b3JrbGlzdCB7XG4gIGZsb2F0OiByaWdodDtcbiAgaGVpZ2h0OiAzNXB4O1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _modals_task_fulfillment_task_fulfillment_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modals/task-fulfillment/task-fulfillment.page */ "./src/app/modals/task-fulfillment/task-fulfillment.page.ts");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");











pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7___default.a.pdfMake.vfs;




var Filesystem = _capacitor_core__WEBPACK_IMPORTED_MODULE_10__["Plugins"].Filesystem;
var AnimalWorklistPage = /** @class */ (function () {
    function AnimalWorklistPage(modalController, plt, file, fileOpener, alertCtrl, http, route, router, navCtrl) {
        this.modalController = modalController;
        this.plt = plt;
        this.file = file;
        this.fileOpener = fileOpener;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.route = route;
        this.router = router;
        this.navCtrl = navCtrl;
        this.tablestyle = 'bootstrap';
        this.row = {
            technician: ''
        };
        this.pdfObj = null;
    }
    AnimalWorklistPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.pathrequestid = params["pathrequestid"];
            _this.procedureid = params["procedureid"];
            _this.hnumber = params["hnumber"];
            _this.requeststatus = params["requeststatus"];
            _this.pathtitle = params["pathtitle"];
            _this.primaryinvestigator = params["primaryinvestigator"];
            _this.studypathologist = params["studypathologist"];
            _this.requestdate = params["requestdate"];
            _this.animalqty = params["animalqty"];
            _this.marker = params["marker"];
            _this.method = params["method"];
            _this.fixative = params["fixative"];
            _this.handling = params["handling"];
            _this.processing = params["processing"];
            console.log(_this.hnumber);
            _this.loadData();
        });
    };
    AnimalWorklistPage.prototype.loadData = function () {
        var _this = this;
        var data;
        data = this.http.get('http://10.136.137.223:18080/ords/pathlimsreports/v_nec_int_animal/?q=%7B%22path_request_id%22:%22' + this.pathrequestid + '%22,%22procedure_id%22:' + this.procedureid + '%7D')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (response) { return response.items; })); // map to use the items key!
        data.subscribe(function (data) {
            _this.items = data;
            console.log(data);
        });
        /* Old Method
        let data:Observable<any>;
        data = this.http.get('assets/v_nec_int_animal.json');
        data.subscribe(data => {
          this.items = data.filter(item => item.pathrequestid === this.pathrequestid && item.procedureid === this.procedureid)
          console.log(this.items);
        });
        */
    };
    AnimalWorklistPage.prototype.switchStyle = function () {
        if (this.tablestyle == 'dark') {
            this.tablestyle = 'bootstrap';
        }
        else {
            this.tablestyle = 'dark';
        }
    };
    AnimalWorklistPage.prototype.openModalWithData = function (row) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _modals_task_fulfillment_task_fulfillment_page__WEBPACK_IMPORTED_MODULE_5__["TaskFulfillmentPage"],
                            cssClass: 'my-custom-modal-css',
                            componentProps: {
                                pathrequestid: row.path_request_id,
                                procedureid: row.procedure_id,
                                technician: row.technician,
                                animalid: row.animal_id,
                                species: row.species,
                                strain: row.strain,
                                body: row.body,
                                requestdate: this.requestdate,
                                date: new Date().toLocaleString()
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onWillDismiss().then(function (dataReturned) {
                            _this.workliststatus = dataReturned.data.workliststatus;
                            _this.completion = dataReturned.data.completion;
                            _this.body = dataReturned.data.body;
                            row.workliststatus = _this.workliststatus;
                            row.completion = _this.completion;
                            row.body = _this.body;
                            console.log('Receive: ', _this.workliststatus, _this.completion, _this.body);
                        });
                        return [4 /*yield*/, modal.present().then(function (_) {
                                // triggered when opening the modal
                                console.log('Sending: ', row.pathrequestid, row.procedureid, row.technician, row.animalid, row.species, row.strain);
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AnimalWorklistPage.prototype.enterGrossObservations = function (row) {
        var navigationExtras = {
            queryParams: {
                pathrequestid: row.pathrequestid,
                procedureid: row.procedureid,
                technician: row.technician,
                animalid: row.animalid,
                species: row.species,
                strain: row.strain,
                requestdate: this.requestdate,
                date: new Date().toLocaleString()
            }
        };
        this.navCtrl.navigateForward(['/necropsy-task-fulfillment'], navigationExtras);
    };
    AnimalWorklistPage.prototype.goToNecropsyDetails = function () {
        var navigationExtras = {
            queryParams: {
                pathrequestid: this.pathrequestid,
                hnumber: this.hnumber,
                requeststatus: this.requeststatus,
                pathtitle: this.pathtitle,
                procedureid: this.procedureid,
                animalqty: this.animalqty,
                marker: this.marker,
                method: this.method,
                handling: this.handling,
                fixative: this.method,
                processing: this.processing
            }
        };
        this.navCtrl.navigateBack(['/view-necropsy-details'], navigationExtras);
    };
    AnimalWorklistPage.prototype.createPdf = function () {
        var _this = this;
        var rows = [];
        var animalidlist = [];
        var recordingslist = [];
        rows.push(['animalid', 'technician', 'workliststatus', 'completion', 'Tissue', 'Weight', 'Photo', 'Location', 'Color', 'Size', 'Gross Observations', 'Gross Comments']);
        for (var i = 0; i < this.items.length; i++) {
            var row = this.items[i];
            for (var i_1 = 1; i_1 < row.body.length; i_1++) {
                rows.push([
                    row.animal_id,
                    row.technician,
                    row.workliststatus,
                    row.completion,
                    row.body[i_1][0],
                    row.body[i_1][1],
                    row.body[i_1][2],
                    row.body[i_1][3],
                    row.body[i_1][4],
                    row.body[i_1][5],
                    row.body[i_1][6],
                    row.body[i_1][7]
                ]);
            }
        }
        for (var i = 0; i < this.items.length; i++) {
            var row = this.items[i];
            animalidlist.push([
                row.animal_id
            ]);
        }
        recordingslist.push(['Tissue', 'Weight', 'Photo', 'Location', 'Color', 'Size', 'Gross Observations', 'Gross Comments']);
        for (var i = 0; i < this.items.length; i++) {
            var row = this.items[i];
            for (var i_2 = 1; i_2 < row.body.length; i_2++) {
                recordingslist.push([
                    row.body[i_2][0],
                    row.body[i_2][1],
                    row.body[i_2][2],
                    row.body[i_2][3],
                    row.body[i_2][4],
                    row.body[i_2][5],
                    row.body[i_2][6],
                    row.body[i_2][7]
                ]);
            }
        }
        var docDefinition = {
            pageOrientation: 'landscape',
            content: [
                { text: 'Necropsy Task Fulfillment', style: 'header' },
                { text: 'Protocol: ' + this.pathrequestid + '\n', alignment: 'left' },
                { text: 'Histology #: ' + this.hnumber, alignment: 'left' },
                { text: 'Title: ' + this.pathtitle, alignment: 'left' },
                { text: 'Pathologist: ' + this.studypathologist, alignment: 'left' },
                { text: 'Investigator: ' + this.primaryinvestigator, alignment: 'left' },
                { text: 'Animal IDs: ' + animalidlist, alignment: 'left' },
                { text: new Date().toLocaleString(), alignment: 'right' },
                { table: {
                        body: rows
                    }
                },
            ],
            styles: {
                header: {
                    fontSize: 18,
                    bold: true,
                },
                subheader: {
                    fontSize: 14,
                    bold: true,
                    margin: [0, 15, 0, 0]
                },
                story: {
                    italic: true,
                    alignment: 'center',
                    width: '50%',
                }
            }
        };
        this.pdfObj = pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6___default.a.createPdf(docDefinition);
        if (this.plt.is('cordova')) {
            this.pdfObj.getBase64(function (data) {
                _this.pdfBase64 = data;
                console.log(_this.pdfBase64);
            });
        }
    };
    AnimalWorklistPage.prototype.downloadPdf = function () {
        var _this = this;
        if (this.plt.is('cordova')) {
            // Save the PDF to the device
            var fileName_1 = 'taskfulfillment.pdf';
            try {
                Filesystem.writeFile({
                    path: fileName_1,
                    data: this.pdfBase64,
                    directory: _capacitor_core__WEBPACK_IMPORTED_MODULE_10__["FilesystemDirectory"].Documents
                    // encoding: FilesystemEncoding.UTF8
                }).then(function (writeFileResult) {
                    Filesystem.getUri({
                        directory: _capacitor_core__WEBPACK_IMPORTED_MODULE_10__["FilesystemDirectory"].Documents,
                        path: fileName_1
                    }).then(function (getUriResult) {
                        var path = getUriResult.uri;
                        _this.fileOpener.open(path, 'application/pdf')
                            .then(function () { return console.log('File is opened'); })
                            .catch(function (error) { return console.log('Error openening file', error); });
                        _this.navCtrl.navigateForward(['/path-request']);
                    }, function (error) {
                        console.log(error);
                    });
                });
            }
            catch (error) {
                console.error('Unable to write file', error);
            }
        }
        else {
            // On a browser simply use download
            this.pdfObj.download();
            this.navCtrl.navigateForward(['/path-request']);
        }
    };
    AnimalWorklistPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"] },
        { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_9__["FileOpener"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
    ]; };
    AnimalWorklistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-animal-worklist',
            template: __webpack_require__(/*! raw-loader!./animal-worklist.page.html */ "./node_modules/raw-loader/index.js!./src/app/animal-worklist/animal-worklist.page.html"),
            styles: [__webpack_require__(/*! ./animal-worklist.page.scss */ "./src/app/animal-worklist/animal-worklist.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"], _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_9__["FileOpener"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], AnimalWorklistPage);
    return AnimalWorklistPage;
}());



/***/ })

}]);
//# sourceMappingURL=animal-worklist-animal-worklist-module-es5.js.map