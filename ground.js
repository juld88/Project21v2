class ground 
{
  constructor(x, y, width, height) {
    let options = {
      isStatic:true
    };
    
    this.x = x
    this.y = y;
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, width, height, options);
    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    strokeWeight(4);
    fill(255,255,0);
    rect(0, 0, this.w, this.h);
    pop();
  }
  
}

  