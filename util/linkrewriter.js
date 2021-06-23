export const linkRewriter = {
  element(element) {
    const link_href = element.getAttribute("href");
    const link_rel = element.getAttribute("rel");
    if (link_href.startsWith("/_next")) {
      element.setAttribute(
        "href",
        "https://cf-pages-next-artzipper.pages.dev" + link_href
      );
    } else if (link_rel != "icon" && link_href.startsWith("/")) {
      element.setAttribute(
        "href",
        "https://internetmarketingninjas.com" + link_href
      );
      element.setAttribute("defer", "");
    } else {
      element.setAttribute("defer", "");
    }
  }
};
