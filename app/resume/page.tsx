import SectionWrapper from "@/components/custom/SectionWrapper";
import Resume from "@/components/Resume";

export default function ResumePage() {
  return (
    <div className="relative">
      <div className="absolute -z-10 inset-0 h-full w-full bg-transparent bg-[linear-gradient(to_right,#3d61ff0d_1px,transparent_1px),linear-gradient(to_bottom,#3d61ff0d_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#e5e7eb0d_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb0d_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      <SectionWrapper className="mt-0 py-40">
        <h2 className="mb-20 text-5xl font-bold tracking-tight text-center text-primary">
          résumé
        </h2>
        <Resume />
      </SectionWrapper>
    </div>
  );
}
