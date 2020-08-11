class Rain{
    constructor(x, y, radius){
        var option = {
            'friction': 0.01
        }
        this.body = Bodies.circle(x, y, radius/2, option);
        this.radius = radius;
        World.add(world, this.body);
    }

    update(){
        if (this.body.position.y > 500){
            Matter.Body.setPosition(this.body, {x: random(1, 300), y: random(1, 500)})
        }
    }

    display(){
        var pos = this.body.position;
        fill(5, 67, 176);
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, this.radius, this.radius);
    }
}