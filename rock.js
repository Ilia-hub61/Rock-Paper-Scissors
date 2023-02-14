function getComputerChoice(nomber){
    return Math.floor(Math.random() * nomber);
}

function playRound(playerSelection, computerSelection) {
    let playerSelection = prompt("Who's your fighter");
        if (playerSelection.toLowerCase() === 'rock'){
            if (computerSelection === 1){
                return 'Draw. Rock does not beat rock'
        } else if (computerSelection === 2){
            return 'Win. Rock beats scissors'
        } else{
            return 'Lose. Paper beats rock'
        }
      }
        if (playerSelection.toLowerCase() === 'paper'){
            if (computerSelection === 3){
            return 'Draw. Paper does not beat paper'
        } else if (computerSelection === 1){
            return 'Win. Paper beats scissors'
        } else{
        return 'Lose. Scissors beats paper'
        }
      }
        if (playerSelection.toLowerCase() === 'scissors'){
            if (computerSelection === 2){
                return 'Draw. Scissors does not beat Scissors'
        } else if (computerSelection === 3){
            return 'Win! Scissors beats paper'
        } else{
            return 'Lose! Rock beats scossors'
        }
      }
    }

const playerSelection = "rock";
const computerSelection = getComputerChoice();
return (playRound(playerSelection, computerSelection));

function game(){
    let result = ''
    let compres = 0
    let playerres = 0
    let compturn = ''
    let playerturn = ''
    for (let i = 0; i < 5; i++){
        compturn = getComputerChoice()
        playerturn = playerSelection
        result = playRound(compturn, playerturn)
        if (result.includes('Win')){
            playerres += 1
        } else if (result.includes('Lose')){
            compres += 1
        } else {
            i -= 1
        }
    }
}

if (playerres > compres){
    console.log('You win', playerres + ':', + compres)
} else{
    console.log('You lose', compres, + ':', + playerres)
}

game()
