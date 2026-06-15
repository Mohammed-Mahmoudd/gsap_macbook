import { useEffect, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

function MacbookModel({
  modelPath = "/models/macbook-16-transformed.glb",
  color = "#2e2c2e",
  scale = 1,
}) {
  const { scene } = useGLTF(modelPath);

  const clonedScene = useMemo(() => {
    const clone = scene.clone(true);
    clone.traverse((child) => {
      if (child.isMesh) {
        child.material = child.material.clone();
      }
    });
    return clone;
  }, [scene]);

  useEffect(() => {
    clonedScene.traverse((child) => {
      if (child.isMesh && child.material && child.material.color) {
        child.material.color = new THREE.Color(color);
        child.material.needsUpdate = true;
      }
    });
  }, [color, clonedScene]);

  return (
    <group scale={scale} position={[0, -0.5, 0]} rotation={[0.1, -0.4, 0]}>
      <primitive object={clonedScene} />
    </group>
  );
}

useGLTF.preload("/models/macbook-14-transformed.glb");
useGLTF.preload("/models/macbook-16-transformed.glb");

export default MacbookModel;
