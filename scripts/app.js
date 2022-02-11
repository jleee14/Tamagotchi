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
    if (age === 9) {
        pauseGame();
        displayFirstEvo();
        endRdStopSleep();
        animateFirstMenu();
        displayMarshtomp();
    } else if (age === 19) {
        pauseGame();
        displaySecondEvo();
        endRdStopSleep();
        animateSecondMenu();
        displaySwampert();
    }
    age += 1;
    $("#metrics__age").text("Age: " + age);
}

const startHunger = function(){
    hunger -= .01;
    const displayHunger = Math.ceil(hunger);
    $("#hunger__bar").text("🍕 " + displayHunger);
    $("#hunger__bar").css("width", hunger * 10 + "%");
    if (hunger < 0) {
        $("#hunger__bar").text(0);
        displayLoss();
        pauseGame();
        stopPokeAnimation();
        animateLossMenu();
    } else if (displayHunger < 3) {
        $("#hunger__bar").text(displayHunger);
    }
}

const startSleepiness = function() {
    sleepiness -= .01;
    const displaySleepiness = Math.ceil(sleepiness);
    $("#sleepiness__bar").text("🛏 " + displaySleepiness);
    $("#sleepiness__bar").css("width", sleepiness * 10 + "%");
    if (sleepiness < 0) {
        $("#sleepiness__bar").text(0);
        displayLoss();
        pauseGame();
        stopPokeAnimation();
        animateLossMenu();
    } else if (displaySleepiness < 3) {
        $("#sleepiness__bar").text(displaySleepiness);
    }
}

const startBoredom = function() {
    boredom -= .01;
    const displayBoredom = Math.ceil(boredom);
    $("#boredom__bar").text("🥳 " + displayBoredom);
    $("#boredom__bar").css("width", boredom * 10 + "%");
    if (boredom < 0) {
        $("#boredom__bar").text(0);
        displayLoss();
        pauseGame();
        stopPokeAnimation();
        animateLossMenu();
    } else if (displayBoredom < 3) {
        $("#boredom__bar").text(displayBoredom);
    }
}

const sleepRegen = function() {
    sleepiness += .075;
    const displaySleepiness = Math.ceil(sleepiness);
    $("#sleepiness__bar").text("🛏 " + displaySleepiness);
    if (sleepiness > 9.925) {
        stopSleep();
    }
}


const stopSleep = function() {
    clearInterval(sleepRegenInterval);
    isSleeping = false;
    nightToggle();
}

const endRdStopSleep = function() {
    if (isSleeping) {
        clearInterval(sleepRegenInterval);
        isSleeping = false;
        nightToggle();
    }
}

const pauseGame = function() {
    clearInterval(ageInterval);
    clearInterval(hungerInterval);
    clearInterval(sleepInterval);
    clearInterval(boredomInterval);
    stopPokeAnimation();
}


// start game/round functions

const startThird= function() {
    
    ageInterval = setInterval(startAge, 2000);
    hungerInterval = setInterval(startHunger, 14);
    sleepInterval = setInterval(startSleepiness, 14);
    boredomInterval = setInterval(startBoredom, 14);
    }


const startSecond = function() {
    
    ageInterval = setInterval(startAge, 2000);
    hungerInterval = setInterval(startHunger, 20);
    sleepInterval = setInterval(startSleepiness, 20);
    boredomInterval = setInterval(startBoredom, 20);
    }

const startFirst = function() {
    
    ageInterval = setInterval(startAge, 2000);
    hungerInterval = setInterval(startHunger, 26);
    sleepInterval = setInterval(startSleepiness, 26);
    boredomInterval = setInterval(startBoredom, 26);
    }


// Interactive Functions [start games/rounds]
$(".background__start").on("click", function (){
    startFirst();
    toggleStart();
    animatePokemon();
});

$(".firstevo__cont").on("click", function (){
    startSecond();
    toggleFirstEvo();
    animatePokemon();
});

$(".secondevo__cont").on("click", function (){
    startThird();
    toggleSecondEvo();
    animatePokemon();
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
        nightToggle();
    }
    else if (!isSleeping) {
        stopSleep();
    }
});

$("#nameinput__ok").on("click", function() {
    const name = $("#nameinput__value").val();
    $(".msg__name").text(` ${name}`);
    $(".background__start").css("display", "inline");
    toggleNameInput();
    nightToggle();
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
}

const displayMarshtomp = function () {
    $(".background__pokemon").attr("src", "images/marshtomp.png");
    $(".background__pokemon").css("max-height", "32.5%");
    $("#metrics__image").css("background-image", "url(https://www.serebii.net/typingds/pokemon/259.png)");
}

const displaySwampert = function () {
    $(".background__pokemon").attr("src", "images/swampert.png");
    $(".background__pokemon").css("max-height", "45%");
    $(".background__pokemon").css("top", "15%");
    $("#metrics__image").css("background-image", "url(https://www.serebii.net/typingds/pokemon/260.png)");
}

// DOM animation function

const animatePokemon = function () {
    $(".background__pokemon").addClass("animate__animated animate__bounce animate__infinite");
}

const stopPokeAnimation = function () {
    $(".background__pokemon").removeClass("animate__animated animate__bounce animate__infinite");
}

const nightToggle = function () {
    $(".night-gradient").slideToggle(300);
}

const animateFirstMenu = function () {
    $(".background__firstevo").addClass("animate__animated animate__backInDown");
}

const animateSecondMenu = function () {
    $(".background__secondevo").addClass("animate__animated animate__backInDown");
}

const animateLossMenu = function () {
    $(".loss__msg").addClass("animate__animated animate__backInDown");
}