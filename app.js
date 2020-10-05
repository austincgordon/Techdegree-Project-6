const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;
const startGame = document.getElementsByClassName('btn__reset')[0];
const startScreen = document.getElementById('overlay');
const button = document.querySelector('button');
let title = document.getElementsByClassName("title")[0];

// Start Game Initiation
startGame.addEventListener('click', () => {
  startScreen.style.display = "none";
});

let phrases = [
  "PURPLE RAIN",
  "SEPTEMBER",
  "I WILL SURVIVE",
  "BRICK HOUSE",
  "PLAY THAT FUNKY MUSIC"
]
// Gets a Random Phrase for the Game
function getRandomPhraseAsArray(arr) {
  let randomPhrase = Math.floor(Math.random() * arr.length);
  let arrayOfStrings = arr[randomPhrase].split('');
  return arrayOfStrings;
}

let phraseArray = getRandomPhraseAsArray(phrases);

// Adds Random Phrase to the Screen
function addPhraseToDisplay(arr) {
  for (let i = 0; i < arr.length; i++) {
    let listItem = document.createElement('li');
    let ul = document.getElementsByTagName('ul')[0];
    if (arr[i] !== ' ') {
      listItem.className = "letter";
    } else {
      listItem.className = "space";
    }
    listItem.textContent = arr[i];
    ul.appendChild(listItem);
    phrase.appendChild(ul);
  }
}

addPhraseToDisplay(phraseArray);

// Checks to see if the letter is a match
function checkLetter(button) {
  let ul = document.getElementsByTagName('ul')[0];
  let listItems = ul.children;
  let match = null;
  for (let i = 0; i < listItems.length; i++) {
    const letter = listItems[i].textContent.toLowerCase();
    if (button.textContent === letter) {
      listItems[i].classList.add("show");
      match = button.textContent;
    }
  }
  return match;
}

function checkWin() {
  const letterLi = document.getElementsByClassName("letter");
  const showLi = document.getElementsByClassName("show");
  if (letterLi.length === showLi.length) {
    startScreen.classList.add("win");
    title.textContent = "You win, motherfucker. Also, HI I LOVE YOU."
    startScreen.style.display = "flex";
  } else if (missed >= 5) {
    startScreen.classList.add("lose");
    title.textContent = "You lose, motherfucker."
    startScreen.style.display = "flex";
  }
}


qwerty.addEventListener('click', (e) => {

  // Checks to see if a button was pressed
  if (e.target.tagName === "BUTTON") {
    e.target.className = "chosen";
    e.target.setAttribute("disabled", true);
  }

  let letterResult = checkLetter(e.target);

  if (letterResult === null) {
    let heart = document.getElementsByClassName("tries");
    heart[missed].style.display = "none";
    missed++;
  }

  checkWin();

});

/* startGame.addEventListener('click', () => {
  missed = 0;

}); */