'use strict';

function LandingPage(parentElement) {
  this.parentElement = parentElement;
  this.elements = null;
}

LandingPage.prototype.generate = function() {
  this.elements = `
  <section id="header-section">
  <h2>create your own library</h2>`;
  var searchInput = new SearchInput(this.parentElement);
  this.elements += searchInput.generate();
  this.elements += `</section>`;
  this.render();
  searchInput.addEventListenerToSearchButton();
  this.textAnimationListener();
}

LandingPage.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
}

LandingPage.prototype.textAnimationListener = function() {
  //document.addEventListener('DOMContentLoaded', function(event) {
    var dataText = [ "create your own library", "search about anything", "be happy...", "...even though CSS"];
    function typeWriter(text, i, fnCallback) {
      if (i <= (text.length)) {
      document.querySelector("#header-section h2").innerHTML = text.substring(0, i+1);
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 1000);
      }
    }
    function StartTextAnimation(i) {
      if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 15000);
      }
      if (i <= dataText[i].length) {
      typeWriter(dataText[i], 0, function(){
        StartTextAnimation(i + 1);
      });
      }
    }
    StartTextAnimation(0);
}