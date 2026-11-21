// Register
let  RegisterUser= document.querySelector("#RegisterUser");
let  RegPassword= document.querySelector("#RegPassword");

//Login
let loginUsername= document.querySelector("#loginUsername");
let loginPass= document.querySelector("#loginPass");

let RegisterForm=  document.querySelector("#RegisterForm");
let LoginForm=  document.querySelector("#LoginForm");

let msg=  document.querySelector("#msg");
let  userExist= false;

let userobj = JSON.parse(localStorage.getItem("user")) || {};

RegisterForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    userobj.username= RegisterUser.value;
    userobj.password= RegPassword.value;
localStorage.setItem("user",JSON.stringify(userobj));
alert("user registered successfully");
RegisterForm.reset();
})
LoginForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    let user= loginUsername.value;
    let pass =loginPass.value;
    if (user===userobj.username && pass===userobj.password) {
        userExist= true;
        msg.innerHTML=`<p> Login Successfully <a href = "post.html">go to page </a> </p>`
        } else{msg.innerHTML=`<p>Please  try  again,/p>`}
})
