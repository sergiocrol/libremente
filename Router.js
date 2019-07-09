'use strict';

function Router() {
  this.page = null;
}

Router.prototype.buildDom = function(url, parentElement) {
  switch(url) {
    case '/':
      this.generateLandingPage(parentElement);
      break;
    case '/library':
      this.generateLibraryPage(parentElement);
      break;
    case '/me':
      this.generatePersonalInfoPage(parentElement);
      break;
    case '/query':
      this.generateQueryResultPage(parentElement);
      break;
    default:
      this.generateLandingPage(parentElement);
  }
}

Router.prototype.generateLandingPage = function(parentElement) {
  this.page = new LandingPage(parentElement);
  this.page.generate();
}

Router.prototype.generateLibraryPage = function(parentElement) {
  this.page = new LibraryPage(parentElement);
  this.page.generate();
}

Router.prototype.generatePersonalInfoPage = function(parentElement) {
  this.page = new PersonalInfoPage(parentElement);
  this.page.generate();
}

Router.prototype.generateQueryResultPage = async function(parentElement) {
  this.page = new QueryResultPage(parentElement);
  await this.page.generate();
}

var routerInstance = new Router();