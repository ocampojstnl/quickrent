import Navigation from "../components/navigation";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Features from "@/components/Features";
// import Logos07Page from "@/components/logos-07";
import RentalsCards from "@/components/RentCards";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <RentalsCards limit={4} />
      <Features />
      {/* <Logos07Page /> */}
      <Footer />
    </>
  );
}
