const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

let currentDifficulty = difficultySelect.value;
let currentRandomWord;

let time = 10;
let score = 0;

text.focus();

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

const timeInterval = setInterval(updateTime, 1000);

function updateTime() {
  time--;
  timeEl.innerHTML = time + 's';

  if (time === 0) {
    clearInterval(timeInterval);
    gameOver();
  }
}

function gameOver() {
  endgameEl.innerHTML = `
    <h1>Time ran out</h1>
    <p>Your final score is ${score}</p>
    <button onclick="location.reload()">Reload</button>
  `;

  endgameEl.style.display = 'flex';
}

function getRandomWord() {
  const randomWord = words[Math.floor(Math.random() * words.length)];
  word.innerText = randomWord;
  currentRandomWord = randomWord;
}

function updateScore() {
  score = score + 1;
  scoreEl.innerText = score;
}

function incrementTime() {
  if (currentDifficulty === 'hard') {
    time += 2;
  } else if (currentDifficulty === 'medium') {
    time += 3;
  } else {
    time += 5;
  }
}

getRandomWord();

text.addEventListener('input', (e) => {
  const inputWord = e.target.value;
  if (inputWord === currentRandomWord) {
    e.target.value = '';
    getRandomWord();
    updateScore();
    updateTime();
    incrementTime();
  }
});

settingsBtn.addEventListener('click', () => settings.classList.toggle('hide'));

settingsForm.addEventListener('change', () => {
  currentDifficulty = difficultySelect.value;
});
