import { faker } from "@faker-js/faker";

export class Company {
    name: string;
    catchPhrase: string;
    color: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.name = `${faker.company.name()}`;
        this.catchPhrase = faker.company.catchPhrase();
        this.color = "orange";
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    };

    markerContent(): string {
        return `Hello, we are ${this.name}`;
    }
}