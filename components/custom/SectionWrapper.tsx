import { cn } from "@/lib/utils";

export default function SectionWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "container mx-auto flex flex-col justify-center items-center mt-60 lg:px-24",
        className
      )}
    >
      {children}
    </div>
  );
}
