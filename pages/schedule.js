import { navigation } from "./components/navigation";
import { criticalInlineStyle } from "./components/criticalinlinestyle";
import { aside } from "./components/aside";
import { footer } from "./components/footer";

export const scheduleHtml = `<!DOCTYPE html>
<html lang="en-us">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0">
    <title>SMX Event Workshop Schedule</title>
    <meta name="description" content="Schedule of SMX Events with SEO for Developers Workshops planned.">
    <meta name="keywords" content="seo for developers, smx, smx advanced, smx advanced workshop">
    <link rel="prefetch" href="/" as="document">
    <link rel="prefetch" href="/smx-report/" as="document">
    <link rel="prefetch" href="/smx-advanced/" as="document">` +
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
      <h1>Conference Appearance Schedule</h1>
      <article>
        <h2>Workshops 2021</h2>
        <h3>SMX Next</h3>
        <p>November 9th and 10th (Virtual)*</p>
        <h3>SMX Build</h3>
        <p>December 14th (Virtual)*</p>
        <strong>*Pending.</strong>
      </article>
      <article>
        <h2>Panel Appearance</h2>
        <h3>PubCon Pro</h3>
        <p>Late November (Las Vegas)*</p>
        <strong>*Pending.</strong>
      </article>
      <article>
        <h2>Past Workshop Events</h2>
        <h3>SMX Advanced</h3>
        <p>Our latest workshop was held June 17th and 18th and included a "Birds of a Feather" agency / developer communications session.</p>
        <h3>SMX Report</h3>
        <p>Our debut workshop! It was held February 24th and 25th, 2021. We got enough positive feedback to hold another one.</p>
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
