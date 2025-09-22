import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import Tag from "./ui/tag";

interface ProjectCardProps {
  title: string;
  description: string;
  role: string;
  achievements: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
}

export function ProjectCard({ 
  title, 
  description, 
  role, 
  achievements, 
  technologies, 
  image, 
  demoUrl, 
  githubUrl 
}: ProjectCardProps) {
  return (
    <div className="dark-card group h-full flex flex-col overflow-hidden hover:border-white/20 transition-colors">
      <div className="aspect-video relative">
        <ImageWithFallback 
          src={image} 
          alt={title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-semibold mb-2 line-clamp-2">{title}</h3>
        <p className="text-sm text-foreground/80 dark:text-muted-foreground mb-4 line-clamp-2 leading-relaxed">{description}</p>
              
        <div className="space-y-3 mb-4">
          <div className="text-xs">
            <span className="text-foreground/70 dark:text-muted-foreground">Role: </span>
            <span className="text-foreground/70 dark:text-muted-foreground">{role}</span>
          </div>
          <div className="text-xs">
            <span className="text-foreground/70 dark:text-muted-foreground">Impact: </span>
            <span className="text-foreground/70 dark:text-muted-foreground">{achievements}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1.5 mb-6">
          {technologies.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>
        
        <div className="flex gap-3 mt-auto">
          {demoUrl && (
            <Button 
              size="sm" 
              className="flex-1 bg-white text-black hover:bg-white/90 text-xs uppercase tracking-wider" 
              asChild
            >
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-3 h-3 mr-1.5" />
                Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button 
              size="sm" 
              variant="outline" 
              className="flex-1 border-white/20 hover:bg-white/10 text-xs uppercase tracking-wider" 
              asChild
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-3 h-3 mr-1.5" />
                GitHub
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}