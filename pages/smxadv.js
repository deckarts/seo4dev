import { navigation } from './components/navigation';
import { aside      } from './components/aside';
import { footer     } from './components/footer';

export const smxadvHtml =
`<!DOCTYPE html>
<html lang="en-us">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
    <title>SMX Advanced 2021: Web Platform Workshop by Detlef Johnson</title>
    <meta name="description" content="SMX Advanced 2021: SEO for Developers series workshop by Detlef Johnson to be held in a virtual envoironment until such a time we can produce conferences in person once again.">
    <meta name="keywords" content="seo for developers, smx, smx advanced, smx advanced workshop">
    <style>.skip-link { position: absolute; top: -40px; left: 0; background: #000000; color: white; padding: 8px; z-index: 100; } .skip-link:focus { top: 0; }</style>
  </head>
  <body>
    <a class="skip-link" href="#main">Skip to main</a>
    <header>
      <nav>` + navigation + `</nav>
    </header>
    <main id="main">
      <h1>Presentations</h1>
      <article>
        <section style="min-height: 500px;">
          <h1>SMX Advanced (June 17th, 18th)</h1>
          <iframe title="SEO for Developers Presentaion" style="position: absolute; left: 8px; border-top: 10px solid #34adeb;" src="https://slides.com/deckart/seo4dev/embed?byline=hidden&share=hidden" width="576" height="420" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
          <img alt="SMX Advanced Logo" style="position: relative; top: 355px; float: left; width: 100px;" width="484" height:"186" src="/smx.jpg">
        </section>
      ` + aside + `
      </article>
    </main>
    ` + footer + `
  </body>
</html>`;
