interface Car {
    name: string,
    year: number,
    broken: boolean,
};

const printCar = (car: Car): void => {
    console.log(car);
}
