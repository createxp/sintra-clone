import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Employe from "./components/Employe";
import Automations from "./components/Automations";
import AutomationFeatureCards from "./components/AutomationFeatureCards";
import Works from "./components/Works";
import Workers from "./components/Workers";
import Integrations from "./components/Integrations";
import Workspace from "./components/Workspace";
import Testimonials from "./components/Testimonials";
import ExitCta from "./components/ExitCta";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <Employe />
      <Automations />
      <AutomationFeatureCards />
      <Works />
      <Workers />
      <Integrations />
      <Workspace />
      <Testimonials />
      <ExitCta />
      <Faq />
      <Footer />
    </div>
  );
}
