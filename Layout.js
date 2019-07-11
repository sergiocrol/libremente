'use strict';

function Layout(root, style) {
  this.root = root;
  this.style = style;
  this.elements = null;
  this.header = null;
  this.main = null;
  this.footer = null;
}

Layout.prototype.generate = function() {
  this.elements = `
    <header id="header-site"></header>
    <main id="main-site"></main>
    <footer id="footer-site">footer</footer>
  `
  this.render();
  this.getContainers();
}

Layout.prototype.render = function() {
  this.root.innerHTML = this.elements;
}

Layout.prototype.getContainers = function() {
  this.header = document.querySelector('#header-site');
  this.main = document.querySelector('#main-site');
  this.footer = document.querySelector('#footer-site');
}