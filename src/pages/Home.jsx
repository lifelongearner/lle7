import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Globe, Palette, Search, Star, Users, TrendingUp } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Home = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    experience: 0,
    satisfaction: 0,
    roi: 0,
  });

  // Animated counters
  useEffect(() => {
    const targets = {
      projects: 500,
      experience: 15,
      satisfaction: 98,
      roi: 250,
    };

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = Object.keys(targets).map((key) => {
      const target = targets[key];
      const increment = target / steps;
      let current = 0;

      return setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(intervals.find(i => i === interval));
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, stepDuration);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  const services = [
    {
      icon: Palette,
      title: 'Logo Design & Branding',
      description: 'Create memorable brand identities that resonate with your target audience and stand out in competitive markets.',
      features: ['Custom Logo Design', 'Brand Guidelines', 'Visual Identity', 'Brand Strategy'],
    },
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Build responsive, SEO-optimized websites that convert visitors into customers and drive business growth.',
      features: ['Responsive Design', 'SEO Optimization', 'Fast Loading', 'Mobile-First'],
    },
    {
      icon: Users,
      title: 'Social Media Management',
      description: 'Develop and execute comprehensive social media strategies that build your brand and engage your audience.',
      features: ['Content Strategy', 'Platform Management', 'Analytics', 'Growth Optimization'],
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Data-driven SEO strategies that improve rankings and drive qualified traffic to your business.',
      features: ['Keyword Research', 'Technical SEO', 'Content Optimization', 'Performance Tracking'],
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Solutions',
      content: 'Lifelong Earner transformed our digital presence. Our website traffic increased by 300% and conversions doubled within 6 months.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Founder, GreenSpace Co.',
      content: 'The branding work was exceptional. Our new logo and visual identity perfectly capture our company\'s vision and values.',
      rating: 5,
    },
    {
      name: 'Emma Rodriguez',
      role: 'Marketing Director, FitLife',
      content: 'Their social media strategy helped us reach new audiences and build a community around our brand. Highly recommended!',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-medium mb-6 animate-bounce-in">
              🚀 AI-Powered Digital Solutions
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
              Elevate Your{' '}
              <span className="text-brand-secondary">Digital Presence</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed animate-slide-up">
              Transform your brand with expert logo design, cutting-edge web development, and strategic social media management. 
              We combine <span className="font-semibold text-brand-secondary">decades of SEO, sales, and marketing expertise</span> to boost your bottom line.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Button 
                asChild
                size="lg"
                className="bg-brand-secondary hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg hover-lift"
              >
                <Link to="/contact">
                  Start Your Transformation <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-brand-primary px-8 py-4 text-lg font-semibold rounded-lg hover-lift"
              >
                <Link to="/portfolio">
                  Explore Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-bounce-in">
              <div className="text-4xl lg:text-5xl font-bold text-brand-primary mb-2">
                {counters.projects}+
              </div>
              <div className="text-gray-600 font-medium">Projects Completed</div>
            </div>
            <div className="text-center animate-bounce-in">
              <div className="text-4xl lg:text-5xl font-bold text-brand-primary mb-2">
                {counters.experience}+
              </div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="text-center animate-bounce-in">
              <div className="text-4xl lg:text-5xl font-bold text-brand-primary mb-2">
                {counters.satisfaction}%
              </div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
            </div>
            <div className="text-center animate-bounce-in">
              <div className="text-4xl lg:text-5xl font-bold text-brand-primary mb-2">
                {counters.roi}%
              </div>
              <div className="text-gray-600 font-medium">Average ROI Increase</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Services That Drive Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive digital solutions that help businesses grow, engage their audience, 
              and achieve measurable success in today's competitive landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={service.title} className="hover-lift animate-slide-up border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="bg-brand-primary text-white p-3 rounded-lg mr-4">
                        <IconComponent size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-brand-secondary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button 
              asChild
              size="lg"
              className="bg-brand-primary hover:bg-blue-800 text-white px-8 py-4 text-lg font-semibold rounded-lg hover-lift"
            >
              <Link to="/services">
                View All Services <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real results from real businesses that trusted us with their digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.name} className="hover-lift animate-slide-up border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-brand text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your digital marketing goals and take your brand to the next level.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-brand-secondary hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg hover-lift"
            >
              <Link to="/contact">
                Get Started Today <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

