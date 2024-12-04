import Image from "next/image";
interface SkillsProps {
  title: string;
  images: string[];
}

export default function SkillsList({ title, images }: SkillsProps) {
  return (
    <div className="flex flex-col items-center md:w-2/5 w-4/5 bg-blue-500 p-8 my-8 rounded-3xl">
      <div>
        <p className="text-white font-bold text-4xl mb-4">{title}</p>
      </div>
      <div className="flex flex-wrap gap-4">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Skill ${index + 1}`}
            width={64}
            height={64}
            className="w-16 h-16 object-contain"
          />
        ))}
      </div>
    </div>
  );
}
