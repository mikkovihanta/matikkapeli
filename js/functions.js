let rand_num1 = 0 ;
let rand_num2 = 0 ;
let correctCount = 0;
let incorrectCount = 0;

const getRandomIntNumberInRange = (min,max) => {
    return Math.floor(Math.random() *max) + min;
}

const ramdomizeNumbers =() => {
    rand_num1 = getRandomIntNumberInRange(1,10)
    rand_num2 = getRandomIntNumberInRange(1,10)
    document.querySelector('#num1').innerHTML = rand_num1;
    document.querySelector('#num2').innerHTML = rand_num2;
};

addEventListener("DOMContentLoaded", () => {
    ramdomizeNumbers();
});

document.querySelector('button').addEventListener('click', () => {
    const answer = Number(document.querySelector('input').value)
    const correctAnswer = rand_num1 + rand_num2
    const Calcu = document.querySelector('#result');
    if (answer === correctAnswer){
        Calcu.textContent = 'Correct!';
        Calcu.style.color = 'green';
        correctCount++;
        document.querySelector('#oikein').textContent = `Correct answers: ${correctCount}`;
    } else {
        Calcu.textContent = `Incorrect! The correct answer was ${correctAnswer}`;
        Calcu.style.color = 'red';
        incorrectCount++;
        document.querySelector('#vaarin').textContent = `Incorrect answers: ${incorrectCount}`;
    }

    ramdomizeNumbers();
    document.querySelector('input').value='';
});