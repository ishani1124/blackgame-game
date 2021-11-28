let cards = [];
let sum = 0;
let hasBlackJack = false
let isAlive = false
let message;
let messageEL = document.getElementById("message-el");


console.log(cards)

// let sumEL = document.getElementById("sum-el")
let sumEL = document.querySelector("#sum-el");
let cardEL = document.getElementById("card-el");

function startGame() {
  let isAlive = true
  let firstCard = getRandomNumber();
  let secondCard = getRandomNumber();
  cards = [firstCard , secondCard]
  sum = firstCard + secondCard
  renderGame();
}

function getRandomNumber(){
  let randomNum =  Math.floor(Math.random()*13)+1
  if(randomNum === 1)
      return 11
  else if(randomNum > 10 )
      return 10
  else
     return randomNum
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
    hasBlackJack = true
  } else {
    message = "You're out of the game!";
    isAlive = false
  }
  messageEL.innerText = message;
}

function newCard() {

  if(isAlive === true && hasBlackJack === false){
  let card = getRandomNumber();
  sum += card;
  cards.push(card)
  renderGame();

  }
}
