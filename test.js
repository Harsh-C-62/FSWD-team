let bt= document.querySelector("#b");
let para= document.querySelector(".para");
bt.addEventListener("click",()=>{
 para.innerText= "You have successfully susbcribed. Thank you."
});
let bn= document.querySelector("#cl");
bn.addEventListener("click",()=>{

    para.innerText=""
});