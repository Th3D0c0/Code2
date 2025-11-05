"use strict";
var AsteroidsGame;
(function (AsteroidsGame) {
    class Vector {
        x;
        y;
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        static getDifference(_v0, _v1) {
            const vector = new Vector(_v0.x - _v1.x, _v0.y - _v1.y);
            return vector;
        }
        static getRandom(_minLength, _maxLength) {
            const vector = new Vector(0, 0);
            const length = _minLength + Math.random() * (_maxLength - _minLength);
            const direction = Math.random() * 2 * Math.PI;
            vector.set(Math.cos(direction), Math.sin(direction));
            vector.scale(length);
            return vector;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        copy() {
            return new Vector(this.x, this.y);
        }
    }
    AsteroidsGame.Vector = Vector;
})(AsteroidsGame || (AsteroidsGame = {}));
//# sourceMappingURL=Vector.js.map