// import {useLoader } from '@react-three/fiber'
// import * as THREE from 'three'
// import { useEffect } from 'react'

// function Background({url}) {
//      const texture = useLoader(THREE.TextureLoader, url)
//   return(
//     <mesh position={[0, 0, -20]}>
//       <planeGeometry args={[50, 30]} />
//       <meshBasicMaterial
//         map={texture}
//         side={THREE.DoubleSide}
//         transparent={true}
//       />
//     </mesh>
//   )
// }

// export default Background

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

function Background({ count = 1000 }) {
  const points = useRef();
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 50;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 30;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return arr;
  }, [count]);

  useFrame(() => {
    if (points.current) {
      points.current.rotation.y += 0.0005;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#ffec93"
        size={0.2}
        sizeAttenuation
        opacity={0.5}
        transparent
      />
    </points>
  );
}

export default Background;
