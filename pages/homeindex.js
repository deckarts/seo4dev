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
    <link rel="preconnect" href="https://via.placeholder.com">
    <link rel="prefetch" href="/smx-report/" as="document">
    <link rel="prefetch" href="/smx-advanced/" as="document">
    <link rel="prefetch" href="/schedule/" as="document">
    <link rel="manifest" href="manifest.json">
    <link rel="apple-touch-icon" href="https://via.placeholder.com/192">` +
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
          <h2>Announcements</h2>
          <p>TODO: As per request I will figure out how to get my dotfiles published in a Github repo for those who want them. You know who you are! :-)
          <p>I am waiting on pending panel appearance on Core Web Vitals performance optimization techniques at PubCon Pro Las Vegas (possibly in-person) November.</p>
          <p>Stay tuned for news about SMX Build in December.</p>
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
