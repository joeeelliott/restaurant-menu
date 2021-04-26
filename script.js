const allButton = document.querySelector('.all');
const breakfastButton = document.querySelector('.breakfast');
const lunchButton = document.querySelector('.lunch');
const shakesButton = document.querySelector('.shakes');
const randomButton = document.querySelector('.random');

const img = document.querySelectorAll('img');
const names = document.querySelectorAll('.name');
const cost = document.querySelectorAll('.cost');
const bio = document.querySelectorAll('.bio');

const allOptions = Array.from(document.querySelectorAll('.option'));

const numberOfItems = Array.from(document.querySelectorAll('.option')).length;

// array to hold each .option object properties
const menuItems = [];

// push each object into above array
for(let i = 0; i < numberOfItems; i++){
  menuItems.push({
    img : img[i].src,
    name: names[i].innerText,
    cost: cost[i].innerText,
    bio: bio[i].innerText
  });
};

// return all items onto the screen 
const returnAllOptions = () => {
  allOptions.forEach(item => {
    item.style.display = "flex";
  });
}

// return all items back to original hard code state
allButton.addEventListener('click', () => {
  returnAllOptions();

  for(let i = 0; i < numberOfItems; i++){
    img[i].src = menuItems[i].img;
    names[i].innerText = menuItems[i].name;
    cost[i].innerText = menuItems[i].cost;
    bio[i].innerText = menuItems[i].bio;
  }
});

// show breakfast options only
breakfastButton.addEventListener('click', () => {
  returnAllOptions();

  allOptions.forEach(item => {
    if(!item.classList.contains('breakfast')){
      item.style.display = "none";
    }
  });
});

// show lunch options only
lunchButton.addEventListener('click', () => {
  returnAllOptions();

  allOptions.forEach(item => {
    if(!item.classList.contains('lunch')){
      item.style.display = "none";
    }
  });
});

// show shake options only
shakesButton.addEventListener('click', () => {
  returnAllOptions();

  allOptions.forEach(item => {
    if(!item.classList.contains('shake')){
      item.style.display = "none";
    }
  });
});

// randomises all the menu options without any duplicates
randomButton.addEventListener('click', () => {
  returnAllOptions();

  let usedNumbers = [];
  for(let i = 0; i < numberOfItems; i++){
    let randomNumber = Math.floor(Math.random() * numberOfItems);
    if(usedNumbers.includes(randomNumber)){
      for(let i = 0; i < 10; i++){
        randomNumber = Math.floor(Math.random() * numberOfItems);
        if(!usedNumbers.includes(randomNumber)){
          break;
        }
      }
    }

    img[i].src = menuItems[randomNumber].img;
    names[i].innerText = menuItems[randomNumber].name;
    cost[i].innerText = menuItems[randomNumber].cost;
    bio[i].innerText = menuItems[randomNumber].bio;

    usedNumbers.push(randomNumber);
  }
});