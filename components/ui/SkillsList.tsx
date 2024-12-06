import Image from "next/image";

interface SkillsProps {
  title: string;
  images: string[];
}

export default function SkillsList({ title, images }: SkillsProps) {
  return (
    <div className="relative group lg:w-2/6 md::w-3/6 w-full flex justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl transform rotate-3 transition-transform group-hover:rotate-1" />

      <div className="relative flex flex-col items-center md:w-full w-5/6 bg-gradient-to-br from-blue-600 to-purple-600 md:p-8 p-4 my-8 rounded-3xl shadow-lg transform transition-all duration-300 hover:scale-[1.02]">
        <div className="relative">
          <div className="absolute -left-4 top-1/2 w-2 h-8 bg-blue-300/50 transform -translate-y-1/2 rounded-full" />
          <p className="text-white font-bold text-4xl mb-4 relative">
            {title}
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-300/50 to-transparent" />
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 relative">
          {images.map((image, index) => (
            <div key={index} className="relative group/icon">
              <div className="absolute inset-0 bg-white/10 rounded-full transform transition-transform group-hover/icon:scale-110" />
              <Image
                src={image}
                alt={`Skill ${index + 1}`}
                width={64}
                height={64}
                className="md:size-16 size-8 object-contain relative transition-transform duration-300 group-hover/icon:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
