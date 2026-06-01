"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Scissors, Sparkles, Film, Volume2 } from "lucide-react"

const skills = [
  { icon: Scissors, name: "Editing", level: 98 },
  { icon: Sparkles, name: "Motion Design", level: 95 },
  { icon: Film, name: "Color Grading", level: 92 },
  { icon: Volume2, name: "Sound Design", level: 88 },
]

const tools = [
  "Premiere Pro", "After Effects", "DaVinci Resolve", "Cinema 4D", 
  "Final Cut Pro", "Pro Tools", "Logic Pro", "Mocha Pro"
]

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section id="about" ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          style={{ y }}
          className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-accent/5 rounded-full blur-3xl"
        />
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
          className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-accent/3 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <span className="text-accent text-sm tracking-[0.2em] uppercase block mb-6">
            About
          </span>
          <div className="grid lg:grid-cols-2 gap-12">
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1]">
              Crafting visuals
              <br />
              <span className="text-muted-foreground">since 2016</span>
            </h2>
            <div className="flex flex-col justify-end">
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                I&apos;m Sanjay Sondhiya, a video editor and motion designer based in Los Angeles. 
                For over 2 years, I&apos;ve been transforming raw footage into visual stories 
                that captivate audiences and drive results.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left - Image/Stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[4/5] overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&facepad=2"
                alt="Marcus Cole - Video Editor"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Right - Skills & Tools */}
          <div className="lg:col-span-7 space-y-8">
            {/* Skills with animated bars */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border p-8"
            >
              <h3 className="text-sm text-muted-foreground uppercase tracking-widest mb-8">
                Core Skills
              </h3>
              <div className="space-y-6">
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <skill.icon className="w-5 h-5 text-accent" />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-1 bg-secondary overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-accent to-accent/60"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tools Marquee */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-border p-8 overflow-hidden"
            >
              <h3 className="text-sm text-muted-foreground uppercase tracking-widest mb-6">
                Tools & Software
              </h3>
              <div className="relative">
                <motion.div
                  animate={{ x: [0, -100 * tools.length / 2] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="flex gap-4"
                >
                  {[...tools, ...tools].map((tool, i) => (
                    <span
                      key={i}
                      className="px-6 py-3 bg-secondary text-sm font-medium whitespace-nowrap border border-border"
                    >
                      {tool}
                    </span>
                  ))}
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 pt-24 border-t border-border"
        >
          <blockquote className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-center max-w-4xl mx-auto leading-tight">
            &ldquo;Every frame tells a story.
            <br />
            <span className="text-muted-foreground">My job is to make sure it&apos;s unforgettable.&rdquo;</span>
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}
