const portrait = document.querySelector<HTMLDivElement>("#portrait")!;
const spin = document.querySelector<HTMLButtonElement>("#spin")!;

// @deno-types="./asset-url.d.ts"
import hatUrl from "./assets/hat.png?no-inline";
// @deno-types="./asset-url.d.ts"
import monocleUrl from "./assets/monocle.png?no-inline";

// The prototype grew inline. Keep it this way until the refactoring checkpoint.
const face = document.createElementNS("http://www.w3.org/2000/svg", "svg");
face.setAttribute("viewBox", "0 0 200 200");
face.setAttribute("role", "img");
face.setAttribute("aria-label", "A fancy face with a top hat and monocle");

const head = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
head.setAttribute("cx", "100");
head.setAttribute("cy", "100");
head.setAttribute("rx", "78");
head.setAttribute("ry", "86");
head.setAttribute("fill", "#f3cf87");
head.setAttribute("stroke", "#302c29");
head.setAttribute("stroke-width", "4");
face.append(head);

const leftEye = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "ellipse",
);
leftEye.setAttribute("cx", "72");
leftEye.setAttribute("cy", "82");
leftEye.setAttribute("rx", "6");
leftEye.setAttribute("ry", "9");
leftEye.setAttribute("fill", "#302c29");
face.append(leftEye);

const rightEye = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "ellipse",
);
rightEye.setAttribute("cx", "128");
rightEye.setAttribute("cy", "82");
rightEye.setAttribute("rx", "6");
rightEye.setAttribute("ry", "9");
rightEye.setAttribute("fill", "#302c29");
face.append(rightEye);

const nose = document.createElementNS("http://www.w3.org/2000/svg", "line");
nose.setAttribute("x1", "100");
nose.setAttribute("y1", "96");
nose.setAttribute("x2", "96");
nose.setAttribute("y2", "112");
nose.setAttribute("stroke", "#302c29");
nose.setAttribute("stroke-width", "4");
nose.setAttribute("stroke-linecap", "round");
face.append(nose);

const mouth = document.createElementNS("http://www.w3.org/2000/svg", "line");
mouth.setAttribute("x1", "75");
mouth.setAttribute("y1", "137");
mouth.setAttribute("x2", "125");
mouth.setAttribute("y2", "137");
mouth.setAttribute("stroke", "#302c29");
mouth.setAttribute("stroke-width", "4");
mouth.setAttribute("stroke-linecap", "round");
face.append(mouth);

// File name: hat.png
// Source URL: https://freesvg.org/top-hat
// Creator: OpenClipart
//License or permission: Public Domain
const hatImg = document.createElementNS("http://www.w3.org/2000/svg", "image");
hatImg.setAttribute("href", hatUrl);
hatImg.setAttribute("x", "50");
hatImg.setAttribute("y", "-2");
hatImg.setAttribute("width", "50");
hatImg.setAttribute("height", "50");
face.append(hatImg);

// File name: monocle.png
// Source URL: https://www.clipsafari.com/clips/o172605-a-monocle
// Creator: Merlin2525
// License or permission: CC0
const monocleImg = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "image",
);
monocleImg.setAttribute("href", monocleUrl);
monocleImg.setAttribute("x", "85");
monocleImg.setAttribute("y", "67");
monocleImg.setAttribute("width", "100");
monocleImg.setAttribute("height", "100");
face.append(monocleImg);

portrait.append(face);

spin.addEventListener("click", () => {
  // Restart rather than accumulate simultaneous animations on repeated clicks.
  for (const animation of face.getAnimations()) animation.cancel();
  face.animate(
    [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
    { duration: 800, easing: "ease-in-out" },
  );
});
