export default function App() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      title: "General Service & Maintenance",
      description: "Comprehensive vehicle health check including oil change, filters, fluids, belts, and safety inspection.",
      price: "From $180",
      duration: "1-2 hours",
      icon: "🔧"
    },
    {
      title: "Logbook Service", 
      description: "Manufacturer scheduled service maintaining your warranty with genuine parts and digital records.",
      price: "",
      duration: "1.5-3 hours",
      icon: "📋"
    },
    {
      title: "Brake Service & Repairs",
      description: "Complete brake system inspection, pad replacement, rotor machining, and fluid service.",
      price: "",
      duration: "1-2 hours",
      icon: "🛑"
    },
    {
      title: "Battery Replacement & Testing",
      description: "Battery testing, replacement with premium brands, and complete electrical system check.",
      price: "",
      duration: "30-45 minutes",
      icon: "🔋"
    },
    {
      title: "Cooling System Service",
      description: "Radiator service, coolant replacement, thermostat check, and leak detection.",
      price: "",
      duration: "1-1.5 hours",
      icon: "🌡️"
    },
    {
      title: "Pre-Purchase Inspection",
      description: "Comprehensive 100+ point inspection before buying a used vehicle with detailed report.",
      price: "From $150",
      duration: "1-2 hours",
      icon: "🔍"
    },
    {
      title: "Vehicle Diagnostics",
      description: "Professional diagnostic scanning to identify engine, transmission, and electrical issues.",
      price: "",
      duration: "30-60 minutes",
      icon: "💻"
    },
    {
      title: "Alternator & Starter Motor",
      description: "Testing, repair, and replacement of alternators and starter motors with quality parts.",
      price: "",
      duration: "1-2 hours",
      icon: "⚡"
    },
    {
      title: "Transmission Service",
      description: "Automatic and manual transmission fluid service, filter replacement, and diagnostics.",
      price: "",
      duration: "1-2 hours",
      icon: "⚙️"
    },
    {
      title: "Suspension & Steering",
      description: "Complete suspension inspection, shock/strut replacement, and steering system service.",
      price: "",
      duration: "1-3 hours",
      icon: "🏎️"
    },
    {
      title: "Emergency Breakdown",
      description: "24/7 roadside assistance for breakdowns, jump starts, and emergency repairs.",
      price: "",
      duration: "30-60 minutes",
      icon: "🚨"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "Gungahlin",
      rating: 5,
      comment: "Absolutely fantastic service! They came to my work and had my car serviced while I was in meetings. Professional, reliable, and great value."
    },
    {
      name: "David Chen",
      location: "Tuggeranong",
      rating: 5,
      comment: "My car broke down on Sunday and they were out to help within 30 minutes. Fixed the alternator on the spot. Couldn't recommend them more!"
    },
    {
      name: "Emma Rodriguez",
      location: "Belconnen",
      rating: 5,
      comment: "Used them for a pre-purchase inspection on a used car. Detailed report saved me from buying a lemon. Worth every penny!"
    }
  ];

  const faqs = [
    {
      question: "What areas do you service?",
      answer: "We service all Canberra suburbs including Gungahlin, Tuggeranong, Woden, Belconnen, City Centre, Molonglo Valley, and surrounding ACT areas."
    },
    {
      question: "Do you offer same-day service?",
      answer: "Yes! We offer same-day service for most repairs and maintenance. Emergency breakdown service is available 24/7 with typical response times under 30 minutes."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Absolutely. We are fully licensed automotive technicians with comprehensive public liability insurance."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, all major credit cards, EFTPOS, and bank transfer. Payment is due upon completion of service."
    },
    {
      question: "Do you use genuine parts?",
      answer: "We use genuine manufacturer parts where possible, or premium quality aftermarket parts that meet or exceed OEM specifications. All parts come with warranty."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl p-3 shadow-lg"> */}
                {/* <span className="block font-black text-xl tracking-tight">ALFA</span> */}
                <img src="./logo.jpeg" alt="logo" width={50}/>
            
              {/* </div> */}
              <div>
                <h1 className="text-gray-900 font-black tracking-tight">Alfa Automotive</h1>
                <p className="text-gray-500 text-xs tracking-wide">Mobile Mechanics Canberra</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center gap-10">
              <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Services</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-blue-600 transition-colors font-medium">About</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Contact</button>
              <a 
                href="tel:0481374525" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                📞 Call Now
              </a>
            </nav>

            <div className="md:hidden">
              <a 
                href="tel:0481374525" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-semibold text-sm shadow-lg"
              >
                Call
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative bg-gray-900 py-24 lg:py-32 min-h-[700px] flex items-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwbWVjaGFuaWMlMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NjAwNzk1MzR8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Alfa Automotive professional service"
              className="w-full h-full object-cover scale-105"
            />
            {/* Modern gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/98 via-gray-900/90 to-blue-900/80"></div>
          </div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-300 px-5 py-2.5 rounded-full font-medium mb-8">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
                ⚡ 24/7 Emergency Service Available
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-8 tracking-tight">
                Expert Car Service
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mt-2">At Your Location</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
                Professional mobile mechanics serving all Canberra suburbs. We bring 
                fully equipped service vans to your home, work, or roadside with 
                same-day service available.
              </p>

              <div className="flex items-center gap-8 text-gray-300 mb-12">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 bg-green-500 rounded-full shadow-lg shadow-green-500/50"></span>
                  <span className="font-medium">Licensed & Insured</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-5 mb-12">
                <a 
                  href="tel:0481374525"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-5 rounded-2xl font-bold inline-block text-center transition-all shadow-2xl shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-105 group"
                >
                  <span className="flex items-center justify-center gap-3">
                    📞 Call Now - Free Quote
                  </span>
                </a>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-10 border-t border-gray-700/50">
                <div className="group">
                  <div className="text-4xl font-black text-white mb-2 group-hover:text-blue-400 transition-colors">24/7</div>
                  <div className="text-sm text-gray-400 tracking-wide">Emergency Service</div>
                </div>
                <div className="group">
                  <div className="text-4xl font-black text-white mb-2 group-hover:text-blue-400 transition-colors">ACT</div>
                  <div className="text-sm text-gray-400 tracking-wide">Licensed</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-20">
              <div className="inline-flex items-center bg-blue-50 border border-blue-100 text-blue-700 px-6 py-3 rounded-full font-semibold mb-6">
                🔧 Complete Mobile Service
              </div>
              <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight">
                Comprehensive Car Services
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700 mt-2">At Your Doorstep</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                From routine maintenance to complex repairs, our certified mechanics bring 
                professional automotive services directly to you across Canberra.
              </p>
              <p className="text-lg text-blue-600 font-bold mt-6">
                📞 Call us to book and confirm your service time
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <div key={index} className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-1">
                  <div className="flex items-start gap-5 mb-6">
                    <div className="text-3xl bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-2xl group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-black text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                      {service.price && (
                        <div className="text-blue-600 font-black mb-2">{service.price}</div>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="flex items-center text-sm text-gray-500 font-medium">
                    <span className="mr-2">⏱️</span>
                    <span>Duration: {service.duration}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 bg-gradient-to-br from-white to-blue-50 rounded-3xl p-10 lg:p-12 shadow-xl border border-blue-100">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl w-20 h-20 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                    <span className="text-3xl">🏆</span>
                  </div>
                  <h3 className="font-black text-gray-900 mb-2">Certified Mechanics</h3>
                  <p className="text-gray-600">Licensed professionals</p>
                </div>
                
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl w-20 h-20 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform">
                    <span className="text-3xl">🚨</span>
                  </div>
                  <h3 className="font-black text-gray-900 mb-2">24/7 Emergency</h3>
                  <p className="text-gray-600">Always available</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
              <div className="space-y-10">
                <div className="space-y-8">
                  <div className="inline-flex items-center bg-blue-50 border border-blue-100 text-blue-700 px-6 py-3 rounded-full font-semibold">
                    🛡️ Why Choose Alfa Automotive
                  </div>
                  
                  <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight tracking-tight">
                    Professional Mobile Mechanics
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700 mt-2">You Can Trust</span>
                  </h2>
                  
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Alfa Automotive revolutionizes car maintenance by bringing professional 
                    automotive services directly to you. Our certified mechanics use fully 
                    equipped mobile workshops to provide the same quality service you'd 
                    expect from a traditional workshop.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center border border-blue-200 hover:shadow-lg transition-shadow">
                    <div className="text-4xl font-black text-blue-600 mb-2">100%</div>
                    <div className="text-sm text-gray-700 font-semibold">Mobile Service</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center border border-blue-200 hover:shadow-lg transition-shadow">
                    <div className="text-4xl font-black text-blue-600 mb-2">ACT</div>
                    <div className="text-sm text-gray-700 font-semibold">Licensed</div>
                  </div>
                </div>

                <div className="space-y-5">
                  {[
                    "✅ Licensed & Insured Mechanics",
                    "✅ Fully Equipped Mobile Workshops",
                    "✅ Same-Day Service Available",
                    "✅ 24/7 Emergency Breakdown Support",
                    "✅ Transparent Pricing & Digital Reports"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-4 text-gray-700 text-lg font-medium group">
                      <span className="group-hover:scale-110 transition-transform">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1615746363486-92cd8c5e0a90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBlbmdpbmUlMjBkaWFnbm9zaXMlMjB0b29sc3xlbnwxfHx8fDE3NTk4NDA4MTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Professional automotive service"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
                </div>
                
                <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-3 shadow-lg">
                      <span className="text-2xl">🏆</span>
                    </div>
                    <div>
                      <div className="font-black text-gray-900">ACT Licensed</div>
                      <div className="text-sm text-gray-600">Certified Technicians</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 tracking-tight">
                Service Areas Across Canberra
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                We proudly serve all Canberra suburbs and surrounding areas. 
                No matter where you are in the ACT, our mobile mechanics can reach you.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-5 mb-16">
              {[
                "Gungahlin", "Tuggeranong", "Woden", "Belconnen", "City Centre",
                "Molonglo Valley", "Jerrabomberra", "Queanbeyan", "Hall", "Tharwa"
              ].map((area, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-1 group">
                  <div className="text-blue-600 text-2xl mb-3 group-hover:scale-110 transition-transform">📍</div>
                  <div className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{area}</div>
                </div>
              ))}
            </div>

            <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-10 lg:p-12 border border-blue-200">
              <p className="text-xl text-gray-700 mb-8 font-medium">
                Don't see your suburb? Call us! We service the entire ACT region.
              </p>
              <a 
                href="tel:0481374525"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-4 rounded-2xl font-bold inline-block transition-all shadow-lg shadow-blue-600/30 hover:shadow-xl hover:scale-105"
              >
                📞 Check Service Availability
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        {/* <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-600">
                Real reviews from real customers across Canberra
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* FAQ Section */}
        <section className="py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Everything you need to know about our mobile automotive services
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-5">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group">
                  <h3 className="font-black text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-20">
              <div className="inline-flex items-center bg-green-50 border border-green-200 text-green-700 px-6 py-3 rounded-full font-semibold mb-6">
                📞 Get Your Free Quote
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 tracking-tight">
                Book Your Mobile Service
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700 mt-2">In Under 2 Minutes</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Ready to experience hassle-free car service? Get an instant quote 
                or emergency assistance right now.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
              <div className="space-y-8">
                {/* Emergency Contact */}
                <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-3xl p-8 lg:p-10 hover:shadow-2xl transition-shadow">
                  <h3 className="text-red-800 font-black mb-5">🚨 Emergency Breakdown?</h3>
                  <p className="text-red-700 mb-6 leading-relaxed text-lg">
                    Car won't start or broken down? Call us immediately for 24/7 
                    emergency roadside assistance across Canberra.
                  </p>
                  <a 
                    href="tel:0481374525"
                    className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-2xl font-black inline-block w-full text-center transition-all shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    📞 Call Emergency Line Now
                  </a>
                </div>

                {/* Contact Information */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 lg:p-10 border border-gray-200">
                  <h3 className="font-black text-gray-900 mb-8">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-5">
                      <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-3 shadow-lg">
                        <span className="text-white text-xl">📞</span>
                      </div>
                      <div>
                        <h4 className="font-black text-gray-900 mb-1">Phone Support</h4>
                        <a href="tel:0481374525" className="text-blue-600 hover:text-blue-700 font-bold">
                          0481 374 525
                        </a>
                        <p className="text-sm text-gray-600 mt-1">Available 24/7 for emergencies</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-5">
                      <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-3 shadow-lg">
                        <span className="text-white text-xl">✉️</span>
                      </div>
                      <div>
                        <h4 className="font-black text-gray-900 mb-1">Email</h4>
                        <a href="mailto:info@alfaautomotive.com.au" className="text-blue-600 hover:text-blue-700 font-medium break-all">
                          info@alfaautomotive.com.au
                        </a>
                        <p className="text-sm text-gray-600 mt-1">For quotes and inquiries</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-5">
                      <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-3 shadow-lg">
                        <span className="text-white text-xl">📍</span>
                      </div>
                      <div>
                        <h4 className="font-black text-gray-900 mb-1">Service Area</h4>
                        <p className="text-gray-700 font-medium">All Canberra & ACT</p>
                        <p className="text-sm text-gray-600 mt-1">We come to you - home, work, or roadside</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-5">
                      <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-3 shadow-lg">
                        <span className="text-white text-xl">🕒</span>
                      </div>
                      <div>
                        <h4 className="font-black text-gray-900 mb-1">Business Hours</h4>
                        <p className="text-gray-700 font-medium">Mon-Fri: 7AM - 6PM</p>
                        <p className="text-gray-700 font-medium">Saturday: 8AM - 4PM</p>
                        <p className="text-sm text-gray-600 mt-1">Emergency service 24/7</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-3xl p-10 lg:p-12 shadow-2xl">
                <h3 className="font-black mb-6">Ready to Get Started?</h3>
                <p className="mb-10 text-blue-100 text-lg leading-relaxed">
                  Call us now for an instant quote or to book your mobile car service. 
                  Our certified mechanics will be with you in no time!
                </p>

                <div className="space-y-6 mb-10">
                  <a 
                    href="tel:0481374525"
                    className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-5 rounded-2xl font-black inline-block w-full text-center transition-all shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    📞 Call Now: 0481 374 525
                  </a>
                  
                  <p className="text-blue-200 text-center font-medium">
                    Average response time: 30 minutes • Available 24/7
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-blue-800/50 backdrop-blur rounded-2xl p-5 border border-blue-500/30">
                    <div className="text-3xl font-black mb-1">15min</div>
                    <div className="text-xs text-blue-200">Quote Response</div>
                  </div>
                  <div className="bg-blue-800/50 backdrop-blur rounded-2xl p-5 border border-blue-500/30">
                    <div className="text-3xl font-black mb-1">30min</div>
                    <div className="text-xs text-blue-200">Emergency Response</div>
                  </div>
                  <div className="bg-blue-800/50 backdrop-blur rounded-2xl p-5 border border-blue-500/30">
                    <div className="text-3xl font-black mb-1">24/7</div>
                    <div className="text-xs text-blue-200">Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-900 to-blue-900 text-white py-20 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-12 lg:gap-16">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                {/* <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl p-3 font-black shadow-lg"> */}
                  {/* <span className="block text-xl tracking-tight">ALFA</span> */}
                {/* </div> */}
                <img src="./logo.jpeg" alt="logo" width={50}/>
                
                <div>
                  <h3 className="text-white font-black">Alfa Automotive</h3>
                  <p className="text-gray-400 text-sm">Mobile Mechanics</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Professional mobile mechanics bringing expert automotive services 
                directly to your doorstep across Canberra and ACT.
              </p>
              <div className="flex gap-3">
                <div className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-bold">Licensed</div>
                <div className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold">Insured</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-black mb-6">Quick Links</h4>
              <div className="space-y-3 text-gray-400">
                <button onClick={() => scrollToSection('services')} className="block hover:text-white transition-colors font-medium">Services</button>
                <button onClick={() => scrollToSection('about')} className="block hover:text-white transition-colors font-medium">About Us</button>
                <button onClick={() => scrollToSection('contact')} className="block hover:text-white transition-colors font-medium">Contact</button>
                <a href="#" className="block hover:text-white transition-colors font-medium">Service Areas</a>
                <a href="#" className="block hover:text-white transition-colors font-medium">Emergency Service</a>
              </div>
            </div>

            <div>
              <h4 className="font-black mb-6">Our Services</h4>
              <div className="space-y-2.5 text-gray-400 text-sm">
                <p className="hover:text-white transition-colors">• General Service & Maintenance</p>
                <p className="hover:text-white transition-colors">• Logbook Service</p>
                <p className="hover:text-white transition-colors">• Brake Service & Repairs</p>
                <p className="hover:text-white transition-colors">• Battery Replacement</p>
                <p className="hover:text-white transition-colors">• Pre-Purchase Inspections</p>
                <p className="hover:text-white transition-colors">• Emergency Breakdown</p>
                <p className="hover:text-white transition-colors">• And much more...</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-black mb-6">Contact & Emergency</h4>
              <div className="space-y-5">
                <div>
                  <p className="text-gray-400 text-sm mb-1">📞 24/7 Phone Support</p>
                  <a href="tel:0481374525" className="text-blue-400 hover:text-blue-300 font-black">
                    0481 374 525
                  </a>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">✉️ Email</p>
                  <a href="mailto:info@alfaautomotive.com.au" className="text-blue-400 hover:text-blue-300 font-medium break-all">
                    info@alfaautomotive.com.au
                  </a>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">📍 Service Area</p>
                  <p className="text-white font-bold">All Canberra & ACT</p>
                </div>
                
                <a 
                  href="tel:0481374525"
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-2xl font-black inline-block w-full text-center transition-all shadow-lg hover:shadow-xl hover:scale-105 mt-6"
                >
                  🚨 Emergency Line
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-16 pt-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-gray-500 text-sm">
                © 2025 Alfa Automotive Mobile. All rights reserved. | ABN: XX XXX XXX XXX
              </p>
              <div className="flex gap-8 text-sm text-gray-500">
                <a href="#" className="hover:text-white transition-colors font-medium">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors font-medium">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors font-medium">Warranty Info</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}