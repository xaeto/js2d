import Vec2 from "../math/vec2.js";
import {sub, add, mult} from "../math_helper.js";

export default class Entity2D {
    constructor(mass, position, height) {
        this.height = height;
        this.mass = mass;
        this.position = position;
        this.velocity = new Vec2(0, 0);
    }

    updatePosition(dt){
        const velocity = sub(this.position, this.position_old);
        this.position_old = this.position;
        this.position = add(this.position, velocity);

        if(this.acceleration != undefined) {
            this.position = add(this.position, mult(this.acceleration, new Vec2(dt*dt, dt*dt)));
            this.acceleration = null;
        }
    }

    accelerate(acc) {
        this.acceleration = add(this.position, acc);
    }
}