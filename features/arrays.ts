let carMakers: string[] = [];

carMakers.push('Ford');
carMakers.push('Toyota');
carMakers.push('Audi');

let biDimensionalArrays: string[][] = [[]];

carMakers.map((car: string): string => {
    return car;
});

let flexibleDateTypes: (string | Date)[] = [];

flexibleDateTypes.push(new Date());
flexibleDateTypes.push('2023-01-01');