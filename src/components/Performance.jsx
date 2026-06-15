import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Performance() {
  const sectionRef = useRef();

  useGSAP(
    () => {
      // Title animation
      gsap.from("#performance h2", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#performance",
          start: "top 80%",
        },
      });

      // Parallax images — each moves at a different speed
      const images = gsap.utils.toArray("#performance .wrapper img");
      images.forEach((img, i) => {
        const speed = 50 + (i % 3) * 60;
        gsap.from(img, {
          y: speed,
          opacity: 0,
          scrollTrigger: {
            trigger: "#performance .wrapper",
            start: "top 90%",
            end: "bottom 20%",
            scrub: 1,
          },
        });
      });

      // Content text fade-in (CSS starts at opacity-0 translate-y-10)
      gsap.to("#performance .content p", {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#performance .content",
          start: "top 85%",
          end: "top 50%",
          scrub: 1,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="performance" ref={sectionRef}>
      <h2>Mind-blowing. Performance and capability.</h2>

      <div className="wrapper">
        <img className="p1" src="/performance1.png" alt="Performance" />
        <img className="p2" src="/performance2.png" alt="Performance" />
        <img className="p3" src="/performance3.png" alt="Performance" />
        <img className="p4" src="/performance4.png" alt="Performance" />
        <img className="p5" src="/performance5.jpg" alt="Performance" />
        <img className="p6" src="/performance6.png" alt="Performance" />
        <img className="p7" src="/performance7.png" alt="Performance" />
      </div>

      <div className="content">
        <p>
          The M4 family of chips delivers exceptional performance for demanding
          workflows like editing massive photo libraries, running complex
          simulations, or working across multiple pro apps simultaneously. With
          unified memory architecture and industry-leading performance per watt,
          MacBook Pro powers through everything you throw at it.
        </p>
      </div>
    </section>
  );
}

export default Performance;
