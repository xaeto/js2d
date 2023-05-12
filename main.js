import Vec2 from "./src/math/vec2.js";
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
    console.log(evt);
    if(evt.key ==  " ") {
        player.jump();
    }
    if(evt.key ==  "ArrowLeft") {
        player.position.x -= 1;
    }
    if(evt.key ==  "ArrowRight") {
        player.position.x += 1;
    }
}

renderer.render();