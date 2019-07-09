'use strict';

function PersonalInfoPage(parentElement) {
  this.parentElement = parentElement;
  this.elements = null;
}

PersonalInfoPage.prototype.generate = function() {
  this.elements = '<h2>Personal info page</h2>';
  this.render();
}

PersonalInfoPage.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
}