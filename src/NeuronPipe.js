import { useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import {
  thicknessesArray,
  colorsArray,
  opacityArray,
  curvesArray,
  signalsArray,
} from "./services/pipeConfig";
import Pipe from "./Pipe";
import Signal from "./Signal";
import Background from "./Background";


function NeuronPipe() {
  const curves = useMemo(() => curvesArray, []);
  const thicknesses = useMemo(() => thicknessesArray, []);
  const colors = useMemo(() => colorsArray, []);
  const opacity = useMemo(() => opacityArray, []);

  const [target, setTarget] = useState(null);
  const [signals, setSignals] = useState(signalsArray);

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
      <color attach="background" args={["#000418"]} />
      <EffectComposer disableNormalPass>
        <Bloom
          luminanceThreshold={4}
          luminanceSmoothing={0}
          intensity={0.5}
          mipmapBlur
        />
        <Background count={2000} />
      </EffectComposer>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
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
