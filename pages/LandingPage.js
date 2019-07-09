'use strict';

function LandingPage(parentElement) {
  this.parentElement = parentElement;
  this.elements = null;
}

LandingPage.prototype.generate = function() {
  this.elements = '<h2>Landing page</h2>';
  var searchInput = new SearchInput(this.parentElement);
  this.elements += searchInput.generate();
  this.render();
  searchInput.addEventListenerToSearchButton();
}

LandingPage.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
}

/*LandingPage.prototype.addEventListenerToSearchButton = function() {
  var searchButton = document.querySelector('#search-button');
  searchButton.addEventListener('click', this.changePage)
}

LandingPage.prototype.changePage = function(event) {
  routerInstance.buildDom('/query', this.parentElement);
}*/