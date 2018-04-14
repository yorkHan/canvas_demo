var draw1=document.getElementById("draw");
var btn=document.getElementById("btn");
var context=draw1.getContext('2d');
autoSetCanvas(draw1)
listenToMouse(draw1)
var erasering=false
btn2.onclick=function(){
    erasering=true
    actions.className="action x"
}
btn1.onclick=function(){
    erasering=false
    actions.className="action"
}
function listenToMouse(canvas){
var using=false
var lastPoint={x:undefined,y:undefined}
canvas.onmousedown=function(mouse){
    using=true
    var x=mouse.clientX
    var y=mouse.clientY
    if(erasering){
        context.clearRect(x,y,10,10)
    }else{
        lastPoint={"x":x,"y":y}
    }
}
canvas.onmousemove=function(mouse){
    var x=mouse.clientX
    var y=mouse.clientY
    if(using){
        if(erasering){
            context.clearRect(x,y,10,10)
        }else{
            var newpoint={"x":x,"y":y}
            drawLine(lastPoint.x,lastPoint.y,newpoint.x,newpoint.y)
            lastPoint=newpoint
        }
    }
}
canvas.onmouseup=function(){
    using=false
}
}
function drawCircle(x,y,radius){
    context.beginPath()
    context.fillStyle='black'
    context.arc(x,y,radius,0,Math.PI * 2);
    context.fill()
}
function drawLine(x1,y1,x2,y2){
    context.beginPath();
    context.strokeStyle='black'
    context.moveTo(x1,y1)
    context.lineWidth=5
    context.lineTo(x2,y2)
    context.stroke()
    context.closePath()
}
function autoSetCanvas(canvas){
    function xxx(){
        var pageWidth=document.documentElement.clientWidth;
        var pageHeight=document.documentElement.clientHeight;
        canvas.width=pageWidth
        canvas.height=pageHeight
    }
    xxx()
    window.onresize=function(){
        xxx();
    }
}