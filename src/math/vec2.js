export default class Vec2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus (vec) {
        if(vec == undefined){
            return new Vec2(0, 0);
        }
        return new Vec2(
            this.x + vec.x,
            this.y + vec.y
        );
    }

    minus (vec) {
        if(vec == undefined){
            return new Vec2(0, 0);
        }
        return new Vec2(
            this.x - vec.x,
            this.y - vec.y
        );
    }

    multiply (val) {
        if(val == undefined){
            return new Vec2(0, 0);
        }
        return new Vec2(
            this.x * val,
            this.y * val
        );
    }

    divide (val) {
        if(val == undefined){
            return new Vec2(0, 0);
        }
        return new Vec2(
            this.x / val,
            this.y / val
        );
    }
}