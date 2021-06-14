import { navigation } from './components/navigation';
import { aside      } from './components/aside';
import { footer     } from './components/footer';

export const indexHtml =
`<!DOCTYPE html>
<html lang="en-us">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
    <title>SEO for Developers by Detlef Johnson</title>
    <meta name="description" content="SMX Advanced 2021: SEO for Developers series workshop by Detlef Johnson">
    <meta name="keywords" content="seo for developers, smx, smx advanced, smx advanced workshop">
    <meta name="theme-color" content="lightgreen">
    <link rel="manifest" href="manifest.json">
    <link rel="apple-touch-icon" href="https://via.placeholder.com/192">
    <script src="script.js" defer></script>
    <style>.skip-link { position: absolute; top: -40px; left: 0; background: #000000; color: white; padding: 8px; z-index: 100; } .skip-link:focus { top: 0; }</style>
  </head>
  <body>
    <a class="skip-link" href="#main">Skip to main</a>
    <header>
      <nav>` + navigation + `</nav>
    </header>
    <main id="main">
      <h1>SEO for Developers</h1>
      <article>
        <section>
          <h1>Workshop Announcements</h1>
          <p>The next workshop is Thursday and Friday June 17th and 18th.</p>
        </section>
      ` + aside + `
      </article>
    </main>
    ` + footer + `
  </body>
</html>`;
