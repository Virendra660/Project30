class Projectile{
    constructor(bodyA,pointB){
        var options={
         bodyA:bodyA, 
         pointB:pointB,
         stiffness:0.04,
         length:10
        }
      this.pointB=pointB
      this.Projectile=Constraint.create(options)
      World.add(world,this.Projectile)
    }
    attach(body){
        this.Projectile.bodyA = body;
    }
    fly(){
        this.Projectile.bodyA=null
    }
    display(){
        if(this.Projectile.bodyA)
        {
            var pointA=this.Projectile.bodyA.position;
            var pointB=pointB;

            strokeWeight(1);
            stroke("blue");
            line(pointA.x, pointA.y, this.pointB.x, this.pointB.y);
        }
    }
}