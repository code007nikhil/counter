var num = document.querySelector(".number");


var number = 0;

function decrease(){
   if(number !== 0){
    number--
    num.textContent = number;
   }
}

function increase(){
    number++
    num.textContent = number;
}

function reset(){
    number = 0
    num.textContent = number;
}