namespace AsteroidsGame {
    export let crc2: CanvasRenderingContext2D;
    document.addEventListener("DOMContentLoaded", hndlLoad)

    const asteroids: Asteroid[] = [];

    function hndlLoad(_event: Event): void {
        console.log("Asteroids starting");
        const canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas) {
            return;
        }
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        crc2.fillStyle = "black";
        crc2.strokeStyle = "white";
        crc2.fillRect(0, 0, canvas.width, canvas.height);

        // canvas.addEventListener("mousedown", loadLaser);
        canvas.addEventListener("mouseup", shootLaser);
        // canvas.addEventListener("keypress", handleKeypress);
        // canvas.addEventListener("mousemove", setHeading);

        createPaths();
        console.log("Asteroid paths: ", asteroidPaths);

        createAsteroids(5);

        const asteroid: Asteroid = new Asteroid(1);
        console.log("Asteroid Test:", asteroid);
        asteroid.draw();
        asteroid.move(0.1);

        window.setInterval(update, 20);
    }

    function shootLaser(_event: MouseEvent): void {
        console.log("Shoot Laser");
        const hotspot: Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop);
        const asteroidHit: Asteroid | null = getAsteroidHit(hotspot);
        if(asteroidHit){
            breakAsteroid(asteroidHit);
            console.log("Asdteroid is Hit!");
        }
    }

    function breakAsteroid(_asteroid: Asteroid): void{
        if(_asteroid.size > 0.3){
            for (let i:number = 0; i < 2; i++){
                const fragment: Asteroid = new Asteroid(_asteroid.size / 2, _asteroid.position.copy());
                fragment.velocity.add(_asteroid.velocity);
                asteroids.push(fragment);
            }
        }

        const index: number = asteroids.indexOf(_asteroid);
        asteroids.splice(index, 1); 
    }

    function getAsteroidHit(_hotspot: Vector): Asteroid | null{
        for (const asteroid of asteroids){
            if(asteroid.isHit(_hotspot)){
                return asteroid;
            }
        }
        return null;
    }

    function createAsteroids(_nAsteroids: number): void {
        console.log("Creating Asteroids");
        for (let i: number = 0; i < _nAsteroids; i++) {
            const asteroid: Asteroid = new Asteroid(1);
            asteroids.push(asteroid);
        }
    }

    function update(): void {
        console.log("Update");
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        for (const asteroid of asteroids) {
            asteroid.move(1 / 50);
            asteroid.draw();
        }

    }
}