import { Menu } from 'lucide-react';
import { Github, Linkedin, Moon, Sun } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

export function Header({ isDark, setIsDark }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-yellow-500/10 shadow-lg shadow-yellow-500/5">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <button 
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity group"
        >
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded flex items-center justify-center text-white relative">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded blur-md opacity-0 group-hover:opacity-50 transition-opacity"></div>
            <span className="text-base font-medium relative z-10">Au</span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            <li>
              <button 
                onClick={() => scrollToSection('education')}
                className="text-foreground/80 hover:text-yellow-500 transition-colors relative group"
              >
                <span>Education</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('experience')}
                className="text-foreground/80 hover:text-yellow-500 transition-colors relative group"
              >
                <span>Experience</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-foreground/80 hover:text-yellow-500 transition-colors relative group"
              >
                <span>Projects</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('involvement')}
                className="text-foreground/80 hover:text-yellow-500 transition-colors relative group"
              >
                <span>Involvement</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-foreground/80 hover:text-yellow-500 transition-colors relative group"
              >
                <span>Contact</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            </li>
          </ul>

          {/* Social Links */}
          <div className="flex gap-3 ml-4 pl-4 border-l border-yellow-500/20">
            <a 
              href="https://github.com/Andrew-Underwood13" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 hover:bg-yellow-500/10 rounded transition-colors group"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4 text-foreground/60 group-hover:text-yellow-500 transition-colors" />
            </a>
            <a 
              href="https://www.linkedin.com/in/andrew-underwood-bb8a353b2/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 hover:bg-yellow-500/10 rounded transition-colors group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-foreground/60 group-hover:text-yellow-500 transition-colors" />
            </a>
            
            {/* Dark mode toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 hover:bg-yellow-500/10 rounded transition-colors group"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-foreground/60 group-hover:text-yellow-500 transition-colors" />
              ) : (
                <Moon className="w-4 h-4 text-foreground/60 group-hover:text-yellow-500 transition-colors" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 hover:bg-yellow-500/10 rounded transition-colors"
          aria-label="Toggle menu"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-yellow-500/10 md:hidden shadow-lg">
            <ul className="flex flex-col p-6 gap-4">
              <li>
                <button 
                  onClick={() => scrollToSection('education')}
                  className="text-foreground/80 hover:text-yellow-500 transition-colors w-full text-left"
                >
                  Education
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('experience')}
                  className="text-foreground/80 hover:text-yellow-500 transition-colors w-full text-left"
                >
                  Experience
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="text-foreground/80 hover:text-yellow-500 transition-colors w-full text-left"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('involvement')}
                  className="text-foreground/80 hover:text-yellow-500 transition-colors w-full text-left"
                >
                  Involvement
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-foreground/80 hover:text-yellow-500 transition-colors w-full text-left"
                >
                  Contact
                </button>
              </li>
              
              {/* Mobile Social Links */}
              <li className="pt-4 border-t border-yellow-500/20">
                <div className="flex gap-3">
                  <a 
                    href="https://github.com/Andrew-Underwood13" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-yellow-500/10 rounded transition-colors group flex-1 flex justify-center"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5 text-foreground/60 group-hover:text-yellow-500 transition-colors" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/andrew-underwood-bb8a353b2/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-yellow-500/10 rounded transition-colors group flex-1 flex justify-center"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-foreground/60 group-hover:text-yellow-500 transition-colors" />
                  </a>
                  
                  {/* Dark mode toggle for mobile */}
                  <button
                    onClick={() => setIsDark(!isDark)}
                    className="p-2 hover:bg-yellow-500/10 rounded transition-colors group flex-1 flex justify-center"
                    aria-label="Toggle dark mode"
                  >
                    {isDark ? (
                      <Sun className="w-5 h-5 text-foreground/60 group-hover:text-yellow-500 transition-colors" />
                    ) : (
                      <Moon className="w-5 h-5 text-foreground/60 group-hover:text-yellow-500 transition-colors" />
                    )}
                  </button>
                </div>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}