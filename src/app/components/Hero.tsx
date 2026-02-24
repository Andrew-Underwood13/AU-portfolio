import { Github, Linkedin, Mail, Shield } from 'lucide-react';
import { motion } from 'motion/react';
import { CircuitPattern } from './CircuitPattern';

export function Hero() {
  return (
    <section id="hero" className="py-32 px-6 pt-28 relative overflow-hidden">
      {/* Terminal command snippets on edges - hidden on mobile */}
      <div className="hidden lg:block absolute left-4 top-32 opacity-[0.18] font-mono text-xs text-yellow-500 space-y-3">
        <div>$ whoami</div>
        <div className="text-foreground/50">andrew_underwood</div>
        <div className="mt-4">$ nmap -sV target</div>
        <div className="text-foreground/50">Starting Nmap scan...</div>
        <div className="mt-4">$ netstat -an</div>
        <div className="mt-4">$ sudo -l</div>
        <div className="mt-4">$ cat /etc/passwd</div>
        <div className="mt-4">$ ls -la ~/.ssh</div>
      </div>
      
      <div className="hidden lg:block absolute right-4 top-32 opacity-[0.18] font-mono text-xs text-yellow-500 space-y-3 text-right">
        <div>$ hashcat -m 1000</div>
        <div className="text-foreground/50">Initializing...</div>
        <div className="mt-4">$ gobuster dir -u</div>
        <div className="mt-4">$ hydra -L users.txt</div>
        <div className="mt-4">$ john --wordlist</div>
        <div className="mt-4">$ grep -r "password"</div>
        <div className="mt-4">$ tcpdump -i eth0</div>
      </div>
      
      {/* Hex code background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none overflow-hidden">
        <div className="text-xs font-mono text-yellow-500 leading-relaxed whitespace-pre">
          {Array.from({ length: 50 }).map((_, i) => {
            const hexString = Array.from({ length: 20 })
              .map(() => Math.random().toString(16).substring(2, 10))
              .join(' ');
            return <div key={i}>{hexString}</div>;
          })}
        </div>
      </div>

      <div className="container mx-auto max-w-4xl text-center relative">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
          {/* Headshot */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative group"
          >
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-yellow-500/30 relative bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 flex items-center justify-center">
              {/* Placeholder with initials - replace with your photo by adding /public/profile-photo.jpg */}
              <img
                src="/profile-photo-v2.jpg"
                alt="Andrew Underwood"
                className="w-full h-full object-cover scale-[1.4]"
                style={{ objectPosition: '50% 25%' }}
              />
              
              {/* Glowing effect on hover */}
              <div className="absolute inset-0 border-4 border-yellow-500/0 group-hover:border-yellow-500/50 rounded-full transition-all duration-300"></div>
            </div>
            
            {/* Corner accents */}
            <div className="absolute -top-2 -left-2 w-6 h-6 sm:w-8 sm:h-8 border-l-2 border-t-2 border-yellow-500/50"></div>
            <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 border-r-2 border-t-2 border-yellow-500/50"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 sm:w-8 sm:h-8 border-l-2 border-b-2 border-yellow-500/50"></div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 border-r-2 border-b-2 border-yellow-500/50"></div>
          </motion.div>

          {/* Periodic table element */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl shadow-lg relative group"
          >
            {/* Glowing effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            
            {/* Static border highlight */}
            <div className="absolute inset-0 rounded-2xl border-2 border-yellow-400/30"></div>

            <div className="text-center text-white relative z-10">
              <div className="text-2xl font-bold">Au</div>
              <div className="text-xs opacity-90">79</div>
            </div>
          </motion.div>
        </div>
        
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-4 text-4xl md:text-6xl relative"
        >
          Andrew Underwood
        </motion.h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-8 text-xl md:text-2xl text-muted-foreground flex items-center justify-center gap-2 flex-wrap"
        >
          <Shield className="w-5 h-5 text-yellow-500 flex-shrink-0" />
          <span>Cybersecurity Student | LSU</span>
        </motion.div>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-12 max-w-2xl mx-auto text-foreground/70"
        >
          Cybersecurity student at Louisiana State University, passionate about ethical hacking, 
          security research, and protecting digital infrastructure. Actively developing skills through 
          hands-on labs and real-world challenges.
        </motion.p>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex gap-3 sm:gap-4 justify-center flex-wrap"
        >
          <a 
            href="https://github.com/Andrew-Underwood13" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-accent hover:bg-yellow-500/10 border border-transparent hover:border-yellow-500/30 transition-all relative group"
            aria-label="GitHub"
          >
            <div className="absolute inset-0 rounded-full bg-yellow-500/0 group-hover:bg-yellow-500/5 blur-md transition-all"></div>
            <Github className="w-5 h-5 relative z-10" />
          </a>
          <a 
            href="https://www.linkedin.com/in/andrew-underwood-bb8a353b2/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-accent hover:bg-yellow-500/10 border border-transparent hover:border-yellow-500/30 transition-all relative group"
            aria-label="LinkedIn"
          >
            <div className="absolute inset-0 rounded-full bg-yellow-500/0 group-hover:bg-yellow-500/5 blur-md transition-all"></div>
            <Linkedin className="w-5 h-5 relative z-10" />
          </a>
          <a 
            href="mailto:aunde17@lsu.edu"
            className="p-3 rounded-full bg-accent hover:bg-yellow-500/10 border border-transparent hover:border-yellow-500/30 transition-all relative group"
            aria-label="Email"
          >
            <div className="absolute inset-0 rounded-full bg-yellow-500/0 group-hover:bg-yellow-500/5 blur-md transition-all"></div>
            <Mail className="w-5 h-5 relative z-10" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}