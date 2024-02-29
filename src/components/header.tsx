export function Header() {
  return (
    <header className="fixed bg-white py-5 px-28 w-full shadow-lg flex justify-around items-center ">
        <h1 className="font-semibold text-4xl">
          Felipe <span className="text-green">Rossetto</span>
        </h1>

        <ul className="flex items-center gap-24">
          <li className="text-green font-semibold text-xl cursor-pointer">
            Sobre mim
          </li>
          <li className="text-green font-semibold text-xl cursor-pointer">
            Soft-skills
          </li>
          <li className="text-green font-semibold text-xl cursor-pointer">
            Techs
          </li>
          <li className="text-green font-semibold text-xl cursor-pointer">
            Social Media
          </li>
        </ul>
      </header>
  )
}