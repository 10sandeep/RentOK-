"use client"

import { motion } from 'framer-motion';
import { Settings, Users, Zap, ArrowRight } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: Settings,
    title: 'Owner Setup',
    description: 'Create your property profile, set room details, pricing, and house rules. Configure payment preferences and upload property documents.',
    features: ['Property onboarding', 'Room configuration', 'Pricing setup', 'Document upload']
  },
  {
    step: '02',
    icon: Users,
    title: 'Tenant Onboarding',
    description: 'Tenants complete digital e-KYC, sign agreements electronically, and get instant access to their personalized tenant app.',
    features: ['Digital e-KYC', 'E-signatures', 'Background verification', 'Instant access']
  },
  {
    step: '03',
    icon: Zap,
    title: 'Automations Run',
    description: 'Rent collection, reminders, compliance tracking, and reporting happen automatically. Focus on growing your business.',
    features: ['Auto rent collection', 'Smart reminders', 'Compliance tracking', 'Real-time reports']
  }
];

export function HowItWorks() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-muted/20 via-background to-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">
            How It Works
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Get started in just 3 simple steps
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Our streamlined onboarding process gets you up and running in minutes, 
            not days. Start managing your properties smarter today.
          </p>
        </motion.div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Connection line - only show between steps on desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-8 z-10">
                    <ArrowRight className="h-5 w-5 text-muted-foreground ml-2" />
                  </div>
                )}

                <div className="relative bg-background rounded-2xl border shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-teal-500">
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-6xl font-bold text-muted-foreground/20">{step.step}</div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{step.description}</p>

                  <div className="space-y-2">
                    {step.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}