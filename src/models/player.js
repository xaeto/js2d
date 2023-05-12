import Vec2 from "../math/vec2.js";
import Entity2D from "./entity.js";

export default class Player extends Entity2D {
    constructor(position = null, color = "red"){
        if(position == null) {
            console.log('test 1')
            super(10, new Vec2(320/2 - 12, 480 - 24), 48);
        } else {
            console.log('test 2')
            super(10, position, 48);
        }
        this.color = color;
        const el = document.createElement("div");
        this.element = el;
        this.is_jumping = false;
    }

    draw(){
        this.element.style.backgroundColor = this.color;
        this.element.style.border = "1px solid black";
        this.element.style.width = "42px";
        this.element.style.height = "42px";

        this.element.style.top = this.position.y + "px";
        this.element.style.left = this.position.x + "px";
        this.element.style.position = "absolute";
        this.element.style.borderRadius = "50%";
    }

    jump(){
        if(!this.is_jumping) {
            for(let i = 0; i < 5; i++){
                this.position.y -= 1;
            }
        }
    }
}