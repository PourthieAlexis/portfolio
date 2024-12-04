interface TitleBannerProps {
  text: string;
}

export default function TitleBanner({ text }: TitleBannerProps) {
  return (
    <div className="bg-[#3A3A3A] h-32 flex justify-center items-center">
      <div className="bg-white w-1/5 h-px"></div>
      <p className="mx-8 text-4xl">{text}</p>
      <div className="bg-white w-1/5 h-px"></div>
    </div>
  );
}
