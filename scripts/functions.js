function getAmountFromInput(id) {
  const amountRes = parseFloat(document.getElementById(id).value);
  document.getElementById(id).value = '';
  return amountRes;
}

function notNanTesting(amount) {
  if (isNaN(amount) || amount < 0) {
    alert('Invalid amount! Please input a valid amount.')
    return false;
  }
  else
    return true;
}

function changeAmountToRender(idToShowAmount, actionAmount) {
  let actionTotal = parseFloat(document.getElementById(idToShowAmount).innerText);
  actionTotal += actionAmount;
  document.getElementById(idToShowAmount).innerText = actionTotal;
}