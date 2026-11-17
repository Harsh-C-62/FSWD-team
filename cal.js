let p1 = document.querySelector("#person1");
let p2 =  document.querySelector("#person2");
let scoreDiv= document.querySelector("#score");
let  form = document.querySelector("form");


form.addEventListener("submit",(e)=>
{
    e.preventDefault();
    let fsscore= Math.floor(Math.random()*100);
    console.log(fsscore);
    scoreDiv.innerText = fsscore;

})