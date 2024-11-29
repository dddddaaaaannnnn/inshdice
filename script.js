//dice face images
var diceFace1 = "images/dice_face1.png"
var diceFace2 = "images/dice_face2.png"
var diceFace3 = "images/dice_face3.png"
var diceFace4 = "images/dice_face4.png"
var diceFace5 = "images/dice_face5.png"
var diceFace6 = "images/dice_face6.png"






function rollTheDice() {
  const number = Math.floor(Math.random() * 6) + 1;
  let inputContent = '';
  //let imageSrc = '';
  switch (number) {
    case 1: inputContent = document.getElementById('numberOne').value;
    //imageSrc = diceFace1;
    break;
    case 2: inputContent = document.getElementById('numberTwo').value;
    //imageSrc = diceFace2;
    break;
    case 3: inputContent = document.getElementById('numberThree').value;
    //imageSrc = diceFace3;
    break;
    case 4: inputContent = document.getElementById('numberFour').value;
    //imageSrc = diceFace4;
    break;
    case 5: inputContent = document.getElementById('numberFive').value;
    //imageSrc = diceFace5;
    break;
    case 6: inputContent = document.getElementById('numberSix').value;
    //imageSrc = diceFace6;
    break; }
    document.getElementById('userInput').textContent = inputContent;
    return number; }



const rollBtn = document.querySelector("#rollBtn");
const diceNumber = document.querySelector("#diceNumber");
const deleteBtn = document.querySelector("#deleteBtn")
const userInput = document.querySelector("#userInput");

rollBtn.addEventListener("click", rollTheDice);



rollBtn.addEventListener('click', function(){
  const rolledNumber = rollTheDice();
  diceNumber.innerHTML = `You got ${rolledNumber}.`;
  diceFaceImage.innerHTML = `<img src="${window[`diceFace${rolledNumber}`]}" alt="Dice Face" style="width: 100px; height: 100px; border-radius: 15px;">`;
  //const imageSrc = eval(`diceFace${rolledNumber}`); diceFaceImage.innerHTML = `<img src="${imageSrc}" alt="Dice Face">`;
});






//delete button function for input
  document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('.p-8').addEventListener('click', function(e) {
      if (e.target && e.target.classList.contains('delete-btn')) {
        const listItem = e.target.closest('li');
        if (listItem) {
          const inputField = listItem.querySelector('input');
          if (inputField) {
            inputField.value = ''; } } } }); });




          