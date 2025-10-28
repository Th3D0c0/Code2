"use strict";
var Farm;
(function (Farm) {
    let ANIMALTYPES;
    (function (ANIMALTYPES) {
        ANIMALTYPES[ANIMALTYPES["NONE"] = 0] = "NONE";
        ANIMALTYPES[ANIMALTYPES["COW"] = 1] = "COW";
        ANIMALTYPES[ANIMALTYPES["PIG"] = 2] = "PIG";
        ANIMALTYPES[ANIMALTYPES["CHICKEN"] = 3] = "CHICKEN";
        ANIMALTYPES[ANIMALTYPES["DOG"] = 4] = "DOG";
        ANIMALTYPES[ANIMALTYPES["CAT"] = 5] = "CAT";
        ANIMALTYPES[ANIMALTYPES["HORSE"] = 6] = "HORSE";
    })(ANIMALTYPES = Farm.ANIMALTYPES || (Farm.ANIMALTYPES = {}));
    let FOODTYPE;
    (function (FOODTYPE) {
        FOODTYPE[FOODTYPE["NONE"] = 0] = "NONE";
        FOODTYPE[FOODTYPE["CARROT"] = 1] = "CARROT";
        FOODTYPE[FOODTYPE["HAY"] = 2] = "HAY";
        FOODTYPE[FOODTYPE["GRAIN"] = 3] = "GRAIN";
        FOODTYPE[FOODTYPE["DOGFOOD"] = 4] = "DOGFOOD";
        FOODTYPE[FOODTYPE["CATFOOD"] = 5] = "CATFOOD";
    })(FOODTYPE = Farm.FOODTYPE || (Farm.FOODTYPE = {}));
    class Animal {
        type;
        food;
        foodAmount;
        sound;
        img;
        constructor() {
            this.type = ANIMALTYPES.NONE;
            this.food = FOODTYPE.NONE;
            this.foodAmount = 0;
            this.sound = "Miao";
            this.img = "";
        }
        setAnimalType(_type) {
            this.type = _type;
            switch (this.type) {
                case ANIMALTYPES.COW:
                    this.food = FOODTYPE.HAY;
                    this.foodAmount = 15;
                    this.sound = "MOOOOOO!!!";
                    this.img = "Classes\OldMcDonalds\Art\cow.png";
                    break;
                case ANIMALTYPES.PIG:
                    this.food = FOODTYPE.CARROT;
                    this.foodAmount = 30;
                    this.sound = "OOOIINK";
                    this.img = "Classes\OldMcDonalds\Art\cow.png"; // TODO: ADD Picture
                    break;
                case ANIMALTYPES.CHICKEN:
                    this.food = FOODTYPE.GRAIN;
                    this.foodAmount = 10;
                    this.sound = "cluck-cluck";
                    this.img = "Classes\OldMcDonalds\Art\chicken.png";
                    break;
                case ANIMALTYPES.DOG:
                    this.food = FOODTYPE.DOGFOOD;
                    this.foodAmount = 5;
                    this.sound = "WOOOOF";
                    this.img = "Classes\OldMcDonalds\Art\chicken.png"; // TODO: ADD Picture
                    break;
                case ANIMALTYPES.CAT:
                    this.food = FOODTYPE.CATFOOD;
                    this.foodAmount = 5;
                    this.sound = "MAIOOO";
                    this.img = "Classes\OldMcDonalds\Art\chicken.png"; // TODO: ADD Picture
                    break;
                case ANIMALTYPES.HORSE:
                    this.food = FOODTYPE.HAY;
                    this.foodAmount = 25;
                    this.sound = "neigh-neigh";
                    this.img = "Classes\OldMcDonalds\Art\horse.png";
                    break;
            }
        }
        singSong(_ctx) {
            if (this.type == ANIMALTYPES.NONE) {
                console.log("Select a valid Animal Type First");
                return;
            }
        }
    }
    Farm.Animal = Animal;
})(Farm || (Farm = {}));
//# sourceMappingURL=Animals.js.map