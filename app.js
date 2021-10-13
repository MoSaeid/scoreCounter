const p1btn = document.querySelector('#p1btn');
const p2btn = document.querySelector('#p2btn');
const p1score = document.querySelector('.p1score');
const p2score = document.querySelector('.p2score');
const maxInput = document.querySelector("input[name=max]");
// let max = 5;
const reset = document.querySelector('#reset');

let p1counter = 0;
let p2counter = 0;
let isGameover = false;
let maxValue = maxInput.value;

function resetFunc() {
    p1counter = 0;
    p2counter = 0;
    isGameover = false;
    p1score.innerHTML = "0";
    p2score.innerHTML = "0";
    p1score.classList.remove('is-success', 'is-danger');
    p2score.classList.remove('is-success', 'is-danger');
}

p1btn.addEventListener('click', () => {
    if (!isGameover && p1counter != maxValue) {     
        p1counter+=1;
        p1score.innerHTML = p1counter;
    }else if(!isGameover){
        isGameover = true;
        p1score.classList.add('is-success');
        p2score.classList.add('is-danger');
    }
})

p2btn.addEventListener('click', () => {
    if (!isGameover && p2counter != maxValue) {     

    p2counter+=1;
    p2score.innerHTML = p2counter;
    }else if(!isGameover){
        isGameover = true;
        p2score.classList.add('is-success');
        p1score.classList.add('is-danger');
    }
})

reset.addEventListener('click', () => {
    resetFunc();
})

maxInput.addEventListener('change', () => {
    maxValue = maxInput.value;
    resetFunc();

})