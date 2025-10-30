"use strict";
var Farm;
(function (Farm) {
    class Dog extends Farm.Animal {
        doSpecialThing() {
            console.log("Is a loyal companion");
        }
    }
    Farm.Dog = Dog;
})(Farm || (Farm = {}));
//# sourceMappingURL=Dog.js.map