var randomNumber1 = Math.floor(Math.random() * 6 + 1);

var diceRandom1 = "images/dice" + randomNumber1 + ".png";

var randomImg1 = document.querySelectorAll("img")[0];

randomImg1.setAttribute("src", diceRandom1);

var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var diceRandom2 = "images/dice" + randomNumber2 + ".png";

var randomImg2 = document.querySelectorAll("img")[1];

randomImg2.setAttribute("src", diceRandom2);

if (diceRandom1 === diceRandom2) {
  document.querySelector("h1").innerHTML = "🚩Game Draw!🚩";
} else if (diceRandom1 > diceRandom2) {
  document.querySelector("h1").innerHTML = "🚩Player1 Win!";
} else if (diceRandom2 > diceRandom1) {
  document.querySelector("h1").innerHTML = "Player2 Win!🚩";
}
