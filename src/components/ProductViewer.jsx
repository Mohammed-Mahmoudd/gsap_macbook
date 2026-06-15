import clsx from "clsx";
import useMacbookStore from "../store";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import MacbookModel from "./MacbookModel";
import { Suspense } from "react";

function ProductViewer() {
  const { color, scale, setColor, setScale } = useMacbookStore();

  return (
    <section id="product-viewer">
      <h2>Take a closer look.</h2>

      <div className="controls">
        <p className="info">Macbook 16* in {color}</p>
        <div className="flex-center gap-5 mt-5">
          <div className="color-control">
            <div
              className={clsx(
                "bg-neutral-300",
                color === "#abd5bd" && "active"
              )}
              onClick={() => setColor("#abd5bd")}
            />
            <div
              className={clsx(
                "bg-neutral-900",
                color === "#2e2c2e" && "active"
              )}
              onClick={() => setColor("#2e2c2e")}
            />
          </div>

          <div className="size-control">
            <div
              onClick={() => setScale(0.06)}
              className={clsx(
                scale === 0.06
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              )}
            >
              <p>14*</p>
            </div>
            <div
              onClick={() => setScale(0.08)}
              className={clsx(
                scale === 0.08
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              )}
            >
              <p>16*</p>
            </div>
          </div>
        </div>
      </div>

      <Canvas
        id="canvas"
        camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <Environment preset="city" />
        <Suspense fallback={null}>
          <MacbookModel 
            modelPath={scale === 0.06 ? "/models/macbook-14-transformed.glb" : "/models/macbook-16-transformed.glb"} 
            color={color} 
            scale={scale} 
          />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </section>
  );
}

export default ProductViewer;
