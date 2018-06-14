var draw1=document.getElementById("draw");
var btn=document.getElementById("btn");
var context=draw1.getContext('2d');
autoSetCanvas(draw1)
listenToUser(draw1)
var erasering=false
var lineWidth=5

function listenToUser(canvas){
var using=false
var lastPoint={x:undefined,y:undefined}
if(document.body.ontouchstart!==undefined){
    canvas.ontouchstart=function (aaa){
        var x=aaa.touches[0].clientX
        var y=aaa.touches[0].clientY
        using=true
        if(erasering){
            context.clearRect(x,y,10,10)
        }else{
            lastPoint={"x":x,"y":y}
        }
    }
    canvas.ontouchmove=function (aaa){
        var x=aaa.touches[0].clientX
        var y=aaa.touches[0].clientY
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
    canvas.ontouchend=function (){
        using=false
    }
}else{
    canvas.onmousedown=function (mouse){
        var x=mouse.clientX
        var y=mouse.clientY
        using=true
        if(erasering){
            context.clearRect(x,y,10,10)
        }else{
            lastPoint={"x":x,"y":y}
        }
    }
    canvas.onmousemove=function (mouse){
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
    canvas.onmouseup=function (){
        using=false
    }
 } 
}
function drawCircle(x,y,radius){
    context.beginPath()
    context.arc(x,y,radius,0,Math.PI * 2);
    context.fill()
}
function drawLine(x1,y1,x2,y2){
    context.beginPath();
    context.moveTo(x1,y1)
    context.lineWidth=lineWidth
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
