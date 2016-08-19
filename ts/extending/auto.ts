class Engine2 {
    constructor(public horsePower: number, public engineType: string) {

    }

    start(callback: (startStatus: boolean, engineType: string) => void) {
        window.setTimeout(() => {
            callback(true, this.engineType);
        }, 1000);
    }

    stop(callback: (stopStatus: boolean, engineType: string) => void) {
        window.setTimeout(() => {
            callback(true, this.engineType);
        }, 1000);
    }
}

class Accesory {
    constructor(public accessoryNumber: number, public title: string) {

    }
}

class Auto {
    private _basePrice: number;
    private _engine: Engine2;
    make: string;
    model: string;
    accessoryList: string;

    constructor(basePrice: number, engine: Engine, make: string, model: string) {
        this.engine = engine;
        this._basePrice = basePrice;
        this.make = make;
        this.model = model;
    }

    calculateTotal() : number {
        let taxeRate = .08;
        return this._basePrice + (taxeRate * this._basePrice);
    }

    addAccessories(...accessories: Accesory[]) {
        this.accessoryList = '';
    }
}
