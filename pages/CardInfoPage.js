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
}

CardInfoPage.prototype.generate = async function() {
  await this.connnectToAPI();
  var card = new Card(this.info, this.parentElement);
  this.elements = card.generate();
  this.render();
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
