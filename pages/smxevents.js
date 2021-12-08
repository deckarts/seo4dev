import { navigation } from "./components/navigation";
import { criticalInlineStyle } from "./components/criticalinlinestyle";
import { aside } from "./components/aside";
import { footer } from "./components/footer";

export const smxReportHtml = `<!DOCTYPE html>
<html lang="en-us">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
    <title>SMX Report 2021: SEO for Developers Workshop</title>
    <meta name="description" content="SMX Report 2021: SEO for Developers workshop by Detlef Johnson.">
    <meta name="keywords" content="seo for developers, smx, smx advanced, smx advanced workshop">
    <link rel="preconnect" href="https://slides.com">
    <link rel="prefetch" href="/" as="document">
    <link rel="prefetch" href="/schedule/" as="document">
    <link rel="stylesheet" href="https://seo4.dev/style.css">
  </head>
  <body>
    <a class="skip-link" href="#main">Skip to main</a>
    <header>
      <nav>` +
  navigation +
  `</nav>
    </header>
    <main id="main">
      <h1>SMX Report</h1>
      <article style="min-height: 500px;">
        <h2>Presentation February 24th &amp; 25th</h2>
        <iframe title="SEO for Developers Presentation" style="position:relative; left:25px; border-top:10px solid #34adeb;" src="https://slides.com/deckart/seo-for-developers-feb-2021/embed?byline=hidden&share=hidden" width="576" height="420" allowfullscreen></iframe>
        <p><img alt="SMX Advanced Logo" style="width:100px; height:auto;" width="484" height="186" src="/smx.jpg"></p>
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

export const smxAdvHtml = `<!DOCTYPE html>
<html lang="en-us">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
    <title>SMX Advanced 2021: SEO for Developers Workshop</title>
    <meta name="description" content="SMX Advanced 2021: SEO for Developers workshop by Detlef Johnson.">
    <meta name="keywords" content="seo for developers, smx, smx advanced, smx advanced workshop">
    <link rel="preconnect" href="https://slides.com">
    <link rel="prefetch" href="/" as="document">
    <link rel="prefetch" href="/schedule/" as="document">` +
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
      <h1>SMX Advanced</h1>
      <article style="min-height: 500px;">
        <h2>Presentation June 17th &amp; 18th</h2>
        <iframe title="SEO for Developers Presentation" style="position:relative; left:25px; border-top:10px solid #34adeb;" src="https://slides.com/deckart/seo-for-developers-jun-2021/embed?byline=hidden&share=hidden" width="576" height="420" allowfullscreen></iframe>
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

export const smxNextHtml = `<!DOCTYPE html>
<html lang="en-us">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
    <title>SMX Next 2021: SEO for Developers Workshop</title>
    <meta name="description" content="SMX Next 2021: SEO for Developers workshop by Detlef Johnson.">
    <meta name="keywords" content="seo for developers, smx, smx advanced, smx advanced workshop">
    <link rel="prefetch" href="/" as="document">
    <link rel="prefetch" href="/schedule/" as="document">` +
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
      <h1>SMX Next</h1>
      <article style="min-height: 500px;">
        <h2>November 9th &amp; 10th</h2>
        <p><img alt="SMX Advanced Logo" style="width:100px; height:auto;" width="484" height="186" src="/smx.jpg"></p>
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

export const smxCodeHtml = `<!DOCTYPE html>
<html lang="en-us">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
    <title>SMX Code 2021: SEO for Developers Workshop</title>
    <meta name="description" content="SMX Code 2021: SEO for Developers workshop by Detlef Johnson.">
    <meta name="keywords" content="seo for developers, smx, smx advanced, smx advanced workshop">
    <link rel="prefetch" href="/" as="document">
    <link rel="prefetch" href="/schedule/" as="document">` +
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
      <h1>SMX Code</h1>
      <article style="min-height: 500px;">
        <h2>December 14th</h2>
        <p><img alt="SMX Advanced Logo" style="width:100px; height:auto;" width="484" height="186" src="/smx.jpg"></p>
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
