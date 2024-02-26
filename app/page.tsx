import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import SectionWrapper from "@/components/custom/SectionWrapper";

export default function Home() {
  return (
    <>
      <div className="overflow-hidden">
        <Hero />
        <SectionWrapper>
          <Experience />
        </SectionWrapper>
        <SectionWrapper>
          <Projects />
        </SectionWrapper>
        <div className="relative">
          <div className="absolute inset-0 -z-10 h-full w-full bg-transparent bg-[radial-gradient(#3d61ff_1px,transparent_1px)] dark:bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_40%_70%_at_50%_50%,#000_60%,transparent_100%)]"></div>
          <SectionWrapper>
            <Stack />
          </SectionWrapper>
        </div>
      </div>
    </>
  );
}
