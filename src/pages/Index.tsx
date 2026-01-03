import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { CollectionPreview } from '@/components/home/CollectionPreview';
import { IngredientPurity } from '@/components/home/IngredientPurity';
import { WhyPremium } from '@/components/home/WhyPremium';
import { GiftingSection } from '@/components/home/GiftingSection';
import { Testimonials } from '@/components/home/Testimonials';
import { FinalCTA } from '@/components/home/FinalCTA';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <CollectionPreview />
      <IngredientPurity />
      <WhyPremium />
      <GiftingSection />
      <Testimonials />
      <FinalCTA />
    </Layout>
  );
};

export default Index;
