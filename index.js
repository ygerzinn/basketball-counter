//Score for the home team
let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeStoreEl =document.getElementById("home-score")
let homeScore = 0

function increaseHomeScoreOne(){
    homeScore += 1
    homeStoreEl.textContent = homeScore
}

function increaseHomeScoreTwo() {
    homeScore += 2
    homeStoreEl.textContent = homeScore;
}

function increaseHomeScoreThree() {
    homeScore +=3
    homeStoreEl.textContent = homeScore
}

//Score for the away team
let awayPoints = document.getElementById("away-score");
let awayBtnOne = document.getElementById("away-score-btn-1")
let awayScore = 0

function increaseAwayScoreOne() {
    awayScore += 1
    awayPoints.textContent = awayScore
}

function increaseAwayScoreTwo() {
    awayScore += 2
    awayPoints.textContent = awayScore
}

function increaseAwayScoreThree() {
    awayScore += 3
    awayPoints.textContent = awayScore
}