const inputElement = document.getElementById("word-input");
inputElement.addEventListener("keydown", (e) => {
    if (e.key == "Enter") submitWord();
});
const roundElement = document.getElementById("round-span");
const logElement = document.getElementById("log-para");
inputElement.addEventListener("keyup", (e) => {
    if (e.key == "Enter") return;
    logElement.innerHTML = `${inputElement.value.length} characters`;
    logElement.className = "";
});
logElement.innerHTML = `${inputElement.value.length} characters`;

var round = 0;
var requirements = [];

function doesFollowRequirements(word) {
    for (let i = 0; i < requirements.length; i++) {
        if (!requirements[i].validator(word.toLowerCase())) return false;
    }
    return true;
}

function submitWord() {
    if (doesFollowRequirements(inputElement.value.toLowerCase()) && words.has(inputElement.value.toLowerCase())) {
        round++;
        roundElement.innerHTML = round;
        inputElement.value = "";
        inputElement.classList = "";
        logElement.innerHTML = "0 characters";
        logElement.className = "";

        requirements = [];
        roundRequirements();
        displayRequirements();
    } else {
        logElement.innerHTML = `\"${inputElement.value}\" is not correct`;
        logElement.className = "invalid";
    }
}
