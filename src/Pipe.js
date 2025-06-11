import { useMemo } from "react";
import * as THREE from "three";

function Pipe({ curve, onClickPoint, thickness , color , opacity }) {
  const geometry = useMemo(
    () => new THREE.TubeGeometry(curve, 100, thickness, 8, false),
    [curve, thickness]
  );
  const material = useMemo(
    () => new THREE.MeshStandardMaterial({ 
        color: color,
        transparent: true,
        opacity: opacity,
     }),
    [color , opacity]
  );

  return (
    <mesh
      geometry={geometry}
      material={material}
      onClick={(e) => onClickPoint(e, curve)}
    />
  );
}

export default Pipe;
