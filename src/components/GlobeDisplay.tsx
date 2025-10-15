import { Canvas } from '@react-three/fiber';
import { TacticalGlobe } from './3d/TacticalGlobe';
import { ParticleField } from './3d/ParticleField';
import { OrbitControls } from '@react-three/drei';

export function GlobeDisplay() {
  return (
    <div className="w-full h-80 bg-tactical-surface/50 rounded-sm border-2 border-primary/30 overflow-hidden hud-corners angular-cut relative">
      <div className="absolute top-2 left-2 font-mono text-[10px] text-primary z-10">
        GLOBAL TACTICAL VIEW
      </div>
      <div className="absolute top-2 right-2 font-mono text-[10px] text-red-500 z-10 animate-blink">
        ● THREATS DETECTED
      </div>
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <ParticleField />
        <TacticalGlobe />
        <OrbitControls enableZoom={true} enablePan={false} />
      </Canvas>
    </div>
  );
}
