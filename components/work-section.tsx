"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence, useInView } from "framer-motion"
import { Play, X, ArrowUpRight, Clock, Eye, Film, Clapperboard, Volume2 } from "lucide-react"

const categories = [
  { id: "long", label: "Long Form", count: 4 },
]

const projects = [
  {
    id: 1,
    title: "Long Video 01",
    category: "long",
    client: "YouTube",
    duration: "Long Form",
    views: "-",
    year: "2026",
    description: "Featured long-form edit",
    thumbnail: "https://img.youtube.com/vi/mdlUzC7uG30/hqdefault.jpg",
    videoUrl: "https://youtu.be/mdlUzC7uG30?si=ZwJw_E65W6K0QzF5",
    color: "#00d4ff",
  },
  {
    id: 2,
    title: "Long Video 02",
    category: "long",
    client: "YouTube",
    duration: "Long Form",
    views: "-",
    year: "2026",
    description: "Featured long-form edit",
    thumbnail: "https://img.youtube.com/vi/lZkmGGKkkEw/hqdefault.jpg",
    videoUrl: "https://youtu.be/lZkmGGKkkEw?si=Af3zL9rEotyV4Xzl",
    color: "#e50914",
  },
  {
    id: 3,
    title: "Long Video 03",
    category: "long",
    client: "YouTube",
    duration: "Long Form",
    views: "-",
    year: "2026",
    description: "Featured long-form edit",
    thumbnail: "https://img.youtube.com/vi/FM_z8WATUJA/hqdefault.jpg",
    videoUrl: "https://youtu.be/FM_z8WATUJA?si=IGBDK7rOUzAArLFt",
    color: "#a855f7",
  },
  {
    id: 4,
    title: "Long Video 04",
    category: "long",
    client: "YouTube",
    duration: "Long Form",
    views: "-",
    year: "2026",
    description: "Featured long-form edit",
    thumbnail: "https://img.youtube.com/vi/kHiYuemJXN8/hqdefault.jpg",
    videoUrl: "https://youtu.be/kHiYuemJXN8?si=yNa2-YICLjoYK953",
    color: "#22c55e",
  },
]

function getYouTubeEmbedUrl(url: string) {
  try {
    const parsed = new URL(url)
    if (parsed.hostname.includes("youtu.be")) {
      const id = parsed.pathname.replace("/", "")
      return id ? `https://www.youtube.com/embed/${id}` : null
    }
    if (parsed.hostname.includes("youtube.com")) {
      const shortId = parsed.pathname.split("/shorts/")[1]?.split("/")[0]
      if (shortId) return `https://www.youtube.com/embed/${shortId}`
      const id = parsed.searchParams.get("v")
      return id ? `https://www.youtube.com/embed/${id}` : null
    }
    return null
  } catch {
    return null
  }
}

// Cinematic Frame Lines Component
function FrameLines() {
  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      {/* Corner brackets */}
      <div className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-accent/30" />
      <div className="absolute top-8 right-8 w-12 h-12 border-r-2 border-t-2 border-accent/30" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-l-2 border-b-2 border-accent/30" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-accent/30" />
    </div>
  )
}


// Hover Project Card with Cinematic Feel
function ProjectCard({ project, index, onSelect }: {
  project: typeof projects[0],
  index: number,
  onSelect: () => void
}) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onSelect}
      className="group relative cursor-pointer"
    >
      {/* Main Card */}
      <div className="relative aspect-[16/10] overflow-hidden bg-card">
        {/* Thumbnail */}
        <motion.img
          src={project.thumbnail}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.08 : 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Color Overlay on Hover */}
        <motion.div
          className="absolute inset-0"
          style={{ backgroundColor: project.color }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.2 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />

        {/* Scan Line Effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)'
          }}
          animate={{ opacity: isHovered ? 0.5 : 0 }}
        />

        {/* Project Number */}
        <div className="absolute top-4 left-4 font-mono text-6xl font-bold text-white/10">
          {String(index + 1).padStart(2, '0')}
        </div>

        {/* Play Button */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: isHovered ? 1 : 0.8 }}
            className="w-16 h-16 rounded-full flex items-center justify-center"
            style={{ backgroundColor: project.color }}
          >
            <Play className="w-6 h-6 text-white ml-1" fill="white" />
          </motion.div>
        </motion.div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          {/* Client Tag */}
          <motion.div
            className="flex items-center gap-2 mb-3"
            animate={{ x: isHovered ? 0 : -4, opacity: isHovered ? 1 : 0.7 }}
          >
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: project.color }}
            />
            <span className="text-xs font-mono tracking-wider text-white/80 uppercase">
              {project.client}
            </span>
            <span className="text-xs text-white/40">/</span>
            <span className="text-xs text-white/40">{project.year}</span>
          </motion.div>

          {/* Title */}
          <motion.h3
            className="text-2xl font-bold text-white mb-2"
            animate={{ x: isHovered ? 0 : -4 }}
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {project.title}
          </motion.h3>

          {/* Description - Shows on Hover */}
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? 'auto' : 0 }}
            className="text-sm text-white/60 mb-3 overflow-hidden"
          >
            {project.description}
          </motion.p>

          {/* Meta */}
          <div className="flex items-center gap-4 text-xs text-white/50">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3 h-3" />
              {project.duration}
            </span>
            <span className="flex items-center gap-1.5">
              <Eye className="w-3 h-3" />
              {project.views}
            </span>
          </div>
        </div>

        {/* Corner Accent */}
        <motion.div
          className="absolute top-0 right-0 w-16 h-16"
          animate={{ opacity: isHovered ? 1 : 0 }}
        >
          <div className="absolute top-0 right-0 w-full h-0.5" style={{ backgroundColor: project.color }} />
          <div className="absolute top-0 right-0 h-full w-0.5" style={{ backgroundColor: project.color }} />
        </motion.div>

        {/* Arrow */}
        <motion.div
          className="absolute top-4 right-4"
          initial={{ opacity: 0, x: -10, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10, y: isHovered ? 0 : 10 }}
        >
          <ArrowUpRight className="w-5 h-5 text-white" />
        </motion.div>
      </div>
    </motion.div>
  )
}


// Project Modal
function ProjectModal({ project, onClose }: { project: typeof projects[0], onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])
  const embedUrl = getYouTubeEmbedUrl(project.videoUrl)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/95 backdrop-blur-sm" />

      {/* Modal */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 40 }}
        transition={{ type: "spring", damping: 25 }}
        className="relative w-full max-w-5xl bg-card border border-border overflow-hidden z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 backdrop-blur flex items-center justify-center hover:bg-accent transition-colors group"
        >
          <X className="w-5 h-5 text-white group-hover:text-black" />
        </button>

        {/* Video Preview */}
        <div className="relative aspect-video">
          {embedUrl ? (
            <iframe
              src={`${embedUrl}?rel=0&modestbranding=1`}
              title={project.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          )}

          {/* Film frame corners */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white/30" />
          <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-white/30" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-white/30" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-white/30" />

        </div>

        {/* Info */}
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: project.color }}
            />
            <span className="text-accent font-mono text-sm tracking-wider uppercase">{project.client}</span>
            <span className="text-muted-foreground">/</span>
            <span className="text-muted-foreground text-sm">{project.year}</span>
            <span className="px-2 py-0.5 bg-secondary text-xs uppercase tracking-wider">
              {categories.find(c => c.id === project.category)?.label}
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            {project.title}
          </h2>

          <p className="text-muted-foreground mb-6 max-w-2xl">
            {project.description}. This project showcases advanced editing techniques,
            color grading, and sound design to create an immersive viewing experience.
          </p>
          <a
            href={project.videoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors mb-6"
          >
            Watch on YouTube
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4 text-accent" />
              <span className="text-muted-foreground">Duration:</span>
              <span className="font-medium">{project.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Eye className="w-4 h-4 text-accent" />
              <span className="text-muted-foreground">Views:</span>
              <span className="font-medium">{project.views}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Clapperboard className="w-4 h-4 text-accent" />
              <span className="text-muted-foreground">Role:</span>
              <span className="font-medium">Editor & Colorist</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Volume2 className="w-4 h-4 text-accent" />
              <span className="text-muted-foreground">Audio:</span>
              <span className="font-medium">5.1 Surround</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function WorkSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [activeCategory, setActiveCategory] = useState("long")
  const sectionRef = useRef<HTMLElement>(null)

  const filteredProjects = activeCategory === "long"
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section ref={sectionRef} id="work" className="relative">


      {/* Section Header */}
      <div className="px-6 md:px-12 lg:px-24 py-20">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-8 h-px bg-accent" />
              <span className="font-mono text-xs text-accent tracking-[0.2em] uppercase">Selected Work</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Projects that
              <br />
              <span className="text-accent">tell stories</span>
            </motion.h2>
          </div>

          {/* Category Filter */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-sm font-mono tracking-wide border transition-all duration-300 ${activeCategory === cat.id
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-border hover:border-accent text-muted-foreground hover:text-foreground"
                  }`}
              >
                {cat.label}
                <span className="ml-2 opacity-50">({cat.count})</span>
              </button>
            ))}
          </motion.div> */}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onSelect={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
