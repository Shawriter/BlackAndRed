(function() {


  function varinMuutosBlok(viesti) {


    /*if (window.hasRun) {
      return;
    }
    window.hasRun = true;*/

    let tagit = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base",
      "basefont", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "center",
      "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog",
      "dir", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "font", "footer", "form",
      "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html",
      "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "link", "main", "map", "mark",
      "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture",
      "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "small", "source", "span",
      "strike", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea",
      "tfoot", "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "video", "wbr"
    ];

    

    function domLoaded(tagit) {
      document.addEventListener("DOMContentLoaded", tagLooppi(tagit));
    }


    domLoaded(tagit);


    function tagLooppi(tags) {

      for (let a in tags) {


        varinMuuttaja(document.getElementsByTagName(tags[a]));

      }

    }


    function varinMuuttaja(vari) {

      let pituus = vari.length;
      for (let i = 0; i < pituus; i++) {
        if (viesti.command === "darken") {
          vari[i].style.backgroundColor = "#2b2a33";
          vari[i].style.fontSize = "15px";
          vari[i].style.fontStyle = "optima";
          vari[i].style.color = "#7b3737";
        }
        if (viesti.command === "lighten") {
          vari[i].style.backgroundColor = "#ffffff";
          vari[i].style.fontSize = "15px";
          vari[i].style.fontStyle = "optima";
          vari[i].style.color = "#000000";
        }

      }

    }



  }
  browser.runtime.onMessage.addListener((message) => {
    if (message.command === "darken" || "lighten") {
      varinMuutosBlok(message);
    }
  });
})();
