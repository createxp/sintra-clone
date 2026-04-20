import AutomationFeatureCards from "../components/AutomationFeatureCards";
import Navbar from "../components/Navbar";

export default function AutomationsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <Navbar />
      <main className="flex-1 px-4 pb-24 pt-12 md:px-10 lg:px-10 xl:px-[120px]">
        <div className="mx-auto w-full min-w-[1440px] font-walsham">
          <AutomationFeatureCards />
        </div>
      </main>
    </div>
  );
}
