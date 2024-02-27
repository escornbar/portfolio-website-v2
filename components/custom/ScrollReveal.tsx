"use client";
import React, { useEffect, useRef, useState } from "react";

export default function ScrollReveal({
  children,
  threshold,
  duration,
  x,
  y,
}: {
  children: any;
  threshold: number;
  duration: string;
  x?: number;
  y?: number;
}) {
  x = x || 0;
  y = y || 0;
  const ref = useRef(null);
  const [intersecting, setIntersecting] = useState(false);

  useEffect(() => {
    let observerRefValue: Element | null = null;

    if (ref.current) {
      const intersectionObserver = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setIntersecting(true);
          } else {
            setIntersecting(false);
          }
        },
        {
          threshold,
        }
      );

      intersectionObserver.observe(ref.current);
      observerRefValue = ref.current;

      return () => {
        if (observerRefValue) {
          intersectionObserver.unobserve(observerRefValue);
        }
      };
    }
  });

  return (
    <div
      style={{
        transitionDuration: duration,
        transform: !intersecting
          ? `translate(${x}px, ${y}px)`
          : "translate(0px, 0px)",
      }}
      className={`transition ${intersecting ? "opacity-100" : "opacity-0"}`}
      ref={ref}
    >
      {children}
    </div>
  );
}
