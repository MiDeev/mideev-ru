let hello = document.querySelector(".lined");
let whats = document.querySelector(".bord");

let helloText = "MiDeev";
let whatsText = "расширяет границы";

function typeText(text, element) {
 let output = "";

function type() {
    if (output.length < text.length) {
      output += text[output.length];
      element.textContent = output;
      setTimeout(type, 300);
    }
  }

  type();
}

function startTypingHello() {
  setTimeout(function () {
    typeText(helloText, hello);
  }, 2000);
}

function startTypingWhats() {
  setTimeout(function () {
    typeText(whatsText, whats);
  }, 5000);
}

startTypingHello();
startTypingWhats();
