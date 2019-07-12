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
  var button = favoriteButton.generate(this.info.title);
  var library = new LibraryPage(this.parentElement);
  var storage = library.allStorage();
  var str = (storage.includes(this.info.title.split(' ').join('%20')+'$!')) ? ' eliminar' : ' guardar';
  this.elements = `
  <section class="card">
    <div class="card-image">
      <img src="${this.info.picture}"/>
    </div>
    <div class="card-body">
    <h2>${this.info.title}</h2>
      <article>
        <p>${this.info.extract}</p>
      </article>
      <footer>
        <p>${button} ${str}</p>
      </footer>
    </div>
  </section>
  `;
  return this.elements;
}
