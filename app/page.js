import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { Faqs } from "@/Components/Faqs";
import { Feature } from "@/Components/Features";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Feature />
      <Faqs />
      <Footer />
    </div>
  );
}

