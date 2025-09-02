"use client"

import { motion } from 'framer-motion';

const stats = [
  { label: 'Property owners trust us', value: '500+' },
  { label: 'Tenants onboarded', value: '10,000+' },
  { label: 'Cities covered', value: '25+' },
  { label: 'Customer satisfaction', value: '98%' },
];

const companies = [
  'TechCorp', 'PropertyPlus', 'UrbanSpaces', 'CityHomes', 'MetroLiving', 'SmartStay'
];

export function SocialProof() {
  return (
    <section className="py-12 sm:py-16 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-lg font-semibold text-muted-foreground mb-8">
            Trusted by leading property management companies across India
          </p>
          
          <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-6 items-center justify-center opacity-60">
            {companies.map((company, index) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="col-span-1 flex justify-center"
              >
                <div className="h-12 w-24 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-lg flex items-center justify-center">
                  <span className="text-xs font-medium text-muted-foreground">{company}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}