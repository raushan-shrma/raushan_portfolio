import { cn } from "../../lib/utils";
import type { HTMLAttributes } from "react";

export function Card({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/[0.08] bg-[#0d1018]/80 shadow-[0_16px_50px_rgba(0,0,0,0.12)]",
        className,
      )}
      {...props}
    />
  );
}
