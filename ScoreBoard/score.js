// SCORE
var scoreGuest = 0;
var scoreHome = 0;
function scoreGuestPlus(){
    scoreGuest++;
    document.getElementById("guestScore").innerHTML= scoreGuest;
}

function scoreGuestMinus(){
    if(scoreGuest != 0){
        scoreGuest--;
        document.getElementById("guestScore").innerHTML= scoreGuest;
    }else{
        scoreGuest = 0;
    }
}

function scoreHomePlus(){
    scoreHome++;
    document.getElementById("homeScore").innerHTML= scoreHome;
}

function scoreHomeMinus(){
    if(scoreHome != 0){
        scoreHome--;
        document.getElementById("homeScore").innerHTML=scoreHome;
    }else{
        scoreHome = 0;
    }
}

function clearGuest(){
    scoreGuest = 0;
    document.getElementById("guestScore").innerHTML = scoreGuest;
}

function clearHome(){
    scoreHome = 0;
    document.getElementById("homeScore").innerHTML = scoreHome;
}

function addHomeFouls(){
    let foulsNameAdd = prompt("Name?");
    document.getElementById("list2").innerHTML += `${foulsNameAdd}`+"<br>";
}

function removeHomeFouls(){
    let foulsNameRemove = prompt("Remove who?");
    var str = document.getElementById("list2").innerHTML; 
    var res = str.replace(foulsNameRemove+"<br>","");
    document.getElementById("list2").innerHTML = res;
}

function addGuestFouls(){
    let foulsNameAdd = prompt("Name?");
    document.getElementById("list1").innerHTML += `${foulsNameAdd}`+"<br>";
}

function removeGuestFouls(){
    let foulsNameRemove = prompt("Remove who?");
    var str = document.getElementById("list1").innerHTML; 
    var res = str.replace(foulsNameRemove+"<br>","");
    document.getElementById("list1").innerHTML = res;
}

// PERIOD
var period = 1;
function periodPlus(){
    if (period !=3){
        period++;
        document.querySelector(".number").innerHTML=period;
    }else{
        period = 3
    }
    
}

function periodMinus(){
    if (period != 1){
        period--;
        document.querySelector(".number").innerHTML=period;
    }else{
        period = 1;
    }
    
}

// COUNTDOWN
const startingMinutes = 10;
let time = startingMinutes * 60; // time in seconds

const countdownEl = document.getElementById('countdown'); // grabs HTML element for timer

setInterval(updateCountdown, 1000);

function updateCountdown(){
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds < 10 ? `0` + seconds : seconds;

    countdownEl.innerHTML = `${minutes}: ${seconds}`
    time--;
}

//RESET
function reset(){
    clearHome();
    clearGuest();
    updateCountdown();
    number = 1;
    document.querySelector(".number").innerHTML = number;
    document.querySelector("#list1").innerHTML = "";
    document.querySelector("#list2").innerHTML = "";
}