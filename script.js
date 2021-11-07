//Variables

const quoteText = document.getElementById('quote-text')
const quoteTags = document.getElementById('quote-tags')
const quoteAuthor = document.getElementById('quote-author')
const button = document.getElementById('button')

const twitter = document.querySelector('.tt-share')

//Function do get the random quote from the API
function randomQuote() {
  fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
      quoteText.textContent = `"${data.content}"`
      quoteTags.textContent = `<${data.tags}>`
      quoteAuthor.textContent = `-${data.author}`
    })
}

//Calling the function
randomQuote()

//The quote is called by pressing the button
button.addEventListener('click', () => {
  randomQuote()
})

//Sharing The quote on Twitter
function shareQuote() {
  let quoteUrl = quoteText.textContent
  let authorName = quoteAuthor.textContent
  let postTitle = encodeURI('Check This Quote from DailyQuotes: ')

  twitter.setAttribute(
    'href',
    `https://twitter.com/share?url=${quoteUrl}${authorName}&text=${postTitle}`
  )
}

shareQuote()

//The quote is shared by pressing the button
twitter.addEventListener('click', () => {
  shareQuote()
})

//social media links
// https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}

// https://pinterest.com/pin/create/bookmarklet/?media=${postImg}&url=${postUrl}&description=${postTitle}

// https://twitter.com/share?url=${postUrl}&text=${postTitle}

// https://wa.me/?text=${postTitle} ${postUrl}

// https://www.facebook.com/sharer.php?u=${postUrl}
