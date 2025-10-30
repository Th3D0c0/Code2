namespace AsteroidsGame {
    export class Asteroid {
        public position: Vector;
        public velocity: Vector;
        public type: number;
        public size: number;

        public constructor(_size: number, _position?: Vector) {
            if (_position) {
                this.position = _position;
            }
            else {
                this.position = new Vector(0, 0);
            }
            console.log("Asteroid Constructor");
            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 200);
            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
        }

        public move(_timesplice: number): void {
            // console.log("Move Asteroid");
            const offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timesplice);
            this.position.add(offset);

            if (this.position.x < 0) {
                this.position.x += crc2.canvas.width;
            }
            if (this.position.y < 0) {
                this.position.y += crc2.canvas.height;
            }
            if (this.position.x > crc2.canvas.width) {
                this.position.x -= crc2.canvas.width;
            }
            if (this.position.x > crc2.canvas.height) {
                this.position.y -= crc2.canvas.height;
            }
        }

        public draw(): void {
            // console.log("Asteroid draw");
            crc2.lineWidth = 1 / (this.size);
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size);
            crc2.translate(-50, -50);
            crc2.stroke(asteroidPaths[this.type]);
            crc2.restore();
        }

        public isHit(_hotspot: Vector): boolean {
            const hitSize: number = 50 * this.size;
            const difference: Vector = new Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y)
            return (Math.abs(difference.x) < hitSize && Math.abs(difference.y) < hitSize);
        }
    }
}