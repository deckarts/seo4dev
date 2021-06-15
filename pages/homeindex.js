import { navigation } from "./components/navigation";
import { aside } from "./components/aside";
import { footer } from "./components/footer";

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
    <!--<link rel="stylesheet" href="https://seo4.dev/style.css" defer>-->
    <script src="script.js" defer></script>
    <style>.skip-link { position:absolute; top:-40px; left:0; background:#000000; color:white; padding:8px; z-index:100; } .skip-link:focus { top:0; }</style>
    <style>article { padding:5px; border:none; margin-top:5px; } header { padding:0px; text-align:center; } aside { margin-top:5px; background-color:#f0eaea; padding:5px; text-align:center; font-style:italic; border:double 3px #b200ff; } section { padding:5px; border:none; margin-top:5px; } footer { padding:5px; text-align:center; font-weight:bold; } nav { text-align:center; }</style>
    <!--<style>section { border:dashed 3px #0026ff; } article { border:dotted 3px #ff006e; }</style>-->
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
          <h2>Workshop Announcements</h2>
          <p>The next workshop is Thursday and Friday June 17th and 18th.</p>
          <p>Join us for the "Birds of a Feather" agency / developer communications session which will be run as a particiapatory live discussion.</p>
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
