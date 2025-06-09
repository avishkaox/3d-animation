import { useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { useEffect } from 'react'

function Background() {
  const { scene } = useThree()
  
  useEffect(() => {
    // const loader = new THREE.TextureLoader()
    // loader.load(url, (texture) => {
    //   texture.mapping = THREE.EquirectangularReflectionMapping
    //   texture.repeat.set(80, 80)
    //   texture.wrapS = THREE.RepeatWrapping
    //   texture.wrapT = THREE.RepeatWrapping
    //   scene.background = texture
    //   scene.environment = texture
    // })
     scene.background = new THREE.Color('#010521')
  }, [scene])
  
  return null
}

export default Background