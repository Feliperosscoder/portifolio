import { Github, Instagram, Linkedin, MessageSquare } from "lucide-react";
import Imagem from "../assets/img_perfil.jpg";

export function About() {
  return (
    <section className="h-screen w-full bg-white">
      <div
        id="section-about"
        className="h-full w-full text-center py-28 px-28 max-w-max"
      >
        <h1 className="relative text-5xl text-red tracking-wide font-bold mb-44 before:content-[''] before:absolute before:w-56 before:h-1.5 before:rounded-full before:left-0 before:right-0 before:m-auto before:bg-red before:top-14">
          Sobre Mim
        </h1>

        <div className="grid grid-cols-2 px-40">
          <img
            src={Imagem}
            alt="Imagem perfil"
            className="h-1/2 rounded-full shadow-lg"
          />

          <div className="flex flex-col text-start space-y-16">
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold text-red">Eu sou Felipe</h1>
              <p className="text-zinc-900 font-medium text-xl">
                Desenvolvedor Front-End
              </p>
              <p className="text-zinc-900 font-medium text-lg">
                Atualmente estudo no 3º ano do Ensino Médio na escola Cedup -
                Abílio Paulo, cursando Ténico de Informática. Estudo desde a
                metade do ano de 2022. Desde então, aprimoro meus conhecimentos
                dentro da área do Frontend, desde o básico, como Node, Next.Js,
                MySQL e Typescript, aos mais avançados, como HTML, CSS,
                Tailwild, Javascript (ES6) e React
              </p>
            </div>
            <div className="flex gap-16">
              <MessageSquare className="size-8 text-red cursor-pointer transition-all ease-out duration-300 hover:scale-125" />
              <Instagram className="size-8 text-red cursor-pointer transition-all ease-out duration-300 hover:scale-125 " />
              <Linkedin className="size-8 text-red cursor-pointer transition-all ease-out duration-300 hover:scale-125" />
              <Github className="size-8 text-red cursor-pointer transition-all ease-out duration-300 hover:scale-125"  />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
