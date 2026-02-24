import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-yellow-500/10 relative">
      {/* Top line decoration */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent"></div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded flex items-center justify-center text-white text-xs font-medium relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded blur-md opacity-30"></div>
              <span className="relative z-10">Au</span>
            </div>
            <span className="text-sm text-muted-foreground font-mono">
              © {currentYear} Andrew Underwood. All rights reserved.
            </span>
          </div>

          <div className="flex gap-4">
            <a 
              href="https://github.com/Andrew-Underwood13" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-yellow-500 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/andrew-underwood-bb8a353b2/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-yellow-500 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:aunde17@lsu.edu"
              className="text-muted-foreground hover:text-yellow-500 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}