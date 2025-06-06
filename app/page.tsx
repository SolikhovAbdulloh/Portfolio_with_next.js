import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { ScrollToTopButton } from "@/components/ui/scroll";

export default function Home() {
  return (
    <div className="w-[93%] m-auto bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <ScrollToTopButton />
      </main>
      <Footer />
    </div>
  );
}
