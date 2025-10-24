"use strict";
var CanvasLearning;
(function (CanvasLearning) {
    document.addEventListener("DOMContentLoaded", hndlLoad);
    window.addEventListener("resize", hndlResize);
    function hndlLoad(_event) {
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
        for (let i = 0; i < 200; i++) {
            const maxX = canvas.width;
            const maxY = canvas.height;
            const p1 = { x: Math.random() * maxX, y: Math.random() * maxY };
            const p2 = { x: Math.random() * maxX, y: Math.random() * maxY };
            const p3 = { x: Math.random() * maxX, y: Math.random() * maxY };
            const colors = ["green", "yellow", "blue", "red"];
            drawTriangle(crc2, p1, p2, p3, colors[Math.floor(Math.random() * colors.length + 1)]);
        }
        // crc2.beginPath();
        // crc2.arc(100, 100, 20, 0, 1.5 * Math.PI);
        // crc2.closePath();
        // crc2.stroke();
        // crc2.beginPath();
        // crc2.ellipse(250, 250, 50, 25, Math.PI, 4 * Math.PI, 0, false);
        // crc2.closePath();
        // crc2.stroke();
        // crc2.beginPath();
        // crc2.moveTo(250, 500);
        // crc2.lineTo(500, 250);
        // crc2.closePath();
        // crc2.stroke();
        const p1 = { x: 500, y: 500 };
        const p2 = { x: 700, y: 550 };
        const p3 = { x: 200, y: 550 };
        // Draw Triangle
        drawTriangle(crc2, p1, p2, p3, "green");
        // crc2.beginPath();
        // crc2.moveTo(600, 250);
        // crc2.bezierCurveTo(600, 400, 500, 300, 800, 300);
        // crc2.closePath();
        // crc2.stroke();
        // crc2.font = "25px serif";
        // crc2.fillStyle = "#00ff00";
        // crc2.fillText("This is a important text", 800, 300);
        // const path: Path2D = new Path2D();
        // path.arc(250, 700, 50, 0, 1.5 * Math.PI, false);
        // crc2.stroke(path);
        // crc2.save();
        // crc2.fillStyle = "green"
        // crc2.rotate(45 * Math.PI / 180);
        // crc2.fillRect(250, 0, 250, 250);
        // crc2.restore();
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
})(CanvasLearning || (CanvasLearning = {}));
//# sourceMappingURL=CanvasLearning.js.map