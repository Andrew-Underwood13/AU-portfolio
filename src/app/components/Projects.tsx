import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'motion/react';
import { CircuitPattern } from './CircuitPattern';

export function Projects() {
  const projects = [
    {
      title: 'SUNI Travel Companion',
      description: 'AI-powered travel planner that generates comprehensive itineraries and contingency plans for unexpected situations, helping travelers adapt when trips go sideways.',
      tags: ['Python', 'Django', 'AI', 'Travel Planning'],
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80',
      github: 'https://github.com/Haze-7/Suni',
      demo: ''
    },
    {
      title: 'Network Intrusion Detection System',
      description: 'Built a Python-based IDS using Scapy to monitor network traffic and detect suspicious patterns in real-time.',
      tags: ['Python', 'Scapy', 'Machine Learning', 'Wireshark'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
      github: 'https://github.com/Andrew-Underwood13/ScapyIDS',
      demo: ''
    },
    {
      title: 'Password Security Analyzer',
      description: 'Developed a tool to analyze password strength and detect common vulnerabilities using pattern recognition and entropy calculations.',
      tags: ['Python', 'Security', 'Cryptography'],
      image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80',
      github: 'https://github.com/Andrew-Underwood13/Password-Security-Analyzer',
      demo: ''
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 relative">
      {/* Binary background pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.015] pointer-events-none overflow-hidden">
        <div className="text-xs font-mono text-yellow-500">
          {Array.from({ length: 100 }).map((_, i) => (
            <span key={i}>
              {Math.random() > 0.5 ? '1' : '0'}
            </span>
          ))}
        </div>
      </div>

      <div className="container mx-auto max-w-6xl relative">
        <h2 className="mb-4 text-center text-3xl md:text-4xl">Projects</h2>
        <p className="mb-16 text-center text-muted-foreground max-w-2xl mx-auto">
          Academic and personal cybersecurity projects demonstrating practical security skills.
        </p>

        <div className="grid md:grid-cols-2 gap-8 md:[&>*:nth-last-child(1):nth-child(odd)]:col-start-1 md:[&>*:nth-last-child(1):nth-child(odd)]:col-end-3 md:[&>*:nth-last-child(1):nth-child(odd)]:max-w-[calc(50%-1rem)] md:[&>*:nth-last-child(1):nth-child(odd)]:mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-background rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow relative group"
            >
              {/* Glowing border effect on hover */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="absolute inset-0 rounded-lg border-2 border-yellow-500/50 blur-sm"></div>
                <div className="absolute inset-0 rounded-lg border border-yellow-500/30"></div>
              </div>

              <div className="aspect-video overflow-hidden bg-accent relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                {/* Corner brackets */}
                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-yellow-500/50"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-yellow-500/50"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-yellow-500/50"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-yellow-500/50"></div>
              </div>
              
              <div className="p-6 relative">
                <h3 className="mb-2">{project.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 text-xs bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border border-yellow-500/20 rounded font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-yellow-500 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-yellow-500 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}