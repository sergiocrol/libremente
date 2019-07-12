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
  this.elements = '<h2>Library page</h2>';
  var list = this.allStorage();
  var l = list.filter(function(li) {
    return li.includes('%20');
  })
  for (const el of l) {
    await this.connnectToAPI(el);
  }
  this.saveElements();
  //console.log(this.elements);
  this.render();
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
  //var el = '';
  this.arrayCards.forEach((card) => {
    console.log(card);
    this.info.picture = card[2];
    this.info.title = card[0];
    this.info.extract = card[1];
    var c = new Card(this.info, this.parentElement);
    this.elements += c.generate();
    /*el += `<section class="card">
    <div class="card-image">
      <img src="${this.info.picture}"/>
    </div>
    <div class="card-body">
    <h2>${this.info.title}</h2>
      <article>
      ${this.info.extract}
      </article>
      <footer>
        <p><img class="favoriteButton" src="images/heart.png"/>  guardar</p>
      </footer>
    </div>
  </section>`*/
  })
  //return el;
}