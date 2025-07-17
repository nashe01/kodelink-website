
import { Button } from "@/components/ui/button";
import { MapPin, Users, Zap, Target } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div 
            ref={contentRef}
            className={`transition-all duration-1000 ${
              contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              About KodeLink
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Based in Zimbabwe, KodeLink is where creativity meets innovation. We're passionate about 
              creating smart digital solutions that bridge the gap between imagination and reality.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our mission is to empower brands, startups, and institutions with cutting-edge tools 
              that help them thrive in our fast-evolving digital world. We believe in clean code, 
              visual excellence, and seamless user experiences.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              Learn More About Us
            </Button>
          </div>

          <div 
            ref={imageRef}
            className={`relative transition-all duration-1000 delay-300 ${
              imageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80" 
                alt="Team working on technology solutions" 
                className="w-full h-96 object-cover"
              />
            </div>
            <div className={`absolute -bottom-6 -right-6 grid grid-cols-2 gap-4 transition-all duration-1000 delay-500 ${
              imageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="bg-slate-50 p-4 rounded-lg text-center shadow-lg">
                <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="text-sm font-semibold text-slate-900">Zimbabwe Based</h3>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg text-center shadow-lg">
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="text-sm font-semibold text-slate-900">Expert Team</h3>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg text-center shadow-lg">
                <Zap className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="text-sm font-semibold text-slate-900">Innovation</h3>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg text-center shadow-lg">
                <Target className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="text-sm font-semibold text-slate-900">Results Focused</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
