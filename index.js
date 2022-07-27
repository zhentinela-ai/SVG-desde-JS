function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

/** @type SVGElement */
var SVGContainerDOMEL = document.getElementById("svg-container");

var w = window.innerWidth;
var h = window.innerHeight;
var w2 = w / 2;
var h2 = h / 2;

const PI = Math.PI;
var PI_DOUBLE = PI * 2;
var PI_HALF = PI / 2;

SVGContainerDOMEL.setAttribute("height", window.innerHeight);
SVGContainerDOMEL.setAttribute("width", window.innerWidth);

const NS = "http://www.w3.org/2000/svg";

const GMODEL = document.createElementNS(NS, "g");
const circleMODEL1 = document.createElementNS(NS, "circle");

const radius = 200;

for (let i = 1; i < 20; i += 1) {
  for (let j = 0; j < 20; j++) {
    const circleDOMEL = document.createElementNS(NS, "circle");
    // const circleDOMEL = document.createElementNS(NS, "ellipse");

    if (j % 2) {
      circleDOMEL.setAttribute("cx", i * 450);
      // circleDOMEL.setAttribute("rx", radius / 3);
      // circleDOMEL.setAttribute("ry", radius);
      circleDOMEL.setAttribute("r", radius);
      circleDOMEL.style.fill = `rgba(${randomInt(100, 255)}, 0, 0, 1)`;
      // circleDOMEL.style.transform = `scale(${randomFloat(0.25, 1)})`;
    } else {
      circleDOMEL.setAttribute("cx", i * 450 + radius);
      // circleDOMEL.setAttribute("rx", radius / 2);
      // circleDOMEL.setAttribute("ry", radius / 4);
      circleDOMEL.setAttribute("r", radius / 2);
      circleDOMEL.style.fill = "white";
      // circleDOMEL.style.transform = `scale(${randomFloat(0.5, 1)})`;
    }

    circleDOMEL.style.transformOrigin = "center";
    // circleDOMEL.style.fill = "white";

    circleDOMEL.setAttribute("cy", j * 450);

    GMODEL.appendChild(circleDOMEL);
  }
}

SVGContainerDOMEL.appendChild(GMODEL);
