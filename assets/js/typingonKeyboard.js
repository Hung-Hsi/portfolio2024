// opening typing words

// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Set the text to be typed
    let textToType = "Oh hi ! " + " I'm Chang Hung-Hsi." + " Welcome to my portfolio ! ! !";

    // Get the typing box element
    const typingTitle = document.getElementById("typingTitle");
    let index = 0;

    // Function to type the text
    function typeText() {
        if (index < textToType.length) {
            const key = textToType[index].toUpperCase();
            // const targetKey = document.querySelector(`[data-key="${key}"]`);
            const targetKey = Array.from(keys).find(
                (k) => k.textContent === key);

            if (targetKey) {
                targetKey.classList.add('key-down');
                setTimeout(function () {
                    targetKey.classList.remove('key-down');
                }, 200);
            }

            typingTitle.textContent += textToType[index];
            index++;

            setTimeout(typeText, 100);
        }
    }

    typeText();
});

// when click on typingBox clear the description
const typingRegion = document.querySelector(".typing-region");
const typingBox = document.querySelector(".typing-box");
const description = document.querySelector(".description");
const keys = document.querySelectorAll('.key:not(.noType)');
typingRegion.addEventListener('click', () => description.innerHTML = "");

// keyboard typing effect

// 按下鍵盤
document.addEventListener('keydown', (e) => {
    let key = e.key.toUpperCase();
    if (e.code === "Space") {
        key = "Space";
    };
    const targetKey = Array.from(keys).find(
        (k) => k.textContent === key
    );
    console.log(targetKey);

    if (targetKey) {
        targetKey.classList.add('key-down');
    }
});

// 放開鍵盤
document.addEventListener('keyup', (e) => {
    let key = e.key.toUpperCase();
    if (e.code === "Space") {
        key = "Space";
    };
    const targetKey = Array.from(keys).find((k) => k.textContent === key);

    if (targetKey) {
        targetKey.classList.remove('key-down');
    }
});

// 輸入文字
keys.forEach((key) => {
    key.addEventListener('click', function () {
        // get value
        const value = key.getAttribute('value');

        // 如果值是空格鍵，將其替換為空格字符
        const inputValue = value === ' ' ? ' ' : value;

        // typing input
        typingBox.innerHTML += inputValue;
    });
});