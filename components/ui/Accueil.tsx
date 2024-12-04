import Image from "next/image";

export default function Accueil() {
  return (
    <section className="h-[calc(100vh-5rem)] flex flex-col md:flex-row relative">
      <div className="flex flex-col items-center justify-center w-full md:w-5/12 z-10 absolute md:static inset-0 bg-black/50 md:bg-transparent">
        <p className="text-4xl md:text-5xl text-center md:text-left">
          Alexis Pourthié
        </p>
        <div className="bg-white w-1/2 h-px my-6 md:my-8"></div>
        <p className="text-2xl md:text-3xl text-center md:text-left">
          Développeur Web
        </p>
      </div>
      <div className="w-full md:w-7/12 h-full">
        <Image
          src="/images/programming-background.png"
          width={5000}
          height={5000}
          alt="Programming in the background"
          priority
          className="w-full h-full object-cover md:rounded-l-full"
        />
      </div>
    </section>
  );
}
