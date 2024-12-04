import { EmblaCarousel } from "./Carrousel/EmblaCaroussel";
import TitleBanner from "./TitleBanner";

export default function Portfolio() {
  return (
    <section className="h-screen flex flex-col gap-8" id="portfolio">
      <TitleBanner text="Projets" />
      <EmblaCarousel />
    </section>
  );
}
