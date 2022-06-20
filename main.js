
var lastPosition_x, lastPosition_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "red";
width_of_line = 2;

newWidth=screen.width-70;
newHeight=screen.height-300;

if(screen.width<992)
{
    document.getElementById("myCanvas").width = newWidth;
    document.getElementById("myCanvas").height = newHeight;
    document.body.style.overflow = "hidden";
}


canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e)
{
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;

    lastPosition_x = e.touches[0].clientX - canvas.offsetLeft;
    lastPosition_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)
{
    currentPosition_x = e.touches[0].clientX - canvas.offsetLeft;
    currentPosition_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        ctx.moveTo(lastPosition_x,lastPosition_y);
        ctx.lineTo(currentPosition_x,currentPosition_y);
    
        ctx.stroke();
    
    lastPosition_x = currentPosition_x;
    lastPosition_y = currentPosition_y;
}

function clearArea()
{
    ctx.clearRect(0,0,800,600);
}