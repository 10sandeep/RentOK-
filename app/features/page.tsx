"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Building2, 
  Users, 
  UserCheck, 
  FileText,
  CreditCard,
  MessageSquare,
  Bell,
  BarChart3,
  Shield,
  Smartphone,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const ownerFeatures = [
  {
    icon: Building2,
    title: 'Multi-Property Dashboard',
    description: 'Manage all your properties from a single, intuitive dashboard with real-time insights and analytics.',
    features: ['Property overview', 'Occupancy tracking', 'Revenue analytics', 'Performance metrics']
  },
  {
    icon: CreditCard,
    title: 'Automated Rent Collection',
    description: 'Never chase rent again. Automated collection with multiple payment options and instant receipt generation.',
    features: ['UPI integration', 'Auto-reminders', 'Late fee calculation', 'GST compliance']
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Make data-driven decisions with comprehensive reports on occupancy, revenue, and tenant behavior.',
    features: ['Revenue forecasting', 'Occupancy trends', 'Tenant analytics', 'Custom reports']
  },
  {
    icon: Shield,
    title: 'Legal Compliance',
    description: 'Stay compliant with all local regulations, tax requirements, and legal documentation.',
    features: ['Legal templates', 'Tax calculations', 'Compliance tracking', 'Document storage']
  }
];

const managerFeatures = [
  {
    icon: Users,
    title: 'Tenant Management',
    description: 'Complete tenant lifecycle management from onboarding to move-out with digital workflows.',
    features: ['Tenant profiles', 'Move-in/out process', 'Document management', 'Communication history']
  },
  {
    icon: MessageSquare,
    title: 'Maintenance Workflow',
    description: 'Streamlined complaint handling with vendor management and resolution tracking.',
    features: ['Complaint portal', 'Vendor assignment', 'Status tracking', 'Photo documentation']
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    description: 'Automated alerts for important events, deadlines, and required actions.',
    features: ['Rent reminders', 'Agreement renewals', 'Maintenance alerts', 'Custom notifications']
  },
  {
    icon: FileText,
    title: 'Document Management',
    description: 'Centralized storage for all property and tenant documents with easy search and retrieval.',
    features: ['Cloud storage', 'Document templates', 'Search functionality', 'Access controls']
  }
];

const tenantFeatures = [
  {
    icon: Smartphone,
    title: 'Mobile App Experience',
    description: 'Dedicated tenant app for rent payments, complaints, and communication with property management.',
    features: ['One-tap payments', 'Complaint submission', 'Announcements', 'Community features']
  },
  {
    icon: UserCheck,
    title: 'Digital Onboarding',
    description: 'Quick and secure digital verification process with Aadhaar integration and e-signatures.',
    features: ['Aadhaar verification', 'Document upload', 'E-signature', 'Instant approval']
  },
  {
    icon: CreditCard,
    title: 'Easy Payments',
    description: 'Multiple payment options with automatic receipt generation and payment history tracking.',
    features: ['UPI payments', 'Payment scheduling', 'Receipt download', 'Payment history']
  },
  {
    icon: MessageSquare,
    title: 'Communication Hub',
    description: 'Direct communication with property management, complaint tracking, and community updates.',
    features: ['Direct messaging', 'Complaint status', 'Announcements', 'Community chat']
  }
];

export default function FeaturesPage() {
  const [activeTab, setActiveTab] = useState('owners');

  const getFeatureSet = () => {
    switch (activeTab) {
      case 'managers':
        return managerFeatures;
      case 'tenants':
        return tenantFeatures;
      default:
        return ownerFeatures;
    }
  };

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
            Powerful features for every stakeholder
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Whether you're a property owner, manager, or tenant, StaySmart provides 
            tailored features to enhance your experience and streamline operations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="owners">Property Owners</TabsTrigger>
              <TabsTrigger value="managers">Managers</TabsTrigger>
              <TabsTrigger value="tenants">Tenants</TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab} className="mt-12">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {getFeatureSet().map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-600 mb-4">
                          <feature.icon className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-6 leading-relaxed">{feature.description}</p>
                        <ul className="space-y-2">
                          {feature.features.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-center text-sm text-muted-foreground">
                              <CheckCircle className="h-3 w-3 text-teal-600 mr-3 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-br from-indigo-50 to-teal-50 dark:from-indigo-950/20 dark:to-teal-950/20 rounded-2xl p-8 border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to experience these features?
            </h3>
            <p className="text-muted-foreground mb-6">
              Start your free trial and see how StaySmart can transform your property management today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Schedule Demo
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}