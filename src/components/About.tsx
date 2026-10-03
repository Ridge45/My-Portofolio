import { motion } from 'framer-motion'

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex items-center gap-4 mb-12">
          <div className="h-[1px] w-12 bg-emerald-400"></div>
          <span className="text-emerald-400 font-mono text-sm tracking-widest uppercase">About Me</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-8 leading-tight">
              Turning ideas into <br />
              <span className="text-gradient">real-world solutions.</span>
            </h2>
            
            <div className="space-y-6 text-gray-400 text-lg">
              <p>
                I'm a software engineer based in Alexandria, Egypt, who likes projects where the hardware and the software have to agree with each other — <strong className="text-gray-200">where a sensor reading has to survive the trip to a screen and still mean something.</strong>
              </p>
              <p>
                Across three internships and my graduation project, I've worked the stack end to end: backend systems in Django and Flask, cross-platform apps in Flutter, cloud infrastructure on Huawei Cloud, and machine learning pipelines that actually run in real time.
              </p>
              <p>
                My philosophy is simple: <span className="text-emerald-400 font-mono">Sense → Stream → Decide</span>. I care about shipping things that work under real conditions, not just in a demo.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-gray-800 group">
              <div className="absolute inset-0 bg-emerald-500/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
              <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" alt="Coding Setup" className="w-full h-full object-cover" />
            </div>

            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 glass-card p-6 rounded-2xl max-w-[240px]"
            >
              <div className="text-emerald-400 text-4xl font-serif leading-none mb-2">"</div>
              <p className="text-gray-200 font-display font-medium text-lg leading-snug">Good Ideas Build Better Futures.</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
