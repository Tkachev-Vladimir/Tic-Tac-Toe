const result = document.querySelector(".win"),
  wrapGame = document.querySelector(".wrapper_game"),
  newGameBtn = document.querySelector(".new_game"),
  items = document.querySelectorAll(".item"),
  zero = `<img class='game_zero' src='https://klike.net/uploads/posts/2020-07/1593672413_27.jpg'/>`,
  cross = `<img class='game_cross' src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpUIN3psuMCdbbCS5D3Ak26M-Dav_n4yj7uDwLtGD1LSrDS4W864XsP1Qjsyf4pJ3lKW8&usqp=CAU'/>`;
 let count = 0,
   isMove = false
   function moveX(target) {
     if (
       target.classList == "game_zero" ||
       target.classList == "game_cross"
     ) {
       return;
     }
     if (target.classList.contains("item")) {
       target.innerHTML = cross;
       target.classList.add("cross");
     }
     count++;
   };
function moveO(target){
   if (
     target.classList == "game_zero" ||
     target.classList == "game_cross"
   ) {
     return;
   }
   if(target.classList.contains('item')){
       target.innerHTML = zero;
       target.classList.add('zero')
   }
count++
}
function game(el){
if(!isMove) moveX(el.target);
else moveO(el.target);
isMove = !isMove;
win();
}
function win(){
let winArr = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
for(let i = 0; i < winArr.length; i++){
    if(items[winArr[i][0]].classList.contains('cross') &&
    items[winArr[i][1]].classList.contains('cross')&&
    items[winArr[i][2]].classList.contains('cross')
    ){
       items[winArr[i][0]].classList.add("active");
       items[winArr[i][1]].classList.add("active");
       items[winArr[i][2]].classList.add("active"); 
       result.innerHTML = `Выйграл крестик: <img width='100'  src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpUIN3psuMCdbbCS5D3Ak26M-Dav_n4yj7uDwLtGD1LSrDS4W864XsP1Qjsyf4pJ3lKW8&usqp=CAU'/>`;
       items.forEach(el=> {
           if(!el.classList.contains('active')){
               el.style.opacity = .2
           }
       })
       wrapGame.removeEventListener('click', game)
    }
     if (
       items[winArr[i][0]].classList.contains("zero") &&
       items[winArr[i][1]].classList.contains("zero") &&
       items[winArr[i][2]].classList.contains("zero")
     ) {
       items[winArr[i][0]].classList.add("active");
       items[winArr[i][1]].classList.add("active");
       items[winArr[i][2]].classList.add("active");
        result.innerHTML = `Выйграл нолик : <img width='100' src='https://klike.net/uploads/posts/2020-07/1593672413_27.jpg'/>`;
       items.forEach((el) => {
         if (!el.classList.contains("active")) {
           el.style.opacity = 0.2;
         }
       })
        wrapGame.removeEventListener("click", game);
     }
     if(count === 9){
        result.innerHTML = 'Ничья'
     }
}
}
function newGame(){
    result.innerHTML = '';
    isMove = false;
    count= 0;
    for(let el of items){
        el.innerHTML= '';
        el.classList.remove('active', 'zero','cross')
        el.style.opacity = 1
    }
wrapGame.addEventListener("click", game);
}
newGameBtn.addEventListener('click', newGame);
wrapGame.addEventListener('click', game)