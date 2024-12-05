import Image from "next/image";
import { IoIosLink } from "react-icons/io";

export interface ProjectType {
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
    <div className="flex flex-col w-full select-none">
      <div className="relative w-full aspect-video">
        <Image
          src={image}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          alt="project image"
          className="object-contain rounded-lg"
          priority
        />
      </div>

      <div className="flex flex-col gap-4 pt-4 h-fit">
        <div className="space-y-4">
          <div className="bg-white w-full h-px"></div>
          <p className="line-clamp-4 text-sm sm:text-base">{text}</p>
          <div className="flex gap-2 flex-wrap">
            {techno.map((tech, index) => (
              <p
                key={index}
                className="text-xs sm:text-sm bg-gray-800 px-2 py-1 rounded-full"
              >
                {tech}
              </p>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 ml-1">
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
              <IoIosLink className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
