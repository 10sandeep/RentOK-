"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { 
  CheckCircle, 
  X, 
  ArrowRight, 
  Crown, 
  Zap, 
  Building2,
  Phone,
  Headphones
} from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for small PG owners getting started',
    monthlyPrice: 999,
    annualPrice: 799,
    icon: Building2,
    color: 'border-gray-200 dark:border-gray-700',
    popular: false,
    features: [
      { name: 'Up to 10 rooms', included: true },
      { name: 'Basic tenant management', included: true },
      { name: 'Digital agreements', included: true },
      { name: 'Online rent collection', included: true },
      { name: 'Basic reporting', included: true },
      { name: 'Email support', included: true },
      { name: 'Advanced analytics', included: false },
      { name: 'Multi-property dashboard', included: false },
      { name: 'Custom integrations', included: false },
      { name: 'Priority support', included: false },
    ]
  },
  {
    name: 'Professional',
    description: 'Ideal for growing property management businesses',
    monthlyPrice: 2499,
    annualPrice: 1999,
    icon: Crown,
    color: 'border-indigo-200 dark:border-indigo-700 ring-2 ring-indigo-600',
    popular: true,
    features: [
      { name: 'Up to 50 rooms', included: true },
      { name: 'Advanced tenant management', included: true },
      { name: 'Digital agreements & e-sign', included: true },
      { name: 'Automated rent collection', included: true },
      { name: 'Tenant e-KYC', included: true },
      { name: 'Complaint management', included: true },
      { name: 'Advanced analytics', included: true },
      { name: 'Multi-property dashboard', included: true },
      { name: 'WhatsApp integration', included: true },
      { name: 'Phone & chat support', included: true },
      { name: 'Custom integrations', included: false },
      { name: 'Dedicated account manager', included: false },
    ]
  },
  {
    name: 'Enterprise',
    description: 'For large-scale property management operations',
    monthlyPrice: 4999,
    annualPrice: 3999,
    icon: Zap,
    color: 'border-teal-200 dark:border-teal-700',
    popular: false,
    features: [
      { name: 'Unlimited rooms', included: true },
      { name: 'Complete property suite', included: true },
      { name: 'Advanced automation', included: true },
      { name: 'Custom workflows', included: true },
      { name: 'API access', included: true },
      { name: 'Custom integrations', included: true },
      { name: 'Advanced analytics & AI', included: true },
      { name: 'White-label options', included: true },
      { name: 'Dedicated account manager', included: true },
      { name: '24/7 priority support', included: true },
      { name: 'Custom training', included: true },
      { name: 'SLA guarantees', included: true },
    ]
  }
];

const faqs = [
  {
    question: 'How does the free trial work?',
    answer: 'You get full access to all Professional plan features for 30 days, no credit card required. You can cancel anytime during the trial period.'
  },
  {
    question: 'Can I upgrade or downgrade my plan?',
    answer: 'Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at your next billing cycle.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major payment methods including UPI, net banking, credit/debit cards, and bank transfers. All payments are processed securely.'
  },
  {
    question: 'Is there a setup fee?',
    answer: 'No setup fees. We provide free onboarding assistance and training to help you get started quickly with your property management.'
  },
  {
    question: 'How secure is my data?',
    answer: 'Your data is protected with bank-grade encryption, regular backups, and compliance with Indian data protection regulations. We never share your data with third parties.'
  },
  {
    question: 'Do you provide customer support?',
    answer: 'Yes! We offer email support for Starter plans, phone & chat support for Professional plans, and 24/7 priority support for Enterprise customers.'
  }
];

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
            Simple, transparent pricing
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Choose the perfect plan for your property management needs. 
            Start free and scale as you grow.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <span className={`text-sm ${!isAnnual ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              className="data-[state=checked]:bg-indigo-600"
            />
            <span className={`text-sm ${isAnnual ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
              Annual
            </span>
            <Badge variant="secondary" className="ml-2">Save 20%</Badge>
          </div>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-indigo-600 hover:bg-indigo-700">Most Popular</Badge>
                </div>
              )}
              
              <Card className={`h-full ${plan.color} hover:shadow-xl transition-all duration-300`}>
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-600 mx-auto mb-4">
                    <plan.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <p className="text-muted-foreground">{plan.description}</p>
                  
                  <div className="mt-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-foreground">
                        ₹{isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-muted-foreground ml-1">/month</span>
                    </div>
                    {isAnnual && (
                      <p className="text-sm text-muted-foreground mt-1">
                        ₹{plan.monthlyPrice * 12} billed annually
                      </p>
                    )}
                  </div>
                </CardHeader>

                <CardContent>
                  <Button className={`w-full mb-8 ${plan.popular ? 'bg-indigo-600 hover:bg-indigo-700' : ''}`}>
                    {plan.name === 'Starter' ? 'Start Free Trial' : 'Get Started'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        {feature.included ? (
                          <CheckCircle className="h-4 w-4 text-teal-600 mr-3 flex-shrink-0" />
                        ) : (
                          <X className="h-4 w-4 text-muted-foreground mr-3 flex-shrink-0" />
                        )}
                        <span className={`text-sm ${feature.included ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-6 border-t">
                    <div className="flex items-center text-sm text-muted-foreground">
                      {plan.name === 'Starter' && <><Headphones className="h-4 w-4 mr-2" />Email support</>}
                      {plan.name === 'Professional' && <><Phone className="h-4 w-4 mr-2" />Phone & chat support</>}
                      {plan.name === 'Enterprise' && <><Crown className="h-4 w-4 mr-2" />24/7 priority support</>}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-32"
        >
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Have questions? We've got answers.
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="border-b border-border last:border-b-0"
              >
                <button
                  className="w-full py-6 text-left focus:outline-none"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-foreground">{faq.question}</h3>
                    <ArrowRight 
                      className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${
                        openFaq === index ? 'rotate-90' : ''
                      }`} 
                    />
                  </div>
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="pb-6"
                  >
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}