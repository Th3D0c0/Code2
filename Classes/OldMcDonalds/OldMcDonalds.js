"use strict";
var Farm;
(function (Farm) {
    const animalIntervalMS = 2 * 1000;
    let currentAnimal = 0;
    const cow = new Farm.Animal;
    cow.setAnimalType(Farm.ANIMALTYPES.COW);
    const chicken = new Farm.Animal;
    chicken.setAnimalType(Farm.ANIMALTYPES.CHICKEN);
    const dog = new Farm.Animal;
    dog.setAnimalType(Farm.ANIMALTYPES.DOG);
    const horse = new Farm.Animal;
    horse.setAnimalType(Farm.ANIMALTYPES.HORSE);
    const cat = new Farm.Animal;
    cat.setAnimalType(Farm.ANIMALTYPES.CAT);
    const pig = new Farm.Animal;
    pig.setAnimalType(Farm.ANIMALTYPES.PIG);
    const farmManager = new Farm.FarmManager;
    document.addEventListener("DOMContentLoaded", hndlLoad);
    function hndlLoad(_event) {
        update();
    }
    window.setInterval(changeAnimal, animalIntervalMS);
    function changeAnimal() {
        currentAnimal++;
        update();
    }
    function update() {
        const canvas = document.querySelector("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx.fillStyle = "#3e823bff";
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        const moneyString = "Money: " + farmManager.money + "$";
        ctx.font = "30px Arial";
        ctx.strokeText(moneyString, 0, 30, 200);
        const dayString = "Day: " + farmManager.day;
        ctx.font = "30px Arial";
        ctx.strokeText(dayString, 700, 50);
        const v1 = { x: 200, y: 200 };
        const foodVec = { x: 600, y: 400 };
        let foodCost = 0;
        switch (currentAnimal) {
            case 0:
                cow.setName("Cow");
                cow.singSong(ctx, v1);
                foodCost = farmManager.showFood(ctx, foodVec, Farm.FOODTYPE.HAY);
                farmManager.hay -= 15;
                break;
            case 1:
                chicken.setName("Chicken");
                chicken.singSong(ctx, v1);
                foodCost = farmManager.showFood(ctx, foodVec, Farm.FOODTYPE.GRAIN);
                farmManager.grain -= 14;
                break;
            case 2:
                dog.setName("dog");
                dog.singSong(ctx, v1);
                foodCost = farmManager.showFood(ctx, foodVec, Farm.FOODTYPE.DOGFOOD);
                farmManager.dogfood -= 12;
                break;
            case 3:
                horse.setName("horse");
                horse.singSong(ctx, v1);
                foodCost = farmManager.showFood(ctx, foodVec, Farm.FOODTYPE.CARROT);
                farmManager.carrots -= 13;
                break;
            case 4:
                cat.setName("cat");
                cat.singSong(ctx, v1);
                foodCost = farmManager.showFood(ctx, foodVec, Farm.FOODTYPE.CATFOOD);
                farmManager.catfood -= 12;
                break;
            case 5:
                pig.setName("pig");
                foodCost = farmManager.showFood(ctx, foodVec, Farm.FOODTYPE.CARROT);
                pig.singSong(ctx, v1);
                farmManager.carrots -= 13;
                break;
            case 6:
                farmManager.day++;
                currentAnimal = 0;
        }
        const costString = "Cost: " + foodCost + "$";
        ctx.font = "30px Arial";
        ctx.strokeText(costString, 900, 400);
        farmManager.money -= foodCost;
    }
})(Farm || (Farm = {}));
//# sourceMappingURL=OldMcDonalds.js.map