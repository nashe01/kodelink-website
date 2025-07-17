
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Smartphone, Palette, DollarSign, GraduationCap, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Hero = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();

  return (
    <section 
      ref={heroRef}
      className={`relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden transition-all duration-1000 ${
        heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 animate-pulse"></div>
      </div>
      
      {/* Background image */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80" 
          alt="Technology background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-6 text-center text-white relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 opacity-100 translate-y-0">
            <img 
              src="/lovable-uploads/5edf5fbc-b011-463a-ab65-6cee2d9bc733.png" 
              alt="KodeLink Logo" 
              className="w-96 h-96 md:w-[36rem] md:h-[36rem] mx-auto mb-6 object-contain"
            />
          </div>
          
          <div className={`transition-all duration-1000 delay-300 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-blue-100">
              Bridging Creativity & Innovation
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-slate-300 leading-relaxed">
              Smart digital solutions that connect people, platforms, and possibilities. 
              From Zimbabwe to the world — we empower your digital transformation.
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-1000 delay-500 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg group">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg">
                Our Services
              </Button>
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
