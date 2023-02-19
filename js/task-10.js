function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount){
if(amount.value > 0){
  let boxWidth = 0;
  let boxHeight = 0;
  let bgcolor = '';
  for(let i=0; i<amount.value; i++){
    bgcolor = getRandomHexColor();
    boxWidth = 30 + i * 10;
    boxHeight = 30 + i * 10;

    const newBox = document.createElement('div');
    newBox.style=`width:${boxWidth}px; height:${boxHeight}px; background-color:${bgcolor}`;
    document.querySelector('div#boxes').appendChild(newBox);
  }
}
}

function destroyBoxes(){
  document.querySelector('div#boxes').innerHTML = '';
}

const inp = document.querySelector('#controls').firstElementChild;
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');

btnCreate.addEventListener('click', () => createBoxes(inp));
btnDestroy.addEventListener('click', () => destroyBoxes());
