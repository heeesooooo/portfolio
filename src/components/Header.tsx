import { DarkModeToggle } from "./DarkModeToggle";

export function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button
            onClick={() => scrollToSection('main')}
            className="text-xl font-bold tracking-wide hover:opacity-80 transition-opacity"
          >
            K I M J I Y O O N
          </button>
          
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('projects')}
              className="text-sm uppercase tracking-wider hover:opacity-60 transition-opacity"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-sm uppercase tracking-wider hover:opacity-60 transition-opacity"
            >
              Resume
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-sm uppercase tracking-wider hover:opacity-60 transition-opacity"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm uppercase tracking-wider hover:opacity-60 transition-opacity"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <DarkModeToggle />
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </header>
  );
}