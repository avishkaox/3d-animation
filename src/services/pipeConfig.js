import * as THREE from "three";

// for my perferrence
// vector values -
/*
- x: left-right this is the horizontal axis( positive is right, negative is left)
- y: up-down  this is the vertical axis
- z: depth (forward-backward)
*/
export const curvesArray = [
  new THREE.CatmullRomCurve3([
    new THREE.Vector3(-20, 0, 0),
    new THREE.Vector3(-10, 0, 0),
    new THREE.Vector3(-3, -3, 0),
    new THREE.Vector3(0, 0, 0),
  ]),
  new THREE.CatmullRomCurve3([
    new THREE.Vector3(-40, 8, -9),
    new THREE.Vector3(-10, 0, -6),
    new THREE.Vector3(-3, -3, -4),
    new THREE.Vector3(0, 0, 0),
  ]),
  new THREE.CatmullRomCurve3([
    new THREE.Vector3(-40, -3, -4),
    new THREE.Vector3(-10, -5, -2),
    new THREE.Vector3(-3, -3, -1),
    new THREE.Vector3(0, 0, 0),
  ]),

  new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(5, -3, 0),
    new THREE.Vector3(7, -2, 0),
    new THREE.Vector3(10, -2, 0),
  ]),
  new THREE.CatmullRomCurve3([
    new THREE.Vector3(10, -2, 0),
    new THREE.Vector3(14, 8, 0),
    new THREE.Vector3(18, 6, 0),
    new THREE.Vector3(20, 5, 0),
  ]),
  new THREE.CatmullRomCurve3([
    new THREE.Vector3(10, -2, 0),
    new THREE.Vector3(13, 4, 5),
    new THREE.Vector3(15, 6, 9),
  ]),

  new THREE.CatmullRomCurve3([
    new THREE.Vector3(10, -2, 0),
    new THREE.Vector3(13, 4, -5),
    new THREE.Vector3(18, 6, -9),
    new THREE.Vector3(20, 5, -12),
    new THREE.Vector3(30, 6, -22),
    new THREE.Vector3(50, 5, -30),
  ]),
  new THREE.CatmullRomCurve3([
    new THREE.Vector3(-20, 15, -5),
    new THREE.Vector3(-10, 8, -3),
    new THREE.Vector3(-5, 3, -1),
    new THREE.Vector3(0, 0, 0),
  ]),
  new THREE.CatmullRomCurve3([
    new THREE.Vector3(-25, 20, -10),
    new THREE.Vector3(-15, 12, -6),
    new THREE.Vector3(-8, 5, -3),
    new THREE.Vector3(0, 0, 0),
  ]),
  new THREE.CatmullRomCurve3([
    new THREE.Vector3(-15, 10, 5),
    new THREE.Vector3(-10, 6, 3),
    new THREE.Vector3(-5, 3, 1),
    new THREE.Vector3(0, 0, 0),
  ]),

  // Right output pipes spreading in a fan pattern
  new THREE.CatmullRomCurve3([
    new THREE.Vector3(4, 0, 0),
    new THREE.Vector3(5, 3, 2),
    new THREE.Vector3(10, 8, 4),
    new THREE.Vector3(15, 15, 6),
  ]),
  new THREE.CatmullRomCurve3([
    new THREE.Vector3(4, 0, 0),
    new THREE.Vector3(6, 2, 0),
    new THREE.Vector3(12, 4, 0),
    new THREE.Vector3(18, 6, 0),
  ]),
  new THREE.CatmullRomCurve3([
    new THREE.Vector3(4, 0, 0),
    new THREE.Vector3(5, -2, -2),
    new THREE.Vector3(10, -4, -4),
    new THREE.Vector3(15, -6, -6),
    new THREE.Vector3(20, -8, -8),
    new THREE.Vector3(25, -10, -10),
    new THREE.Vector3(30, -12, -12),
    new THREE.Vector3(35, -14, -14),
  ]),

  new THREE.CatmullRomCurve3([
    new THREE.Vector3(4, 0, 0),
    new THREE.Vector3(2, -5, 2),
    new THREE.Vector3(3, -10, 4),
    new THREE.Vector3(4, -15, 6),
  ]),
  new THREE.CatmullRomCurve3([
    new THREE.Vector3(4, 0, 0),
    new THREE.Vector3(-2, -5, -2),
    new THREE.Vector3(-3, -10, -4),
    new THREE.Vector3(-4, -15, -6),
  ]),
  new THREE.CatmullRomCurve3([
    new THREE.Vector3(4, 0, 0),
    new THREE.Vector3(2, 5, -2),
    new THREE.Vector3(3, 10, -4),
    new THREE.Vector3(4, 15, -6),
  ]),
  new THREE.CatmullRomCurve3([
    new THREE.Vector3(4, 0, 0),
    new THREE.Vector3(-2, 5, 2),
    new THREE.Vector3(-3, 10, 4),
    new THREE.Vector3(-4, 15, 6),
  ]),

  new THREE.CatmullRomCurve3([
    new THREE.Vector3(4, 0, 0),
    new THREE.Vector3(2, -5, 2),
    new THREE.Vector3(3, -10, 4),
    new THREE.Vector3(4, -15, 6),
  ]),
  new THREE.CatmullRomCurve3([
    new THREE.Vector3(-14, 10, 0),
    new THREE.Vector3(-2, -5, 2),
    new THREE.Vector3(-3, -10, 4),
    new THREE.Vector3(-4, -15, 9),
  ]),
  new THREE.CatmullRomCurve3([
    new THREE.Vector3(-14, 10, 0),
    new THREE.Vector3(-2, 5, -2),
    new THREE.Vector3(-3, 10, -4),
    new THREE.Vector3(-4, 15, -9),
  ]),
  new THREE.CatmullRomCurve3([
    new THREE.Vector3(-14, 10, 0),
    new THREE.Vector3(2, 5, -2),
    new THREE.Vector3(3, 10, -4),
    new THREE.Vector3(4, 15, -9),
  ]),
  new THREE.CatmullRomCurve3([
  new THREE.Vector3(0, 0, 0),
  new THREE.Vector3(5, 5, 5),
  new THREE.Vector3(10, 10, 0),
  new THREE.Vector3(15, 5, -5),
  new THREE.Vector3(20, 0, 0),
]),

// Looping pipe
new THREE.CatmullRomCurve3([
  new THREE.Vector3(0, 0, 0),
  new THREE.Vector3(0, 10, 10),
  new THREE.Vector3(0, 20, 0),
  new THREE.Vector3(0, 10, -10),
  new THREE.Vector3(0, 0, 0),
]),

// Zigzag pipe
new THREE.CatmullRomCurve3([
  new THREE.Vector3(-10, 0, 0),
  new THREE.Vector3(-5, 5, 5),
  new THREE.Vector3(0, 0, 10),
  new THREE.Vector3(5, -5, 5),
  new THREE.Vector3(10, 0, 0),
]),

// Cross-connecting pipe
new THREE.CatmullRomCurve3([
  new THREE.Vector3(-20, 10, 10),
  new THREE.Vector3(0, 0, 0),
  new THREE.Vector3(20, -10, -10),
]),

// S-curve
new THREE.CatmullRomCurve3([
  new THREE.Vector3(-15, -10, 0),
  new THREE.Vector3(-5, 0, 10),
  new THREE.Vector3(5, 0, -10),
  new THREE.Vector3(15, 10, 0),
]),

// Large arc
new THREE.CatmullRomCurve3([
  new THREE.Vector3(-30, 0, 0),
  new THREE.Vector3(-15, 15, 15),
  new THREE.Vector3(15, 15, -15),
  new THREE.Vector3(30, 0, 0),
]),

// Small loop
new THREE.CatmullRomCurve3([
  new THREE.Vector3(5, 5, 5),
  new THREE.Vector3(7, 7, 7),
  new THREE.Vector3(5, 9, 5),
  new THREE.Vector3(3, 7, 3),
  new THREE.Vector3(5, 5, 5),
]),
];

export const thicknessesArray = Array(28).fill(0.04);

export const colorsArray = Array(28).fill("#1400a3");

export const opacityArray = Array(28).fill(0.5);

export const signalsArray = [
  { id: 1, curveIndex: 0, t: 0.1 },
  { id: 2, curveIndex: 1, t: 0.3 },
  { id: 3, curveIndex: 2, t: 0.6 },
  { id: 4, curveIndex: 3, t: 0.8 },
  { id: 5, curveIndex: 4, t: 0.3 },
  { id: 6, curveIndex: 5, t: 0.4 },
  { id: 7, curveIndex: 6, t: 0.7 },
  { id: 8, curveIndex: 7, t: 0.5 },
  { id: 9, curveIndex: 8, t: 0.9 },
  { id: 10, curveIndex: 9, t: 0.3 },
  { id: 11, curveIndex: 10, t: 0.6 },
  { id: 12, curveIndex: 11, t: 0.2 },
  { id: 13, curveIndex: 12, t: 0.8 },
  { id: 14, curveIndex: 13, t: 0.4 },
  { id: 15, curveIndex: 14, t: 0.4 },
  { id: 16, curveIndex: 15, t: 0.9 },
  { id: 17, curveIndex: 16, t: 0.7 },
  { id: 18, curveIndex: 17, t: 0.5 },
  { id: 19, curveIndex: 18, t: 0.3 },
  { id: 20, curveIndex: 19, t: 0.1 },
  { id: 21, curveIndex: 20, t: 0.2 },
  { id: 22, curveIndex: 21, t: 0.4 },
  { id: 23, curveIndex: 22, t: 0.6 },
  { id: 24, curveIndex: 23, t: 0.8 },
  { id: 25, curveIndex: 24, t: 0.2 },
  { id: 26, curveIndex: 25, t: 0.4 },
  { id: 27, curveIndex: 26, t: 0.6 },

];
