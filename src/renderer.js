export default class Renderer {
    constructor(engine, element){
        this.engine = engine;
        this.element = element;
        this.previous_timestamp = null;
    }

    render() {
        this.engine.world.draw();
        this.element.style.width = this.engine.world.width + "px";
        this.element.style.height = this.engine.world.height + "px";

        const objects_to_render = this.engine.objects;
        for(let obj of objects_to_render){
            obj.draw();
            this.element.appendChild(obj.element);
        }
        requestAnimationFrame(this.loop.bind(this));
    }

    loop (timestamp){
        const objects = this.engine.objects;
        if(!this.previous_timestamp){
            this.previous_timestamp = timestamp;
        }
        const dt = (timestamp - this.previous_timestamp) / 10000;
        this.engine.update(dt);
        for(let obj of objects){
            obj.draw(this);
        }
        setTimeout(requestAnimationFrame(this.loop.bind(this)), 1 / 30);
    }
}