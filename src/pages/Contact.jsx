import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Twitter, Youtube, Instagram, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        budget: '',
        message: '',
      });
    }, 3000);
  };

  const services = [
    'Logo Design & Branding',
    'Website Development',
    'Social Media Management',
    'SEO Optimization',
    'Digital Marketing Strategy',
    'Pay-Per-Click Advertising',
    'Other'
  ];

  const budgetRanges = [
    'Under $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000+',
    'Let\'s discuss'
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'hello@lifelongearner.com',
      description: 'Send us an email and we\'ll respond within 24 hours.',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Speak directly with our team during business hours.',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Remote & Global',
      description: 'We work with clients worldwide from our distributed team.',
    },
  ];

  const socialLinks = [
    {
      name: 'Twitter',
      href: 'https://x.com/Lifelong_Earner',
      icon: Twitter,
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/watch?v=kpF5N6JkiHU',
      icon: Youtube,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/lifelong.earner/',
      icon: Instagram,
    },
    {
      name: 'TikTok',
      href: 'https://www.tiktok.com/@lifelongearner',
      icon: ExternalLink,
    },
    {
      name: 'Linktree',
      href: 'https://linktr.ee/lifelongearner',
      icon: ExternalLink,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
              Get In <span className="text-brand-secondary">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed animate-slide-up">
              Ready to transform your digital presence? Let's discuss your project and create a strategy 
              that drives real results for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="animate-slide-up">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Let's Start a Conversation
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  We're here to help you achieve your digital marketing goals. Reach out to us through 
                  any of the channels below, and we'll get back to you promptly.
                </p>

                <div className="space-y-6 mb-8">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={info.title} className="flex items-start">
                        <div className="bg-brand-primary text-white p-3 rounded-lg mr-4 mt-1">
                          <IconComponent size={20} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                          <p className="text-brand-secondary font-medium mb-1">{info.details}</p>
                          <p className="text-gray-600 text-sm">{info.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Social Media Links */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-100 text-gray-700 hover:bg-brand-primary hover:text-white p-3 rounded-lg transition-all duration-300 hover-lift"
                          aria-label={social.name}
                        >
                          <IconComponent size={20} />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="animate-slide-up border-0 shadow-xl">
                <CardContent className="p-8">
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-300"
                            placeholder="Your full name"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-300"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                            Company Name
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-300"
                            placeholder="Your company name"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-300"
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                            Service Interested In *
                          </label>
                          <select
                            id="service"
                            name="service"
                            required
                            value={formData.service}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-300"
                          >
                            <option value="">Select a service</option>
                            {services.map((service) => (
                              <option key={service} value={service}>
                                {service}
                              </option>
                            ))}
                          </select>
                        </div>
                        
                        <div>
                          <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                            Project Budget
                          </label>
                          <select
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-300"
                          >
                            <option value="">Select budget range</option>
                            {budgetRanges.map((range) => (
                              <option key={range} value={range}>
                                {range}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Project Details *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-300 resize-none"
                          placeholder="Tell us about your project, goals, and any specific requirements..."
                        />
                      </div>

                      <Button 
                        type="submit"
                        size="lg"
                        className="w-full bg-brand-secondary hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg hover-lift"
                      >
                        Send Message <Send className="ml-2" size={20} />
                      </Button>
                    </form>
                  ) : (
                    <div className="text-center py-12 animate-bounce-in">
                      <div className="bg-green-100 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle size={32} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h3>
                      <p className="text-gray-600 mb-4">
                        Thank you for reaching out. We'll get back to you within 24 hours.
                      </p>
                      <p className="text-sm text-gray-500">
                        In the meantime, feel free to follow us on social media for the latest updates.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get quick answers to common questions about our services and process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="animate-slide-up border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  How long does a typical project take?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Project timelines vary depending on scope and complexity. Logo design typically takes 2-3 weeks, 
                  website development 4-6 weeks, and comprehensive digital marketing strategies 2-4 weeks to develop.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-slide-up border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Do you work with businesses of all sizes?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes! We work with startups, small businesses, and enterprise companies. Our solutions are 
                  scalable and customized to fit your specific needs and budget.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-slide-up border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  What makes your approach different?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We combine decades of experience with cutting-edge AI tools to deliver faster, more efficient results. 
                  Our focus is on measurable ROI and long-term strategic partnerships.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-slide-up border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Do you provide ongoing support?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Absolutely! We offer 24/7 support and ongoing optimization services to ensure your digital 
                  presence continues to perform and grow over time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-brand text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their businesses with our expert digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-brand-secondary hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg hover-lift"
              >
                <a href="mailto:hello@lifelongearner.com">
                  Email Us Directly <Mail className="ml-2" size={20} />
                </a>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-brand-primary px-8 py-4 text-lg font-semibold rounded-lg hover-lift"
              >
                <a href="tel:+15551234567">
                  Call Now <Phone className="ml-2" size={20} />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

