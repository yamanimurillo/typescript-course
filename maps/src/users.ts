import { faker } from "@faker-js/faker";

export class User {
    name: string;
    color: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.name = `${faker.name.firstName()} ${faker.name.lastName()}`;
        this.color = "blue";
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    };

    markerContent(): string {
        return `Hi, this is ${this.name}`;
    }
}