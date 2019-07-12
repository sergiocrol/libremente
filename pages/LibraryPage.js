'use strict';

function LibraryPage(parentElement) {
  this.parentElement = parentElement;
  this.elements = null;
  this.arrayCards = [];
  this.info = {
    picture: null,
    title: null,
    extract: null
  }
}

LibraryPage.prototype.generate = async function() {
  this.elements = '<h2 class="card-info-header">your library</h2>';
  var list = this.allStorage();
  var l = list.filter(function(li) {
    return li.includes('$!');
  })
  
  for (const el of l) {
    var key = window.localStorage[el];
    key = key.split(' ').join('%20');
    await this.connnectToAPI(key);
  }
  this.saveElements();
  this.render();
  this.removeButtonListener();
}

LibraryPage.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
}

LibraryPage.prototype.allStorage = function() {
  var myStorage = window.localStorage;
  var values = [];
  var keys = Object.keys(myStorage);
  var i = keys.length;
  while(i--) {
    //console.log(myStorage[keys[i]]);
    values.push(keys[i]);
  }
  return values;
}

LibraryPage.prototype.connnectToAPI = async function(el) {
  var text = await WikipediaServiceInstance.getSearchResult(el);
  var card = [];
  card[0] = text.title;
  card[1] = text.extract;
  card[2] = await WikipediaServiceInstance.getPictureResult(el);
  this.arrayCards.push(card);
}

LibraryPage.prototype.saveElements = function() {
  this.arrayCards.forEach((card, index, array) => {
    this.info.picture = card[2];
    this.info.title = card[0];
    this.info.extract = card[1];
    var c = new Card(this.info, this.parentElement);
    this.elements += c.generate();
    if(index != array.length-1) {
      this.elements += `<h2 class="ellipsis">● ● ●</h2>`
    }
  })
}

LibraryPage.prototype.removeButtonListener = function() {
  var buttons = document.querySelectorAll('.card-body footer p');
  buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      console.log(event);
      var index = event.target.parentElement.parentElement.childNodes[1].innerHTML;
      index = index.split(' ').join('%20');
      index = index+'$!';
      window.localStorage.removeItem(index);
      event.target.parentElement.parentElement.parentElement.remove();
    })
  })
}