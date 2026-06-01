"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const nodes = [
  {
    title: "IDEATION",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop",
    x: "70%",
    y: "32%",
  },
  {
    title: "STRUCTURE",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    x: "20%",
    y: "48%",
  },
  {
    title: "RHYTHM",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200&auto=format&fit=crop",
    x: "72%",
    y: "64%",
  },
  {
    title: "SOUND",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop",
    x: "18%",
    y: "80%",
  },
  {
    title: "EMOTION",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    x: "72%",
    y: "92%",
  },
]

export default function ProcessFlow() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])

  const ballY = useTransform(scrollYProgress, [0, 1], ["28%", "94%"])

  return (
    <section
      ref={containerRef}
      className="relative z-10 h-[420vh] overflow-hidden bg-black pb-40"
    >
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* Header */}
        <div className="absolute left-1/2 top-12 z-30 -translate-x-1/2 text-center">

          {/*
          <div className="mb-5 flex justify-center">
            <div className="border-b border-accent pb-2">
              <p className="text-xs uppercase tracking-[0.35em] text-accent">
                THE PROCESS
              </p>
            </div>
          </div>
          */}

          {/*
          <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.06em] text-white md:text-6xl">
            Every edit follows
            <br />
            a <span className="text-accent italic">rhythm</span>
          </h2>
          */}
        </div>

        

        {/* Moving Ball */}
        {/* <motion.div
          style={{ top: ballY }}
          className="absolute left-1/2 z-30 h-6 w-6 -translate-x-1/2 rounded-full bg-white shadow-[0_0_40px_rgba(255,255,255,1)]"
        /> */}

        {/* Nodes */}
        {nodes.map((node, index) => {
          const start = 0.12 + index * 0.16
          const end = start + 0.10

          const opacity = useTransform(
            scrollYProgress,
            [start - 0.04, start, end, end + 0.04],
            [0, 0, 1, 1]
          )

          const scale = useTransform(
            scrollYProgress,
            [start, end],
            [0.8, 1]
          )

          return (
            <motion.div
              key={index}
              style={{
                opacity,
                scale,
                left: node.x,
                top: node.y,
              }}
              className="absolute z-20 w-[340px] -translate-x-1/2"
            >
              <div className="overflow-hidden rounded-[28px] border border-accent/30 bg-black/40 backdrop-blur-md">

                {/* Image */}
                <div className="relative h-[220px] overflow-hidden">
                  <img
                    src={node.image}
                    alt={node.title}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                </div>

                {/* Title */}
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-3xl font-black tracking-[-0.05em] text-white">
                    {node.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          )
        })}

        {/* Final Cut */}
        <motion.div
          style={{
            opacity: useTransform(scrollYProgress, [0.82, 1], [0, 1]),
            scale: useTransform(scrollYProgress, [0.82, 1], [0.8, 1]),
          }}
          className="absolute bottom-40 left-1/2 z-30 w-[70vw] max-w-5xl -translate-x-1/2 overflow-hidden rounded-[40px] border border-accent/30"
        >
          <div className="relative h-[60vh]">
            <img
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1600&auto=format&fit=crop"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          </div>

          <div className="absolute bottom-10 left-0 p-10 md:p-14">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-zinc-300">
              FINAL OUTPUT
            </p>

            <h2 className="text-6xl font-black tracking-[-0.06em] text-white md:text-8xl">
              FINAL CUT
            </h2>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
