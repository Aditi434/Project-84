canvas=document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car2.png";
car2_x = 10;
car2_y = 100;
background_image = "racing1.jpg";

function add()
{
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_image;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadcar2;
    car2_imgTag.src = car2_image;

}

function uploadBackground()
{
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadcar1()
{
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}
function uploadcar2()
{
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", mykeyDown);
function mykeyDown(e)
{
    keyPressed=e.keyCode;
 console.log("keyPressed");
 if(keyPressed =='38')//up
 {
     car1_up();
 }

 if(keyPressed == '40')//down
 {
     car1_down();
 }
 
 if(keyPressed == '37')//left
 {
     car1_left();
 }

if(keyPressed == '39')//right
{
    car1_right();
}

if(keyPressed == '87')//w
{
    car2_up();
}

if(keyPressed == '83')//s
{
    car2_down();
}

if(keyPressed == '65')//a
{
    car2_left();
}

if(keyPressed == '68')//d
{
    car2_right();
}
}

