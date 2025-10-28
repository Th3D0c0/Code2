namespace Farm {
    export class FarmManager {
        public money: number
        public day: number

        public hay: number
        public grain: number
        public carrots: number
        public dogfood: number
        public catfood: number
        public constructor() {
            this.money = 100
            this.day = 1
            this.hay = 50
            this.grain = 25
            this.carrots = 40
            this.dogfood = 25
            this.catfood = 25
            
            console.log(this.money, this.day)
        }

        public showFood(_ctx: CanvasRenderingContext2D, _pos: Vector2, _foodType: FOODTYPE): number {
            let foodCost: number = 0
            switch (_foodType) {
                case FOODTYPE.HAY:
                    const image1: HTMLImageElement = new Image()
                    image1.src = "Art/Haybale.png"
                    image1.onload = (): void => {
                        _ctx.drawImage(image1, _pos.x, _pos.y, _pos.x, _pos.y)
                    }
                    foodCost = 15
                    break;
                case FOODTYPE.CARROT:
                    const image2: HTMLImageElement = new Image()
                    image2.src = "Art/carrots.png"
                    image2.onload = (): void => {
                        _ctx.drawImage(image2, _pos.x, _pos.y)
                    }
                    foodCost = 5
                    break;
                case FOODTYPE.GRAIN:
                    const image3: HTMLImageElement = new Image()
                    image3.src = "Art/grain.png"
                    image3.onload = (): void => {
                        _ctx.drawImage(image3, _pos.x, _pos.y)
                    }
                    foodCost = 7
                    break;
                case FOODTYPE.DOGFOOD:
                    const image4: HTMLImageElement = new Image()
                    image4.src = "Art/dogfood.png"
                    image4.onload = (): void => {
                        _ctx.drawImage(image4, _pos.x, _pos.y)
                    }
                    foodCost = 5
                    break;
                case FOODTYPE.CATFOOD:
                    const image5: HTMLImageElement = new Image()
                    image5.src = "Art/catfood.png"
                    image5.onload = (): void => {
                        _ctx.drawImage(image5, _pos.x, _pos.y)
                    }
                    foodCost = 5
                    break;
                }
                return foodCost
        }
    }
}