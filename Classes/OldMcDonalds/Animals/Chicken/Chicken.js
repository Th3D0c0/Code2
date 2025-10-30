"use strict";
var Farm;
(function (Farm) {
    class Chicken extends Farm.Animal {
        doSpecialThing() {
            console.log("Chicken Nuggets!");
        }
    }
    Farm.Chicken = Chicken;
})(Farm || (Farm = {}));
//# sourceMappingURL=Chicken.js.map