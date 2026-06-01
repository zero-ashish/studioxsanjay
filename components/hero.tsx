"use client"

import { motion } from "framer-motion"
import { Play, ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      >
        <source src="/showreel.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black" />

      {/* Top cinematic glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[240px] w-[90vw] max-w-[600px] rounded-full bg-white/10 blur-3xl" />

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-5 pt-28 md:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 text-[10px] uppercase tracking-[0.3em] text-zinc-400 sm:text-sm sm:tracking-[0.35em]"
          >
            VIDEO EDITOR • STORYTELLER • CREATIVE
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="text-4xl font-bold leading-tight text-white sm:text-6xl md:text-8xl"
          >
            I Turn{" "}
            <span className="italic text-zinc-300">
              Raw Footage
            </span>

            <br />

            Into{" "}
            <span className="text-accent">
              Scroll-Stopping
            </span>

            <br />

            Stories

          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mx-auto mt-8 max-w-3xl text-center text-base leading-relaxed text-zinc-300 md:mt-10 md:text-xl"
          >
            Premium video editing for brands, creators, ads, reels, and cinematic storytelling.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:mt-10 sm:w-auto sm:flex-row"
          >
            <a
              href="#work"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition hover:scale-105 sm:w-auto"
            >
              <Play className="h-4 w-4 fill-black" />
              View Showreel
            </a>

            <a
              href="#contact"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur transition hover:bg-white hover:text-black sm:w-auto"
            >
              Hire Me
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>


        {/* Cinematic Timeline Preview */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="relative mx-auto mt-16 w-fit max-w-[94vw] md:mt-24"
        >
          {/* Outer Glow */}
          <div className="absolute inset-0 rounded-[32px] bg-cyan-500/10 blur-3xl" />

          {/* Main Frame */}
          <div className="relative overflow-hidden rounded-[16px] border border-white/10 bg-black/40 shadow-[0_20px_60px_rgba(0,0,0,0.45)] md:rounded-[20px]">

            {/* Top Border Glow */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />

            {/* Timeline Image */}
            <img
              src="/Timeline.png"
              alt="Editing Timeline"
              className="w-full h-auto object-contain"
            />

            {/* Bottom Gradient */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
