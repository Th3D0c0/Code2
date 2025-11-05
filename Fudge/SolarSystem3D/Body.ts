namespace Test{
    import f = FudgeCore;
    export class Body extends f.Node{
        public compMesh: f.ComponentMesh;
        public cmpMaterial: f.ComponentMaterial;
        public cmpTransform: f.ComponentTransform;
        private mesh: f.Mesh;
        private material: f.Material;

        public constructor(_name: string){
            super(_name);
            this.mesh = new f.MeshSphere(_name+"Mesh", 32,32);
            this.compMesh = new f.ComponentMesh(this.mesh);
            this.material = new f.Material(_name+"Material", f.ShaderLit);
            this.cmpMaterial = new f.ComponentMaterial(this.material);
        }

        update():void{
            const rotationSpeed: number = 360 / 5;
            const angle: number = rotationSpeed * f.Loop.timeFrameGame / 1000;
    
            this.getComponent(f.ComponentTransform).mtxLocal.rotateY(angle, true);
            this.getComponent(f.ComponentMesh).mtxPivot.rotateY(-3 * angle);
        }
    }
}