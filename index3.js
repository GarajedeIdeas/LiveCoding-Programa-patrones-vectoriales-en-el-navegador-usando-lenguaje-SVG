// Dani Vicario - index3 experiment (svg) - Wed 1 Jun 2022 18:29:53 CEST
function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** @type SVGElement */
var SVGContainerDOMEl = document.getElementById("svgContainer");

var w = window.innerWidth;
var h = window.innerHeight;
var w2 = w / 2;
var h2 = h / 2;

var PI = Math.PI;
var PI_DOUBLE = 2 * Math.PI;
var PI_HALF = Math.PI / 2;

SVGContainerDOMEl.setAttribute("height", window.innerHeight);
SVGContainerDOMEl.setAttribute("width", window.innerWidth);

const NS = "http://www.w3.org/2000/svg";

const GDOMEl = document.createElementNS(NS, "g");

const radius = 200;

/* <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="100" cy="50" rx="100" ry="50" />
</svg> */

for (let x = 1; x < 20; x += 1) {
  for (let y = 0; y < 20; y++) {
    const circleDOMEl = document.createElementNS(NS, "circle");
    // const circleDOMEl = document.createElementNS(NS, "ellipse");

    if (y % 2) {
      circleDOMEl.setAttribute("cx", x * (radius * 2 + 50));
      circleDOMEl.setAttribute("r", radius);
      // circleDOMEl.setAttribute("rx", radius);
      // circleDOMEl.setAttribute("ry", 100);
      circleDOMEl.style.fill = `rgba(${randomInt(100, 255)}, 0, 0, 1)`;
      // circleDOMEl.style.transform = `scale(${randomFloat(0.25, 1)})`;
    } else {
      circleDOMEl.setAttribute("cx", x * (radius * 2 + 25) + radius / 2);
      circleDOMEl.setAttribute("r", radius / 2);
      // circleDOMEl.setAttribute("rx", radius / 2);
      // circleDOMEl.setAttribute("ry", 30);
      // circleDOMEl.style.fill = "green";
      // circleDOMEl.style.transform = `scale(${randomFloat(0.25, 1)})`;
      circleDOMEl.style.fill = "white";
    }

    circleDOMEl.style.transformOrigin = `center`;

    circleDOMEl.setAttribute("cy", y * radius * 2);

    GDOMEl.appendChild(circleDOMEl);
  }
}

SVGContainerDOMEl.appendChild(GDOMEl);
