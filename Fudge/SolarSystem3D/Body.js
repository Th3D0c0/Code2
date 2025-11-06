"use strict";
var Test;
(function (Test) {
    var f = FudgeCore;
    class Body extends f.Node {
        static bodyCount = 0;
        cmpMesh;
        cmpMaterial;
        cmpBodyTransform;
        size;
        color;
        rotation;
        orbit;
        distance;
        id = 0;
        mesh;
        material;
        constructor(_name, _size, _color, _rotation, _orbit, _distance) {
            super(_name);
            this.id = Body.bodyCount++;
            this.size = _size;
            this.color = _color;
            this.rotation = _rotation;
            this.distance = _distance;
            this.orbit = 0;
            this.mesh = new f.MeshSphere(_name + "Mesh", 32, 32);
            this.cmpMesh = new f.ComponentMesh(this.mesh);
            this.addComponent(this.cmpMesh);
            this.cmpMesh.mtxPivot.scale(new f.Vector3(this.size, this.size, this.size));
            this.material = new f.Material(_name + "Material", f.ShaderLit, new f.CoatColored(f.Color.CSS(this.color)));
            this.cmpMaterial = new f.ComponentMaterial(this.material);
            this.addComponent(this.cmpMaterial);
            this.cmpBodyTransform = new f.ComponentTransform();
            this.addComponent(this.cmpBodyTransform);
            this.mtxLocal.translateX(this.distance);
        }
        update() {
            const rotationSpeed = 360 / 5;
            const angle = rotationSpeed * f.Loop.timeFrameGame / 1000;
            this.mtxLocal.rotateY(angle);
            for (const child of this.getChildren()) {
                child.update();
            }
        }
        createChild(_name, _size, _color, _rotation, _orbit, _distance) {
            const body = new Body(_name, _size, _color, _rotation, _orbit, _distance);
            this.addChild(body);
            return (body.id);
        }
        getPlanetChild(_id) {
            for (const child of this.getChildren()) {
                const body = child;
                if (_id == body.id) {
                    console.log(body);
                    return body;
                }
            }
            return null;
        }
    }
    Test.Body = Body;
})(Test || (Test = {}));
//# sourceMappingURL=Body.js.map