"use client"

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight, TrendingUp, Users, Shield, FileText } from 'lucide-react';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: '10 Essential Tips for Successful PG Management in 2025',
    excerpt: 'Learn the latest strategies for managing paying guest accommodations, from tenant screening to maximizing occupancy rates.',
    category: 'Management Tips',
    readTime: '8 min read',
    date: 'Jan 15, 2025',
    icon: TrendingUp,
    featured: true
  },
  {
    id: 2,
    title: 'Digital Transformation in Indian Property Management',
    excerpt: 'How technology is revolutionizing the way property owners manage their assets and improve tenant experiences.',
    category: 'Industry Insights',
    readTime: '6 min read',
    date: 'Jan 12, 2025',
    icon: Users,
    featured: false
  },
  {
    id: 3,
    title: 'Legal Compliance Guide for PG and Hostel Owners',
    excerpt: 'Navigate the complex regulatory landscape with our comprehensive guide to legal requirements and best practices.',
    category: 'Legal & Compliance',
    readTime: '12 min read',
    date: 'Jan 10, 2025',
    icon: Shield,
    featured: false
  },
  {
    id: 4,
    title: 'Maximizing Rent Collection: Automation vs. Personal Touch',
    excerpt: 'Find the right balance between automated systems and personal relationships to optimize your rent collection rates.',
    category: 'Financial Management',
    readTime: '7 min read',
    date: 'Jan 8, 2025',
    icon: FileText,
    featured: false
  },
  {
    id: 5,
    title: 'Tenant Retention Strategies That Actually Work',
    excerpt: 'Discover proven methods to keep your best tenants happy and reduce costly turnover in your properties.',
    category: 'Tenant Relations',
    readTime: '9 min read',
    date: 'Jan 5, 2025',
    icon: Users,
    featured: false
  },
  {
    id: 6,
    title: 'Setting Up Your First Digital Property Management System',
    excerpt: 'A step-by-step guide to transitioning from manual processes to a fully digital property management workflow.',
    category: 'Getting Started',
    readTime: '11 min read',
    date: 'Jan 3, 2025',
    icon: TrendingUp,
    featured: false
  }
];

const categories = ['All', 'Management Tips', 'Industry Insights', 'Legal & Compliance', 'Financial Management', 'Tenant Relations', 'Getting Started'];

export default function BlogPage() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Property management insights
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Expert advice, industry trends, and practical tips to help you succeed 
            in property management across India.
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 flex flex-wrap justify-center gap-2"
        >
          {categories.map((category, index) => (
            <Badge 
              key={category}
              variant={index === 0 ? "default" : "outline"}
              className="cursor-pointer hover:bg-indigo-600 hover:text-white transition-colors"
            >
              {category}
            </Badge>
          ))}
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          {blogPosts.filter(post => post.featured).map((post) => (
            <Card key={post.id} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-indigo-50 to-teal-50 dark:from-indigo-950/20 dark:to-teal-950/20">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-indigo-600 hover:bg-indigo-700">Featured</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-foreground mb-4 hover:text-indigo-600 transition-colors">
                      <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Badge variant="outline">{post.category}</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <Link 
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
                      >
                        Read more
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                  <div className="hidden sm:block">
                    <div className="w-32 h-32 bg-gradient-to-br from-indigo-500 to-teal-500 rounded-lg flex items-center justify-center">
                      <post.icon className="h-16 w-16 text-white" />
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </motion.div>

        {/* Regular Posts Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.filter(post => !post.featured).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br from-indigo-500 to-teal-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <post.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-indigo-600 transition-colors">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{post.category}</Badge>
                    <Link 
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm group-hover:gap-2 transition-all"
                    >
                      Read more
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-br from-indigo-600 to-teal-600 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Stay updated with our latest insights</h3>
            <p className="text-indigo-100 mb-6">
              Get weekly property management tips, industry updates, and exclusive content delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-6 py-2 bg-white text-indigo-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}