import Image from "next/image";
import Link from "next/link";

type SocialLinkProps = {
  href: string;
  imgSrc: string;
  alt: string;
};

export default function SocialLink({ href, imgSrc, alt }: SocialLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="transform hover:scale-110 transition-transform duration-300"
    >
      <Image
        src={imgSrc}
        width={500}
        height={500}
        alt={alt}
        className="md:size-16 size-12"
      />
    </Link>
  );
}
