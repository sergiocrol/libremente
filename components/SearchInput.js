'use strict';

function SearchInput(parentElement, style) {
  this.parentElement = parentElement;
  this.style = null;
  this.elements = null;
}

SearchInput.prototype.generate = function() {
  this.elements = `
  <div id="search-container">
    <input id="search-input" type="text" name="text" placeholder="Franz Kafka" autofocus>
    <div id="search-button">></div>
  </div>
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
    console.log(this.parentElement.parentElement.parentElement);
    routerInstance.buildDom('/query', this.parentElement.parentElement.parentElement);
  }
}