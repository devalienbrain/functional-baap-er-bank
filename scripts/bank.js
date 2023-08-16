
let remainingAmount = parseFloat(document.getElementById('remaining-amount').innerText);;

// DEPOSIT BUTTON
document.getElementById('deposit-btn').addEventListener('click', function () {
  const amountDeposited = getAmountFromInput('amount-to-deposit');
  if (notNanTesting(amountDeposited)) {
    changeAmountToRender('deposited-amount', amountDeposited);
    remainingAmount += amountDeposited;
    document.getElementById('remaining-amount').innerText = remainingAmount;
  }
});
// WITHDRAW BUTTON
document.getElementById('withdraw-btn').addEventListener('click', function () {
  const amountWithdrawed = getAmountFromInput('amount-to-withdraw');

  if (notNanTesting(amountWithdrawed)) {
    if (amountWithdrawed <= remainingAmount) {
      changeAmountToRender('withdrawed-amount', amountWithdrawed);

      remainingAmount -= amountWithdrawed;
      document.getElementById('remaining-amount').innerText = remainingAmount;
    }
    else {
      alert('Tor baaper kache eto taka nai re pagla!');
    }
  }
});