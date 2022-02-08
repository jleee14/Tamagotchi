console.log("loaded");

// Starter global variables

let age = 0;
let boredom = 10;
let hunger = 10;
let sleepiness = 10;

// Starter functions
const startAge = function() {
    age += 1;
    $(".metrics__age").text("Age: " + age);
}

const startHunger = function(){
    hunger -= .01;
    $("#hunger__bar").text(hunger);

}

const startSleepiness = function() {
    sleepiness -= .01;
    $("#sleepiness__bar").text(sleepiness);
}

const startBoredom = function() {
    boredom -= .01;
    $("#boredom__bar").text(boredom);
}

const startGame = function () {
    setInterval(startAge, 2000);
    setInterval(startHunger, 100);
    setInterval(startSleepiness, 100);
    setInterval(startBoredom, 100);
}

$(".background__start").on("click", function (){
    startGame();
    console.log("started");
});

// Interactive Functions