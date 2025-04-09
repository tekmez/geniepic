import HeroGeometric from "@/components/home/hero-geometric";
import FeaturesSection from "@/components/home/features-section";
import CTASection from "@/components/home/cta-section";
import ParallaxSection from "@/components/home/parallax-section";

export default function Home() {
  return (
    <main>
      <HeroGeometric />

      <ParallaxSection speed={0.1} direction="up">
        <FeaturesSection />
      </ParallaxSection>

      <ParallaxSection speed={0.1} direction="down">
        <CTASection />
      </ParallaxSection>
    </main>
  );
}
