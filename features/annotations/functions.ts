const add = (a: number, b: number): number => {
    return a + b;
};

const substract = (a: number, b: number) => a - b;

function divide(a: number, b: number): number {
    return a / b;
}

function multiply(a: number, b: number): number {
    return a * b;
}

const logger = (message: string): void => {
    console.log(message);
}

const throwError = (error: string): never => {
    throw new Error(error);
}

interface Forecast {
    date: Date,
    weather: string,
}

const logForecast = ({date, weather}: Forecast): void => {
    console.log(date);
    console.log(weather);
}