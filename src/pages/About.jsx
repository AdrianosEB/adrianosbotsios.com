import { motion } from 'framer-motion'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
}

const skills = [
  { category: 'Languages', items: ['Python', 'JavaScript', 'C++', 'R', 'Java'] },
  { category: 'Frameworks', items: ['React', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB'] },
  { category: 'ML/AI', items: ['PyTorch', 'Hugging Face', 'OpenCV', 'Pandas', 'Matplotlib'] },
  { category: 'Other', items: ['Robotics', 'Arduino', 'ESP32', 'Computer Vision', 'NLP'] },
]

export default function About() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pt-28 pb-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div {...fadeUp} className="mb-16">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">About</p>
          <h1 className="text-4xl sm:text-5xl font-bold">
            Get to know me.
          </h1>
        </motion.div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col items-center lg:items-start gap-6"
          >
            {/* Photo placeholder */}
            <div className="w-64 h-64 rounded-2xl bg-dark-card border border-dark-border flex items-center justify-center">
              <span className="text-5xl font-bold text-accent">AB</span>
            </div>

            {/* Social links */}
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/adrianosbotsios"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-dark-card border border-dark-border rounded-lg text-text-secondary hover:text-accent hover:border-accent/30 transition-all duration-300 text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/adrianosbotsios"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-dark-card border border-dark-border rounded-lg text-text-secondary hover:text-accent hover:border-accent/30 transition-all duration-300 text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            </div>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <h2 className="text-2xl font-bold mb-6">About Me</h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              I'm a CS student at Brown University passionate about building AI systems that
              interact with the real world — from humanoid robots to multimodal models. I've
              advised the Council of Europe on AI policy, interned at Intracom Telecom, and
              created Niki, Greece's first intelligent humanoid robot. I'm driven by the
              intersection of research, entrepreneurship, and real-world impact.
            </p>

            {/* Skills */}
            <h2 className="text-2xl font-bold mb-6">Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((group, i) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-dark-card border border-dark-border rounded-xl p-6"
                >
                  <h3 className="text-accent text-sm font-semibold tracking-wider uppercase mb-4">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-dark-light border border-dark-border rounded-full text-text-secondary text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
