import axios from 'axios';

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  
  //Create elements
  const topicsDiv = document.createElement('div');

  //Trying a new approach
  //HELL YEAH loops through the length of array passed into Tabs and create div/append/add content/add class for each value
  for (let i = 0; i < topics.length; i++) {
    const tabDiv = document.createElement('div');
    topicsDiv.appendChild(tabDiv);
    tabDiv.textContent = topics[i];
    tabDiv.classList.add('tab')
  }

  //Adding classes
  topicsDiv.classList.add('topics')

  //Return main div
  return topicsDiv;

}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  
  //Set constant for the div everything will be slapped into
  const tabsDiv = document.querySelector(selector)

  //Acquire data from API
  axios.get(`http://localhost:5000/api/topics`)
    .then(res => {
      //Take array and slap it into the Tabs function
      const topicsArray = Tabs(res.data.topics);
      
      //Append topicbsArray to tabsDiv
      tabsDiv.appendChild(topicsArray);

    })
    .catch(err => {
      console.error(err);
    })

}

tabsAppender('.tabs-containuer');

export { Tabs, tabsAppender }
