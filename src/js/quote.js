import quoteText from '/src/js/quotes.json';

const text = quoteText.quotes;
const length = text.length;

const quote = document.querySelector('.quote__text'),
    counter = document.querySelector('.quote__count');


let count = 2;

counter.innerText = `${text[0].id}/${length}`;
quote.innerText = text[0].text;


export const showQuote = () => {
    const n = count++;

    [...text].map(item => {

        if (n === item.id) {
            counter.innerText = `${item.id}/${length}`;
            quote.innerText = item.text;
        }

        if (n > length) {
            counter.innerText = `${text[0].id}/${length}`;
            quote.innerText = text[0].text;
            count = 2
        }
    });
}