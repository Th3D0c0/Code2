"use strict";
var AsteroidsGame;
(function (AsteroidsGame) {
    class Projectile extends AsteroidsGame.Movable {
        lifetime = 2;
        constructor(_position, _velocity) {
            super(_position);
            this.velocity = _velocity.copy();
        }
        draw() {
            AsteroidsGame.crc2.save();
            AsteroidsGame.crc2.translate(this.position.x, this.position.y);
            AsteroidsGame.crc2.strokeRect(-1, -1, 1, 1);
            AsteroidsGame.crc2.restore();
        }
        move(_timesplice) {
            super.move(_timesplice);
            this.lifetime -= _timesplice;
            if (this.lifetime <= 0) {
                this.expendable = true;
            }
        }
    }
    AsteroidsGame.Projectile = Projectile;
})(AsteroidsGame || (AsteroidsGame = {}));
//# sourceMappingURL=Projectile.js.map