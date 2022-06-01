var maxRadius = 32, // maximum radius of circle
  padding = 1, // padding between circles; also minimum radius
  margin = { top: -maxRadius, right: -maxRadius, bottom: -maxRadius, left: -maxRadius },
  width = 960 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

var k = 1, // initial number of candidates to consider per circle
  m = 10, // initial number of circles to add per frame
  n = 2500, // remaining number of circles to add
  newCircle = bestCircleGenerator(maxRadius, padding);

// document.body
var xmlns = "http://www.w3.org/2000/svg";
const svg = document.createElementNS(xmlns, "svg");
document.body.appendChild(svg);
const GDOMEl = document.createElementNS(xmlns, "g");

svg.setAttribute("width", width);
svg.setAttribute("height", height);

svg.appendChild(GDOMEl);

for (var i = 0; i < 3000; i++) {
  var circle = newCircle(k);

  const circleDOMEl = document.createElementNS(xmlns, "circle");
  circleDOMEl.setAttribute("cx", circle[0]);
  circleDOMEl.setAttribute("cy", circle[1]);
  circle[2] > 20 ? circleDOMEl.setAttribute("r", circle[2]) : null;
  circleDOMEl.style.fillOpacity = (Math.random() + 0.5) / 2;

  GDOMEl.appendChild(circleDOMEl);
}

function bestCircleGenerator(maxRadius, padding) {
  var quadtree = d3.geom.quadtree().extent([
      [0, 0],
      [width, height]
    ])([]),
    searchRadius = maxRadius * 2,
    maxRadius2 = maxRadius * maxRadius;

  return function (k) {
    var bestX,
      bestY,
      bestDistance = 0;

    for (var i = 0; i < k || bestDistance < padding; ++i) {
      var x = Math.random() * width,
        y = Math.random() * height,
        rx1 = x - searchRadius,
        rx2 = x + searchRadius,
        ry1 = y - searchRadius,
        ry2 = y + searchRadius,
        minDistance = maxRadius; // minimum distance for this candidate

      quadtree.visit(function (quad, x1, y1, x2, y2) {
        if ((p = quad.point)) {
          var p,
            dx = x - p[0],
            dy = y - p[1],
            d2 = dx * dx + dy * dy,
            r2 = p[2] * p[2];
          if (d2 < r2) return (minDistance = 0), true; // within a circle
          var d = Math.sqrt(d2) - p[2];
          if (d < minDistance) minDistance = d;
        }
        return !minDistance || x1 > rx2 || x2 < rx1 || y1 > ry2 || y2 < ry1; // or outside search radius
      });

      if (minDistance > bestDistance) (bestX = x), (bestY = y), (bestDistance = minDistance);
    }

    var best = [bestX, bestY, bestDistance - padding];
    quadtree.add(best);
    return best;
  };
}
