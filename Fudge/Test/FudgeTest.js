"use strict";
var Test;
(function (Test) {
    var f = FudgeCore;
    document.addEventListener("DOMContentLoaded", handleLoad);
    window.addEventListener("resize", handleResize);
    let viewPort;
    const sun = new Test.Body("Sun", 2, "red", 2, 2, 0);
    const earth = sun.createChild("earth", 1, "blue", 1, 1, 5);
    sun.getPlanetChild(earth)?.createChild("Moon", 0.5, "grey", 0, 1, 1);
    function handleLoad(_event) {
        Test.canvas = document.querySelector("canvas");
        Test.canvas.width = window.innerWidth;
        Test.canvas.height = window.innerHeight;
        const cmpCamera = new f.ComponentCamera();
        cmpCamera.mtxPivot.translateZ(-20);
        viewPort = new f.Viewport();
        viewPort.initialize("BobsViewport", sun, cmpCamera, document.querySelector("canvas"));
        f.Loop.start();
        f.Loop.addEventListener("loopFrame" /* f.EVENT.LOOP_FRAME */, update);
    }
    function handleResize() {
        Test.canvas.width = window.innerWidth;
        Test.canvas.height = window.innerHeight;
    }
    function update() {
        sun.update();
        viewPort.draw();
    }
})(Test || (Test = {}));
//# sourceMappingURL=FudgeTest.js.map