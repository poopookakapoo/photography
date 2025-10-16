import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Spotlight from "./components/Effects/Spotlight";
import Noise from "./components/Effects/Noise";
import Masonry from "./components/Masonry/Masonry";
import { ThemeProvider } from "./components/Theme/ThemeProvider";
import ThemeToggle from "./components/Theme/ThemeToggle";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Services from "./components/Services/Services";

export default function Page() {
  return (
    <ThemeProvider>
      <Spotlight />
      <Noise />
      <Navbar />
      <ThemeToggle floating />
      <main>
        <Hero />
        <section id="gallery">
          <Masonry />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
