function getComputerChoice(nomber){
    return Math.floor(Math.random() * nomber);
}
if (getComputerChoice(3) == 0){
    alert('Rock')} else if (getComputerChoice(3) == 1){
    alert('Scissors')} else {
    alert('Paper')};
    
function playRound(playerSelection, computerSelection) {
        if (playerSelection.toLowerCase() === 'rock'){
            if (computerSelection.toLowerCase() === 'rock'){
                return 'Draw. Rock does not beat rock'
        } else if (computerSelection.toLowerCase() === 'scissors'){
            return 'Win. Rock beats scissors'
        } else{
            return 'Lose. Paper beats rock'
        }
      }
        if (playerSelection.toLowerCase() === 'paper'){
            if (computerSelection.toLowerCase() === 'paper'){
            return 'Draw. Paper does not beat paper'
        } else if (computerSelection.toLowerCase() === 'rock'){
            return 'Win. Paper beats scissors'
        } else{
        return 'Lose. Scissors beats paper'
        }
      }
        if (playerSelection.toLowerCase() === 'scissors'){
            if (computerSelection.toLowerCase() === 'scissors'){
                return 'Draw. Scissors does not beat Scissors'
        } else if (computerSelection.toLowerCase() === 'paper'){
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
    let playertrun = ''
    for (let i = 0; i < 5; i++){
        compturn = getComputerChoice()
        playertrun = playerSelection
        result = playRound(compturn, playertrun)
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
