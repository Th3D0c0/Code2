namespace Farm {
    const animalIntervalMS: number = 2 * 1000

    let currentAnimal: number = 0

    const animals: Animal[] = [];

    const cow: Cow = new Cow;
    cow.setAnimalType(ANIMALTYPES.COW);
    cow.setName("Cow");
    animals.push(cow);
    const chicken: Chicken = new Chicken;
    chicken.setAnimalType(ANIMALTYPES.CHICKEN);
    chicken.setName("Chicken");
    animals.push(chicken);
    const dog: Dog = new Dog;
    dog.setAnimalType(ANIMALTYPES.DOG);
    dog.setName("dog");
    animals.push(dog);
    const horse: Horse = new Horse;
    horse.setAnimalType(ANIMALTYPES.HORSE);
    horse.setName("horse");
    animals.push(horse);
    const cat: Cat = new Cat;
    cat.setAnimalType(ANIMALTYPES.CAT);
    cat.setName("cat");
    animals.push(cat);
    const pig: Pig = new Pig;
    pig.setAnimalType(ANIMALTYPES.PIG);
    pig.setName("pig");
    animals.push(pig);

    const farmManager: FarmManager = new FarmManager

    document.addEventListener("DOMContentLoaded", hndlLoad)
    function hndlLoad(_event: Event): void {
        update()
    }

    window.setInterval(changeAnimal, animalIntervalMS)
    function changeAnimal(): void {
        currentAnimal++
        update()
    }

    function update(): void {
        const canvas: HTMLCanvasElement = document.querySelector("canvas") as HTMLCanvasElement
        const ctx: CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx.fillStyle = "#3e823bff";
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        const moneyString: string = "Money: " + farmManager.money + "$"
        ctx.font = "30px Arial"
        ctx.strokeText(moneyString, 0, 30, 200)

        const dayString: string = "Day: " + farmManager.day
        ctx.font = "30px Arial"
        ctx.strokeText(dayString, 700, 50)

        const v1: Vector2 = { x: 200, y: 200 }
        const foodVec: Vector2 = { x: 600, y: 400 }
        let foodCost: number = 0

        if(currentAnimal == animals.length){
            currentAnimal = 0;
            farmManager.day++;
        }

        const animal: Animal = animals[currentAnimal]
        animal.singSong(ctx, v1);
        animal.doSpecialThing();
        foodCost = farmManager.showFood(ctx, foodVec, animal.food)


        const costString: string = "Cost: " + foodCost + "$"
        ctx.font = "30px Arial"
        ctx.strokeText(costString, 900, 400)
        farmManager.money -= foodCost
    }
}