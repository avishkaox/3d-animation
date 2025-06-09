import * as THREE from "three";
import { useMemo } from "react";

function CustomTube({ curve, radiusFn, tubularSegments = 100, radialSegments = 8 }) {
  const mesh = useMemo(() => {
    const frames = curve.computeFrenetFrames(tubularSegments, false);
    const geometry = new THREE.BufferGeometry();

    const vertices = [];
    const normals = [];
    const indices = [];

    for (let i = 0; i <= tubularSegments; i++) {
      const t = i / tubularSegments;
      const point = curve.getPointAt(t);
      const radius = radiusFn(t);

      const normal = frames.normals[i];
      const binormal = frames.binormals[i];

      for (let j = 0; j <= radialSegments; j++) {
        const v = (j / radialSegments) * Math.PI * 2;
        const sin = Math.sin(v);
        const cos = Math.cos(v);

        const normalVec = new THREE.Vector3()
          .copy(normal)
          .multiplyScalar(cos)
          .addScaledVector(binormal, sin)
          .normalize();

        const vertex = new THREE.Vector3()
          .copy(point)
          .addScaledVector(normalVec, radius);

        vertices.push(vertex.x, vertex.y, vertex.z);
        normals.push(normalVec.x, normalVec.y, normalVec.z);
      }
    }

    for (let i = 0; i < tubularSegments; i++) {
      for (let j = 0; j < radialSegments; j++) {
        const a = (radialSegments + 1) * i + j;
        const b = (radialSegments + 1) * (i + 1) + j;
        const c = (radialSegments + 1) * (i + 1) + (j + 1);
        const d = (radialSegments + 1) * i + (j + 1);

        indices.push(a, b, d);
        indices.push(b, c, d);
      }
    }

    geometry.setIndex(indices);
    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3)
    );
    geometry.setAttribute(
      "normal",
      new THREE.Float32BufferAttribute(normals, 3)
    );

    geometry.computeBoundingSphere();

    const material = new THREE.MeshStandardMaterial({ color: "#2196f3" });
    return new THREE.Mesh(geometry, material);
  }, [curve, radiusFn]);

  return <primitive object={mesh} />;
}

export default CustomTube;
