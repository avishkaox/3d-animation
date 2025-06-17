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
    new THREE.Vector3(-2, 3, -1),
    new THREE.Vector3(-1, 2, 0),
    new THREE.Vector3(-4, 0, 15),
    new THREE.Vector3(-9, 0, 20),
    new THREE.Vector3(-12, 0, 25),
    new THREE.Vector3(-18, 0, 35),
    // new THREE.Vector3(0, 0, 0),
  ]),
  new THREE.CatmullRomCurve3([
    new THREE.Vector3(-25, 20, -10),
    new THREE.Vector3(-15, 12, -6),
    new THREE.Vector3(-8, 5, -3),
    new THREE.Vector3(-18, 5, -3),
    new THREE.Vector3(-28, 5, -3),
    new THREE.Vector3(-38, 8, -10),
    // new THREE.Vector3(0, 0, 0),
  ]),
  new THREE.CatmullRomCurve3([
    new THREE.Vector3(-15, 10, 5),
    new THREE.Vector3(-10, 6, 3),
    new THREE.Vector3(-5, 3, 1),
    new THREE.Vector3(0, 0, 0),
  ]),

  new THREE.CatmullRomCurve3([
    new THREE.Vector3(-22, -10, 2),
    new THREE.Vector3(-19, -8, 2),
    new THREE.Vector3(-15, -4, 2),
    new THREE.Vector3(-10, 0, 2),
    new THREE.Vector3(-8, 4, -5),
    new THREE.Vector3(-7, 2, -5),
    new THREE.Vector3(-6, -4, -5),
    new THREE.Vector3(-5, -6, -5),
    new THREE.Vector3(-5, -8, -5),
  ]),

  new THREE.CatmullRomCurve3([
    new THREE.Vector3(5, -5, -2),
    new THREE.Vector3(10, -1, -9),
    new THREE.Vector3(12, -1, -12),
    new THREE.Vector3(14, -1, -15),
    new THREE.Vector3(16, 0, -15),
    new THREE.Vector3(19, -8, -19),
  ]),
];

export const thicknessesArray = Array(22).fill(0.04);

export const colorsArray = Array(22).fill("#1400a3");

export const opacityArray = Array(22).fill(0.5);

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
];
