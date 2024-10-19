// alert("Hello Player!");
humanscore=0;
computerscore=0;
let humanchoice = "";

function getComputerChoice() {
	prob=Math.floor(Math.random()*3);
	if (prob===0)
		return 'rock';
	else if (prob===1)
		return 'paper';
	else
		return 'scissor'
}

const choice = document.querySelector("#choice");
const socreList = document.querySelector("p")
const results = document.querySelector("#results");
const btns = document.querySelector("#buttons");
const finalScores = document.querySelector("#finalScores");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");

btns.addEventListener("click", function(e){
	let target = e.target;
	

			switch(target.id){
			case "rock":
			humanchoice = "rock";
			break;

			case "paper":
			humanchoice = "paper";
			break;

			case "scissor":
			humanchoice = "scissor";	
			break;
		}

		playRound();


		if(humanscore===5){
			const Result = document.createElement("p");
			
			Result.textContent = "You Win";
			
			socreList.appendChild(Result);
			displayScores();
			disableButtons();
			// resetGame();
		
		}

		if (computerscore===5){
			const Result = document.createElement("p");
			
			Result.textContent = "Computer Won"

			socreList.appendChild(Result);
			displayScores();
			disableButtons();

	}
			
});

function playRound(){
	computerchoice=getComputerChoice();

	   socreList.textContent = "";
	if (humanchoice === 'rock' && computerchoice === 'paper'){
		computerscore++;
			const outcome = document.createElement("p");
			showcompChoice()

			outcome.textContent = "You Lost this round";
			socreList.appendChild(outcome);
		
	}

	else if (humanchoice === 'rock' && computerchoice === 'scissor'){
		humanscore++;
		const outcome = document.createElement("p");
		showcompChoice();

			outcome.textContent = "You won this round";
			socreList.appendChild(outcome);
	}


	else if (humanchoice === 'paper' && computerchoice === 'rock'){
		humanscore++;
		const outcome = document.createElement("p");
		showcompChoice();

			outcome.textContent = "You won this round";
			socreList.appendChild(outcome);
	
	}

	else if (humanchoice === 'paper' && computerchoice === 'scissor'){
		computerscore++;
	const outcome = document.createElement("p");
	showcompChoice();

			outcome.textContent = "You Lost this round";
			socreList.appendChild(outcome);
	}

	else if (humanchoice === 'scissor' && computerchoice === 'paper'){
		humanscore++;
		const outcome = document.createElement("p");
		showcompChoice();

			outcome.textContent = "You won this round";
			socreList.appendChild(outcome);
	}

	else if (humanchoice === 'scissor' && computerchoice === 'rock'){
		computerscore++;
		const outcome = document.createElement("p");
		showcompChoice();

			outcome.textContent = "You Lost this round";
			socreList.appendChild(outcome);
		
	}

	else if (humanchoice ===  computerchoice ){
		const outcome = document.createElement("p");
		showcompChoice();

			outcome.textContent = "It's a tie";
			socreList.appendChild(outcome);



			
	}
}

function displayScores(){
	finalScores.textContent = "Your final score is  " +  (+humanscore) +" " + "Computer's Final score is  "+ (+computerscore);
}

const resetbtn = document.createElement("button");
document.body.appendChild(resetbtn);
resetbtn.textContent= "Reset Game";
resetbtn.addEventListener("click", resetGame);

function resetGame(){
	humanscore= 0;
	computerscore = 0;
	socreList.textContent="";
	finalScores.textContent = "";
	choice.textContent = "";

	rock.disabled =false;
	paper.disabled=false;
	scissor.disabled =false;
}


function disableButtons(){
	rock.disabled = true;
	scissor.disabled=true;
	paper.disabled = true;
}

function showcompChoice(){
choice.textContent="Computer Chose " + computerchoice  +" " + " You chose" +" "+  humanchoice;
}




