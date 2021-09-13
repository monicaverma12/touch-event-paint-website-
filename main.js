
var last_position_of_x;
var last_position_of_y;
canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
color = "blue";
width_of_line=3;
canvas.addEventListener("touchstart",my_touch);


function my_touch(e){
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
    
}


canvas.addEventListener("touchmove", my_touchmove);



function my_touchmove(e) 
{

	
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    ctx.moveTo(last_position_of_x, last_position_of_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();
    last_position_of_x = current_position_of_touch_x; 
    last_position_of_y = current_position_of_touch_y;
}