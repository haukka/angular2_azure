///<reference path="../typings/globals/core-js/index.d.ts"/>

import { Component, EventEmitter, provide, Input, Inject, enableProdMode } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { bootstrap } from '@angular/platform-browser-dynamic';
import * as wjNg2Chart from 'wijmo/wijmo.angular2.chart';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';
import { DataSvc } from './services/DataSvc';

@Component({
    selector: 'app-cmp',
    templateUrl: 'src/app.html',
    directives: [CORE_DIRECTIVES, wjNg2Chart.WjFlexPie, wjNg2Chart.WjFlexPieDataLabel, wjNg2Chart.WjFlexChartLegend,
                 wjNg2Input.WjInputNumber,wjNg2Input.WjMenu, wjNg2Input.WjMenuItem]
})

export class AppCmp {
    protected dataSvc: DataSvc;
    itemsSource: { name: string, value: number }[];
    selectedPosition = 'None';
    selectedOffset = 0;
    isAnimated = false;

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        this.dataSvc = dataSvc;
        this.itemsSource = this.dataSvc.getData();
    }
}

bootstrap(AppCmp, [ DataSvc ]);