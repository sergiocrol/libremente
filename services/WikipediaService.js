'use strict';

function WikipediaService() {
  this.proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  this.queryBaseUrl = this.proxyUrl + 'https://en.wikipedia.org/w/api.php?action=query&list=search&utf8=&format=json&srsearch=';
  this.searchBaseUrl = this.proxyUrl + 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&titles=';
  this.pictureBaseUrl = this.proxyUrl + 'https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original&titles=';
}

WikipediaService.prototype.getQueryResult = async function(queryString) {
  queryString = queryString.split(' ').join('%20');
  var response = await fetch(`${this.queryBaseUrl}${queryString}`);
  var data = await response.json();
  return data.query.search;
}

WikipediaService.prototype.getSearchResult = async function(queryString) {
  queryString = queryString.split(' ').join('%20');
  var response = await fetch(`${this.searchBaseUrl}${queryString}`);
  var data = await response.json();
  var res = data.query.pages[Object.keys(data.query.pages)[0]];
  return res;
}

WikipediaService.prototype.getPictureResult = async function(queryString) {
  queryString = queryString.split(' ').join('%20');
  var res = '';
  try{
    var response = await fetch(`${this.pictureBaseUrl}${queryString}`);
    var data = await response.json();
    res = data.query.pages[Object.keys(data.query.pages)[0]].original.source;
  }catch{
    res = -1;
  }
  return res;
}

var WikipediaServiceInstance = new WikipediaService();