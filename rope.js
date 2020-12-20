class Rope{
    constructor(BodyA,pointB){
        var options = {
            bodyA: BodyA,
            pointB: pointB,
            length:500,
            stiffness: 1
            
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
        this.pointB = pointB;

    }
    display(){
        strokeWeight(3);
        
        line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.pointB.x,this.pointB.y);
    }
}