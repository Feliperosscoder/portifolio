import { About } from "./components/about";
import { Education } from "./components/education";
import { Header } from "./components/header";
import { Home } from "./components/home";
import "./styles/global.css";

export function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Education />
    </>
  );
}
