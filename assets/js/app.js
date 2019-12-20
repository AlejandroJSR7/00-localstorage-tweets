// Variables
const listOfTweets = document.querySelector('#list-tweets');
const tweet = document.querySelector('#tweet');
tweet.focus();


// Event Listeners
eventListeners();

function eventListeners() {
  document.querySelector('#tweet-form').addEventListener('submit', addTweet);
  listOfTweets.addEventListener('click', removeTweet);
}


// Functions
function addTweet(e) {
  e.preventDefault();

  const li = document.createElement('li');
  const removeButton = document.createElement('a');
  removeButton.classList = 'borrar-tweet';
  removeButton.innerHTML = 'X';

  li.innerHTML = tweet.value;
  li.appendChild(removeButton);
  listOfTweets.appendChild(li);

  tweet.value = '';
  tweet.focus();
}

function removeTweet(e) {
  e.preventDefault();

  const element = e.target;

  if (element.classList.contains('borrar-tweet')) {
    element.parentElement.remove();
  }

}