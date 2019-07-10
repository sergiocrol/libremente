'use strict';

function Card(info, parentELement, style) {
  this.info = info;
  this.parentELement = parentELement;
  this.style = null;
  this.elements = null;
}

Card.prototype.generate = function() {
  this.info.picture = (this.info.picture === -1) ? 'http://chittagongit.com/images/no-image-available-icon/no-image-available-icon-6.jpg' : this.info.picture;
  this.elements = `
  <img src="${this.info.picture}" width="300px"/>
  <h2>${this.info.title}</h2>
  <p>${this.info.extract}</p>
  `;
  return this.elements;
}
