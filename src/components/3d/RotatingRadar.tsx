import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

export function RotatingRadar() {
  const radarRef = useRef<Mesh>(null);
  const sweepRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (radarRef.current) {
      radarRef.current.rotation.z += 0.005;
    }
    if (sweepRef.current) {
      sweepRef.current.rotation.z += 0.02;
    }
  });

  return (
    <group>
      {/* Radar base */}
      <mesh ref={radarRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2, 0.02, 16, 100]} />
        <meshBasicMaterial color="#5eff5e" transparent opacity={0.6} />
      </mesh>

      {/* Inner circles */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.5, 0.015, 16, 100]} />
        <meshBasicMaterial color="#5eff5e" transparent opacity={0.4} />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1, 0.01, 16, 100]} />
        <meshBasicMaterial color="#5eff5e" transparent opacity={0.3} />
      </mesh>

      {/* Radar sweep line */}
      <mesh ref={sweepRef} position={[0, 0, 0.01]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2.2, 0.05]} />
        <meshBasicMaterial color="#5eff5e" transparent opacity={0.8} />
      </mesh>

      {/* Grid lines */}
      {[0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2].map((angle, i) => (
        <mesh key={i} rotation={[Math.PI / 2, 0, angle]} position={[0, 0, 0]}>
          <planeGeometry args={[0.02, 4]} />
          <meshBasicMaterial color="#5eff5e" transparent opacity={0.2} />
        </mesh>
      ))}

      {/* Detection blips */}
      {[
        { x: 1.2, y: 0.3, z: 0.02 },
        { x: -0.8, y: 1.5, z: 0.02 },
        { x: -1.6, y: -0.9, z: 0.02 },
      ].map((pos, i) => (
        <mesh key={i} position={[pos.x, pos.y, pos.z]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshBasicMaterial color="#ff0000" />
        </mesh>
      ))}
    </group>
  );
}
