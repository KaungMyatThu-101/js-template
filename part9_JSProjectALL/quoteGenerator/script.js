console.log("hello project");
let quotesData = [];

const randomQuote = () => {
  const quote = quotesData[Math.floor(Math.random() * quotesData.length)];
  console.log(quote);
};

async function quoteGenerator() {
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
