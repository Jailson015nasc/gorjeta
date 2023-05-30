const billInput = document.querySelector('.put-svg input');
const tipButtons = document.querySelectorAll('.btn-1 button, .btn-2 button:not(#custom)');
const customTipInput = document.getElementById('custom');
const numOfPeopleInput = document.querySelector('.pud-svg input');
const tipAmountDisplay = document.getElementById('contador-1');
const totalAmountDisplay = document.getElementById('contador-2');
const resetButton = document.getElementById('reset');


let billAmount = 0;
let tipPercentage = 0;
let numOfPeople = 1;

function calculateTip() {
  const tipAmount = (billAmount * tipPercentage) / numOfPeople;
  const totalAmount = (billAmount / numOfPeople) + tipAmount;

  tipAmountDisplay.textContent = `$${tipAmount.toFixed(2)}`;
  totalAmountDisplay.textContent = `$${totalAmount.toFixed(2)}`;
}


billInput.addEventListener('input', function(e) {
  billAmount = parseFloat(e.target.value) || 0;
  calculateTip();
});

tipButtons.forEach(function(button) {
  button.addEventListener('click', function(e) {
    tipPercentage = parseFloat(e.target.textContent) / 100;
    calculateTip();
  });
});

customTipInput.addEventListener('input', function(e) {
  tipPercentage = parseFloat(e.target.value) / 100;
  calculateTip();
});

numOfPeopleInput.addEventListener('input', function(e) {
  numOfPeople = parseInt(e.target.value) || 1;
  calculateTip();
});

resetButton.addEventListener('click', function() {
  billAmount = 0;
  tipPercentage = 0;
  numOfPeople = 1;
  billInput.value = '';
  tipAmountDisplay.textContent = '$0.00';
  totalAmountDisplay.textContent = '$0.00';
});
