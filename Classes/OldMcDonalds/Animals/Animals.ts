namespace Farm {
    export enum ANIMALTYPES {
        NONE,
        COW,
        PIG,
        CHICKEN,
        DOG,
        CAT,
        HORSE,
    }
    export enum FOODTYPE {
        NONE,
        CARROT,
        HAY,
        GRAIN,
        DOGFOOD,
        CATFOOD
    }

    export type Vector2 = {x: number, y: number}

    export class Animal {
        private type: ANIMALTYPES
        private food: FOODTYPE
        private foodAmount: number
        private sound: string
        private img: string
        private name: string

        public constructor() {
            this.type = ANIMALTYPES.NONE
            this.food = FOODTYPE.NONE
            this.foodAmount = 0
            this.sound = ""
            this.img = ""
            this.name = ""
            console.log(this.food, this.foodAmount, this.sound)
        }

        public setAnimalType(_type: ANIMALTYPES): void {
            this.type = _type
            switch (this.type) {
                case ANIMALTYPES.COW:
                    this.food = FOODTYPE.HAY
                    this.foodAmount = 15
                    this.sound = "MOO MOO"
                    this.img = "Art/cow.png"
                    break;
                case ANIMALTYPES.PIG:
                    this.food = FOODTYPE.CARROT
                    this.foodAmount = 30
                    this.sound = "OINK OINK"
                    this.img = "Art/pig.png"
                    break;
                case ANIMALTYPES.CHICKEN:
                    this.food = FOODTYPE.GRAIN
                    this.foodAmount = 10
                    this.sound = "cluck cluck"
                    this.img = "Art/chicken.png"
                    break;
                case ANIMALTYPES.DOG:
                    this.food = FOODTYPE.DOGFOOD
                    this.foodAmount = 5
                    this.sound = "WOOOF WOOF"
                    this.img = "Art/dog.png"
                    break;
                case ANIMALTYPES.CAT:
                    this.food = FOODTYPE.CATFOOD
                    this.foodAmount = 5
                    this.sound = "MAIO Miao"
                    this.img = "Art/cat.png"
                    break;
                case ANIMALTYPES.HORSE:
                    this.food = FOODTYPE.HAY
                    this.foodAmount = 25
                    this.sound = "neigh neigh"
                    this.img = "Art/horse.png"
                    break;
            }
        }

        public setName(_name: string): void{
            this.name = _name
        }

        public singSong(_ctx: CanvasRenderingContext2D, _pos: Vector2): void {
            if (this.type == ANIMALTYPES.NONE) {
                console.log("Select a valid Animal Type First")
                return;
            }
            const image: HTMLImageElement = new Image()
            image.src = this.img
            image.onload = ():void => {
                _ctx.drawImage(image, _pos.x, _pos.y, 200, 200)
                const tmpName: string = "Name: " + this.name
                _ctx.strokeStyle = "black"
                _ctx.font = "25px Arial"
                _ctx.strokeText(tmpName, _pos.x + 50, _pos.y + 200, 400)
                const songText1: string = "Old Macdonald had a farm, E-I-E-I-O"
                _ctx.strokeText(songText1, _pos.x + 50, _pos.y + 230, 400)
                const songText2: string = "And on his farm he had a " + this.name + ", " + "E-I-E-I-O"
                _ctx.strokeText(songText2, _pos.x + 50, _pos.y + 260, 400)
                const songText3: string = "With a " + this.sound +  " here and a " + this.sound + " there"
                _ctx.strokeText(songText3, _pos.x + 50, _pos.y + 290, 400)
                const songText4: string = "Here a " + this.sound +  " there a " + this.sound + " there"
                _ctx.strokeText(songText4, _pos.x + 50, _pos.y + 320, 400)
                const songText5: string = "Everywhere a " + this.sound
                _ctx.strokeText(songText5, _pos.x + 50, _pos.y + 350, 400)
                _ctx.strokeText(songText1, _pos.x + 50, _pos.y + 380, 400)
            }
        }
    }
}