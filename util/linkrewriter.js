export const linkRewriter = {
  element(element) {
    const link_href = element.getAttribute("href");
    const link_rel = element.getAttribute("rel");
    if (link_rel == "canonical") {
      element.setAttribute("href", "https://internetmarketingninjas.com");
    } else if (!link_href) {
      element.setAttribute("href", "missing-href");
      element.setAttribute("defer", "");
    } else if (link_href.startsWith("/")) {
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
