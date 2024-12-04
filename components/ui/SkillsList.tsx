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
          <img
            key={index}
            src={image}
            alt={`Skill ${index + 1}`}
            className="w-18 h-18 object-contain"
          />
        ))}
      </div>
    </div>
  );
}
