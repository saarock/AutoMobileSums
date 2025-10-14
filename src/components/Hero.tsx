import { Phone, MapPin, Shield, Clock, Star, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const callNow = () => {
    window.location.href = 'tel:0481374525';
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-slate-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                <Shield size={14} className="mr-1" />
                12 Month Warranty
              </Badge>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200">
                <Star size={14} className="mr-1" />
                Licensed & Insured
              </Badge>
              <Badge variant="secondary" className="bg-purple-100 text-purple-800 border-purple-200">
                <Clock size={14} className="mr-1" />
                Same Day Service
              </Badge>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Expert Car Service
                <span className="block text-red-500">At Your Location</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Professional mobile mechanics serving all Canberra suburbs. 
                We bring fully equipped service vans to your home, work, or roadside.
              </p>
            </div>

            {/* Location Coverage */}
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin size={20} className="text-red-500" />
              <span>Serving Gungahlin, Tuggeranong, Woden, Belconnen & all ACT suburbs</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={callNow}
                className="bg-red-500 hover:bg-red-600 text-white text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all group"
              >
                <Phone size={20} className="mr-2" />
                Call Now - Free Quote
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                onClick={scrollToContact}
                className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 text-lg px-8 py-4"
              >
                Book Online Service
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">500+</div>
                <div className="text-sm text-gray-600">Cars Serviced</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">24/7</div>
                <div className="text-sm text-gray-600">Emergency Service</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">100%</div>
                <div className="text-sm text-gray-600">Mobile Service</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1597244231257-e72375d34671?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBtZWNoYW5pYyUyMHZhbiUyMHNlcnZpY2V8ZW58MXx8fHwxNzU5ODQwODE0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Alfa Automotive mobile mechanic van providing on-site car service in Canberra"
                className="w-full h-[500px] object-cover"
              />
              
              {/* Floating Contact Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-slate-900">Ready to help now</div>
                    <div className="text-sm text-gray-600">Average response: 30 minutes</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-red-500">0481 374 525</div>
                    <div className="text-xs text-gray-500">Call or text anytime</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-500 rounded-full opacity-10"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500 rounded-full opacity-10"></div>
          </div>
        </div>
      </div>

      {/* Emergency Banner */}
      <div className="bg-red-500 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 rounded-full p-2">
                <Phone size={20} />
              </div>
              <div>
                <div className="font-semibold">Emergency Breakdown?</div>
                <div className="text-sm text-red-100">We're available 24/7 across Canberra</div>
              </div>
            </div>
            <Button 
              variant="secondary"
              onClick={callNow}
              className="bg-white text-red-500 hover:bg-gray-100 font-semibold"
            >
              Call Emergency Line
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}