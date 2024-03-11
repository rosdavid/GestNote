import Footer from "./_components/footer";
import Header from "./_components/header";
import Hero from "./_components/hero";

export default async function LandingPage() {
  return (
    <div className="min-h-full flex flex-col ">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
        <Header />
        <Hero />
      </div>
      <Footer />
    </div>
  );
}
