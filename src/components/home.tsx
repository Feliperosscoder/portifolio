import { ChevronsUp } from "lucide-react";
import Imagem from "../assets/img_perfil.jpg";

export function Home() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="section-home" className="h-screen w-full bg-red py-6 px-28">
      <div className="h-full w-full flex items-center justify-around">
        <div className="leading-none max-w-4xl flex flex-col justify-center gap-12">
          <h1 className="text-10rem text-white font-bold">
            HE <br /> LLO.
          </h1>

          <div className="">
            <span
              onClick={() => scrollToSection("section-about")}
              className="home_scroll-link flex items-center gap-4 text-2xl text-white cursor-pointer"
            >
              {" "}
              <ChevronsUp />
              Scroll down{" "}
            </span>
          </div>
        </div>
        <img
          src={Imagem}
          alt="Imagem perfil"
          className="h-auto rounded-full shadow-lg"
        />
      </div>
    </section>
  );
}