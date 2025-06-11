import { useRef} from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere, OrbitControls, useTexture, Stars } from '@react-three/drei';
import * as THREE from 'three';
import styled from '@emotion/styled';

interface Marker {
  id: string;
  position: [number, number, number];
  name: string;
  description: string;
  imageUrl?: string;
  locationUrl: string;
  googleMapsUrl: string;
}

interface GlobeProps {
  markers: Marker[];
  onMarkerClick: (marker: Marker | null) => void;
}

const GlobeContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(to bottom, #000428, #004e92);
`;

const Marker = ({ position, onClick }: { position: [number, number, number]; onClick: () => void; marker: Marker }) => {
  return (
    <mesh
      position={position}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      <sphereGeometry args={[0.13, 32, 32]} />
      <meshStandardMaterial 
        color="#ea399a" 
        emissive="#ff0000" 
        emissiveIntensity={0.5}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
};

const GlobeScene = ({ markers, onMarkerClick }: GlobeProps) => {
  const globeRef = useRef<THREE.Group>(null);
  const { camera, raycaster, pointer } = useThree();

  // Load the Phoenix map texture
  const texture = useTexture('/phoenix-map.jpg');
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;

  // useFrame(() => {
  //   if (globeRef.current) {
  //     globeRef.current.rotation.y += 0.001;
  //   }
  // });

  const handleClick = (event: THREE.Event) => {
    // Update the raycaster with the current pointer position
    raycaster.setFromCamera(pointer, camera);
    
    // Get all meshes in the scene
    const meshes = globeRef.current?.children.filter(
      (child): child is THREE.Mesh => child instanceof THREE.Mesh
    ) || [];
    
    // Check if we hit any markers
    const intersects = raycaster.intersectObjects(meshes);
    
    // If we didn't hit any markers, notify the parent
    if (intersects.length === 0) {
      onMarkerClick(null);
    }
  };

  return (
    <>
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <pointLight position={[-10, -10, -10]} intensity={0.4} />
      
      {/* Add stars to the background */}
      <Stars 
        radius={100} 
        depth={50} 
        count={5000} 
        factor={4} 
        saturation={0} 
        fade 
        speed={1}
      />
      
      <group ref={globeRef} onClick={handleClick}>
        <Sphere args={[5, 64, 64]}>
          <meshStandardMaterial
            map={texture}
            metalness={0}
            roughness={0.5}
          />
        </Sphere>

        {markers.map((marker) => (
          <Marker
            key={marker.id}
            position={marker.position}
            marker={marker}
            onClick={() => onMarkerClick(marker)}
          />
        ))}
      </group>

      <OrbitControls
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        zoomSpeed={0.6}
        panSpeed={0.5}
        rotateSpeed={0.4}
        minDistance={8}
        maxDistance={20}
      />
    </>
  );
};

export const Globe = (props: GlobeProps) => {
  return (
    <GlobeContainer>
      <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
        <color attach="background" args={['#000428']} />
        <GlobeScene {...props} />
      </Canvas>
    </GlobeContainer>
  );
}; 