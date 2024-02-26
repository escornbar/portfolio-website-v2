import Image from "next/image";
import BackgroundBeams from "./aceternity/BackgroundBeams";

export default function Hero() {
  return (
    <>
      <div className="container mx-auto flex flex-col md:grid md:grid-cols-2 md:justify-center md:items-center min-h-[80vh] gap-16 antialiased">
        <div className="relative flex flex-col">
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-primary overflow-hidden inline-flex flex-col h-[calc(theme(fontSize.4xl)*theme(lineHeight.snug))] md:h-[calc(theme(fontSize.5xl)*theme(lineHeight.none))] lg:h-[calc(theme(fontSize.5xl)*theme(lineHeight.tight))]">
            <ul className="block text-left leading-tight [&_li]:block animate-text-slide-3">
              <li>software engineer</li>
              <li>ui/ux</li>
              <li>full-stack</li>
              <li aria-hidden="true">software engineer</li>
            </ul>
          </h1>
          <p className="mt-2 lg:text-lg">
            A full-stack developer whom just graduated first-class from the best
            school in Malaysia. Had a good run with hackathons, won some, lost
            some but definitely gained a lot. Best described as a quick learner
            and result driven type of person.
          </p>
        </div>
        <div className="relative flex flex-col flex-1 justify-center items-center">
          {/* <div className="z-10">
            <Image
              src="/syaamil.png"
              alt="syaamil faiq"
              width={300}
              height={300}
              className="mx-auto rounded-3xl lg:ml-auto lg:mr-0 xl:mr-52"
            />
          </div> */}
          <div className="relative w-full max-w-xs h-96 rounded-[2rem] overflow-hidden z-10">
            <Image
              className="object-contain"
              fill
              src={"/syaamil.png"}
              alt="hero-image"
            ></Image>
          </div>
          <div className="absolute inset-0 z-0 flex flex-col justify-center gap-4 opacity-15">
            <div className="flex justify-center leading-none text-[9rem] md:justify-start lg:justify-end xl:text-[11rem]">
              Syaamil
            </div>
            <div className="flex justify-center leading-none text-[9rem] md:justify-start lg:justify-end xl:text-[11rem]">
              Faiq
            </div>
          </div>
        </div>
        <BackgroundBeams className="z-0" />
      </div>
    </>
  );
}
