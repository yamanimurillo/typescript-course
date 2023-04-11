"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
const sorter_1 = require("./sorter");
class CharactersCollection extends sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return (this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase());
    }
    swap(leftIndex, rightIndex) {
        const chars = this.data.split("");
        const leftHand = chars[leftIndex];
        chars[leftIndex] = chars[rightIndex];
        chars[rightIndex] = leftHand;
        this.data = chars.join("");
    }
}
exports.CharactersCollection = CharactersCollection;
