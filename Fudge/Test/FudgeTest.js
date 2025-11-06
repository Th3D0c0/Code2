"use strict";
var Test;
(function (Test) {
    var f = FudgeCore;
    document.addEventListener("DOMContentLoaded", handleLoad);
    window.addEventListener("resize", handleResize);
    let viewPort;
    // let node: f.Node;
    // let cmpMesh: f.ComponentMesh;
    const sun = new Test.Body("Sun", 2, "red", 2, 2, 4);
    sun.createChild("earth", 1, "blue", 1, 1, 1);
    function handleLoad(_event) {
        Test.canvas = document.querySelector("canvas");
        Test.canvas.width = window.innerWidth;
        Test.canvas.height = window.innerHeight;
        const cmpCamera = new f.ComponentCamera();
        cmpCamera.mtxPivot.translateZ(-20);
        viewPort = new f.Viewport();
        // const mesh: f.Mesh = new f.MeshSphere("Bob", 64, 64);
        // const material: f.Material = new f.Material("BobMaterial", f.ShaderLit);
        // node = new f.Node("BobNode");
        // node.addComponent(new f.ComponentMesh(mesh));
        // cmpMesh = node.getComponent(f.ComponentMesh);
        // cmpMesh.mtxPivot.translateX(1);
        // node.addComponent(new f.ComponentMaterial(material));
        // node.getComponent(f.ComponentMaterial).clrPrimary = new f.Color(1,0,0);
        // node.addComponent(new f.ComponentTransform());
        viewPort.initialize("BobsViewport", sun, cmpCamera, document.querySelector("canvas"));
        f.Loop.start();
        f.Loop.addEventListener("loopFrame" /* f.EVENT.LOOP_FRAME */, update);
    }
    function handleResize() {
        Test.canvas.width = window.innerWidth;
        Test.canvas.height = window.innerHeight;
    }
    function update() {
        // const rotSpeed: number = 360/5;
        // const deltaTime: number = f.Loop.timeFrameGame / 1000;
        // node.getComponent(f.ComponentTransform).mtxLocal.rotateY(rotSpeed * deltaTime, true);
        sun.update();
        viewPort.draw();
    }
})(Test || (Test = {}));
//# sourceMappingURL=FudgeTest.js.map