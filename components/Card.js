'use strict';

function Card(info, parentELement, callback, style) {
  this.info = info;
  this.parentELement = parentELement;
  this.style = null;
  this.elements = null;
  this.button = null;
  this.callback = callback;
}

Card.prototype.generate = function() {
  this.info.picture = (this.info.picture === -1) ? 'http://chittagongit.com/images/no-image-available-icon/no-image-available-icon-6.jpg' : this.info.picture;
  var favoriteButton = new FavoriteButton(this.callback);
  this.button = favoriteButton;
  var button = favoriteButton.generate();
  this.elements = `
  <section class="card">
    <div class="card-container">
      <img src="${this.info.picture}"/>
    </div>
    <h2>${this.info.title}</h2>
    <article>
      <p>${this.info.extract}</p>
    </article>
    <footer>
      <p>${button}</p>
    </footer>
  </section>
  `;
  return this.elements;
}
