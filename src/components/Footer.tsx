
import { Code, Smartphone, Palette, DollarSign, GraduationCap, TrendingUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">KodeLink</h3>
            <p className="text-slate-300 mb-4">
              Bridging creativity and innovation through smart digital solutions. 
              Connecting people, platforms, and possibilities.
            </p>
            <div className="flex gap-4">
              <Code className="h-6 w-6 text-blue-400" />
              <Smartphone className="h-6 w-6 text-blue-400" />
              <Palette className="h-6 w-6 text-blue-400" />
              <DollarSign className="h-6 w-6 text-blue-400" />
              <GraduationCap className="h-6 w-6 text-blue-400" />
              <TrendingUp className="h-6 w-6 text-blue-400" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-300">
              <li>Software Development</li>
              <li>Web & Mobile Apps</li>
              <li>Graphic Design</li>
              <li>Fintech Solutions</li>
              <li>Edtech Platforms</li>
              <li>Digital Marketing</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-slate-300">
              <li>📧 info@kodelink.co.zw</li>
              <li>📞 +263 123 456 789</li>
              <li>📍 Harare, Zimbabwe</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2024 KodeLink. All rights reserved. Made with ❤️ in Zimbabwe.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
