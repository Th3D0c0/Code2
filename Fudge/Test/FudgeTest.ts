namespace Test{
    import f = FudgeCore;
    document.addEventListener("DOMContentLoaded", handleLoad);
    window.addEventListener("resize", handleResize);
    let viewPort: f.Viewport;
    // let node: f.Node;
    // let cmpMesh: f.ComponentMesh;

    const sun: Body = new Body("Sun", 2, "red", 2, 2, 4);
    sun.createChild("earth", 1, "blue", 1,1,1);

    export let canvas: HTMLCanvasElement;
    
    function handleLoad(_event: Event): void{
        canvas = document.querySelector("canvas")!;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const cmpCamera: f.ComponentCamera = new f.ComponentCamera();
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

        viewPort.initialize("BobsViewport", sun, cmpCamera, document.querySelector("canvas") as HTMLCanvasElement);
        f.Loop.start();
        f.Loop.addEventListener(f.EVENT.LOOP_FRAME, update);
    }

    function handleResize():void{
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function update():void {
        // const rotSpeed: number = 360/5;
        // const deltaTime: number = f.Loop.timeFrameGame / 1000;
        // node.getComponent(f.ComponentTransform).mtxLocal.rotateY(rotSpeed * deltaTime, true);
        sun.update();

        viewPort.draw();
    }
}