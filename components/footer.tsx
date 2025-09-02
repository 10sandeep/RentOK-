import Link from 'next/link';
import { Building2, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">RentOK</span>
            </div>
            <p className="text-sm leading-6 text-muted-foreground max-w-md">
              Revolutionizing property management across India with smart automation, 
              digital workflows, and seamless tenant experiences.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">Platform</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><Link href="/features" className="text-sm leading-6 text-muted-foreground hover:text-foreground">Features</Link></li>
                  <li><Link href="/pricing" className="text-sm leading-6 text-muted-foreground hover:text-foreground">Pricing</Link></li>
                  <li><Link href="/demo" className="text-sm leading-6 text-muted-foreground hover:text-foreground">Demo</Link></li>
                  <li><Link href="/integrations" className="text-sm leading-6 text-muted-foreground hover:text-foreground">Integrations</Link></li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground">Resources</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><Link href="/blog" className="text-sm leading-6 text-muted-foreground hover:text-foreground">Blog</Link></li>
                  <li><Link href="/help" className="text-sm leading-6 text-muted-foreground hover:text-foreground">Help Center</Link></li>
                  <li><Link href="/api" className="text-sm leading-6 text-muted-foreground hover:text-foreground">API Docs</Link></li>
                  <li><Link href="/guides" className="text-sm leading-6 text-muted-foreground hover:text-foreground">Guides</Link></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><Link href="/about" className="text-sm leading-6 text-muted-foreground hover:text-foreground">About</Link></li>
                  <li><Link href="/careers" className="text-sm leading-6 text-muted-foreground hover:text-foreground">Careers</Link></li>
                  <li><Link href="/contact" className="text-sm leading-6 text-muted-foreground hover:text-foreground">Contact</Link></li>
                  <li><Link href="/press" className="text-sm leading-6 text-muted-foreground hover:text-foreground">Press</Link></li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><Link href="/privacy" className="text-sm leading-6 text-muted-foreground hover:text-foreground">Privacy</Link></li>
                  <li><Link href="/terms" className="text-sm leading-6 text-muted-foreground hover:text-foreground">Terms</Link></li>
                  <li><Link href="/cookies" className="text-sm leading-6 text-muted-foreground hover:text-foreground">Cookies</Link></li>
                  <li><Link href="/refund" className="text-sm leading-6 text-muted-foreground hover:text-foreground">Refund Policy</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-border pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
          <div className="flex space-x-6 md:order-2">
            <div className="text-sm text-muted-foreground">
              <div className="flex items-center space-x-2 mb-2">
                <Mail className="h-4 w-4" />
                <span>hello@staysmart.in</span>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <Phone className="h-4 w-4" />
                <span>+91 80123 45678</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Bangalore, Karnataka, India</span>
              </div>
            </div>
          </div>
          <p className="mt-8 text-xs leading-5 text-muted-foreground md:order-1 md:mt-0">
            &copy; 2025 RentOK Technologies Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}