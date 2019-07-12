'use strict';

function FavoriteButton(callback) {
  this.isClicked = false;
  this.heart = 'images/heart.png';
  this.heartEmpty = 'images/heartEmpty.png';
  this.elements = null;
  this.callback = callback;
}

FavoriteButton.prototype.setToLocalStorage = function() {
  alert('añadido');
}

FavoriteButton.prototype.removeFromLocalStorage = function() {
  alert('eliminado');
}

FavoriteButton.prototype.generate = function(title) {
  var library = new LibraryPage();
  var storage = library.allStorage();
  var src = (storage.includes(title.split(' ').join('%20'))+'$!') ? 'images/heartBroken.png' : 'images/heart.png';
  return this.elements = `<img class="favoriteButton" src="${src}"/>`;
}

FavoriteButton.prototype.changeButtonState = function(isClicked) {
  if(isClicked) {
    alert('remove');
    this.elements = `<img class="favoriteButton" src="${this.heart}" width="50px"/>`
  }else{
    alert('add');
    this.elements = `<img class="favoriteButton" src="${this.heartEmpy}" width="50px"/>`
  }
}