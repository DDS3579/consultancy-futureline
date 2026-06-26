import { AboutHero } from '@/components/about/AboutHero';
import { OurJourney } from '@/components/about/OurJourney';
import { OurTeam } from '@/components/about/OurTeam';
import { OurValues } from '@/components/about/OurValues';

export default function AboutPage() {
  return (
    <main className="bg-white">
      <AboutHero />
      <OurJourney />
      <OurTeam />
      <OurValues />
    </main>
  );
}