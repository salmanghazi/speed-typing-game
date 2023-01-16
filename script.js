const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

let currentDifficulty = '';
let currentRandomWord;

let timeInterval = 10;
let score = 0;

const words = [
  'sigh',
  'tense',
  'airplane',
  'ball',
  'pies',
  'juice',
  'warlike',
  'bad',
  'north',
  'dependent',
  'steer',
  'silver',
  'highfalutin',
  'superficial',
  'quince',
  'eight',
  'feeble',
  'admit',
  'drag',
  'loving'
];

function getRandomWord() {
  const randomWord = words[Math.floor(Math.random() * words.length)];
  word.innerText = randomWord;
  currentRandomWord = randomWord;
}

function updateScore() {
  score = score + 1;
  scoreEl.innerText = score;
}

getRandomWord();

text.addEventListener('input', (e) => {
  const inputWord = e.target.value;
  if (inputWord === currentRandomWord) {
    e.target.value = '';
    getRandomWord();
    updateScore();
  }
})

settingsForm.addEventListener('change', () => {
  console.log(difficultySelect.value)
});