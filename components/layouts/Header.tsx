import { MdOutlineFileDownload } from "react-icons/md";
export default function Header() {
  return (
    <header
      className="flex items-center justify-between h-20 px-12 border-b-[#009DFF] border-b-2"
      id="home"
    >
      <div className="w-40" />
      <ul className="flex gap-4">
        <li>
          <a
            href="#home"
            className="relative inline-block transition-transform active:scale-95 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-white after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
          >
            Accueil
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="relative inline-block transition-transform active:scale-95 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-white after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
          >
            A propos
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="relative inline-block transition-transform active:scale-95 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-white after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
          >
            Compétences
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            className="relative inline-block transition-transform active:scale-95 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-white after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
          >
            Portfolio
          </a>
        </li>
      </ul>
      <a
        href="/CV/Alexis_Pourthié_CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 p-3 rounded-lg flex items-center gap-2 w-fit"
      >
        CV <MdOutlineFileDownload size={"1.5rem"} />
      </a>
    </header>
  );
}
