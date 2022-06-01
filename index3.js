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
