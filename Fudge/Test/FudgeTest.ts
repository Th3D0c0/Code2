namespace Test{
    import f = FudgeCore;
    document.addEventListener("DOMContentLoaded", handleLoad);
    window.addEventListener("resize", handleResize);
    let viewPort: f.Viewport;
    let node: f.Node;
    let cmpMesh: f.ComponentMesh;

    export let canvas: HTMLCanvasElement;
    
    function handleLoad(_event: Event): void{
        canvas = document.querySelector("canvas")!;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const mesh: f.Mesh = new f.MeshSphere("Bob", 64, 64);
        const material: f.Material = new f.Material("BobMaterial", f.ShaderLit);
        viewPort = new f.Viewport();
        node = new f.Node("BobNode");
        
        const cmpCamera: f.ComponentCamera = new f.ComponentCamera();
        cmpCamera.mtxPivot.translateZ(-5);
        
        node.addComponent(new f.ComponentMesh(mesh));
        cmpMesh = node.getComponent(f.ComponentMesh)
        cmpMesh.mtxPivot.translateX(1)
        node.addComponent(new f.ComponentMaterial(material));
        node.getComponent(f.ComponentMaterial).clrPrimary = new f.Color(1,0,0);
        node.addComponent(new f.ComponentTransform())

        viewPort.initialize("BobsViewport", node, cmpCamera, document.querySelector("canvas") as HTMLCanvasElement);
        f.Loop.start();
        f.Loop.addEventListener(f.EVENT.LOOP_FRAME, update);
    }

    function handleResize():void{
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function update():void {
        const rotSpeed: number = 360/5;
        const deltaTime: number = f.Loop.timeFrameGame / 1000;
        node.getComponent(f.ComponentTransform).mtxLocal.rotateY(rotSpeed * deltaTime, true);
        viewPort.draw();
    }
}