"use client";
import { useRef } from "react";
import { EmblaCarousel } from "./Carrousel/EmblaCaroussel";
import TitleBanner from "@/components/ui/TitleBanner";
import { FaHandPointer } from "react-icons/fa";
import { SlScreenDesktop } from "react-icons/sl";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

export default function Portfolio() {
  const sectionRef = useRef(null);

  const hasBeenVisible = useIntersectionObserver(sectionRef);

  return (
    <section
      ref={sectionRef}
      className={`pb-12 transition-all duration-1000 transform ${
        hasBeenVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
      id="portfolio"
    >
      <TitleBanner text="Projets" hasBeenVisible={hasBeenVisible} />
      <div
        className={`flex flex-col items-center mt-4 transition-all duration-700 delay-500 transform ${
          hasBeenVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="relative">
          <div
            className={`transition-transform duration-700 delay-700 transform ${
              hasBeenVisible ? "scale-100" : "scale-0"
            }`}
          >
            <SlScreenDesktop size={42} />
          </div>
          <FaHandPointer
            className={`text-white text-lg motion-safe:animate-swipe absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700 delay-1000 ${
              hasBeenVisible ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>

      <div
        className={`transition-all duration-700 delay-700 transform ${
          hasBeenVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <EmblaCarousel />
      </div>
    </section>
  );
}
