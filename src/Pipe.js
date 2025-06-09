import { useMemo } from "react";
import * as THREE from "three";

function Pipe({ curve, onClickPoint, thickness }) {
  const geometry = useMemo(
    () => new THREE.TubeGeometry(curve, 100, thickness, 8, false),
    [curve, thickness]
  );
  const material = useMemo(
    () => new THREE.MeshStandardMaterial({ 
        color: "#71c7d8",
        transparent: true,
        opacity: 0.4,
     }),
    []
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
