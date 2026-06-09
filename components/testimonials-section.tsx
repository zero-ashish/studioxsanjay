"use client"

import { useRef } from "react"
import { motion, useScroll } from "framer-motion"
import { Quote, Star, Play } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Creative Director",
    company: "Nike",
    quote: "The quality of Sanjay's editing made a huge difference to our content. His transitions, timing, and attention to detail helped bring our vision to life. Highly recommended.",
    rating: 5,
    featured: true,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    videoThumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    name: "David Park",
    role: "Documentary Producer",
    company: "Netflix",
    quote: "Sanjay has a great eye for detail and storytelling. He transformed raw footage into an engaging video that kept viewers hooked from start to finish. I would happily work with him again.",
    rating: 5,
    featured: true,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    videoThumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    name: "FoodForFoodies",
    role: "Content creator",
    company: "",
    quote: "The quality of Sanjay's editing made a huge difference to our content. His transitions, timing, and attention to detail helped bring our vision to life. Highly recommended.",
    rating: 5,
    featured: false,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
  },
  {
    id: 4,
    name: "Anjali Sondhiya",
    role: "Content creator",
    company: "",
    quote: "Sanjay is reliable, talented, and easy to work with. He understood the style we were aiming for and delivered a final product that felt polished and engaging. Looking forward to future projects together.",
    rating: 5,
    featured: false,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
  },
  {
    id: 5,
    name: "Aksh Verma",
    role: "Content creator",
    company: "",
    quote: "Sanjay has a great eye for detail and storytelling. He transformed raw footage into an engaging video that kept viewers hooked from start to finish. I would happily work with him again.",
    rating: 5,
    featured: false,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
  },
]

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-card border border-border p-6 md:p-8 hover:border-accent/50 transition-all duration-500"
    >
      {/* Quote Icon */}
      <Quote className="w-10 h-10 text-accent/20 mb-6" />
      
      {/* Stars */}
      <div className="flex gap-1 mb-6">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-base md:text-lg leading-relaxed mb-8">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4">
        {/* <motion.img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-14 h-14 object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        /> */}
        <div>
          <div className="font-display font-semibold">{testimonial.name}</div>
          <div className="text-sm text-muted-foreground">
            {testimonial.role}, {testimonial.company}
          </div>
        </div>
      </div>

      {/* Hover Effect Line */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-accent"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}

function FeaturedTestimonial({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative bg-card border border-border overflow-hidden group"
    >
      <div className="grid md:grid-cols-2">
        {/* Video Thumbnail */}
        <div className="relative aspect-video md:aspect-auto overflow-hidden">
          <motion.img
            src={testimonial.videoThumbnail}
            alt={`${testimonial.name} video testimonial`}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-background/30 flex items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-20 h-20 bg-accent flex items-center justify-center"
            >
              <Play className="w-8 h-8 text-background ml-1" fill="currentColor" />
            </motion.button>
          </div>
          <div className="absolute top-4 left-4 px-3 py-1 bg-accent text-background text-xs font-medium uppercase tracking-wider">
            Video Testimonial
          </div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <Quote className="w-12 h-12 text-accent/30 mb-6" />
          
          <blockquote className="text-xl md:text-2xl font-light leading-relaxed mb-8">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-14 h-14 object-cover"
              />
              <div>
                <div className="font-display font-semibold text-lg">{testimonial.name}</div>
                <div className="text-muted-foreground">
                  {testimonial.role}, {testimonial.company}
                </div>
              </div>
            </div>
            
            <div className="flex gap-1">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const featured = testimonials.filter(t => t.featured)
  const others = testimonials.filter(t => !t.featured)

  return (
    <section id="testimonials" ref={containerRef} className="py-20 md:py-32 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 md:mb-20"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <span className="text-accent text-sm tracking-[0.2em] uppercase block mb-6">
                Testimonials
              </span>
              <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1]">
                Words from
                <br />
                <span className="text-muted-foreground">collaborators</span>
              </h2>
            </div>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-base md:text-xl text-muted-foreground max-w-lg"
            >
              Hear from the brands and creators I have had the privilege to collaborate with 
              over the past 2 years.
            </motion.p>
          </div>
        </motion.div>

        {/* Featured Video Testimonials */}
        {/* <div className="space-y-8 mb-16">
          {featured.map((testimonial) => (
            <FeaturedTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div> */}

        {/* Other Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {others.map((testimonial, i) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={i} />
          ))}
        </div>

        {/* Scrolling Marquee */}
        {/* <motion.div 
          className="mt-24 py-8 border-y border-border overflow-hidden"
        >
          <motion.div 
            style={{ x }}
            className="flex gap-8 whitespace-nowrap"
          >
            {[...Array(3)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-8 items-center">
                {["Nike", "Netflix", "Tesla", "HBO", "Apple", "Universal Music", "Porsche", "Spotify"].map((brand, i) => (
                  <span key={`${setIndex}-${i}`} className="font-display text-4xl md:text-5xl font-bold text-muted-foreground/30 flex items-center gap-8">
                    {brand}
                    <ArrowUpRight className="w-6 h-6" />
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </motion.div> */}
      </div>
    </section>
  )
}
