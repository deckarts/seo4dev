export const scriptRewriter = {
  element(element) {
    const script_type = element.getAttribute("type");
    if (script_type) {
      if (!/ld\+json/.test(script_type)) {
        element.removeAttribute("type");
      }
    }
    const script_src = element.getAttribute("src");
    const add_async = ["/global.js"];
    const add_defer = ["/blogcomments.js"];
    if (script_src && script_src.startsWith("/javascripts/")) {
      element.setAttribute(
        "src",
        "https://internetmarketingninjas.com" + script_src
      );
    } else if (script_src && script_src.startsWith("/scripts/")) {
      element.setAttribute(
        "src",
        "https://internetmarketingninjas.com" + script_src
      );
    }
    if (add_async.includes(script_src)) {
      element.setAttribute("async", "");
    } else if (add_defer.includes(script_src)) {
      element.setAttribute("defer", "");
    }
  }
};
