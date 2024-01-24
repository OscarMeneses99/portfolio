import DownloadIcon from "../assets/downloadIcon";
import UbicationIcon from "../assets/ubicationIcon";
import Taco from "../assets/Taco.svg";
import PhoneIcon from "../assets/phoneIcon";
import GithubIcon from "../assets/github.svg";
import LinkedinIcon from "../assets/linkedin.svg";
import Image from "next/image";
function Header() {
  return (
    <header className="flex flex-col sm:flex-row justify-center items-center gap-4 flex-wrap mt-10">
      <picture className="relative">
        <Image
          src="/Oscar.webp"
          alt="logo"
          width={180}
          height={180}
          priority
          quality={100}
          className="rounded-[100%] object-cover"
        />
        <Image
          src={Taco}
          alt="taco"
          width={45}
          height={45}
          priority
          className="bg-zinc-800 rounded-full absolute bottom-2 right-2"
        />
      </picture>

      <div className="flex flex-col justify-center items-center sm:items-start">
        <h1 className="text-4xl font-bold name">
          Oscar Meneses
        </h1>
        <h2 className="font-light text-xl ml-2 mt-1 text-white/75">
          Web Developer Trainee
        </h2>
        <div className="flex items-center mt-3">
          <UbicationIcon />
          <span className="ml-1">México, CDMX</span>
        </div>
        <div className="flex items-center mt-1">
          <PhoneIcon />
          <span className="ml-1">+52 55 6703 9752</span>
        </div>
        <div className="flex flex-row items-center gap-1 mt-2">
          <a
            href="https://github.com/OscarMeneses99"
            className="hover:scale-105 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={GithubIcon} priority width={35} alt="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/oscarmeneses99/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transition-all"
          >
            <Image width={45} src={LinkedinIcon} priority alt="linkedin" />
          </a>
          <a
            className="flex place-content-center items-center w-[170px] h-[40px] rounded-full bg-purple-700 transition-all hover:bg-purple-800 hover:scale-105 text-white"
            href="/OscarMenesesCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="OscarMenesesCV.pdf"
          >
            <span className="mr-2">
              <DownloadIcon />
            </span>
            <span className="text-md font-bold">Download CV</span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
