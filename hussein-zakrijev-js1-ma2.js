// question 1
const myFunctionExpression = function () {
    console.log("HusseinZakrijev");
};

// question 2
const clickMeButton = document.querySelector(".btn");
clickMeButton.addEventListener("click", function () {
    console.log("I was clicked");
});

// question 3
const Input = document.querySelector("#firstName");
Input.addEventListener("keydown", logKey);

function logKey(event) {
    console.dir(event.key);
}

// question 4
const hoverOver = document.querySelector("button");
hoverOver.addEventListener("mouseover", addClasslist);

function addClassList() {
    hoverOver.classList.add("hover");
}

// question 5
const hoverOut = document.querySelector("[data-animal='dog']");
hoverOut.addEventListener("mouseout", removeClassList);

function removeClassList() {
    hoverOut.classList.remove("hover");
}

// question 6
const animal = document.querySelectorAll("li");

for (let i = 0; i < animal.length; i++) {
    animal[i].addEventListener("mouseover", AnimalType)

    function logAnimalType() {
        console.dir(animal[i].dataset.animal);
    }
}

// question 7
switch (animal) {
    case "cat":
        console.log("Meow");
        break;

    case "cow":
        console.log("Moo");
        break;

    case "bird":
        console.log("Tweet");
        break;

    default:
        console.log("Harrumph");
}

// question 8
const sheep = ["Malcolm", "Anders", "Marie"];
sheep.forEach(function (sheepName) {
    console.log(sheepName);
});

// question 9
function helloTimer() {
    console.log("Hello");
    if (counter === 5) {
        clearInterval(intervalId);
    }
    counter++;
}
let counter = 0;
const intervalId = setInterval(helloTimer, 500);

// question 10
const container = document.querySelector(".container");

function textDelay() {
    container.innerText = "Text updated";
}

setTimeout(textDelay, 2000);