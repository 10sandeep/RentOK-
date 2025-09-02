"use client"

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Play, Users, Shield, TrendingUp } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-indigo-500/10 via-teal-500/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <motion.div 
          className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Badge variant="outline" className="mb-6 bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/50 dark:text-indigo-300 dark:border-indigo-800">
              <TrendingUp className="mr-2 h-3 w-3" />
              Trusted by 500+ property owners
            </Badge>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Smart property management for the 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-teal-600"> modern era</span>
            </h1>
          </motion.div>

          <motion.p variants={itemVariants} className="mt-6 text-lg leading-8 text-muted-foreground">
            Transform your PG, hostel, or coliving space with automated rent collection, 
            digital agreements, tenant e-KYC, and comprehensive property analytics. 
            Built specifically for Indian property owners and managers.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-10 flex items-center gap-x-6">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              <Play className="mr-2 h-4 w-4" />
              Book a Demo
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-10 flex items-center gap-x-6">
            <div className="flex items-center gap-x-2 text-sm text-muted-foreground">
              <Users className="h-4 w-4 text-teal-600" />
              <span>10,000+ happy tenants</span>
            </div>
            <div className="flex items-center gap-x-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4 text-teal-600" />
              <span>Bank-grade security</span>
            </div>
          </motion.div>
        </motion.div>

        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 dark:bg-gray-100/5 dark:ring-gray-100/10">
                <div className="relative rounded-lg bg-white shadow-2xl ring-1 ring-gray-900/10 dark:bg-gray-900 dark:ring-gray-100/10">
                  {/* Mock dashboard interface */}
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="text-sm text-muted-foreground">StaySmart Dashboard</div>
                    </div>
                    
                    {/* Dashboard content mockup */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-indigo-50 dark:bg-indigo-950/30 rounded-lg">
                        <div>
                          <p className="font-semibold text-indigo-900 dark:text-indigo-100">Monthly Revenue</p>
                          <p className="text-2xl font-bold text-indigo-600">₹2,45,000</p>
                        </div>
                        <div className="text-green-600 text-sm">↗ +12.5%</div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-teal-50 dark:bg-teal-950/30 rounded-lg">
                          <p className="text-sm text-teal-700 dark:text-teal-300">Occupancy Rate</p>
                          <p className="text-xl font-bold text-teal-600">94%</p>
                        </div>
                        <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
                          <p className="text-sm text-purple-700 dark:text-purple-300">Active Tenants</p>
                          <p className="text-xl font-bold text-purple-600">156</p>
                        </div>
                      </div>
                      
                      <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                        <p className="text-sm font-medium mb-2">Recent Activities</p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                            <span>Rent collected from Room 203</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                            <span>New tenant e-KYC completed</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                            <span>Maintenance request submitted</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}