import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";

export default function Home() {
  return (
    <>
      <div className="container mx-auto overflow-hidden">
        <Hero />
        <div className="lg:px-24">
          <Experience />
          <Projects />
          <Stack />
        </div>
      </div>
    </>
  );
}
