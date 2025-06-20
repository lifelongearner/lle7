import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Calendar, TrendingUp } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Portfolio = () => {
  const projects = [
    {
      title: 'TechStart Solutions',
      category: 'Website Development & SEO',
      description: 'Complete digital transformation for a B2B SaaS company, including website redesign, SEO optimization, and lead generation strategy.',
      results: [
        '300% increase in website traffic',
        '150% improvement in conversion rate',
        '200% growth in qualified leads',
        '#1 ranking for target keywords'
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      tags: ['Web Development', 'SEO', 'Lead Generation'],
      timeline: '6 months',
      industry: 'SaaS Technology',
    },
    {
      title: 'GreenSpace Co.',
      category: 'Brand Identity & Marketing',
      description: 'Complete brand identity redesign and digital marketing strategy for an eco-friendly landscaping company.',
      results: [
        '250% increase in brand recognition',
        '180% growth in social media following',
        '120% increase in project inquiries',
        '90% improvement in customer retention'
      ],
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop',
      tags: ['Branding', 'Social Media', 'Marketing'],
      timeline: '4 months',
      industry: 'Landscaping',
    },
    {
      title: 'FitLife Wellness',
      category: 'Social Media & Content Strategy',
      description: 'Comprehensive social media strategy and content creation for a fitness and wellness brand.',
      results: [
        '400% increase in social engagement',
        '300% growth in online community',
        '150% increase in membership sign-ups',
        '85% improvement in brand sentiment'
      ],
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      tags: ['Social Media', 'Content Strategy', 'Community Building'],
      timeline: '8 months',
      industry: 'Health & Fitness',
    },
    {
      title: 'Urban Eats Restaurant',
      category: 'Digital Marketing & PPC',
      description: 'Multi-channel digital marketing campaign including PPC advertising, local SEO, and online reputation management.',
      results: [
        '220% increase in online orders',
        '160% growth in foot traffic',
        '95% improvement in online reviews',
        '140% increase in revenue'
      ],
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
      tags: ['PPC', 'Local SEO', 'Reputation Management'],
      timeline: '5 months',
      industry: 'Food & Beverage',
    },
    {
      title: 'InnovateTech Startup',
      category: 'Complete Digital Presence',
      description: 'End-to-end digital presence creation for a tech startup, from brand identity to website development and marketing automation.',
      results: [
        '500% increase in brand visibility',
        '280% growth in lead generation',
        '190% improvement in conversion rates',
        'Successful Series A funding round'
      ],
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop',
      tags: ['Full Service', 'Startup', 'Marketing Automation'],
      timeline: '12 months',
      industry: 'Technology',
    },
    {
      title: 'Luxury Homes Realty',
      category: 'Website & Lead Generation',
      description: 'Premium website design and lead generation system for a luxury real estate agency.',
      results: [
        '350% increase in property inquiries',
        '200% growth in high-value leads',
        '175% improvement in listing views',
        '130% increase in closed deals'
      ],
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
      tags: ['Real Estate', 'Lead Generation', 'Premium Design'],
      timeline: '3 months',
      industry: 'Real Estate',
    },
  ];

  const categories = ['All', 'Website Development', 'Branding', 'Social Media', 'SEO', 'PPC'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => 
        project.tags.some(tag => tag.toLowerCase().includes(selectedCategory.toLowerCase()))
      );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
              Our <span className="text-brand-secondary">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed animate-slide-up">
              Explore our successful projects and see how we've helped businesses transform their digital presence 
              and achieve remarkable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-bounce-in">
              <div className="text-4xl lg:text-5xl font-bold text-brand-primary mb-2">500+</div>
              <div className="text-gray-600 font-medium">Projects Completed</div>
            </div>
            <div className="text-center animate-bounce-in">
              <div className="text-4xl lg:text-5xl font-bold text-brand-primary mb-2">98%</div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
            </div>
            <div className="text-center animate-bounce-in">
              <div className="text-4xl lg:text-5xl font-bold text-brand-primary mb-2">250%</div>
              <div className="text-gray-600 font-medium">Average ROI Increase</div>
            </div>
            <div className="text-center animate-bounce-in">
              <div className="text-4xl lg:text-5xl font-bold text-brand-primary mb-2">15+</div>
              <div className="text-gray-600 font-medium">Industries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-brand-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-brand-primary hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={project.title} className="hover-lift animate-slide-up border-0 shadow-lg overflow-hidden">
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.industry}
                    </span>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar size={16} className="mr-1" />
                      {project.timeline}
                    </div>
                  </div>
                  
                  <p className="text-brand-secondary font-semibold mb-3">{project.category}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <TrendingUp size={16} className="mr-2 text-brand-secondary" />
                      Key Results:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.results.map((result) => (
                        <li key={result} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-brand-secondary rounded-full mr-3 flex-shrink-0"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button 
                    asChild
                    className="w-full bg-brand-primary hover:bg-blue-800 text-white font-semibold rounded-lg hover-lift"
                  >
                    <Link to="/contact">
                      Start Similar Project <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Deliver Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven methodology ensures every project delivers exceptional results and exceeds client expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-slide-up">
              <div className="bg-brand-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                01
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Discovery & Analysis</h3>
              <p className="text-gray-600 leading-relaxed">
                We dive deep into your business, market, and competition to understand opportunities and challenges.
              </p>
            </div>
            
            <div className="text-center animate-slide-up">
              <div className="bg-brand-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                02
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Strategy Development</h3>
              <p className="text-gray-600 leading-relaxed">
                We create a customized strategy that aligns with your goals and maximizes your return on investment.
              </p>
            </div>
            
            <div className="text-center animate-slide-up">
              <div className="bg-brand-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                03
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Implementation</h3>
              <p className="text-gray-600 leading-relaxed">
                Our expert team executes the strategy with precision, keeping you informed throughout the process.
              </p>
            </div>
            
            <div className="text-center animate-slide-up">
              <div className="bg-brand-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                04
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Optimization & Growth</h3>
              <p className="text-gray-600 leading-relaxed">
                We continuously monitor, analyze, and optimize to ensure sustained growth and maximum results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-brand text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Let's create a digital transformation story for your business that delivers measurable results and sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-brand-secondary hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg hover-lift"
              >
                <Link to="/contact">
                  Start Your Project <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-brand-primary px-8 py-4 text-lg font-semibold rounded-lg hover-lift"
              >
                <Link to="/services">
                  View Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;

