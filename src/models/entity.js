import Vec2 from "../math/vec2.js";

export default class Entity2D {
    constructor(mass, position, height) {
        this.height = height;
        this.mass = 10;
        this.position = position;
        this.force = new Vec2(0, 0);
        this.old_position = position;
    }

    updatePosition(dt) {
        // Semi-Implict Euler Integration | Mid Point Method
        // let accel = this.force.divide(this.mass);
        // this.velocity = this.velocity.plus(accel.multiply(0.5*dt));
        // this.position = this.position.plus(this.velocity.multiply(0.5*dt));
        // Verlet Integration
        const velocity = this.position.minus(this.old_position);

        // Save old_position for next integration
        this.old_position = this.position;
        const accel = this.force.divide(this.mass); // F = m*a | a = F/m
        const next_pos = this.position.plus(velocity.plus(accel.multiply(dt*dt)));
        this.position = next_pos;
    }

    accelerate(acc) {
        this.force = this.force.plus(acc);
    }
}
