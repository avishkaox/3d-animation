import { useRef, useEffect, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import * as THREE from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

function Signal({ curve, targetPoint, initialT = 0, onComplete }) {
  const meshRef = useRef();
  const tRef = useRef(initialT);
  const dir = useRef(1);
  const tweenRef = useRef();
  const timeoutRef = useRef();

  const sampled = useMemo(() => {
    if (!curve || typeof curve.getPoint !== "function") return [];
    return Array.from({ length: 50 }, (_, i) => {
      const t = i / 49;
      const point = curve.getPoint(t);
      return { t, point };
    });
  }, [curve]);

  useFrame(() => {
    if (!curve || !meshRef.current || targetPoint) return;

    tRef.current += 0.002 * dir.current;
    if (tRef.current >= 1 || tRef.current <= 0) dir.current *= -1;

    const point = curve.getPoint(THREE.MathUtils.clamp(tRef.current, 0, 1));
    if (point) {
      meshRef.current.position.copy(point);
    }
  });

  useEffect(() => {
    if (!curve || !targetPoint || sampled.length === 0) return;

    const { t: closestT } = sampled.reduce(
      (acc, cur) => {
        const d = cur.point.distanceTo(targetPoint);
        return d < acc.d ? { t: cur.t, d } : acc;
      },
      { t: 0, d: Infinity }
    );

    tweenRef.current?.kill();
    tweenRef.current = gsap.to(tRef, {
      current: closestT,
      duration: Math.abs(closestT - tRef.current) * 5,
     ease: "back.out(1.7)",
      onUpdate: () => {
        const t = THREE.MathUtils.clamp(tRef.current, 0, 1);
        const point = curve.getPoint(t);
        if (point && meshRef.current) {
          meshRef.current.position.copy(point);
        }
      },
      //time out function
      onComplete: () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          targetPoint = null;
        }, 2000); // 2000ms = 2 seconds
      },
    });

    return () => {
      tweenRef.current?.kill();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [curve, targetPoint, sampled]);

  if (!curve) return null;

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.09, 16, 16]} />
      <meshStandardMaterial
        color="#d7781a"
        emissive="#d7781a"
        emissiveIntensity={5}
        toneMapped={false}
        metalness={0.3}
        roughness={0.4}
      />
    </mesh>
  );
}

export default function SceneWithBloom(props) {
  return (
    <>
      <Signal {...props} />
      <EffectComposer disableNormalPass>
        <Bloom
          luminanceThreshold={1}
          luminanceSmoothing={0.025}
          intensity={1.5}
          mipmapBlur
        />
      </EffectComposer>
    </>
  );
}
