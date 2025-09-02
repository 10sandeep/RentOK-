import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Scale, Shield, AlertTriangle, Users, CreditCard, Mail, Phone, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service - StaySmart',
  description: 'Read StaySmart\'s terms of service to understand your rights and responsibilities when using our property management platform.',
};

export default function TermsPage() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
            Terms of Service
          </h1>
          <p className="text-lg text-muted-foreground">
            Last updated: January 15, 2025
          </p>
          <div className="mt-6 flex items-center justify-center text-sm text-muted-foreground">
            <Scale className="h-4 w-4 mr-2 text-teal-600" />
            Please read these terms carefully before using StaySmart
          </div>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2 text-indigo-600" />
                1. Acceptance of Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <p>
                By accessing and using StaySmart's property management platform, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
              <p>
                These terms apply to all users of the platform, including property owners, managers, tenants, and any other parties accessing our services.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-indigo-600" />
                2. User Accounts & Responsibilities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Account Registration</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>You must provide accurate and complete information during registration</li>
                    <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                    <li>You must notify us immediately of any unauthorized use of your account</li>
                    <li>One account per user/organization is permitted</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Acceptable Use</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Use the platform only for legitimate property management purposes</li>
                    <li>Comply with all applicable local, state, and national laws</li>
                    <li>Respect intellectual property rights and user privacy</li>
                    <li>Do not attempt to hack, reverse engineer, or compromise platform security</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="h-5 w-5 mr-2 text-indigo-600" />
                3. Payment Terms & Billing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Subscription Plans</h4>
                  <p className="text-muted-foreground">
                    Our platform is offered on a subscription basis. You may choose from various plans as described on our pricing page. All fees are exclusive of applicable taxes unless otherwise stated.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Payment Processing</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Payments are processed securely through authorized payment gateways</li>
                    <li>Subscription fees are billed in advance on a monthly or annual basis</li>
                    <li>Failed payments may result in service suspension after a grace period</li>
                    <li>Refunds are processed according to our refund policy</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2 text-indigo-600" />
                4. Data Security & Compliance
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <p>
                We implement robust security measures to protect your data, including encryption, access controls, and regular security audits. However, no method of transmission over the internet is 100% secure.
              </p>
              <p>
                We comply with applicable Indian data protection laws and regulations. For detailed information about our data practices, please refer to our Privacy Policy.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2 text-indigo-600" />
                5. Limitations & Disclaimers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Service Availability</h4>
                  <p className="text-muted-foreground">
                    While we strive for 99.9% uptime, we cannot guarantee uninterrupted service. We may perform maintenance, updates, or experience technical issues that temporarily affect availability.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Limitation of Liability</h4>
                  <p className="text-muted-foreground">
                    Our liability is limited to the amount paid by you for the services during the twelve months preceding the claim. We are not liable for indirect, incidental, or consequential damages.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Legal Compliance</h4>
                  <p className="text-muted-foreground">
                    While our platform helps with compliance, users remain responsible for ensuring their property management practices comply with all applicable laws and regulations.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Scale className="h-5 w-5 mr-2 text-indigo-600" />
                6. Termination & Account Closure
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <p>
                Either party may terminate this agreement with 30 days written notice. We may immediately terminate or suspend access for violations of these terms, non-payment, or other breach of agreement.
              </p>
              <p>
                Upon termination, you will have 60 days to export your data. After this period, we may permanently delete your account and associated data in accordance with our data retention policies.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <p>
                We reserve the right to modify these terms at any time. Material changes will be communicated via email and platform notifications at least 30 days before taking effect. Continued use of the platform after changes constitutes acceptance of the new terms.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Governing Law & Jurisdiction</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <p>
                These terms are governed by the laws of India. Any disputes arising from or relating to these terms or the use of our platform shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka, India.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                For questions about these terms of service, please contact us:
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <Mail className="h-4 w-4 mr-2 text-indigo-600" />
                  <span>legal@staysmart.in</span>
                </div>
                <div className="flex items-center text-sm">
                  <Phone className="h-4 w-4 mr-2 text-indigo-600" />
                  <span>+91 80123 45678</span>
                </div>
                <div className="flex items-center text-sm">
                  <MapPin className="h-4 w-4 mr-2 text-indigo-600" />
                  <span>StaySmart Technologies Pvt Ltd, Koramangala, Bangalore, Karnataka 560034, India</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
