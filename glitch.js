// pixelate filters used by the glitch-in animation in style.css
(function () {
  var sizes = [2];
  var filters = sizes.map(function (s) {
    return (
      '<filter id="px-' + s + '" x="0" y="0" width="100%" height="100%">' +
        '<feFlood x="' + s / 2 + '" y="' + s / 2 + '" width="1" height="1"/>' +
        '<feComposite width="' + s + '" height="' + s + '"/>' +
        '<feTile result="grid"/>' +
        '<feComposite in="SourceGraphic" in2="grid" operator="in"/>' +
        '<feMorphology operator="dilate" radius="' + s / 2 + '"/>' +
      '</filter>'
    );
  }).join("");

  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "0");
  svg.setAttribute("height", "0");
  svg.setAttribute("aria-hidden", "true");
  svg.style.position = "absolute";
  svg.innerHTML = filters;
  document.body.prepend(svg);
})();
