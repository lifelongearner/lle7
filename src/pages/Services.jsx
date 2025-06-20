import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Palette, Globe, Users, Search, BarChart3, Megaphone, Smartphone, Code, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: 'Logo Design & Branding',
      description: 'Create memorable brand identities that resonate with your target audience and stand out in competitive markets.',
      features: [
        'Custom Logo Design',
        'Brand Guidelines & Style Guide',
        'Visual Identity System',
        'Brand Strategy Development',
        'Color Palette & Typography',
        'Business Card & Stationery Design'
      ],
      pricing: 'Starting at $1,500',
      timeline: '2-3 weeks',
    },
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Build responsive, SEO-optimized websites that convert visitors into customers and drive business growth.',
      features: [
        'Responsive Design (Mobile-First)',
        'SEO Optimization',
        'Fast Loading Performance',
        'Content Management System',
        'E-commerce Integration',
        'Analytics & Tracking Setup'
      ],
      pricing: 'Starting at $3,500',
      timeline: '4-6 weeks',
    },
    {
      icon: Users,
      title: 'Social Media Management',
      description: 'Develop and execute comprehensive social media strategies that build your brand and engage your audience.',
      features: [
        'Content Strategy & Planning',
        'Multi-Platform Management',
        'Community Engagement',
        'Analytics & Reporting',
        'Influencer Collaboration',
        'Paid Social Advertising'
      ],
      pricing: 'Starting at $2,000/month',
      timeline: 'Ongoing',
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Data-driven SEO strategies that improve rankings and drive qualified traffic to your business.',
      features: [
        'Keyword Research & Analysis',
        'Technical SEO Audit',
        'On-Page Optimization',
        'Content Optimization',
        'Link Building Strategy',
        'Performance Tracking & Reporting'
      ],
      pricing: 'Starting at $1,800/month',
      timeline: '3-6 months for results',
    },
    {
      icon: BarChart3,
      title: 'Digital Marketing Strategy',
      description: 'Comprehensive digital marketing strategies that align with your business goals and drive measurable results.',
      features: [
        'Marketing Strategy Development',
        'Competitor Analysis',
        'Customer Journey Mapping',
        'Conversion Rate Optimization',
        'Marketing Automation',
        'ROI Tracking & Analysis'
      ],
      pricing: 'Starting at $2,500',
      timeline: '2-4 weeks',
    },
    {
      icon: Megaphone,
      title: 'Pay-Per-Click Advertising',
      description: 'Strategic PPC campaigns that maximize your advertising budget and deliver qualified leads.',
      features: [
        'Google Ads Management',
        'Facebook & Instagram Ads',
        'LinkedIn Advertising',
        'Campaign Optimization',
        'A/B Testing',
        'Conversion Tracking'
      ],
      pricing: 'Starting at $1,500/month + ad spend',
      timeline: '1-2 weeks setup',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description: 'We start by understanding your business, goals, and target audience to develop a customized strategy.',
    },
    {
      step: '02',
      title: 'Design & Development',
      description: 'Our team creates compelling designs and develops solutions that align with your brand and objectives.',
    },
    {
      step: '03',
      title: 'Testing & Optimization',
      description: 'We thoroughly test all deliverables and optimize for performance, usability, and conversions.',
    },
    {
      step: '04',
      title: 'Launch & Support',
      description: 'We launch your project and provide ongoing support to ensure continued success and growth.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
              Our <span className="text-brand-secondary">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed animate-slide-up">
              Comprehensive digital solutions designed to grow your business and establish your competitive edge in the market.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={service.title} className="hover-lift animate-slide-up border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="bg-brand-primary text-white p-3 rounded-lg mr-4">
                        <IconComponent size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                          <span className="font-semibold text-brand-secondary">{service.pricing}</span>
                          <span>•</span>
                          <span>{service.timeline}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center text-sm text-gray-700">
                            <div className="w-2 h-2 bg-brand-secondary rounded-full mr-3 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button 
                      asChild
                      className="w-full bg-brand-primary hover:bg-blue-800 text-white font-semibold rounded-lg hover-lift"
                    >
                      <Link to="/contact">
                        Get Started <ArrowRight className="ml-2" size={16} />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure every project delivers exceptional results and exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={step.step} className="text-center animate-slide-up">
                <div className="bg-brand-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Lifelong Earner?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-brand-secondary text-white p-2 rounded-lg mr-4 mt-1">
                    <Zap size={16} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">AI-Enhanced Workflow</h3>
                    <p className="text-gray-600">We leverage cutting-edge AI tools to deliver faster, more efficient results without compromising quality.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-brand-secondary text-white p-2 rounded-lg mr-4 mt-1">
                    <BarChart3 size={16} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Proven Track Record</h3>
                    <p className="text-gray-600">With 500+ successful projects and 98% client satisfaction, our results speak for themselves.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-brand-secondary text-white p-2 rounded-lg mr-4 mt-1">
                    <Users size={16} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Strategic Partnership</h3>
                    <p className="text-gray-600">We don't just deliver projects – we become your long-term strategic partners for continued growth.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-brand-secondary text-white p-2 rounded-lg mr-4 mt-1">
                    <Smartphone size={16} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">24/7 Support</h3>
                    <p className="text-gray-600">Our dedicated support team is always available to help you succeed and address any concerns.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in">
              <div className="bg-gradient-brand rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
                <p className="text-gray-200 mb-6 leading-relaxed">
                  Let's discuss your project and create a customized solution that drives real results for your business.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-brand-secondary rounded-full mr-3"></div>
                    <span>Free initial consultation</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-brand-secondary rounded-full mr-3"></div>
                    <span>Custom strategy development</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-brand-secondary rounded-full mr-3"></div>
                    <span>Transparent pricing</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-brand-secondary rounded-full mr-3"></div>
                    <span>Guaranteed satisfaction</span>
                  </li>
                </ul>
                <Button 
                  asChild
                  size="lg"
                  className="w-full bg-brand-secondary hover:bg-orange-600 text-white font-semibold rounded-lg hover-lift"
                >
                  <Link to="/contact">
                    Start Your Project <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transform Your Digital Presence Today
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Don't let your competition get ahead. Start your digital transformation journey with our expert team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-brand-secondary hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg hover-lift"
              >
                <Link to="/contact">
                  Get Free Consultation <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white px-8 py-4 text-lg font-semibold rounded-lg hover-lift"
              >
                <Link to="/portfolio">
                  View Our Portfolio
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

