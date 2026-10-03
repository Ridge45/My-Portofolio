import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { GithubIcon } from './Icons'

const ChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
)
const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
)

function ImageCarousel({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => setCurrentIndex((prev) => (prev + 1) % images.length), [images.length])
  const prev = useCallback(() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length), [images.length])

  // Auto-advance every 3 seconds, pause on hover
  useEffect(() => {
    if (paused) return
    const timer = setInterval(next, 3000)
    return () => clearInterval(timer)
  }, [paused, next])

  return (
    <div
      className="relative w-full group rounded-2xl overflow-hidden"
      style={{ border: '1px solid #29323D', aspectRatio: '9/16', maxHeight: '580px', margin: '0 auto' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      <div className="absolute inset-0">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Slide ${i}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              i === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          />
        ))}
      </div>

      {/* Overlay gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 z-10" style={{ background: 'linear-gradient(to top, rgba(15,20,26,0.9), transparent)' }} />

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full text-[#E9EEF3] opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
        style={{ background: 'rgba(15,20,26,0.75)' }}
      >
        <ChevronLeft />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full text-[#E9EEF3] opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
        style={{ background: 'rgba(15,20,26,0.75)' }}
      >
        <ChevronRight />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2 flex-wrap justify-center px-4">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === currentIndex ? 'w-6' : 'w-2 hover:opacity-80'
            }`}
            style={{ background: i === currentIndex ? '#4FD8A0' : 'rgba(233,238,243,0.5)' }}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="absolute top-3 right-3 z-20 px-2 py-1 rounded-full font-mono text-xs" style={{ background: 'rgba(15,20,26,0.75)', color: '#8B96A3' }}>
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  )
}

const projects = [
  {
    title: 'Smart Health Monitoring System',
    status: 'Shipped — Graduation Project',
    statusColor: '#4FD8A0',
    description: 'A wearable health monitoring system built end-to-end: an ESP32 microcontroller streams readings from 3 onboard sensors through a REST API into Firebase, feeding a real-time inference layer that classifies data into 4 alert severity tiers. Visualized via a 4-screen Flutter app (15+ screens). Reduced database write volume by 98% through server-side aggregation.',
    tags: ['ESP32', 'Flutter', 'Firebase', 'Python', 'Random Forest', 'REST API'],
    github: 'https://github.com/Ridge45',
    images: ['/assets/hardware part.png', '/assets/iot/iot-1.jpg', '/assets/iot/iot-2.jpg', '/assets/iot/iot-3.jpg', '/assets/iot/iot-4.jpg', '/assets/iot/iot-5.jpg', '/assets/iot/iot-6.jpg', '/assets/iot/iot-7.jpg'],
    isVideo: false
  },
  {
    title: 'Restaurant Management System',
    status: 'Shipped — ITI Capstone',
    statusColor: '#4FD8A0',
    description: 'A full-stack restaurant platform owned from database schema to frontend: role-based access across 3 user types (admin, staff, kitchen), real-time order tracking, and sub-200ms API responses. Automated the handoff between front-of-house and kitchen.',
    tags: ['Django', 'PostgreSQL', 'JavaScript', 'REST API'],
    github: 'https://github.com/Ridge45',
    image: '/assets/restaurant-demo.mp4',
    isVideo: true
  },
  {
    title: 'Arabic NLP Sentiment Analysis',
    status: 'Deployed — ML Project',
    statusColor: '#E8A33D',
    description: 'A supervised sentiment classifier for Arabic customer reviews — full NLP preprocessing pipeline (tokenization, stop-word removal, TF-IDF vectorization) feeding a Scikit-learn model, reaching 85%+ classification accuracy across 66,000+ processed reviews.',
    tags: ['Python', 'Scikit-learn', 'NLP', 'TF-IDF'],
    github: 'https://github.com/Ridge45',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop',
    isVideo: false
  }
]

export function Projects() {
  return (
    <section id="work" className="py-24 relative" style={{ background: '#121820' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-12" style={{ background: '#4FD8A0' }}></div>
          <span className="font-mono text-sm tracking-widest uppercase" style={{ color: '#4FD8A0' }}>Featured Projects</span>
        </div>
        
        <h2 className="font-display font-bold mb-16" style={{ color: '#E9EEF3', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
          Some of My Recent Work
        </h2>

        <div className="space-y-28">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              {/* Info */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-3">
                  {/* Status pill */}
                  <span
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md font-mono text-[11px] font-semibold tracking-wide uppercase"
                    style={{
                      background: `${project.statusColor}18`,
                      color: project.statusColor,
                      border: `1px solid ${project.statusColor}30`,
                      letterSpacing: '0.08em'
                    }}
                  >
                    {/* Pulsing dot */}
                    <span className="relative flex h-1.5 w-1.5">
                      <span
                        className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
                        style={{ background: project.statusColor }}
                      />
                      <span
                        className="relative inline-flex rounded-full h-1.5 w-1.5"
                        style={{ background: project.statusColor }}
                      />
                    </span>
                    {project.status.split('—')[0].trim()}
                  </span>
                  {/* Context tag */}
                  {project.status.includes('—') && (
                    <span
                      className="font-mono text-[11px] tracking-wide"
                      style={{ color: '#8B96A3' }}
                    >
                      {project.status.split('—')[1].trim()}
                    </span>
                  )}
                </div>
                
                <h3 className="font-display font-bold" style={{ color: '#E9EEF3', fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
                  {project.title}
                </h3>
                
                <div className="p-6 rounded-2xl" style={{ background: '#1A2129', border: '1px solid #29323D' }}>
                  <p style={{ color: '#8B96A3', lineHeight: 1.75 }}>{project.description}</p>
                </div>

                <ul className="flex flex-wrap gap-3 font-mono text-xs" style={{ color: '#8B96A3' }}>
                  {project.tags.map((tag, i) => (
                    <li key={i} className="px-3 py-1 rounded-md" style={{ background: '#0F141A', border: '1px solid #29323D' }}>
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-4 pt-2">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-medium transition-colors hover:opacity-80"
                    style={{ color: '#4FD8A0' }}
                  >
                    <GithubIcon size={20} /> View on GitHub
                  </a>
                </div>
              </div>

              {/* Image / Video */}
              <div className="flex-[1.2] w-full flex justify-center">
                {project.images ? (
                  // Portrait carousel for phone screenshots — has its own aspect ratio
                  <div className="w-full max-w-[340px]">
                    <ImageCarousel images={project.images} />
                  </div>
                ) : (
                  <div className="relative rounded-2xl overflow-hidden aspect-video w-full" style={{ border: '1px solid #29323D' }}>
                    <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: 'rgba(79,216,160,0.12)', mixBlendMode: 'overlay' }}></div>
                    {project.isVideo ? (
                      <video
                        src={project.image}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    ) : (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    )}
                  </div>
                )}
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
