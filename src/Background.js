import {useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { useEffect } from 'react'

function Background({url}) {
     const texture = useLoader(THREE.TextureLoader, url)
  return(
    <mesh position={[0, 0, -20]}>
      <planeGeometry args={[50, 30]} />
      <meshBasicMaterial 
        map={texture} 
        side={THREE.DoubleSide}
        transparent={true}
      />
    </mesh>
  )
}

export default Background