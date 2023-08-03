var item = [0, 1, 2, 3, 4, 6, "W"]

var ball = document.querySelectorAll(".balls")
var team1S = document.querySelector("#team1-score")
var team2S = document.querySelector("#team2-score")
var team1W = document.querySelector("#team1-wickets")
var team2W = document.querySelector("#team2-wickets")
var balls = 0;
var team1Score = 0;
var team2Score = 0;
var team1Wicket = 0;
var team2Wicket = 0;

function scoreupdate() {
    let s = item[Math.floor(Math.random() * item.length)]
    console.log(s, ball)
    if (balls < 6) {
        if (s == "W") {
            team1Wicket += 1;
            ball[balls].innerText = s;
        } else {
            ball[balls].innerText = s;
            team1Score += s
        }
    } else if (balls < 12) {
        if (s == "W") {
            team2Wicket += 1;
            ball[balls].innerText = s;
        } else {
            ball[balls].innerText = s;
            team2Score += s
        }
    } else {
        if (team1Score > team2Score) {
            alert("IND WINS")
        }
        else if (team1Score < team2Score) {
            alert("PAK WINS")
        }
        else {
            alert("DIES")
        }
    }
    balls += 1;
    team1S.innerText = team1Score
    team1W.innerText = team1Wicket
    team2S.innerText = team2Score
    team2W.innerText = team2Wicket
}

function reload() {
    window.location.reload()
}
if (balls>=12){
if (team1S > team2S) {
    alert("IND WINS")
}
else if (team1S < team2S) {
    alert("PAK WINS")
}
else {
    alert("DR")
}
}


