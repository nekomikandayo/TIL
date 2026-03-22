// const tweetForm = document.querySelector('#tweetForm');
// const tweetsContainer = document.querySelector('#tweets');

// tweetForm.addEventListener('submit', function (e) {
//     e.preventDefault();
//     // const usernameInput = document.querySelectorAll('input')[0];
//     // const tweetInput = document.querySelectorAll('input')[1];

//     const usernameInput = tweetForm.elements.username;
//     const tweetInput = tweetForm.elements.tweet;
//     addTweet(usernameInput.value, tweetInput.value);

//     usernameInput.value = '';
//     tweetInput.value = '';
//     // console.log('submit!!');
// })

// const addTweet = (username, tweet) => {
//     const newTweet = document.createElement('li');
//     const bTag = document.createElement('b');
//     bTag.append(username);
//     newTweet.append(bTag);
//     newTweet.append(` - ${tweet}`);
//     tweetsContainer.append(newTweet);
// }

const sweetForm = document.querySelector('#sweetForm');
const tweetsContainer = document.querySelector('#tweets');
sweetForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // const usernameInput = document.querySelectorAll('input')[0];
    // const sweetInput = document.querySelectorAll('input')[1];
    const usernameInput = sweetForm.elements.username;
    const sweetInput = sweetForm.elements.sweet;
    addSweet(usernameInput.value, sweetInput.value);
    sweetInput.value = '';
    usernameInput.value = '';

});

const addSweet = (username, sweet) => {
    const newSweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newSweet.append(bTag);
    newSweet.append(` - ${sweet}`);
    tweetsContainer.append(newSweet);
}