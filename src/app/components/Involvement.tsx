import { Users, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { CircuitPattern } from './CircuitPattern';

export function Involvement() {
  const activities = [
    {
      icon: Users,
      title: 'SSL (LSU Cybersecurity Club)',
      role: 'Active Member',
      description: 'Participate in weekly meetings, security workshops, and collaborative projects with fellow cybersecurity students at LSU.'
    },
    {
      icon: AlertCircle,
      title: 'Hack The Box',
      role: 'Penetration Testing Practice',
      description: 'Sharpen offensive security skills by solving capture-the-flag challenges and practicing ethical hacking techniques on vulnerable machines.'
    },
    {
      icon: AlertCircle,
      title: 'Certification Progress',
      role: 'Continuous Learning',
      description: 'Actively working towards industry-recognized cybersecurity certifications to validate and expand my security expertise.'
    },
    {
      icon: AlertCircle,
      title: 'Threat Intelligence & Research',
      role: 'Continuous Monitoring',
      description: 'Stay current with the latest exploits, vulnerabilities, and data breaches through security feeds, research papers, and professional communities. Monitor CVE databases, security bulletins, and threat actor activities.'
    }
  ];

  return (
    <section id="involvement" className="py-24 px-6 bg-accent/30 relative">
      {/* Circuit patterns on edges */}
      <CircuitPattern position="left" />
      <CircuitPattern position="right" />
      
      {/* Terminal-style line decoration */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent"></div>

      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-3xl md:text-4xl">Involvement</h2>
        <p className="mb-16 text-center text-muted-foreground max-w-2xl mx-auto">
          Extracurricular activities and continuous learning in cybersecurity.
        </p>

        <div className="grid md:grid-cols-2 gap-8 md:[&>*:nth-last-child(1):nth-child(odd)]:col-start-1 md:[&>*:nth-last-child(1):nth-child(odd)]:col-end-3 md:[&>*:nth-last-child(1):nth-child(odd)]:max-w-[calc(50%-1rem)] md:[&>*:nth-last-child(1):nth-child(odd)]:mx-auto">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-background rounded-lg border border-border hover:shadow-lg hover:border-yellow-500/30 transition-all relative group"
              >
                {/* Cybersecurity corner accents */}
                <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-yellow-500/20 group-hover:border-yellow-500/50 transition-colors"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-yellow-500/20 group-hover:border-yellow-500/50 transition-colors"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-yellow-500/20 group-hover:border-yellow-500/50 transition-colors"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-yellow-500/20 group-hover:border-yellow-500/50 transition-colors"></div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex-shrink-0 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg blur-md opacity-50"></div>
                    <Icon className="w-6 h-6 text-white relative z-10" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-1">{activity.title}</h3>
                    <p className="text-sm text-yellow-600 mb-3 font-mono">{activity.role}</p>
                    <p className="text-sm text-muted-foreground">{activity.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom line decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent"></div>
    </section>
  );
}