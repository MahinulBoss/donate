document.getElementById('btn-donate').addEventListener('click', function () {
  console.log('show add money button clicked');
  showSectionById('card-section');
});

document.getElementById('btn-history').addEventListener('click', function () {
  showSectionById('transaction-section');
});
