import Vec2 from "./math/vec2.js";
import { vec_length, dist }  from "./math_helper.js"

export default class PhysicsEngine {
    constructor(gravitational_force = 9.81){
        this.gravitational_force = new Vec2(0, gravitational_force)
        this.objects = [];
    }

    update(dt) {
        this.applyGravity();
        this.updatePositions(dt);
    }

    addObject(entity){
        this.objects.push(entity);
    }

    updatePositions(t){
        for(let entity of this.objects) {
            entity.updatePosition(t);
        }
    }

    applyGravity(){
        for(let entity of this.objects) {
            entity.accelerate(this.gravitational_force);
        }
    }

    handleConstraint() {
        for(let obj of this.objects) {
            console.log(obj);
        }
    }
}