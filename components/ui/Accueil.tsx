import Image from "next/image";

export default function Accueil() {
  return (
    <section className="h-[calc(100vh-5rem)] flex">
      <div className=" flex flex-col items-center justify-center w-5/12">
        <p className="text-5xl">Alexis Pourthié</p>
        <div className="bg-white w-1/2 h-px my-8"></div>
        <p className="text-3xl">Développeur Web</p>
      </div>
      <div className="w-7/12">
        <Image
          src="/images/programming-background.png"
          width={5000}
          height={5000}
          alt="Programming in the background"
          priority
          className="w-screen h-full object rounded-l-full"
        />
      </div>
    </section>
  );
}
