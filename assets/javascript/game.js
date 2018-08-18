//word guess game
/*
how the game works.
1. have the computer pick a random word
2. take player guess
3. give the player an option to quit or restart the game
4. check if player's guess is valid
5. keep track of player progress with lives remaining
6. show the player's score
7. player wins when they guess the word
**************************************************************/


//words array
const words = ['honda', 'mazda', 'toyota', 'lamborghini', 'bugatti', 'nissan', 'bentley', 'audi','bmw','ford','chevrolet'];
let pressAnyKeyToStart = ["PRESS ANY KEY TO START"];



//make the computer choose words from the array randomly
let randomWord = words[Math.floor(Math.random() * words.length)];
let lives = 5;
let score = 0;
let wrong = [];
let gameStart = false; //game start variable

//DOM manipulation
let wordsPush = document.getElementsByClassName('words');
let livesPush = document.getElementsByClassName('lives');
let wrongPush = document.getElementsByClassName('wrong');
let scorePush = document.getElementsByClassName('score');

//generate underscore and repalace the randomWord string
let underScore =[];

function random() {
    console.log(randomWord)
    randomWord = words[Math.floor(Math.random() * words.length)];
}

//function to give you anothe word
let generateUnderScore = () => {
    for ( let i = 0; i < randomWord.length; i++){
        underScore.push("_");
    }
}

    //reset game
    function resetHangman(){
        randomWord = [];
        wrong = [];
        lives = 5;
        underScore = [];
        random();
        generateUnderScore();
        livesPush[0].innerHTML = lives;
        scorePush[0].innerHTML = score;
        wordsPush[0].innerHTML = underScore.join('  ');
        resetGame = false;
        
  console.log(underScore);
  console.log(randomWord)
    }

window.addEventListener("load", function(event) {
    let wordsPush = document.getElementsByClassName('words');
    wordsPush[0].innerHTML = pressAnyKeyToStart;
  });

//usser guess
document.addEventListener('keypress', (event) =>{

    //test
    console.log(event);
    //generates keycode for letters and then convert it into a string of letters.
    let letters = String.fromCharCode(event.keyCode);
    //test
    console.log(letters);
    let position = [];
    //press any key to start
    if(gameStart === true){
           //compare the letters to underScore
   for( let i = 0; i < randomWord.length; i++){ 

           
    //if user guess is right 
if(randomWord.charAt(i) === letters){
   //add to answers array
   underScore[i] = letters;
   //reflect to HTML
   wordsPush[0].innerHTML = underScore.join(' ');
   //joins the word together
  console.log(underScore);
  console.log(randomWord)
  position.push(i);
} 
}
 //if you get all the right letters, you get a you win prompt
if (underScore.join('') === randomWord){
    console.log(score);
    score++;
     alert('YOU KNOW YOUR CARS HUH? TRY ANOTHER ONE!');
    resetHangman();
 }





   //prevent wrong letters array 
   for ( let j = 0; j < wrong.length; j++){
   if (wrong[j] == letters){
       position.push(j);
   }
}

if(position.length <=0) {
   //push letters to the wrong lettters array
   wrong.push(letters);
   //deduct 1 life off of lives
   lives--;
   //push lives and wrong letters array to the html
   livesPush[0].innerHTML = lives;
   wrongPush[0].innerHTML = wrong;
   //test
   console.log(lives);
   console.log(wrong);
   //if lvies is equal to zero, reload game
   if (lives === 0){
       window.location.href = "game-over.html";
   }} 

//press any key to start
      } else {
          gameStart = true;
          console.log(randomWord);
          console.log(generateUnderScore());
          wordsPush[0].innerHTML = underScore.join('  ');
      }
 
});
wordsPush[0].innerHTML = underScore.join('  ');
livesPush[0].innerHTML = lives;
wrongPush[0].innerHTML = wrong;
scorePush[0].innerHTML = score;