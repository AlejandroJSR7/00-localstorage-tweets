// Variables
const listOfTweets = document.querySelector('#list-tweets');
const textareaTweet = document.querySelector('#tweet');
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
  const tweet = textareaTweet.value;

  removeButton.classList = 'borrar-tweet';
  removeButton.innerHTML = 'X';

  li.innerHTML = tweet;
  li.appendChild(removeButton);
  listOfTweets.appendChild(li);

  textareaTweet.value = '';
  textareaTweet.focus();

  addTweetToLocalStorage(tweet);
}

function removeTweet(e) {
  e.preventDefault();

  const element = e.target;

  if (element.classList.contains('borrar-tweet')) {
    element.parentElement.remove();
  }

}

function addTweetToLocalStorage(tweet) {
  let tweets;
  tweets = getTweetsFromLocalStorage();
  tweets.push(tweet);
  localStorage.setItem('tweets', JSON.stringify(tweets));
}
function getTweetsFromLocalStorage() {
  let tweets;
  if (localStorage.getItem('tweets') === null) {
    tweets = [];
  } else {
    tweets = JSON.parse(localStorage.getItem('tweets'));
  }
  return tweets;
}