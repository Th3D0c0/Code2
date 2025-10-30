"use strict";
var Farm;
(function (Farm) {
    const animalIntervalMS = 2 * 1000;
    let currentAnimal = 0;
    const animals = [];
    const cow = new Farm.Cow;
    cow.setAnimalType(Farm.ANIMALTYPES.COW);
    cow.setName("Cow");
    animals.push(cow);
    const chicken = new Farm.Chicken;
    chicken.setAnimalType(Farm.ANIMALTYPES.CHICKEN);
    chicken.setName("Chicken");
    animals.push(chicken);
    const dog = new Farm.Dog;
    dog.setAnimalType(Farm.ANIMALTYPES.DOG);
    dog.setName("dog");
    animals.push(dog);
    const horse = new Farm.Horse;
    horse.setAnimalType(Farm.ANIMALTYPES.HORSE);
    horse.setName("horse");
    animals.push(horse);
    const cat = new Farm.Cat;
    cat.setAnimalType(Farm.ANIMALTYPES.CAT);
    cat.setName("cat");
    animals.push(cat);
    const pig = new Farm.Pig;
    pig.setAnimalType(Farm.ANIMALTYPES.PIG);
    pig.setName("pig");
    animals.push(pig);
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
        if (currentAnimal == animals.length) {
            currentAnimal = 0;
            farmManager.day++;
        }
        const animal = animals[currentAnimal];
        animal.singSong(ctx, v1);
        animal.doSpecialThing();
        foodCost = farmManager.showFood(ctx, foodVec, animal.food);
        const costString = "Cost: " + foodCost + "$";
        ctx.font = "30px Arial";
        ctx.strokeText(costString, 900, 400);
        farmManager.money -= foodCost;
    }
})(Farm || (Farm = {}));
//# sourceMappingURL=OldMcDonalds.js.map