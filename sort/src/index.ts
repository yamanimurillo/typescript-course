import { Sorter } from "./sorter";
import { NumbersCollection } from "./number-collection";
import { CharactersCollection } from "./characters-collection";
import { LinkedList } from "./linked-list";

//Sort numbers
const numbersCollection = new NumbersCollection([
  10, 3, -5, 0, 10, 3, -5, 0, 10, 3, 2, 88,
]);
numbersCollection.sort();
console.log(numbersCollection.data);

//Sort string
const charsCollection = new CharactersCollection("hsdjkytneskhjqjkls");
charsCollection.sort();
console.log(charsCollection.data);

//Sort linked list
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(10);
linkedList.add(28);
linkedList.add(-6);
linkedList.sort();
linkedList.print();
