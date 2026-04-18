import { motion } from 'framer-motion'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const education = {
  school: 'Brown University',
  degree: 'Sc.B. Computer Science',
  gpa: '4.0 GPA',
  expected: 'Expected May 2029',
  courses: [
    'Accelerated Intro to CS',
    'Linear Algebra',
    'Intro to Engineering',
    'Management of Industrial Organizations',
  ],
}

const experiences = [
  {
    role: 'Independent Researcher — VLA Model Data Labeling',
    org: 'Brown University / Brown Data Science Institute',
    location: 'Providence, USA',
    date: 'Dec 2025 – Present',
    bullets: [
      'Researching scalable data labeling for VLA models in robotics',
      'Built structured multimodal dataset for robotics-oriented VLA training',
      'Led 7-member interdisciplinary team on emotion-aware humanoid robots',
      'Received grant from Brown Data Science Institute',
    ],
  },
  {
    role: 'Co-Founder — AI Agent Consulting',
    org: '',
    location: 'Providence, USA',
    date: 'Oct 2025 – Present',
    bullets: [
      'Advising businesses on AI Agent and automation integration',
      'Building internal workflow intelligence platform',
      'Clients include Ghia, Casper, Bowery Farming, exploring Warby Parker',
    ],
  },
  {
    role: 'Member & Winner — Brown Entrepreneurship / Innovation Dojo',
    org: '',
    location: 'Providence, USA',
    date: 'Sep 2025 – Present',
    bullets: [
      'Selected as 1 of 20 Brown students for Innovation Dojo accelerator',
      'Placed 1st at final competition with AI-powered grading platform',
    ],
  },
  {
    role: 'Creator & Lead Researcher — Niki the Humanoid Robot',
    org: '',
    location: 'Athens, Greece',
    date: 'Jan 2020 – Aug 2025',
    bullets: [
      "Built Greece's first intelligent humanoid robot",
      'Presented at MIT Technology Review EmTech 2025',
      'Spoke with Sophia the android robot',
    ],
  },
  {
    role: 'Advisor & Intern — Council of Europe, Committee on AI',
    org: '',
    location: 'Strasbourg, France',
    date: 'Aug 2023 – Sep 2023',
    bullets: [
      'Advised on AI policy for Committee on AI and Legal Affairs',
      'Contributed to the Convention on AI, Human Rights, Democracy and Rule of Law',
    ],
  },
  {
    role: 'ML & Robotics Intern — Intracom Telecom',
    org: '',
    location: 'Athens, Greece',
    date: 'Jun 2023 – Jul 2023',
    bullets: [
      'Built full-stack IoT automation platform using React, JS, PostgreSQL',
      'Retrained object detection model for robotic factory applications',
    ],
  },
  {
    role: 'Student Researcher — AI Algorithmic Design (HarvardX)',
    org: '',
    location: '',
    date: 'Jun 2023 – Aug 2024',
    bullets: [
      'Breast cancer detection from biopsy samples using PCA + ensemble AI',
      'Movie recommendation engine using matrix factorization',
    ],
  },
  {
    role: 'Founder & President — AI & Ethics in Education',
    org: '',
    location: 'Athens, Greece',
    date: 'Jan 2020 – Aug 2025',
    bullets: [
      'Launched AI & Ethics program reaching 12,000 students in Greek public schools',
      "Presented at Council of Europe's 2023 Spring Plenary Session",
    ],
  },
]

export default function Experience() {
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
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Experience</p>
          <h1 className="text-4xl sm:text-5xl font-bold">Where I've been.</h1>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6">Education</h2>
          <div className="bg-dark-card border border-dark-border rounded-xl p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
              <div>
                <h3 className="text-lg font-bold">{education.school}</h3>
                <p className="text-text-secondary text-sm">
                  {education.degree} &middot; {education.gpa}
                </p>
              </div>
              <span className="text-text-muted text-sm">{education.expected}</span>
            </div>
            <div>
              <p className="text-text-muted text-sm mb-2">Relevant Courses:</p>
              <div className="flex flex-wrap gap-2">
                {education.courses.map((course) => (
                  <span
                    key={course}
                    className="px-3 py-1 bg-dark-light border border-dark-border rounded-full text-text-secondary text-sm"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <h2 className="text-2xl font-bold mb-10">Experience</h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-dark-border" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative pl-12"
              >
                {/* Dot */}
                <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-accent border-2 border-dark" />

                <div className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-accent/30 transition-colors duration-500">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                    <div>
                      <h3 className="text-base font-bold">{exp.role}</h3>
                      {(exp.org || exp.location) && (
                        <p className="text-text-muted text-sm">
                          {exp.org}
                          {exp.org && exp.location ? ' | ' : ''}
                          {exp.location}
                        </p>
                      )}
                    </div>
                    <span className="text-accent text-sm font-medium whitespace-nowrap">
                      {exp.date}
                    </span>
                  </div>

                  <ul className="space-y-1.5">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="text-text-secondary text-sm flex gap-2">
                        <span className="text-accent mt-1.5 flex-shrink-0">
                          <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
