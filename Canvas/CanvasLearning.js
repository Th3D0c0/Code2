"use strict";
var CanvasLearning;
(function (CanvasLearning) {
    document.addEventListener("DOMContentLoaded", hndlLoad);
    window.addEventListener("resize", hndlResize);
    function hndlLoad(_event) {
        // const resetButton: HTMLButtonElement = document.getElementById("b1") as HTMLButtonElement
        draw();
    }
    function hndlResize(_event) {
        draw();
    }
    function draw() {
        const canvas = document.querySelector("canvas");
        const crc2 = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        crc2.fillStyle = "#539c99ff";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        // for (let i:number = 0; i < 200; i++){
        //     const maxX: number = canvas.width
        //     const maxY: number = canvas.height
        //     const p1: Vector2 = {x: Math.random() * maxX, y: Math.random() * maxY};
        //     const p2: Vector2 = {x: Math.random() * maxX, y: Math.random() * maxY};
        //     const p3: Vector2 = {x: Math.random() * maxX, y: Math.random() * maxY};
        //     const colors: string[] = ["green", "yellow", "blue", "red"]
        //     drawTriangle(crc2, p1, p2, p3, colors[Math.floor(Math.random() * colors.length + 1)])
        // }
        // crc2.save();
        // crc2.fillStyle = "green"
        // crc2.rotate(45 * Math.PI / 180);
        // crc2.fillRect(250, 0, 250, 250);
        // crc2.restore();
        const radiusString = prompt("Enter radius: ", "150");
        const nrSegmentsString = prompt("Enter number of Segments: ", "15");
        if (radiusString !== null && nrSegmentsString !== null) {
            const radius = parseInt(radiusString);
            const segments = parseInt(nrSegmentsString);
            const center = { x: canvas.width / 2, y: canvas.height / 2 };
            drawTriangleFan(crc2, radius, segments, center);
        }
        else {
            alert("Enter a Valid number");
        }
    }
    function drawTriangle(_crc2, _p1, _p2, _p3, _color) {
        _crc2.beginPath();
        _crc2.fillStyle = _color;
        _crc2.moveTo(_p1.x, _p1.y);
        _crc2.lineTo(_p2.x, _p2.y);
        _crc2.lineTo(_p3.x, _p3.y);
        _crc2.lineTo(_p1.x, _p1.y);
        _crc2.closePath();
        _crc2.fill();
    }
    function drawTriangleFan(_crc2, _radius, _nrOfFans, _center) {
        const radiusSlice = (2 * Math.PI) / _nrOfFans;
        for (let i = 0; i < _nrOfFans; i++) {
            const startP2 = { x: 0, y: -_radius };
            const rotatedP2 = rotatePoint(startP2, radiusSlice * i);
            const startP3 = { x: 0, y: -_radius };
            const rotatedP3 = rotatePoint(startP3, radiusSlice + radiusSlice * i);
            const p2 = moveVec2(rotatedP2, _center);
            const p3 = moveVec2(rotatedP3, _center);
            drawTriangle(_crc2, _center, p2, p3, "green");
        }
    }
    function rotatePoint(_p1, _rotation) {
        // eslint-disable-next-line prefer-const
        let tmpVec2 = { x: 0, y: 0 };
        tmpVec2.x = (Math.cos(_rotation) * _p1.x) - (Math.sin(_rotation) * _p1.y);
        tmpVec2.y = (Math.sin(_rotation) * _p1.x) + (Math.cos(_rotation) * _p1.y);
        return tmpVec2;
    }
    function moveVec2(_v1, _p1) {
        // eslint-disable-next-line prefer-const
        let tmpVec = { x: 0, y: 0 };
        tmpVec.x = _v1.x + _p1.x;
        tmpVec.y = _v1.y + _p1.y;
        return tmpVec;
    }
})(CanvasLearning || (CanvasLearning = {}));
//# sourceMappingURL=CanvasLearning.js.map