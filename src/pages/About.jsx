import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Users, Lightbulb, Award } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We focus on delivering measurable results that directly impact your bottom line and business growth.',
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our success. We work as strategic partners to understand and achieve your unique goals.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay ahead of digital trends and leverage cutting-edge AI tools to give you a competitive advantage.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from design to development to customer service.',
    },
  ];

  const team = [
    {
      name: 'Alex Johnson',
      role: 'Founder & CEO',
      description: 'With over 15 years in digital marketing, Alex leads our strategic vision and client relationships.',
      expertise: ['Digital Strategy', 'SEO', 'Business Development'],
    },
    {
      name: 'Sarah Chen',
      role: 'Creative Director',
      description: 'Sarah brings 12+ years of design expertise, creating compelling visual identities for our clients.',
      expertise: ['Brand Design', 'UI/UX', 'Visual Strategy'],
    },
    {
      name: 'Mike Rodriguez',
      role: 'Technical Lead',
      description: 'Mike ensures our websites are fast, secure, and optimized for both users and search engines.',
      expertise: ['Web Development', 'Technical SEO', 'Performance'],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
              About <span className="text-brand-secondary">Lifelong Earner</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed animate-slide-up">
              We're not just another digital agency. We're strategic partners who understand the evolving AI landscape 
              and use cutting-edge tools to deliver results that matter to your bottom line.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At Lifelong Earner, we believe every business deserves a powerful digital presence that drives real results. 
                Our mission is to help entrepreneurs and businesses build lasting digital legacies that generate sustainable income 
                and growth for years to come.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We combine decades of combined experience in SEO, sales, and marketing with the latest AI-powered tools 
                to create comprehensive digital solutions that don't just look good – they perform exceptionally.
              </p>
              <Button 
                asChild
                size="lg"
                className="bg-brand-secondary hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg hover-lift"
              >
                <Link to="/contact">
                  Work With Us <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </div>
            <div className="animate-fade-in">
              <div className="bg-gradient-brand rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-brand-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>AI-Enhanced Workflow & Tools for maximum efficiency</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-brand-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Multi-Brand Management Expertise across industries</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-brand-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Proven Track Record with 500+ successful projects</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-brand-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Dedicated support and strategic partnership approach</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and ensure we deliver exceptional value to every client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={value.title} className="hover-lift animate-slide-up border-0 shadow-lg text-center">
                  <CardContent className="p-8">
                    <div className="bg-brand-primary text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <IconComponent size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of specialists brings together decades of experience in digital marketing, 
              design, and development to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={member.name} className="hover-lift animate-slide-up border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-brand rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-brand-secondary font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{member.description}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.expertise.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-brand text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Track Record
            </h2>
            <p className="text-xl text-gray-200">
              Numbers that speak to our commitment to excellence and client success.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-bounce-in">
              <div className="text-4xl lg:text-5xl font-bold text-brand-secondary mb-2">500+</div>
              <div className="text-gray-200 font-medium">Projects Completed</div>
            </div>
            <div className="text-center animate-bounce-in">
              <div className="text-4xl lg:text-5xl font-bold text-brand-secondary mb-2">15+</div>
              <div className="text-gray-200 font-medium">Years Experience</div>
            </div>
            <div className="text-center animate-bounce-in">
              <div className="text-4xl lg:text-5xl font-bold text-brand-secondary mb-2">98%</div>
              <div className="text-gray-200 font-medium">Client Satisfaction</div>
            </div>
            <div className="text-center animate-bounce-in">
              <div className="text-4xl lg:text-5xl font-bold text-brand-secondary mb-2">250%</div>
              <div className="text-gray-200 font-medium">Average ROI Increase</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Start Your Digital Transformation?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their businesses with our expert digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-brand-secondary hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg hover-lift"
              >
                <Link to="/contact">
                  Get Started Today <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white px-8 py-4 text-lg font-semibold rounded-lg hover-lift"
              >
                <Link to="/portfolio">
                  View Our Work
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

