import { Mail, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { CircuitPattern } from './CircuitPattern';

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative">
      {/* Circuit patterns on edges */}
      <CircuitPattern position="left" />
      <CircuitPattern position="right" />
      
      <div className="container mx-auto max-w-4xl relative">
        <h2 className="mb-4 text-center text-3xl md:text-4xl">Get In Touch</h2>
        <p className="mb-16 text-center text-muted-foreground max-w-2xl mx-auto">
          I'm always open to new opportunities and interesting projects. 
          Feel free to reach out if you'd like to work together!
        </p>

        {/* Contact Information - Centered */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto space-y-6"
        >
          <div className="flex items-start gap-4 p-6 rounded-lg border border-border bg-background hover:border-yellow-500/30 transition-colors group">
            <div className="p-3 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg blur-md opacity-50"></div>
              <Mail className="w-6 h-6 text-white relative z-10" />
            </div>
            <div className="flex-1">
              <h3 className="mb-2">Email</h3>
              <a 
                href="mailto:aunde17@lsu.edu"
                className="text-muted-foreground hover:text-yellow-500 transition-colors font-mono text-sm"
              >
                aunde17@lsu.edu
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 rounded-lg border border-border bg-background hover:border-yellow-500/30 transition-colors group">
            <div className="p-3 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg blur-md opacity-50"></div>
              <MapPin className="w-5 h-5 text-white relative z-10" />
            </div>
            <div className="flex-1">
              <h3 className="mb-2">Location</h3>
              <p className="text-muted-foreground">
                Baton Rouge, LA
              </p>
            </div>
          </div>

          {/* Additional visual element for balance */}
          <div className="p-6 rounded-lg border border-yellow-500/20 bg-accent/30">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Currently pursuing a Bachelor of Science in Computer Science with a specialization in Cybersecurity at LSU. Open to internships, research opportunities, and collaborative projects.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom line decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent"></div>
    </section>
  );
}