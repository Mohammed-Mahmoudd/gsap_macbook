import { useEffect, useRef } from "react";

function Hero() {
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 2;
  });
  return (
    <section id="hero">
      <div>
        <h1>Macbook Pro</h1>
        <img src="/title.png" alt="Macbook Title" />
      </div>

      <video src="/videos/hero.mp4" autoPlay muted playsInline></video>

      <button>Buy</button>
      <p>From $1599 or $133/mo for 12 months</p>
    </section>
  );
}

export default Hero;
