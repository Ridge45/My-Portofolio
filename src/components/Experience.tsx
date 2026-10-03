import { motion } from 'framer-motion'

const timeline = [
  {
    year: '2026',
    role: 'B.Sc. in Computer Science',
    org: 'King Salman International University (KSIU)',
    type: 'Education',
    desc: 'Software Engineering specialization.'
  },
  {
    year: '2025',
    role: 'Full-Stack Development Intern',
    org: 'Information Technology Institute (ITI)',
    type: 'Experience',
    desc: 'Built REST APIs and full-stack web applications using Django, Flask, and PostgreSQL, reducing API response time by 30%.'
  },
  {
    year: '2025',
    role: 'AI / Machine Learning Intern',
    org: 'Huawei ICT Academy',
    type: 'Experience',
    desc: 'Developed and evaluated supervised ML models (Random Forest, SVM, K-Means), improving accuracy by up to 15% through feature engineering.'
  },
  {
    year: '2024',
    role: 'Cloud Computing Intern',
    org: 'Huawei ICT Academy',
    type: 'Experience',
    desc: 'Provisioned and managed cloud infrastructure using IaaS and PaaS; led an architecture proposal ranked 1st among cohort peers.'
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-[#121820]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex items-center gap-4 mb-4">
          <div className="h-[1px] w-12 bg-emerald-400"></div>
          <span className="text-emerald-400 font-mono text-sm tracking-widest uppercase">Experience & Education</span>
        </div>
        
        <h2 className="text-4xl lg:text-5xl font-display font-bold mb-16 text-white">My Journey.</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Timeline */}
          <div className="space-y-12 relative">
            <div className="absolute left-4 top-2 bottom-2 w-px bg-gray-800 -z-10"></div>
            
            {timeline.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-12"
              >
                <div className="absolute left-[-2px] top-1 w-8 h-8 rounded-full bg-[#121820] border-2 border-emerald-400 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mb-2">
                  <span className="font-mono text-emerald-400 text-sm font-bold">{item.year}</span>
                  <h3 className="text-xl font-display font-semibold text-white">{item.role}</h3>
                </div>
                
                <p className="text-gray-400 text-sm mb-3">{item.org}</p>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Image/Quote */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="hidden lg:block relative rounded-2xl overflow-hidden border border-gray-800 h-full"
          >
            <div className="absolute inset-0 bg-emerald-500/20 mix-blend-overlay z-10"></div>
            <img src="/assets/journey.jpg" alt="Journey" className="absolute inset-0 w-full h-full object-cover transition-all duration-700" />
            
            <div className="absolute bottom-8 left-8 right-8 z-20">
              <h3 className="text-2xl xl:text-3xl font-display font-bold text-white leading-tight">
                Always learning.<br/>
                <span className="text-gray-400">Always building.</span><br/>
                <span className="text-emerald-400">Always improving.</span>
              </h3>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
