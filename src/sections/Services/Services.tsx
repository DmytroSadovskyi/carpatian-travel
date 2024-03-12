import { services } from '@/lib/services';
import OffersSlider from '../../components/OffersSlider';

export default function Services() {
  return (
    <section className="relative" id="services">
      <OffersSlider slides={services} />
    </section>
  );
}
