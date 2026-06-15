import { useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import MacbookModel from "./MacbookModel";
import { features } from "../constants";

gsap.registerPlugin(ScrollTrigger);

function Features() {
  const sectionRef = useRef();

  useGSAP(
    () => {
      // Title animation
      gsap.from("#features h2", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#features",
          start: "top 80%",
        },
      });

      // Feature boxes stagger in
      const boxes = gsap.utils.toArray("#features .box");
      boxes.forEach((box, i) => {
        gsap.from(box, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          delay: i * 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#features #f-canvas",
            start: "top 60%",
          },
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="features" ref={sectionRef}>
      <h2>Supercharged by M4 Pro and M4 Max.</h2>

      <div style={{ position: "relative" }}>
        <Canvas
          id="f-canvas"
          camera={{ position: [0, 1.5, 4], fov: 50, near: 0.1, far: 100 }}
        >
          <Suspense fallback={null}>
            <MacbookModel
              modelPath="/models/macbook-16-transformed.glb"
              color="#2e2c2e"
              scale={0.08}
            />
          </Suspense>
          <ambientLight intensity={0.5} />
          <spotLight
            position={[5, 10, 5]}
            intensity={1}
            penumbra={1}
          />
          <Environment preset="city" />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
          />
        </Canvas>

        {features.map((feature, i) => (
          <div className="box" key={i} style={feature.style}>
            <img
              src={feature.icon}
              alt={feature.title}
              width={40}
              height={40}
            />
            <p>{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
