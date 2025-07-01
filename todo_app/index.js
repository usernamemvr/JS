const input = document.getElementById("taskinput");
const listcontainer = document.getElementById("taskcontainer");

function addTask() {
    if (input.value === '') {
        alert("Enter something!!");
    } else {
        let li = document.createElement("li");
        li.textContent = input.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = "";
    saveData();
}

listcontainer.addEventListener("click", (e) => {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false)

function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}

showTask();