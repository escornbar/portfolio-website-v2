import SectionWrapper from "@/components/custom/SectionWrapper";
import Resume from "@/components/Resume";

export default function ResumePage() {
  return (
    <>
      <div className="fixed left-0 top-0 -z-10 h-full w-full">
        <div className="relative h-full w-full bg-background">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#3d61ff0d_1px,transparent_1px),linear-gradient(to_bottom,#3d61ff0d_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#e5e7eb0d_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb0d_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        </div>
      </div>
      <SectionWrapper className="mt-0 py-40">
        <h2 className="mb-20 text-5xl font-bold tracking-tight text-center text-primary">
          résumé
        </h2>
        <Resume />
      </SectionWrapper>
    </>
  );
}
