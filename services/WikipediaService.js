'use strict';

function WikipediaService() {
  this.proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  this.queryBaseUrl = this.proxyUrl + 'https://en.wikipedia.org/w/api.php?action=query&list=search&utf8=&format=json&srsearch=';
}

WikipediaService.prototype.getQueryResult = async function(queryString) {
  queryString = queryString.split(' ').join('%20');
  var response = await fetch(`${this.queryBaseUrl}${queryString}`);
  var data = await response.json();
  return data.query.search;
}

var WikipediaServiceInstance = new WikipediaService();