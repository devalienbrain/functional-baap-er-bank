let remainingAmount = parseFloat(document.getElementById('remaining-amount').innerText);;

// DEPOSIT BUTTON
document.getElementById('deposit-btn').addEventListener('click', function () {
  const amountDeposited = parseFloat(document.getElementById('amount-to-deposit').value);

  document.getElementById('amount-to-deposit').value = '';

  if (isNaN(amountDeposited) || amountDeposited < 0) {
    alert('Invalid amount! Please input a valid amount.')
    return;
  }

  let depositTotal = parseFloat(document.getElementById('deposited-amount').innerText);

  depositTotal += amountDeposited;
  document.getElementById('deposited-amount').innerText = depositTotal;
  remainingAmount += amountDeposited;
  document.getElementById('remaining-amount').innerText = remainingAmount;
});

// WITHDRAW BUTTON
document.getElementById('withdraw-btn').addEventListener('click', function () {
  const amountWithdrawed = parseFloat(document.getElementById('amount-to-withdraw').value);

  document.getElementById('amount-to-withdraw').value = '';

  if (isNaN(amountWithdrawed) || amountWithdrawed < 0) {
    alert('Invalid amount! Please input a valid amount.')
    return;
  }

  if (amountWithdrawed <= remainingAmount) {
    let withdrawTotal = parseFloat(document.getElementById('withdrawed-amount').innerText);

    withdrawTotal += amountWithdrawed;
    document.getElementById('withdrawed-amount').innerText = withdrawTotal;
    remainingAmount -= amountWithdrawed;
    document.getElementById('remaining-amount').innerText = remainingAmount;
  }
  else {
    alert('Tor baaper kache eto taka nai re pagla!');
  }
});