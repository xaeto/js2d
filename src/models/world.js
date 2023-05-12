export default class World {
    constructor (width, height){
        this.width = width;
        this.height = height;
    }

    draw () {
        this.element = document.createElement("div")
        this.element.style.position = "relative";
        this.element.style.backgroundColor = "gray"
        this.element.style.height = this.height + "px"
        this.element.style.width = this.width + "px"
    }
}