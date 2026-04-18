import { motion } from 'framer-motion'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const posts = [
  {
    category: 'AI Research',
    title: 'Building Multimodal Datasets for Robotics: Lessons from the Lab',
    excerpt:
      'What I learned leading a team of seven to build a structured VLA dataset — from data collection challenges to labeling at scale.',
    date: 'Coming Soon',
  },
  {
    category: 'Robotics',
    title: "From Arduino to EmTech: Niki's Journey to MIT",
    excerpt:
      "The five-year story of building Greece's first intelligent humanoid robot — the failures, breakthroughs, and everything in between.",
    date: 'Coming Soon',
  },
  {
    category: 'Entrepreneurship',
    title: 'What Winning Innovation Dojo Taught Me About Building Products',
    excerpt:
      'Reflections on going from idea to first place at Brown\'s accelerator, and why the best pitch isn\'t always the best product.',
    date: 'Coming Soon',
  },
]

export default function Blog() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pt-28 pb-20 px-6"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Blog</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Thoughts & Writing</h1>
          <p className="text-text-secondary text-lg">
            Writing about AI, robotics, and building things.
          </p>
        </motion.div>

        {/* Posts */}
        <div className="flex flex-col gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-dark-card border border-dark-border rounded-xl p-8 hover:border-accent/30 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-2.5 py-1 bg-accent-glow text-accent text-xs font-semibold rounded-md">
                  {post.category}
                </span>
                <span className="px-2.5 py-1 bg-dark-light border border-dark-border text-text-muted text-xs font-medium rounded-md">
                  Coming Soon
                </span>
              </div>

              <h2 className="text-xl font-bold mb-3">{post.title}</h2>
              <p className="text-text-secondary text-sm leading-relaxed">{post.excerpt}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
