console.log("loaded");

// Starter global variables

let age = 0;
let boredom = 10;
let hunger = 10;
let sleepiness = 10;
let isSleeping = false;
let sleepInterval;

// Starter functions
const startAge = function() {
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
}


const stopSleep = function(){
    clearInterval(sleepInterval);
}


const startGame = function () {
    setInterval(startAge, 2000);
    setInterval(startHunger, 50);
    setInterval(startSleepiness, 50);
    setInterval(startBoredom, 50);
}

$(".background__start").on("click", function (){
    startGame();
    console.log("started");
});

// Interactive Functions

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
        sleepInterval = setInterval(sleepRegen, 50);
    }
    else if (!isSleeping) {
        stopSleep();
    } 
});