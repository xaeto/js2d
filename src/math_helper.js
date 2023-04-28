import Vec2 from "./math/vec2.js";

function dist(vec_a, vec_b){
    return Math.sqrt((vec_a.x - vec_b.x)^2 + (vec_a.y - vec_b.y)^2);
}

function vec_length(vec) {
    return Math.sqrt(vec.x * vec.x + vec.y * vec.y);
}

function add(vec_a, vec_b) {
    if(vec_b == undefined) {
        vec_b = new Vec2(0, 0);
    }
    return new Vec2(
        vec_a.x + vec_b.x,
        vec_a.y + vec_b.y
    );
}

function sub(vec_a, vec_b) {
    if(vec_b == undefined) {
        return vec_a;
    }
    return new Vec2(
        vec_a.x - vec_b.x,
        vec_a.y - vec_b.y
    );
}

function mult(vec_a, vec_b) {
    if(vec_b == undefined) {
        return new Vec2(0, 0);
    }
    return new Vec2(
        vec_a.x / vec_b.x,
        vec_a.y / vec_b.y
    );
}

function rotate(origin, theta) {
    let x = this.x - origin.x; 
    let y = this.y - origin.y; 

    return new Vec2(
        x * Math.cos(theta) - y * Math.sin(theta) + origin.x,
        x * Math.sin(theta) + y * Math.cos(theta) + origin.y,
    );
}

export {
    dist,
    add,
    sub,
    mult,
    vec_length
}