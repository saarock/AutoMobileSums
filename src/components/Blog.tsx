import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

export function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Top 5 Summer Car Checks in Canberra",
      excerpt: "Essential maintenance tips to keep your car running smoothly during Canberra's hot summer months. From cooling system checks to tire pressure monitoring.",
      date: "October 1, 2025",
      readTime: "5 min read",
      author: "Alfa Automotive Team",
      category: "Maintenance Tips",
      image: "https://images.unsplash.com/photo-1730461747568-7250e49eb50c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBjb29saW5nJTIwc3lzdGVtJTIwcmFkaWF0b3J8ZW58MXx8fHwxNzU5ODQwODE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      featured: true
    },
    {
      id: 2,
      title: "Mobile vs Workshop Service: Which is Right for You?",
      excerpt: "Comparing the benefits of mobile car service versus traditional workshop visits. Discover why more Canberra residents are choosing mobile mechanics.",
      date: "September 28, 2025",
      readTime: "7 min read",
      author: "Alfa Automotive Team",
      category: "Service Guide",
      image: "https://images.unsplash.com/photo-1597244231257-e72375d34671?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBtZWNoYW5pYyUyMHZhbiUyMHNlcnZpY2V8ZW58MXx8fHwxNzU5ODQwODE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      featured: false
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-purple-100 text-purple-800 border-purple-200">
            Automotive Knowledge
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Expert Tips & Insights
            <span className="block text-red-500">From Our Mechanics</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay informed with the latest automotive tips, maintenance advice, 
            and industry insights from our certified mechanics.
          </p>
        </div>

        {/* Featured Post */}
        {blogPosts.filter(post => post.featured).map((post) => (
          <Card key={post.id} className="mb-12 overflow-hidden border-0 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full min-h-[300px] object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-red-500 text-white">
                  Featured
                </Badge>
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-4">
                  <Badge variant="secondary" className="w-fit bg-purple-100 text-purple-800">
                    {post.category}
                  </Badge>
                  
                  <h3 className="text-3xl font-bold text-slate-900 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <Button className="w-fit bg-red-500 hover:bg-red-600 text-white group">
                    Read Full Article
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}

        {/* Other Posts */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {blogPosts.filter(post => !post.featured).map((post) => (
            <Card key={post.id} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow group">
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-white/90 text-slate-700">
                  {post.category}
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-slate-900 group-hover:text-red-500 transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full group border-gray-300 text-gray-700 hover:bg-gray-50">
                  Read More
                  <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Stay Updated with Car Care Tips
          </h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
            Subscribe to our newsletter for regular maintenance tips, seasonal advice, 
            and exclusive offers for Canberra car owners.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg border-0 text-slate-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3">
              Subscribe
            </Button>
          </div>
          
          <p className="text-slate-400 text-sm mt-4">
            No spam, just valuable car care insights. Unsubscribe anytime.
          </p>
        </div>

        {/* Service CTA */}
        <div className="mt-16 text-center">
          <div className="bg-slate-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Need Professional Car Service?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Don't wait for problems to develop. Schedule your mobile car service today 
              and keep your vehicle running at its best.
            </p>
            <Button 
              onClick={scrollToContact}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3"
            >
              Book Your Service Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}