import Vec2 from "./math/vec2.js";
import { dist, sub } from "./math_helper.js";

export default class PhysicsEngine {
    constructor(world, gravitational_force = 9.81){
        this.gravitational_force = new Vec2(0, -gravitational_force)
        this.world = world;
        this.objects = [];
    }

    update(dt) {
        console.log(dt);
        this.applyGravity();
        this.handleConstraint(dt);
        this.updatePositions(dt);
    }

    addObject(entity){
        this.objects.push(entity);
    }

    updatePositions(dt){
        for(let entity of this.objects) {
            entity.updatePosition(dt);
        }
    }

    applyGravity(){
        for(let entity of this.objects) {
            entity.accelerate(this.gravitational_force);
        }
    }

    handleConstraint(dt) {
        for(let obj of this.objects) {
            obj.handleConstraint(dt);
        }
    }
}
