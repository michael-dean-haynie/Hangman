/*https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout*/

/*Choose Word*/
document.getElementById('button').addEventListener('click', stringToArrayHandler);
let letterArray = [];

let imageLocation = document.getElementById('img');

let imageArray = ["images/hangman1.jpg", "images/hangman2.jpg",
"images/hangman3.jpg", "images/hangman4.jpg", "images/hangman5.jpg", "images/hangman6.jpg", "images/hangman7.jpg", "images/hangman8.jpg", "images/hangman9.jpg", "images/hangman10.jpg", "images/hangman11.jpg", "images/hangman12.jpg", "images/hangman13.jpg"]

let accessImage = imageArray[0];
let currentImageNumber = 1;


function stringToArrayHandler(event) {

  let string = document.getElementById('phrase').value.toUpperCase();
 
  letterArray = string.split("");
  console.log(letterArray);
  console.log(letterArray[3]);
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
  document.getElementById('button').removeEventListener('click', stringToArrayHandler);
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
      
    }
    
   }
   //if letter not found update image
   if(success===false) {
    currentImageNumber = currentImageNumber +1;
    document.getElementById('img').src="images/hangman" + currentImageNumber + ".jpg";
  }
   chosenLetter.removeEventListener('click', chooseLetterHandler);
   
   
  }

  
  


  
