"use client";

import React from "react";

import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";

import { cn } from "@/lib/utils";

export function AnimatedButton({
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration = 15000,
  className,
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  as?: any;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  [key: string]: any;
}) {
  const rotation = useMotionValue(0);

  useAnimationFrame((time) => {
    rotation.set((time / duration) * 360);
  });

  const background = useMotionTemplate`conic-gradient(from ${rotation}deg, transparent 0deg, transparent 200deg, #ff0080 220deg, #ff8000 230deg, #ffff00 240deg, #80ff00 250deg, #00ff80 260deg, #00ffff 270deg, #0080ff 280deg, #8000ff 290deg, transparent 300deg, transparent 360deg)`;

  return (
    <Component
      className={cn(
        "bg-transparent relative text-xl p-[2px] overflow-hidden",
        containerClassName
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      {/* Static border line - always visible */}
      <div
        className="absolute inset-0 border-2 border-primary-500/30"
        style={{
          borderRadius: borderRadius,
        }}
      />

      {/* Animated shining border - revolving around the static border */}
      <motion.div
        className="absolute inset-0"
        style={{
          borderRadius: borderRadius,
          background,
          mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          maskComposite: "exclude",
          WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          WebkitMaskComposite: "xor",
          padding: "2px",
        } as React.CSSProperties}
      />

      <div
        className={cn(
          "relative bg-transparent flex items-center justify-center w-full h-full text-sm antialiased",
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
}


