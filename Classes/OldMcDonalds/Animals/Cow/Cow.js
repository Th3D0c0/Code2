"use strict";
var Farm;
(function (Farm) {
    class Cow extends Farm.Animal {
        doSpecialThing() {
            console.log("Can be milked");
        }
    }
    Farm.Cow = Cow;
})(Farm || (Farm = {}));
//# sourceMappingURL=Cow.js.map