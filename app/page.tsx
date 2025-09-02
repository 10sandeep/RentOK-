import { Hero } from '@/components/sections/hero';
import { SocialProof } from '@/components/sections/social-proof';
import { Features } from '@/components/sections/features';
import { HowItWorks } from '@/components/sections/how-it-works';
import { Metrics } from '@/components/sections/metrics';
import { Testimonials } from '@/components/sections/testimonials';
import { Integrations } from '@/components/sections/integrations';
import { FinalCTA } from '@/components/sections/final-cta';

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <Features />
      <HowItWorks />
      <Metrics />
      <Testimonials />
      <Integrations />
      <FinalCTA />
    </>
  );
}