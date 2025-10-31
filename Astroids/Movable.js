"use strict";
var AsteroidsGame;
(function (AsteroidsGame) {
    class Movable {
        position;
        velocity;
        expendable = false;
        constructor(_position) {
            if (_position) {
                this.position = _position;
            }
            else {
                this.position = new AsteroidsGame.Vector(0, 0);
            }
            console.log("Asteroid Constructor");
            this.velocity = new AsteroidsGame.Vector(0, 0);
        }
        move(_timesplice) {
            // console.log("Move Asteroid");
            const offset = this.velocity.copy();
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
        }
    }
    AsteroidsGame.Movable = Movable;
})(AsteroidsGame || (AsteroidsGame = {}));
//# sourceMappingURL=Movable.js.map