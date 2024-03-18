import LinkIcon from "../assets/linkIcon";
import CodeIcon from "../assets/codeIcon";
import Image from "next/image";
function Proyect({
  title,
  description,
  image,
  link,
  code,
}: {
  title: string;
  description: string;
  image: string;
  link: string;
  code: string;
}) {
  const shadow =
    "shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]";
  return (
    <figure
      className={`w-full flex flex-col justify-center items-center ${shadow}`}
    >
      <div className="flex flex-col justify-center items-center bg-black rounded w-full">
        <Image
          className="rounded-t w-full object-cover"
          src={image}
          width={1351}
          height={767}
          quality={100}
          alt={`image from ${title} proyect`}
        />

        <h1 className="font-extrabold text-4xl mt-6 mb-5 text-center title">
          {title}
        </h1>
        <p className="text-center text-xl text-white/70 px-2 md:px-10">
          {description}
        </p>
      </div>


      <div className="flex justify-center items-center gap-4 mt-6 mb-8">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="flex justify-center items-center bg-pink-600 rounded-full px-5 py-3 hover:bg-pink-700 transition-colors duration-500"
        >
          <span className="text-xl font-mono font-bold mt-0.5">Link</span>
          <span className="ml-1">
            <LinkIcon />
          </span>
        </a>
        <a
          href={code}
          target="_blank"
          rel="noreferrer"
          className="flex justify-center items-center bg-purple-700 rounded-full px-5 py-3 hover:bg-purple-800 transition-colors duration-500"
        >
          <span className="text-xl font-mono font-bold mt-0.5">Code</span>
          <span className="ml-1">
            <CodeIcon />
          </span>
        </a>
      </div>
    </figure>
  );
}

export default Proyect;
