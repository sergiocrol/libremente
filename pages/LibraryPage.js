'use strict';

function LibraryPage(parentElement) {
  this.parentElement = parentElement;
  this.elements = null;
}

LibraryPage.prototype.generate = function() {
  this.elements = '<h2>Library page</h2>';
  this.render();
}

LibraryPage.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
}