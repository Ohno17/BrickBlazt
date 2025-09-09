const inputElement = document.getElementById("word-input");
inputElement.addEventListener("keydown", (e) => { if (e.key == "Enter") submitWord(); });

function isValidWord(word) {
    for (let i = 0; i < words.length; i++) {
        if (word == words[i]) return words[i];
    }
}

function submitWord() {
    alert(isValidWord(inputElement.value) ? inputElement.value : "NO WORLD like THIS");
}
