import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Languages',
    icon: '💻',
    skills: ['Dart', 'Python', 'JavaScript', 'Java', 'C++', 'HTML5', 'CSS']
  },
  {
    title: 'Frameworks & Tools',
    icon: '⚙️',
    skills: ['Django', 'Flask', 'Flutter', 'REST API']
  },
  {
    title: 'Cloud & Data',
    icon: '☁️',
    skills: ['Firebase', 'PostgreSQL', 'MongoDB', 'Azure', 'AWS', 'SQL']
  },
  {
    title: 'AI / ML',
    icon: '🧠',
    skills: ['Scikit-learn', 'Pandas', 'NumPy', 'Random Forest', 'NLP']
  },
  {
    title: 'Other Tools',
    icon: '🛠️',
    skills: ['Git', 'GitHub', 'Docker', 'Excel', 'Postman']
  }
]

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex items-center gap-4 mb-4">
          <div className="h-[1px] w-12 bg-emerald-400"></div>
          <span className="text-emerald-400 font-mono text-sm tracking-widest uppercase">Skills</span>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-6">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-white max-w-xl">
            Technologies I Work With
          </h2>
          <p className="text-gray-400 max-w-sm text-right lg:text-left">
            I use a variety of technologies to build scalable applications and bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6 border-t border-t-emerald-400/20 hover:border-t-emerald-400 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="font-display font-semibold text-white">{category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                    <span className="text-emerald-400/50">▹</span> {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
