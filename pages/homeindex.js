import { navigation } from "./components/navigation";
//import { criticalInlineStyle } from "./components/criticalinlinestyle";
import { aside } from "./components/aside";
import { footer } from "./components/footer";

export const indexHtml = `<!DOCTYPE html>
<html lang="en-us">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0">
    <title>SEO for Developers by Detlef Johnson</title>
    <meta name="description" content="SMX Build 2021: SEO for Developers series workshop by Detlef Johnson">
    <meta name="keywords" content="seo for developers, smx, smx advanced, smx advanced workshop">
    <meta name="theme-color" content="lightgreen">
    <link rel="prefetch" href="/smx-report/" as="document">
    <link rel="prefetch" href="/smx-advanced/" as="document">
    <link rel="prefetch" href="/schedule/" as="document">
    <link rel="manifest" href="/manifest.json">
    <link rel="apple-touch-icon" href="/images/192x192.png">
    <link rel="stylesheet" href="/style.css">

    <script type="module">
      //console warning explanation:
      //https://stackoverflow.com/questions/61205390/when-adding-a-javascript-library-chrome-complains-about-a-missing-source-map-w
      import 'https://cdn.jsdelivr.net/npm/@pwabuilder/pwaupdate';
      const el = document.createElement('pwa-update');
      document.body.appendChild(el);
    </script>
  </head>
  <body>
    <a class="skip-link" href="#main">Skip to main</a>
    <header>
      <nav>` +
  navigation +
  `</nav>
    </header>
    <main id="main">
      <h1>SEO for Developers</h1>
      <article>
          <h2>Announcements</h2>
          <p>Tune into <a rel="noopener" href="https://marketinglandevents.com/smx/build/">SMX Build December 14th</a>!</p>
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
