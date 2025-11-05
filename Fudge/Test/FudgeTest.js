"use strict";
var Test;
(function (Test) {
    var f = FudgeCore;
    document.addEventListener("DOMContentLoaded", handleLoad);
    window.addEventListener("resize", handleResize);
    let viewPort;
    let node;
    let cmpMesh;
    function handleLoad(_event) {
        Test.canvas = document.querySelector("canvas");
        Test.canvas.width = window.innerWidth;
        Test.canvas.height = window.innerHeight;
        const mesh = new f.MeshSphere("Bob", 64, 64);
        const material = new f.Material("BobMaterial", f.ShaderLit);
        viewPort = new f.Viewport();
        node = new f.Node("BobNode");
        const cmpCamera = new f.ComponentCamera();
        cmpCamera.mtxPivot.translateZ(-5);
        node.addComponent(new f.ComponentMesh(mesh));
        cmpMesh = node.getComponent(f.ComponentMesh);
        cmpMesh.mtxPivot.translateX(1);
        node.addComponent(new f.ComponentMaterial(material));
        node.getComponent(f.ComponentMaterial).clrPrimary = new f.Color(1, 0, 0);
        node.addComponent(new f.ComponentTransform());
        viewPort.initialize("BobsViewport", node, cmpCamera, document.querySelector("canvas"));
        f.Loop.start();
        f.Loop.addEventListener("loopFrame" /* f.EVENT.LOOP_FRAME */, update);
    }
    function handleResize() {
        Test.canvas.width = window.innerWidth;
        Test.canvas.height = window.innerHeight;
    }
    function update() {
        const rotSpeed = 360 / 5;
        const deltaTime = f.Loop.timeFrameGame / 1000;
        node.getComponent(f.ComponentTransform).mtxLocal.rotateY(rotSpeed * deltaTime, true);
        viewPort.draw();
    }
})(Test || (Test = {}));
//# sourceMappingURL=FudgeTest.js.map