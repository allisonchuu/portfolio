import Image from "next/image";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import StrawbeariGif from "./components/StrawbeariGif";

export default function Home() {
  return (
    <main className="flex place-items-center min-h-screen flex-col bg-rose-50">
      <NavBar />
      <div className="container mt-28 mx-0 px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectSection/>
        <StrawbeariGif />
      </div>
    </main>
  );
}
