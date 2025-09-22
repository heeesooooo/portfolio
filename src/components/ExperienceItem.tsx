import * as React from "react";
import { Dot } from "lucide-react@0.487.0";

export interface ExperienceItemProps {
  company: string;
  role: string;
  period: string;
  achievements: string[];
  // Optional style tuning (with sensible defaults)
  containerClassName?: string; // e.g. "mt-20"
  borderClassName?: string; // e.g. "border-l-4 border-muted"
  paddingLeftClassName?: string; // e.g. "pl-8"
  dotColorClassName?: string; // e.g. "bg-primary"
  dotSizeClassName?: string; // e.g. "w-3 h-3"
  headerSpacingClassName?: string; // e.g. "space-y-3"
  listSpacingClassName?: string; // e.g. "space-y-2"
  bulletIconClassName?: string; // e.g. "w-4 h-4 mt-0.5 text-muted-foreground"
}

export function ExperienceItem({
  company,
  role,
  period,
  achievements,
  containerClassName,
  borderClassName = "border-l-4 border-muted",
  paddingLeftClassName = "pl-8",
  dotColorClassName = "bg-primary",
  dotSizeClassName = "w-3 h-3",
  headerSpacingClassName = "space-y-3",
  listSpacingClassName = "space-y-2",
  bulletIconClassName = "w-4 h-4 mt-0.5 text-muted-foreground",
}: ExperienceItemProps) {
  return (
    <div className={`${borderClassName} ${paddingLeftClassName} relative ${containerClassName ?? ""}`}>
      <div className={`absolute -left-2 top-0 ${dotSizeClassName} ${dotColorClassName} rounded-full`}></div>

      <div className={headerSpacingClassName}>
        <div>
          <h3 className="font-medium">{company}</h3>
          <p className="text-sm text-muted-foreground">
            {role} • {period}
          </p>
        </div>

        {achievements?.length ? (
          <ul className={listSpacingClassName}>
            {achievements.map((achievement, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                <Dot className={bulletIconClassName} />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}