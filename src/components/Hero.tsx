import { motion } from 'framer-motion'
import { ArrowRightIcon, DownloadIcon, GithubIcon, LinkedinIcon, MailIcon } from './Icons'

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen pt-24 pb-12 flex items-center justify-center overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,216,160,0.05),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-start z-10"
          >
            <p className="text-emerald-400 font-mono text-base mb-3 tracking-widest">Hi, I'm</p>
            <h1 className="font-display font-bold leading-tight mb-2" style={{ fontSize: 'clamp(2.8rem, 7vw, 5rem)' }}>
              <span style={{ color: '#E9EEF3' }}>Ridge</span>{' '}
              <span style={{ color: '#4FD8A0' }}>Maged</span>
            </h1>
            <h2 className="font-display text-gray-300 mb-8" style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2.2rem)' }}>
              Software Engineer
            </h2>
            
            <p className="text-gray-400 text-lg max-w-xl mb-10 leading-relaxed">
              Software engineer who builds end to end — from hardware, through the backend, to the interface someone actually uses.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <a 
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all hover:scale-105"
                style={{ backgroundColor: '#4FD8A0', color: '#0A0F13' }}
              >
                View My Work <ArrowRightIcon size={18} />
              </a>
              <a 
                href="/Ridge_Maged_CVmain.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold border border-gray-600 text-white hover:border-emerald-400 transition-all hover:scale-105"
              >
                <DownloadIcon size={18} /> Download CV
              </a>
            </div>

            <div className="flex gap-5" style={{ color: '#8B96A3' }}>
              <a href="https://linkedin.com/in/rm-m-22a8a22b9" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                <LinkedinIcon size={24} />
              </a>
              <a href="https://github.com/Ridge45" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                <GithubIcon size={24} />
              </a>
              <a href="mailto:ridgemaged@outlook.com" className="hover:text-emerald-400 transition-colors">
                <MailIcon size={24} />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Portrait Card + No-BG Photo + Floating Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:flex h-[580px] items-center justify-center"
          >
            {/* Green glow blob behind */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
              style={{ background: 'rgba(79,216,160,0.15)', filter: 'blur(100px)' }}
            />

            {/* Wrapper to perfectly anchor floating cards to the circle */}
            <div className="relative z-10" style={{ width: '410px', height: '410px' }}>
              
              {/* Circular Portrait card */}
              <div
                className="absolute inset-0 rounded-full overflow-hidden"
                style={{
                  background: 'linear-gradient(180deg, #0c1a14 0%, #0A0F13 50%, #0d1f18 100%)',
                  border: '1.5px solid rgba(79,216,160,0.3)',
                  boxShadow: '0 0 80px rgba(79,216,160,0.1), inset 0 1px 0 rgba(79,216,160,0.08)',
                }}
              >
              {/* Inner bottom glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(79,216,160,0.12) 0%, transparent 65%)' }}
              />

              {/* No-bg photo: anchored to the bottom border */}
              <img
                src="/profile-nobg.png"
                alt="Ridge Maged"
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '125%',
                  height: 'auto',
                  filter: 'drop-shadow(0 8px 32px rgba(79,216,160,0.2))',
                }}
              />
            </div>

              {/* Floating Card: Education — left side */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute -left-28 top-16 glass-card p-4 rounded-2xl shadow-2xl z-20"
                style={{ maxWidth: '180px', willChange: 'transform' }}
              >
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-sm"
                  style={{ background: 'rgba(79,216,160,0.15)' }}
                >🎓</div>
                <p className="text-xs font-mono" style={{ color: '#4FD8A0' }}>Education</p>
              </div>
              <p className="text-xs text-gray-200 font-semibold">Computer Science</p>
              <p className="text-xs mt-1" style={{ color: '#8B96A3' }}>Class of 2026</p>
            </motion.div>

              {/* Floating Card: Interests — right side */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
                className="absolute -right-32 bottom-10 glass-card p-4 rounded-2xl shadow-2xl z-20"
                style={{ minWidth: '170px', willChange: 'transform' }}
              >
              <p className="text-xs font-mono mb-3" style={{ color: '#8B96A3' }}>Interests</p>
              <ul className="space-y-1.5 text-xs" style={{ color: '#E9EEF3' }}>
                {['Full Stack Dev', 'Mobile Dev', 'IoT Systems', 'Problem Solving'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: '#4FD8A0' }}
                    />
                    {item}
                  </li>
                ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
