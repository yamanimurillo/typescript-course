"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const number_collection_1 = require("./number-collection");
const characters_collection_1 = require("./characters-collection");
const linked_list_1 = require("./linked-list");
//Sort numbers
const numbersCollection = new number_collection_1.NumbersCollection([
    10, 3, -5, 0, 10, 3, -5, 0, 10, 3, 2, 88,
]);
numbersCollection.sort();
console.log(numbersCollection.data);
//Sort string
const charsCollection = new characters_collection_1.CharactersCollection("hsdjkytneskhjqjkls");
charsCollection.sort();
console.log(charsCollection.data);
//Sort linked list
const linkedList = new linked_list_1.LinkedList();
linkedList.add(500);
linkedList.add(10);
linkedList.add(28);
linkedList.add(-6);
linkedList.sort();
linkedList.print();
