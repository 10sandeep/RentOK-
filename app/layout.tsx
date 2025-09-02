import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'StaySmart - Modern Property Management Platform for PGs, Hostels & Coliving',
  description: 'Streamline your property management with digital agreements, e-KYC, automated rent collection, and comprehensive tenant management. Built for Indian PG, hostel, and coliving space owners.',
  keywords: ['property management', 'PG management', 'hostel management', 'coliving', 'tenant management', 'rent collection', 'India'],
  authors: [{ name: 'StaySmart' }],
  openGraph: {
    title: 'StaySmart - Modern Property Management Platform',
    description: 'Streamline your property management with digital agreements, e-KYC, automated rent collection, and comprehensive tenant management.',
    url: 'https://staysmart.com',
    siteName: 'StaySmart',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'StaySmart Property Management Platform',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StaySmart - Modern Property Management Platform',
    description: 'Streamline your property management with digital agreements, e-KYC, automated rent collection, and comprehensive tenant management.',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "StaySmart",
              "applicationCategory": "PropertyManagementSoftware",
              "operatingSystem": "Web",
              "description": "Modern property management platform for PGs, hostels, and coliving spaces in India",
              "url": "https://staysmart.com",
              "publisher": {
                "@type": "Organization",
                "name": "StaySmart",
                "url": "https://staysmart.com"
              },
              "offers": {
                "@type": "Offer",
                "category": "subscription",
                "price": "999",
                "priceCurrency": "INR"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="min-h-screen bg-background">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}