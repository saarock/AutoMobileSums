import { 
  MapPin, 
  Clock, 
  Shield, 
  Truck, 
  Users, 
  Award,
  CheckCircle,
  Phone,
  Leaf,
  Wrench
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

export function About() {
  const features = [
    {
      icon: MapPin,
      title: "100% Mobile Service",
      description: "We come to you - home, work, or roadside. No need to visit a workshop.",
      color: "text-blue-500 bg-blue-100"
    },
    {
      icon: Truck,
      title: "Fully Equipped Vans",
      description: "Professional mobile workshops with all tools and diagnostic equipment.",
      color: "text-green-500 bg-green-100"
    },
    {
      icon: Users,
      title: "Certified Mechanics",
      description: "Licensed automotive technicians with years of professional experience.",
      color: "text-purple-500 bg-purple-100"
    },
    {
      icon: Shield,
      title: "12-Month Warranty",
      description: "All parts and labor covered with comprehensive warranty protection.",
      color: "text-red-500 bg-red-100"
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Practices",
      description: "Proper disposal of fluids and parts, environmental compliance.",
      color: "text-green-600 bg-green-100"
    },
    {
      icon: Clock,
      title: "24/7 Emergency Support",
      description: "Breakdown assistance available around the clock across Canberra.",
      color: "text-orange-500 bg-orange-100"
    }
  ];

  const serviceAreas = [
    "Gungahlin", "Tuggeranong", "Woden", "Belconnen", "City Centre",
    "Molonglo Valley", "Jerrabomberra", "Queanbeyan", "Hall", "Tharwa"
  ];

  const callNow = () => {
    window.location.href = 'tel:0481374525';
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
            Why Choose Alfa Automotive
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Professional Mobile Mechanics
            <span className="block text-red-500">You Can Trust</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Bringing expert automotive services directly to your location across Canberra. 
            Experience the convenience of professional car service without leaving home.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">
                Expert Service at Your Doorstep
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Alfa Automotive revolutionizes car maintenance by bringing professional 
                automotive services directly to you. Our certified mechanics use fully 
                equipped mobile workshops to provide the same quality service you'd 
                expect from a traditional workshop - but at your convenience.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Founded on the principle that quality car service shouldn't disrupt 
                your day, we've served hundreds of satisfied customers across Canberra 
                and surrounding areas. Our commitment to excellence, transparency, and 
                convenience has made us the trusted choice for mobile automotive care.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-3xl font-bold text-red-500 mb-1">500+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-3xl font-bold text-red-500 mb-1">5 Years</div>
                <div className="text-sm text-gray-600">Experience</div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={callNow}
                className="bg-red-500 hover:bg-red-600 text-white"
              >
                <Phone size={20} className="mr-2" />
                Call Now - Free Quote
              </Button>
              <Button 
                variant="outline"
                onClick={scrollToContact}
                className="border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Schedule Service
              </Button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1597244231257-e72375d34671?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBtZWNoYW5pYyUyMHZhbiUyMHNlcnZpY2V8ZW58MXx8fHwxNzU5ODQwODE0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Alfa Automotive mobile mechanic providing professional car service"
                className="w-full h-[400px] object-cover"
              />
            </div>
            
            {/* Floating Award Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="bg-yellow-100 rounded-full p-2">
                  <Award size={20} className="text-yellow-600" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Licensed & Insured</div>
                  <div className="text-sm text-gray-600">ACT Certified Mechanics</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className={`rounded-full w-12 h-12 flex items-center justify-center mb-4 ${feature.color}`}>
                  <feature.icon size={24} />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Areas */}
        <div className="bg-slate-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Service Areas Across Canberra
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We proudly serve all Canberra suburbs and surrounding areas. 
              No matter where you are in the ACT, our mobile mechanics can reach you.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4 mb-8">
            {serviceAreas.map((area, index) => (
              <div key={index} className="flex items-center gap-2 bg-white rounded-lg p-3 shadow-sm">
                <CheckCircle size={16} className="text-green-500 shrink-0" />
                <span className="text-sm font-medium text-slate-900">{area}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-6">
              Don't see your suburb? Call us! We service the entire ACT region and 
              can often accommodate locations outside our standard service area.
            </p>
            <Button onClick={callNow} className="bg-red-500 hover:bg-red-600 text-white">
              <MapPin size={20} className="mr-2" />
              Check Service Availability
            </Button>
          </div>
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              How It Works
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Getting professional car service has never been easier. 
              Here's how our mobile service works.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                <Phone size={24} className="text-red-500" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">1. Book Service</h4>
              <p className="text-gray-600 text-sm">
                Call us or book online. We'll schedule a convenient time and location for your service.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Truck size={24} className="text-blue-500" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">2. We Come to You</h4>
              <p className="text-gray-600 text-sm">
                Our fully equipped mobile workshop arrives at your chosen location on time.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Wrench size={24} className="text-green-500" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">3. Professional Service</h4>
              <p className="text-gray-600 text-sm">
                Expert service completed while you continue with your day. Digital report provided.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}