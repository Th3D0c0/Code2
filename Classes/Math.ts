export namespace testMath{
    export class Vector{
        public x: number;
        public y:number;

        public constructor(){
            this.x = 0;
            this.y = 0;
        }

        public scale(_factor: number):void{
            this.x *= _factor
            this.y *= _factor
        }
        public add(_addend: Vector): void{
            this.x += _addend.x
            this.y += _addend.y
        }
        public set(_x: number, _y:number): void{
            this.x = _x;
            this.y = _y;
        }
    }
}