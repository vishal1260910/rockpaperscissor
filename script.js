alert("Hello Player!");
humanscore=0;
computerscore=0;

function getComputerChoice() {
	prob=Math.floor(Math.random()*3);
	if (prob===0)
		return 'rock';
	else if (prob===1)
		return 'paper';
	else
		return 'scissor'
}

function getHumanChoice(){
	choice=prompt("Enter your choice rock, paper or scissor");
	inchoice=choice.toLowerCase()
	return(inchoice);
}

function playRound(){
	humanchoice=getHumanChoice();
	computerchoice=getComputerChoice();
	if (humanchoice === 'rock' && computerchoice === 'paper'){
		computerscore++;
		alert("You lose");
	}

	else if (humanchoice === 'rock' && computerchoice === 'scissor'){
		humanscore++;
		alert("You win!");
	}


	else if (humanchoice === 'paper' && computerchoice === 'rock'){
		humanscore++;
		alert("You win");
	}

	else if (humanchoice === 'paper' && computerchoice === 'scissor'){
		computerscore++;
		alert("You lose");
	}

	else if (humanchoice === 'scissor' && computerchoice === 'paper'){
		humanscore++;
		alert("You win");
	}

	else if (humanchoice === 'scissor' && computerchoice === 'rock'){
		computerscore++;
		alert("You lose");
	}

	else if (humanchoice ===  computerchoice ){
		alert("Tie");
	}



confirm( "Computer Score = " + " " + computerscore);
confirm("Your Score" + " " + humanscore);
}

// for(let i =0; i<5; i++){
// playRound();
// }

alert("Your final score:  " + humanscore +" " + "\nComputer final score: "+ computerscore)