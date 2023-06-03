
document.getElementById('button').addEventListener('click', stringToArrayHandler);

function stringToArrayHandler(event) {

  let string = document.getElementById('phrase').value;
  let letterArray = [];
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






 
  