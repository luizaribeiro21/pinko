class Particle {
    constructor(x, y) {
        var options = {
            isStatic : false, 
            'restitution': 0.7,
            'friction': 0.2,
            
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        
        push();
        translate(pos.x, pos.y);
        this.color = color (random (0,255),random (0,255),random (0,255) )
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

};