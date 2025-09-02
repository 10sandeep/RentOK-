import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Lock, Eye, UserCheck, Database, FileText,Mail,Phone,MapPin } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy - StaySmart',
  description: 'Learn how StaySmart protects your privacy and handles your personal data with transparency and security.',
};

export default function PrivacyPage() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground">
            Last updated: January 15, 2025
          </p>
          <div className="mt-6 flex items-center justify-center text-sm text-muted-foreground">
            <Shield className="h-4 w-4 mr-2 text-teal-600" />
            Your privacy and data security are our top priorities
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg">Quick Navigation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <a href="#overview" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  1. Overview
                </a>
                <a href="#collection" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  2. Data Collection
                </a>
                <a href="#usage" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  3. Data Usage
                </a>
                <a href="#protection" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  4. Data Protection
                </a>
                <a href="#sharing" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  5. Data Sharing
                </a>
                <a href="#rights" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  6. Your Rights
                </a>
                <a href="#contact" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  7. Contact Us
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            <Card id="overview">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Eye className="h-5 w-5 mr-2 text-indigo-600" />
                  1. Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  StaySmart Technologies Pvt Ltd ("we," "us," or "our") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you use our property management platform.
                </p>
                <p>
                  This policy applies to all users of our platform, including property owners, managers, and tenants. By using StaySmart, you agree to the collection and use of information in accordance with this policy.
                </p>
              </CardContent>
            </Card>

            <Card id="collection">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="h-5 w-5 mr-2 text-indigo-600" />
                  2. Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Personal Information</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                      <li>Name, email address, phone number</li>
                      <li>Government ID details (Aadhaar, PAN) for verification</li>
                      <li>Address and contact information</li>
                      <li>Financial information for rent collection</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Property Information</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                      <li>Property details, photos, and documents</li>
                      <li>Rental agreements and legal documents</li>
                      <li>Occupancy and financial records</li>
                      <li>Maintenance and complaint records</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Usage Data</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                      <li>Platform usage analytics and behavior</li>
                      <li>Device information and IP addresses</li>
                      <li>Communication preferences and history</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card id="usage">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <UserCheck className="h-5 w-5 mr-2 text-indigo-600" />
                  3. How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-muted-foreground">
                  <p><strong>Platform Operations:</strong> To provide and maintain our property management services, process payments, and facilitate communication.</p>
                  <p><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes, including KYC requirements.</p>
                  <p><strong>Service Improvement:</strong> To analyze usage patterns, improve our platform, and develop new features.</p>
                  <p><strong>Communication:</strong> To send important updates, notifications, and marketing communications (with your consent).</p>
                  <p><strong>Security:</strong> To protect against fraud, unauthorized access, and maintain platform security.</p>
                </div>
              </CardContent>
            </Card>

            <Card id="protection">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lock className="h-5 w-5 mr-2 text-indigo-600" />
                  4. Data Protection & Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Encryption</h4>
                      <p className="text-sm text-muted-foreground">All data is encrypted in transit and at rest using industry-standard AES-256 encryption.</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Access Controls</h4>
                      <p className="text-sm text-muted-foreground">Strict access controls and authentication systems protect your data from unauthorized access.</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Regular Backups</h4>
                      <p className="text-sm text-muted-foreground">Automated backups ensure your data is safe and can be recovered if needed.</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Compliance</h4>
                      <p className="text-sm text-muted-foreground">We comply with Indian data protection laws and international security standards.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card id="sharing">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-indigo-600" />
                  5. Data Sharing & Disclosure
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul>
                  <li><strong>Service Providers:</strong> With trusted partners who help us operate our platform (payment processors, verification services)</li>
                  <li><strong>Legal Requirements:</strong> When required by law, court orders, or regulatory authorities</li>
                  <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales (with notification)</li>
                  <li><strong>Consent:</strong> When you explicitly authorize us to share your information</li>
                </ul>
              </CardContent>
            </Card>

            <Card id="rights">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <UserCheck className="h-5 w-5 mr-2 text-indigo-600" />
                  6. Your Rights & Choices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border border-border rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Access & Correction</h4>
                      <p className="text-sm text-muted-foreground">Request access to your personal data and correct any inaccuracies.</p>
                    </div>
                    <div className="p-4 border border-border rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Data Portability</h4>
                      <p className="text-sm text-muted-foreground">Export your data in a structured, machine-readable format.</p>
                    </div>
                    <div className="p-4 border border-border rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Deletion Rights</h4>
                      <p className="text-sm text-muted-foreground">Request deletion of your personal data (subject to legal requirements).</p>
                    </div>
                    <div className="p-4 border border-border rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Communication Preferences</h4>
                      <p className="text-sm text-muted-foreground">Control marketing communications and notification settings.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card id="contact">
              <CardHeader>
                <CardTitle>Contact Our Privacy Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  If you have questions about this privacy policy or how we handle your data, please contact us:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Mail className="h-4 w-4 mr-2 text-indigo-600" />
                    <span>privacy@staysmart.in</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Phone className="h-4 w-4 mr-2 text-indigo-600" />
                    <span>+91 80123 45678</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 mr-2 text-indigo-600" />
                    <span>Koramangala, Bangalore, Karnataka 560034, India</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}