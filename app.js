const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;
const startGame = document.getElementsByClassName('btn__reset')[0];
const startScreen = document.getElementById('overlay');

// Start Game Initiation
startGame.addEventListener ('click', () => {
  startScreen.style.display = "none";
});

let phrases = [
  "Purple Rain",
  "September",
  "I Will Survive",
  "Brick House",
  "Play That Funky Music"
]
// Gets a Random Phrase for the Game
function getRandomPhraseAsArray (arr) {
  let randomPhrase = Math.floor(Math.random() * arr.length);
  let arrayOfStrings = arr[randomPhrase].split('');
  return arrayOfStrings;
}

const phraseArray = getRandomPhraseAsArray(phrases);

function addPhraseToDisplay (arr) {
  for (let i = 0; i < arr.length; i++) {
    let listItem = document.createElement('li');
    let ul = document.getElementsByTagName('ul')[0];
    if (arr !== ' ') {
      listItem.className = "letter";
    } else {
      return listItem;
    }
    listItem.textContent = arr;
    ul.appendChild(listItem);
    phrase.appendChild(ul);
  }
}