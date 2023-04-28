export default class Renderer {
    constructor(engine){
        this.engine = engine;
        this.previous_timestamp = null;
    }

    render() {
        const objects_to_render = this.engine.objects;
        for(let obj of objects_to_render){
            obj.draw();
        }
        this.time = performance.now();
        requestAnimationFrame(this.loop.bind(this));
    }

    loop (timestamp){
        const objects = this.engine.objects;
        const dt = (performance.now() - this.time);
        this.engine.update(dt);
        for(let obj of objects){
            obj.draw();
        }
        requestAnimationFrame(this.loop.bind(this));
    }
}