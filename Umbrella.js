class Umbrella{
    constructor(x, y, width, height){
        var option = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, option);
        this.height = height;
        this.width = width;
        this.image = loadImage("NewBatman.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
    }
}