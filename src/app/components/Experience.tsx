import { Briefcase, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { CircuitPattern } from './CircuitPattern';

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative">
      {/* Circuit patterns on edges */}
      <CircuitPattern position="left" />
      <CircuitPattern position="right" />
      
      <div className="container mx-auto max-w-4xl relative">
        <h2 className="mb-4 text-center text-3xl md:text-4xl">Work Experience</h2>
        <p className="mb-16 text-center text-muted-foreground max-w-2xl mx-auto">
          Professional experience in cybersecurity and software development.
        </p>

        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-background rounded-lg border border-border hover:shadow-lg hover:border-yellow-500/30 transition-all relative group"
          >
            {/* Cybersecurity corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-yellow-500/20 group-hover:border-yellow-500/50 transition-colors"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-yellow-500/20 group-hover:border-yellow-500/50 transition-colors"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-yellow-500/20 group-hover:border-yellow-500/50 transition-colors"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-yellow-500/20 group-hover:border-yellow-500/50 transition-colors"></div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex-shrink-0 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg blur-md opacity-50"></div>
                <Briefcase className="w-6 h-6 text-white relative z-10" />
              </div>
              <div className="flex-1">
                <h3 className="mb-1">Software Development & Testing</h3>
                <p className="text-muted-foreground mb-1">Stephenson Disaster Management Institute (SDMI) • Baton Rouge, LA</p>
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground font-mono">2023 - Present</p>
                </div>
                <ul className="space-y-2">
                  <li className="text-sm text-foreground/80 flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">▸</span>
                    <span>Write and maintain comprehensive unit tests for the Louisiana National Guard Youth Challenge Program website (<a href="https://www.langycp.com/" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:text-yellow-500 transition-colors underline decoration-yellow-500/30">langycp.com</a>)</span>
                  </li>
                  <li className="text-sm text-foreground/80 flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">▸</span>
                    <span>Ensure code quality and reliability through automated testing frameworks</span>
                  </li>
                  <li className="text-sm text-foreground/80 flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">▸</span>
                    <span>Collaborate with development team to identify and resolve software defects</span>
                  </li>
                  <li className="text-sm text-foreground/80 flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">▸</span>
                    <span>Support disaster management technology initiatives for emergency response operations</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}