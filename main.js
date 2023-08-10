// CKEDITOR
CKEDITOR.replace('textarea');

let contentCopy = document.getElementById("editor-content-copy")
let postButton = document.getElementById("postButton")

postButton.addEventListener('click', () => {
    //contentCopy.innerHTML = CKEDITOR.instances.editor1.document.getBody().getText(); // For plain text
    contentCopy.innerHTML = CKEDITOR.instances.textarea.getData(); // For formatted text

    let btn = document.createElement("button")
    btn.innerText = "delete"
    contentCopy.appendChild(btn)


    function btnRemove() {
        contentCopy.remove()
    }
    btn.addEventListener("click", btnRemove)

});

// LogIn

function LogIn(params) {
    let name = document.getElementById("name")
    let pass = document.getElementById("pass")
    let showName = document.getElementById("user-name")

    showName.innerText = "hello " + name.value
    localStorage.setItem("name", name.value)
    location.href = "./bloog.html"


}


// Bloog

let userName = document.getElementById("user-name")
userName.innerText = localStorage.getItem("name")
