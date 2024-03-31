let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");

const msgPara=document.querySelector("#msg");

const userCurrScore=document.querySelector("#user-score");
const compCurrScore=document.querySelector("#comp-score");

const drawGame =()=>{
    msgPara.innerText="Game was draw ! Play again";
    msgPara.style.backgroundColor="#081b31"; 
}

const showWineer=(result,userChoice,compChoice)=>{
    if(result){
        msgPara.innerText=`You Win ! your ${userChoice} beats ${compChoice}`;
        userScore++;
        userCurrScore.innerText=userScore;
        msgPara.style.backgroundColor="green"; 
    }
    else{
        msgPara.innerText=`You Lost. ${compChoice} beats your ${userChoice}`;
        compScore++;
        compCurrScore.innerText=compScore;
        msgPara.style.backgroundColor="red"; 
    }
}

const generateCompChoice = ()=>{
    const option=['rock','paper','scissors'];//array stor korlam karon amara random generate korte parbo jeta index er equal hote pare
    //rock,paper,choice
    const index=Math.floor(Math.random()*3);
    return option[index];
}

const playGam=(userChoice)=>{
    //generate computer choice
    const compChoice=generateCompChoice();
    if(userChoice===compChoice){
        //draw game
        drawGame();
    }
    else if(userChoice=='rock'&&compChoice=='scissors'
    ||userChoice=='scissors'&&compChoice=='paper'
    ||userChoice=='paper'&&compChoice=='rock'){
        showWineer(true,userChoice,compChoice);
    }
    else{
       showWineer(false,userChoice,compChoice);
    }
}

//choices button ta same tar jonno and operation korchi existing array tay 
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGam(userChoice);
    })
})
const resetButton=document.querySelector("#reset-button");
resetButton.addEventListener("click",()=>{
    userScore=0;
    compScore=0;
    userCurrScore.innerText=userScore;
    compCurrScore.innerText=compScore;
    msgPara.innerText="Play Your Move";
    msgPara.style.backgroundColor="#081b31";
})