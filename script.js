const possibleChoices=document.querySelectorAll("button")
const playerChoiceText=document.getElementById("player-choice")
const computerChoiceText=document.getElementById("computer-choice")
const result=document.getElementById("result")
var playerScoreText=document.getElementById("player-score")
var computerScoreText=document.getElementById("computer-score")
const roundsText=document.getElementById("rounds")

let playerChoice
let computerChoice
let playerScore=0
let computerScore=0
let roundResult
let rounds=5

const p=["rock","paper","scissors"]
possibleChoices.forEach(choice => choice.addEventListener("click",(e) =>{
   
    playerChoice=e.target.id
    playerChoiceText.innerText=playerChoice
    computerChoice=choose(p)
    computerChoiceText.innerText=computerChoice
    roundResult=getResult(playerChoice,computerChoice)
    console.log(roundResult)
    
    setTimeout(game,100,roundResult)
  
   
}))

function choose(p){
    var index=Math.floor(Math.random()*p.length)
    return p[index]
}

function getResult(playerChoice,computerChoice){
   
    rounds-=1
    roundsText.innerText=rounds
    if(playerChoice===computerChoice){
        result.innerText="It's a draw"
        
        
    }
    else if(playerChoice=="rock" && computerChoice=="paper"){
        result.innerText="You lose"
        computerScore+=1
        computerScoreText.innerText=computerScore
    }
    else if(playerChoice=="rock" && computerChoice=="scissors"){
        result.innerText="You win"
        playerScore+=1
        playerScoreText.innerText=playerScore
    }
    else if(playerChoice=="paper" && computerChoice=="rock"){
        result.innerText="You win"
        playerScore+=1
        playerScoreText.innerText=playerScore
    }
    else if(playerChoice=="paper" && computerChoice=="scissors"){
        result.innerText="You lose"
        computerScore+=1
        computerScoreText.innerText=computerScore
    }
    else if(playerChoice=="scissors" && computerChoice=="paper"){
        result.innerText="You win"
        playerScore+=1
        playerScoreText.innerText=playerScore
    }
    else if(playerChoice=="scissors" && computerChoice=="rock"){
        result.innerText="You lose"
        computerScore+=1
        computerScoreText.innerText=computerScore}
    var arr=[playerScore,computerScore,rounds]
    return arr   
    
}
function game(roundResult){
    if(roundResult[0]>roundResult[1] && roundResult[2]==0)
    {  
        alert("You win this game!")
        playerScore=0
        computerScore=0
        rounds=5
        playerScoreText.innerText=playerScore
        computerScoreText.innerText=computerScore
        roundsText.innerText=rounds
       
    }
    else if(roundResult[1]>roundResult[0] && roundResult[2]==0)
    {
       alert("You lose this game!")
        playerScore=0
        computerScore=0
        rounds=5
        playerScoreText.innerText=playerScore
        computerScoreText.innerText=computerScore
        roundsText.innerText=rounds
        
    }
   else if(roundResult[0]==roundResult[1] && roundResult[2]==0)
   {
    playerScore=0
    computerScore=0
    rounds=5
    playerScoreText.innerText=playerScore
    computerScoreText.innerText=computerScore
    roundsText.innerText=rounds
    alert("It's a draw!")
   }
}

