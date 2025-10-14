import { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Calendar,
  User,
  Car,
  MessageSquare,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { toast } from 'sonner@2.0.3';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    location: '',
    preferredTime: '',
    vehicleDetails: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    "General Service",
    "Logbook Service", 
    "Brake & Suspension",
    "Cooling System",
    "Pre-Purchase Inspection",
    "Battery Replacement",
    "Vehicle Diagnosis",
    "Alternator & Starter Motor",
    "Other Mechanical Repairs",
    "Emergency Breakdown"
  ];

  const timeSlots = [
    "ASAP - Emergency",
    "Morning (8AM - 12PM)",
    "Afternoon (12PM - 5PM)", 
    "Evening (5PM - 7PM)",
    "Weekend Morning",
    "Weekend Afternoon"
  ];

  const canberraSuburbs = [
    "Gungahlin", "Tuggeranong", "Woden", "Belconnen", "City Centre",
    "Molonglo Valley", "Jerrabomberra", "Queanbeyan", "Hall", "Tharwa",
    "Other Canberra Suburb"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name || !formData.phone || !formData.service) {
      toast.error("Please fill in all required fields");
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success("Quote request submitted! We'll call you within 15 minutes.");
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        location: '',
        preferredTime: '',
        vehicleDetails: '',
        message: ''
      });
    } catch (error) {
      toast.error("Something went wrong. Please call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const callNow = () => {
    window.location.href = 'tel:0481374525';
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-green-100 text-green-800 border-green-200">
            Get Your Free Quote
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Book Your Mobile Service
            <span className="block text-red-500">In Under 2 Minutes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get an instant quote and book your mobile car service. 
            Our mechanics will call you within 15 minutes to confirm details.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Emergency Contact */}
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-red-700 flex items-center gap-2">
                  <AlertCircle size={20} />
                  Emergency Breakdown?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-600 mb-4 text-sm">
                  Car won't start or broken down? Call us immediately for emergency roadside assistance.
                </p>
                <Button 
                  onClick={callNow}
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold"
                >
                  <Phone size={20} className="mr-2" />
                  Call Emergency Line
                </Button>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 rounded-full p-2 shrink-0">
                    <Phone size={20} className="text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Phone</h4>
                    <a href="tel:0481374525" className="text-blue-600 hover:text-blue-700">
                      0481 374 525
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Available 24/7 for emergencies</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 rounded-full p-2 shrink-0">
                    <Mail size={20} className="text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                    <a href="mailto:info@alfaautomotive.com.au" className="text-blue-600 hover:text-blue-700">
                      info@alfaautomotive.com.au
                    </a>
                    <p className="text-sm text-gray-600 mt-1">For quotes and inquiries</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 rounded-full p-2 shrink-0">
                    <MapPin size={20} className="text-purple-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Service Area</h4>
                    <p className="text-gray-600">All Canberra & ACT</p>
                    <p className="text-sm text-gray-600 mt-1">We come to you - home, work, or roadside</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 rounded-full p-2 shrink-0">
                    <Clock size={20} className="text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Business Hours</h4>
                    <p className="text-gray-600">Mon-Fri: 7AM - 6PM</p>
                    <p className="text-gray-600">Sat: 8AM - 4PM</p>
                    <p className="text-sm text-gray-600 mt-1">Emergency service available 24/7</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle size={24} className="text-green-500" />
                  <h4 className="font-semibold text-green-800">Fast Response Guarantee</h4>
                </div>
                <ul className="space-y-2 text-sm text-green-700">
                  <li>• Quote provided within 15 minutes</li>
                  <li>• Emergency response within 30 minutes</li>
                  <li>• Scheduled service arrives on time</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Quote Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900">Get Your Free Quote</CardTitle>
                <p className="text-gray-600">Fill out this form and we'll call you back within 15 minutes with your quote.</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="flex items-center gap-2">
                        <User size={16} />
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Your full name"
                        required
                        className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center gap-2">
                        <Phone size={16} />
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="04XX XXX XXX"
                        required
                        className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail size={16} />
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your.email@example.com"
                      className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                    />
                  </div>

                  {/* Service Details */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="flex items-center gap-2">
                        <CheckCircle size={16} />
                        Service Required *
                      </Label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                        <SelectTrigger className="border-gray-300 focus:border-red-500 focus:ring-red-500">
                          <SelectValue placeholder="Select service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>{service}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label className="flex items-center gap-2">
                        <MapPin size={16} />
                        Location
                      </Label>
                      <Select value={formData.location} onValueChange={(value) => handleInputChange('location', value)}>
                        <SelectTrigger className="border-gray-300 focus:border-red-500 focus:ring-red-500">
                          <SelectValue placeholder="Select suburb" />
                        </SelectTrigger>
                        <SelectContent>
                          {canberraSuburbs.map((suburb) => (
                            <SelectItem key={suburb} value={suburb}>{suburb}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <Calendar size={16} />
                      Preferred Time
                    </Label>
                    <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange('preferredTime', value)}>
                      <SelectTrigger className="border-gray-300 focus:border-red-500 focus:ring-red-500">
                        <SelectValue placeholder="When would you like service?" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((slot) => (
                          <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="vehicle" className="flex items-center gap-2">
                      <Car size={16} />
                      Vehicle Details
                    </Label>
                    <Input
                      id="vehicle"
                      value={formData.vehicleDetails}
                      onChange={(e) => handleInputChange('vehicleDetails', e.target.value)}
                      placeholder="e.g., 2018 Toyota Camry, 50,000km"
                      className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="flex items-center gap-2">
                      <MessageSquare size={16} />
                      Additional Information
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Any symptoms, concerns, or specific requirements..."
                      rows={4}
                      className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 text-lg"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <CheckCircle size={20} className="mr-2" />
                          Get Free Quote
                        </>
                      )}
                    </Button>
                    
                    <Button 
                      type="button"
                      variant="outline"
                      onClick={callNow}
                      className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 py-3 text-lg"
                    >
                      <Phone size={20} className="mr-2" />
                      Call Instead
                    </Button>
                  </div>

                  <p className="text-sm text-gray-600 text-center">
                    By submitting this form, you agree to be contacted about your service request. 
                    We respect your privacy and won't share your information with third parties.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}