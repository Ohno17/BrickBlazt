const requirementsList = document.getElementById("requirements-list");

function displayRequirements() {
    requirementsList.innerHTML = "";

    for (let i = 0; i < requirements.length; i++) {
        const li = document.createElement("li");
        li.textContent = requirements[i].description;
        requirementsList.appendChild(li);
    }
}

function roundRequirements() {
    switch (round) {
        case 0:
            requirements.push(createConstantRequirement("BrickBlazt"));
            break;
        case 1:
            requirements.push(createTrailingLetterRequirement("o"));
            requirements.push(createMinimumLengthRequirement(5));
            break;
        case 2:
            requirements.push(createLeadingLetterRequirement("x"));
            break;
        case 3:
            requirements.push(createMinimumLengthRequirement(13));
            break;
        case 4:
            requirements.push(createMinimumLengthRequirement(4));
            requirements.push(createMaximumLengthRequirement(7));
            break;
        case 5:
            requirements.push(createLeadingLetterRequirement("b"));
            requirements.push(createTrailingLetterRequirement("t"));
            break;
        case 6:
            requirements.push(createMinimumLengthRequirement(10));
            requirements.push(createMaximumLengthRequirement(15));
            requirements.push(createLeadingLetterRequirement("p")); 
            break; 
        case 7:
            requirements.push(createLengthRequirement(5));
            requirements.push(createLeadingLetterRequirement("b")); 
            requirements.push(createTrailingLetterRequirement("h"));
            break;
        case 8:
            requirements.push(createContainingLetterRequirement("g"));
            break;
        case 9:
            requirements.push(createContainingLetterRequirement("a"));
            requirements.push(createContainingLetterRequirement("e"));
            requirements.push(createContainingLetterRequirement("i"));
            requirements.push(createContainingLetterRequirement("o"));
            requirements.push(createContainingLetterRequirement("u"));
            break;
        case 10:
            requirements.push(createMinimumLengthRequirement(6));
            requirements.push(createCustomRequirement((input) => {
                // Consanants and vowels must alternate
                const vowels = "aeiou";
                let lastWasVowel = input[0].toLowerCase().indexOf(input[0].toLowerCase()) != -1;
                for (let i = 1; i < input.length; i++) {
                    const isVowel = vowels.indexOf(input[i].toLowerCase()) != -1;
                    if (isVowel == lastWasVowel) return false;
                    lastWasVowel = isVowel;
                }
                return true;
            }, "Word must alternate consanants and vowels"));
            break;
        default:
            generateRequirements();
    }
}

function generateRequirements() {
    requirements.push(createMinumumLengthRequirement(Math.ceil(round / 8) + 1));
}

// Do ROUND 0
roundRequirements();
displayRequirements();
