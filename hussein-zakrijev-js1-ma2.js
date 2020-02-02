// Q1
const myFunctionExpression = function () {
    console.log("HusseinZakrijev");
};

// Q2
const clickMeButton = document.querySelector(".btn");
clickMeButton.addEventListener("click", function () {
    console.log("I was clicked");
});

// Q3
const Input = document.querySelector("#firstName");
Input.addEventListener("keydown", logKey);

function logKey(event) {
    console.dir(event.key);
}

// Q4
const hoverOver = document.querySelector("button");
hoverOver.addEventListener("mouseover", addClasslist);

function addClassList() {
    hoverOver.classList.add("hover");
}

// Q5
const hoverOut = document.querySelector("[data-animal='dog']");
hoverOut.addEventListener("mouseout", removeClassList);

function removeClassList() {
    hoverOut.classList.remove("hover");
}

// Q6
const animal = document.querySelectorAll("li");

for (let i = 0; i < animal.length; i++) {
    animal[i].addEventListener("mouseover", AnimalType)

    function logAnimalType() {
        console.dir(animal[i].dataset.animal);
    }
}

// Q7
switch (animal) {
    case "cat":
        console.log("Meow");
        break;

    case "cow":
        console.log("Moo");
        break;

    case "bird":
        console.log("Tweett");
        break;

    default:
        console.log("Harrumph");
}

// Q8
const sheep = ["Malcolm", "Anders", "Marie"];
sheep.forEach(function (sheepName) {
    console.log(sheepName);
});

// Q9
function helloTimer() {
    console.log("Hello");
    if (counter === 5) {
        clearInterval(intervalId);
    }
    counter++;
}
let counter = 0;
const intervalId = setInterval(helloTimer, 500);

// Q10
const container = document.querySelector(".container");

function textDelay() {
    container.innerText = "Text updated";
}

setTime(textDelay, 2000);
