'use strict';

function LandingPage(parentElement) {
  this.parentElement = parentElement;
  this.elements = null;
}

LandingPage.prototype.generate = function() {
  this.elements = `
  <section id="header-section">
  <h2>create your own library</h2>`;
  var searchInput = new SearchInput(this.parentElement);
  this.elements += searchInput.generate();
  this.elements += `</section>`;
  this.elements += `<section class="card">
  <div class="card-image">
    <img src="https://upload.wikimedia.org/wikipedia/commons/7/76/Dostoevskij_1876.jpg"/>
  </div>
  <div class="card-body">
  <h2>Fyodor Dostoevsky</h2>
    <article>
    <p class="mw-empty-elt"> </p> <p><b>Fyodor Mikhailovich Dostoevsky</b> (<span></span>; Russian: <span lang="ru" title="Russian language text">Фёдор Михайлович Достоевский</span>, <small>tr.</small> <i lang="ru-Latn" title="Russian language text">Fyódor Mikháylovich Dostoyévskiy</i>, <small>IPA: </small><span title="Representation in the International Phonetic Alphabet (IPA)">[ˈfʲɵdər mʲɪˈxajləvʲɪtɕ dəstɐˈjɛfskʲɪj]</span> <span>(<span><span><span></span>listen</span></span>)</span>; 11 November 1821 – 9 February 1881), sometimes transliterated <b>Dostoyevsky</b>, was a Russian novelist, short story writer, essayist, journalist and philosopher. Dostoevsky's literary works explore human psychology in the troubled political, social, and spiritual atmospheres of 19th-century Russia, and engage with a variety of philosophical and religious themes. His most acclaimed works include <i>Crime and Punishment</i> (1866), <i>The Idiot</i> (1869), <i>Demons</i> (1872) and <i>The Brothers Karamazov</i> (1880). Dostoevsky's oeuvre consists of 11 novels, three novellas, 17 short stories and numerous other works. Many literary critics rate him as one of the greatest psychologists in world literature. His 1864 novella <i>Notes from Underground</i> is considered to be one of the first works of existentialist literature. </p><p>Born in Moscow in 1821, Dostoevsky was introduced to literature at an early age through fairy tales and legends, and through books by Russian and foreign authors. His mother died in 1837 when he was 15, and around the same time, he left school to enter the Nikolayev Military Engineering Institute. After graduating, he worked as an engineer and briefly enjoyed a lavish lifestyle, translating books to earn extra money. In the mid-1840s he wrote his first novel, <i>Poor Folk</i>, which gained him entry into St. Petersburg's literary circles. Arrested in 1849 for belonging to a literary group that discussed banned books critical of Tsarist Russia, he was sentenced to death but the sentence was commuted at the last moment. He spent four years in a Siberian prison camp, followed by six years of compulsory military service in exile. In the following years, Dostoevsky worked as a journalist, publishing and editing several magazines of his own and later <i>A Writer's Diary</i>, a collection of his writings. He began to travel around western Europe and developed a gambling addiction, which led to financial hardship. For a time, he had to beg for money, but he eventually became one of the most widely read and highly regarded Russian writers. </p><p>Dostoevsky was influenced by a wide variety of philosophers and authors including Pushkin, Gogol, Augustine, Shakespeare, Dickens, Balzac, Lermontov, Hugo, Poe, Plato, Cervantes, Herzen, Kant, Belinsky, Hegel, Schiller, Solovyov, Bakunin, Sand, Hoffmann, and Mickiewicz. His writings were widely read both within and beyond his native Russia and influenced an equally great number of later writers including Russians like Aleksandr Solzhenitsyn and Anton Chekhov as well as philosophers such as Friedrich Nietzsche and Jean-Paul Sartre. His books have been translated into more than 170 languages. </p>
    </article>
    <footer>
      <p><img class="favoriteButton" src="images/heart.png"/> guardar</p>
    </footer>
  </div>
</section>`
  this.render();
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

