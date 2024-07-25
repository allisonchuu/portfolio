import Image from "next/image";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";

export default function Home({ children }) {
  return (
    <main className="flex min-h-screen flex-col bg-rose-50 ">
      <NavBar />
      <div className="container mt-28 mx-auto px-12 py-4">
        <HeroSection />
      </div>
    </main>
  );
}
