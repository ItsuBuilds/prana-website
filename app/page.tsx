import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Intro from "@/components/intro/Intro";
import About from "@/components/about/About";
import FeaturedMenu from "@/components/menu/Menu";
import Evening from "@/components/evening/Evening";
import Reservation from "@/components/Reservation/Reservation";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Intro />
      <About />
      <FeaturedMenu />
      <Evening />
      <Reservation />
      <Footer />
    </>
  );
}