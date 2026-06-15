import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Hero() {
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 0.5;
  }, []);

  useGSAP(() => {
    gsap.from("#hero h1", { opacity: 0, y: 20, duration: 1, delay: 0.2 });
    gsap.from("#hero img", { opacity: 0, scale: 0.9, duration: 1, delay: 0.5 });
    gsap.from("#hero video", { opacity: 0, scale: 0.9, duration: 1, delay: 0.8 });
    gsap.from("#hero button", { opacity: 0, y: 20, duration: 1, delay: 1.1 });
    gsap.from("#hero p", { opacity: 0, y: 20, duration: 1, delay: 1.2 });
  });

  return (
    <section id="hero">
      <div>
        <h1>Macbook Pro</h1>
        <img src="/title.png" alt="Macbook Title" />
      </div>

      <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline></video>

      <button>Buy</button>
    </section>
  );
}

export default Hero;
