interface IEngine {
    start(callback: (startStatus: boolean, engineType: string) => void) : void;

    stop(callback: (stopStatus: boolean, engineType: string) => void) : void;
}

class Engine2 implements IEngine {
    constructor(public horsePower: number, public engineType: string) { }

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

class CustomEngine implements IEngine {
    start(callback: (startStatus: boolean, engineType: string) => void) {
        window.setTimeout(() => {
            callback(true, 'Custom Engine');
        }, 1000);
    }

    stop(callback: (stopStatus: boolean, engineType: string) => void) {
        window.setTimeout(() => {
            callback(true, 'Custom Engine');
        }, 1000);
    }
}

class Accesory {
    constructor(public accessoryNumber: number, public title: string) {

    }
}

class Auto {
    private _basePrice: number;
    private _engine: IEngine;
    make: string;
    model: string;
    accessoryList: string;

    constructor(basePrice: number, engine: IEngine, make: string, model: string) {
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
        for (let i = 0; i < accessories.length; i++) {
            let ac = accessories[i];
            this.accessoryList += ac.accessoryNumber + ' ' + ac.title + '<br />';
        }
    }

    getAccessoryList(): string {
        return this.accessoryList;
    }

    get basePrice(): number {
        return this._basePrice;
    }

    set basePrice(value: number) {
        if (value <= 0) throw 'price must be >= 0';
        this._basePrice = value;
    }

    set engine(value: IEngine) {
        if (value == undefined) throw 'Please supply an engine';
        this._engine = value;
    }
}

class Truck extends Auto {
    bedLenght: string;
    fourByFour: boolean;

    constructor(basePrice: number, engine: IEngine, make: string, model: string, bedLenght: string, fourByFour: boolean) {
        super(basePrice, engine, make, model);
        this.bedLenght = bedLenght;
        this.fourByFour = fourByFour;
    }
}

window.onload = function () {
    /*var truck = new Truck(40000, new Engine2(300, 'V8'), 'Chevy', 'Silverado', 'Long Bed', true);
    alert(truck.engine.engineType);
    alert(truck.bedLenght);
    alert(truck.calculateTotal().toString())*/

    var auto = new Auto(40000, new CustomEngine(), 'make', 'model');
    var myEngine = <IEngine>auto.engine;
    alert(auto.calculateTotal().toString())
}
