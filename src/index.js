import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import OctoSlash from './assets/images/octoslash.png';
// import NyteRat from './assets/images/nyterat.png';
// import Gargoyle from './assets/images/gargoyle.png';
// import Unholy from './assets/images/unholy.png';
import * as character from "./js/character";

let currCharacter;
let currBadie;

const toggleCharacterAssets = (curChar) => {
  document.getElementById('heroName').innerHTML = curChar().name;
  document.getElementById('heroLevel').innerHTML = curChar().level;
  document.getElementById('heroHealth').innerHTML = curChar().health;
  document.getElementById('heroAttack').innerHTML = curChar().attack;
  document.getElementById('heroMagic').innerHTML = curChar().magic;
  document.getElementById('heroMana').innerHTML = curChar().mana;
  document.getElementById('heroExp').innerHTML = curChar().exp;
};

const toggleBaddieAssets = (curChar) => {
  document.getElementById('badieName').innerHTML = curChar().name;
  document.getElementById('badieHealth').innerHTML = curChar().health;
};

const handleWizard = (event) => {
  event.preventDefault();
  currCharacter = character.storeState("Goat Pope");
  currCharacter(character.incLevel(1));
  currCharacter(character.incMaxHealth(20));
  currCharacter(character.incHealth(20));
  currCharacter(character.incAttack(4));
  currCharacter(character.incMagic(8));
  currCharacter(character.incMaxMana(20));
  currCharacter(character.incMana(20));
  currCharacter(character.incExp(0));
  document.getElementById('charImg').setAttribute("src", "assets/images/goatpope.png");
  document.getElementById('charSelect').setAttribute('class', 'hidden');
  document.getElementById('charInfo').removeAttribute('class', 'hidden');
  document.getElementById('locations').removeAttribute('class', 'hidden');
  toggleCharacterAssets(currCharacter);
};

const handleWarrior = (event) => {
  event.preventDefault();
  currCharacter = character.storeState("Warrior");
  currCharacter(character.incLevel(1));
  currCharacter(character.incMaxHealth(15));
  currCharacter(character.incHealth(15));
  currCharacter(character.incAttack(9));
  currCharacter(character.incMagic(2));
  currCharacter(character.incMaxMana(5));
  currCharacter(character.incMana(5));
  currCharacter(character.incExp(0));
  // document.getElementById('charImg').setAttribute("src", "assets/images/warrior.png");
  document.getElementById('charSelect').setAttribute('class', 'hidden');
  document.getElementById('charInfo').removeAttribute('class', 'hidden');
  document.getElementById('locations').removeAttribute('class', 'hidden');
  toggleCharacterAssets(currCharacter);
};

const handleThief = (event) => {
  event.preventDefault();
  currCharacter = character.storeState("Thief");
  currCharacter(character.incLevel(1));
  currCharacter(character.incMaxincHealth(25));
  currCharacter(character.health(25));
  currCharacter(character.incAttack(5));
  currCharacter(character.incMagic(5));
  currCharacter(character.incMaxincMana(10));
  currCharacter(character.mana(10));
  currCharacter(character.incExp(0));
  // document.getElementById('charImg').setAttribute("src", "assets/images/thief.png");
  document.getElementById('charSelect').setAttribute('class', 'hidden');
  document.getElementById('charInfo').removeAttribute('class', 'hidden');
  document.getElementById('locations').removeAttribute('class', 'hidden');
  toggleCharacterAssets(currCharacter);
};

const handleOctoSlash = () => {
  currBadie = character.storeState("OctoSlash");
  currBadie(character.incLevel(currCharacter().level));
  currBadie(character.incMaxHealth(currCharacter().maxHealth));
  currBadie(character.incHealth(currCharacter().health));
  currBadie(character.incAttack(currCharacter().attack));
  currBadie(character.incMagic(currCharacter().magic));
  currBadie(character.incMaxMana(currCharacter().maxMana));
  currBadie(character.incMana(currCharacter().mana));
  document.getElementById('badieImg').setAttribute("src", "assets/images/octoslash.png");
  document.getElementById('locations').removeAttribute('class', 'hidden');
  toggleBaddieAssets(currBadie);
};

const handleFight = (event) => {
  event.preventDefault();
  document.getElementById("fight").classList.add("hidden");
  document.getElementById("shop").classList.add("hidden");
  document.getElementById("choice").classList.remove("hidden");
  document.getElementById("engage").classList.remove("hidden");
  document.getElementById("leave").classList.remove("hidden");
};

const chance = () => {
  return 25;
};

const handleEngage = (event) => {
  event.preventDefault();
  let randomizer = chance();
  if (randomizer <= 25) {
    handleOctoSlash();
  } else if (randomizer <= 50) {
    handleOctoSlash();
  } else if (randomizer <= 75) {
    handleOctoSlash();
  } else {
    handleOctoSlash();
  }
  document.getElementById('moves').removeAttribute('class', 'hidden');
};

const handleLeave = (event) => {
  event.preventDefault();
  // currCharacter.location = '';
  document.getElementById('locations').removeAttribute('class', 'hidden');
  document.getElementById('choice').setAttribute('class', 'hidden');
  //picture
};

const handleAttack = (event) => {
  event.preventDefault();
  currBadie(character.decHealth(currCharacter().attack));
  currCharacter(character.decHealth(currBadie().attack));
  toggleCharacterAssets(currCharacter);
  toggleBaddieAssets(currBadie);
};


addEventListener('load', function () {
  document.getElementById('wizard').addEventListener('click', handleWizard);
  document.getElementById('warrior').addEventListener('click', handleWarrior);
  document.getElementById('thief').addEventListener('click', handleThief);
  document.getElementById('fight').addEventListener('click', handleFight);
  // document.getElementById('shop').addEventListener('click', handleChurch);
  document.getElementById('engage').addEventListener('click', handleEngage);
  document.getElementById('leave').addEventListener('click', handleLeave);
  document.getElementById('attack').addEventListener('click', handleAttack);
  // document.getElementById('magic').addEventListener('click', handleMagic);
  // document.getElementById('heal').addEventListener('click', handleHeal);
  // document.getElementById('restart').addEventListener('click', handleRestart);
});
