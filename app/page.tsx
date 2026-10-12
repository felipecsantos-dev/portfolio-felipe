import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Process } from "@/components/Process";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-accent focus:px-5 focus:py-3 focus:font-semibold focus:text-bg"
      >
        Pular para o conteúdo
      </a>
      <Navbar />
      <main id="conteudo" className="overflow-x-clip">
        <Hero />
        <Services />
        <Projects />
        <Process />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
