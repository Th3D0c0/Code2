"use strict";
var AsteroidsGame;
(function (AsteroidsGame) {
    document.addEventListener("DOMContentLoaded", hndlLoad);
    const asteroids = [];
    function hndlLoad(_event) {
        console.log("Asteroids starting");
        const canvas = document.querySelector("canvas");
        if (!canvas) {
            return;
        }
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        AsteroidsGame.crc2 = canvas.getContext("2d");
        AsteroidsGame.crc2.fillStyle = "black";
        AsteroidsGame.crc2.strokeStyle = "white";
        AsteroidsGame.crc2.fillRect(0, 0, canvas.width, canvas.height);
        // canvas.addEventListener("mousedown", loadLaser);
        canvas.addEventListener("mouseup", shootLaser);
        // canvas.addEventListener("keypress", handleKeypress);
        // canvas.addEventListener("mousemove", setHeading);
        AsteroidsGame.createPaths();
        console.log("Asteroid paths: ", AsteroidsGame.asteroidPaths);
        createAsteroids(5);
        const asteroid = new AsteroidsGame.Asteroid(1);
        console.log("Asteroid Test:", asteroid);
        asteroid.draw();
        asteroid.move(0.1);
        window.setInterval(update, 20);
    }
    function shootLaser(_event) {
        console.log("Shoot Laser");
        const hotspot = new AsteroidsGame.Vector(_event.clientX - AsteroidsGame.crc2.canvas.offsetLeft, _event.clientY - AsteroidsGame.crc2.canvas.offsetTop);
        const asteroidHit = getAsteroidHit(hotspot);
        if (asteroidHit) {
            breakAsteroid(asteroidHit);
            console.log("Asdteroid is Hit!");
        }
    }
    function breakAsteroid(_asteroid) {
        if (_asteroid.size > 0.3) {
            for (let i = 0; i < 2; i++) {
                const fragment = new AsteroidsGame.Asteroid(_asteroid.size / 2, _asteroid.position.copy());
                fragment.velocity.add(_asteroid.velocity);
                asteroids.push(fragment);
            }
        }
        const index = asteroids.indexOf(_asteroid);
        asteroids.splice(index, 1);
    }
    function getAsteroidHit(_hotspot) {
        for (const asteroid of asteroids) {
            if (asteroid.isHit(_hotspot)) {
                return asteroid;
            }
        }
        return null;
    }
    function createAsteroids(_nAsteroids) {
        console.log("Creating Asteroids");
        for (let i = 0; i < _nAsteroids; i++) {
            const asteroid = new AsteroidsGame.Asteroid(1);
            asteroids.push(asteroid);
        }
    }
    function update() {
        console.log("Update");
        AsteroidsGame.crc2.fillRect(0, 0, AsteroidsGame.crc2.canvas.width, AsteroidsGame.crc2.canvas.height);
        for (const asteroid of asteroids) {
            asteroid.move(1 / 50);
            asteroid.draw();
        }
    }
})(AsteroidsGame || (AsteroidsGame = {}));
//# sourceMappingURL=Main.js.map