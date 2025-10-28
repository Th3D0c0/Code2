"use strict";
var Farm;
(function (Farm) {
    document.addEventListener("DOMContentLoaded", hndlLoad);
    function hndlLoad(_event) {
        startFarm();
    }
    function startFarm() {
        const canvas = document.querySelector("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx.fillStyle = "#6768a1ff";
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
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
        const donkey = new Farm.Animal;
        donkey.setAnimalType(Farm.ANIMALTYPES.DONKEY);
    }
})(Farm || (Farm = {}));
//# sourceMappingURL=OldMcDonalds.js.map