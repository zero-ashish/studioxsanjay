"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Mail, MapPin, Phone, Send, ArrowUpRight, Check } from "lucide-react"

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)
  
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const projectTypes = [
    { value: "short", label: "Short Reels", desc: "15-60 seconds" },
    { value: "long", label: "Long Form", desc: "Documentaries, Films" },
    { value: "commercial", label: "Commercial", desc: "Ads, Promos" },
    { value: "music", label: "Music Video", desc: "Full production" },
  ]

  return (
    <section id="contact" ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          style={{ y }}
          className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-accent text-sm tracking-[0.2em] uppercase block mb-6">
            Contact
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
            Let&apos;s create
            <br />
            <span className="text-muted-foreground">together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your vision to life? Drop me a line and let&apos;s discuss your next project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-8"
          >
            {/* Info Cards */}
            <div className="space-y-4">
              {[
                { icon: Mail, label: "Email", value: "thesanjaysondhiya@gmail.com", href: "mailto:thesanjaysondhiya@gmail.com" },
                { icon: Phone, label: "Mobile", value: "+91 80905 64901", href: "tel:+918090564901" },
                { icon: MapPin, label: "Location", value: "Prayagraj, UP", href: "#" },
              ].map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex items-center gap-4 p-6 bg-card border border-border hover:border-accent transition-all"
                >
                  <div className="p-3 bg-secondary group-hover:bg-accent transition-colors">
                    <item.icon className="w-5 h-5 group-hover:text-background transition-colors" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{item.label}</div>
                    <div className="font-medium">{item.value}</div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-8"
          >
            <form onSubmit={handleSubmit} className="bg-card border border-border p-8 md:p-12">
              {/* Project Type Selection */}
              <div className="mb-10">
                <label className="block text-sm uppercase tracking-wider text-muted-foreground mb-4">
                  What type of project?
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {projectTypes.map((type) => (
                    <motion.button
                      key={type.value}
                      type="button"
                      onClick={() => setFormState({ ...formState, projectType: type.value })}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`p-4 text-left border transition-all ${
                        formState.projectType === type.value
                          ? "border-accent bg-accent/10"
                          : "border-border hover:border-accent/50"
                      }`}
                    >
                      <div className="font-medium mb-1">{type.label}</div>
                      <div className="text-xs text-muted-foreground">{type.desc}</div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Form Fields */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {[
                  { id: "name", label: "Your Name", type: "text", placeholder: "John Smith" },
                  { id: "email", label: "Email Address", type: "email", placeholder: "john@company.com" },
                ].map((field) => (
                  <div key={field.id} className="relative">
                    <label 
                      htmlFor={field.id} 
                      className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                        focusedField === field.id || formState[field.id as keyof typeof formState]
                          ? "top-2 text-xs text-accent"
                          : "top-1/2 -translate-y-1/2 text-muted-foreground"
                      }`}
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      value={formState[field.id as keyof typeof formState]}
                      onChange={(e) => setFormState({ ...formState, [field.id]: e.target.value })}
                      onFocus={() => setFocusedField(field.id)}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 pt-7 pb-3 bg-secondary border border-border focus:border-accent focus:outline-none transition-colors"
                      required
                    />
                  </div>
                ))}
              </div>

              {/* Message */}
              <div className="mb-8">
                <label htmlFor="message" className="block text-sm uppercase tracking-wider text-muted-foreground mb-4">
                  Tell me about your project
                </label>
                <textarea
                  id="message"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-4 bg-secondary border border-border focus:border-accent focus:outline-none transition-colors resize-none"
                  placeholder="Describe your vision, timeline, and any specific requirements..."
                  required
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                disabled={isSubmitted}
                className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-foreground text-background font-medium text-lg relative overflow-hidden group disabled:opacity-70"
              >
                <motion.div
                  className="absolute inset-0 bg-accent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center gap-3">
                  {isSubmitted ? (
                    <>
                      <Check className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
