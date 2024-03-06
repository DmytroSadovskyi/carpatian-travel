import OffersSlider from '@/app/components/OffersSlider';
import { services } from '@/app/lib/definitions';

export default function Services() {
  return (
    <section className="relative">
      <OffersSlider slides={services} />
    </section>
  );
}
