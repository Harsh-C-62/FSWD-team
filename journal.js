let entry = document.querySelector("#entry");
let form =  document.querySelector("form");
let saveBtn= document.querySelector("#saveBtn");
let  allEntries= document.querySelector("#allEntries");
let Entriesarray= [];
//add entry
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    AddEntry();
    Display();
})

//add entries
function AddEntry() {
    let day = entry.value;
    Entriesarray.push(day);
    console.log(day);
    localStorage.setItem("Entries", JSON.stringify(Entriesarray));
    entry.value="";
}

function Display() {
    allEntries.innerHTML="";
    Entriesarray.forEach((element, index)=>{
        console.log(element)
        allEntries.innerHTML += `<li> ${element}</li>`})
    }

        
    
