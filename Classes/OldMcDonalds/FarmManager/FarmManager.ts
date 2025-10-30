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
                    const text1: string = "Hay Amount in Storage: " + this.hay
                    _ctx.strokeText(text1, _pos.x + 600, _pos.y + 230)
                    foodCost = 15
                    this.hay--;
                    break;
                case FOODTYPE.CARROT:
                    const image2: HTMLImageElement = new Image()
                    image2.src = "Art/carrots.png"
                    image2.onload = (): void => {
                        _ctx.drawImage(image2, _pos.x, _pos.y)
                    }
                    const text2: string = "Carrot Amount in Storage: " + this.carrots
                    _ctx.strokeText(text2, _pos.x + 600, _pos.y + 230)
                    foodCost = 5
                    this.carrots--;
                    break;
                case FOODTYPE.GRAIN:
                    const image3: HTMLImageElement = new Image()
                    image3.src = "Art/grain.png"
                    image3.onload = (): void => {
                        _ctx.drawImage(image3, _pos.x, _pos.y)
                    }
                    const text3: string = "Grain Amount in Storage: " + this.grain
                    _ctx.strokeText(text3, _pos.x + 600, _pos.y + 230)
                    foodCost = 7;
                    this.grain--;
                    break;
                case FOODTYPE.DOGFOOD:
                    const image4: HTMLImageElement = new Image()
                    image4.src = "Art/dogfood.png"
                    image4.onload = (): void => {
                        _ctx.drawImage(image4, _pos.x, _pos.y)
                    }
                    const text4: string = "Dog Food Amount in Storage: " + this.dogfood
                    _ctx.strokeText(text4, _pos.x + 600, _pos.y + 230)
                    foodCost = 5
                    this.dogfood--
                    break;
                case FOODTYPE.CATFOOD:
                    const image5: HTMLImageElement = new Image()
                    image5.src = "Art/catfood.png"
                    image5.onload = (): void => {
                        _ctx.drawImage(image5, _pos.x, _pos.y)
                    }
                    const text5: string = "Cat Food Amount in Storage: " + this.catfood
                    _ctx.strokeText(text5, _pos.x + 600, _pos.y + 230)
                    foodCost = 5
                    this.dogfood--;
                    break;
                }
                return foodCost
        }
    }
}