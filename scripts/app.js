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
    if (age === 20) {
        pauseGame();
    } else if (age === 50) {
        pauseGame();
    }
    age += 1;
    $(".metrics__age").text("Age: " + age);
}

const startHunger = function(){
    hunger -= .01;
    $("#hunger__bar").text(hunger);
    if (hunger <= 0) {
        $("#hunger__bar").text(0);
    }
}

const startSleepiness = function() {
    sleepiness -= .01;
    $("#sleepiness__bar").text(sleepiness);
    if (sleepiness <= 0) {
        $("#sleepiness__bar").text(0);
    }
}

const startBoredom = function() {
    boredom -= .01;
    $("#boredom__bar").text(boredom);
    if (boredom <= 0) {
        $("#boredom__bar").text(0);
    }
}

const sleepRegen = function() {
    sleepiness += .05;
    $("#sleepiness__bar").text(sleepiness);
    if (sleepiness >= 10) {
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
    hungerInterval = setInterval(startHunger, 50);
    sleepInterval = setInterval(startSleepiness, 50);
    boredomInterval = setInterval(startBoredom, 50);
    }


// Interactive Functions [start games/rounds]
$(".background__start").on("click", function (){
    startFirst();
    console.log("started");
    
});

$(".firstevo__cont").on("click", function (){
    startSecond();
    console.log("round 2 started");
    // change profile pic, character
});

$(".secondevo__cont").on("click", function (){
    startThird();
    console.log("round 3 started");
    // change profile pic, character
});

$("#button__feed").on("click", function(){
    if (isSleeping === false && hunger <= 9.5){
        hunger += .5;
        $("#hunger__bar").text(hunger);
    } else {
        hunger += 0;
    }
});

$("#button__play").on("click", function(){
    if (isSleeping === false && boredom <= 9.5){
        boredom += .5;
        $("#boredom__bar").text(boredom);
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
    detachNameInput();
})

// DOM functions

const detachNameInput = function () {
    $(".nameinput").detach();
}