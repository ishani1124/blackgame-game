let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;
let cards = [firstCard, secondCard];
let message;
let messageEL = document.getElementById("message-el");

// let sumEL = document.getElementById("sum-el")
let sumEL = document.querySelector("#sum-el");
let cardEL = document.getElementById("card-el");

function startGame() {
  renderGame();
}

function renderGame() {
  if (sum < 21) {
    message = "Do you want to draw a new card?";
    sumEL.textContent = "Sum: " + sum;
    cardEL.textContent = "Cards: " + cards[0] + " " + cards[1];
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
    sumEL.textContent = "Sum: " + sum;
    cardEL.textContent = "Cards: " + cards[0] + " " + cards[1];
  } else {
    message = "You're out of the game!";
    sumEL.textContent = "Sum: " + sum;
    cardEL.textContent = "Cards: " + cards[0] + " " + cards[1];
  }
  messageEL.innerText = message;
}

function newCard() {
  let card = 1;
  sum += card; //21+1 = 22
  renderGame();
}
