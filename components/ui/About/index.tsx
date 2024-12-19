"use client";
import TitleBanner from "../TitleBanner";
import { useEffect, useRef, useState } from "react";
import BackgroundElements from "./BackgroundElements";
import AboutContent from "./AboutContent";
import ProfileImage from "./ProfileImage";

export default function About() {
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasBeenVisible) {
          setHasBeenVisible(true);
        }
      },
      { threshold: 0.6 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasBeenVisible]);

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
