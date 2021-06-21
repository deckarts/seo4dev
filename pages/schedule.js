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
      <h1>Workshop Schedule</h1>
      <article>
        <h2>PubCon 2021</h2>
        <h3>PubCon Pro Florida</h3>
        <p>August 3rd, 4th, &amp; 5th*</p>
      </article>
      <article>
        <h2>SMX Workshops 2021</h2>
        <h3>SMX Next</h3>
        <p>November 9th and 10th*</p>
        <h3>SMX Code</h3>
        <p>December 14th*</p>
        <strong>*TBD: Participation is pending.</strong>
      </article>
      <article>
        <h2>Archive of Past Events</h2>
        <h3>SMX Advanced</h3>
        <p>Our <a title="Latest SMX Workshop" href="/smx-advanced/">latest workshop</a> was held June 17th and 18th and included a "Birds of a Feather" agency / developer communications session.</p>
        <h3>SMX Report</h3>
        <p><a title="SMX Report Workshop" href="/smx-report/">Our debut workshop</a>! It was held February 24th and 25th, 2021. We got enough positive feedback to hold another one.</p>
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
