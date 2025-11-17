"use client";

import { cn } from "@/lib/utils";

interface ShineBorderProps {
  borderRadius?: number;
  borderWidth?: number;
  duration?: number;
  color?: string | string[];
  className?: string;
  children: React.ReactNode;
}

export function ShineBorder({
  borderRadius = 8,
  borderWidth = 2,
  duration = 14,
  color = "#ffffff",
  className,
  children,
}: ShineBorderProps) {
  const borderSize = borderWidth;
  const innerRadius = Math.max(0, borderRadius - borderSize);

  return (
    <div
      style={
        {
          "--border-radius": `${borderRadius}px`,
          "--inner-radius": `${innerRadius}px`,
          "--border-width": `${borderSize}px`,
          "--shimmer-duration": `${duration}s`,
        } as React.CSSProperties
      }
      className={cn(
        "relative w-full",
        className
      )}
    >
      {/* Gradient border - uniform on all four sides using box-shadow technique */}
      <div
        className="absolute inset-0 rounded-[var(--border-radius)]"
        style={{
          background: Array.isArray(color)
            ? `linear-gradient(135deg, ${color.join(", ")})`
            : color,
          padding: `${borderSize}px`,
          boxSizing: "border-box",
          zIndex: 0,
        }}
      >
        {/* Inner white background - masks center, reveals uniform border on all sides */}
        <div 
          className="h-full w-full rounded-[var(--inner-radius)]"
          style={{
            backgroundColor: "white",
            boxSizing: "border-box",
          }}
        />
      </div>

      {/* Shimmer animation - uniform across all borders including top and bottom */}
      <div 
        className="absolute inset-0 rounded-[var(--border-radius)] overflow-hidden pointer-events-none"
        style={{
          zIndex: 1,
        }}
      >
        {/* Shimmer visible across entire border area - no padding to ensure full visibility */}
        <div
          className="absolute animate-shimmer"
          style={{
            width: "300%",
            height: "300%",
            top: "50%",
            left: "50%",
            marginTop: "-150%",
            marginLeft: "-150%",
            background: `linear-gradient(45deg, transparent 35%, rgba(255,255,255,0.95) 50%, transparent 65%)`,
            willChange: "transform",
          }}
        />
      </div>

      {/* Content wrapper - positioned inside with uniform spacing on all sides */}
      <div
        className="relative z-10 w-full h-full rounded-[var(--inner-radius)] overflow-hidden"
        style={{
          margin: `${borderSize}px`,
          boxSizing: "border-box",
        }}
      >
        {children}
      </div>
    </div>
  );
}