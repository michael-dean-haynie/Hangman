/*Choose Word*/
document.getElementById('button').addEventListener('click', stringToArrayHandler);
let letterArray = [];

function stringToArrayHandler(event) {

  let string = document.getElementById('phrase').value;
  
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
    document.getElementById('button').removeEventListener('click', stringToArrayHandler);

  }
  
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

   for (let i=0; i < letterArray.length; i++) {
    if (letterArray[i] === lookForInArray) {
      //let selector = "#letters :nth-child(" + (i+1) + ")";
      let elem = document.querySelector("#letters :nth-child(" + (i+1) + ")");
      elem.innerHTML=lookForInArray;
      elem.classList.remove("letterBlock");
    }
   }
   
   chosenLetter.removeEventListener('click', chooseLetterHandler);
   
   
  }


  
