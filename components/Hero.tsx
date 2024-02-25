import Image from "next/image";
import BackgroundBeams from "./aceternity/BackgroundBeams";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col md:grid md:grid-cols-2 md:justify-center md:items-center min-h-[80vh] gap-16 antialiased">
        <div className="relative flex flex-col">
          <h2 className="text-3xl font-bold tracking-tight text-primary overflow-hidden inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.none))]">
            <ul className="block text-left leading-tight [&_li]:block animate-text-slide-3">
              <li>software engineer</li>
              <li>ui/ux</li>
              <li>full-stack</li>
              <li aria-hidden="true">software engineer</li>
            </ul>
          </h2>
          <p className="mt-2">
            A full-stack developer whom just graduated first-class from the best
            school in Malaysia. Had a good run with hackathons, won some, lost
            some but definitely gained a lot. Best described as a quick learner
            and result driven type of person.
          </p>
        </div>
        <div className="relative flex flex-col flex-1">
          <div className="z-10">
            <Image
              src="/syaamil.png"
              alt="syaamil faiq"
              width={300}
              height={300}
              className="mx-auto rounded-3xl lg:ml-auto lg:mr-0 xl:mr-52"
            />
          </div>
          <div className="absolute inset-0 z-0 flex flex-col justify-center gap-4 opacity-15">
            <div className="flex justify-center leading-none text-[9rem] md:justify-start md:text-[10rem] xl:justify-end">
              Syaamil
            </div>
            <div className="flex justify-end leading-none text-[9rem] md:text-[10rem] md:justify-start xl:justify-end">
              Faiq
            </div>
          </div>
        </div>
        <BackgroundBeams className="z-0"/>
      </div>
    </>
  );
}
