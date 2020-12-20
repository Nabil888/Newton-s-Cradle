class Frame{
    constructor(){
        var options = {
            'isStatic': true,
        }
        this.body = Bodies.rectangle(600,180,600,20,options);
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        fill("yellow");
        rect(600,180,600,20);
    }
}