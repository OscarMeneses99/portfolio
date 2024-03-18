import Header from "../components/Header";
import Footer from "../components/Footer";
import TimeLine from "../components/TimeLine";
import Skills from "../components/Skills";
import Proyect from "../components/Proyect";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl min-h-screen mb-10 px-6">
      <Header />
      <hr className="mt-10 mb-10 border border-white shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]" />

      <TimeLine />
      <h1 className="text-4xl font-bold text-center mt-5 mb-10 skills">
        Skills
      </h1>
      <Skills />

      <h1 className="text-4xl font-bold mt-16 mb-16 text-center projects">
        Proyects
      </h1>
      <div className="flex flex-col gap-[120px]">
        <Proyect
          title="Cinema Frontend"
          description="Website provides a seamless experience for movie enthusiasts, offering a comprehensive database of films along with the convenience of adding, updating, and deleting entries."
          image="/Proyects/Movies.webp"
          link="https://movies-react-vite.netlify.app/home"
          code="https://github.com/OscarMeneses99/movies-react"
        />
        <Proyect
          title="Cinema Backend"
          description="Backend for the Cinema Frontend, it's a REST API with CRUD operations, authentication and authorization."
          image="/Proyects/Movies-backend.webp"
          link="https://movies-backend.3.us-1.fl0.io/api-docs/"
          code="https://github.com/OscarMeneses99/movies-backend"
        />
        <Proyect
          title="IP Address Info"
          description="This website allows you to get information about an IP address, such as the location, the timezone, etc."
          image="/Proyects/IP-Address-Info.webp"
          link="https://ip-info-react.netlify.app/"
          code="https://github.com/OscarMeneses99/ipInfo-react"
        />
        <Proyect
          title="NextJS 14 Tutorial"
          description="Learning nextjs with its tutorial."
          image="/Proyects/TutorialNextjs.png"
          link="https://tutorial-nextjs-lovat.vercel.app/"
          code="https://github.com/OscarMeneses99/tutorial-nextjs"
        />
        <Proyect
          title="Bookstore"
          description="This project was created with Astro, and it provided a valuable learning experience as I delved into mastering the use of the View Transitions API."
          image="/Proyects/Books.webp"
          link="https://book-astro.netlify.app/"
          code="https://github.com/OscarMeneses99/books-astro"
        />
      </div>

      <hr className="mt-28 mb-10 border border-white shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]" />
      <Footer />
    </main>
  );
}
