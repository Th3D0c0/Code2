"use strict";
var Farm;
(function (Farm) {
    class FarmManager {
        money;
        day;
        hay;
        grain;
        carrots;
        dogfood;
        catfood;
        constructor() {
            this.money = 100;
            this.day = 1;
            this.hay = 50;
            this.grain = 25;
            this.carrots = 40;
            this.dogfood = 25;
            this.catfood = 25;
            console.log(this.money, this.day);
        }
        showFood(_ctx, _pos, _foodType) {
            let foodCost = 0;
            switch (_foodType) {
                case Farm.FOODTYPE.HAY:
                    const image1 = new Image();
                    image1.src = "Art/Haybale.png";
                    image1.onload = () => {
                        _ctx.drawImage(image1, _pos.x, _pos.y, _pos.x, _pos.y);
                    };
                    foodCost = 15;
                    break;
                case Farm.FOODTYPE.CARROT:
                    const image2 = new Image();
                    image2.src = "Art/carrots.png";
                    image2.onload = () => {
                        _ctx.drawImage(image2, _pos.x, _pos.y);
                    };
                    foodCost = 5;
                    break;
                case Farm.FOODTYPE.GRAIN:
                    const image3 = new Image();
                    image3.src = "Art/grain.png";
                    image3.onload = () => {
                        _ctx.drawImage(image3, _pos.x, _pos.y);
                    };
                    foodCost = 7;
                    break;
                case Farm.FOODTYPE.DOGFOOD:
                    const image4 = new Image();
                    image4.src = "Art/dogfood.png";
                    image4.onload = () => {
                        _ctx.drawImage(image4, _pos.x, _pos.y);
                    };
                    foodCost = 5;
                    break;
                case Farm.FOODTYPE.CATFOOD:
                    const image5 = new Image();
                    image5.src = "Art/catfood.png";
                    image5.onload = () => {
                        _ctx.drawImage(image5, _pos.x, _pos.y);
                    };
                    foodCost = 5;
                    break;
            }
            return foodCost;
        }
    }
    Farm.FarmManager = FarmManager;
})(Farm || (Farm = {}));
//# sourceMappingURL=FarmManager.js.map