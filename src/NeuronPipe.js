import { useMemo, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import Pipe from "./Pipe";
import Signal from "./Signal";
import Background from "./Background";

// for my perferrence
// vector values -
/*
- x: left-right this is the horizontal axis( positive is right, negative is left)
- y: up-down  this is the vertical axis
- z: depth (forward-backward)
*/
function NeuronPipe() {
  const curves = useMemo(
    () => [
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
      // new THREE.CatmullRomCurve3([
      //   new THREE.Vector3(0, 0, 0),
      //   new THREE.Vector3(5, -3, 0),
      //   new THREE.Vector3(7, -2, 0),
      //   new THREE.Vector3(10, -2, 0),
      // ]),
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

      // Bottom pipes dropping down at different angles
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
    ],
    []
  );

  const thicknesses = useMemo(
    () => [
      0.08, 0.08, 0.08, 0.05, 0.08, 0.08, 0.08, 0.08, 0.08, 0.08, 0.08, 0.08,
      0.08, 0.08, 0.08, 0.08,
    ],
    []
  );
  const colors = useMemo(
    () => [
      "#0B1D51",
      "#0B1D51",
      "#0B1D51",
      "#0B1D51",
      "#0B1D51",
      "#0B1D51",
      "#0B1D51",
      "#0B1D51",
      "#0B1D51",
      "#0B1D51",
      "#0B1D51",
      "#0B1D51",
      "#0B1D51",
      "#0B1D51",
      "#0B1D51",
      "#0B1D51",
      "#0B1D51",
    ],
    []
  );

  const opacity = useMemo(() => [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], []);

  const [target, setTarget] = useState(null);
  const [signals, setSignals] = useState([
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
  ]);

  const handleClick = (e, curveIndex) => {
    // Check if clicked pipe already has a signal
    const pipeHasSignal = signals.some(
      (signal) => signal.curveIndex === curveIndex
    );

    if (!pipeHasSignal) {
      // Remove signal from random existing pipe and add to clicked pipe
      setSignals((prevSignals) => {
        if (prevSignals.length === 0) {
          // If no signals exist, create new one
          return [{ id: Date.now(), curveIndex: curveIndex, t: 0 }];
        }

        // Remove random signal and add new one to clicked pipe
        const randomIndex = Math.floor(Math.random() * prevSignals.length);
        const newSignals = [...prevSignals];
        newSignals.splice(randomIndex, 1);
        newSignals.push({
          id: Date.now(),
          curveIndex: curveIndex,
          t: 0,
        });
        return newSignals;
      });
    } else {
      // If pipe has signal, handle normal click behavior
      const point = e.point;
      setTarget({ curveIndex, point });
    }
  };

  return (
    <Canvas
      style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
      camera={{ position: [25, 5, -15], fov: 25 }}
      performance={{ min: 0.5 }}
      gl={{ powerPreference: "high-performance" }}
      dpr={[1, 2]}
    >
      <color attach="background" args={["#000000"]} /> {/* fallback color */}
      {/* <Background url='/stars-galaxy-3840x2560-10307.jpg' /> */}
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {/* <OrbitControls /> */}
      {curves.map((curve, i) => (
        <Pipe
          key={i}
          curve={curve}
          color={colors[i]}
          thickness={thicknesses[i]}
          opacity={opacity[i]}
          onClickPoint={(e) => handleClick(e, i)}
        />
      ))}
      {signals.map((signal) => (
        <Signal
          key={signal.id}
          curve={curves[signal.curveIndex]}
          targetPoint={
            target?.curveIndex === signal.curveIndex ? target.point : null
          }
          initialT={signal.t}
        />
      ))}
    </Canvas>
  );
}

export default NeuronPipe;
