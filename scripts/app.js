console.log("loaded");

// Starter global variables

let age = 0;
let boredom = 10;
let hunger = 10;
let sleepiness = 10;
let isSleeping = false;
let sleepRegenInterval;
let sleepInterval;
let hungerInterval;
let boredomInterval;
let ageInterval;

// Starter functions
const startAge = function() {
    if (age === 2) {
        pauseGame();
        displayFirstEvo();
    } else if (age === 5) {
        pauseGame();
        displaySecondEvo();
    }
    age += 1;
    $(".metrics__age").text("Age: " + age);
}

const startHunger = function(){
    hunger -= .01;
    const displayHunger = Math.ceil(hunger);
    $("#hunger__bar").text(displayHunger);
    $("#hunger__bar").css("width", hunger * 10 + "%");
    if (hunger < 0) {
        $("#hunger__bar").text(0);
        displayLoss();
    }
}

const startSleepiness = function() {
    sleepiness -= .01;
    const displaySleepiness = Math.ceil(sleepiness);
    $("#sleepiness__bar").text(displaySleepiness);
    $("#sleepiness__bar").css("width", sleepiness * 10 + "%");
    if (sleepiness < 0) {
        $("#sleepiness__bar").text(0);
        displayLoss();
    } 
}

const startBoredom = function() {
    boredom -= .01;
    const displayBoredom = Math.ceil(boredom);
    $("#boredom__bar").text(displayBoredom);
    $("#boredom__bar").css("width", boredom * 10 + "%");
    if (boredom < 0) {
        $("#boredom__bar").text(0);
        displayLoss();
    } 
}

const sleepRegen = function() {
    sleepiness += .05;
    const displaySleepiness = Math.ceil(sleepiness);
    $("#sleepiness__bar").text(displaySleepiness);
    if (sleepiness > 9.95) {
        stopSleep();
    }
}


const stopSleep = function() {
    clearInterval(sleepRegenInterval);
    isSleeping = false;
}

const pauseGame = function() {
    clearInterval(ageInterval);
    clearInterval(hungerInterval);
    clearInterval(sleepInterval);
    clearInterval(boredomInterval);
}


// start game/round functions

const startThird= function() {
    
    ageInterval = setInterval(startAge, 2000);
    hungerInterval = setInterval(startHunger, 20);
    sleepInterval = setInterval(startSleepiness, 20);
    boredomInterval = setInterval(startBoredom, 20);
    }


const startSecond = function() {
    
    ageInterval = setInterval(startAge, 2000);
    hungerInterval = setInterval(startHunger, 35);
    sleepInterval = setInterval(startSleepiness, 35);
    boredomInterval = setInterval(startBoredom, 35);
    }

const startFirst = function() {
    
    ageInterval = setInterval(startAge, 2000);
    hungerInterval = setInterval(startHunger, 35);
    sleepInterval = setInterval(startSleepiness, 35);
    boredomInterval = setInterval(startBoredom, 35);
    }


// Interactive Functions [start games/rounds]
$(".background__start").on("click", function (){
    startFirst();
    console.log("started");
    toggleStart();
});

$(".firstevo__cont").on("click", function (){
    startSecond();
    console.log("round 2 started");
    toggleFirstEvo();
    // change profile pic, character
});

$(".secondevo__cont").on("click", function (){
    startThird();
    console.log("round 3 started");
    toggleSecondEvo();
    // change profile pic, character
});

$("#button__feed").on("click", function(){
    if (isSleeping === false && hunger <= 9.5){
        hunger += .5;
    } else {
        hunger += 0;
    }
});

$("#button__play").on("click", function(){
    if (isSleeping === false && boredom <= 9.5){
        boredom += .5;
    } else {
        boredom += 0;
    }
});

$("#button__sleep").on("click", function(){
    isSleeping = !isSleeping;
    if (isSleeping) {
        sleepRegenInterval = setInterval(sleepRegen, 50);
    }
    else if (!isSleeping) {
        stopSleep();
    }
});

$("#nameinput__ok").on("click", function() {
    const name = $("#nameinput__value").val();
    $(".background__name").text(`Name: ${name}`);
    toggleNameInput();
})

$(".background__instructions").on("click", function(){
    $("#instructions__modal").toggle();
})

$("#close__modal").on("click", function(){
    $("#instructions__modal").toggle();
})

// DOM toggle functions

const toggleNameInput = function () {
    $(".nameinput").toggle();
}

const toggleStart = function () {
    $(".background__start").toggle()
}

const toggleFirstEvo = function () {
    $(".background__firstevo").toggle();
}

const toggleSecondEvo = function () {
    $(".background__secondevo").toggle();
}

// Round Display Event Functions

const displayLoss = function() {
    $(".loss__msg").css("display", "flex");
}

const displayFirstEvo = function () {
    $(".background__firstevo").css("display", "flex");
}

const displaySecondEvo = function () {
    $(".background__secondevo").css("display", "flex");
    console.log("display2nd");
}