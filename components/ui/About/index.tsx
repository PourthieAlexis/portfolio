"use client";
import TitleBanner from "@/components/ui/TitleBanner";
import { useRef } from "react";
import BackgroundElements from "@/components/ui/About/BackgroundElements";
import AboutContent from "@/components/ui/About/AboutContent";
import ProfileImage from "@/components/ui/About/ProfileImage";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

export default function About() {
  const sectionRef = useRef(null);

  const hasBeenVisible = useIntersectionObserver(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col relative overflow-hidden"
      id="about"
    >
      <TitleBanner text="À propos de moi" hasBeenVisible={hasBeenVisible} />
      <BackgroundElements isVisible={hasBeenVisible} />
      <div className="flex-1 flex justify-center items-center relative z-10 py-10 my-24">
        <div className="flex md:flex-row flex-col-reverse items-center gap-12 max-w-7xl w-full px-4">
          <AboutContent hasBeenVisible={hasBeenVisible} />
          <ProfileImage hasBeenVisible={hasBeenVisible} />
        </div>
      </div>
    </section>
  );
}
