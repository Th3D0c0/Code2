namespace Farm{
    document.addEventListener("DOMContentLoaded", hndlLoad)
    function hndlLoad(_event: Event): void{
        startFarm()
    }
    function startFarm(): void{
        const canvas: HTMLCanvasElement = document.querySelector("canvas") as HTMLCanvasElement
        const ctx: CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx.fillStyle = "#6768a1ff";
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

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
        const donkey: Animal = new Animal
        donkey.setAnimalType(ANIMALTYPES.DONKEY)
    }
}