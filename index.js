let firstCard = 10;
let secondCard = 4;
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
  sumEL.textContent = "Sum: " + sum;
  cardEL.textContent = "Cards: ";
  for (let count = 0; count < cards.length; count++)
    cardEL.textContent += cards[count] + " "
  if (sum < 21) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
  } else {
    message = "You're out of the game!";
  }
  messageEL.innerText = message;
}

function newCard() {
  let card = 1;
  sum += card;
  cards.push(card)
  renderGame();
}
