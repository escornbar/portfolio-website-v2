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
import SectionWrapper from "./custom/SectionWrapper";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useIsVisible } from "@/hooks/useIsVisible";

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
    github: "https://github.com/escornbar/impacthack-2023",
    live: null,
  },
];

export default function Projects() {
  return (
    <SectionWrapper>
      <h2 className="mb-40 text-5xl font-bold tracking-tight text-center text-primary">
        projects
      </h2>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12" id="projects">
        <Spotlight fill="white" className="hidden lg:block" />
        {projects.map((project, index) => (
          <ShinyCard
            key={index}
            project={project}
            className={index == 0 ? "lg:col-span-12" : "lg:col-span-6"}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

function ShinyCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  const ref = useRef(null);
  const isVisible = useIsVisible(ref);

  return (
    <Card className={cn("w-full", className)}>
      <CardHeader
        className="p-0 relative overflow-clip space-y-0 rounded-t-xl"
        ref={ref}
      >
        <AspectRatio ratio={16 / 9}>
          <Image
            src={project.feature_cover}
            alt="geniesafe"
            fill
            sizes="100vw"
            className={cn(
              "scale-105 object-cover border-t border-white/[0.08] rounded-t-xl",
              isVisible ? "ease-in-out duration-1000 scale-100 delay-300" : ""
            )}
          />
        </AspectRatio>
        <div
          className={cn(
            "absolute bg-black border-t border-white/[0.08] rounded-t-xl w-full h-full opacity-60",
            isVisible
              ? "transition-opacity duration-1000 opacity-0 delay-300"
              : ""
          )}
        />
      </CardHeader>
      <CardContent className="pt-6 space-y-6">
        <div className="flex justify-between">
          <div className="flex flex-col space-y-1.5">
            <h3 className="text-xl font-semibold leading-none tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground">{project.subtitle}</p>
          </div>
          <div className="flex">
            {project.live && (
              <Button variant="ghost" size={"icon"} asChild>
                <Link href={project.live} target="_blank">
                  <GlobeIcon className="w-6 h-6" />
                </Link>
              </Button>
            )}
            {project.github && (
              <Button variant="ghost" size={"icon"} asChild>
                <Link href={project.github} target="_blank">
                  <GitHubLogoIcon className="w-6 h-6" />
                </Link>
              </Button>
            )}
          </div>
        </div>
        <p className="text-card-foreground">{project.description}</p>
      </CardContent>
      <CardFooter className="flex gap-2 flex-wrap">
        {project.stack.map((stack, index) => (
          <Badge key={index}>{stack}</Badge>
        ))}
      </CardFooter>
    </Card>
  );
}
