
const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>

  //Create elements
  const cardDiv = document.createElement('div');
  const headlineDiv = document.createElement('div');
  const authorDiv = document.createElement('div');
  const imgContDiv = document.createElement('div');
  const authorImage = document.createElement('img');
  const authorSpan = document.createElement('span');

  //Create hierarchy
  cardDiv.appendChild(headlineDiv);
  cardDiv.appendChild(authorDiv);
    authorDiv.appendChild(imgContDiv);
      imgContDiv.appendChild(authorImage);
    authorDiv.appendChild(authorSpan);

    //Add content
    headlineDiv.textContent = article.headline;
    authorImage.src = article.authorPhoto;
    authorSpan.textContent = article.authorName;

    //Add classs
  cardDiv.classList.add('card');
  headlineDiv.classList.add('headline');
  authorDiv.classList.add('author');
  imgContDiv.classList.add('img-container');
  
  //Return main div
  return cardDiv;

}

//Test
const testArt = {
  headline: 'Hello',
  authorPhoto: 'https://vetmed.tamu.edu/news/wp-content/uploads/sites/9/2020/09/Llama-and-Alpaca-Pet-Talk.jpg',
  authorName: 'Bruh'
}
const cardEntry = document.querySelector('.cards-container');
cardEntry.appendChild(Card(testArt));

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
