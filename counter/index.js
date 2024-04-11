const number = document.getElementById("number");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");

console.log("number");
console.log("increase");
console.log("decrease");

function increasenumber() {
    var number_Element = document.getElementById("number");
    var current_number = parseInt(number_Element.innerText);
    var new_number = current_number + 1;
    number_Element.innerText = new_number;
    console.log("increase가 클릭됨");
}

function decreasenumber() {
    var number_Element = document.getElementById("number");
    var current_number = parseInt(number_Element.innerText);
    var new_number = current_number - 1;
    number_Element.innerText = new_number;
    console.log("decrease가 클릭됨");
}