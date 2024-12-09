import React from "react";
import Image from "next/image";
import { IoIosLink } from "react-icons/io";

interface ProjectType {
  text: string;
  image: string;
  techno: string[];
  githubLink?: string;
  deploy?: string;
}

export default function Project({
  image,
  text,
  techno,
  githubLink,
  deploy,
}: ProjectType) {
  return (
    <div className="flex flex-col bg-slate-900 rounded-xl p-6 h-full shadow-lg hover:shadow-xl transition-shadow duration-300  select-none">
      <div className="relative w-full aspect-video mb-6">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent" />
        <Image
          src={image}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          alt="project image"
          className="object-contain rounded-lg"
          priority
        />
      </div>

      <div className="flex flex-col flex-1 gap-4">
        <div className="space-y-4 flex-1">
          <div className="h-px bg-slate-800" />
          <p className="line-clamp-4 text-sm sm:text-base text-slate-300">
            {text}
          </p>
        </div>

        <div className="flex gap-2 flex-wrap">
          {techno.map((tech, index) => (
            <span
              key={index}
              className="text-xs sm:text-sm px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-2">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src="/images/github.png"
                width={32}
                height={32}
                alt="github link"
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </a>
          )}
          {deploy && (
            <a
              href={deploy}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <IoIosLink className="w-6 h-6 sm:w-8 sm:h-8 text-slate-300" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
