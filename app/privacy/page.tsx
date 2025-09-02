import { 
  Card, CardContent, CardHeader, CardTitle 
} from '@/components/ui/card';
import { 
  Shield, Lock, Eye, UserCheck, Database, FileText, 
  MailIcon, PhoneIcon, MapPin 
} from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="text-center mb-12">
        <Shield className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-lg text-muted-foreground">
          Your privacy is critically important to us
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Lock className="h-5 w-5 mr-2 text-indigo-600" />
              Information We Collect
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We collect information that you provide directly to us, such as when
              you create an account, update your profile, or use interactive
              features of our services.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Eye className="h-5 w-5 mr-2 text-indigo-600" />
              How We Use Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We use the information we collect to provide, maintain, and improve
              our services, to develop new services, and to protect our company and
              our users.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <UserCheck className="h-5 w-5 mr-2 text-indigo-600" />
              Information Sharing
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We do not share your personal information with companies,
              organizations, or individuals outside of our organization except in
              the following cases: with your consent, for legal reasons, or to
              protect rights and safety.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Database className="h-5 w-5 mr-2 text-indigo-600" />
              Data Security
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We work hard to protect our users from unauthorized access to or
              unauthorized alteration, disclosure, or destruction of information we
              hold. We implement strong security measures and regular audits.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="h-5 w-5 mr-2 text-indigo-600" />
              Contact Us
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact
              us:
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <MailIcon className="h-4 w-4 mr-2 text-indigo-600" />
                <span>privacy@staysmart.in</span>
              </div>
              <div className="flex items-center text-sm">
                <PhoneIcon className="h-4 w-4 mr-2 text-indigo-600" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center text-sm">
                <MapPin className="h-4 w-4 mr-2 text-indigo-600" />
                <span>123, MG Road, Bengaluru, India</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
