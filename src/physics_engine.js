import Vec2 from "./math/vec2.js";
import { dist, sub } from "./math_helper.js";

export default class PhysicsEngine {
    constructor(world, gravitational_force = 1){
        this.gravitational_force = new Vec2(0, gravitational_force)
        this.world = world;
        this.objects = [];
    }

    update(dt) {
        this.applyGravity();
        this.handleConstraint();
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
            if (obj.position.y > 480) {
                obj.position.y = 0;
            }
            if (obj.position.x > 320) {
                obj.position.x= 0;
            }
            if (obj.position.x < 0) {
                obj.position.x= 296;
            }
        }
    }
}