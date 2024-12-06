import { EmblaCarousel } from "./Carrousel/EmblaCaroussel";
import TitleBanner from "./TitleBanner";

export default function Portfolio() {
  return (
    <section className="min-h-screen" id="portfolio">
      <TitleBanner text="Projets" />
      <EmblaCarousel />
    </section>
  );
}
