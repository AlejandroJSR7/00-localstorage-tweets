// Variables
const listOfTweets = document.querySelector('#list-tweets');
const textareaTweet = document.querySelector('#tweet');
tweet.focus();


// Event Listeners
eventListeners();

function eventListeners() {
  // Form Submit
  document.querySelector('#tweet-form').addEventListener('submit', addTweet);
  // Remove Item
  listOfTweets.addEventListener('click', removeTweet);
  // Load elements from LocalStorage to HTML
  document.addEventListener('DOMContentLoaded', () => {
    let tweets = getTweetsFromLocalStorage();
    tweets.forEach(tweet => {
      addElementToHtml(tweet)
    });
  })
}

// Functions
function addTweet(e) {
  e.preventDefault();

  const tweet = textareaTweet.value;

  addElementToHtml(tweet);

  textareaTweet.value = '';
  textareaTweet.focus();

  addTweetToLocalStorage(tweet);
}

function removeTweet(e) {
  e.preventDefault();

  const element = e.target;

  if (element.classList.contains('borrar-tweet')) {
    element.parentElement.remove();
    removeTweetLocalStorage(element.parentElement.innerText);
  }

}

function addTweetToLocalStorage(tweet) {
  let tweets;
  tweets = getTweetsFromLocalStorage();
  // Add the new tweet
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
function removeTweetLocalStorage(tweet) {
  console.log('removeTweetLocalStorage', tweet)
  let tweets, tweetToRemove;
  // Remove X
  tweetToRemove = tweet.substring(0, tweet.length - 1);
  console.log('tweetToRemove', tweetToRemove)

  tweets = getTweetsFromLocalStorage();

  tweets.forEach((tweet, index) => {
    if (tweetToRemove === tweet) {
      tweets.splice(index, 1);
    }
  });
  localStorage.setItem('tweets', JSON.stringify(tweets));
}

function addElementToHtml(tweet) {
  const li = document.createElement('li');
  const removeButton = document.createElement('a');

  removeButton.classList = 'borrar-tweet';
  removeButton.innerText = 'X';

  li.innerText = tweet;
  li.appendChild(removeButton);
  listOfTweets.appendChild(li);
  return true;
}