import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const stagger = {
  animate: {
    transition: { staggerChildren: 0.15 },
  },
}

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const currentlyCards = [
  {
    label: 'Researching',
    title: 'VLA Model Data Labeling',
    description: 'Building structured multimodal datasets for robotics-oriented vision-language-action model training at Brown, funded by Brown Data Science Institute.',
  },
  {
    label: 'Building',
    title: 'AI Agent Consulting',
    description: 'Advising businesses on AI Agent integration and building an internal workflow intelligence platform.',
  },
  {
    label: 'Studying',
    title: 'CS @ Brown University',
    description: 'Computer Science, 4.0 GPA, Class of 2029. Exploring the intersection of AI, robotics, and entrepreneurship.',
  },
]

function ParticleBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId
    let particles = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticles = () => {
      particles = []
      const count = Math.floor((canvas.width * canvas.height) / 15000)
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.3 + 0.1,
        })
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(59, 130, 246, ${p.opacity})`
        ctx.fill()
      })

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.06 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      animationId = requestAnimationFrame(draw)
    }

    resize()
    createParticles()
    draw()

    window.addEventListener('resize', () => {
      resize()
      createParticles()
    })

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}

export default function Home() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticleBackground />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-transparent to-dark pointer-events-none" />

        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="relative z-10 max-w-3xl mx-auto px-6 text-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-accent text-sm font-semibold tracking-widest uppercase mb-4"
          >
            Welcome
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            Hi, I'm{' '}
            <span className="text-accent">Adrianos Botsios</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl text-text-secondary mb-6"
          >
            CS @ Brown University &middot; Researcher &middot; Builder
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-base text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            I build robots, research AI, and create things that matter. Currently studying
            Computer Science at Brown (4.0 GPA) while conducting research on vision-language-action
            models and running an AI consulting initiative.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg transition-colors duration-300"
              >
                View My Work
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-dark-border hover:border-accent text-text-primary font-semibold rounded-lg transition-colors duration-300"
              >
                Get In Touch
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 border-2 border-text-muted rounded-full flex items-start justify-center p-1.5"
          >
            <motion.div className="w-1.5 h-1.5 bg-text-muted rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Currently Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-16"
          >
            Currently
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentlyCards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-dark-card border border-dark-border rounded-xl p-8 hover:border-accent/30 transition-colors duration-500"
              >
                <span className="text-accent text-sm font-semibold tracking-wider uppercase">
                  {card.label}
                </span>
                <h3 className="text-xl font-bold mt-3 mb-3">{card.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
