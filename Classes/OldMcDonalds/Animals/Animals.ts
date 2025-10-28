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

    export class Animal {
        private type: ANIMALTYPES
        private food: FOODTYPE
        private foodAmount: number
        private sound: string
        private img: string

        public constructor() {
            this.type = ANIMALTYPES.NONE
            this.food = FOODTYPE.NONE
            this.foodAmount = 0
            this.sound = "Miao"
            this.img = ""
        }

        public setAnimalType(_type: ANIMALTYPES): void {
            this.type = _type
            switch (this.type) {
                case ANIMALTYPES.COW:
                    this.food = FOODTYPE.HAY
                    this.foodAmount = 15
                    this.sound = "MOOOOOO!!!"
                    this.img = "Classes\OldMcDonalds\Art\cow.png"
                    break;
                case ANIMALTYPES.PIG:
                    this.food = FOODTYPE.CARROT
                    this.foodAmount = 30
                    this.sound = "OOOIINK"
                    this.img = "Classes\OldMcDonalds\Art\cow.png" // TODO: ADD Picture
                    break;
                case ANIMALTYPES.CHICKEN:
                    this.food = FOODTYPE.GRAIN
                    this.foodAmount = 10
                    this.sound = "cluck-cluck"
                    this.img = "Classes\OldMcDonalds\Art\chicken.png"
                    break;
                case ANIMALTYPES.DOG:
                    this.food = FOODTYPE.DOGFOOD
                    this.foodAmount = 5
                    this.sound = "WOOOOF"
                    this.img = "Classes\OldMcDonalds\Art\chicken.png"// TODO: ADD Picture
                    break;
                case ANIMALTYPES.CAT:
                    this.food = FOODTYPE.CATFOOD
                    this.foodAmount = 5
                    this.sound = "MAIOOO"
                    this.img = "Classes\OldMcDonalds\Art\chicken.png"// TODO: ADD Picture
                    break;
                case ANIMALTYPES.HORSE:
                    this.food = FOODTYPE.HAY
                    this.foodAmount = 25
                    this.sound = "neigh-neigh"
                    this.img = "Classes\OldMcDonalds\Art\horse.png"
                    break;
            }
        }

        public singSong(_ctx: CanvasRenderingContext2D,): void {
            if (this.type == ANIMALTYPES.NONE) {
                console.log("Select a valid Animal Type First")
                return;
            }
        }
    }
}