const message = document.querySelector(".message")
setTimeout(()=>{
    message.setAttribute("style", "display:flex;");
},3000)
setTimeout(()=>{
    message.setAttribute("style", "");
},6000)
