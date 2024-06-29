import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Meteors } from "./aceternity/Metors";
import Link from "next/link";
import SectionWrapper from "./custom/SectionWrapper";
import React from "react";

interface Setup {
  type: string;
  items: SetupItem[];
}

interface SetupItem {
  name: string;
  link: string | null;
}

const setupItems: Setup[] = [
  {
    type: "Machine",
    items: [
      {
        name: "Illegear Onyx V Ryzen",
        link: "https://www.illegear.com/staging/en/onyx-series/30-onyx-v-ryzen.html",
      },
    ],
  },
  {
    type: "CPU",
    items: [{ name: "Ryzen 7 4800H", link: null }],
  },
  {
    type: "GPU",
    items: [{ name: "NVIDIA GeForce GTX1650Ti 4GB GDDR6", link: null }],
  },
  {
    type: "Memory",
    items: [
      {
        name: "2x Corsair VENGEANCE 8GB DDR4 SODIMM 3200MHz",
        link: "https://shopee.com.my/CORSAIR-Vengeance-SODIMM-DDR4-2400Mhz-2666Mhz-3200Mhz-Notebook-Laptop-SODIMM-RAM-(4GB-8GB-16GB-32GB)-i.5954247.6463886931?sp_atk=b7cbd8a4-ba54-44c0-be09-ac6c0fad6536&xptdk=b7cbd8a4-ba54-44c0-be09-ac6c0fad6536",
      },
    ],
  },
  {
    type: "Monitor",
    items: [
      {
        name: `MSI Optix G242 24" 144Hz Gaming Monitor`,
        link: "https://shopee.com.my/MSI-Optix-G242-Gaming-Monitor-(-23.8-Inch-1920-x-1080-IPS-144HZ-)-i.5529122.9416980062",
      },
      {
        name: "Dell C2422HE Conferencing Monitor",
        link: "https://shopee.com.my/Dell-C2422HE-24-FHD-1920-x-1080-5MS-IPS-USB-TYPE-C-Video-Conferencing-LED-Monitor-with-Webcam-(HDMI--DP--USB-C)-i.157405.18179167194",
      },
    ],
  },
  {
    type: "Keyboard",
    items: [
      {
        name: "Razer Huntsman V2 TKL",
        link: "https://shopee.com.my/Razer-Huntsman-V2-TKL-Tenkeyless-Optical-Gaming-Keyboard-i.316967256.12313331942",
      },
      { name: "Razer Purple Optical Switches", link: null },
    ],
  },
  {
    type: "Mouse",
    items: [
      {
        name: "Razer Viper Mini",
        link: "https://shopee.com.my/RAZER-Viper-Mini-Gaming-Mouse-RZ01-03250100-R3M1-i.104569008.5139746548?sp_atk=d62a8e09-7d62-4489-806c-e4cfbe058d96&xptdk=d62a8e09-7d62-4489-806c-e4cfbe058d96",
      },
    ],
  },
  {
    type: "Audio",
    items: [
      {
        name: "Razer Kraken 7.1 Surround Sound Wired",
        link: "https://shopee.com.my/Razer-Kraken-Multi-Platform-Competitive-7.1-Surround-Sound-Wired-Gaming-Headset-i.316967256.3356816033",
      },
      {
        name: "Apple Airpods Pro",
        link: "https://www.apple.com/my/shop/product/MTJV3ZA/A/airpods-pro",
      },
    ],
  },
  {
    type: "Microphone",
    items: [
      {
        name: "Fifine T669",
        link: "https://shopee.com.my/Fifine-T669-USB-Microphone-Bundle-With-Arm-Stand-Shock-Mount-And-Pop-Filter-For-Streaming-Podcasting-i.318313205.5756366929",
      },
    ],
  },
  {
    type: "Tablet",
    items: [
      {
        name: "Apple iPad 10.9-inch (10th generation)",
        link: "https://www.apple.com/my/ipad-10.9/",
      },
    ],
  },
  {
    type: "IDE",
    items: [
      {
        name: "Microsoft Visual Studio Code",
        link: "https://code.visualstudio.com",
      },
    ],
  },
  {
    type: "Design Tool",
    items: [{ name: "Figma", link: "https://www.figma.com" }],
  },
];

export default function Setup() {
  return (
    <SectionWrapper className="mb-60">
      <SetupTable />
    </SectionWrapper>
  );
}

function SetupTable() {
  return (
    <Card className={cn("w-full max-w-3xl")} id="setup">
      <CardHeader className="relative overflow-hidden">
        <CardTitle className="mb-6 text-5xl font-bold tracking-tight text-center text-primary">
          setup
        </CardTitle>
        <CardDescription className="text-center text-primary-foreground">
          The stuff that I use for my coding sesh
        </CardDescription>
        <Meteors number={30} />
      </CardHeader>
      <CardContent className={cn("p-0")}>
        {setupItems.map((setup, index) => (
          <SetupTableRow
            key={index}
            setup={setup}
            index={index}
            className={index == setupItems.length - 1 ? "rounded-b-xl" : ""}
          />
        ))}
      </CardContent>
    </Card>
  );
}

function SetupTableRow({
  setup,
  index,
  className,
}: {
  setup: Setup;
  index: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "px-6 py-4 md:grid md:grid-cols-3 items-center",
        index % 2 == 0 ? "bg-muted dark:bg-white/[0.08]" : "bg-transparent",
        className
      )}
    >
      <p className="font-bold text-sm md:col-span-1 xl:text-base">
        {setup.type}
      </p>
      <div className="flex flex-col text-sm text-muted-foreground md:col-span-2 xl:text-base">
        {setup.items.map((item, i) => (
          <React.Fragment key={i}>
            {item.link ? (
              <Link href={item.link}>
                <span className="hover:text-primary/80">{item.name}</span>
              </Link>
            ) : (
              <span>{item.name}</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
