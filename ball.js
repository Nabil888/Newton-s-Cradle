class Ball{
    constructor(x,y,density){
        var options = {
            'restitution': 1.08,
            'density': density
        }
        this.ball = Bodies.circle(x,y,60,options);
        World.add(world,this.ball);
        
    }
    display(){
        ellipseMode(RADIUS);
        fill(192,192,192);
        stroke(192,192,192);
        ellipse(this.ball.position.x,this.ball.position.y,60,60);
    }
}