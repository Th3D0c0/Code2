"use strict";
var AsteroidsGame;
(function (AsteroidsGame) {
    class Asteroid {
        position;
        velocity;
        type;
        size;
        constructor(_size, _position) {
            if (_position) {
                this.position = _position;
            }
            else {
                this.position = new AsteroidsGame.Vector(0, 0);
            }
            console.log("Asteroid Constructor");
            this.velocity = new AsteroidsGame.Vector(0, 0);
            this.velocity.random(100, 200);
            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
        }
        move(_timesplice) {
            // console.log("Move Asteroid");
            const offset = new AsteroidsGame.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timesplice);
            this.position.add(offset);
            if (this.position.x < 0) {
                this.position.x += AsteroidsGame.crc2.canvas.width;
            }
            if (this.position.y < 0) {
                this.position.y += AsteroidsGame.crc2.canvas.height;
            }
            if (this.position.x > AsteroidsGame.crc2.canvas.width) {
                this.position.x -= AsteroidsGame.crc2.canvas.width;
            }
            if (this.position.x > AsteroidsGame.crc2.canvas.height) {
                this.position.y -= AsteroidsGame.crc2.canvas.height;
            }
        }
        draw() {
            // console.log("Asteroid draw");
            AsteroidsGame.crc2.lineWidth = 1 / (this.size);
            AsteroidsGame.crc2.save();
            AsteroidsGame.crc2.translate(this.position.x, this.position.y);
            AsteroidsGame.crc2.scale(this.size, this.size);
            AsteroidsGame.crc2.translate(-50, -50);
            AsteroidsGame.crc2.stroke(AsteroidsGame.asteroidPaths[this.type]);
            AsteroidsGame.crc2.restore();
        }
        isHit(_hotspot) {
            const hitSize = 50 * this.size;
            const difference = new AsteroidsGame.Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            return (Math.abs(difference.x) < hitSize && Math.abs(difference.y) < hitSize);
        }
    }
    AsteroidsGame.Asteroid = Asteroid;
})(AsteroidsGame || (AsteroidsGame = {}));
//# sourceMappingURL=Astroids.js.map