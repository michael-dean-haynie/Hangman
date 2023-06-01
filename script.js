
document.getElementById('button').addEventListener('click', stringToArrayHandler);

function stringToArrayHandler(event) {

  let string = document.getElementById('phrase').value;
  let letterArray = [];
  letterArray = string.split("");
  console.log(letterArray[0]);
  console.log(letterArray[3]);
  ArrayToDivCreation(letterArray);
}

function ArrayToDivCreation(array) {
  for(const element of array) {
    const newDiv = document.createElement("div");
    const newContent = document.createTextNode(element);
    newDiv.className = "letterBlock";
    newDiv.appendChild(newContent);
    const currentDiv = document.getElementById("letters");
    currentDiv.appendChild(newDiv);
    document.getElementById('button').removeEventListener('click', stringToArrayHandler);
    
  }
}






 
  