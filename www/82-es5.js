(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[82],{

/***/ "./node_modules/@ionic/pwa-elements/dist/esm-es5/pwa-camera.entry.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ionic/pwa-elements/dist/esm-es5/pwa-camera.entry.js ***!
  \***************************************************************************/
/*! exports provided: pwa_camera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pwa_camera", function() { return CameraPWA; });
/* harmony import */ var _core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-8e8be6a7.js */ "./node_modules/@ionic/pwa-elements/dist/esm-es5/core-8e8be6a7.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

/**
 * MediaStream ImageCapture polyfill
 *
 * @license
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ImageCapture = window.ImageCapture;
if (typeof ImageCapture === 'undefined') {
    ImageCapture = /** @class */ (function () {
        /**
         * TODO https://www.w3.org/TR/image-capture/#constructors
         *
         * @param {MediaStreamTrack} videoStreamTrack - A MediaStreamTrack of the 'video' kind
         */
        function ImageCapture(videoStreamTrack) {
            var _this = this;
            if (videoStreamTrack.kind !== 'video')
                throw new DOMException('NotSupportedError');
            this._videoStreamTrack = videoStreamTrack;
            if (!('readyState' in this._videoStreamTrack)) {
                // Polyfill for Firefox
                this._videoStreamTrack.readyState = 'live';
            }
            // MediaStream constructor not available until Chrome 55 - https://www.chromestatus.com/feature/5912172546752512
            this._previewStream = new MediaStream([videoStreamTrack]);
            this.videoElement = document.createElement('video');
            this.videoElementPlaying = new Promise(function (resolve) {
                _this.videoElement.addEventListener('playing', resolve);
            });
            if (HTMLMediaElement) {
                this.videoElement.srcObject = this._previewStream; // Safari 11 doesn't allow use of createObjectURL for MediaStream
            }
            else {
                this.videoElement.src = URL.createObjectURL(this._previewStream);
            }
            this.videoElement.muted = true;
            this.videoElement.setAttribute('playsinline', ''); // Required by Safari on iOS 11. See https://webkit.org/blog/6784
            this.videoElement.play();
            this.canvasElement = document.createElement('canvas');
            // TODO Firefox has https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas
            this.canvas2dContext = this.canvasElement.getContext('2d');
        }
        Object.defineProperty(ImageCapture.prototype, "videoStreamTrack", {
            /**
             * https://w3c.github.io/mediacapture-image/index.html#dom-imagecapture-videostreamtrack
             * @return {MediaStreamTrack} The MediaStreamTrack passed into the constructor
             */
            get: function () {
                return this._videoStreamTrack;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Implements https://www.w3.org/TR/image-capture/#dom-imagecapture-getphotocapabilities
         * @return {Promise<PhotoCapabilities>} Fulfilled promise with
         * [PhotoCapabilities](https://www.w3.org/TR/image-capture/#idl-def-photocapabilities)
         * object on success, rejected promise on failure
         */
        ImageCapture.prototype.getPhotoCapabilities = function () {
            return new Promise(function executorGPC(resolve, reject) {
                // TODO see https://github.com/w3c/mediacapture-image/issues/97
                var MediaSettingsRange = {
                    current: 0, min: 0, max: 0,
                };
                resolve({
                    exposureCompensation: MediaSettingsRange,
                    exposureMode: 'none',
                    fillLightMode: ['none'],
                    focusMode: 'none',
                    imageHeight: MediaSettingsRange,
                    imageWidth: MediaSettingsRange,
                    iso: MediaSettingsRange,
                    redEyeReduction: false,
                    whiteBalanceMode: 'none',
                    zoom: MediaSettingsRange,
                });
                reject(new DOMException('OperationError'));
            });
        };
        /**
         * Implements https://www.w3.org/TR/image-capture/#dom-imagecapture-setoptions
         * @param {Object} photoSettings - Photo settings dictionary, https://www.w3.org/TR/image-capture/#idl-def-photosettings
         * @return {Promise<void>} Fulfilled promise on success, rejected promise on failure
         */
        ImageCapture.prototype.setOptions = function (_photoSettings) {
            if (_photoSettings === void 0) { _photoSettings = {}; }
            return new Promise(function executorSO(_resolve, _reject) {
                // TODO
            });
        };
        /**
         * TODO
         * Implements https://www.w3.org/TR/image-capture/#dom-imagecapture-takephoto
         * @return {Promise<Blob>} Fulfilled promise with [Blob](https://www.w3.org/TR/FileAPI/#blob)
         * argument on success; rejected promise on failure
         */
        ImageCapture.prototype.takePhoto = function () {
            var self = this;
            return new Promise(function executorTP(resolve, reject) {
                // `If the readyState of the MediaStreamTrack provided in the constructor is not live,
                // return a promise rejected with a new DOMException whose name is "InvalidStateError".`
                if (self._videoStreamTrack.readyState !== 'live') {
                    return reject(new DOMException('InvalidStateError'));
                }
                self.videoElementPlaying.then(function () {
                    try {
                        self.canvasElement.width = self.videoElement.videoWidth;
                        self.canvasElement.height = self.videoElement.videoHeight;
                        self.canvas2dContext.drawImage(self.videoElement, 0, 0);
                        self.canvasElement.toBlob(resolve);
                    }
                    catch (error) {
                        reject(new DOMException('UnknownError'));
                    }
                });
            });
        };
        /**
         * Implements https://www.w3.org/TR/image-capture/#dom-imagecapture-grabframe
         * @return {Promise<ImageBitmap>} Fulfilled promise with
         * [ImageBitmap](https://www.w3.org/TR/html51/webappapis.html#webappapis-images)
         * argument on success; rejected promise on failure
         */
        ImageCapture.prototype.grabFrame = function () {
            var self = this;
            return new Promise(function executorGF(resolve, reject) {
                // `If the readyState of the MediaStreamTrack provided in the constructor is not live,
                // return a promise rejected with a new DOMException whose name is "InvalidStateError".`
                if (self._videoStreamTrack.readyState !== 'live') {
                    return reject(new DOMException('InvalidStateError'));
                }
                self.videoElementPlaying.then(function () {
                    try {
                        self.canvasElement.width = self.videoElement.videoWidth;
                        self.canvasElement.height = self.videoElement.videoHeight;
                        self.canvas2dContext.drawImage(self.videoElement, 0, 0);
                        // TODO polyfill https://developer.mozilla.org/en-US/docs/Web/API/ImageBitmapFactories/createImageBitmap for IE
                        resolve(window.createImageBitmap(self.canvasElement));
                    }
                    catch (error) {
                        reject(new DOMException('UnknownError'));
                    }
                });
            });
        };
        return ImageCapture;
    }());
}
window.ImageCapture = ImageCapture;
var CameraPWA = /** @class */ (function () {
    function class_1(hostRef) {
        Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.facingMode = 'user';
        this.showShutterOverlay = false;
        this.flashIndex = 0;
        // Whether the device has multiple cameras (front/back)
        this.hasMultipleCameras = false;
        // Whether the device has flash support
        this.hasFlash = false;
        // Flash modes for camera
        this.flashModes = [];
        // Current flash mode
        this.flashMode = 'off';
        this.isServer = Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "isServer");
    }
    class_1.prototype.componentDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.isServer) {
                            return [2 /*return*/];
                        }
                        this.defaultConstraints = {
                            video: {
                                facingMode: this.facingMode
                            }
                        };
                        // Figure out how many cameras we have
                        return [4 /*yield*/, this.queryDevices()];
                    case 1:
                        // Figure out how many cameras we have
                        _a.sent();
                        // Initialize the camera
                        return [4 /*yield*/, this.initCamera()];
                    case 2:
                        // Initialize the camera
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.componentDidUnload = function () {
        this.stopStream();
        this.photoSrc && URL.revokeObjectURL(this.photoSrc);
    };
    class_1.prototype.hasImageCapture = function () {
        return 'ImageCapture' in window;
    };
    /**
     * Query the list of connected devices and figure out how many video inputs we have.
     */
    class_1.prototype.queryDevices = function () {
        return __awaiter(this, void 0, void 0, function () {
            var devices, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, navigator.mediaDevices.enumerateDevices()];
                    case 1:
                        devices = _a.sent();
                        this.hasMultipleCameras = devices.filter(function (d) { return d.kind == 'videoinput'; }).length > 1;
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        this.onPhoto(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.initCamera = function (constraints) {
        return __awaiter(this, void 0, void 0, function () {
            var stream, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!constraints) {
                            constraints = this.defaultConstraints;
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, navigator.mediaDevices.getUserMedia(Object.assign({ video: true, audio: false }, constraints))];
                    case 2:
                        stream = _a.sent();
                        this.initStream(stream);
                        return [3 /*break*/, 4];
                    case 3:
                        e_2 = _a.sent();
                        this.onPhoto(e_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.initStream = function (stream) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.stream = stream;
                        this.videoElement.srcObject = stream;
                        console.log(stream.getVideoTracks()[0]);
                        if (!this.hasImageCapture()) return [3 /*break*/, 2];
                        this.imageCapture = new window.ImageCapture(stream.getVideoTracks()[0]);
                        // console.log(stream.getTracks()[0].getCapabilities());
                        return [4 /*yield*/, this.initPhotoCapabilities(this.imageCapture)];
                    case 1:
                        // console.log(stream.getTracks()[0].getCapabilities());
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        // Always re-render
                        this.el.forceUpdate();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.initPhotoCapabilities = function (imageCapture) {
        return __awaiter(this, void 0, void 0, function () {
            var c;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, imageCapture.getPhotoCapabilities()];
                    case 1:
                        c = _a.sent();
                        if (c.fillLightMode.length > 1) {
                            this.flashModes = c.fillLightMode.map(function (m) { return m; });
                            // Try to recall the current flash mode
                            if (this.flashMode) {
                                this.flashMode = this.flashModes[this.flashModes.indexOf(this.flashMode)] || 'off';
                                this.flashIndex = this.flashModes.indexOf(this.flashMode) || 0;
                            }
                            else {
                                this.flashIndex = 0;
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.stopStream = function () {
        this.stream && this.stream.getTracks().forEach(function (track) { return track.stop(); });
    };
    class_1.prototype.capture = function () {
        return __awaiter(this, void 0, void 0, function () {
            var photo, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.hasImageCapture()) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.imageCapture.takePhoto({
                                fillLightMode: this.flashModes.length > 1 ? this.flashMode : undefined
                            })];
                    case 2:
                        photo = _a.sent();
                        return [4 /*yield*/, this.flashScreen()];
                    case 3:
                        _a.sent();
                        this.promptAccept(photo);
                        return [3 /*break*/, 5];
                    case 4:
                        e_3 = _a.sent();
                        console.error('Unable to take photo!', e_3);
                        return [3 /*break*/, 5];
                    case 5:
                        this.stopStream();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.promptAccept = function (photo) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.photo = photo;
                this.photoSrc = URL.createObjectURL(photo);
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.rotate = function () {
        this.stopStream();
        var track = this.stream && this.stream.getTracks()[0];
        if (!track) {
            return;
        }
        var c = track.getConstraints();
        var facingMode = c.facingMode;
        if (!facingMode) {
            var c_1 = track.getCapabilities();
            facingMode = c_1.facingMode[0];
        }
        if (facingMode === 'environment') {
            this.initCamera({
                video: {
                    facingMode: 'user'
                }
            });
        }
        else {
            this.initCamera({
                video: {
                    facingMode: 'environment'
                }
            });
        }
    };
    class_1.prototype.setFlashMode = function (mode) {
        console.log('New flash mode: ', mode);
        this.flashMode = mode;
    };
    class_1.prototype.cycleFlash = function () {
        if (this.flashModes.length > 0) {
            this.flashIndex = (this.flashIndex + 1) % this.flashModes.length;
            this.setFlashMode(this.flashModes[this.flashIndex]);
        }
    };
    class_1.prototype.flashScreen = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, _reject) {
                        _this.showShutterOverlay = true;
                        setTimeout(function () {
                            _this.showShutterOverlay = false;
                            resolve();
                        }, 100);
                    })];
            });
        });
    };
    class_1.prototype.handleShutterClick = function (_e) {
        console.log();
        this.capture();
    };
    class_1.prototype.handleRotateClick = function (_e) {
        this.rotate();
    };
    class_1.prototype.handleClose = function (_e) {
        this.onPhoto && this.onPhoto(null);
    };
    class_1.prototype.handleFlashClick = function (_e) {
        this.cycleFlash();
    };
    class_1.prototype.handleCancelPhoto = function (_e) {
        this.photo = null;
        this.initCamera();
    };
    class_1.prototype.handleAcceptPhoto = function (_e) {
        this.onPhoto && this.onPhoto(this.photo);
    };
    class_1.prototype.iconExit = function () {
        return "data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' enable-background='new 0 0 512 512' xml:space='preserve'%3E%3Cg id='Icon_5_'%3E%3Cg%3E%3Cpath fill='%23FFFFFF' d='M402.2,134L378,109.8c-1.6-1.6-4.1-1.6-5.7,0L258.8,223.4c-1.6,1.6-4.1,1.6-5.7,0L139.6,109.8 c-1.6-1.6-4.1-1.6-5.7,0L109.8,134c-1.6,1.6-1.6,4.1,0,5.7l113.5,113.5c1.6,1.6,1.6,4.1,0,5.7L109.8,372.4c-1.6,1.6-1.6,4.1,0,5.7 l24.1,24.1c1.6,1.6,4.1,1.6,5.7,0l113.5-113.5c1.6-1.6,4.1-1.6,5.7,0l113.5,113.5c1.6,1.6,4.1,1.6,5.7,0l24.1-24.1 c1.6-1.6,1.6-4.1,0-5.7L288.6,258.8c-1.6-1.6-1.6-4.1,0-5.7l113.5-113.5C403.7,138.1,403.7,135.5,402.2,134z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";
    };
    class_1.prototype.iconConfirm = function () {
        return "data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' enable-background='new 0 0 512 512' xml:space='preserve'%3E%3Ccircle fill='%232CD865' cx='256' cy='256' r='256'/%3E%3Cg id='Icon_1_'%3E%3Cg%3E%3Cg%3E%3Cpath fill='%23FFFFFF' d='M208,301.4l-55.4-55.5c-1.5-1.5-4-1.6-5.6-0.1l-23.4,22.3c-1.6,1.6-1.7,4.1-0.1,5.7l81.6,81.4 c3.1,3.1,8.2,3.1,11.3,0l171.8-171.7c1.6-1.6,1.6-4.2-0.1-5.7l-23.4-22.3c-1.6-1.5-4.1-1.5-5.6,0.1L213.7,301.4 C212.1,303,209.6,303,208,301.4z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E";
    };
    class_1.prototype.iconReverseCamera = function () {
        return "data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' enable-background='new 0 0 512 512' xml:space='preserve'%3E%3Cg%3E%3Cpath fill='%23FFFFFF' d='M352,0H160C72,0,0,72,0,160v192c0,88,72,160,160,160h192c88,0,160-72,160-160V160C512,72,440,0,352,0z M356.7,365.8l-3.7,3.3c-27,23.2-61.4,35.9-96.8,35.9c-72.4,0-135.8-54.7-147-125.6c-0.3-1.9-2-3.3-3.9-3.3H64 c-3.3,0-5.2-3.8-3.2-6.4l61.1-81.4c1.6-2.1,4.7-2.1,6.4-0.1l63.3,81.4c2,2.6,0.2,6.5-3.2,6.5h-40.6c-2.5,0-4.5,2.4-3.9,4.8 c11.5,51.5,59.2,90.6,112.4,90.6c26.4,0,51.8-9.7,73.7-27.9l3.1-2.5c1.6-1.3,3.9-1.1,5.3,0.3l18.5,18.6 C358.5,361.6,358.4,364.3,356.7,365.8z M451.4,245.6l-61,83.5c-1.6,2.2-4.8,2.2-6.4,0.1l-63.3-83.3c-2-2.6-0.1-6.4,3.2-6.4h40.8 c2.5,0,4.4-2.3,3.9-4.8c-5.1-24.2-17.8-46.5-36.5-63.7c-21.2-19.4-48.2-30.1-76-30.1c-26.5,0-52.6,9.7-73.7,27.3l-3.1,2.5 c-1.6,1.3-3.9,1.2-5.4-0.3l-18.5-18.5c-1.6-1.6-1.5-4.3,0.2-5.9l3.5-3.1c27-23.2,61.4-35.9,96.8-35.9c38,0,73.9,13.7,101.2,38.7 c23.2,21.1,40.3,55.2,45.7,90.1c0.3,1.9,1.9,3.4,3.9,3.4h41.3C451.4,239.2,453.3,243,451.4,245.6z'/%3E%3C/g%3E%3C/svg%3E";
    };
    class_1.prototype.iconRetake = function () {
        return "data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' enable-background='new 0 0 512 512' xml:space='preserve'%3E%3Ccircle fill='%23727A87' cx='256' cy='256' r='256'/%3E%3Cg id='Icon_5_'%3E%3Cg%3E%3Cpath fill='%23FFFFFF' d='M394.2,142L370,117.8c-1.6-1.6-4.1-1.6-5.7,0L258.8,223.4c-1.6,1.6-4.1,1.6-5.7,0L147.6,117.8 c-1.6-1.6-4.1-1.6-5.7,0L117.8,142c-1.6,1.6-1.6,4.1,0,5.7l105.5,105.5c1.6,1.6,1.6,4.1,0,5.7L117.8,364.4c-1.6,1.6-1.6,4.1,0,5.7 l24.1,24.1c1.6,1.6,4.1,1.6,5.7,0l105.5-105.5c1.6-1.6,4.1-1.6,5.7,0l105.5,105.5c1.6,1.6,4.1,1.6,5.7,0l24.1-24.1 c1.6-1.6,1.6-4.1,0-5.7L288.6,258.8c-1.6-1.6-1.6-4.1,0-5.7l105.5-105.5C395.7,146.1,395.7,143.5,394.2,142z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";
    };
    class_1.prototype.iconFlashOff = function () {
        return "data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23FFFFFF;%7D%0A%3C/style%3E%3Cg%3E%3Cpath class='st0' d='M498,483.7L42.3,28L14,56.4l149.8,149.8L91,293.8c-2.5,3-0.1,7.2,3.9,7.2h143.9c1.6,0,2.7,1.3,2.4,2.7 L197.6,507c-1,4.4,5.8,6.9,8.9,3.2l118.6-142.8L469.6,512L498,483.7z'/%3E%3Cpath class='st0' d='M449,218.2c2.5-3,0.1-7.2-3.9-7.2H301.2c-1.6,0-2.7-1.3-2.4-2.7L342.4,5c1-4.4-5.8-6.9-8.9-3.2L214.9,144.6 l161.3,161.3L449,218.2z'/%3E%3C/g%3E%3C/svg%3E";
    };
    class_1.prototype.iconFlashOn = function () {
        return "data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23FFFFFF;%7D%0A%3C/style%3E%3Cpath class='st0' d='M287.2,211c-1.6,0-2.7-1.3-2.4-2.7L328.4,5c1-4.4-5.8-6.9-8.9-3.2L77,293.8c-2.5,3-0.1,7.2,3.9,7.2h143.9 c1.6,0,2.7,1.3,2.4,2.7L183.6,507c-1,4.4,5.8,6.9,8.9,3.2l242.5-292c2.5-3,0.1-7.2-3.9-7.2L287.2,211L287.2,211z'/%3E%3C/svg%3E";
    };
    class_1.prototype.iconFlashAuto = function () {
        return "data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23FFFFFF;%7D%0A%3C/style%3E%3Cpath class='st0' d='M287.2,211c-1.6,0-2.7-1.3-2.4-2.7L328.4,5c1-4.4-5.8-6.9-8.9-3.2L77,293.8c-2.5,3-0.1,7.2,3.9,7.2h143.9 c1.6,0,2.7,1.3,2.4,2.7L183.6,507c-1,4.4,5.8,6.9,8.9,3.2l242.5-292c2.5-3,0.1-7.2-3.9-7.2L287.2,211L287.2,211z'/%3E%3Cg%3E%3Cpath class='st0' d='M321.3,186l74-186H438l74,186h-43.5l-11.9-32.5h-80.9l-12,32.5H321.3z M415.8,47.9l-27.2,70.7h54.9l-27.2-70.7 H415.8z'/%3E%3C/g%3E%3C/svg%3E";
    };
    class_1.prototype.render = function () {
        var _this = this;
        var videoStreamStyle = this.facingMode == "user" ? { transform: 'scaleX(-1)' } : {};
        return (Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "camera-wrapper" }, Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "camera-header" }, Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("section", { class: "items" }, Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "item close", onClick: function (e) { return _this.handleClose(e); } }, Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", { src: this.iconExit() })), Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "item flash", onClick: function (e) { return _this.handleFlashClick(e); } }, this.flashModes.length > 0 && (Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, this.flashMode == 'off' ? Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", { src: this.iconFlashOff() }) : '', this.flashMode == 'auto' ? Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", { src: this.iconFlashAuto() }) : '', this.flashMode == 'flash' ? Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", { src: this.iconFlashOn() }) : ''))))), this.photo ? (Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "accept" }, Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "accept-image", style: { backgroundImage: "url(" + this.photoSrc + ")" } }))) : (Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "camera-video" }, this.showShutterOverlay && (Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "shutter-overlay" })), this.hasImageCapture() ? (Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("video", { style: videoStreamStyle, ref: function (el) { return _this.videoElement = el; }, autoplay: true, playsinline: true })) : (Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("canvas", { ref: function (el) { return _this.canvasElement = el; }, width: "100%", height: "100%" })), Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("canvas", { class: "offscreen-image-render", ref: function (e) { return _this.offscreenCanvas = e; }, width: "100%", height: "100%" }))), Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "camera-footer" }, !this.photo ? ([
            Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "shutter", onClick: function (e) { return _this.handleShutterClick(e); } }, Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "shutter-button" })),
            Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "rotate", onClick: function (e) { return _this.handleRotateClick(e); } }, Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", { src: this.iconReverseCamera() })),
        ]) : (Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("section", { class: "items" }, Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "item accept-cancel", onClick: function (e) { return _this.handleCancelPhoto(e); } }, Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", { src: this.iconRetake() })), Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "item accept-use", onClick: function (e) { return _this.handleAcceptPhoto(e); } }, Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", { src: this.iconConfirm() })))))));
    };
    Object.defineProperty(class_1, "assetsDirs", {
        get: function () { return ["icons"]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return Object(_core_8e8be6a7_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return ":host{--header-height:4em;--footer-height:9em;--shutter-size:6em;--icon-size-header:1.5em;--icon-size-footer:2.5em;--margin-size-header:1.5em;--margin-size-footer:2.0em;font-family:-apple-system,BlinkMacSystemFont,“Segoe UI”,“Roboto”,“Droid Sans”,“Helvetica Neue”,sans-serif;display:block}.items,:host{width:100%;height:100%}.items{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.items .item{-ms-flex:1;flex:1;text-align:center}.items .item:first-child{text-align:left}.items .item:last-child{text-align:right}.camera-wrapper{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%}.camera-header{color:#fff;background-color:#000;height:var(--header-height)}.camera-header .items{padding:var(--margin-size-header)}.camera-footer{position:relative;color:#fff;background-color:#000;height:var(--footer-height)}.camera-footer .items{padding:var(--margin-size-footer)}.camera-video{position:relative;-ms-flex:1;flex:1;overflow:hidden}.camera-video,video{background-color:#000}video{width:100%;height:100%;max-height:100%;min-height:100%;-o-object-fit:cover;object-fit:cover}.shutter{position:absolute;left:50%;top:50%;width:var(--shutter-size);height:var(--shutter-size);margin-top:calc(var(--shutter-size) / -2);margin-left:calc(var(--shutter-size) / -2);border-radius:100%;background-color:#c6cdd8;padding:12px;-webkit-box-sizing:border-box;box-sizing:border-box}.shutter:active .shutter-button{background-color:#9da9bb}.shutter-button{background-color:#fff;border-radius:100%;width:100%;height:100%}.rotate{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:absolute;right:var(--margin-size-footer);top:0;height:100%;color:#fff}.rotate,.rotate img{width:var(--icon-size-footer)}.rotate img{height:var(--icon-size-footer)}.shutter-overlay{z-index:5;position:absolute;width:100%;height:100%;background-color:#000}.error{width:100%;height:100%;color:#fff;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.accept{background-color:#000;-ms-flex:1;flex:1}.accept .accept-image{width:100%;height:100%;background-position:50%;background-size:cover;background-repeat:no-repeat}.close img,.flash img{width:var(--icon-size-header);height:var(--icon-size-header)}.accept-cancel img,.accept-use img{width:var(--icon-size-footer);height:var(--icon-size-footer)}.offscreen-image-render{top:0;left:0;visibility:hidden;pointer-events:none;width:100%;height:100%}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());



/***/ })

}]);
//# sourceMappingURL=82-es5.js.map