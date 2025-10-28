namespace Farm {
    const animalIntervalMS: number = 2 * 1000

    let currentAnimal: number = 0

    const cow: Animal = new Animal
    cow.setAnimalType(ANIMALTYPES.COW)
    const chicken: Animal = new Animal
    chicken.setAnimalType(ANIMALTYPES.CHICKEN)
    const dog: Animal = new Animal
    dog.setAnimalType(ANIMALTYPES.DOG)
    const horse: Animal = new Animal
    horse.setAnimalType(ANIMALTYPES.HORSE)
    const cat: Animal = new Animal
    cat.setAnimalType(ANIMALTYPES.CAT)
    const pig: Animal = new Animal
    pig.setAnimalType(ANIMALTYPES.PIG)

    const farmManager: FarmManager = new FarmManager

    document.addEventListener("DOMContentLoaded", hndlLoad)
    function hndlLoad(_event: Event): void {
        update()
    }

    window.setInterval(changeAnimal, animalIntervalMS)
    function changeAnimal(): void{
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
        const foodVec: Vector2 = { x: 600, y: 400}
        let foodCost: number = 0
        switch (currentAnimal){
            case 0:
                cow.setName("Cow")
                cow.singSong(ctx, v1)
                foodCost = farmManager.showFood(ctx, foodVec, FOODTYPE.HAY)
                farmManager.hay -= 15
                break;
            case 1:
                chicken.setName("Chicken")
                chicken.singSong(ctx, v1)
                foodCost = farmManager.showFood(ctx, foodVec, FOODTYPE.GRAIN)
                farmManager.grain -= 14
                break;
            case 2:
                dog.setName("dog")
                dog.singSong(ctx, v1)
                foodCost = farmManager.showFood(ctx, foodVec, FOODTYPE.DOGFOOD)
                farmManager.dogfood -= 12
                break;
            case 3:
                horse.setName("horse")
                horse.singSong(ctx, v1)
                foodCost = farmManager.showFood(ctx, foodVec, FOODTYPE.CARROT)
                farmManager.carrots -= 13
                break;
            case 4:
                cat.setName("cat")
                cat.singSong(ctx, v1)
                foodCost = farmManager.showFood(ctx, foodVec, FOODTYPE.CATFOOD)
                farmManager.catfood -= 12
                break;
            case 5:
                pig.setName("pig")
                foodCost = farmManager.showFood(ctx, foodVec, FOODTYPE.CARROT)
                pig.singSong(ctx, v1)
                farmManager.carrots -= 13
                break;
            case 6:
                farmManager.day++
                currentAnimal = 0
        }
        const costString: string = "Cost: " + foodCost + "$"
        ctx.font = "30px Arial"
        ctx.strokeText(costString, 900, 400)
        farmManager.money -= foodCost
    }
}