"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { Menu, X, Play } from "lucide-react"

const navLinks = [
  { name: "Work", href: "#work" },
  { name: "Reels", href: "#reels" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  const { scrollYProgress } = useScroll()
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? "bg-black/60 backdrop-blur-2xl border-b border-white/10"
          : ""
          }`}
      >
        {/* Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-px bg-accent"
          style={{ width: progressWidth }}
        />

        <nav className="max-w-[1800px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="relative group flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-2 sm:gap-3">
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

                  {/* Duplicate first word for seamless loop */}
                  <span
                    className="h-6 text-sm italic tracking-[0.15em] text-zinc-400"
                    style={{ fontFamily: "cursive" }}
                  >
                    Edits
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center bg-[#1a1a1a]/50 border border-border/50 rounded-full px-2 py-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="relative px-5 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {hoveredLink === link.name && (
                    <motion.div
                      layoutId="navHover"
                      className="absolute inset-0 bg-accent/10 rounded-full"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-4">
            {/* Timecode Display */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-2 font-mono text-xs text-muted-foreground"
            >
            
            </motion.div>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white px-6 py-3 text-sm font-semibold text-black shadow-[0_6px_30px_rgba(255,255,255,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_40px_rgba(255,255,255,0.18)]"
            >
              <span >Let&apos;s Connect </span>
              <Play className="w-3.5 h-3.5 relative z-10" fill="currentColor" />
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="md:hidden relative w-10 h-10 flex items-center justify-center border border-border"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#0d0d0d] md:hidden"
          >
            {/* Grid Background */}
            <div className="absolute inset-0 opacity-5">
              <div className="w-full h-full" style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '50px 50px'
              }} />
            </div>

            <div className="relative h-full flex flex-col justify-center items-center px-6">
              {/* Nav Number */}
              <div className="absolute top-24 left-6 font-mono text-6xl font-bold text-accent/10">
                NAV
              </div>

              {navLinks.map((link, i) => (
                <div key={link.name} className="overflow-hidden">
                  <motion.a
                    href={link.href}
                    initial={{ y: 80 }}
                    animate={{ y: 0 }}
                    exit={{ y: 80 }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.1,
                      ease: [0.33, 1, 0.68, 1]
                    }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="group flex items-center gap-4 py-4"
                  >
                    <span className="font-mono text-sm text-accent">0{i + 1}</span>
                    <span className="text-4xl sm:text-5xl font-bold hover:text-accent transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
                      {link.name}
                    </span>
                  </motion.a>
                </div>
              ))}

              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.5 }}
                onClick={() => setMobileMenuOpen(false)}
                className="mt-12 flex items-center gap-2 px-8 py-4 bg-accent text-black text-lg font-medium"
              >
                Start a Project
                <Play className="w-4 h-4" fill="currentColor" />
              </motion.a>

              {/* Bottom Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-12 left-6 right-6 flex justify-between text-sm text-muted-foreground"
              >
                <span>Based in Los Angeles</span>
                <span className="font-mono">2024</span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
