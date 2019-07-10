'use strict';

function HomeButton(parentElement, type, style) {
  this.parentElement = parentElement;
  this.style = null;
  this.type = type;
  this.elements = null;
}

HomeButton.prototype.generate = function() {
  var button = (this.type === 'image') ? '<a class="logo" href="#0" url="/"><img src="./images/logo.png" width="50px"/></a>' : '<a class="logo" href="#0" url="/">atrás</a>';
  this.elements = button;
  return this.elements;
}

HomeButton.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
}

HomeButton.prototype.addEventListenerToHomeButton = function() {
  var link = document.querySelector('.logo');
  link.addEventListener('click', this.changePage);
}

HomeButton.prototype.changePage = function(event) {
  var parent = (event.target.localName === 'img') ? this.parentElement.nextElementSibling : this.parentElement;
  var url = event.target.parentElement.attributes[2].value;
  routerInstance.buildDom(url, parent);
}