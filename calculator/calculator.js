window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.getElementById("loan-amount").value = 100000;
  document.getElementById("loan-years").value = 15;
  document.getElementById("loan-rate").value = 0.0529;
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let interest = values.rate / 12;
  let payments = values.years * 12;

  let top = values.amount * interest;

  let bottom = 1 + interest;
  bottom = Math.pow(bottom, -payments);
  bottom = 1 - bottom;

  let result = top/bottom;
  
  return result.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const payment = document.getElementById("monthly-payment");
  let total = document.createElement("h4");
  total.innerText = monthly;
  payment.appendChild(total);
}
