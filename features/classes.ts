class Car {

    constructor() {

    };

    public drive(): void {
        console.log('ruunn ruunnn');
    };

    public honk(): void {
        console.log('beep beep');
    };

    protected serialNumber: number;

    private checkSecurityPoint(): void {

    };
}

const littleCar = new Car();

littleCar.drive();
littleCar.honk();
//littleCar.checkSecurityPoint();

class MuscleCar extends Car {

    constructor() {
        super();
    };

    v8EngineType: string

    doLoudNoise(): void {
        // Use of protected property
        let sn = this.serialNumber;
    }
}