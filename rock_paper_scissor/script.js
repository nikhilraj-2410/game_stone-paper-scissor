let userScore =0;
let compScore =0;


const choices =document.querySelectorAll(".choice")
const msg = document.querySelector("#msg");

const  userScorePara = document.querySelector("#user-score");
const  compScorePara = document.querySelector("#comp-score");
const genCompChoice =() =>{
    const options =["rock" , "paper" , "scissor"];
    const ranIdx =Math.floor(Math.random() *3);
    return options[ranIdx];
}

const drawGame = () =>{
    console.log("game was draw");
    msg.innerText = "Game draw😶 Play again ";
    msg.style.backgroundColor="#90A4B0";
    
};

const showWinner = (userWin ,userChoice , compChoice ) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        
        console.log("you win!");
        msg.innerText = `You Win🥳 you choose: ${userChoice}-------  Bot choose: ${compChoice}`;
        msg.style.backgroundColor="green";
        if (userScore >=10) {
            showPopup("Congratulations! You win the match!");
        }
        else if(compScore >=10){
          showPopup("Sorry! You lost the match!");
        }

    } 
    
      else{
        compScore++;
        compScorePara.innerText = compScore;
       
        console.log("you lose")
        msg.innerText = `You lose🥲 you choose: ${userChoice} -------  Bot choose: ${compChoice}`;
        msg.style.backgroundColor="red";
    }

   
   
};

// Function to show popup
const showPopup = (message) => {
    const popup = document.createElement("div");
    popup.className = "popup";
    popup.innerHTML = `
        <div class="popup-content">
            <p>${message}</p>
            <button onclick="resetGame()">Play Again</button>
        </div>
    `;
    document.body.appendChild(popup);
};

// Function to reset the game
const resetGame = () => {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
    msg.innerText = "Pick any one 👆";
    msg.style.backgroundColor = "#081b31";
    // Remove the popup
    const popup = document.querySelector(".popup");
    if (popup) {
        popup.remove();
    }
};

const playGame = (userChoice) =>{
    console.log("user choice =", userChoice);
    //generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);

    if(userChoice === compChoice){
        drawGame();
    } else{
        let userWin =true;
        if(userChoice === "rock"){
            //scissor , paper
            userWin = compChoice ==="scissor" ? false: true;
        } else if(userChoice ==="paper"){
            userWin = compChoice === "scissor" ? false : true;
        } else if(userChoice ==="scissor"){
            userWin = compChoice === "rock" ? false: true;
        }
        showWinner(userWin , userChoice , compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
       const userChoice = choice.getAttribute("id");
       playGame(userChoice);
    });
} );



