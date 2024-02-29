import Imagem from "../assets/img_perfil.jpg";

export function Home() {
  return (
    <section className="h-screen w-full bg-green py-6 px-28">
        <div className="h-full w-full flex items-center justify-around">
          <div className="max-w-4xl flex flex-col justify-center gap-8">
            <h1 className="text-6xl text-white font-bold">Eu sou Felipe!</h1>
            <p className="text-xl text-white font-medium leading-10">
              Atualmente estudo no 3º ano do Ensino Médio na escola Cedup -
              Abílio Paulo, cursando Ténico de Informática. Estudo desde a
              metade do ano de 2022. Desde então, aprimoro meus conhecimentos
              dentro da área do Frontend, desde o básico, com o Node,
              MySQL, aos mais avançados, como HTML5, CSS3,
              Tawildcss, Javascript (ES6), React com Typescript e Docker
            </p>
          </div>
          <img src={Imagem} alt="Imagem perfil" className="h-1/2 rounded-full shadow-lg" />
        </div>
      </section>
  )
}