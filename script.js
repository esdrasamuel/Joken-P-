
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resultParagraph = document.querySelector('.result');
const yourScoreSpan = document.querySelector('.your-score span');
const machineScoreSpan = document.querySelector('.machine-score span');


let yourScore = 0;
let machineScore = 0;

function generateMachinePlay() {
    const plays = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * plays.length);
    return plays[randomIndex];
}

function determineWinner(playerPlay, machinePlay) {
    console.log("humano: " + playerPlay + " Maquina: " + machinePlay)

    if (playerPlay === machinePlay) {
        return 'Empate';
    } else if (
        (playerPlay === 'rock' && machinePlay === 'scissors') ||
        (playerPlay === 'paper' && machinePlay === 'rock') ||
        (playerPlay === 'scissors' && machinePlay === 'paper')
    ) {
        return 'Você venceu!';
    } else {
        return 'Darth Vader venceu!';
    }
}

function updateScoreAndCheckWinner(winner) {
    if (winner === 'Você venceu!') {
        yourScore++;
    } else if (winner === 'Darth Vader venceu!') {
        machineScore++;
    }
    yourScoreSpan.textContent = yourScore;
    machineScoreSpan.textContent = machineScore;

    if (yourScore === 3) {
        resultParagraph.textContent = 'The Jedi Order Won';
        disableButtons();
        document.getElementById('reset').style.display = 'inline';
        document.getElementById('reset').classList.add('pulse'); // Adiciona a classe de pulsação
        showSound(true); // Toca o som de vitória do humano
    } else if (machineScore === 3) {
        resultParagraph.textContent = 'The Dark Side Won';
        disableButtons();
        document.getElementById('reset').style.display = 'inline';
        document.getElementById('reset').classList.add('pulse'); // Adiciona a classe de pulsação
        showSound(false); // Toca o som de vitória da máquina
    }
}


function showSound(isHumanWinner) {
    const winSound = document.getElementById('winSound');
    const loseSound = document.getElementById('loseSound');

    if (isHumanWinner) {
        winSound.play();
    } else {
        loseSound.play();
    }
}


document.getElementById('reset').addEventListener('click', function () {
    yourScore = 0;
    machineScore = 0;
    yourScoreSpan.textContent = 0;
    machineScoreSpan.textContent = 0;
    resultParagraph.textContent = '';
    document.getElementById('reset').style.display = 'none';
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
});


function disableButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}

rockButton.addEventListener('click', function () {
    const machinePlay = generateMachinePlay();
    const winner = determineWinner('rock', machinePlay);
    resultParagraph.textContent = winner;
    updateScoreAndCheckWinner(winner);
});

paperButton.addEventListener('click', function () {
    const machinePlay = generateMachinePlay();
    const winner = determineWinner('paper', machinePlay);
    resultParagraph.textContent = winner;
    updateScoreAndCheckWinner(winner);
});

scissorsButton.addEventListener('click', function () {
    const machinePlay = generateMachinePlay();
    const winner = determineWinner('scissors', machinePlay);
    resultParagraph.textContent = winner;
    updateScoreAndCheckWinner(winner);
});

const backgrounds = [
    "./assets/01.jpg",
    "./assets/02.jpg",
    "./assets/03.jpg",
    "./assets/04.jpg",
    "./assets/05.jpg",
    "./assets/06.jpg",
    "./assets/07.jpg",
    "./assets/08.jpg",
    "./assets/09.jpg",
    "./assets/10.jpg",
    "./assets/11.jpg",
    "./assets/12.jpg",
    "./assets/13.jpg",
    "./assets/14.jpg",
    "./assets/15.jpg",

];

document.getElementById('reset').addEventListener('click', function () {
    yourScore = 0;
    machineScore = 0;
    yourScoreSpan.textContent = 0;
    machineScoreSpan.textContent = 0;
    resultParagraph.textContent = '';
    document.getElementById('reset').style.display = 'none';
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
    document.getElementById('reset').classList.remove('pulse');

    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    const randomBackground = backgrounds[randomIndex];
    document.body.style.backgroundImage = `url(${randomBackground})`;
});
