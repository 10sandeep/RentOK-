"use client"

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Building2, 
  Users, 
  Target, 
  Lightbulb, 
  TrendingUp,
  Award,
  MapPin,
  Quote
} from 'lucide-react';

const timeline = [
  {
    year: '2023',
    title: 'Company Founded',
    description: 'StaySmart was born from the vision to digitize India\'s fragmented property management industry.',
    icon: Lightbulb
  },
  {
    year: '2023',
    title: 'Product Launch',
    description: 'Launched our MVP with core features like digital agreements and automated rent collection.',
    icon: Building2
  },
  {
    year: '2024',
    title: 'Rapid Growth',
    description: 'Crossed 100 property owners and 5,000 tenants across 10 major Indian cities.',
    icon: TrendingUp
  },
  {
    year: '2024',
    title: 'Series A Funding',
    description: 'Raised $5M to accelerate growth and expand our engineering team.',
    icon: Award
  },
  {
    year: '2025',
    title: 'Market Leader',
    description: 'Now serving 500+ properties with 10,000+ tenants across 25 cities.',
    icon: Users
  }
];

const team = [
  {
    name: 'Arjun Mehta',
    role: 'CEO & Co-Founder',
    bio: 'Former product manager at leading proptech company. 8+ years building scalable platforms.',
    avatar: 'AM',
    location: 'Bangalore'
  },
  {
    name: 'Sneha Gupta',
    role: 'CTO & Co-Founder',
    bio: 'Ex-senior engineer at major fintech. Expert in building secure, compliant financial systems.',
    avatar: 'SG',
    location: 'Mumbai'
  },
  {
    name: 'Vikram Singh',
    role: 'Head of Product',
    bio: 'Previously led product at successful SaaS startup. Focused on user experience and growth.',
    avatar: 'VS',
    location: 'Delhi'
  }
];

const pressQuotes = [
  {
    quote: 'StaySmart is revolutionizing how property owners manage their assets in India\'s rapidly growing rental market.',
    source: 'Tech Innovation Today',
    date: 'January 2025'
  },
  {
    quote: 'The platform\'s focus on compliance and automation makes it a game-changer for the Indian proptech space.',
    source: 'Property Business Weekly',
    date: 'December 2024'
  },
  {
    quote: 'StaySmart\'s impressive growth demonstrates the massive opportunity in digitizing property management.',
    source: 'Startup India Magazine',
    date: 'November 2024'
  }
];

export default function AboutPage() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Transforming property management across India
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We're on a mission to digitize India's property rental ecosystem, making it easier 
            for owners to manage properties and tenants to find great homes.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center p-8">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To make property management effortless and transparent, empowering owners 
                and creating better living experiences for tenants across India.
              </p>
            </Card>

            <Card className="border-0 shadow-lg text-center p-8">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-teal-600 mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                A future where every property transaction is digital, transparent, 
                and efficient - transforming India's rental housing market.
              </p>
            </Card>

            <Card className="border-0 shadow-lg text-center p-8">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-600 mx-auto mb-6">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Our Values</h3>
              <p className="text-muted-foreground leading-relaxed">
                Innovation, transparency, and customer success guide everything we do. 
                We build technology that creates real value for our users.
              </p>
            </Card>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-32"
        >
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our journey
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From a simple idea to India's leading property management platform.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-indigo-600 to-teal-600"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-3">
                          <item.icon className="h-5 w-5 text-indigo-600 mr-2" />
                          <Badge variant="outline">{item.year}</Badge>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-indigo-600 to-teal-600">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-32"
        >
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Meet our leadership team
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Experienced leaders passionate about transforming property management in India.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-teal-500 text-white font-bold text-lg mx-auto mb-6">
                      {member.avatar}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                    <p className="text-indigo-600 font-medium mb-2">{member.role}</p>
                    <div className="flex items-center justify-center text-sm text-muted-foreground mb-4">
                      <MapPin className="h-3 w-3 mr-1" />
                      {member.location}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Press Quotes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-32"
        >
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What people are saying
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Industry recognition and media coverage of our impact.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {pressQuotes.map((quote, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg">
                  <CardContent className="p-8">
                    <Quote className="h-8 w-8 text-indigo-600 mb-4" />
                    <blockquote className="text-foreground leading-relaxed mb-6">
                      "{quote.quote}"
                    </blockquote>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-foreground">{quote.source}</div>
                        <div className="text-sm text-muted-foreground">{quote.date}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}