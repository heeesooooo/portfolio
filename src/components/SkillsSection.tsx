import * as React from "react";
import Tag from "./ui/tag";

export interface SkillCategory {
  title: string;
  items: ReadonlyArray<string>;
}

export interface SkillsSectionProps {
  categories: ReadonlyArray<SkillCategory>;
}

export function SkillsSection({ categories }: SkillsSectionProps) {
  return (
    <section id="skills" className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div>
          <p className="text-muted-foreground uppercase tracking-wider text-sm mb-4">Skills</p>
          <h2 className="mb-8">Skills</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {categories.map((cat) => (
            <div key={cat.title} className="dark-card p-6">
              <h4 className="font-medium mb-4">{cat.title}</h4>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
