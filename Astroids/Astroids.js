"use strict";
var AsteroidsGame;
(function (AsteroidsGame) {
    class Asteroid extends AsteroidsGame.Movable {
        size;
        // private type: number;
        constructor(_size, _position) {
            super(_position);
            if (_position) {
                this.position = _position;
            }
            else {
                this.position = new AsteroidsGame.Vector(0, 0);
            }
            console.log("Asteroid Constructor");
            this.velocity = AsteroidsGame.Vector.getRandom(100, 200);
            // this.type = Math.floor(Math.random() * 4);
            this.size = _size;
        }
        isHit(_hotspot) {
            const hitSize = 50 * this.size;
            const difference = AsteroidsGame.Vector.getDifference(_hotspot, this.position);
            return (Math.abs(difference.x) < hitSize && Math.abs(difference.y) < hitSize);
        }
    }
    AsteroidsGame.Asteroid = Asteroid;
})(AsteroidsGame || (AsteroidsGame = {}));
//# sourceMappingURL=Astroids.js.map