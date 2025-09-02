"use client"

import { motion } from 'framer-motion';

const metrics = [
  { label: 'Tenants managed', value: '10,000+', description: 'across India' },
  { label: 'Platform uptime', value: '99.9%', description: 'guaranteed SLA' },
  { label: 'Rent collection rate', value: '96%', description: 'on-time payments' },
  { label: 'Support response', value: '< 2hrs', description: 'average time' },
  { label: 'Customer retention', value: '94%', description: 'yearly renewal' },
  { label: 'Properties served', value: '500+', description: 'and growing' },
];

export function Metrics() {
  return (
    <section className="py-16 sm:py-20 bg-indigo-600 dark:bg-indigo-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Trusted by property owners nationwide
          </h2>
          <p className="mt-4 text-lg text-indigo-200">
            Join thousands of successful property managers who've transformed their business with StaySmart
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
              <div className="text-sm font-medium text-white mb-1">{metric.label}</div>
              <div className="text-xs text-indigo-200">{metric.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}