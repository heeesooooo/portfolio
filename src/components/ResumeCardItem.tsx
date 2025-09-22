import * as React from "react";
import { Dot } from "lucide-react";
import { Badge } from "./ui/badge";

export interface ResumeCardItemProps {
  icon?: React.ReactNode;
  company: string;
  role: string;
  period: string;
  achievements?: string[];
  className?: string;
}

export function ResumeCardItem({
  icon,
  company,
  role,
  period,
  achievements = [],
  className,
}: ResumeCardItemProps) {
  return (
    <div className={`dark-card p-6 transition-colors hover:bg-accent/50 ${className ?? ""}`}>
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          {icon ? (
            <span className="inline-flex items-center justify-center size-9 rounded-md border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-foreground/70">
              {icon}
            </span>
          ) : null}
          <div>
            <h4 className="font-semibold leading-none mb-1">{company}</h4>
            <p className="text-sm text-foreground/70 dark:text-muted-foreground">{role}</p>
          </div>
        </div>
        <Badge variant="secondary" className="shrink-0 whitespace-nowrap">{period}</Badge>
      </div>

      {achievements.length > 0 ? (
        <ul className="space-y-2">
          {achievements.map((achievement, i) => (
            <li key={i} className="text-sm text-foreground/70 dark:text-muted-foreground flex items-start gap-2">
              <Dot className="w-4 h-4 mt-0.5 text-foreground/60 dark:text-muted-foreground" />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
