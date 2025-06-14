import { cn } from "@/lib/utils"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Star } from "lucide-react"

export interface TestimonialAuthor {
  name: string
  role: string
  avatar: string
  location?: string
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  rating?: number
  className?: string
}

export function TestimonialCard({ 
  author,
  text,
  rating = 5,
  className
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-xl border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg",
        "p-6 text-start max-w-[320px] sm:max-w-[350px]",
        className
      )}
      style={{ 
        backgroundColor: '#F9F6F1', 
        borderColor: '#DCD6CD' 
      }}
    >
      {/* Rating Stars */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-sm leading-relaxed mb-6" style={{ color: '#33373F' }}>
        "{text}"
      </p>

      {/* Author Info */}
      <div className="flex items-center gap-3 mt-auto">
        <Avatar className="h-12 w-12">
          <AvatarImage src={author.avatar} alt={author.name} />
          <AvatarFallback style={{ backgroundColor: '#DCD6CD', color: '#33373F' }}>
            {author.name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start">
          <h3 className="text-sm font-semibold leading-none" style={{ color: '#33373F' }}>
            {author.name}
          </h3>
          <p className="text-xs mt-1" style={{ color: '#8A8A8A' }}>
            {author.role}
          </p>
          {author.location && (
            <p className="text-xs" style={{ color: '#8A8A8A' }}>
              {author.location}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}