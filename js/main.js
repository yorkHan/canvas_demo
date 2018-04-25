var draw1=document.getElementById("draw");
var btn=document.getElementById("btn");
var context=draw1.getContext('2d');
autoSetCanvas(draw1)
listenToUser(draw1)
var erasering=false
var lineWidth=5
pen.onclick=function(){
    erasering=false
    pen.classList.add("active")
    eraser.classList.remove("active")
}
eraser.onclick=function(){
    erasering=true
    eraser.classList.add("active")
    pen.classList.remove("active")
}
clear.onclick=function(){
    context.clearRect(0,0,draw1.clientWidth,draw1.clientHeight)
}
thin.onclick=function(){
    lineWidth=5
    thin.classList.add("active")
    thick.classList.remove("active")
}
thick.onclick=function(){
    lineWidth=10
    thick.classList.add("active")
    thin.classList.remove("active")
}
download.onclick=function(){
    var url=draw1.toDataURL("image/png")
    var a=document.createElement('a')
    document.body.appendChild(a)
    a.href=url
    a.download='我的绘图'
    a.target='_blank'
    a.click()
}
black.onclick=function(){
    black.className="active"
    blue.classList.remove("active")
    yellow.classList.remove("active")
    red.classList.remove("active")
    context.strokeStyle="black"
}
red.onclick=function(){
    red.className="active"
    blue.classList.remove("active")
    yellow.classList.remove("active")
    black.classList.remove("active")
    context.strokeStyle="red"
}
blue.onclick=function(){
    blue.className="active"
    red.classList.remove("active")
    yellow.classList.remove("active")
    black.classList.remove("active")
    context.strokeStyle="blue"
}
yellow.onclick=function(){
    yellow.className="active"
    blue.classList.remove("active")
    red.classList.remove("active")
    black.classList.remove("active")
    context.strokeStyle="yellow"
}
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
