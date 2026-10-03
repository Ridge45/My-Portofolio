import { motion } from 'framer-motion'

const stats = [
  { value: '3+', label: 'Internships Completed' },
  { value: '4+', label: 'Major Projects Shipped' },
  { value: 'End-to-End', label: 'Systems Engineering' },
  { value: 'Real', label: 'Problem Solving Focus' }
]

export function Stats() {
  return (
    <section className="relative py-10 border-y border-gray-800 bg-gray-900/30 backdrop-blur-sm z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="text-3xl font-display font-bold text-emerald-400">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 leading-tight">
                {stat.label.split(' ').map((word, j) => (
                  <span key={j} className="block">{word}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
