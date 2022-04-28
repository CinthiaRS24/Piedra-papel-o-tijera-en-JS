const imgPlayerChoice = document.getElementById('playerChoice');
const imgComputerChoice = document.getElementById('computerChoice');

const pResult = document.getElementById('result');
const pScore =document.getElementById('score');

const buttons = document.querySelectorAll('button');
const choices = ['piedra', 'papel', 'tijeras']; // 0, 1, 2

let positiveScore = 0;
let negativeScore = 0;

const fileNames = {
	'piedra': 'images/rock.png',
	'papel': 'images/paper.png',
	'tijeras': 'images/scissors.png',
};

buttons.forEach(
	button => button.addEventListener('click', startGame)
);

function startGame(event) {
	// determinar la elección del jugador
	const button = event.currentTarget;
	const playerChoice = button.dataset.choice
	//console.log(playerChoice);

	// determinar la elección de la computadora
	const computerChoice = getComputerChoice();
	//console.log(computerChoice);

	// determinar quién gana
	const winner = getWinner(playerChoice, computerChoice);
	//console.log(`El ganador es ${winner}`);

	// actualizar imágenes
	imgPlayerChoice.setAttribute('src', fileNames[playerChoice]);
	imgComputerChoice.setAttribute('src', fileNames[computerChoice]);

	
	// mostrar resultados
	let result;

	if (winner === 'player') {
		result = 'ganas';
		++positiveScore;
	}	else if (winner === 'computer') {
		result = 'pierdes';
		++negativeScore;
	}	else {
		result = 'empatas';
	}

	pResult.innerHTML = `Tú ${result} escogiendo <strong>${playerChoice}</strong>  
			   en contra de <strong>${computerChoice}</strong>.`


	pScore.innerHTML = `Has ganado <strong>${positiveScore}</strong> veces. Has perdido <strong>${negativeScore}</strong> veces.`

}

function getComputerChoice () {
	const i = Math.floor(Math.random() * 3);
	return choices[i];
}

function getWinner (playerChoice, computerChoice) {
	if (playerChoice === computerChoice) {
		return null;
	}

	if (playerChoice === 'piedra') {
		if (computerChoice === 'papel') {
			return 'computer';
		}	else {
				return 'player';
		}
		
	}	else if (playerChoice === 'papel') {
			if (computerChoice === 'piedra') {
				return 'player';
			} else {
				return 'computer';
			}

	}	else {
			if (computerChoice === 'piedra') {
				return 'computer';
			} else {
				return 'player';
			}	

	}
}