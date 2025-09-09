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
            requirements.push(createMinumumLengthRequirement(13));
            break;
        case 4:
            requirements.push(createMinumumLengthRequirement(4));
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
        default:
            requirements = generateRequirements();
    }
}

function generateRequirements() {
    // TODO
}

// Do ROUND 0
roundRequirements();
displayRequirements();
