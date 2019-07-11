'use strict';

function CardInfoPage(parentElement, query) {
  this.parentElement = document.querySelector('#main-site');
  this.elements = null;
  this.query = query;
  this.info = {
    picture: null,
    title: null,
    extract: null
  }
  this.cards = [];
}

CardInfoPage.prototype.generate = async function() {
  await this.connnectToAPI();
  this.elements = `
    <h2 class="card-info-header">Here is your card</h2>
  `;
  var card = new Card(this.info, this.parentElement, this.callback);
  this.cards.push(card);
  this.elements += card.generate();
  this.render();
  this.addListenerToFavoriteButton();
}

CardInfoPage.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
}

CardInfoPage.prototype.connnectToAPI = async function() {
  var text = await WikipediaServiceInstance.getSearchResult(this.query);
  this.info.title = text.title;
  this.info.extract = text.extract;
  this.info.picture = await WikipediaServiceInstance.getPictureResult(this.query);
}

CardInfoPage.prototype.addListenerToFavoriteButton = function() {
  this.cards.forEach((card) => {
    console.log(card);
    var favoriteButton = document.querySelector('.favoriteButton');
    favoriteButton.addEventListener('click', () => {
      this.storage(card, favoriteButton);
    });
  })

}

CardInfoPage.prototype.storage = function(card, favoriteButton) {
  var myStorage = window.localStorage;
  var isClicked = false;
  if(myStorage.getItem(card.info.title.split(' ').join('%20')) === null) {
    // add to localStorage
    myStorage.setItem(card.info.title.split(' ').join('%20'), {title: card.info.title, picture: card.info.picture, extract: card.info.extract});
    isClicked = true;
    card.button.changeButtonState(isClicked);
  }else{
    // remove from localStorage
    myStorage.removeItem(card.info.title.split(' ').join('%20'));
    isClicked = false;
    card.button.changeButtonState(isClicked);
  }
  console.log(myStorage);
}
