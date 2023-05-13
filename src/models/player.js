import Vec2 from "../math/vec2.js";
import Entity2D from "./entity.js";

export default class Player extends Entity2D {
    constructor(position = null, color = "red"){
        if(position == null) {
            super(10, new Vec2(320/2 - 12, 0), 48);
        } else {
            super(10, position, 48);
        }
        this.color = color;
        this.move_timeout = null;
        const el = document.createElement("div");
        this.element = el;
        this.is_jumping = false;
    }

    handleConstraint(dt){
        console.log(dt);
        const velocity_y = (this.position.y - this.old_position.y) ;
        const velocity_x = (this.position.x - this.old_position.x) ;

        if (this.position.y < 0) {
            this.position.y = 0;
            this.old_position.y = this.position.y + velocity_y; 
        } if (this.position.x <= 0) {
            this.position.x = 0;
            this.old_position.x = this.position.x + velocity_x;
        } if (this.position.x >= 320 - 48) {
            this.position.x = 320 - 48;
            this.old_position.x = this.position.x + velocity_x; 
        }
    }
    draw(){
        this.element.style.backgroundColor = this.color;
        this.element.style.border = "1px solid black";
        this.element.style.width = "42px";
        this.element.style.height = "42px";

        this.element.style.bottom = this.position.y + "px";
        this.element.style.left = this.position.x + "px";
        this.element.style.position = "absolute";
        this.element.style.borderRadius = "50%";
    }

    jump(){
        if(!this.is_jumping) {
            for(let i = 0; i < 3; ++i) {
                this.position.y += 1;
            }
        }
    }

    moveRight(){
        if(!this.move_timeout){
            clearTimeout(this.move_timeout);
        }
        this.position.x += 0.5;
        setTimeout(() => {}, 1/30);
    }

    moveLeft(){
        if(!this.move_timeout){
            clearTimeout(this.move_timeout);
        }
        this.position.x -= 0.5;
        setTimeout(() => {}, 1/30);
    }
}
