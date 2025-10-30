"use strict";
var Farm;
(function (Farm) {
    class Cat extends Farm.Animal {
        doSpecialThing() {
            console.log("Throws things of tables");
        }
    }
    Farm.Cat = Cat;
})(Farm || (Farm = {}));
//# sourceMappingURL=Cat.js.map