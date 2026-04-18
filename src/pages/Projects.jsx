import { motion } from 'framer-motion'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const projects = [
  {
    title: 'Niki the Humanoid Robot',
    description:
      "Greece's first intelligent humanoid robot. Built with NLP, Computer Vision, speech recognition, IoT. Custom neural network for face recognition. ChatGPT API with RAG for personality. Fully 3D-printed. Featured on national TV, presented at MIT EmTech 2025.",
    tags: ['Python', 'C++', 'Arduino', 'ESP32', 'OpenCV', 'ChatGPT API', 'RAG', '3D Printing'],
    github: '#',
  },
  {
    title: 'VLA Model Dataset',
    description:
      'Structured multimodal dataset for robotics-oriented vision-language-action model training. Led 7-member interdisciplinary team. Funded by Brown Data Science Institute.',
    tags: ['Python', 'PyTorch', 'Hugging Face', 'Multimodal AI', 'Robotics'],
    github: '#',
  },
  {
    title: 'Breast Cancer Detection',
    description:
      'Detecting breast cancer from biopsy samples using PCA and an ensemble of AI models, built during HarvardX AI Algorithmic Design program.',
    tags: ['Python', 'scikit-learn', 'PCA', 'Ensemble Models', 'Pandas'],
    github: '#',
  },
  {
    title: 'Movie Recommendation Engine',
    description:
      'Built using statistical modeling, regularization, and matrix factorization during HarvardX research.',
    tags: ['Python', 'Matrix Factorization', 'Statistical Modeling'],
    github: '#',
  },
  {
    title: 'Smart Home IoT Platform',
    description:
      'Full-stack IoT automation platform for smart home lighting systems built during internship at Intracom Telecom.',
    tags: ['React', 'JavaScript', 'PostgreSQL', 'IoT'],
    github: '#',
  },
  {
    title: 'AI Grading Platform',
    description:
      "AI-powered grading and feedback automation platform for educators. Placed 1st at Brown's Innovation Dojo accelerator final competition.",
    tags: ['AI Agents', 'Automation', 'React', 'Node.js'],
    github: '#',
  },
]

export default function Projects() {
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Projects</p>
          <h1 className="text-4xl sm:text-5xl font-bold">Things I've built.</h1>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-dark-card border border-dark-border rounded-xl p-8 hover:border-accent/30 transition-all duration-500 flex flex-col"
            >
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-accent-glow text-accent text-xs font-medium rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* GitHub link */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-text-secondary hover:text-accent transition-colors duration-300 text-sm font-medium"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
