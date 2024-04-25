import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <main className="font-poppins flex min-h-svh flex-col items-center bg-zinc-900 text-white">
      <Navbar />
      <Hero />
    </main>
  );
};

export default Home;
