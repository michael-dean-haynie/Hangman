/*https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout*/

let newGameButton = document.getElementById('newGameButton');
newGameButton.style.display = 'none';

let winLoseDiv = document.getElementById('winLoseDiv');
winLoseDiv.style.display = 'none';


/*Choose Word*/
document.getElementById('submitPhraseButton').addEventListener('click', stringToArrayHandler);
let letterArray = [];

let imageLocation = document.getElementById('img');

let currentImageNumber = 1;

let regex = /[a-zA-Z]/g;
let slotsToFill = 0;

let filledSlots = 0;


let letterBlockArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];



function stringToArrayHandler(event) {
//letters become clickable
  addLetterBlockEventListeners();

  let string = document.getElementById('phrase').value.toUpperCase();
  slotsToFill = string.match(regex).length;
  console.log("slotsToFill = " + slotsToFill);
  letterArray = string.split("");
  console.log(letterArray);
  console.log(letterArray[3]);
  // make text box and button hidden once 'Submit Phrase' button has been clicked
  document.getElementById('phrase').style.display = 'none';
  document.getElementById('submitPhraseButton').style.display = 'none';

  ArrayToDivCreation(letterArray);
}
const currentDiv = document.getElementById("letters");
function ArrayToDivCreation(array) {
  for(const indexContent of array) {
   
    const newDiv = document.createElement("div");
    let dummyContent = "O";
   
    newDiv.className = "inputBlock";
    if(indexContent === " " || indexContent === "-"){
    newDiv.style.borderBottom = "none";
    }
   
    if(indexContent === "-") {
    const newContent = document.createTextNode(indexContent);
    newDiv.appendChild(newContent);
    }

    if(indexContent !== "-" && indexContent !== " ") {
     const createDummyContent = document.createTextNode(dummyContent) ;
     newDiv.appendChild(createDummyContent);
     newDiv.className += " letterBlock";
    }

    currentDiv.appendChild(newDiv);
    

  }
  document.getElementById('submitPhraseButton').removeEventListener('click', chooseLetterHandler);
}





 function chooseLetterHandler(event) {
   event.target.style.backgroundColor='grey';
   
   let chosenLetter = document.getElementById(event.target.id)
   let lookForInArray = chosenLetter.innerHTML;
   console.log(lookForInArray);
   let comment = document.getElementById('comment');
   comment.innerHTML="Sorry, there is no " + lookForInArray + " in our phrase.";
   
   let success = false;

   
   for (let i=0; i < letterArray.length; i++) {

    if (letterArray[i] === lookForInArray) {
      //let selector = "#letters :nth-child(" + (i+1) + ")";

      let elem = document.querySelector("#letters :nth-child(" + (i+1) + ")");
      elem.innerHTML=lookForInArray;
      comment.innerHTML="Hooray! We found the letter " + lookForInArray + " in our phrase.";
      elem.classList.remove("letterBlock");
      success = true;
      filledSlots += 1;
      console.log(filledSlots);
      if((slotsToFill === filledSlots) && (currentImageNumber < 13)) {
        console.log("You win");
        winLose('win');
      }
    }
   }

  if((slotsToFill > filledSlots) && (currentImageNumber >= 12)) {
    success = false;
    console.log("You lose");
    winLose('lose');
  }

   //if letter not found update image
   if(success===false) {
    currentImageNumber = currentImageNumber +1;
    document.getElementById('img').src="images/hangman" + currentImageNumber + ".jpg";
  }
   chosenLetter.removeEventListener('click', chooseLetterHandler);
   
   
  }

  function winLose(outcome) {
    //letter buttons no longer clickable
    removeLetterBlockEventListeners();
    //make new game button visible
    //assign it an click event listener
    winLoseDiv.style.display = 'block';
    newGameButton.style.display = 'block';
    newGameButton.addEventListener('click', () => {
      newGame();
    })

    
   //create the if win if lose scenarios
    if(outcome === 'win') {
      winLoseDiv.innerHTML = "You Win!";
      winLoseDiv.classList.add('win');
    }else if(outcome === 'lose') {
      winLoseDiv.innerHTML = "You Lose!";
      winLoseDiv.classList.add('lose');
    }

  }

  function newGame () {
  location.reload();
  console.log("New Game");
  }
    
    
 

  function addLetterBlockEventListeners() {
    letterBlockArray.forEach((item) =>{
      document.getElementById(item).addEventListener('click', chooseLetterHandler);
    });
    return
  }
    
    function removeLetterBlockEventListeners() {
      letterBlockArray.forEach((item) =>{
      document.getElementById(item).removeEventListener('click', chooseLetterHandler);
    });
    return
  }

 
  


  
