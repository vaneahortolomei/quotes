import quoteText from '/src/js/quotes.json';

const text = quoteText.quotes;
const length = text.length;

const quote = document.querySelector('.quote__text'),
    counter = document.querySelector('.quote__count'),
    author = document.querySelector('.quote__author');


let count = 2;

const initial = () => {
    counter.innerText = `${text[0].id}/${length}`;
    quote.innerText = text[0].text;
    author.innerText = `- ${text[0].author}`;
}

window.addEventListener('load', () => {
    initial();
})

export const showQuote = () => {
    const n = count++;

    [...text].map(item => {

        if (n === item.id) {
            counter.innerText = `${item.id}/${length}`;
            quote.innerText = item.text;
            author.innerText = `- ${item.author}`;
        }

        if (n > length) {
            initial();
            count = 2
        }
    });
}