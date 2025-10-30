"use strict";
var Farm;
(function (Farm) {
    class Pig extends Farm.Animal {
        doSpecialThing() {
            console.log("Makes a mess");
        }
    }
    Farm.Pig = Pig;
})(Farm || (Farm = {}));
//# sourceMappingURL=Pig.js.map