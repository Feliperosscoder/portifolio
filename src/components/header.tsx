export function Header() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header className="fixed bg-primary py-5 px-28 w-full flex justify-around items-center z-50">
      <h1
        className="font-medium text-2xl text-primary cursor-pointer"
        onClick={() => scrollToSection("section-home")}
      >
        Felipe Rossetto
      </h1>

      <ul className="flex items-center gap-24 ">
        <li
          className="relative text-primary font-semibold text-xl cursor-pointer after:content-[''] after:absolute after:bg-white after:h-1 after:w-0 after:left-0 after:-bottom-3 after:transition-all after:ease-out after:duration-500 hover:after:w-full"
          onClick={() => scrollToSection("section-about")}
        >
          Sobre
        </li>
        <li
          className="relative text-primary font-semibold text-xl cursor-pointer after:content-[''] after:absolute after:bg-white after:h-1 after:w-0 after:left-0 after:-bottom-3 after:transition-all after:ease-out after:duration-500 hover:after:w-full"
          onClick={() => scrollToSection("section-education")}
        >
          Educação
        </li>
        <li
          className="relative text-primary font-semibold text-xl cursor-pointer after:content-[''] after:absolute after:bg-white after:h-1 after:w-0 after:left-0 after:-bottom-3 after:transition-all after:ease-out after:duration-500 hover:after:w-full"
          onClick={() => scrollToSection("section-skills")}
        >
          Skills
        </li>
      </ul>
    </header>
  );
}
