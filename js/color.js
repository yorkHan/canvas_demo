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
{
    let view={

    }
    let model={

    }
    let controller={

    }
    controller.init(view,model)
}