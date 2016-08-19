module func_demo {
    let squareItSimple = function(h: number, w: number) {
        return h * w;
    };

    let squareItSimplets = (h: number, w: number) => h * w;

    let helloWorld: (name?: string) => void;
    helloWorld = (name?: string) => {
        console.log("Hello " + (name || "unknown person"));
    };

    helloWorld();
    helloWorld("John");
}
