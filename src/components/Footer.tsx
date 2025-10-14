import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Instagram, 
  Linkedin,
  Download,
  Shield,
  Award,
  CheckCircle
} from 'lucide-react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    "General Service",
    "Logbook Service", 
    "Brake & Suspension",
    "Cooling System",
    "Pre-Purchase Inspection",
    "Battery Replacement",
    "Vehicle Diagnosis",
    "Emergency Breakdown"
  ];

  const serviceAreas = [
    "Gungahlin", "Tuggeranong", "Woden", "Belconnen", 
    "City Centre", "Molonglo Valley", "Jerrabomberra", "Queanbeyan"
  ];

  const callNow = () => {
    window.location.href = 'tel:0481374525';
  };

  const downloadServiceCard = () => {
    // In a real app, this would trigger a PDF download
    alert('Service reminder card download would start here');
  };

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-red-500 text-white rounded-lg p-2 font-bold text-xl">
                ALFA
              </div>
              <div>
                <h1 className="text-white text-xl font-bold">Alfa Automotive</h1>
                <p className="text-slate-300 text-sm">Mobile Mechanics</p>
              </div>
            </div>
            
            <p className="text-slate-300 leading-relaxed">
              Professional mobile mechanics bringing expert automotive services 
              directly to your doorstep across Canberra and ACT.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-slate-800 rounded-lg px-3 py-2">
                <Shield size={16} className="text-green-400" />
                <span className="text-sm">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800 rounded-lg px-3 py-2">
                <Award size={16} className="text-yellow-400" />
                <span className="text-sm">12 Month Warranty</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-4">
              <a href="#" className="bg-slate-800 hover:bg-slate-700 rounded-full p-2 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-slate-700 rounded-full p-2 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-slate-700 rounded-full p-2 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Contact Us</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone size={20} className="text-red-400 shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">24/7 Phone Support</p>
                  <a href="tel:0481374525" className="text-slate-300 hover:text-white transition-colors">
                    0481 374 525
                  </a>
                  <p className="text-slate-400 text-sm">Emergency breakdown available</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={20} className="text-red-400 shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:info@alfaautomotive.com.au" className="text-slate-300 hover:text-white transition-colors">
                    info@alfaautomotive.com.au
                  </a>
                  <p className="text-slate-400 text-sm">Quotes and inquiries</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-red-400 shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Service Area</p>
                  <p className="text-slate-300">All Canberra & ACT</p>
                  <p className="text-slate-400 text-sm">Mobile service - we come to you</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock size={20} className="text-red-400 shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Business Hours</p>
                  <p className="text-slate-300">Mon-Fri: 7AM - 6PM</p>
                  <p className="text-slate-300">Saturday: 8AM - 4PM</p>
                  <p className="text-slate-400 text-sm">Sunday: Emergency only</p>
                </div>
              </div>
            </div>

            <Button 
              onClick={callNow}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold"
            >
              <Phone size={20} className="mr-2" />
              Call Now for Quote
            </Button>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Our Services</h3>
            
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-400 shrink-0" />
                  <a href="#services" className="text-slate-300 hover:text-white transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>

            {/* Service Card Download */}
            <div className="bg-slate-800 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Service Reminder Card</h4>
              <p className="text-slate-400 text-sm mb-3">
                Download our handy service reminder card to keep track of your car's maintenance schedule.
              </p>
              <Button 
                onClick={downloadServiceCard}
                variant="outline"
                size="sm"
                className="w-full border-slate-600 text-slate-300 hover:bg-slate-700"
              >
                <Download size={16} className="mr-2" />
                Download PDF
              </Button>
            </div>
          </div>

          {/* Service Areas */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Service Areas</h3>
            
            <div className="space-y-4">
              <p className="text-slate-300 text-sm">
                We proudly serve all suburbs across Canberra and the ACT region:
              </p>
              
              <ul className="grid grid-cols-2 gap-2">
                {serviceAreas.map((area, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <MapPin size={12} className="text-red-400 shrink-0" />
                    <span className="text-slate-300 text-sm">{area}</span>
                  </li>
                ))}
              </ul>
              
              <p className="text-slate-400 text-sm">
                And many more! Contact us to check if we service your area.
              </p>
            </div>

            {/* Emergency Banner */}
            <div className="bg-red-600 rounded-lg p-4">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Phone size={16} />
                Emergency Breakdown?
              </h4>
              <p className="text-red-100 text-sm mb-3">
                Car trouble? We provide 24/7 emergency roadside assistance across Canberra.
              </p>
              <Button 
                onClick={callNow}
                variant="secondary"
                size="sm"
                className="w-full bg-white text-red-600 hover:bg-gray-100"
              >
                Call Emergency Line
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-slate-700" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-400 text-sm">
            © {currentYear} Alfa Automotive Mobile. All rights reserved.
          </div>
          
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              Warranty Information
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              Sitemap
            </a>
          </div>
          
          <div className="text-slate-400 text-sm">
            ABN: XX XXX XXX XXX
          </div>
        </div>
      </div>
    </footer>
  );
}