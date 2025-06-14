'use client';

import { cn } from "@/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"

interface TestimonialsMarqueeProps {
  title: string
  description?: string
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
    rating?: number
  }>
  className?: string
}

export function TestimonialsMarquee({ 
  title,
  description,
  testimonials,
  className 
}: TestimonialsMarqueeProps) {
  return (
    <section className={cn(
      "py-20",
      className
    )} style={{ backgroundColor: '#ECE6DC' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#33373F' }}>
            {title}
          </h2>
          {description && (
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#8A8A8A' }}>
              {description}
            </p>
          )}
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex overflow-hidden p-2 [--gap:1.5rem] [gap:var(--gap)] flex-row [--duration:240s]">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              {[...Array(50)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard 
                    key={`${setIndex}-${i}`}
                    {...testimonial}
                  />
                ))
              ))}
            </div>
          </div>

          {/* Gradient overlays for smooth fade effect */}
          <div 
            className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-[#ECE6DC] to-transparent" 
          />
          <div 
            className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-[#ECE6DC] to-transparent" 
          />
        </div>
      </div>
    </section>
  )
}