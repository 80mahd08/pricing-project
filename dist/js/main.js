"use strict";
let switchContainer = document.querySelector(".switchContainer");
let switchElement = document.querySelector('.switchContainer > *');
switchElement.style.cssText = `
    left: 3px
`;
let count = 1;
switchContainer.addEventListener("click", () => {
    count++;
    if (count % 2 == 0) {
        console.log("hello mom");
        switchElement.style.cssText = `
            right: 3px
        `;
    }
    else {
        console.log("hello dad");
        switchElement.style.cssText = `
            left: 3px
        `;
    }
});
