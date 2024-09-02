const increaseNum = document.getElementById("increaseNum");
const decreaseNum = document.getElementById("decreaseNum");
const resetNum = document.getElementById("resetNum");
const counter = document.getElementById("counter");

let count = 0


increaseNum.onclick = function(){
    count++;
    counter.textContent = count;
}

decreaseNum.onclick = function(){
    count--;
    counter.textContent = count;
}

resetNum.onclick = function(){
    count = 0;
    counter.textContent = count;
}