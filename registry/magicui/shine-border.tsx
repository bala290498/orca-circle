"use client";

import { cn } from "@/lib/utils";

type TColorProp = string | string[];

interface ShineBorderProps {
  borderRadius?: number;
  borderWidth?: number;
  duration?: number;
  color?: TColorProp;
  className?: string;
  children: React.ReactNode;
}

/**
 * @name Shine Border
 * @description It is an animated background border effect component with easy to use and configurable props.
 */
export function ShineBorder({
  borderRadius = 12,
  borderWidth = 2,
  duration = 14,
  color = "#000000",
  className,
  children,
}: ShineBorderProps) {
  const colorStr = color instanceof Array 
    ? color.map((c, i) => `${c} ${i * (100 / color.length)}%`).join(", ")
    : color;
  const borderGradient = color instanceof Array
    ? `radial-gradient(circle, ${color.join(", ")}, transparent 80%)`
    : `radial-gradient(circle, ${color}, transparent 80%)`;

  return (
    <div
      className={cn(
        "relative h-full w-full rounded-3xl overflow-hidden",
        className,
      )}
      style={
        {
          borderRadius: `${borderRadius}px`,
          background: borderGradient,
          backgroundSize: '300% 300%',
          animation: `shine-pulse ${duration}s infinite linear`,
          padding: `${borderWidth}px`,
        } as React.CSSProperties
      }
    >
      <div
        className="h-full w-full rounded-3xl bg-white relative z-10"
        style={{
          borderRadius: `calc(${borderRadius}px - ${borderWidth}px)`,
        } as React.CSSProperties}
      >
        {children}
      </div>
    </div>
  );
}
