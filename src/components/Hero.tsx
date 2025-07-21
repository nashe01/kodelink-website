
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Smartphone, Palette, DollarSign, GraduationCap, TrendingUp, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useRef, useState } from "react";
import ShinyText from "./ShinyText";

const CIRCLE_RADIUS = 56;
const CIRCLE_CIRCUM = 2 * Math.PI * CIRCLE_RADIUS;
const DASHES = [
  [CIRCLE_CIRCUM * 0.25, CIRCLE_CIRCUM * 0.75], // 90°
  [CIRCLE_CIRCUM * 0.5, CIRCLE_CIRCUM * 0.5],   // 180°
  [CIRCLE_CIRCUM * 0.75, CIRCLE_CIRCUM * 0.25], // 270°
  [CIRCLE_CIRCUM, 0],                          // 360°
];

const Hero = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const [isCurtainOpen, setIsCurtainOpen] = useState(false);
  const [progressStep, setProgressStep] = useState(0);

  useEffect(() => {
    let timeouts: NodeJS.Timeout[] = [];
    // Animate progress: 0 -> 1 -> 2 -> 3
    for (let i = 1; i <= 4; i++) {
      timeouts.push(
        setTimeout(() => setProgressStep(i), i * 500)
      );
    }
    // Open curtain after last step
    timeouts.push(
      setTimeout(() => setIsCurtainOpen(true), 4 * 500 + 200)
    );
    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <section 
      ref={heroRef}
      className={`relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden transition-all duration-1000 ${
        heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Curtain overlay with loader */}
      <div
        className={`fixed inset-0 z-50 bg-slate-900 transition-transform duration-1000 ease-in-out flex items-center justify-center ${
          isCurtainOpen ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
        }`}
        style={{ pointerEvents: isCurtainOpen ? 'none' : 'auto', transitionProperty: 'transform, opacity' }}
      >
        <div className="w-full h-full bg-gradient-to-b from-blue-900 via-slate-900 to-slate-800 opacity-90 absolute inset-0"></div>
        <div className="relative z-10 flex flex-col items-center justify-center">
          <div className="relative flex items-center justify-center w-32 h-32">
            {/* SVG Spinner */}
            <svg className="absolute w-32 h-32" viewBox="0 0 128 128">
              <circle
                cx="64" cy="64" r="56"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="8"
                strokeDasharray={`${DASHES[Math.min(progressStep, 3)][0]} ${DASHES[Math.min(progressStep, 3)][1]}`}
                strokeLinecap="round"
                style={{ transition: 'stroke-dasharray 0.4s cubic-bezier(.4,2,.6,1)' }}
              />
            </svg>
            {/* KodeLink Logo */}
            <img
              src="/lovable-uploads/5edf5fbc-b011-463a-ab65-6cee2d9bc733.png"
              alt="KodeLink Logo"
              className="w-20 h-20 object-contain rounded-full bg-white/10 shadow-lg"
            />
          </div>
        </div>
      </div>
      {/* Gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-bg.jpg" 
          alt="Hero background" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 opacity-80"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center text-white relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 opacity-100 translate-y-0">
            <img 
              src="/lovable-uploads/5edf5fbc-b011-463a-ab65-6cee2d9bc733.png" 
              alt="KodeLink Logo" 
              className="w-32 h-32 md:w-48 md:h-48 mx-auto mb-6 object-contain"
            />
          </div>
          
          <div className={`transition-all duration-1000 delay-300 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>

            <h2 className="text-2xl md:text-3xl font-semibold mb-8">
              <ShinyText text="Bridging Creativity & Innovation" className="text-blue-100" speed={4} />
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-slate-300 leading-relaxed">
              Smart digital solutions that connect people, platforms, and possibilities. 
              From Zimbabwe to the world, we empower your digital transformation.
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-1000 delay-500 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg group cursor-target">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg cursor-target">
                Our Services
              </Button>
            </div>

            {/* Trust indicators */}
            <div className={`flex flex-wrap justify-center items-center gap-6 mb-8 transition-all duration-1000 delay-600 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
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

            <div className={`flex justify-center items-center gap-8 opacity-60 transition-all duration-1000 delay-700 ${
              heroVisible ? 'opacity-60 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <Code className="h-8 w-8 animate-bounce" style={{ animationDelay: '0ms' }} />
              <Smartphone className="h-8 w-8 animate-bounce" style={{ animationDelay: '200ms' }} />
              <Palette className="h-8 w-8 animate-bounce" style={{ animationDelay: '400ms' }} />
              <DollarSign className="h-8 w-8 animate-bounce" style={{ animationDelay: '600ms' }} />
              <GraduationCap className="h-8 w-8 animate-bounce" style={{ animationDelay: '800ms' }} />
              <TrendingUp className="h-8 w-8 animate-bounce" style={{ animationDelay: '1000ms' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
