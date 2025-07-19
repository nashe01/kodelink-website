
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ShinyText from "./ShinyText";

const Contact = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-100">
      <div className="container mx-auto px-6">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <ShinyText text="Get In Touch" className="text-slate-900" speed={4} />
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to transform your digital presence? Let's connect and discuss how we can help bring your vision to life.
          </p>
        </div>

        <div 
          ref={contentRef}
          className={`grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto transition-all duration-1000 delay-300 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="space-y-6 mt-8">
            <Card className={`border-0 shadow-lg transition-all duration-700 delay-500 cursor-target ${
              contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <CardHeader className="text-center pb-2">
                <Mail className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-sm">Email Us</CardTitle>
              </CardHeader>
              <CardContent className="text-center py-2">
                <p className="text-slate-600 text-sm">info@kodelink.co.zw</p>
              </CardContent>
            </Card>

            <Card className={`border-0 shadow-lg transition-all duration-700 delay-700 cursor-target ${
              contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <CardHeader className="text-center pb-2">
                <Phone className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-sm">Call Us</CardTitle>
              </CardHeader>
              <CardContent className="text-center py-2">
                <p className="text-slate-600 text-sm">+263 123 456 789</p>
              </CardContent>
            </Card>

            <Card className={`border-0 shadow-lg transition-all duration-700 delay-900 cursor-target ${
              contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <CardHeader className="text-center pb-2">
                <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-sm">Visit Us</CardTitle>
              </CardHeader>
              <CardContent className="text-center py-2">
                <p className="text-slate-600 text-sm">Harare, Zimbabwe</p>
              </CardContent>
            </Card>
          </div>

          <div className={`lg:col-span-2 transition-all duration-1000 delay-600 mt-8 ${
            contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <Card className="border-0 shadow-lg cursor-target">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                    <Input placeholder="Your name" className="border-slate-300" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                    <Input type="email" placeholder="your@email.com" className="border-slate-300" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                  <Input placeholder="Project inquiry" className="border-slate-300" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us about your project..." 
                    className="border-slate-300 min-h-20"
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 group cursor-target">
                  Send Message
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
