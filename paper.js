class Paper{

    constructor(x,y,radius){

        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.image = loadImage("paper.png");
        
        this.body = Bodies.circle(x,y,25, options);
        World.add(world, this.body);

    }

    display(){
console.log("display ball");
        var paperpos=this.body.position;
        push();
        translate(paperpos.x, paperpos.y);
            ellipseMode(CENTER);
			//strokeWeight(4);
			fill(255,0,255)
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
    }



}



