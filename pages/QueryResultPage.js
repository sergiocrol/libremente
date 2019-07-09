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
  <section>
    <ul>
  `;
  this.queries.forEach((query) => {
    this.elements += `
      <li>
        <a href="#0">${query.title}</a>
      </li>
    `
  });
  this.elements += `
    </ul>
  </section>
  `
  this.render();
}

QueryResultPage.prototype.connnectToAPI = async function() {
  var searchInput = document.querySelector('#search-input');
  this.queries = await WikipediaServiceInstance.getQueryResult(searchInput.value.trim());
}

QueryResultPage.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
}