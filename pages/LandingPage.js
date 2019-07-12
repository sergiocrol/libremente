'use strict';

function LandingPage(parentElement) {
  this.parentElement = parentElement;
  this.elements = null;
  this.storage = null;
}

LandingPage.prototype.generate = function() {
  var library = new LibraryPage(this.parentElement);
  this.storage = library.allStorage();
  this.elements = `
  <section id="header-section">
  <h2>create your own library</h2>`;
  var searchInput = new SearchInput(this.parentElement);
  this.elements += searchInput.generate();
  this.elements += `</section>`;
  this.elements += `<h2 class="card-info-header">suggested topics</h2>`;
  this.elements += this.randomCards();
  this.render();
  this.favoriteButtonListener();
  searchInput.addEventListenerToSearchButton();
  this.textAnimationListener();
}

LandingPage.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
}

LandingPage.prototype.textAnimationListener = function() {
  //document.addEventListener('DOMContentLoaded', function(event) {
    var dataText = [ "search about any topic", "make your own library", "be happy...", "...even though CSS"];
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

LandingPage.prototype.randomCards = function() {
  var cards = [
    ['https://upload.wikimedia.org/wikipedia/commons/7/76/Dostoevskij_1876.jpg',
    'Fyodor Dostoevsky',
    `<p class="mw-empty-elt"> </p> <p><b>Fyodor Mikhailovich Dostoevsky</b> (<span></span>; Russian: <span lang="ru" title="Russian language text">Фёдор Михайлович Достоевский</span>, <small>tr.</small> <i lang="ru-Latn" title="Russian language text">Fyódor Mikháylovich Dostoyévskiy</i>, <small>IPA: </small><span title="Representation in the International Phonetic Alphabet (IPA)">[ˈfʲɵdər mʲɪˈxajləvʲɪtɕ dəstɐˈjɛfskʲɪj]</span> <span>(<span><span><span></span>listen</span></span>)</span>; 11 November 1821 – 9 February 1881), sometimes transliterated <b>Dostoyevsky</b>, was a Russian novelist, short story writer, essayist, journalist and philosopher. Dostoevsky's literary works explore human psychology in the troubled political, social, and spiritual atmospheres of 19th-century Russia, and engage with a variety of philosophical and religious themes. His most acclaimed works include <i>Crime and Punishment</i> (1866), <i>The Idiot</i> (1869), <i>Demons</i> (1872) and <i>The Brothers Karamazov</i> (1880). Dostoevsky's oeuvre consists of 11 novels, three novellas, 17 short stories and numerous other works. Many literary critics rate him as one of the greatest psychologists in world literature. His 1864 novella <i>Notes from Underground</i> is considered to be one of the first works of existentialist literature. </p><p>Born in Moscow in 1821, Dostoevsky was introduced to literature at an early age through fairy tales and legends, and through books by Russian and foreign authors. His mother died in 1837 when he was 15, and around the same time, he left school to enter the Nikolayev Military Engineering Institute. After graduating, he worked as an engineer and briefly enjoyed a lavish lifestyle, translating books to earn extra money. In the mid-1840s he wrote his first novel, <i>Poor Folk</i>, which gained him entry into St. Petersburg's literary circles. Arrested in 1849 for belonging to a literary group that discussed banned books critical of Tsarist Russia, he was sentenced to death but the sentence was commuted at the last moment. He spent four years in a Siberian prison camp, followed by six years of compulsory military service in exile. In the following years, Dostoevsky worked as a journalist, publishing and editing several magazines of his own and later <i>A Writer's Diary</i>, a collection of his writings. He began to travel around western Europe and developed a gambling addiction, which led to financial hardship. For a time, he had to beg for money, but he eventually became one of the most widely read and highly regarded Russian writers. </p><p>Dostoevsky was influenced by a wide variety of philosophers and authors including Pushkin, Gogol, Augustine, Shakespeare, Dickens, Balzac, Lermontov, Hugo, Poe, Plato, Cervantes, Herzen, Kant, Belinsky, Hegel, Schiller, Solovyov, Bakunin, Sand, Hoffmann, and Mickiewicz. His writings were widely read both within and beyond his native Russia and influenced an equally great number of later writers including Russians like Aleksandr Solzhenitsyn and Anton Chekhov as well as philosophers such as Friedrich Nietzsche and Jean-Paul Sartre. His books have been translated into more than 170 languages. </p>`
    ],
    ['https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Mary_Wollstonecraft_by_John_Opie_%28c._1797%29.jpg/800px-Mary_Wollstonecraft_by_John_Opie_%28c._1797%29.jpg',
    'Mary Wollstonecraft',
    `<p class="mw-empty-elt"> </p> <p><b>Mary Wollstonecraft</b> (27 April 1759 – 10 September 1797) was an English writer, philosopher, and advocate of women's rights. Until the late 20th century, Wollstonecraft's life, which encompassed several unconventional personal relationships, received more attention than her writing. Today, Wollstonecraft is regarded as one of the founding feminist philosophers, and feminists often cite both her life and work as important influences. </p><p>During her brief career, she wrote novels, treatises, a travel narrative, a history of the French Revolution, a conduct book, and a children's book. Wollstonecraft is best known for <i>A Vindication of the Rights of Woman</i> (1792), in which she argues that women are not naturally inferior to men, but appear to be only because they lack education. She suggests that both men and women should be treated as rational beings and imagines a social order founded on reason. </p><p>After Wollstonecraft's death, her widower published a <i>Memoir</i> (1798) of her life, revealing her unorthodox lifestyle, which inadvertently destroyed her reputation for almost a century. However, with the emergence of the feminist movement at the turn of the twentieth century, Wollstonecraft's advocacy of women's equality and critiques of conventional femininity became increasingly important. </p><p>After two ill-fated affairs, with Henry Fuseli and Gilbert Imlay (by whom she had a daughter, Fanny Imlay), Wollstonecraft married the philosopher William Godwin, one of the forefathers of the anarchist movement. Wollstonecraft died at the age of 38 leaving behind several unfinished manuscripts. She died eleven days after giving birth to her second daughter, Mary Shelley, who would became an accomplished writer and author of <i>Frankenstein</i>. </p>`
    ],
    ['https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png',
     'JavaScript',
     `<p class="mw-empty-elt"> </p> <p><b>JavaScript</b> (<span></span>), often abbreviated as <b>JS</b>, is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions. </p><p>Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web. JavaScript enables interactive web pages and is an essential part of web applications. The vast majority of websites use it, and major web browsers have a dedicated JavaScript engine to execute it. </p><p>As a multi-paradigm language, JavaScript supports event-driven, functional, and imperative (including object-oriented and prototype-based) programming styles. It has APIs for working with text, arrays, dates, regular expressions, and the DOM, but the language itself does not include any I/O, such as networking, storage, or graphics facilities. It relies upon the host environment in which it is embedded to provide these features. </p><p>Initially only implemented client-side in web browsers, JavaScript engines are now embedded in many other types of host software, including server-side in web servers and databases, and in non-web programs such as word processors and PDF software, and in runtime environments that make JavaScript available for writing mobile and desktop applications, including desktop widgets. </p><p>The terms <i>Vanilla JavaScript</i> and <i>Vanilla JS</i> refer to JavaScript not extended by any frameworks or additional libraries. Scripts written in Vanilla JS are plain JavaScript code.</p><p>Although there are similarities between JavaScript and Java, including language name, syntax, and respective standard libraries, the two languages are distinct and differ greatly in design. JavaScript was influenced by programming languages such as Self and Scheme. The JSON serialization format, used to store data structures in files or transmit them across networks, is based on JavaScript.</p> 
     `
    ],
    ['https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/800px-CSS3_logo_and_wordmark.svg.png',
     'Cascading Style Sheets (CSS)',
     `<p><b>Cascading Style Sheets</b> (<b>CSS</b>) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.</p><p>CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts. This separation can improve content accessibility, provide more flexibility and control in the specification of presentation characteristics, enable multiple web pages to share formatting by specifying the relevant CSS in a separate .css file, and reduce complexity and repetition in the structural content. </p><p>Separation of formatting and content also makes it feasible to present the same markup page in different styles for different rendering methods, such as on-screen, in print, by voice (via speech-based browser or screen reader), and on Braille-based tactile devices. CSS also has rules for alternate formatting if the content is accessed on a mobile device.</p><p>The name <i>cascading</i> comes from the specified priority scheme to determine which style rule applies if more than one rule matches a particular element. This cascading priority scheme is predictable. </p><p>The CSS specifications are maintained by the World Wide Web Consortium (W3C). Internet media type (MIME type) <code>text/css</code> is registered for use with CSS by RFC 2318 (March 1998). The W3C operates a free CSS validation service for CSS documents.</p><p>In addition to HTML, other markup languages support the use of CSS including XHTML, plain XML, SVG, and XUL. </p>`
    ],
    ['https://upload.wikimedia.org/wikipedia/commons/b/bf/Sights_in_Amsterdam.jpg',
     'Amsterdam',
      `<p class="mw-empty-elt"> </p> <p><b>Amsterdam</b> (<span></span>, <span>UK also</span> <span></span>; <small>Dutch: </small><span title="Representation in the International Phonetic Alphabet (IPA)">[ɑmstərˈdɑm]</span> <span>(<span><span><span></span>listen</span></span>)</span>) is the capital city and most populous municipality of the Netherlands. Its status as the capital is mandated by the Constitution of the Netherlands, although it is not the seat of the government, which is The Hague. Amsterdam has a population of 866,737 within the city proper, 1,380,872 in the urban area and 2,410,960 in the metropolitan area. The city is located in the province of North Holland in the west of the country but is not its capital, which is Haarlem. The Amsterdam metropolitan area comprises much of the northern part of the Randstad, one of the larger conurbations in Europe, which has a population of approximately 8.1 million.</p><p>Amsterdam's name derives from <i>Amstelredamme</i>, indicative of the city's origin around a dam in the river Amstel. Originating as a small fishing village in the late 12th century, Amsterdam became one of the most important ports in the world during the Dutch Golden Age (17th century), as a result of its innovative developments in trade. During that time, the city was the leading centre for finance and trade. In the 19th and 20th centuries the city expanded, and many new neighbourhoods and suburbs were planned and built. The 17th-century canals of Amsterdam and the 19–20th century Defence Line of Amsterdam are on the UNESCO World Heritage List. Since the annexation of the municipality of Sloten in 1921 by the municipality of Amsterdam, the oldest historic part of the city lies in Sloten, dating to the 9th century. </p><p>As the commercial capital of the Netherlands and one of the top financial centres in Europe, Amsterdam is considered an alpha- world city by the Globalization and World Cities (GaWC) study group. The city is also the cultural capital of the Netherlands. Many large Dutch institutions have their headquarters there, including Philips, AkzoNobel, TomTom and ING. Also, many of the world's largest companies are based in Amsterdam or established their European headquarters in the city, such as leading technology companies Uber, Netflix and Tesla. In 2012, Amsterdam was ranked the second best city to live in by the Economist Intelligence Unit (EIU) and 12th globally on quality of living for environment and infrastructure by Mercer. The city was ranked 4th place globally as top tech hub in the Savills Tech Cities 2019 report (2nd in Europe), and 3rd in innovation by Australian innovation agency 2thinknow in their Innovation Cities Index 2009. The Port of Amsterdam to this day remains the second in the country, and the fifth largest seaport in Europe. Famous Amsterdam residents include the diarist Anne Frank, artists Rembrandt van Rijn and Vincent van Gogh, and philosopher Baruch Spinoza. </p><p>The Amsterdam Stock Exchange, the oldest stock exchange in the world, is located in the city centre. Amsterdam's main attractions include its historic canals, the Rijksmuseum, the Van Gogh Museum, the Stedelijk Museum, Hermitage Amsterdam, the Anne Frank House, the Scheepvaartmuseum, the Amsterdam Museum, the Heineken Experience, the Royal Palace of Amsterdam, Natura Artis Magistra, Hortus Botanicus Amsterdam, NEMO, the red-light district and many cannabis coffee shops. They draw more than 5 million international visitors annually. The city is also well known for its nightlife and festival activity; several of its nightclubs (Melkweg, Paradiso) are among the world's most famous. It is also one of the world's most multicultural cities, with at least 177 nationalities represented.</p>`
    ]
  ]
  var element = '';
  for(var i=0; i<=cards.length; i++) {
    var randomCard = cards[Math.floor(Math.random()*cards.length)];
    var button = (this.storage.includes(randomCard[1].split(' ').join('%20')+'$!')) ? 'eliminar' : 'guardar';
    var src = (this.storage.includes(randomCard[1].split(' ').join('%20')+'$!')) ? 'images/heartBroken.png' : 'images/heart.png';
    element += `<section class="card">
    <div class="card-image">
      <img src="${randomCard[0]}"/>
    </div>
    <div class="card-body">
    <h2>${randomCard[1]}</h2>
      <article>
      ${randomCard[2]}
      </article>
      <footer>
        <p><img class="favoriteButton" src="${src}"/>  ${button}</p>
      </footer>
    </div>
  </section>`
  if(i<cards.length-1){element += `<h2 class="ellipsis">● ● ●</h2>`}
  cards.splice(cards.indexOf(randomCard),1);
  }
  return element;
}

LandingPage.prototype.favoriteButtonListener = function() {
  var favoriteButtons = document.querySelectorAll('.card-body footer p');
  favoriteButtons.forEach((el) => {
    el.addEventListener('click', (event) => {
      console.log(el);
      var card = el.parentElement.parentElement.parentElement;
      var title = card.childNodes[3].childNodes[1].innerHTML;
      title = title.split(' ').join('%20');
      if(el.lastChild.nodeValue.trim() === 'guardar') {
        window.localStorage.setItem(title+'$!', title);
        el.lastChild.nodeValue = ' eliminar';
        el.childNodes[0].src = 'images/heartBroken.png';
      }else{
        window.localStorage.removeItem(title+'$!');
        el.lastChild.nodeValue = ' guardar';
        el.childNodes[0].src = 'images/heart.png';
      }
    })
  })
}