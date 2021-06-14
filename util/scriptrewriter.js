export const scriptRewriter = {
  element(element) {
    const script_src = element.getAttribute("src");
    const script_type = element.getAttribute("type");
    if (script_type) {
      element.removeAttribute("type");
    }
    const add_async = ["/global.js"];
    const add_defer = ["/blogcomments.js"];
    if (add_async.includes(script_src)) {
      //element.setAttribute("async", "");
    } else if (add_defer.includes(script_src)) {
      //element.setAttribute("defer", "");
    }
  }
};
