import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import ProcessFlow from "@/components/process-flow"
import { WorkSection } from "@/components/work-section"
import { ReelShowcase } from "@/components/reel-showcase"
import { AboutSection } from "@/components/about-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d0d0d]">
      <Header />
      <Hero />
      {/* <ProcessFlow /> */}
      <WorkSection />
      <div id="reels">
        <ReelShowcase />
      </div>
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
