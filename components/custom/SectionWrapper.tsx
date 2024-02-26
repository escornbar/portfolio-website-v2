export default function SectionWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="flex flex-col justify-center items-center mt-60">
      {children}
    </div>
  );
}
