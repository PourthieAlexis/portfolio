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
    <div className="flex flex-col w-[434px] select-none">
      <div className="relative w-full h-[300px]">
        <Image
          src={image}
          fill
          alt="project image"
          className="object-contain rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-6 pt-4 h-[300px] justify-between">
        <div className="space-y-6">
          <div className="bg-white w-full h-px"></div>
          <p className="line-clamp-4">{text}</p>
          <div className="flex gap-4 flex-wrap">
            {techno.map((tech, index) => (
              <p
                key={index}
                className="text-sm bg-gray-800 px-3 py-1 rounded-full"
              >
                {tech}
              </p>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4 ml-2">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src="/images/github.png"
                width={500}
                height={500}
                alt="github link"
                className="w-8 h-8"
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
              <IoIosLink size={"2rem"} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
