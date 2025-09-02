"use client"

import { motion } from 'framer-motion';
import { 
  FileText, 
  UserCheck, 
  CreditCard, 
  MessageSquare, 
  Bell, 
  LayoutDashboard,
  ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: FileText,
    title: 'Digital Agreements & E-Sign',
    description: 'Create legally binding rental agreements with integrated e-signature capabilities. No more paperwork hassles.',
    benefits: ['Instant agreement generation', 'Legal compliance', 'Digital signatures', 'Document storage']
  },
  {
    icon: UserCheck,
    title: 'Tenant e-KYC',
    description: 'Streamlined digital onboarding with Aadhaar verification, police verification tracking, and background checks.',
    benefits: ['Aadhaar integration', 'Photo verification', 'Background checks', 'Compliance tracking']
  },
  {
    icon: CreditCard,
    title: 'Online Rent & Receipts',
    description: 'Automated rent collection with UPI, net banking, and card payments. Generate receipts instantly.',
    benefits: ['Multiple payment modes', 'Automatic receipts', 'Payment reminders', 'GST compliance']
  },
  {
    icon: MessageSquare,
    title: 'Complaint Tracking',
    description: 'Centralized system for tenant complaints and maintenance requests with real-time status updates.',
    benefits: ['Priority management', 'Photo uploads', 'Vendor assignment', 'Resolution tracking']
  },
  {
    icon: Bell,
    title: 'Automated Reminders & Reports',
    description: 'Smart notifications for rent due, agreement renewals, and comprehensive analytics reports.',
    benefits: ['WhatsApp integration', 'Custom templates', 'Analytics dashboard', 'Performance insights']
  },
  {
    icon: LayoutDashboard,
    title: 'Multi-Property Dashboard',
    description: 'Manage multiple properties from a single unified dashboard with real-time insights and controls.',
    benefits: ['Centralized control', 'Real-time metrics', 'Property comparison', 'Scalable management']
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">
            Powerful Features
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need to manage your properties
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            From tenant onboarding to rent collection, StaySmart handles every aspect 
            of property management with intelligent automation and modern workflows.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-background to-muted/20 hover:from-muted/30 hover:to-muted/40">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-600 mb-6">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-muted-foreground">
                        <ArrowRight className="h-3 w-3 text-teal-600 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Button size="lg" variant="outline">
            Explore All Features
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}