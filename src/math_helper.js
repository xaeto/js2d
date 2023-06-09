import Vec2 from "./math/vec2.js";

function dist(vec_a, vec_b){
    return Math.sqrt((vec_b.x - vec_a.x)^2 + (vec_b.y - vec_a.y)^2);
}

function vec_length(vec) {
    return Math.sqrt(vec.x * vec.x + vec.y * vec.y);
}

function add(vec_a, vec_b) {
    return new Vec2(
        vec_a?.x | 0 + vec_b?.x | 0,
        vec_a?.y | 0 + vec_b?.y | 0
    );
}

function sub(vec_a, vec_b) {
    return new Vec2(
        vec_a?.x | 0 - vec_b?.x | 0,
        vec_a?.y | 0 - vec_b?.y | 0
    );
}

function div(vec_a, vec_b) {
    if(vec_b == undefined) {
        return new Vec2(vec_a.x, vec_b.y);
    }
    return new Vec2(
        vec_a.x / vec_b.x,
        vec_a.y / vec_b.y
    );
}

function mult(vec_a, vec_b) {
    if(vec_b == undefined) {
        vec_b = new Vec2(0, 0);
    }
    console.log(vec_a, vec_b);
    return new Vec2(
        vec_a.x * vec_b.x,
        vec_a.y * vec_b.y
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