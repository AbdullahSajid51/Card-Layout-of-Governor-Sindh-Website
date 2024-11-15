import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Cards from "@/components/Cards";
import SecondRowCards from "@/components/SecondRowCards";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Cards />
      <SecondRowCards />
      <h3 className="text-center text-red-600 border-2 border-red-700">
        {" "}
        This simple web page structure designed by <b><i><ul>Abdullah Sajid</ul></i></b> as assignment of Q2 Class
        Sunday 2-to-5pm at Governor House.
      </h3>
    </div>
  );
}
