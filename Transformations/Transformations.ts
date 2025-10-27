namespace Transformations {
    window.addEventListener("resize", hndlResize)
    document.addEventListener("DOMContentLoaded", hndlLoad)
    function hndlLoad(_event: Event): void {
        draw()
    }
    function hndlResize(_event: Event): void {
        draw()
    }

    function draw(): void {
        const canvas: HTMLCanvasElement = document.querySelector("canvas") as HTMLCanvasElement
        const ctx: CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx.fillStyle = "#6768a1ff";
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        ctx.save()
        ctx.transform(1,0,0, 1, 1, 1)
        drawCoordinateSystem(ctx, "black")
        ctx.restore()

        ctx.save()
        ctx.translate(200, 300)
        drawCoordinateSystem(ctx, "green")
        ctx.restore()

        ctx.save()
        ctx.translate(200, 300)
        ctx.rotate( Math.PI)
        drawCoordinateSystem(ctx, "yellow")
        ctx.restore()

        ctx.save()
        ctx.translate(300, 400)
        ctx.scale(2,2)
        drawCoordinateSystem(ctx, "white")
        ctx.restore()

    }

    function drawCoordinateSystem(_ctx: CanvasRenderingContext2D, _color: string): void {
        // X-Axis
        _ctx.beginPath()
        _ctx.strokeStyle = _color
        _ctx.lineWidth = 3
        _ctx.moveTo(0, 10)
        _ctx.lineTo(200, 10)
        _ctx.moveTo(170, 20)
        _ctx.lineTo(200, 10)
        _ctx.lineTo(170, 0)
        _ctx.stroke()

        // Y-Axis
        _ctx.beginPath()
        _ctx.strokeStyle = _color
        _ctx.lineWidth = 3
        _ctx.moveTo(10, 0)
        _ctx.lineTo(10, 200)
        _ctx.moveTo(25, 170)
        _ctx.lineTo(10, 200)
        _ctx.lineTo(-5, 170)
        _ctx.stroke()

        for (let i: number = 0; i < 16; i++) {
            _ctx.beginPath()
            _ctx.strokeStyle = _color
            _ctx.lineWidth = 1
            _ctx.moveTo(10 + i + i * 10, 10)
            _ctx.lineTo(10 + i + i * 10, 20)
            _ctx.stroke()
        }
        for (let i: number = 0; i < 16; i++) {
            _ctx.beginPath()
            _ctx.strokeStyle = _color
            _ctx.lineWidth = 1
            _ctx.moveTo(10, i + i * 10)
            _ctx.lineTo(20, i + i * 10)
            _ctx.stroke()
        }
    }
}