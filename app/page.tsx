import Experience from "@/components/Experience";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <div className="container mx-auto overflow-hidden">
        <Hero />
        <div className="lg:px-24">
          <Experience />
        </div>
      </div>
    </>
  );
}
