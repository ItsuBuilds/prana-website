import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Gallery from "@/components/gallery/Gallery";
import FeaturedMenu from "@/components/menu/Menu";
import Evening from "@/components/evening/Evening";
import Reservation from "@/components/Reservation/Reservation";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <FeaturedMenu />
      <Evening />
      <Reservation />
    </>
  );
}