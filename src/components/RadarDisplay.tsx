import { Canvas } from '@react-three/fiber';
import { RotatingRadar } from './3d/RotatingRadar';
import { OrbitControls } from '@react-three/drei';

export function RadarDisplay() {
  return (
    <div className="w-full h-64 bg-tactical-surface/50 rounded-sm border-2 border-primary/30 overflow-hidden hud-corners angular-cut relative">
      <div className="absolute top-2 left-2 font-mono text-[10px] text-primary z-10">
        RADAR SWEEP - ACTIVE
      </div>
      <Canvas camera={{ position: [0, 5, 0], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <RotatingRadar />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
