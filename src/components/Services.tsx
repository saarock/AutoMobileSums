import { 
  Wrench, 
  FileText, 
  Disc, 
  Thermometer, 
  Search, 
  Battery, 
  Zap, 
  Settings,
  Tool,
  Phone,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

export function Services() {
  const services = [
    {
      icon: Wrench,
      title: "General Service",
      description: "Comprehensive vehicle health check including oil change, filters, fluids, and safety inspection.",
      price: "From $180",
      duration: "1-2 hours",
      image: "https://images.unsplash.com/photo-1615746363486-92cd8c5e0a90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBlbmdpbmUlMjBkaWFnbm9zaXMlMjB0b29sc3xlbnwxfHx8fDE3NTk4NDA4MTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["Oil & filter change", "Fluid top-ups", "Safety check", "Digital report"]
    },
    {
      icon: FileText,
      title: "Logbook Service",
      description: "Manufacturer scheduled service maintaining your warranty with genuine parts and digital records.",
      price: "From $220",
      duration: "1.5-3 hours",
      image: "https://images.unsplash.com/photo-1679461277478-2c967c5ea3c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwbG9nYm9vayUyMHNlcnZpY2V8ZW58MXx8fHwxNzU5ODQwODE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["Warranty compliant", "Genuine parts", "Digital logbook", "Manufacturer schedule"]
    },
    {
      icon: Disc,
      title: "Brake & Suspension",
      description: "Complete brake system inspection, pad replacement, and suspension component servicing.",
      price: "From $150",
      duration: "1-2 hours",
      image: "https://images.unsplash.com/photo-1698998881125-b7b8f05a504b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBicmFrZSUyMGluc3BlY3Rpb24lMjBtZWNoYW5pY3xlbnwxfHx8fDE3NTk4NDA4MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["Brake pad inspection", "Rotor assessment", "Suspension check", "Safety report"]
    },
    {
      icon: Thermometer,
      title: "Cooling System",
      description: "Radiator service, coolant replacement, thermostat check, and leak detection.",
      price: "From $120",
      duration: "1-1.5 hours",
      image: "https://images.unsplash.com/photo-1730461747568-7250e49eb50c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBjb29saW5nJTIwc3lzdGVtJTIwcmFkaWF0b3J8ZW58MXx8fHwxNzU5ODQwODE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["Coolant flush", "Radiator inspection", "Thermostat test", "Leak detection"]
    },
    {
      icon: Search,
      title: "Pre-Purchase Inspection",
      description: "Comprehensive 100+ point inspection before buying a used vehicle with detailed report.",
      price: "From $200",
      duration: "1-2 hours",
      image: "https://images.unsplash.com/photo-1615746363486-92cd8c5e0a90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBlbmdpbmUlMjBkaWFnbm9zaXMlMjB0b29sc3xlbnwxfHx8fDE3NTk4NDA4MTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["100+ point check", "Engine assessment", "Road test", "Detailed report"]
    },
    {
      icon: Battery,
      title: "Battery Replacement",
      description: "Battery testing, replacement with premium brands, and electrical system check.",
      price: "From $180",
      duration: "30-45 minutes",
      image: "https://images.unsplash.com/photo-1583955275036-fd20a9c185bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwYmF0dGVyeSUyMHJlcGxhY2VtZW50fGVufDF8fHx8MTc1OTg0MDgxNHww&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["Battery testing", "Premium brands", "Electrical check", "Warranty included"]
    },
    {
      icon: Zap,
      title: "Vehicle Diagnosis",
      description: "Professional diagnostic scanning to identify engine, transmission, and electrical issues.",
      price: "From $99",
      duration: "30-60 minutes",
      image: "https://images.unsplash.com/photo-1615746363486-92cd8c5e0a90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBlbmdpbmUlMjBkaWFnbm9zaXMlMjB0b29sc3xlbnwxfHx8fDE3NTk4NDA4MTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["ECU scanning", "Error code reading", "System analysis", "Solution advice"]
    },
    {
      icon: Settings,
      title: "Alternator & Starter Motor",
      description: "Testing, repair, and replacement of alternators and starter motors with quality parts.",
      price: "From $250",
      duration: "1-2 hours",
      image: "https://images.unsplash.com/photo-1615746363486-92cd8c5e0a90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBlbmdpbmUlMjBkaWFnbm9zaXMlMjB0b29sc3xlbnwxfHx8fDE3NTk4NDA4MTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["Component testing", "Repair or replace", "Quality parts", "Performance check"]
    },
    {
      icon: Tool,
      title: "Other Mechanical Repairs",
      description: "Full range of mechanical repairs including engine, transmission, and drivetrain services.",
      price: "Quote on inspection",
      duration: "Varies",
      image: "https://images.unsplash.com/photo-1615746363486-92cd8c5e0a90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBlbmdpbmUlMjBkaWFnbm9zaXMlMjB0b29sc3xlbnwxfHx8fDE3NTk4NDA4MTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["Engine repairs", "Transmission service", "Drivetrain work", "Custom solutions"]
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const callNow = () => {
    window.location.href = 'tel:0481374525';
  };

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-red-100 text-red-800 border-red-200">
            Complete Mobile Service
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Professional Car Services
            <span className="block text-red-500">At Your Location</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From routine maintenance to emergency repairs, our certified mechanics bring 
            professional automotive services directly to your door across Canberra.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={service.image}
                  alt={`${service.title} - Mobile automotive service in Canberra`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <service.icon size={20} className="text-red-500" />
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-red-500 text-white">
                    {service.price}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-slate-900">{service.title}</CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>Duration: {service.duration}</span>
                </div>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle size={14} className="text-green-500 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex gap-2 pt-4">
                  <Button 
                    size="sm" 
                    onClick={scrollToContact}
                    className="flex-1 bg-red-500 hover:bg-red-600 text-white group"
                  >
                    Book Now
                    <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={callNow}
                    className="border-gray-300 text-gray-600 hover:bg-gray-50"
                  >
                    <Phone size={14} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Guarantee */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center">
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={24} className="text-red-500" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">12 Month Warranty</h3>
              <p className="text-gray-600 text-sm">All parts and labor covered with comprehensive warranty</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Settings size={24} className="text-green-500" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Certified Mechanics</h3>
              <p className="text-gray-600 text-sm">Licensed professionals with years of experience</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone size={24} className="text-blue-500" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">Emergency breakdown service available anytime</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Need Service Today?</h3>
            <p className="text-red-100 mb-6 max-w-2xl mx-auto">
              Don't wait for problems to get worse. Our mobile mechanics can be at your location 
              within 30 minutes for emergency repairs or schedule a convenient service time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="secondary"
                onClick={callNow}
                className="bg-white text-red-500 hover:bg-gray-100 font-semibold"
              >
                <Phone size={20} className="mr-2" />
                Call Now - 0481 374 525
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={scrollToContact}
                className="border-2 border-white text-white hover:bg-white/10"
              >
                Schedule Service Online
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}