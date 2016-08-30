///<reference path="../typings/globals/core-js/index.d.ts"/>
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var wjNg2Chart = require('wijmo/wijmo.angular2.chart');
var wjNg2Input = require('wijmo/wijmo.angular2.input');
var DataSvc_1 = require('./services/DataSvc');
var AppCmp = (function () {
    function AppCmp(dataSvc) {
        this.selectedPosition = 'None';
        this.selectedOffset = 0;
        this.isAnimated = false;
        this.dataSvc = dataSvc;
        this.itemsSource = this.dataSvc.getData();
    }
    AppCmp = __decorate([
        core_1.Component({
            selector: 'app-cmp',
            templateUrl: 'src/app.html',
            directives: [common_1.CORE_DIRECTIVES, wjNg2Chart.WjFlexPie, wjNg2Chart.WjFlexPieDataLabel, wjNg2Chart.WjFlexChartLegend,
                wjNg2Input.WjInputNumber, wjNg2Input.WjMenu, wjNg2Input.WjMenuItem]
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc)), 
        __metadata('design:paramtypes', [DataSvc_1.DataSvc])
    ], AppCmp);
    return AppCmp;
}());
exports.AppCmp = AppCmp;
platform_browser_dynamic_1.bootstrap(AppCmp, [DataSvc_1.DataSvc]);
//# sourceMappingURL=app.js.map