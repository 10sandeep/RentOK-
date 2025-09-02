"use client"

import { motion } from 'framer-motion';
import { 
  Smartphone, 
  CreditCard, 
  MessageCircle, 
  FileText, 
  Shield, 
  Database,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const integrations = [
  {
    category: 'Payment Gateways',
    icon: CreditCard,
    items: ['UPI Payments', 'Net Banking', 'Credit/Debit Cards', 'Digital Wallets'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    category: 'Communication',
    icon: MessageCircle,
    items: ['WhatsApp Business', 'SMS Gateway', 'Email Automation', 'Push Notifications'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    category: 'Verification Services',
    icon: Shield,
    items: ['Aadhaar API', 'PAN Verification', 'Police Clearance', 'Credit Bureau'],
    color: 'from-purple-500 to-violet-500'
  },
  {
    category: 'Financial Tools',
    icon: Database,
    items: ['GST Integration', 'Banking APIs', 'Accounting Software', 'Tax Compliance'],
    color: 'from-orange-500 to-red-500'
  },
  {
    category: 'Legal & Compliance',
    icon: FileText,
    items: ['E-Stamp Paper', 'Digital Signatures', 'Legal Templates', 'Compliance Reports'],
    color: 'from-teal-500 to-cyan-500'
  },
  {
    category: 'Mobile Apps',
    icon: Smartphone,
    items: ['Tenant App', 'Owner App', 'Manager Dashboard', 'Maintenance App'],
    color: 'from-indigo-500 to-blue-500'
  }
];

export function Integrations() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">
            Seamless Integrations
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Connect with your favorite tools
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            StaySmart integrates with India's leading financial, communication, 
            and verification services to provide a complete property management ecosystem.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.category}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-background border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${integration.color} mb-4`}>
                  <integration.icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-4">{integration.category}</h3>
                
                <ul className="space-y-2">
                  {integration.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-3 w-3 text-teal-600 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
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
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-muted text-sm text-muted-foreground">
            <CheckCircle className="h-4 w-4 text-teal-600 mr-2" />
            New integrations added every month
          </div>
        </motion.div>
      </div>
    </section>
  );
}