var cat,catImage1,catImage2,catImage3
var mouse,mouseImage1,mouseImage2,mouseImage3
var bg,bgImage











function preload() {
//load the images here

catImage1 = loadAnimation("images/tomOne.png")
catImage2 = loadAnimation("images/tomTwo.png","images/tomThree.png")
catImage3 = loadAnimation("images/tomFour.png")
mouseImage1 = loadAnimation("images/jerryOne.png")
mouseImage2 = loadAnimation("images/jeyyTwo.png","images/jerryThree.png")
mouseImage3 = loadAnimation("images/jerryFour.png")
bgImage = loadImage("images/garden.png")




    
}

function setup(){
    createCanvas(1000,800);
    
    
    //create tom and jerry sprites here




    cat = createSprite(870,200)
    cat.addAnimation ("catsleeping",catImage1)
    cat.scale = 0.1

    mouse = createSprite(200,600)
    mouse.addAnimation("mouseRunning",mouseImage1)
    


    
   

}

function draw() {

    background(bgImage);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x <(cat.width - mouse.width)/2){
        
    }

    drawSprites();
}


function keyPressed(){


    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5
        cat.addAnimation("catRunning",catImage2)
        cat.changeAnimation("catRunning")
    }

  //For moving and changing animation write code here


}
