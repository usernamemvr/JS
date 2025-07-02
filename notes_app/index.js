const notesContainer = document.getElementById("notescontainer");
const createButon = document.getElementById("create");

createButon.addEventListener("click", () => {
    let inputbox = document.createElement("p");
    let image = document.createElement("img");
    inputbox.className = "inputbox";
    inputbox.setAttribute("contenteditable", "true");
    image.src = "images/delete.png";
    notesContainer.appendChild(inputbox).appendChild(image);
    saveData()
})

notesContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        saveData();
    }    
})

notesContainer.addEventListener("input", (e) => {
    if (e.target.classList.contains("inputbox")) {
        saveData();
    }
});


function saveData() {
    localStorage.setItem("data", notesContainer.innerHTML);
}

function showTask() {
    notesContainer.innerHTML = localStorage.getItem("data") || "";
}

showTask();
