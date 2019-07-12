'use strict';

function Navbar(parentElement, links, style) {
  this.parentElement = parentElement;
  this.links = links;
  this.style = null;
  this.elements = null;
}

Navbar.prototype.generate = function() {
  var homeButton = new HomeButton(this.parentElement, 'image');
  this.elements = homeButton.generate();
  this.elements += `
  <nav class="toggle">  
    <ul class="block">
  `
  this.links.forEach((element) => {
    this.elements += `
      <li><a href="#0" url="${element.url}">${element.name}</a></li>
    `
  });
  this.elements += `
    </ul>
  </nav>
  `
  this.render();
  homeButton.addEventListenerToHomeButton();
  this.menuButtonAddEventListener();
}

Navbar.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
}

Navbar.prototype.menuButtonAddEventListener = function() {
  var menuButton = document.querySelector('#menu-button');
  menuButton.addEventListener('click', (event) => {
    event.target.offsetParent.children[2].classList.toggle('toggle');
  })
}