import { navigation } from "./components/navigation";
import { criticalInlineStyle } from "./components/criticalinlinestyle";
import { aside } from "./components/aside";
import { footer } from "./components/footer";

export const indexHtml = `<!DOCTYPE html>
<html lang="en-us">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0">
    <title>SEO for Developers by Detlef Johnson</title>
    <meta name="description" content="SMX Advanced 2021: SEO for Developers series workshop by Detlef Johnson">
    <meta name="keywords" content="seo for developers, smx, smx advanced, smx advanced workshop">
    <meta name="theme-color" content="lightgreen">
    <link rel="manifest" href="manifest.json">
    <link rel="apple-touch-icon" href="https://via.placeholder.com/192">
    <link rel="prefetch" href="/2021/06/smx-adv/" as="document">` +
  criticalInlineStyle +
  `
  </head>
  <body style="max-width:650px; margin:0 auto;">
    <a class="skip-link" href="#main">Skip to main</a>
    <header>
      <nav>` +
  navigation +
  `</nav>
    </header>
    <main id="main">
      <h1>SEO for Developers</h1>
      <article>
          <h2>Workshop Announcements</h2>
          <p>The latest workshop was held June 17th and 18th and included a "Birds of a Feather" agency / developer communications session.</p>
          <p>Stay tuned for the next one!</p>
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
