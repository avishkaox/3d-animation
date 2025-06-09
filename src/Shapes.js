import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React from "react";

function Shapes() {
  return (
    <>
      <Canvas
        style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
        camera={{ position: [0, 0, 20], fov: 50 }}
      >
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.8, 50, 50]} />
          <meshStandardMaterial color="yellow" />
        </mesh>
      </Canvas>
    </>
  );
}

export default Shapes;
