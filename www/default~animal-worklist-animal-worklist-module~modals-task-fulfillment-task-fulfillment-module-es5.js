(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~animal-worklist-animal-worklist-module~modals-task-fulfillment-task-fulfillment-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modals/task-fulfillment/task-fulfillment.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modals/task-fulfillment/task-fulfillment.page.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"closeModalInProgress()\">\n         Close\n      </ion-button>\n    </ion-buttons>\n\n     <ion-buttons class=\"button_style\" slot=\"end\">\n      <ion-button (click)=\"switchStyle()\">\n        {{ tablestyle }}\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title>\n      Necropsy Task Fulfillment\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"NecropsyTaskFulfillment-Header\">\n      <h1> <b>Path Request #:</b> {{pathrequestid}} <b>&nbsp;Group/Animal:</b> {{animalid}} <b>&nbsp;Species:</b> {{species}} </h1>\n      <h1> <b>Strain:</b> {{strain}} </h1>\n      <h1> <b>Necropsy Work Date:</b> {{date}} <b>&nbsp;Technician:</b> {{technician}} </h1>\n      <h1> <b>Enter Gross Observations</b> </h1>\n  </div>\n\n  <ngx-datatable  class=\"necropsytask_table\"\n    [ngClass]=\"tablestyle\" \n    [rows]=\"items\"\n    [columnMode]=\"'force'\" \n    [headerHeight]=\"60\" \n    [rowHeight]=\"'75'\">\n    \n    <ngx-datatable-column name=\"tissue\"></ngx-datatable-column>\n\n    <ngx-datatable-column name=\"Weight\" [cellClass]=\"getWeighCellClass\" sortable=\"false\" prop=\"name\">\n      <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n        <ion-input [(ngModel)]=\"row.weight\" placeholder=\"Enter Weight\"></ion-input>\n      </ng-template>\n    </ngx-datatable-column>\n    \n    <ngx-datatable-column name=\"Photo\" [cellClass]=\"getPhotoCellClass\" sortable=\"false\" prop=\"name\">\n      <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n        <ion-button size=\"small\" fill=\"clear\" (click)=\"takePicture()\">{{picturetext}}</ion-button>\n      </ng-template>\n    </ngx-datatable-column>\n\n    <ngx-datatable-column name=\"Locations\" sortable=\"false\" prop=\"name\">\n     <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n      <ion-select [(ngModel)]=\"row.location\" placeholder=\"Locations\">\n        <ion-select-option value=\"abdonimal cavity\">Abdonimal Cavity</ion-select-option>\n        <ion-select-option value=\"anterior\">Anterior</ion-select-option>\n        <ion-select-option value=\"area\">Area</ion-select-option>\n        <ion-select-option value=\"bilateral\">Bilateral</ion-select-option>\n        <ion-select-option value=\"both\">Both</ion-select-option>\n        <ion-select-option value=\"cranial\">Cranial</ion-select-option>\n        <ion-select-option value=\"caudal\">Caudal</ion-select-option>\n        <ion-select-option value=\"dorsal\">Dorsal</ion-select-option>\n        <ion-select-option value=\"exterior\">Exterior</ion-select-option>\n        <ion-select-option value=\"glandular\">Glandular</ion-select-option>\n        <ion-select-option value=\"interior\">Interior</ion-select-option>\n        <ion-select-option value=\"l\">L</ion-select-option>\n        <ion-select-option value=\"margins\">Margins</ion-select-option>\n        <ion-select-option value=\"non glandular\">Non-glandular</ion-select-option>\n        <ion-select-option value=\"not present\">Not Present</ion-select-option>\n        <ion-select-option value=\"palmar\">Palmar</ion-select-option>\n        <ion-select-option value=\"plantar\">Plantar</ion-select-option>\n        <ion-select-option value=\"posterior\">Posterior</ion-select-option>\n        <ion-select-option value=\"r\">R</ion-select-option>\n        <ion-select-option value=\"thoracic cavity\">Thoracic Cavity</ion-select-option>\n        <ion-select-option value=\"unilateral\">Unilateral</ion-select-option>\n        <ion-select-option value=\"ventral\">Ventral</ion-select-option>\n        <ion-select-option value=\"apical lobe\">Apical Lobe</ion-select-option>\n        <ion-select-option value=\"azygous lobe\">Azygous Lobe</ion-select-option>\n        <ion-select-option value=\"cardiac lobe\">Cardiac Lobe</ion-select-option>\n        <ion-select-option value=\"diaphramatic lobe\">Diaphramatic Lobe</ion-select-option>\n        <ion-select-option value=\"left lobe\">Left Lobe</ion-select-option>\n        <ion-select-option value=\"median lobe\">Median Lobe</ion-select-option>\n        <ion-select-option value=\"right lobe\">Right Lobe</ion-select-option>\n        <ion-select-option value=\"caudate lobe\">Caudate Lobe</ion-select-option>\n      </ion-select>\n     </ng-template>\n    </ngx-datatable-column>\n\n    <ngx-datatable-column name=\"Color\" sortable=\"false\" prop=\"name\">\n      <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n        <ion-select [(ngModel)]=\"row.color\" placeholder=\"Color\">\n          <ion-select-option value=\"black\">Black</ion-select-option>\n          <ion-select-option value=\"brown\">Brown</ion-select-option>\n          <ion-select-option value=\"clear\">Clear</ion-select-option>\n          <ion-select-option value=\"dark red\">Dark Red</ion-select-option>\n          <ion-select-option value=\"green\">Green</ion-select-option>\n          <ion-select-option value=\"mottled\">Mottled</ion-select-option>\n          <ion-select-option value=\"pale\">Pale</ion-select-option>\n          <ion-select-option value=\"pink\">Pink</ion-select-option>\n          <ion-select-option value=\"red\">Red</ion-select-option>\n          <ion-select-option value=\"tan\">Tan</ion-select-option>\n          <ion-select-option value=\"yellow\">Yellow</ion-select-option>\n          <ion-select-option value=\"white\">White</ion-select-option>\n        </ion-select>\n       </ng-template>\n    </ngx-datatable-column>\n\n    <ngx-datatable-column name=\"Size\">\n      <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n        <ion-select [(ngModel)]=\"row.size\" placeholder=\"Size\">\n          <ion-select-option value=\"enlarged\">Enlarged</ion-select-option>\n          <ion-select-option value=\"slightly enlarged\">Slightly Enlarged</ion-select-option>\n          <ion-select-option value=\"extremely enlarged\">Extremely Enlarged</ion-select-option>\n          <ion-select-option value=\"extremely small\">Extremely Small</ion-select-option>\n          <ion-select-option value=\"multifocal\">Multifocal</ion-select-option>\n          <ion-select-option value=\"pinpoint\">Pinpoint</ion-select-option>\n          <ion-select-option value=\"small\">Small</ion-select-option>\n          <ion-select-option value=\"undistinguishable\">Undistinguishable</ion-select-option>\n          <ion-select-option value=\"various\">Various</ion-select-option>\n        </ion-select>\n       </ng-template>\n    </ngx-datatable-column>\n   \n    <ngx-datatable-column name=\"Gross Observations\" sortable=\"false\" prop=\"name\">\n      <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n        <ion-select [(ngModel)]=\"row.observations\" placeholder=\"Observations\">\n          <ion-select-option value=\"adhered\">Adhered</ion-select-option>\n          <ion-select-option value=\"air filled\">Air Filled</ion-select-option>\n          <ion-select-option value=\"atrophied\">Atrophied</ion-select-option>\n          <ion-select-option value=\"bedding\">Bedding</ion-select-option>\n          <ion-select-option value=\"cut\">Cut</ion-select-option>\n          <ion-select-option value=\"cystic\">Cystic</ion-select-option>\n          <ion-select-option value=\"damaged\">Damaged</ion-select-option>\n          <ion-select-option value=\"dilated pelvis\">Dilated Pelvis</ion-select-option>\n          <ion-select-option value=\"dry\">Dry</ion-select-option>\n          <ion-select-option value=\"edematous\">Edematous</ion-select-option>\n          <ion-select-option value=\"empty\">Empty</ion-select-option>\n          <ion-select-option value=\"fatty\">Fatty</ion-select-option>\n          <ion-select-option value=\"fluid filled\">Fluid Filled</ion-select-option>\n          <ion-select-option value=\"gelatinous\">Gelatinous</ion-select-option>\n          <ion-select-option value=\"granular\">Granular</ion-select-option>\n          <ion-select-option value=\"hard\">Hard</ion-select-option>\n          <ion-select-option value=\"hard/dry\">Hard/Dry</ion-select-option>\n          <ion-select-option value=\"hydrocephalus\">Hydrocephalus</ion-select-option>\n          <ion-select-option value=\"inflamed\">Inflamed</ion-select-option>\n          <ion-select-option value=\"lost\">Lost</ion-select-option>\n          <ion-select-option value=\"malocclusion\">Malocclusion</ion-select-option>\n          <ion-select-option value=\"mass\">Mass</ion-select-option>\n          <ion-select-option value=\"milk\">Milk</ion-select-option>\n          <ion-select-option value=\"missing\">Missing</ion-select-option>\n          <ion-select-option value=\"moribund\">Moribund</ion-select-option>\n          <ion-select-option value=\"mucosa\">Mucosa</ion-select-option>\n          <ion-select-option value=\"not inflated\">Not Inflated</ion-select-option>\n          <ion-select-option value=\"not present\">Not Present</ion-select-option>\n          <ion-select-option value=\"overly distented\">Overly Distented</ion-select-option>\n          <ion-select-option value=\"prolapsed\">Prolapsed</ion-select-option>\n          <ion-select-option value=\"scabby\">Scabby</ion-select-option>\n          <ion-select-option value=\"scruffy\">Scruffy</ion-select-option>\n          <ion-select-option value=\"serosa\">Serosa</ion-select-option>\n          <ion-select-option value=\"slightly distented\">Slightly Distented</ion-select-option>\n          <ion-select-option value=\"slightly granular\">Slightly Granular</ion-select-option>\n          <ion-select-option value=\"striations\">Striations</ion-select-option>\n          <ion-select-option value=\"test material\">Test Material</ion-select-option>\n          <ion-select-option value=\"thickened\">Thickened</ion-select-option>\n          <ion-select-option value=\"thin\">Thin</ion-select-option>\n          <ion-select-option value=\"ulcerated\">Ulcerated</ion-select-option>\n          <ion-select-option value=\"undistinguishable\">Undistinguishable</ion-select-option>\n          <ion-select-option value=\"watery\">Watery</ion-select-option>\n        </ion-select>      \n      </ng-template>\n    </ngx-datatable-column>\n\n    <ngx-datatable-column name=\"Gross Comments\" sortable=\"false\" prop=\"name\">\n      <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n        <ion-input [(ngModel)]=\"row.grosscomments\" placeholder=\"Enter Gross Comment\"></ion-input>\n      </ng-template>\n    </ngx-datatable-column>\n\n  </ngx-datatable>\n\n  <div class=\"NecropsyTaskFulfillment-Footer\">\n    <ion-button class=\"submit_button\" size=\"small\" (click)=\"closeModal()\">No Gross Lesions</ion-button>\n    <ion-button class=\"submit_button\" size=\"small\" (click)=\"closeModal()\">Submit Observations</ion-button>\n  </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/modals/task-fulfillment/task-fulfillment.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/modals/task-fulfillment/task-fulfillment.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".NecropsyTaskFulfillment-Header {\n  position: relative;\n  margin-left: 20px;\n}\n\n.NecropsyTaskFulfillment-Footer {\n  width: 1178px;\n  margin-top: 5px;\n  display: inline-block;\n}\n\n.button_style {\n  margin-right: 30px;\n  height: 30px;\n  width: 50px;\n}\n\n.necropsytask_table {\n  margin-left: 20px;\n  margin-right: 20px;\n  border-top: 2px solid #ddd;\n  border-bottom: 2px solid #ddd;\n  border-left: 2px solid #ddd;\n  border-right: 2px solid #ddd;\n}\n\n.nogrosslesions_button {\n  float: right;\n  height: 35px;\n}\n\n.submit_button {\n  float: right;\n  height: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmFuY29iMS9OZWNyb3BzeUFwcC9zcmMvYXBwL21vZGFscy90YXNrLWZ1bGZpbGxtZW50L3Rhc2stZnVsZmlsbG1lbnQucGFnZS5zY3NzIiwic3JjL2FwcC9tb2RhbHMvdGFzay1mdWxmaWxsbWVudC90YXNrLWZ1bGZpbGxtZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2RhbHMvdGFzay1mdWxmaWxsbWVudC90YXNrLWZ1bGZpbGxtZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5OZWNyb3BzeVRhc2tGdWxmaWxsbWVudC1IZWFkZXJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4uTmVjcm9wc3lUYXNrRnVsZmlsbG1lbnQtRm9vdGVye1xuICAgIHdpZHRoOiAxMTc4cHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmJ1dHRvbl9zdHlsZXtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAgNTBweDtcbn1cblxuLm5lY3JvcHN5dGFza190YWJsZXtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNkZGQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkZGQ7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZGRkO1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNkZGQ7XG59XG5cbi5ub2dyb3NzbGVzaW9uc19idXR0b257XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGhlaWdodDogMzVweDtcbn1cblxuLnN1Ym1pdF9idXR0b257XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGhlaWdodDogMzVweDtcbn1cblxuIiwiLk5lY3JvcHN5VGFza0Z1bGZpbGxtZW50LUhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5OZWNyb3BzeVRhc2tGdWxmaWxsbWVudC1Gb290ZXIge1xuICB3aWR0aDogMTE3OHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmJ1dHRvbl9zdHlsZSB7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogNTBweDtcbn1cblxuLm5lY3JvcHN5dGFza190YWJsZSB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZGRkO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RkZDtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZGRkO1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjZGRkO1xufVxuXG4ubm9ncm9zc2xlc2lvbnNfYnV0dG9uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBoZWlnaHQ6IDM1cHg7XG59XG5cbi5zdWJtaXRfYnV0dG9uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBoZWlnaHQ6IDM1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/modals/task-fulfillment/task-fulfillment.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/modals/task-fulfillment/task-fulfillment.page.ts ***!
  \******************************************************************/
/*! exports provided: TaskFulfillmentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskFulfillmentPage", function() { return TaskFulfillmentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");









pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_6___default.a.pdfMake.vfs;






var Camera = _capacitor_core__WEBPACK_IMPORTED_MODULE_10__["Plugins"].Camera, Filesystem = _capacitor_core__WEBPACK_IMPORTED_MODULE_10__["Plugins"].Filesystem;
var TaskFulfillmentPage = /** @class */ (function () {
    function TaskFulfillmentPage(modalController, navParams, plt, file, fileOpener, alertCtrl, sanitizer, route, router, navCtrl, http) {
        this.modalController = modalController;
        this.navParams = navParams;
        this.plt = plt;
        this.file = file;
        this.fileOpener = fileOpener;
        this.alertCtrl = alertCtrl;
        this.sanitizer = sanitizer;
        this.route = route;
        this.router = router;
        this.navCtrl = navCtrl;
        this.http = http;
        this.row = {
            tissue: '',
            weight: '',
            picturetext: '',
            location: '',
            color: '',
            size: '',
            observations: '',
            grosscomments: ''
        };
        this.pdfObj = null;
        this.tablestyle = 'bootstrap';
        this.picturetext = "Take Picture";
    }
    TaskFulfillmentPage.prototype.ngOnInit = function () {
        this.pathrequestid = this.navParams.get("pathrequestid");
        this.procedureid = this.navParams.get("procedureid");
        this.requestdate = this.navParams.get("requestdate");
        this.date = this.navParams.get("date");
        this.technician = this.navParams.get("technician");
        this.animalid = this.navParams.get("animalid");
        this.species = this.navParams.get("species");
        this.strain = this.navParams.get("strain");
        this.requestdate = this.navParams.get("requestdate");
        this.loadData();
    };
    TaskFulfillmentPage.prototype.loadData = function () {
        var _this = this;
        var data;
        data = this.http.get('http://10.136.137.223:18080/ords/pathlimsreports/v_nec_int_tissue/?q=%7B%22path_request_id%22:%22' + this.pathrequestid + '%22,%22procedure_id%22:' + this.procedureid + '%7D')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (response) { return response.items; })); // map to use the items key!
        data.subscribe(function (data) {
            _this.items = data;
            _this.items = _this.items.map(function (item) {
                if (!item.weight || item.weight == undefined) {
                    item.weight = '';
                }
                if (!item.location || item.location == undefined) {
                    item.location = '';
                }
                if (!item.color || item.color == undefined) {
                    item.color = '';
                }
                if (!item.size || item.size == undefined) {
                    item.size = '';
                }
                if (!item.picturetext || item.picturetext == undefined) {
                    item.picturetext = 'Take Picture';
                }
                if (!item.observations || item.observations == undefined) {
                    item.observations = '';
                }
                if (!item.grosscomments || item.grosscomments == undefined) {
                    item.grosscomments = '';
                }
                return item;
            });
        });
    };
    TaskFulfillmentPage.prototype.switchStyle = function () {
        if (this.tablestyle == 'dark') {
            this.tablestyle = 'bootstrap';
        }
        else {
            this.tablestyle = 'dark';
        }
    };
    TaskFulfillmentPage.prototype.getWeighCellClass = function (_a) {
        var row = _a.row;
        var isTrue = row.weigh_flg == 'Y';
        return {
            'true-row': isTrue,
            'false-row': !isTrue
        };
    };
    TaskFulfillmentPage.prototype.getPhotoCellClass = function (_a) {
        var row = _a.row;
        var isTrue = row.photo_flg == 'Y';
        return {
            'true-row': isTrue,
            'false-row': !isTrue
        };
    };
    TaskFulfillmentPage.prototype.takePicture = function (row) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var image;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Camera.getPhoto({
                            quality: 100,
                            allowEditing: true,
                            resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_10__["CameraResultType"].Uri,
                            source: _capacitor_core__WEBPACK_IMPORTED_MODULE_10__["CameraSource"].Camera,
                            saveToGallery: true,
                            promptLabelHeader: ''
                        })];
                    case 1:
                        image = _a.sent();
                        row.picturetext = "Picture Taken";
                        this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image.dataUrl);
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskFulfillmentPage.prototype.createPdf = function () {
        var _this = this;
        var rows = [];
        rows.push(['Tissue', 'Weight', 'Photo', 'Location', 'Color', 'Size', 'Gross Observations', 'Gross Comments']);
        for (var i = 0; i < this.items.length; i++) {
            var row = this.items[i];
            rows.push([
                row.tissue,
                row.weight,
                row.picturetext,
                row.location,
                row.color,
                row.size,
                row.observations,
                row.grosscomments
            ]);
        }
        var docDefinition = {
            content: [
                { text: 'Necropsy Task Fulfillment', style: 'header' },
                { text: 'Path Request #: ' + this.pathrequestid, alignment: 'left' },
                { text: 'Technician: ' + this.technician, alignment: 'left' },
                { text: 'Group/Animal: ' + this.animalid, alignment: 'left' },
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
        this.pdfObj = pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5___default.a.createPdf(docDefinition);
        if (this.plt.is('cordova')) {
            this.pdfObj.getBase64(function (data) {
                _this.pdfBase64 = data;
                console.log(_this.pdfBase64);
            });
        }
    };
    TaskFulfillmentPage.prototype.downloadPdf = function () {
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
                        _this.closeModal();
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
            this.closeModal();
        }
    };
    TaskFulfillmentPage.prototype.closeModalInProgress = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.workliststatus = "In-Progress";
                        return [4 /*yield*/, this.modalController.dismiss({
                                workliststatus: this.workliststatus
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskFulfillmentPage.prototype.closeModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var rows, i, row;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rows = [];
                        rows.push(['Tissue', 'Weight', 'Photo', 'Location', 'Color', 'Size', 'Gross Observations', 'Gross Comments']);
                        for (i = 0; i < this.items.length; i++) {
                            row = this.items[i];
                            rows.push([
                                row.tissue,
                                row.weight,
                                row.picturetext,
                                row.location,
                                row.color,
                                row.size,
                                row.observations,
                                row.grosscomments
                            ]);
                        }
                        this.workliststatus = "Completed";
                        return [4 /*yield*/, this.modalController.dismiss({
                                workliststatus: this.workliststatus,
                                body: rows,
                                completion: new Date().toLocaleString()
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskFulfillmentPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"] },
        { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_8__["FileOpener"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
    ]; };
    TaskFulfillmentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task-fulfillment',
            template: __webpack_require__(/*! raw-loader!./task-fulfillment.page.html */ "./node_modules/raw-loader/index.js!./src/app/modals/task-fulfillment/task-fulfillment.page.html"),
            styles: [__webpack_require__(/*! ./task-fulfillment.page.scss */ "./src/app/modals/task-fulfillment/task-fulfillment.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"], _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_8__["FileOpener"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], TaskFulfillmentPage);
    return TaskFulfillmentPage;
}());



/***/ })

}]);
//# sourceMappingURL=default~animal-worklist-animal-worklist-module~modals-task-fulfillment-task-fulfillment-module-es5.js.map