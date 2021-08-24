import { navigation } from "./components/navigation";
import { criticalInlineStyle } from "./components/criticalinlinestyle";
import { aside } from "./components/aside";
import { footer } from "./components/footer";

export const hireHtml = `<!DOCTYPE html>
<html lang="en-us">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0">
    <title>Hire Detlef Johnson</title>
    <meta name="description" content="Hire Detlef Johnson to give a Core Web Vitals workshop to your team, to present to your developers, or to optimize through a proxy service without the need for your developers to get involved.">
    <meta name="keywords" content="seo for developers, smx, smx advanced, smx advanced workshop">
    <link rel="prefetch" href="/" as="document">` +
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
      <h1>Hire Detlef Johnson</h1>
      <article>
          <h2>Core Web Vitals Service</h2>
          <p>You can retain me for optimization exclusively by proxy through my employer <a title="Internet Marketing Ninjas" href="https://www.internetmarketingninjas.com/">Internet Marketing Ninjas</a> to improve your performance scores for Google without the need to involve your developers. A working cloudflare account is required for service and Business level or better is recommended although the free tier can suffice.</p>
          <h2>Workshops</h2>
          <p>Workshops are available onsite or through remote connectivity via zoom or similar platform like how workshops are done at the SMX conference series. I do not offer exactly what is proprietary to SEO for Developers, privately, but can provide an extra emphasis on Core Web Vitals for performance improvement. You can request a special Workshop topic or agenda. References are available upon request.</p>
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
