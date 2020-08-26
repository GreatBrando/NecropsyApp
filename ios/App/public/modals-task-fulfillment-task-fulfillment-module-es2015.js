(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modals-task-fulfillment-task-fulfillment-module"],{

/***/ "./src/app/modals/task-fulfillment/task-fulfillment-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modals/task-fulfillment/task-fulfillment-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: TaskFulfillmentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskFulfillmentPageRoutingModule", function() { return TaskFulfillmentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _task_fulfillment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task-fulfillment.page */ "./src/app/modals/task-fulfillment/task-fulfillment.page.ts");




const routes = [
    {
        path: '',
        component: _task_fulfillment_page__WEBPACK_IMPORTED_MODULE_3__["TaskFulfillmentPage"]
    }
];
let TaskFulfillmentPageRoutingModule = class TaskFulfillmentPageRoutingModule {
};
TaskFulfillmentPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TaskFulfillmentPageRoutingModule);



/***/ }),

/***/ "./src/app/modals/task-fulfillment/task-fulfillment.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/modals/task-fulfillment/task-fulfillment.module.ts ***!
  \********************************************************************/
/*! exports provided: TaskFulfillmentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskFulfillmentPageModule", function() { return TaskFulfillmentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _task_fulfillment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task-fulfillment-routing.module */ "./src/app/modals/task-fulfillment/task-fulfillment-routing.module.ts");
/* harmony import */ var _task_fulfillment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task-fulfillment.page */ "./src/app/modals/task-fulfillment/task-fulfillment.page.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js");








let TaskFulfillmentPageModule = class TaskFulfillmentPageModule {
};
TaskFulfillmentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _task_fulfillment_routing_module__WEBPACK_IMPORTED_MODULE_5__["TaskFulfillmentPageRoutingModule"]
        ],
        declarations: [_task_fulfillment_page__WEBPACK_IMPORTED_MODULE_6__["TaskFulfillmentPage"]]
    })
], TaskFulfillmentPageModule);



/***/ })

}]);
//# sourceMappingURL=modals-task-fulfillment-task-fulfillment-module-es2015.js.map