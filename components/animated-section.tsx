'use client';

import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSection({ children, className, delay = 0 }: AnimatedSectionProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  });

  return (
    <section
      ref={ref}
      className={cn(
        'opacity-0 translate-y-8 transition-all duration-700 ease-out',
        isIntersecting && 'opacity-100 translate-y-0',
        className
      )}
      style={{
        transitionDelay: isIntersecting ? `${delay}ms` : '0ms',
      }}
    >
      {children}
    </section>
  );
}