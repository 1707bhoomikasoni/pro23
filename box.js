class Box{
    constuctor(x,y,width,height){

    this.body=bodies.rectangle(x,y,width,height)
    World.add(world,this.body)
    }

  display(){
    rectMode(CENTER)
  }



}