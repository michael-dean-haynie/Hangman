/*https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout*/

/*Choose Word*/
document.getElementById('submitPhraseButton').addEventListener('click', stringToArrayHandler);
let letterArray = [];

let imageLocation = document.getElementById('img');

let currentImageNumber = 1;

let regex = /[a-zA-Z]/g;
let slotsToFill = 0;

let filledSlots = 0;

function stringToArrayHandler(event) {

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

    const currentDiv = document.getElementById("letters");
    currentDiv.appendChild(newDiv);
    

  }
  document.getElementById('submitPhraseButton').removeEventListener('click', stringToArrayHandler);
}

/*Choose Letter*/

document.getElementById('A').addEventListener('click', chooseLetterHandler);
document.getElementById('B').addEventListener('click', chooseLetterHandler);
document.getElementById('C').addEventListener('click', chooseLetterHandler);
document.getElementById('D').addEventListener('click', chooseLetterHandler);
document.getElementById('E').addEventListener('click', chooseLetterHandler);
document.getElementById('F').addEventListener('click', chooseLetterHandler);
document.getElementById('G').addEventListener('click', chooseLetterHandler);
document.getElementById('H').addEventListener('click', chooseLetterHandler);
document.getElementById('I').addEventListener('click', chooseLetterHandler);
document.getElementById('J').addEventListener('click', chooseLetterHandler);
document.getElementById('K').addEventListener('click', chooseLetterHandler);
document.getElementById('L').addEventListener('click', chooseLetterHandler);
document.getElementById('M').addEventListener('click', chooseLetterHandler);
document.getElementById('N').addEventListener('click', chooseLetterHandler);
document.getElementById('O').addEventListener('click', chooseLetterHandler);
document.getElementById('P').addEventListener('click', chooseLetterHandler);
document.getElementById('Q').addEventListener('click', chooseLetterHandler);
document.getElementById('R').addEventListener('click', chooseLetterHandler);
document.getElementById('S').addEventListener('click', chooseLetterHandler);
document.getElementById('T').addEventListener('click', chooseLetterHandler);
document.getElementById('U').addEventListener('click', chooseLetterHandler);
document.getElementById('V').addEventListener('click', chooseLetterHandler);
document.getElementById('W').addEventListener('click', chooseLetterHandler);
document.getElementById('X').addEventListener('click', chooseLetterHandler);
document.getElementById('Y').addEventListener('click', chooseLetterHandler);
document.getElementById('Z').addEventListener('click', chooseLetterHandler);


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
      }
    }
   }

  if((slotsToFill > filledSlots) && (currentImageNumber >= 12)) {
    success = false;
    console.log("You lose");
  }

   //if letter not found update image
   if(success===false) {
    currentImageNumber = currentImageNumber +1;
    document.getElementById('img').src="images/hangman" + currentImageNumber + ".jpg";
  }
   chosenLetter.removeEventListener('click', chooseLetterHandler);
   
   
  }

  function winLose(outcome) {
    //create new Game button

    //assign it an click event listener
    //create a winLose div that will hold the winner or loser info
    //give dif an id and a basic style class
    //make div blink
    //create the if win if lose scenarios
    //if win assign winLose div an additional win class for styling
    //if win change innerHTML to "You Win!"
    //if win create background and border in css win class
    //if lose assign winLose div an additional win class for styling
    //if lose change innerHTML to "You Win!"
    //if lose create background and border in css win class




  }

 
  


  
