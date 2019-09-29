# Project's name
Libremente

## Description
Create a web design allow you to access to Wikipedia's API and search info about whatever topic you want.
A basic information about the topic will be stored in a card that you'll be able to save in a local storage in order 
to create your own library.


## MVP (DOM - CANVAS)
1) Basic components: Navbar (with logo and menu) / Footer
2) Landing Page with search input and cards about random topics
3) Search page with differents link about the topic you have looked for
4) Info page with the information about the topic you have selected

## Backlog
1) Implement a personal library where you can save those cards you like

## Data structure
1) app.js
  ENTRYPOINT
  navbarInstance
  layoutInstance
  footerInstance
  rootElement
  links

  generateLayout()
  generateNavbar()
  generateFooter()
  activateRouter()
  addListenerToNavbar

2) Layout.js
  this.root
  this.style
  this.elements
  this.header
  this.main
  this.footer

  this.generate()
  this.render()
  this.getContainer()

3) Router.js
  this.page
  routerInstance

  this.generate()
  this.generateLandingPage()
  this.generateQueryResultPage()
  this.generateCardInfoPage()
  this.generateLibraryPage()
  this.generatePersonalInfoPage()

4) Navbar.js
  this.parentElement
  this.links
  this.style
  this.elements

  this.generate()
  this.render()

5) Loading.js
  this.parentElement
  this.style
  this.elements

  this.generate()
  this.render()

6) Card.js
  this.parentElement
  this.style
  this.elements

  this.generate()
  this.render()

7) SearchInput.js
  this.parentElement
  this.style
  this.elements

  this.generate()
  this.render()

8) LandingPage.js
  this.parentElement
  this.elements

  this.generate()
  this.render()

9) QueryResultPage.js
  this.parentElement
  this.elements
  this.queries
  this.loading

  this.generate()
  this.render()
  this.connectToAPI()

10) CardInfoPage.js
  this.parentElement
  this.elements
  this.selectInfo
  this.loading

  this.generate()
  this.render()
  this.connectToAPI()

11) LibraryPage.js
  this.parentElement
  this.elements
  this.cards
  this.loading

  this.generate()
  this.render()
  this.getFromLocalStorage()

12) PersonalInfoPage.js
  this.parentElement
  this.elements
  this.loading

  this.generate()
  this.render()
  this.getFromLocalStorage()
  this.setToLocalStorage()

13) FavoriteButton.js
  this.parentElement
  this.elements

  this.generate()
  this.render()
  this.setToLocalStorage()
  this.removeFromLocalStorage()
    

## States y States Transitions
Definition of the different states and their transition (transition functions)

- LandingPage
- QueryResultPage
- CardInfoPage
- LibraryPage *
- PersonalInfoPage *


## Task
1) Create files
2) Boilerplate
3) git
4) Deployment
5) App.js with a main function
6) Layout
7) Navbar
8) Footer
9) Router
10) LandingPage
11) SearchInput
12) Card
13) QueryResultPage
14) CardInfoPage
15) LibraryPage
16) PersonalInfoPage


## Links

### Git
[Link Repo](https://github.com/sergiocrol/libremente) <br>
[Link Deploy](https://sergiocrol.github.io/libremente/.)


### Slides
[Link slides](https://docs.google.com/presentation/d/1MumXcUYIcDdbyDJFmly5sv37Hm0xTc64Xtn7R5vbJ6s/edit?usp=sharing)
