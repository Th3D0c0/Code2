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
        name;
        constructor() {
            this.type = ANIMALTYPES.NONE;
            this.food = FOODTYPE.NONE;
            this.foodAmount = 0;
            this.sound = "";
            this.img = "";
            this.name = "";
            console.log(this.food, this.foodAmount, this.sound);
        }
        setAnimalType(_type) {
            this.type = _type;
            switch (this.type) {
                case ANIMALTYPES.COW:
                    this.food = FOODTYPE.HAY;
                    this.foodAmount = 15;
                    this.sound = "MOO MOO";
                    this.img = "Art/cow.png";
                    break;
                case ANIMALTYPES.PIG:
                    this.food = FOODTYPE.CARROT;
                    this.foodAmount = 30;
                    this.sound = "OINK OINK";
                    this.img = "Art/pig.png";
                    break;
                case ANIMALTYPES.CHICKEN:
                    this.food = FOODTYPE.GRAIN;
                    this.foodAmount = 10;
                    this.sound = "cluck cluck";
                    this.img = "Art/chicken.png";
                    break;
                case ANIMALTYPES.DOG:
                    this.food = FOODTYPE.DOGFOOD;
                    this.foodAmount = 5;
                    this.sound = "WOOOF WOOF";
                    this.img = "Art/dog.png";
                    break;
                case ANIMALTYPES.CAT:
                    this.food = FOODTYPE.CATFOOD;
                    this.foodAmount = 5;
                    this.sound = "MAIO Miao";
                    this.img = "Art/cat.png";
                    break;
                case ANIMALTYPES.HORSE:
                    this.food = FOODTYPE.HAY;
                    this.foodAmount = 25;
                    this.sound = "neigh neigh";
                    this.img = "Art/horse.png";
                    break;
            }
        }
        setName(_name) {
            this.name = _name;
        }
        singSong(_ctx, _pos) {
            if (this.type == ANIMALTYPES.NONE) {
                console.log("Select a valid Animal Type First");
                return;
            }
            const image = new Image();
            image.src = this.img;
            image.onload = () => {
                _ctx.drawImage(image, _pos.x, _pos.y, 200, 200);
                const tmpName = "Name: " + this.name;
                _ctx.strokeStyle = "black";
                _ctx.font = "25px Arial";
                _ctx.strokeText(tmpName, _pos.x + 50, _pos.y + 200, 400);
                const songText1 = "Old Macdonald had a farm, E-I-E-I-O";
                _ctx.strokeText(songText1, _pos.x + 50, _pos.y + 230, 400);
                const songText2 = "And on his farm he had a " + this.name + ", " + "E-I-E-I-O";
                _ctx.strokeText(songText2, _pos.x + 50, _pos.y + 260, 400);
                const songText3 = "With a " + this.sound + " here and a " + this.sound + " there";
                _ctx.strokeText(songText3, _pos.x + 50, _pos.y + 290, 400);
                const songText4 = "Here a " + this.sound + " there a " + this.sound + " there";
                _ctx.strokeText(songText4, _pos.x + 50, _pos.y + 320, 400);
                const songText5 = "Everywhere a " + this.sound;
                _ctx.strokeText(songText5, _pos.x + 50, _pos.y + 350, 400);
                _ctx.strokeText(songText1, _pos.x + 50, _pos.y + 380, 400);
            };
        }
    }
    Farm.Animal = Animal;
})(Farm || (Farm = {}));
//# sourceMappingURL=Animals.js.map