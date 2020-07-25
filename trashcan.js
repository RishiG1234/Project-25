class Trashcan {
    constructor(x,y) {
        this.x=x;
        this.y=y;
        this.TrashcanWidth=200;
        this.TrashcanHeight=213;
        this.wallThickness=20;
        this.image = loadImage("trashcan_image.png");
        this.bottomBody=Bodies.rectangle(this.x, this.y, this.TrashcanWidth, this.wallThickness, 
        {isStatic:true}) 
        this.leftWallBody=Bodies.rectangle(this.x-this.TrashcanWidth/2, this.y-this.TrashcanHeight/2,
        this.wallThickness, this.TrashcanHeight, {isStatic:true}) 
        this.rightWallBody=Bodies.rectangle(this.x+this.TrashcanWidth/2, 
        this.y-this.TrashcanHeight/2, this.wallThickness, this.TrashcanHeight, {isStatic:true}) 
        World.add(world, this.bottomBody) 
        World.add(world, this.leftWallBody) 
        World.add(world, this.rightWallBody);

    }
    display() {
        var posBottom=this.bottomBody.position;
        var posLeft=this.leftWallBody.position;
        var posRight=this.rightWallBody.position;
        push();
        translate(posLeft.x,posLeft.y);
        rectMode(CENTER);
        fill(255);
        angleMode(RADIANS);
        rotate(this.angle);
        pop();
        push();
        translate(posRight.x,posRight.y);
        rectMode(CENTER);
        fill(255);
        angleMode(RADIANS);
        rotate(-1*this.angle);
        pop();
        push();
        translate(posBottom.x,posBottom.y+10);
        rectMode(CENTER);
        fill(255);
        angleMode(RADIANS);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.image,0,0,-this.TrashcanHeight/2,this.TrashcanWidth,this.TrashcanHeight);
        pop();
    }
}