'use strict';

function SearchInput(parentElement, style) {
  this.parentElement = parentElement;
  this.style = null;
  this.elements = null;
}

SearchInput.prototype.generate = function() {
  this.elements = `
  <input id="search-input" type="text" name="text" placeholder="Franz Kafka">
  <input id="search-button" type="button" value="send">
  `;
  return this.elements;
}

SearchInput.prototype.addEventListenerToSearchButton = function() {
  var searchButton = document.querySelector('#search-button');
  searchButton.addEventListener('click', this.changePage)
}

SearchInput.prototype.changePage = function(event) {
  var searchInput = document.querySelector('#search-input');
  if(searchInput.value.trim() === '') {
    alert('Debes introducir un texto');
  }else{
    routerInstance.buildDom('/query', this.parentElement);
  }
}