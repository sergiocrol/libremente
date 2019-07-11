'use strict';

function QueryResultPage(parentElement, style) {
  this.parentElement = parentElement;
  this.style = null;
  this.elements = null;
  this.queries = null;
}

QueryResultPage.prototype.generate = async function() {
  await this.connnectToAPI();
  this.elements = `
  <section id="header-section">
  <h2>create your own library</h2>`;
  var searchInput = new SearchInput(this.parentElement);
  this.elements += searchInput.generate();
  this.elements += `</section>`;
  this.elements += `
  <section class="query-list-section">
    <ul>
  `;
  this.queries.forEach((query, index) => {
    var url = (query.title).split(' ').join('%20');
    this.elements += `
      <li>
        <div class="li-index">${index+1}</div>
        <div class="li-body">
          <a href="#0" url="${url}">${query.title}</a>
          <p>${query.snippet}</p>
        </div>
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
  var links = document.querySelectorAll('.query-list-section ul li');
  links.forEach((link) => {
    link.addEventListener('click', this.changePage);
  })
}

QueryResultPage.prototype.changePage = function(event) {
  event.stopPropagation();
  var url = event.currentTarget.children[1].childNodes[1].attributes[1].value;
  routerInstance.buildDom(url, this.parentElement);
}