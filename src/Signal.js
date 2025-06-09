import React, { useRef, useEffect, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import * as THREE from "three";

function Signal({ curve, targetPoint, initialT }) {
  const meshRef = useRef();
  const tRef = useRef(initialT);
  const direction = useRef(1);
  const tweenRef = useRef(null);

  // Pre-sample points to find closestT when needed
  const sampledPoints = useMemo(() => {
    if (!curve) return [];
    return Array.from({ length: 101 }, (_, i) => {
      const t = i / 100;
      return { t, point: curve.getPoint(t) };
    });
  }, [curve]);

  useFrame(() => {
    if (!targetPoint && meshRef.current) {
      tRef.current += 0.001 * direction.current;

      if (tRef.current >= 1) {
        tRef.current = 1;
        direction.current = -1;
      } else if (tRef.current <= 0) {
        tRef.current = 0;
        direction.current = 1;
      }

      const point = curve.getPoint(tRef.current);
      meshRef.current.position.copy(point);
    }
  });

  useEffect(() => {
    if (!targetPoint || !curve || !sampledPoints.length) return;

    const { t: closestT } = sampledPoints.reduce(
      (closest, current) => {
        const dist = current.point.distanceTo(targetPoint);
        return dist < closest.dist ? { t: current.t, dist } : closest;
      },
      { t: 0, dist: Infinity }
    );

    if (tweenRef.current) {
      tweenRef.current.kill();
    }

    tweenRef.current = gsap.to(tRef, {
      current: closestT,
      duration: Math.abs(closestT - tRef.current) * 5,
      ease: "back.out(1.7)",
      onUpdate: () => {
        const t = THREE.MathUtils.clamp(tRef.current, 0, 1);
        const point = curve.getPoint(t);
        if (meshRef.current && point) {
          meshRef.current.position.copy(point);
        }
      },
    });

    return () => {
      if (tweenRef.current) {
        tweenRef.current.kill();
      }
    };
  }, [targetPoint, curve, sampledPoints]);

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.2, 16, 16]} />
      <meshStandardMaterial
        color="yellow"
        emissive="yellow"
        emissiveIntensity={2}
        metalness={0.3}
        roughness={0.4}
      />
    </mesh>
  );
}

export default Signal;
