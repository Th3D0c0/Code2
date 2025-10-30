"use strict";
var Farm;
(function (Farm) {
    class Horse extends Farm.Animal {
        doSpecialThing() {
            console.log("Lasagne");
        }
    }
    Farm.Horse = Horse;
})(Farm || (Farm = {}));
//# sourceMappingURL=Horse.js.map