import { BookOpen, School } from "lucide-react";

export function Education() {
  return (
    <section id="section-education" className="min-h-screen w-full bg-primary">
      <div className="h-full w-full py-28 px-28 flex flex-col items-center">
        <h1 className="relative text-5xl text-primary tracking-wide font-bold mb-44 before:content-[''] before:absolute before:w-56 before:h-1.5 before:rounded-full before:left-0 before:right-0 before:m-auto before:bg-white before:top-14">
          Eduacação
        </h1>
        <div className="relative max-w-[1200px] mx-auto after:content-[''] after:absolute after:w-1.5 after:h-full after:bg-white after:top-0 after:left-1/2 after:-ml-1 after:z-10">
          <div className="py-2 px-12 relative w-1/2 left-0">
            <div className="absolute size-10 rounded-full -right-5 top-8 z-40 bg-white flex justify-center items-center">
              <School />
            </div>
            <div className="py-5 px-12 relative rounded-xl text-base bg-white shadow-xl flex flex-col">
              <h2 className="text-xl font-semibold">Cedup - Abílio Paulo</h2>
              <small className="text-zinc-600">2022 - 2024</small>
              Entrei para o ensino médio através do Cedup, principalmente por
              causa do curso técnico de informática. No primeiro ano não tive o
              curso por causa do NEM (Novo Ensino Médio), mas mesmo assim, não
              deixei de começar meus estudos. Como eu tinha começado antes do
              curso ter começado, tive uma grande vantagem se comparado com os
              outros alunos, pois já tinha conhecimento prévio das matérias.
            </div>
          </div>

          <div className="py-2 px-12 relative w-1/2 left-1/2">
            <div className="absolute size-10 rounded-full -left-5 top-8 z-40 bg-white flex justify-center items-center">
              <BookOpen />
            </div>
            <div className="py-5 px-12 relative rounded-xl text-base bg-white shadow-xl flex flex-col">
              <h2 className="text-xl font-semibold ">
                React do Zero a Maestria (c/ hooks, router, API, Projetos)
              </h2>
              <small className="text-zinc-600">
                Matheus Basttiti - 38 horas | Udemy
              </small>
              Minha expência com React não começou aqui, havia já um tempo que
              tinha focado nessa biblioteca. Nesse curso acabei desenvolendo
              projetos, como um todoList, até mesmo um sistema de Login usando
              Firebase. Também acabei praticando a minha Lógica de Programação.
            </div>
          </div>

          <div className="py-2 px-12 relative w-1/2 left-0">
            <div className="absolute size-10 rounded-full -right-5 top-8 z-40 bg-white flex justify-center items-center">
              <BookOpen />
            </div>
            <div className="py-5 px-12 relative rounded-xl text-base bg-white shadow-xl flex flex-col">
              <h2 className="text-xl font-semibold ">
                Node.js do Zero a Maestria com diversos Projetos
              </h2>
              <small className="text-zinc-600">
                Matheus Basttiti - 38 horas | Udemy
              </small>
              Partindo para o Node, acabei aprendendo o poder do javascript no
              backend, junto com algumas outras ferramentas, como handlebars e
              outros módulos. Partindo para os projetos, aprendi a como fazer
              requisições e mandar para o meu corpo da página.
            </div>
          </div>

          <div className="py-2 px-12 relative w-1/2 left-1/2">
            <div className="absolute size-10 rounded-full -left-5 top-8 z-40 bg-white flex justify-center items-center">
              <BookOpen />
            </div>
            <div className="py-5 px-12 relative rounded-xl text-base bg-white shadow-xl flex flex-col">
              <h2 className="text-xl font-semibold ">
                Docker para Desenvolvedores
              </h2>
              <small className="text-zinc-600">
                Matheus Basttiti - 12 horas | Udemy
              </small>
              Minha experiência com Docker foi uma forma divertida, pois com uma
              ferramenta dessas poderia fazer do meu código compatível para
              todos os sistemas operacionais e não só isso, como importar
              Imagens de terceiros. Acabei me divertindo com docker,
              principalmente com docker compose.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
