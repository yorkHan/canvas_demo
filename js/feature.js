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
{
    let view={

    }
    let model={
        erasering:false
    }
    let controller={

    }
    controller.init(view,model)
}