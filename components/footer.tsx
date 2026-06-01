"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowUp, Play } from "lucide-react"

export function Footer() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  })
  
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer ref={containerRef} className="relative overflow-hidden">
      {/* Giant CTA Section */}
      <div className="relative py-20 md:py-48">
        {/* Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <motion.span 
            style={{ scale, opacity }}
            className="font-display text-[20vw] font-bold text-foreground/[0.03] whitespace-nowrap"
          >
            LET&apos;S WORK
          </motion.span>
        </div>

        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            className="inline-block text-accent text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-6 md:mb-8"
            >
              Ready to Start?
            </motion.span>
            
            <h2 className="font-display text-4xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-8">
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="block"
              >
                Your Story
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="block text-transparent bg-clip-text bg-gradient-to-r from-accent via-foreground to-accent"
              >
                Deserves Better
              </motion.span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 md:mb-12"
            >
              Let&apos;s collaborate to create something that captures attention, 
              evokes emotion, and leaves a lasting impression.
            </motion.p>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-3 px-7 py-4 md:px-12 md:py-6 bg-foreground text-background text-base md:text-xl font-semibold relative overflow-hidden"
            >
              <span className="relative z-10">Start a Project</span>
              <Play className="w-6 h-6 relative z-10" fill="currentColor" />
              <motion.div
                className="absolute inset-0 bg-accent"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-border">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-6">
            {/* Logo */}
            <motion.a
              href="#"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative group flex items-center gap-3"
            >
              <h1 className="text-lg font-black tracking-tight text-white sm:text-xl md:text-2xl">
                STUDIOX<span className="text-accent">.</span>
              </h1>

              <div className="relative hidden h-6 overflow-hidden sm:block">
                <motion.div
                  animate={{
                    y: [0, 0, -24, -24, -48, -48, -72, -72],
                  }}
                  transition={{
                    duration: 6,
                    times: [0, 0.28, 0.56, 1],
                    repeat: Infinity,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className="flex flex-col"
                >
                  <span
                    className="h-6 text-sm italic tracking-[0.15em] text-zinc-400"
                    style={{ fontFamily: "cursive" }}
                  >
                    Edits
                  </span>
                  <span
                    className="h-6 text-sm italic tracking-[0.15em] text-zinc-400"
                    style={{ fontFamily: "cursive" }}
                  >
                    Creates
                  </span>
                  <span
                    className="h-6 text-sm italic tracking-[0.15em] text-zinc-400"
                    style={{ fontFamily: "cursive" }}
                  >
                    Directs
                  </span>
                  <span
                    className="h-6 text-sm italic tracking-[0.15em] text-zinc-400"
                    style={{ fontFamily: "cursive" }}
                  >
                    Edits
                  </span>
                </motion.div>
              </div>
            </motion.a>

            {/* Nav Links */}
            <nav className="flex flex-wrap justify-center items-center gap-4 sm:gap-8">
              {["Work", "About", "Testimonials", "Contact"].map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="text-muted-foreground hover:text-foreground transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </nav>

            {/* Right */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
              <span className="text-xs sm:text-sm text-muted-foreground text-center">
                &copy; {new Date().getFullYear()} All rights reserved
              </span>
              <motion.button
                onClick={scrollToTop}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 border border-border hover:border-accent hover:text-accent transition-all"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent origin-center"
      />
    </footer>
  )
}
