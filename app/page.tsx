import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import SectionWrapper from "@/components/custom/SectionWrapper";

export default function Home() {
  return (
    <>
      <div className="container mx-auto overflow-hidden">
        <Hero />
        <div className="lg:px-24">
          <SectionWrapper>
            <Experience />
          </SectionWrapper>
          <SectionWrapper>
            <Projects />
          </SectionWrapper>
          <SectionWrapper>
          <Stack />
          </SectionWrapper>
        </div>
      </div>
    </>
  );
}
