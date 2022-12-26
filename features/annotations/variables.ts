//type annotations
let apples: any = 5;

apples = 'hi';

let speed: string = 'fast';

let hasName: boolean = false;

//built in object

let now = new Date();

// Arrays

let colors: string[] = ['red', 'blue', 'green'];

let myNumbers: number[] = [1, 4, 9];

// Classes

class Car {
    brand: string
}

let car = new Car();

// Object literal

let point: {x: number; y: number} = {
    x: 10,
    y: 20
}

// Function

const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
}


// When to use annotations 

const json = '{"x": 1, "y": 2}';
const coordinates = JSON.parse(json);
