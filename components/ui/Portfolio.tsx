import { EmblaCarousel } from "./Carrousel/EmblaCaroussel";
import TitleBanner from "./TitleBanner";
import { FaHandPointer } from "react-icons/fa";
import { SlScreenDesktop } from "react-icons/sl";

export default function Portfolio() {
  return (
    <section className="pb-12" id="portfolio">
      <TitleBanner text="Projets" />
      <div className="flex flex-col items-center mt-4">
        <div className="relative">
          <SlScreenDesktop size={42} />
          <FaHandPointer className="text-white text-lg motion-safe:animate-swipe absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>
      <EmblaCarousel />
    </section>
  );
}
