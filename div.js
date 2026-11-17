let h= document.querySelector("#ho");
let b= document.querySelector("#bl");
let c=  document.querySelector("#cu");
let page = document.querySelector("div");
let darkbutton = document.querySelector("#dark");
let body = document.querySelector("body");

h.addEventListener("click",(e)=>{
    e.preventDefault()
    page.innerText= "Welcome to  home page"
})
b.addEventListener("click",(e)=>{
    e.preventDefault()
    page.innerText="welcome to blogs page"
})
c.addEventListener("click",(e)=>{
    e.preventDefault()
    page.innerText= "Thanks for contacting us"
})
darkbutton.addEventListener("click",()=>{
    body.classList.toggle("dark");
})
