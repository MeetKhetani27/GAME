let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencompChoice = () => {
    const options =['rock' , 'paper' , 'scissors'];
    const randIdx= Math.floor(Math.random () * 3);
    return options [randIdx];
}

const drawgame = () =>{
    msg.innerText = "Game was Draw. Play again!!";
    msg.style.backgroundColor =  "#081b31";
}

const showwinner = (userwin , userChoice , compChoice) => {
    if(userwin){
       userscore++;
       userscorepara.innerText = userscore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else{
        compscore++;
        compscorepara.innerText = compscore
        msg.innerText =   `You Lose.  ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
    

const playgame = (userChoice) => {
    console.log('user choice =', userChoice);
    //genrate computer choices -> modular function//
    const compChoice = gencompChoice();
    console.log('comp choice =', compChoice);

    if(userChoice === compChoice){
        drawgame();
    } else{
        let userwin = true;
        if (userChoice === "rock"){
            userwin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            userwin = compChoice === "scissors" ? false : true;
        } else{
            userwin = compChoice === "rock" ? false : true;
        }
        showwinner(userwin , userChoice , compChoice);
    }

};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
    playgame(userChoice);
});
});