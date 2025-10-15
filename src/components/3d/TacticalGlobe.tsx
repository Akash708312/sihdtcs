import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

export function TacticalGlobe() {
  const globeRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.003;
    }
  });

  return (
    <group>
      {/* Main globe wireframe */}
      <mesh ref={globeRef}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial color="#5eff5e" wireframe transparent opacity={0.3} />
      </mesh>

      {/* Solid inner sphere */}
      <mesh>
        <sphereGeometry args={[1.45, 32, 32]} />
        <meshBasicMaterial color="#0a0f0a" transparent opacity={0.9} />
      </mesh>

      {/* Equator ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.5, 0.02, 16, 100]} />
        <meshBasicMaterial color="#5eff5e" transparent opacity={0.8} />
      </mesh>

      {/* Meridian rings */}
      <mesh rotation={[0, 0, 0]}>
        <torusGeometry args={[1.5, 0.015, 16, 100]} />
        <meshBasicMaterial color="#5eff5e" transparent opacity={0.5} />
      </mesh>

      <mesh rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[1.5, 0.015, 16, 100]} />
        <meshBasicMaterial color="#5eff5e" transparent opacity={0.5} />
      </mesh>

      {/* Strategic markers */}
      {[
        { lat: 0.5, lon: 0.3 },
        { lat: -0.3, lon: 1.2 },
        { lat: 0.8, lon: -0.7 },
      ].map((marker, i) => {
        const x = 1.5 * Math.cos(marker.lat) * Math.cos(marker.lon);
        const y = 1.5 * Math.sin(marker.lat);
        const z = 1.5 * Math.cos(marker.lat) * Math.sin(marker.lon);
        
        return (
          <mesh key={i} position={[x, y, z]}>
            <sphereGeometry args={[0.06, 16, 16]} />
            <meshBasicMaterial color="#ff0000" />
          </mesh>
        );
      })}
    </group>
  );
}
