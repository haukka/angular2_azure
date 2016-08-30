'use strict';

import { Injectable } from '@angular/core';

@Injectable()
export class DataSvc {
        getData(): any[] {
        var names = ['Football', 'Basketball', 'Volleyball', 'Rugby', 'Tennis'],
            data = [];
        for (var i = 0; i < names.length; i++) {
            data.push({
                name: names[i],
                value: Math.round(Math.random() * 100)
            });
        }
        return data;
    }
}