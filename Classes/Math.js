export var testMath;
(function (testMath) {
    class Vector {
        x;
        y;
        constructor() {
            this.x = 0;
            this.y = 0;
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
    }
    testMath.Vector = Vector;
})(testMath || (testMath = {}));
//# sourceMappingURL=Math.js.map