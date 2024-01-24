import { IMAGES_MANIFEST } from "next/dist/shared/lib/constants";
import Image from "next/image";
function Skills() {
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <div className="flex justify-center items-center flex-col gap-5">
        <h1 className="text-2xl font-bold mt-5 mb-5 title">Frontend</h1>
        <div className="flex justify-center items-center flex-wrap gap-16">
          <picture className="flex flex-col justify-center items-center gap-1">
            <Image
              className="w-20 h-20"
              width={80}
              height={80}
              src="/Technologies/html.svg"
              alt="html"
            />
            <h1 className="font-bold text-lg">HTML</h1>
          </picture>

          <picture className="flex flex-col justify-center items-center gap-1">
            <Image
              className="w-20 h-20"
              width={80}
              height={80}
              src="/Technologies/css.svg"
              alt="css"
            />
            <h1 className="font-bold text-lg">CSS</h1>
          </picture>

          <picture className="flex flex-col justify-center items-center gap-1">
            <Image
              className="w-20 h-20"
              width={80}
              height={80}
              src="/Technologies/js.svg"
              alt="js" />
            <h1 className="font-bold text-lg">JavaScript</h1>
          </picture>

          <picture className="flex flex-col justify-center items-center gap-1">
            <Image
              width={80}
              height={80}
              src="/Technologies/typescript.svg"
              alt="typescript"
            />
            <h1 className="font-bold text-lg">TypeScript</h1>
          </picture>

          <picture className="flex flex-col justify-center items-center gap-1">
            <Image
              className="w-20 h-20"
              width={80}
              height={80}
              src="/Technologies/vitejs.svg"
              alt="vitejs"
            />
            <h1 className="font-bold text-lg">ViteJS</h1>
          </picture>

          <picture className="flex flex-col justify-center items-center gap-1">
            <Image
              className="w-20 h-20 bg-white rounded p-1"
              width={80}
              height={80}
              src="/Technologies/astro.svg"
              alt="astro"
            />
            <h1 className="font-bold text-lg">Astro</h1>
          </picture>

          <picture className="flex flex-col justify-center items-center gap-1">
            <Image
              className="w-20 h-20 bg-white rounded-3xl p-1"
              width={80}
              height={80}
              src="/Technologies/nextjs.svg"
              alt="nextjs"
            />
            <h1 className="font-bold text-lg">Next.js</h1>
          </picture>

          <picture className="flex flex-col justify-center items-center gap-1">
            <Image
              className="w-20 h-20"
              width={80}
              height={80}
              src="/Technologies/react.svg"
              alt="react"
            />
            <h1 className="font-bold text-lg">React</h1>
          </picture>

          <picture className="flex flex-col justify-center items-center gap-1">
            <Image
              className="w-20 h-20"
              width={80}
              height={80}
              src="/Technologies/tailwindcss.svg"
              alt="tailwindcss"
            />
            <h1 className="font-bold text-lg">TailwindCSS</h1>
          </picture>
        </div>
      </div>

      <div className="flex justify-center items-center flex-col gap-5">
        <h1 className="text-2xl font-bold mt-5 mb-5 title">Backend</h1>
        <div className="flex justify-center items-center flex-wrap gap-16">
          <picture className="flex flex-col justify-center items-center gap-1">
            <Image
              className="h-20 w-20 bg-white rounded-3xl px-2"
              width={80}
              height={80}
              src="/Technologies/nodejs.svg"
              alt="nodejs"
            />
            <h1 className="font-bold text-lg">Node.js</h1>
          </picture>

          <picture className="flex flex-col justify-center items-center gap-1">
            <Image
              className="w-20 h-20 bg-white rounded-3xl px-2"
              width={80}
              height={80}
              src="/Technologies/express.svg"
              alt="express"
            />
            <h1 className="font-bold text-lg">Express.js</h1>
          </picture>

          <picture className="flex flex-col justify-center items-center gap-1">
            <Image
              className="h-20 w-20 bg-white rounded-3xl px-2"
              width={80}
              height={80}
              src="/Technologies/mongodb.svg"
              alt="mongodb"
            />
            <h1 className="font-bold text-lg">MongoDB</h1>
          </picture>

          <picture className="flex flex-col justify-center items-center gap-1">
            <Image
              className="w-20 h-20 bg-white rounded-3xl px-2"
              width={80}
              height={80}
              src="/Technologies/mysql.svg"
              alt="mysql"
            />
            <h1 className="font-bold text-lg">MySQL</h1>
          </picture>
        </div>
      </div>

      <div className="flex justify-center items-center flex-col gap-5">
        <h1 className="text-2xl font-bold mt-5 mb-5 title">Deployment</h1>
        <div className="flex justify-center items-center flex-wrap gap-16">
          <picture className="flex flex-col justify-center items-center gap-1">
            <Image
              width={80}
              height={80}
              src="/Technologies/netlify.svg"
              alt="netlify"
            />
            <h1 className="font-bold text-lg">Netlify</h1>
          </picture>

          <picture className="flex flex-col justify-center items-center gap-1">
            <Image
              className="w-20 h-20 bg-white rounded-3xl p-1"
              width={80}
              height={80}
              src="/Technologies/vercel.svg"
              alt="vercel"
            />
            <h1 className="font-bold text-lg">Vercel</h1>
          </picture>
          {/* <picture className="flex flex-col justify-center items-center gap-1">
            <Image
              className="w-20 h-20"
              width={80}
              height={80}
              src="/Technologies/aws.svg"
              alt="aws"
            />
            <h1 className="font-bold text-lg">AWS</h1>
          </picture> */}

          <picture className="flex flex-col justify-center items-center gap-1">
            <Image
              className="w-20 h-20"
              width={80}
              height={80}
              src="/Technologies/render.webp"
              alt="render"
            />
            <h1 className="font-bold text-lg">Render</h1>
          </picture>
        </div>
      </div>

      <div className="flex justify-center items-center flex-col gap-5">
        <h1 className="text-2xl font-bold mt-5 mb-5 title">Others</h1>
        <div className="flex justify-center items-center flex-wrap gap-16">
          <picture className="flex flex-col justify-center items-center gap-1">
            <Image
              className="w-20 h-20 p-1"
              width={80}
              height={80}
              src="/Technologies/git.svg"
              alt="git"
            />
            <h1 className="font-bold text-lg">Git</h1>
          </picture>

          <picture className="flex flex-col justify-center items-center gap-1">
            <Image
              className="w-20 h-20 bg-white rounded-full p-0.5"
              width={80}
              height={80}
              src="/Technologies/github.svg"
              alt="github"
            />
            <h1 className="font-bold text-lg">GitHub</h1>
          </picture>

          <picture className="flex flex-col justify-center items-center gap-1">
            <Image
              className="w-20 h-20 rounded-full p-1"
              width={80}
              height={80}
              src="/Technologies/linux.svg"
              alt="linux"
            />
            <h1 className="font-bold text-lg">Linux</h1>
          </picture>
        </div>
      </div>
    </div>
  );
}

export default Skills;
