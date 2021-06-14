export const aRewriter = {
  element(element) {
    const a_rel = element.getAttribute("rel");
    const a_href = element.getAttribute("href");
    const a_target = element.getAttribute("target");
    if (!a_href) {
      element.setAttribute("href", "/");
    }
    if (!a_rel && a_target == "_blank") {
      element.setAttribute("rel", "noopener");
    } else if (a_target == "_blank") {
      element.setAttribute("rel", "noopener " + a_rel);
    }
  }
};
