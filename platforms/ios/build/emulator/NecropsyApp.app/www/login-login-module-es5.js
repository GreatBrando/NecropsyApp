(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content no-padding>\n  <div class=\"main\">\n    <ion-card no-margin>\n      <ion-card-content>\n        <ion-row class=\"row\">\n          <div class=\"NecropsyLab-logo\">\n            <img src=\"/assets/Necropsy_Lab_Icon.png\" class=\"img-logo\" />\n          </div>\n        </ion-row>\n        <h1>Necropsy Lab</h1>\n  <form [formGroup]=\"loginForm\">\n        <ion-row>\n          <ion-col>\n            <ion-input clearInput type=\"email\" formControlName=\"email\" placeholder=\"Email\" [(ngModel)]=\"email\" class=\"input\" padding-horizontal\n              clear-input=\"true\"></ion-input>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-input clearInput type=\"password\" formControlName=\"password\"  placeholder=\"Password\" [(ngModel)]=\"password\" class=\"input\"\n              padding-horizontal clear-input=\"true\"></ion-input>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-button expand=\"block\" (click)=\"login()\" color=\"undefined\" class=\"transition\">\n              <strong class=\"white\">\n                Login</strong></ion-button>\n          </ion-col>\n        </ion-row>\n        </form>\n        <ion-row>\n          <ion-col>\n            <ion-text class=\"error\" text-center>{{error}}</ion-text>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-text text-center class=\"block\">Don't have an account yet ?\n              <span class=\"bold\" routerLink=\"/register\" routerDirection=\"forward\">Sign up here</span></ion-text>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
var LoginPageRoutingModule = /** @class */ (function () {
    function LoginPageRoutingModule() {
    }
    LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], LoginPageRoutingModule);
    return LoginPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  height: 83vh;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n@media screen and (min-width: 767px) {\n  ion-card {\n    width: 600px;\n    margin: auto;\n  }\n}\n\nion-card {\n  --background: #fff;\n  box-shadow: none;\n  -webkit-box-shadow: none;\n  overflow: scroll;\n}\n\nh1 {\n  font-family: Helvetica;\n  font-size: 50px;\n  text-align: center;\n  padding-bottom: 20px;\n}\n\nion-button {\n  display: -webkit-box;\n  display: flex;\n  position: center;\n}\n\n.input {\n  background-color: #f0f0f0;\n  border: 1px solid #d2d2d2;\n  border-radius: 9px;\n  font-size: 0.9em !important;\n}\n\n.white {\n  color: white;\n}\n\n.small {\n  font-size: 13px;\n}\n\n.small a {\n  text-decoration: unset !important;\n}\n\n.button-color {\n  background-color: var(--ion-color-mytheme);\n}\n\n.logo {\n  width: 1.25em !important;\n}\n\n.grid {\n  height: 100vh;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.row {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.img-logo {\n  height: 200px;\n  width: 10000px;\n}\n\n.NecropsyLab-logo {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.bold {\n  font-weight: bold;\n}\n\n.block {\n  display: block;\n}\n\n.transition {\n  background: -webkit-gradient(linear, left top, right top, color-stop(14%, #1558a5), color-stop(96%, #167dc2));\n  background: linear-gradient(to right, #1558a5 14%, #167dc2 96%);\n}\n\n.btn-color {\n  color: #1558a5;\n}\n\n.error {\n  color: red;\n  text-align: center;\n  display: block;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmFuY29iMS9OZWNyb3BzeUFwcC9zcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNDRjs7QURDQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLFlBQUE7RUNFRjtBQUNGOztBREFBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUNFRjs7QURBQTtFQUNJLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNHSjs7QUREQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGdCQUFBO0FDSUo7O0FERkE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQ0tGOztBREhBO0VBQ0UsWUFBQTtBQ01GOztBREhBO0VBQ0UsZUFBQTtBQ01GOztBRExFO0VBQ0UsaUNBQUE7QUNPSjs7QURKQTtFQUNFLDBDQUFBO0FDT0Y7O0FETEE7RUFDRSx3QkFBQTtBQ1FGOztBRE5BO0VBQ0UsYUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNTRjs7QURQQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNVRjs7QURSQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FDV0Y7O0FEVEE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ1lGOztBRFRBO0VBQ0UsaUJBQUE7QUNZRjs7QURWQTtFQUNFLGNBQUE7QUNhRjs7QURYQTtFQUNFLDZHQUFBO0VBQUEsK0RBQUE7QUNjRjs7QURaQTtFQUNFLGNBQUE7QUNlRjs7QURiQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ2dCRiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcbiAgaGVpZ2h0OiA4M3ZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2N3B4KSB7XG4gIGlvbi1jYXJkIHtcbiAgICB3aWR0aDogNjAwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG59XG5pb24tY2FyZCB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuaDF7XG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuaW9uLWJ1dHRvbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiBjZW50ZXI7XG59XG4uaW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTAsIDIxMCwgMjEwKTtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XG59XG4ud2hpdGUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bnNldCAhaW1wb3J0YW50O1xuICB9XG59XG4uYnV0dG9uLWNvbG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW15dGhlbWUpO1xufVxuLmxvZ28ge1xuICB3aWR0aDogMS4yNWVtICFpbXBvcnRhbnQ7XG59XG4uZ3JpZCB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmltZy1sb2dvIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDEwMDAwcHg7XG59XG4uTmVjcm9wc3lMYWItbG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmJsb2NrIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4udHJhbnNpdGlvbiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzE1NThhNSAxNCUsICMxNjdkYzIgOTYlKTtcbn1cbi5idG4tY29sb3Ige1xuICBjb2xvcjogIzE1NThhNTtcbn1cbi5lcnJvciB7XG4gIGNvbG9yOiByZWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSIsIi5tYWluIHtcbiAgaGVpZ2h0OiA4M3ZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY3cHgpIHtcbiAgaW9uLWNhcmQge1xuICAgIHdpZHRoOiA2MDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbn1cbmlvbi1jYXJkIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiBub25lO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbmgxIHtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcbiAgZm9udC1zaXplOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLmlucHV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QyZDJkMjtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBmb250LXNpemU6IDAuOWVtICFpbXBvcnRhbnQ7XG59XG5cbi53aGl0ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNtYWxsIHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLnNtYWxsIGEge1xuICB0ZXh0LWRlY29yYXRpb246IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG5cbi5idXR0b24tY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbXl0aGVtZSk7XG59XG5cbi5sb2dvIHtcbiAgd2lkdGg6IDEuMjVlbSAhaW1wb3J0YW50O1xufVxuXG4uZ3JpZCB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pbWctbG9nbyB7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAxMDAwMHB4O1xufVxuXG4uTmVjcm9wc3lMYWItbG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYmxvY2sge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnRyYW5zaXRpb24ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMxNTU4YTUgMTQlLCAjMTY3ZGMyIDk2JSk7XG59XG5cbi5idG4tY29sb3Ige1xuICBjb2xvcjogIzE1NThhNTtcbn1cblxuLmVycm9yIHtcbiAgY29sb3I6IHJlZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginPage = /** @class */ (function () {
    function LoginPage() {
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module-es5.js.map