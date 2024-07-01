import { quoteList } from "./quotes.js";


function generateQuote() {
    // Declare variables
    const quote = document.querySelector('.display-container');
    const author = document.querySelector('.Author-name-display');

    // generate random index
    const index = Math.floor(Math.random() * quoteList.length);

    // write to the html
    quote.innerText = `'${quoteList[index].quotes}'`
    author.innerText = `${quoteList[index].author}`

}

document.querySelector('.quote-btn').addEventListener('click', generateQuote);