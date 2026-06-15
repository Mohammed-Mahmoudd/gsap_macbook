import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Highlights() {
  const sectionRef = useRef();

  useGSAP(
    () => {
      // Title animations
      gsap.from("#highlights h2", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#highlights",
          start: "top 80%",
        },
      });

      gsap.from("#highlights h3", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#highlights",
          start: "top 80%",
        },
      });

      // Left column stagger (CSS starts at opacity-0 -translate-y-5)
      gsap.to("#highlights .left-column", {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#highlights .masonry",
          start: "top 75%",
          end: "top 35%",
          scrub: 1,
        },
      });

      // Right column (slightly delayed)
      gsap.to("#highlights .right-column", {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#highlights .masonry",
          start: "top 65%",
          end: "top 25%",
          scrub: 1,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="highlights" ref={sectionRef}>
      <h2>Get the highlights.</h2>
      <h3>The ultimate laptop for pros.</h3>

      <div className="masonry">
        <div className="left-column">
          <div>
            <p>
              Longest battery life ever in a Mac.
              <br />
              Up to 24 hours.
            </p>
            <img
              src="/battery.png"
              alt="Battery"
              style={{ width: 60, marginTop: 20 }}
            />
          </div>
          <div>
            <img src="/laptop.png" alt="MacBook Pro" width={50} />
            <p>The thinnest and lightest MacBook Pro ever.</p>
          </div>
        </div>

        <div className="right-column">
          <div className="apple-gradient">
            <img src="/ai.png" alt="Apple Intelligence" width={50} />
            <p>
              Built for <span>Apple Intelligence</span>
            </p>
          </div>
          <div>
            <p>
              The best display ever in a laptop.{" "}
              <span className="green-gradient">Nano-texture</span> for reduced
              glare and reflectivity.
            </p>
            <img
              src="/sun.png"
              alt="Display brightness"
              style={{ width: 60, marginTop: 20 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Highlights;
