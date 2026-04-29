# Content

Pre-filled from the resume. Review and edit any wording you want to change before we build. Photos are placeholders - swap them later by dropping real files into `assets/projects/` with the same filenames.

The site is a **single page**. The content below maps to its sections in order: hero, about, projects (one block per entry), contact. The sticky nav has links to `About · Projects · Contact` and uses scroll-spy to highlight the section currently in view.

---

## Basic info

- **Full name**: Adrianos Botsios
- **Positioning line** (under name in hero): *Studying Computer Science and Economics at Brown.*
- **Email**: adrianosbotsios@gmail.com
- **GitHub**: [github.com/adrianosbotsios] *(confirm exact handle)*
- **LinkedIn**: [linkedin.com/in/adrianosbotsios] *(confirm exact handle)*

## Hero (top of page)

- **Background photo**: a landscape shot (mountains, sky, ocean - anything calm with blue tones, like the Himalayas image on swkang73.github.io).
  - File path: `assets/hero-bg.jpg` (placeholder SVG for now - swap in a real photo whenever).
  - A dark-blue scrim is layered over it so the text stays readable.
  - Recommended source: 2000–2400px wide, JPEG, < 300KB after compression.
- **Name**: Adrianos Botsios - white text over the photo.
- **Positioning line**: *Studying Computer Science and Economics at Brown.* - soft-white under the name.
- **Social row** (white text links): GitHub · LinkedIn · Email.
- **No CTA button** - minimal hero, scroll naturally.

## Portrait photo (About section)

- File path: `assets/portrait.jpg` (placeholder SVG for now).
- Sits in the About section, left of the paragraphs on desktop, above on mobile.
- Recommended size: ~600×600 source so it stays crisp on retina displays. Renders around 280×280 on screen.

## About (#about section)

Three short paragraphs - keep conversational, not a resume rewrite. Draft below; rewrite freely.

> I'm Adrianos, studying Computer Science and Economics at Brown. I grew up in Athens, and most of what I make sits at the intersection of robotics, AI, and the things people actually use day to day.

> I like building tangible systems - from a fully 3D-printed humanoid robot I spent five years on, to AI agents that automate real workflows for small businesses, to research on how we label data for vision-language-action models. If a project mixes hardware, software, and a hard problem, I'm probably interested.

> Outside of code I run student ventures, work with the Brown Entrepreneurship Club, and care a lot about how AI is taught and governed.

---

## Projects - single section, Niki featured, rest compact

Everything from the resume now lives under one **Projects** section (`#projects`). Niki gets a featured block with a photo. The other 10 entries render as compact text-only items grouped under small *Research / Work / Leadership* subheadings - no images for them.

---

## Featured project - Niki

### Niki the Humanoid Robot

- **Photo**: `assets/projects/niki.jpg`
- **Role / context**: Creator, Lead Researcher · Athens, Greece · Jan 2020 – Aug 2025
- **Description**: Niki is a fully 3D-printed humanoid robot I built over five years. She combines computer vision, speech recognition, natural language processing, and IoT to perform a range of tasks - recognizing faces with a custom-trained neural net, holding conversations through a ChatGPT-backed personality layer with RAG, and controlling motors through Arduino and ESP32 firmware. National TV nicknamed her *the first AI humanoid robot in Greece*, and I presented the project at MIT Technology Review's 2025 EmTech Conference on youth and the future of technology with AI.
- **Tech**: Python, C++, PyTorch, Hugging Face, OpenCV, LangChain, Arduino, ESP32
- **GitHub**: *(insert Niki repo link)*
- **Press**: MIT Technology Review EmTech 2025

---

## Other Projects - compact list (no images)

Grouped under three subheadings inside the same `#projects` section. Each entry: title + role/dates · location, then 1–2 sentence description, tech tags, and GitHub link if applicable.

### Research

#### VLA Model Data Labeling Research

- **Role / context**: Lead Researcher · Brown University · Dec 2025 – Present
- **Description**: Lead a 7-person interdisciplinary team at Brown studying scalable data labeling for vision-language-action models. Focused on multimodal data for emotion-aware humanoid robots. Funded by the Brown Data Science Institute.
- **Tech**: PyTorch, Hugging Face, Pandas, multimodal datasets
- **GitHub**: *(private / WIP)*

#### AI Algorithmic Design (HarvardX)

- **Role / context**: Student Researcher · Athens, Greece · Jun 2023 – Aug 2024
- **Description**: Two applied ML projects: a breast-cancer detector using PCA + ensemble methods, and a movie recommendation system using statistical modeling and matrix factorization.
- **Tech**: R, Python, statistical modeling, ensemble methods, PCA, matrix factorization
- **GitHub**: *(insert HarvardX repo link)*

### Work

#### Council of Europe - Committee on AI

- **Role / context**: Advisor, Intern · Strasbourg, France · Aug 2023 – Sep 2023
- **Description**: Advised the Council of Europe's Committees on AI and Human Rights on policy - ethical principles without throttling innovation. Contributed to the Convention on AI, Human Rights, Democracy, and the Rule of Law, including strategies for job displacement through education programs.
- **Tech**: AI Policy, Ethics, Regulation
- **GitHub**: - (policy work)

#### Intracom Telecom - Smart Home & Factory Robotics

- **Role / context**: ML & Robotics Intern · Athens, Greece · Jun 2023 – Jul 2023
- **Description**: Built a full-stack IoT smart-home lighting platform (React, PostgreSQL). Retrained an object-detection model for factory-floor robotics and integrated it into a production line that shaped and placed metal sheets.
- **Tech**: React, JavaScript, PostgreSQL, Python, Computer Vision
- **GitHub**: - (proprietary)

#### Cosmote - Greek NLP for Customer Feedback

- **Role / context**: NLP & PM Intern · Athens, Greece · Jun 2022 – Jul 2022
- **Description**: NLP model analyzing Greek-language customer feedback for satisfaction signals, supporting business intelligence at Greece's largest telecom. Secured €4,000 in sponsorship for the team along the way.
- **Tech**: Python, NLP, Sentiment Analysis, PM
- **GitHub**: - (proprietary)

### Leadership

#### AI Agent Consulting

- **Role / context**: Co-founder · Providence, USA · Jan 2026 – Present
- **Description**: Startup I co-founded at Brown building AI agents for SMBs - email triage, order/invoice processing, data entry, booking workflows - via LangChain + n8n on AWS. Building a full-stack MVP that auto-suggests agentic workflows from user work patterns.
- **Tech**: Python, React, Node.js, LangChain, n8n, AWS
- **GitHub**: *(add when public)*

#### AI-Powered Grading & Feedback Platform

- **Role / context**: Innovation Dojo · Brown Entrepreneurship · Sep 2025 – Present
- **Description**: Startup concept pitched through Brown's Innovation Dojo accelerator: an AI tool that grades student work and gives rubric-aware feedback at scale. Selected as 1 of 20 students; placed 1st at the final competition.
- **Tech**: Python, LLMs, Full-stack Web
- **GitHub**: *(add when public)*

#### AI & Ethics in Education

- **Role / context**: Founder, President · Athens, Greece · Jan 2020 – Aug 2025
- **Description**: Five-year program bringing AI literacy and ethics into Greek public schools - curriculum handbook + hands-on AI Labs, reaching ~12,000 students. Partnered with the World Human Forum and NCSR Demokritos; presented at the Council of Europe's 2023 Spring Plenary Session.
- **Tech**: Curriculum, AI Labs, Partnerships
- **GitHub**: - (non-code project)

#### SmartSort - AI Recycling Bin (Dynamic Innovations)

- **Role / context**: Founder, President · Athens, Greece · Sep 2015 – Aug 2025
- **Description**: Led a 23-person team to build SmartSort: an AI recycling bin (custom CNN + CAD hardware). Raised €8,000, won the ACSTAC AI & IoT award. Face-tracking and conversational subsystems were later folded into Niki.
- **Tech**: Python, Custom CNN, OpenCV, CAD, Embedded
- **GitHub**: *(insert Dynamic Innovations repo link)*

#### Sustainable & Smart City (Green Team)

- **Role / context**: Founder, President · Athens, Greece · Sep 2015 – Aug 2025
- **Description**: 21-person team that engineered two 4×4 ft physical models of a sustainable smart city - AI traffic/energy, IoT sensors, renewables. Raised €10,000, won the ACSTAC AI & Sustainability award, published an article, partnered with local municipalities.
- **Tech**: Python, IoT, Embedded Sensors, Renewable Energy
- **GitHub**: *(insert Green Team repo link)*

---

## Education (#education)

Compact text block - no scroll-through cards.

- **School**: Brown University, Providence, RI
- **Degree**: Sc.B. in Computer Science & Economics
- **GPA**: 4.0 / 4.0
- **Expected graduation**: May 2029
- **Relevant coursework**: Accelerated Intro to CS, Linear Algebra, Engineering, Management of Organizations
- **On-campus activities**: Brown Entrepreneurship Club, Brown Robotics Club, Innovation Dojo, Hellenic Student Association

---

## Skills (#skills)

Categorized lists, mono pills.

- **Programming Languages**: Python, JavaScript, C, C++, R, Java
- **Frameworks, Databases & Tools**: Node.js, React, Express, PostgreSQL, MongoDB, Bootstrap, AWS, n8n
- **Machine Learning**: Model training & fine-tuning, mathematical modeling, PyTorch, Hugging Face, OpenCV, Pandas, LangChain

---

## Contact / Footer (#contact section)

- Email: adrianosbotsios@gmail.com
- GitHub: *(handle)*
- LinkedIn: *(handle)*
- Small line: "Built with HTML, CSS, JS · Source on GitHub"

---

## Things to confirm before building

- [ ] Exact GitHub and LinkedIn handles.
- [ ] Repo name - `adrianosbotsios.github.io` for a clean URL?
- [ ] Real GitHub URLs from the resume for: Niki, Dynamic Innovations, Green Team, HarvardX (you have these - paste them).
- [ ] Any project descriptions you want to rewrite in your own voice.
- [ ] OK to leave AI Agent Consulting + Grading Platform without a GitHub link until those repos are public?
- [ ] OK that Council of Europe, Intracom, and Cosmote appear as projects (no GitHub link)?
