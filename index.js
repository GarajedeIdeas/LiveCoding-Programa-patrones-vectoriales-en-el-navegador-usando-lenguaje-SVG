// Dani Vicario - index experiment (svg) - Tue May 31 23:26:44 CEST 2022
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

var w = window.innerWidth;
var h = window.innerHeight;
var w2 = w / 2;
var h2 = h / 2;

var PI = Math.PI;
var PI_DOUBLE = 2 * Math.PI;
var PI_HALF = Math.PI / 2;
var xmlns = "http://www.w3.org/2000/svg";

async function test() {
  icon_svg = await axios({
    url: "http://127.0.0.1:8080/vectors/rose.svg",
    method: "GET",
    responseType: "text/plain"
  });

  //   debugger;

  const container = document.body.querySelector("#container");

  new Array(10).fill().forEach((_, idx) => {
    const node = document.createElementNS(xmlns, "g");

    node.innerHTML = icon_svg.data;
    const x = node.childNodes[4].outerHTML;
    node.innerHTML = x;

    node.setAttribute("width", 100);
    node.setAttribute("height", 100);
    node.style.fill = "green";
    node.setAttribute("transform", `scale(0.5), translate(${randomInt(0, w)}, ${randomInt(0, w)})`);

    container.appendChild(node);

    setTimeout(() => {
      node.setAttribute(
        "transform",
        `scale(0.1), translate(${randomInt(0, w)}, ${randomInt(0, w)})`
      );
    }, randomInt(100, 1000));
  });
}

test();
