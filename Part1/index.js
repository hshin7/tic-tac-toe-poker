


let board = [];

function reset(){
    for (let i = 0; i < 9; i++){
        document.getElementById(i).innerText = '';
    }
   board = [];
 }


function resetButton(){
    reset();
}

function play(clickedId){
    const playerSpan = document.getElementById('player');
    const clickedElement = document.getElementById(clickedId);

    if (playerSpan.innerText === 'X'){
        playerSpan.innerText = '0';
        clickedElement.innerText = 'X';
        board[clickedId] = 'X';
    } else {
        playerSpan.innerText = 'X';
        clickedElement.innerText = '0';
        board[clickedId] = '0';
    }
   console.log(board);
    const topL = board[0];
    const topC = board[1];
    const topR = board[2];
    const middleL = board[3];
    const middleC = board[4];
    const middleR = board[5];
    const bottomL = board[6];
    const bottomC = board[7];
    const bottomR = board[8];


// winning sets //

if (topL !== undefined && topL === topC && topL === topR){
    window.alert (`${topL}is the winner!`);
    reset();

 }

if (middleL !== undefined && middleL === middleC && middleL === middleR){
    window.alert (`${middleL} is the winner!`);
    reset();
   
}
if (bottomL !== undefined && bottomL === bottomC && bottomL === bottomR){
    window.alert (`${bottomL} is the winner!`);
    reset();
   
}
if (topL !== undefined && topL === middleC && topL === bottomR){
    window.alert(`${topL} is the winner!`);
    reset();
  
}
if (topR !== undefined && topR === middleC && topR === bottomL){
    window.alert (`${topR} is the winner!`);
    reset();
  
}
if (topL !== undefined && topL === middleC && topL === bottomL){
    window.alert(`${topL} is the winner!`);
    reset();
 
}
if (topR !== undefined && topR === middleR && topR === bottomR){
    window.alert (`${ topR } is the winner!`);
    reset();
    
}


// game is done //
let boardFull = true;

for (let i = 0; i <= 8; i++){
  if (board[i] === undefined){
    boardFull = false;
  }
}
if (boardFull === true){
    window.alert ('no winner');
    reset();
    
}


}
