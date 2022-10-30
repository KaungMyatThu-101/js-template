const newQuote = document.getElementById("new-quote");
const quotesHTML = document.getElementById("quote");
const author = document.getElementById("author");
const quoteContainer = document.getElementById("quote-container");
const loader = document.getElementById("loader");

let quotesData = [];

const loading = () => {
  loader.hidden = false;
  quoteContainer.hidden = true;
};

const dataShow = () => {
  loader.hidden = true;
  quoteContainer.hidden = false;
};

const randomQuote = () => {
  loading();
  const quote = quotesData[Math.floor(Math.random() * quotesData.length)];
  quotesHTML.textContent = quote.text;
  author.textContent = quote.author;
  if (!quote.author) {
    author.textContent = "Anonymous";
  } else {
    author.textContent = quote.author;
  }

  if (quote.text.length > 100) {
    quotesHTML.classList.add("long-quote");
  } else {
    quotesHTML.classList.remove("long-quote");
  }
  dataShow();
};
newQuote.addEventListener("click", randomQuote);

async function quoteGenerator() {
  loading();
  // const apiUrl = "https://type.fit/api/quotes";
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl); //api data and it will get json format; so need to convert js format
    quotesData = await response.json();
    randomQuote();
  } catch (error) {
    console.log(error);
  }
}
quoteGenerator();
