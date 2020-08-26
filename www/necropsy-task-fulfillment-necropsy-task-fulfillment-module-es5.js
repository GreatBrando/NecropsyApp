(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["necropsy-task-fulfillment-necropsy-task-fulfillment-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/necropsy-task-fulfillment/necropsy-task-fulfillment.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/necropsy-task-fulfillment/necropsy-task-fulfillment.page.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/animal-worklist\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-buttons class=\"button_style\" slot=\"end\">\n      <ion-button (click)=\"switchStyle()\">\n        {{ tablestyle }}\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title>\n      Necropsy Task Fulfillment\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"NecropsyTaskFulfillment-Header\">\n    <h1>\n      <b>Path Request #:</b>\n      {{ pathrequestid }}\n      <b>Group/Animal:</b>\n      {{ animalid }}\n      <b>Species:</b>\n      {{ species }}\n    </h1>\n    <h1>\n      <b>Strain:</b>\n      {{ strain }}\n      <b>Necropsy Work Date:</b>\n      {{ date }}\n    </h1>\n    <h1>\n      <b>Technician:</b>\n      {{ technician }}\n    </h1>\n    <h1><b>Enter Gross Observations</b></h1>\n  </div>\n\n  <ngx-datatable>\n    <ngx-datatable-column></ngx-datatable-column>\n\n    <ngx-datatable-column>\n      <ng-template>\n        <ion-input\n          [(ngModel)]=\"row.weight\"\n          placeholder=\"Enter Weight\"\n        ></ion-input>\n      </ng-template>\n    </ngx-datatable-column>\n\n    <ngx-datatable-column>\n      <ng-template>\n        <ion-button size=\"small\" fill=\"clear\" (click)=\"takePicture()\">\n          {{ row.picturetext }}\n        </ion-button>\n      </ng-template>\n    </ngx-datatable-column>\n\n    <ngx-datatable-column>\n      <ng-template>\n        <ion-select\n          multiple=\"true\"\n          [(ngModel)]=\"row.location\"\n          placeholder=\"Locations\"\n        >\n          <ion-select-option value=\"abdonimal cavity\">\n            Abdonimal Cavity\n          </ion-select-option>\n          <ion-select-option value=\"anterior\">Anterior</ion-select-option>\n          <ion-select-option value=\"area\">Area</ion-select-option>\n          <ion-select-option value=\"bilateral\">Bilateral</ion-select-option>\n          <ion-select-option value=\"both\">Both</ion-select-option>\n          <ion-select-option value=\"cranial\">Cranial</ion-select-option>\n          <ion-select-option value=\"caudal\">Caudal</ion-select-option>\n          <ion-select-option value=\"dorsal\">Dorsal</ion-select-option>\n          <ion-select-option value=\"exterior\">Exterior</ion-select-option>\n          <ion-select-option value=\"glandular\">Glandular</ion-select-option>\n          <ion-select-option value=\"interior\">Interior</ion-select-option>\n          <ion-select-option value=\"l\">L</ion-select-option>\n          <ion-select-option value=\"margins\">Margins</ion-select-option>\n          <ion-select-option value=\"non glandular\">\n            Non-glandular\n          </ion-select-option>\n          <ion-select-option value=\"not present\">Not Present</ion-select-option>\n          <ion-select-option value=\"palmar\">Palmar</ion-select-option>\n          <ion-select-option value=\"plantar\">Plantar</ion-select-option>\n          <ion-select-option value=\"posterior\">Posterior</ion-select-option>\n          <ion-select-option value=\"r\">R</ion-select-option>\n          <ion-select-option value=\"thoracic cavity\">\n            Thoracic Cavity\n          </ion-select-option>\n          <ion-select-option value=\"unilateral\">Unilateral</ion-select-option>\n          <ion-select-option value=\"ventral\">Ventral</ion-select-option>\n          <ion-select-option value=\"apical lobe\">Apical Lobe</ion-select-option>\n          <ion-select-option value=\"azygous lobe\">\n            Azygous Lobe\n          </ion-select-option>\n          <ion-select-option value=\"cardiac lobe\">\n            Cardiac Lobe\n          </ion-select-option>\n          <ion-select-option value=\"diaphramatic lobe\">\n            Diaphramatic Lobe\n          </ion-select-option>\n          <ion-select-option value=\"left lobe\">Left Lobe</ion-select-option>\n          <ion-select-option value=\"median lobe\">Median Lobe</ion-select-option>\n          <ion-select-option value=\"right lobe\">Right Lobe</ion-select-option>\n          <ion-select-option value=\"caudate lobe\">\n            Caudate Lobe\n          </ion-select-option>\n        </ion-select>\n      </ng-template>\n    </ngx-datatable-column>\n\n    <ngx-datatable-column>\n      <ng-template>\n        <ion-select [(ngModel)]=\"row.color\" placeholder=\"Color\">\n          <ion-select-option value=\"black\">Black</ion-select-option>\n          <ion-select-option value=\"brown\">Brown</ion-select-option>\n          <ion-select-option value=\"clear\">Clear</ion-select-option>\n          <ion-select-option value=\"dark red\">Dark Red</ion-select-option>\n          <ion-select-option value=\"green\">Green</ion-select-option>\n          <ion-select-option value=\"mottled\">Mottled</ion-select-option>\n          <ion-select-option value=\"pale\">Pale</ion-select-option>\n          <ion-select-option value=\"pink\">Pink</ion-select-option>\n          <ion-select-option value=\"red\">Red</ion-select-option>\n          <ion-select-option value=\"tan\">Tan</ion-select-option>\n          <ion-select-option value=\"yellow\">Yellow</ion-select-option>\n          <ion-select-option value=\"white\">White</ion-select-option>\n        </ion-select>\n      </ng-template>\n    </ngx-datatable-column>\n\n    <ngx-datatable-column>\n      <ng-template>\n        <ion-select [(ngModel)]=\"row.size\" placeholder=\"Size\">\n          <ion-select-option value=\"enlarged\">Enlarged</ion-select-option>\n          <ion-select-option value=\"slightly enlarged\">\n            Slightly Enlarged\n          </ion-select-option>\n          <ion-select-option value=\"extremely enlarged\">\n            Extremely Enlarged\n          </ion-select-option>\n          <ion-select-option value=\"extremely small\">\n            Extremely Small\n          </ion-select-option>\n          <ion-select-option value=\"multifocal\">Multifocal</ion-select-option>\n          <ion-select-option value=\"pinpoint\">Pinpoint</ion-select-option>\n          <ion-select-option value=\"small\">Small</ion-select-option>\n          <ion-select-option value=\"undistinguishable\">\n            Undistinguishable\n          </ion-select-option>\n          <ion-select-option value=\"various\">Various</ion-select-option>\n        </ion-select>\n      </ng-template>\n    </ngx-datatable-column>\n\n    <ngx-datatable-column>\n      <ng-template>\n        <ion-select\n          multiple=\"true\"\n          [(ngModel)]=\"row.observations\"\n          placeholder=\"Observations\"\n        >\n          <ion-select-option value=\"adhered\">Adhered</ion-select-option>\n          <ion-select-option value=\"air filled\">Air Filled</ion-select-option>\n          <ion-select-option value=\"atrophied\">Atrophied</ion-select-option>\n          <ion-select-option value=\"bedding\">Bedding</ion-select-option>\n          <ion-select-option value=\"cut\">Cut</ion-select-option>\n          <ion-select-option value=\"cystic\">Cystic</ion-select-option>\n          <ion-select-option value=\"damaged\">Damaged</ion-select-option>\n          <ion-select-option value=\"dilated pelvis\">\n            Dilated Pelvis\n          </ion-select-option>\n          <ion-select-option value=\"dry\">Dry</ion-select-option>\n          <ion-select-option value=\"edematous\">Edematous</ion-select-option>\n          <ion-select-option value=\"empty\">Empty</ion-select-option>\n          <ion-select-option value=\"fatty\">Fatty</ion-select-option>\n          <ion-select-option value=\"fluid filled\">\n            Fluid Filled\n          </ion-select-option>\n          <ion-select-option value=\"gelatinous\">Gelatinous</ion-select-option>\n          <ion-select-option value=\"granular\">Granular</ion-select-option>\n          <ion-select-option value=\"hard\">Hard</ion-select-option>\n          <ion-select-option value=\"hard/dry\">Hard/Dry</ion-select-option>\n          <ion-select-option value=\"hydrocephalus\">\n            Hydrocephalus\n          </ion-select-option>\n          <ion-select-option value=\"inflamed\">Inflamed</ion-select-option>\n          <ion-select-option value=\"lost\">Lost</ion-select-option>\n          <ion-select-option value=\"malocclusion\">\n            Malocclusion\n          </ion-select-option>\n          <ion-select-option value=\"mass\">Mass</ion-select-option>\n          <ion-select-option value=\"milk\">Milk</ion-select-option>\n          <ion-select-option value=\"missing\">Missing</ion-select-option>\n          <ion-select-option value=\"moribund\">Moribund</ion-select-option>\n          <ion-select-option value=\"mucosa\">Mucosa</ion-select-option>\n          <ion-select-option value=\"not inflated\">\n            Not Inflated\n          </ion-select-option>\n          <ion-select-option value=\"not present\">Not Present</ion-select-option>\n          <ion-select-option value=\"overly distented\">\n            Overly Distented\n          </ion-select-option>\n          <ion-select-option value=\"prolapsed\">Prolapsed</ion-select-option>\n          <ion-select-option value=\"scabby\">Scabby</ion-select-option>\n          <ion-select-option value=\"scruffy\">Scruffy</ion-select-option>\n          <ion-select-option value=\"serosa\">Serosa</ion-select-option>\n          <ion-select-option value=\"slightly distented\">\n            Slightly Distented\n          </ion-select-option>\n          <ion-select-option value=\"slightly granular\">\n            Slightly Granular\n          </ion-select-option>\n          <ion-select-option value=\"striations\">Striations</ion-select-option>\n          <ion-select-option value=\"test material\">\n            Test Material\n          </ion-select-option>\n          <ion-select-option value=\"thickened\">Thickened</ion-select-option>\n          <ion-select-option value=\"thin\">Thin</ion-select-option>\n          <ion-select-option value=\"ulcerated\">Ulcerated</ion-select-option>\n          <ion-select-option value=\"undistinguishable\">\n            Undistinguishable\n          </ion-select-option>\n          <ion-select-option value=\"watery\">Watery</ion-select-option>\n        </ion-select>\n      </ng-template>\n    </ngx-datatable-column>\n\n    <ngx-datatable-column>\n      <ng-template>\n        <ion-input\n          [(ngModel)]=\"row.grosscomments\"\n          placeholder=\"Enter Gross Comment\"\n        ></ion-input>\n      </ng-template>\n    </ngx-datatable-column>\n  </ngx-datatable>\n\n  <div class=\"NecropsyTaskFulfillment-Footer\">\n    <ion-button\n      class=\"nogrosslesions_button\"\n      size=\"small\"\n      [disabled]=\"!pdfObj\"\n      (click)=\"downloadPdf()\"\n    >\n      Download PDF Report\n    </ion-button>\n    <ion-button class=\"submit_button\" size=\"small\" (click)=\"createPdf()\">\n      No Gross Lesions\n    </ion-button>\n    <ion-button class=\"submit_button\" size=\"small\" (click)=\"createPdf()\">\n      Submit Observations\n    </ion-button>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/necropsy-task-fulfillment/necropsy-task-fulfillment-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/necropsy-task-fulfillment/necropsy-task-fulfillment-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: NecropsyTaskFulfillmentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NecropsyTaskFulfillmentPageRoutingModule", function() { return NecropsyTaskFulfillmentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _necropsy_task_fulfillment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./necropsy-task-fulfillment.page */ "./src/app/necropsy-task-fulfillment/necropsy-task-fulfillment.page.ts");




var routes = [
    {
        path: '',
        component: _necropsy_task_fulfillment_page__WEBPACK_IMPORTED_MODULE_3__["NecropsyTaskFulfillmentPage"]
    }
];
var NecropsyTaskFulfillmentPageRoutingModule = /** @class */ (function () {
    function NecropsyTaskFulfillmentPageRoutingModule() {
    }
    NecropsyTaskFulfillmentPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], NecropsyTaskFulfillmentPageRoutingModule);
    return NecropsyTaskFulfillmentPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/necropsy-task-fulfillment/necropsy-task-fulfillment.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/necropsy-task-fulfillment/necropsy-task-fulfillment.module.ts ***!
  \*******************************************************************************/
/*! exports provided: NecropsyTaskFulfillmentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NecropsyTaskFulfillmentPageModule", function() { return NecropsyTaskFulfillmentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _necropsy_task_fulfillment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./necropsy-task-fulfillment-routing.module */ "./src/app/necropsy-task-fulfillment/necropsy-task-fulfillment-routing.module.ts");
/* harmony import */ var _necropsy_task_fulfillment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./necropsy-task-fulfillment.page */ "./src/app/necropsy-task-fulfillment/necropsy-task-fulfillment.page.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm5/swimlane-ngx-datatable.js");








var NecropsyTaskFulfillmentPageModule = /** @class */ (function () {
    function NecropsyTaskFulfillmentPageModule() {
    }
    NecropsyTaskFulfillmentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"],
                _necropsy_task_fulfillment_routing_module__WEBPACK_IMPORTED_MODULE_5__["NecropsyTaskFulfillmentPageRoutingModule"]
            ],
            declarations: [_necropsy_task_fulfillment_page__WEBPACK_IMPORTED_MODULE_6__["NecropsyTaskFulfillmentPage"]]
        })
    ], NecropsyTaskFulfillmentPageModule);
    return NecropsyTaskFulfillmentPageModule;
}());



/***/ }),

/***/ "./src/app/necropsy-task-fulfillment/necropsy-task-fulfillment.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/necropsy-task-fulfillment/necropsy-task-fulfillment.page.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".NecropsyTaskFulfillment-Header {\n  position: relative;\n  margin-left: 20px;\n}\n\n.NecropsyTaskFulfillment-Footer {\n  width: 1178px;\n  margin-top: 5px;\n  display: inline-block;\n}\n\n.button_style {\n  margin-right: 30px;\n  height: 30px;\n  width: 50px;\n}\n\n.necropsytask_table {\n  margin-left: 20px;\n  margin-right: 20px;\n  border-top: 2px solid #ddd;\n  border-bottom: 2px solid #ddd;\n  border-left: 2px solid #ddd;\n  border-right: 2px solid #ddd;\n}\n\n.nogrosslesions_button {\n  float: right;\n  height: 35px;\n}\n\n.submit_button {\n  float: right;\n  height: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmFuY29iMS9OZWNyb3BzeUFwcC9zcmMvYXBwL25lY3JvcHN5LXRhc2stZnVsZmlsbG1lbnQvbmVjcm9wc3ktdGFzay1mdWxmaWxsbWVudC5wYWdlLnNjc3MiLCJzcmMvYXBwL25lY3JvcHN5LXRhc2stZnVsZmlsbG1lbnQvbmVjcm9wc3ktdGFzay1mdWxmaWxsbWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbmVjcm9wc3ktdGFzay1mdWxmaWxsbWVudC9uZWNyb3BzeS10YXNrLWZ1bGZpbGxtZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5OZWNyb3BzeVRhc2tGdWxmaWxsbWVudC1IZWFkZXJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4uTmVjcm9wc3lUYXNrRnVsZmlsbG1lbnQtRm9vdGVye1xuICAgIHdpZHRoOiAxMTc4cHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmJ1dHRvbl9zdHlsZXtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAgNTBweDtcbn1cblxuLm5lY3JvcHN5dGFza190YWJsZXtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNkZGQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkZGQ7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZGRkO1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNkZGQ7XG59XG5cbi5ub2dyb3NzbGVzaW9uc19idXR0b257XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGhlaWdodDogMzVweDtcbn1cblxuLnN1Ym1pdF9idXR0b257XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGhlaWdodDogMzVweDtcbn1cblxuIiwiLk5lY3JvcHN5VGFza0Z1bGZpbGxtZW50LUhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5OZWNyb3BzeVRhc2tGdWxmaWxsbWVudC1Gb290ZXIge1xuICB3aWR0aDogMTE3OHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmJ1dHRvbl9zdHlsZSB7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogNTBweDtcbn1cblxuLm5lY3JvcHN5dGFza190YWJsZSB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZGRkO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RkZDtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZGRkO1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjZGRkO1xufVxuXG4ubm9ncm9zc2xlc2lvbnNfYnV0dG9uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBoZWlnaHQ6IDM1cHg7XG59XG5cbi5zdWJtaXRfYnV0dG9uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBoZWlnaHQ6IDM1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/necropsy-task-fulfillment/necropsy-task-fulfillment.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/necropsy-task-fulfillment/necropsy-task-fulfillment.page.ts ***!
  \*****************************************************************************/
/*! exports provided: NecropsyTaskFulfillmentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NecropsyTaskFulfillmentPage", function() { return NecropsyTaskFulfillmentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _assets_pathrequests_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../assets/pathrequests.json */ "./src/assets/pathrequests.json");
var _assets_pathrequests_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../../assets/pathrequests.json */ "./src/assets/pathrequests.json", 1);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");










pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7___default.a.pdfMake.vfs;




var Camera = _capacitor_core__WEBPACK_IMPORTED_MODULE_10__["Plugins"].Camera, Filesystem = _capacitor_core__WEBPACK_IMPORTED_MODULE_10__["Plugins"].Filesystem;
var NecropsyTaskFulfillmentPage = /** @class */ (function () {
    function NecropsyTaskFulfillmentPage(plt, file, fileOpener, alertCtrl, sanitizer, route, router, navCtrl, http) {
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
            location: '',
            color: '',
            size: '',
            observations: '',
            grosscomments: ''
        };
        this.pdfObj = null;
        this.pathrequests = _assets_pathrequests_json__WEBPACK_IMPORTED_MODULE_4__;
        this.tablestyle = 'bootstrap';
        this.picturetext = "Take Picture";
        this.workliststatus = "Completed";
    }
    NecropsyTaskFulfillmentPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.pathrequestid = params["pathrequestid"];
            _this.procedureid = params["procedureid"];
            _this.requestdate = params["requestdate"];
            _this.date = params["date"];
            _this.technician = params["technician"];
            _this.animalid = params["animalid"];
            _this.species = params["species"];
            _this.strain = params["strain"];
            _this.requestdate = params["requestdate"];
            _this.loadData();
        });
    };
    NecropsyTaskFulfillmentPage.prototype.loadData = function () {
        var _this = this;
        var data;
        data = this.http.get('assets/v_nec_int_tissue.json');
        data.subscribe(function (data) {
            _this.items = data.filter(function (item) { return item.pathrequestid === _this.pathrequestid && item.procedureid === _this.procedureid; });
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
    NecropsyTaskFulfillmentPage.prototype.switchStyle = function () {
        if (this.tablestyle == 'dark') {
            this.tablestyle = 'bootstrap';
        }
        else {
            this.tablestyle = 'dark';
        }
    };
    NecropsyTaskFulfillmentPage.prototype.getWeighCellClass = function (_a) {
        var row = _a.row;
        var isTrue = row.weighflg == 'Y';
        return {
            'true-row': isTrue,
            'false-row': !isTrue
        };
    };
    NecropsyTaskFulfillmentPage.prototype.getPhotoCellClass = function (_a) {
        var row = _a.row;
        var isTrue = row.photoflg == 'Y';
        return {
            'true-row': isTrue,
            'false-row': !isTrue
        };
    };
    NecropsyTaskFulfillmentPage.prototype.takePicture = function () {
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
                        this.picturetext = 'Picture Taken';
                        this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image.dataUrl);
                        return [2 /*return*/];
                }
            });
        });
    };
    NecropsyTaskFulfillmentPage.prototype.createPdf = function () {
        var _this = this;
        var rows = [];
        rows.push(['Tissue', 'Weight', 'Photo', 'Location', 'Color', 'Size', 'Gross Observations', 'Gross Comments']);
        for (var i = 0; i < this.items.length; i++) {
            var row = this.items[i];
            rows.push([
                row.tissue,
                row.weight,
                this.picturetext,
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
        this.pdfObj = pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6___default.a.createPdf(docDefinition);
        if (this.plt.is('cordova')) {
            this.pdfObj.getBase64(function (data) {
                _this.pdfBase64 = data;
                console.log(_this.pdfBase64);
            });
        }
    };
    NecropsyTaskFulfillmentPage.prototype.downloadPdf = function () {
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
                        _this.goToAnimalWorklist();
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
            this.goToAnimalWorklist();
        }
    };
    NecropsyTaskFulfillmentPage.prototype.goToAnimalWorklist = function () {
        var navigationExtras = {
            queryParams: {
                pathrequestid: this.pathrequestid,
                procedureid: this.procedureid,
                technician: this.technician,
                requestdate: this.requestdate,
                workliststatus: this.workliststatus,
                completion: new Date().toLocaleString()
            }
        };
        this.navCtrl.navigateForward(['animal-worklist'], navigationExtras);
    };
    NecropsyTaskFulfillmentPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"] },
        { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_9__["FileOpener"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
    ]; };
    NecropsyTaskFulfillmentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-necropsy-task-fulfillment',
            template: __webpack_require__(/*! raw-loader!./necropsy-task-fulfillment.page.html */ "./node_modules/raw-loader/index.js!./src/app/necropsy-task-fulfillment/necropsy-task-fulfillment.page.html"),
            styles: [__webpack_require__(/*! ./necropsy-task-fulfillment.page.scss */ "./src/app/necropsy-task-fulfillment/necropsy-task-fulfillment.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"], _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_9__["FileOpener"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], NecropsyTaskFulfillmentPage);
    return NecropsyTaskFulfillmentPage;
}());



/***/ })

}]);
//# sourceMappingURL=necropsy-task-fulfillment-necropsy-task-fulfillment-module-es5.js.map