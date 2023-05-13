import Player from "./src/models/player.js";
import World from "./src/models/world.js";
import PhysicsEngine from "./src/physics_engine.js";
import Renderer from "./src/renderer.js";

const world = new World(320, 480);
const engine = new PhysicsEngine(world);

const world_element = document.getElementById("world");
const renderer = new Renderer(engine, world_element);

const player = new Player();
engine.addObject(player);

window.onkeydown = function(evt) {
    if(evt.key ==  " ") {
        player.jump();
    }
    if(evt.key ==  "ArrowLeft") {
        player.moveLeft();
    }
    if(evt.key ==  "ArrowRight") {
        player.moveRight();
    }
}

world_element.onclick = function(evt){
    player.position.x = evt.clientX;
    player.position.y = 380 - evt.clientY;
}

renderer.render();
