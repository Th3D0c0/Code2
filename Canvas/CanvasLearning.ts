namespace CanvasLearning {

    document.addEventListener("DOMContentLoaded", hndlLoad)
    window.addEventListener("resize", hndlResize)
    
    function hndlLoad(_event: Event): void {
        const resetButton: HTMLButtonElement = document.getElementById("b1") as HTMLButtonElement
        resetButton.addEventListener("click", onButtonClicked)
        draw()
    }

    function hndlResize(_event: Event): void {
        draw()
    }

    function onButtonClicked(_event: Event): void{
        draw()
    }

    type Vector2 = { x: number, y: number }
    function draw(): void {

        const canvas: HTMLCanvasElement = document.querySelector("canvas") as HTMLCanvasElement;
        const crc2: CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        crc2.fillStyle = "#539c99ff";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        // -------Triangle Art-----------
        for (let i:number = 0; i < 200; i++){
            const maxX: number = canvas.width
            const maxY: number = canvas.height
            const p1: Vector2 = {x: Math.random() * maxX, y: Math.random() * maxY};
            const p2: Vector2 = {x: Math.random() * maxX, y: Math.random() * maxY};
            const p3: Vector2 = {x: Math.random() * maxX, y: Math.random() * maxY};

            const colors: string[] = ["green", "yellow", "blue", "red"]
            drawTriangle(crc2, p1, p2, p3, colors[Math.floor(Math.random() * colors.length + 1)])
        }
        
        const radiusString: string | null = prompt("Enter radius: ", "150")
        const nrSegmentsString: string | null = prompt("Enter number of Segments: ", "15")
        if (radiusString !== null && nrSegmentsString !== null) {
            const radius: number = parseInt(radiusString)
            const segments: number = parseInt(nrSegmentsString)
            const center: Vector2 = { x: canvas.width / 2, y: canvas.height / 2 }
            drawTriangleFan(crc2, radius, segments, center)
        } else {
            alert("Enter a Valid number")
        }
    }

    function drawTriangle(_crc2: CanvasRenderingContext2D, _p1: Vector2, _p2: Vector2, _p3: Vector2, _color: string): void {
        _crc2.beginPath();
        _crc2.fillStyle = _color;
        _crc2.moveTo(_p1.x, _p1.y);
        _crc2.lineTo(_p2.x, _p2.y);
        _crc2.lineTo(_p3.x, _p3.y);
        _crc2.lineTo(_p1.x, _p1.y);
        _crc2.closePath();
        _crc2.fill();
        _crc2.stroke();
    }

    function drawTriangleFan(_crc2: CanvasRenderingContext2D, _radius: number, _nrOfFans: number, _center: Vector2): void {
        const radiusSlice: number = (2 * Math.PI) / _nrOfFans
        for (let i: number = 0; i < _nrOfFans; i++) {
            const startP2: Vector2 = { x: 0, y: -_radius }
            const rotatedP2: Vector2 = rotatePoint(startP2, radiusSlice * i)
            const startP3: Vector2 = { x: 0, y: -_radius }
            const rotatedP3: Vector2 = rotatePoint(startP3, radiusSlice + radiusSlice * i)

            const p2: Vector2 = moveVec2(rotatedP2, _center)
            const p3: Vector2 = moveVec2(rotatedP3, _center)

            drawTriangle(_crc2, _center, p2, p3, "green")
        }
    }

    function rotatePoint(_p1: Vector2, _rotation: number): Vector2 {
        // eslint-disable-next-line prefer-const
        let tmpVec2: Vector2 = { x: 0, y: 0 }
        tmpVec2.x = (Math.cos(_rotation) * _p1.x) - (Math.sin(_rotation) * _p1.y)
        tmpVec2.y = (Math.sin(_rotation) * _p1.x) + (Math.cos(_rotation) * _p1.y)
        return tmpVec2
    }

    function moveVec2(_v1: Vector2, _p1: Vector2): Vector2 {
        // eslint-disable-next-line prefer-const
        let tmpVec: Vector2 = { x: 0, y: 0 }
        tmpVec.x = _v1.x + _p1.x
        tmpVec.y = _v1.y + _p1.y
        return tmpVec
    }
}