class DustbinBottom{

    constructor(width, height){
        this.width = width;
        this.height = height;

        var options = {
            isStatic: true
        }

        this.image = loadImage("sprites/dustbin.png");

        this.body = Bodies.rectangle(620, 445, 200, 20, options);
        World.add(world, this.body);


    }

    display(){
        fill("brown");
        
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
    }



}



