import { GraduationCap, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { CircuitPattern } from './CircuitPattern';

export function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-accent/30 relative">
      {/* Circuit patterns on edges */}
      <CircuitPattern position="left" />
      <CircuitPattern position="right" />
      
      {/* Terminal-style line decoration */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent"></div>
      
      <div className="container mx-auto max-w-4xl">
        <h2 className="mb-4 text-center text-3xl md:text-4xl">Education</h2>
        <p className="mb-16 text-center text-muted-foreground max-w-2xl mx-auto">
          Academic background and ongoing studies in cybersecurity.
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
                <GraduationCap className="w-6 h-6 text-white relative z-10" />
              </div>
              <div className="flex-1">
                <h3 className="mb-2">Bachelor of Science in Computer Science</h3>
                <p className="text-muted-foreground mb-2">Specialization in Cybersecurity</p>
                <p className="text-muted-foreground mb-2">Louisiana State University (LSU) • Baton Rouge, LA</p>
                <p className="text-sm text-muted-foreground mb-4 font-mono">Expected Graduation: Spring 2027</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Award className="w-4 h-4 text-yellow-600 mt-1 flex-shrink-0" />
                    <p className="text-sm text-foreground/80">
                      Enrolled in LSU's nationally recognized cybersecurity program
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Award className="w-4 h-4 text-yellow-600 mt-1 flex-shrink-0" />
                    <p className="text-sm text-foreground/80">
                      Relevant Coursework: Network Security, Cryptography, Penetration Testing, Digital Forensics, Secure Software Development
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Award className="w-4 h-4 text-yellow-600 mt-1 flex-shrink-0" />
                    <p className="text-sm text-foreground/80">
                      Hands-on experience with industry-standard security tools and frameworks
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom line decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent"></div>
    </section>
  );
}