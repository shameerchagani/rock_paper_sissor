const arr = ['rock', 'paper', 'sissors'];
let playerChoice = "";
let computerChoice = "";
let compImg = document.getElementById('compImg')
let pRock = document.getElementById("rock");
let pPaper = document.getElementById("paper");
let pSissors = document.getElementById("sissors");
let compScore = 0
let playerScore = 0
let result = document.getElementById('result')
let pScore = document.getElementById('playerScore')
let cScore = document.getElementById('compScore')
let n = Number(prompt(`Enter Winning Points`))

pRock.addEventListener("click", funRock);
pPaper.addEventListener("click", funPaper);
pSissors.addEventListener("click", funSissors);


function funRock() {
    if (playerScore < n && compScore < n) {
        playerChoice = 'rock'
        computerChoice = arr[Math.floor(Math.random() * 3)]
        compImg.src = `images/${computerChoice}.png`
        compImg.classList.add('transition')
        if (computerChoice === playerChoice) {
            result.innerHTML = 'Its a tie!'
            compScore = compScore
            playerScore = playerScore


        } else if (computerChoice === 'sissors') {
            result.innerHTML = 'You Win!'
            playerScore++;
            pScore.innerHTML = playerScore
            cScore.innerHTML = compScore
        } else if (computerChoice === 'paper') {
            result.innerHTML = 'You Loose'
            compScore++
            pScore.innerHTML = playerScore
            cScore.innerHTML = compScore
        }
        playerScore === n ? document.getElementById('finalRes').innerHTML = `Game Over! - Player Won!` : ""
        compScore === n ? document.getElementById('finalRes').innerHTML = `Game Over! - Computer Won` : ""
    } else alert(`Game Over Refresh to play again`)
}



function funPaper() {
    if (playerScore < n && compScore < n) {
        playerChoice = 'paper';
        // console.log(playerChoice);
        computerChoice = arr[Math.floor(Math.random() * 3)]
        compImg.src = `images/${computerChoice}.png`
        compImg.classList.add('transition')

        if (computerChoice === playerChoice) {
            result.innerHTML = 'Its a tie!'
            compScore = compScore
            playerScore = playerScore
        } else if (computerChoice === 'rock') {
            result.innerHTML = 'You Win!'
            playerScore++;
            pScore.innerHTML = playerScore
            cScore.innerHTML = compScore
        } else if (computerChoice === 'sissors') {
            result.innerHTML = 'You Loose'
            compScore++
            pScore.innerHTML = playerScore
            cScore.innerHTML = compScore
        }
        playerScore === n ? document.getElementById('finalRes').innerHTML = `Game Over! - Player Won!` : ""
        compScore === n ? document.getElementById('finalRes').innerHTML = `Game Over! - Computer Won` : ""
    } else alert(`Game Over Refresh to play again`)
}



function funSissors() {
    if (playerScore < n && compScore < n) {
        playerChoice = 'sissors';
        // console.log(playerChoice);
        computerChoice = arr[Math.floor(Math.random() * 3)]
        compImg.src = `images/${computerChoice}.png`
        compImg.classList.add('transition')

        if (computerChoice === playerChoice) {
            result.innerHTML = 'Its a tie!'
            compScore = compScore
            playerScore = playerScore
        } else if (computerChoice === 'paper') {
            result.innerHTML = 'You Win!'
            playerScore++;
            pScore.innerHTML = playerScore
            cScore.innerHTML = compScore
        } else if (computerChoice === 'rock') {
            result.innerHTML = 'You Loose'
            compScore++
            pScore.innerHTML = playerScore
            cScore.innerHTML = compScore
        }
        playerScore === n ? document.getElementById('finalRes').innerHTML = `Game Over! - Player Won!` : ""
        compScore === n ? document.getElementById('finalRes').innerHTML = `Game Over! - Computer Won` : ""
    } else alert(`Game Over Refresh to play again`)
}



