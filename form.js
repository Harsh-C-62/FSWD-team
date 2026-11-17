let username = document.querySelector("#username");
let btn = document.querySelector("button");
let form = document.querySelector("form");

let arr = [];

/// to add
form.addEventListener("submit", (e) => {
    e.preventDefault();
    addtodo();
    displaytodo();

    function addtodo() {
        console.log(username.value);
        arr.push(username.value);
        username.value = "";
    }

    /// to show
    function displaytodo() {
        let alltodo = document.querySelector("#todo");

        alltodo.innerHTML = "";

        arr.forEach((element, index) => {
            alltodo.innerHTML += `
                <ul>
                    <li>
                        ${element}
                        <button onclick="deleteTodo(${index})">
                            Delete
                        </button>
                    </li>
                </ul>
            `;
        });
    }
});

/// to delete
function deleteTodo(index) {
    arr.splice(index, 1);
    let alltodo = document.querySelector("#todo");
    alltodo.innerHTML = "";

    arr.forEach((element, index) => {
        alltodo.innerHTML += `
            <ul>
                <li>
                    ${element}
                    <button onclick="deleteTodo(${index})">
                        Delete
                    </button>
                </li>
            </ul>
        `;
    });
}
function Delete(index) {
    console.log("deleting...",arr[index]);
    arr.splice(index,1);
    displaytodo();
    
}

