import { quotes } from "./QuotesList.js";

export function quotesRender() {
  let currentQuoteIndex = 0;

  const quoteElement = document.querySelector(".quotes");
  const quote = document.createElement("p");
  const author = document.createElement("p");
  const value = document.createElement("p");

  value.setAttribute("style", "font-style: italic;");

  quote.textContent = ` "${
    quotes[localStorage.getItem("currentIndex") - 1].quote
  }" `;
  author.textContent = `~ ${
    quotes[localStorage.getItem("currentIndex") - 1].author
  }`;
  value.textContent = ` ${
    quotes[localStorage.getItem("currentIndex") - 1].value
  } `;

  quoteElement.append(quote);
  quoteElement.append(author);
  quoteElement.append(value);

  function changeQuote() {
    const newIndex = localStorage.getItem("currentIndex");
    if (newIndex !== null && newIndex < quotes.length) {
      currentQuoteIndex = newIndex;
    } else if (newIndex !== null && newIndex == quotes.length) {
      currentQuoteIndex = 0;
      localStorage.setItem("currentIndex", currentQuoteIndex);
    }
    quote.textContent = ` "${quotes[currentQuoteIndex].quote}" `;
    author.textContent = `~ ${quotes[currentQuoteIndex].author}`;
    value.textContent = ` ${quotes[currentQuoteIndex].value} `;
    currentQuoteIndex++;

    localStorage.setItem("currentIndex", currentQuoteIndex);
  }

  const oneMinute = 60000;

  setInterval(changeQuote, oneMinute);
}
