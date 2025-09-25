import Navigation from "../components/navigation";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Features from "@/components/Features";
// import Logos07Page from "@/components/logos-07";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Features />
      {/* <Logos07Page /> */}
      <Footer />
    </>
  );
}
