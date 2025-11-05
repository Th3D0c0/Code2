"use strict";
var AsteroidsGame;
(function (AsteroidsGame) {
    AsteroidsGame.lineWidth = 2;
    document.addEventListener("DOMContentLoaded", hndlLoad);
    const movables = [];
    function hndlLoad(_event) {
        const canvas = document.querySelector("canvas");
        if (!canvas) {
            return;
        }
        canvas.width = 600;
        canvas.height = 600;
        AsteroidsGame.crc2 = canvas.getContext("2d");
        AsteroidsGame.crc2.fillStyle = "black";
        AsteroidsGame.crc2.strokeStyle = "white";
        AsteroidsGame.crc2.fillRect(0, 0, canvas.width, canvas.height);
        AsteroidsGame.crc2.lineWidth = AsteroidsGame.lineWidth;
        canvas.addEventListener("mousedown", shootProjectile);
        canvas.addEventListener("mouseup", shootLaser);
        // canvas.addEventListener("keypress", handleKeypress);
        // canvas.addEventListener("mousemove", setHeading);
        AsteroidsGame.createPaths();
        createAsteroids(5);
        const asteroid = new AsteroidsGame.Asteroid(1);
        asteroid.draw();
        asteroid.move(0.1);
        window.setInterval(update, 20);
    }
    function shootProjectile(_event) {
        const hotspot = new AsteroidsGame.Vector(_event.clientX - AsteroidsGame.crc2.canvas.offsetLeft, _event.clientY - AsteroidsGame.crc2.canvas.offsetTop);
        const velocity = AsteroidsGame.Vector.getRandom(100, 100);
        const projectile = new AsteroidsGame.Projectile(hotspot, velocity);
        movables.push(projectile);
    }
    function shootLaser(_event) {
        const hotspot = new AsteroidsGame.Vector(_event.clientX - AsteroidsGame.crc2.canvas.offsetLeft, _event.clientY - AsteroidsGame.crc2.canvas.offsetTop);
        const asteroidHit = getAsteroidHit(hotspot);
        if (asteroidHit) {
            breakAsteroid(asteroidHit);
        }
    }
    function breakAsteroid(_asteroid) {
        if (_asteroid.size > 0.3) {
            for (let i = 0; i < 2; i++) {
                const fragment = new AsteroidsGame.Asteroid(_asteroid.size / 2, _asteroid.position.copy());
                fragment.velocity.add(_asteroid.velocity);
                movables.push(fragment);
            }
        }
        _asteroid.expendable = true;
    }
    function getAsteroidHit(_hotspot) {
        for (const movable of movables) {
            if (movable instanceof AsteroidsGame.Asteroid && movable.isHit(_hotspot)) {
                return movable;
            }
        }
        return null;
    }
    function createAsteroids(_nAsteroids) {
        for (let i = 0; i < _nAsteroids; i++) {
            const asteroid = new AsteroidsGame.Asteroid(1);
            movables.push(asteroid);
        }
    }
    function update() {
        AsteroidsGame.crc2.fillRect(0, 0, AsteroidsGame.crc2.canvas.width, AsteroidsGame.crc2.canvas.height);
        for (const movable of movables) {
            movable.move(1 / 50);
            movable.draw();
        }
        deleteExpandable();
    }
    function deleteExpandable() {
        for (let i = movables.length - 1; i >= 0; i--) {
            if (movables[i].expendable == true) {
                movables.splice(i, 1);
            }
        }
    }
})(AsteroidsGame || (AsteroidsGame = {}));
//# sourceMappingURL=Main.js.map