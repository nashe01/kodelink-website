import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Code,
  Smartphone,
  Palette,
  DollarSign,
  GraduationCap,
  TrendingUp,
  Star
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useRef, useState } from "react";
import ShinyText from "./ShinyText";

const CIRCLE_RADIUS = 56;
const CIRCLE_CIRCUM = 2 * Math.PI * CIRCLE_RADIUS;

const Hero = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const [isCurtainOpen, setIsCurtainOpen] = useState(false);
  const [progress, setProgress] = useState(0); // 0 to 1

  useEffect(() => {
    let start: number | null = null;
    let req: number;
    const duration = 2000; // ms

    function animate(ts: number) {
      if (!start) start = ts;
      const elapsed = ts - start;
      const p = Math.min(elapsed / duration, 1);
      setProgress(p);
      if (p < 1) {
        req = requestAnimationFrame(animate);
      } else {
        setTimeout(() => setIsCurtainOpen(true), 200);
      }
    }

    req = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(req);
  }, []);

  return (
    <section
      ref={heroRef}
      className={`relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden transition-all duration-1000 ${
        heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Curtain overlay with loader */}
      <div
        className={`fixed inset-0 z-50 bg-slate-900 transition-transform duration-1000 ease-in-out flex items-center justify-center ${
          isCurtainOpen ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
        }`}
        style={{
          pointerEvents: isCurtainOpen ? "none" : "auto",
          transitionProperty: "transform, opacity"
        }}
      >
        <div className="w-full h-full bg-gradient-to-b from-blue-900 via-slate-900 to-slate-800 opacity-90 absolute inset-0"></div>
        <div className="relative z-10 flex flex-col items-center justify-center">
          <div className="relative flex items-center justify-center w-32 h-32">
            {/* SVG Spinner */}
            <svg
              className="absolute w-32 h-32"
              viewBox="0 0 128 128"
              style={{ transform: "rotate(-90deg)" }}
            >
              <circle
                cx="64"
                cy="64"
                r="56"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="8"
                strokeDasharray={`${progress * CIRCLE_CIRCUM} ${
                  CIRCLE_CIRCUM - progress * CIRCLE_CIRCUM
                }`}
                strokeLinecap="round"
                style={{ transition: "stroke-dasharray 0.1s linear" }}
              />
            </svg>
            {/* KodeLink Logo */}
            <img
              src="/logo/5edf5fbc-b011-463a-ab65-6cee2d9bc733.png"
              alt="KodeLink Logo"
              className="w-24 h-24 object-contain rounded-full bg-white/10 shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* 🎥 Video background + gradient overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover absolute inset-0"
        >
          <source src="/videos/video_hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 opacity-80"></div>
      </div>

      <div className="container mx-auto px-6 text-center text-white relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 opacity-100 translate-y-0">
            <img
              src="/logo/5edf5fbc-b011-463a-ab65-6cee2d9bc733.png"
              alt="KodeLink Logo"
              className="w-32 h-32 md:w-48 md:h-48 mx-auto mb-6 object-contain"
            />
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">
              <ShinyText text="Bridging Creativity & Innovation" className="text-blue-100" speed={4} />
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-slate-300 leading-relaxed">
              Smart digital solutions that connect people, platforms, and possibilities.
              From Zimbabwe to the world, we empower your digital transformation.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-1000 delay-500 ${
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              {/* Optional call-to-action buttons can go here */}
            </div>

            {/* Trust indicators */}
            <div
              className={`flex flex-wrap justify-center items-center gap-6 mb-8 transition-all duration-1000 delay-600 ${
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex items-center gap-2 text-slate-300">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm">5.0 Rating</span>
              </div>
              <div className="text-slate-300 text-sm">
                <span className="font-semibold">500+</span> Projects Completed
              </div>
              <div className="text-slate-300 text-sm">
                <span className="font-semibold">50+</span> Happy Clients
              </div>
            </div>

            <div
              className={`flex justify-center items-center gap-8 opacity-60 transition-all duration-1000 delay-700 ${
                heroVisible ? "opacity-60 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <Code className="h-8 w-8 animate-bounce" style={{ animationDelay: "0ms" }} />
              <Smartphone className="h-8 w-8 animate-bounce" style={{ animationDelay: "200ms" }} />
              <Palette className="h-8 w-8 animate-bounce" style={{ animationDelay: "400ms" }} />
              <DollarSign className="h-8 w-8 animate-bounce" style={{ animationDelay: "600ms" }} />
              <GraduationCap className="h-8 w-8 animate-bounce" style={{ animationDelay: "800ms" }} />
              <TrendingUp className="h-8 w-8 animate-bounce" style={{ animationDelay: "1000ms" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
