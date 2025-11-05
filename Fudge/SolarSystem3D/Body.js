"use strict";
var Test;
(function (Test) {
    var f = FudgeCore;
    class Body extends f.Node {
        compMesh;
        cmpMaterial;
        cmpTransform;
        mesh;
        material;
        constructor(_name) {
            super(_name);
            this.mesh = new f.MeshSphere(_name + "Mesh", 32, 32);
            this.compMesh = new f.ComponentMesh(this.mesh);
            this.material = new f.Material(_name + "Material", f.ShaderLit);
            this.cmpMaterial = new f.ComponentMaterial(this.material);
        }
        update() {
            const rotationSpeed = 360 / 5;
            const angle = rotationSpeed * f.Loop.timeFrameGame / 1000;
            this.getComponent(f.ComponentTransform).mtxLocal.rotateY(angle, true);
            this.getComponent(f.ComponentMesh).mtxPivot.rotateY(-3 * angle);
        }
    }
    Test.Body = Body;
})(Test || (Test = {}));
//# sourceMappingURL=Body.js.map