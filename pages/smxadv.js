import { navigation } from "./components/navigation";
import { criticalInlineStyle } from "./components/criticalinlinestyle";
import { aside } from "./components/aside";
import { footer } from "./components/footer";

export const smxadvHtml = `<!DOCTYPE html>
<html lang="en-us">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
    <title>SMX Advanced 2021: Web Platform Workshop by Detlef Johnson</title>
    <meta name="description" content="SMX Advanced 2021: SEO for Developers series workshop by Detlef Johnson to be held in a virtual envoironment until such a time we can produce conferences in person once again.">
    <meta name="keywords" content="seo for developers, smx, smx advanced, smx advanced workshop">` +
  criticalInlineStyle +
  `
  </head>
  <body>
    <a class="skip-link" href="#main">Skip to main</a>
    <header>
      <nav>` +
  navigation +
  `</nav>
    </header>
    <main id="main">
      <h1>Presentations</h1>
      <article style="min-height: 500px;">
        <h2>SMX Advanced (June 17th, 18th)</h2>
        <iframe title="SEO for Developers Presentation" style="position:relative; left:25px; border-top:10px solid #34adeb; z-index:1;" src="https://slides.com/deckart/seo-for-developers-jun-2021/embed?byline=hidden&share=hidden" width="576" height="420" allowfullscreen></iframe>
        <p><img alt="SMX Advanced Logo" style="width:100px; height:auto;" width="484" height="186" src="/smx.jpg"> <a title="SEO for Developers SMX Workshop PDF" rel="noopener" target="_blank" href="https://searchreturn.com/seo4dev.pdf">PDF</a></p>
      </article>
      <section>
        <h2>About</h2>
      ` +
  aside +
  `
      </section>
    </main>
    ` +
  footer +
  `
  </body>
</html>`;
