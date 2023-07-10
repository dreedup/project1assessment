let counter = 1;
let counterTitle = 0;

const counterValue = document.getElementById('counter-value');
const counterTitleValue = document.getElementById('counter-title');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.querySelector('#reset');

// To increment the value of counter
incrementBtn.addEventListener('click', () => {
    counter++;
    counterTitle++;
    counterValue.innerHTML = counter;
    counterTitleValue.innerHTML = counterTitle;
});
  
// To decrement the value of counter
decrementBtn.addEventListener('click', () => {
    counter--;
    counterTitle--;
    counterValue.innerHTML = counter;
    counterTitleValue.innerHTML = counterTitle;
    
});
  
// To reset the counter to zero
resetBtn.addEventListener('click', reset);
  
function reset() {
    counter = 1;
    counterTitle = 0;
    counterValue.innerHTML = counter;
    counterTitleValue.innerHTML = counterTitle;
}