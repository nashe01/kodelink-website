
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Smartphone, Palette, DollarSign, GraduationCap, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ShinyText from "./ShinyText";

const services = [
  {
    icon: Code,
    title: "Software Development",
    description: "Custom software solutions built with clean code and modern technologies to solve your unique business challenges.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: Smartphone,
    title: "Web & Mobile Apps",
    description: "Responsive web applications and native mobile apps that deliver exceptional user experiences across all platforms.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Visual excellence through creative design solutions that capture your brand's essence and communicate your message effectively.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: DollarSign,
    title: "Fintech Solutions",
    description: "Secure and innovative financial technology solutions that streamline payments, banking, and financial services.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: GraduationCap,
    title: "Edtech Platforms",
    description: "Educational technology platforms that enhance learning experiences and make knowledge accessible to everyone.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Data-driven marketing strategies and campaigns that amplify your brand's reach and drive meaningful engagement.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
  }
];

const Services = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <ShinyText text="Our Services" className="text-slate-900" speed={4} />
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern digital landscape
          </p>
        </div>

        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-lg transition-all duration-500 hover:-translate-y-2 border-0 bg-white overflow-hidden cursor-target ${
                gridVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: gridVisible ? `${index * 150}ms` : '0ms'
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-xl">
                  <ShinyText text={service.title} className="text-slate-900" speed={6} />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 text-center leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
