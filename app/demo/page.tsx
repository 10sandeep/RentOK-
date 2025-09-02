"use client"

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Clock, Users, CheckCircle, ArrowRight } from 'lucide-react';

const videos = [
  {
    title: 'Platform Overview',
    duration: '3:45',
    description: 'Get a complete walkthrough of the StaySmart platform and see how it can transform your property management.',
    thumbnail: 'overview',
    featured: true
  },
  {
    title: 'Tenant Onboarding Process',
    duration: '2:30',
    description: 'Watch how tenants complete digital e-KYC, sign agreements, and get instant access to their accounts.',
    thumbnail: 'onboarding',
    featured: false
  },
  {
    title: 'Automated Rent Collection',
    duration: '4:15',
    description: 'See how rent collection happens automatically with multiple payment options and instant receipts.',
    thumbnail: 'payments',
    featured: false
  },
  {
    title: 'Multi-Property Dashboard',
    duration: '5:20',
    description: 'Explore the powerful analytics dashboard that gives you insights across all your properties.',
    thumbnail: 'dashboard',
    featured: false
  }
];

const steps = [
  {
    step: '01',
    title: 'Property Setup',
    description: 'Add your property details, room configurations, and pricing in minutes.',
    image: 'setup'
  },
  {
    step: '02',
    title: 'Tenant Onboarding',
    description: 'Tenants complete digital verification and agreement signing seamlessly.',
    image: 'tenant'
  },
  {
    step: '03',
    title: 'Automated Operations',
    description: 'Rent collection, reminders, and reporting happen automatically.',
    image: 'automation'
  },
  {
    step: '04',
    title: 'Growth & Insights',
    description: 'Use analytics to optimize occupancy and maximize revenue.',
    image: 'insights'
  }
];

export default function DemoPage() {
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
            See StaySmart in action
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Watch our platform demos to see exactly how StaySmart can streamline 
            your property management operations and improve tenant satisfaction.
          </p>
        </motion.div>

        {/* Featured Video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          {videos.filter(video => video.featured).map((video) => (
            <Card key={video.title} className="border-0 shadow-xl overflow-hidden">
              <div className="relative bg-gradient-to-br from-indigo-600 via-indigo-700 to-teal-700 p-8 text-white">
                <div className="flex items-center justify-between mb-6">
                  <Badge className="bg-white/20 text-white border-white/20">Featured Demo</Badge>
                  <div className="flex items-center text-indigo-200">
                    <Clock className="h-4 w-4 mr-1" />
                    {video.duration}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">{video.title}</h2>
                    <p className="text-indigo-100 leading-relaxed mb-6">{video.description}</p>
                    <div className="flex items-center space-x-4">
                      <Button className="bg-white text-indigo-600 hover:bg-gray-100">
                        <Play className="mr-2 h-4 w-4" />
                        Watch Demo
                      </Button>
                      <div className="flex items-center text-indigo-200 text-sm">
                        <Users className="h-4 w-4 mr-1" />
                        1.2k+ views
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="aspect-video bg-black/20 rounded-lg border border-white/20 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm cursor-pointer hover:bg-white/30 transition-colors">
                        <Play className="h-6 w-6 text-white ml-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </motion.div>

        {/* Video Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {videos.filter(video => !video.featured).map((video, index) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <CardHeader>
                  <div className="relative mb-4">
                    <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg flex items-center justify-center">
                      <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="h-5 w-5 text-white ml-0.5" />
                      </div>
                    </div>
                    <div className="absolute top-2 right-2">
                      <Badge variant="secondary" className="text-xs">
                        <Clock className="h-3 w-3 mr-1" />
                        {video.duration}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-indigo-600 transition-colors">
                    {video.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {video.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Step-by-Step Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-32"
        >
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Step-by-step walkthrough
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Follow along with our detailed guide to see exactly how StaySmart works.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600 text-white font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{step.description}</p>
                    <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg border flex items-center justify-center">
                      <span className="text-sm text-muted-foreground">Demo Screenshot</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-muted/30 rounded-2xl p-8 border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to get started?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Schedule a personalized demo with our team and see how StaySmart can work for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Schedule Personal Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Start Free Trial
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}