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
/* function getRandomPhraseAsArray (arr) {
  let randomPhrase = Math.floor(Math.random() * arr.length);
  let arrayOfStrings = arr.split(' ');
  console.log(arrayOfStrings[randomPhrase]);
}

getRandomPhraseAsArray(phrases); */