let scores = [0, 0];
const scoreEl = document.getElementsByClassName("score-el");

function scoreUpdate(team) {
  scoreEl[team].textContent = scores[team];
}

function add1(team) {
  scores[team] += 1;
  scoreUpdate(team);
}

function add2(team) {
  scores[team] += 2;
  scoreUpdate(team);
}

function add3(team) {
  scores[team] += 3;
  scoreUpdate(team);
}