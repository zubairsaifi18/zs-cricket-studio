// =======================================
// ZS Cricket Studio v1.0
// Final Script
// Part 1
// =======================================

// Demo Match Data
const match = {
    team1: "India",
    team2: "England",

    score: "186/4",

    overs: "18.2",

    crr: "10.22",

    partnership: "77 (37)",

    lastWicket: "S Iyer 25 (20)",

    nextBatsman: "R Singh",

    recent: ["1","4","W","6","2","."]
};

// Update Live Score

function loadMatch(){

const score=document.getElementById("score");

if(score){

score.innerHTML=match.score;

}

const overs=document.getElementById("overs");

if(overs){

overs.innerHTML=match.overs;

}

const crr=document.getElementById("crr");

if(crr){

crr.innerHTML=match.crr;

}

const partner=document.getElementById("partnership");

if(partner){

partner.innerHTML=match.partnership;

}

const last=document.getElementById("lastWicket");

if(last){

last.innerHTML=match.lastWicket;

}

const next=document.getElementById("nextBatsman");

if(next){

next.innerHTML=match.nextBatsman;

}

}

// Page Load

window.onload=loadMatch;

// =======================================
// ZS Cricket Studio v1.0
// Final Script
// Part 2
// =======================================

// Live Clock

function updateClock(){

const now = new Date();

const time = now.toLocaleTimeString();

const clock = document.getElementById("liveClock");

if(clock){

clock.innerHTML = time;

}

}

setInterval(updateClock,1000);


// LIVE Badge Animation

function blinkLive(){

const live = document.getElementById("liveBadge");

if(live){

live.classList.toggle("fade");

}

}

setInterval(blinkLive,800);


// Auto Refresh Every 30 Seconds

setInterval(()=>{

console.log("Refreshing Match Data...");

// Future CricAPI Call Here

loadMatch();

},30000);


// CricAPI Ready

const API = {

apiKey : "YOUR_API_KEY",

baseURL : "https://api.cricapi.com/v1/"

};


// Fetch Function (Future Use)

async function getLiveScore(){

console.log("API Ready");


// Future Fetch Code

}
// =======================================
// ZS Cricket Studio v1.0
// Final Script
// Part 3
// =======================================

// Player Data

const players = {

batsman1:{
name:"Virat Kohli",
runs:72,
balls:45,
fours:8,
sixes:2,
sr:160.00
},

batsman2:{
name:"Shubman Gill",
runs:54,
balls:39,
fours:5,
sixes:1,
sr:138.46
},

bowler:{
name:"Jofra Archer",
overs:"3.2",
wickets:2,
economy:8.40
}

};


// Recent Balls

function loadRecentBalls(){

const recent = document.getElementById("recentBalls");

if(!recent) return;

recent.innerHTML="";

match.recent.forEach(ball=>{

const span=document.createElement("span");

span.innerHTML=ball;

recent.appendChild(span);

});

}


// Match Status

function loadStatus(){

const status=document.getElementById("matchStatus");

if(status){

status.innerHTML="India are batting.";

}

}


// Initialize Page

function init(){

loadMatch();

loadRecentBalls();

loadStatus();

updateClock();

}

window.onload=init;


// =======================================
// Future CricAPI Integration
// Only API key will be changed later.
// No HTML or CSS changes required.
// =======================================
