import { HeroSection } from '@/components/sections/hero-section';
import { KeyFeaturesSection } from '@/components/sections/key-features-section';
import { FeaturesSection } from '@/components/sections/features-section';
import { DownloadSection } from '@/components/sections/download-section';
import { FooterSection } from '@/components/sections/footer-section';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Home() {
  return (
    <main>
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <HeroSection />
      <KeyFeaturesSection />
      <FeaturesSection />
      <DownloadSection />
      <FooterSection />
    </main>
  );
}