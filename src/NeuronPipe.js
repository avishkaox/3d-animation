import { useState } from "react";
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
  const [curves] = useState([
    new THREE.CatmullRomCurve3([
      new THREE.Vector3(-20, 0, 0),
      new THREE.Vector3(-10, 0, 0),
      new THREE.Vector3(-3, -3, 0),
      new THREE.Vector3(0, 0, 0),
      // new THREE.Vector3(5, -10, 0),
      // new THREE.Vector3(10, 0, 0),
    ]),
    new THREE.CatmullRomCurve3([
      new THREE.Vector3(-20, 8, -9),
      new THREE.Vector3(-10, 0, -6),
      new THREE.Vector3(-3, -3, -4),
      new THREE.Vector3(0, 0, 0),
      // new THREE.Vector3(5, -10, 0),
      // new THREE.Vector3(10, 0, 0),
    ]),
    new THREE.CatmullRomCurve3([
      new THREE.Vector3(-20, -3, -4),
      new THREE.Vector3(-10, -5, -2),
      new THREE.Vector3(-3, -3, -1),
      new THREE.Vector3(0, 0, 0),
      // new THREE.Vector3(5, -10, 0),
      // new THREE.Vector3(10, 0, 0),
    ]),

    new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(5, -3, 0),
      new THREE.Vector3(7, -2, 0),
      new THREE.Vector3(10, -2, 0),
      // new THREE.Vector3(5, -10, 0),
      // new THREE.Vector3(10, 0, 0),
    ]),
    new THREE.CatmullRomCurve3([
      new THREE.Vector3(10, -2, 0),
      new THREE.Vector3(14, 8, 0),
      new THREE.Vector3(18, 6, 0),
      new THREE.Vector3(20, 5, 0),
      // new THREE.Vector3(5, -10, 0),
      // new THREE.Vector3(10, 0, 0),
    ]),
    // new THREE.CatmullRomCurve3([
    //   new THREE.Vector3(-10, 0, 0),
    //   new THREE.Vector3(-5, 15, 0),
    //   new THREE.Vector3(0, 0, 0),
    //   new THREE.Vector3(5, -15, 0),
    //   new THREE.Vector3(10, 0, 0),
    // ]),
    // new THREE.CatmullRomCurve3([
    //   new THREE.Vector3(0, 0, 0),
    //   new THREE.Vector3(5, 5, 5),
    //   new THREE.Vector3(10, 10, 0),
    // ]),
    // new THREE.CatmullRomCurve3([
    //   new THREE.Vector3(0, 0, 0),
    //   new THREE.Vector3(-5, 5, -5),
    //   new THREE.Vector3(-10, 10, 0),
    // ]),
    // new THREE.CatmullRomCurve3([
    //   new THREE.Vector3(0, 0, 0),
    //   new THREE.Vector3(5, -5, -5),
    //   new THREE.Vector3(10, -10, 0),
    // ]),
    // new THREE.CatmullRomCurve3([
    //   new THREE.Vector3(0, 0, 0),
    //   new THREE.Vector3(-5, -5, -5),
    //   new THREE.Vector3(-10, -10, 0),
    // ]),
    // new THREE.CatmullRomCurve3([
    //   new THREE.Vector3(0, 0, 0),
    //   new THREE.Vector3(5, 5, -5),
    //   new THREE.Vector3(10, 10, 0),
    // ]),
  ]);

  const [thicknesses] = useState([
    0.1, 0.1, 0.1, 0.12, 0.08, 0.12, 0.1, 0.1, 0.1, 0.1,
  ]);

  const [target, setTarget] = useState(null);
  const [signals] = useState([
    { id: 1, curveIndex: 0, t: 0.1 },
    { id: 2, curveIndex: 1, t: 0.3 },
    { id: 3, curveIndex: 2, t: 0.6 },
    { id: 4, curveIndex: 3, t: 0.8 },
    { id: 5, curveIndex: 4, t: 0.2 },
    // { id: 6, curveIndex: 5, t: 0.4 },
    // { id: 7, curveIndex: 6, t: 0.7 },
    // { id: 8, curveIndex: 7, t: 0.5 },
    // { id: 9, curveIndex: 8, t: 0.9 },
    // { id: 10, curveIndex: 9, t: 0.3 },
  ]);

  const handleClick = (e, curveIndex) => {
    const point = e.point;
    setTarget({ curveIndex, point });
  };

  return (
    <Canvas
      style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
      camera={{ position: [0, 0, 20], fov: 50 }}
    >
      <color attach="background" args={["#000000"]} /> {/* fallback color */}
      <Background />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.7, 50, 50]} />
        <meshStandardMaterial color="#010521"
          // transparent={true} 
          // opacity={0.4} 
          emissive="#71c7d8"
          emissiveIntensity={0.9}
          metalness={0.5}
          roughness={0.5}
        />
      </mesh>
      <mesh position={[10, -2, 0]}>
        <sphereGeometry args={[0.7, 50, 50]} />
        <meshStandardMaterial color="#010521"
          // transparent={true} 
          // opacity={0.4} 
          emissive="#71c7d8"
          emissiveIntensity={0.9}
          metalness={0.5}
          roughness={0.5}
        />
      </mesh>
      {curves.map((curve, i) => (
        <Pipe
          key={i}
          curve={curve}
          thickness={thicknesses[i]}
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
