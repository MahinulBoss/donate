// balance

document
  .getElementById('btn-blc-money')
  .addEventListener('click', function (event) {
    event.preventDefault();
    const addMoneyInput = document.getElementById('donationAmount').value;
    console.log(addMoneyInput);

    // add money amount
    const balance = document.getElementById('account-balance').innerText;
    console.log(balance);

    // new balance amount
    const addMoneyNumber = parseFloat(addMoneyInput);
    const balanceNumber = parseFloat(balance);
    const newBalance = balanceNumber + addMoneyNumber;
    console.log(newBalance);

    // balance updated
    document.getElementById('account-balance').innerText = newBalance;

    // add to transaction history
    const p = document.createElement('p');
    p.innerText = `Added: ${addMoney} Tk. New Balance: ${newBalance}`;
    console.log(p);

    // should be a common function
    document.getElementById('transaction-container').appendChild(p);
  });

// history

document
  .getElementById('show-transaction-history')
  .addEventListener('click', function () {
    showSectionById('transaction-section');
  });

function showConfirmation() {
  document.getElementById('donationModal').classList.remove('hidden');
}

// Function to close the modal
function closeConfirmation() {
  document.getElementById('donationModal').classList.add('hidden');
}

// math

function doubleIt(num) {
  const result = num * 2;
  return result;
}
