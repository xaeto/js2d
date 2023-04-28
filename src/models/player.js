import Vec2 from "../math/vec2.js";
import Entity2D from "./entity.js";

export default class Player extends Entity2D {
    constructor(root, position = null, color = "red"){
        if(position == null) {
            super(10, new Vec2(320/2 - 24, 0), 48);
        } else {
            // super(10, new Vec2(0, 0), 48);
            super(10, new Vec2(position.x, position.y), 48);
        }
        this.color = color;
        const el = document.createElement("div");
        this.element = el;
        root.appendChild(this.element);
    }

    draw(){
        this.element.style.backgroundColor = this.color;
        this.element.style.width = "42px";
        this.element.style.height = "42px";

        this.element.style.top = this.position.y + "px";
        this.element.style.left = this.position.x + "px";
        this.element.style.position = "absolute";
    }

    jump(){
        const accel = new Vec2(0, 0.0001);
        this.accelerate(accel);
    }
}