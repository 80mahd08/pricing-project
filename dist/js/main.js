"use strict";
let switchContainer = document.querySelector(".switchContainer");
let switchElement = document.querySelector('.switchContainer > *');
let h2Card = document.querySelectorAll("h2");
switchElement.style.cssText = `
    left: 3px
`;
let count = 1;
switchContainer.addEventListener("click", () => {
    count++;
    if (count % 2 == 0) {
        switchElement.style.cssText = `
            right: 3px
        `;
        h2Card.forEach((ele) => {
            ele.innerHTML = `$${addNine(ele.innerHTML.split('').filter(el => el != "$").join(''))}`;
        });
    }
    else {
        switchElement.style.cssText = `
            left: 3px
        `;
        h2Card.forEach((ele) => {
            ele.innerHTML = `$${removeNine(ele.innerHTML.split('').filter(el => el != "$").join(''))}`;
        });
    }
});
function addNine(str) {
    return `${str.slice(0, str.indexOf('.'))}9${str.slice(str.indexOf('.'), str.length)}`;
}
function removeNine(str) {
    return `${str.slice(0, str.indexOf('.') - 1)}${str.slice(str.indexOf('.'), str.length)}`;
}
