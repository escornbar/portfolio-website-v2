"use client";

import { useRef } from "react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import { GitHubLogoIcon, GlobeIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { Spotlight } from "./aceternity/Spotlight";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Project {
  feature_cover: string;
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  github: string | null;
  live: string | null;
}

const projects: Project[] = [
  {
    feature_cover: "/geniesafe.png",
    title: "geniesafe",
    subtitle: "Best Final Year Project Award",
    description:
      "geniesafe is a blockchain-based wealth inheritance system that aims to streamline crypto asset inheritance and private key safeguarding process in Malaysia through a social recovery model. geniesafe can empower crypto asset holders by facilitating the seamless creation of inheritance wills and ensuring the utmost security in the storage of their private keys.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn-ui",
      "Supabase",
      "Solidity",
      "Hardhat",
      "Ethers.js",
      "Thirdweb",
      "pgsodium",
    ],
    github: null,
    live: "https://geniesafe.tech",
  },
  {
    feature_cover: "/archangel.png",
    title: "Archangel",
    subtitle: "2nd Runner-up UMHackathon 2023",
    description:
      "A prototype designed to unlock the power of AI by revolutionizing the way angel investors source startups and effortlessly filter through pitch decks for the perfect investment opportunities.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Python",
      "MySQL",
      "FastAPI",
      "Machine Learning",
    ],
    github: "https://github.com/GnosisUM/gnosis-vc",
    live: "https://gnosis-vc-1.vercel.app",
  },
  {
    feature_cover: "/supplycontrol+.png",
    title: "SupplyControl+",
    subtitle: "Finalist Standard Chartered ImpactHack 2023",
    description:
      "An all-in-one solution for supply chain management and supply chain financing specially curated for SMEs.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn-ui",
      "Java",
      "Spring Boot",
      "ElephantSQL",
    ],
    github: "https://github.com/GnosisUM/gnosis-vc",
    live: "https://gnosis-vc-1.vercel.app",
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col mt-40">
      <h2 className="mb-40 text-5xl font-bold tracking-tight text-center text-primary">
        projects
      </h2>

      <div
        className="grid grid-cols-1 gap-20 lg:grid-cols-12 lg:gap-6"
        id="projects"
      >
        <Spotlight fill="white" />
        {projects.map((project, index) => (
          <GradientCard
            project={project}
            key={index}
            className={index == 0 ? "lg:col-span-12" : "lg:col-span-6"}
          />
        ))}
      </div>
    </div>
  );
}

function GradientCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const { left, top } = cardRef.current.getBoundingClientRect();
      const x = e.clientX - left; // x position within the element.
      const y = e.clientY - top; // y position within the element.

      if (shadowRef.current) {
        shadowRef.current.style.top = `${y}px`;
        shadowRef.current.style.left = `${x}px`;
        shadowRef.current.style.transform = "translate(-50%, -50%)";
        (
          cardRef.current as any
        ).style = `--cursor-x: ${x}px; --cursor-y: ${y}px`;
      }
    }
  };

  return (
    <>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className={cn(
          "relative z-0 group overflow-hidden h-full border border-white/[0.08] rounded-xl bg-[radial-gradient(450px_circle_at_var(--cursor-x)_var(--cursor-y),#8ecae6_0,transparent,transparent_80%)]",
          className
        )}
      >
        <AspectRatio ratio={10 / 5}>
          <Image
            src={project.feature_cover}
            alt="geniesafe"
            fill
            objectFit="cover"
            className="border-t border-white/[0.08] rounded-t-xl"
          />
        </AspectRatio>
        <div className="space-y-6 relative z-10 p-6">
          <div className="flex justify-between">
            <div className="flex flex-col space-y-1.5">
              <h3 className="text-xl font-semibold leading-none tracking-tight">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {project.subtitle}
              </p>
            </div>
            <div className="flex">
              {project.live && (
                <>
                  <Button variant="ghost" size={"icon"} asChild>
                    <Link href={project.live} target="_blank">
                      <GlobeIcon className="w-6 h-6" />
                    </Link>
                  </Button>
                </>
              )}
              {project.github && (
                <>
                  <Button variant="ghost" size={"icon"} asChild>
                    <Link href={project.github} target="_blank">
                      <GitHubLogoIcon className="w-6 h-6" />
                    </Link>
                  </Button>
                </>
              )}
            </div>
          </div>
          <p className="text-card-foreground">{project.description}</p>
          <div className="flex gap-2 flex-wrap">
            {project.stack.map((stack, index) => (
              <>
                <Badge key={index}>{stack}</Badge>
              </>
            ))}
          </div>
        </div>
        <div
          ref={shadowRef}
          className="opacity-0 absolute top-0 left-0 w-4/5 h-4/5 duration-150 group-hover:opacity-90"
        ></div>
        <div className="absolute inset-[1px] -z-10 rounded-b-xl bg-card"></div>
      </div>
    </>
  );
}
