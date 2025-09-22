import * as React from "react";
import { cn } from "./utils";

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export function Tag({ className, children, ...props }: TagProps) {
  return (
    <span
      className={cn(
        "text-xs px-2 py-1 rounded border border-black/10 dark:border-white/10 text-foreground/80 bg-black/5 dark:bg-white/5",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export default Tag;
