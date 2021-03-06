class SlingShot{
    constructor(bodyA, pointB){
        var options = {
           bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1 = loadImage('sprites/sling1.png');
        this.sling2 = loadImage('sprites/sling2.png');
        this.sling3 = loadImage('sprites/sling3.png');
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
       this.sling.bodyA = body;
   }
    
    fly(){
this.sling.bodyA = null;
    }

    display(){
       image(this.sling1,500,400);
        image(this.sling2,475,355);
        if(this.sling.bodyA){
           var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
            
               strokeWeight(4);
               line(pointA.x - 20, pointA.y, pointB.x +20, pointB.y -20);
               line(pointA.x - 20, pointA.y, pointB.x + 60, pointB.y - 20);
               image(this.sling3,pointA.x -15, pointA.y ,15,30);
            
           
           
            
           pop();
       }
   }
    
}