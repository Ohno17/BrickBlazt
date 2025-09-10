
function createCustomRequirement(func, description) {
    return {"validator": func, "description": description};
}

function createConstantRequirement(word) {
    return createCustomRequirement((input) => input == word.toLowerCase(), `Word must be "${word}"`);
}

function createLengthRequirement(length) {
    return createCustomRequirement((input) => input.length == length, `Word must be ${length} letters long`);
}

function createMinimumLengthRequirement(length) {
    return createCustomRequirement((input) => input.length >= length, `Word must be at least ${length} letters long`);
}

function createMaximumLengthRequirement(length) {
    return createCustomRequirement((input) => input.length <= length, `Word must be at most ${length} letters long`);
}

function createLeadingLetterRequirement(letter) {
    return createCustomRequirement((input) => input[0] == letter.toLowerCase(), `Word must start with "${letter}"`);
}

function createTrailingLetterRequirement(letter) {
    return createCustomRequirement((input) => input[input.length - 1] == letter.toLowerCase(), `Word must end with "${letter}"`);
}

function createContainingLetterRequirement(letter) {
    return createCustomRequirement((input) => {
        for (let i = 0; i < input.length; i++) {
            if (input[i] == letter.toLowerCase()) return true;
        }
        return false;
    }, `Word must contain "${letter}"`);
}
