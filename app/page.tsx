'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Clock, Calendar, CreditCard, Bell, Users, BarChart3, FileText, Shield, Star, ChevronRight, Target, Zap, TrendingUp, DollarSign } from 'lucide-react';
import { AnimatedSection } from '@/components/animated-section';
import { TestimonialsMarquee } from '@/components/testimonials-marquee';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Check, Minus, MoveRight, PhoneCall } from "lucide-react";

const testimonials = [
  {
    author: {
      name: "Sarah",
      role: "Nottingham",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    text: "Honestly, just being able to check what I did with someone last week before they get in the car — that's the kind of thing I didn't realise I needed.",
    rating: 5
  },
  {
    author: {
      name: "Mike",
      role: "Ealing",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    text: "The idea of not chasing payments anymore... just getting a notification when it's sorted — that's a huge stress off my plate.",
    rating: 4
  },
  {
    author: {
      name: "Farah",
      role: "Bradford",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    text: "I get loads of 'my nephew wants to learn in September' type intros and never follow up. If it logs that and reminds me — that's free business.",
    rating: 5
  },
  {
    author: {
      name: "James",
      role: "Sussex",
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    text: "I've had so many ghost students over the years — Gearshift can send nudges and get them back in. That's money I'd normally lose.",
    rating: 4
  },
  {
    author: {
      name: "Priya",
      role: "Leicester",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    text: "I'm juggling WhatsApp, my calendar, notes, and a card reader. Gearshift can pull it all into one place and just work. That alone saves me hours.",
    rating: 4
  },
  {
    author: {
      name: "Doumie",
      role: "Manchester",
      avatar: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    text: "Gearshift can automatically remind students to renew their block bookings — that could stop the quiet spells I always seem to hit.",
    rating: 5
  },
  {
    author: {
      name: "Alan",
      role: "Norfolk",
      avatar: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    text: "Late cancellations used to mean wasted time. Gearshift can offer those slots to someone else automatically — that's basically found income.",
    rating: 4
  }
];

const roiCards = [
  {
    problem: "Wasted, empty slots",
    fix: "Empty windows sent to active students",
    revenue: "+£60–£90/mo",
    icon: Target
  },
  {
    problem: "Students ghosting you",
    fix: "Nudges inactive students to rebook",
    revenue: "+£100–£200/mo",
    icon: Zap
  },
  {
    problem: "Missed block top-ups",
    fix: "Automatic reminders to renew packages",
    revenue: "+£60–£90/mo",
    icon: TrendingUp
  },
  {
    problem: "Payment chasing",
    fix: "Instant card payments",
    revenue: "Faster cashflow",
    icon: DollarSign
  }
];

const howItWorksCards = [
  {
    before: "Two-hour gaps sit empty.",
    after: "GearShift text-blasts your wait-list and slot-fills in minutes.",
    image: "/Calv3tiny copy.gif"
  },
  {
    before: "Lose track of interested future learners.",
    after: "Clear log of potential leads with reminders at the right time.",
    image: "/ProspectiveLeads.jpeg"
  },
  {
    before: "Endless \"U free next week?\" WhatsApps.",
    after: "Students pre-pay 10-lesson blocks; diary auto-populates.",
    image: "/BlockPayments.jpeg"
  },
  {
    before: "Ghost students vanish after test-fails.",
    after: "Smart nudges revive them and auto-book the next lesson.",
    image: "/Nudgev3tiny.gif"
  },
  {
    before: "Scribbled lesson notes lost in the car.",
    after: "One tap logs progress and sets the next-lesson goal.",
    image: "/Progressv3tiny.gif"
  },
  {
    before: "\"Has Jamie paid yet?\" spreadsheet-hunting.",
    after: "Card is charged at booking—cash lands next morning.",
    image: "/Stripepicture2.png"
  }
];

const faqData = [
  {
    question: "Is this just another expense?",
    answer: "Nope — GearShift is designed to *make* you money. One extra lesson booked a month covers the full cost. Most instructors see more than that in week one."
  },
  {
    question: "I'm not great with tech — will it be complicated?",
    answer: "Not at all. If you can use WhatsApp or Facebook, you'll be fine. It's built to feel simple. And we'll guide you through setup in under 10 minutes."
  },
  {
    question: "I already use my phone calendar and WhatsApp — why switch?",
    answer: "That's the problem. Notes here, messages there, payments somewhere else — it's chaos. GearShift puts everything in one place so nothing falls through the cracks."
  },
  {
    question: "Will it take ages to set up?",
    answer: "No. You answer a few quick questions, and it's ready. Most instructors go from zero to live in under 10 minutes — and we're here if you get stuck."
  },
  {
    question: "What if students ghost me or stop replying?",
    answer: "GearShift nudges them automatically. It's like having an assistant chasing them for you — and they're much more likely to rebook when the reminder isn't from you."
  },
  {
    question: "Do I still need to chase payments?",
    answer: "Nope. Students get automatic reminders and can pay directly in the app. You just get a Stripe notification saying \"£200 received\" — job done."
  },
  {
    question: "Is this secure?",
    answer: "Yes — everything runs through Stripe and follows strict data protection rules. We don't mess about when it comes to security."
  },
  {
    question: "What if I just want to keep it simple?",
    answer: "Then this is made for you. It removes the faff. No spreadsheets, no chasing. Just one tap to offer a slot, log a lesson, or take a payment."
  },
  {
    question: "Can I try it without paying?",
    answer: "Absolutely — the beta test is a trial without payment to begin with. You'll know within days if it's for you. No pressure."
  }
];

export default function GearshiftLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#ECE6DC' }}>
      {/* Sticky Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b opacity-0 animate-fade-in" style={{ borderColor: '#DCD6CD' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <img 
                  src="/Gearshift Logo Final.png" 
                  alt="Gearshift Logo" 
                  className="h-8 w-auto"
                />
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Button className="text-white font-medium" style={{ backgroundColor: '#4CAF75' }}>
                  Sign up for trial
                </Button>
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md transition-colors"
                style={{ color: '#33373F' }}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t" style={{ borderColor: '#DCD6CD' }}>
              <div className="px-3 py-2">
                <Button className="w-full text-white font-medium" style={{ backgroundColor: '#4CAF75' }}>
                  Sign up for trial
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <AnimatedSection className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content Column */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 opacity-0 animate-fade-in-up delay-200" style={{ color: '#33373F' }}>
                Your empty slots are costing you £300 a month. <span style={{ color: '#4CAF75' }}>Gearshift fixes that.</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-0 animate-fade-in-up delay-400" style={{ color: '#8A8A8A' }}>
                Stop juggling WhatsApp, notes and late payments. Gearshift fills your diary and gets you paid.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-in-up delay-600">
                <Button size="lg" className="text-white font-medium px-8 py-4 text-lg" style={{ backgroundColor: '#4CAF75' }}>
                  Sign up for trial
                </Button>
              </div>
            </div>

            {/* Image Column - Desktop: Right side, Mobile: Below content */}
            <div className="order-last lg:order-none">
              <div className="opacity-0 animate-fade-in-up delay-800">
                <img 
                  src="/Gearshift dashboard.png" 
                  alt="Gearshift Dashboard Preview" 
                  className="w-full h-auto rounded-2xl shadow-lg border"
                  style={{ borderColor: '#DCD6CD' }}
                />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ROI Cards Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#33373F' }}>
              Pays for itself with just one extra lesson a month
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roiCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <div 
                  key={index}
                  className="p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                  style={{ backgroundColor: '#F7F5F2' }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#ECE6DC' }}>
                      <IconComponent className="h-6 w-6" style={{ color: '#4CAF75' }} />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: '#8A8A8A' }}>
                        {card.problem}
                      </div>
                      <h3 className="text-lg font-semibold mb-3" style={{ color: '#33373F' }}>
                        {card.fix}
                      </h3>
                      <div className="text-xl font-bold" style={{ color: '#4CAF75' }}>
                        {card.revenue}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Orange Button */}
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="text-white font-medium px-8 py-4 text-lg hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#F29E4C' }}
            >
              Find out how much cash you're missing out on at the moment
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* How It Works Section */}
      <AnimatedSection className="py-20" id="features" style={{ backgroundColor: '#ECE6DC' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#33373F' }}>
              How It Works
            </h2>
          </div>

          {/* Desktop 2-Column Grid - Vertical Scroll */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-8">
            {howItWorksCards.map((card, index) => (
              <div 
                key={index}
                className="rounded-3xl shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden"
                style={{ backgroundColor: '#F7F5F2' }}
              >
                <div className="grid grid-cols-2 items-center min-h-[400px]">
                  {/* Text Content */}
                  <div className="p-8">
                    <div className="max-w-md">
                      <div className="text-sm font-medium mb-4 px-3 py-1 rounded-full inline-block" style={{ backgroundColor: '#ECE6DC', color: '#8A8A8A' }}>
                        Before
                      </div>
                      <p className="text-base mb-6" style={{ color: '#8A8A8A' }}>
                        {card.before}
                      </p>
                      <div className="text-sm font-medium mb-4 px-3 py-1 rounded-full inline-block" style={{ backgroundColor: '#4CAF75', color: 'white' }}>
                        After
                      </div>
                      <h3 className="text-xl font-bold leading-tight" style={{ color: '#33373F' }}>
                        {card.after}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Media Content */}
                  <div className="p-6 flex items-center justify-center">
                    <div className="w-full max-w-sm">
                      {card.image.endsWith('.gif') || card.image.endsWith('.png') || card.image.endsWith('.jpeg') ? (
                        <img 
                          src={card.image}
                          alt={`How it works step ${index + 1}`}
                          className="w-full h-auto rounded-2xl shadow-lg border-2"
                          style={{ borderColor: '#DCD6CD' }}
                        />
                      ) : (
                        <div 
                          className="w-full aspect-[3/4] rounded-2xl border-2 flex items-center justify-center"
                          style={{ backgroundColor: '#ECE6DC', borderColor: '#DCD6CD' }}
                        >
                          <span className="text-sm font-medium" style={{ color: '#8A8A8A' }}>
                            Coming Soon
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tablet Layout */}
          <div className="hidden md:block lg:hidden">
            <div className="grid grid-cols-1 gap-8">
              {howItWorksCards.map((card, index) => (
                <div 
                  key={index}
                  className="rounded-3xl shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden"
                  style={{ backgroundColor: '#F7F5F2' }}
                >
                  <div className="p-8">
                    <div className="grid grid-cols-2 gap-8 items-center">
                      {/* Text Content */}
                      <div>
                        <div className="text-sm font-medium mb-3 px-3 py-1 rounded-full inline-block" style={{ backgroundColor: '#ECE6DC', color: '#8A8A8A' }}>
                          Before
                        </div>
                        <p className="text-base mb-4" style={{ color: '#8A8A8A' }}>
                          {card.before}
                        </p>
                        <div className="text-sm font-medium mb-3 px-3 py-1 rounded-full inline-block" style={{ backgroundColor: '#4CAF75', color: 'white' }}>
                          After
                        </div>
                        <h3 className="text-xl font-bold leading-tight" style={{ color: '#33373F' }}>
                          {card.after}
                        </h3>
                      </div>
                      
                      {/* Media Content */}
                      <div className="flex items-center justify-center">
                        {card.image.endsWith('.gif') || card.image.endsWith('.png') || card.image.endsWith('.jpeg') ? (
                          <img 
                            src={card.image} 
                            alt={`How it works step ${index + 1}`}
                            className="w-full max-w-xs h-auto rounded-2xl shadow-lg border-2"
                            style={{ borderColor: '#DCD6CD' }}
                          />
                        ) : (
                          <div 
                            className="w-full max-w-xs aspect-[3/4] rounded-2xl border-2 flex items-center justify-center"
                            style={{ backgroundColor: '#ECE6DC', borderColor: '#DCD6CD' }}
                          >
                            <span className="text-sm font-medium" style={{ color: '#8A8A8A' }}>
                              Coming Soon
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Horizontal Scroll - UNCHANGED */}
          <div className="md:hidden">
            <div className="flex gap-6 overflow-x-auto pb-4 px-4 -mx-4 scrollbar-hide">
              {howItWorksCards.map((card, index) => (
                <div 
                  key={index}
                  className="flex-none w-80 rounded-3xl shadow-sm overflow-hidden"
                  style={{ backgroundColor: '#F7F5F2' }}
                >
                  <div className="p-6">
                    <div className="text-sm font-medium mb-3 px-3 py-1 rounded-full inline-block" style={{ backgroundColor: '#ECE6DC', color: '#8A8A8A' }}>
                      Before
                    </div>
                    <p className="text-sm mb-4" style={{ color: '#8A8A8A' }}>
                      {card.before}
                    </p>
                    <div className="text-sm font-medium mb-3 px-3 py-1 rounded-full inline-block" style={{ backgroundColor: '#4CAF75', color: 'white' }}>
                      After
                    </div>
                    <h3 className="text-lg font-bold mb-6 leading-tight" style={{ color: '#33373F' }}>
                      {card.after}
                    </h3>
                    
                    {/* Media Content */}
                    <div className="flex justify-center">
                      {card.image.endsWith('.gif') || card.image.endsWith('.png') || card.image.endsWith('.jpeg') ? (
                        <img 
                          src={card.image} 
                          alt={`How it works step ${index + 1}`}
                          className="w-full max-w-xs h-auto rounded-2xl shadow-lg border-2"
                          style={{ borderColor: '#DCD6CD' }}
                        />
                      ) : (
                        <div 
                          className="w-full max-w-xs aspect-[3/4] rounded-2xl border-2 flex items-center justify-center"
                          style={{ backgroundColor: '#ECE6DC', borderColor: '#DCD6CD' }}
                        >
                          <span className="text-sm font-medium" style={{ color: '#8A8A8A' }}>
                            Coming Soon
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials Section */}
      <TestimonialsMarquee
        title="What We're Hearing"
        testimonials={testimonials}
        className="py-20 bg-white"
        id="testimonials"
      />

      {/* FAQ Section */}
      <AnimatedSection className="py-20" style={{ backgroundColor: '#ECE6DC' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#33373F' }}>
              Not quite convinced? Here's some Q&A
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="rounded-2xl border-0 shadow-sm"
                style={{ backgroundColor: '#F7F5F2' }}
              >
                <AccordionTrigger 
                  className="px-8 py-6 text-left text-lg font-semibold hover:no-underline"
                  style={{ color: '#33373F' }}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent 
                  className="px-8 pb-6 text-base leading-relaxed"
                  style={{ color: '#8A8A8A' }}
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: '#33373F' }}>
            Ready to recover all that revenue you've been missing out on?
          </h2>
          <div className="flex justify-center">
            <Button size="lg" className="text-white font-medium px-8 py-4 text-lg" style={{ backgroundColor: '#4CAF75' }}>
              Sign up for trial
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="bg-white py-8 border-t" style={{ borderColor: '#DCD6CD' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm" style={{ color: '#8A8A8A' }}>
            © 2025 Gearshift. All rights reserved. Sign-up registers interest for beta testing and news.
          </p>
        </div>
      </footer>
    </div>
  );
}