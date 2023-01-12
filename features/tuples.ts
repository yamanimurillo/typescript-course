const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40   
}

let pepsi: [string, boolean, number] = ['', true, 0];

pepsi.push('brown');

type Drink = [string, boolean, number];

let coke: Drink = ['', true, 0];

