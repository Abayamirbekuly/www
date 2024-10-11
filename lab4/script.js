
const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');
const rollButton = document.getElementById('rollButton');
const rollCount = document.getElementById('rollCount');
const message = document.getElementById('message');

let count = 0;

function rollDice() {
    const randomNumber1 = Math.floor(Math.random() * 6) + 1;
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;

   
    dice1.src = `dice${randomNumber1}.png`;
    dice2.src = `dice${randomNumber2}.png`;

    
    count++;
    rollCount.textContent = `Roll count: ${count}`;

   
    if (randomNumber1 === randomNumber2) {
        message.textContent = "You rolled a double!";
    } else {
        message.textContent = "not double roll";
    }
}


rollButton.addEventListener('click', rollDice);
