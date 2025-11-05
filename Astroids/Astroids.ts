namespace AsteroidsGame {
    export class Asteroid extends Movable {
        public size: number;
        // private type: number;

        public constructor(_size: number, _position?: Vector) { 
            super(_position);

            if (_position) {
                this.position = _position;
            }
            else {
                this.position = new Vector(0, 0);
            }
            console.log("Asteroid Constructor");
            this.velocity = Vector.getRandom(100, 200);
            // this.type = Math.floor(Math.random() * 4);
            this.size = _size;
        }

        public isHit(_hotspot: Vector): boolean {
            const hitSize: number = 50 * this.size;
            const difference: Vector = Vector.getDifference(_hotspot, this.position);
            return (Math.abs(difference.x) < hitSize && Math.abs(difference.y) < hitSize);
        }
    }
}