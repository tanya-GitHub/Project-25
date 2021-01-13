class Dustbin{

    constructor(){

        var options = {
            isStatic: true
        }

        var bottom, left, right;

        bottom = Bodies.rectangle(620, 445, 200, 20, options);
        World.add(world, bottom);

        this.image = loadImage("dustbin.png");

        left = Bodies.rectangle(550, 445, 20, 210, options);
        World.add(world, left);

        right = Bodies.rectangle(685, 445, 20, 100, options);
        World.add(world, right);
    }

    display(){
        
        imageMode(CENTER);
        image(this.image, 620, 445, 200, 210);

    }



}



