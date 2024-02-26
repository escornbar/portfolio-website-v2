import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Meteors } from "./aceternity/Metors";

interface Stack {
  type: string;
  items: string[];
}

const stackItems: Stack[] = [
  {
    type: "Machine",
    items: ["Illegear Onyx V Ryzen"],
  },
  {
    type: "CPU",
    items: ["Ryzen 7 4800H"],
  },
  {
    type: "GPU",
    items: ["NVIDIA GeForce GTX1650Ti 4GB GDDR6"],
  },
  {
    type: "Memory",
    items: ["2x Corsair VENGEANCE 8GB DDR4 SODIMM 3200MHz"],
  },
  {
    type: "Monitor",
    items: [
      `MSI Optix G242 24" 144Hz Gaming Monitor`,
      "Dell C2422HE Conferencing Monitor",
    ],
  },
  {
    type: "Keyboard",
    items: ["Razer Huntsman V2 TKL", "Razer Purple Optical Switches"],
  },
  {
    type: "Mouse",
    items: ["Razer Viper Mini"],
  },
  {
    type: "Audio",
    items: ["Razer Kraken", "Apple Airpods Pro"],
  },
  {
    type: "Microphone",
    items: ["Fifine T669"],
  },
  {
    type: "IDE",
    items: ["Microsoft Visual Studio Code"],
  },
  {
    type: "Design Tool",
    items: ["Figma"],
  },
];

export default function Stack() {
  return <StackTable />;
}

function StackTable() {
  return (
    <>
      <Card className={cn("w-full max-w-3xl")} id="stack">
        <CardHeader className="relative overflow-hidden">
          <CardTitle className="mb-6 text-5xl font-bold tracking-tight text-center text-primary">
            stack
          </CardTitle>
          <CardDescription className="text-center text-primary-foreground">
            The stuff that I use for my coding sesh
          </CardDescription>
          <Meteors number={30} />
        </CardHeader>
        <CardContent className={cn("p-0")}>
          {stackItems.map((stack, index) => (
            <StackTableRow
              key={index}
              stack={stack}
              index={index}
              className={index == stackItems.length - 1 ? "rounded-b-xl" : ""}
            />
          ))}
        </CardContent>
      </Card>
    </>
  );
}

function StackTableRow({
  stack,
  index,
  className,
}: {
  stack: Stack;
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
        {stack.type}
      </p>
      <p className=" flex flex-col text-sm text-muted-foreground md:col-span-2 xl:text-base">
        {stack.items.map((item, i) => (
          <>
            <span key={i}>{item}</span>
          </>
        ))}
      </p>
    </div>
  );
}
