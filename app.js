'use strict';

function main() {
  var ENTRYPOINT = '/';
  var rootElement = document.querySelector('#root');
  var layoutInstance = null;
  var navbarInstance = null;
  var links = [
    {name: 'My library', url: '/library'},
    {name: 'Personal info', url: '/me'}
  ]

  generateLayout();
  generateNavbar();
  addListenersToNavbar();
  activateRouter();

  function generateLayout() {
    layoutInstance = new Layout(rootElement);
    layoutInstance.generate();
  }

  function generateNavbar() {
    navbarInstance = new Navbar(layoutInstance.header, links);
    navbarInstance.generate();
  }

  function activateRouter() {
    routerInstance.buildDom(ENTRYPOINT, layoutInstance.main);
  }

  function addListenersToNavbar() {
    var anchors = document.querySelectorAll('nav a');
    anchors.forEach((anchor) => {
      anchor.addEventListener('click', changePage);
    })
  }

  function changePage(event) {
    var url = event.target.attributes.url.value;
    routerInstance.buildDom(url, layoutInstance.main);
  }
}

window.addEventListener('load', main)