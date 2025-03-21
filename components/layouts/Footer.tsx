import Image from "next/image";
import Link from "next/link";
import BackToTop from "../ui/BackToTop";

export default function Footer() {
  return (
    <footer>
      <Image
        src="/images/wave.svg"
        width={5000}
        height={5000}
        alt="wave image"
        className="w-full"
      />
      <div className="flex flex-col bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 h-56 items-center justify-center gap-2">
        <BackToTop />
        <p className="md:text-2xl text-xl">Back to top</p>
        <div className="flex gap-4">
          <Link
            href="https://github.com/PourthieAlexis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/github.png"
              width={500}
              height={500}
              alt="github logo"
              className="w-8 h-8"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/alexis-pourthi%C3%A9/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/linkedin.svg"
              width={500}
              height={500}
              alt="linkedin logo"
              className="w-8 h-8"
            />
          </Link>
        </div>
        <p className="md:text-lg text-base">
          06.78.29.33.26 - alexispourthie@gmail.com
        </p>
        <p className="md:text-lg text-base">
          @2025 <span className="font-bold">Alexis Pourthié</span>
        </p>
      </div>
    </footer>
  );
}
