import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Showcase() {
  const sectionRef = useRef();
  const maskRef = useRef();
  const contentRef = useRef();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        // Mask zoom-out animation while section is pinned
        gsap.to(maskRef.current, {
          transform: "matrix(1, 0, 0, 1, 0, 0)",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=300%",
            scrub: 1,
            pin: true,
          },
        });

        // Content fades in after the pin releases
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="showcase" ref={sectionRef}>
      <div className="media">
        <video src="/videos/game.mp4" autoPlay muted loop playsInline />
        <div className="mask">
          <img ref={maskRef} src="/mask-logo.svg" alt="Mask Logo" />
        </div>
      </div>

      <div className="content" ref={contentRef}>
        <div className="wrapper">
          <div>
            <h2>Ready for whatever game you play.</h2>
            <p>
              MacBook Pro has the power to run AAA games with incredibly
              detailed environments and realistic characters. And with a
              breathtaking display, every world feels fully immersive.
            </p>
          </div>
          <div>
            <h3>A new satisfying experience.</h3>
            <p>
              With up to 18 hours of battery life, you can game unplugged for
              longer than ever. Connect up to two external displays, and
              experience Mac gaming like never before.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Showcase;
