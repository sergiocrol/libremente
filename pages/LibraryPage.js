'use strict';

function LibraryPage(parentElement) {
  this.parentElement = parentElement;
  this.elements = null;
}

LibraryPage.prototype.generate = function() {
  this.elements = '<h2>Library page</h2>';
  var list = this.allStorage();
  var l = list.filter(function(li) {
    return li.includes('%20');
  })
  console.log(l);
  this.render();
}

LibraryPage.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
}

LibraryPage.prototype.allStorage = function() {
  var myStorage = window.localStorage;
  var values = [];
  var keys = Object.keys(myStorage);
  var i = keys.length;
  while(i--) {
    values.push(keys[i]);
  }
  return values;
}