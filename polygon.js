class polygon
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0,
			friction:1,
			
			density:1.2
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("polygon.png");
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{
	
		var angle = this.body.angle;
			var pos=this.body.position;	
			push()	
			
			translate(pos.x,pos.y);
			rotate(angle);
			stroke("white");
			strokeWeight(3);
			fill("white")
			
			ellipseMode(RADIUS);
			imageMode(CENTER);
			image(this.image, 0,0,this.r*2, this.r*2)
			pop()
			
	}

}
