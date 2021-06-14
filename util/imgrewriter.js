export const imgRewriter = {
  element(element) {
    const img_alt = element.getAttribute("alt");
    const img_src = element.getAttribute("src");
    if (!img_alt) {
      element.setAttribute("alt", "spacer image");
    }
    if (img_src.startsWith("/")) {
      element.setAttribute(
        "src",
        "https://internetmarketingninjas.com" + img_src
      );
      element.setAttribute("loading", "lazy");
    } else if (img_src.startsWith("../")) {
      element.setAttribute(
        "src",
        "https://internetmarketingninjas.com/" + img_src
      );
      element.setAttribute("loading", "lazy");
    }
  }
};
