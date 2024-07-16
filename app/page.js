import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { Faqs } from "@/Components/Faqs";
import { Feature } from "@/Components/Features";
import Hero from "@/Components/Hero";
import Cta from "@/Components/Cta"


export default function Home() {
  return (
    <div>
      <Hero />
      <Cta/>
      <Feature />
      <Faqs />
      <Footer />
    </div>
  );
}

