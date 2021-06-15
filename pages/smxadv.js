import { navigation } from "./components/navigation";
import { aside } from "./components/aside";
import { footer } from "./components/footer";

export const smxadvHtml =
  `<!DOCTYPE html>
<html lang="en-us">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
    <title>SMX Advanced 2021: Web Platform Workshop by Detlef Johnson</title>
    <meta name="description" content="SMX Advanced 2021: SEO for Developers series workshop by Detlef Johnson to be held in a virtual envoironment until such a time we can produce conferences in person once again.">
    <meta name="keywords" content="seo for developers, smx, smx advanced, smx advanced workshop">
    <!--<link rel="stylesheet" href="https://seo4.dev/style.css">-->
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
      <h1>Presentations</h1>
      <article style="min-height: 500px;">
        <h2>SMX Advanced (June 17th, 18th)</h2>
        <img alt="SMX Advanced Placeholder" srcset="https://via.placeholder.com/289x210/000000/FFFFFF/?text=Presentation+available+June+17th 289w, https://via.placeholder.com/576x420/000000/FFFFFF/?text=Presentation+available+June+17th 576w, https://via.placeholder.com/1152x840/000000/FFFFFF/?text=Presentation+available+June+17th 1152w" sizes="576vw" width="576" height="420" src="https://via.placeholder.com/576x420/000000/FFFFFF/?text=Presentation+available+June+17th">
        <iframe title="SEO for Developers Presentaion" style="display:none; position:absolute; left:25px; border-top:10px solid #34adeb;" src="https://slides.com/deckart/seo4dev/embed?byline=hidden&share=hidden" width="576" height="420" allowfullscreen></iframe>
        <img alt="SMX Advanced Logo" style="display:none; position:relative; top:353px; float:left; width:100px;" width="484" height="186" src="/smx.jpg">
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
