var overlay = document.getElementsByClassName("overlay")[0]
var buttonsCollection = document.getElementsByClassName("overlay-button")
var buttons = [];
for (let i = 0; i < buttonsCollection.length; i++) {
    buttons[i] = buttonsCollection[i]
}

function openNav() {
    var width
    if (window.innerWidth <= 400) {
        width = `${window.innerWidth}px`
    }
    else {
        width = "400px"
    }
    overlay.style.width = width
    buttons.forEach(button => {
        console.log(button)
        button.style.fontSize = "32px"
    })
}

function closeNav() {
    overlay.style.width = "0px"
    buttons.forEach(button => {
        button.style.fontSize = "0px"
    })
}

function validPassword(password) {//run checks on what we want and don't
    if (password.length < 8) return "length"
    if (!password.match(".*[a-z].*")) return "lower"
    if (!password.match(".*[A-Z].*")) return "upper"
    if (!password.match(".*[0-9].*")) return "number"
    //if (password.match(".*[ ].*")) return "space"
    return "none";
}