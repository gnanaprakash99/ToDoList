let input = document.getElementById("input");
let listContainer = document.getElementById("listContainer");

function addList() {
    if (input.value !== "") {
        let listItem = document.createElement("li")
        listItem.innerHTML = input.value

        let editButton = document.createElement("button")
        editButton.textContent = "edit"
        editButton.id = "editButton"
        editButton.onclick = () => editItem(listItem)

        let deleteButton = document.createElement("button")
        deleteButton.textContent = "delete"
        deleteButton.id = "deleteButton"
        deleteButton.onclick = () => deleteItem(listItem)

        listItem.append(editButton)
        listItem.appendChild(deleteButton)

        listContainer.appendChild(listItem)

        input.value = ""
    }
}

function editItem(value) {
    let getValue = prompt("Edit your content here:", value.firstChild.textContent)
    if (getValue !== "") {
        value.firstChild.textContent = getValue
    }
}
function deleteItem(value) {
    listContainer.removeChild(value)
}