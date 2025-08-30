let btns = document.querySelectorAll(".btns");
 let image = document.querySelector("img");
 let bdy= document.querySelector("body");
 let sound = new Audio("images/computer-mouse-click-352734.mp3"); 
 let winSound = new Audio("images/you-win-sequence-2-183949.mp3");
 let loseSound = new Audio("images/game-over-39-199830.mp3");
 let rockSound = new Audio("images/stone-in-water-265225.mp3");
 let paperSound = new Audio("images/paper-rip-fast-252617.mp3");
 let scissorSound = new Audio("images/scissors-43438.mp3");


// Current src value nikaalo
// let img = image.getAttribute("src");
// console.log("Old src:", img);

// Image ka src attribute update karo

// Update hone ke baad check karo
// console.log("New src:", image.getAttribute("src"));

// console.log(img)


let player1;
let computer1;
let palyerScore = 0;
let computerScore = 0;
let result = document.getElementById("result")
let darkbtn = document.getElementById("drak");
let body = document.querySelector("body");

darkbtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    sound.currentTime = 0; // har click par reset karega
    sound.play();

    if (document.body.classList.contains("dark-mode")) {
         darkbtn.textContent = "Dark Mode";
        darkbtn.style.color = "white";
        document.body.style.backgroundColor = "black";
          document.body.style.backgroundImage = "none";
          document.body.style.color = "white";
        
        
      
    } else {
       
          darkbtn.textContent = "Light Mode";
        darkbtn.style.color = "black";
        // document.body.style.backgroundColor = "white";
        document.body.style.backgroundImage = "url('images/snow.avif')";
        // document.body.style.backgroundImage = "url('')";
    }
});




// btns.forEach((btn) => {
//   btn.addEventListener("click", () => {

//    if( btn.id=== "rock"){
//     // console.log("rock")
//      player1=btn.id
//    } 
//     else if(btn.id === "paper"){
//         // console.log("paper")
//          player1=btn.id
//     }
//     else{
//         // console.log("scissor")
//             player1=btn.id
//     }
  
//    console.log("The Player1 Chose:",player1)
//   });
// });

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
     player1 = btn.id;
    //   sound.play();
     if (btn.id === "rock") {
        // btn.innerText="🪨"
        btn.style.backgroundImage = "url('images/Rock.gif')";
        btn.style.backgroundSize = "cover";
        btn.style.backgroundPosition = "center";
        btn.innerText=""
        rockSound.play();
       
        btn.style.backgroundColor = "red";
        btn.style.color = "white";

        setTimeout(() => {
            btn.style.backgroundImage = "";
            btn.style.backgroundColor = "";
            btn.style.color = "";
            btn.innerText="Rock"
            rockSound.pause();
        }, 300)}
      else if (btn.id === "paper") {
            // btn.innerText=url("images/Paper.gif")
            btn.style.backgroundImage = "url('images/Paper.gif')";
            btn.style.backgroundSize = "cover";
            btn.style.backgroundPosition = "center";
            btn.innerText=""
            paperSound.play();
            btn.style.backgroundColor = "red";
            btn.style.color = "white";
            setTimeout(() => {
                    btn.style.backgroundImage = "";
                btn.style.backgroundColor = "";
                btn.style.color = "";
                btn.innerText="Paper"
                paperSound.pause();
            }, 300)}
        else {
            // btn.innerText="✂️"
            btn.style.backgroundImage = "url('images/Scissor.gif')";
            btn.style.backgroundSize = "cover";
            btn.style.backgroundPosition = "center";
            btn.innerText=""
            scissorSound.play();
            btn.style.backgroundColor = "red";
            btn.style.color = "white";
            setTimeout(() => {
                    btn.style.backgroundImage = "";
                btn.style.backgroundColor = "";
                btn.style.color = "";
                btn.innerText="Scissor"
                scissorSound.pause();
            }, 300)}
        
        return player1;

});
});

function computerPlay(){
    let choices = ["rock","paper","scissor"];
    let random = Math.floor(Math.random()*3);
    computer1=choices[random];
    console.log("The Computer Chose:",computer1)
    return computer1;
}

function playRound(player1,computer1){
    if(player1 === computer1){
        result.textContent = `It's a Tie! You Choose: ${player1} and Computer Chose: ${computer1}`;
    }
    else if((player1 === "rock" && computer1 === "scissor") || (player1 === "paper" && computer1 === "rock") || (player1 === "scissor" && computer1 === "paper")){
        palyerScore++;
        result.textContent = `You Win! ${player1} beats ${computer1}. You Choose: ${player1} and Computer Chose: ${computer1}.` ;
        
    }
    else{
        computerScore++;
        result.textContent = `You Lose! ${computer1} beats ${player1}.You Choose: ${player1} and Computer Chose: ${computer1}.`;
    }
    if(palyerScore === 5){
        result.textContent = "Congratulations! You won the game!";
        document.getElementById("celebrate")
       
        // wins.textContent = "🎉";
        image.setAttribute("src", "images/win.webp");
        //  console.log("New src:", image.getAttribute("src"));
           winSound.play();


        // imag.getAttribute("src")
        // console.log(image)
        // img.setAttribute("src","images/celebaration.jpg")
        
            setTimeout(() => {
                // document.getElementById("celebrate").textContent = "";
                image.setAttribute("src", "");
                winSound.pause();

            }, 3000);
        palyerScore = 0;
        computerScore = 0;
    }   
    else if(computerScore === 5){

        result.textContent = "Sorry! The computer won the game!";
        document.getElementById("celebrate");
         image.setAttribute("src", "images/lose.gif");
            loseSound.play();
            setTimeout(() => {
                // document.getElementById("celebrate").textContent = ""; 
                image.setAttribute("src", ""); 
                loseSound.pause();
            }, 3000);
        palyerScore = 0;
        computerScore = 0;
    }   
    return;
}




btns.forEach((btn) => {
    btn.addEventListener("click", () => {

        let playerScoreBoard = document.getElementById("user-score");
        let computerScoreBoard = document.getElementById("computer-score");
        computerPlay();
        // player1Choice();
        playRound(player1,computer1);

        
        playerScoreBoard.style.color = "blue";
        playerScoreBoard.textContent = `User: ${palyerScore}`;
        computerScoreBoard.textContent = `Computer: ${computerScore}`;
    });
});


