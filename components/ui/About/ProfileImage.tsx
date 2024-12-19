import Image from "next/image";

type ProfileImageProps = {
  hasBeenVisible: boolean;
};

export default function ProfileImage({ hasBeenVisible }: ProfileImageProps) {
  return (
    <div
      className={`md:w-1/2 w-full flex justify-center items-center transition-all duration-1000 ${
        hasBeenVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: "0ms" }}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl" />
        <div className="md:size-96 size-40 rounded-full overflow-hidden relative border-2 border-white/10">
          <Image
            src="/images/photo_alexis.png"
            width={500}
            height={500}
            alt="alexis photo"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
