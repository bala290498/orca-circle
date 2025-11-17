"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { useId } from "react";

type TColorProp = string | string[];

interface ShineBorderProps {
  borderRadius?: number;
  borderWidth?: number;
  duration?: number;
  color?: TColorProp;
  className?: string;
  children: ReactNode;
}

/**
 * @name Shine Border
 * @description It is an animated background border effect component with easy to use and configurable props.
 * @param borderRadius defines the radius of the border.
 * @param borderWidth defines the width of the border.
 * @param duration defines the animation duration to be applied on the shining border
 * @param color a string or string array to define border color.
 * @param className defines the class name to be applied to the component
 * @param children contains react node elements.
 */
export function ShineBorder({
  borderRadius = 8,
  borderWidth = 1,
  duration = 14,
  color = "#000000",
  className,
  children,
}: ShineBorderProps) {
  // Generate unique ID for this instance
  const uniqueId = useId().replace(/:/g, '-');
  
  // Handle multi-color gradient - join colors for radial gradient
  const colorValue = color instanceof Array ? color.join(",") : color;
  
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes shine-pulse-${uniqueId} {
            0% {
              background-position: 0% 0%;
            }
            50% {
              background-position: 100% 100%;
            }
            100% {
              background-position: 0% 0%;
            }
          }
          .shine-border-${uniqueId}::before {
            animation: shine-pulse-${uniqueId} ${duration}s infinite linear;
            border-radius: ${borderRadius}px;
            background-image: radial-gradient(transparent, transparent, ${colorValue}, transparent, transparent);
            background-size: 300% 300%;
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask-composite: exclude;
            padding: ${borderWidth}px;
          }
        `
      }} />
      <div
        style={
          {
            "--border-radius": `${borderRadius}px`,
            borderRadius: `${borderRadius}px`,
          } as React.CSSProperties
        }
        className={cn(
          "relative grid h-full w-full place-items-center bg-white text-black dark:bg-black dark:text-white overflow-hidden",
          className,
        )}
      >
        <div
          className={`shine-border-${uniqueId} before:absolute before:inset-0 before:size-full before:will-change-[background-position] before:content-[''] before:z-0`}
        ></div>
        <div className="relative z-10 w-full h-full" style={{ borderRadius: `${borderRadius}px` }}>
          {children}
        </div>
      </div>
    </>
  );
}


