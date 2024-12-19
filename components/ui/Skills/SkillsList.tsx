import Image from "next/image";

interface SkillsProps {
  title: string;
  images: string[];
  hasBeenVisible: boolean;
  delay?: string;
}

export default function SkillsList({
  title,
  images,
  hasBeenVisible,
  delay = "0ms",
}: SkillsProps) {
  return (
    <div
      className={`relative group lg:w-2/6 md:w-3/6 w-5/6 flex justify-center transition-all duration-1000 ${
        hasBeenVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: delay }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl transform rotate-3 transition-transform group-hover:rotate-1" />
      <div className="relative flex flex-col items-center md:w-full w-5/6 bg-gradient-to-br from-blue-600 to-purple-600 md:p-8 p-4 my-8 rounded-3xl shadow-lg transform transition-all duration-300 hover:scale-[1.02]">
        <div className="relative">
          <div className="absolute -left-4 top-1/2 w-2 h-8 bg-blue-300/50 transform -translate-y-1/2 rounded-full" />
          <p className="text-white font-bold md:text-4xl text-2xl mb-4 relative">
            {title}
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-300/50 to-transparent" />
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 relative">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative group/icon w-16 h-16 flex items-center justify-center opacity-0 scale-80 transition-all duration-500 ${
                hasBeenVisible ? "opacity-100 scale-100" : ""
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <div className="absolute inset-0 bg-white/10 rounded-full transform transition-transform group-hover/icon:scale-110" />
              <Image
                src={image}
                alt={`Skill ${index + 1}`}
                width={48}
                height={48}
                className="relative z-10 w-12 h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
