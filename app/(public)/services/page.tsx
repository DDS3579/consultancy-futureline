import { Metadata } from 'next';
import { ServicesHero } from '@/components/services/ServicesHero';
import { ServicesGrid } from '@/components/services/ServicesGrid';
import { ServicesProcess } from '@/components/services/ServicesProcess';
import { ServicesCta } from '@/components/services/ServicesCta';

export const metadata: Metadata = {
  title: 'Our Services | Futureline Education Consultancy',
  description: 'Explore our premium, end-to-end study abroad services including university selection, visa assistance, scholarship guidance, accommodation support, and pre-departure briefings.',
};

export default function ServicesPage() {
  return (
    <main className="bg-white">
      <ServicesHero />
      <ServicesGrid />
      <ServicesProcess />
      <ServicesCta />
    </main>
  );
}
