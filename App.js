let userScore=0;
let compScore=0;

const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getcomputerChoice()
 {
const choices = ['r','p','s'];
const randomNumber = Math.floor(Math.random()*3);
return choices[ randomNumber];
}

function convertToWord(letter)
{
if(letter==='r')
{
  return"Rock";
}
  if (letter==='p') {
    return"Paper";
  }
  if (letter==='s') {
    return"Scissors";
  }
}

function win(userChoice , computerChoice) {
userScore++;
userScore_span.innerHTML = userScore;
compScore_span.innerHTML=compScore;
const smallUserWord = "(user)".fontsize(2).sup();
const smallCompWord = "(comp)".fontsize(2).sup();
result_p.innerHTML= `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord} .YOU WIN :)`;
document.getElementById(userChoice).classList.add('green-glow');
setTimeout( function() { document.getElementById(userChoice).classList.remove('green-glow')},1500);
}

//setTimeout(function() {console.log("helloo")},3000);

function lose(userChoice , computerChoice) {
  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML=compScore;
  const smallUserWord = "(user)".fontsize(2).sup();
  const smallCompWord = "(comp)".fontsize(2).sup();
  result_p.innerHTML= `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord} .COMPUTER WINS :(`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout( function() { document.getElementById(userChoice).classList.remove('red-glow')},1500);
}

function draw(userChoice , computerChoice)
{
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML=compScore;
  const smallUserWord = "(user)".fontsize(2).sup();
  const smallCompWord = "(comp)".fontsize(2).sup();
result_p.innerHTML= `${convertToWord(userChoice)}${smallUserWord} = ${convertToWord(computerChoice)}${smallCompWord} .GAME-DRAW ;)`;
document.getElementById(userChoice).classList.add('yellow-glow');
setTimeout( function() { document.getElementById(userChoice).classList.remove('yellow-glow')},1500);
}

function game(userChoice)
 {
const computerChoice = getcomputerChoice();
switch (userChoice+ computerChoice) {
case "rs":
case "pr":
case "sp":
win(userChoice , computerChoice);
break;

case "rp":
case "ps":
case "sr":
lose(userChoice , computerChoice);
break;

case "rr":
case "pp":
case "ss":
draw(userChoice , computerChoice);
break;
}
}

game("c");

function main() {
  rock_div.addEventListener('click',function() {
  game("r");
 })

 paper_div.addEventListener('click',function() {
 game("p");
 })

 scissors_div.addEventListener('click',function() {
 game("s");
 })
}
main();
