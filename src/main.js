// Create variables targetting the relevant DOM elements here 👇

// Cover elements.
var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var tagline1 = document.querySelector(".tagline-1");
var tagline2 = document.querySelector(".tagline-2");

// Buttons:
var homeButton = document.querySelector(".home-button");
var randomCoverButton = document.querySelector(".random-cover-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var viewSavedCoversButton = document.querySelector(".view-saved-button");
var makeNewCoverButton = document.querySelector(".make-new-button");

var makeMyBookButton = document.querySelector(".create-new-book-button");

// View elements.
var homeView = document.querySelector(".home-view");
var formView = document.querySelector(".form-view");
var savedView = document.querySelector(".saved-view");
var savedCoverSection = document.querySelector(".saved-covers-section");

// Form elements.
var userInputCover = document.querySelector(".user-cover");
var userInputTitle = document.querySelector(".user-title");
var userInputDesc1 = document.querySelector(".user-desc1");
var userInputDesc2 = document.querySelector(".user-desc2");

// We've provided a few variables below
// var savedCovers = [
//   createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
// ];
// var currentCover;

var savedCovers = [
  createCover(covers[getRandomIndex(cover)], titles[getRandomIndex(title)], 
  descriptors[getRandomIndex(descriptors)], 
  descriptors[getRandomIndex(descriptors)])
];
var currentCover;

// Add your event listeners here 👇
window.addEventListener("load", getRandomCover);
randomCoverButton.addEventListener("click", getRandomCover);

makeNewCoverButton.addEventListener("click", viewMakeYourOwnCover);

viewSavedCoversButton.addEventListener("click", viewSavedCovers);
homeButton.addEventListener("click", viewHomePage);

makeMyBookButton.addEventListener("click", createNewCover);

// function(event) {
//   event.preventDefault();
//   createNewCover();
// })

// Create your event handlers and other functions here 👇



// We've provided two functions to get you started 

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function createCover(imgSrc, title, descriptor1, descriptor2) {
  var cover = {
    id: Date.now(),
    coverImg: imgSrc,
    title: title,
    tagline1: descriptor1,
    tagline2: descriptor2
  };
  return cover
};

function getRandomCover() {
  currentCover = createCover(
  covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);

  coverImage.src = currentCover.coverImg
  coverTitle.innerText = currentCover.title
  tagline1.innerText = currentCover.tagline1
  tagline2.innerText = currentCover.tagline2
};

function viewMakeYourOwnCover() {
  homeView.classList.add('hidden');
  savedView.classList.add('hidden');

  formView.classList.remove('hidden');

  saveCoverButton.classList.add('hidden');
  randomCoverButton.classList.add('hidden');

  homeButton.classList.remove('hidden');
  makeNewCoverButton.classList.remove('hidden');
  viewSavedCoversButton.classList.remove('hidden');
};

function viewSavedCovers() {
  homeView.classList.add('hidden');
  formView.classList.add('hidden');

  homeButton.classList.remove('hidden');
  savedView.classList.remove('hidden');
  makeNewCoverButton.classList.remove('hidden');
  // I don't think we need this button?:
  // viewSavedCoversButton.classList.remove('hidden');

  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
};

function viewHomePage() {
  formView.classList.add('hidden');
  savedView.classList.add('hidden');
  
  homeView.classList.remove('hidden');
  
  homeButton.classList.add('hidden');

  randomCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  viewSavedCoversButton.classList.remove('hidden');
  makeNewCoverButton.classList.remove('hidden');
};

function makeYourOwnCover() {
  homeView.classList.add('hidden');
  savedView.classList.add('hidden');

  formView.classList.remove('hidden');

  saveCoverButton.classList.add('hidden');
  randomCoverButton.classList.add('hidden');

  homeButton.classList.remove('hidden');
  makeNewCoverButton.classList.remove('hidden');
  viewSavedCoversButton.classList.remove('hidden');
};

function createNewCover() {
  // if(!userInputCover.value || !userInputTitle.value || !userInputDesc1.value || !userInputDesc2.value) {
  //   alert("Please fill out all fields");
  // } else {
  //     coverImage.src = userInputCover.value;
  //     coverTitle.innerText = userInputTitle.value;
  //     tagline1.innerText = userInputDesc1.value;
  //     tagline2.innerText = userInputDesc2.value;

  //     pushValuesToArray();

      viewHomePage();

      // document.querySelector("form").reset();
  };
};

function pushValuesToArray() {
  covers.push(userInputCover.value);
  titles.push(userInputTitle.value);
  descriptors.push(userInputDesc1.value);
  descriptors.push(userInputDesc2.value);
};


