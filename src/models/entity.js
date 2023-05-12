import Vec2 from "../math/vec2.js";

export default class Entity2D {
    constructor(mass, position, height) {
        this.height = height;
        this.mass = mass;
        this.position = position;
        this.acceleration = new Vec2(0, 0);
        this.velocity = new Vec2(0, 0);
    }

    updatePosition(dt) {
        let velocity = this.position.minus(this.position_old);
        this.position_old = this.position;
        this.position = this.position
            .plus(velocity)
            .plus(this.acceleration.multiply(dt*dt));
        this.acceleration = new Vec2(0, 0);
    }

    accelerate(acc) {
        this.acceleration = this.acceleration.plus(acc);
    }
}