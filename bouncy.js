const ENGINE = Matter.Engine;
const WORLD = Matter.World;
const BODIES = Matter.Bodies;

 var engine,world;

 var object
var car,wall
var speed,weight

function setup() {
  createCanvas(400,400);
  engine = ENGINE.create();
  world = engine.world;
 object = BODIES.circle(100, 200,on220,option2);
 WORLD.add(world,object)
 speed=random(50,90)
 weight=random(400,1500)
 car=createSprite(50,200,50,50)
 car.velocityX=speed
 wall=createSprite(1500,200,60,height/2)


 var option = {isStatic:true}
 ground = BODIES.rectangle(200,380,400,20,option);
 WORLD.add(world,ground)

 console.log(object);
}

function draw() {
  background(0); 
  ENGINE.update(engine)
  rectMode(CENTER);
  ellipseMode(RADIUS)
  ellipse(object.position.x, object.position.y, 50, 50)
  rect(ground.position.x,ground.position.y,400,20);
  sprite.shapeColor=color(r,g,b)
  if(wall.X-car.X<(car.width+wall.width/2)){
    car.velocityX=0
    var deformation = 0.5*weight*speed*speed/22509;
      if (deformation >180){
      car. shapeColor = color(255,0,0)}
      if(deformation<180 &&deformation>100){
        car.shapeColor = color(230,230,0)
      }
      if(deformation<100)
      car.shapeColor = (0,225,0)



      }


    


  }
}