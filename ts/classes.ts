class Engine {
    //horsePower: number;
    //engineType: string;
    constructor(public horsePower: number, public engineType: string) {
        //this.horsePower = horsePower;
        //this.engineType = engineType;
    }
}

class Car {
  private _engine: Engine;

  constructor (engine: Engine) {
    this.engine = engine;
  }

  get engine(): Engine {
      return this._engine;
  }

  set engine(value: Engine) {
      if (value == undefined) throw 'Please supply an engine';
      this._engine = value;
  }

  start(): void {
    alert("Engine started: " + this.engine);
  }

  stop(): void {
    alert("Engine stopped: " + this.engine);
  }
}

window.onload = function() {
    var engine = new Engine(240, 'V8');
    var car = new Car(engine);
    car.start();
    car.stop();
};
