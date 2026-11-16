let allLetters = document.querySelectorAll('.letter');
let inputField = document.querySelector('#input-field');

// allLetters[3].classList.add('current');
// console.log(allLetters[3]);
// console.log(allLetters);

// document.addEventListener('keydown', function(event) {});

// document.addEventListener('keyup', function(event) {});

// document.addEventListener('keypress', function(event) {
//     console.log(event.key);
// });


function updateLetterDetails(input) {
    let nextLetterIndex = input.length;
    let previousLetterIndex = nextLetterIndex - 1;
    allLetters[previousLetterIndex].classList.remove('current');    
    allLetters[nextLetterIndex].classList.add('current');

    // console.log(input);
    console.log(allLetters[previousLetterIndex]);
    console.log(input[previousLetterIndex]);

    if(input[previousLetterIndex] === allLetters[previousLetterIndex].textContent) {
        allLetters[previousLetterIndex].classList.add('correct');
    }
    else {
        allLetters[previousLetterIndex].classList.add('incorrect');
    }
}

inputField.addEventListener('input', function() {
    const inputValue = inputField.value;
    // console.log(inputValue);
    updateLetterDetails(inputValue);
});