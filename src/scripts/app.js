// Shuffle function from http://stackoverflow.com/a/2450976
const cards = document.getElementById('cards');
const nextCard = document.querySelector('#next-card');
const score = document.getElementById('score');

let shuffle = function(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


const flipCard = function(event) {
  // Rewrite flipCard function
  // flip the card up *
  // if card is matched it stays flipped
  // if there is no match it flips back

  // event.target.classList.add('show');
  // const cardHold = ;
  // if (listOfCardsToFind[0] === parseInt(event.target.dataset.shuffled)) {

  // }
  let hideCard;
  event.target.classList.add('show');
  let flip = true;
  if (flip) {
    hideCard = setTimeout(function() {
      event.target.classList.remove('show');
      flip = false;
    }, 300);
  } 
  return matchCard(event);
}

const matchCard = function(event) {
  if ((flipCard) 
  && (nextCard.firstElementChild.classList.value === event.target.firstElementChild.classList.value)) {
    event.target.classList.add('matched');
  } else {
    moveCounter();
  }
}

const moveCounter = function() {
  let count = score.textContent;
  count++;
  score.textContent = count;
}

const cardSymbol = [
  'fa-atom', 
  'fa-frog', 
  'fa-feather-alt', 
  'fa-cogs',
  'fa-anchor',
  'fa-fan',
  'fa-bolt',
  'fa-hat-wizard',
  'fa-apple-alt',
  'fa-bell',
  'fa-bomb',
  'fa-brain'
]

const card = cards.querySelectorAll('i');
const tableShuffle = function() {
  const listOfCards = shuffle([0, 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11]);
  for (let i = 0; i < listOfCards.length; i++) {
    card[i].dataset.shuffled = listOfCards[i];
    for (let j = 0; j < cardSymbol.length; j++) {
      card[i].classList.remove(cardSymbol[j]);
    }
    card[i].classList.add(cardSymbol[card[i].dataset.shuffled]);
  }
}

const listOfCardsToFind = [0, 1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11];

const findCardShuffle = function() {
  const nextCardElement = nextCard.querySelector('i');
  shuffle(listOfCardsToFind);
  for (let i = 0; i < cardSymbol.length; i++) {
    nextCardElement.classList.remove(cardSymbol[i]);
  }
  nextCardElement.classList.add(cardSymbol[listOfCardsToFind[0]]);
}

const restartGame = function() {
  const matched = document.querySelectorAll('.matched');
  for (let element of matched) {
    element.classList.remove('matched');
  }
  score.textContent = 0;
  tableShuffle();
  findCardShuffle();
}

restartGame();

document.querySelector('.restart').addEventListener('click', restartGame); 

cards.addEventListener('click', function(event) {
  flipCard(event);
});