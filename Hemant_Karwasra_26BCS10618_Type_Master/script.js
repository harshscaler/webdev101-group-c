const wordsList = [
    "Superman", "Batman", "Spiderman", "Ironman", "Captain",
    "Thor", "Hulk", "Flash", "Wonder", "Vision",
    "Falcon", "Hawkeye", "Antman", "Deadpool", "Wolverine",
    "coding", "script", "window", "button", "random",
    "project", "browser", "screen", "keyboard", "simple",
    "logic", "minute", "letter", "design", "event"
];

let wordContainer = document.querySelector('.word');
let inputArea = document.querySelector('.input');
let timerDisplay = document.querySelector('.timer');
let resultDisplay = document.querySelector('.result');
let startBtn = document.querySelector('.start');
let endBtn = document.querySelector('.end');

let allLetters = [];
let startTime = 0;
let isRunning = false;
let correctCount = 0;
let seconds = 0;
let timerInterval = null;

function loadWords() {
    wordContainer.innerHTML = '';

    let selectedWords = [];
    for (let i = 0; i < 14; i++) {
        let randomIndex = Math.floor(Math.random() * wordsList.length);
        selectedWords.push(wordsList[randomIndex]);
    }

    let sentence = selectedWords.join(' ');

    for (let i = 0; i < sentence.length; i++) {
        let span = document.createElement('span');
        span.classList.add('letter');
        if (i === 0) {
            span.classList.add('current');
        }
        span.innerText = sentence[i];
        wordContainer.appendChild(span);
    }

    allLetters = document.querySelectorAll('.letter');
}

function startTest() {
    clearInterval(timerInterval);
    loadWords();

    inputArea.value = '';
    inputArea.disabled = false;
    inputArea.placeholder = 'Type here...';
    resultDisplay.innerText = '';

    correctCount = 0;
    seconds = 0;
    timerDisplay.innerText = 'Time: 0s';
    startTime = Date.now();
    isRunning = true;

    timerInterval = setInterval(function () {
        seconds++;
        timerDisplay.innerText = 'Time: ' + seconds + 's';
    }, 1000);

    inputArea.focus();
}

function endTest() {
    if (!isRunning) {
        return;
    }

    isRunning = false;
    clearInterval(timerInterval);
    inputArea.disabled = true;

    let endTime = Date.now();
    let minutes = (endTime - startTime) / 1000 / 60;
    let wpm = 0;

    if (minutes > 0) {
        wpm = Math.round((correctCount / 5) / minutes);
    }

    resultDisplay.innerText = 'Speed: ' + wpm + ' WPM';
}

function checkInput(length) {
    if (!isRunning) {
        return;
    }

    correctCount = 0;

    for (let i = 0; i < allLetters.length; i++) {
        allLetters[i].classList.remove('current');

        if (i < length) {
            let inputValue = inputArea.value[i];
            if (inputValue === allLetters[i].innerText) {
                allLetters[i].classList.add('correct');
                allLetters[i].classList.remove('incorrect');
                correctCount++;
            } else {
                allLetters[i].classList.add('incorrect');
                allLetters[i].classList.remove('correct');
            }
        } else {
            allLetters[i].classList.remove('correct');
            allLetters[i].classList.remove('incorrect');
        }
    }

    if (length < allLetters.length) {
        allLetters[length].classList.add('current');
    }

    if (length === allLetters.length) {
        endTest();
    }
}

inputArea.addEventListener('input', function () {
    let inputValue = inputArea.value;
    checkInput(inputValue.length);
});

startBtn.addEventListener('click', startTest);
endBtn.addEventListener('click', endTest);

loadWords();