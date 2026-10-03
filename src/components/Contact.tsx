import { motion } from 'framer-motion'
import { MailIcon, LinkedinIcon, GithubIcon } from './Icons'

export function Contact() {
  return (
    <section id="contact" className="py-24 relative" style={{ borderTop: '1px solid #29323D' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-12" style={{ background: '#4FD8A0' }}></div>
          <span className="font-mono text-sm tracking-widest uppercase" style={{ color: '#4FD8A0' }}>Contact</span>
        </div>

        <h2 className="font-display font-bold mb-6 leading-tight" style={{ color: '#E9EEF3', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
          Let's Build<br />Something Together.
        </h2>

        <p className="mb-12 max-w-md" style={{ color: '#8B96A3' }}>
          Open to full-stack, backend, cloud, and ML engineering roles. Have a project idea or an opportunity? Feel free to reach out!
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row flex-wrap gap-6"
        >
          {[
            { href: 'mailto:ridgemaged@outlook.com', icon: <MailIcon size={20} />, label: 'ridgemaged@outlook.com' },
            { href: 'https://linkedin.com/in/rm-m-22a8a22b9', icon: <LinkedinIcon size={20} />, label: 'linkedin.com/in/rm-m-22a8a22b9', external: true },
            { href: 'https://github.com/Ridge45', icon: <GithubIcon size={20} />, label: 'github.com/Ridge45', external: true },
          ].map((link, i) => (
            <a
              key={i}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-4 transition-all group"
              style={{ color: '#8B96A3' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#4FD8A0')}
              onMouseLeave={e => (e.currentTarget.style.color = '#8B96A3')}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center transition-colors shrink-0"
                style={{ border: '1px solid #29323D' }}
              >
                {link.icon}
              </div>
              <span>{link.label}</span>
            </a>
          ))}
        </motion.div>

        <div className="mt-24 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-mono" style={{ borderTop: '1px solid #29323D', color: '#5C6672' }}>
          <span>RIDGE MAGED IBRAHIM</span>
          <span>BUILT 2026</span>
        </div>
      </div>
    </section>
  )
}
