"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sorter_1 = require("./sorter");
const sorter = new sorter_1.Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
