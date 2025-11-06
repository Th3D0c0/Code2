namespace Test {
    import f = FudgeCore;
    export class Body extends f.Node {
        private static bodyCount: number = 0;

        public cmpMesh: f.ComponentMesh;
        public cmpMaterial: f.ComponentMaterial;
        public cmpBodyTransform: f.ComponentTransform;
        public size: number;
        public color: string;
        public rotation: number;
        public orbit: number;
        public distance: number;
        public id: number = 0;

        private mesh: f.Mesh;
        private material: f.Material;

        public constructor(_name: string, _size: number, _color: string, _rotation: number, _orbit: number, _distance: number) {
            super(_name);
            this.id = Body.bodyCount++;
            this.size = _size;
            this.color = _color;
            this.rotation = _rotation;
            this.distance = _distance;
            this.orbit = 0;

            this.mesh = new f.MeshSphere(_name + "Mesh", 32, 32);
            this.cmpMesh = new f.ComponentMesh(this.mesh);
            this.cmpMesh.mtxWorld.scale(new f.Vector3(3, 3, 3));
            this.cmpMesh.mtxPivot.translateX(this.distance);
            this.addComponent(this.cmpMesh);

            this.material = new f.Material(_name + "Material", f.ShaderLit);
            this.cmpMaterial = new f.ComponentMaterial(this.material);
            this.addComponent(this.cmpMaterial);

            this.cmpBodyTransform = new f.ComponentTransform();
            this.addComponent(this.cmpBodyTransform);

        }

        public update(_matrix?: f.Matrix4x4): void {
            const rotationSpeed: number = 360 / 5;
            const angle: number = rotationSpeed * f.Loop.timeFrameGame / 1000;

            this.mtxLocal.rotateY(angle)

            for (const child of this.getChildren()) {
                (child as Body).update();
            }
        }

        public createChild(_name: string, _size: number, _color: string, _rotation: number, _orbit: number, _distance: number): number {
            const body: Body = new Body(_name, _size, _color, _rotation, _orbit, _distance);
            this.addChild(body);
            return (body.id);
        }

        public getPlanetChild(_id: number): Body | null {
            for (const child of this.getChildren()) {
                const body: Body = child as Body;
                if (_id == body.id) {
                    console.log(body);
                    return body;
                }
            }
            return null
        }
    }
}