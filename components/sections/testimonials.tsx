"use client"

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'PG Owner, Bangalore',
    avatar: 'RK',
    content: 'StaySmart transformed how I manage my 3 PG properties. Rent collection is now 100% automated, and tenant onboarding takes just 15 minutes instead of hours. The ROI has been incredible.',
    rating: 5,
    properties: '3 properties, 45 rooms'
  },
  {
    name: 'Priya Sharma',
    role: 'Hostel Manager, Pune',
    avatar: 'PS',
    content: 'The complaint tracking system is a game-changer. Tenants can report issues instantly, and I can assign maintenance tasks with photos and priorities. Our satisfaction scores have improved dramatically.',
    rating: 5,
    properties: '2 hostels, 80 beds'
  },
  {
    name: 'Amit Patel',
    role: 'Coliving Space Owner, Mumbai',
    avatar: 'AP',
    content: 'Managing 150+ tenants was overwhelming until we found StaySmart. The e-KYC system, automated agreements, and financial reporting have saved us 20+ hours weekly while increasing profitability.',
    rating: 5,
    properties: '1 coliving, 150 units'
  }
];

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">
            Customer Success
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Loved by property owners across India
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            See how StaySmart has helped property owners increase efficiency, 
            improve tenant satisfaction, and grow their business.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <Quote className="h-8 w-8 text-muted-foreground mb-4" />
                  <blockquote className="text-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>

                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-teal-500 text-white font-semibold text-sm mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-xs text-muted-foreground mt-1">{testimonial.properties}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}