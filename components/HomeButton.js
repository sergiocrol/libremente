'use strict';

function HomeButton(parentElement, type, style) {
  this.parentElement = parentElement;
  this.style = null;
  this.type = type;
  this.elements = null;
}

HomeButton.prototype.generate = function() {
  var button = '';
  if(this.type === 'image') {
    button = `<a id="menu-button" class="logo" url="/">
    <svg xmlns="http://www.w3.org/2000/svg"
      width="0.45in" height="0.45in"
      viewBox="0 0 84 84">
    <path class="logo-animation" id="Selección"
          fill="none" stroke="none" stroke-width="1"
          d="M 36.04,4.74
            C 23.96,11.71 32.49,27.84 43.96,23.62
              52.05,20.64 53.06,10.38 45.96,5.60
              42.81,3.48 39.49,3.89 36.04,4.74 Z
            M 32.00,80.00
            C 32.00,80.00 33.00,83.00 33.00,83.00
              46.05,78.84 57.10,62.79 54.67,49.00
              52.33,35.63 39.12,32.21 32.34,37.85
              27.33,42.02 27.17,53.57 36.01,55.61
              40.80,56.71 44.92,54.28 46.96,57.35
              48.47,59.62 47.20,62.86 46.08,65.00
              42.79,71.28 37.61,75.87 32.00,80.00 Z" />
    </svg>
  </a>`;
  }else {
    button = '<a class="logo" href="#0" url="/">atrás</a>';
  }
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
  console.log(event);
  var url = event.path[1].attributes[2].value;
  routerInstance.buildDom(url, event.path[3].childNodes[3]);
}