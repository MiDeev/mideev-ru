let div = document.querySelector(".bord");

let text = "расширяет границы";
let output = "";

function typeText() {
    if (output.length < text.length) {
        output += text[output.length];
        div.textContent = output;

        setTimeout(typeText, 100);
    }
}

function startTyping() {
    setTimeout(typeText, 3000);
}

startTyping();