namespace Test{
    import f = FudgeCore;
    document.addEventListener("DOMContentLoaded", handleLoad);
    window.addEventListener("resize", handleResize);
    let viewPort: f.Viewport;

    const sun: Body = new Body("Sun", 2, "red", 2, 2, 0);
    const earth: number = sun.createChild("earth", 1, "blue", 1,1,5);
    sun.getPlanetChild(earth)?.createChild("Moon", 0.5, "grey", 0, 1, 1);

    export let canvas: HTMLCanvasElement;
    
    function handleLoad(_event: Event): void{
        canvas = document.querySelector("canvas")!;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const cmpCamera: f.ComponentCamera = new f.ComponentCamera();
        cmpCamera.mtxPivot.translateZ(-20);
        viewPort = new f.Viewport();

        viewPort.initialize("BobsViewport", sun, cmpCamera, document.querySelector("canvas") as HTMLCanvasElement);
        f.Loop.start();
        f.Loop.addEventListener(f.EVENT.LOOP_FRAME, update);
    }

    function handleResize():void{
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function update():void {
        sun.update();
        viewPort.draw();
    }
}