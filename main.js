import Vec2 from "./src/math/vec2.js";
import Player from "./src/models/player.js";
import PhysicsEngine from "./src/physics_engine.js";
import Renderer from "./src/renderer.js";

const world = document.getElementById("world");
const engine = new PhysicsEngine();
const renderer = new Renderer(engine);

const player = new Player(world);
engine.addObject(player);

window.onkeydown = function(evt) {
    console.log(evt);
    if(evt.key ==  " ") {
        player.jump();
    }
}
renderer.render();