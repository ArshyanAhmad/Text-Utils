const checkBtn = document.querySelector(".submit")
const inputBox = document.querySelectorAll("input")
const copyText = document.querySelector(".copy")
const toggleBtn = document.querySelector(".Mode")

checkBtn.addEventListener("click", convertInto)

function convertInto() {
    let Text = document.querySelector("#desc")
    inputBox.forEach((elem) => {
        if (elem.checked) {
            if (elem.id == "uppercase") {
                let newText = Text.value.toUpperCase()
                Text.value = newText
            }
            else if (elem.id == "lowercase") {
                let newText = Text.value.toLowerCase()
                Text.value = newText
            }
            else if (elem.id == "capitalize") {
                let newText = Text.value;
                Text.value = newText[0].toUpperCase() + newText
            }
            else if (elem.id == "removespace") {
                let newText = Text.value;
                newText = newText.replace(/\s+/g, ' ').trim();
                Text.value = newText
            }
        }
    })
}

toggleBtn.addEventListener("click", () => {
    const mainContent = document.querySelector(".main-content")
    mainContent.classList.toggle("light-mode")
})

copyText.addEventListener("click", () => {
    let Text = document.querySelector("#desc")
    Text.select();
    Text.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(Text.value)
})