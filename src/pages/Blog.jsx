import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Tag, TrendingUp } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Blog = () => {
  const blogPosts = [
    {
      title: 'The Future of AI in Digital Marketing: Trends to Watch in 2025',
      excerpt: 'Explore how artificial intelligence is revolutionizing digital marketing strategies and what businesses need to know to stay competitive.',
      author: 'Alex Johnson',
      date: 'June 15, 2025',
      category: 'AI & Technology',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      tags: ['AI', 'Digital Marketing', 'Technology', 'Trends'],
      featured: true,
    },
    {
      title: 'SEO Best Practices for 2025: What Really Moves the Needle',
      excerpt: 'Discover the latest SEO strategies that actually work in today\'s competitive landscape and how to implement them effectively.',
      author: 'Sarah Chen',
      date: 'June 12, 2025',
      category: 'SEO',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop',
      tags: ['SEO', 'Search Engine Optimization', 'Digital Marketing'],
      featured: false,
    },
    {
      title: 'Building a Brand That Resonates: Lessons from Successful Startups',
      excerpt: 'Learn how successful startups built memorable brands that connect with their audience and drive business growth.',
      author: 'Mike Rodriguez',
      date: 'June 10, 2025',
      category: 'Branding',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop',
      tags: ['Branding', 'Startups', 'Brand Strategy'],
      featured: false,
    },
    {
      title: 'Social Media ROI: How to Measure What Matters',
      excerpt: 'Stop guessing and start measuring. Learn the key metrics that actually indicate social media success and business impact.',
      author: 'Alex Johnson',
      date: 'June 8, 2025',
      category: 'Social Media',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      tags: ['Social Media', 'ROI', 'Analytics', 'Metrics'],
      featured: false,
    },
    {
      title: 'The Psychology of Web Design: Creating Websites That Convert',
      excerpt: 'Understand the psychological principles behind effective web design and how to apply them to increase conversions.',
      author: 'Sarah Chen',
      date: 'June 5, 2025',
      category: 'Web Design',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      tags: ['Web Design', 'Psychology', 'Conversion Optimization'],
      featured: false,
    },
    {
      title: 'Content Marketing in the Age of AI: Staying Human in a Digital World',
      excerpt: 'Discover how to create authentic, engaging content that stands out in an increasingly AI-driven digital landscape.',
      author: 'Mike Rodriguez',
      date: 'June 3, 2025',
      category: 'Content Marketing',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      tags: ['Content Marketing', 'AI', 'Authenticity'],
      featured: false,
    },
  ];

  const categories = ['All', 'AI & Technology', 'SEO', 'Branding', 'Social Media', 'Web Design', 'Content Marketing'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
              Our <span className="text-brand-secondary">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed animate-slide-up">
              Stay ahead of the curve with insights on digital marketing, AI innovations, and business growth strategies 
              from our team of experts.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Article</h2>
            </div>
            
            <Card className="hover-lift animate-slide-up border-0 shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto bg-gray-200 relative overflow-hidden">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <span className="bg-brand-primary text-white px-3 py-1 rounded-full font-medium">
                      {featuredPost.category}
                    </span>
                    <span className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {featuredPost.date}
                    </span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-brand rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-semibold text-sm">
                          {featuredPost.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{featuredPost.author}</div>
                        <div className="text-sm text-gray-600">Author</div>
                      </div>
                    </div>
                    
                    <Button 
                      asChild
                      className="bg-brand-secondary hover:bg-orange-600 text-white font-semibold rounded-lg hover-lift"
                    >
                      <Link to={`/blog/${featuredPost.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                        Read Article <ArrowRight className="ml-2" size={16} />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

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

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.filter(post => !post.featured).map((post, index) => (
              <Card key={post.title} className="hover-lift animate-slide-up border-0 shadow-lg overflow-hidden">
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                    <span className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {post.date}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-brand rounded-full flex items-center justify-center mr-2">
                        <span className="text-white font-semibold text-xs">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-gray-700">{post.author}</span>
                    </div>
                    
                    <Button 
                      asChild
                      size="sm"
                      variant="outline"
                      className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white"
                    >
                      <Link to={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                        Read More
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-brand rounded-2xl p-8 lg:p-12 text-white text-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Stay Updated with Our Latest Insights
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Get weekly insights on digital marketing trends, AI innovations, and business growth strategies 
                delivered straight to your inbox.
              </p>
              
              <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-secondary"
                />
                <Button 
                  size="lg"
                  className="bg-brand-secondary hover:bg-orange-600 text-white px-8 py-3 font-semibold rounded-lg hover-lift"
                >
                  Subscribe
                </Button>
              </div>
              
              <p className="text-sm text-gray-300 mt-4">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how our proven strategies can help your business achieve remarkable growth.
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
                className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white px-8 py-4 text-lg font-semibold rounded-lg hover-lift"
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

export default Blog;

