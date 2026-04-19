import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Employe from "./components/Employe";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <Employe />
    </div>
  );
}
