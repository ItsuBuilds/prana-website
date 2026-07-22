import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Intro from "@/components/intro/Intro";
import About from "@/components/about/About";
import SignatureMenu from "@/components/menu/SignatureMenu";
import Reviews from "@/components/reviews/Reviews";
import Reservation from "@/components/Reservation/Reservation";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Intro />
      <About />
      <SignatureMenu />
      <Reviews />
      <Reservation />
      <Footer />
    </>
  );
}