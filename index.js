const texts = ["DEVELOPER.", "FRONT-END."];
let speed = 100;
let delayBeforeErase = 3000;

const textElements = document.querySelector(".writer-text");

let textIndex = 0;
let charcterIndex = 0;

let typewriter = () => {
  if (charcterIndex < texts[textIndex].length) {
    textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
    charcterIndex++;
    setTimeout(typewriter, speed);
  } else {
    setTimeout(eraseText, delayBeforeErase);
  }
};

let eraseText = () => {
  if (textElements.innerHTML.length > 0) {
    textElements.innerHTML = textElements.innerHTML.slice(0, -1);
    setTimeout(eraseText, 100);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    charcterIndex = 0;
    setTimeout(typewriter, 100);
  }
};

window.onload = typewriter;
