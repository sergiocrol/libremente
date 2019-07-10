'use strict';

function QueryResultPage(parentElement, style) {
  this.parentElement = parentElement;
  this.style = null;
  this.elements = null;
  this.queries = null;
}

QueryResultPage.prototype.generate = async function() {
  await this.connnectToAPI();
  var searchInput = new SearchInput(this.parentElement);
  this.elements = searchInput.generate();
  this.elements += `
  <section class="query-list-section">
    <ul>
  `;
  this.queries.forEach((query) => {
    var url = (query.title).split(' ').join('%20');
    this.elements += `
      <li>
        <a href="#0" url="${url}">${query.title}</a>
        <p>${query.snippet}</p>
      </li>
    `
  });
  this.elements += `
    </ul>
  </section>
  `
  this.render();
  searchInput.addEventListenerToSearchButton();
  this.addEventListenerToList();
}

QueryResultPage.prototype.connnectToAPI = async function() {
  var searchInput = document.querySelector('#search-input');
  this.queries = await WikipediaServiceInstance.getQueryResult(searchInput.value.trim());
}

QueryResultPage.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
}

QueryResultPage.prototype.addEventListenerToList = function() {
  var links = document.querySelectorAll('.query-list-section ul li a');
  links.forEach((link) => {
    link.addEventListener('click', this.changePage);
  })
}

QueryResultPage.prototype.changePage = function(event) {
  var url = event.target.attributes.url.value;
  routerInstance.buildDom(url, this.parentElement);
}