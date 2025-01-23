const olElement = document.getElementById('quote-list');

function formatDate(dateStr) {
  return (new Date(dateStr)).toLocaleDateString();
}

function renderQuote(quoteObj) {
  const liElement = document.createElement('li');
  liElement.textContent = `${quoteObj.quote} -${quoteObj.author} [${formatDate(quoteObj.date)}]`;
  olElement.appendChild(liElement);
}

function init() {
  fetch('/api/quote/all')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const quoteObj = data[0];
      renderQuote(quoteObj);
    })
}

document.addEventListener('DOMContentLoaded', init);
