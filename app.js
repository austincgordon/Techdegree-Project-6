const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startGame = document.getElementsByClassName('btn__reset')[0];
const resetGame = document.getElementsByClassName('play_again')[0];
const startScreen = document.getElementById('overlay');
const buttons = document.getElementsByTagName('button');
const title = document.getElementsByClassName("title")[0];
let missed = 0;

let phrases = [
  "PURPLE RAIN",
  "SEPTEMBER",
  "I WILL SURVIVE",
  "BRICK HOUSE",
  "PLAY THAT FUNKY MUSIC"
]

// Hides the Start Screen and Begins the Game
startGame.addEventListener('click', () => {
  startScreen.style.display = "none";
});

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
function checkLetter(buttons) {
  let ul = document.getElementsByTagName('ul')[0];
  let listItems = ul.children;
  let match = null;
  for (let i = 0; i < listItems.length; i++) {
    const letter = listItems[i].textContent.toLowerCase();
    if (buttons.textContent === letter) {
      listItems[i].classList.add("show");
      match = buttons.textContent;
    }
  }
  return match;
}

// Checks to see if the player won or lost the game
function checkWin() {
  const letterLi = document.getElementsByClassName("letter");
  const showLi = document.getElementsByClassName("show");
  let ul = document.getElementsByTagName('ul')[0];
  let listItems = ul.children;
  if (letterLi.length === showLi.length) {
    startScreen.classList.add("win");
    title.textContent = "Congrats, you won!"
    startScreen.style.display = "flex";
    startGame.style.display = "none";
    resetGame.style.display = "flex";
    for (let i = 0; i < listItems.length; i++) {
      listItems[i].classList.remove("show");
    }
  } else if (missed >= 5) {
    startScreen.classList.add("lose");
    title.textContent = "Better luck next time. :/"
    startScreen.style.display = "flex";
    startGame.style.display = "none";
    resetGame.style.display = "flex";
    for (let i = 0; i < listItems.length; i++) {
      listItems[i].classList.remove("show");
    }
  }
}

// Listens for correct or incorrect button clicks on the on-screen keyboard
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

// Resets the game so the player can play again
resetGame.addEventListener('click', () => {
  location.reload(); // Reloads the page
  missed = 0;
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("chosen");
    buttons[i].removeAttribute("disabled");
  }
});